

import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react';
import Friends from './Friends';




const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json()).then(data => console.log(data));


const fetchFriends =  async() => {
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
  
}

function App() {

  const friendsPromise=fetchFriends();
  
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

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users> 
      </Suspense>


      <Suspense fallback={<h2>Friends Loading...</h2>}>
        <Friends friendsPromise={friendsPromise}>
        
        </Friends>
        
      </Suspense>
      



  

      <button onClick={handleClick}>Click</button>
      
      <button onClick={click2}>Click 2</button>

      <button onClick={() => alert("Clicked 3")}>Click 3</button>


      <button onClick={() => addfive(10)}>Add 5</button>


    </>
  )
}

export default App
