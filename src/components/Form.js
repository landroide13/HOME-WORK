import React, { Component } from 'react'
import List from './List'

export default class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      words: [],
      showWords: false 
    };
  }

////////////////////////////////////////  

  //For later call The API.

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://localhost:5001/api/palindrome1')
      .then(res => res.json())
      .then(data => data['palindrome'])
      .then(words => this.setState({
        words
      }))
  }

  /////////////////////////////////////

  wordsHandler = () =>{
    // console.log('Handler pressed..');
    let doesWord = this.state.showWords;
    this.setState({ showWords : !doesWord})
  }


  render() { 

    const { words } = this.state;

    let response = null;

    if(this.state.showWords){

      response = words.map(word =>{
        // console.log(word);
            return(
              <ul className = "list-group animated fadeIn">
                <li><List word={ word } /></li>
              </ul>
            )
            }
        )
    }
    
    let initial =  words.map(w =>{
         return(
            <ul className = "list-group">
              <li>{ w }</li>
            </ul>
           )
       })
       
    return (

      <React.Fragment>

        <div className="row">

          <div className="top30 col-lg-4 square">
          { initial }
          </div>

          <div align="center" className = "top5 col-lg-2" >
             <button type="button" onClick={this.wordsHandler} className="btn btn-success">Check it out</button>
          </div>

          <div className="top30 col-lg-4 square">
          { response }
          </div>

        </div>
        
      </React.Fragment>

    )
  }
}
