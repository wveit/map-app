import React from "react";

export default function DateUnitChooser(props) {
    function handleClick(unit) {
        unit !== props.unit && props.onUnitChoice && props.onUnitChoice(unit);
    }

    return (
        <div className="DateUnitChooser">
            <div
                className={
                    "DateUnitChooser__unit" +
                    (props.unit === "year"
                        ? " DateUnitChooser__active"
                        : " DateUnitChooser__inactive")
                }
                onClick={() => handleClick("year")}
            >
                Year
            </div>
            <div
                className={
                    "DateUnitChooser__unit" +
                    (props.unit === "month"
                        ? " DateUnitChooser__active"
                        : " DateUnitChooser__inactive")
                }
                onClick={() => handleClick("month")}
            >
                Month
            </div>
            <div
                className={
                    "DateUnitChooser__unit" +
                    (props.unit === "day"
                        ? " DateUnitChooser__active"
                        : " DateUnitChooser__inactive")
                }
                onClick={() => handleClick("day")}
            >
                Day
            </div>
        </div>
    );
}
