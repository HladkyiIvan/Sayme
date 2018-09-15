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

        [HttpPost("subscribe")]
        public IActionResult Subscribe([FromBody]Id userIdToSub)
        {
            if(ModelState.IsValid)
            {
                //this user wants to subscribe another user
                User user = context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
                long userId = user.id;
                List<Following> followings = context.Following.ToList();
                foreach (var sub in followings)
                {
                    if(sub.id_who == userId && sub.id_whom == userIdToSub.id)
                    {
                        return BadRequest();
                    }
                }
                Following subscription = new Following(userId, userIdToSub.id);
                context.Following.Add(subscription);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("followed/{id}")]
        public IEnumerable<User> GetFollowed(long id)
        {
            User user = context.User.FirstOrDefault(x => x.id == id);
            var allFollowed = context.Following.ToList();
            List<User> followed = new List<User> { };
            foreach (var follower in allFollowed)
            {
                if (follower.id_who == id)
                {
                    var followedUser=context.User.FirstOrDefault(x=>x.id==follower.id_whom);
                    followed.Add(followedUser);
                }
            }
            return followed;
        }

        [HttpGet("following/{id}")]
        public IEnumerable<User> GetFollowing(long id)
        {
            User user = context.User.FirstOrDefault(x => x.id == id);
            var allFollowing = context.Following.ToList();
            List<User> following = new List<User> { };
            foreach (var follower in allFollowing)
            {
                if (follower.id_whom == id)
                {
                    var followingUser=context.User.FirstOrDefault(x=>x.id==follower.id_who);
                    following.Add(followingUser);
                }
            }
            return following;
        }
    }
}