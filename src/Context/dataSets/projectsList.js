import Card from "../../Components/Features/Card.jsx";
import ZoeAppPic from "../../images/ZoeApp2021.JPG";
import xoomPic from "../../images/preview-xoom-videochat-app.JPG";
import drumkitPic from "../../images/Screenshot-drumkit-2022-10-28 144448.png";
import feel_your_flow from "../../images/feel_your_flow.png";
import portfolioPic from "../../images/portfolioPic.png"
import {codingLanguages} from "./codeStackDataset"

const stackUsedInProject=(item)=>{
    const result=codingLanguages.filter(language=>{return language.name===item? (language):null})
    console.log(result);
return result
} 

export const projectsList = [
  //exported to NavArray
  
  {
    key: "0",
    name: "Zoe Booking Medical Platform",
    link: "https://github.com/Jeremiah1582/zoiapp2021",
    icon: "",
    teachStack:["JS","CSS", "HTML", "React", "MongoDB", "Node.js", "ExpressJS", "Mongoose", ],
    description:
      " Zoe is booking platform for patience. Where they are able to view what Dr's are available and when they are available in realtime. Dr's are able to modify their availability as it suits them. and both parties are notified when a booking is confirmed",
    img: ZoeAppPic,
    callToAction: "View Code",
  },
  {
    key: "1",
    name: "API for live job listings",
    link: "https://github.com/Jeremiah1582/API-Job_Listing_ENG-DEU-Live",
    liveLink: "https://api-job-listing-eng-deu-live.vercel.app/listings/",
    icon: "",
    teachStack:["JS", "Node.js", "ExpressJS", "Heroku" ],
    description:
      " This was an API I created and put online so I could easily see new Dev-job-listings from multiple sites  in one place, in including jobs listed on Linkedin and Reed. This API can also be used in future projects. ",

    img: "https://miro.medium.com/max/12000/1*TFID1s1A9fWVtNVTg9FZ7A.jpeg",
    callToAction: "View Code",
    callToAction2: "View API",
  },
  {
    key: "2",
    name: "DrumKit-Toy-Project",
    link: "https://github.com/Jeremiah1582/DRum-Kit-Toy-Project",
    icon: "",
    teachStack:["JS","CSS", "HTML", "React" ],
    description:
      " Front end Toy Project where i was learning how to sound to project",
    img: drumkitPic,
    callToAction: "View Code",
  },
  {
    key: "3",
    name: "My Porfolio",
    link: "https://github.com/Jeremiah1582/frontend-myportfolio-jeremiahbrown-2.1",
    liveLink:"https://github.com/Jeremiah1582/backend-production-myportfolio-jeremiahbrown-2.1" , 
    icon: "",
    teachStack:["JS","SCSS", "HTML", "React", "MongoDB", "Node.js", "ExpressJS", "Mongoose", "GridFs", "Vercel"],
    description: " This personal Full stack project was optimized to run on mobile and desktop web browsers",
    img: portfolioPic,
    callToAction: "View front end Code",
    callToAction2: "View back end Code",
  },
  {
    key: "4",
    name: "Xoom-VideoChat-app",
    link: "https://github.com/Jeremiah1582/xoom-videochat-app-sep2021",
    icon: "",
    description:
      " This app allows 2 people to talk over video chat. inspired by the pandemic in 2021 because we all communicated via Zoom",
      teachStack:["JS", "Socket.io", "CSS", "HTML", "React", "Node", "ExpressJS"],
    img: xoomPic,
    callToAction: "View Code",
  },
  {
    key: "5",
    name: "feelyourflow.de",
    link:null,
    liveLink: "https://feelyourflow.de/",
    icon: "",
    description:
      " This is a client example that is live and operational. Here we learned to used Shopify Liquids template-engine to construct this site",
    teachStack:["JS", "Shopify Liquid", "CSS", "HTML"],
    img: feel_your_flow,
    callToAction2: "go to site",
  },
];

export const projectListCards = projectsList.map((project, idx) => {
  return {
    content: (
      <Card
        imagen={project.img}
        name={project.name}
        key={project.name + idx}
        icon={project.icon}
        link={project.link}
        techStack={project.techStack}
        liveLink={project.liveLink}
        description={project.description}
        callToAction={project.callToAction}
        callToAction2={project.callToAction2}
      />
    ),
  };
});
