import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Karan Patel | Full-Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Karan Patel',
  subtitle: 'I\'m a Full-Stack JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Full-Stack JavaScript Developer in MEAN & MERN Stack.',
  paragraphTwo: 'Currently in my last semester of George Brown College pursuing Computer Programmer Analyst.',
  paragraphThree: 'I have a professional experience of 1 Year including Freelancing and Professional Projects.',
  resume: 'https://drive.google.com/open?id=1g8NHkr5hrT0ppt1LGRvyZhlqDyngtrFC', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.png',
    title: 'Vish Immigration',
    info: 'Professional Project developed as a team using MERN Stack, Java & PHP.',
    info2: 'The website is equipped with Form Submissions, Direct Links and Booking Management.',
    url: 'https://www.vishimmigration.ca/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gamer-lobby.jpg',
    title: 'Gamer Lobby Application (MEAN Stack)',
    info: 'Academic Project developed as a team using MEAN Stack & Heroku.',
    info2: 'The project is equipped with CRUD Technology, Filter Search & Admin Capabilities.',
    url: 'https://gamer-lobby-frontend.herokuapp.com/',
    repo: 'https://github.com/georgebrowntech/MARKED-final-project-assignment-submission-Karan612', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'face-rec.jpg',
    title: 'Face Recognition Application (MERN Stack)',
    info: 'Project developed as a solo developer using MERN Stack & Heroku.',
    info2: 'This project was developed as a learning project using MERN which is able to detect faces in a picture, integrated with login & signup process as well.',
    url: 'https://zero-to-mastery.github.io/face-rec-app/',
    repo: 'https://github.com/kashyap1808/Face-Recognition-Application', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'progress.png',
    title: 'Pocket Meal Application (MERN Stack)',
    info: 'Project to be developed as a part of team using MERN Stack',
    info2: 'This project is still under progress, it is an Academic Project which will be equipped with Live Positioning and a Chat Box.',
    url: 'https://drive.google.com/open?id=1qLUXz5sZW8YK4lQtCRBHcCdU7_mm8S58'
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to know more? Email Me.',
  btn: '',
  email: 'kjpatel.522@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [    
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/karan-jpatel/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Karan612',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
