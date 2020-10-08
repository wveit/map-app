import React from "react";
import { connect } from "react-redux";
import { changeMapDate, changeDateSliderUnit } from "../../actions/dates";
import DatePicker from "../DatePicker/DatePicker";
import "../DatePicker/DatePicker.css";
import DateSlider from "../DateSlider/DateSlider";
import "../DateSlider/DateSlider.css";
import DateUnitChooser from "../DateUnitChooser/DateUnitChooser";
import "../DateUnitChooser/DateUnitChooser.css";
import "./DateContainer.css";

function DateContainer(props) {
    return (
        <div className="DateContainer">
            <DatePicker
                className="DateContainer__datePicker"
                changeMapDate={props.changeMapDate}
                date={props.date}
            />
            <DateSlider
                unit={props.dateUnit}
                currentDate={props.date}
                onClick={props.changeMapDate}
                unitWidthInPixels={40}
                snapToUnit
            />
            <DateUnitChooser
                unit={props.dateUnit}
                onUnitChoice={props.changeDateSliderUnit}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        date: state.dates.mapDate,
        dateUnit: state.dates.dateSliderUnit,
    };
}

const mapDispatchToProps = {
    changeMapDate,
    changeDateSliderUnit,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateContainer);
