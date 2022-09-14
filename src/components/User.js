

function User(props) {
    return (
        <div className="usuario">
            <img src={require("../assets/img/catanacomics.svg").default} alt=""/>
            <div className="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    )
}

export default User