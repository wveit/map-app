import { parseWMTSCapabilities } from "./parser";
import { addLayerData } from "../actions/layerData";

const configuredLayers = [
    "GHRSST_L4_AVHRR-OI_Sea_Surface_Temperature",
    "Aquarius_Sea_Surface_Salinity_L3_7Day_RunningMean",
    "BlueMarble_ShadedRelief",
    "AIRS_L2_Surface_Air_Temperature_Day",
];

export async function loadLayers(url, store) {
    const httpResponse = await fetch(url);
    const xmlText = await httpResponse.text();
    const capabilitiesObject = parseWMTSCapabilities(xmlText);
    console.log("capabilities object: ", capabilitiesObject);

    configuredLayers.forEach(function (layerName) {
        const layerObj = capabilitiesObject.layers[layerName];
        layerObj.tileMatrixSet =
            capabilitiesObject.tileMatrixSets[layerObj.tileMatrixSet];
        store.dispatch(addLayerData(layerObj));
    });
}
