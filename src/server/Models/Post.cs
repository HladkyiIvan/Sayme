namespace server.Models
{
    public class Post
    {
        public long ? id { get; set; }
        public string message { get; set; }
        public long id_user { get; set; }
    }
}