using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using System.Net.Mail;
using System.Net;
using Microsoft.Extensions.Logging;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        readonly ILogger<UserController> log;
        [HttpPost]
        public IActionResult SendFeedback([FromBody]Email email)
        {
            if (ModelState.IsValid)
            {
                string hostEmail = "sayme.help@gmail.com";

                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.EnableSsl = true;
                client.Credentials = new System.Net.NetworkCredential(hostEmail, "sayme12345");
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress(email.userEmail);
                mailMessage.ReplyToList.Add(email.userEmail);
                mailMessage.To.Add(hostEmail);
                mailMessage.Body = email.feedback;
                mailMessage.Subject = email.userEmail;
                client.Send(mailMessage);
                log.LogDebug("Letter from user was sent");

                MailMessage mailtoClient = new MailMessage();
                mailtoClient.From = new MailAddress(email.userEmail);
                mailtoClient.To.Add(email.userEmail);
                mailtoClient.Subject = "Feedback from Sayme";
                mailtoClient.Body = "Thank you for your request! Our team will process it and we will contact you if necessary.";
                client.Send(mailtoClient);
                log.LogDebug("Letter to user was sent");
                return Ok(email);
            }
            log.LogWarning("Feedback model is invalid");
            return BadRequest(ModelState);
        }
    }
}