
import './App.css'

import Todo from './Todo';
import Actor from './Actor';
import Singers from './Singer';

function App() {
  
  const time=50;
  const actors=["Bappa Raj","Shakib Khan","Manna","Jashim"];

  const singers=[
    {id:1, name: "Dr. Mahfuz", age: 30},
    {id:2, name: "Naimul", age: 25},
    {id:3, name: "Kumar Bishwajit", age: 50},
    {id:4, name: "Andrew Kishore", age: 60}
  ];

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }



      {
        singers.map(singer => <Singers key={singer.id} singer={singer}></Singers>)
      }

      
      <Person></Person>


      
      

      
      <Sports></Sports>

      <Developer name="Shabana"></Developer>

      <Developer name="Aion"></Developer>

      <Player name="Player1" runs="100"></Player>

      <Todo 
        task="learn react" 
        isDone={true} 
        time={time}
      >
      </Todo>


      <Todo task="learn vue" isDone={false} time={time}></Todo>
      <Todo task="learn angular" isDone={true} time={time}></Todo>

    </>
  )
}


function Person() {
  const age=25;
  const name="Aion";

  const styleObj = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <>
    <p className='student'>I am {name} and I am {age} years old.</p>
    <h1 style={styleObj}>I am {name} and I am {age} years old.</h1>
    </>
  )
}


function Sports() {
  const sportName = "Soccer";
  const players = 11;
  return (
    <h1 className='student'>I play {sportName} and there are {players} players in my team.</h1>
  )
}


function Developer(props) {
  const devName = props.name;
  const language = "JavaScript";
  return (
    <div style={{border: '2px solid green', margin: '10px', padding: '10px'}}>
      <h3>Name : {devName}</h3>
      <h3>Language : {language}</h3>
    </div>
  )
}

function Player({name,runs=0}) {
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  )
}

export default App
