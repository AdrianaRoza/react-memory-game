import { Carta } from "./Carta.jsx"
import { Placar } from "./Placar.jsx"
import { Resultado } from "./Resultado"
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria"
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria.jsx"
import { useEffect } from "react"

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  )
}

export const JogoDaMemoriaConteudo = () => {
  const { cartas, iniciarJogo } = useJogoDaMemoria()

  useEffect(() => {
    iniciarJogo()
  }, [])
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria_conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria_cartas">
          {cartas .map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </div>
      </div>
      <Resultado />
    </div>
  )
}
