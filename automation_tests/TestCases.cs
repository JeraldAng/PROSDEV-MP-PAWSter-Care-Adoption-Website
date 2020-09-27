using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Chrome;
using NUnit.Framework;
// using Xunit;

namespace PROSDEV_MP
{
    public class TestCases
    {
        
        [Test]
        public void TC10()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();
            
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);


            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys("Testing");
            driver.FindElement(By.Id("password")).SendKeys("Testing1!");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            // IWebElement loginUsernameElement = driver.FindElement(By.Name("uname"));
            // IWebElement loginPasswordElement = driver.FindElement(By.Id("password"));
            // IWebElement loginButtonElement = driver.FindElement(By.Name("button"));

            // loginUsernameElement.SendKeys("Testing");
            // loginPasswordElement.SendKeys("Testing1!");
            // loginButtonElement.Click();

            IWebElement navigateFeedbackButton = driver.FindElement(By.Id("feedbackFormButton"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys("John");
            driver.FindElement(By.Id("lname")).SendKeys("Doe");
            driver.FindElement(By.Id("email")).SendKeys("john.doe@gmail.com");
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

            driver.Close();
            driver.Quit();

        }

        // [TearDown]
        // public void TearDownTC10()
        // {
        //     // Go to Pawster Page
        //     driver.Navigate().GoToUrl("http://localhost:3000/");
        //     // Make the browser full screen
        //     driver.Manage().Window.Maximize();

        //     driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

        //     //Sign In using Admin
        //     IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
        //     navigateLoginButton.Click();

        //     driver.FindElement(By.Name("uname")).SendKeys("admin");
        //     driver.FindElement(By.Id("password")).SendKeys("1234");

        //     IWebElement loginButton = driver.FindElement(By.Name("button"));
        //     loginButton.Click();

        //     //go to feedback page
        //     IWebElement feedbackDataButton = driver.FindElement(By.Id("feedback_data"));
        //     feedbackDataButton.Click();

        //     //selecting the feedback to be deleted
        //     IWebElement feedbackSelect = driver.FindElement(By.XPath("/html/body/div[1]/div[2]/div/table/tbody/tr[1]/td[1]/input"));
        //     IWebElement feedbaaack = driver.FindElement(By.XPath("//input[text() = 'This is a test feedback comment in automation testing.']"));
            
        //     feedbackSelect.Click();

        //     //deleting the feedback
        //     IWebElement deleteRow = driver.FindElement(By.Id("deleteRow"));
        //     deleteRow.Click();

        //     driver.Close();
        // }

        [Test]
        //Feedback Form without First Name
        public void TC11()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            //Login Details
            //username: Testing
            //password: Testing1!
            //email: testing@gmail.com
            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys("Testing");
            driver.FindElement(By.Id("password")).SendKeys("Testing1!");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IWebElement navigateFeedbackButton = driver.FindElement(By.Id("feedbackFormButton"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys("");
            driver.FindElement(By.Id("lname")).SendKeys("Doe");
            driver.FindElement(By.Id("email")).SendKeys("john.doe@gmail.com");
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();

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

            driver.Close();
            driver.Quit();
        }
        
        [Test]
        //Feedback Form without Last Name
        public void TC12()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            //Login Details
            //username: Testing
            //password: Testing1!
            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys("Testing");
            driver.FindElement(By.Id("password")).SendKeys("Testing1!");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IWebElement navigateFeedbackButton = driver.FindElement(By.Id("feedbackFormButton"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys("John");
            driver.FindElement(By.Id("lname")).SendKeys("");
            driver.FindElement(By.Id("email")).SendKeys("john.doe@gmail.com");
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();

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

            driver.Close();
        }
        
        [Test]
        //Feedback Form without Email Address
        public void TC13()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            //Login Details
            //username: Testing
            //password: Testing1!
            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys("Testing");
            driver.FindElement(By.Id("password")).SendKeys("Testing1!");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement navigateFeedbackButton = driver.FindElement(By.Id("feedbackFormButton"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys("John");
            driver.FindElement(By.Id("lname")).SendKeys("Doe");
            driver.FindElement(By.Id("email")).SendKeys("");
            driver.FindElement(By.Id("comment")).SendKeys("This is a test feedback comment in automation testing.");
            driver.FindElement(By.Id("submit-btn")).Click();

            // IWebElement inputBox = driver.FindElement(By.Id("email"));
            // String textInsideInputBox = inputBox.GetAttribute("value");

            // if(textInsideInputBox.Equals(""))
            // {
            //     Assert.True(true);
            // }
            // else
            // {
            //     Assert.False(true);
            // }

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

            driver.Close();
            driver.Quit();
        }

        [Test]
        //Feedback Form without Feedback
        public void TC14()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            //Login Details
            //username: Testing
            //password: Testing1!
            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            driver.FindElement(By.Name("uname")).SendKeys("Testing");
            driver.FindElement(By.Id("password")).SendKeys("Testing1!");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            IWebElement navigateFeedbackButton = driver.FindElement(By.Id("feedbackFormButton"));
            navigateFeedbackButton.Click();

            driver.FindElement(By.Id("fname")).SendKeys("John");
            driver.FindElement(By.Id("lname")).SendKeys("Doe");
            driver.FindElement(By.Id("email")).SendKeys("john.doe@gmail.com");
            driver.FindElement(By.Id("comment")).SendKeys("");
            driver.FindElement(By.Id("submit-btn")).Click();

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

            driver.Close();
            driver.Quit();
        }

    }
}
