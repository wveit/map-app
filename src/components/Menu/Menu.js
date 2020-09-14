import React from "react";
import { connect } from "react-redux";
import {
    toggleLayerVisibility,
    adjustLayerOpacity,
} from "../../actions/layerData";

function LayerComponent(props) {
    function onClick() {
        props.toggleLayerVisibility &&
            props.toggleLayerVisibility(props.layer.identifier);
    }

    function onOpacityChange(event) {
        props.adjustLayerOpacity(props.layer.identifier, event.target.value);
    }

    return (
        <div className="LayerComponent">
            <input
                type="checkbox"
                readOnly
                checked={props.layer.visible}
                onClick={onClick}
            />
            <input
                type="range"
                min="0"
                max="100"
                onChange={onOpacityChange}
                value={props.layer.opacity}
            />
            <span>{props.layer.identifier}</span>
        </div>
    );
}

function Menu(props) {
    const layerDataComponents = props.layerData.map(function (layer, index) {
        return (
            <LayerComponent
                layer={layer}
                key={index}
                toggleLayerVisibility={props.toggleLayerVisibility}
                adjustLayerOpacity={props.adjustLayerOpacity}
            />
        );
    });

    return (
        <div id="Menu">
            <div className="Menu__title">Menu</div>
            {layerDataComponents}
        </div>
    );
}

function mapStateToProps({ layerData }) {
    return {
        layerData,
    };
}

const mapDispatchToProps = {
    toggleLayerVisibility,
    adjustLayerOpacity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
