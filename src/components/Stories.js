import Arrow from './Arrow';
import Story from './Story';

function Stories() {
  const names = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
  return  (
    <div className="stories">
        {names.map((item, index) => <Story key={index} name={item}/>)}
        <Arrow />
    </div>
  )
}

export default Stories