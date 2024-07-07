import React from "react";
import './Header.css';

const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
                
                <h4>Bonjour!!! <span>Je m'appelle </span></h4>
                
                <h1>Quentin</h1>
              
                <h5 className="text-light">Je suis un Informaticien FullStack</h5>
            </div>
        </header>
     );
}
 
export default Header;
