import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hiqgvo2",
        "template_676ax9j",
        form.current,
        "5SB61VyrBPKEpB9mg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__headar">
        <h2>Contact me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" rows="6" />
        <input type="submit" value="Send" className="submit" />
      </form>
    </section>
  );
};

export default Contact;
