using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.Extensions.Logging;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly ILogger<UserController> log;
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
                log.LogDebug("user model is valid");
                context.User.Add(user);
                context.SaveChanges();
                log.LogInformation("User was created");
                return Ok(user);
            }
            log.LogWarning("user model is not valid");
            return BadRequest(ModelState);
        } 
    }
    
}