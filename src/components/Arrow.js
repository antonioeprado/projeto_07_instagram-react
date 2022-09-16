import React from 'react'

function Arrow() {

    function scrollLeft(element) {
        if(element.parentNode.classList.contains("setinha")){
            document.querySelector(".stories").scrollLeft+= 20;
        } else if(element.parentNode.classList.contains("tras")){
            document.querySelector(".stories").scrollLeft-= 20;
        }
    }

    return (
        <React.Fragment>
            <div className="setinha" onClick={event => scrollLeft(event.target)}>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            <div className="tras" onClick={event => scrollLeft(event.target)}>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </React.Fragment>
    )
}

export default Arrow