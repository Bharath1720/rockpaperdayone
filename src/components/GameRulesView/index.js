import './index.css'

const GameRulesView = props => {
  const {gamesList} = props
  const {imageUrl} = gamesList
  const btnClicked = () => {
    console.log('Clicked')
  }
  return (
    <li>
      <button onClick={btnClicked} className="button-image" type="button">
        <img className="image-sizing" src={imageUrl} alt="" />
      </button>
    </li>
  )
}

export default GameRulesView
