import React from "react";
import IconButton from "@material-ui/core/IconButton";

export default React.forwardRef(function (props, ref) {
    return (
        <IconButton
            ref={ref}
            size="small"
            className={props.className}
            {...props}
        >
            <span className="material-icons">{props.children}</span>
        </IconButton>
    );
});
