import React from "react";
import LayerControl from "../LayerControl/LayerControl";
import "./SelectedDatasetsList.css";

function SelectedDatasetsList(props) {
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
    if (props.layerData) {
        layerControls = Object.values(props.layerData).map((layer) => {
            if (!layer.isActive) {
                return null;
            }
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
        layerControls = "Click the Add Datasets button to add some layers.";
    }

    return <div className="SelectedDatasetsList">{layerControls}</div>;
}

export default SelectedDatasetsList;
