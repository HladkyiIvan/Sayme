using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Claims;
using System;
using System.Web;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using System.Security.Cryptography;
using System.ComponentModel.DataAnnotations;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly SaymedbContext context;

        public AccountController(SaymedbContext context)
        {
            this.context = context;
        }


        [AllowAnonymous]
        [HttpPost("authorizate")]
        public IActionResult Authorizate(AuthUser user)
        {
            AuthUser authUser = Authenticate(user.id, user.login, user.password);

            if (authUser == null)
                return BadRequest(new { message = "Username or password are incorrect!" });
            
            HttpContext.Session.SetString("Username", authUser.login);
            HttpContext.Session.SetString("ID", Convert.ToString(authUser.id));
           
            return Ok(user);
           
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

        
        [AllowAnonymous]
        [HttpGet("generateToken")]
        public IActionResult GenerateToken()
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("authorization_saymetoken");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = System.DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256Signature),

            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);Set("token", tokenString, 1);
            return Ok(new
            {
                Token = tokenString
            });
        }

        private User GetCurrentUser()
        {
            return context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
        }

        private AuthUser Authenticate(long id, string login, string password)
        {

            MD5 md5 = MD5.Create();
            var HashedPassword = GetMd5Hash(md5, password);
            User user = context.User.FirstOrDefault(x => x.login == login && x.password == HashedPassword);

            if (user != null)
                return new AuthUser(user.id, login, password);

            return null;
        }


        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();

            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddMilliseconds(10);

            Response.Cookies.Append(key, value, option);
        }




    }



}