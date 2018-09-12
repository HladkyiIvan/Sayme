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


        [HttpGet("followed")]
        public IEnumerable<User> GetFollowed()
        {
            var user=context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
            var allFollowed = context.Following.ToList();
            List<User> followed = new List<User> { };
            foreach (var follower in allFollowed)
            {
                if (follower.id_who == user.id)
                {
                    var followedUser=context.User.FirstOrDefault(x=>x.id==follower.id_whom);
                    followed.Add(followedUser);
                }
            }
            return followed;
        }

        [HttpGet("following")]
        public IEnumerable<User> GetFollowing()
        {
            var user=context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
            var allFollowing = context.Following.ToList();
            List<User> following = new List<User> { };
            foreach (var follower in allFollowing)
            {
                if (follower.id_whom == user.id)
                {
                    var followingUser=context.User.FirstOrDefault(x=>x.id==follower.id_who);
                    following.Add(followingUser);
                }
            }
            return following;
        }

        [HttpGet("blacklist")]
        public IEnumerable<User> GetBlacklist()
        {
            var user=context.User.FirstOrDefault(u=>u.login==HttpContext.Session.GetString("Username"));
            var blacklist = context.Blackist.ToList();
            List<User> blacklistOfUser = new List<User> { };
            foreach (var item in blacklist)
            {
                if (item.id_who == user.id)
                {
                    var userInBlacklist=context.User.FirstOrDefault(x=>x.id==item.id_whom);
                    blacklistOfUser.Add(userInBlacklist);
                }
            }
            return blacklistOfUser;
        }

        [HttpPost("blacklist")]
        public IActionResult AddUserToBlacklist([FromBody]Blacklist blacklist){
            if(ModelState.IsValid){
                context.Blackist.Add(blacklist);
                context.SaveChanges();
                return Ok(blacklist);
            }
            return BadRequest(ModelState);
        }
    }
}