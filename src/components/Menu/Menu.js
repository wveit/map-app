import React from "react";
import { connect } from "react-redux";
import { toggleLayerVisibility } from "../../actions/layerData";

function LayerComponent(props) {
    function onClick() {
        console.log(`clicked ${props.layer.identifier}`);
        props.toggleLayerVisibility &&
            props.toggleLayerVisibility(props.layer.identifier);
    }

    return (
        <div className="LayerComponent">
            <input
                type="checkbox"
                readOnly
                checked={props.layer.visible}
                onClick={onClick}
            />
            {props.layer.identifier}
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
            />
        );
    });

    return (
        <div id="Menu">
            Menu
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
