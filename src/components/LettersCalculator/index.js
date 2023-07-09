import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {lenOfInput: 0}

  onInputChange = e => {
    const word = e.target.value
    console.log(word.length)
    this.setState({lenOfInput: word.length})
  }

  render() {
    const {lenOfInput} = this.state
    return (
      <div className="main-container">
        <div className="elements-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className="enter-text">Enter the phrase</p>
          <input
            className="input-element"
            onChange={this.onInputChange}
            type="input"
            placeholder="Enter the phrase"
          />
          <h1 className="letter-count">No.of Letters: {lenOfInput}</h1>
        </div>
        <img
          className="img-element"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="Letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
