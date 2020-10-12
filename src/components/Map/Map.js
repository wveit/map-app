import React from "react";
import { connect } from "react-redux";

import { Map, View } from "ol";

import Layer from "./Layer";
import { updateMouseCoordinates } from "../../actions/coordinates";
import { pointIsInsideBox } from "./util";

const LAYER_EXTENT = [-360, -90, 360, 90];

class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = new Map({
            layers: [],
            controls: [],
            view: new View({
                projection: "EPSG:4326",
                center: [0, 0],
                zoom: 3,
                extent: [-1000, -400, 1000, 400],
            }),
        });
        this.mapRef = React.createRef(null);
    }

    render() {
        const { mapDate } = this.props;
        const map = this.map;
        const layerComponents = this.props.selectedLayers.map(
            (layerId, index) => {
                const layer = this.props.layerData[layerId];
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
            }
        );

        return (
            <>
                <div className="Map" ref={this.mapRef}></div>
                {layerComponents}
            </>
        );
    }

    componentDidMount() {
        this.map.setTarget(this.mapRef.current);

        let map = this.map;
        const mapElement = this.mapRef.current;
        let onCoordinateChange = this.props.onCoordinateChange;
        mapElement.onmousemove = function (event) {
            let coords = map.getCoordinateFromPixel([event.x, event.y]);
            if (!coords) {
                return;
            }
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
        selectedLayers,
        layerData,
        mapDate: dates.mapDate,
    };
}

const mapDispatchToProps = {
    onCoordinateChange: updateMouseCoordinates,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);
