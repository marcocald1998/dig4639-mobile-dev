import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
function NameBadge(){
  return( 
  <p>The sum is {10+10}</p>
  )
}

/*
class NameBadge extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <p>The sum is {10+10}</p>
  }
}
*/
class App extends React.Component{
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge name="Thot McGee"/>
        <p>
          Hello World
        </p>
=======

function NameBadge(props) {
  console.log(props);
  return ( 
    <p>My name is {props.name}</p>
  )
}

class App extends React.Component {
  clickHandler(e) {
    alert("Clicked +");
    console.log(this);
    console.log(e);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={this.clickHandler}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World 
        </p>
        <NameBadge name="John"/>
        <NameBadge name="Ana"/>
        <NameBadge name="June"/>
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
