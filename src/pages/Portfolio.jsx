import Project from "../components/Project";

const projects = [
  {
    title: "Project One",
    image: "/assets/project1.jpg",
    liveLink: "https://example.com/project1",
    repoLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    image: "/assets/project2.jpg",
    liveLink: "https://example.com/project2",
    repoLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project Three",
    image: "/assets/project3.jpg",
    liveLink: "https://example.com/project3",
    repoLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Project Four",
    image: "/assets/project4.jpg",
    liveLink: "https://example.com/project4",
    repoLink: "https://github.com/yourusername/project4",
  },
  {
    title: "Project Five",
    image: "/assets/project5.jpg",
    liveLink: "https://example.com/project5",
    repoLink: "https://github.com/yourusername/project5",
  },
  {
    title: "Project Six",
    image: "/assets/project6.jpg",
    liveLink: "https://example.com/project6",
    repoLink: "https://github.com/yourusername/project6",
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
