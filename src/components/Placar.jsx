
const Placar = () => {
  return(
    <div className="placar">
      <Pontos titulo="Pontos" valor={0} />
      <Pontos titulo="Cartas viradas" valor={0} />
    </div>

     
  )
}
export default Placar

const Pontos = ({ titulo, valor }) => {
  return(
    <div className="pontos">
      <strong className="pontos_titulo">{titulo}:</strong>
      <span className="pontos_valor">{valor}</span>
    </div>
  )
}
 