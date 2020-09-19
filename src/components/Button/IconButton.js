import React from "react";
import IconButton from "@material-ui/core/IconButton";

export default function MyIconButton(props) {
    return (
        <IconButton size="small" {...props}>
            <span className="material-icons">{props.children}</span>
        </IconButton>
    );
}
