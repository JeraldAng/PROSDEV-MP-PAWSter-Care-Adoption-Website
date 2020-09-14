using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace automation_tests
{
    public class Class1
    {
        IWebDriver driver = new ChromeDriver("J:/Documents/GitHub/PROSDEV-MP/automation-tests/bin/Debug/netcoreapp2.1");
        [Fact]
        public void FirstTest(){
            driver.Navigate().GoToUrl("https://automationcurrypuff.home.blog/2018/11/10/seleniumwithvisualstudiocodeandxunit/");
            Assert.True(true);
        }
    }
}
