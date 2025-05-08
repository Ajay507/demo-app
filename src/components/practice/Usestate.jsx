import React from 'react'
import { useState } from 'react'

export default function Usestate(props) {
    const handleupcase = ()=>{
        setText(NewText)
    }
    const handlelowercase = ()=>{
        setText(lowertext)
    }
    const handleclear = ()=>{
        setText("")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const handlecopy = () => {
        let text = document.getElementById("Box");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("This is Default Text")
    let NewText = text.toUpperCase();
    let lowertext = text.toLocaleLowerCase();
    return (
        <>
            <div className='max-w-[1280px] m-20 bg-amber-100 p-10'>
                <h1 className='text-2xl  font-medium text-center mt-2 py-2 px-4 bg-black rounded-lg text-white w-fit mx-auto mb-5'>
                    {props.heading}</h1>
                <h1 className='text-2xl  font-medium text-center mt-10 py-2 px-4 bg-black rounded-lg text-white w-fit mx-auto mb-5'>
                    Example of Usestate in React</h1>
                <textarea className='h-[200px] border-2 w-full p-4' onChange={handleOnChange} value={text} id="Box"></textarea>
                <button onClick={handleupcase} className='bg-blue-400  py-2 px-4 rounded-lg text-white  font-medium mt-2'>
                    Convert to Uppecase 
                </button>
                <button onClick={handlelowercase} className='bg-blue-400 mx-2 py-2 px-4 rounded-lg text-white  font-medium mt-2'>
                    Convert to lowercase
                </button>
                <button onClick={handlecopy} className='bg-blue-400 py-2 px-5 rounded-lg text-white  font-medium'>
                   copy
                </button>
                <button onClick={handleclear} className='bg-blue-400 py-2 ml-2 px-5 rounded-lg text-white  font-medium'>
                   clear 
                </button>
            </div>
            <div className='max-w-[1280px] m-20 bg-black p-2 text-white'>
              <h1>Your Text Summary </h1>
              <p>{text.split(" ").length} Words And {text.length} Characters</p>
              <p>{0.008 * text.split (" ").length} Minutes Read</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
        </>
    )
}

