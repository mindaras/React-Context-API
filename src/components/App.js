import React, { Component } from 'react';
import Family from './Family';

export const MyContext = React.createContext();

class App extends Component {
  state = {
    name: 'John',
    age: 25
  }

  render() {
    return (
      <div className="App">
        <MyContext.Provider value={{
          ...this.state,
          changeName: name => this.setState({name})
        }}>
          <Family />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
