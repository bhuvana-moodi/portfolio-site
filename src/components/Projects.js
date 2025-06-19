import React from "react";

const projects = [
  {
    title: "College Event Management System",
    image:"/assets/projects/event-system.png",
    demo: "https://event-frontend-nlnivtyex-bhuvana-moodis-projects.vercel.app/",
    code: "https://github.com/bhuvana-moodi/event-frontend",
  },
  {
    title: "NUT-CAL",
    image: "/assets/projects/nut-cal-demo.png",
    code: "https://github.com/AdithSG/Nut-Cal#",
    demo: "https://github.com/AdithSG/Nut-Cal#"
  },
  {
    title: "ATM-Simulator[console based]",
    image: "/assets/projects/atm-simulator.png",
    demo: "https://github.com/bhuvana-moodi/ATM-simulator-java",
    code: "https://github.com/bhuvana-moodi/ATM-simulator-java",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 text-center bg-white">
  <div className="container">
    <h2 className="section-heading mb-4">Projects</h2>
    <div className="row">
      {projects.map((p, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <img src={p.image} alt={`${p.title} screenshot`} className="card-img-top" style={{ height: "200px", objectFit: "cover" }}  />
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <div className="d-flex justify-content-center gap-2">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-custom">Live Demo</a>
                <a href={p.code} className="btn btn-sm btn-outline-secondary">Code</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


    
  </div>
</section>

  );
}
