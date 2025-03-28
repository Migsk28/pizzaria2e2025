import { useState } from "react"

function App() {


  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState("Lakers")
  const [pi] = useState(3.14)
  

  /*var idade = 18;
  let time = "Lakers"
  const pi = 3.14;*/

  const Formulario = (props) => {
    const [valor, setValor] = useState(10)
    return (
      <div>
        <input
          className="nome"
          placeholder={props.sombra}
          onChange={(e) => { setValor(e.target.value) }}
          type="text" />

        <button
          className="botao"
          onClick={() => { 
            if(valor.length > 0){
              alert(valor)
            }
            else
            alert(props.idade + " anos, nome: " + props.nome)
          }}
        >
          Clique Aqui
        </button>
      </div>
    )
  }
  return (
    <div>
      <h3>Pizzaria 2E</h3>

      <Formulario nome = "Ricardo" 
      idade = {45}
      sombra = "Digite seu nome.."/>
      <Formulario nome = "Kaique" idade = {25} sombra = "Digite seu nome.."/>
      <Formulario nome = "Nayara" sombra = "Digite seu nome.."/>
      <Formulario nome = "Julia" sombra = "Digite seu nome.."/>

    </div>
  )
}
export default App