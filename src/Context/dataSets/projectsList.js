import Card from "../../Components/Features/Card.jsx";
import ZoeAppPic from "../../images/ZoeApp2021.JPG";
import xoomPic from "../../images/preview-xoom-videochat-app.JPG";
import drumkitPic from "../../images/Screenshot-drumkit-2022-10-28 144448.png";
import feel_your_flow from "../../images/feel_your_flow.png";
import portfolioPic from "../../images/portfolioPic.png"
import dataClean from "../../images/data_processing_img.gif"
import OpenAi from "../../images/OpenAI_Logo.png"
import chatbot from "../../images/ChatbotImage.gif"
import {codingLanguages} from "./codeStackDataset"
import brainArt from "../../images/BrainArt.png"


export const projectsList = [
  //exported to NavArray
  

  {
    name: "Zoe Booking Medical Platform",
    link: "https://github.com/Jeremiah1582/zoiapp2021",
    icon: "",
    techStack:["JS","CSS", "HTML", "React", "MongoDB", "Node.js", "ExpressJS", "Mongoose", ],
    description:
      " Zoe is booking platform for patience. Where they are able to view what Dr's are available and when they are available in realtime. Dr's are able to modify their availability as it suits them. and both parties are notified when a booking is confirmed",
    img: ZoeAppPic,
    callToAction: "View Code",
  },
  {
    
    name: "API for live job listings",
    link: "https://github.com/Jeremiah1582/API-Job_Listing_ENG-DEU-Live",
    liveLink: "https://api-job-listing-eng-deu-live.vercel.app",
    icon: "",
    techStack:["JS", "Node.js", "ExpressJS", "Heroku" ],
    description:
      " This was an API I created and put online so I could easily see new Dev-job-listings from multiple sites  in one place, in including jobs listed on Linkedin and Reed. This API can also be used in future projects. ",

    img: "https://miro.medium.com/max/12000/1*TFID1s1A9fWVtNVTg9FZ7A.jpeg",
    callToAction: "View Code",
    // callToAction2: "View API",
  },
  {
   
    name: "DrumKit-Toy-Project",
    link: "https://github.com/Jeremiah1582/DRum-Kit-Toy-Project",
    icon: "",
    techStack:["JS","CSS", "HTML", "React" ],
    description:
      " Front end Toy Project where i was learning how to sound to project",
    img: drumkitPic,
    callToAction: "View Code",
  },
  {
 
    name: "My Porfolio",
    link: "https://github.com/Jeremiah1582/frontend-myportfolio-jeremiahbrown-2.1",
    liveLink:"https://github.com/Jeremiah1582/backend-production-myportfolio-jeremiahbrown-2.1" , 
    icon: "",
    techStack:["JS","SCSS", "HTML", "React", "MongoDB", "Node.js", "ExpressJS", "Mongoose", "GridFs", "Vercel"],
    description: " This personal Full stack project was optimized to run on mobile and desktop web browsers",
    img: portfolioPic,
    callToAction: "View front end Code",
    callToAction2: "View back end Code",
  },
  {
    name: "Xoom-VideoChat-app",
    link: "https://github.com/Jeremiah1582/xoom-videochat-app-sep2021",
    icon: "",
    description:
      " This app allows 2 people to talk over video chat. inspired by the pandemic in 2021 because we all communicated via Zoom",
      techStack:["JS", "Socket.io", "WebRtc", "CSS", "HTML", "React", "Node", "ExpressJS"],
    img: xoomPic,
    callToAction: "View Code",
  },
  {

    name: "Data Cleaning with Python",
    link: 'https://github.com/Jeremiah1582/Cleaning_Data_Python-',
    liveLink: "",
    icon: "",
    description:
      "Used Python to Automate the process of cleaning and standardising corrupt data in .csv files .",
    techStack:["Python"],
    img: dataClean ,
    callToAction: "View Code",
  },
  {
    
    name: "Chat-GPT Mini Project",
    link: 'https://github.com/Jeremiah1582/Chat-GPT-basic-test',
    liveLink: "",
    icon: "",
    description:
      "Using the Chat-GPT API to interact with the AI.",
    techStack:["Python"],
    img: OpenAi ,
    callToAction: "View Code",
  },
  {
   
    name: "feelyourflow.de",
    link:null,
    liveLink: "https://feelyourflow.de/",
    icon: "",
    description:
      " This is a client example that is live and operational. Here we learned to used Shopify Liquids template-engine to construct this site",
    techStack:["JS", "Shopify Liquid", "CSS", "HTML"],
    img: feel_your_flow,
    callToAction2: "go to site",
  },
  {
    name: "AI Chatbot",
    link:"https://github.com/Jeremiah1582/ChatBot-GPT3",
    icon: "",
    description:
      "This Project uses OpenAI's ChatGPT model as an AI Chatbot. Ask the chatbot anything and be amazed by the response",
    techStack:["OpenAI","Python", "flask", "CSS", "React.js"],
    img: chatbot,
    callToAction: "View Code ",
  },
  {
    name:"Brain Art", 
    link:'https://github.com/Jeremiah1582/Brain-Art-A-Thought-Bloggin-NEXTjs-App',
    icon:"",
    techStack:["Next.js 13", "Tailwind", "MongoDB"],
    description:"This is a Blogging App built with Next.js 13 that allows users to create an account and post their thoughts. The app is still in development and will be updated with new features in the future",
    img: brainArt,
    callToAction:"View Code",
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
