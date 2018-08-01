using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

namespace server.Models
{
    public class PostContext : DbContext
    {
        public DbSet<Post> Post { get; set; }

        public PostContext(DbContextOptions<PostContext> options)
            :base(options)
        { }
    }
}