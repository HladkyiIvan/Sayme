using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.AspNetCore.Authorization;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
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


            

           /* var temp=from post in sendingPosts
                                let u=from user in users
                                where post.id_user == user.id
                                select user.login
                    select post.Set(p=>
                    {
                        p.username = u.FirstOrDefault();
                    });
                */    
            
            foreach(PostTransport post in sendingPosts)
            {
                foreach (User user in users)
                {
                    if (post.id_user == user.id)
                    {
                        post.username = user.login;
                    }
                }
            }

            return sendingPosts;
        }

        [HttpGet("{id}")]
        public ActionResult<Post> Get(long id)
        {
            var item = context.Post.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        } 

        [HttpPost]
        public IActionResult Post([FromBody]Post postTransport)
        {
            // Post post = new Post(postTransport); 

            if(ModelState.IsValid)
            {
                context.Post.Add(postTransport);
                context.SaveChanges();
                return Ok(postTransport);
            }
            return BadRequest(ModelState);
        } 
    }
    
}