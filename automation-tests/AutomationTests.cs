using NUnit.Framework;
using System;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
// using Xunit;

namespace automation_tests
{
    // [Collection("Sequential")]
    public class AutomationTests
    {
        IWebDriver driver;

        [SetUp]
        public void SetUpChrome(){
            driver = new ChromeDriver("J:/Documents/GitHub/PROSDEV-MP/automation-tests/bin/Debug/netcoreapp2.1");
            driver.Manage().Window.Maximize();
        }

        [TearDown]
        public void CloseBrowser(){
            driver.Quit();
        }

        [Test]
        public void FailedRequestFName(){
            driver.Navigate().GoToUrl("http://localhost:3000/");

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

            IWebElement mtg_element_lname = driver.FindElement(By.Id("reqLast"));
            IWebElement mtg_element_numb = driver.FindElement(By.Id("reqNum"));
            IWebElement mtg_element_addr = driver.FindElement(By.Id("reqAddress"));
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_lname.SendKeys("Doe");
            mtg_element_numb.SendKeys("09111111111");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");
            mtg_element_submit.Click();
            
            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);
            Thread.Sleep(2500);
            // Assert.True(true);
        }

        [Test]
        public void FailedRequestLName(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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
            IWebElement mtg_element_numb = driver.FindElement(By.Id("reqNum"));
            IWebElement mtg_element_addr = driver.FindElement(By.Id("reqAddress"));
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_numb.SendKeys("09111111111");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");
            mtg_element_submit.Click();

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);
            Thread.Sleep(2500);

            // driver.Quit();

