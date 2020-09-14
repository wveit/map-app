import React from "react";
import { connect } from "react-redux";

import Layer from "./Layer";

function Map(props) {
    const layerComponents = props.layers.map((layer) => (
        <Layer layer={layer} key={layer.identifier} />
    ));
    return (
        <div id="Map">
            <div id="Map__world">{layerComponents}</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        layers: state.layerData,
    };
}

export default connect(mapStateToProps)(Map);
