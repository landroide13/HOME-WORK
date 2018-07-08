import React from 'react'

const List = (props) => {

  const w = props.word;

  let palin = (w) => {
    const re = /[^A-Za-z0-9]/g;
    w = w.toLowerCase().replace(re, '');
    let revW = w.split('').reverse().join('');
    return w === revW;
  }

  
  if(palin(w)) {
    return (
      <p className="palin">" { w } - True "</p>
    )
  }else{
    return (
      <p className="noPalin">" { w } - False "</p>
    )
  }

} 

export default List;

