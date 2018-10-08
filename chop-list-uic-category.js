import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'chop-list-uic-item/chop-list-uic-item.js';

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
          
        }
        .heading .title {
            display: inline-block;
        }
        /*.item_list {*/
            /*height: auto;*/
        /*}*/
        [opened] .bullet {
          -ms-transform: rotate(90deg); /* IE 9 */
          -webkit-transform: rotate(90deg); /* Safari */
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
          <svg class="bullet" height="10" width="10">
            <polygon points="0,0 0,10 10,5" style="fill:gray;stroke-width:0" />
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
  // ready() {
  //   super.ready();
  //   this.addEventListener('click', this.toogleStatus);
  // }

  toggleStatus() {
    this.opened = !this.opened;
  }
}

window.customElements.define('chop-list-uic-category', ChopListUicCategory);
