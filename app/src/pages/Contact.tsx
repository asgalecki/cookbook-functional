import React, { useState } from 'react';
import MainSection from '../components/Sections/MainSection';
import AuthEmail from '../components/Forms/AuthEmail';
import AuthButton from '../components/Forms/AuthButton';

const Contact = (): JSX.Element => {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <MainSection title="contact">
        <div className="row">
          <form className="col s12 push-m2 m8 push-xl3 xl6">
            <div className="input-field">
              <i className="material-icons prefix">portrait</i>
              <input id="name" type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <AuthEmail handleChildData={setEmail} />
            <div className="input-field">
              <i className="material-icons prefix">title</i>
              <input id="subject" type="text" className="validate" />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">subject</i>
              <textarea id="textarea" className="materialize-textarea" />
              <label htmlFor="textarea">Your message...</label>
            </div>
            <AuthButton title="send" />
          </form>
        </div>
      </MainSection>
    </div>
  );
};

export default Contact;
