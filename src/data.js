import pics from "./img/react.png"
// import jspic from "./img/js.png"
import djangopic from "./img/protaxsol.jpeg"
import jupyter from "./img/jupyter.png"
import Freelance from "./img/freelance.jfif"
import MobileApp from "./img/mobileApp.jfif"
import WebApp from "./img/webApp.png"
export const products = [
  {
      id: 1,
      img: pics,
      livelink: "https://collinskandieportfolio.web.app",
      title:"Personal Porfolio",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      gitHubLink:"https://github.com/collinskandie/MyPortfolio-react.git"
    },
    {
      id: 2,
      img: djangopic,
      livelink: "https://collinskandie.github.io/Protaxsol-website",
      title:"Protaxsol Consultants Website",
      description:"This is a website for a tax consulting firm in Eldoret. The site is made with html and bootstraps. It was an introduction to using bootstraps and i used it as alearning phase. I was able to practice creating mobile responsive web pages. The challenges i faced is learning how to style the pages without using `bootstrap's primary colours`. ",
      gitHubLink:"https://github.com/collinskandie/Protaxsol-website.git"
    },
    {
      id: 3,
      img:jupyter,
      livelink: "https://collinskandieportfolio.web.app",
      title:"Data science project",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      gitHubLink:""
    }
  ];
  export const Services = [
    {
      id:1 ,
      img: WebApp,
      title:"Full Stack Web Developer",
      description:"Full Stack Web Developer,Full Stack Web DeveloperFull Stack Web DevelopervFull Stack Web DevelopervvFull Stack Web DeveloperFull Stack Web Developerv"

    },
    {
      id:2,
      img: MobileApp,
      title:"Mobile App Developer",
      description:"Full Stack Web Developer,Full Stack Web DeveloperFull Stack Web DevelopervFull Stack Web DevelopervvFull Stack Web DeveloperFull Stack Web Developerv"

    },
    {
      id: 3,
      img: Freelance,
      title:"Freelance developer",
      description:"Full Stack Web Developer,Full Stack Web DeveloperFull Stack Web DevelopervFull Stack Web DevelopervvFull Stack Web DeveloperFull Stack Web Developerv"

    }
    
  ];