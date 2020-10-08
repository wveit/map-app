import React from "react";
import { Timeline } from "vis-timeline/standalone";
import { withResizeDetector } from "react-resize-detector";

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
        return (
            <div
                id={this.props.id}
                className={
                    "DateSlider " +
                    `DateSlider__${this.props.unit}` +
                    (this.props.className ? this.props.className : "")
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
        this.timeline = new Timeline(
            this.containerRef.current,
            [],
            TIMELINE_OPTIONS
        );
        this.updateTimeline();
    }

    componentDidUpdate() {
        this.updateTimeline();
    }

    updateTimeline() {
        // set units for time-axis
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
                    currentDate.setHours(24);
                } else if (this.props.unit === "year") {
                    currentDate.setMonth(5);
                }
            }
            this.timeline.setCurrentTime(currentDate);
        }

        // find the correct timespan, given the width of the element, the unit, and the pixelsPerUnit
        // if any of these don't exist, just use the existing timespan
        const width = this.props.width || 500;
        const unit = this.props.unit || "day";
        const unitWidthInPixels = this.props.unitWidthInPixels || 50;
        const timespan =
            (width / unitWidthInPixels) * MILLISECONDS_PER_UNIT[unit];

        // construct a start and end date using the old start/end dates and the new timespan
        const startDate = this.timeline.getWindow().start;
        let startMillis = startDate.getTime();
        let endMillis = startMillis + timespan;
        let currentMillis = this.props.currentDate.getTime();

        // if currentTime is outside this start/end, adjust the start/end
        if (currentMillis - startMillis < timespan / 8) {
            startMillis = currentMillis - timespan / 2;
            endMillis = startMillis + timespan;
        } else if (endMillis - currentMillis < timespan / 8) {
            startMillis = currentMillis - timespan / 2;
            endMillis = startMillis + timespan;
        }

        // set the current window with these start and end dates
        this.timeline.setWindow(new Date(startMillis), new Date(endMillis));
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
