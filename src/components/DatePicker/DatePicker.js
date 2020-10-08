import React from "react";

export default function DatePicker(props) {
    const newDate = new Date(props.date);

    function incrementYear() {
        newDate.setFullYear(newDate.getFullYear() + 1);
        handleNewDate(newDate);
    }

    function decrementYear() {
        newDate.setFullYear(newDate.getFullYear() - 1);
        handleNewDate(newDate);
    }

    function incrementMonth() {
        newDate.setMonth(newDate.getMonth() + 1);
        handleNewDate(newDate);
    }

    function decrementMonth() {
        newDate.setMonth(newDate.getMonth() - 1);
        handleNewDate(newDate);
    }

    function incrementDate() {
        newDate.setDate(newDate.getDate() + 1);
        handleNewDate(newDate);
    }

    function decrementDate() {
        newDate.setDate(newDate.getDate() - 1);
        handleNewDate(newDate);
    }

    function handleNewDate(newDate) {
        props.changeMapDate && props.changeMapDate(newDate);
    }

    return (
        <div
            id={props.id}
            className={"DatePicker " + (props.className ? props.className : "")}
        >
            <div className="DatePicker__chooser DatePicker__year">
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={incrementYear}
                >
                    arrow_drop_up
                </div>
                <input
                    className="DatePicker__input"
                    type="text"
                    value={props.date.getFullYear()}
                    readOnly
                />
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={decrementYear}
                >
                    arrow_drop_down
                </div>
            </div>

            <div className="DatePicker__chooser DatePicker__month">
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={incrementMonth}
                >
                    arrow_drop_up
                </div>
                <input
                    className="DatePicker__input"
                    type="text"
                    value={props.date.toLocaleString("default", {
                        month: "short",
                    })}
                    readOnly
                />
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={decrementMonth}
                >
                    arrow_drop_down
                </div>
            </div>

            <div className="DatePicker__chooser DatePicker__date">
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={incrementDate}
                >
                    arrow_drop_up
                </div>
                <input
                    className="DatePicker__input"
                    type="text"
                    value={props.date.getDate()}
                    readOnly
                />
                <div
                    className="DatePicker__arrow material-icons"
                    onClick={decrementDate}
                >
                    arrow_drop_down
                </div>
            </div>
        </div>
    );
}
