
import { Suspense } from 'react'
import './App.css'
import Bottles from './componens/Bottles/Bottles'

// const bottlesPromise=fetch('./bottles.json').then(res => res.json());

// const bottlesPromise2=fetch('https://raw.githubusercontent.com/aion-shahriar/Bottles-data/refs/heads/main/bottles.json')
// .then(res => res.json())

const bottlesPromise=fetch('./bottles.json').then(res => res.json());


function App() {


  
  

  return (
    <>
      
      <h1>Buy Water Bottles</h1>

      <Suspense callback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>
      
    </>
  )
}

export default App
