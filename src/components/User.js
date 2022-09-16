function User(props) {
    console.log(props)
    return (
        <div className="usuario">
            <img src={require(`../assets/img/${props.username}.svg`).default} alt=""/>
            <div className="texto">
                <strong>{props.username}</strong>
                <span>
                    Catana
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default User