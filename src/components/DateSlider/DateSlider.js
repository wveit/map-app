/*
    *** JS Usage ***

    import DateSlider from "(_whatever_path_)/DateSlider";

    <DateSlider 
        id="my-date-slider"
        className="css-class1 css-class2"
        unit="year | month | day"
        unitWidthInPixels={ Integer }
        onClick={date => { ... Do something with the date }}
        currentDate={new Date(2020, 2, 12)}
        snapToUnit={ Boolean }
        minDate={new Date(...)} (not implemented yet)
        maxDate={new Date(...)} (not implemented yet)
        color="#FFFFFF" (not implemented yet) 
    />

    // 'currentDate' sets the marker
    // 'snapToUnit' determines if the marker will snap to the nearest year/month/day
    // 'color' is for text, markers, lines, and borders
    // dependencies: vis-timeline and react-resize-detector

    *** CSS Usage ***
   
    #my-date-slider {
        width: 90%;         // can also do "width: 500px;" or "flex-grow: 2;"
        position: abslute;  // can also do "position: relative;"
        left: 200px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.5);
    }

*/

import React from "react";
import { Timeline } from "vis-timeline/standalone";
import { withResizeDetector } from "react-resize-detector";
import "./DateSlider.css";

const MILLISECONDS_PER_UNIT = {
    day: 24 * 60 * 60 * 1000,
    month: 24 * 60 * 60 * 1000 * 30,
    year: 24 * 60 * 60 * 1000 * 365,
};

const TIMELINE_OPTIONS = {
    zoomable: false,
    horizontalScroll: true,
    autoResize: true,
};

class DateSlider extends React.Component {
    constructor() {
        super();
        this.containerRef = React.createRef(null);

        this.updateTimeline = this.updateTimeline.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log("render");
        return (
            <div
                id={this.props.id}
                className={
                    "DateSlider" +
                    (this.props.className ? " " + this.props.className : "")
                }
                onPointerDown={this.handleMouseDown}
                onPointerUp={this.handleMouseUp}
                onClick={this.handleClick}
            >
                <div
                    className="DateSlider__container"
                    ref={this.containerRef}
                ></div>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timeline = new Timeline(
            this.containerRef.current,
            [],
            TIMELINE_OPTIONS
        );
        this.updateTimeline();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props);
        this.updateTimeline();
    }

    updateTimeline() {
        // set unit
        this.timeline.setOptions({
            timeAxis: {
                scale: this.props.unit,
                step: 1,
            },
        });
        // update the currentDate if props.currentDate changes
        if (this.props.currentDate) {
            let currentDate = new Date(this.props.currentDate);
            if (this.props.snapToUnit) {
                if (this.props.unit === "day") {
                    currentDate.setHours(12);
                } else if (this.props.unit === "month") {
                    currentDate.setDate(15);
                } else if (this.props.unit === "year") {
                    currentDate.setMonth(5);
                }
            }
            this.timeline.setCurrentTime(currentDate);
        }

        // update the timespan if props.width changes
        if (
            this.props.width &&
            this.props.unitWidthInPixels &&
            this.props.unit
        ) {
            // get the current endDate
            const endDate = this.timeline.getWindow().end;

            // get the new timespan
            const timespan =
                (this.props.width / this.props.unitWidthInPixels) *
                MILLISECONDS_PER_UNIT[this.props.unit];

            // get the startDate from the endDate and timespan
            const startDate = new Date(endDate.getTime() - timespan);

            // set the start and end dates for the timeline
            this.timeline.setWindow(startDate, endDate);
        }
    }

    handleClick(event) {
        const eventProps = this.timeline.getEventProperties(event);
        if (this.props.onClick) {
            this.props.onClick(eventProps.time);
        }
    }

    setTimelineRange(unit, span, end) {
        const theUnit = unit || "day";
        const start = end - span * MILLISECONDS_PER_UNIT[theUnit];
        this.timeline.setWindow(start, end);
        this.timeline.setOptions({
            timeAxis: {
                scale: theUnit,
                step: 1,
            },
        });
    }
}

export default withResizeDetector(DateSlider);
