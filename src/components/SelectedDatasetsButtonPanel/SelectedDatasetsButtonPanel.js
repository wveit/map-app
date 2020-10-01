import React from "react";
import "./SelectedDatasetsButtonPanel.css";

export default function (props) {
    function handleClick() {
        console.log("ADD LAYERS");
        props.onAddDatasetClick && props.onAddDatasetClick();
    }

    return (
        <div className="SelectedDatasetsButtonPanel">
            <p>SELECTED DATASETS</p>
            <button
                className="SelectedDatasetsButtonPanel__button"
                onClick={handleClick}
            >
                + ADD MORE
            </button>
        </div>
    );
}
