import React from "react";
import "./Colorbar.css";
import colorbarImg from "./colorbar.png";

export default function Colorbar(props) {
    return (
        <div className="Colorbar">
            <img src={colorbarImg} alt="fake colorbar" />
        </div>
    );
}
