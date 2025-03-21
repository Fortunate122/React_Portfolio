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
    liveLink: "https://fortunate122.github.io/Fitness-App/",
    repoLink: "https://github.com/Fortunate122/Fitness-App",
  },
  {
    title: "Employee Tracker",
    image: employeeTrackerImg,
    liveLink: "https://drive.google.com/file/d/1fHxxTIy77h6cl7uqggaGEGN5snNsTNDH/view",
    repoLink: "https://github.com/Fortunate122/Employee_Tracker",
  },
  {
    title: "Pro Readme Generator",
    image: readmeGenImg,
    liveLink: "https://drive.google.com/file/d/1gttTvvnip3Ab6TMipbXVXHM6LznedBDO/view",
    repoLink: "https://github.com/Fortunate122/Pro_Readme_Generator",
  },
  {
    title: "Easy Weather",
    image: easyWeatherImg,
    liveLink: "https://weather-dashboard-f4b1.onrender.com/",
    repoLink: "https://github.com/Fortunate122/Easy_Weather",
  },
  {
    title: "Vehicle Builder",
    image: vehicleBuilderImg,
    liveLink: "https://drive.google.com/file/d/17eMY5t8aACiq8urOk2owX6HKY_5kXEO7/view",
    repoLink: "https://github.com/Fortunate122/Vehicle_Builder_app",
  },
  {
    title: "React Portfolio",
    image: reactPortfolioImg,
    liveLink: "https://cute-puffpuff-2bcfd1.netlify.app/",
    repoLink: "https://github.com/Fortunate122/React_Portfolio",
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
