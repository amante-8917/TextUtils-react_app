import React, { useState } from 'react'

const TextForm = (props) => {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClsClick=()=>{
        let newText='';
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClsClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextForm