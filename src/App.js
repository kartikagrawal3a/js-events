import React, { useState } from 'react';

const App = () => {
    const b1 = "#3c1361";
    const text = "Click Me to See Magic"
    const [bg, setbg] = useState(b1);
    const [bg1, setbg1] = useState("#6a0dad");
    const [clr, setclr] = useState("black");
    const [txt, settxt] = useState(text);
    const change = () => {
        const b2 = "#6a0dad";
        if (bg===b1) {
            setbg(b2);            
        }
        else{
            setbg(b1);
        }
        if (bg1 === b2) {
            setbg1(b1);
        }
        else{
            setbg1(b2);
        }
        if (clr === "black") {
            setclr("white");
        }
        else{
            setclr("black");
        }
        if (txt === text) {
            settxt("Here is the Magic 😍😻");
        }
        else{
            settxt(text);
        }
    }
    const div1 = {
        backgroundColor : bg,
        height : "100vh",
        display : "flex",
        justifyContent : "center",
        alignItems : "center" 
    }

    const btn = {
        padding : "20px",
        outline : "0",
        border : "0",
        fontSize : "2em",
        backgroundColor : bg1,
        cursor : "pointer",
        color : clr
    }
    return(
        <>
            <div style={div1}>
                <button style = {btn} onClick = {change}>{txt}</button>
            </div>
        </>
    );
};

export default App;