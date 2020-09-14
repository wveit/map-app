import React from "react";
import OlSource from "ol/source/WMTS";
import OlLayer from "ol/layer/Tile";
import OlTilegrid from "ol/tilegrid/WMTS";

class Layer extends React.Component {
    constructor() {
        super();
        this.source = null;
        this.layer = null;
    }

    render() {
        return null;
    }

    componentDidMount() {
        const mapDate = this.props.mapDate;
        let time = null;
        if (mapDate) {
            time = dateFormat(mapDate);
        }

        this.source = new OlSource({
            url: this.props.layer.url.replace("{Time}", time || "default"),
            requestEncoding: "REST",
            layer: this.props.layer.identifier,
            format: "image/jpeg",
            matrixSet: this.props.layer.tileMatrixSet.identifier,
            tileGrid: new OlTilegrid({
                origin: [-180, 90],
                resolutions: [
                    0.5625,
                    0.28125,
                    0.140625,
                    0.0703125,
                    0.03515625,
                    0.017578125,
                    0.0087890625,
                    0.00439453125,
                    0.002197265625,
                ],
                matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                tileSize: 512,
            }),
        });

        this.layer = new OlLayer({
            source: this.source,
            extent: [-180, -90, 180, 90],
            visible: this.props.layer.visible,
            opacity: Number(this.props.layer.opacity) / 100,
        });

        this.props.map.addLayer(this.layer);
    }

    componentDidUpdate() {
        this.layer.setVisible(this.props.layer.visible);
        this.layer.setOpacity(Number(this.props.layer.opacity) / 100);

        const mapDate = this.props.mapDate;
        let time = null;
        if (mapDate) time = dateFormat(mapDate);
        this.layer
            .getSource()
            .setUrl(this.props.layer.url.replace("{Time}", time || "default"));
    }

    componentWillUnmount() {
        this.props.map.removeLayer(this.layer);
    }
}

export default Layer;

function dateFormat(date) {
    if (!date) return null;

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayOfMonth = date.getDate();

    if (month < 10) month = "0" + month;

    if (dayOfMonth < 10) dayOfMonth = "0" + dayOfMonth;

    return `${year}-${month}-${dayOfMonth}`;
}
