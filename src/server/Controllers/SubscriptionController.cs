using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;

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