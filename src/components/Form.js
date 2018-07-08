import React, { Component } from 'react'
import List from './List'

export default class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      words: 
        [
          "A but tuba",
          "A car, a man, a maraca",
          "A dog has a plan, a canal: pagoda",
          "A dog!A panic in a pagoda!",
          "A lad named E.Mandala",
          "A man is a man, a plan is a plan, a canal is in Panama",
          "A new order began, a more Roman age bred Rowena",
          "A nut",
          "for a jar of tuna",
          "A Santa at Nasa is Clause",
          "A Santa dog lived as a devil God at NASA",
          "A slut nixes sex in Tulsa"
        ],
      showWords: false 
    };
  }

  //For later call The API.

  // componentDidMount(){
  //   this.fetchData();
  // }

  // fetchData = () =>{
  //   fetch('http://www.palindromelist.net/api')
  //   .then(res => res.json)
  //   .then(data => console.log(data))
  //   .then(words => this.setState({ words }))
  // }


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
              <ul className = "list-group">
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
