import React, { useState } from "react";
import "./Ruler.css";

function Tick({ children, selected, onClick }) {
    function handleClick() {
        onClick && onClick(children);
    }
    return (
        <div
            className={"Ruler__tick" + (selected ? " Ruler__selected" : "")}
            onClick={handleClick}
        >
            <div className="Ruler__big-circle"></div>
            <div className="Ruler__circle"></div>
            <div className="Ruler__tick-mark"></div>
            <div className="Ruler__tick-value">{children}</div>
        </div>
    );
}

export default function Ruler({ values, range, title, selected, onSelect }) {
    function handleClick(value) {
        onSelect && onSelect(title, value);
    }
    let myValues = values;
    if (range) {
        let [begin, end] = range.split(",");
        begin = Number.parseInt(begin);
        end = Number.parseInt(end);
        myValues = createRange(begin, end);
    }
    const ticks =
        myValues &&
        myValues.map((value, index) => (
            <Tick
                key={index}
                selected={selected == value} // purposely left as == so that 5 == "5" can be true
                onClick={handleClick}
            >
                {value}
            </Tick>
        ));
    return (
        <div className="Ruler">
            <div className="Ruler__tick-container">{ticks}</div>
            <div className="Ruler__title-container">{title}</div>
        </div>
    );
}

export function UncontrolledRuler(props) {
    const defaultSelection = props.selected;
    const [selected, setSelected] = useState(defaultSelection);
    function handleSelect(title, value) {
        console.log("value: " + value);
        setSelected(value);
        props.onSelect && props.onSelect(title, value);
    }
    return <Ruler {...props} onSelect={handleSelect} selected={selected} />;
}

function createRange(begin, end) {
    const num1 = Number.parseInt(begin);
    const num2 = Number.parseInt(end);
    const arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}
