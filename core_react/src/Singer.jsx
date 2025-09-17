

import './App.css'

export default function Singers({singer}) {

    return(
        <div className='singer'>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>

        </div>
    )
}