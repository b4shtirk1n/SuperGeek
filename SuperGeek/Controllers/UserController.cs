using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperGeek.Models;

namespace SuperGeek.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public async Task<IActionResult> SingUp(UserDTO user)
        {
            return Ok();
        }
    }
}
