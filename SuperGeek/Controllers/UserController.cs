using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperGeek.Models;
using SuperGeek.Services;

namespace SuperGeek.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ServiceFilter(typeof(DbConnectionService))]
    public class UserController : ControllerBase
    {
        private readonly SuperGeekDbContext context;

        public UserController(SuperGeekDbContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SingUp(UserDTO user)
        {
            if (await context.Users.FirstOrDefaultAsync(u => u.Email == user.Email
                || u.Phone == user.Phone) is User)
                return BadRequest();

            try
            {
                await context.Users.AddAsync(new User
                {
                    Email = user.Email,
                    Phone = user.Phone,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Patronymic = user.Patronymic
                });
                await context.SaveChangesAsync();
            }
            catch
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
