import React from "react";
import { connect } from "react-redux";
import {
    changeMapYear,
    changeMapMonth,
    changeMapDate,
} from "../../actions/dates";

function DatePicker(props) {
    function onYearChange(event) {
        props.changeMapYear(event.target.value);
    }

    function onMonthChange(event) {
        props.changeMapMonth(event.target.value);
    }

    function onDayChange(event) {
        props.changeMapDate(event.target.value);
    }

    return (
        <div id="DatePicker">
            <input
                type="number"
                onChange={onYearChange}
                value={props.date.getFullYear()}
            />
            <input
                type="number"
                onChange={onMonthChange}
                value={props.date.getMonth() + 1}
            />
            <input
                type="number"
                onChange={onDayChange}
                value={props.date.getDate()}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        date: state.dates.mapDate,
    };
}

const mapDispatchToProps = {
    changeMapYear,
    changeMapMonth,
    changeMapDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
