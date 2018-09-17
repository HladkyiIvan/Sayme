using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;
using System.Net.Mail;
using System.Net;
using System.IO;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace server.Controllers
{
    [Authorize]
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
                SmtpClient client = new SmtpClient();

                client = new SmtpClient("smtp.gmail.com", 587);
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
                mailtoClient.Subject = email.subject;
                mailtoClient.Body = "Thank you for your request! Our team will process it and we will contact you if necessary.";
                client.Send(mailtoClient);

                log.LogDebug("Letter to user was sent");
                return Ok(email);
            }
            log.LogWarning("Feedback model is invalid");
            return BadRequest(ModelState);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("sendcode")]
        public ActionResult<string> SendMail([FromBody]Email email)
        {
            string hostEmail = "sayme.help@gmail.com";
            SmtpClient client = new SmtpClient();

            client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential(hostEmail, "sayme12345");
            client.DeliveryMethod = SmtpDeliveryMethod.Network;

            MailMessage mailtoClient = new MailMessage();
            mailtoClient.From = new MailAddress(email.userEmail);
            mailtoClient.To.Add(email.userEmail);
            mailtoClient.Subject = email.subject;
            Random rnd = new Random();
            int code = rnd.Next(100000, 1000000);
            HttpContext.Session.SetString("Code", Convert.ToString(code));
            mailtoClient.Body = "Thank you for using Sayme! Here is your code: " + Convert.ToString(code);
            client.Send(mailtoClient);

            return Convert.ToString(code);
        }

        [HttpPost]
        [Route("checkcode")]
        public IActionResult CheckCode([FromBody] Code code)
        {
            try
            {
                if (HttpContext.Session.GetString("Code") == null)
                {
                    return BadRequest("There is no temp code");
                }

                if (HttpContext.Session.GetString("Code") != code.code)
                {
                    return BadRequest("Codes are not the same");
                }

                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}