using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly SaymedbContext _context;

        public PostController(SaymedbContext context)
        {
            _context = context;
        }  
        
        [HttpGet]
        public IEnumerable<PostTransport> Get()
        {
            var posts = _context.Post.ToList();
            var users = _context.User.ToList();
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
            var item = _context.Post.Find(id);
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
                _context.Post.Add(postTransport);
                _context.SaveChanges();
                return Ok(postTransport);
            }
            return BadRequest(ModelState);
        } 
    }
    
}