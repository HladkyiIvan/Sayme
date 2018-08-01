using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using System.Net.Mail;
using System.Net;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {

        [HttpPost]
        public void SendFeedback()
        {
            SmtpClient client = new SmtpClient();

            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("sayme.help@gmail.com", "sayme12345");
            
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("whoever@me.com");
            mailMessage.To.Add("sayme.help@gmail.com");
            mailMessage.Body = "body";
            mailMessage.Subject = "FeedBack from site";
            client.Send(mailMessage);
        }
    }
    
}