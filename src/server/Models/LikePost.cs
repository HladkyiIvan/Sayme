using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class LikePost
    {
        [Key]
        public long id_user { get; set; }
        [Key]
        public long id_post { get; set; }
        public bool liked { get; set; }

        public LikePost (long id_user, long id_post, bool liked)
        {
            this.id_user = id_user;
            this.id_post = id_post;
            this.liked = liked;
        }

        public LikePost() { }
    }
}
