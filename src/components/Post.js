import User from "./User"


function Post(props) {

    return (
        <div className="post">
            <div className="topo">
                <User name={props.obj.name} />
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img src={require("../../public/assets/img/" + props.obj.img).default} alt=""/>
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={require("../assets/img/" + props.obj.like + ".svg").default} alt=""/>
                    <div className="texto">Curtido por <strong>{props.obj.like}</strong> e <strong>outras {Math.floor(Math.random() * 100000)} pessoas</strong></div>
                </div>

            </div>
        </div>
    )
}

export default Post