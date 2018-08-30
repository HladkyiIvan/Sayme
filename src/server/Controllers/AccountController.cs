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
using Microsoft.AspNetCore.Authorization;
using System.Text;

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

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("authorization_sayme");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = System.DateTime.UtcNow.AddMinutes(2),
                SigningCredentials = new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            Set("token",tokenString,1);
            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                Token = tokenString
            });




        }


        private AuthUser Authenticate(string login, string password)
        {

            User user = context.User.FirstOrDefault(x => x.login == login && x.password == password);
            if (user != null)
                return new AuthUser(login, password);

            return null;
        }
        // [AllowAnonymous]
        // [HttpPost("authenticate")]
        // public async Task Token(AuthUser user)
        // {
        //     var identity = GetIdentity(user.login, user.password);
        //     if (identity == null)
        //     {
        //         Response.StatusCode = 401;
        //         await Response.WriteAsync("Invalid username or password.");
        //         return;
        //     }

        //     var now = System.DateTime.UtcNow;
        //     // создаем JWT-токен
        //     var jwt = new JwtSecurityToken(
        //             issuer: AuthOptions.ISSUER,
        //             audience: AuthOptions.AUDIENCE,
        //             notBefore: now,
        //             claims: identity.Claims,
        //             expires: now.Add(System.TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
        //             signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
        //     var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

        //     var response = new
        //     {
        //         access_token = encodedJwt,
        //         username = identity.Name
        //     };

        //     // сериализация ответа
        //     Response.ContentType = "application/json";
        //     await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
        // }

        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();

            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddMilliseconds(10);

            Response.Cookies.Append(key, value, option);
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            User user = context.User.FirstOrDefault(x => x.login == username && x.password == password);
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, username)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            // если пользователя не найдено
            return null;
        }

    }

}