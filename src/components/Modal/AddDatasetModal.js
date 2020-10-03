import React from "react";
import { connect } from "react-redux";
import { setLayerActive } from "../../actions/layerData";

const addDatasetModalStyle = {
    width: "600px",
    height: "400px",
    backgroundColor: "white",
    zIndex: 2,
};

function DatasetItem({ layer, onLayerToggle }) {
    function handleToggle() {
        onLayerToggle && onLayerToggle(layer.id, !layer.isActive);
    }

    return (
        <div key={layer.id}>
            <input
                type="checkbox"
                checked={layer.isActive || false}
                onChange={handleToggle}
            />
            {layer.title}
        </div>
    );
}

function AddDatasetModal({ layers, setLayerActive }) {
    function handleActiveLayerToggle(id, isActive) {
        setLayerActive && setLayerActive(id, isActive);
    }

    const layerComponents =
        layers &&
        Object.values(layers).map((layer) => {
            return (
                <DatasetItem
                    key={layer.id}
                    onLayerToggle={handleActiveLayerToggle}
                    layer={layer}
                ></DatasetItem>
            );
        });

    return (
        <div className="SettingsModal" style={addDatasetModalStyle}>
            <h3>Add Dataset</h3>
            {layerComponents}
        </div>
    );
}

const mapDispatchToProps = {
    setLayerActive,
};

function mapStateToProps(state) {
    return {
        layers: state.layerData,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDatasetModal);
