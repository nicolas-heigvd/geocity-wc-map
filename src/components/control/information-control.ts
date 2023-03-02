import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import Control from "ol/control/Control";

import { GeocityEvent } from '../../utils/geocity-event';
import InformationBoxControl from '../notification/information-box';

import style from '../../styles/svg-control.css?inline';
import control from '../../styles/controls.css?inline';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import SVGCreator from '../../utils/svg-creator';
import { useStore } from '../../composable/store';

@customElement('information-control-button')
class InformationControlButton extends LitElement {

  static styles = [unsafeCSS(style), unsafeCSS(control)];

  constructor() {
    super();
  }

  render() {
    return html`<div class="information-control">
                  <div>
                    <div class="control-${useStore().getTheme()}">
                      ${unsafeSVG(SVGCreator.information)}
                    </div>
                  </div>
                </div>
    `;
  }
}


export default class InformationControl extends Control {
    informationIsOpen: Boolean = true;
    control: InformationBoxControl;

    constructor(target: HTMLElement) {

        const element = document.createElement('information-control-button') as InformationControlButton;

        super({
          element: element,
        });
        element.addEventListener('click', this.toogleInformationBox.bind(this), false);
        window.addEventListener('close-information-box', this.closeInformationBox.bind(this), false);
        this.control = new InformationBoxControl()
        useStore().getMap().addControl(this.control);
        this.openInformationBox();
        this.setTarget(target)
      }

       closeInformationBox() {
        GeocityEvent.sendEvent('clear-information-box-interval', {});

        this.control.hide();

        this.informationIsOpen = false;
      }

      openInformationBox() {
        this.control.show();
        GeocityEvent.sendEvent('open-information-box', {});
        this.informationIsOpen = true;
      }
    
      toogleInformationBox() {
        this.informationIsOpen ? this.closeInformationBox() : this.openInformationBox();
      }
    }