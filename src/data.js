//  icons
import {

  FiLinkedin,
  FiPhone,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/ml.png';
import Project2 from './assets/img/projects/hawaii.png';
import Project3 from './assets/img/projects/music.png';
// import Project4 from './assets/img/projects/ignite.PNG';
import Project5 from './assets/img/projects/attendance.png';
// import Project6 from './assets/img/projects/refer.PNG';
// import Project7 from './assets/img/projects/freecollage.PNG';



// skills images
import SkillImg1 from './assets/img/skills/django.jpg';
import SkillImg2 from './assets/img/skills/Java.jpg';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/html5.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/jupyter.jpg';
import SkillImg8 from './assets/img/skills/Mdb.png';

// testimonial images


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'education',
    href: 'education',
  },
  {
    name: 'project',
    href: 'portfolio',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/rikshitha-ravikumar/',
    target:"_blank"
  },
  {
    icon: <FiMail />,
    href: 'mailto:rikshitharavikumar@gmail.com',
    target:"_blank"
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Rikii30',
    target:"_blank"
  },
  {
    icon: <FiMapPin />,
    href: 'https://www.google.com/maps/d/u/0/viewer?mid=1QlqZ-rT0_7n6LT3mbDDRxsyxass&hl=en_US&ll=25.274164000000006%2C55.348027&z=17',
    target:"_blank"
  },
];

// companies

// projects
export const projectsData = [
  {
    id: '5',

    image: Project5,
    name: 'AI based face recognition attendance system',
    // category: 'Team Project',
    info:"  Using Ai we created Attendace system through Face Recognition.",
    github:"https://github.com/Rikii30/face-recognition-Ai",
    tech:"Javascript| HTML | CSS |Bootstarp"
  },

  

  {
    id: '1',
    image: Project1,
    name: 'ML based Disease Prediction and Drug Recommendation',
    // category: 'Team Projects',
    info:"Online Minute Medical is a web-based platform that aims to revolutionize the healthcare industry by providing efficient and convenient medical prediction and drug recommendation services.",
    github:"https://docs.google.com/presentation/d/1Qlu_oDIMIJODss285DINmBD6kpxrwlpGMM0xt3zV-4g/edit",
    tech:"React | JS | HTML | Jupyter | CSS | Sublime "
    
  
  },
  {
    id: '2',
    image: Project2,
    name: 'Hawaii Travel Destination Website',
    // category: 'Team Projects',
    info:" The Hawaii Travel Destination Website is an educational and aesthetically pleasing online resource dedicated to showcasing the wonders and attractions of Hawaii, one of the most popular tourist destinations in the United States. This website provides a thorough overview of Hawaii's culture, history, map, attractions, and regional food, giving visitors a fully immersive experience",
    github:"https://cs.slu.edu/student/rravikumar/hw2/index.html",
    tech:"HTML | CSS | Javascript "
  },
  {
    id: '3',
    image: Project3,
    name: 'Spmphony Spot Music website',
    // category: 'Team Projects',
    info:" Symphony Spot is a music streaming website that aims to provide users with a seamless and enjoyable music listening experience. The primary goal is to offer a vast library of songs, a user-friendly interface, and personalized playlists. One of the primary goals of Symphony Spot is to provide a user-friendly and intuitive interface. ",
    github:"https://cs.slu.edu/student/rravikumar/project%201/songs.html",
    tech:"HTML | JS | CSS | Bootstrap  "
  },
  

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Team Projects',
  },
  {
    name: 'Solo Projects',
  }
];

// skill
// data.js

export const skills = [
  { name: 'Django', image: SkillImg1, percent: 40 },
  { name: 'Java', image: SkillImg2, percent: 80 },
  { name: 'Java Script', image: SkillImg3, percent: 80 },
  { name: 'React', image: SkillImg4, percent: 40 },
  { name: 'HTML', image: SkillImg5, percent: 90 },
  { name: 'Node Js', image: SkillImg6, percent: 60 },
  { name: 'Jupyter', image: SkillImg7, percent: 90 },
  { name: 'Mongo DB', image: SkillImg8, percent: 60 },
  // ... other skills
];


// services


// testimonials

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Email',
    subtitle: 'My mail id',
    description: 'rikshitharavikumar@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'St Louis, MO',
    // description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: 'Mobile Number',
    subtitle: '+13146790850',
  }
];

export const education = [
  {
    id: 1,
    degree: 'Your Degree',
    university: 'University Name',
    duration: 'Year - Year',
  },
  // Add more education entries as needed
];