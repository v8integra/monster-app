import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Keith'
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello {this.state.name}</p>
          <button onClick={() => {
            this.setState({name: 'Jacob'});
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
