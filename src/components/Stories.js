import Story from './Story';

function Stories() {
  const names = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
  return  (
    <div className="stories">
        {names.map((item, index) => <Story key={index} name={item}/>)}
        <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
  )
}

export default Stories