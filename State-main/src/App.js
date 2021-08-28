import logo from './logo.svg';
import './App.css';
import Person from './component/Person';
import React,{useState} from 'react'

function App() {
  const [show, setshow] = useState(false)
  return (
    <div className="App">
       { 
         show?<div className="card">
           <Person />
          </div>:null 
        }


        <h2 style={{color: " darkolivegreen"}}>you want to see this profile ?</h2>
        <button onClick={()=>setshow(true)}>Show</button>
        <button onClick={()=>setshow(false)}>Hide</button>

     </div>
  );
}

export default App;
