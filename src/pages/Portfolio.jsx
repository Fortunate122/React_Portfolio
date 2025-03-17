import Project from "../components/Project";

const projects = [
  {
    title: "Fitness Application",
    image: "src/assets/fitness-app-sh.png",
    liveLink: "https://fortunate122.github.io/Fitness-App/",
    repoLink: "https://github.com/Fortunate122/Fitness-App",
  },
  {
    title: "Employee Tracker",
    image: "src/assets/fitness-app-sh.png",
    liveLink: "https://drive.google.com/file/d/1fHxxTIy77h6cl7uqggaGEGN5snNsTNDH/view",
    repoLink: "https://github.com/Fortunate122/Employee_Tracker",
  },
  {
    title: "Pro Readme Generator",
    image: "src/assets/pro-readme-gen-sh.png",
    liveLink: "https://drive.google.com/file/d/1gttTvvnip3Ab6TMipbXVXHM6LznedBDO/view",
    repoLink: "https://github.com/Fortunate122/Pro_Readme_Generator",
  },
  {
    title: "Easy_Weather",
    image: "src/assets/easy-weather-sh.png",
    liveLink: "https://weather-dashboard-f4b1.onrender.com/",
    repoLink: "https://github.com/Fortunate122/Easy_Weather",
  },
  {
    title: "Vehicle_Builder_app",
    image: "src/assets/vehicle-builder-sh.png",
    liveLink: "https://drive.google.com/file/d/17eMY5t8aACiq8urOk2owX6HKY_5kXEO7/view",
    repoLink: "https://github.com/Fortunate122/Vehicle_Builder_app",
  },
  {
    title: "React_Portfolio",
    image: "/assets/project6.jpg",
    liveLink: "https://example.com/project6",
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
