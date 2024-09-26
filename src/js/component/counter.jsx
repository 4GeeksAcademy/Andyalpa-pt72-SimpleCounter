import React from "react";
import  { useState, useEffect } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0);
 
    useEffect(() => {
       
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
    
        return () => clearInterval(interval);
    }, [count]);

    const resetCount = () => {
        setCount(0)
    } 

    

    return ( 
        <div
            style={{
                display: "flexbox",
                margin: "auto",
                textAlign: "center",
                background: "#4c4e7d57",      
                width: "300px",
                marginTop: "50px",
                borderRadius: "50px",
                boxShadow: "0 0 30px 20px #e6ebee"
            }}
        >
            <h1 style={{ color: "blue" }}>
                Andyalpa
            </h1>
            <h3>
                This is my counter
            </h3>
            <h1>{count}</h1>
            <button onClick={resetCount} className="btn btn-primary">Reset Count</button>
        </div>
     );
}
 
export default Counter;