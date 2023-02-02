import Control from "ol/control/Control";
import Geolocation from 'ol/Geolocation';
export default class GeolocationCenter extends Control {
    geolocaliseElement: Geolocation | undefined;
    constructor(geolociliseElement: Geolocation | undefined, theme: string, customPosition: boolean);
    centerMap(): void;
}
