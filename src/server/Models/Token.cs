using System;

namespace server.Models
{
    public class Token
    {
        public string text { get; set; }
        public Token(){}
        public Token(string text)
        {
            this.text=text;
        }
    }
}