import profilePic from "../assets/very-nice.jpg";

function AboutMe() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <img src={profilePic} alt="Profile" className="profile-pic" />

      <div className="about-content">
        <p>
          I am a test engineer with a background in hardware, system validation,
          and problem-solving who has expanded into web development to build
          clean, interactive, and user-focused applications.
        </p>

        <p>
          My experience includes working with technologies such as React,
          JavaScript, Python, and C++, along with hands-on engineering work that
          has strengthened my approach to troubleshooting, logic, and building
          reliable solutions.
        </p>

        <p>
          I enjoy creating applications that are both functional and intuitive,
          and I am continually sharpening my skills through project development,
          code improvement, and learning new technologies.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;