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
            AuthUser authUser = Authenticate(user.login, user.password);

            if (authUser == null)
                return BadRequest(new { message = "Username or password are incorrect!" });

            //var tokenString = GenerateToken();
            HttpContext.Session.SetString("Username", user.login);
            //Set("token", tokenString, 1);
            return Ok(user);
            // (new
            // {
            //     //Token = tokenString
            // });
        }

        //[AllowAnonymous]
        // [HttpPost("registrate")]
        // public IActionResult Registrate(User user)
        // {
        //     var repeatUser = context.User.FirstOrDefault(x => (x.mail == user.mail || x.login == user.login));
        //     if (repeatUser != null)
        //         return BadRequest("There is a user with the same email or login");
        //     var emailValidator = new EmailAddressAttribute();
        //     bool isEmailCorrect = emailValidator.IsValid(user.mail);
        //     if (!isEmailCorrect)
        //         return BadRequest("Email in wrong format");
        //     var codeForRegistration=GetCode();
        //     return Ok(codeForRegistration);

        // }



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

        private bool VerifyMd5Hash(MD5 md5Hash, string input, string hash)
        {
            string hashOfInput = GetMd5Hash(md5Hash, input);
            StringComparer comparer = StringComparer.OrdinalIgnoreCase;
            if (0 == comparer.Compare(hashOfInput, hash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        [AllowAnonymous]
        [HttpPost("generateToken")]
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
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(new
            {
                Token = tokenString
            });
        }

        private User GetCurrentUser()
        {
            return context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
        }


        private string GetCode()
        {
            Random rnd = new Random();
            var code = rnd.Next(100000, 999999);
            return code.ToString();
        }

        private AuthUser Authenticate(string login, string password)
        {

            MD5 md5 = MD5.Create();
            var HashedPassword = GetMd5Hash(md5, password);
            User user = context.User.FirstOrDefault(x => x.login == login && x.password == HashedPassword);

            if (user != null)
                return new AuthUser(login, HashedPassword);

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