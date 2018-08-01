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
        private readonly PostContext _postcontext;
        private readonly UsersContext _userscontext;

        public PostController(PostContext context, UsersContext userscontext)
        {
            _postcontext = context;
            _userscontext = userscontext;
        }  
        
        [HttpGet]
        public IEnumerable<PostTransport> Get()
        {
            var posts = _postcontext.Post.ToList();
            var users = _userscontext.Users.ToList();
            List<PostTransport> sendingPosts = new List<PostTransport>();

            foreach (Post post in posts)
            {
                sendingPosts.Add(new PostTransport(post));
            }

            foreach(PostTransport post in sendingPosts)
            {
                foreach (Users user in users)
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
            var item = _postcontext.Post.Find(id);
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
                _postcontext.Post.Add(postTransport);
                _postcontext.SaveChanges();
                return Ok(postTransport);
            }
            return BadRequest(ModelState);
        } 
    }
    
}