import classNames from "classnames"
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

export const Resultado = () => {

  const { idsDosParesEncontrados, cartas } = useJogoDaMemoria()

  const jogoFinalizou = cartas.length === idsDosParesEncontrados.length * 2

  const cn = classNames ("resultado", {
    "resultado--aberto": jogoFinalizou
  })


  return (
    <div className={cn}>
      <div className="resultado_caixa">
        <p>Seu nível de memória é:</p>
        <h1>Bom</h1>

        <img 
          src="/kitekat-3.png" 
          alt=" i magem referente ao nível de memória"
          height={150}
        />

        <p>
          <strong>Taxa de acertos:</strong>
          <span>60%</span>
        </p>

        <button className="button">
          Nova partida
        </button>

        <p>
          * Essa análise é ilustrativa e não possui base científica.
        </p>
      </div>
    </div>
  )
}
