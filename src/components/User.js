import React, { useState } from 'react';

function User(props) {
    const [user, setUser] = useState("Catana");
    const [picture, setPicture] = useState(require(`../assets/img/${props.username}.svg`).default)

    function newUser() {
        const newUsername = prompt("Digite seu novo usuário:");
        setUser(newUsername);
    }

    function newPicture() {
        const newUserPicture = prompt("Insira o link de sua nova foto:");
        setPicture(newUserPicture);
    }

    return (
        <div className="usuario">
            <img onClick={newPicture} src={picture} alt=""/>
            <div className="texto">
                <strong>{props.username}</strong>
                <span>
                    {user}
                    <ion-icon onClick={newUser} name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default User