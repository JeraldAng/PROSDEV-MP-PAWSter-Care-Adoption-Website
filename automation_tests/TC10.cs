using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace PROSDEV_MP
{
    public class TC10
    {
        IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

        
        [Fact]
        public void Initialize()
        {
            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            Assert.True(true);
        }
        
        

    }
}
