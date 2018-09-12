using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

namespace server.Models
{
    public class SaymedbContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Following> Following { get; set; }
        public DbSet<Blacklist> Blackist { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Following>().HasKey(k => new { k.id_who, k.id_whom });
            modelBuilder.Entity<Blacklist>().HasKey(k=>new {k.id_who,k.id_whom});
        }


        public SaymedbContext(DbContextOptions<SaymedbContext> options)
            : base(options)
        { }
    }
}