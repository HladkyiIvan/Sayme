using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class CommentTransport
    {
        public CommentTransport(Comment comment,bool isDeletable)
        {
            this.id = comment.id;
            this.message = comment.message;
            this.id_user = comment.id_user;
            this.id_post = comment.id_post;
            this.isDeletable = isDeletable;
        }

        public long id { get; set; }
        public string message { get; set; }
        public long id_user { get; set; }
        public long id_post { get; set; }

        public string username { get; set; }
        public bool isDeletable { get; set; }
        public byte[] avatar { get; set; }
    }
}
