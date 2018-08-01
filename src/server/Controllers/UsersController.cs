using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersContext _context;

        public UsersController(UsersContext context)
        {
            _context = context;
        }  
        
        [HttpGet]
        public IEnumerable<Users> Get()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Users> Get(long id)
        {
            var item = _context.Users.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        } 

        [HttpPost]
        public IActionResult Post([FromBody]Users user)
        {
            if(ModelState.IsValid)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        } 
    }
    
}