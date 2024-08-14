import {
  movie,
  nike,
  eventify,
  promptopia,
  danDrepairs,
  brainwave,
  yoom,
} from "./assets/icons";

import {
  html,
  css,
  tailwind,
  bootstrap,
  react,
  javascript,
  typescript,
  node,
  express,
  mongo,
  mongoose,
  github,
  redux,
} from "./assets/logos";

export const navLinks = {
  Home: "#home",
  About: "#about",
  Skills: "#skills",
  Services: "#Services",
  Portfolio: "#Portfolio",
  Contact: "#contact",
};

export const skillFrontEnd = [
  {
    name: "Html",
    logo: html,
    placeholder: "Html Logo",
    link: "https://en.wikipedia.org/wiki/HTML5",
  },
  {
    name: "Css",
    logo: css,
    placeholder: "Css logo",
    link: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    name: "Tailwind",
    logo: tailwind,
    placeholder: "Tailwind logo",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    logo: bootstrap,
    placeholder: "Bootstrap Logo",
    link: "https://getbootstrap.com/",
  },
  {
    name: "React",
    logo: react,
    placeholder: "React Logo",
    link: "https://react.dev/",
  },
];

export const skillBackEnd = [
  {
    name: "JavaScript",
    logo: javascript,
    placeholder: "JavaScript Logo",
    link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    name: "TypeScript",
    logo: typescript,
    placeholder: "TypeScript Logo",
    link: "https://en.wikipedia.org/wiki/TypeScript",
  },
  {
    name: "NodeJs",
    logo: node,
    placeholder: "Nodejs Logo",
    link: "https://nodejs.org/en",
  },

  {
    name: "ExpressJs",
    logo: express,
    placeholder: "ExpressJs Logo",
    link: "https://expressjs.com/",
  },
];

export const skillOther = [
  {
    name: "MongoDB",
    logo: mongo,
    placeholder: "MongoDB Logo",
    link: "https://www.mongodb.com/",
  },
  {
    name: "MongooseJs",
    logo: mongoose,
    placeholder: "Mongoose Logo",
    link: "https://mongoosejs.com/",
  },
  {
    name: "Github",
    logo: github,
    placeholder: "GitHub Logo",
    link: "https://github.com/",
  },
  {
    name: "Redux",
    logo: redux,
    placeholder: "Redux Logo",
    link: "https://redux.js.org/",
  },
];

export const portfolioProjects = [
  {
    iconUrl: nike,
    name: "Nike Product Showcase",
    description:
      "Developed a beautiful web application that shows the nike products and shows the prices for some beautiful appreal.",
    link: "https://nike-18.web.app/",
    github: "https://github.com/justSammDev/NikeLandingPage",
  },
  {
    iconUrl: promptopia,
    theme: "btn-back-yellow",
    name: "AI Prompt Sharing App",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.This allows its user to share and discover AI prompts",
    link: "https://promptopia-orcin-five.vercel.app/",
    github: "https://github.com/justSammDev/promptopia",
  },
  {
    iconUrl: eventify,
    theme: "btn-back-blue",
    name: "Event Sharing App",
    description:
      "Built a web app for creating and sharing events as well as event tickets. Implemented stripe for realtime sale and purchase of tickets to events.",
    link: "https://eventify-nine.vercel.app/",
    github: "https://github.com/justSammDev/eventify",
  },
  {
    iconUrl: danDrepairs,
    theme: "btn-back-pink",
    name: "Ticketing App",
    description:
      "Built a complete ticket based app where the admin can task his employess with tasks and the employees can complete the task. Based on the requirements of the admin.",
    link: "https://techhynotes.onrender.com/",
    github: "https://github.com/justSammDev/techhy-frontend",
  },
  {
    iconUrl: movie,
    theme: "btn-back-black",
    name: "Movie Database App",
    description:
      "Developed a web application to check the IMDB database for the latest movies and tvshows and add them to favourites.",
    link: "https://movietvshowdb.netlify.app/",
    github: "https://github.com/justSammDev/MovieDB",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-green",
    name: "Modern UI/UX App",
    description:
      "Developed a beautiful modern UI/UX application that utilizes some of the latest UI practices.",
    link: "https://bwave.netlify.app/",
    github: "https://github.com/justSammDev/brainwave-project",
  },
  {
    iconUrl: yoom,
    theme: "btn-back-blue",
    name: "Zoom Clone",
    description:
      "Built a zoom clone with most of its features using Stream.io for meeting functionalities and Clerk for user management ",
    link: "https://zoom-clone-self.vercel.app/",
    github: "https://github.com/justSammDev/zoom_clone",
  },
];
