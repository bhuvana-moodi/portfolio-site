import React from "react";

export default function Hero() {
  return (
    <section className="py-5 hero-section">
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
    <div>
      <h1 className="display-4 fw-bold">Hello, I'm Bhuvana M B</h1>
      <p className="lead">Computer Science Engineer</p>
      
    </div>
    <div>
      <img src="/assets/profile.jpg" alt="Bhuvana" className="rounded-circle shadow" style={{ width: "150px" }} />
    </div>
  </div>
</section>

  );
}
