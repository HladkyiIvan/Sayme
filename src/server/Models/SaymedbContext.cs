using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

namespace server.Models
{
    public class SaymedbContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<Users> Users { get; set; }

        public SaymedbContext(DbContextOptions<SaymedbContext> options)
            :base(options)
        { }
    }
}