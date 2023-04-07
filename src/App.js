import React from "react";
import "./styles.css";
import { Amap, Marker } from "@amap/amap-react";

export default function App() {
  return (
    <div className="App">
      <div className="map-container">
        <Amap zoom={15} center={[116.473179, 39.993169]}>
          <Marker
            position={[116.473179, 39.993169]}
            label={{
              content: "Hello, AMap-React!",
              direction: "bottom"
            }}
            draggable
          />
        </Amap>
      </div>
    </div>
  );
}
