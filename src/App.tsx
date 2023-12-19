import { useState } from 'react';
import LogoImg from './assets/logo.png';

const App = () => {
  const [textofrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const todasFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Siga os bons e aprenda com eles',
        'O bom-senso vale mais do que muito conhecimento',
        'O riso é a menor distância entre duas pessoas',
        'Deixe de lado as preocupações e seja feliz',
        'Realize o óbvio, pense no improvável e conquiste o impossivel',
        'Acredite em milagres, mas não dependa deles',
        'A maior barreitra para o sucesso é o medo do fracasso',
      ],
    },
    {
      id: 2,
      nome: 'Bom Dia',
      frases: [
        'Bom dia! Aproveite cada momento.',
        'Que o seu dia seja repleto de realizações.',
        'Comece o dia com um sorriso no rosto.',
        'Agradeça pelas pequenas alegrias da vida.',
        'Bom dia! Faça o seu melhor hoje.',
        'Que a luz do dia traga positividade à sua jornada.',
        'Acredite no poder de um novo dia.',
      ],
    },
  ];

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }   

  function gerarFrases(){
    const numeroAleatorio = Math.floor(Math.random() * todasFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${todasFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img className="logo" src={LogoImg} alt="logo frases" />

      <h2 className="title">Categorias</h2>
      <section className="category_area">
        {todasFrases.map((item, index) => (
          <button
            key={item.id}
            className="category_button"
            style={{
              borderWidth: item.nome === todasFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button onClick={gerarFrases} className="button_frase">Gerar frase</button>

      {textofrase !== '' && <p className="textoFrase">{textofrase}</p>}
    </div>
  );
};

export default App;
