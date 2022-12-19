import Quiz from "./assets/portfolioImages/quiz.png";
import Page from "./assets/portfolioImages/Plat_management_site.png";
import AWS from "./assets/portfolioImages/adv.png";
import Todo from "./assets/portfolioImages/todolist.png"

// in progress projects

import Checkout_card from "./assets/portfolioImages/plat_checkout_card.png";
import landingPage from './assets/portfolioImages/plat_weather.png'
import Portfolio_landingPage from './assets/portfolioImages/portfolio.png'


// completed projects
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
    name: "Homepage with navigation / Figma to React",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://www.behance.net/amponsahmichael",
    source: "https://www.behance.net/amponsahmichael",
    description:  
        "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  },  
   
];


// in progress projects
const InprogressProjectsData = [
   
  {
    id: "checkout",
    img: Checkout_card,
    name: "UI Design using Figma",
    stack: ["< Figma />"],
    live: "",
    source: "https://www.behance.net/amponsahmichael",
    description:  
        "A Check_out user Interface design made with Figma ",
  },

  {
    id: "weather",
    img: landingPage,
    name: "UI Design using Figma",
    stack: ["< Figma />"],
    live: "",
    source: "https://www.behance.net/amponsahmichael",
    description:  
        "A Weather user Interface design made with Figma ",
  },

  {
    id: "portfolio",
    img: Portfolio_landingPage,
    name: "Porfolio Page / Figma to Reactjs",
    stack: ["< React JS />"],
    live: "https://platdev-portfolio.vercel.app/",
    source: "https://www.behance.net/amponsahmichael",
    description:  
        "A UI Portfolio landing page design done with Figma and developed using react js and other react component",
  },

];

// eslint-disable-next-line import/no-anonymous-default-export
export default {ProjectsData, InprogressProjectsData}