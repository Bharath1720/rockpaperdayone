import {Component} from 'react'
import Popup from 'reactjs-popup'
import GameRulesView from '../GameRulesView'
import GameResultsView from '../GameResultsView'

import 'reactjs-popup/dist/index.css'

import './index.css'

class PlayingView extends Component {
  state = {
    score: 0,
    isGameRunning: true,
  }

  renderChoiceList = () => {
    const {choicesList} = this.props
    return (
      <ul className="ul-images-container">
        {choicesList.map(each => (
          <GameRulesView gamesList={each} key={each.id} />
        ))}
      </ul>
    )
  }

  parent = () => {
    console.log('OKya')
  }

  render() {
    const {isGameRunning} = this.state
    return (
      <div className="playing-view-main">
        <div className="border-container">
          <div className="border-left">
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
          </div>
          <div className="border-right">
            <p>Score</p>
            <h1>0</h1>
          </div>
        </div>
        {isGameRunning ? (
          <>this.renderChoiceList()</>
        ) : (
          <GameResultsView passed={this.parent} />
        )}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div className="popup-height-container">
                  <img
                    className="image-rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default PlayingView
