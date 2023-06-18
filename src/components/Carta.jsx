import classNames from "classnames"
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

 export const Carta = ({id, idDoPar, imagem}) => {
  const {virarCarta, idsDasCartasViradas, idsDosParesEncontrados} = useJogoDaMemoria()

  const controlarClique = () => {
    virarCarta({ id, idDoPar })
  }

  const cartaEncontrada = idsDosParesEncontrados.includes(idDoPar)
  const cartaVirada = cartaEncontrada || idsDasCartasViradas.includes(id) 
  const bloqueado = cartaVirada


  const cn = classNames("carta",{
    "carta--virada": cartaVirada,
  })

  return (
  <button id={id} className={cn} onClick={controlarClique} disabled={bloqueado}>
      <div className="carta_conteudo">
        <div className="carta_frente"/>
        <div className="carta_costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}

