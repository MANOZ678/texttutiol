import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Form from './components/Form'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

function App() {
  
  const [mood, setMood] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg : message,
      type : type,
     })

     setTimeout(()=>{
   setAlert(null)
     },3000)
  }

  const toggleMode =()=>{
if(mood === "light"){
 setMood("dark");
 document.body.style.backgroundColor = "#343a40";
 showAlert("darkmode has been enable" , "danger")
 document.title = "text-tutial Dark Mode"
 setInterval(()=>{
 document.title = "text-tutial is amazing"
 },2000)
 setInterval(()=>{
 document.title = "install text tutial now"
 },1500)
}else{
  setMood('light');
  document.body.style.backgroundColor = "white"
  showAlert("lightmode has been enable" , "primary")
   document.title = "text-tutial Light Mode"
}
  }

  return (
    <>
    <Router>
   <Navbar name="Manoz" mood={mood} toggleMode={toggleMode}/>
   <Alert  alert={alert}/>


   <Routes>
   <Route path="/" element={<Form  showAlert={showAlert} mood = {mood}/>} />
     <Route path="/home" element={  <Form  showAlert={showAlert} mood = {mood}/>} />
     <Route path="/about" element={<About />} />
      
      </Routes>

      </Router>
    </>
  )
}

export default App


