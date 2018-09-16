using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        readonly ILogger<UserController> log;
        private readonly SaymedbContext context;

        public PostController(SaymedbContext context)
        {
            this.context = context;
        }  
        
        [HttpGet]
        public IEnumerable<PostTransport> Get()
        {
            var posts = context.Post.ToList();
            var users = context.User.ToList();
            List<PostTransport> sendingPosts = new List<PostTransport>();

            foreach (Post post in posts)
            {
                sendingPosts.Add(new PostTransport(post));
            }
            
            foreach(PostTransport post in sendingPosts)
            {
                foreach (User user in users)
                {
                    if (post.id_user == user.id)
                    {
                        post.username = user.login;
                        post.avatar=user.avatar;
                    }
                }
            }

            return sendingPosts;
        }

        [HttpGet("{id}")]
        public IEnumerable<PostTransport> GetByUserId(long id)
        {
            var posts = context.Post.ToList();
            List<PostTransport> sendingPosts = new List<PostTransport>();

            foreach (Post post in posts)
            {
                if (post.id_user == id)
                {
                    sendingPosts.Add(new PostTransport(post));
                }
            }

            foreach(PostTransport post in sendingPosts)
            {
                post.username = "";
            }

            return sendingPosts;
        }


        [HttpPost]
        public IActionResult Post([FromBody]Post postTransport)
        {
            if(ModelState.IsValid)
            {
                context.Post.Add(postTransport);
                context.SaveChanges();
                return Ok(postTransport);
            }
            return BadRequest(ModelState);
        } 
        
        [Route("update")]
        [HttpPost]
        public IActionResult Update([FromBody]Post postTransport)
        {
            if(ModelState.IsValid)
            {
                var editedPost = context.Post
                    .Where(c => c.id == postTransport.id)
                    .FirstOrDefault();
                editedPost.message = postTransport.message;
                context.SaveChanges();
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
    
}