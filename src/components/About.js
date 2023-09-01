import React from 'react'

function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    // const [btnText, setBtnText] = useState('Enable Dark Mode')


    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: "black",
    //             border: '1px solid white',
    //         })
    //         setBtnText('Enable Light Mode')
    //     } else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }


  return (
    <div className='container' style={{backgroundColor: props.mode === 'dark'?"#303030":'white', color: props.mode === "dark"?'white':'black', borderRadius: '0.5rem'}}>
            <h1 className='my-3'>About us</h1>
            <div style={{paddingBottom:'1.5rem'}} className="accordion my-2" id="accordionExample" >
                    <div className="accordion-item" style={{backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}}>
                        <h2 className="accordion-header">
                        <button style={{backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character,  clear extra spaces, etc
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={{backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}}>
                        <h2 className="accordion-header">
                        <button style={{backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils is a free character count tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus, it is suitable for writing text with word/ character limit.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}}>
                        <h2 className="accordion-header">
                        <button style={{backgroundColor: props.mode === 'dark'?"black":'white', color: props.mode === "dark"?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter ssoftware works in any web browser such as Chrome, firefox, Internet explorer, safari, opera. It suits to count characters in facebook, Blog, books, excel, pdf document, etc
                        </div>
                        </div>
                    </div>
            </div>

            <div className="container">
              {/* <button type='button' className='btn btn-primary my-2' onClick={toggleStyle}  >{btnText}</button> */}
            </div>
            
      
    </div>
  )
}

export default About
