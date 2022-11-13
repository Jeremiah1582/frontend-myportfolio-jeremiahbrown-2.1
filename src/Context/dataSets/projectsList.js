import Card from "../../Components/Features/Card.jsx";
import ZoeAppPic from "../../images/ZoeApp2021.JPG";
import xoomPic from "../../images/preview-xoom-videochat-app.JPG";
import drumkitPic from "../../images/Screenshot-drumkit-2022-10-28 144448.png";

export const projectsList = [
  //exported to NavArray
  {
    key: "0",
    name: "Zoe Booking Medical Platform",
    link: "https://github.com/Jeremiah1582/zoiapp2021",
    icon: "",
    description:
      " Zoe is booking platform for patience. Where they are able to view what Dr's are available and when they are available in realtime. Dr's are able to modify their availability as it suits them. and both parties are notified when a booking is confirmed",
    img: ZoeAppPic,
    callToAction: "View Code",
  },
  {
    key: "1",
    name: "API for live job listings",
    link: "https://github.com/Jeremiah1582/API-Job_Listing_ENG-DEU-Live",
    liveLink: "https://api-joblisting-eng-deu-live.herokuapp.com/",
    icon: "",
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
    description:
      "'This was a Toy Project where i was just playing around with adding sound to project ",
    img: drumkitPic,
    callToAction: "View Code",
  },
  {
    key: "3",
    name: "test3",
    link: "http/",
    icon: "",
    description: " this is a text project description ",
    img: "https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png",
    callToAction: "View Code",
  },
  {
    key: "4",
    name: "Xoom-VideoChat-app",
    link: "https://github.com/Jeremiah1582/xoom-videochat-app-sep2021",
    icon: "",
    description:
      " This app allows 2 people to talk over video chat. inspired by the pandemic in 2021 because we all communicated via Zoom",
    img: xoomPic,
    callToAction: "View Code",
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
        liveLink={project.liveLink}
        description={project.description}
        callToAction={project.callToAction}
        callToAction2={project.callToAction2}
      />
    ),
  };
});
