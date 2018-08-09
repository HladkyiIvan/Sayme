using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly SaymedbContext _context;

        public UserController(SaymedbContext context)
        {
            _context = context;
        }  
        
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.User.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> Get(long id)
        {
            var item = _context.User.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        } 

        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            if(ModelState.IsValid)
            {
                _context.User.Add(user);
                _context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        } 
    }
    
}