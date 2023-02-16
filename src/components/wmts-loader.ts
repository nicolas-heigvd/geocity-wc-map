import Tile from 'ol/layer/Tile';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import { useStore } from '../composable/store';

export default interface wmtsLayerConfiguration {
  capability: string;
  layer: string;
  projection: string;
}

export default class WMTSLoader {
  constructor() {
    const parser = new WMTSCapabilities();
    const options = useStore().getOptions();
    const wmtsLayer = new Tile({
      opacity: 1,
    });

    fetch(options.wmts.capability)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      const result = parser.read(text);
      const wmtsOptions = optionsFromCapabilities(result, {
        layer: options.wmts.layer,
        matrixSet: options.wmts.projection,
      });
      if (wmtsOptions) {
        wmtsLayer.setSource(new WMTS(wmtsOptions))
        useStore().getMap().getLayers().insertAt(0, wmtsLayer);
      }
    })

    if (options.borderUrl !== '') {
      window.addEventListener('border-contraint-enabled', ((event: CustomEvent) => {
        wmtsLayer.setExtent(event.detail)
      }) as EventListener)
    }
    
  }
}
