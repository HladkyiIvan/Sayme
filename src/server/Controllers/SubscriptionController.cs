using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {

        private readonly SaymedbContext context;

        public SubscriptionController(SaymedbContext context)
        {
            this.context = context;
        }


        [HttpGet("following")]
        public IEnumerable<User> GetFollowing()
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var allFollowed = context.Following.ToList();
            List<User> followed = new List<User> { };
            foreach (var follower in allFollowed)
            {
                if (follower.id_who == user.id)
                {
                    var followedUser = context.User.FirstOrDefault(x => x.id == follower.id_whom);
                    followed.Add(followedUser);
                }
            }
            return followed;
        }

        [HttpGet("followed")]
        public IEnumerable<User> GetFollowed()
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var allFollowing = context.Following.ToList();
            List<User> following = new List<User> { };
            foreach (var follower in allFollowing)
            {
                if (follower.id_whom == user.id)
                {
                    var followingUser = context.User.FirstOrDefault(x => x.id == follower.id_who);
                    following.Add(followingUser);
                }
            }
            return following;
        }

        [HttpDelete("followed/{idWhom}")]
        public IActionResult DeleteFromFollowed(long idWhom)
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var communication = context.Following.FirstOrDefault(c => (c.id_who == user.id && c.id_whom == idWhom));
            if (communication == null)
            {
                return NotFound("no communication");
            }
            context.Following.Remove(communication);
            context.SaveChanges();
            return Ok("OKKKKK");

        }

        [HttpDelete("blacklist/{idWhom}")]
        public IActionResult DeleteFromBlacklist(long idWhom)
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var communication = context.Blacklist.FirstOrDefault(c => (c.id_who == user.id && c.id_whom == idWhom));
            if (communication == null)
            {
                return NotFound("no communication");
            }
            context.Blacklist.Remove(communication);
            context.SaveChanges();
            return Ok("OKKKKK");
        }

        [HttpGet("blacklist")]
        public IEnumerable<User> GetBlacklist()
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var blacklist = context.Blacklist.ToList();
            List<User> blacklistOfUser = new List<User> { };
            foreach (var item in blacklist)
            {
                if (item.id_who == user.id)
                {
                    var userInBlacklist = context.User.FirstOrDefault(x => x.id == item.id_whom);
                    blacklistOfUser.Add(userInBlacklist);
                }
            }
            return blacklistOfUser;
        }

        [HttpPost("blacklist/{idWhom}")]
        public IActionResult AddUserToBlacklist(long idWhom)
        {
            if (ModelState.IsValid)
            {
                var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
                var blacklist = new Blacklist(user.id, idWhom);
                context.Blacklist.Add(blacklist);
                context.SaveChanges();
                return Ok(blacklist);
            }
            return BadRequest(ModelState);
        }
    }
}