using NUnit.Framework;
using System;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;
using System.Collections.ObjectModel;
using OpenQA.Selenium.Support.UI;
// using Xunit;

namespace automation_tests
{
    public class AutomationTests
    {
        IWebDriver driver;

        //to run by category: dotnet test --filter TestCategory=<categoryname>
        //only 4 categories: Login, Feedback, Adoption, Admin

        [SetUp]
        public void SetUpBrowser(){
            driver = new ChromeDriver("J:/Documents/GitHub/PROSDEV-MP/automation-tests/bin/Debug/netcoreapp2.1");
            driver.Manage().Window.Maximize();
        }

        [TearDown]
        public void CloseBrowser(){
            driver.Quit();
        }

        [Test, Order(1), Category("Login")] //Name: Successful Login ; P
		public void TC01()
		{
            driver.Navigate().GoToUrl("http://localhost:3000");
			
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

            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();
            Thread.Sleep(2500);
		}
		
		[Test, Order(2), Category("Login")] //Name: Failed Login due to Wrong Username ; P
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
		
		[Test, Order(3), Category("Login")] //Name: Failed Login due to Wrong Password ; P
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
		
		[Test, Order(4), Category("Login")] //Name: Failed Login due to Missing Username ; P
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
		
		[Test, Order(5), Category("Login")] //Name: Failed Login due to Missing Password ; P
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
		
		[Test, Order(6), Category("Login")] //Name: Successful Sign Up ; P
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
        }
		
		[Test, Order(7), Category("Login")] //Name: Failed Sign Up because of Password Requirements ; P
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
		
		[Test, Order(8), Category("Login")] //Name: Failed Sign Up because of Invalid Email;P
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
		
		[Test, Order(9), Category("Login")] //Name: Failed Sign Up because of Different Password Fields
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

