// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#303030'
      document.body.style.color = 'white'

      showAlert("Dark Mode is Enabled", "success");

      setInterval(()=>{
        document.title = 'TextUtils is Amazing'
      }, 1500)
      setInterval(()=>{
        document.title = 'Download TextUtils Now'
      }, 1000)



    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#303030'

      showAlert("Light Mode is Enabled", "success");
    }
    
  }

  const themeChangeHandler= (e) => {
    console.log(e.target.value)
    // setMode('pink')
    // setMode(e.target.value)
    
      // document.body.style.color = 'white'
      if(e.target.value === 'pink'){
        document.body.style.backgroundColor = '#a34c5b'
      } else if(e.target.value === 'blue'){
        document.body.style.backgroundColor = "#6d6d8f"
      }
  }


  return (
    <>
    <Navbar title= "TextUtils" about= "About Us" mode={mode} toggleMode={toggleMode} themeChangeHandler={themeChangeHandler}></Navbar>

      <Alert alert={alert}/>
    

    {/* <div className="container my-3">
       <TextForm heading = "Enter The Text To Analyze Below" mode={mode} showAlert={showAlert}/>
       <About mode={mode}/>
    </div> */}

    <div className="container my-3 mb-4">
     <Routes>
        <Route path="/textutils-app/" element={<TextForm heading = "Try Textutils - Textcounter, Wordcounter, remove extra spaces, Lowercase to Uppercase, Uppercase to lowercase" mode={mode} showAlert={showAlert}/>}/>

        <Route path="/about" element={<About mode={mode}/>}/>
     </Routes>
    </div>
      

    </>
  );
}

export default App;
