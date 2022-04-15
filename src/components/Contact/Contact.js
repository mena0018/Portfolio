import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h1 className="title">Contact</h1>
      <div className="container-contact">
        <button className="btn-contact">
          <a href="mailto:rabie.menad07@outlook.com">
            Cliquer pour me contacter
          </a>
        </button>
      </div>
    </div>
  );
}
