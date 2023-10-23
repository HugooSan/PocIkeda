import * as React from 'react';
import Button from '@mui/material/Button';
import './cabecalho.css'

function Cabecalho(props) {

  return (


    <header className='banner'>
      <div className='logo'>
        <img className='logotipo' alt='Logo da Empresa' src='https://github.com/HugooSan.png'/>
      </div>
      <div className='cabecalho'>
        <ul className='navegacao'>
          <li>
            Caminho  
          </li>
        </ul>
      </div>
    </header>

  );
}


export default Cabecalho;