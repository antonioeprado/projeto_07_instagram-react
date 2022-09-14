function Suggestion(props) {
  return (
    <div className="sugestao">
        <div className="usuario">
            <img src={require("../assets/img/" + props.name + ".svg").default} alt=""/>
            <div className="texto">
                <div className="nome">{props.name}</div>
                <div className="razao">Segue você</div>
            </div>
        </div>

        <div className="seguir">Seguir</div>
    </div>
  )
}

export default Suggestion