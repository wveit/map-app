import React from "react";

export default function Layer(props) {
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
