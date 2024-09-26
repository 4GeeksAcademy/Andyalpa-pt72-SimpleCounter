import React from "react";
import  { useState, useEffect } from "react";
import Counter from "./counter";
 
const App = () => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
       
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
    
        return () => clearInterval(interval);
    }, [count]);
 
    return (
        <Counter count={count} />
    );
};
 
export default App;