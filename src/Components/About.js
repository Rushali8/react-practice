import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function About (){
   const [mystyle, setmystyle] = useState({

   
        color : 'pink',
        
        background : 'blue'
       
       
    })

     const [btntext, setBtnText] = useState("Enable Dark Mode");

      const togglestyle = ()=>{
      if    (mystyle.color=== 'white'){
         setmystyle({
            color : 'blue',
        
       background : 'red' ,
       border :'2px solid white'
         })
         setBtnText("Enable light Mode")
        }
        else{
            setmystyle({
                color : 'red',
            
            background : 'black'
             })
             setBtnText("Enable Dark Mode")
        }
    }
    return (
        <div classNameName="container" style={mystyle}>
            <h2 classNameName="ab-2">About us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
    <div classNameName="container" ab-3>
 
  <button onClick={togglestyle} type="button" className="btn btn-primary">Enable Dark Mode </button>    
  </div>
 
</div>
            
        </div>
    );
}

export default About;
