import { paresDeCartas } from "./constants/cartas"
import Carta from "./Carta.jsx"
import Placar from "./Placar.jsx"
import Resultado from "./Resultado"

const JogoDaMemoria = () => {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria_conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria_cartas">
          {paresDeCartas.map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </div>
      </div>
      <Resultado />
    </div>
  )
} 
export default JogoDaMemoria

