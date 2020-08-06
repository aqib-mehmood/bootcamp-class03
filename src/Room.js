import React, {useState} from 'react';


function Room(params) {

    let [isLit, setLit] = useState(true); //in  useState we assign the initial value of state.
    let [isAge, setAge] = useState(20);

    function UpdateLit() {
        setLit(!isLit);
    }

    function UpdateAge(){
        setAge(++isAge);
    }

   // const UpdateAge = () => setAge(++isAge)

    return(
        <div>
            This Room is {isLit ? 'Lit' : 'dark'}
            <br/>
            <button onClick={UpdateLit}>Toggle Lit</button>
            <br/>
            Age = {isAge}
            <br/>
            <button onClick={UpdateAge}>Increase Age</button>
        </div>
    )
}


export default Room;