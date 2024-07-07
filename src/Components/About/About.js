import React from "react";
import "./About.css";
import codage from "./coding.png"
import { FaAward } from "react-icons/fa";
import { IoGitNetwork } from "react-icons/io5";

const APropos = () => {
    return ( 
        <section id='apropos'>
            <h5>Apprenez à me connaître</h5>
            <h2>À propos de moi</h2>
          
            <div className='container apropos__container'>
                <div className="apropos__moi">
                    <div className="apropos__moi-image">
                        <img src={codage} alt="Codage"/>
                    </div>
                </div>    
                <div className="apropos__contenu">
                    <div className="apropos__cartes">
                        <article className="apropos__carte"> 
                            <FaAward className= "apropos__icone"/>
                            <h5>Expérience</h5>
                            <small>18 Mois+</small>  
                        </article>
                        <article className="apropos__carte">
                            <IoGitNetwork className= "apropos__icone"/>
                            <h5>Projets</h5>
                            <small>50+ Complétés</small>
                        </article>
                    </div>
                    <p>Je suis un ingénieur logiciel motivé et axé sur les résultats. Mon objectif est de créer
et d'optimiser des sites web et des applications centrés sur l'utilisateur pour des clients ayant des objectifs
d'affaires variés. Avec des compétences organisationnelles, de résolution de problèmes et de communication exceptionnelles, je m'épanouis dans des environnements collaboratifs où je peux
contribuer efficacement au succès des projets. Je suis un apprenant hautement adaptable,
améliorant continuellement mes capacités et relevant de nouveaux défis un problème à la fois.</p>
                    <a href="#contacts" className="btn btn-primary">Discutons</a>
                </div>
            </div>
        </section>
     );
}
 
export default APropos;
