
const Carta = ({id, idDoPar, imagem}) => {
  return (
    
    <button id={id} className="carta">
      <div className="carta_conteudo">
        <div className="carta_frente"/>
        <div className="carta_costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}
export default Carta
