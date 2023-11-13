using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SuperGeek.Models;

namespace SuperGeek.Services
{
    public class DbConnectionService : IAsyncAuthorizationFilter
    {
        private readonly SuperGeekDbContext context;

        public DbConnectionService(SuperGeekDbContext context)
        {
            this.context = context;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            if (!await this.context.Database.CanConnectAsync())
            {
                context.Result = new ObjectResult("Database connection failed")
                {
                    StatusCode = StatusCodes.Status503ServiceUnavailable,
                };
            }
        }
    }
}
