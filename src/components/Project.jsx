function Project({ title, image, description, tech, liveLink, repoLink }) {
  return (
    <article className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <ul className="project-tech-list">
          {tech.map((item) => (
            <li key={item} className="project-tech-item">
              {item}
            </li>
          ))}
        </ul>

        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;