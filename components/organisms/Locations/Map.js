import React from "react";
import { GeolocateControl, Map, Marker } from "react-map-gl"


export default function ShopMap() {
    const geolocateControlRef = React.useCallback((ref) => {
    if (ref) {
        // Activate as soon as the control is loaded
        ref.trigger();
    }
    }, []);
  return (
    <Map
      attributionControl={false}
      mapboxAccessToken='pk.eyJ1IjoiaWFuZ3JlZW5maWVsZCIsImEiOiJjbDc3bG81M3IwMTBrM3ZvMDNndXVnc2dtIn0.JAWryaayiF24fXmDpXPD2A'
      style={{height: '100%', width: '100%'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      zoom={6}
    >
        <GeolocateControl ref={geolocateControlRef} trackUserLocation={true}/>
    </Map>
  )
}
