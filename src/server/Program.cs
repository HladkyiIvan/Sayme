using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
<<<<<<< HEAD
            // string ipAddress = args[0];
            // string port = args[1];
            // var host = new WebHostBuilder()
            //     .UseKestrel()
            //     .UseContentRoot(Directory.GetCurrentDirectory())
            //     .UseIISIntegration()
            //     .UseStartup<Startup>()
            //     .UseUrls("http://" + ipAddress + ":" + port + "/")
            //     .Build();
            
            // host.Run();
=======
>>>>>>> dev
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
