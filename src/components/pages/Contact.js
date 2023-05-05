import React, { useState } from "react";

//Make the Contact Page
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleBlurName = (event) => {
    if (event.target.value === "" && error !== "Name is required") {
      return setError("Name is required");
    }
  };

  const handleBlurEmail = (event) => {
    if (event.target.value === "" && error !== "Email is required") {
      return setError("Email is required");
    }
    if (
      !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(event.target.value)
    ) {
      return setError("Invalid email format");
    }
  };

  const handleBlurMessage = (event) => {
    if (event.target.value === "" && error !== "Message is required") {
      return setError("Message is required");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const id = target.id;

    if (id === "name") {
      if (error === "Name is required") {
        setError("");
      }
      setName(value);
    } else if (id === "email") {
      if (error === "Email is required" || error === "Invalid email format") {
        setError("");
      }
      setEmail(value);
    } else {
      if (error === "Message is required") {
        setError("");
      }
      setMessage(value);
    }
  };

  const handleFormSubmit = () => {
    if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)) {
      return setError("Invaild email format");
    }

    if (name !== "" && email !== "" && message !== "") {
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent!");
    }
  };

  return (
    <form className="d-flex m-auto flex-nowrap flex-column">
      <label className="form-label" htmlFor="name">
        Name:
      </label>
      <input
        className="form-control"
        id="name"
        type="text"
        placeholder="Your Name Here"
        onBlur={handleBlurName}
        onChange={handleChange}
        value={name}
      />
      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <input
        className="form-control"
        id="email"
        type="email"
        placeholder="Your Email Here"
        onBlur={handleBlurEmail}
        onChange={handleChange}
        value={email}
      />
      <label className="form-label" htmlFor="message">
        Your Message:
      </label>
      <textarea
        className="form-control"
        id="message"
        placeholder="Your message here"
        value={message}
        onBlur={handleBlurMessage}
        onChange={handleChange}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFormSubmit}
      >
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
