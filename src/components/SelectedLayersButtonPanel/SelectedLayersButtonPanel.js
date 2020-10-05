import React from "react";
import "./SelectedLayersButtonPanel.css";

export default function (props) {
    function handleClick() {
        props.onAddLayerClick && props.onAddLayerClick();
    }

    return (
        <div className="SelectedLayersButtonPanel">
            <p>SELECTED LAYERS</p>
            <button
                className="SelectedLayersButtonPanel__button"
                onClick={handleClick}
            >
                + ADD MORE
            </button>
        </div>
    );
}
