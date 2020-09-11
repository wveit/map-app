export function parseWMTSCapabilities(text) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");
    const obj = {};

    const xmlLayers = Array.from(xml.querySelectorAll("Contents > Layer"));
    const xmlTileMatrixSets = Array.from(
        xml.querySelectorAll("Contents > TileMatrixSet")
    );

    obj.layers = {};
    xmlLayers.map(parseLayer);
    xmlLayers.forEach(function (xmlLayer) {
        const layer = parseLayer(xmlLayer);
        obj.layers[layer.identifier] = layer;
    });

    obj.tileMatrixSets = {};
    xmlTileMatrixSets.forEach(function (xmlTileMatrixSet) {
        const tileMatrixSet = parseTileMatrixSet(xmlTileMatrixSet);
        obj.tileMatrixSets[tileMatrixSet.identifier] = tileMatrixSet;
    });

    return obj;
}

function parseLayer(input) {
    const obj = {};
    obj.title = input.querySelector("Title").textContent;
    obj.identifier = input.querySelector("Identifier").textContent;
    obj.tileMatrixSet = input.querySelector("TileMatrixSet").textContent;
    obj.url = input.querySelector("ResourceURL").getAttribute("template");
    return obj;
}

function parseTileMatrixSet(input) {
    const obj = {};
    obj.identifier = input.querySelector("Identifier").textContent;
    obj.supportedCRS = input.querySelector("SupportedCRS").textContent;
    obj.tileMatrix = {};
    const tileMatrixList = input.querySelectorAll("TileMatrix");
    for (let i = 0; i < tileMatrixList.length; i++) {
        const tileMatrix = parseTileMatrix(tileMatrixList[i]);
        obj.tileMatrix[tileMatrix.identifier] = tileMatrix;
    }
    return obj;
}

function parseTileMatrix(input) {
    const obj = {};
    obj.identifier = input.querySelector("Identifier").textContent;
    obj.scaleDenominator = input.querySelector("ScaleDenominator").textContent;
    obj.topLeftCorner = input.querySelector("TopLeftCorner").textContent;
    obj.tileWidth = input.querySelector("TileWidth").textContent;
    obj.tileHeight = input.querySelector("TileHeight").textContent;
    obj.matrixWidth = input.querySelector("MatrixWidth").textContent;
    obj.matrixHeight = input.querySelector("MatrixHeight").textContent;
    return obj;
}
