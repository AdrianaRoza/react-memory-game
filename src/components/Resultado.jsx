
const Resultado = () => {
  return (
    <div className="resultado">
      <div className="resultado_box">
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