import React from "react";
import "./Contact.css";
import {useContext} from 'react'
import { Context } from '../../context/langContext'
import {dataContact} from "../../constants/contact"

export default function Contact() {

   const {lang} = useContext(Context);

  return (
    <div className="container" id="contact">
      <h1 className="title">Contact</h1>
      <div className="container-contact">
        <button className="btn-contact">
          <a href="mailto:rabie.menad07@outlook.com">
            {dataContact[lang]['text']}
          </a>
        </button>
      </div>
    </div>
  );
}
