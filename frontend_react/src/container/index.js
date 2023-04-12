import { images } from '../constants';


export { default as About } from './About/About';
export { default as Contact } from './Contact/Contact';
export { default as Home } from './Home/Home';
export { default as Skills } from './Skills/Skills';
export { default as Work } from './Work/Work';


export const works = [
    { title: 'Director Movie Analysis', description: "Individually/independently developed Python program that analyzes a movie metadata set to produce a bar chart comparing a director's films and their respective IMDB scores based on user input.", imgUrl: images.Project1, projectLink: 'https://github.com/ajk3158/Director-Movie-Analysis.git', tag: ['Data Science', 'All'] },
    { title: 'First Portfolio Website', description: 'Individually/independently developed portfolio website through self-taught HTML, CSS, and JavaScript front-end development.', imgUrl: images.Project2, projectLink: 'https://github.com/ajk3158/ajk3158.github.io.git', tag: ['Front-End', 'All'] },
    { title: 'University of Virginia Buildings', description: "Served as a UI designer to create a web application that provides infromation to users about the University of Virginia's buildings, specifically managing/designing the homepage interface through HTML/JS/Bootstrap.", imgUrl: images.Project3, projectLink: 'https://github.com/er9fa/IPPFA21-alpha', tag: ['Front-End', 'All'] },
    { title: 'Chemistry Matters State Map', description: "Individually/independently implemented the State Map feature for the Chemistry Matters client, which required the use of full-stack technologies such as PHP, Wordpress, JavaScript, etc.", imgUrl: images.Project4, projectLink: 'https://drive.google.com/file/d/1_AVqlAwp8T7cO0WZGRT0sysGmfF1aZD6/view?usp=sharing', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All'] },
    { title: 'OpenPAGov', description: "Individually/independently joined the front-end and back-end of client's web application, and fullfilled other client requests, to create a functional full-stack web application using Wordpress, Timber, PHP, JavaScript, Sourcetree technologies.", imgUrl: images.Project5, projectLink: 'https://drive.google.com/file/d/1HyOSoF744jEvlAa6NZyCy-Ss9gLMRMkJ/view?usp=sharing', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All'] },
    { title: 'Penn Ed Quiz', description: 'Individually/independently developed the front-end, and connected the back-end, of the quiz and quiz results in the Penn Ed client web application.', imgUrl: images.Project6, projectLink: 'https://drive.google.com/file/d/1z1rxQHZt66BkPOS_vzI5IQPvGOx7jcYE/view?usp=sharing', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All'] },
    { title: 'Keystonefbp Issues Functions', description: "Individually/independently utilized Wordpress, PHP, and lando skills to develop front-end and back-end for Keystonefbp web application issues functionality.", imgUrl: images.Project7, projectLink: 'https://drive.google.com/file/d/1k5uDNwrtwOVdIG7BZA9wLNF149rLfJPS/view?usp=sharing', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All'] },
    { title: 'Red Edge Ad Dashboard', description: 'Individually/independently created a web-based professional ad dashboard for Red Edge, LLC that allows company users to display important advertisement statistics to clients using integrated Google Sheets, Laravel, React JavaScript, PHP, and technical APIs.', imgUrl: images.Project8, projectLink: 'https://github.com/ajk3158/RedEdgeAdDashboard', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All', 'All'] },
    { title: 'Watch Party App', description: 'Served as a Scrum Master to create an agile-managed web application that provides users the ability to create and coordinate movie watch parties in a social media format using Django and technical APIs.', imgUrl: images.Project9, projectLink: 'https://github.com/uva-cs3240-s22/B-19', tag: ['Full-Stack', 'Front-End', 'Back-End', 'All'] }


];

export const abouts = [
    {title: 'Weight Lifting', description: 'I love to go to the gym and push my body as much as possible!', imgUrl: images.about01},
    {title: 'Cooking', description: 'I love to cook new recipes and challenge myself in the kitchen!', imgUrl: images.about02},
    {title: 'Family/Friends', description: 'I love spending time with my friends/family in my free time!', imgUrl: images.about03}
];

export const skills= [
    {name: 'Python', icon: images.python, bgColor: 'white'},
    {name: 'Java', icon: images.java, bgColor: 'white'},
    {name: 'C++', icon: images.cplusplus, bgColor: 'white'},
    {name: 'JavaScript', icon: images.javascript, bgColor: 'white'},
    {name: 'React', icon: images.react, bgColor: 'white'},
    {name: 'CSS', icon: images.css, bgColor: 'white'},
    {name: 'Sass', icon: images.sass, bgColor: 'white'},
    {name: 'HTML', icon: images.html, bgColor: 'white'},
    {name: 'Bootstrap', icon: images.bootstrap, bgColor: 'white'},
    {name: 'PHP', icon: images.php, bgColor: 'white'},
    {name: 'Git', icon: images.git, bgColor: 'white'},
    {name: 'GitHub', icon: images.github, bgColor: 'white'},
    {name: 'NodeJS', icon: images.node, bgColor: 'white'},
    {name: 'Docker', icon: images.docker, bgColor: 'white'},
    {name: 'Django', icon: images.django, bgColor: 'white'},
    {name: 'Heroku', icon: images.heroku, bgColor: 'white'},
    {name: 'JQuery', icon: images.jquery, bgColor: 'white'},
    {name: 'Lando', icon: images.lando, bgColor: 'white'},
    {name: 'Laravel', icon: images.laravel, bgColor: 'white'},
    {name: 'Office 365', icon: images.office365, bgColor: 'white'},
    {name: 'Trello', icon: images.trello, bgColor: 'white'},
    {name: 'Twig', icon: images.twig, bgColor: 'white'},
    {name: 'WordPress', icon: images.wordpress, bgColor: 'white'},
    {name: 'TypeScript', icon: images.typescript, bgColor: 'white'},
];

export const experience= [
    [{name: 'skill 1', company: "Google", description: 'afsf'},
    {name: 'skill 1', company: "Apple", description: 'asdfs'},
    {name: 'skill 1', company: "Nike", description: 'whitafafse'}],
    [{name: 'skill 1', company: "Google", description: 'afsf'},
    {name: 'skill 1', company: "Apple", description: 'asdfs'},
    {name: 'skill 1', company: "Nike", description: 'whitafafse'}],
    [{name: 'skill 1', company: "Google", description: 'afsf'},
    {name: 'skill 1', company: "Apple", description: 'asdfs'},
    {name: 'skill 1', company: "Nike", description: 'whitafafse'}],
];