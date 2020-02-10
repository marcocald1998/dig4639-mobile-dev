import React from 'react';
import logo from './logo.svg';
import './App.css';
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
