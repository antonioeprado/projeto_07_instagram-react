import Body from "./Body"
import NavBar from "./NavBar"
import React from "react"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Body />
      <div className="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </React.Fragment>
  )
}

export default App