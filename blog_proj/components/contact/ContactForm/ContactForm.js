import Notification from "@/components/ui/Notification";
import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";

async function sendContactData(contactDetails) {
  const resp = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application.json",
    },
  });

  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(data.message || "Something not working - figure it out");
  }
}

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestErr, setRequestErr] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestErr(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMsgHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMsg,
      });
      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredMsg("");
      setEnteredName("");
    } catch (error) {
      setRequestErr(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestErr,
    };
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
