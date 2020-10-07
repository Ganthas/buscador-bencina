import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api'; // Única dependencia extra

// es muy importante añadirle height y width!!!
const MAP_STYLES = {
    height: '400px',
    width: '100%'
}

const OPTIONS = {
    center: {
        lat: 41.4054682,
        lng: 2.12373473
    },
    zoom: 16
}

const API_CONFIG = {
    key: 'AIzaSyDWuvpCyslaCiwEMJvzF_DsLefQXNjjPuE',
    language: 'es'
}

export default class Map extends Component {
    componentWillUnmount() {
        // limpiando despues el component ya no es usado
        // evita errores en la console
        const allScripts = document.getElementsByTagName('script');
        // recopilar todos los scripts,
        // filtrar los que contengan la key en 'src'
        // eliminarlo
        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('key=AIzaSyDE2XTOO3mc5CnZSdfeesVG0xVfs8L9DidM__0') >= 0
        )[0].remove();
        // resetear la variable de Google
        window.google = {};
    }

    componentDidMount() {
        // Promise para que al ser resulta puedas manipular
        // las opciones de Google Maps
        loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
            new googleMaps.Map(this.refs.map, OPTIONS);
        }).catch(err => {
            console.warning('Something went wrong loading the map', err);
        });
    }

    render() {
        return (
            <div ref="map" style={MAP_STYLES}></div>
        )
    }
}