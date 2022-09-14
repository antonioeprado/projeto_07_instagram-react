import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

function Body() {
  const names = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
  return (
    <div className="corpo">

        <div className="esquerda">
          <Stories names={names} />
          <Posts />
        </div>
        <SideBar />

    </div>
  )
}

export default Body