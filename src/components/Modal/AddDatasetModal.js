import React from "react";

const addDatasetModalStyle = {
    width: "600px",
    height: "400px",
    backgroundColor: "white",
    zIndex: 2,
};

export default function AddDatasetModal(props) {
    return (
        <div className="SettingsModal" style={addDatasetModalStyle}>
            <h3>Add Dataset</h3>
            <p>... a list of datasets that can be added</p>
        </div>
    );
}
