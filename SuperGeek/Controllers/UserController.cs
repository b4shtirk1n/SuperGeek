using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperGeek.Models;
using SuperGeek.Services;
using System.Net;
using System.Net.Mail;

namespace SuperGeek.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
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
            MailAddress from = new("SuperGeek2023@yandex.ru");
            MailAddress to = new("wowan4512@gmail.com");
            MailMessage message = new(from, to)
            {
                Subject = "Твое приложение оценили!",
                IsBodyHtml = false,
                Body = $"Your mark is"
            };
            SmtpClient smtp = new("smtp.yandex.ru", 465)
            {
                Credentials = new NetworkCredential("SuperGeek", "sgslmzcydcrfqcai"),
                EnableSsl = true
            };
            smtp.Send(message);

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
