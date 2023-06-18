import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

export const Placar = () => {

  const {quantidadeDeCartasViradas, quantidadeDePontos} = useJogoDaMemoria()

    return(
      <div className="placar">
        <Pontos titulo="Pontos" valor={quantidadeDePontos} />
        <Pontos titulo="Cartas viradas" valor={quantidadeDeCartasViradas} />
      </div>
    )
}

const Pontos = ({ titulo, valor }) => {
  return(
    <div className="pontos">
      <strong className="pontos_titulo">{titulo}:</strong>
      <span className="pontos_valor">{valor}</span>
    </div>
  )
}
 