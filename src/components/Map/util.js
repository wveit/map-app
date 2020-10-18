import OlSource from "ol/source/WMTS";
import OlLayer from "ol/layer/Tile";
import OlTilegrid from "ol/tilegrid/WMTS";
import { get as olGetProjection } from "ol/proj";

export function pointIsInsideBox(point, box) {
    return (
        point[0] > box[0] &&
        point[0] < box[2] &&
        point[1] > box[1] &&
        point[1] < box[3]
    );
}

export function dateFormat(date) {
    if (!date) return null;

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayOfMonth = date.getDate();

    if (month < 10) month = "0" + month;

    if (dayOfMonth < 10) dayOfMonth = "0" + dayOfMonth;

    return `${year}-${month}-${dayOfMonth}`;
}

export function createGibsLayer(layerData, date, extent, zIndex) {
    let time = "default";
    if (date) {
        time = dateFormat(date);
    }

    const projection = olGetProjection("EPSG:4326");
    const metersPerUnit = projection.getMetersPerUnit();
    const resolutions = [];
    const matrixIds = [];
    Object.keys(layerData.imagery.data.tileMatrixSet.tileMatrix).forEach(
        (matrixId) => {
            let newMatrixId = Number.parseInt(matrixId);
            matrixIds.push(newMatrixId);
            let newMatrix =
                layerData.imagery.data.tileMatrixSet.tileMatrix[newMatrixId];
            let newResolution =
                (newMatrix.scaleDenominator * 0.00028) / metersPerUnit;
            resolutions.push(newResolution);
        }
    );

    // Remove the first two resolutions/matrixIds for GIBS EPSG:4326 layers
    // because these layers (at those zoom levels) have tiles with extra blank
    // space. This extra blank space causes the map to be rendered incorrectly
    // when wrapX === true
    resolutions.splice(0, 2);
    matrixIds.splice(0, 2);

    const source = new OlSource({
        url: layerData.imagery.data.url.replace("{Time}", time || "default"),
        requestEncoding: "REST",
        layer: layerData.imagery.data.identifier,
        // format: "image/jpeg",
        wrapX: true,
        matrixSet: layerData.imagery.data.tileMatrixSet.identifier,
        tileGrid: new OlTilegrid({
            origin: [-180, 90],
            resolutions,
            matrixIds,
            tileSize: 512,
        }),
    });

    const layer = new OlLayer({
        source,
        extent,
        visible: layerData.isVisible,
        opacity: Number(layerData.opacity) / 100,
        zIndex,
    });
    return layer;
}
