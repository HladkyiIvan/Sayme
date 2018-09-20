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

        [HttpGet("checksub/{userId}")]
        public bool IsSubscribed(long userId)
        {
            User user = context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
            var userHasSub = context.Following.Where(user2 => user2.id_whom == userId && user2.id_who == user.id).FirstOrDefault();
            // from u in context.Following
            //                  where u.id_who == user.id && u.id_whom == userId
            //                  select u;
            return userHasSub != null ? true: false;
        }

        [HttpPost("subscribe")]
        public IActionResult Subscribe([FromBody]Id userIdToSub)
        {
            if(ModelState.IsValid)
            {
                //this user wants to subscribe another user
                User user = context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
                List<Following> followings = context.Following.ToList();
                var userToSubscribe = context.Following.FirstOrDefault(x=>x.id_who==user.id&&x.id_whom==user.id);
                if(userToSubscribe != null)
                {
                    return BadRequest();
                }
                Following subscription = new Following(user.id, userIdToSub.id);
                context.Following.Add(subscription);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("unsubscribe")]
        public IActionResult Unsubscribe([FromBody]Id userIdToUnsub)
        {
            if(ModelState.IsValid)
            {   
                //this user wants to subscribe another user
                User user = context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
                long userId = user.id;
                List<Following> followings = context.Following.ToList();
                var userToDelete = context.Following.FirstOrDefault(x=> x.id_who==userId && x.id_whom==userIdToUnsub.id);
                context.Following.Remove(userToDelete);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
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
                return NotFound("no communication");
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
                return NotFound("no communication");
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

        [HttpGet("blacklisted")]
        public IEnumerable<User> GetUsersCurrentBlacklistedIn()
        {
            var user = context.User.FirstOrDefault(u => u.login == HttpContext.Session.GetString("Username"));
            var blacklist = context.Blacklist.ToList();
            List<User> usersCurrentInBlacklist = new List<User> { };
            foreach (var item in blacklist)
            {
                if (item.id_whom == user.id)
                {
                    var userInBlacklist = context.User.FirstOrDefault(x => x.id == item.id_who);
                    usersCurrentInBlacklist.Add(userInBlacklist);
                }
            }
            return usersCurrentInBlacklist;
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