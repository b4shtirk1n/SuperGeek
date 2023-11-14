using Telegram.Bot;

namespace SuperGeek.Services
{
    public class TelegramService
    {
        private readonly TelegramBotClient client;
        private readonly string username;

        public TelegramService(string apiKey, string username)
        {
            client = new(apiKey);
            this.username = username;
        }

        public async Task SendLogAsync(string text)
        {
            await client.SendTextMessageAsync(username, text);
        }
    }
}
