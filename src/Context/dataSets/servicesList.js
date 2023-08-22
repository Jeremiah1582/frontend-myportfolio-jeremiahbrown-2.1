import Card from "../../Components/Features/Card.jsx";
import saleCycle from "../../images/7-stufen-sales-cycle.png";
import mernStack from "../../images/mern-stack-banner-image.png";
import frontEndExample from "../../images/FrontendWedDevImgExampleTravelHouse.png";
import backEndExample from "../../images/backend-illustrationPNG.gif";
import CloudComputing from "../../images/CloudComputinggif.gif";
export const servicesList = [
  {
    name: "Full-Stack Development",
    link: "https://www.mongodb.com/mern-stack#:~:text=MERN%20is%20the%20stack%20of%20choice%20for%20today%E2%80%99s,JSON-heavy%2C%20cloud-native%2C%20and%20that%20have%20dynamic%20web%20interfaces.",
    icon: "",
    experience: "since 2020 ",
    description:
      "MERN is an acronym for MongoDb, Express.Js, React.Js, and Node.Js. I use the MERN Stack on a daily basis and am very good understanding of how these entities work together in web applications.",
    img: mernStack,
    callToAction: "Learn More",
  },
  {
    name: "Front-End UI/UX Development",
    link: "https://www.scholarhat.com/tutorial/fullstack/what-is-front-end-development-who-is-frontend-developer#:~:text=A%20front%20end%20developer%2C%20can%20also%20know%20as,can%20access%20or%20interact%20with%20the%20application%20eventually.",
    icon: "",
    experience: "since 2020",
    description:
      "sometime your product works perfectly just the way it is and all it needs is a little,or a lot, of polish to make the UX seamless. ",
    img: frontEndExample,
    callToAction: "Learn More",
  },
  {
    name: "Back-End Development",
    link: "https://blog.hubspot.com/website/back-end-developer",
    icon: "",
    experience: "since 2020",
    description: "Perhaps you would like to connect your user interface with your database, or call information from a server or API. The backend can help you achieve all of this, ",
    img: backEndExample,
    callToAction: "Learn More",
  },
  {
    name: "AWS Cloud Insights",
    link: "https://aws.amazon.com/what-is-cloud-computing/",
    icon: "",
    experience: "since 2022",
    description: "Need to migrate your services or large sums or data? Maybe you're looking for a more flexible solution to your enterprises digital infrastructure? Either way, Reach out and see what solutions are available to you",
    img: CloudComputing,
    callToAction: "Learn More",
  },
  {
    name: "Sales & Marketing Consultation",
    link: "https://www.linkedin.com/business/sales/blog/sales-and-marketing/the-3-b2b-sales-and-marketing-structural-gaps-hampering-business",
    icon: "",
    experience: "Since 2010",
    description:
      "Are you looking for a way to launch your product or service successfully? Do you want to communicate the value of your offer clearly and persuasively? If so, you need a professional who can help you understand your market and craft a compelling value proposition. That’s where I come in. I’m a marketing and sales consultant with experience in helping businesses like yours achieve their goals. Let me help you create a winning strategy for your product or service. Contact me today and let’s get started.",
    img: saleCycle,
    callToAction: "Learn More",
  },
  
];
export const servicesListCards = servicesList.map((service, idx) => {
  return {
    key: idx,
    name: service.name,
    link: service.link,
    icon: service.icon,
    description: service.description,
    content: (
      <Card
        imagen={service.img}
        name={service.name}
        key={idx}
        icon={service.icon}
        link={service.link}
        description={service.description}
        callToAction={service.callToAction}
      />
    ),
  };
});
