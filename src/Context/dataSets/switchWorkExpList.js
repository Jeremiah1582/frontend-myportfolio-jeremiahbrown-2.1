import Card from "../../Components/Features/Card";

export const workExpList = [
  {
    _id: "Movinga",
    company: "Movinga",
    link: "https://www.movinga.com/de/de/",
    linkImg:
      "https://www.harbert.net/wp-content/uploads/2017/10/Movinga2-e1508510172266.jpg",
    industry: ["logistics"],
    title: "Sales Executive",
    duration: "6 months",
    responsibilities: "provide a service to customers needs ",
    callToAction: "view",
  },
  {
    _id: "Quandoo",
    company: "Quandoo",
    link: "https://www.quandoo.de/en",
    linkImg:
      "https://th.bing.com/th/id/R.77c48a9bf31f3bdb8eafdb631407f4a4?rik=wj8T0V2DAghmXw&riu=http%3a%2f%2filbellissimo.com.au%2fwp-content%2fuploads%2f2016%2f11%2fquandoo.jpeg&ehk=nevfeMA00tPMJiGgWWpTZbNlTroel48I0cmO5qSh8k8%3d&risl=&pid=ImgRaw&r=0",
    industry: ["tech"],
    title: "Sales Manager",
    duration: "6 months",
    responsibilities:
      "Acquire new Clients in allocated regions, Pilot new sales department. work out a way to make the department profitable",
    callToAction: "view",
  },
  {
    _id: "ResearchGate",
    company: "ResearchGate",
    link: "https://www.researchgate.net/",
    linkImg:
      "https://th.bing.com/th/id/R.fc5dbabf2677da090611b2849d00ce0f?rik=VvZu8fH000bBig&riu=http%3a%2f%2fwww.renesahba.com%2fuploads%2f1%2f1%2f2%2f1%2f112157115%2fresearchgate-logo_3_orig.png&ehk=vmC4Y%2bHvxDBskPTjHEzbfUwFw7l4IyPG11Cfi2WXAIc%3d&risl=&pid=ImgRaw&r=0",
    industry: ["tech", "life_science", "marketing"],
    title: "Sales Consultant",
    duration: "2.5 Years",
    responsibilities:
      "Acquire new Clients, help Develop new Self Service platform. maintain relationship with existing clients",
    callToAction: "view",
  },
  {
    _id: "FreelancerDev",
    company: "Freelancer Dev",
    link: "#",
    linkImg:
      "https://th.bing.com/th/id/R.6a15a23a99a651ad0159cef0e4b0868a?rik=s6PG5ELcpTfHHw&riu=http%3a%2f%2flptsi.unsoed.ac.id%2fsites%2fdefault%2ffiles%2fcoding.png&ehk=wXjIoVM85%2f5S8YexekzwZUpt1sVFYZOsy%2fQNFTNfh2I%3d&risl=&pid=ImgRaw&r=0",
    industry: ["tech"],
    title: "Web Developer",
    duration: "1 Year",
    responsibilities:
      "help e-commerce companies change their websites to make them more attractive to customers",
    callToAction: "view",
  },
];

export const workExpListCards = workExpList.map((workExpList, indx) => {
  return {
    content: (
      <Card
        id={workExpList._id}
        imagen={workExpList.linkImg}
        name={workExpList.company}
        key={workExpList.company + indx}
        //   icon={workExpList.icon}
        link={workExpList.link}
        description={workExpList.responsibilities}
        callToAction={workExpList.callToAction}
      />
    ),
  };
});
