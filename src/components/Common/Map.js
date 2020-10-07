import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';

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
        const allScripts = document.getElementsByTagName('script');
        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('key=AIzaSyDWuvpCyslaCiwEMJvzF_DsLefQXNjjPuE') >= 0
        )[0].remove();
        window.google = {};
    }

    componentDidMount() {
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