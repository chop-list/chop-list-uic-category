import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `chop-list-uic-category`
 * Chop list category that contains a header and items
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ChopListUicCategory extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'chop-list-uic-category',
      },
    };
  }
}

window.customElements.define('chop-list-uic-category', ChopListUicCategory);
