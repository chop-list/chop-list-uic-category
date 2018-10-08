import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import 'chop-list-uic-item/chop-list-uic-item';

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
        .heading {
          display: block;
          background-color: palegreen;
          font-variant-caps: titling-caps;
          padding: 5px;
        }
        .bullet {
            vertical-align: center;
        }
        .heading .title {
            display: inline-block;
            font-family: "Helvetica Neue";
            font-size: 1.5em;
            color: gray;
            margin-left: 0.2em;
        }
        [opened] .bullet {
            transform: rotate(90deg);
        }
        div.category:not([opened]) .list {
          -ms-transform: scale(0, 1); /* IE 9 */
          -webkit-transform: scale(0, 1); /* Safari */
          transform: scale(0, 1);
          height: 0px;
        }
      </style>
      <div class="category" opened$={{opened}}>
        <div class="heading" on-click="toggleStatus">
          <svg class="bullet" height="15" width="15">
            <polygon points="0,0 0,15 15,7.5" style="fill:gray;stroke-width:0" />
            Sorry, your browser does not support inline SVG.
          </svg>
          <div class="title">Category</div>
        </div>
        <div class="list" >
          <chop-list-uic-item>Coca Cola Light</chop-list-uic-item>
          <chop-list-uic-item>Cola cola</chop-list-uic-item>
          <chop-list-uic-item>Gin Tonic</chop-list-uic-item>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        value: true,
      },
    };
  }


  toggleStatus() {
    this.opened = !this.opened;
  }
}

window.customElements.define('chop-list-uic-category', ChopListUicCategory);
