

import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'

function App() {
  
  function handleClick() {
    alert("Clicked 1")
  }

  const click2 = () => {
    alert("Clicked 2")
  }

  const addfive= (num) => {
    const newNum=num + 5;
    alert(newNum);
  } 

  return (
    <>
      <h1>Vite + React</h1>

      <Counter></Counter>

      <Batsman></Batsman>



  

      <button onClick={handleClick}>Click</button>
      
      <button onClick={click2}>Click 2</button>

      <button onClick={() => alert("Clicked 3")}>Click 3</button>


      <button onClick={() => addfive(10)}>Add 5</button>


    </>
  )
}

export default App
