using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Blacklist
    {
        [Key]
        public long id_who { get; set; }
        [Key]
        public long id_whom { get; set; }
        public Blacklist(long who, long whom)
        {
            this.id_who=who;
            this.id_whom=whom;
        }
        public Blacklist(){}
    }
}