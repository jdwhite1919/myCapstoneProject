# Pack Fitness

Pack Fitness is new personal training fitness company aimed at keeping people healthy, fit, and informed during the times of Covid-19. Founded by certified trainers JD White and Dylan Cervantez, Pack Fitness focuses on an individualized experiences for all clients that seek advice and direction. Whether you are a beginner, intermediate, advanced, or olympian athlete, we will cater our expertise for your goals, and can be as much or as little involved as the client wants us to be. We will also be a hub of Covid-19 era fitness, with risks and rewards of returning to gyms during this dangerous time.

## Overview

The Pack Fitness website was created using a single page application format. A single page application is the modern way to display websites; all information is loaded by the browser all at once, and the server will present information based on the user interaction and what is requested. It is written on the back end using Node.js and Express, and the front end using HTML, CSS, and vanilla JavaScript. Most of the content is presented using html and css, and currently in future state of using JavaScript to make the front end more interactive.

The website is/can be presented as follows: back end, front end, and both:

1. [Heroku](heroku.com)
2. [Netlify](netlify.com)
3. (local server)

## Front end

**Navigation Bar,**
The navigation bar was created using HTML and CSS and operates based on exported JavaScript Functions that operate in the root index.js file, views and components folder, and the store folder, mainly the Links.js file in the store folder.

**Each Page**
Each page is structured and styled using HTML and CSS, with interactive front end JavaScript to come. Videos, paragraphs, pictures, forms, and links to other websites were all used with HTML tags and styled with CSS.

The biggest piece of future state on the front end side will be the interactive calculator to help clients calculate out their macronutrient daily intake, find out their maximum heart rate safe during workouts, and more. Currently the calculator works with static website building, since all buttons can be treated as one through HTML tags and vanilla JavaScript. However, with SPA, query selectors need to be used to treat each button as separate function.

The form is up and ready for an intake of information. While receiving form information can be done on the server-side, I currently have it done through a third party app called Formspree, where I can still get all the information in a safe manner and in entirety. 👍🏾

**APIs and Database**
The weather information is pulled from another database, from Open Weather Map. The two servers (mine and open weather) are connected and communicating, pulling from their database. However, I do plan to install and display information from my own database, a food-dictionary of sorts that includes a variety of health information from a generic food. This will also include a blog where guests can put advice on diet.