        [Test, Order(10), Category("Feedback")] //Name: Successful Feedback Form ; Passed
        public void TC10()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateLoginButton = driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");
            IWebElement navigateFeedbackButton = driver.FindElement(By.XPath("/html/body/footer/div/div[1]/div[2]/ul/li/a"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys(Global.SIGNUP_TEST_FNAME);
            driver.FindElement(By.Id("lname")).SendKeys(Global.SIGNUP_TEST_LNAME);
            driver.FindElement(By.Id("email")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();

            if(driver.Url == "http://localhost:3000/home")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }
            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();
            Thread.Sleep(2500);

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.ADMIN_TEST_USER);
            driver.FindElement(By.Name("pass")).SendKeys(Global.ADMIN_TEST_PW);
            driver.FindElement(By.Name("button")).Click();

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[3]/a")).Click();
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");

            driver.FindElement(By.XPath("/html/body/div[1]/div[2]/div/table/tbody/tr/td[1]/input")).Click();
            driver.FindElement(By.XPath("/html/body/div[1]/div[2]/button")).Click();

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[6]/a")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(11), Category("Feedback")] //Name: Feedback Form without First Name ; Passed
        public void TC11()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateLoginButton = driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");
            IWebElement navigateFeedbackButton = driver.FindElement(By.XPath("/html/body/footer/div/div[1]/div[2]/ul/li/a"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("lname")).SendKeys(Global.SIGNUP_TEST_LNAME);
            driver.FindElement(By.Id("email")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();
            Thread.Sleep(2500);
            IWebElement inputBox = driver.FindElement(By.Id("fname"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();

            Thread.Sleep(2500);
        }

        [Test, Order(12), Category("Feedback")] //Name: Feedback Form without Last Name ; Passed
        public void TC12()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateLoginButton = driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");
            IWebElement navigateFeedbackButton = driver.FindElement(By.XPath("/html/body/footer/div/div[1]/div[2]/ul/li/a"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys(Global.SIGNUP_TEST_FNAME);
            driver.FindElement(By.Id("email")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();
            Thread.Sleep(2500);
            IWebElement inputBox = driver.FindElement(By.Id("lname"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();

            Thread.Sleep(2500);
        }

        [Test, Order(13), Category("Feedback")] //Name: Feedback Form without Email Address ; Passed
        public void TC13()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateLoginButton = driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");
            IWebElement navigateFeedbackButton = driver.FindElement(By.XPath("/html/body/footer/div/div[1]/div[2]/ul/li/a"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys(Global.SIGNUP_TEST_FNAME);
            driver.FindElement(By.Id("lname")).SendKeys(Global.SIGNUP_TEST_LNAME);
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();

            Thread.Sleep(2500);
            IWebElement inputBox = driver.FindElement(By.Id("email"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();

            Thread.Sleep(2500);
        }

        [Test, Order(14), Category("Feedback")] //Name: Feedback Form without Feedback ; Passed
        public void TC14()
        {
            driver.Navigate().GoToUrl("http://localhost:3000");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateLoginButton = driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.LOGIN_USER);
            driver.FindElement(By.Id("password")).SendKeys(Global.LOGIN_PW);

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IJavaScriptExecutor js = (IJavaScriptExecutor) driver;
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");
            IWebElement navigateFeedbackButton = driver.FindElement(By.XPath("/html/body/footer/div/div[1]/div[2]/ul/li/a"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys(Global.SIGNUP_TEST_FNAME);
            driver.FindElement(By.Id("lname")).SendKeys(Global.SIGNUP_TEST_LNAME);
            driver.FindElement(By.Id("email")).SendKeys(Global.SIGNUP_TEST_EMAIL);
            driver.FindElement(By.Id("submit-btn")).Click();

            Thread.Sleep(2500);
            IWebElement inputBox = driver.FindElement(By.Id("comment"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            IWebElement signOutButton = driver.FindElement(By.Id("signout"));
            signOutButton.Click();

            Thread.Sleep(2500);
        }

        [Test, Order(15), Category("Adoption")] //Name: Successful Adoption Form; Passed
        public void TC15(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigate_login_element = driver.FindElement(By.Id("logq"));

            navigate_login_element.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);

            IWebElement login_element_username = driver.FindElement(By.Name("uname"));
            IWebElement login_element_password = driver.FindElement(By.Id("password"));
            IWebElement login_element_submit = driver.FindElement(By.Name("button"));

            login_element_username.SendKeys(Global.TEST_USER);
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
            mtg_element_numb.SendKeys("09111111111");
            mtg_element_addr.SendKeys("Test Address in request for adoption form");
            mtg_element_submit.Click();

            if(driver.Url == "http://localhost:3000/profile")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            Thread.Sleep(2500);

            driver.FindElement(By.Id("signout")).Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();

            driver.FindElement(By.Name("uname")).SendKeys(Global.ADMIN_TEST_USER);
            driver.FindElement(By.Name("pass")).SendKeys(Global.ADMIN_TEST_PW);
            driver.FindElement(By.Name("button")).Click();

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[4]/a")).Click();
            js.ExecuteScript("window.scrollTo(0, document.body.scrollHeight - 100)");

            driver.FindElement(By.XPath("/html/body/div/div[2]/div/table/tbody/tr[1]/td[1]/input")).Click();
            driver.FindElement(By.XPath("/html/body/div/div[2]/button")).Click();

            driver.FindElement(By.XPath("/html/body/nav/div/div/ul/li[6]/a")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(16), Category("Adoption")] //Name: Adoption Form w/o First Name; Passed
        public void TC16(){
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

            IWebElement inputBox = driver.FindElement(By.Id("reqFirst"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            driver.FindElement(By.Id("signout")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(17), Category("Adoption")] //Name: Adoption Form w/o Last Name; Passed
        public void TC17(){
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

            IWebElement inputBox = driver.FindElement(By.Id("reqLast"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            driver.FindElement(By.Id("signout")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(18), Category("Adoption")] //Name: Adoption Form w/o Phone Number; Passed
        public void TC18(){
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
            mtg_element_submit.Click();

            IWebElement inputBox = driver.FindElement(By.Id("reqNum"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            driver.FindElement(By.Id("signout")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(19), Category("Adoption")] //Name: Adoption Form w/o Address; Passed
        public void TC19(){
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

            IWebElement mtg_element_fname = driver.FindElement(By.Id("reqFirst"));
            IWebElement mtg_element_lname = driver.FindElement(By.Id("reqLast"));
            IWebElement mtg_element_numb = driver.FindElement(By.Id("reqNum"));
            IWebElement mtg_element_submit = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div[2]/form/div[5]/input"));
            
            mtg_element_fname.SendKeys("John");
            mtg_element_lname.SendKeys("Doe");
            mtg_element_numb.SendKeys("09111111111");

            mtg_element_submit.Click();
            IWebElement inputBox = driver.FindElement(By.Id("reqAddress"));

            if(inputBox.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            driver.FindElement(By.Id("signout")).Click();
            Thread.Sleep(2500);
        }

        [Test, Order(20), Category("Adoption")] //Name: Adoption Form w/o Incorrect Phone; Passed
        public void TC20(){
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

            mtg_element_submit.Click();

            if(mtg_element_numb.GetCssValue("color") == "rgba(73, 80, 87, 1)")
            {
                Assert.True(true);
            }
            else
            {
                Assert.False(true);
            }

            driver.FindElement(By.Id("signout")).Click();
            
            Thread.Sleep(2500);
        }

        [Test, Order(21), Category("Adoption")] //Name: Adoption Form Empty; Passed
        public void TC21(){
            driver.Navigate().GoToUrl("http://localhost:3000/");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigate_login_element = driver.FindElement(By.Id("logq"));

            navigate_login_element.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);

            IWebElement login_element_username = driver.FindElement(By.Name("uname"));
            IWebElement login_element_password = driver.FindElement(By.Id("password"));
            IWebElement login_element_submit = driver.FindElement(By.Name("button"));

            login_element_username.SendKeys(Global.TEST_USER);
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


            mtg_element_submit.Click();
            Thread.Sleep(2500);
        }        
    
        [Test, Order(22), Category("Admin")] //Name: Admin Add Dog
        public void TC22()
        {
            driver.Navigate().GoToUrl("http://localhost:3000/");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigate_login_element = driver.FindElement(By.Id("logq"));

            navigate_login_element.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);

            IWebElement login_element_username = driver.FindElement(By.Name("uname"));
            IWebElement login_element_password = driver.FindElement(By.Id("password"));
            IWebElement login_element_submit = driver.FindElement(By.Name("button"));

            login_element_username.SendKeys(Global.ADMIN_TEST_USER);
            login_element_password.SendKeys(Global.ADMIN_TEST_PW);
            login_element_submit.Click();

            
            driver.FindElement(By.Id("see_dogs")).Click();
            driver.FindElement(By.XPath("/html/body/section/div/div[1]/div[1]/div[2]/a/button")).Click();

            driver.FindElement(By.Id("dog_name")).SendKeys("Cooper");

            SelectElement dropBreed = new SelectElement(driver.FindElement(By.Name("dog_breed")));
            dropBreed.SelectByValue("Corgi");

            
            driver.FindElement(By.Name("dog_image")).SendKeys(@"J:\Documents\GitHub\PROSDEV-MP\public\img\charlie.png");
            driver.FindElement(By.Name("dog_birthday")).SendKeys("25/08/2020");
            
            SelectElement dropGender = new SelectElement(driver.FindElement(By.Name("dog_gender")));
            dropGender.SelectByValue("male");

            driver.FindElement(By.Id("dog_height")).SendKeys("23");
            driver.FindElement(By.Id("dog_weight")).SendKeys("60");
            driver.FindElement(By.Id("dog_conditions")).SendKeys("none");
            driver.FindElement(By.Id("dog_description")).SendKeys("This is an automated description about Cooper.");

            SelectElement dropEnergy = new SelectElement(driver.FindElement(By.Name("dog_energy_level")));
            dropEnergy.SelectByValue("moderate");

            SelectElement dropTraining = new SelectElement(driver.FindElement(By.Name("dog_ease_of_training")));
            dropTraining.SelectByValue("average");

            SelectElement dropGrooming= new SelectElement(driver.FindElement(By.Name("dog_grooming_requirements")));
            dropGrooming.SelectByValue("high");

            SelectElement dropAffection= new SelectElement(driver.FindElement(By.Name("dog_affection_needs")));
            dropAffection.SelectByValue("cuddly");

            //Click Introduce Pup
            driver.FindElement(By.XPath("/html/body/div/div/div[2]/div[3]/div/input")).Click();
            Boolean found = false;
            ReadOnlyCollection<IWebElement> dogName = driver.FindElements(By.TagName("h4"));

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            foreach(var text in dogName)
            {
                string textFound = text.Text;
                Console.WriteLine(textFound);

                if (textFound == "Cooper")
                {
                    Console.WriteLine(textFound);
                    Assert.AreEqual(textFound, "Cooper");
                    found = true;
                }    
            }

            if(!found)
            {
                Assert.False(true);
            }

            Thread.Sleep(2500);
           
        }

    }
}