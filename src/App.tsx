import React from 'react';
import Modal from './components/Modal';
import ButtonCustom from './components/ButtonCustom';
import './index.css';
import { Catalogo } from './components/Catalogo/main';
import { Card } from './components/Card';
import { BarraCard } from './components/BarraCard';

function App() {

  return (
    <div>
     {/*
      <Modal labelHeader={'Modal em densenvolvimento'}>
      <ButtonCustom btnText={'Confirmar'} />
      </ Modal>
      <Catalogo /> 
    */}
    <BarraCard />
    </div>
  );
}

export default App;
