import React from "react";
import IconButton from "../Button/IconButton";
import "./TitleBar.css";

export default function TitleBar(props) {
    return (
        <div className="TitleBar">
            <div>{props.children}</div>
            <IconButton style={{ color: "white" }}>close</IconButton>
        </div>
    );
}
