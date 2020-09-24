using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support;
using Xunit;

namespace automation_tests
{
    public class TC15
    {
        IWebDriver driver = new ChromeDriver("J:/Documents/GitHub/PROSDEV-MP/automation-tests/bin/Debug/netcoreapp2.1");

        [Fact]
        public void FirstTest(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigate_login_element = driver.FindElement(By.Id("logq"));

            navigate_login_element.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);

            IWebElement login_element_username = driver.FindElement(By.Name("uname"));
            IWebElement login_element_password = driver.FindElement(By.Id("password"));
            IWebElement login_element_submit = driver.FindElement(By.Name("button"));

            login_element_username.Click();
            login_element_username.SendKeys(Global.TEST_USER);
            login_element_password.Click();
            login_element_password.SendKeys(Global.TEST_PW);
            login_element_submit.Click();

            IWebElement navigate_mtg_element = driver.FindElement(By.Id("meet_the_dogs"));
            navigate_mtg_element.Click();

            IWebElement mtg_element_card = driver.FindElement(By.XPath("/html/body/section/div[2]/div/span[1]/div/div/div[2]/div/div"));

            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");

            Actions action = new Actions(driver);
            action.MoveToElement(mtg_element_card).Perform();
            IWebElement mtg_element_card_btn = driver.FindElement(By.XPath("/html/body/section/div[2]/div/span[1]/div/div/div[2]/div/div/button"));
            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            mtg_element_card_btn.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            IWebElement mtg_element_adopt_btn = driver.FindElement(By.XPath("/html/body/div[2]/div[2]/div[5]/div[1]/div[2]/button"));
            mtg_element_adopt_btn.Click();

            IWebElement mtg_element_fname = driver.FindElement(By.Id("reqFirst"));
            IWebElement mtg_element_lname = driver.FindElement(By.Id("reqLast"));
            IWebElement mtg_element_numb = driver.FindElement(By.Id("reqNum"));
            IWebElement mtg_element_addr = driver.FindElement(By.Id("reqAddress"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_lname.SendKeys("Doe");
            mtg_element_numb.SendKeys("09111111111");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // driver.Quit();
        }
    }

    //tc16 - no Fname
    //tc17 - no Lname
    //tc18 - no num
    //tc19 - no addr
    //tc20 - wrong num format
}


// just an example of loading up google, typing "test run for automation" in the search bar, and then submitting it
// driver.Navigate().GoToUrl("https://www.google.com/");
// IWebElement element = driver.FindElement(By.Name("q"));
// element.SendKeys("test run for automation");
// element.Submit();

// ids:
// firstname: reqFirst
// lastname: reqLast
// phone number: reqNum
// email: reqEmail
// address: reqAddress
// xpath submit: /html/body/div[2]/div/div/div[2]/form/div[5]/input
// dropdown dog: reqDog