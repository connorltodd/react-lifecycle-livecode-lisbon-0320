import React from 'react';
import Counter from './components/Counter';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isCounterDisplayed: true
    }
  }

  handleCounterChange = () => {
    let counterValue = this.state.counter;
    counterValue += 1;
    this.setState({ counter: counterValue })
  }

  counterVisibilityHandler = () => {
    let counterVisibility = this.state.isCounterDisplayed;
    counterVisibility = !this.state.isCounterDisplayed;

    this.setState({ isCounterDisplayed: counterVisibility })
  }

  render() {
    return (
      <div className="App">
        {this.state.isCounterDisplayed === true &&
          <Counter
            counter={this.state.counter}
          />
        }

        <button onClick={this.handleCounterChange} >Click to update the counter value</button>
        <button onClick={this.counterVisibilityHandler} >show / hide counter</button>
      </div>
    );
  }

}

export default App;
