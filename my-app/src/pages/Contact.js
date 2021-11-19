import { useForm, ValidationError } from '@formspree/react';
import '../css/contact.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("mleaqzvp");
  if (state.succeeded) {
      return <p>Thanks for your sending!</p>;
  }
  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address:
        </label>
        <div>
      <input
        id="email"
        type="email" 
        name="email"
          />
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
      </div>
      <div>
      <label htmlFor="email">
        Message:
          </label>
          <div>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </form>
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <h1>Contact Form</h1>
      <ContactForm />
    </>
  )
};

export default Contact;