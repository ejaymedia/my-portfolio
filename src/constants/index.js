import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ejaymediavercelapp,
  termpw,
  robofriends,
  threejs,
  mhft,
  sketcher,
  CompileVortex,
  weather,
  nHub,
  nta2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML 5", icon: html },
  { title: "CSS", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Frontend Development Trainee",
    company_name: "nHub Foundation | Jos, Nigeria",
    icon: nHub,
    iconBg: "#161329",
    date: "January 2021 - March 2021",
    points: [
      "Completed an intensive frontend development training program.",
      "Built projects using HTML, CSS, Bootstrap, JavaScript, and React.",
      "Enhanced problem-solving and UI development skills through hands-on projects.",
    ],
  },
  {
    title: "Intern (Engineering Department)",
    company_name: "Nigerian Television Authority (NTA 2) | Lagos, Nigeria",
    icon: nta2,
    iconBg: "#161329",
    date: "June 2024 - November 2024",
    points: [
      "Gained hands-on experience in a professional technical environment.",
      "Collaborated with engineers and supported operational tasks in broadcasting technology.",
      "Developed problem-solving, adaptability, and teamwork skills in a fast-paced setting.",
    ],
  },
];

export const projects = [
  {
    name: "WhatsApp TV Website",
    description:
      "A modern, responsive site designed to promote and engage subscribers with updates, promotions, and contact access.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: ejaymediavercelapp,
    source_code_link: "https://ejaymedia.vercel.app/",
  },
  {
    name: "Redmall Microfinance Limited Website",
    description:
      "A corporate site promoting microfinance services, showcasing loan products, company info, testimonials, and easy application access.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Password Generator App",
    description:
      "A React + Tailwind app that creates secure, customizable passwords with a sleek, modern UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "RoboFriends",
    description:
      "A React app that fetches user data and generates unique robot avatars, with a real-time search feature to filter robots dynamically.",
    tags: [
      { name: "Reaact", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "JSONPlaceholder API", color: "pink-text-gradient" },
    ],
    image: robofriends,
    source_code_link: "https://robo-friends-swart.vercel.app/",
  },
  {
    name: "To-Do List App",
    description:
      "A clean React app with a modern UI that lets users add, edit, and delete tasks for easy daily planning.",
    tags: [
      { name: "Reaact", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Quiz App",
    description:
      "A mobile app created with React Native that fetches quiz questions from an API, with score tracking and a smooth mobile UI.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "API Integration", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
  {
    name: "Weather App",
    description:
      "A mobile app created with React Native with live weather updates, city search suggestions, and a clean, user-friendly interface.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "API Integration", color: "pink-text-gradient" },
    ],

    image: weather,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
