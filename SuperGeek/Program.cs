using SuperGeek.Models;
using SuperGeek.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SuperGeekDbContext>(ServiceLifetime.Singleton);
builder.Services.AddTransient<DbConnectionService>();

var tgConfig = builder.Configuration.GetSection("Telegram");
builder.Services.AddTransient(o => new TelegramService(tgConfig["API"]!, tgConfig["Username"]!));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthorization();

app.MapControllers();

app.Run();
