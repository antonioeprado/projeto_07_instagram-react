function Story(props) {

  return (
    <div className="story">
        <div className="imagem">
            <img src={require(`../assets/img/${props.name}.svg`).default} alt=""/>
            </div>
        <div className="usuario">{props.name}</div>
    </div>
  )
}

export default Story