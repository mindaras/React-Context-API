import React, { Component } from 'react';
import { MyContext } from './App';

class Person extends Component {
  state = {
    newName: ''
  }

  submitHandler(e, context) {
    e.preventDefault();
    context.changeName(this.state.newName);
    this.setState({newName: ''});
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>Hello, my name {context.name} and I'm {context.age} years old</p>
            <form onSubmit={e => this.submitHandler(e, context)}>
              <input name="newName" value={this.state.newName} onChange={e => this.setState({newName: e.target.value})} />
              <input type="submit" value="Change name" />
            </form>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Person;
