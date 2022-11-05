import React, { useState } from 'react';
import Button from '../Child/Button';
import "./calculator.scss";
import items from '../calculatorData';
const Calculator = () =>{

    const[input, setInput] = useState("0");
    const[output, setOutput] = useState("0");

    return (
    <div className="container"> 
        <div className="screen">
            <div className="input">{input}</div>
            <div className ="output"><span>=</span>{output}</div>
        </div>
        <div className="keypad"> 
        {items.map((items)=>{
            return<Button
                key={items.id}
                title ={items.title}
                value ={items.value}
                input = {input}
                setInput = {setInput}
                output = {output}
                setOutput= {setOutput}
            />
            
        })}
        </div>
    </div>
    );
};


export default Calculator;