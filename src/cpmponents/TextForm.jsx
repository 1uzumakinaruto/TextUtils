import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText =("");
        setText(newText)
    }
    const handleCopyText = () => {
        // console.log("Uppercase was clicked: " + text);
        navigator.clipboard.writeText(text);
        
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
        //         This line calls the setText function, which is used to update the state variable text.
        // event.target.value retrieves the current value of the input element (in this case, the textarea) that triggered the event.
        // setText(event.target.value) updates the text state with this new value.
    }
    const [text, setText] = useState('');
    // text = "New text";  // wrong way to change variable(state)
    //setText("new text")  // correct way to change state
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-info mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-danger mx-1" onClick={handleCopyText}>Copy to Clipboard</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}

// onChange method i have used to change the text in the text area. initial value is {text} onChange method will allow to change the text that will be our setText(updated text)
// useState is a hook in React that allows functional components to have state. It lets you add state variables to your components and manage their values over time. useState is one of the most commonly used hooks and is essential for handling dynamic data and interactive behavior in React components.