import React from "react";
import PropTypes from "prop-types";
import { Map as OlMap, View as OlView } from "ol";
import Layer from "./Layer";
import { pointIsInsideBox } from "./util";

const LAYER_EXTENT = [-360, -90, 360, 90];
const VIEW_EXTENT = [-1000, -400, 1000, 400];

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = new OlMap({
            layers: [],
            controls: [],
            view: new OlView({
                projection: "EPSG:4326",
                center: [0, 0],
                zoom: 3,
                extent: VIEW_EXTENT,
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

    componentWillUnmount() {
        this.map.setTarget(null);
        this.map = null;
    }
}

Map.propTypes = {
    selectedLayers: PropTypes.array.isRequired,
    layerData: PropTypes.object.isRequired,
    onCoordinateChange: PropTypes.func.isRequired,
};

Map.defaultProps = {
    onCoordinateChange: () => {},
};

export default Map;
