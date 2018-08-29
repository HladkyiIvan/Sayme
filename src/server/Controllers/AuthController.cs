using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
 
namespace server.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Ok($"Ваш логин: {User.Identity.Name}");
        }
    }
}