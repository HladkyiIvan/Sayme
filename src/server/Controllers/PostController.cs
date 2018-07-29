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
        private readonly PostContext _context;

        public PostController(PostContext context)
        {
            _context = context;

            // if (!_context.Posts.Any())
            // {
            //     _context.Posts.Add(new Post { Text = "First post!", IdUser = 1 });
            //     _context.Posts.Add(new Post { Text = "Second post!", IdUser = 2 });
            //     _context.SaveChanges();
            // }
        }  
        
        [HttpGet]
        [Route("getAllPosts")] 
        public IEnumerable<Post> GetAll()
        {
            return _context.Post.ToList();
        }

        [HttpGet("{id}")]
        [Route("getPost")] 
        public ActionResult<Post> GetById(long id)
        {
            var item = _context.Post.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        } 

        [HttpPost]  
        [Route("addPost")]   
        public IActionResult Create([FromBody] Post item) {  
            // set bad request if post data is not provided in body  
            if (item == null) {  
                return BadRequest();  
            }  
            _context.Post.Add(new Post {  
                    message = item.message,  
                    id_user = 1 // TO DO
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Post is added successfully."  
            });  
        }      
    }
    
}