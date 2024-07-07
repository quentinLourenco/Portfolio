import React, {useRef} from 'react';
import './Contacts.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contacts = () => {

  const formulaire = useRef();

  const envoyerEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqznsom', 'template_bgvq6xn', formulaire.current, 'HLnEWYTJOU0TEi63d')
      .then((resultat) => {
          console.log(resultat.text);
      }, (erreur) => {
          console.log(erreur.text);
      });
  };

  return ( 
    <section id='contacts'>
      <h5>Entrer en contact</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>78louquen@gmail.com</h5>
            <a href='mailto:78louquen@gmail.com'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>telephone</h4>
            <h5>+33651173435 </h5>
            <a href='https://api.whatsapp.com/send/?phone=2348147528661&text=Bonjour' rel="noreferrer" target="_blank">Envoyer un message</a>
          </article>
        </div>
      
        <form ref={formulaire} onSubmit={envoyerEmail}>
          <input type="text" name="nom" placeholder="Votre Nom Complet" required/>
          <input type="email" name="email" placeholder="Votre Email" required/>
          <textarea name="message" rows="5" placeholder="Votre Message" required/>

          <button type='submit' className='btn btn-primary'>Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
