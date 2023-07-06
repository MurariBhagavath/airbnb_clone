import React, { useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { Point } from "mapbox-gl";
import mapboxgl from 'mapbox-gl';

function MapComponent({ searchResults }) {
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    const [viewPort, setViewPort] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
    console.log(coordinates)

    return (
        <Map
            mapLib={mapboxgl}
            mapStyle="mapbox://styles/bhagavathkumar/cljr5tivz010x01pmc7de8tfn"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewPort}
            onMove={(evt) => setViewPort(evt.viewState)}
            style={{ width: 600, height: 900, position: 'sticky', top: 80 }}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        anchor="bottom"
                    >
                        <p onClick={() => setSelectedResult(result)} className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>
                </div>
            ))}
        </Map>
    );
}

export default MapComponent;
