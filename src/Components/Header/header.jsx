import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <div className='Header-All'>
            <div className='Frame-Logo'>
                <img className='Imagem-Logo' src='./blog-logo.svg' alt='Logo do Blog' />
                <h1 className='Titulo-Logo'>Blog Fiap</h1>
            </div>

            <div className='Ancoras'>
                <a className='Ancoras-a' href="#">Inicio</a>
                <a className='Ancoras-a' href="#">Criador</a>
                <a className='Ancoras-a' href="#">Sou Professor</a>
                <a className='Ancoras-a' href="#">Ver Postagens</a>
            </div>

            <nav className="Navbar">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`Nav-menu ${menuAberto ? 'active' : ''}`}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Criador</a></li>
                    <li><a href="#">Sou Professor</a></li>
                    <li><a href="#">Ver Postagens</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;