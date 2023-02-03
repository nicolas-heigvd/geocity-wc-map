import { unsafeCSS, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Control } from 'ol/control';
import InformationElement from '../types/information-element';
import { GeocityEvent } from '../utils/geocity-event';

import popupStyle from '../styles/popup-information.css?inline';
import themeStyle from '../styles/theme.css?inline';

@customElement('information-box')
class InformationBox extends LitElement {
  @property()
  information: InformationElement = { duration: 0, title: '', content: ''};
  @property()
  theme: string = 'light';

  @state() _width = 100;

  interval: any;

  static styles = [unsafeCSS(popupStyle), unsafeCSS(themeStyle)];

  firstUpdated(): void {
    const intervalDuration = this.information.duration / 100;
    this._width = 100;
    this.interval = setInterval(() => {
      if (this._width > 0) {
        this._width--;
      } else {
        this.closeBox();
      }
    }, intervalDuration);
  }

  constructor() {
    super();
    window.addEventListener('clear-information-box-interval', this.clear.bind(this), true);
  }

  render() {
    return html`
      <div class="information-box-${this.theme} custom-popup-element" style="--progress-width: ${this._width}%">
        <div class="custom-popup-title">
          <div class="custom-popup-title-text">${this.information.title}</div>
          <svg _width="20" height="20" viewBox="0 0 20 20" class="custom-popup-title-svg" @click="${this.closeBox}">
            <path d="M15.4 4.59998L4.60004 15.4"></path>
            <path d="M15.4 15.4L4.60004 4.59998"></path>
          </svg>
        </div>
        <div class="custom-popup-content">${this.information.content}</div>
        <div class="custom-progress-element"></div>
      </div>`
  }

  clear() {
    clearInterval(this.interval);
  }

  closeBox() {
    clearInterval(this.interval);
    GeocityEvent.sendEvent('close-information-box', {});
  }

}

export default class InformationBoxControl extends Control {
  constructor(information: InformationElement, theme: string) {
    const infoBox = document.createElement('information-box') as InformationBox;
    infoBox.information = information;
    infoBox.theme = theme;
    super({ element: infoBox});
  }
}