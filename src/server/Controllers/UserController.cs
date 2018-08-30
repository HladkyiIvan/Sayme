using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
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
                context.User.Add(user);
                context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        // [HttpPut("{id}")]
        // public IActionResult Put([FromBody] User newUser)
        // {
        //     // var oldUser = context.User.Find(newUser.id);

        //     // if (oldUser == null)
        //     // {
        //     //     return NotFound();
        //     // }

        //     // oldUser.avatar = System.Convert.FromBase64String(newUser.avatar);
        //     // oldUser.bio = newUser.bio;
        //     // oldUser.login = newUser.login;
        //     // oldUser.mail = newUser.mail;
        //     // oldUser.password = newUser.password;

        //     // context.User.Update(oldUser);
        //     // context.SaveChanges();
        //     return NoContent();
        // }
        [HttpPut("{id}")]
        public IActionResult UpdateImage(IFormFile image)
        {
            try
            {
                
                if(image == null || !ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var user = context.User.Find((long)32);

                if (user == null)
                {
                    return NotFound();
                }

                using (var memoryStream = new MemoryStream())
                {
                    image.CopyTo(memoryStream);
                    user.avatar = memoryStream.ToArray();
                }

                context.User.Update(user);
                context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }  
    }
    
}