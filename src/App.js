import './App.css';
import {  useState } from 'react';
function App() 
{
 const [lat, setLat] = useState(null);
 const [long, setLong] = useState(null);
 const geolocationAPI = navigator.geolocation;
 const url="https://google.com";
 geolocationAPI.getCurrentPosition((position) => {

  const { coords } = position;

  setLat(coords.latitude);
  setLong(coords.longitude);
  
});






return (
      <div className="App">
        <p>Your lat  is: {[lat]}</p>
        <p>Your long is w: {[long]}</p>
        <p>{lat},{long}</p>  
        
      </div>
      );
};



 
export default App;