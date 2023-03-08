import { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");

  function sendMsgHandler(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMsg,
      }),
      headers: {
        "Content-Type": "application.json",
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>Hi, please leave a message</h1>
      <form className={classes.form} onSubmit={sendMsgHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Emal</label>
            <input
              type="text"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMsg}
            onChange={(event) => setEnteredMsg(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
