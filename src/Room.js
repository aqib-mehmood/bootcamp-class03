import React, {useState} from 'react';
import './custom.css';


function Room(params) {

    let [isLit, setLit] = useState(true); //in  useState we assign the initial value of state.
    let [isTemp, setTemp] = useState(22);

    function onLit() {
        if (isLit == false) {
            setLit(!isLit);
        }
        else{
            alert("Light is already ON");
        }
    }

    function offLit() {
        if (isLit == true) {
            setLit(!isLit);
        }
        else{
            alert("Light is already OFF");
        }
    }


    function increaseTemp(){
        setTemp(++isTemp);
    }

    function descreaseTemp(){
        setTemp(--isTemp);
    }

   // const UpdateAge = () => setAge(++isAge)
   //{`room ${isLit ? 'Lit' : 'dark'}`}

    return(
        <div className={"room "+ (isLit ? 'Lit' : 'dark')}> 
            Light Status = {isLit ? 'ON' : 'OFF'}
            <br/>
            Temperature = {isTemp} Deg Celc
            <br/><br/>
            <button onClick={onLit}>Lit ON</button>
            <button onClick={offLit}>Lit OFF</button>
            <button onClick={increaseTemp}>Temp + </button>
            <button onClick={descreaseTemp}>Temp - </button>
        </div>
    )
}


export default Room;