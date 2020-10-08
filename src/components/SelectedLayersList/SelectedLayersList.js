import React from "react";
import LayerControl from "../LayerControl/LayerControl";
import { DragDropList, DragDropItem } from "../DragDropList/DragDropList";
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

    function handleLayerMove(result) {
        if (!(result.draggableId && result.source && result.destination))
            return;
        const layerId = result.draggableId;
        const fromIndex = result.source.index;
        const toIndex = result.destination.index;
        props.onLayerMove && props.onLayerMove(layerId, fromIndex, toIndex);
    }

    let layerControls = "No layer data has been provided.";
    if (props.layers) {
        layerControls = props.layers.map((layer, index) => {
            return (
                <DragDropItem
                    draggableId={layer.id}
                    index={index}
                    key={layer.id}
                >
                    <LayerControl
                        layer={layer}
                        toggleLayerVisibility={handleLayerVisibilityToggle}
                        adjustLayerOpacity={handleLayerOpacityChange}
                        onRemoveClick={handleLayerRemove}
                    />
                </DragDropItem>
            );
        });
    }
    if (layerControls.length === 0) {
        layerControls = "Click the Add Layers button to add some layers.";
    }

    return (
        <div className="SelectedLayersList">
            <DragDropList onDragEnd={handleLayerMove}>
                {layerControls}
            </DragDropList>
        </div>
    );
}

export default SelectedLayersList;
