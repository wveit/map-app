import React from "react";
import { connect } from "react-redux";

import { Map, View } from "ol";

import Layer from "./Layer";
import { updateMouseCoordinates } from "../../actions/coordinates";

const LAYER_EXTENT = [-360, -90, 360, 90];

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
        const layers = this.props.layers.map((layer, index) => {
            return (
                <Layer
                    map={map}
                    layer={layer}
                    mapDate={mapDate}
                    extent={LAYER_EXTENT}
                    key={layer.id}
                    zIndex={-index}
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
                projection: "EPSG:4326",
                center: [0, 0],
                zoom: 3,
                extent: [-1000, -400, 1000, 400],
            }),
        });
        this.setState({ mapIsLoaded: true });

        let map = this.map;
        const mapElement = document.getElementById("Map");
        let onCoordinateChange = this.props.onCoordinateChange;
        mapElement.onmousemove = function (event) {
            let coords = map.getCoordinateFromPixel([event.x, event.y]);
            if (pointIsInsideBox(coords, LAYER_EXTENT)) {
                while (coords[0] < -180) coords[0] += 360;
                while (coords[0] > 180) coords[0] -= 360;
            } else {
                coords = null;
            }
            onCoordinateChange(coords);
        };
        mapElement.onmouseout = function (event) {
            onCoordinateChange(null);
        };
    }

    componentDidUpdate() {}

    componentWillUnmount() {}
}

function mapStateToProps({ selectedLayers, layerData, dates }) {
    return {
        layers: selectedLayers.map((layerId) => layerData[layerId]),
        mapDate: dates.mapDate,
    };
}

const mapDispatchToProps = {
    onCoordinateChange: updateMouseCoordinates,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);

//////////////////////////////////////////////////////////////////////////
//
//      Helpers
//
//////////////////////////////////////////////////////////////////////////
function pointIsInsideBox(point, box) {
    return (
        point[0] > box[0] &&
        point[0] < box[2] &&
        point[1] > box[1] &&
        point[1] < box[3]
    );
}
