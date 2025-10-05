import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoBlog from '../../assets/blog-logo.svg';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const closeMenu = () => {
        setMenuAberto(false);
    }

    return (
        <header className='Header-All'>
            <div className='Frame-Logo'>
                <Link to="/" onClick={closeMenu}>
                    <img className='Imagem-Logo' src={logoBlog} alt='Logo do Blog' />
                    <h1 className='Titulo-Logo'>Blog Fiap</h1>
                </Link>
            </div>
            
            {/* RES. Tablet/Desktop */}
            <nav>
                <ul className='Ancoras'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Ver Posts</Link></li>
                    <li><Link to="/create-post">Novo Post</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            {/* Res. Mobile */}
            <nav className="Navbar">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                
                <ul className={`Nav-menu ${menuAberto ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Início</Link></li>
                    <li><Link to="/posts" onClick={closeMenu}>Ver Postagens</Link></li>
                    <li><Link to="/create-post" onClick={closeMenu}>Novo Post</Link></li>
                    <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;