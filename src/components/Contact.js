import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
  <div className="container text-center">
    <h2 className="section-heading mb-4">Contact Me</h2>
    <form style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Name" required />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
      </div>
      <textarea className="form-control mb-3" rows="4" placeholder="Message" required />
      <button type="submit" className="btn btn-custom">Send Message</button>
    </form>
  </div>
</section>

  );
}
