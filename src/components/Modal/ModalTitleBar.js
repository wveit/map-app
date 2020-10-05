import React from "react";
import IconButton from "../Button/IconButton";

const style = {
    backgroundColor: "rgb(63, 63, 63)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    padding: "20px",
};

export default function ModalTitleBar(props) {
    return (
        <div className="ModalTitleBar" style={style}>
            {props.children}
            <IconButton style={{ color: "white" }}>close</IconButton>
        </div>
    );
}
