import React from "react";
import "./AddLayerMenu.css";
import IconButton from "../Button/IconButton";

function Layer({ layer, onLayerToggle }) {
    function handleToggle() {
        onLayerToggle && onLayerToggle(layer.id, !layer.isActive);
    }

    return (
        <div className="AddLayerMenu__layer" key={layer.id}>
            <div>
                <input
                    type="checkbox"
                    checked={layer.isActive || false}
                    onChange={handleToggle}
                />
                <div className="AddLayerMenu__layer-title-box">
                    <div className="AddLayerMenu__layer-title">
                        {layer.title}
                    </div>
                    <div className="AddLayerMenu__layer-subtitle">
                        {layer.subtitle}
                    </div>
                </div>
            </div>
            <IconButton>info</IconButton>
        </div>
    );
}

function AddLayerMenu({ layers, setLayerActive }) {
    function handleActiveLayerToggle(id, isActive) {
        setLayerActive && setLayerActive(id, isActive);
    }

    const layerComponents =
        layers &&
        Object.values(layers).map((layer) => {
            return (
                <Layer
                    key={layer.id}
                    onLayerToggle={handleActiveLayerToggle}
                    layer={layer}
                ></Layer>
            );
        });

    return (
        <div className="AddLayerMenu">
            <div className="AddLayerMenu__filter-list">
                <div className="AddLayerMenu__header">SEARCH</div>
                <div className="AddLayerMenu__scroll"></div>
            </div>
            <div className="AddLayerMenu__layer-list">
                <div className="AddLayerMenu__header">MATCHING LAYERS</div>
                <div className="AddLayerMenu__scroll">{layerComponents}</div>
            </div>
            <div className="AddLayerMenu__layer-info">
                <div className="AddLayerMenu__header">LAYER INFORMATION</div>
                <div className="AddLayerMenu__scroll"></div>
            </div>
        </div>
    );
}

export default AddLayerMenu;
