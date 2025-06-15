import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light text-center">
  <div className="container">
    <h2 className="section-heading mb-4">About Me</h2>
    <p className="text-muted mx-auto" style={{ maxWidth: "850px" }}>
      I'm passionate about crafting interactive, user-friendly websites using React.js and JavaScript. 
      With a strong eye for detail and design, I love building responsive UIs that are both aesthetic and functional.
      I like to engage myself in problem-solving , team-work, and curiosity in tech motivates me to learn and work more effectively. 
      I enjoy collaborating on projects and continuously learning new technologies.
    </p>
    <a href="/resume.pdf" className="btn btn-custom mt-3">Download Resume</a>
  </div>
</section>

  );
}
