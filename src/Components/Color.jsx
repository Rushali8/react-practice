import React, { useState } from "react";

function Color(){
    const [word,setWord]=useState("Welcome to the page")
    const [style,setStyle]=useState({color:'red',background:'pink'})
    const [image,setImage]=useState("https://cdn.pixabay.com/photo/2024/03/05/20/48/church-8615302_1280.jpg")
    const handleClick =()=>{
        setWord("You are welcomed")
        setStyle({color:'green', background:'orange'})
        setImage("https://cdn.pixabay.com/photo/2014/10/22/18/16/church-498525_960_720.jpg")
    }
    return(
        <div style={style}> 
            <h2 style={style}>{word} </h2>
            <img src={image} alt="" height="300px" width="300px" /><br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )   
}

export default Color;