import React,{useState} from"react";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus} from "react-icons/fa"
import { MdMargin } from "react-icons/md";
import  './Basic.css' 
import { BiMinus } from "react-icons/bi";

const UseState = ()=>{
   const [count, setCount]=useState(0)
    
    return<>
    <img src="hooks.png" />
    <div className="con">
     <b><p> Basic of hooks</p></b><br></br><br></br><h4>Hooks allow us to "hook" into React features 
     such as state and lifecycle methods.</h4><br></br>
     

<h2>Types Of Hooks:</h2><br></br>

<br></br>1.useState Hook
<br></br>2.useEffect Hook
<br></br>3.useRef Hook
<br></br>4.useCallback Hook
<br></br>5.useMemo Hook
<br></br>6.useContext Hook
<br></br>7.useReducer Hook
<br></br><br></br>Practical Example of useState Hook:
    </div>
    <div className="container">   
       <button onClick={() =>setCount(count + 1)}>
            <BiPlusMedical />
            </button>
            <h1>{count}</h1>
            <button onClick={() =>(count=== (0) ? setCount(0):setCount(count -1))}>
            
            <FaMinus />
        </button>
    </div>
    </>
};
export default UseState