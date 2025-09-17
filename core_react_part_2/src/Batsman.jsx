


import { useState } from 'react';


export default function Batsman() {

    const [runs, setRuns] = useState(0);


    const handleStyles = {
        marginTop: "30px",
        padding: "10px",
        border: "1px solid royalblue",
        borderRadius: "5px"
    }

    const handleSingles = () => {
        setRuns(runs + 1);
    }

    const handleDoubles = () => {
        setRuns(runs + 2);
    }

    const handleFours = () => {
        setRuns(runs + 4);
    }

    const handleSixes = () => {
        setRuns(runs + 6);
    }

    return (
        <div style={handleStyles}>
            <h3>Batsman Name: Kumar Sangakara</h3>
            {
                runs>=50 && <p> This is a half century</p>
                
            }

            {
                runs>=100 && <p> This is a century</p>
            }
            <h4>Runs Scored: {runs} </h4>
            <button onClick={handleSingles}>single</button>
            <button onClick={handleDoubles}>double</button>
            <button onClick={handleFours}>four</button>
            <button onClick={handleSixes}>six</button>
        </div>
    )
}