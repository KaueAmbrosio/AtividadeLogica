import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PainelControle = styled.div`
  background: rgba(255, 255, 255, 0.05); /* Um fundo sutil */
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border: 1px solid ${props => (props.$acesa ? '#eee' : '#333')};
  
  h1 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${props => (props.$acesa ? '#333' : '#eee')};
  }

  p {
    margin-top: 20px;
    color: ${props => (props.$acesa ? '#666' : '#999')};
  }
`;

const TelaPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  transition: 0.8s all ease;

  background-color: ${(props) => (props.$acesa ? "#fffbe" : "#121212")};
`;

const BotaoInterruptor = styled.button`
  padding: 20px 40px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: 0.3s;

  background-color: ${(props) => (props.$acesa ? "#ffc107" : "#ffc107")};
  color: ${(props) => (props.$acesa ? "#fffbe" : "#121212")};
`;


export default function App() {

  const [ligado, setLigado] = useState(false);

  const [interacoes, setIteracoes] = useState(() => {
    const salvo = localStorage.getItem('contagem_aula');
    return salvo ? parseInt(salvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem('contagem_aula', interacoes);
    document.title = ligado ? "acesa 💡" : "apagada 🌑";
  }, [interacoes, ligado]);

  const tratarClique = () => {
    setLigado(!ligado);
    setIteracoes(prev => prev + 1);
  };

  return (
    <TelaPrincipal $acesa={ligado}>
      <PainelControle>
        <h1>Smart Lamp</h1>
        <div style={{
          fontSize: '100px',
          margin: '20px',
          filter: ligado ? 'drop-shadow(0 0 20px yellow)' : 'none'
        }}>
          {ligado ? '💡':'🌑'}
        </div>

        <BotaoInterruptor $acesa={ligado} onClick={tratarClique}>
          {ligado ? 'DESLIGAR' : 'LIGAR'}
        </BotaoInterruptor>
        <p>Total de interacoes: <strong>{interacoes}</strong></p>


      </PainelControle>
    </TelaPrincipal>
  );

}