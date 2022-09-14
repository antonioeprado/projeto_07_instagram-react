import Suggestions from "./Suggestions"
import User from "./User"


function SideBar() {
  return (
    <div className="sidebar">
        <User />
        <Suggestions />
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
    </div>
  )
}

export default SideBar