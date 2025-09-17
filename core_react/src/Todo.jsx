

// export default function Todo({task, isDone, time=0}) {


//     if(isDone) {
//         return <h3 style={{color: 'green'}}>Task: {task} is completed at {time} minutes</h3>
//     } else {
//         return <h3 style={{color: 'red'}}>Task: {task} is not completed at {time} minutes</h3>
//     }
// }


// conditional rendering

// export default function Todo({task, isDone, time=0}) {
//     return isDone ? 
//         <li>Done: {task} at {time} minutes</li>
//         : <li>Not Done: {task} at {time} minutes</li>;

// }




// export default function Todo({task, isDone, time=0}) {
//     return isDone && <li>Done: {task} at {time} minutes</li>;
// }




// export default function Todo({task, isDone, time=0}) {
//     return isDone || <li>Not Done: {task} at {time} minutes</li>;
// } 


export default function Todo({task, isDone, time=0}) {
    if(isDone) {
        return <h3 style={{color: 'green'}}>Task: {task} is completed at {time} minutes</h3>
    } else {
        return <h3 style={{color: 'red'}}>Task: {task} is not completed at {time} minutes</h3>
    }
}