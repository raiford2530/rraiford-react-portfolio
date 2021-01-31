(this["webpackJsonprraiford-react-portfolio"]=this["webpackJsonprraiford-react-portfolio"]||[]).push([[0],{23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(1),i=a.n(r),c=a(15),n=a.n(c),o=a(7),d=a(2),l=a.p+"static/media/spinning-sphere.a03d44cb.gif";a(23);var h=function(){return Object(s.jsx)("div",{className:"main-container",children:Object(s.jsx)("div",{className:"container h-100 d-flex align-items-center",children:Object(s.jsx)("div",{className:"row mx-auto",children:Object(s.jsxs)("div",{className:"col-sm-12",children:[Object(s.jsxs)("h1",{children:["Hi, I'm Rashawn",Object(s.jsx)("br",{}),"I'm a Full Stack Developer."]}),Object(s.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(s.jsx)("img",{className:"sphere",src:l})})]})})})})};var j=function(){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/portfolio",className:"nav-link",children:"Portolio"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/about",className:"nav-link",children:"About Me"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/contact",className:"nav-link",children:"Contact"})})]})})]})})};var m=function(e){return Object(s.jsx)("div",{className:"container",children:e.children})};a(29);var b=function(e){return Object(s.jsx)("h1",{children:e.title})},u=a.p+"static/media/headshot.2c3b98d6.jpg";a(30);var p=function(){return Object(s.jsxs)(m,{children:[Object(s.jsx)(b,{title:"About"}),Object(s.jsx)("div",{className:"d-flex justify-content-center",children:Object(s.jsx)("img",{id:"headshot",src:u,alt:"Photo of Rashawn"})}),Object(s.jsx)("p",{children:"Hi, I'm Rashawn Raiford. Ever since I was a teenager, I have been fascinated with computers and taking on challenges. Computers were my way of escaping from my small, rural hometown to see places I had never seen and to discover new things."}),Object(s.jsx)("p",{children:"After high school, I started college at Augusta State University. I graduated with a Bachelor's in Management Information Systems in 2012, but after taking a few programming classes during my junior and senior year I became fascinated with computer programming. After I graduated, I started engaging in books and taking online courses to learn more about programming"}),Object(s.jsx)("p",{children:"After I became more confident in my programming skills, I began my journey to start my software development career. I have been employed as a software developer for five years now and have done both frontend and backend work on multiple projects."})]})},g=a(17);a(31);var f=function(e){var t={pathname:"/projects/".concat(e.title),state:{title:e.title,description:e.description,image:e.image,details:e.details}};return Object(s.jsx)(o.b,{to:t,style:{textDecoration:"none",color:"white"},children:Object(s.jsxs)("div",{className:"card bg-project",children:[Object(s.jsx)("img",{src:e.thumbnail,className:"card-img-top",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.title}),Object(s.jsxs)("p",{className:"card-text",children:[e.description,"."]})]})]})})},x=a.p+"static/media/comicbook.d37e9b5a.gif",v=a.p+"static/media/comic-book-finder.87d75527.png",O=a.p+"static/media/barkmatch.759ef9ec.gif",w=a.p+"static/media/barkmatch.e3e81f0d.png",y=a.p+"static/media/eat-da-burger.35d79770.gif",N=a.p+"static/media/eat-da-burger.66a595e0.PNG",k=a.p+"static/media/timed-quiz.e8fcf585.gif",I=a.p+"static/media/timed-quiz.299092ba.png",T=a.p+"static/media/weather-dashboard.70d7efb0.gif",S=a.p+"static/media/weather-dashboard.79aa34dc.png";var A=function(){var e=[{title:"Comicbook Finder",thumbnail:x,image:v,details:"This project was created in a collaboration with me and three other developers with our code hosted in GitHub. The frontend was created using HTML 5 and styled mainly using the Bootstrap framework along with some custom CSS. The backend uses jQuery to call two API's, Comicvine and SuperheroAPI, to retrieve data about the characters and comic books. The page is then populated with elements dynamically created from the clientside Javascript.",description:"A single page website created to find random characters and comic books that the characters made appearances in.",url:"https://raiford2530.github.io/comicbook-finder"},{title:"Bark Match",thumbnail:O,image:w,details:"Barkmatch was created using Node.js and several node packages. The project used the express node package to create the server, view routes, and api routes. The express handlebars node package was used to render templates created on the server side with data pulled in from the database. The Sequelize node package was used for all of the queries to the MySql database. We used node NodeMailer to create and send a confirmation email to a user once they sign up to walk a dog. Authentication was implemented using the Passport node package. All of the styling was done using the Bulma css framework along with custom css.",description:"BarkMatch is a website that allows users to browse dogs and sign up to walk a dog from a list of dogs uploaded by a dog shelter"},{title:"Eat-Da-Burger",thumbnail:y,image:N,details:"Eat-Da-Burger was created using Node.js. I used the express node package for to create view routes and api routes. For the view routes, I used the express handlebars node package to render templates created on the server side. I created an ORM to mediate calls to the MySQL database to create and modify data about the burgers input by the user.",description:"Eat-Da-Burger is a simple web app for users to enter burgers that they want to eat and then indicate when they have eaten the burgers"},{title:"Weather Dashboard",thumbnail:T,image:S,details:"The frontend was created using HTML 5 and styled mainly using the Bootstrap framework along with some custom CSS. The backend uses jQuery to call the OpenWeather API to retrieve the weather data for the searched city. The page is then populated with elements dynamically created from the clientside Javascript. The page uses local storage to store the user's last search so that it persists when the user leaves or refreshes the page.",description:"A website created to find current weather conditions and the five day weather forecast for a given city."},{title:"Timed Quiz",thumbnail:k,image:I,details:"The frontend was created using HTML 5 and styled mainly using the Bootstrap framework along with some custom CSS. I used clientside Javascript to handle the timer and to populate the questions with questions and answers. The webpage uses local storage to store the user's score and display it in the list of highscores on the highscore page.",description:"A website created for a user to take a timed quiz over javascript terms."}];return Object(s.jsxs)(m,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(b,{title:"Portfolio"})})}),Object(s.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(s.jsx)("div",{className:"col-sm-12 col-md-4 pb-4",children:Object(s.jsx)(f,Object(g.a)({},e))},t)}))})]})};var M=function(){return Object(s.jsxs)(m,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(b,{title:"Contact Me"})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"text-center",children:["If you would like to contact me you can email me at ",Object(s.jsx)("a",{href:"mailto:rjraiford87@gmail.com",children:"rjraiford87@gmail.com"})]})})]})};var B=function(e){var t=Object(d.f)();return Object(s.jsxs)(m,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)(b,{title:t.state.title}),Object(s.jsx)("p",{children:t.state.description})]})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("img",{src:t.state.image}),Object(s.jsx)("a",{href:t.state.url,rel:"noreferrer",target:"_blank",children:"Live Site"}),Object(s.jsx)("a",{href:e.repo,rel:"noreferrer",target:"_blank",children:"Github Repo"})]})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h2",{children:"Technical Overview"}),Object(s.jsx)("p",{children:t.state.details})]})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h2",{children:"Technologies"}),Object(s.jsx)("ul",{children:e.technologies})]})})]})};a(32);var C=function(){return Object(s.jsx)("div",{className:"footer d-flex align-items-center justify-content-center",children:Object(s.jsx)("span",{children:"Copyright \xa9 2021 Rashawn Raiford"})})};a(33);var q=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"root-container",children:[Object(s.jsx)(j,{}),Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/",children:Object(s.jsx)(h,{})}),Object(s.jsx)(d.a,{exact:!0,path:"/about",children:Object(s.jsx)(p,{})}),Object(s.jsx)(d.a,{exact:!0,path:"/portfolio",children:Object(s.jsx)(A,{})}),Object(s.jsx)(d.a,{exact:!0,path:"/contact",children:Object(s.jsx)(M,{})}),Object(s.jsx)(d.a,{path:"/projects/:name",children:Object(s.jsx)(B,{})})]}),Object(s.jsx)(C,{})]})})};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7e7f4b69.chunk.js.map