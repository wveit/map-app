import React from "react";
import Switch from "@material-ui/core/Switch";
import "./LayerControl.css";
import Colorbar from "../Colorbar/Colorbar";

export default function LayerControl(props) {
    function onClick() {
        props.toggleLayerVisibility &&
            props.toggleLayerVisibility(props.layer.identifier);
    }

    function onOpacityChange(event) {
        props.adjustLayerOpacity(props.layer.identifier, event.target.value);
    }

    function renderTop() {
        const closeButtonInvisible = props.layer.visible ? "invisible" : "";
        return (
            <div className="top-level left-right-container">
                <div className="left">
                    <Switch
                        readOnly
                        checked={props.layer.visible}
                        onClick={onClick}
                        color="primary"
                        size="small"
                    />
                    <div>
                        <div className="LayerControl__title">
                            {props.layer.identifier}
                        </div>
                        <div className="LayerControl__subtitle">
                            Layer Subtitle
                        </div>
                    </div>
                </div>
                <div className={`right ${closeButtonInvisible}`}>
                    <div className="material-icons">close</div>
                </div>
            </div>
        );
    }

    function renderBottom() {
        if (!props.layer.visible) return null;

        return (
            <div className="bottom-level left-right-container">
                <div className="left">
                    <Colorbar />
                </div>
                {/* <input
                    type="range"
                    min="0"
                    max="100"
                    onChange={onOpacityChange}
                    value={props.layer.opacity}
                /> */}
                <div className="right">
                    <div className="material-icons">more_vert</div>
                    <div className="material-icons">layers</div>
                    <div className="material-icons">opacity</div>
                    <div className="material-icons">info_outline</div>
                    <div className="material-icons">close</div>
                </div>
            </div>
        );
    }

    return (
        <div className="LayerControl">
            {renderTop()}
            {renderBottom()}
        </div>
    );
}
