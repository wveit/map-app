import React from "react";

const settingsModalStyle = {
    width: "600px",
    height: "400px",
    backgroundColor: "white",
    zIndex: 2,
};

export default function SettingsModal(props) {
    return (
        <div className="SettingsModal" style={settingsModalStyle}>
            <h3>Settings</h3>
            <p>Change settings here</p>
        </div>
    );
}
