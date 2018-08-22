using System;
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
                return Ok(email);
            }
            return BadRequest(ModelState);
        }


        [HttpPost]
        [Route("sendcode")]
        public IActionResult SendMail([FromBody]Email email)
        {
                string hostEmail = "sayme.help@gmail.com";

                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.EnableSsl = true;
                client.Credentials = new System.Net.NetworkCredential(hostEmail, "sayme12345");
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                MailMessage mailtoClient = new MailMessage();
                mailtoClient.From = new MailAddress(email.userEmail);
                mailtoClient.To.Add(email.userEmail);
                mailtoClient.Subject = "Code for registration";
                mailtoClient.Body = "Thank you for using Sayme! Here is your code for registration: "+email.feedback;
                client.Send(mailtoClient);
                return Ok(email);
        }
    }
}