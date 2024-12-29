import yumrun from "./assets/YumRun.png";
import netflix from "./assets/Netflix.jpg";
import focustube from "./assets/FocusTube.png";
const header = {
  homepage: "",
  title: "Tharmithan",
};
const about = {
  name: "Tharmithan",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer"],
  description:
    "I am an aspiring full-stack developer focused on MERN stack with experience in building responsive, interactive web applications. Passionate about learning new technologies and writing clean, efficient code.",
  resume:
    "https://drive.google.com/file/d/1dvEYjb9pfwfmeUxYcSTcv50cUQxBIRUa/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/tharmithan-n-3ba9441b7/",
    github: "https://github.com/Tharmithan-N",
  },
};
const projects = [
  {
    name: "YumRun",
    description:
      "A food ordering app built with React, Redux, and Tailwind CSS. It offers a clean user interface and seamless user experience for ordering meals.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: yumrun,
    sourceCode: "https://github.com/sankitdev/YumRun",
    livePreview: "https://yumrun-b81a7.web.app/",
  },
  {
    name: "NetFlix GPT",
    description:
      "Netflix GPT is a single-page web application that allows users to explore movies from the TMDB API, while offering AI-powered content generation through GPT. The app leverages React for the frontend, Redux for state management, and Firebase for authentication.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: netflix,
    sourceCode: "https://github.com/sankitdev/YumRun",
    livePreview: "https://netflixgpt-b8752.web.app/",
  },
  {
    name: "FocusTube",
    description:
      "A YouTube clone focused on providing a clean and minimal video browsing experience. Built with React and Redux, featuring responsive design.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: focustube,
    sourceCode: "https://github.com/sankitdev/focus-tube",
    livePreview: "",
  },
];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];
const contact = {
  email: "kumartharmi98@gmail.com",
};

export { header, about, projects, skills, contact };
