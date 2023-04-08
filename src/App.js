import React, {useState, useEffect, useRef} from "react";
import "./styles.css";
import { Amap, Marker } from "@amap/amap-react";

export default function App() {

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState({});
  const adcodeRef = useRef('');


const  getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

const  showPosition = async (position) => {
  const longitude = position.coords.longitude.toFixed(6);
  const latitude = position.coords.latitude.toFixed(6);
  const cityUrl = `https://restapi.amap.com/v3/geocode/regeo?location=${longitude},${latitude}&key=5fc7b9a2033de8eca006799d9d9b967e`;
  // const cityUrl = `https://restapi.amap.com/v3/geocode/regeo?location=113.191982,23.0987703&key=5fc7b9a2033de8eca006799d9d9b967e`;
  const response = await fetch(cityUrl);
  const jsonData = await response.json();
  console.log(jsonData);
  const { regeocode = {}  } = jsonData;
  const { addressComponent = {} } = regeocode;
  const { city = '', adcode = '' } = addressComponent;
  setCity(city);

  adcodeRef.current = adcode;
  const tempUrl = `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcodeRef.current}&key=5fc7b9a2033de8eca006799d9d9b967e`;
  const tempRes = await fetch(tempUrl);
  const tempData = await tempRes.json();
  if(tempData.lives && tempData.lives.length > 0) {
    setTemp(tempData.lives[0]);
  }
}
useEffect(() => {
  getLocation();
}, [])
  return (
    <div className="App">
      <div className="map-container">
        {/* <Amap zoom={15} center={[116.473179, 39.993169]}>
          <Marker
            position={[116.473179, 39.993169]}
            label={{
              content: "Hello, AMap-React!",
              direction: "bottom"
            }}
            draggable
          />
        </Amap> */}
        <p>Your are in <strong>{city}</strong> now !</p>
        <p>Weather: <strong>{temp.weather}</strong> </p>
        <p>Temperature: <strong>{temp.temperature}</strong> </p>
      </div>
    </div>
  );
}
