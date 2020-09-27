using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Chrome;
using NUnit.Framework;
using System.Collections.ObjectModel;

namespace PROSDEV_MP
{
    public class Admin
    {
        [Test]
        public void TC21()
        {
            IWebDriver driver = new ChromeDriver(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\automation_tests\bin\Debug\netcoreapp3.1");

            // Go to Pawster Page
            driver.Navigate().GoToUrl("http://localhost:3000/");
            // Make the browser full screen
            driver.Manage().Window.Maximize();
            
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);


            IWebElement navigateLoginButton = driver.FindElement(By.Id("loginButton"));
            navigateLoginButton.Click();

            //login to Admin
            driver.FindElement(By.Name("uname")).SendKeys("admin");
            driver.FindElement(By.Id("password")).SendKeys("1234");

            IWebElement loginButton = driver.FindElement(By.Name("button"));
            loginButton.Click();

            //Click The Kennel
            IWebElement kennelButton = driver.FindElement(By.Id("see_dogs"));
            kennelButton.Click();

            //Click the Add Dog
            IWebElement addDogButton = driver.FindElement(By.Id("addDogButton"));
            addDogButton.Click();

            driver.FindElement(By.Id("dog_name")).SendKeys("Cooper");
            SelectElement dropBreed = new SelectElement(driver.FindElement(By.Name("dog_breed")));
            dropBreed.SelectByValue("Corgi");
            //upload photo
            driver.FindElement(By.Name("dog_image")).SendKeys(@"C:\Users\siafr\Desktop\Francine\3rd Year\3rd Term\PROSDEV\PROSDEV-MP\public\img\charlie.png");
            driver.FindElement(By.Name("dog_birthday")).SendKeys("25/08/2020");
            //select gender
            SelectElement dropGender = new SelectElement(driver.FindElement(By.Name("dog_gender")));
            dropGender.SelectByValue("male");

            driver.FindElement(By.Id("dog_height")).SendKeys("23");
            driver.FindElement(By.Id("dog_weight")).SendKeys("60");
            driver.FindElement(By.Id("dog_conditions")).SendKeys("none");
            driver.FindElement(By.Id("dog_description")).SendKeys("This is an automated description about Cooper.");

            //select Energy Level
            SelectElement dropEnergy = new SelectElement(driver.FindElement(By.Name("dog_energy_level")));
            dropEnergy.SelectByValue("moderate");

            //select Ease of Training
            SelectElement dropTraining = new SelectElement(driver.FindElement(By.Name("dog_ease_of_training")));
            dropTraining.SelectByValue("average");

            //select Grooming Requirements
            SelectElement dropGrooming= new SelectElement(driver.FindElement(By.Name("dog_grooming_requirements")));
            dropGrooming.SelectByValue("high");

            //select Affection Needs
            SelectElement dropAffection= new SelectElement(driver.FindElement(By.Name("dog_affection_needs")));
            dropAffection.SelectByValue("cuddly");

            //Click Introduce Pup
            IWebElement introducePupButton = driver.FindElement(By.XPath("/html/body/div[1]/div/div[2]/div[3]/div/input"));
            introducePupButton.Click();
            Boolean found = false;
            ReadOnlyCollection<IWebElement> dogName = driver.FindElements(By.TagName("h4"));
            Console.WriteLine(dogName.Count);
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
           
            driver.Close();
            driver.Quit();
        }

    }
}
