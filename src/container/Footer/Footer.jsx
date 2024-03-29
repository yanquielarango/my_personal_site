import { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email ,message } = formData; 

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
      .then(() =>{
        setLoading(false);
        setIsFormSubmitted(true);
      })
        .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 className="head-text">Take a <span>coffe</span> & <span>chat</span> with me</h2>
      
      <section className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="https://formsubmit.co/el/jimihe" className="p-text" >yanquiel.arango@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +48 (512) 062 090" className="p-text" >+48 (512) 062 090</a>
        </div>
      </section>

    {!isFormSubmitted ?
      <form className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name"  name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email"  name="email"  value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
          className="p-text"
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" type="button" onClick={handleSubmit}>{loading ? 'Sending ⌛' : 'Send Message'}</button>
      </form>
      : <div>
        <h3 className="head-text">Thank for getting in touch!</h3>
      </div>}

      <div className='copyright'>
          <p className='p-text'>©️{new Date().getFullYear()} yanquiel, Inc.</p>
        
      </div>
  </>
  )
}


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
