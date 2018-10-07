using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LikeController: ControllerBase
    {
        readonly ILogger<UserController> log;
        private readonly SaymedbContext context;

        public LikeController (SaymedbContext context)
        {
            this.context = context;
        }

        [HttpGet("like")]
        public IActionResult Like ()
        {
            long id_user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username")).id;
            long id_post = Convert.ToInt64(Request.Headers["id_post"]);

            if (context.LikePost.FirstOrDefault(l => (l.id_user==id_user && l.id_post==id_post)) !=null)
            {
                context.LikePost.Remove(context.LikePost.FirstOrDefault(l => (l.id_user == id_user && l.id_post == id_post)));
            }
            else
            {
                LikePost like = new LikePost(id_user, id_post, true);
                context.LikePost.Add(like);
            }
            context.SaveChanges();
            return Ok();
        }

        [HttpGet("countLikes")]
        public IActionResult CountLikes ()
        {
            long id_post = Convert.ToInt64(Request.Headers["id_post"]);
            int num = context.LikePost.Count(l => l.id_post == id_post);
            return Ok(num);
        }

        [HttpGet("checkIfLiked")]
        public IActionResult CheckIfLiked ()
        {
            long id_user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username")).id;
            long id_post = Convert.ToInt64(Request.Headers["id_post"]);

            bool check = context.LikePost.Where(l => (l.id_user == id_user && l.id_post == id_post)).Count()==1? true:false;

            return Ok(check);
        }
        
    }
}

