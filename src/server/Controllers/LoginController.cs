using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.AspNetCore.Http;


namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private const string Error = "there is no users with this password and login";
        private readonly SaymedbContext context;

        public LoginController(SaymedbContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody]AuthUser authUser)
        {
            if (ModelState.IsValid)
            {
                if (context.User.FirstOrDefault(u => (u.login == authUser.login && u.password == authUser.password)) != null)
                {
                    return Ok(ModelState);
                }
                else return BadRequest(Error);
            }
            return BadRequest(ModelState);
        }



        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();

            if (expireTime.HasValue)
                option.Expires = System.DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = System.DateTime.Now.AddMilliseconds(10);

            Response.Cookies.Append(key, value, option);
        }


        public void Remove(string key)
        {
            Response.Cookies.Delete(key);
        }
        /*[HttpPost]
        public IActionResult Post([FromBody]Post postTransport)
        {
            // Post post = new Post(postTransport); 

            if(ModelState.IsValid)
            {
                context.Post.Add(postTransport);
                context.SaveChanges();
                return Ok(postTransport);
            }
            return BadRequest(ModelState);
        } */
    }

}