import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';



// 
function Textform (props){
    const handleUpClick= () =>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleDownClick= () =>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleclearClick= () =>{
        console.log("UpperCase was clicked" + text);
        let newText='';
        setText(newText)
    }
    const handleOnChange=(event)=>{
    console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text here');
    return (
        <div>
    <div style={{color:props.mode==='dark'?'white':'black' }}>
            <h1>{props.heading} </h1>
        <div className="ab-3">
        <label for="exampleformcontrolinput1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gery':'light'} } id="exampleformcontrolTextarea1" rows="8"></textarea>

        </div>
        <button className=" btn btn-success" onClick={handleUpClick}>Convert to upper case</button>
        <button className=" btn btn-danger" onClick={handleDownClick}>Convert to lower case</button>
        <button className=" btn btn-dark" onClick={handleclearClick}>clear text</button>
       
        </div>
        <div className="container ab-2" style={{color:props.mode==='dark'?'white':'black ' }}>
            <h1 >Count words and characters </h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" " ).length } minutes read</p>
            <h3>preview</h3>
            <p>{text }</p>
        </div>
        </div>
    );
}

export default Textform ;
                
