using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

namespace server.Models
{
    public class EmailContext : DbContext
    {
        public DbSet<Post> Post { get; set; }

        public EmailContext(DbContextOptions<EmailContext> options)
            :base(options)
        { }
    }
}