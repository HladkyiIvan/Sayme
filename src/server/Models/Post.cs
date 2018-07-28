namespace server.Models
{
    public class Post
    {
        public long ? Id { get; set; }
        public string Text { get; set; }
        public long IdUser { get; set; }
    }
}