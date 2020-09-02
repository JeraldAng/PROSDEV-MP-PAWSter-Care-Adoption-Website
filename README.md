![PAWSter Care](https://cdn.discordapp.com/attachments/734659959794565223/750706927708799016/header-readme.png)
> This is the major course requirement for the subject Professional Software Development (PROSDEV). 
# 🐾PAWSter Care
PAWSter Care is a dog adoption website that allows users to view at and adopt dogs. Users must register for them to be able to adopt dogs, but are free to view them even without an account. Adopting a dog requires the user answering a form. All pending adoption requests may be viewed in their profile.
Users may also fill up feedback forms about the services, as well as about the dog/s that they have adopted/will adopt. Aside from that, they may view and edit their profile.
<hr>

# Table of Contents
* [Team Members](#team-members)
* [Project Demo](#project-demo)
* [Typers of Users] (#types-of-users)
* [Requirements] (#requirements)

## ✨Team Members
<a name="team-members"></a>
* 👩🏻‍🎓 <b>PM:</b> Marjorie Lua [@MarjorieLua](https://github.com/MarjorieLua)
* 👨🏻‍🎓 <b>DEV:</b> Jerald Ang [@JeraldAng](https://github.com/JeraldAng)
* 👩🏻‍🎓 <b>DEV:</b> Dyonne Macalino [@Dyonne](https://github.com/dyonne-mio)
* 👨🏻‍🎓 <b>DEV:</b> Jomari Morales [@JomariAlexMP](https://github.com/JomariAlexMP)
* 👩🏻‍🎓 <b>QA:</b> Francine Sia [@FrancineSia](https://github.com/siafrancine)
* 👨🏻‍🎓 <b>QA:</b> Jeremy Coronia [@JeremyCoronia](https://github.com/JeremyCoronia)

## 💻Project Demo
<a name="project-demo"></a>
! [Home] (https://cdn.discordapp.com/attachments/734659959794565223/750723709609836645/pawsterhome.gif)

### 🕵🏻‍♂️Types of users
<a name="types-of-users"></a>
1. Administrator/Manager

    The administrator is in charge of managing all information about the dogs. They may add a new dog for adoption, as well as edit an existing dog's information. Admin/s also have access to the info of registered users. 

    The admin is responsible for **approving** or **rejecting** all pending adoption requests. An **adopted** dog is no longer viewable by other users, but a dog with a pending request is still viewable. 

    The admin can log in using a pre-made administrator account. 

2. User

    A user is a registered account. Once logged in, users have the ability to request a dog up for adoption. They may also view their account profile, within which they may also view all of their pending adoption requests (if there are).

3. Guest/Visitor

    A guest is an anonymous user that is not logged in. They may access the website and view the dogs that have not been adopted yet. They may also look at the FAQs, policies administered by PAWSter, as well as the guidelines and steps on how to adopt a dog from PAWSter Care.

    That is as much as they can do. To access the other user-related features of the website, they must register an account and log in. Guests register with their first and last name, a valid email address, and a password.

## Setting Up
### Installation 
1. Run `npm install jest` to install Jest for unit testing.
3. Ensure that you have MongoDB installed and set up on your system. 

### Setting Up
1. In the *C:\Program Files\MongoDB\Server\ (version)\bin* directory, run 'mongod.exe'. Alternatively, open the command prompt in the same directory and run the command `mongod`.

2. Run 'mongo.exe' afterwards. Alternatively, run the command `mongo` in a separate command prompt. 

3. Run `node server.js` in the command line in the main folder (in the same directory as the packages).