import classNames from "classnames"

const Resultado = () => {

  const cn = classNames ("resultado", {
    "resultado--aberto": false
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
export default Resultado