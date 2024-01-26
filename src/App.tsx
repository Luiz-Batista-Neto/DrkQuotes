import { useState } from 'react'
import logo from './assets/logo.png'
import bg from './assets/bg.jpg'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [catSelect, setCatSelect] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Dicas",
      frases: [
        "aaa",
        "bbb",
        "ccc",
        "ddd",
        "eee",
      ]
    },

    {
      id: 2,
      nome: "Mensagens",
      frases: [
        "111",
        "222",
        "333",
        "444",
        "555",
      ]
    },
    
    {
      id: 3,
      nome: "Outras dicas",
      frases:[
        "ooo",
        "000",
      ]
    }
  ]

  function handleSwitchCategory(index: number){
	setCatSelect(index)
  }

  function gerarDicaOuFrase(){
    let randomNum = Math.floor(Math.random() * allFrases[catSelect].frases.length)
    console.log(allFrases[catSelect].frases[randomNum]);
    setTextoFrase(`${allFrases[catSelect].frases[randomNum]}`);
    
  }

  return (

    <div className="container" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <img
        src="logo"
        alt={logo}
        className='logo'

      />

      <h2 className="title">Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[catSelect].nome ? 2 : 0,
              borderColor: "#1fa4"
            }}
			onClick={() => handleSwitchCategory(index)}>
            {item.nome}
          </button>
        ))}

      </section>

      <button className='button-frase' onClick={gerarDicaOuFrase}>++Gerar Frase++</button>

      {textoFrase !== "" && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App
