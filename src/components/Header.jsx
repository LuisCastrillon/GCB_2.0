import { useState, useEffect } from 'react';
import './header.css';
import logobarberia from '../img/logos/logo-barbearia.png';
import logoSticker from '../img/logos/logo-sticker.png';

export const Header = ({setOpenMenu, openedMenu}) => {
const [enElInicio, setEnElInicio] = useState(true);


/* Estado que me permite saber en que momento el scroll esta al inicio de la pagina */ 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setEnElInicio(true);
      } else {
        setEnElInicio(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

    return(
        <header className="header" id={enElInicio ? "" : "header"} >
                <div className="bars__menu" onClick={() => setOpenMenu(!openedMenu)}>
                    <span className={openedMenu == 0 ? "line1__bars-menu" : "activeline1__bars-menu"}></span>
                    <span className={openedMenu == 0 ? "line2__bars-menu" : "activeline2__bars-menu"}></span>
                    <span className={openedMenu == 0 ? "line3__bars-menu" : "activeline3__bars-menu"}></span>
                </div>
            <div className={enElInicio? "logoBarberiaContainer": "stickerBarberiaContainer"}>
                <img src={enElInicio? logobarberia : logoSticker} alt="" />
            </div>
        </header>
    )
}