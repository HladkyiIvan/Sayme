using System;

namespace server.Models
{
    public class PostTransport
    {
        public long id { get; set; }
        public string message { get; set; }
        public long id_user { get; set; }
        public DateTime post_date { get; set; }

        public string username { get; set; }

        public PostTransport (Post post)
        {
            id = post.id;
            message = post.message;
            id_user = post.id_user;
            post_date = post.post_date;
        }
    }
}