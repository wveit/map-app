import React from "react";
import { connect } from "react-redux";
import {
    changeMapYear,
    changeMapMonth,
    changeMapDate,
} from "../../actions/dates";
import "./DatePicker.css";

function DatePicker(props) {
    function handleButtonClick(event) {
        const direction = event.target.dataset.direction;
        const unit = event.target.dataset.unit;
        let newDate;
        if (unit === "year") {
            if (direction === "up") {
                newDate = new Date(
                    props.date.getFullYear() + 1,
                    props.date.getMonth(),
                    props.date.getDate()
                );
            } else {
                newDate = new Date(
                    props.date.getFullYear() - 1,
                    props.date.getMonth(),
                    props.date.getDate()
                );
            }
        } else if (unit === "month") {
            if (direction === "up") {
                newDate = new Date(
                    props.date.getFullYear(),
                    props.date.getMonth() + 1,
                    props.date.getDate()
                );
            } else {
                newDate = new Date(
                    props.date.getFullYear(),
                    props.date.getMonth() - 1,
                    props.date.getDate()
                );
            }
        } else if (unit === "date") {
            if (direction === "up") {
                newDate = new Date(
                    props.date.getFullYear(),
                    props.date.getMonth(),
                    props.date.getDate() + 1
                );
            } else {
                newDate = new Date(
                    props.date.getFullYear(),
                    props.date.getMonth(),
                    props.date.getDate() - 1
                );
            }
        }

        props.changeMapDate(newDate);
    }

    return (
        <div id="DatePicker">
            <div className="DatePicker__year">
                <button
                    data-direction="up"
                    data-unit="year"
                    onClick={handleButtonClick}
                >
                    &#708;
                </button>
                <input type="text" value={props.date.getFullYear()} />
                <button
                    data-direction="down"
                    data-unit="year"
                    onClick={handleButtonClick}
                >
                    &#709;
                </button>
            </div>

            <div className="DatePicker__month">
                <button
                    data-direction="up"
                    data-unit="month"
                    onClick={handleButtonClick}
                >
                    &#708;
                </button>
                <input
                    type="text"
                    value={props.date.toLocaleString("default", {
                        month: "short",
                    })}
                />
                <button
                    data-direction="down"
                    data-unit="month"
                    onClick={handleButtonClick}
                >
                    &#709;
                </button>
            </div>

            <div className="DatePicker__date">
                <button
                    data-direction="up"
                    data-unit="date"
                    onClick={handleButtonClick}
                >
                    &#708;
                </button>
                <input type="text" value={props.date.getDate()} />
                <button
                    data-direction="down"
                    data-unit="date"
                    onClick={handleButtonClick}
                >
                    &#709;
                </button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        date: state.dates.mapDate,
    };
}

const mapDispatchToProps = {
    changeMapDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
