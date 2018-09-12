namespace server.Models
{
    public class AuthUser
    {
        public long id { get; set; }
        public string login { get; set; }
        public string password { get; set; }
        public AuthUser(long id, string login, string password)
        {
            this.id = id;
            this.login=login;
            this.password=password;
        }
    }
}