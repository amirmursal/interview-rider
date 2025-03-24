import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/contact-form",
      {
        method: "Post",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
    console.log(response);
  };
  return (
    <form>
      <label>Name:</label>
      <input value={name} type="text" onChange={handleNameChange} />
      <label>Email</label>
      <input value={email} type="email" onChange={handleEmailChange} />
      <label>Message</label>
      <textarea value={message} onChange={handleMessageChange}></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ContactUs;
