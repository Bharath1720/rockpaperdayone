import './index.css'

const GameResultsView = () => (
  <div>
    <div className="result-primary">
      <div className="result-display-container">
        <div className="one">
          <h1>You</h1>
          <img
            className="res-img"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt=""
          />
        </div>
        <div className="two">
          <h1>Opponent</h1>
          <img
            className="res-img"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>You WON</h1>
        <button type="button">Play Again</button>
      </div>
    </div>
  </div>
)

export default GameResultsView
