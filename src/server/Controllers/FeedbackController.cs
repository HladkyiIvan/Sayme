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
    public class FeedbackController : ControllerBase
    {
        [HttpPost]
        public void SendFeedback()
        {
            Email feedback = new Email();
            string hostEmail = "sayme.help@gmail.com";
            string userEmail = feedback.userEmail;

            SmtpClient client = new SmtpClient();

            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(hostEmail, "sayme12345");
            
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(feedback.userEmail);
            mailMessage.To.Add(hostEmail);
            mailMessage.Body = feedback.feedback;
            mailMessage.Subject = "FeedBack from site";
            client.Send(mailMessage);
        }
    }
    
}