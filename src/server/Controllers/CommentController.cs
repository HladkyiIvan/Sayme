using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        readonly ILogger<UserController> log;
        private readonly SaymedbContext context;

        public CommentController(SaymedbContext context)
        {
            this.context = context;
        }

        [HttpPost("next")]
        public IEnumerable<CommentTransport> GetNextComments([FromBody]CommentState cs)
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            List<Comment> comments = new List<Comment>();

            if (cs.lastCommentId == -1)
            {
                comments = context.Comment.Where(comment => comment.id_post==cs.postId)
                                    .OrderByDescending(comment => comment.id)
                                    .Take(20).ToList();
            }
            else {
                comments = context.Comment.Where(comment => comment.id_post == cs.postId)
                    .OrderByDescending(comment => comment.id)
                    .Where(comment => cs.lastCommentId > comment.id)
                    .Take(20).ToList();
            }

            var users = (from u in context.User
                         from p in comments
                         where u.id == p.id_user
                         select u).ToList();

            List<CommentTransport> sendingComments = new List<CommentTransport>();

            foreach (Comment comment in comments)
            {
                if(user != null && user.id==comment.id_user) sendingComments.Add(new CommentTransport(comment,true));
                else sendingComments.Add(new CommentTransport(comment,false));
            }

            foreach (CommentTransport comment in sendingComments)
            {
                foreach (User currUser in users)
                {
                    if (comment.id_user == currUser.id)
                    {
                        comment.username = currUser.login;
                        comment.avatar = currUser.avatar;
                    }
                }
            }
            return sendingComments;
        }

        [HttpPost("add")]
        public IActionResult AddComment([FromBody]Comment comment)
        {
            if (ModelState.IsValid)
            {
                comment.id_user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username")).id;
                context.Comment.Add(comment);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("delete")]
       public IActionResult DeleteComment([FromBody]Comment comment)
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            Comment realComment = context.Comment.FirstOrDefault(c => c.id == comment.id);
            if (ModelState.IsValid && realComment.id_user == user.id)
            {
                context.Comment.Remove(realComment);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }
    }

}