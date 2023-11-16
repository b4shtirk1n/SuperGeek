using System.Net.Mail;
using System.Net;

namespace SuperGeek.Services
{
    public class EmailService
    {
        private readonly string username;
        private readonly string password;
        private readonly string from;

        public EmailService(string username, string password, string from)
        {
            this.username = username;
            this.password = password;
            this.from = from;
        }

        public async Task SendAsync(string to)
        {
            MailMessage message = new(from, to)
            {
                Subject = "Твое приложение оценили!",
                IsBodyHtml = false,
                Body = $"Your mark is"
            };
            SmtpClient smtp = new("smtp.yandex.ru", 465)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = true
            };
            await smtp.SendMailAsync(message);
        }
    }
}
