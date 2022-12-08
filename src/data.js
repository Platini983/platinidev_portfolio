 
import RestCountries from "./assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./assets/portfolioImages/spacetourism.jpg";
import Quiz from "./assets/portfolioImages/quiz.png";
import Page from "./assets/portfolioImages/intropage.jpg";
import AWS from "./assets/portfolioImages/adv.png";
import Todo from "./assets/portfolioImages/todolist.png"

// in progress projects

import Servista from './assets/portfolioImages/servista.PNG'
import landingPage from './assets/portfolioImages/url.jpg'
 
const ProjectsData = [
   
  {
    id: "Adventure",
    img: AWS,
    name: "Learning Application",
    stack: ["< React /> " , "< JavaScript /> " , "< Express.js />"],
    live: "https://plat-app.vercel.app/",
    source: "https://github.com/Platini983/plat_app",
    description:  
        "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  },

  {
    id: "quiz-app",
    img: Quiz,
    name: "Quiz App",
    stack: ["< React Js />", "< CSS3 />", "< React Hook />"],
    live: "https://plat-quiz.vercel.app/",
    source: "https://github.com/Platini983/plat_quiz",
    description:  
        "This quiz app was develop using React js and React Hook for Sound Effect. A small app to practice JavaScript first workflow and CSS3",
  },

  {
    id: "todo",
    img: Todo,
    name: "React Todo App",
    stack: ["< React />  ", "< Bootstrap />"],
    live: "https://plat-todolist.vercel.app/",
    source: "https://github.com/Platini983/plat_todolist",
    description:  
        "Responsive React Js todo app. Enables users to add, delete, update a day-to-day tasks. It has user-friendly interface and navigation",
  },

  {
    id: "dropdown-nav",
    img: Page,
    name: "Homepage with dropdown navigation / Figma to React",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "",
    source: "",
    description:  
        "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  },  
   
];

const InprogressProjectsData = [
   
  {
    id: "servista",
    img: Servista,
    name: "Servista",
    stack: ["< Flutter />", "< NodeJS />", "< Blockchain />"],
    live: "",
    source: "https://github.com/rimshub/servista",
    description:  
        "A cross-platform app that connects local service providers with customers. The goal is to maximize the income of local professionals while ensuring the security and comfort of customers",
  },

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData}