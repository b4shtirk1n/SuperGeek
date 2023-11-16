using SuperGeek.Models;
using SuperGeek.Services;

var builder = WebApplication.CreateBuilder(args);
var tgConfig = builder.Configuration.GetSection("Telegram");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SuperGeekDbContext>();
builder.Services.AddTransient<DbConnectionService>();

builder.Services.AddTransient(o => new EmailService("SuperGeek2023@yandex.ru", "sgslmzcydcrfqcai",
    "SuperGeek2023@yandex.ru"));

builder.Services.AddTransient(o => new TelegramService(tgConfig["API"]!, tgConfig["Username"]!));

var app = builder.Build();

app.UseCors(b =>
{
    b.AllowAnyOrigin();
    b.AllowAnyHeader();
    b.AllowAnyMethod();
});
app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthentication();

app.MapControllers();

app.Run();
