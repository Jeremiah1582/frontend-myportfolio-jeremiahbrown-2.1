import defaultprofilePic from "../../images/2019_me_taken_ByEby-Degu.jpg";

export const defaultUserState = {
  accountType: "admin",
  firstName: "Jeremiah ",
  lastName: "Brown",
  title: "MERN Developer",
  email: "jeremiah.1582@googlemail.com",
  mobile: "+491782822679",
  location: "Berlin",
  socials: [
    {
      name: "github",
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png",
      link: "https://github.com/Jeremiah1582",
    },
    {
      name: "facebook",
      img: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-256.png",
      link: "https://www.facebook.com/jeremiahglobetrotterbrown.1582",
    },
    {
      name: "instagram",
      img: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png",
      link: "https://www.instagram.com/itispronouncedjeremiah/",
    },
    {
      name: "linkedin",
      img: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_linkedin-256.png",
      link: "https://www.linkedin.com/in/jeremiah-brown-35232190/",
    },
  ],

  profilePic: defaultprofilePic,
  password: "",
  signupDate: "",
  aboutUser: "",
  messagesReceived: [
    {
      userId: {},
      author: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      dateReceived: {
        type: "",
        default: "",
      },
    },
  ],
  projects: [
    {
      userId: {},
      projectLink: "",
      projectImg: "",
      projectName: "",
      projectDescription: "",
      projectStatus: "",
      dateOfCompletion: "",
    },
  ],
  workExperience: [
    {
      startDate: "",
      endDate: "",
      companyName: "",
      position: "",
      responsibilities: "",
    },
  ],
  files: {
    cv: [
      {
        userId: "",
        idInBucket: "",
        fileName: "",
        contentType: "",
        mimetype: "",
      },
    ],
    references: [
      {
        userId: {},
        fileName: "",
        file: {},
      },
    ],
    qualifications: [
      {
        userId: {},
        fileName: "",
        qualificationName: "",
        institutionName: "",
        file: {},
      },
    ],
  },
};
