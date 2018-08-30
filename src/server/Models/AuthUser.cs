namespace server.Models
{
    public class AuthUser
    {
        public string login { get; set; }
        public string password { get; set; }
        public AuthUser(string login, string password)
        {
            this.login=login;
            this.password=password;
        }
    }
}