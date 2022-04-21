import classes from "./newsletter-registration.module.css";
import { useRef } from "react";

function NewsletterRegistration() {
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;


    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: {
        'Content-Type': 'application/json',
      },
      
      // fetch user input (state or refs)
      // optional: validate input
      // send valid data to API
    })
    .then(response => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
