import React from "react";

const helpModalStyle = {
    width: "600px",
    height: "400px",
    backgroundColor: "white",
    zIndex: 2,
};

export default function HelpModal(props) {
    return (
        <div className="SettingsModal" style={helpModalStyle}>
            <h3>Help</h3>
            <p>Information to help users</p>
        </div>
    );
}
