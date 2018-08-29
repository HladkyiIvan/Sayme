using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly SaymedbContext context;

        public UserController(SaymedbContext context)
        {
            this.context = context;
        }  
        
        
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return context.User.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> Get(long id)
        {
            var item = context.User.Find(id);
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
                context.User.Add(user);
                context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        } 
    }
    
}