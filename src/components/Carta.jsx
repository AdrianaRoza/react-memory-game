import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

 export const Carta = ({id, idDoPar, imagem}) => {

  const {virarCarta} = useJogoDaMemoria()

  const controlarClique = () => {
    virarCarta({ id, idDoPar })
  }

  return (
    <button id={id} className="carta" onClick={controlarClique}>
      <div className="carta_conteudo">
        <div className="carta_frente"/>
        <div className="carta_costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}

