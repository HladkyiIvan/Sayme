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
using System.Security.Cryptography;
using System;

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

        [HttpGet("current")]
        public ActionResult<User> GetCurrent()
        {
            var user=context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
            if(user==null) 
            return NotFound();
            return user; 
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

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            if (ModelState.IsValid)
            {
                context.User.Add(user);
                context.SaveChanges();
                log.LogInformation("User added");
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("checkpassword")]
        public IActionResult CheckPassword([FromBody]Code password)
        {
            try
            {
                var user = context.User.Find(Convert.ToInt64(HttpContext.Session.GetString("ID")));

                if (user == null)
                {
                    return NotFound();
                }

                MD5 md5 = MD5.Create();

                if (GetMd5Hash(md5, password.code) != user.password)
                {
                    return BadRequest();
                }

                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpPut("{id}")]
        public IActionResult UpdateImage(IFormFile image)
        {
            try
            {
                if (image == null || !ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var user = context.User.Find(Convert.ToInt64(HttpContext.Session.GetString("ID")));

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

        [HttpPut]
        [Route("bio")]
        public IActionResult UpdateBio(Code bio)
        {
            try
            {
                var oldUser = context.User.Find(Convert.ToInt64(HttpContext.Session.GetString("ID")));

                if (oldUser == null)
                {
                    return NotFound();
                }

                oldUser.bio = bio.code;

                context.User.Update(oldUser);
                context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        [Route("password")]
        public IActionResult UpdatePassword(Code password)
        {
            try
            {
                var oldUser = context.User.Find(Convert.ToInt64(HttpContext.Session.GetString("ID")));

                if (oldUser == null)
                {
                    return NotFound();
                }

                oldUser.password = password.code;

                context.User.Update(oldUser);
                context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private string GetMd5Hash(MD5 md5Hash, string input)
        {
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
            StringBuilder sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
    }

}