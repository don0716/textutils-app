import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange=(e)=> {
    // console.log(e.target.value)
    setText(e.target.value)
    
  }

  const onClickUpHandler = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success")
    
  }

  const onClickDownHandler = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success")
  }

  const copyHandler = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)

    props.showAlert("Copied Successfully", "success")
  }

  const onClickClearHandler = () => {
    let newText = "";
    setText(newText);

    props.showAlert("Cleared Successfully", "success")

  }

  const clearSpacesHandler = () => {
    let newText = text.split(/[ ] + /);  // REGEX LOGIC || watch videos on regex
    // console.log(newText)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces were removed Successfully", "success")
  }

  const speakHandler = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);

    props.showAlert("Speaking", "success")
  }
  const cancelSpeakHandler = () => {
    window.speechSynthesis.cancel()

    props.showAlert("Stopped Speaking", "success")
  }
  

  return (
    <>

      <div className='container' >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea style={{backgroundColor: props.mode==='dark'?'#d1d1d1':'white', color: props.mode === 'dark'?"white":"black"} } className="form-control" value={text} id="myBox" rows="8" onChange={handleChange}></textarea>
          </div>
          <button disabled = {text.length === 0} className={`btn btn-secondary mx-1 my-1`} onClick={onClickUpHandler}>Convert to Upper-Case</button>
          <button disabled = {text.length === 0} className={`btn btn-secondary mx-1 my-1`} onClick={onClickDownHandler}>Convert to Lower-Case</button>
          <button disabled = {text.length === 0} className={`btn btn-secondary mx-1 my-1`} onClick={copyHandler}>Copy Text</button>
          <button disabled = {text.length === 0} className={`btn btn-secondary mx-1 my-1`} onClick={onClickClearHandler}>Clear</button>
          <button disabled = {text.length === 0} className={`btn btn-secondary mx-1 my-1`} onClick={clearSpacesHandler}>clear extra spaces</button>

          <button disabled = {text.length === 0} type="button" onClick={speakHandler} className="btn btn-success mx-2 my-2">Speak</button>
          <button disabled = {text.length === 0} type="button" onClick={cancelSpeakHandler} className="btn btn-danger mx-2 my-2">StopSpeak</button>
        
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(' ').filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((ele)=>{return ele.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Text Box to preview it here"}</p>
      </div>

    </>
    
  )
}
