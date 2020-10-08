import React from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

const mapStyles = {
    height: "400px",
};

const Map = ({ ubicacion }) => {
    const { latitud, longitud } = ubicacion;


    const defaultCenter = {
        lat: latitud, lng: longitud
    }

    const locations = [
        { lat: latitud, lng: longitud }
    ]

    const options = {
        imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    }

    function createKey(location) {
        return location.lat + location.lng
    }

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDWuvpCyslaCiwEMJvzF_DsLefQXNjjPuE'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}

            >
                <MarkerClusterer options={options}>
                    {(clusterer) =>
                        locations.map((location) => (
                            <Marker key={createKey(location)} position={location} clusterer={clusterer} />
                        ))
                    }
                </MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;