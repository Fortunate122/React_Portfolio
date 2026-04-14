import Project from "../components/Project";
import fitnessAppImg from "../assets/fitness-app-sh.png";
import employeeTrackerImg from "../assets/employee-tracker-sh.png";
import readmeGenImg from "../assets/pro-readme-gen-sh.png";
import easyWeatherImg from "../assets/easy-weather-sh.png";
import vehicleBuilderImg from "../assets/vehicle-builder-sh.png";
import reactPortfolioImg from "../assets/react-portfolio-sh.png";


const projects = [
  {
    title: "Fitness Application",
    image: fitnessAppImg,
    description:
      "Fitness-focused application designed to support user interaction, track engagement, and present information through a clean interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://fortunate122.github.io/Fitness-App/",
    repoLink: "https://github.com/Fortunate122/Fitness-App",
  },
  {
    title: "Employee Tracker",
    image: employeeTrackerImg,
    description:
      "Command-line employee management application for viewing and organizing departments, roles, and employees through database-driven prompts.",
    tech: ["Node.js", "Inquirer", "PostgreSQL"],
    liveLink: "https://drive.google.com/file/d/1fHxxTIy77h6cl7uqggaGEGN5snNsTNDH/view",
    repoLink: "https://github.com/Fortunate122/Employee_Tracker",
  },
  {
    title: "Pro Readme Generator",
    image: readmeGenImg,
    description:
      "CLI-based README generator that collects user input and produces a structured professional README file for development projects.",
    tech: ["Node.js", "Inquirer", "JavaScript"],
    liveLink: "https://drive.google.com/file/d/1gttTvvnip3Ab6TMipbXVXHM6LznedBDO/view",
    repoLink: "https://github.com/Fortunate122/Pro_Readme_Generator",
  },
  {
    title: "Easy Weather",
    image: easyWeatherImg,
    description:
      "Weather dashboard that retrieves forecast data by location and presents current and future conditions in a responsive layout.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    liveLink: "https://weather-dashboard-f4b1.onrender.com/",
    repoLink: "https://github.com/Fortunate122/Easy_Weather",
  },
  {
    title: "Vehicle Builder",
    image: vehicleBuilderImg,
    description:
      "Object-oriented application for building and interacting with different vehicle types through command-line logic and class-based structure.",
    tech: ["TypeScript", "Node.js", "OOP"],
    liveLink: "https://drive.google.com/file/d/17eMY5t8aACiq8urOk2owX6HKY_5kXEO7/view",
    repoLink: "https://github.com/Fortunate122/Vehicle_Builder_app",
  },
  {
    title: "React Portfolio",
    image: reactPortfolioImg,
    description:
      "Responsive developer portfolio built with React and Vite to showcase projects, technical skills, resume access, and contact information.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    liveLink: "https://cute-puffpuff-2bcfd1.netlify.app/",
    repoLink: "https://github.com/Fortunate122/React_Portfolio",
  },
];

function Portfolio() {
  return (
    <section>
      <h2>David Saldaña's Portfolio</h2>
      <p className="portfolio-intro">
        A selection of projects demonstrating front-end development, React
        architecture, API integration, command-line applications, and
        JavaScript-based problem solving.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
