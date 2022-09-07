import './App.css';
import { useState } from 'react';
function App() 
{
 const [lat, setLat] = useState(null);
 const [long, setLong] = useState(null);
 const geolocationAPI = navigator.geolocation;
 const url="https://google.com";
 const cnt =1;
 if (cnt > 0) {
 geolocationAPI.getCurrentPosition((position) => {
  const { coords } = position;
  setLat(coords.latitude);
  setLong(coords.longitude);
  })
  cnt = 0;
}




return (
      <div className="App">
        <p>Your lat  is: {[lat]}</p>
        <p>Your long is w: {[long]}</p>
        <p>{lat},{long}</p>  

      </div>
      );
};



 
export default App;