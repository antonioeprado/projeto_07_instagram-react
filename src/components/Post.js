import { useState } from "react"

function Post(props) {

    const [savedPost, setSavedPost] = useState(false);
    const [likedPost, setLikedPost] = useState(false);
    const [likes, setLikes] = useState(123456);

    function updateLikes() {
        const count = likedPost ? likes - 1 : likes + 1;
        setLikes(count);
    }

    function likePost(e) {
        if(e.tagName === "IMG" && !likedPost) {
            const liked = e.parentNode.parentNode;
            const likeButton = liked.querySelector("[name=heart-outline]");
            likeButton.classList.add("liked");
            likeButton.setAttribute("name", "heart");
            updateLikes();
            const like = likedPost ? false : true;
            setLikedPost(like);
        } else if(e.tagName === "ION-ICON") {
            likedPost ? e.setAttribute("name", "heart-outline") : e.setAttribute("name", "heart");
            e.classList.toggle("liked");
            updateLikes();
            const like = likedPost ? false : true;
            setLikedPost(like);
        }
    }

    function bookmarkPost(e) {
        savedPost ? e.setAttribute("name", "bookmark-outline") : e.setAttribute("name", "bookmark");
        const bookmark = savedPost ? false : true;
        setSavedPost(bookmark);
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={require(`../assets/img/${props.obj.name}.svg`).default} alt="" />
                    <div className="texto">
                        <strong>{props.obj.name}</strong>
                    </div>
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div onClick={(event) => likePost(event.target)} className="conteudo">
                <img src={require("../assets/img/" + props.obj.img).default} alt="" />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={(event) => likePost(event.target)} name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={(event) => bookmarkPost(event.target)} name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={require("../assets/img/" + props.obj.like + ".svg").default} alt="" />
                    <div className="texto">Curtido por <strong>{props.obj.like}</strong> e <strong>outras {likes} pessoas</strong></div>
                </div>

            </div>
        </div>
    )
}

export default Post;