import { useState } from "react";

function Calculator() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult("")
    }
    const delet = () => {
        setResult(result.slice(0, result.length - 1));//-1 instand of  result.length-1 
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Error")
        }
    }
    return (
        <div className="calcultor-grid">
            {/* <div className="outoput">
            <div className="previous-operand" value={result} > </div>
            <div className="current-operand"></div>
        </div> */}
            <form className="outoput">
                <input className="text" type="text" value={result} />
            </form>
            {/* clear and c= backspace */}
            <button onClick={clear} id="clear" className="span-two">AC</button>
            <button onClick={delet} id="delet" >DEL</button>
            <button name="/" onClick={handleClick}  >/</button>
            <button name="1" onClick={handleClick} >1</button>
            <button name="2" onClick={handleClick} >2</button>
            <button name="3" onClick={handleClick} >3</button>
            <button name="*" onClick={handleClick} >*</button>
            <button name="4" onClick={handleClick} >4</button>
            <button name="5" onClick={handleClick} >5</button>
            <button name="6" onClick={handleClick} >6</button>
            <button name="+" onClick={handleClick} >+</button>
            <button name="7" onClick={handleClick} >7</button>
            <button name="8" onClick={handleClick} >8</button>
            <button name="9" onClick={handleClick} >9</button>
            <button name="-" onClick={handleClick} >-</button>
            <button name="." onClick={handleClick} >.</button>
            <button name="0" onClick={handleClick} >0</button>
            <button onClick={calculate} className="span-two">=</button>
        </div>
    )
}
export default Calculator;