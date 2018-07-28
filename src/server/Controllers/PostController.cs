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

            if (!_context.Posts.Any())
            {
                _context.Posts.Add(new Post { Text = "First post!", IdUser = 1 });
                _context.Posts.Add(new Post { Text = "Second post!", IdUser = 2 });
                _context.SaveChanges();
            }
        }  
        
        [HttpGet]
        [Route("getAllPosts")] 
        public IEnumerable<Post> GetAll()
        {
            return _context.Posts.ToList();
        }

        [HttpGet("{id}")]
        [Route("getPost")] 
        public ActionResult<Post> GetById(long id)
        {
            var item = _context.Posts.Find(id);
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
            _context.Posts.Add(new Post {  
                    Text = item.Text,  
                    IdUser = 1 // TO DO
            });  
            _context.SaveChanges();  
            return Ok(new {  
                message = "Post is added successfully."  
            });  
        }      
    }
    
}