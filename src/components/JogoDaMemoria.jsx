import Carta from "./Carta"
import Placar from "./Placar"

 
 const JogoDaMemoria = () => {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria_conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria_cartas">
          <Carta />
        </div>
      </div>
    </div>
  )
}
export default JogoDaMemoria

