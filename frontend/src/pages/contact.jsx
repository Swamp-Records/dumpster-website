import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "5cc7c201-0457-428b-88bc-4e7a989546be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="name" placeholder="name" required/>
      </div>
      <div>
        <input type="email" name="email" placeholder="email" required/>
      </div>
      <div>  
        <textarea name="message" placeholder="message" required></textarea>
      </div> 
      <div> 
        <button type="submit">Submit Form</button>
      </div>
        <span>{result}</span>
    </form>
  );
}