import React from "react";
import "./LayerControl.css";

export default function LayerControl(props) {
    function onClick() {
        props.toggleLayerVisibility &&
            props.toggleLayerVisibility(props.layer.identifier);
    }

    function onOpacityChange(event) {
        props.adjustLayerOpacity(props.layer.identifier, event.target.value);
    }

    return (
        <div className="LayerControl">
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
