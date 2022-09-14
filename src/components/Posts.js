import Post from "./Post"


function Posts() {
    const postsObj = [
        {
            name: "meowed",
            img: "gato-telefone.svg",
            like: "respondeai"
        }, {
            name: "barked",
            img: "dog.svg",
            like: "adorable_animals"
        }

    ]
    return (
        <div className="posts">
            {postsObj.map((item, index) => <Post key={index} obj={item} />)}
        </div>
    )
}

export default Posts