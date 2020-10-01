import { parseWMTSCapabilities } from "./parser";
import { addLayerData } from "../actions/layerData";

export async function loadLayers(store) {
    const layerConfig = await getLayerConfig();
    const layers = await getLayersWithImageData(layerConfig);
    addLayersToStore(layers, store);
}

async function getLayerConfig() {
    const response = await fetch("config/layers.json");
    const layerConfig = await response.json();
    console.log("getLayerConfig()", layerConfig);
    return layerConfig;
}

async function getLayersWithImageData(config) {
    const layers = [];
    for (let i = 0; i < config.layers.length; i++) {
        const configLayer = config.layers[i];
        const layer = await createLayerWithPopulatedImageData(configLayer);
        if (layer) {
            layers.push(layer);
        }
    }
    console.log("addImageryDataToConfig(...)", config);
    return layers;
}

async function createLayerWithPopulatedImageData(configLayer) {
    switch (configLayer.imagery.type) {
        case "GIBS_WMTS":
            return await createGibsWmtsLayerWithPopulatedImageData(configLayer);
        default:
            return null;
    }
}

async function createGibsWmtsLayerWithPopulatedImageData(configLayer) {
    const layer = {
        ...configLayer,
    };
    const capabilitiesObject = await getCapabilitiesObject(
        configLayer.imagery.capabilities
    );
    const populatedImageData = capabilitiesObject.layers[configLayer.id];
    populatedImageData.tileMatrixSet =
        capabilitiesObject.tileMatrixSets[populatedImageData.tileMatrixSet];
    layer.imagery.data = populatedImageData;
    return layer;
}

const capabilitiesCache = {};

async function getCapabilitiesObject(url) {
    if (capabilitiesCache[url]) {
        return capabilitiesCache[url];
    }
    const httpResponse = await fetch(url);
    const xmlText = await httpResponse.text();
    const capabilitiesObject = parseWMTSCapabilities(xmlText);
    capabilitiesCache[url] = capabilitiesObject;
    return capabilitiesObject;
}

function addLayersToStore(layers, store) {
    layers.forEach((layer) => {
        store.dispatch(addLayerData(layer));
    });
}
