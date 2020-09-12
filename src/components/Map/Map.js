import React from "react";
import { connect } from "react-redux";

function Layer(props) {
    if (!props.layer.visible) return null;

    const url = props.layer.url
        .replace("{Time}", "Default")
        .replace("{TileMatrixSet}", props.layer.tileMatrixSet.identifier)
        .replace("{TileMatrix}", 0)
        .replace("{TileRow}", 0)
        .replace("{TileCol}", 0);

    return (
        <div className={`Layer layer-${props.layer.identifier}`}>
            <img src={url} alt="" />
        </div>
    );
}

class Map extends React.Component {
    render() {
        const layerComponents = this.props.layers.map((layer) => (
            <Layer layer={layer} />
        ));
        return (
            <div id="Map">
                <div id="Map__world">{layerComponents}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        layers: state.layerData,
    };
}

export default connect(mapStateToProps)(Map);
