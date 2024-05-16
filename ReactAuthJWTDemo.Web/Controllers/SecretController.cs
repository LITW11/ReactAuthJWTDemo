using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ReactAuthJWTDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SecretController : ControllerBase
    {
        [HttpGet]
        [Route("getdata")]
        public object GetSecretData()
        {
            var currentUser = User.FindFirst(ClaimTypes.Email).Value; //this is instead of User.Identity.Name
            return new { message = $"This is a huge secret!! and you are {currentUser}" };
        }
    }
}
