import Tile from 'ol/layer/Tile';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import { useStore } from '../../composable/store';
import TileSource from 'ol/source/Tile';

export default interface wmtsLayerConfiguration {
  capability: string;
  layer: string;
  projection: string;
  name: string;
  thumbnail: string;
}

export default class WMTSLoader {
  constructor() {
    const parser = new WMTSCapabilities();
    const options = useStore().getOptions();
    let isVisible = true;
    const layers: Tile<TileSource>[] = [];
    Promise.all(options.wmts.map((wmts) => {
      fetch(wmts.capability).then((response) => response.text()).then(function (text) {
        const wmtsLayer = new Tile({
          opacity: 1,
        });
        const result = parser.read(text);
        const wmtsOptions = optionsFromCapabilities(result, {
          layer: wmts.layer,
          matrixSet: wmts.projection,
        });
        if (wmtsOptions) {
          wmtsLayer.setSource(new WMTS(wmtsOptions))
          wmtsLayer.setVisible(isVisible);
          layers.push(wmtsLayer);
          useStore().getMap().getLayers().insertAt(0, wmtsLayer);
          isVisible = false;
          if (useStore().getBorderConstraint()) {
            wmtsLayer.setExtent(useStore().getBorderConstraint());
          }
        }
      })
    }))
    
    if (options.borderUrl !== '') {
      window.addEventListener('border-contraint-enabled', () => {
        layers.forEach((wmtsLayer) => wmtsLayer.setExtent(useStore().getBorderConstraint()))
      })
    }

    window.addEventListener('layer-selected', ((event: CustomEvent) => {
      layers.forEach((layer) => layer.setVisible(false))
      layers.find((layer) => {
        const source: WMTS = layer.getSource() as WMTS;
        return source && source.getLayer() === event.detail.layer ? layer : undefined
        })?.setVisible(true);
    }) as EventListener)
  }
}