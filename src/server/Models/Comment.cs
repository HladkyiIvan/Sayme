using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Comment
    {
        public Comment(long id, string message, long id_user, long id_post)
        {
            this.id = id;
            this.message = message;
            this.id_user = id_user;
            this.id_post = id_post;
        }

        public Comment(CommentTransport commentTransport)
        {
            this.id = commentTransport.id;
            this.message = commentTransport.message;
            this.id_user = commentTransport.id_user;
            this.id_post = commentTransport.id_post;
        }
        public Comment() { }

        public long id { get; set; }
        public string message { get; set; }
        public long id_user { get; set; }
        public long id_post { get; set; }
    }
}
