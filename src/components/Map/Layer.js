import React from "react";
import PropTypes from "prop-types";
import { createGibsLayer, dateFormat } from "./util";

class Layer extends React.Component {
    constructor() {
        super();
        this.layer = null;
    }

    render() {
        return null;
    }

    componentDidMount() {
        this.layer = createGibsLayer(
            this.props.layer,
            this.props.mapDate,
            this.props.extent,
            this.props.zIndex
        );

        this.props.map.addLayer(this.layer);
    }

    componentDidUpdate() {
        const { isVisible, opacity } = this.props.layer;
        const { zIndex, mapDate } = this.props;
        const { url } = this.props.layer.imagery.data;

        this.layer.setVisible(isVisible);
        this.layer.setOpacity(Number(opacity) / 100);
        this.layer.setZIndex(zIndex);

        let time = null;
        if (mapDate) time = dateFormat(mapDate);
        this.layer.getSource().setUrl(url.replace("{Time}", time || "default"));
    }

    componentWillUnmount() {
        this.props.map.removeLayer(this.layer);
    }
}

Layer.propTypes = {
    map: PropTypes.object.isRequired,
    layer: PropTypes.object.isRequired,
    zIndex: PropTypes.number.isRequired,
    mapDate: PropTypes.instanceOf(Date),
};

export default Layer;
