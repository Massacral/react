function CardServico({ titulo, descricao }) {

  return (
    <div className="card-servico">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button>Saiba mais</button>
    </div>
  )
}

export default CardServico