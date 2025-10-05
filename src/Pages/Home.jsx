import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';

function Home() {
  return (
    <div className='Home-geral'>
      <h1 className='Texto-Home'>
        Bem-Vindo ao <b>Blog</b> da Escola
        Acompanhe as <b>Novidades!</b>
      </h1>

      <Button className='Botao-Home' as={Link} to="/posts">
        Ver Postagens →
      </Button>

      {/* <button className='Botao-Home'>Ver Postagens →</button>
      <Link className='Botao-Home' to="/posts" onClick={closeMenu}>Ver Postagens</Link> */}

      {/* <img className='Img-Home' src='./public/menino-246px.png' alt='Menino Correndo'></img> */}
      <img className='Img-Home' src='./public/menino-492px.png' alt='Menino Correndo'></img>
    </div>
  );
}

export default Home;