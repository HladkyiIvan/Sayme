using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using System.IdentityModel;
using Microsoft.AspNetCore.Authentication;


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
            // if (ModelState.IsValid)
            // {
            //     if (LoginUser(authUser))
            //     {
            //         var claims = new List<Claim>
            //         {
            //         new Claim(ClaimTypes.Name, authUser.login)
            //         };

            //         var userIdentity = new ClaimsIdentity(claims, "login");

            //         ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
            //         HttpContext.SignInAsync(principal);

            //         //Just redirect to our index after logging in. 
            //         return Ok(ModelState);
            //     }
            //     else return BadRequest(Error);
            // }
            // return BadRequest(ModelState);

            if (ModelState.IsValid)
            {
                if (context.User.FirstOrDefault(u => (u.login == authUser.login && u.password == authUser.password)) != null)
                {
                    string cookieValueFromReq = Request.Cookies["access"];
                    if (cookieValueFromReq == null)
                    {
                        Set("access", authUser.login, 50);
                    }
                    return Ok(ModelState);
                }
                else return BadRequest(Error);
            }
            return BadRequest(ModelState);
        }



        private bool LoginUser(AuthUser authUser)
        {
            if (context.User.FirstOrDefault(u => (u.login == authUser.login && u.password == authUser.password)) != null)
                return true;
            else return false;
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