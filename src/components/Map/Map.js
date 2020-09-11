import React from "react";

import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default class Map extends React.Component {
    render() {
        return <div id="map"></div>;
    }

    componentDidMount() {
        const olmap = new OlMap({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
    }
}
