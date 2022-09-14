import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuoesc5",
        "template_0q1xs92",
        e.target,
        "y00eQrFm10B7zvFau"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/053/710/551/large/vadim-soltan-contact.jpg?1662851609"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
