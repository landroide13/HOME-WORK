import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">

        <div className="container">

          <h1 align="center"> Palindrome app </h1>


          <div className="col-lg-12 nomp">
            <Form />
          </div>
        
        </div>
        
      </div>
    );
  }
}

export default App;
