import classNames from "classnames"
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"
import { useMemo } from "react"
import { resultados } from "../constants/resultados"

export const Resultado = () => {

  const { idsDosParesEncontrados, cartas, quantidadeDeCartasViradas } = useJogoDaMemoria()

  const jogoFinalizou = cartas.length === idsDosParesEncontrados.length * 2

  const cn = classNames ("resultado", {
    "resultado--aberto": jogoFinalizou
  })

  const taxaDeAcertos = cartas.length / quantidadeDeCartasViradas * 100;
  const resultado = useMemo (() => {
    return resultados.find(({ min }) => min < taxaDeAcertos)
  }, [taxaDeAcertos])

  return (
    <div className={cn}>
      <div className="resultado_caixa">
        <p>Seu nível de memória é : </p>
        <h1>{resultado?.titulo}</h1>

        <img 
          src={resultado?.imagem} 
          alt=" imagem referente ao nível de memória"
          height={150}
        />

        <p>
          <strong>Taxa de acertos : </strong>
          <span>{taxaDeAcertos.toFixed(0)}%</span>
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
