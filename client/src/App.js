import './App.css';
import axios from "axios"
import { useEffect,useState } from 'react';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch ("http://localhost:5000/")
    .then((response) => {console.log('yey')})
       
    
  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
