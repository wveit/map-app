import React from "react";
import LayerControl from "../LayerControl/LayerControl";
import "./SelectedLayersList.css";

function SelectedLayersList(props) {
    function handleLayerRemove(layerId) {
        props.onLayerRemove && props.onLayerRemove(layerId);
    }

    function handleLayerVisibilityToggle(layerId) {
        props.onLayerVisibilityToggle && props.onLayerVisibilityToggle(layerId);
    }

    function handleLayerOpacityChange(layerId, opacity) {
        props.onLayerOpacityChange &&
            props.onLayerOpacityChange(layerId, opacity);
    }

    let layerControls = "No layer data has been provided.";
    if (props.layers) {
        layerControls = props.layers.map((layer) => {
            return (
                <LayerControl
                    layer={layer}
                    key={layer.id}
                    toggleLayerVisibility={handleLayerVisibilityToggle}
                    adjustLayerOpacity={handleLayerOpacityChange}
                    onRemoveClick={handleLayerRemove}
                />
            );
        });
    }
    if (layerControls.length === 0) {
        layerControls = "Click the Add Layers button to add some layers.";
    }

    return <div className="SelectedLayersList">{layerControls}</div>;
}

export default SelectedLayersList;