            // Assert.True(true);
        }

        [Test]
        public void FailedRequestNumb(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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
            IWebElement mtg_element_addr = driver.FindElement(By.Id("reqAddress"));
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_lname.SendKeys("Doe");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);

            mtg_element_submit.Click();
            Thread.Sleep(2500);
            // driver.Quit();

            // Assert.True(true);
        }

        [Test]
        public void FailedRequestAddr(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_lname.SendKeys("Doe");
            mtg_element_numb.SendKeys("09111111111");

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);

            mtg_element_submit.Click();
            Thread.Sleep(2500);
            // driver.Quit();

            // Assert.True(true);
        }

        [Test]
        public void FailedRequestInvalidNumb(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_lname.SendKeys("Doe");
            mtg_element_numb.SendKeys("02203");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);

            mtg_element_submit.Click();
            Thread.Sleep(2500);
            // driver.Quit();

            // Assert.True(true);
        }

        [Test]
        public void FailedRequestNoField(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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

            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));

            // driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            // Assert.True(false);

            mtg_element_submit.Click();
            Thread.Sleep(2500);
            // driver.Quit();

            // Assert.True(true);
        }

        [Test]
        public void SuccessRequest(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

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

            // Assert.True(true);
            Thread.Sleep(2500);
            // driver.Quit();

            // Assert.True(true);
        }

        [Test] //Name: Successful Login ; P
		public void TC01()
		{
			// Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000");
            // Make the browser full screen
            // driver.Manage().Window.Maximize();
			
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
			driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
			Thread.Sleep(2000);
			driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);
            driver.FindElement(By.Name("button")).Click();
			Thread.Sleep(2000);

			IWebElement profile = driver.FindElement(By.Id("editprofile"));
            string ActualProfile = profile.Text;
            string ExpectedProfile = "Profile";
            Assert.AreEqual(ActualProfile, ExpectedProfile);
            Thread.Sleep(2000);
		}
		
		[Test] //Name: Failed Login due to Wrong Username ; P
        public void TCO2()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");

			driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.Name("uname")).SendKeys("testingg");
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);
            driver.FindElement(By.Name("button")).Click();
            Thread.Sleep(2000);

            IWebElement error = driver.FindElement(By.XPath("/html/body/div[6]/div/div/div[1]/div[2]/h5[1]"));
            string ActualErrorMsg = error.Text;
            string ExpectedErrorMsg = "Username or password is incorrect. Please try again!";
            Assert.AreEqual(ActualErrorMsg, ExpectedErrorMsg);
            Thread.Sleep(3000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Login due to Wrong Password ; P
        public void TCO3()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");

			driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys("Testing11!");
            driver.FindElement(By.Name("button")).Click();
            Thread.Sleep(2000);

            IWebElement error = driver.FindElement(By.XPath("/html/body/div[6]/div/div/div[1]/div[2]/h5[1]"));
            string ActualErrorMsg = error.Text;
            string ExpectedErrorMsg = "Username or password is incorrect. Please try again!";
            Assert.AreEqual(ActualErrorMsg, ExpectedErrorMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Login due to Missing Username ; P
        public void TCO4()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);	
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.Name("uname")).SendKeys("");
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);
            driver.FindElement(By.Name("button")).Click();
            Thread.Sleep(2000);

            //IWebElement error = driver.FindElement(By.XPath("/html/body/div[6]/div/div/div[1]/div[2]/h5[1]"));
            string ActualValidationMsg = driver.FindElement(By.Name("uname")).GetAttribute("validationMessage");
            string ExpectedValidationMsg = "Please fill out this field.";
            Assert.AreEqual(ActualValidationMsg, ExpectedValidationMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Login due to Missing Password ; P
        public void TCO5()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
			
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys("");
            driver.FindElement(By.Name("button")).Click();
            Thread.Sleep(2000);

            //IWebElement error = driver.FindElement(By.XPath("/html/body/div[6]/div/div/div[1]/div[2]/h5[1]"));
            string ActualValidationMsg = driver.FindElement(By.Id("password")).GetAttribute("validationMessage");
            string ExpectedValidationMsg = "Please fill out this field.";
            Assert.AreEqual(ActualValidationMsg, ExpectedValidationMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Successful Sign Up ; P
        public void TCO6()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
			
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("/html/body/div[1]/div/div/div[1]/div[2]/form/div[2]/a")).Click();
            Thread.Sleep(2000);

            driver.FindElement(By.Id("username")).SendKeys(Global.SIGNUP_TEST_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.SIGNUP_TEST_PW);
            driver.FindElement(By.Id("confirm-password")).SendKeys(Global.SIGNUP_TEST_CONFIRM_PW);
            driver.FindElement(By.Id("email-address")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.XPath("/html/body/div/div/div[2]/div/form/div[4]/input")).Click();
            Thread.Sleep(2000);

            IWebElement profile = driver.FindElement(By.Id("editprofile"));
            string ActualProfile = profile.Text;
            string ExpectedProfile = "Profile";
            Assert.AreEqual(ActualProfile, ExpectedProfile);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Sign Up because of Password Requirements ; P
        public void TCO7()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            
			driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("/html/body/div[1]/div/div/div[1]/div[2]/form/div[2]/a")).Click();
            Thread.Sleep(2000);

            driver.FindElement(By.Id("username")).SendKeys(Global.SIGNUP_TEST_USER);
            driver.FindElement(By.Id("password")).SendKeys("12345");
            driver.FindElement(By.Id("confirm-password")).SendKeys("12345");
            driver.FindElement(By.Id("email-address")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.XPath("/html/body/div/div/div[2]/div/form/div[4]/input")).Click();
            Thread.Sleep(2000);

            IWebElement invalid = driver.FindElement(By.Id("invalid-password"));
            string ActualInvalidMsg = invalid.Text;
            string ExpectedInvalidMsg = "invalid password";
            Assert.AreEqual(ActualInvalidMsg, ExpectedInvalidMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Sign Up because of Invalid Email;P
        public void TCO8()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("/html/body/div[1]/div/div/div[1]/div[2]/form/div[2]/a")).Click();
            Thread.Sleep(2000);

            driver.FindElement(By.Id("username")).SendKeys(Global.SIGNUP_TEST_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.SIGNUP_TEST_PW);
            driver.FindElement(By.Id("confirm-password")).SendKeys(Global.SIGNUP_TEST_CONFIRM_PW);
            driver.FindElement(By.Id("email-address")).SendKeys("ohn.doe.com");
            driver.FindElement(By.XPath("/html/body/div/div/div[2]/div/form/div[4]/input")).Click();
            Thread.Sleep(2000);

            IWebElement invalid = driver.FindElement(By.Id("invalid-email"));
            string ActualInvalidMsg = invalid.Text;
            string ExpectedInvalidMsg = "Email must follow the format: name@site.com";
            Assert.AreEqual(ActualInvalidMsg, ExpectedInvalidMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
		
		[Test] //Name: Failed Sign Up because of Different Password Fields
        public void TCO9()
        {
			
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
			
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            Thread.Sleep(2000);
            driver.FindElement(By.XPath("/html/body/div[1]/div/div/div[1]/div[2]/form/div[2]/a")).Click();
            Thread.Sleep(2000);

            driver.FindElement(By.Id("username")).SendKeys(Global.SIGNUP_TEST_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.SIGNUP_TEST_PW);
            driver.FindElement(By.Id("confirm-password")).SendKeys("Johndoe1!!");
            driver.FindElement(By.Id("email-address")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.XPath("/html/body/div/div/div[2]/div/form/div[4]/input")).Click();
            Thread.Sleep(2000);

            IWebElement invalid = driver.FindElement(By.Id("invalid-confirm-password"));
            string ActualInvalidMsg = invalid.Text;
            string ExpectedInvalidMsg = "mismatch!";
            Assert.AreEqual(ActualInvalidMsg, ExpectedInvalidMsg);
            Thread.Sleep(2000);
			
			// driver.Quit();
        }
    
    }
}