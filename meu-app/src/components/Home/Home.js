import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router
import styles from './Home.module.css'; // Importe o arquivo de estilo CSS Module

function Home() {
  return (
    <div>
      <h1 className={styles.homeTitle}>Explore o universo</h1>
      {/* Use o componente Link para criar o link para a página "O universo" */}
      <Link to="/o-universo">
        <button>QUERO SABER MAIS</button>
      </Link>
    </div>
  );
}

export default Home;
