 import React, {useState} from 'react'
 
 export default function Form(props) {

  const [text,setText] = useState("Enter Text Here");

  const formStyle ={
    marginTop : "5vh"
  }
  const textColor = props.mood === "light" ? "text-dark" : "text-light";

  const countLength=(text)=>{
    return text.trim().split("").filter(char => char !== " ").length;
     }

  
  const handleOnChange=(e)=>{
    setText(e.target.value)
      }
  
  const handleUpClick=()=>{
console.log("handleUpClick")
 let newText = text.toUpperCase();
 setText(newText);
props.showAlert("Upper Case has been activeted","success")
  }
  const handleLowClick=()=>{
console.log("handleUpClick")
 let newText = text.toLowerCase();
 setText(newText);
 props.showAlert("lower Case has been activeted", "info")
  }

  const handleClear = ()=>{
    setText("")
  }


   return (
    <>
    <div className="container">
<h1>{props.heading}</h1>
<div className="mb-3"  style={formStyle } >
                        
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to lowerCase</button>
<button className="btn btn-danger mx-2" onClick={handleClear}>Clear Button</button>
</div>
<div className="container">
<h1 className={`text-${props.mood === "light"? "dark" : "light"}`}>Your paragraph summary</h1>
  <p className={`text-${props.mood === "light"? "dark" : "light"}`} > {countLength(text)} words and {text.length}character</p>
  <p className={`text-${props.mood === "light"? "dark" : "light"}`}>  {0.008 * text.split(" ").length } minutes to read</p>
</div>
    </>
   )
 }
 