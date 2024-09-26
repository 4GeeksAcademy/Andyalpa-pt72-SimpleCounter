import React from "react";

const Counter = ({count}) => {
    

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
        </div>
     );
}
 
export default Counter;