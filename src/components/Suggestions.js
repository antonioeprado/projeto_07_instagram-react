import Suggestion from "./Suggestion";


function Suggestions() {
    const suggestNames = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestNames.map((item, index) => <Suggestion key={index} name={item} />)}
        </div>
    )
}

export default Suggestions