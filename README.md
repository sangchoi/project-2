# **JOURNEY**

Journey is an app that will allow users to find traveling buddies who speak a different language than the user. 

## Preview:
![Image of Journey](https://github.com/sangchoi/project-2/blob/master/static/img/screenshot.png)

## Link to website
[Journey](https://infinite-ravine-17494.herokuapp.com/)

## Technology and Languages Used:
HTML, CSS, Javascript, NodeJs, Express, Psql

## User Story/Objectives:
    * User will be able to find a buddy who can speak a different language
    * User will be able to find a buddy they can travel with

    User wants to travel to another country -> User cannot speak that country's language -> User hears about this great app called "Journey" -> User signs up -> User clicks on the country they want to go to -> User adds that country to their destination wish list -> User also sees other users who speak that country's language listed -> User adds new friend to their friend's list -> Users exchange contact info and begins friendship

## Personal Tech Objectives: 
    - [x] Use an API
    - [x] Create and use a database
    - [x] Create CRUD routes

## Approach and Process:
I was a bit nervous going into Project #2. I felt that I only had a light grasp on building CRUD routes, creating a database, and using an API. My first step was trying to find an API that was easily accessible, and then building an idea for what type of application I would want to create. 

My thought and design process looked somewhat like this:

FIND AN API -> BUILD IDEA -> STUDY AND REVIEW NOTES -> CONCEPTUALIZE WIREFRAME -> BUILD MODELS -> CONNECT TO WIREFRAME -> EDIT MODEL AND WIREFRAME -> CODE/EDIT USING NODE -> DESIGN WITH HTML/CSS

## MODEL
Building my model took me about a day to create, and was more taxing than I had thought, but in the end it was beneficial that I took the time to thorougly have it thought out. 

![Image of Model](https://github.com/sangchoi/project-2/blob/master/static/img/models.jpg)

## WIREFRAME
I am so glad I took the time to wireframe after completing my models. It made me edit mistakes I had previously made in my models before I began my project. After I began to code, I also had to switch the flow of my wireframe. Initially, I had it set up that users would be directed to the country page after they had signed up, but due to the nature of one to one relationships, the user had to create a profile before being able to use the website. 

![Image of Wireframe](https://github.com/sangchoi/project-2/blob/master/static/img/appwireframe.jpg)

## Issues: Solved [x] and Unsolved [ ]

    - [x] Creating a profile. It would not let the user do anything after they had signed up because their profile was blank, but I was able to fix it by having the user be immediately re-directed to the create profile page.
    - [ ] The isLoggedIn middleware is still glitchy. Users will have to click twice sometimes to log out.

## Future Improvements/Considerations to Include
    * Chatting feature
    * Map of user's destination wish list
    * Ability to search and filter users

## Credits:

**Pixel Art:**

* Websites
    * http://motocross-arts.tumblr.com
    * https://imgur.com/gallery/VJ2pp

