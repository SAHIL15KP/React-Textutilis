import React, { useState } from 'react'

export default function Textform(props) {
    const [Text, SetText] = useState('')// this is state, Text is default value that can be change by in the ('')

    const handleupclick = () => {
        let newtext = Text.toUpperCase()// button for changing letters to uppercase
        SetText(newtext)
         props.showAlert("Text is converted into uppercase", "success")//alert msg after changing text to uppercase
    }

    const handleloclick = () => {
        let newtext = Text.toLowerCase()// button for changing letters to lowercase
        SetText(newtext)
        props.showAlert("Text is converted into lowercase", "success")//alert msg after changing text to lowercase
    }

    const handleonchange = (event) => {
        SetText(event.target.value)// because value is already given u can't type ur value thier , so i added this event which will add to ur text to textbox 
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="textbox" className="form-label"></label>

                    <textarea className="form-control" id="textbox" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#324978' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={Text} rows="8"></textarea>
                </div>
                <button className='btn btn-success mx-2' onClick={handleupclick}>convert to uppercase</button>
                <button className='btn btn-success mx-2' onClick={handleloclick}>convert to Lowercase</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{/*we saying that if color:props.mode = dark then prit white otherwise excute the color code as given #042743*/}
                <h1>Your  Text Summary</h1>
                <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} and {Text.length}</p>
                <p>{0.008 * Text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Enter something to Preview here"}</p>
            </div>
        </>
    )
}

