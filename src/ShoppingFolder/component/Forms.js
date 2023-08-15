import React,{useState} from 'react'

const Forms = () =>{
    let[state,setState]=useState("");
    let[value,setValue]=useState("")
    const textChange=(e)=>{
     setState(e.target.value)
    }
    const valueBind=()=>{
        setValue(state)
    }
  return (
    <section>
        Hello,{value}
        <div className='formData'>
            <input type="text" placeholder="enter here...." onChange={textChange}/>
             <br/>
             <button className='button' onClick={valueBind}>Submit</button>
        </div>
    </section>
  )
}

export default Forms


