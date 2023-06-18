import classNames from "classnames"
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

 export const Carta = ({id, idDoPar, imagem}) => {
  const {virarCarta, idsDasCartasViradas} = useJogoDaMemoria()

  const controlarClique = () => {
    virarCarta({ id, idDoPar })
  }

  const cartaVirada = idsDasCartasViradas.includes(id)

  const cn = classNames("carta",{
    "carta--virada": cartaVirada,
  })

  return (
  <button id={id} className={cn} onClick={controlarClique}>
      <div className="carta_conteudo">
        <div className="carta_frente"/>
        <div className="carta_costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}

