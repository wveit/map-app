import React from "react";
import { connect } from "react-redux";

import "ol/ol.css";
import { Map, View } from "ol";
import { get as getProjection } from "ol/proj";

import Layer from "./Layer";

class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state = {
            mapIsLoaded: false,
        };
    }

    render() {
        const { mapDate } = this.props;
        const map = this.map;
        if (!this.state.mapIsLoaded) {
            return null;
        }
        const layers = this.props.layers.map(function (layer) {
            return (
                <Layer
                    map={map}
                    layer={layer}
                    mapDate={mapDate}
                    key={layer.identifier}
                />
            );
        });
        return <>{layers}</>;
    }

    componentDidMount() {
        this.map = window.map = new Map({
            target: "Map",
            layers: [],
            controls: [],
            view: new View({
                projection: getProjection("EPSG:4326"),
                center: [0, 0],
                zoom: 0,
                extent: [-500, -200, 500, 200],
            }),
        });
        this.setState({ mapIsLoaded: true });
    }

    componentDidUpdate() {}

    componentWillUnmount() {}
}

function mapStateToProps(state) {
    return {
        layers: state.layerData,
        mapDate: state.dates.mapDate,
    };
}

export default connect(mapStateToProps)(MyMap);
