import React from "react";

const shareModalStyle = {
    width: "400px",
    height: "200px",
    backgroundColor: "white",
    zIndex: 2,
};

export default function ShareModal(props) {
    return (
        <div className="ShareModal" style={shareModalStyle}>
            <h3>Share Modal</h3>
            <p>
                There will be buttons here for sharing by email and social media
            </p>
        </div>
    );
}
