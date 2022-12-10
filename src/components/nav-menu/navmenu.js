import './navmenu.css';
import img_logo from '../../img/logo.png';
import img_logo_spotify from '../../img/logo_spotify.png';
import img_logo_instagram from '../../img/logo_instagram.png';
import img_logo_tiktok from '../../img/logo_tiktok.png';
import img_logo_youtube from '../../img/logo_youtube.png';
import img_logo_facebook from '../../img/logo_facebook.png';
import img_menu from '../../img/icon_menu.png'
import { useState } from 'react';

export function NavMenu() {
    
    const [className, setClassName] = useState("items");

    return (
        <div className="header">

            <img className="img_logo" src={img_logo} alt=""></img>

            <ul className={className}>
                <li>Inicio</li>
                <li>Sobre mim</li>
                <li>Especialidades</li>
                <li>Psicoterapia</li>
                <li>Contato</li>
            </ul>

            <img onClick={() => className === 'items' ? setClassName("items open") : setClassName("items")} src={img_menu} className="menu-responsive" alt="Menu"></img>

            <ul className="social_midias">
                <li><img src={img_logo_facebook} alt=""></img></li>
                <li><img src={img_logo_tiktok} alt=""></img></li>
                <li><img src={img_logo_instagram} alt=""></img></li>
                <li><img src={img_logo_youtube} alt=""></img></li>
                <li><img src={img_logo_spotify} alt=""></img></li>
            </ul>

        </div>
    );
}