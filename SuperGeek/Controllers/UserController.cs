using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperGeek.Models;
using SuperGeek.Services;

namespace SuperGeek.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [ServiceFilter(typeof(DbConnectionService))]
    public class UserController : ControllerBase
    {
        private readonly SuperGeekDbContext context;
        private readonly TelegramService tg;

        public UserController(SuperGeekDbContext context, TelegramService tg)
        {
            this.context = context;
            this.tg = tg;
        }

        [HttpPost]
        public async Task<IActionResult> SingUp(UserDTO user)
        {
            if (await context.Users.FirstOrDefaultAsync(u => u.Email == user.Email
                || u.Phone == user.Phone) is User)
                return Conflict();

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
            await tg.SendLogAsync($"Пользователь:\n{user.Email}\n{user.Phone}\n{user.FirstName}"
                + $"\n{user.LastName}{(user.Patronymic == null ? ""
                : $"\n{user.Patronymic}")}\nзарегистрирован");

            return Ok();
        }
    }
}
