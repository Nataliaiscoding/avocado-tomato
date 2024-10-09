
import { Component } from 'react';
import './App.css';
import Tomato from './Tomato';
import Avocado from './Avocado';
import Paris from './Paris';
import NYC from './NYC';

class App extends Component {
  state = {
    show: true,
    showCity: true

  }

  render() { 
    const btn = this.state.show ? "TOMATO" : "AVOCADO";
    const city = this.state.showCity ? "NYC" : "PARIS";
    return (
    <div className="App">
      <div>
        <p>{this.state.show ? <Avocado /> : <Tomato />}</p>
      </div>
      <div>
        <button onClick={() => {this.setState({show: !this.state.show})}}>{btn}</button>
      </div>



      <div>
      <p>{this.state.showCity ? <Paris /> : <NYC />}</p>
      </div>
      <div>
        <button onClick={() => {this.setState({showCity: !this.state.showCity})}} >{city}</button>
      </div>
    </div>
  );
}
}

export default App;
