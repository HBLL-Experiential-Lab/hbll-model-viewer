/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
String(Math.random()).slice(2),window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t})
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
let t=!1;(()=>{try{const e={get capture(){return t=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch(t){}})(),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,window.JSCompiler_renameProperty=(t,e)=>t;const e={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},n=(t,e)=>e!==t&&(e==e||t==t),i={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:n};class r extends HTMLElement{constructor(){super(),this.initialize();}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i));})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)));}}static createProperty(t,e=i){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r);}static getPropertyDescriptor(t,e,n){return {get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdateInternal(t,r,n);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||i}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n]);}}static _attributeNameForProperty(t,e){const n=e.attribute;return !1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=n){return i(t,e)}static _propertyValueFromAttribute(t,n){const i=n.type,r=n.converter||e,s="function"==typeof r?r:r.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,n){if(void 0===n.reflect)return;const i=n.type,r=n.converter;return (r&&r.toAttribute||e.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal();}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t);}}));}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0;}connectedCallback(){this.enableUpdating();}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0);}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n);}_propertyToAttribute(t,e,n=i){const r=this.constructor,s=r._attributeNameForProperty(t,n);if(void 0!==s){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState;}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState;}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const r=this.constructor;n=n||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1;}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate());}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise;}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated();}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e));}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState;}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return !0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated();}updated(t){}firstUpdated(t){}}r.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t);}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,t);}};function o(t){return (e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t);})(t,e,n):s(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&CSSStyleSheet.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=null!=navigator.xr&&null!=self.XRSession&&null!=navigator.xr.isSessionSupported,l=a&&self.XRSession.prototype.requestHitTestSource,c=null!=self.ResizeObserver,h=null!=self.IntersectionObserver,u=l,d=((()=>{const t=navigator.userAgent||navigator.vendor||self.opera;let e=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0);})(),/\bCrOS\b/.test(navigator.userAgent),/android/i.test(navigator.userAgent)),p=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,m=(()=>{const t=document.createElement("a");return Boolean(t.relList&&t.relList.supports&&t.relList.supports("ar"))})(),f=/Safari\//.test(navigator.userAgent),g=/firefox/i.test(navigator.userAgent),v=/OculusBrowser/.test(navigator.userAgent),y=p&&/CriOS\//.test(navigator.userAgent),x=p&&f,b=d&&!g&&!v;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w=document.createElement("template");w.innerHTML='\n<style>\n:host {\n  display: block;\n  position: relative;\n  contain: strict;\n  width: 300px;\n  height: 150px;\n}\n\n/* NOTE: This ruleset is our integration surface area with the\n * :focus-visible polyfill.\n *\n * @see https://github.com/WICG/focus-visible/pull/196 */\n:host([data-js-focus-visible]:focus:not(.focus-visible)),\n:host([data-js-focus-visible]) :focus:not(.focus-visible) {\n  outline: none;\n}\n\n.container {\n  position: relative;\n}\n\n.userInput {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n\ncanvas {\n  position: absolute;\n  display: none;\n  pointer-events: none;\n  /* NOTE(cdata): Chrome 76 and below apparently have a bug\n   * that causes our canvas not to display pixels unless it is\n   * on its own render layer\n   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893\n   */\n  transform: translateZ(0);\n}\n\ncanvas.show {\n  display: block;\n}\n\n/* Adapted from HTML5 Boilerplate\n *\n * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */\n.screen-reader-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.slot {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.slot > * {\n  pointer-events: initial;\n}\n\n.annotation-wrapper ::slotted(*) {\n  opacity: var(--max-hotspot-opacity, 1);\n  transition: opacity 0.3s;\n}\n\n.pointer-tumbling .annotation-wrapper ::slotted(*) {\n  pointer-events: none;\n}\n\n.annotation-wrapper ::slotted(*) {\n  pointer-events: initial;\n}\n\n.annotation-wrapper.hide ::slotted(*) {\n  opacity: var(--min-hotspot-opacity, 0.25);\n}\n\n.slot.poster {\n  opacity: 0;\n  transition: opacity 0.3s 0.3s;\n  background-color: inherit;\n}\n\n.slot.poster.show {\n  opacity: 1;\n  transition: none;\n}\n\n.slot.poster > * {\n  pointer-events: initial;\n}\n\n.slot.poster:not(.show) > * {\n  pointer-events: none;\n}\n\n#default-poster {\n  width: 100%;\n  height: 100%;\n  /* The default poster is a <button> so we need to set display\n   * to prevent it from being affected by text-align: */\n  display: block;\n  position: absolute;\n  border: none;\n  padding: 0;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: var(--poster-color, #fff);\n  background-image: var(--poster-image, none);\n}\n\n#default-progress-bar {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n#default-progress-bar > .mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--progress-mask, #fff);\n  transition: opacity 0.3s;\n  opacity: 0.2;\n}\n\n#default-progress-bar > .bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: var(--progress-bar-height, 5px);\n  transition: transform 0.09s;\n  transform-origin: top left;\n  transform: scaleX(0);\n  overflow: hidden;\n}\n\n#default-progress-bar > .bar:before {\n  content: \'\';\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));\n\n  transition: none;\n  transform-origin: top left;\n  transform: translateY(0);\n}\n\n#default-progress-bar > .bar.hide:before {\n  transition: transform 0.3s 1s;\n  transform: translateY(-100%);\n}\n\n.slot.interaction-prompt {\n  display: var(--interaction-prompt-display, flex);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  align-items: center;\n  justify-content: center;\n\n  opacity: 0;\n  will-change: opacity;\n  overflow: hidden;\n  transition: opacity 0.3s;\n}\n\n.slot.interaction-prompt.visible {\n  opacity: 1;\n}\n\n.slot.interaction-prompt > .animated-container {\n  will-change: transform, opacity;\n}\n\n.slot.interaction-prompt > * {\n  pointer-events: none;\n}\n\n.slot.ar-button {\n  -moz-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n\n  display: var(--ar-button-display, block);\n}\n\n.slot.ar-button:not(.enabled) {\n  display: none;\n}\n\n.fab {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background-color: #fff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 100px;\n}\n\n.fab > * {\n  opacity: 0.87;\n}\n\n#default-ar-button {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  transform: scale(var(--ar-button-scale, 1));\n  transform-origin: bottom right;\n}\n\n.slot.default {\n  pointer-events: none;\n}\n\n.slot.progress-bar {\n  pointer-events: none;\n}\n\n.slot.exit-webxr-ar-button {\n  pointer-events: none;\n}\n\n.slot.exit-webxr-ar-button:not(.enabled) {\n  display: none;\n}\n\n#default-exit-webxr-ar-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  width: 40px;\n  height: 40px;\n  box-sizing: border-box;\n}\n\n#default-exit-webxr-ar-button > svg {\n  fill: #fff;\n}\n</style>\n<div class="container">\n  <div class="userInput" tabindex="0" role="img"\n      aria-label="A depiction of a 3D model"\n      aria-live="polite">\n    <canvas></canvas>\n  </div>\n\n  \x3c!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM\n        will have their <slot> elements removed by ShadyCSS --\x3e\n  <div class="slot poster">\n    <slot name="poster">\n      <button type="button" id="default-poster" aria-hidden="true" aria-label="Activate to view in 3D!"></button>\n    </slot>\n  </div>\n\n  <div class="slot ar-button">\n    <slot name="ar-button">\n      <a id="default-ar-button" class="fab"\n          tabindex="2"\n          aria-label="View this 3D model up close">\n        \n<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"\n\t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"\n\t viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\n<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>\n<g id="Art_layer">\n\t<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>\n\t<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>\n\t<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>\n\t<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>\n\t<g>\n\t\t<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3\n\t\t\tl5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62\n\t\t\tl4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>\n\t</g>\n</g>\n</svg>\n      </a>\n    </slot>\n  </div>\n\n  <div class="slot interaction-prompt">\n    <div class="animated-container" part="interaction-prompt">\n      <slot name="interaction-prompt" aria-hidden="true">\n        \n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">\n    <defs>\n        <path id="A" d="M.001.232h24.997V36H.001z" />\n    </defs>\n    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">\n        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />\n        <g transform="translate(11 3)">\n            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />\n            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />\n            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />\n            <g transform="translate(0 .769)">\n                <mask id="B" fill="#fff">\n                    <use xlink:href="#A" />\n                </mask>\n                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />\n            </g>\n        </g>\n    </g>\n</svg>\n      </slot>\n    </div>\n  </div>\n\n  <div class="slot default">\n    <slot></slot>\n\n    <div class="slot progress-bar">\n      <slot name="progress-bar">\n        <div id="default-progress-bar" aria-hidden="true">\n          <div class="mask"></div>\n          <div class="bar"></div>\n        </div>\n      </slot>\n    </div>\n    \n    <div class="slot exit-webxr-ar-button">\n      <slot name="exit-webxr-ar-button">\n        <a id="default-exit-webxr-ar-button"\n            tabindex="3"\n            aria-label="Exit AR"\n            aria-hidden="true">\n          \n<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">\n    \x3c!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement\n         support for dynamic re-coloring of UI components --\x3e\n    <defs>\n      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">\n        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>\n        <feOffset dx="0" dy="0" result="offsetblur"/>\n        <feFlood flood-color="#000000"/>\n        <feComposite in2="offsetblur" operator="in"/>\n        <feMerge>\n          <feMergeNode/>\n          <feMergeNode in="SourceGraphic"/>\n        </feMerge>\n      </filter>\n    </defs>\n    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n        </a>\n      </slot>\n    </div>\n  </div>\n</div>';function _(){}Object.assign(_.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e);},hasEventListener:function(t,e){if(void 0===this._listeners)return !1;const n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)},removeEventListener:function(t,e){if(void 0===this._listeners)return;const n=this._listeners[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1);}},dispatchEvent:function(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const n=e.slice(0);for(let e=0,i=n.length;e<i;e++)n[e].call(this,t);}}});const M=[];for(let t=0;t<256;t++)M[t]=(t<16?"0":"")+t.toString(16);let S=1234567;const T={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return (M[255&t]+M[t>>8&255]+M[t>>16&255]+M[t>>24&255]+"-"+M[255&e]+M[e>>8&255]+"-"+M[e>>16&15|64]+M[e>>24&255]+"-"+M[63&n|128]+M[n>>8&255]+"-"+M[n>>16&255]+M[n>>24&255]+M[255&i]+M[i>>8&255]+M[i>>16&255]+M[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return (t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return (1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return void 0!==t&&(S=t%2147483647),S=16807*S%2147483647,(S-1)/2147483646},degToRad:function(t){return t*T.DEG2RAD},radToDeg:function(t){return t*T.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*m,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*m,a*c);break;case"ZYZ":t.set(l*m,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r);}}};class E{constructor(t=0,e=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=e;}get width(){return this.x}set width(t){this.x=t;}get height(){return this.y}set height(t){this.y=t;}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class A{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");}set(t,e,n,i,r,s,o,a,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=r,c[5]=a,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return (new this.constructor).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],o=n[3],a=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],v=i[1],y=i[4],x=i[7],b=i[2],w=i[5],_=i[8];return r[0]=s*m+o*v+a*b,r[3]=s*f+o*y+a*w,r[6]=s*g+o*x+a*_,r[1]=l*m+c*v+h*b,r[4]=l*f+c*y+h*w,r[7]=l*g+c*x+h*_,r[2]=u*m+d*v+p*b,r[5]=u*f+d*y+p*w,r[8]=u*g+d*x+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8];return e*s*c-e*o*l-n*r*c+n*o*a+i*r*l-i*s*a}getInverse(t,e){void 0!==e&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const n=t.elements,i=this.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=d*l-c*u,m=c*h-d*a,f=u*a-l*h,g=r*p+s*m+o*f;if(0===g)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return i[0]=p*v,i[1]=(o*u-d*s)*v,i[2]=(c*s-o*l)*v,i[3]=m*v,i[4]=(d*r-o*h)*v,i[5]=(o*a-c*r)*v,i[6]=f*v,i[7]=(s*h-u*r)*v,i[8]=(l*r-s*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).getInverse(this).transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,o){const a=Math.cos(r),l=Math.sin(r);this.set(n*a,n*l,-n*(a*s+l*o)+s+t,-i*l,i*a,-i*(-l*s+a*o)+o+e,0,0,1);}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],s=i[3],o=i[6],a=i[1],l=i[4],c=i[7];return i[0]=e*r+n*a,i[3]=e*s+n*l,i[6]=e*o+n*c,i[1]=-n*r+e*a,i[4]=-n*s+e*l,i[7]=-n*o+e*c,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e){void 0===e&&(e=0);for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}}let L;const R={getDataURL:function(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else {void 0===L&&(L=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),L.width=t.width,L.height=t.height;const n=L.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=L;}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let C=0;function P(t,e,n,i,r,s,o,a,l,c){Object.defineProperty(this,"id",{value:C++}),this.uuid=T.generateUUID(),this.name="",this.image=void 0!==t?t:P.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==e?e:P.DEFAULT_MAPPING,this.wrapS=void 0!==n?n:1001,this.wrapT=void 0!==i?i:1001,this.magFilter=void 0!==r?r:1006,this.minFilter=void 0!==s?s:1008,this.anisotropy=void 0!==l?l:1,this.format=void 0!==o?o:1023,this.internalFormat=null,this.type=void 0!==a?a:1009,this.offset=new E(0,0),this.repeat=new E(1,1),this.center=new E(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new A,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=void 0!==c?c:3e3,this.version=0,this.onUpdate=null;}P.DEFAULT_IMAGE=void 0,P.DEFAULT_MAPPING=300,P.prototype=Object.assign(Object.create(_.prototype),{constructor:P,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);},clone:function(){return (new this.constructor).copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){const i=this.image;if(void 0===i.uuid&&(i.uuid=T.generateUUID()),!e&&void 0===t.images[i.uuid]){let e;if(Array.isArray(i)){e=[];for(let t=0,n=i.length;t<n;t++)e.push(R.getDataURL(i[t]));}else e=R.getDataURL(i);t.images[i.uuid]={uuid:i.uuid,url:e};}n.image=i.uuid;}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"});},transformUv:function(t){if(300!==this.mapping)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(P.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++;}});class O{constructor(t=0,e=0,n=0,i=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=e,this.z=n,this.w=i;}get width(){return this.z}set width(t){this.z=t;}get height(){return this.w}set height(t){this.w=t;}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const s=.01,o=.1,a=t.elements,l=a[0],c=a[4],h=a[8],u=a[1],d=a[5],p=a[9],m=a[2],f=a[6],g=a[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<o&&Math.abs(h+m)<o&&Math.abs(p+f)<o&&Math.abs(l+d+g-3)<o)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,a=(d+1)/2,v=(g+1)/2,y=(c+u)/4,x=(h+m)/4,b=(p+f)/4;return t>a&&t>v?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=y/n,r=x/n):a>v?a<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(a),n=y/i,r=b/i):v<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=x/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(f-p)/v,this.y=(h-m)/v,this.z=(u-c)/v,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function I(t,e,n){this.width=t,this.height=e,this.scissor=new O(0,0,t,e),this.scissorTest=!1,this.viewport=new O(0,0,t,e),n=n||{},this.texture=new P(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=void 0!==n.generateMipmaps&&n.generateMipmaps,this.texture.minFilter=void 0!==n.minFilter?n.minFilter:1006,this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0!==n.stencilBuffer&&n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null;}function D(t,e,n){I.call(this,t,e,n),this.samples=4;}I.prototype=Object.assign(Object.create(_.prototype),{constructor:I,isWebGLRenderTarget:!0,setSize:function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e);},clone:function(){return (new this.constructor).copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"});}}),D.prototype=Object.assign(Object.create(I.prototype),{constructor:D,isWebGLMultisampleRenderTarget:!0,copy:function(t){return I.prototype.copy.call(this,t),this.samples=t.samples,this}});class N{constructor(t=0,e=0,n=0,i=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=e,this._z=n,this._w=i;}static slerp(t,e,n,i){return n.copy(t).slerp(e,i)}static slerpFlat(t,e,n,i,r,s,o){let a=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(h!==m||a!==u||l!==d||c!==p){let t=1-o;const e=a*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,o=Math.sin(o*s)/r;}const r=o*n;if(a=a*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-o){const t=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=t,l*=t,c*=t,h*=t;}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h;}static multiplyQuaternionsFlat(t,e,n,i,r,s){const o=n[i],a=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=o*p+c*h+a*d-l*u,t[e+1]=a*p+c*u+l*h-o*d,t[e+2]=l*p+c*d+o*u-a*h,t[e+3]=c*p-o*h-a*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback();}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,s=t._order,o=Math.cos,a=Math.sin,l=o(n/2),c=o(i/2),h=o(r/2),u=a(n/2),d=a(i/2),p=a(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s);}return !1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=n+o+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-a)*t,this._y=(r-l)*t,this._z=(s-i)*t;}else if(n>o&&n>h){const t=2*Math.sqrt(1+n-o-h);this._w=(c-a)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t;}else if(o>h){const t=2*Math.sqrt(1+o-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(a+c)/t;}else {const t=2*Math.sqrt(1+h-n-o);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(a+c)/t,this._z=.25*t;}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-6?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(T.clamp(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(0===n)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,o=e._x,a=e._y,l=e._z,c=e._w;return this._x=n*c+s*o+i*l-r*a,this._y=i*c+s*a+r*o-n*l,this._z=r*c+s*l+n*a-i*o,this._w=s*c-n*o-i*a-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}class F{constructor(t=0,e=0,n=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=e,this.z=n;}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(z.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(z.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,o=t.z,a=t.w,l=a*e+s*i-o*n,c=a*n+o*e-r*i,h=a*i+r*n-s*e,u=-r*e-s*n-o*i;return this.x=l*a+u*-r+c*-o-h*-s,this.y=c*a+u*-s+h*-r-l*-o,this.z=h*a+u*-o+l*-s-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,o=e.y,a=e.z;return this.x=i*a-r*o,this.y=r*s-n*a,this.z=n*o-i*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return U.copy(this).projectOnVector(t),this.sub(U)}reflect(t){return this.sub(U.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(T.clamp(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const U=new F,z=new N;class k{constructor(t,e){Object.defineProperty(this,"isBox3",{value:!0}),this.min=void 0!==t?t:new F(1/0,1/0,1/0),this.max=void 0!==e?e:new F(-1/0,-1/0,-1/0);}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=3){const l=t[a],c=t[a+1],h=t[a+2];l<e&&(e=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>s&&(s=c),h>o&&(o=h);}return this.min.set(e,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,l=t.count;a<l;a++){const l=t.getX(a),c=t.getY(a),h=t.getZ(a);l<e&&(e=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>s&&(s=c),h>o&&(o=h);}return this.min.set(e,n,i),this.max.set(r,s,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=G.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return (new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return void 0===t&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new F),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return void 0===t&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new F),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;void 0!==e&&(null===e.boundingBox&&e.computeBoundingBox(),V.copy(e.boundingBox),V.applyMatrix4(t.matrixWorld),this.union(V));const n=t.children;for(let t=0,e=n.length;t<e;t++)this.expandByObject(n[t]);return this}containsPoint(t){return !(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return void 0===e&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new F),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return !(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,G),G.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return !1;this.getCenter(Z),K.subVectors(this.max,Z),j.subVectors(t.a,Z),W.subVectors(t.b,Z),q.subVectors(t.c,Z),X.subVectors(W,j),Y.subVectors(q,W),J.subVectors(j,q);let e=[0,-X.z,X.y,0,-Y.z,Y.y,0,-J.z,J.y,X.z,0,-X.x,Y.z,0,-Y.x,J.z,0,-J.x,-X.y,X.x,0,-Y.y,Y.x,0,-J.y,J.x,0];return !!B(e,j,W,q,K)&&(e=[1,0,0,0,1,0,0,0,1],!!B(e,j,W,q,K)&&(Q.crossVectors(X,Y),e=[Q.x,Q.y,Q.z],B(e,j,W,q,K)))}clampPoint(t,e){return void 0===e&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new F),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return G.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return void 0===t&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=.5*this.getSize(G).length(),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(H[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),H[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),H[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),H[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),H[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),H[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),H[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),H[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(H)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function B(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$.fromArray(t,s);const o=r.x*Math.abs($.x)+r.y*Math.abs($.y)+r.z*Math.abs($.z),a=e.dot($),l=n.dot($),c=i.dot($);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return !1}return !0}const H=[new F,new F,new F,new F,new F,new F,new F,new F],G=new F,V=new k,j=new F,W=new F,q=new F,X=new F,Y=new F,J=new F,Z=new F,K=new F,Q=new F,$=new F,tt=new k;class et{constructor(t,e){this.center=void 0!==t?t:new F,this.radius=void 0!==e?e:-1;}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;void 0!==e?n.copy(e):tt.setFromPoints(t).getCenter(n);let i=0;for(let e=0,r=t.length;e<r;e++)i=Math.max(i,n.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return void 0===e&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new F),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return void 0===t&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new k),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}}const nt=new F,it=new F,rt=new F,st=new F,ot=new F,at=new F,lt=new F;class ct{constructor(t,e){this.origin=void 0!==t?t:new F,this.direction=void 0!==e?e:new F(0,0,-1);}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return void 0===e&&(console.warn("THREE.Ray: .at() target is now required"),e=new F),e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nt)),this}closestPointToPoint(t,e){void 0===e&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new F),e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nt.copy(this.direction).multiplyScalar(e).add(this.origin),nt.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){it.copy(t).add(e).multiplyScalar(.5),rt.copy(e).sub(t).normalize(),st.copy(this.origin).sub(it);const r=.5*t.distanceTo(e),s=-this.direction.dot(rt),o=st.dot(this.direction),a=-st.dot(rt),l=st.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*a-o,u=s*o-a,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*o)+u*(s*h+u+2*a)+l;}else u=r,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;else u=-r,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;else u<=-p?(h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-a),r),d=u*(u+2*a)+l):(h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-a),r),d=-h*h+u*(u+2*a)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(rt).multiplyScalar(u).add(it),d}intersectSphere(t,e){nt.subVectors(t.center,this.origin);const n=nt.dot(this.direction),i=nt.dot(nt)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,a=n+s;return o<0&&a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return !0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,o,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||n!=n)&&(n=r),(s<i||i!=i)&&(i=s),h>=0?(o=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h),n>a||o>i?null:((o>n||n!=n)&&(n=o),(a<i||i!=i)&&(i=a),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,nt)}intersectTriangle(t,e,n,i,r){ot.subVectors(e,t),at.subVectors(n,t),lt.crossVectors(ot,at);let s,o=this.direction.dot(lt);if(o>0){if(i)return null;s=1;}else {if(!(o<0))return null;s=-1,o=-o;}st.subVectors(this.origin,t);const a=s*this.direction.dot(at.crossVectors(st,at));if(a<0)return null;const l=s*this.direction.dot(ot.cross(st));if(l<0)return null;if(a+l>o)return null;const c=-s*st.dot(lt);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}class ht{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");}set(t,e,n,i,r,s,o,a,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=o,g[13]=a,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return (new ht).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ut.setFromMatrixColumn(t,0).length(),r=1/ut.setFromMatrixColumn(t,1).length(),s=1/ut.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=s*c,n=s*h,i=o*c,r=o*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-o*a,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*a;}else if("YXZ"===t.order){const t=a*c,n=a*h,i=l*c,r=l*h;e[0]=t+r*o,e[4]=i*o-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-o,e[2]=n*o-i,e[6]=r+t*o,e[10]=s*a;}else if("ZXY"===t.order){const t=a*c,n=a*h,i=l*c,r=l*h;e[0]=t-r*o,e[4]=-s*h,e[8]=i+n*o,e[1]=n+i*o,e[5]=s*c,e[9]=r-t*o,e[2]=-s*l,e[6]=o,e[10]=s*a;}else if("ZYX"===t.order){const t=s*c,n=s*h,i=o*c,r=o*h;e[0]=a*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=a*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=o*a,e[10]=s*a;}else if("YZX"===t.order){const t=s*a,n=s*l,i=o*a,r=o*l;e[0]=a*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-o*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h;}else if("XZY"===t.order){const t=s*a,n=s*l,i=o*a,r=o*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=o*c,e[10]=r*h+t;}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pt,t,mt)}lookAt(t,e,n){const i=this.elements;return vt.subVectors(t,e),0===vt.lengthSq()&&(vt.z=1),vt.normalize(),ft.crossVectors(n,vt),0===ft.lengthSq()&&(1===Math.abs(n.z)?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),ft.crossVectors(n,vt)),ft.normalize(),gt.crossVectors(vt,ft),i[0]=ft.x,i[4]=gt.x,i[8]=vt.x,i[1]=ft.y,i[5]=gt.y,i[9]=vt.y,i[2]=ft.z,i[6]=gt.z,i[10]=vt.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],o=n[4],a=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],v=n[3],y=n[7],x=n[11],b=n[15],w=i[0],_=i[4],M=i[8],S=i[12],T=i[1],E=i[5],A=i[9],L=i[13],R=i[2],C=i[6],P=i[10],O=i[14],I=i[3],D=i[7],N=i[11],F=i[15];return r[0]=s*w+o*T+a*R+l*I,r[4]=s*_+o*E+a*C+l*D,r[8]=s*M+o*A+a*P+l*N,r[12]=s*S+o*L+a*O+l*F,r[1]=c*w+h*T+u*R+d*I,r[5]=c*_+h*E+u*C+d*D,r[9]=c*M+h*A+u*P+d*N,r[13]=c*S+h*L+u*O+d*F,r[2]=p*w+m*T+f*R+g*I,r[6]=p*_+m*E+f*C+g*D,r[10]=p*M+m*A+f*P+g*N,r[14]=p*S+m*L+f*O+g*F,r[3]=v*w+y*T+x*R+b*I,r[7]=v*_+y*E+x*C+b*D,r[11]=v*M+y*A+x*P+b*N,r[15]=v*S+y*L+x*O+b*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],o=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*a*h-i*l*h-r*o*u+n*l*u+i*o*d-n*a*d)+t[7]*(+e*a*d-e*l*u+r*s*u-i*s*d+i*l*c-r*a*c)+t[11]*(+e*l*h-e*o*d-r*s*h+n*s*d+r*o*c-n*l*c)+t[15]*(-i*o*c-e*a*h+e*o*u+i*s*h-n*s*u+n*a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}getInverse(t,e){void 0!==e&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const n=this.elements,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],m=i[10],f=i[11],g=i[12],v=i[13],y=i[14],x=i[15],b=p*y*u-v*m*u+v*h*f-c*y*f-p*h*x+c*m*x,w=g*m*u-d*y*u-g*h*f+l*y*f+d*h*x-l*m*x,_=d*v*u-g*p*u+g*c*f-l*v*f-d*c*x+l*p*x,M=g*p*h-d*v*h-g*c*m+l*v*m+d*c*y-l*p*y,S=r*b+s*w+o*_+a*M;if(0===S)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return n[0]=b*T,n[1]=(v*m*a-p*y*a-v*o*f+s*y*f+p*o*x-s*m*x)*T,n[2]=(c*y*a-v*h*a+v*o*u-s*y*u-c*o*x+s*h*x)*T,n[3]=(p*h*a-c*m*a-p*o*u+s*m*u+c*o*f-s*h*f)*T,n[4]=w*T,n[5]=(d*y*a-g*m*a+g*o*f-r*y*f-d*o*x+r*m*x)*T,n[6]=(g*h*a-l*y*a-g*o*u+r*y*u+l*o*x-r*h*x)*T,n[7]=(l*m*a-d*h*a+d*o*u-r*m*u-l*o*f+r*h*f)*T,n[8]=_*T,n[9]=(g*p*a-d*v*a-g*s*f+r*v*f+d*s*x-r*p*x)*T,n[10]=(l*v*a-g*c*a+g*s*u-r*v*u-l*s*x+r*c*x)*T,n[11]=(d*c*a-l*p*a-d*s*u+r*p*u+l*s*f-r*c*f)*T,n[12]=M*T,n[13]=(d*v*o-g*p*o+g*s*m-r*v*m-d*s*y+r*p*y)*T,n[14]=(g*c*o-l*v*o-g*s*h+r*v*h+l*s*y-r*c*y)*T,n[15]=(l*p*o-d*c*o+d*s*h-r*p*h-l*s*m+r*c*m)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,o=t.y,a=t.z,l=r*s,c=r*o;return this.set(l*s+n,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+n,c*a-i*s,0,l*a-i*o,c*a+i*s,r*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,o=e._z,a=e._w,l=r+r,c=s+s,h=o+o,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=o*h,v=a*l,y=a*c,x=a*h,b=n.x,w=n.y,_=n.z;return i[0]=(1-(m+g))*b,i[1]=(d+x)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(u+g))*w,i[6]=(f+v)*w,i[7]=0,i[8]=(p+y)*_,i[9]=(f-v)*_,i[10]=(1-(u+m))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ut.set(i[0],i[1],i[2]).length();const s=ut.set(i[4],i[5],i[6]).length(),o=ut.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],dt.copy(this);const a=1/r,l=1/s,c=1/o;return dt.elements[0]*=a,dt.elements[1]*=a,dt.elements[2]*=a,dt.elements[4]*=l,dt.elements[5]*=l,dt.elements[6]*=l,dt.elements[8]*=c,dt.elements[9]*=c,dt.elements[10]*=c,e.setFromRotationMatrix(dt),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,i,r,s){void 0===s&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,a=2*r/(e-t),l=2*r/(n-i),c=(e+t)/(e-t),h=(n+i)/(n-i),u=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s){const o=this.elements,a=1/(e-t),l=1/(n-i),c=1/(s-r),h=(e+t)*a,u=(n+i)*l,d=(s+r)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<16;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e){void 0===e&&(e=0);for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ut=new F,dt=new ht,pt=new F(0,0,0),mt=new F(1,1,1),ft=new F,gt=new F,vt=new F;class yt{constructor(t=0,e=0,n=0,i=yt.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=e,this._z=n,this._order=i;}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback();}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,n){const i=T.clamp,r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e=e||this._order){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(i(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e);}return this._order=e,!1!==n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xt.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xt,e,n)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return bt.setFromEuler(this),this.setFromQuaternion(bt,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new F(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}yt.DefaultOrder="XYZ",yt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const xt=new ht,bt=new N;class wt{constructor(){this.mask=1;}set(t){this.mask=1<<t|0;}enable(t){this.mask|=1<<t|0;}enableAll(){this.mask=-1;}toggle(t){this.mask^=1<<t|0;}disable(t){this.mask&=~(1<<t|0);}disableAll(){this.mask=0;}test(t){return 0!=(this.mask&t.mask)}}let _t=0;const Mt=new F,St=new N,Tt=new ht,Et=new F,At=new F,Lt=new F,Rt=new N,Ct=new F(1,0,0),Pt=new F(0,1,0),Ot=new F(0,0,1),It={type:"added"},Dt={type:"removed"};function Nt(){Object.defineProperty(this,"id",{value:_t++}),this.uuid=T.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const t=new F,e=new yt,n=new N,i=new F(1,1,1);e._onChange((function(){n.setFromEuler(e,!1);})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1);})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new A}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={};}Nt.DefaultUp=new F(0,1,0),Nt.DefaultMatrixAutoUpdate=!0,Nt.prototype=Object.assign(Object.create(_.prototype),{constructor:Nt,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale);},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e);},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0);},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t);},setRotationFromQuaternion:function(t){this.quaternion.copy(t);},rotateOnAxis:function(t,e){return St.setFromAxisAngle(t,e),this.quaternion.multiply(St),this},rotateOnWorldAxis:function(t,e){return St.setFromAxisAngle(t,e),this.quaternion.premultiply(St),this},rotateX:function(t){return this.rotateOnAxis(Ct,t)},rotateY:function(t){return this.rotateOnAxis(Pt,t)},rotateZ:function(t){return this.rotateOnAxis(Ot,t)},translateOnAxis:function(t,e){return Mt.copy(t).applyQuaternion(this.quaternion),this.position.add(Mt.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Ct,t)},translateY:function(t){return this.translateOnAxis(Pt,t)},translateZ:function(t){return this.translateOnAxis(Ot,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Tt.getInverse(this.matrixWorld))},lookAt:function(t,e,n){t.isVector3?Et.copy(t):Et.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),At.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tt.lookAt(At,Et,this.up):Tt.lookAt(Et,At,this.up),this.quaternion.setFromRotationMatrix(Tt),i&&(Tt.extractRotation(i.matrixWorld),St.setFromRotationMatrix(Tt),this.quaternion.premultiply(St.inverse()));},add:function(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(It)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return -1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dt)),this},attach:function(t){return this.updateWorldMatrix(!0,!1),Tt.getInverse(this.matrixWorld),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Tt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tt),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e);if(void 0!==i)return i}},getWorldPosition:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new F),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new N),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(At,t,Lt),t},getWorldScale:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new F),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(At,Rt,t),t},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new F),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t);},traverseVisible:function(t){if(!1===this.visible)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t);},traverseAncestors:function(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t));},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0;},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t);},updateWorldMatrix:function(t,e){const n=this.parent;if(!0===t&&null!==n&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].updateWorldMatrix(!1,!0);}},toJSON:function(t){const e=void 0===t||"string"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const n=e.shapes;if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e];r(t.shapes,i);}else r(t.shapes,n);}}if(void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]));i.material=e;}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object);}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),o=s(t.images),a=s(t.shapes);e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),o.length>0&&(n.images=o),a.length>0&&(n.shapes=a);}return n.object=i,n;function s(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}},clone:function(t){return (new this.constructor).copy(this,t)},copy:function(t,e){if(void 0===e&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone());}return this}});const Ft=new F,Ut=new F,zt=new A;class kt{constructor(t,e){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=void 0!==t?t:new F(1,0,0),this.constant=void 0!==e?e:0;}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ft.subVectors(n,e).cross(Ut.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return void 0===e&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new F),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){void 0===e&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new F);const n=t.delta(Ft),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):void 0;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?void 0:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return void 0===t&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new F),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zt.getNormalMatrix(t),i=this.coplanarPoint(Ft).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}const Bt=new F,Ht=new F,Gt=new F,Vt=new F,jt=new F,Wt=new F,qt=new F,Xt=new F,Yt=new F,Jt=new F;class Zt{constructor(t,e,n){this.a=void 0!==t?t:new F,this.b=void 0!==e?e:new F,this.c=void 0!==n?n:new F;}static getNormal(t,e,n,i){void 0===i&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new F),i.subVectors(n,e),Bt.subVectors(t,e),i.cross(Bt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bt.subVectors(i,e),Ht.subVectors(n,e),Gt.subVectors(t,e);const s=Bt.dot(Bt),o=Bt.dot(Ht),a=Bt.dot(Gt),l=Ht.dot(Ht),c=Ht.dot(Gt),h=s*l-o*o;if(void 0===r&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new F),0===h)return r.set(-2,-1,-1);const u=1/h,d=(l*a-o*c)*u,p=(s*c-o*a)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vt),Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getUV(t,e,n,i,r,s,o,a){return this.getBarycoord(t,e,n,i,Vt),a.set(0,0),a.addScaledVector(r,Vt.x),a.addScaledVector(s,Vt.y),a.addScaledVector(o,Vt.z),a}static isFrontFacing(t,e,n,i){return Bt.subVectors(n,e),Ht.subVectors(t,e),Bt.cross(Ht).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bt.subVectors(this.c,this.b),Ht.subVectors(this.a,this.b),.5*Bt.cross(Ht).length()}getMidpoint(t){return void 0===t&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new F),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return void 0===t&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new kt),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zt.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Zt.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Zt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){void 0===e&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new F);const n=this.a,i=this.b,r=this.c;let s,o;jt.subVectors(i,n),Wt.subVectors(r,n),Xt.subVectors(t,n);const a=jt.dot(Xt),l=Wt.dot(Xt);if(a<=0&&l<=0)return e.copy(n);Yt.subVectors(t,i);const c=jt.dot(Yt),h=Wt.dot(Yt);if(c>=0&&h<=c)return e.copy(i);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return s=a/(a-c),e.copy(n).addScaledVector(jt,s);Jt.subVectors(t,r);const d=jt.dot(Jt),p=Wt.dot(Jt);if(p>=0&&d<=p)return e.copy(r);const m=d*l-a*p;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(Wt,o);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return qt.subVectors(r,i),o=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(qt,o);const g=1/(f+m+u);return s=m*g,o=u*g,e.copy(n).addScaledVector(jt,s).addScaledVector(Wt,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},$t={h:0,s:0,l:0};function te(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}function ee(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function ne(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}class ie{constructor(t,e,n){return Object.defineProperty(this,"isColor",{value:!0}),void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=T.euclideanModulo(t,1),e=T.clamp(e,0,1),n=T.clamp(n,0,1),0===e)this.r=this.g=this.b=n;else {const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=te(r,i,t+1/3),this.g=te(r,i,t),this.b=te(r,i,t-1/3);}return this}setStyle(t){function e(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.");}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){let t;const i=n[1],r=n[2];switch(i){case"rgb":case"rgba":if(t=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(t[1],10))/255,this.g=Math.min(255,parseInt(t[2],10))/255,this.b=Math.min(255,parseInt(t[3],10))/255,e(t[5]),this;if(t=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(t[1],10))/100,this.g=Math.min(100,parseInt(t[2],10))/100,this.b=Math.min(100,parseInt(t[3],10))/100,e(t[5]),this;break;case"hsl":case"hsla":if(t=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)){const n=parseFloat(t[1])/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100;return e(t[5]),this.setHSL(n,i,r)}}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(t)){const t=n[1],e=t.length;if(3===e)return this.r=parseInt(t.charAt(0)+t.charAt(0),16)/255,this.g=parseInt(t.charAt(1)+t.charAt(1),16)/255,this.b=parseInt(t.charAt(2)+t.charAt(2),16)/255,this;if(6===e)return this.r=parseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=parseInt(t.charAt(2)+t.charAt(3),16)/255,this.b=parseInt(t.charAt(4)+t.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=Kt[t];return void 0!==e?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e){return void 0===e&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e){void 0===e&&(e=2);const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=ee(t.r),this.g=ee(t.g),this.b=ee(t.b),this}copyLinearToSRGB(t){return this.r=ne(t.r),this.g=ne(t.g),this.b=ne(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return ("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){void 0===t&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),s=Math.min(e,n,i);let o,a;const l=(s+r)/2;if(s===r)o=0,a=0;else {const t=r-s;switch(a=l<=.5?t/(r+s):t/(2-r-s),r){case e:o=(n-i)/t+(n<i?6:0);break;case n:o=(i-e)/t+2;break;case i:o=(e-n)/t+4;}o/=6;}return t.h=o,t.s=a,t.l=l,t}getStyle(){return "rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(t,e,n){return this.getHSL(Qt),Qt.h+=t,Qt.s+=e,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpHSL(t,e){this.getHSL(Qt),t.getHSL($t);const n=T.lerp(Qt.h,$t.h,e),i=T.lerp(Qt.s,$t.s,e),r=T.lerp(Qt.l,$t.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e){return void 0===e&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),!0===t.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ie.NAMES=Kt,ie.prototype.r=1,ie.prototype.g=1,ie.prototype.b=1;class re{constructor(t,e,n,i,r,s){this.a=t,this.b=e,this.c=n,this.normal=i&&i.isVector3?i:new F,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new ie,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=void 0!==s?s:0;}clone(){return (new this.constructor).copy(this)}copy(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(let e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(let e=0,n=t.vertexColors.length;e<n;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}}let se=0;function oe(){Object.defineProperty(this,"id",{value:se++}),this.uuid=T.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0;}function ae(t){oe.call(this),this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t);}oe.prototype=Object.assign(Object.create(_.prototype),{constructor:oe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(void 0!==t)for(const e in t){const n=t[e];if(void 0===n){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if("shading"===e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===n;continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");}},toJSON:function(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,void 0!==this.combine&&(n.combine=this.combine),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(n.size=this.size),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),!0===this.flatShading&&(n.flatShading=this.flatShading),0!==this.side&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(n.morphTargets=!0),!0===this.morphNormals&&(n.morphNormals=!0),!0===this.skinning&&(n.skinning=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images);e.length>0&&(n.textures=e),r.length>0&&(n.images=r);}return n},clone:function(){return (new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone();}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"});}}),Object.defineProperty(oe.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++;}}),ae.prototype=Object.create(oe.prototype),ae.prototype.constructor=ae,ae.prototype.isMeshBasicMaterial=!0,ae.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const le=new F,ce=new E;function he(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0;}function ue(t,e,n){he.call(this,new Int8Array(t),e,n);}function de(t,e,n){he.call(this,new Uint8Array(t),e,n);}function pe(t,e,n){he.call(this,new Uint8ClampedArray(t),e,n);}function me(t,e,n){he.call(this,new Int16Array(t),e,n);}function fe(t,e,n){he.call(this,new Uint16Array(t),e,n);}function ge(t,e,n){he.call(this,new Int32Array(t),e,n);}function ve(t,e,n){he.call(this,new Uint32Array(t),e,n);}function ye(t,e,n){he.call(this,new Float32Array(t),e,n);}function xe(t,e,n){he.call(this,new Float64Array(t),e,n);}Object.defineProperty(he.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++;}}),Object.assign(he.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let r=t[i];void 0===r&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new ie),e[n++]=r.r,e[n++]=r.g,e[n++]=r.b;}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let r=t[i];void 0===r&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new E),e[n++]=r.x,e[n++]=r.y;}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let r=t[i];void 0===r&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new F),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z;}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let r=t[i];void 0===r&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new O),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=r.w;}return this},applyMatrix3:function(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXY(e,ce.x,ce.y);else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)le.x=this.getX(e),le.y=this.getY(e),le.z=this.getZ(e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)le.x=this.getX(e),le.y=this.getY(e),le.z=this.getZ(e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)le.x=this.getX(e),le.y=this.getY(e),le.z=this.getZ(e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return {itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),ue.prototype=Object.create(he.prototype),ue.prototype.constructor=ue,de.prototype=Object.create(he.prototype),de.prototype.constructor=de,pe.prototype=Object.create(he.prototype),pe.prototype.constructor=pe,me.prototype=Object.create(he.prototype),me.prototype.constructor=me,fe.prototype=Object.create(he.prototype),fe.prototype.constructor=fe,ge.prototype=Object.create(he.prototype),ge.prototype.constructor=ge,ve.prototype=Object.create(he.prototype),ve.prototype.constructor=ve,ye.prototype=Object.create(he.prototype),ye.prototype.constructor=ye,xe.prototype=Object.create(he.prototype),xe.prototype.constructor=xe;class be{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1;}computeGroups(t){const e=[];let n,i,r=void 0;const s=t.faces;for(i=0;i<s.length;i++){const t=s[i];t.materialIndex!==r&&(r=t.materialIndex,void 0!==n&&(n.count=3*i-n.start,e.push(n)),n={start:3*i,materialIndex:r});}void 0!==n&&(n.count=3*i-n.start,e.push(n)),this.groups=e;}fromGeometry(t){const e=t.faces,n=t.vertices,i=t.faceVertexUvs,r=i[0]&&i[0].length>0,s=i[1]&&i[1].length>0,o=t.morphTargets,a=o.length;let l;if(a>0){l=[];for(let t=0;t<a;t++)l[t]={name:o[t].name,data:[]};this.morphTargets.position=l;}const c=t.morphNormals,h=c.length;let u;if(h>0){u=[];for(let t=0;t<h;t++)u[t]={name:c[t].name,data:[]};this.morphTargets.normal=u;}const d=t.skinIndices,p=t.skinWeights,m=d.length===n.length,f=p.length===n.length;n.length>0&&0===e.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let t=0;t<e.length;t++){const g=e[t];this.vertices.push(n[g.a],n[g.b],n[g.c]);const v=g.vertexNormals;if(3===v.length)this.normals.push(v[0],v[1],v[2]);else {const t=g.normal;this.normals.push(t,t,t);}const y=g.vertexColors;if(3===y.length)this.colors.push(y[0],y[1],y[2]);else {const t=g.color;this.colors.push(t,t,t);}if(!0===r){const e=i[0][t];void 0!==e?this.uvs.push(e[0],e[1],e[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",t),this.uvs.push(new E,new E,new E));}if(!0===s){const e=i[1][t];void 0!==e?this.uvs2.push(e[0],e[1],e[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",t),this.uvs2.push(new E,new E,new E));}for(let t=0;t<a;t++){const e=o[t].vertices;l[t].data.push(e[g.a],e[g.b],e[g.c]);}for(let e=0;e<h;e++){const n=c[e].vertexNormals[t];u[e].data.push(n.a,n.b,n.c);}m&&this.skinIndices.push(d[g.a],d[g.b],d[g.c]),f&&this.skinWeights.push(p[g.a],p[g.b],p[g.c]);}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this}}function we(t){if(0===t.length)return -1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}let _e=1;const Me=new ht,Se=new Nt,Te=new F,Ee=new k,Ae=new k,Le=new F;function Re(){Object.defineProperty(this,"id",{value:_e+=2}),this.uuid=T.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={};}Re.prototype=Object.assign(Object.create(_.prototype),{constructor:Re,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(we(t)>65535?ve:fe)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:void 0!==n?n:0});},clearGroups:function(){this.groups=[];},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e;},applyMatrix4:function(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const e=(new A).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0;}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(t){return Me.makeRotationX(t),this.applyMatrix4(Me),this},rotateY:function(t){return Me.makeRotationY(t),this.applyMatrix4(Me),this},rotateZ:function(t){return Me.makeRotationZ(t),this.applyMatrix4(Me),this},translate:function(t,e,n){return Me.makeTranslation(t,e,n),this.applyMatrix4(Me),this},scale:function(t,e,n){return Me.makeScale(t,e,n),this.applyMatrix4(Me),this},lookAt:function(t){return Se.lookAt(t),Se.updateMatrix(),this.applyMatrix4(Se.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Te).negate(),this.translate(Te.x,Te.y,Te.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const t=new ye(3*e.vertices.length,3),n=new ye(3*e.colors.length,3);if(this.setAttribute("position",t.copyVector3sArray(e.vertices)),this.setAttribute("color",n.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const t=new ye(e.lineDistances.length,1);this.setAttribute("lineDistance",t.copyArray(e.lineDistances));}null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone());}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];e.push(i.x,i.y,i.z||0);}return this.setAttribute("position",new ye(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let t=e.__directGeometry;if(!0===e.elementsNeedUpdate&&(t=void 0,e.elementsNeedUpdate=!1),void 0===t)return this.fromGeometry(e);t.verticesNeedUpdate=e.verticesNeedUpdate,t.normalsNeedUpdate=e.normalsNeedUpdate,t.colorsNeedUpdate=e.colorsNeedUpdate,t.uvsNeedUpdate=e.uvsNeedUpdate,t.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=t;}if(!0===e.verticesNeedUpdate){const t=this.attributes.position;void 0!==t&&(t.copyVector3sArray(e.vertices),t.needsUpdate=!0),e.verticesNeedUpdate=!1;}if(!0===e.normalsNeedUpdate){const t=this.attributes.normal;void 0!==t&&(t.copyVector3sArray(e.normals),t.needsUpdate=!0),e.normalsNeedUpdate=!1;}if(!0===e.colorsNeedUpdate){const t=this.attributes.color;void 0!==t&&(t.copyColorsArray(e.colors),t.needsUpdate=!0),e.colorsNeedUpdate=!1;}if(e.uvsNeedUpdate){const t=this.attributes.uv;void 0!==t&&(t.copyVector2sArray(e.uvs),t.needsUpdate=!0),e.uvsNeedUpdate=!1;}if(e.lineDistancesNeedUpdate){const t=this.attributes.lineDistance;void 0!==t&&(t.copyArray(e.lineDistances),t.needsUpdate=!0),e.lineDistancesNeedUpdate=!1;}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=(new be).fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(3*t.vertices.length);if(this.setAttribute("position",new he(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const e=new Float32Array(3*t.normals.length);this.setAttribute("normal",new he(e,3).copyVector3sArray(t.normals));}if(t.colors.length>0){const e=new Float32Array(3*t.colors.length);this.setAttribute("color",new he(e,3).copyColorsArray(t.colors));}if(t.uvs.length>0){const e=new Float32Array(2*t.uvs.length);this.setAttribute("uv",new he(e,2).copyVector2sArray(t.uvs));}if(t.uvs2.length>0){const e=new Float32Array(2*t.uvs2.length);this.setAttribute("uv2",new he(e,2).copyVector2sArray(t.uvs2));}this.groups=t.groups;for(const e in t.morphTargets){const n=[],i=t.morphTargets[e];for(let t=0,e=i.length;t<e;t++){const e=i[t],r=new ye(3*e.data.length,3);r.name=e.name,n.push(r.copyVector3sArray(e.data));}this.morphAttributes[e]=n;}if(t.skinIndices.length>0){const e=new ye(4*t.skinIndices.length,4);this.setAttribute("skinIndex",e.copyVector4sArray(t.skinIndices));}if(t.skinWeights.length>0){const e=new ye(4*t.skinWeights.length,4);this.setAttribute("skinWeight",e.copyVector4sArray(t.skinWeights));}return null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new k);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ee.setFromBufferAttribute(n),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max));}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new et);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new F,1/0);if(t){const n=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ae.setFromBufferAttribute(n),this.morphTargetsRelative?(Le.addVectors(Ee.min,Ae.min),Ee.expandByPoint(Le),Le.addVectors(Ee.max,Ae.max),Ee.expandByPoint(Le)):(Ee.expandByPoint(Ae.min),Ee.expandByPoint(Ae.max));}Ee.getCenter(n);let i=0;for(let e=0,r=t.count;e<r;e++)Le.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],o=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)Le.fromBufferAttribute(s,e),o&&(Te.fromBufferAttribute(t,e),Le.add(Te)),i=Math.max(i,n.distanceToSquared(Le));}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let n=this.getAttribute("normal");if(void 0===n)n=new he(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0);const i=new F,r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),o.fromBufferAttribute(n,d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),o.add(c),a.add(c),l.add(c),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z);}else for(let t=0,o=e.count;t<o;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0;}},merge:function(t,e){if(!t||!t.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(void 0===t.attributes[i])continue;const r=n[i].array,s=t.attributes[i],o=s.array,a=s.itemSize*e,l=Math.min(o.length,r.length-a);for(let t=0,e=a;t<l;t++,e++)r[e]=o[t];}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z);},toNonIndexed:function(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i);let o=0,a=0;for(let t=0,r=e.length;t<r;t++){o=e[t]*i;for(let t=0;t<i;t++)s[a++]=n[o++];}return new he(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const r in i){const s=t(i[r],n);e.setAttribute(r,s);}const r=this.morphAttributes;for(const i in r){const s=[],o=r[i];for(let e=0,i=o.length;e<i;e++){const i=t(o[e],n);s.push(i);}e.morphAttributes[i]=s;}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,n=s.length;t<n;t++){const n=s[t];e.addGroup(n.start,n.count,n.materialIndex);}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const e in n){const i=n[e],r=i.toJSON(t.data);""!==i.name&&(r.name=i.name),t.data.attributes[e]=r;}const i={};let r=!1;for(const e in this.morphAttributes){const n=this.morphAttributes[e],s=[];for(let e=0,i=n.length;e<i;e++){const i=n[e],r=i.toJSON(t.data);""!==i.name&&(r.name=i.name),s.push(r);}s.length>0&&(i[e]=s,r=!0);}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return null!==o&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return (new Re).copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;null!==n&&this.setIndex(n.clone(e));const i=t.attributes;for(const t in i){const n=i[t];this.setAttribute(t,n.clone(e));}const r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let t=0,r=i.length;t<r;t++)n.push(i[t].clone(e));this.morphAttributes[t]=n;}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex);}const o=t.boundingBox;null!==o&&(this.boundingBox=o.clone());const a=t.boundingSphere;return null!==a&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"});}});const Ce=new ht,Pe=new ct,Oe=new et,Ie=new F,De=new F,Ne=new F,Fe=new F,Ue=new F,ze=new F,ke=new F,Be=new F,He=new F,Ge=new E,Ve=new E,je=new E,We=new F,qe=new F;function Xe(t,e){Nt.call(this),this.type="Mesh",this.geometry=void 0!==t?t:new Re,this.material=void 0!==e?e:new ae,this.updateMorphTargets();}function Ye(t,e,n,i,r,s,o,a){let l;if(l=1===e.side?i.intersectTriangle(o,s,r,!0,a):i.intersectTriangle(r,s,o,2!==e.side,a),null===l)return null;qe.copy(a),qe.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qe);return c<n.near||c>n.far?null:{distance:c,point:qe.clone(),object:t}}function Je(t,e,n,i,r,s,o,a,l,c,h,u){Ie.fromBufferAttribute(r,c),De.fromBufferAttribute(r,h),Ne.fromBufferAttribute(r,u);const d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){ke.set(0,0,0),Be.set(0,0,0),He.set(0,0,0);for(let t=0,e=s.length;t<e;t++){const e=d[t],n=s[t];0!==e&&(Fe.fromBufferAttribute(n,c),Ue.fromBufferAttribute(n,h),ze.fromBufferAttribute(n,u),o?(ke.addScaledVector(Fe,e),Be.addScaledVector(Ue,e),He.addScaledVector(ze,e)):(ke.addScaledVector(Fe.sub(Ie),e),Be.addScaledVector(Ue.sub(De),e),He.addScaledVector(ze.sub(Ne),e)));}Ie.add(ke),De.add(Be),Ne.add(He);}t.isSkinnedMesh&&(t.boneTransform(c,Ie),t.boneTransform(h,De),t.boneTransform(u,Ne));const p=Ye(t,e,n,i,Ie,De,Ne,We);if(p){a&&(Ge.fromBufferAttribute(a,c),Ve.fromBufferAttribute(a,h),je.fromBufferAttribute(a,u),p.uv=Zt.getUV(We,Ie,De,Ne,Ge,Ve,je,new E)),l&&(Ge.fromBufferAttribute(l,c),Ve.fromBufferAttribute(l,h),je.fromBufferAttribute(l,u),p.uv2=Zt.getUV(We,Ie,De,Ne,Ge,Ve,je,new E));const t=new re(c,h,u);Zt.getNormal(Ie,De,Ne,t.normal),p.face=t;}return p}Xe.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Xe,isMesh:!0,copy:function(t){return Nt.prototype.copy.call(this,t),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const t=e[n[0]];if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e;}}}}else {const e=t.morphTargets;void 0!==e&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(void 0===i)return;if(null===n.boundingSphere&&n.computeBoundingSphere(),Oe.copy(n.boundingSphere),Oe.applyMatrix4(r),!1===t.ray.intersectsSphere(Oe))return;if(Ce.getInverse(r),Pe.copy(t.ray).applyMatrix4(Ce),null!==n.boundingBox&&!1===Pe.intersectsBox(n.boundingBox))return;let s;if(n.isBufferGeometry){const r=n.index,o=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(null!==r)if(Array.isArray(i))for(let n=0,p=u.length;n<p;n++){const p=u[n],m=i[p.materialIndex];for(let n=Math.max(p.start,d.start),i=Math.min(p.start+p.count,d.start+d.count);n<i;n+=3){const i=r.getX(n),u=r.getX(n+1),d=r.getX(n+2);s=Je(this,m,t,Pe,o,a,l,c,h,i,u,d),s&&(s.faceIndex=Math.floor(n/3),s.face.materialIndex=p.materialIndex,e.push(s));}}else {for(let n=Math.max(0,d.start),u=Math.min(r.count,d.start+d.count);n<u;n+=3){const u=r.getX(n),d=r.getX(n+1),p=r.getX(n+2);s=Je(this,i,t,Pe,o,a,l,c,h,u,d,p),s&&(s.faceIndex=Math.floor(n/3),e.push(s));}}else if(void 0!==o)if(Array.isArray(i))for(let n=0,r=u.length;n<r;n++){const r=u[n],p=i[r.materialIndex];for(let n=Math.max(r.start,d.start),i=Math.min(r.start+r.count,d.start+d.count);n<i;n+=3){s=Je(this,p,t,Pe,o,a,l,c,h,n,n+1,n+2),s&&(s.faceIndex=Math.floor(n/3),s.face.materialIndex=r.materialIndex,e.push(s));}}else {for(let n=Math.max(0,d.start),r=Math.min(o.count,d.start+d.count);n<r;n+=3){s=Je(this,i,t,Pe,o,a,l,c,h,n,n+1,n+2),s&&(s.faceIndex=Math.floor(n/3),e.push(s));}}}else if(n.isGeometry){const r=Array.isArray(i),o=n.vertices,a=n.faces;let l;const c=n.faceVertexUvs[0];c.length>0&&(l=c);for(let n=0,c=a.length;n<c;n++){const c=a[n],h=r?i[c.materialIndex]:i;if(void 0===h)continue;const u=o[c.a],d=o[c.b],p=o[c.c];if(s=Ye(this,h,t,Pe,u,d,p,We),s){if(l&&l[n]){const t=l[n];Ge.copy(t[0]),Ve.copy(t[1]),je.copy(t[2]),s.uv=Zt.getUV(We,u,d,p,Ge,Ve,je,new E);}s.face=c,s.faceIndex=n,e.push(s);}}}}});class Ze extends Re{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const a=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,n,i,r,s,p,m,f,g,v){const y=s/f,x=p/g,b=s/2,w=p/2,_=m/2,M=f+1,S=g+1;let T=0,E=0;const A=new F;for(let s=0;s<S;s++){const o=s*x-w;for(let a=0;a<M;a++){const u=a*y-b;A[t]=u*i,A[e]=o*r,A[n]=_,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(a/f),h.push(1-s/g),T+=1;}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=u+e+M*t,i=u+e+M*(t+1),r=u+(e+1)+M*(t+1),s=u+(e+1)+M*t;a.push(n,i,s),a.push(i,r,s),E+=6;}o.addGroup(d,E,v),d+=E,u+=T;}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2));}}function Ke(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r;}}return e}function Qe(t){const e={};for(let n=0;n<t.length;n++){const i=Ke(t[n]);for(const t in i)e[t]=i[t];}return e}const $e={clone:Ke,merge:Qe};function tn(t){oe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t));}function en(){Nt.call(this),this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht;}function nn(t,e,n,i){en.call(this),this.type="PerspectiveCamera",this.fov=void 0!==t?t:50,this.zoom=1,this.near=void 0!==n?n:.1,this.far=void 0!==i?i:2e3,this.focus=10,this.aspect=void 0!==e?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix();}tn.prototype=Object.create(oe.prototype),tn.prototype.constructor=tn,tn.prototype.isShaderMaterial=!0,tn.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ke(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},tn.prototype.toJSON=function(t){const e=oe.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:"m4",value:i.toArray()}:e.uniforms[n]={value:i};}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const t in this.extensions)!0===this.extensions[t]&&(n[t]=!0);return Object.keys(n).length>0&&(e.extensions=n),e},en.prototype=Object.assign(Object.create(Nt.prototype),{constructor:en,isCamera:!0,copy:function(t,e){return Nt.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new F),this.updateMatrixWorld(!0);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){Nt.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld);},updateWorldMatrix:function(t,e){Nt.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.getInverse(this.matrixWorld);},clone:function(){return (new this.constructor).copy(this)}}),nn.prototype=Object.assign(Object.create(en.prototype),{constructor:nn,isPerspectiveCamera:!0,copy:function(t,e){return en.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=2*T.RAD2DEG*Math.atan(e),this.updateProjectionMatrix();},getFocalLength:function(){const t=Math.tan(.5*T.DEG2RAD*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*T.RAD2DEG*Math.atan(Math.tan(.5*T.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(.5*T.DEG2RAD*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,o=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/o,i*=s.width/t,n*=s.height/o;}const o=this.filmOffset;0!==o&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function(t){const e=Nt.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});function rn(t,e,n){if(Nt.call(this),this.type="CubeCamera",!0!==n.isWebGLCubeRenderTarget)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new nn(90,1,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const r=new nn(90,1,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(-1,0,0)),this.add(r);const s=new nn(90,1,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new F(0,1,0)),this.add(s);const o=new nn(90,1,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new F(0,-1,0)),this.add(o);const a=new nn(90,1,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new F(0,0,1)),this.add(a);const l=new nn(90,1,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,-1)),this.add(l),this.update=function(t,e){null===this.parent&&this.updateMatrixWorld();const c=t.xr.enabled,h=t.getRenderTarget();t.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=u,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.xr.enabled=c;},this.clear=function(t,e,i,r){const s=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(n,s),t.clear(e,i,r);t.setRenderTarget(s);};}function sn(t,e,n,i,r,s,o,a,l,c){t=void 0!==t?t:[],e=void 0!==e?e:301,o=void 0!==o?o:1022,P.call(this,t,e,n,i,r,s,o,a,l,c),this.flipY=!1,this._needsFlipEnvMap=!0;}function on(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),I.call(this,t,t,e),e=e||{},this.texture=new sn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1;}function an(t,e,n,i,r,s,o,a,l,c,h,u){P.call(this,null,s,o,a,l,c,i,r,h,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=void 0!==l?l:1003,this.minFilter=void 0!==c?c:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0;}rn.prototype=Object.create(Nt.prototype),rn.prototype.constructor=rn,sn.prototype=Object.create(P.prototype),sn.prototype.constructor=sn,sn.prototype.isCubeTexture=!0,Object.defineProperty(sn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t;}}),on.prototype=Object.create(I.prototype),on.prototype.constructor=on,on.prototype.isWebGLCubeRenderTarget=!0,on.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=1023,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t",fragmentShader:"\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t"},i=new Ze(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Ke(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Xe(i,r),o=e.minFilter;1008===e.minFilter&&(e.minFilter=1006);return new rn(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this},an.prototype=Object.create(P.prototype),an.prototype.constructor=an,an.prototype.isDataTexture=!0;const ln=new et,cn=new F;class hn{constructor(t,e,n,i,r,s){this.planes=[void 0!==t?t:new kt,void 0!==e?e:new kt,void 0!==n?n:new kt,void 0!==i?i:new kt,void 0!==r?r:new kt,void 0!==s?s:new kt];}set(t,e,n,i,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}clone(){return (new this.constructor).copy(this)}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],l=n[5],c=n[6],h=n[7],u=n[8],d=n[9],p=n[10],m=n[11],f=n[12],g=n[13],v=n[14],y=n[15];return e[0].setComponents(o-i,h-a,m-u,y-f).normalize(),e[1].setComponents(o+i,h+a,m+u,y+f).normalize(),e[2].setComponents(o+r,h+l,m+d,y+g).normalize(),e[3].setComponents(o-r,h-l,m-d,y-g).normalize(),e[4].setComponents(o-s,h-c,m-p,y-v).normalize(),e[5].setComponents(o+s,h+c,m+p,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return null===e.boundingSphere&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSprite(t){return ln.center.set(0,0,0),ln.radius=.7071067811865476,ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(n)<i)return !1}return !0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cn.x=i.normal.x>0?t.max.x:t.min.x,cn.y=i.normal.y>0?t.max.y:t.min.y,cn.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cn)<0)return !1}return !0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return !1;return !0}}function un(){let t=null,e=!1,n=null,i=null;function r(e,s){n(e,s),i=t.requestAnimationFrame(r);}return {start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0);},stop:function(){t.cancelAnimationFrame(i),e=!1;},setAnimationLoop:function(t){n=t;},setContext:function(e){t=e;}}}function dn(t,e){const n=e.isWebGL2,i=new WeakMap;return {get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e));},update:function(e,r){if(e.isGLBufferAttribute){var s=i.get(e);return void((!s||s.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const o=i.get(e);void 0===o?i.set(e,function(e,n){const i=e.array,r=e.usage,s=t.createBuffer();t.bindBuffer(n,s),t.bufferData(n,i,r),e.onUploadCallback();let o=5126;return i instanceof Float32Array?o=5126:i instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):i instanceof Uint16Array?o=5123:i instanceof Int16Array?o=5122:i instanceof Uint32Array?o=5125:i instanceof Int32Array?o=5124:i instanceof Int8Array?o=5120:i instanceof Uint8Array&&(o=5121),{buffer:s,type:o,bytesPerElement:i.BYTES_PER_ELEMENT,version:e.version}}(e,r)):o.version<e.version&&(!function(e,i,r){const s=i.array,o=i.updateRange;t.bindBuffer(r,e),-1===o.count?t.bufferSubData(r,0,s):(n?t.bufferSubData(r,o.offset*s.BYTES_PER_ELEMENT,s,o.offset,o.count):t.bufferSubData(r,o.offset*s.BYTES_PER_ELEMENT,s.subarray(o.offset,o.offset+o.count)),o.count=-1);}(o.buffer,e,r),o.version=e.version);}}}class pn extends Re{constructor(t,e,n,i){super(),this.type="PlaneBufferGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=(t=t||1)/2,s=(e=e||1)/2,o=Math.floor(n)||1,a=Math.floor(i)||1,l=o+1,c=a+1,h=t/o,u=e/a,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let n=0;n<l;n++){const i=n*h-r;p.push(i,-e,0),m.push(0,0,1),f.push(n/o),f.push(1-t/a);}}for(let t=0;t<a;t++)for(let e=0;e<o;e++){const n=e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s);}this.setIndex(d),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(f,2));}}const mn={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmissionmap_fragment:"#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",transmissionmap_pars_fragment:"#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},fn={common:{diffuse:{value:new ie(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new A},uv2Transform:{value:new A},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new E(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new A}},sprite:{diffuse:{value:new ie(15658734)},opacity:{value:1},center:{value:new E(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new A}}},gn={basic:{uniforms:Qe([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.fog]),vertexShader:mn.meshbasic_vert,fragmentShader:mn.meshbasic_frag},lambert:{uniforms:Qe([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.fog,fn.lights,{emissive:{value:new ie(0)}}]),vertexShader:mn.meshlambert_vert,fragmentShader:mn.meshlambert_frag},phong:{uniforms:Qe([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,fn.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:mn.meshphong_vert,fragmentShader:mn.meshphong_frag},standard:{uniforms:Qe([fn.common,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.roughnessmap,fn.metalnessmap,fn.fog,fn.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mn.meshphysical_vert,fragmentShader:mn.meshphysical_frag},toon:{uniforms:Qe([fn.common,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.gradientmap,fn.fog,fn.lights,{emissive:{value:new ie(0)}}]),vertexShader:mn.meshtoon_vert,fragmentShader:mn.meshtoon_frag},matcap:{uniforms:Qe([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,{matcap:{value:null}}]),vertexShader:mn.meshmatcap_vert,fragmentShader:mn.meshmatcap_frag},points:{uniforms:Qe([fn.points,fn.fog]),vertexShader:mn.points_vert,fragmentShader:mn.points_frag},dashed:{uniforms:Qe([fn.common,fn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mn.linedashed_vert,fragmentShader:mn.linedashed_frag},depth:{uniforms:Qe([fn.common,fn.displacementmap]),vertexShader:mn.depth_vert,fragmentShader:mn.depth_frag},normal:{uniforms:Qe([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,{opacity:{value:1}}]),vertexShader:mn.normal_vert,fragmentShader:mn.normal_frag},sprite:{uniforms:Qe([fn.sprite,fn.fog]),vertexShader:mn.sprite_vert,fragmentShader:mn.sprite_frag},background:{uniforms:{uvTransform:{value:new A},t2D:{value:null}},vertexShader:mn.background_vert,fragmentShader:mn.background_frag},cube:{uniforms:Qe([fn.envmap,{opacity:{value:1}}]),vertexShader:mn.cube_vert,fragmentShader:mn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mn.equirect_vert,fragmentShader:mn.equirect_frag},distanceRGBA:{uniforms:Qe([fn.common,fn.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mn.distanceRGBA_vert,fragmentShader:mn.distanceRGBA_frag},shadow:{uniforms:Qe([fn.lights,fn.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:mn.shadow_vert,fragmentShader:mn.shadow_frag}};function vn(t,e,n,i,r){const s=new ie(0);let o,a,l=0,c=null,h=0,u=null;function d(t,e){n.buffers.color.setClear(t.r,t.g,t.b,e,r);}return {getClearColor:function(){return s},setClearColor:function(t,e){s.set(t),l=void 0!==e?e:1,d(s,l);},getClearAlpha:function(){return l},setClearAlpha:function(t){l=t,d(s,l);},render:function(n,r,p,m){let f=!0===r.isScene?r.background:null;f&&f.isTexture&&(f=e.get(f));const g=t.xr,v=g.getSession&&g.getSession();v&&"additive"===v.environmentBlendMode&&(f=null),null===f?d(s,l):f&&f.isColor&&(d(f,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),f&&(f.isCubeTexture||f.isWebGLCubeRenderTarget||306===f.mapping)?(void 0===a&&(a=new Xe(new Ze(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ke(gn.cube.uniforms),vertexShader:gn.cube.vertexShader,fragmentShader:gn.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld);},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),f.isWebGLCubeRenderTarget&&(f=f.texture),a.material.uniforms.envMap.value=f,a.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f._needsFlipEnvMap?-1:1,c===f&&h===f.version&&u===t.toneMapping||(a.material.needsUpdate=!0,c=f,h=f.version,u=t.toneMapping),n.unshift(a,a.geometry,a.material,0,0,null)):f&&f.isTexture&&(void 0===o&&(o=new Xe(new pn(2,2),new tn({name:"BackgroundMaterial",uniforms:Ke(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,!0===f.matrixAutoUpdate&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),c===f&&h===f.version&&u===t.toneMapping||(o.material.needsUpdate=!0,c=f,h=f.version,u=t.toneMapping),n.unshift(o,o.geometry,o.material,0,0,null));}}}function yn(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||null!==s,a={},l=d(null);let c=l;function h(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function u(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function d(t){const e=[],n=[],i=[];for(let t=0;t<r;t++)e[t]=0,n[t]=0,i[t]=0;return {geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function p(){const t=c.newAttributes;for(let e=0,n=t.length;e<n;e++)t[e]=0;}function m(t){f(t,0);}function f(n,r){const s=c.newAttributes,o=c.enabledAttributes,a=c.attributeDivisors;if(s[n]=1,0===o[n]&&(t.enableVertexAttribArray(n),o[n]=1),a[n]!==r){(i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),a[n]=r;}}function g(){const e=c.newAttributes,n=c.enabledAttributes;for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0);}function v(e,n,r,s,o,a){!0!==i.isWebGL2||5124!==r&&5125!==r?t.vertexAttribPointer(e,n,r,s,o,a):t.vertexAttribIPointer(e,n,r,o,a);}function y(){x(),c!==l&&(c=l,h(c.object));}function x(){l.geometry=null,l.program=null,l.wireframe=!1;}return {setup:function(r,l,u,y,x){let b=!1;if(o){const e=function(e,n,r){const o=!0===r.wireframe;let l=a[e.id];void 0===l&&(l={},a[e.id]=l);let c=l[n.id];void 0===c&&(c={},l[n.id]=c);let h=c[o];void 0===h&&(h=d(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[o]=h);return h}(y,u,l);c!==e&&(c=e,h(c.object)),b=function(t,e){const n=c.attributes,i=t.attributes;if(Object.keys(n).length!==Object.keys(i).length)return !0;for(const t in i){const e=n[t],r=i[t];if(void 0===e)return !0;if(e.attribute!==r)return !0;if(e.data!==r.data)return !0}return c.index!==e}(y,x),b&&function(t,e){const n={},i=t.attributes;for(const t in i){const e=i[t],r={};r.attribute=e,e.data&&(r.data=e.data),n[t]=r;}c.attributes=n,c.index=e;}(y,x);}else {const t=!0===l.wireframe;c.geometry===y.id&&c.program===u.id&&c.wireframe===t||(c.geometry=y.id,c.program=u.id,c.wireframe=t,b=!0);}!0===r.isInstancedMesh&&(b=!0),null!==x&&n.update(x,34963),b&&(!function(r,s,o,a){if(!1===i.isWebGL2&&(r.isInstancedMesh||a.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;p();const l=a.attributes,c=o.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const i=c[e];if(i>=0){const s=l[e];if(void 0!==s){const e=s.normalized,r=s.itemSize,o=n.get(s);if(void 0===o)continue;const l=o.buffer,c=o.type,h=o.bytesPerElement;if(s.isInterleavedBufferAttribute){const n=s.data,o=n.stride,u=s.offset;n&&n.isInstancedInterleavedBuffer?(f(i,n.meshPerAttribute),void 0===a._maxInstanceCount&&(a._maxInstanceCount=n.meshPerAttribute*n.count)):m(i),t.bindBuffer(34962,l),v(i,r,c,e,o*h,u*h);}else s.isInstancedBufferAttribute?(f(i,s.meshPerAttribute),void 0===a._maxInstanceCount&&(a._maxInstanceCount=s.meshPerAttribute*s.count)):m(i),t.bindBuffer(34962,l),v(i,r,c,e,0,0);}else if("instanceMatrix"===e){const e=n.get(r.instanceMatrix);if(void 0===e)continue;const s=e.buffer,o=e.type;f(i+0,1),f(i+1,1),f(i+2,1),f(i+3,1),t.bindBuffer(34962,s),t.vertexAttribPointer(i+0,4,o,!1,64,0),t.vertexAttribPointer(i+1,4,o,!1,64,16),t.vertexAttribPointer(i+2,4,o,!1,64,32),t.vertexAttribPointer(i+3,4,o,!1,64,48);}else if("instanceColor"===e){const e=n.get(r.instanceColor);if(void 0===e)continue;const s=e.buffer,o=e.type;f(i,1),t.bindBuffer(34962,s),t.vertexAttribPointer(i,3,o,!1,12,0);}else if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(i,n);break;case 3:t.vertexAttrib3fv(i,n);break;case 4:t.vertexAttrib4fv(i,n);break;default:t.vertexAttrib1fv(i,n);}}}}g();}(r,l,u,y),null!==x&&t.bindBuffer(34963,n.get(x).buffer));},reset:y,resetDefaultState:x,dispose:function(){y();for(const t in a){const e=a[t];for(const t in e){const n=e[t];for(const t in n)u(n[t].object),delete n[t];delete e[t];}delete a[t];}},releaseStatesOfGeometry:function(t){if(void 0===a[t.id])return;const e=a[t.id];for(const t in e){const n=e[t];for(const t in n)u(n[t].object),delete n[t];delete e[t];}delete a[t.id];},releaseStatesOfProgram:function(t){for(const e in a){const n=a[e];if(void 0===n[t.id])continue;const i=n[t.id];for(const t in i)u(i[t].object),delete i[t];delete n[t.id];}},initAttributes:p,enableAttribute:m,disableUnusedAttributes:g}}function xn(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(t){s=t;},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1);},this.renderInstances=function(i,o,a){if(0===a)return;let l,c;if(r)l=t,c="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](s,i,o,a),n.update(o,s,a);};}function bn(t,e,n){let i;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return "highp";e="mediump";}return "mediump"===e&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&t instanceof WebGL2ComputeRenderingContext;let o=void 0!==n.precision?n.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=!0===n.logarithmicDepthBuffer,c=t.getParameter(34930),h=t.getParameter(35660),u=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),m=t.getParameter(36347),f=t.getParameter(36348),g=t.getParameter(36349),v=h>0,y=s||!!e.get("OES_texture_float");return {isWebGL2:s,getMaxAnisotropy:function(){if(void 0!==i)return i;const n=e.get("EXT_texture_filter_anisotropic");return i=null!==n?t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,i},getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&&y,maxSamples:s?t.getParameter(36183):0}}function wn(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kt,a=new A,l={value:null,needsUpdate:!1};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0;}function h(t,n,i,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse;a.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,n=i;e!==s;++e,n+=4)o.copy(t[e]).applyMatrix4(r,a),o.normal.toArray(c,n),c[n+3]=o.constant;}l.value=c,l.needsUpdate=!0;}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e,s){const o=0!==t.length||e||0!==i||r;return r=e,n=h(t,s,0),i=t.length,o},this.beginShadows=function(){s=!0,h(null);},this.endShadows=function(){s=!1,c();},this.setState=function(e,o,a){const u=e.clippingPlanes,d=e.clipIntersection,p=e.clipShadows,m=t.get(e);if(!r||null===u||0===u.length||s&&!p)s?h(null):c();else {const t=s?0:i,e=4*t;let r=m.clippingState||null;l.value=r,r=h(u,o,e,a);for(let t=0;t!==e;++t)r[t]=n[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t;}};}function _n(t){let e=new WeakMap;function n(t,e){return 303===e?t.mapping=301:304===e&&(t.mapping=302),t}return {get:function(i){if(i&&i.isTexture){const r=i.mapping;if(303===r||304===r){if(e.has(i)){return n(e.get(i).texture,i.mapping)}{const r=i.image;if(r&&r.height>0){const s=t.getRenderList(),o=t.getRenderTarget(),a=t.getRenderState(),l=new on(r.height/2);return l.fromEquirectangularTexture(t,i),e.set(i,l),t.setRenderTarget(o),t.setRenderList(s),t.setRenderState(a),n(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap;}}}function Mn(t){const e={};return {has:function(n){if(void 0!==e[n])return null!==e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n);}return e[n]=i,null!==i},get:function(t){return this.has(t)||console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e[t]}}}function Sn(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(t){const a=t.target,l=r.get(a);null!==l.index&&e.remove(l.index);for(const t in l.attributes)e.remove(l.attributes[t]);a.removeEventListener("dispose",o),r.delete(a);const c=s.get(l);c&&(e.remove(c),s.delete(l)),i.releaseStatesOfGeometry(a),!0===a.isInstancedBufferGeometry&&delete a._maxInstanceCount,n.memory.geometries--;}function a(t){const n=[],i=t.index,r=t.attributes.position;let o=0;if(null!==i){const t=i.array;o=i.version;for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i);}}else {const t=r.array;o=r.version;for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2;n.push(t,i,i,r,r,t);}}const a=new(we(n)>65535?ve:fe)(n,1);a.version=o;const l=s.get(t);l&&e.remove(l),s.set(t,a);}return {get:function(t,e){let i=r.get(e);return i||(e.addEventListener("dispose",o),e.isBufferGeometry?i=e:e.isGeometry&&(void 0===e._bufferGeometry&&(e._bufferGeometry=(new Re).setFromObject(t)),i=e._bufferGeometry),r.set(e,i),n.memory.geometries++,i)},update:function(t){const n=t.attributes;for(const t in n)e.update(n[t],34962);const i=t.morphAttributes;for(const t in i){const n=i[t];for(let t=0,i=n.length;t<i;t++)e.update(n[t],34962);}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const n=t.index;null!==n&&e.version<n.version&&a(t);}else a(t);return s.get(t)}}}function Tn(t,e,n,i){const r=i.isWebGL2;let s,o,a;this.setMode=function(t){s=t;},this.setIndex=function(t){o=t.type,a=t.bytesPerElement;},this.render=function(e,i){t.drawElements(s,i,o,e*a),n.update(i,s,1);},this.renderInstances=function(i,l,c){if(0===c)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,l,o,i*a,c),n.update(l,s,c);};}function En(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return {memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0;},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);}}}}function An(t,e){return t[0]-e[0]}function Ln(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Rn(t){const e={},n=new Float32Array(8),i=[];for(let t=0;t<8;t++)i[t]=[t,0];return {update:function(r,s,o,a){const l=r.morphTargetInfluences,c=void 0===l?0:l.length;let h=e[s.id];if(void 0===h){h=[];for(let t=0;t<c;t++)h[t]=[t,0];e[s.id]=h;}for(let t=0;t<c;t++){const e=h[t];e[0]=t,e[1]=l[t];}h.sort(Ln);for(let t=0;t<8;t++)t<c&&h[t][1]?(i[t][0]=h[t][0],i[t][1]=h[t][1]):(i[t][0]=Number.MAX_SAFE_INTEGER,i[t][1]=0);i.sort(An);const u=o.morphTargets&&s.morphAttributes.position,d=o.morphNormals&&s.morphAttributes.normal;let p=0;for(let t=0;t<8;t++){const e=i[t],r=e[0],o=e[1];r!==Number.MAX_SAFE_INTEGER&&o?(u&&s.getAttribute("morphTarget"+t)!==u[r]&&s.setAttribute("morphTarget"+t,u[r]),d&&s.getAttribute("morphNormal"+t)!==d[r]&&s.setAttribute("morphNormal"+t,d[r]),n[t]=o,p+=o):(u&&void 0!==s.getAttribute("morphTarget"+t)&&s.deleteAttribute("morphTarget"+t),d&&void 0!==s.getAttribute("morphNormal"+t)&&s.deleteAttribute("morphNormal"+t),n[t]=0);}const m=s.morphTargetsRelative?1:1-p;a.getUniforms().setValue(t,"morphTargetBaseInfluence",m),a.getUniforms().setValue(t,"morphTargetInfluences",n);}}}function Cn(t,e,n,i){let r=new WeakMap;return {update:function(t){const s=i.render.frame,o=t.geometry,a=e.get(t,o);return r.get(a)!==s&&(o.isGeometry&&a.updateFromObject(t),e.update(a),r.set(a,s)),t.isInstancedMesh&&(n.update(t.instanceMatrix,34962),null!==t.instanceColor&&n.update(t.instanceColor,34962)),a},dispose:function(){r=new WeakMap;}}}function Pn(t,e,n,i){P.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0;}function On(t,e,n,i){P.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0;}gn.physical={uniforms:Qe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new E(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ie(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:mn.meshphysical_vert,fragmentShader:mn.meshphysical_frag},Pn.prototype=Object.create(P.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isDataTexture2DArray=!0,On.prototype=Object.create(P.prototype),On.prototype.constructor=On,On.prototype.isDataTexture3D=!0;const In=new P,Dn=new Pn,Nn=new On,Fn=new sn,Un=[],zn=[],kn=new Float32Array(16),Bn=new Float32Array(9),Hn=new Float32Array(4);function Gn(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Un[r];if(void 0===s&&(s=new Float32Array(r),Un[r]=s),0!==e){i.toArray(s,0);for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r);}return s}function Vn(t,e){if(t.length!==e.length)return !1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return !1;return !0}function jn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n];}function Wn(t,e){let n=zn[e];void 0===n&&(n=new Int32Array(e),zn[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qn(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e);}function Xn(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(Vn(n,e))return;t.uniform2fv(this.addr,e),jn(n,e);}}function Yn(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else {if(Vn(n,e))return;t.uniform3fv(this.addr,e),jn(n,e);}}function Jn(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(Vn(n,e))return;t.uniform4fv(this.addr,e),jn(n,e);}}function Zn(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Vn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jn(n,e);}else {if(Vn(n,i))return;Hn.set(i),t.uniformMatrix2fv(this.addr,!1,Hn),jn(n,i);}}function Kn(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Vn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jn(n,e);}else {if(Vn(n,i))return;Bn.set(i),t.uniformMatrix3fv(this.addr,!1,Bn),jn(n,i);}}function Qn(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Vn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jn(n,e);}else {if(Vn(n,i))return;kn.set(i),t.uniformMatrix4fv(this.addr,!1,kn),jn(n,i);}}function $n(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||In,r);}function ti(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dn,r);}function ei(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nn,r);}function ni(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Fn,r);}function ii(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e);}function ri(t,e){const n=this.cache;Vn(n,e)||(t.uniform2iv(this.addr,e),jn(n,e));}function si(t,e){const n=this.cache;Vn(n,e)||(t.uniform3iv(this.addr,e),jn(n,e));}function oi(t,e){const n=this.cache;Vn(n,e)||(t.uniform4iv(this.addr,e),jn(n,e));}function ai(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e);}function li(t,e){t.uniform1fv(this.addr,e);}function ci(t,e){t.uniform1iv(this.addr,e);}function hi(t,e){t.uniform2iv(this.addr,e);}function ui(t,e){t.uniform3iv(this.addr,e);}function di(t,e){t.uniform4iv(this.addr,e);}function pi(t,e){const n=Gn(e,this.size,2);t.uniform2fv(this.addr,n);}function mi(t,e){const n=Gn(e,this.size,3);t.uniform3fv(this.addr,n);}function fi(t,e){const n=Gn(e,this.size,4);t.uniform4fv(this.addr,n);}function gi(t,e){const n=Gn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n);}function vi(t,e){const n=Gn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n);}function yi(t,e){const n=Gn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n);}function xi(t,e,n){const i=e.length,r=Wn(n,i);t.uniform1iv(this.addr,r);for(let t=0;t!==i;++t)n.safeSetTexture2D(e[t]||In,r[t]);}function bi(t,e,n){const i=e.length,r=Wn(n,i);t.uniform1iv(this.addr,r);for(let t=0;t!==i;++t)n.safeSetTextureCube(e[t]||Fn,r[t]);}function wi(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=function(t){switch(t){case 5126:return qn;case 35664:return Xn;case 35665:return Yn;case 35666:return Jn;case 35674:return Zn;case 35675:return Kn;case 35676:return Qn;case 5124:case 35670:return ii;case 35667:case 35671:return ri;case 35668:case 35672:return si;case 35669:case 35673:return oi;case 5125:return ai;case 35678:case 36198:case 36298:case 36306:case 35682:return $n;case 35679:case 36299:case 36307:return ei;case 35680:case 36300:case 36308:case 36293:return ni;case 36289:case 36303:case 36311:case 36292:return ti}}(e.type);}function _i(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return li;case 35664:return pi;case 35665:return mi;case 35666:return fi;case 35674:return gi;case 35675:return vi;case 35676:return yi;case 5124:case 35670:return ci;case 35667:case 35671:return hi;case 35668:case 35672:return ui;case 35669:case 35673:return di;case 35678:case 36198:case 36298:case 36306:case 35682:return xi;case 35680:case 36300:case 36308:case 36293:return bi}}(e.type);}function Mi(t){this.id=t,this.seq=[],this.map={};}_i.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),jn(e,t);},Mi.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const s=i[r];s.setValue(t,e[s.id],n);}};const Si=/([\w\d_]+)(\])?(\[|\.)?/g;function Ti(t,e){t.seq.push(e),t.map[e.id]=e;}function Ei(t,e,n){const i=t.name,r=i.length;for(Si.lastIndex=0;;){const s=Si.exec(i),o=Si.lastIndex;let a=s[1];const l="]"===s[2],c=s[3];if(l&&(a|=0),void 0===c||"["===c&&o+2===r){Ti(n,void 0===c?new wi(a,t,e):new _i(a,t,e));break}{let t=n.map[a];void 0===t&&(t=new Mi(a),Ti(n,t)),n=t;}}}function Ai(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i);Ei(n,t.getUniformLocation(e,n.name),this);}}function Li(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}Ai.prototype.setValue=function(t,e,n,i){const r=this.map[e];void 0!==r&&r.setValue(t,n,i);},Ai.prototype.setOptional=function(t,e,n){const i=e[n];void 0!==i&&this.setValue(t,n,i);},Ai.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],o=n[s.id];!1!==o.needsUpdate&&s.setValue(t,o.value,i);}},Ai.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const r=t[i];r.id in e&&n.push(r);}return n};let Ri=0;function Ci(t){switch(t){case 3e3:return ["Linear","( value )"];case 3001:return ["sRGB","( value )"];case 3002:return ["RGBE","( value )"];case 3004:return ["RGBM","( value, 7.0 )"];case 3005:return ["RGBM","( value, 16.0 )"];case 3006:return ["RGBD","( value, 256.0 )"];case 3007:return ["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return ["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Pi(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&""===r)return "";return "THREE.WebGLShader: gl.getShaderInfoLog() "+n+"\n"+r+function(t){const e=t.split("\n");for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join("\n")}(t.getShaderSource(e))}function Oi(t,e){const n=Ci(e);return "vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Ii(t,e){const n=Ci(e);return "vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Di(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear";}return "vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ni(t){return ""!==t}function Fi(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ui(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zi=/^[ \t]*#include +<([\w\d./]+)>/gm;function ki(t){return t.replace(zi,Bi)}function Bi(t,e){const n=mn[e];if(void 0===n)throw new Error("Can not resolve #include <"+e+">");return ki(n)}const Hi=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Gi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vi(t){return t.replace(Gi,Wi).replace(Hi,ji)}function ji(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wi(t,e,n,i)}function Wi(t,e,n,i){let r="";for(let t=parseInt(e);t<parseInt(n);t++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function qi(t){let e="precision "+t.precision+" float;\nprecision "+t.precision+" int;";return "highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Xi(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=function(t){let e="SHADOWMAP_TYPE_BASIC";return 1===t.shadowMapType?e="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?e="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(e="SHADOWMAP_TYPE_VSM"),e}(n),c=function(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:case 307:e="ENVMAP_TYPE_CUBE_UV";}return e}(n),h=function(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:case 307:e="ENVMAP_MODE_REFRACTION";}return e}(n),u=function(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";}return e}(n),d=t.gammaFactor>0?t.gammaFactor:1,p=n.isWebGL2?"":function(t){return [t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join("\n")}(n),m=function(t){const e=[];for(const n in t){const i=t[n];!1!==i&&e.push("#define "+n+" "+i);}return e.join("\n")}(s),f=r.createProgram();let g,v,y=n.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawShaderMaterial?(g=[m].filter(Ni).join("\n"),g.length>0&&(g+="\n"),v=[p,m].filter(Ni).join("\n"),v.length>0&&(v+="\n")):(g=[qi(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Ni).join("\n"),v=[p,qi(n),"#define SHADER_NAME "+n.shaderName,m,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==n.toneMapping?"#define TONE_MAPPING":"",0!==n.toneMapping?mn.tonemapping_pars_fragment:"",0!==n.toneMapping?Di("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",mn.encodings_pars_fragment,n.map?Oi("mapTexelToLinear",n.mapEncoding):"",n.matcap?Oi("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Oi("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Oi("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Oi("lightMapTexelToLinear",n.lightMapEncoding):"",Ii("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(Ni).join("\n")),o=ki(o),o=Fi(o,n),o=Ui(o,n),a=ki(a),a=Fi(a,n),a=Ui(a,n),o=Vi(o),a=Vi(a),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(y="#version 300 es\n",g=["#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+g,v=["#define varying in","300 es"===n.glslVersion?"":"out highp vec4 pc_fragColor;","300 es"===n.glslVersion?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+v);const x=y+v+a,b=Li(r,35633,y+g+o),w=Li(r,35632,x);if(r.attachShader(f,b),r.attachShader(f,w),void 0!==n.index0AttributeName?r.bindAttribLocation(f,0,n.index0AttributeName):!0===n.morphTargets&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),t.debug.checkShaderErrors){const t=r.getProgramInfoLog(f).trim(),e=r.getShaderInfoLog(b).trim(),n=r.getShaderInfoLog(w).trim();let i=!0,s=!0;if(!1===r.getProgramParameter(f,35714)){i=!1;const e=Pi(r,b,"vertex"),n=Pi(r,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(f,35715),"gl.getProgramInfoLog",t,e,n);}else ""!==t?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",t):""!==e&&""!==n||(s=!1);s&&(this.diagnostics={runnable:i,programLog:t,vertexShader:{log:e,prefix:g},fragmentShader:{log:n,prefix:v}});}let _,M;return r.deleteShader(b),r.deleteShader(w),this.getUniforms=function(){return void 0===_&&(_=new Ai(r,f)),_},this.getAttributes=function(){return void 0===M&&(M=function(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const i=t.getActiveAttrib(e,r).name;n[i]=t.getAttribLocation(e,i);}return n}(r,f)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0;},this.name=n.shaderName,this.id=Ri++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}function Yi(t,e,n,i,r,s){const o=[],a=i.isWebGL2,l=i.logarithmicDepthBuffer,c=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function f(t){let e;return t?t.isTexture?e=t.encoding:t.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),e=t.texture.encoding):e=3e3,e}return {getParameters:function(r,o,m,g,v){const y=g.fog,x=r.isMeshStandardMaterial?g.environment:null,b=e.get(r.envMap||x),w=p[r.type],_=v.isSkinnedMesh?function(t){const e=t.skeleton.bones;if(c)return 1024;{const t=h,n=Math.floor((t-20)/4),i=Math.min(n,e.length);return i<e.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+e.length+" bones. This GPU supports "+i+"."),0):i}}(v):0;let M,S;if(null!==r.precision&&(d=i.getMaxPrecision(r.precision),d!==r.precision&&console.warn("THREE.WebGLProgram.getParameters:",r.precision,"not supported, using",d,"instead.")),w){const t=gn[w];M=t.vertexShader,S=t.fragmentShader;}else M=r.vertexShader,S=r.fragmentShader;const T=t.getRenderTarget();return {isWebGL2:a,shaderID:w,shaderName:r.type,vertexShader:M,fragmentShader:S,defines:r.defines,isRawShaderMaterial:!0===r.isRawShaderMaterial,glslVersion:r.glslVersion,precision:d,instancing:!0===v.isInstancedMesh,instancingColor:!0===v.isInstancedMesh&&null!==v.instanceColor,supportsVertexTextures:u,outputEncoding:null!==T?f(T.texture):t.outputEncoding,map:!!r.map,mapEncoding:f(r.map),matcap:!!r.matcap,matcapEncoding:f(r.matcap),envMap:!!b,envMapMode:b&&b.mapping,envMapEncoding:f(b),envMapCubeUV:!!b&&(306===b.mapping||307===b.mapping),lightMap:!!r.lightMap,lightMapEncoding:f(r.lightMap),aoMap:!!r.aoMap,emissiveMap:!!r.emissiveMap,emissiveMapEncoding:f(r.emissiveMap),bumpMap:!!r.bumpMap,normalMap:!!r.normalMap,objectSpaceNormalMap:1===r.normalMapType,tangentSpaceNormalMap:0===r.normalMapType,clearcoatMap:!!r.clearcoatMap,clearcoatRoughnessMap:!!r.clearcoatRoughnessMap,clearcoatNormalMap:!!r.clearcoatNormalMap,displacementMap:!!r.displacementMap,roughnessMap:!!r.roughnessMap,metalnessMap:!!r.metalnessMap,specularMap:!!r.specularMap,alphaMap:!!r.alphaMap,gradientMap:!!r.gradientMap,sheen:!!r.sheen,transmissionMap:!!r.transmissionMap,combine:r.combine,vertexTangents:r.normalMap&&r.vertexTangents,vertexColors:r.vertexColors,vertexUvs:!!(r.map||r.bumpMap||r.normalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalnessMap||r.clearcoatMap||r.clearcoatRoughnessMap||r.clearcoatNormalMap||r.displacementMap||r.transmissionMap),uvsVertexOnly:!(r.map||r.bumpMap||r.normalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalnessMap||r.clearcoatNormalMap||r.transmissionMap||!r.displacementMap),fog:!!y,useFog:r.fog,fogExp2:y&&y.isFogExp2,flatShading:r.flatShading,sizeAttenuation:r.sizeAttenuation,logarithmicDepthBuffer:l,skinning:r.skinning&&_>0,maxBones:_,useVertexTexture:c,morphTargets:r.morphTargets,morphNormals:r.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:r.dithering,shadowMapEnabled:t.shadowMap.enabled&&m.length>0,shadowMapType:t.shadowMap.type,toneMapping:r.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:r.premultipliedAlpha,alphaTest:r.alphaTest,doubleSided:2===r.side,flipSided:1===r.side,depthPacking:void 0!==r.depthPacking&&r.depthPacking,index0AttributeName:r.index0AttributeName,extensionDerivatives:r.extensions&&r.extensions.derivatives,extensionFragDepth:r.extensions&&r.extensions.fragDepth,extensionDrawBuffers:r.extensions&&r.extensions.drawBuffers,extensionShaderTextureLOD:r.extensions&&r.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:r.customProgramCacheKey()}},getProgramCacheKey:function(e){const n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.fragmentShader),n.push(e.vertexShader)),void 0!==e.defines)for(const t in e.defines)n.push(t),n.push(e.defines[t]);if(!1===e.isRawShaderMaterial){for(let t=0;t<m.length;t++)n.push(e[m[t]]);n.push(t.outputEncoding),n.push(t.gammaFactor);}return n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){const e=p[t.type];let n;if(e){const t=gn[e];n=$e.clone(t.uniforms);}else n=t.uniforms;return n},acquireProgram:function(e,n){let i;for(let t=0,e=o.length;t<e;t++){const e=o[t];if(e.cacheKey===n){i=e,++i.usedTimes;break}}return void 0===i&&(i=new Xi(t,n,e,r),o.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){const e=o.indexOf(t);o[e]=o[o.length-1],o.pop(),t.destroy();}},programs:o}}function Ji(){let t=new WeakMap;return {get:function(e){let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e);},update:function(e,n,i){t.get(e)[n]=i;},dispose:function(){t=new WeakMap;}}}function Zi(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ki(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qi(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(i,r,o,a,l,c){let h=e[n];const u=t.get(o);return void 0===h?(h={id:i.id,object:i,geometry:r,material:o,program:u.program||s,groupOrder:a,renderOrder:i.renderOrder,z:l,group:c},e[n]=h):(h.id=i.id,h.object=i,h.geometry=r,h.material=o,h.program=u.program||s,h.groupOrder=a,h.renderOrder=i.renderOrder,h.z=l,h.group=c),n++,h}return {opaque:i,transparent:r,init:function(){n=0,i.length=0,r.length=0;},push:function(t,e,n,s,a,l){const c=o(t,e,n,s,a,l);(!0===n.transparent?r:i).push(c);},unshift:function(t,e,n,s,a,l){const c=o(t,e,n,s,a,l);(!0===n.transparent?r:i).unshift(c);},finish:function(){for(let t=n,i=e.length;t<i;t++){const n=e[t];if(null===n.id)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.program=null,n.group=null;}},sort:function(t,e){i.length>1&&i.sort(t||Zi),r.length>1&&r.sort(e||Ki);}}}function $i(t){let e=new WeakMap;return {get:function(n,i){const r=e.get(n);let s;return void 0===r?(s=new Qi(t),e.set(n,new WeakMap),e.get(n).set(i,s)):(s=r.get(i),void 0===s&&(s=new Qi(t),r.set(i,s))),s},dispose:function(){e=new WeakMap;}}}function tr(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new ie};break;case"SpotLight":n={position:new F,direction:new F,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new F,halfWidth:new F,halfHeight:new F};}return t[e.id]=n,n}}}let er=0;function nr(t,e){return (e.castShadow?1:0)-(t.castShadow?1:0)}function ir(){const t=new tr,e=function(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new E,shadowCameraNear:1,shadowCameraFar:1e3};}return t[e.id]=n,n}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let t=0;t<9;t++)n.probe.push(new F);const i=new F,r=new ht,s=new ht;return {setup:function(o,a,l){let c=0,h=0,u=0;for(let t=0;t<9;t++)n.probe[t].set(0,0,0);let d=0,p=0,m=0,f=0,g=0,v=0,y=0,x=0;const b=l.matrixWorldInverse;o.sort(nr);for(let a=0,l=o.length;a<l;a++){const l=o[a],w=l.color,_=l.intensity,M=l.distance,S=l.shadow&&l.shadow.map?l.shadow.map.texture:null;if(l.isAmbientLight)c+=w.r*_,h+=w.g*_,u+=w.b*_;else if(l.isLightProbe)for(let t=0;t<9;t++)n.probe[t].addScaledVector(l.sh.coefficients[t],_);else if(l.isDirectionalLight){const r=t.get(l);if(r.color.copy(l.color).multiplyScalar(l.intensity),r.direction.setFromMatrixPosition(l.matrixWorld),i.setFromMatrixPosition(l.target.matrixWorld),r.direction.sub(i),r.direction.transformDirection(b),l.castShadow){const t=l.shadow,i=e.get(l);i.shadowBias=t.bias,i.shadowNormalBias=t.normalBias,i.shadowRadius=t.radius,i.shadowMapSize=t.mapSize,n.directionalShadow[d]=i,n.directionalShadowMap[d]=S,n.directionalShadowMatrix[d]=l.shadow.matrix,v++;}n.directional[d]=r,d++;}else if(l.isSpotLight){const r=t.get(l);if(r.position.setFromMatrixPosition(l.matrixWorld),r.position.applyMatrix4(b),r.color.copy(w).multiplyScalar(_),r.distance=M,r.direction.setFromMatrixPosition(l.matrixWorld),i.setFromMatrixPosition(l.target.matrixWorld),r.direction.sub(i),r.direction.transformDirection(b),r.coneCos=Math.cos(l.angle),r.penumbraCos=Math.cos(l.angle*(1-l.penumbra)),r.decay=l.decay,l.castShadow){const t=l.shadow,i=e.get(l);i.shadowBias=t.bias,i.shadowNormalBias=t.normalBias,i.shadowRadius=t.radius,i.shadowMapSize=t.mapSize,n.spotShadow[m]=i,n.spotShadowMap[m]=S,n.spotShadowMatrix[m]=l.shadow.matrix,x++;}n.spot[m]=r,m++;}else if(l.isRectAreaLight){const e=t.get(l);e.color.copy(w).multiplyScalar(_),e.position.setFromMatrixPosition(l.matrixWorld),e.position.applyMatrix4(b),s.identity(),r.copy(l.matrixWorld),r.premultiply(b),s.extractRotation(r),e.halfWidth.set(.5*l.width,0,0),e.halfHeight.set(0,.5*l.height,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),n.rectArea[f]=e,f++;}else if(l.isPointLight){const i=t.get(l);if(i.position.setFromMatrixPosition(l.matrixWorld),i.position.applyMatrix4(b),i.color.copy(l.color).multiplyScalar(l.intensity),i.distance=l.distance,i.decay=l.decay,l.castShadow){const t=l.shadow,i=e.get(l);i.shadowBias=t.bias,i.shadowNormalBias=t.normalBias,i.shadowRadius=t.radius,i.shadowMapSize=t.mapSize,i.shadowCameraNear=t.camera.near,i.shadowCameraFar=t.camera.far,n.pointShadow[p]=i,n.pointShadowMap[p]=S,n.pointShadowMatrix[p]=l.shadow.matrix,y++;}n.point[p]=i,p++;}else if(l.isHemisphereLight){const e=t.get(l);e.direction.setFromMatrixPosition(l.matrixWorld),e.direction.transformDirection(b),e.direction.normalize(),e.skyColor.copy(l.color).multiplyScalar(_),e.groundColor.copy(l.groundColor).multiplyScalar(_),n.hemi[g]=e,g++;}}f>0&&(n.rectAreaLTC1=fn.LTC_1,n.rectAreaLTC2=fn.LTC_2),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;const w=n.hash;w.directionalLength===d&&w.pointLength===p&&w.spotLength===m&&w.rectAreaLength===f&&w.hemiLength===g&&w.numDirectionalShadows===v&&w.numPointShadows===y&&w.numSpotShadows===x||(n.directional.length=d,n.spot.length=m,n.rectArea.length=f,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotShadowMatrix.length=x,w.directionalLength=d,w.pointLength=p,w.spotLength=m,w.rectAreaLength=f,w.hemiLength=g,w.numDirectionalShadows=v,w.numPointShadows=y,w.numSpotShadows=x,n.version=er++);},state:n}}function rr(){const t=new ir,e=[],n=[];return {init:function(){e.length=0,n.length=0;},state:{lightsArray:e,shadowsArray:n,lights:t},setupLights:function(i){t.setup(e,n,i);},pushLight:function(t){e.push(t);},pushShadow:function(t){n.push(t);}}}function sr(){let t=new WeakMap;return {get:function(e,n){let i;return !1===t.has(e)?(i=new rr,t.set(e,new WeakMap),t.get(e).set(n,i)):!1===t.get(e).has(n)?(i=new rr,t.get(e).set(n,i)):i=t.get(e).get(n),i},dispose:function(){t=new WeakMap;}}}function or(t){oe.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t);}function ar(t){oe.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t);}or.prototype=Object.create(oe.prototype),or.prototype.constructor=or,or.prototype.isMeshDepthMaterial=!0,or.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},ar.prototype=Object.create(oe.prototype),ar.prototype.constructor=ar,ar.prototype.isMeshDistanceMaterial=!0,ar.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};function lr(t,e,n){let i=new hn;const r=new E,s=new E,o=new O,a=[],l=[],c={},h={0:1,1:0,2:2},u=new tn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new E},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),d=u.clone();d.defines.HORIZONAL_PASS=1;const p=new Re;p.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xe(p,u),f=this;function g(n,i){const r=e.update(m);u.uniforms.shadow_pass.value=n.map.texture,u.uniforms.resolution.value=n.mapSize,u.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,r,u,m,null),d.uniforms.shadow_pass.value=n.mapPass.texture,d.uniforms.resolution.value=n.mapSize,d.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,r,d,m,null);}function v(t,e,n){const i=t<<0|e<<1|n<<2;let r=a[i];return void 0===r&&(r=new or({depthPacking:3201,morphTargets:t,skinning:e}),a[i]=r),r}function y(t,e,n){const i=t<<0|e<<1|n<<2;let r=l[i];return void 0===r&&(r=new ar({morphTargets:t,skinning:e}),l[i]=r),r}function x(e,n,i,r,s,o,a){let l=null,u=v,d=e.customDepthMaterial;if(!0===r.isPointLight&&(u=y,d=e.customDistanceMaterial),void 0===d){let t=!1;!0===i.morphTargets&&(t=n.morphAttributes&&n.morphAttributes.position&&n.morphAttributes.position.length>0);let r=!1;!0===e.isSkinnedMesh&&(!0===i.skinning?r=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",e));l=u(t,r,!0===e.isInstancedMesh);}else l=d;if(t.localClippingEnabled&&!0===i.clipShadows&&0!==i.clippingPlanes.length){const t=l.uuid,e=i.uuid;let n=c[t];void 0===n&&(n={},c[t]=n);let r=n[e];void 0===r&&(r=l.clone(),n[e]=r),l=r;}return l.visible=i.visible,l.wireframe=i.wireframe,l.side=3===a?null!==i.shadowSide?i.shadowSide:i.side:null!==i.shadowSide?i.shadowSide:h[i.side],l.clipShadows=i.clipShadows,l.clippingPlanes=i.clippingPlanes,l.clipIntersection=i.clipIntersection,l.wireframeLinewidth=i.wireframeLinewidth,l.linewidth=i.linewidth,!0===r.isPointLight&&!0===l.isMeshDistanceMaterial&&(l.referencePosition.setFromMatrixPosition(r.matrixWorld),l.nearDistance=s,l.farDistance=o),l}function b(n,r,s,o,a){if(!1===n.visible)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&3===a)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld);const i=e.update(n),r=n.material;if(Array.isArray(r)){const e=i.groups;for(let l=0,c=e.length;l<c;l++){const c=e[l],h=r[c.materialIndex];if(h&&h.visible){const e=x(n,i,h,o,s.near,s.far,a);t.renderBufferDirect(s,null,i,e,n,c);}}}else if(r.visible){const e=x(n,i,r,o,s.near,s.far,a);t.renderBufferDirect(s,null,i,e,n,null);}}const l=n.children;for(let t=0,e=l.length;t<e;t++)b(l[t],r,s,o,a);}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(e,a,l){if(!1===f.enabled)return;if(!1===f.autoUpdate&&!1===f.needsUpdate)return;if(0===e.length)return;const c=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),d=t.state;d.setBlending(0),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);for(let c=0,h=e.length;c<h;c++){const h=e[c],u=h.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",h,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;r.copy(u.mapSize);const p=u.getFrameExtents();if(r.multiply(p),s.copy(u.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/p.x),r.x=s.x*p.x,u.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/p.y),r.y=s.y*p.y,u.mapSize.y=s.y)),null===u.map&&!u.isPointLightShadow&&3===this.type){const t={minFilter:1006,magFilter:1006,format:1023};u.map=new I(r.x,r.y,t),u.map.texture.name=h.name+".shadowMap",u.mapPass=new I(r.x,r.y,t),u.camera.updateProjectionMatrix();}if(null===u.map){const t={minFilter:1003,magFilter:1003,format:1023};u.map=new I(r.x,r.y,t),u.map.texture.name=h.name+".shadowMap",u.camera.updateProjectionMatrix();}t.setRenderTarget(u.map),t.clear();const m=u.getViewportCount();for(let t=0;t<m;t++){const e=u.getViewport(t);o.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),d.viewport(o),u.updateMatrices(h,t),i=u.getFrustum(),b(a,l,u.camera,h,this.type);}u.isPointLightShadow||3!==this.type||g(u,l),u.needsUpdate=!1;}f.needsUpdate=!1,t.setRenderTarget(c,h,u);};}function cr(t,e,n){const i=n.isWebGL2;const r=new function(){let e=!1;const n=new O;let i=null;const r=new O(0,0,0,0);return {setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n);},setLocked:function(t){e=t;},setClear:function(e,i,s,o,a){!0===a&&(e*=o,i*=o,s*=o),n.set(e,i,s,o),!1===r.equals(n)&&(t.clearColor(e,i,s,o),r.copy(n));},reset:function(){e=!1,i=null,r.set(-1,0,0,0);}}},s=new function(){let e=!1,n=null,i=null,r=null;return {setTest:function(t){t?D(2929):N(2929);},setMask:function(i){n===i||e||(t.depthMask(i),n=i);},setFunc:function(e){if(i!==e){if(e)switch(e){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc(515);}else t.depthFunc(515);i=e;}},setLocked:function(t){e=t;},setClear:function(e){r!==e&&(t.clearDepth(e),r=e);},reset:function(){e=!1,n=null,i=null,r=null;}}},o=new function(){let e=!1,n=null,i=null,r=null,s=null,o=null,a=null,l=null,c=null;return {setTest:function(t){e||(t?D(2960):N(2960));},setMask:function(i){n===i||e||(t.stencilMask(i),n=i);},setFunc:function(e,n,o){i===e&&r===n&&s===o||(t.stencilFunc(e,n,o),i=e,r=n,s=o);},setOp:function(e,n,i){o===e&&a===n&&l===i||(t.stencilOp(e,n,i),o=e,a=n,l=i);},setLocked:function(t){e=t;},setClear:function(e){c!==e&&(t.clearStencil(e),c=e);},reset:function(){e=!1,n=null,i=null,r=null,s=null,o=null,a=null,l=null,c=null;}}};let a={},l=null,c=null,h=null,u=null,d=null,p=null,m=null,f=null,g=null,v=!1,y=null,x=null,b=null,w=null,_=null;const M=t.getParameter(35661);let S=!1,T=0;const E=t.getParameter(7938);-1!==E.indexOf("WebGL")?(T=parseFloat(/^WebGL\ ([0-9])/.exec(E)[1]),S=T>=1):-1!==E.indexOf("OpenGL ES")&&(T=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(E)[1]),S=T>=2);let A=null,L={};const R=new O,C=new O;function P(e,n,i){const r=new Uint8Array(4),s=t.createTexture();t.bindTexture(e,s),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(let e=0;e<i;e++)t.texImage2D(n+e,0,6408,1,1,0,6408,5121,r);return s}const I={};function D(e){!0!==a[e]&&(t.enable(e),a[e]=!0);}function N(e){!1!==a[e]&&(t.disable(e),a[e]=!1);}I[3553]=P(3553,3553,1),I[34067]=P(34067,34069,6),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),D(2929),s.setFunc(3),k(!1),B(1),D(2884),z(0);const F={100:32774,101:32778,102:32779};if(i)F[103]=32775,F[104]=32776;else {const t=e.get("EXT_blend_minmax");null!==t&&(F[103]=t.MIN_EXT,F[104]=t.MAX_EXT);}const U={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function z(e,n,i,r,s,o,a,l){if(0!==e){if(c||(D(3042),c=!0),5===e)s=s||n,o=o||i,a=a||r,n===u&&s===m||(t.blendEquationSeparate(F[n],F[s]),u=n,m=s),i===d&&r===p&&o===f&&a===g||(t.blendFuncSeparate(U[i],U[r],U[o],U[a]),d=i,p=r,f=o,g=a),h=e,v=null;else if(e!==h||l!==v){if(100===u&&100===m||(t.blendEquation(32774),u=100,m=100),l)switch(e){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}else switch(e){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}d=null,p=null,f=null,g=null,h=e,v=l;}}else c&&(N(3042),c=!1);}function k(e){y!==e&&(e?t.frontFace(2304):t.frontFace(2305),y=e);}function B(e){0!==e?(D(2884),e!==x&&(1===e?t.cullFace(1029):2===e?t.cullFace(1028):t.cullFace(1032))):N(2884),x=e;}function H(e,n,i){e?(D(32823),w===n&&_===i||(t.polygonOffset(n,i),w=n,_=i)):N(32823);}function G(e){void 0===e&&(e=33984+M-1),A!==e&&(t.activeTexture(e),A=e);}return {buffers:{color:r,depth:s,stencil:o},enable:D,disable:N,useProgram:function(e){return l!==e&&(t.useProgram(e),l=e,!0)},setBlending:z,setMaterial:function(t,e){2===t.side?N(2884):D(2884);let n=1===t.side;e&&(n=!n),k(n),1===t.blending&&!1===t.transparent?z(0):z(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),r.setMask(t.colorWrite);const i=t.stencilWrite;o.setTest(i),i&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),H(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits);},setFlipSided:k,setCullFace:B,setLineWidth:function(e){e!==b&&(S&&t.lineWidth(e),b=e);},setPolygonOffset:H,setScissorTest:function(t){t?D(3089):N(3089);},activeTexture:G,bindTexture:function(e,n){null===A&&G();let i=L[A];void 0===i&&(i={type:void 0,texture:void 0},L[A]=i),i.type===e&&i.texture===n||(t.bindTexture(e,n||I[e]),i.type=e,i.texture=n);},unbindTexture:function(){const e=L[A];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0);},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage2D:function(){try{t.texImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage3D:function(){try{t.texImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},scissor:function(e){!1===R.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),R.copy(e));},viewport:function(e){!1===C.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),C.copy(e));},reset:function(){a={},A=null,L={},l=null,h=null,y=null,x=null,r.reset(),s.reset(),o.reset();}}}function hr(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap;let p,m=!1;try{m="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d");}catch(t){}function f(t,e){return m?new OffscreenCanvas(t,e):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function g(t,e,n,i){let r=1;if((t.width>i||t.height>i)&&(r=i/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const i=e?T.floorPowerOfTwo:Math.floor,s=i(r*t.width),o=i(r*t.height);void 0===p&&(p=f(s,o));const a=n?f(s,o):p;a.width=s,a.height=o;return a.getContext("2d").drawImage(t,0,0,s,o),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+s+"x"+o+")."),a}return "data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function v(t){return T.isPowerOfTwo(t.width)&&T.isPowerOfTwo(t.height)}function y(t,e){return t.generateMipmaps&&e&&1003!==t.minFilter&&1006!==t.minFilter}function x(e,n,r,s){t.generateMipmap(e);i.get(n).__maxMipLevel=Math.log(Math.max(r,s))*Math.LOG2E;}function b(n,i,r){if(!1===a)return i;if(null!==n){if(void 0!==t[n])return t[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'");}let s=i;return 6403===i&&(5126===r&&(s=33326),5131===r&&(s=33325),5121===r&&(s=33321)),6407===i&&(5126===r&&(s=34837),5131===r&&(s=34843),5121===r&&(s=32849)),6408===i&&(5126===r&&(s=34836),5131===r&&(s=34842),5121===r&&(s=32856)),33325!==s&&33326!==s&&34842!==s&&34836!==s||e.get("EXT_color_buffer_float"),s}function w(t){return 1003===t||1004===t||1005===t?9728:9729}function _(e){const n=e.target;n.removeEventListener("dispose",_),function(e){const n=i.get(e);if(void 0===n.__webglInit)return;t.deleteTexture(n.__webglTexture),i.remove(e);}(n),n.isVideoTexture&&d.delete(n),o.memory.textures--;}function M(e){const n=e.target;n.removeEventListener("dispose",M),function(e){const n=i.get(e),r=i.get(e.texture);if(!e)return;void 0!==r.__webglTexture&&t.deleteTexture(r.__webglTexture);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++)t.deleteFramebuffer(n.__webglFramebuffer[e]),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[e]);else t.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&t.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer&&t.deleteRenderbuffer(n.__webglColorRenderbuffer),n.__webglDepthRenderbuffer&&t.deleteRenderbuffer(n.__webglDepthRenderbuffer);i.remove(e.texture),i.remove(e);}(n),o.memory.textures--;}let S=0;function E(t,e){const r=i.get(t);if(t.isVideoTexture&&function(t){const e=o.render.frame;d.get(t)!==e&&(d.set(t,e),t.update());}(t),t.version>0&&r.__version!==t.version){const n=t.image;if(void 0===n)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {if(!1!==n.complete)return void O(r,t,e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");}}n.activeTexture(33984+e),n.bindTexture(3553,r.__webglTexture);}function A(e,r){const o=i.get(e);e.version>0&&o.__version!==e.version?function(e,i,r){if(6!==i.image.length)return;P(e,i),n.activeTexture(33984+r),n.bindTexture(34067,e.__webglTexture),t.pixelStorei(37440,i.flipY);const o=i&&(i.isCompressedTexture||i.image[0].isCompressedTexture),l=i.image[0]&&i.image[0].isDataTexture,h=[];for(let t=0;t<6;t++)h[t]=o||l?l?i.image[t].image:i.image[t]:g(i.image[t],!1,!0,c);const u=h[0],d=v(u)||a,p=s.convert(i.format),m=s.convert(i.type),f=b(i.internalFormat,p,m);let w;if(C(34067,i,d),o){for(let t=0;t<6;t++){w=h[t].mipmaps;for(let e=0;e<w.length;e++){const r=w[e];1023!==i.format&&1022!==i.format?null!==p?n.compressedTexImage2D(34069+t,e,f,r.width,r.height,0,r.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+t,e,f,r.width,r.height,0,p,m,r.data);}}e.__maxMipLevel=w.length-1;}else {w=i.mipmaps;for(let t=0;t<6;t++)if(l){n.texImage2D(34069+t,0,f,h[t].width,h[t].height,0,p,m,h[t].data);for(let e=0;e<w.length;e++){const i=w[e].image[t].image;n.texImage2D(34069+t,e+1,f,i.width,i.height,0,p,m,i.data);}}else {n.texImage2D(34069+t,0,f,p,m,h[t]);for(let e=0;e<w.length;e++){const i=w[e];n.texImage2D(34069+t,e+1,f,p,m,i.image[t]);}}e.__maxMipLevel=w.length;}y(i,d)&&x(34067,i,u.width,u.height);e.__version=i.version,i.onUpdate&&i.onUpdate(i);}(o,e,r):(n.activeTexture(33984+r),n.bindTexture(34067,o.__webglTexture));}const L={1e3:10497,1001:33071,1002:33648},R={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function C(n,s,o){o?(t.texParameteri(n,10242,L[s.wrapS]),t.texParameteri(n,10243,L[s.wrapT]),32879!==n&&35866!==n||t.texParameteri(n,32882,L[s.wrapR]),t.texParameteri(n,10240,R[s.magFilter]),t.texParameteri(n,10241,R[s.minFilter])):(t.texParameteri(n,10242,33071),t.texParameteri(n,10243,33071),32879!==n&&35866!==n||t.texParameteri(n,32882,33071),1001===s.wrapS&&1001===s.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,10240,w(s.magFilter)),t.texParameteri(n,10241,w(s.minFilter)),1003!==s.minFilter&&1006!==s.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const l=e.get("EXT_texture_filter_anisotropic");if(l){if(1015===s.type&&null===e.get("OES_texture_float_linear"))return;if(1016===s.type&&null===(a||e.get("OES_texture_half_float_linear")))return;(s.anisotropy>1||i.get(s).__currentAnisotropy)&&(t.texParameterf(n,l.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy);}}function P(e,n){void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",_),e.__webglTexture=t.createTexture(),o.memory.textures++);}function O(e,i,r){let o=3553;i.isDataTexture2DArray&&(o=35866),i.isDataTexture3D&&(o=32879),P(e,i),n.activeTexture(33984+r),n.bindTexture(o,e.__webglTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(3317,i.unpackAlignment);const l=function(t){return !a&&(1001!==t.wrapS||1001!==t.wrapT||1003!==t.minFilter&&1006!==t.minFilter)}(i)&&!1===v(i.image),c=g(i.image,l,!1,h),u=v(c)||a,d=s.convert(i.format);let p,m=s.convert(i.type),f=b(i.internalFormat,d,m);C(o,i,u);const w=i.mipmaps;if(i.isDepthTexture)f=6402,a?f=1015===i.type?36012:1014===i.type?33190:1020===i.type?35056:33189:1015===i.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===i.format&&6402===f&&1012!==i.type&&1014!==i.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),i.type=1012,m=s.convert(i.type)),1027===i.format&&6402===f&&(f=34041,1020!==i.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),i.type=1020,m=s.convert(i.type))),n.texImage2D(3553,0,f,c.width,c.height,0,d,m,null);else if(i.isDataTexture)if(w.length>0&&u){for(let t=0,e=w.length;t<e;t++)p=w[t],n.texImage2D(3553,t,f,p.width,p.height,0,d,m,p.data);i.generateMipmaps=!1,e.__maxMipLevel=w.length-1;}else n.texImage2D(3553,0,f,c.width,c.height,0,d,m,c.data),e.__maxMipLevel=0;else if(i.isCompressedTexture){for(let t=0,e=w.length;t<e;t++)p=w[t],1023!==i.format&&1022!==i.format?null!==d?n.compressedTexImage2D(3553,t,f,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,t,f,p.width,p.height,0,d,m,p.data);e.__maxMipLevel=w.length-1;}else if(i.isDataTexture2DArray)n.texImage3D(35866,0,f,c.width,c.height,c.depth,0,d,m,c.data),e.__maxMipLevel=0;else if(i.isDataTexture3D)n.texImage3D(32879,0,f,c.width,c.height,c.depth,0,d,m,c.data),e.__maxMipLevel=0;else if(w.length>0&&u){for(let t=0,e=w.length;t<e;t++)p=w[t],n.texImage2D(3553,t,f,d,m,p);i.generateMipmaps=!1,e.__maxMipLevel=w.length-1;}else n.texImage2D(3553,0,f,d,m,c),e.__maxMipLevel=0;y(i,u)&&x(o,i,c.width,c.height),e.__version=i.version,i.onUpdate&&i.onUpdate(i);}function I(e,r,o,a){const l=s.convert(r.texture.format),c=s.convert(r.texture.type),h=b(r.texture.internalFormat,l,c);n.texImage2D(a,0,h,r.width,r.height,0,l,c,null),t.bindFramebuffer(36160,e),t.framebufferTexture2D(36160,o,a,i.get(r.texture).__webglTexture,0),t.bindFramebuffer(36160,null);}function D(e,n,i){if(t.bindRenderbuffer(36161,e),n.depthBuffer&&!n.stencilBuffer){let r=33189;if(i){const e=n.depthTexture;e&&e.isDepthTexture&&(1015===e.type?r=36012:1014===e.type&&(r=33190));const i=F(n);t.renderbufferStorageMultisample(36161,i,r,n.width,n.height);}else t.renderbufferStorage(36161,r,n.width,n.height);t.framebufferRenderbuffer(36160,36096,36161,e);}else if(n.depthBuffer&&n.stencilBuffer){if(i){const e=F(n);t.renderbufferStorageMultisample(36161,e,35056,n.width,n.height);}else t.renderbufferStorage(36161,34041,n.width,n.height);t.framebufferRenderbuffer(36160,33306,36161,e);}else {const e=s.convert(n.texture.format),r=s.convert(n.texture.type),o=b(n.texture.internalFormat,e,r);if(i){const e=F(n);t.renderbufferStorageMultisample(36161,e,o,n.width,n.height);}else t.renderbufferStorage(36161,o,n.width,n.height);}t.bindRenderbuffer(36161,null);}function N(e){const n=i.get(e),r=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture){if(r)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,n){if(n&&n.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,e),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),E(n.depthTexture,0);const r=i.get(n.depthTexture).__webglTexture;if(1026===n.depthTexture.format)t.framebufferTexture2D(36160,36096,3553,r,0);else {if(1027!==n.depthTexture.format)throw new Error("Unknown depthTexture format");t.framebufferTexture2D(36160,33306,3553,r,0);}}(n.__webglFramebuffer,e);}else if(r){n.__webglDepthbuffer=[];for(let i=0;i<6;i++)t.bindFramebuffer(36160,n.__webglFramebuffer[i]),n.__webglDepthbuffer[i]=t.createRenderbuffer(),D(n.__webglDepthbuffer[i],e,!1);}else t.bindFramebuffer(36160,n.__webglFramebuffer),n.__webglDepthbuffer=t.createRenderbuffer(),D(n.__webglDepthbuffer,e,!1);t.bindFramebuffer(36160,null);}function F(t){return a&&t.isWebGLMultisampleRenderTarget?Math.min(u,t.samples):0}let U=!1,z=!1;this.allocateTextureUnit=function(){const t=S;return t>=l&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+l),S+=1,t},this.resetTextureUnits=function(){S=0;},this.setTexture2D=E,this.setTexture2DArray=function(t,e){const r=i.get(t);t.version>0&&r.__version!==t.version?O(r,t,e):(n.activeTexture(33984+e),n.bindTexture(35866,r.__webglTexture));},this.setTexture3D=function(t,e){const r=i.get(t);t.version>0&&r.__version!==t.version?O(r,t,e):(n.activeTexture(33984+e),n.bindTexture(32879,r.__webglTexture));},this.setTextureCube=A,this.setupRenderTarget=function(e){const r=i.get(e),l=i.get(e.texture);e.addEventListener("dispose",M),l.__webglTexture=t.createTexture(),o.memory.textures++;const c=!0===e.isWebGLCubeRenderTarget,h=!0===e.isWebGLMultisampleRenderTarget,u=v(e)||a;if(!a||1022!==e.texture.format||1015!==e.texture.type&&1016!==e.texture.type||(e.texture.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),c){r.__webglFramebuffer=[];for(let e=0;e<6;e++)r.__webglFramebuffer[e]=t.createFramebuffer();}else if(r.__webglFramebuffer=t.createFramebuffer(),h)if(a){r.__webglMultisampledFramebuffer=t.createFramebuffer(),r.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,r.__webglColorRenderbuffer);const n=s.convert(e.texture.format),i=s.convert(e.texture.type),o=b(e.texture.internalFormat,n,i),a=F(e);t.renderbufferStorageMultisample(36161,a,o,e.width,e.height),t.bindFramebuffer(36160,r.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,r.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),e.depthBuffer&&(r.__webglDepthRenderbuffer=t.createRenderbuffer(),D(r.__webglDepthRenderbuffer,e,!0)),t.bindFramebuffer(36160,null);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(c){n.bindTexture(34067,l.__webglTexture),C(34067,e.texture,u);for(let t=0;t<6;t++)I(r.__webglFramebuffer[t],e,36064,34069+t);y(e.texture,u)&&x(34067,e.texture,e.width,e.height),n.bindTexture(34067,null);}else n.bindTexture(3553,l.__webglTexture),C(3553,e.texture,u),I(r.__webglFramebuffer,e,36064,3553),y(e.texture,u)&&x(3553,e.texture,e.width,e.height),n.bindTexture(3553,null);e.depthBuffer&&N(e);},this.updateRenderTargetMipmap=function(t){const e=t.texture;if(y(e,v(t)||a)){const r=t.isWebGLCubeRenderTarget?34067:3553,s=i.get(e).__webglTexture;n.bindTexture(r,s),x(r,e,t.width,t.height),n.bindTexture(r,null);}},this.updateMultisampleRenderTarget=function(e){if(e.isWebGLMultisampleRenderTarget)if(a){const n=i.get(e);t.bindFramebuffer(36008,n.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,n.__webglFramebuffer);const r=e.width,s=e.height;let o=16384;e.depthBuffer&&(o|=256),e.stencilBuffer&&(o|=1024),t.blitFramebuffer(0,0,r,s,0,0,r,s,o,9728),t.bindFramebuffer(36160,n.__webglMultisampledFramebuffer);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");},this.safeSetTexture2D=function(t,e){t&&t.isWebGLRenderTarget&&(!1===U&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),U=!0),t=t.texture),E(t,e);},this.safeSetTextureCube=function(t,e){t&&t.isWebGLCubeRenderTarget&&(!1===z&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),z=!0),t=t.texture),A(t,e);};}function ur(t,e,n){const i=n.isWebGL2;return {convert:function(t){let n;if(1009===t)return 5121;if(1017===t)return 32819;if(1018===t)return 32820;if(1019===t)return 33635;if(1010===t)return 5120;if(1011===t)return 5122;if(1012===t)return 5123;if(1013===t)return 5124;if(1014===t)return 5125;if(1015===t)return 5126;if(1016===t)return i?5131:(n=e.get("OES_texture_half_float"),null!==n?n.HALF_FLOAT_OES:null);if(1021===t)return 6406;if(1022===t)return 6407;if(1023===t)return 6408;if(1024===t)return 6409;if(1025===t)return 6410;if(1026===t)return 6402;if(1027===t)return 34041;if(1028===t)return 6403;if(1029===t)return 36244;if(1030===t)return 33319;if(1031===t)return 33320;if(1032===t)return 36248;if(1033===t)return 36249;if(33776===t||33777===t||33778===t||33779===t){if(n=e.get("WEBGL_compressed_texture_s3tc"),null===n)return null;if(33776===t)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===t)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===t)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===t)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===t||35841===t||35842===t||35843===t){if(n=e.get("WEBGL_compressed_texture_pvrtc"),null===n)return null;if(35840===t)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===t)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===t)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===t)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===t)return n=e.get("WEBGL_compressed_texture_etc1"),null!==n?n.COMPRESSED_RGB_ETC1_WEBGL:null;if((37492===t||37496===t)&&(n=e.get("WEBGL_compressed_texture_etc"),null!==n)){if(37492===t)return n.COMPRESSED_RGB8_ETC2;if(37496===t)return n.COMPRESSED_RGBA8_ETC2_EAC}return 37808===t||37809===t||37810===t||37811===t||37812===t||37813===t||37814===t||37815===t||37816===t||37817===t||37818===t||37819===t||37820===t||37821===t||37840===t||37841===t||37842===t||37843===t||37844===t||37845===t||37846===t||37847===t||37848===t||37849===t||37850===t||37851===t||37852===t||37853===t?(n=e.get("WEBGL_compressed_texture_astc"),null!==n?t:null):36492===t?(n=e.get("EXT_texture_compression_bptc"),null!==n?t:null):1020===t?i?34042:(n=e.get("WEBGL_depth_texture"),null!==n?n.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}function dr(t){nn.call(this),this.cameras=t||[];}function pr(){Nt.call(this),this.type="Group";}function mr(){this._targetRay=null,this._grip=null,this._hand=null;}function fr(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const l=[],c=new Map,h=new nn;h.layers.enable(1),h.viewport=new O;const u=new nn;u.layers.enable(2),u.viewport=new O;const d=[h,u],p=new dr;p.layers.enable(1),p.layers.enable(2);let m=null,f=null;function g(t){const e=c.get(t.inputSource);e&&e.dispatchEvent({type:t.type,data:t.inputSource});}function v(){c.forEach((function(t,e){t.disconnect(e);})),c.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),S.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"});}function y(t){s=t,S.setContext(i),S.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"});}function x(t){const e=i.inputSources;for(let t=0;t<l.length;t++)c.set(e[t],l[t]);for(let e=0;e<t.removed.length;e++){const n=t.removed[e],i=c.get(n);i&&(i.dispatchEvent({type:"disconnected",data:n}),c.delete(n));}for(let e=0;e<t.added.length;e++){const n=t.added[e],i=c.get(n);i&&i.dispatchEvent({type:"connected",data:n});}}this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=l[t];return void 0===e&&(e=new mr,l[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=l[t];return void 0===e&&(e=new mr,l[t]=e),e.getGripSpace()},this.getHand=function(t){let e=l[t];return void 0===e&&(e=new mr,l[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");},this.setReferenceSpaceType=function(t){o=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(t){if(i=t,null!==i){i.addEventListener("select",g),i.addEventListener("selectstart",g),i.addEventListener("selectend",g),i.addEventListener("squeeze",g),i.addEventListener("squeezestart",g),i.addEventListener("squeezeend",g),i.addEventListener("end",v);const t=e.getContextAttributes();!0!==t.xrCompatible&&e.makeXRCompatible();const n={antialias:t.antialias,alpha:t.alpha,depth:t.depth,stencil:t.stencil,framebufferScaleFactor:r},s=new XRWebGLLayer(i,e,n);i.updateRenderState({baseLayer:s}),i.requestReferenceSpace(o).then(y),i.addEventListener("inputsourceschange",x);}};const b=new F,w=new F;function _(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.getInverse(t.matrixWorld);}this.getCamera=function(t){p.near=u.near=h.near=t.near,p.far=u.far=h.far=t.far,m===p.near&&f===p.far||(i.updateRenderState({depthNear:p.near,depthFar:p.far}),m=p.near,f=p.far);const e=t.parent,n=p.cameras;_(p,e);for(let t=0;t<n.length;t++)_(n[t],e);t.matrixWorld.copy(p.matrixWorld);const r=t.children;for(let t=0,e=r.length;t<e;t++)r[t].updateMatrixWorld(!0);return 2===n.length?function(t,e,n){b.setFromMatrixPosition(e.matrixWorld),w.setFromMatrixPosition(n.matrixWorld);const i=b.distanceTo(w),r=e.projectionMatrix.elements,s=n.projectionMatrix.elements,o=r[14]/(r[10]-1),a=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=o*h,p=o*u,m=i/(-h+u),f=m*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.getInverse(t.matrixWorld);const g=o+m,v=a+m,y=d-f,x=p+(i-f),_=l*a/v*g,M=c*a/v*g;t.projectionMatrix.makePerspective(y,x,_,M,g,v);}(p,h,u):p.projectionMatrix.copy(h.projectionMatrix),p};let M=null;const S=new un;S.setAnimationLoop((function(e,n){if(a=n.getViewerPose(s),null!==a){const e=a.views,n=i.renderState.baseLayer;t.setFramebuffer(n.framebuffer);let r=!1;e.length!==p.cameras.length&&(p.cameras.length=0,r=!0);for(let t=0;t<e.length;t++){const i=e[t],s=n.getViewport(i),o=d[t];o.matrix.fromArray(i.transform.matrix),o.projectionMatrix.fromArray(i.projectionMatrix),o.viewport.set(s.x,s.y,s.width,s.height),0===t&&p.matrix.copy(o.matrix),!0===r&&p.cameras.push(o);}}const r=i.inputSources;for(let t=0;t<l.length;t++){const e=l[t],i=r[t];e.update(i,n,s);}M&&M(e,n);})),this.setAnimationLoop=function(t){M=t;},this.dispose=function(){};}function gr(t){function e(e,n){e.opacity.value=n.opacity,n.color&&e.diffuse.value.copy(n.color),n.emissive&&e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(e.map.value=n.map),n.alphaMap&&(e.alphaMap.value=n.alphaMap),n.specularMap&&(e.specularMap.value=n.specularMap);const i=t.get(n).envMap;if(i){e.envMap.value=i,e.flipEnvMap.value=i.isCubeTexture&&i._needsFlipEnvMap?-1:1,e.reflectivity.value=n.reflectivity,e.refractionRatio.value=n.refractionRatio;const r=t.get(i).__maxMipLevel;void 0!==r&&(e.maxMipLevel.value=r);}let r,s;n.lightMap&&(e.lightMap.value=n.lightMap,e.lightMapIntensity.value=n.lightMapIntensity),n.aoMap&&(e.aoMap.value=n.aoMap,e.aoMapIntensity.value=n.aoMapIntensity),n.map?r=n.map:n.specularMap?r=n.specularMap:n.displacementMap?r=n.displacementMap:n.normalMap?r=n.normalMap:n.bumpMap?r=n.bumpMap:n.roughnessMap?r=n.roughnessMap:n.metalnessMap?r=n.metalnessMap:n.alphaMap?r=n.alphaMap:n.emissiveMap?r=n.emissiveMap:n.clearcoatMap?r=n.clearcoatMap:n.clearcoatNormalMap?r=n.clearcoatNormalMap:n.clearcoatRoughnessMap&&(r=n.clearcoatRoughnessMap),void 0!==r&&(r.isWebGLRenderTarget&&(r=r.texture),!0===r.matrixAutoUpdate&&r.updateMatrix(),e.uvTransform.value.copy(r.matrix)),n.aoMap?s=n.aoMap:n.lightMap&&(s=n.lightMap),void 0!==s&&(s.isWebGLRenderTarget&&(s=s.texture),!0===s.matrixAutoUpdate&&s.updateMatrix(),e.uv2Transform.value.copy(s.matrix));}function n(e,n){e.roughness.value=n.roughness,e.metalness.value=n.metalness,n.roughnessMap&&(e.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(e.metalnessMap.value=n.metalnessMap),n.emissiveMap&&(e.emissiveMap.value=n.emissiveMap),n.bumpMap&&(e.bumpMap.value=n.bumpMap,e.bumpScale.value=n.bumpScale,1===n.side&&(e.bumpScale.value*=-1)),n.normalMap&&(e.normalMap.value=n.normalMap,e.normalScale.value.copy(n.normalScale),1===n.side&&e.normalScale.value.negate()),n.displacementMap&&(e.displacementMap.value=n.displacementMap,e.displacementScale.value=n.displacementScale,e.displacementBias.value=n.displacementBias);t.get(n).envMap&&(e.envMapIntensity.value=n.envMapIntensity);}return {refreshFogUniforms:function(t,e){t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density);},refreshMaterialUniforms:function(t,i,r,s){i.isMeshBasicMaterial?e(t,i):i.isMeshLambertMaterial?(e(t,i),function(t,e){e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap);}(t,i)):i.isMeshToonMaterial?(e(t,i),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap);e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);}(t,i)):i.isMeshPhongMaterial?(e(t,i),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);}(t,i)):i.isMeshStandardMaterial?(e(t,i),i.isMeshPhysicalMaterial?function(t,e){n(t,e),t.reflectivity.value=e.reflectivity,t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.sheen&&t.sheen.value.copy(e.sheen);e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap);e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap);e.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&t.clearcoatNormalScale.value.negate());t.transmission.value=e.transmission,e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap);}(t,i):n(t,i)):i.isMeshMatcapMaterial?(e(t,i),function(t,e){e.matcap&&(t.matcap.value=e.matcap);e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);}(t,i)):i.isMeshDepthMaterial?(e(t,i),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);}(t,i)):i.isMeshDistanceMaterial?(e(t,i),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance;}(t,i)):i.isMeshNormalMaterial?(e(t,i),function(t,e){e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1));e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate());e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias);}(t,i)):i.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity;}(t,i),i.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale;}(t,i)):i.isPointsMaterial?function(t,e,n,i){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*n,t.scale.value=.5*i,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);let r;e.map?r=e.map:e.alphaMap&&(r=e.alphaMap);void 0!==r&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),t.uvTransform.value.copy(r.matrix));}(t,i,r,s):i.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);let n;e.map?n=e.map:e.alphaMap&&(n=e.alphaMap);void 0!==n&&(!0===n.matrixAutoUpdate&&n.updateMatrix(),t.uvTransform.value.copy(n.matrix));}(t,i):i.isShadowMaterial?(t.color.value.copy(i.color),t.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1);}}}function vr(t){const e=void 0!==(t=t||{}).canvas?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=void 0!==t.context?t.context:null,i=void 0!==t.alpha&&t.alpha,r=void 0===t.depth||t.depth,s=void 0===t.stencil||t.stencil,o=void 0!==t.antialias&&t.antialias,a=void 0===t.premultipliedAlpha||t.premultipliedAlpha,l=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,c=void 0!==t.powerPreference?t.powerPreference:"default",h=void 0!==t.failIfMajorPerformanceCaveat&&t.failIfMajorPerformanceCaveat;let u=null,d=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let m=!1,f=null,g=0,v=0,y=null,x=null,b=-1,w=null,_=null;const M=new O,S=new O;let A=null,L=e.width,R=e.height,C=1,P=null,I=null;const D=new O(0,0,L,R),N=new O(0,0,L,R);let U=!1;const z=new hn;let k=!1,B=!1;const H=new ht,G=new F,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return null===y?C:1}let W,q,X,Y,J,Z,K,Q,$,tt,et,nt,it,rt,st,ot,at,lt,ct,ut,dt,pt=n;function mt(t,n){for(let i=0;i<t.length;i++){const r=t[i],s=e.getContext(r,n);if(null!==s)return s}return null}try{const t={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",xt,!1),null===pt){const e=["webgl2","webgl","experimental-webgl"];if(!0===p.isWebGL1Renderer&&e.shift(),pt=mt(e,t),null===pt)throw mt(e)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===pt.getShaderPrecisionFormat&&(pt.getShaderPrecisionFormat=function(){return {rangeMin:1,rangeMax:1,precision:1}});}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function ft(){W=new Mn(pt),q=new bn(pt,W,t),!1===q.isWebGL2&&(W.get("WEBGL_depth_texture"),W.get("OES_texture_float"),W.get("OES_texture_half_float"),W.get("OES_texture_half_float_linear"),W.get("OES_standard_derivatives"),W.get("OES_element_index_uint"),W.get("OES_vertex_array_object"),W.get("ANGLE_instanced_arrays")),W.get("OES_texture_float_linear"),ut=new ur(pt,W,q),X=new cr(pt,W,q),X.scissor(S.copy(N).multiplyScalar(C).floor()),X.viewport(M.copy(D).multiplyScalar(C).floor()),Y=new En(pt),J=new Ji,Z=new hr(pt,W,X,J,q,ut,Y),K=new _n(p),Q=new dn(pt,q),dt=new yn(pt,W,Q,q),$=new Sn(pt,Q,Y,dt),tt=new Cn(pt,$,Q,Y),at=new Rn(pt),st=new wn(J),et=new Yi(p,K,W,q,dt,st),nt=new gr(J),it=new $i(J),rt=new sr,ot=new vn(p,K,X,tt,a),lt=new xn(pt,W,Y,q),ct=new Tn(pt,W,Y,q),Y.programs=et.programs,p.capabilities=q,p.extensions=W,p.properties=J,p.renderLists=it,p.state=X,p.info=Y;}ft();const gt=new fr(p,pt);this.xr=gt;const vt=new lr(p,tt,q.maxTextureSize);function yt(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0;}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,ft();}function bt(t){const e=t.target;e.removeEventListener("dispose",bt),function(t){wt(t),J.remove(t);}(e);}function wt(t){const e=J.get(t).program;void 0!==e&&et.releaseProgram(e);}this.shadowMap=vt,this.getContext=function(){return pt},this.getContextAttributes=function(){return pt.getContextAttributes()},this.forceContextLoss=function(){const t=W.get("WEBGL_lose_context");t&&t.loseContext();},this.forceContextRestore=function(){const t=W.get("WEBGL_lose_context");t&&t.restoreContext();},this.getPixelRatio=function(){return C},this.setPixelRatio=function(t){void 0!==t&&(C=t,this.setSize(L,R,!1));},this.getSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),t=new E),t.set(L,R)},this.setSize=function(t,n,i){gt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(L=t,R=n,e.width=Math.floor(t*C),e.height=Math.floor(n*C),!1!==i&&(e.style.width=t+"px",e.style.height=n+"px"),this.setViewport(0,0,t,n));},this.getDrawingBufferSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),t=new E),t.set(L*C,R*C).floor()},this.setDrawingBufferSize=function(t,n,i){L=t,R=n,C=i,e.width=Math.floor(t*i),e.height=Math.floor(n*i),this.setViewport(0,0,t,n);},this.getCurrentViewport=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),t=new O),t.copy(M)},this.getViewport=function(t){return t.copy(D)},this.setViewport=function(t,e,n,i){t.isVector4?D.set(t.x,t.y,t.z,t.w):D.set(t,e,n,i),X.viewport(M.copy(D).multiplyScalar(C).floor());},this.getScissor=function(t){return t.copy(N)},this.setScissor=function(t,e,n,i){t.isVector4?N.set(t.x,t.y,t.z,t.w):N.set(t,e,n,i),X.scissor(S.copy(N).multiplyScalar(C).floor());},this.getScissorTest=function(){return U},this.setScissorTest=function(t){X.setScissorTest(U=t);},this.setOpaqueSort=function(t){P=t;},this.setTransparentSort=function(t){I=t;},this.getClearColor=function(){return ot.getClearColor()},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments);},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments);},this.clear=function(t,e,n){let i=0;(void 0===t||t)&&(i|=16384),(void 0===e||e)&&(i|=256),(void 0===n||n)&&(i|=1024),pt.clear(i);},this.clearColor=function(){this.clear(!0,!1,!1);},this.clearDepth=function(){this.clear(!1,!0,!1);},this.clearStencil=function(){this.clear(!1,!1,!0);},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",xt,!1),it.dispose(),rt.dispose(),J.dispose(),K.dispose(),tt.dispose(),dt.dispose(),gt.dispose(),Mt.stop();},this.renderBufferImmediate=function(t,e){dt.initAttributes();const n=J.get(t);t.hasPositions&&!n.position&&(n.position=pt.createBuffer()),t.hasNormals&&!n.normal&&(n.normal=pt.createBuffer()),t.hasUvs&&!n.uv&&(n.uv=pt.createBuffer()),t.hasColors&&!n.color&&(n.color=pt.createBuffer());const i=e.getAttributes();t.hasPositions&&(pt.bindBuffer(34962,n.position),pt.bufferData(34962,t.positionArray,35048),dt.enableAttribute(i.position),pt.vertexAttribPointer(i.position,3,5126,!1,0,0)),t.hasNormals&&(pt.bindBuffer(34962,n.normal),pt.bufferData(34962,t.normalArray,35048),dt.enableAttribute(i.normal),pt.vertexAttribPointer(i.normal,3,5126,!1,0,0)),t.hasUvs&&(pt.bindBuffer(34962,n.uv),pt.bufferData(34962,t.uvArray,35048),dt.enableAttribute(i.uv),pt.vertexAttribPointer(i.uv,2,5126,!1,0,0)),t.hasColors&&(pt.bindBuffer(34962,n.color),pt.bufferData(34962,t.colorArray,35048),dt.enableAttribute(i.color),pt.vertexAttribPointer(i.color,3,5126,!1,0,0)),dt.disableUnusedAttributes(),pt.drawArrays(4,0,t.count),t.count=0;},this.renderBufferDirect=function(t,e,n,i,r,s){null===e&&(e=V);const o=r.isMesh&&r.matrixWorld.determinant()<0,a=Lt(t,e,i,r);X.setMaterial(i,o);let l=n.index;const c=n.attributes.position;if(null===l){if(void 0===c||0===c.count)return}else if(0===l.count)return;let h,u=1;!0===i.wireframe&&(l=$.getWireframeAttribute(n),u=2),(i.morphTargets||i.morphNormals)&&at.update(r,n,i,a),dt.setup(r,i,a,n,l);let d=lt;null!==l&&(h=Q.get(l),d=ct,d.setIndex(h));const p=null!==l?l.count:c.count,m=n.drawRange.start*u,f=n.drawRange.count*u,g=null!==s?s.start*u:0,v=null!==s?s.count*u:1/0,y=Math.max(m,g),x=Math.min(p,m+f,g+v)-1,b=Math.max(0,x-y+1);if(0!==b){if(r.isMesh)!0===i.wireframe?(X.setLineWidth(i.wireframeLinewidth*j()),d.setMode(1)):d.setMode(4);else if(r.isLine){let t=i.linewidth;void 0===t&&(t=1),X.setLineWidth(t*j()),r.isLineSegments?d.setMode(1):r.isLineLoop?d.setMode(2):d.setMode(3);}else r.isPoints?d.setMode(0):r.isSprite&&d.setMode(4);if(r.isInstancedMesh)d.renderInstances(y,b,r.count);else if(n.isInstancedBufferGeometry){const t=Math.min(n.instanceCount,n._maxInstanceCount);d.renderInstances(y,b,t);}else d.render(y,b);}},this.compile=function(t,e){d=rt.get(t,e),d.init(),t.traverse((function(t){t.isLight&&(d.pushLight(t),t.castShadow&&d.pushShadow(t));})),d.setupLights(e);const n=new WeakMap;t.traverse((function(e){const i=e.material;if(i)if(Array.isArray(i))for(let r=0;r<i.length;r++){const s=i[r];!1===n.has(s)&&(At(s,t,e),n.set(s));}else !1===n.has(i)&&(At(i,t,e),n.set(i));}));};let _t=null;const Mt=new un;function St(t,e,n,i){if(!1===t.visible)return;if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)d.pushLight(t),t.castShadow&&d.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||z.intersectsSprite(t)){i&&G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);const e=tt.update(t),r=t.material;r.visible&&u.push(t,e,r,n,G.z,null);}}else if(t.isImmediateRenderObject)i&&G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H),u.push(t,null,t.material,n,G.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==Y.render.frame&&(t.skeleton.update(),t.skeleton.frame=Y.render.frame),!t.frustumCulled||z.intersectsObject(t))){i&&G.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);const e=tt.update(t),r=t.material;if(Array.isArray(r)){const i=e.groups;for(let s=0,o=i.length;s<o;s++){const o=i[s],a=r[o.materialIndex];a&&a.visible&&u.push(t,e,a,n,G.z,o);}}else r.visible&&u.push(t,e,r,n,G.z,null);}const r=t.children;for(let t=0,s=r.length;t<s;t++)St(r[t],e,n,i);}function Tt(t,e,n){const i=!0===e.isScene?e.overrideMaterial:null;for(let r=0,s=t.length;r<s;r++){const s=t[r],o=s.object,a=s.geometry,l=null===i?s.material:i,c=s.group;if(n.isArrayCamera){_=n;const t=n.cameras;for(let n=0,i=t.length;n<i;n++){const i=t[n];o.layers.test(i.layers)&&(X.viewport(M.copy(i.viewport)),d.setupLights(i),Et(o,e,i,a,l,c));}}else _=null,Et(o,e,n,a,l,c);}}function Et(t,e,n,i,r,s){if(t.onBeforeRender(p,e,n,i,r,s),d=rt.get(e,_||n),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){const i=Lt(n,e,r,t);X.setMaterial(r),dt.reset(),function(t,e){t.render((function(t){p.renderBufferImmediate(t,e);}));}(t,i);}else p.renderBufferDirect(n,e,i,r,t,s);t.onAfterRender(p,e,n,i,r,s),d=rt.get(e,_||n);}function At(t,e,n){!0!==e.isScene&&(e=V);const i=J.get(t),r=d.state.lights,s=d.state.shadowsArray,o=r.state.version,a=et.getParameters(t,r.state,s,e,n),l=et.getProgramCacheKey(a);let c=i.program,h=!0;if(void 0===c)t.addEventListener("dispose",bt);else if(c.cacheKey!==l)wt(t);else if(i.lightsStateVersion!==o)h=!1;else {if(void 0!==a.shaderID){const n=t.isMeshStandardMaterial?e.environment:null;return void(i.envMap=K.get(t.envMap||n))}h=!1;}h&&(a.uniforms=et.getUniforms(t),t.onBeforeCompile(a,p),c=et.acquireProgram(a,l),i.program=c,i.uniforms=a.uniforms,i.outputEncoding=a.outputEncoding);const u=i.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(i.numClippingPlanes=st.numPlanes,i.numIntersection=st.numIntersection,u.clippingPlanes=st.uniform),i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=K.get(t.envMap||i.environment),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=o,i.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotShadowMatrix.value=r.state.spotShadowMatrix,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix);const m=i.program.getUniforms(),f=Ai.seqWithValue(m.seq,u);i.uniformsList=f;}function Lt(t,e,n,i){!0!==e.isScene&&(e=V),Z.resetTextureUnits();const r=e.fog,s=n.isMeshStandardMaterial?e.environment:null,o=null===y?p.outputEncoding:y.texture.encoding,a=K.get(n.envMap||s),l=J.get(n),c=d.state.lights;if(!0===k&&(!0===B||t!==w)){const e=t===w&&n.id===b;st.setState(n,t,e);}n.version===l.__version?n.fog&&l.fog!==r||l.environment!==s||l.needsLights&&l.lightsStateVersion!==c.state.version?At(n,e,i):void 0===l.numClippingPlanes||l.numClippingPlanes===st.numPlanes&&l.numIntersection===st.numIntersection?(l.outputEncoding!==o||l.envMap!==a)&&At(n,e,i):At(n,e,i):(At(n,e,i),l.__version=n.version);let h=!1,u=!1,m=!1;const f=l.program,g=f.getUniforms(),v=l.uniforms;if(X.useProgram(f.program)&&(h=!0,u=!0,m=!0),n.id!==b&&(b=n.id,u=!0),h||w!==t){if(g.setValue(pt,"projectionMatrix",t.projectionMatrix),q.logarithmicDepthBuffer&&g.setValue(pt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),w!==t&&(w=t,u=!0,m=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){const e=g.map.cameraPosition;void 0!==e&&e.setValue(pt,G.setFromMatrixPosition(t.matrixWorld));}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&g.setValue(pt,"isOrthographic",!0===t.isOrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||n.skinning)&&g.setValue(pt,"viewMatrix",t.matrixWorldInverse);}if(n.skinning){g.setOptional(pt,i,"bindMatrix"),g.setOptional(pt,i,"bindMatrixInverse");const t=i.skeleton;if(t){const e=t.bones;if(q.floatVertexTextures){if(void 0===t.boneTexture){let n=Math.sqrt(4*e.length);n=T.ceilPowerOfTwo(n),n=Math.max(n,4);const i=new Float32Array(n*n*4);i.set(t.boneMatrices);const r=new an(i,n,n,1023,1015);t.boneMatrices=i,t.boneTexture=r,t.boneTextureSize=n;}g.setValue(pt,"boneTexture",t.boneTexture,Z),g.setValue(pt,"boneTextureSize",t.boneTextureSize);}else g.setOptional(pt,t,"boneMatrices");}}var x,_;return (u||l.receiveShadow!==i.receiveShadow)&&(l.receiveShadow=i.receiveShadow,g.setValue(pt,"receiveShadow",i.receiveShadow)),u&&(g.setValue(pt,"toneMappingExposure",p.toneMappingExposure),l.needsLights&&(_=m,(x=v).ambientLightColor.needsUpdate=_,x.lightProbe.needsUpdate=_,x.directionalLights.needsUpdate=_,x.directionalLightShadows.needsUpdate=_,x.pointLights.needsUpdate=_,x.pointLightShadows.needsUpdate=_,x.spotLights.needsUpdate=_,x.spotLightShadows.needsUpdate=_,x.rectAreaLights.needsUpdate=_,x.hemisphereLights.needsUpdate=_),r&&n.fog&&nt.refreshFogUniforms(v,r),nt.refreshMaterialUniforms(v,n,C,R),Ai.upload(pt,l.uniformsList,v,Z)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(Ai.upload(pt,l.uniformsList,v,Z),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&g.setValue(pt,"center",i.center),g.setValue(pt,"modelViewMatrix",i.modelViewMatrix),g.setValue(pt,"normalMatrix",i.normalMatrix),g.setValue(pt,"modelMatrix",i.matrixWorld),f}Mt.setAnimationLoop((function(t){gt.isPresenting||_t&&_t(t);})),"undefined"!=typeof window&&Mt.setContext(window),this.setAnimationLoop=function(t){_t=t,gt.setAnimationLoop(t),null===t?Mt.stop():Mt.start();},this.render=function(t,e){let n,i;if(void 0!==arguments[2]&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),n=arguments[2]),void 0!==arguments[3]&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),i=arguments[3]),void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===m)return;dt.resetDefaultState(),b=-1,w=null,!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),!0===gt.enabled&&!0===gt.isPresenting&&(e=gt.getCamera(e)),!0===t.isScene&&t.onBeforeRender(p,t,e,n||y),d=rt.get(t,e),d.init(),H.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),z.setFromProjectionMatrix(H),B=this.localClippingEnabled,k=st.init(this.clippingPlanes,B,e),u=it.get(t,e),u.init(),St(t,e,0,p.sortObjects),u.finish(),!0===p.sortObjects&&u.sort(P,I),!0===k&&st.beginShadows();const r=d.state.shadowsArray;vt.render(r,t,e),d.setupLights(e),!0===k&&st.endShadows(),!0===this.info.autoReset&&this.info.reset(),void 0!==n&&this.setRenderTarget(n),ot.render(u,t,e,i);const s=u.opaque,o=u.transparent;s.length>0&&Tt(s,t,e),o.length>0&&Tt(o,t,e),!0===t.isScene&&t.onAfterRender(p,t,e),null!==y&&(Z.updateRenderTargetMipmap(y),Z.updateMultisampleRenderTarget(y)),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1),u=null,d=null;},this.setFramebuffer=function(t){f!==t&&null===y&&pt.bindFramebuffer(36160,t),f=t;},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderList=function(){return u},this.setRenderList=function(t){u=t;},this.getRenderState=function(){return d},this.setRenderState=function(t){d=t;},this.getRenderTarget=function(){return y},this.setRenderTarget=function(t,e=0,n=0){y=t,g=e,v=n,t&&void 0===J.get(t).__webglFramebuffer&&Z.setupRenderTarget(t);let i=f,r=!1;if(t){const n=J.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(i=n[e],r=!0):i=t.isWebGLMultisampleRenderTarget?J.get(t).__webglMultisampledFramebuffer:n,M.copy(t.viewport),S.copy(t.scissor),A=t.scissorTest;}else M.copy(D).multiplyScalar(C).floor(),S.copy(N).multiplyScalar(C).floor(),A=U;if(x!==i&&(pt.bindFramebuffer(36160,i),x=i),X.viewport(M),X.scissor(S),X.setScissorTest(A),r){const i=J.get(t.texture);pt.framebufferTexture2D(36160,36064,34069+e,i.__webglTexture,n);}},this.readRenderTargetPixels=function(t,e,n,i,r,s,o){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let a=J.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==o&&(a=a[o]),a){let o=!1;a!==x&&(pt.bindFramebuffer(36160,a),o=!0);try{const a=t.texture,l=a.format,c=a.type;if(1023!==l&&ut.convert(l)!==pt.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(1009===c||ut.convert(c)===pt.getParameter(35738)||1015===c&&(q.isWebGL2||W.get("OES_texture_float")||W.get("WEBGL_color_buffer_float"))||1016===c&&(q.isWebGL2?W.get("EXT_color_buffer_float"):W.get("EXT_color_buffer_half_float"))))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");36053===pt.checkFramebufferStatus(36160)?e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&pt.readPixels(e,n,i,r,ut.convert(l),ut.convert(c),s):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");}finally{o&&pt.bindFramebuffer(36160,x);}}},this.copyFramebufferToTexture=function(t,e,n){void 0===n&&(n=0);const i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i),o=ut.convert(e.format);Z.setTexture2D(e,0),pt.copyTexImage2D(3553,n,o,t.x,t.y,r,s,0),X.unbindTexture();},this.copyTextureToTexture=function(t,e,n,i){void 0===i&&(i=0);const r=e.image.width,s=e.image.height,o=ut.convert(n.format),a=ut.convert(n.type);Z.setTexture2D(n,0),pt.pixelStorei(37440,n.flipY),pt.pixelStorei(37441,n.premultiplyAlpha),pt.pixelStorei(3317,n.unpackAlignment),e.isDataTexture?pt.texSubImage2D(3553,i,t.x,t.y,r,s,o,a,e.image.data):e.isCompressedTexture?pt.compressedTexSubImage2D(3553,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,o,e.mipmaps[0].data):pt.texSubImage2D(3553,i,t.x,t.y,o,a,e.image),0===i&&n.generateMipmaps&&pt.generateMipmap(3553),X.unbindTexture();},this.initTexture=function(t){Z.setTexture2D(t,0),X.unbindTexture();},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function yr(t){vr.call(this,t);}dr.prototype=Object.assign(Object.create(nn.prototype),{constructor:dr,isArrayCamera:!0}),pr.prototype=Object.assign(Object.create(Nt.prototype),{constructor:pr,isGroup:!0}),Object.assign(mr.prototype,{constructor:mr,getHandSpace:function(){if(null===this._hand&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const t=new pr;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t);}return this._hand},getTargetRaySpace:function(){return null===this._targetRay&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return null===this._grip&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(t)if(l&&t.hand){s=!0;for(let i=0;i<=window.XRHand.LITTLE_PHALANX_TIP;i++)if(t.hand[i]){const r=e.getJointPose(t.hand[i],n),s=l.joints[i];null!==r&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.jointRadius=r.radius),s.visible=null!==r;const o=l.joints[window.XRHand.INDEX_PHALANX_TIP],a=l.joints[window.XRHand.THUMB_PHALANX_TIP],c=o.position.distanceTo(a.position),h=.02,u=.005;l.inputState.pinching&&c>h+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&c<=h-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}));}}else null!==o&&(i=e.getPose(t.targetRaySpace,n),null!==i&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),null!==a&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),null!==r&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return null!==o&&(o.visible=null!==i),null!==a&&(a.visible=null!==r),null!==l&&(l.visible=null!==s),this}}),Object.assign(fr.prototype,_.prototype),yr.prototype=Object.assign(Object.create(vr.prototype),{constructor:yr,isWebGL1Renderer:!0});class xr extends Nt{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.background&&(e.object.background=this.background.toJSON(t)),null!==this.environment&&(e.object.environment=this.environment.toJSON(t)),null!==this.fog&&(e.object.fog=this.fog.toJSON()),e}}function br(t,e){this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=T.generateUUID();}Object.defineProperty(br.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++;}}),Object.assign(br.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},clone:function(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=T.generateUUID()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new br(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),this.stride);return e.setUsage(this.usage),e},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=T.generateUUID()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const wr=new F;function _r(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=!0===i;}function Mr(t){oe.call(this),this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t);}let Sr;Object.defineProperties(_r.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t;}}}),Object.assign(_r.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)wr.x=this.getX(e),wr.y=this.getY(e),wr.z=this.getZ(e),wr.applyMatrix4(t),this.setXYZ(e,wr.x,wr.y,wr.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return new he(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return {itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}),Mr.prototype=Object.create(oe.prototype),Mr.prototype.constructor=Mr,Mr.prototype.isSpriteMaterial=!0,Mr.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};const Tr=new F,Er=new F,Ar=new F,Lr=new E,Rr=new E,Cr=new ht,Pr=new F,Or=new F,Ir=new F,Dr=new E,Nr=new E,Fr=new E;function Ur(t){if(Nt.call(this),this.type="Sprite",void 0===Sr){Sr=new Re;const t=new br(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new _r(t,3,0,!1)),Sr.setAttribute("uv",new _r(t,2,3,!1));}this.geometry=Sr,this.material=void 0!==t?t:new Mr,this.center=new E(.5,.5);}function zr(t,e,n,i,r,s){Lr.subVectors(t,n).addScalar(.5).multiply(i),void 0!==r?(Rr.x=s*Lr.x-r*Lr.y,Rr.y=r*Lr.x+s*Lr.y):Rr.copy(Lr),t.copy(e),t.x+=Rr.x,t.y+=Rr.y,t.applyMatrix4(Cr);}Ur.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Ur,isSprite:!0,raycast:function(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),Cr.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&Er.multiplyScalar(-Ar.z);const n=this.material.rotation;let i,r;0!==n&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;zr(Pr.set(-.5,-.5,0),Ar,s,Er,i,r),zr(Or.set(.5,-.5,0),Ar,s,Er,i,r),zr(Ir.set(.5,.5,0),Ar,s,Er,i,r),Dr.set(0,0),Nr.set(1,0),Fr.set(1,1);let o=t.ray.intersectTriangle(Pr,Or,Ir,!1,Tr);if(null===o&&(zr(Or.set(-.5,.5,0),Ar,s,Er,i,r),Nr.set(0,1),o=t.ray.intersectTriangle(Pr,Ir,Or,!1,Tr),null===o))return;const a=t.ray.origin.distanceTo(Tr);a<t.near||a>t.far||e.push({distance:a,point:Tr.clone(),uv:Zt.getUV(Tr,Pr,Or,Ir,Dr,Nr,Fr,new E),face:null,object:this});},copy:function(t){return Nt.prototype.copy.call(this,t),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}});const kr=new F,Br=new F;function Hr(){Nt.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0;}function Gr(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Xe.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ht,this.bindMatrixInverse=new ht;}Hr.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Hr,isLOD:!0,copy:function(t){Nt.prototype.copy.call(this,t,!1);const e=t.levels;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.addLevel(n.object.clone(),n.distance);}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){void 0===e&&(e=0),e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){kr.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(kr);this.getObjectForDistance(n).raycast(t,e);}},update:function(t){const e=this.levels;if(e.length>1){kr.setFromMatrixPosition(t.matrixWorld),Br.setFromMatrixPosition(this.matrixWorld);const n=kr.distanceTo(Br)/t.zoom;let i,r;for(e[0].object.visible=!0,i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1;}},toJSON:function(t){const e=Nt.prototype.toJSON.call(this,t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let t=0,i=n.length;t<i;t++){const i=n[t];e.object.levels.push({object:i.object.uuid,distance:i.distance});}return e}}),Gr.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Gr,isSkinnedMesh:!0,copy:function(t){return Xe.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e);},pose:function(){this.skeleton.pose();},normalizeSkinWeights:function(){const t=new O,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w);}},updateMatrixWorld:function(t){Xe.prototype.updateMatrixWorld.call(this,t),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);},boneTransform:function(){const t=new F,e=new O,n=new O,i=new F,r=new ht;return function(s,o){const a=this.skeleton,l=this.geometry;e.fromBufferAttribute(l.attributes.skinIndex,s),n.fromBufferAttribute(l.attributes.skinWeight,s),t.fromBufferAttribute(l.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let s=0;s<4;s++){const l=n.getComponent(s);if(0!==l){const n=e.getComponent(s);r.multiplyMatrices(a.bones[n].matrixWorld,a.boneInverses[n]),o.addScaledVector(i.copy(t).applyMatrix4(r),l);}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const Vr=new ht,jr=new ht;function Wr(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),this.frame=-1,void 0===e)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else {console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new ht);}}function qr(){Nt.call(this),this.type="Bone";}Object.assign(Wr.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++){const e=new ht;this.bones[t]&&e.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(e);}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.getInverse(this.boneInverses[t]);}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale));}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let i=0,r=t.length;i<r;i++){const r=t[i]?t[i].matrixWorld:jr;Vr.multiplyMatrices(r,e[i]),Vr.toArray(n,16*i);}void 0!==i&&(i.needsUpdate=!0);},clone:function(){return new Wr(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const n=this.bones[e];if(n.name===t)return n}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0);}}),qr.prototype=Object.assign(Object.create(Nt.prototype),{constructor:qr,isBone:!0});const Xr=new ht,Yr=new ht,Jr=[],Zr=new Xe;function Kr(t,e,n){Xe.call(this,t,e),this.instanceMatrix=new he(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;}function Qr(t){oe.call(this),this.type="LineBasicMaterial",this.color=new ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t);}Kr.prototype=Object.assign(Object.create(Xe.prototype),{constructor:Kr,isInstancedMesh:!0,copy:function(t){return Xe.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},setColorAt:function(t,e){null===this.instanceColor&&(this.instanceColor=new he(new Float32Array(3*this.count),3)),e.toArray(this.instanceColor.array,3*t);},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,16*t);},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,void 0!==Zr.material)for(let r=0;r<i;r++){this.getMatrixAt(r,Xr),Yr.multiplyMatrices(n,Xr),Zr.matrixWorld=Yr,Zr.raycast(t,Jr);for(let t=0,n=Jr.length;t<n;t++){const n=Jr[t];n.instanceId=r,n.object=this,e.push(n);}Jr.length=0;}},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,16*t);},updateMorphTargets:function(){}}),Qr.prototype=Object.create(oe.prototype),Qr.prototype.constructor=Qr,Qr.prototype.isLineBasicMaterial=!0,Qr.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const $r=new F,ts=new F,es=new ht,ns=new ct,is=new et;function rs(t,e,n){1===n&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),Nt.call(this),this.type="Line",this.geometry=void 0!==t?t:new Re,this.material=void 0!==e?e:new Qr,this.updateMorphTargets();}rs.prototype=Object.assign(Object.create(Nt.prototype),{constructor:rs,isLine:!0,copy:function(t){return Nt.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(null===t.index){const e=t.attributes.position,n=[0];for(let t=1,i=e.count;t<i;t++)$r.fromBufferAttribute(e,t-1),ts.fromBufferAttribute(e,t),n[t]=n[t-1],n[t]+=$r.distanceTo(ts);t.setAttribute("lineDistance",new ye(n,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let t=1,i=e.length;t<i;t++)n[t]=n[t-1],n[t]+=e[t-1].distanceTo(e[t]);}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(null===n.boundingSphere&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=r,!1===t.ray.intersectsSphere(is))return;es.getInverse(i),ns.copy(t.ray).applyMatrix4(es);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new F,l=new F,c=new F,h=new F,u=this.isLineSegments?2:1;if(n.isBufferGeometry){const i=n.index,r=n.attributes.position;if(null!==i){const n=i.array;for(let i=0,s=n.length-1;i<s;i+=u){const s=n[i],u=n[i+1];a.fromBufferAttribute(r,s),l.fromBufferAttribute(r,u);if(ns.distanceSqToSegment(a,l,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);const d=t.ray.origin.distanceTo(h);d<t.near||d>t.far||e.push({distance:d,point:c.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this});}}else for(let n=0,i=r.count-1;n<i;n+=u){a.fromBufferAttribute(r,n),l.fromBufferAttribute(r,n+1);if(ns.distanceSqToSegment(a,l,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);const i=t.ray.origin.distanceTo(h);i<t.near||i>t.far||e.push({distance:i,point:c.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}else if(n.isGeometry){const i=n.vertices,r=i.length;for(let n=0;n<r-1;n+=u){if(ns.distanceSqToSegment(i[n],i[n+1],h,c)>o)continue;h.applyMatrix4(this.matrixWorld);const r=t.ray.origin.distanceTo(h);r<t.near||r>t.far||e.push({distance:r,point:c.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const t=e[n[0]];if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e;}}}}else {const e=t.morphTargets;void 0!==e&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");}}});const ss=new F,os=new F;function as(t,e){rs.call(this,t,e),this.type="LineSegments";}function ls(t,e){rs.call(this,t,e),this.type="LineLoop";}function cs(t){oe.call(this),this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t);}as.prototype=Object.assign(Object.create(rs.prototype),{constructor:as,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(null===t.index){const e=t.attributes.position,n=[];for(let t=0,i=e.count;t<i;t+=2)ss.fromBufferAttribute(e,t),os.fromBufferAttribute(e,t+1),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+ss.distanceTo(os);t.setAttribute("lineDistance",new ye(n,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let t=0,i=e.length;t<i;t+=2)ss.copy(e[t]),os.copy(e[t+1]),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+ss.distanceTo(os);}return this}}),ls.prototype=Object.assign(Object.create(rs.prototype),{constructor:ls,isLineLoop:!0}),cs.prototype=Object.create(oe.prototype),cs.prototype.constructor=cs,cs.prototype.isPointsMaterial=!0,cs.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const hs=new ht,us=new ct,ds=new et,ps=new F;function ms(t,e){Nt.call(this),this.type="Points",this.geometry=void 0!==t?t:new Re,this.material=void 0!==e?e:new cs,this.updateMorphTargets();}function fs(t,e,n,i,r,s,o){const a=us.distanceSqToPoint(t);if(a<n){const n=new F;us.closestPointToPoint(t,n),n.applyMatrix4(i);const l=r.ray.origin.distanceTo(n);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:n,index:e,face:null,object:o});}}function gs(t,e,n,i,r,s,o,a,l){P.call(this,t,e,n,i,r,s,o,a,l),this.format=void 0!==o?o:1022,this.minFilter=void 0!==s?s:1006,this.magFilter=void 0!==r?r:1006,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e);}));}function vs(t,e,n,i,r,s,o,a,l,c,h,u){P.call(this,null,s,o,a,l,c,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1;}function ys(t,e,n,i,r,s,o,a,l){P.call(this,t,e,n,i,r,s,o,a,l),this.needsUpdate=!0;}function xs(t,e,n,i,r,s,o,a,l,c){if(1026!==(c=void 0!==c?c:1026)&&1027!==c)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&1026===c&&(n=1012),void 0===n&&1027===c&&(n=1020),P.call(this,null,i,r,s,o,a,c,n,l),this.image={width:t,height:e},this.magFilter=void 0!==o?o:1003,this.minFilter=void 0!==a?a:1003,this.flipY=!1,this.generateMipmaps=!1;}ms.prototype=Object.assign(Object.create(Nt.prototype),{constructor:ms,isPoints:!0,copy:function(t){return Nt.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(null===n.boundingSphere&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=r,!1===t.ray.intersectsSphere(ds))return;hs.getInverse(i),us.copy(t.ray).applyMatrix4(hs);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const r=n.index,s=n.attributes.position;if(null!==r){const n=r.array;for(let r=0,a=n.length;r<a;r++){const a=n[r];ps.fromBufferAttribute(s,a),fs(ps,a,o,i,t,e,this);}}else for(let n=0,r=s.count;n<r;n++)ps.fromBufferAttribute(s,n),fs(ps,n,o,i,t,e,this);}else {const r=n.vertices;for(let n=0,s=r.length;n<s;n++)fs(r[n],n,o,i,t,e,this);}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const t=e[n[0]];if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e;}}}}else {const e=t.morphTargets;void 0!==e&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");}}}),gs.prototype=Object.assign(Object.create(P.prototype),{constructor:gs,isVideoTexture:!0,update:function(){const t=this.image;!1==="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}}),vs.prototype=Object.create(P.prototype),vs.prototype.constructor=vs,vs.prototype.isCompressedTexture=!0,ys.prototype=Object.create(P.prototype),ys.prototype.constructor=ys,ys.prototype.isCanvasTexture=!0,xs.prototype=Object.create(P.prototype),xs.prototype.constructor=xs,xs.prototype.isDepthTexture=!0;let bs=0;const ws=new ht,_s=new Nt,Ms=new F;function Ss(){Object.defineProperty(this,"id",{value:bs+=2}),this.uuid=T.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1;}Ss.prototype=Object.assign(Object.create(_.prototype),{constructor:Ss,isGeometry:!0,applyMatrix4:function(t){const e=(new A).getNormalMatrix(t);for(let e=0,n=this.vertices.length;e<n;e++){this.vertices[e].applyMatrix4(t);}for(let t=0,n=this.faces.length;t<n;t++){const n=this.faces[t];n.normal.applyMatrix3(e).normalize();for(let t=0,i=n.vertexNormals.length;t<i;t++)n.vertexNormals[t].applyMatrix3(e).normalize();}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return ws.makeRotationX(t),this.applyMatrix4(ws),this},rotateY:function(t){return ws.makeRotationY(t),this.applyMatrix4(ws),this},rotateZ:function(t){return ws.makeRotationZ(t),this.applyMatrix4(ws),this},translate:function(t,e,n){return ws.makeTranslation(t,e,n),this.applyMatrix4(ws),this},scale:function(t,e,n){return ws.makeScale(t,e,n),this.applyMatrix4(ws),this},lookAt:function(t){return _s.lookAt(t),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this},fromBufferGeometry:function(t){const e=this,n=null!==t.index?t.index:void 0,i=t.attributes;if(void 0===i.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,l=i.uv2;void 0!==l&&(this.faceVertexUvs[1]=[]);for(let t=0;t<r.count;t++)e.vertices.push((new F).fromBufferAttribute(r,t)),void 0!==o&&e.colors.push((new ie).fromBufferAttribute(o,t));function c(t,n,i,r){const c=void 0===o?[]:[e.colors[t].clone(),e.colors[n].clone(),e.colors[i].clone()],h=void 0===s?[]:[(new F).fromBufferAttribute(s,t),(new F).fromBufferAttribute(s,n),(new F).fromBufferAttribute(s,i)],u=new re(t,n,i,h,c,r);e.faces.push(u),void 0!==a&&e.faceVertexUvs[0].push([(new E).fromBufferAttribute(a,t),(new E).fromBufferAttribute(a,n),(new E).fromBufferAttribute(a,i)]),void 0!==l&&e.faceVertexUvs[1].push([(new E).fromBufferAttribute(l,t),(new E).fromBufferAttribute(l,n),(new E).fromBufferAttribute(l,i)]);}const h=t.groups;if(h.length>0)for(let t=0;t<h.length;t++){const e=h[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)void 0!==n?c(n.getX(t),n.getX(t+1),n.getX(t+2),e.materialIndex):c(t,t+1,t+2,e.materialIndex);}else if(void 0!==n)for(let t=0;t<n.count;t+=3)c(n.getX(t),n.getX(t+1),n.getX(t+2));else for(let t=0;t<r.count;t+=3)c(t,t+1,t+2);return this.computeFaceNormals(),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=0===e?1:1/e,i=new ht;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new F,e=new F;for(let n=0,i=this.faces.length;n<i;n++){const i=this.faces[n],r=this.vertices[i.a],s=this.vertices[i.b],o=this.vertices[i.c];t.subVectors(o,s),e.subVectors(r,s),t.cross(e),t.normalize(),i.normal.copy(t);}},computeVertexNormals:function(t){void 0===t&&(t=!0);const e=new Array(this.vertices.length);for(let t=0,n=this.vertices.length;t<n;t++)e[t]=new F;if(t){const t=new F,n=new F;for(let i=0,r=this.faces.length;i<r;i++){const r=this.faces[i],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),n.subVectors(s,o),t.cross(n),e[r.a].add(t),e[r.b].add(t),e[r.c].add(t);}}else {this.computeFaceNormals();for(let t=0,n=this.faces.length;t<n;t++){const n=this.faces[t];e[n.a].add(n.normal),e[n.b].add(n.normal),e[n.c].add(n.normal);}}for(let t=0,n=this.vertices.length;t<n;t++)e[t].normalize();for(let t=0,n=this.faces.length;t<n;t++){const n=this.faces[t],i=n.vertexNormals;3===i.length?(i[0].copy(e[n.a]),i[1].copy(e[n.b]),i[2].copy(e[n.c])):(i[0]=e[n.a].clone(),i[1]=e[n.b].clone(),i[2]=e[n.c].clone());}this.faces.length>0&&(this.normalsNeedUpdate=!0);},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const e=this.faces[t],n=e.vertexNormals;3===n.length?(n[0].copy(e.normal),n[1].copy(e.normal),n[2].copy(e.normal)):(n[0]=e.normal.clone(),n[1]=e.normal.clone(),n[2]=e.normal.clone());}this.faces.length>0&&(this.normalsNeedUpdate=!0);},computeMorphNormals:function(){for(let t=0,e=this.faces.length;t<e;t++){const e=this.faces[t];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]);for(let t=0,n=e.vertexNormals.length;t<n;t++)e.__originalVertexNormals[t]?e.__originalVertexNormals[t].copy(e.vertexNormals[t]):e.__originalVertexNormals[t]=e.vertexNormals[t].clone();}const t=new Ss;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const t=this.morphNormals[e].faceNormals,n=this.morphNormals[e].vertexNormals;for(let e=0,i=this.faces.length;e<i;e++){const e=new F,i={a:new F,b:new F,c:new F};t.push(e),n.push(i);}}const n=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let t=0,e=this.faces.length;t<e;t++){const e=this.faces[t],i=n.faceNormals[t],r=n.vertexNormals[t];i.copy(e.normal),r.a.copy(e.vertexNormals[0]),r.b.copy(e.vertexNormals[1]),r.c.copy(e.vertexNormals[2]);}}for(let t=0,e=this.faces.length;t<e;t++){const e=this.faces[t];e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals;}},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new k),this.boundingBox.setFromPoints(this.vertices);},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new et),this.boundingSphere.setFromPoints(this.vertices);},merge:function(t,e,n){if(!t||!t.isGeometry)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,l=t.faces,c=this.colors,h=t.colors;void 0===n&&(n=0),void 0!==e&&(i=(new A).getNormalMatrix(e));for(let t=0,n=o.length;t<n;t++){const n=o[t].clone();void 0!==e&&n.applyMatrix4(e),s.push(n);}for(let t=0,e=h.length;t<e;t++)c.push(h[t].clone());for(let t=0,e=l.length;t<e;t++){const e=l[t];let s,o;const c=e.vertexNormals,h=e.vertexColors,u=new re(e.a+r,e.b+r,e.c+r);u.normal.copy(e.normal),void 0!==i&&u.normal.applyMatrix3(i).normalize();for(let t=0,e=c.length;t<e;t++)s=c[t].clone(),void 0!==i&&s.applyMatrix3(i).normalize(),u.vertexNormals.push(s);u.color.copy(e.color);for(let t=0,e=h.length;t<e;t++)o=h[t],u.vertexColors.push(o.clone());u.materialIndex=e.materialIndex+n,a.push(u);}for(let e=0,n=t.faceVertexUvs.length;e<n;e++){const n=t.faceVertexUvs[e];void 0===this.faceVertexUvs[e]&&(this.faceVertexUvs[e]=[]);for(let t=0,i=n.length;t<i;t++){const i=n[t],r=[];for(let t=0,e=i.length;t<e;t++)r.push(i[t].clone());this.faceVertexUvs[e].push(r);}}},mergeMesh:function(t){t&&t.isMesh?(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);},mergeVertices:function(){const t={},e=[],n=[],i=Math.pow(10,4);for(let r=0,s=this.vertices.length;r<s;r++){const s=this.vertices[r],o=Math.round(s.x*i)+"_"+Math.round(s.y*i)+"_"+Math.round(s.z*i);void 0===t[o]?(t[o]=r,e.push(this.vertices[r]),n[r]=e.length-1):n[r]=n[t[o]];}const r=[];for(let t=0,e=this.faces.length;t<e;t++){const e=this.faces[t];e.a=n[e.a],e.b=n[e.b],e.c=n[e.c];const i=[e.a,e.b,e.c];for(let e=0;e<3;e++)if(i[e]===i[(e+1)%3]){r.push(t);break}}for(let t=r.length-1;t>=0;t--){const e=r[t];this.faces.splice(e,1);for(let t=0,n=this.faceVertexUvs.length;t<n;t++)this.faceVertexUvs[t].splice(e,1);}const s=this.vertices.length-e.length;return this.vertices=e,s},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const n=t[e];this.vertices.push(new F(n.x,n.y,n.z||0));}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let n=0;n<e;n++)t[n]._id=n;t.sort((function(t,e){return t.materialIndex-e.materialIndex}));const n=this.faceVertexUvs[0],i=this.faceVertexUvs[1];let r,s;n&&n.length===e&&(r=[]),i&&i.length===e&&(s=[]);for(let o=0;o<e;o++){const e=t[o]._id;r&&r.push(n[e]),s&&s.push(i[e]);}r&&(this.faceVertexUvs[0]=r),s&&(this.faceVertexUvs[1]=s);},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}const e=[];for(let t=0;t<this.vertices.length;t++){const n=this.vertices[t];e.push(n.x,n.y,n.z);}const n=[],i=[],r={},s=[],o={},a=[],l={};for(let t=0;t<this.faces.length;t++){const e=this.faces[t],i=!0,r=!1,s=void 0!==this.faceVertexUvs[0][t],o=e.normal.length()>0,a=e.vertexNormals.length>0,l=1!==e.color.r||1!==e.color.g||1!==e.color.b,p=e.vertexColors.length>0;let m=0;if(m=c(m,0,0),m=c(m,1,i),m=c(m,2,r),m=c(m,3,s),m=c(m,4,o),m=c(m,5,a),m=c(m,6,l),m=c(m,7,p),n.push(m),n.push(e.a,e.b,e.c),n.push(e.materialIndex),s){const e=this.faceVertexUvs[0][t];n.push(d(e[0]),d(e[1]),d(e[2]));}if(o&&n.push(h(e.normal)),a){const t=e.vertexNormals;n.push(h(t[0]),h(t[1]),h(t[2]));}if(l&&n.push(u(e.color)),p){const t=e.vertexColors;n.push(u(t[0]),u(t[1]),u(t[2]));}}function c(t,e,n){return n?t|1<<e:t&~(1<<e)}function h(t){const e=t.x.toString()+t.y.toString()+t.z.toString();return void 0!==r[e]||(r[e]=i.length/3,i.push(t.x,t.y,t.z)),r[e]}function u(t){const e=t.r.toString()+t.g.toString()+t.b.toString();return void 0!==o[e]||(o[e]=s.length,s.push(t.getHex())),o[e]}function d(t){const e=t.x.toString()+t.y.toString();return void 0!==l[e]||(l[e]=a.length/2,a.push(t.x,t.y)),l[e]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return (new Ss).copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let t=0,n=e.length;t<n;t++)this.vertices.push(e[t].clone());const n=t.colors;for(let t=0,e=n.length;t<e;t++)this.colors.push(n[t].clone());const i=t.faces;for(let t=0,e=i.length;t<e;t++)this.faces.push(i[t].clone());for(let e=0,n=t.faceVertexUvs.length;e<n;e++){const n=t.faceVertexUvs[e];void 0===this.faceVertexUvs[e]&&(this.faceVertexUvs[e]=[]);for(let t=0,i=n.length;t<i;t++){const i=n[t],r=[];for(let t=0,e=i.length;t<e;t++){const e=i[t];r.push(e.clone());}this.faceVertexUvs[e].push(r);}}const r=t.morphTargets;for(let t=0,e=r.length;t<e;t++){const e={};if(e.name=r[t].name,void 0!==r[t].vertices){e.vertices=[];for(let n=0,i=r[t].vertices.length;n<i;n++)e.vertices.push(r[t].vertices[n].clone());}if(void 0!==r[t].normals){e.normals=[];for(let n=0,i=r[t].normals.length;n<i;n++)e.normals.push(r[t].normals[n].clone());}this.morphTargets.push(e);}const s=t.morphNormals;for(let t=0,e=s.length;t<e;t++){const e={};if(void 0!==s[t].vertexNormals){e.vertexNormals=[];for(let n=0,i=s[t].vertexNormals.length;n<i;n++){const i=s[t].vertexNormals[n],r={};r.a=i.a.clone(),r.b=i.b.clone(),r.c=i.c.clone(),e.vertexNormals.push(r);}}if(void 0!==s[t].faceNormals){e.faceNormals=[];for(let n=0,i=s[t].faceNormals.length;n<i;n++)e.faceNormals.push(s[t].faceNormals[n].clone());}this.morphNormals.push(e);}const o=t.skinWeights;for(let t=0,e=o.length;t<e;t++)this.skinWeights.push(o[t].clone());const a=t.skinIndices;for(let t=0,e=a.length;t<e;t++)this.skinIndices.push(a[t].clone());const l=t.lineDistances;for(let t=0,e=l.length;t<e;t++)this.lineDistances.push(l[t]);const c=t.boundingBox;null!==c&&(this.boundingBox=c.clone());const h=t.boundingSphere;return null!==h&&(this.boundingSphere=h.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"});}});new F,new F,new F,new Zt;const Ts=function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Es(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,p;if(i&&(s=function(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Es(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Us(c));for(r.sort(Is),s=0;s<r.length;s++)Ds(r[s],n),n=As(n,n.next);return n}(t,e,s,n)),t.length>80*n){a=c=t[0],l=h=t[1];for(let e=n;e<r;e+=n)u=t[e],d=t[e+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=0!==p?1/p:0;}return Ls(s,o,n,a,l,p),o};function Es(t,e,n,i,r){let s,o;if(r===function(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Xs(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Xs(s,t[s],t[s+1],o);return o&&Hs(o,o.next)&&(Ys(o),o=o.next),o}function As(t,e){if(!t)return t;e||(e=t);let n,i=t;do{if(n=!1,i.steiner||!Hs(i,i.next)&&0!==Bs(i.prev,i,i.next))i=i.next;else {if(Ys(i),i=e=i.prev,i===i.next)break;n=!0;}}while(n||i!==e);return e}function Ls(t,e,n,i,r,s,o){if(!t)return;!o&&s&&function(t,e,n,i){let r=t;do{null===r.z&&(r.z=Fs(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,i);e++);for(l=c;a>0||l>0&&i;)0!==a&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i;}s.nextZ=null,c*=2;}while(o>1)}(r);}(t,i,r,s);let a,l,c=t;for(;t.prev!==t.next;)if(a=t.prev,l=t.next,s?Cs(t,i,r,s):Rs(t))e.push(a.i/n),e.push(t.i/n),e.push(l.i/n),Ys(t),t=l.next,c=l.next;else if((t=l)===c){o?1===o?Ls(t=Ps(As(t),e,n),e,n,i,r,s,2):2===o&&Os(t,e,n,i,r,s):Ls(As(t),e,n,i,r,s,1);break}}function Rs(t){const e=t.prev,n=t,i=t.next;if(Bs(e,n,i)>=0)return !1;let r=t.next.next;for(;r!==t.prev;){if(zs(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Bs(r.prev,r,r.next)>=0)return !1;r=r.next;}return !0}function Cs(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Bs(r,s,o)>=0)return !1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=Fs(a,l,e,n,i),d=Fs(c,h,e,n,i);let p=t.prevZ,m=t.nextZ;for(;p&&p.z>=u&&m&&m.z<=d;){if(p!==t.prev&&p!==t.next&&zs(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Bs(p.prev,p,p.next)>=0)return !1;if(p=p.prevZ,m!==t.prev&&m!==t.next&&zs(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Bs(m.prev,m,m.next)>=0)return !1;m=m.nextZ;}for(;p&&p.z>=u;){if(p!==t.prev&&p!==t.next&&zs(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Bs(p.prev,p,p.next)>=0)return !1;p=p.prevZ;}for(;m&&m.z<=d;){if(m!==t.prev&&m!==t.next&&zs(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Bs(m.prev,m,m.next)>=0)return !1;m=m.nextZ;}return !0}function Ps(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Hs(r,s)&&Gs(r,i,i.next,s)&&Ws(r,s)&&Ws(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Ys(i),Ys(i.next),i=t=s),i=i.next;}while(i!==t);return As(i)}function Os(t,e,n,i,r,s){let o=t;do{let t=o.next.next;for(;t!==o.prev;){if(o.i!==t.i&&ks(o,t)){let a=qs(o,t);return o=As(o,o.next),a=As(a,a.next),Ls(o,e,n,i,r,s),void Ls(a,e,n,i,r,s)}t=t.next;}o=o.next;}while(o!==t)}function Is(t,e){return t.x-e.x}function Ds(t,e){if(e=function(t,e){let n=e;const i=t.x,r=t.y;let s,o=-1/0;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const t=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=i&&t>o){if(o=t,t===i){if(r===n.y)return n;if(r===n.next.y)return n.next}s=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!s)return null;if(i===o)return s;const a=s,l=s.x,c=s.y;let h,u=1/0;n=s;do{i>=n.x&&n.x>=l&&i!==n.x&&zs(r<c?i:o,r,l,c,r<c?o:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Ws(n,t)&&(h<u||h===u&&(n.x>s.x||n.x===s.x&&Ns(s,n)))&&(s=n,u=h)),n=n.next;}while(n!==a);return s}(t,e)){const n=qs(e,t);As(e,e.next),As(n,n.next);}}function Ns(t,e){return Bs(t.prev,t,e.prev)<0&&Bs(e.next,t,t.next)<0}function Fs(t,e,n,i,r){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Us(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;}while(e!==t);return n}function zs(t,e,n,i,r,s,o,a){return (r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function ks(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Gs(n,n.next,t,e))return !0;n=n.next;}while(n!==t);return !1}(t,e)&&(Ws(t,e)&&Ws(e,t)&&function(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;}while(n!==t);return i}(t,e)&&(Bs(t.prev,t,e.prev)||Bs(t,e.prev,e))||Hs(t,e)&&Bs(t.prev,t,t.next)>0&&Bs(e.prev,e,e.next)>0)}function Bs(t,e,n){return (e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Hs(t,e){return t.x===e.x&&t.y===e.y}function Gs(t,e,n,i){const r=js(Bs(t,e,n)),s=js(Bs(t,e,i)),o=js(Bs(n,i,t)),a=js(Bs(n,i,e));return r!==s&&o!==a||(!(0!==r||!Vs(t,n,e))||(!(0!==s||!Vs(t,i,e))||(!(0!==o||!Vs(n,t,i))||!(0!==a||!Vs(n,e,i)))))}function Vs(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function js(t){return t>0?1:t<0?-1:0}function Ws(t,e){return Bs(t.prev,t,t.next)<0?Bs(t,e,t.next)>=0&&Bs(t,t.prev,e)>=0:Bs(t,e,t.prev)<0||Bs(t,t.next,e)<0}function qs(t,e){const n=new Js(t.i,t.x,t.y),i=new Js(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Xs(t,e,n,i){const r=new Js(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ys(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function Js(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}const Zs={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return .5*n},isClockWise:function(t){return Zs.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];Ks(t),Qs(n,t);let s=t.length;e.forEach(Ks);for(let t=0;t<e.length;t++)i.push(s),s+=e[t].length,Qs(n,e[t]);const o=Ts(n,i);for(let t=0;t<o.length;t+=3)r.push(o.slice(t,t+3));return r}};function Ks(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop();}function Qs(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y);}class $s extends Re{constructor(t,e){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let e=0,n=t.length;e<n;e++){s(t[e]);}function s(t){const s=[],o=void 0!==e.curveSegments?e.curveSegments:12,a=void 0!==e.steps?e.steps:1;let l=void 0!==e.depth?e.depth:100,c=void 0===e.bevelEnabled||e.bevelEnabled,h=void 0!==e.bevelThickness?e.bevelThickness:6,u=void 0!==e.bevelSize?e.bevelSize:h-2,d=void 0!==e.bevelOffset?e.bevelOffset:0,p=void 0!==e.bevelSegments?e.bevelSegments:3;const m=e.extrudePath,f=void 0!==e.UVGenerator?e.UVGenerator:to;void 0!==e.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),l=e.amount);let g,v,y,x,b,w=!1;m&&(g=m.getSpacedPoints(a),w=!0,c=!1,v=m.computeFrenetFrames(a,!1),y=new F,x=new F,b=new F),c||(p=0,h=0,u=0,d=0);const _=t.extractPoints(o);let M=_.shape;const S=_.holes;if(!Zs.isClockWise(M)){M=M.reverse();for(let t=0,e=S.length;t<e;t++){const e=S[t];Zs.isClockWise(e)&&(S[t]=e.reverse());}}const T=Zs.triangulateShape(M,S),A=M;for(let t=0,e=S.length;t<e;t++){const e=S[t];M=M.concat(e);}function L(t,e,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().multiplyScalar(n).add(t)}const R=M.length,C=T.length;function P(t,e,n){let i,r,s;const o=t.x-e.x,a=t.y-e.y,l=n.x-t.x,c=n.y-t.y,h=o*o+a*a,u=o*c-a*l;if(Math.abs(u)>Number.EPSILON){const u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-a/u,m=e.y+o/u,f=((n.x-c/d-p)*c-(n.y+l/d-m)*l)/(o*c-a*l);i=p+o*f-t.x,r=m+a*f-t.y;const g=i*i+r*r;if(g<=2)return new E(i,r);s=Math.sqrt(g/2);}else {let t=!1;o>Number.EPSILON?l>Number.EPSILON&&(t=!0):o<-Number.EPSILON?l<-Number.EPSILON&&(t=!0):Math.sign(a)===Math.sign(c)&&(t=!0),t?(i=-a,r=o,s=Math.sqrt(h)):(i=o,r=a,s=Math.sqrt(h/2));}return new E(i/s,r/s)}const O=[];for(let t=0,e=A.length,n=e-1,i=t+1;t<e;t++,n++,i++)n===e&&(n=0),i===e&&(i=0),O[t]=P(A[t],A[n],A[i]);const I=[];let D,N=O.concat();for(let t=0,e=S.length;t<e;t++){const e=S[t];D=[];for(let t=0,n=e.length,i=n-1,r=t+1;t<n;t++,i++,r++)i===n&&(i=0),r===n&&(r=0),D[t]=P(e[t],e[i],e[r]);I.push(D),N=N.concat(D);}for(let t=0;t<p;t++){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=A.length;t<e;t++){const e=L(A[t],O[t],i);k(e.x,e.y,-n);}for(let t=0,e=S.length;t<e;t++){const e=S[t];D=I[t];for(let t=0,r=e.length;t<r;t++){const r=L(e[t],D[t],i);k(r.x,r.y,-n);}}}const U=u+d;for(let t=0;t<R;t++){const e=c?L(M[t],N[t],U):M[t];w?(x.copy(v.normals[0]).multiplyScalar(e.x),y.copy(v.binormals[0]).multiplyScalar(e.y),b.copy(g[0]).add(x).add(y),k(b.x,b.y,b.z)):k(e.x,e.y,0);}for(let t=1;t<=a;t++)for(let e=0;e<R;e++){const n=c?L(M[e],N[e],U):M[e];w?(x.copy(v.normals[t]).multiplyScalar(n.x),y.copy(v.binormals[t]).multiplyScalar(n.y),b.copy(g[t]).add(x).add(y),k(b.x,b.y,b.z)):k(n.x,n.y,l/a*t);}for(let t=p-1;t>=0;t--){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=A.length;t<e;t++){const e=L(A[t],O[t],i);k(e.x,e.y,l+n);}for(let t=0,e=S.length;t<e;t++){const e=S[t];D=I[t];for(let t=0,r=e.length;t<r;t++){const r=L(e[t],D[t],i);w?k(r.x,r.y+g[a-1].y,g[a-1].x+n):k(r.x,r.y,l+n);}}}function z(t,e){let n=t.length;for(;--n>=0;){const i=n;let r=n-1;r<0&&(r=t.length-1);for(let t=0,n=a+2*p;t<n;t++){const n=R*t,s=R*(t+1);H(e+i+n,e+r+n,e+r+s,e+i+s);}}}function k(t,e,n){s.push(t),s.push(e),s.push(n);}function B(t,e,r){G(t),G(e),G(r);const s=i.length/3,o=f.generateTopUV(n,i,s-3,s-2,s-1);V(o[0]),V(o[1]),V(o[2]);}function H(t,e,r,s){G(t),G(e),G(s),G(e),G(r),G(s);const o=i.length/3,a=f.generateSideWallUV(n,i,o-6,o-3,o-2,o-1);V(a[0]),V(a[1]),V(a[3]),V(a[1]),V(a[2]),V(a[3]);}function G(t){i.push(s[3*t+0]),i.push(s[3*t+1]),i.push(s[3*t+2]);}function V(t){r.push(t.x),r.push(t.y);}!function(){const t=i.length/3;if(c){let t=0,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[2]+e,n[1]+e,n[0]+e);}t=a+2*p,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[0]+e,n[1]+e,n[2]+e);}}else {for(let t=0;t<C;t++){const e=T[t];B(e[2],e[1],e[0]);}for(let t=0;t<C;t++){const e=T[t];B(e[0]+R*a,e[1]+R*a,e[2]+R*a);}}n.addGroup(t,i.length/3-t,0);}(),function(){const t=i.length/3;let e=0;z(A,e),e+=A.length;for(let t=0,n=S.length;t<n;t++){const n=S[t];z(n,e),e+=n.length;}n.addGroup(t,i.length/3-t,1);}();}this.setAttribute("position",new ye(i,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();}toJSON(){const t=Re.prototype.toJSON.call(this);return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(let e=0,i=t.length;e<i;e++){const i=t[e];n.shapes.push(i.uuid);}else n.shapes.push(t.uuid);void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON());return n}(this.parameters.shapes,this.parameters.options,t)}}const to={generateTopUV:function(t,e,n,i,r){const s=e[3*n],o=e[3*n+1],a=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return [new E(s,o),new E(a,l),new E(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[3*n],a=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],v=e[3*s+2];return Math.abs(a-h)<.01?[new E(o,1-l),new E(c,1-u),new E(d,1-m),new E(f,1-v)]:[new E(a,1-l),new E(h,1-u),new E(p,1-m),new E(g,1-v)]}};class eo extends Ss{constructor(t,e){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new $s(t,e)),this.mergeVertices();}toJSON(){const t=super.toJSON();return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(let e=0,i=t.length;e<i;e++){const i=t[e];n.shapes.push(i.uuid);}else n.shapes.push(t.uuid);void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON());return n}(this.parameters.shapes,this.parameters.options,t)}}function no(t,e,n){Re.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,l=new F,c=new F,h=new F,u=new F,d=new F;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const p=e+1;for(let i=0;i<=n;i++){const p=i/n;for(let n=0;n<=e;n++){const i=n/e;t(i,p,c),r.push(c.x,c.y,c.z),i-a>=0?(t(i-a,p,h),u.subVectors(c,h)):(t(i+a,p,h),u.subVectors(h,c)),p-a>=0?(t(i,p-a,h),d.subVectors(c,h)):(t(i,p+a,h),d.subVectors(h,c)),l.crossVectors(u,d).normalize(),s.push(l.x,l.y,l.z),o.push(i,p);}}for(let t=0;t<n;t++)for(let n=0;n<e;n++){const e=t*p+n,r=t*p+n+1,s=(t+1)*p+n+1,o=(t+1)*p+n;i.push(e,r,o),i.push(r,s,o);}this.setIndex(i),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(s,3)),this.setAttribute("uv",new ye(o,2));}function io(t,e,n){Ss.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new no(t,e,n)),this.mergeVertices();}no.prototype=Object.create(Re.prototype),no.prototype.constructor=no,io.prototype=Object.create(Ss.prototype),io.prototype.constructor=io;class ro extends Re{constructor(t,e){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:e},e=e||12;const n=[],i=[],r=[],s=[];let o=0,a=0;if(!1===Array.isArray(t))l(t);else for(let e=0;e<t.length;e++)l(t[e]),this.addGroup(o,a,e),o+=a,a=0;function l(t){const o=i.length/3,l=t.extractPoints(e);let c=l.shape;const h=l.holes;!1===Zs.isClockWise(c)&&(c=c.reverse());for(let t=0,e=h.length;t<e;t++){const e=h[t];!0===Zs.isClockWise(e)&&(h[t]=e.reverse());}const u=Zs.triangulateShape(c,h);for(let t=0,e=h.length;t<e;t++){const e=h[t];c=c.concat(e);}for(let t=0,e=c.length;t<e;t++){const e=c[t];i.push(e.x,e.y,0),r.push(0,0,1),s.push(e.x,e.y);}for(let t=0,e=u.length;t<e;t++){const e=u[t],i=e[0]+o,r=e[1]+o,s=e[2]+o;n.push(i,r,s),a+=3;}}this.setIndex(n),this.setAttribute("position",new ye(i,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(s,2));}toJSON(){const t=Re.prototype.toJSON.call(this);return function(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const i=t[n];e.shapes.push(i.uuid);}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}}class so extends Ss{constructor(t,e){super(),this.type="ShapeGeometry","object"==typeof e&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new ro(t,e)),this.mergeVertices();}toJSON(){const t=Ss.prototype.toJSON.call(this);return function(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const i=t[n];e.shapes.push(i.uuid);}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}}function oo(t){oe.call(this),this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.setValues(t);}function ao(t){tn.call(this,t),this.type="RawShaderMaterial";}function lo(t){oe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t);}function co(t){lo.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new E(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return (1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=T.clamp(2.5*(t-1)/(t+1),0,1);}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t);}function ho(t){oe.call(this),this.type="MeshPhongMaterial",this.color=new ie(16777215),this.specular=new ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t);}function uo(t){oe.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t);}function po(t){oe.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t);}function mo(t){oe.call(this),this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t);}function fo(t){oe.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new E(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t);}function go(t){Qr.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t);}oo.prototype=Object.create(oe.prototype),oo.prototype.constructor=oo,oo.prototype.isShadowMaterial=!0,oo.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this},ao.prototype=Object.create(tn.prototype),ao.prototype.constructor=ao,ao.prototype.isRawShaderMaterial=!0,lo.prototype=Object.create(oe.prototype),lo.prototype.constructor=lo,lo.prototype.isMeshStandardMaterial=!0,lo.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this},co.prototype=Object.create(lo.prototype),co.prototype.constructor=co,co.prototype.isMeshPhysicalMaterial=!0,co.prototype.copy=function(t){return lo.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ie).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this},ho.prototype=Object.create(oe.prototype),ho.prototype.constructor=ho,ho.prototype.isMeshPhongMaterial=!0,ho.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},uo.prototype=Object.create(oe.prototype),uo.prototype.constructor=uo,uo.prototype.isMeshToonMaterial=!0,uo.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},po.prototype=Object.create(oe.prototype),po.prototype.constructor=po,po.prototype.isMeshNormalMaterial=!0,po.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},mo.prototype=Object.create(oe.prototype),mo.prototype.constructor=mo,mo.prototype.isMeshLambertMaterial=!0,mo.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},fo.prototype=Object.create(oe.prototype),fo.prototype.constructor=fo,fo.prototype.isMeshMatcapMaterial=!0,fo.prototype.copy=function(t){return oe.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},go.prototype=Object.create(Qr.prototype),go.prototype.constructor=go,go.prototype.isLineDashedMaterial=!0,go.prototype.copy=function(t){return Qr.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var vo=Object.freeze({__proto__:null,ShadowMaterial:oo,SpriteMaterial:Mr,RawShaderMaterial:ao,ShaderMaterial:tn,PointsMaterial:cs,MeshPhysicalMaterial:co,MeshStandardMaterial:lo,MeshPhongMaterial:ho,MeshToonMaterial:uo,MeshNormalMaterial:po,MeshLambertMaterial:mo,MeshDepthMaterial:or,MeshDistanceMaterial:ar,MeshBasicMaterial:ae,MeshMatcapMaterial:fo,LineDashedMaterial:go,LineBasicMaterial:Qr,Material:oe});const yo={arraySlice:function(t,e,n){return yo.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return !t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){const e=t.length,n=new Array(e);for(let t=0;t!==e;++t)n[t]=t;return n.sort((function(e,n){return t[e]-t[n]})),n},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const i=n[s]*e;for(let n=0;n!==e;++n)r[o++]=t[i+n];}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;void 0!==s&&void 0===s[i];)s=t[r++];if(void 0===s)return;let o=s[i];if(void 0!==o)if(Array.isArray(o))do{o=s[i],void 0!==o&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];}while(void 0!==s);else if(void 0!==o.toArray)do{o=s[i],void 0!==o&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];}while(void 0!==s);else do{o=s[i],void 0!==o&&(e.push(s.time),n.push(o)),s=t[r++];}while(void 0!==s)},subclip:function(t,e,n,i,r){r=r||30;const s=t.clone();s.name=e;const o=[];for(let t=0;t<s.tracks.length;++t){const e=s.tracks[t],a=e.getValueSize(),l=[],c=[];for(let t=0;t<e.times.length;++t){const s=e.times[t]*r;if(!(s<n||s>=i)){l.push(e.times[t]);for(let n=0;n<a;++n)c.push(e.values[t*a+n]);}}0!==l.length&&(e.times=yo.convertArray(l,e.times.constructor),e.values=yo.convertArray(c,e.values.constructor),o.push(e));}s.tracks=o;let a=1/0;for(let t=0;t<s.tracks.length;++t)a>s.tracks[t].times[0]&&(a=s.tracks[t].times[0]);for(let t=0;t<s.tracks.length;++t)s.tracks[t].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e,n,i){void 0===e&&(e=0),void 0===n&&(n=t),(void 0===i||i<=0)&&(i=30);const r=n.tracks.length,s=e/i;for(let e=0;e<r;++e){const i=n.tracks[e],r=i.ValueTypeName;if("bool"===r||"string"===r)continue;const o=t.tracks.find((function(t){return t.name===i.name&&t.ValueTypeName===r}));if(void 0===o)continue;let a=0;const l=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(a=l/3);let c=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=h/3);const u=i.times.length-1;let d;if(s<=i.times[0]){const t=a,e=l-a;d=yo.arraySlice(i.values,t,e);}else if(s>=i.times[u]){const t=u*l+a,e=t+l-a;d=yo.arraySlice(i.values,t,e);}else {const t=i.createInterpolant(),e=a,n=l-a;t.evaluate(s),d=yo.arraySlice(t.resultBuffer,e,n);}if("quaternion"===r){(new N).fromArray(d).normalize().conjugate().toArray(d);}const p=o.times.length;for(let t=0;t<p;++t){const e=t*h+c;if("quaternion"===r)N.multiplyQuaternionsFlat(o.values,e,d,0,o.values,e);else {const t=h-2*c;for(let n=0;n<t;++n)o.values[e+n]-=d[n];}}}return t.blendMode=2501,t}};function xo(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n;}function bo(t,e,n,i){xo.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0;}function wo(t,e,n,i){xo.call(this,t,e,n,i);}function _o(t,e,n,i){xo.call(this,t,e,n,i);}function Mo(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo.convertArray(e,this.TimeBufferType),this.values=yo.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation);}function So(t,e,n){Mo.call(this,t,e,n);}function To(t,e,n,i){Mo.call(this,t,e,n,i);}function Eo(t,e,n,i){Mo.call(this,t,e,n,i);}function Ao(t,e,n,i){xo.call(this,t,e,n,i);}function Lo(t,e,n,i){Mo.call(this,t,e,n,i);}function Ro(t,e,n,i){Mo.call(this,t,e,n,i);}function Co(t,e,n,i){Mo.call(this,t,e,n,i);}function Po(t,e,n,i){this.name=t,this.tracks=n,this.duration=void 0!==e?e:-1,this.blendMode=void 0!==i?i:2500,this.uuid=T.generateUUID(),this.duration<0&&this.resetDuration();}function Oo(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Co;case"color":return To;case"quaternion":return Lo;case"bool":case"boolean":return So;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){const e=[],n=[];yo.flattenJSON(t.keys,e,n,"value"),t.times=e,t.values=n;}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(xo.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let s=n+2;;){if(void 0===i){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===s)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(t>=r)break t;{const o=e[1];t<o&&(n=2,r=o);for(let s=n-2;;){if(void 0===r)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===s)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;}}for(;n<s;){const i=n+s>>>1;t<e[i]?s=i:n=i+1;}if(i=e[n],r=e[n-1],void 0===r)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(void 0===i)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i);}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let t=0;t!==i;++t)e[t]=n[r+t];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(xo.prototype,{beforeStart_:xo.prototype.copySampleValue_,afterEnd_:xo.prototype.copySampleValue_}),bo.prototype=Object.assign(Object.create(xo.prototype),{constructor:bo,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(void 0===o)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n;}if(void 0===a)switch(this.getSettings_().endingEnd){case 2401:s=t,a=2*n-e;break;case 2402:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e;}const l=.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-n),this._offsetPrev=r*c,this._offsetNext=s*c;},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,v=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,y=(-1-d)*f+(1.5+d)*m+.5*p,x=d*f-d*m;for(let t=0;t!==o;++t)r[t]=g*s[c+t]+v*s[l+t]+y*s[a+t]+x*s[h+t];return r}}),wo.prototype=Object.assign(Object.create(xo.prototype),{constructor:wo,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,c=(n-e)/(i-e),h=1-c;for(let t=0;t!==o;++t)r[t]=s[l+t]*h+s[a+t]*c;return r}}),_o.prototype=Object.assign(Object.create(xo.prototype),{constructor:_o,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(Mo,{toJSON:function(t){const e=t.constructor;let n;if(void 0!==e.toJSON)n=e.toJSON(t);else {n={name:t.name,times:yo.convertArray(t.times,Array),values:yo.convertArray(t.values,Array)};const e=t.getInterpolation();e!==t.DefaultInterpolation&&(n.interpolation=e);}return n.type=t.ValueTypeName,n}}),Object.assign(Mo.prototype,{constructor:Mo,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(t){return new _o(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new wo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new bo(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e);this.setInterpolation(this.DefaultInterpolation);}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(0!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;}return this},scale:function(t){if(1!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;-1!==s&&n[s]>e;)--s;if(++s,0!==r||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const t=this.getValueSize();this.times=yo.arraySlice(n,r,s),this.values=yo.arraySlice(this.values,r*t,s*t);}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let e=0;e!==r;e++){const i=n[e];if("number"==typeof i&&isNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,i),t=!1;break}if(null!==s&&s>i){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,i,s),t=!1;break}s=i;}if(void 0!==i&&yo.isTypedArray(i))for(let e=0,n=i.length;e!==n;++e){const n=i[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,n),t=!1;break}}return t},optimize:function(){const t=yo.arraySlice(this.times),e=yo.arraySlice(this.values),n=this.getValueSize(),i=2302===this.getInterpolation(),r=t.length-1;let s=1;for(let o=1;o<r;++o){let r=!1;const a=t[o];if(a!==t[o+1]&&(1!==o||a!==a[0]))if(i)r=!0;else {const t=o*n,i=t-n,s=t+n;for(let o=0;o!==n;++o){const n=e[t+o];if(n!==e[i+o]||n!==e[s+o]){r=!0;break}}}if(r){if(o!==s){t[s]=t[o];const i=o*n,r=s*n;for(let t=0;t!==n;++t)e[r+t]=e[i+t];}++s;}}if(r>0){t[s]=t[r];for(let t=r*n,i=s*n,o=0;o!==n;++o)e[i+o]=e[t+o];++s;}return s!==t.length?(this.times=yo.arraySlice(t,0,s),this.values=yo.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=yo.arraySlice(this.times,0),e=yo.arraySlice(this.values,0),n=new(this.constructor)(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}),So.prototype=Object.assign(Object.create(Mo.prototype),{constructor:So,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),To.prototype=Object.assign(Object.create(Mo.prototype),{constructor:To,ValueTypeName:"color"}),Eo.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Eo,ValueTypeName:"number"}),Ao.prototype=Object.assign(Object.create(xo.prototype),{constructor:Ao,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let l=t*o;for(let t=l+o;l!==t;l+=4)N.slerpFlat(r,0,s,l-o,s,l,a);return r}}),Lo.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Lo,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(t){return new Ao(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),Ro.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Ro,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Co.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Co,ValueTypeName:"vector"}),Object.assign(Po,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let t=0,r=n.length;t!==r;++t)e.push(Oo(n[t]).scale(i));return new Po(t.name,t.duration,e,t.blendMode)},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=0,i=n.length;t!==i;++t)e.push(Mo.toJSON(n[t]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let t=0;t<r;t++){let o=[],a=[];o.push((t+r-1)%r,t,(t+1)%r),a.push(0,1,0);const l=yo.getKeyframeOrder(o);o=yo.sortedArray(o,1,l),a=yo.sortedArray(a,1,l),i||0!==o[0]||(o.push(r),a.push(a[0])),s.push(new Eo(".morphTargetInfluences["+e[t].name+"]",o,a).scale(1/n));}return new Po(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const e=t;n=e.geometry&&e.geometry.animations||e.animations;}for(let t=0;t<n.length;t++)if(n[t].name===e)return n[t];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let e=0,n=t.length;e<n;e++){const n=t[e],s=n.name.match(r);if(s&&s.length>1){const t=s[1];let e=i[t];e||(i[t]=e=[]),e.push(n);}}const s=[];for(const t in i)s.push(Po.CreateFromMorphTargetSequence(t,i[t],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(t,e,n,i,r){if(0!==n.length){const s=[],o=[];yo.flattenJSON(n,s,o,i),0!==s.length&&r.push(new t(e,s,o));}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<l.length;t++){const r=l[t].keys;if(r&&0!==r.length)if(r[0].morphTargets){const t={};let e;for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let n=0;n<r[e].morphTargets.length;n++)t[r[e].morphTargets[n]]=-1;for(const n in t){const t=[],s=[];for(let i=0;i!==r[e].morphTargets.length;++i){const i=r[e];t.push(i.time),s.push(i.morphTarget===n?1:0);}i.push(new Eo(".morphTargetInfluence["+n+"]",t,s));}a=t.length*(s||1);}else {const s=".bones["+e[t].name+"]";n(Co,s+".position",r,"pos",i),n(Lo,s+".quaternion",r,"rot",i),n(Co,s+".scale",r,"scl",i);}}if(0===i.length)return null;return new Po(r,a,i,o)}}),Object.assign(Po.prototype,{resetDuration:function(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){const n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1]);}return this.duration=t,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Po(this.name,this.duration,t,this.blendMode)}});const Io={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e);},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t];},clear:function(){this.files={};}};const Do=new function(t,e,n){const i=this;let r=!1,s=0,o=0,a=void 0;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===r&&void 0!==i.onStart&&i.onStart(t,s,o),r=!0;},this.itemEnd=function(t){s++,void 0!==i.onProgress&&i.onProgress(t,s,o),s===o&&(r=!1,void 0!==i.onLoad&&i.onLoad());},this.itemError=function(t){void 0!==i.onError&&i.onError(t);},this.resolveURL=function(t){return a?a(t):t},this.setURLModifier=function(t){return a=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t);return -1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=l.length;e<n;e+=2){const n=l[e],i=l[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return i}return null};};function No(t){this.manager=void 0!==t?t:Do,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={};}Object.assign(No.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise((function(i,r){n.load(t,i,e,r);}))},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Fo={};function Uo(t){No.call(this,t);}function zo(t){No.call(this,t);}function ko(t){No.call(this,t);}function Bo(t){No.call(this,t);}function Ho(t){No.call(this,t);}function Go(t){No.call(this,t);}function Vo(t){No.call(this,t);}function jo(){this.type="Curve",this.arcLengthDivisions=200;}function Wo(t,e,n,i,r,s,o,a){jo.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0;}function qo(t,e,n,i,r,s){Wo.call(this,t,e,n,n,i,r,s),this.type="ArcCurve";}function Xo(){let t=0,e=0,n=0,i=0;function r(r,s,o,a){t=r,e=o,n=-3*r+3*s-2*o-a,i=2*r-2*s+o+a;}return {initCatmullRom:function(t,e,n,i,s){r(e,n,s*(n-t),s*(i-e));},initNonuniformCatmullRom:function(t,e,n,i,s,o,a){let l=(e-t)/s-(n-t)/(s+o)+(n-e)/o,c=(n-e)/o-(i-e)/(o+a)+(i-n)/a;l*=o,c*=o,r(e,n,l,c);},calc:function(r){const s=r*r;return t+e*r+n*s+i*(s*r)}}}Uo.prototype=Object.assign(Object.create(No.prototype),{constructor:Uo,load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Io.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s;if(void 0!==Fo[t])return void Fo[t].push({onLoad:e,onProgress:n,onError:i});const o=t.match(/^data:(.*?)(;base64)?,(.*)$/);let a;if(o){const n=o[1],s=!!o[2];let a=o[3];a=decodeURIComponent(a),s&&(a=atob(a));try{let i;const s=(this.responseType||"").toLowerCase();switch(s){case"arraybuffer":case"blob":const t=new Uint8Array(a.length);for(let e=0;e<a.length;e++)t[e]=a.charCodeAt(e);i="blob"===s?new Blob([t.buffer],{type:n}):t.buffer;break;case"document":const e=new DOMParser;i=e.parseFromString(a,n);break;case"json":i=JSON.parse(a);break;default:i=a;}setTimeout((function(){e&&e(i),r.manager.itemEnd(t);}),0);}catch(e){setTimeout((function(){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t);}),0);}}else {Fo[t]=[],Fo[t].push({onLoad:e,onProgress:n,onError:i}),a=new XMLHttpRequest,a.open("GET",t,!0),a.addEventListener("load",(function(e){const n=this.response,i=Fo[t];if(delete Fo[t],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Io.add(t,n);for(let t=0,e=i.length;t<e;t++){const e=i[t];e.onLoad&&e.onLoad(n);}r.manager.itemEnd(t);}else {for(let t=0,n=i.length;t<n;t++){const n=i[t];n.onError&&n.onError(e);}r.manager.itemError(t),r.manager.itemEnd(t);}}),!1),a.addEventListener("progress",(function(e){const n=Fo[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onProgress&&i.onProgress(e);}}),!1),a.addEventListener("error",(function(e){const n=Fo[t];delete Fo[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onError&&i.onError(e);}r.manager.itemError(t),r.manager.itemEnd(t);}),!1),a.addEventListener("abort",(function(e){const n=Fo[t];delete Fo[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onError&&i.onError(e);}r.manager.itemError(t),r.manager.itemEnd(t);}),!1),void 0!==this.responseType&&(a.responseType=this.responseType),void 0!==this.withCredentials&&(a.withCredentials=this.withCredentials),a.overrideMimeType&&a.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(const t in this.requestHeader)a.setRequestHeader(t,this.requestHeader[t]);a.send(null);}return r.manager.itemStart(t),a},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}}),zo.prototype=Object.assign(Object.create(No.prototype),{constructor:zo,load:function(t,e,n,i){const r=this,s=new Uo(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=Po.parse(t[n]);e.push(i);}return e}}),ko.prototype=Object.assign(Object.create(No.prototype),{constructor:ko,load:function(t,e,n,i){const r=this,s=[],o=new vs;o.image=s;const a=new Uo(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let l=0;function c(c){a.load(t[c],(function(t){const n=r.parse(t,!0);s[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=1,6===l&&(1===n.mipmapCount&&(o.minFilter=1006),o.format=n.format,o.needsUpdate=!0,e&&e(o));}),n,i);}if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)c(e);else a.load(t,(function(t){const n=r.parse(t,!0);if(n.isCubemap){const t=n.mipmaps.length/n.mipmapCount;for(let e=0;e<t;e++){s[e]={mipmaps:[]};for(let t=0;t<n.mipmapCount;t++)s[e].mipmaps.push(n.mipmaps[e*n.mipmapCount+t]),s[e].format=n.format,s[e].width=n.width,s[e].height=n.height;}}else o.image.width=n.width,o.image.height=n.height,o.mipmaps=n.mipmaps;1===n.mipmapCount&&(o.minFilter=1006),o.format=n.format,o.needsUpdate=!0,e&&e(o);}),n,i);return o}}),Bo.prototype=Object.assign(Object.create(No.prototype),{constructor:Bo,load:function(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Io.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),Io.add(t,this),e&&e(this),r.manager.itemEnd(t);}function l(e){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t);}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}),Ho.prototype=Object.assign(Object.create(No.prototype),{constructor:Ho,load:function(t,e,n,i){const r=new sn,s=new Bo(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(n){s.load(t[n],(function(t){r.images[n]=t,o++,6===o&&(r.needsUpdate=!0,e&&e(r));}),void 0,i);}for(let e=0;e<t.length;++e)a(e);return r}}),Go.prototype=Object.assign(Object.create(No.prototype),{constructor:Go,load:function(t,e,n,i){const r=this,s=new an,o=new Uo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,(function(t){const n=r.parse(t);n&&(void 0!==n.image?s.image=n.image:void 0!==n.data&&(s.image.width=n.width,s.image.height=n.height,s.image.data=n.data),s.wrapS=void 0!==n.wrapS?n.wrapS:1001,s.wrapT=void 0!==n.wrapT?n.wrapT:1001,s.magFilter=void 0!==n.magFilter?n.magFilter:1006,s.minFilter=void 0!==n.minFilter?n.minFilter:1006,s.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.format&&(s.format=n.format),void 0!==n.type&&(s.type=n.type),void 0!==n.mipmaps&&(s.mipmaps=n.mipmaps,s.minFilter=1008),1===n.mipmapCount&&(s.minFilter=1006),s.needsUpdate=!0,e&&e(s,n));}),n,i),s}}),Vo.prototype=Object.assign(Object.create(No.prototype),{constructor:Vo,load:function(t,e,n,i){const r=new P,s=new Bo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(n){r.image=n;const i=t.search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/);r.format=i?1022:1023,r.needsUpdate=!0,void 0!==e&&e(r);}),n,i),r}}),Object.assign(jo.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){void 0===t&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){void 0===t&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths();},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;s=e||t*n[r-1];let o,a=0,l=r-1;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),o=n[i]-s,o<0)a=i+1;else {if(!(o>0)){l=i;break}l=i-1;}if(i=l,n[i]===s)return i/(r-1);const c=n[i];return (i+(s-c)/(n[i+1]-c))/(r-1)},getTangent:function(t,e){const n=1e-4;let i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new E:new F);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new F,i=[],r=[],s=[],o=new F,a=new ht;for(let e=0;e<=t;e++){const n=e/t;i[e]=this.getTangentAt(n,new F),i[e].normalize();}r[0]=new F,s[0]=new F;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let e=1;e<=t;e++){if(r[e]=r[e-1].clone(),s[e]=s[e-1].clone(),o.crossVectors(i[e-1],i[e]),o.length()>Number.EPSILON){o.normalize();const t=Math.acos(T.clamp(i[e-1].dot(i[e]),-1,1));r[e].applyMatrix4(a.makeRotationAxis(o,t));}s[e].crossVectors(i[e],r[e]);}if(!0===e){let e=Math.acos(T.clamp(r[0].dot(r[t]),-1,1));e/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(e=-e);for(let n=1;n<=t;n++)r[n].applyMatrix4(a.makeRotationAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n]);}return {tangents:i,normals:r,binormals:s}},clone:function(){return (new this.constructor).copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),Wo.prototype=Object.create(jo.prototype),Wo.prototype.constructor=Wo,Wo.prototype.isEllipseCurve=!0,Wo.prototype.getPoint=function(t,e){const n=e||new E,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),!0!==this.aClockwise||s||(r===i?r=-i:r-=i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),n=a-this.aX,i=l-this.aY;a=n*t-i*e+this.aX,l=n*e+i*t+this.aY;}return n.set(a,l)},Wo.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Wo.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},Wo.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},qo.prototype=Object.create(Wo.prototype),qo.prototype.constructor=qo,qo.prototype.isArcCurve=!0;const Yo=new F,Jo=new Xo,Zo=new Xo,Ko=new Xo;function Qo(t,e,n,i){jo.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=n||"centripetal",this.tension=void 0!==i?i:.5;}function $o(t,e,n,i,r){const s=.5*(i-e),o=.5*(r-n),a=t*t;return (2*n-2*i+s+o)*(t*a)+(-3*n+3*i-2*s-o)*a+s*t+n}function ta(t,e,n,i){return function(t,e){const n=1-t;return n*n*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}function ea(t,e,n,i,r){return function(t,e){const n=1-t;return n*n*n*e}(t,e)+function(t,e){const n=1-t;return 3*n*n*t*e}(t,n)+function(t,e){return 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}function na(t,e,n,i){jo.call(this),this.type="CubicBezierCurve",this.v0=t||new E,this.v1=e||new E,this.v2=n||new E,this.v3=i||new E;}function ia(t,e,n,i){jo.call(this),this.type="CubicBezierCurve3",this.v0=t||new F,this.v1=e||new F,this.v2=n||new F,this.v3=i||new F;}function ra(t,e){jo.call(this),this.type="LineCurve",this.v1=t||new E,this.v2=e||new E;}function sa(t,e){jo.call(this),this.type="LineCurve3",this.v1=t||new F,this.v2=e||new F;}function oa(t,e,n){jo.call(this),this.type="QuadraticBezierCurve",this.v0=t||new E,this.v1=e||new E,this.v2=n||new E;}function aa(t,e,n){jo.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new F,this.v1=e||new F,this.v2=n||new F;}function la(t){jo.call(this),this.type="SplineCurve",this.points=t||[];}Qo.prototype=Object.create(jo.prototype),Qo.prototype.constructor=Qo,Qo.prototype.isCatmullRomCurve3=!0,Qo.prototype.getPoint=function(t,e){const n=e||new F,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o,a,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&&l===r-1&&(l=r-2,c=1),this.closed||l>0?o=i[(l-1)%r]:(Yo.subVectors(i[0],i[1]).add(i[0]),o=Yo);const h=i[l%r],u=i[(l+1)%r];if(this.closed||l+2<r?a=i[(l+2)%r]:(Yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),a=Yo),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25;let e=Math.pow(o.distanceToSquared(h),t),n=Math.pow(h.distanceToSquared(u),t),i=Math.pow(u.distanceToSquared(a),t);n<1e-4&&(n=1),e<1e-4&&(e=n),i<1e-4&&(i=n),Jo.initNonuniformCatmullRom(o.x,h.x,u.x,a.x,e,n,i),Zo.initNonuniformCatmullRom(o.y,h.y,u.y,a.y,e,n,i),Ko.initNonuniformCatmullRom(o.z,h.z,u.z,a.z,e,n,i);}else "catmullrom"===this.curveType&&(Jo.initCatmullRom(o.x,h.x,u.x,a.x,this.tension),Zo.initCatmullRom(o.y,h.y,u.y,a.y,this.tension),Ko.initCatmullRom(o.z,h.z,u.z,a.z,this.tension));return n.set(Jo.calc(c),Zo.calc(c),Ko.calc(c)),n},Qo.prototype.copy=function(t){jo.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone());}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},Qo.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray());}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},Qo.prototype.fromJSON=function(t){jo.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new F).fromArray(n));}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},na.prototype=Object.create(jo.prototype),na.prototype.constructor=na,na.prototype.isCubicBezierCurve=!0,na.prototype.getPoint=function(t,e){const n=e||new E,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(ea(t,i.x,r.x,s.x,o.x),ea(t,i.y,r.y,s.y,o.y)),n},na.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},na.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},na.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},ia.prototype=Object.create(jo.prototype),ia.prototype.constructor=ia,ia.prototype.isCubicBezierCurve3=!0,ia.prototype.getPoint=function(t,e){const n=e||new F,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(ea(t,i.x,r.x,s.x,o.x),ea(t,i.y,r.y,s.y,o.y),ea(t,i.z,r.z,s.z,o.z)),n},ia.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},ia.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},ia.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},ra.prototype=Object.create(jo.prototype),ra.prototype.constructor=ra,ra.prototype.isLineCurve=!0,ra.prototype.getPoint=function(t,e){const n=e||new E;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},ra.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},ra.prototype.getTangent=function(t,e){const n=e||new E;return n.copy(this.v2).sub(this.v1).normalize(),n},ra.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},ra.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},ra.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},sa.prototype=Object.create(jo.prototype),sa.prototype.constructor=sa,sa.prototype.isLineCurve3=!0,sa.prototype.getPoint=function(t,e){const n=e||new F;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},sa.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},sa.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},sa.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},sa.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},oa.prototype=Object.create(jo.prototype),oa.prototype.constructor=oa,oa.prototype.isQuadraticBezierCurve=!0,oa.prototype.getPoint=function(t,e){const n=e||new E,i=this.v0,r=this.v1,s=this.v2;return n.set(ta(t,i.x,r.x,s.x),ta(t,i.y,r.y,s.y)),n},oa.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},oa.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},oa.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},aa.prototype=Object.create(jo.prototype),aa.prototype.constructor=aa,aa.prototype.isQuadraticBezierCurve3=!0,aa.prototype.getPoint=function(t,e){const n=e||new F,i=this.v0,r=this.v1,s=this.v2;return n.set(ta(t,i.x,r.x,s.x),ta(t,i.y,r.y,s.y),ta(t,i.z,r.z,s.z)),n},aa.prototype.copy=function(t){return jo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},aa.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},aa.prototype.fromJSON=function(t){return jo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},la.prototype=Object.create(jo.prototype),la.prototype.constructor=la,la.prototype.isSplineCurve=!0,la.prototype.getPoint=function(t,e){const n=e||new E,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[0===s?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set($o(o,a.x,l.x,c.x,h.x),$o(o,a.y,l.y,c.y,h.y)),n},la.prototype.copy=function(t){jo.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone());}return this},la.prototype.toJSON=function(){const t=jo.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray());}return t},la.prototype.fromJSON=function(t){jo.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new E).fromArray(n));}return this};var ca=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:Qo,CubicBezierCurve:na,CubicBezierCurve3:ia,EllipseCurve:Wo,LineCurve:ra,LineCurve3:sa,QuadraticBezierCurve:oa,QuadraticBezierCurve3:aa,SplineCurve:la});function ha(){jo.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1;}function ua(t){ha.call(this),this.type="Path",this.currentPoint=new E,t&&this.setFromPoints(t);}function da(t){ua.call(this,t),this.uuid=T.generateUUID(),this.type="Shape",this.holes=[];}function pa(t,e){Nt.call(this),this.type="Light",this.color=new ie(t),this.intensity=void 0!==e?e:1;}function ma(t,e,n){pa.call(this,t,n),this.type="HemisphereLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.groundColor=new ie(e);}function fa(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new E(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hn,this._frameExtents=new E(1,1),this._viewportCount=1,this._viewports=[new O(0,0,1,1)];}function ga(){fa.call(this,new nn(50,1,.5,500)),this.focus=1;}function va(t,e,n,i,r,s){pa.call(this,t,e),this.type="SpotLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI;}}),this.distance=void 0!==n?n:0,this.angle=void 0!==i?i:Math.PI/3,this.penumbra=void 0!==r?r:0,this.decay=void 0!==s?s:1,this.shadow=new ga;}function ya(){fa.call(this,new nn(90,1,.5,500)),this._frameExtents=new E(4,2),this._viewportCount=6,this._viewports=[new O(2,1,1,1),new O(0,1,1,1),new O(3,1,1,1),new O(1,1,1,1),new O(3,0,1,1),new O(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)];}function xa(t,e,n,i){pa.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI);}}),this.distance=void 0!==n?n:0,this.decay=void 0!==i?i:1,this.shadow=new ya;}function ba(t,e,n,i,r,s){en.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=void 0!==t?t:-1,this.right=void 0!==e?e:1,this.top=void 0!==n?n:1,this.bottom=void 0!==i?i:-1,this.near=void 0!==r?r:.1,this.far=void 0!==s?s:2e3,this.updateProjectionMatrix();}function wa(){fa.call(this,new ba(-5,5,5,-5,.5,500));}function _a(t,e){pa.call(this,t,e),this.type="DirectionalLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.shadow=new wa;}function Ma(t,e){pa.call(this,t,e),this.type="AmbientLight";}function Sa(t,e,n,i){pa.call(this,t,e),this.type="RectAreaLight",this.width=void 0!==n?n:10,this.height=void 0!==i?i:10;}ha.prototype=Object.assign(Object.create(jo.prototype),{constructor:ha,add:function(t){this.curves.push(t);},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ra(e,t));},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const t=n[i]-e,r=this.curves[i],s=r.getLength(),o=0===s?0:1-t/s;return r.getPointAt(o)}i++;}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths();},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?2*t:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let t=0;t<a.length;t++){const i=a[t];n&&n.equals(i)||(e.push(i),n=i);}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){jo.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push(n.clone());}return this.autoClose=t.autoClose,this},toJSON:function(){const t=jo.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const n=this.curves[e];t.curves.push(n.toJSON());}return t},fromJSON:function(t){jo.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push((new ca[n.type]).fromJSON(n));}return this}}),ua.prototype=Object.assign(Object.create(ha.prototype),{constructor:ua,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new ra(this.currentPoint.clone(),new E(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new oa(this.currentPoint.clone(),new E(t,e),new E(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new na(this.currentPoint.clone(),new E(t,e),new E(n,i),new E(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=new la([this.currentPoint.clone()].concat(t));return this.curves.push(e),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const l=new Wo(t,e,n,i,r,s,o,a);if(this.curves.length>0){const t=l.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y);}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this},copy:function(t){return ha.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=ha.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return ha.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),da.prototype=Object.assign(Object.create(ua.prototype),{constructor:da,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return {shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){ua.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push(n.clone());}return this},toJSON:function(){const t=ua.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const n=this.holes[e];t.holes.push(n.toJSON());}return t},fromJSON:function(t){ua.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push((new ua).fromJSON(n));}return this}}),pa.prototype=Object.assign(Object.create(Nt.prototype),{constructor:pa,isLight:!0,copy:function(t){return Nt.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=Nt.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),ma.prototype=Object.assign(Object.create(pa.prototype),{constructor:ma,isHemisphereLight:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(fa.prototype,{_projScreenMatrix:new ht,_lightPositionWorld:new F,_lookTarget:new F,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse);},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return (new this.constructor).copy(this)},toJSON:function(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),ga.prototype=Object.assign(Object.create(fa.prototype),{constructor:ga,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=2*T.RAD2DEG*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),fa.prototype.updateMatrices.call(this,t);}}),va.prototype=Object.assign(Object.create(pa.prototype),{constructor:va,isSpotLight:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),ya.prototype=Object.assign(Object.create(fa.prototype),{constructor:ya,isPointLightShadow:!0,updateMatrices:function(t,e){void 0===e&&(e=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o);}}),xa.prototype=Object.assign(Object.create(pa.prototype),{constructor:xa,isPointLight:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),ba.prototype=Object.assign(Object.create(en.prototype),{constructor:ba,isOrthographicCamera:!0,copy:function(t,e){return en.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,o-=e*this.view.offsetY,a=o-e*this.view.height;}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function(t){const e=Nt.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}),wa.prototype=Object.assign(Object.create(fa.prototype),{constructor:wa,isDirectionalLightShadow:!0,updateMatrices:function(t){fa.prototype.updateMatrices.call(this,t);}}),_a.prototype=Object.assign(Object.create(pa.prototype),{constructor:_a,isDirectionalLight:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Ma.prototype=Object.assign(Object.create(pa.prototype),{constructor:Ma,isAmbientLight:!0}),Sa.prototype=Object.assign(Object.create(pa.prototype),{constructor:Sa,isRectAreaLight:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=pa.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Ta{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new F);}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.092548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.858086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return !1;return !0}copy(t){return this.set(t.coefficients)}clone(){return (new this.constructor).copy(this)}fromArray(t,e){void 0===e&&(e=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+3*i);return this}toArray(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+3*i);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i);}}function Ea(t,e){pa.call(this,void 0,e),this.type="LightProbe",this.sh=void 0!==t?t:new Ta;}function Aa(t){No.call(this,t),this.textures={};}Ea.prototype=Object.assign(Object.create(pa.prototype),{constructor:Ea,isLightProbe:!0,copy:function(t){return pa.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=pa.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}}),Aa.prototype=Object.assign(Object.create(No.prototype),{constructor:Aa,load:function(t,e,n,i){const r=this,s=new Uo(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);},parse:function(t){const e=this.textures;function n(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}const i=new vo[t.type];if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.sheen&&(i.sheen=(new ie).setHex(t.sheen)),void 0!==t.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&i.specular.setHex(t.specular),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearcoat&&(i.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(i.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.flatShading&&(i.flatShading=t.flatShading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.combine&&(i.combine=t.combine),void 0!==t.side&&(i.side=t.side),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.stencilWrite&&(i.stencilWrite=t.stencilWrite),void 0!==t.stencilWriteMask&&(i.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(i.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(i.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(i.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(i.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(i.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(i.stencilZPass=t.stencilZPass),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(i.rotation=t.rotation),1!==t.linewidth&&(i.linewidth=t.linewidth),void 0!==t.dashSize&&(i.dashSize=t.dashSize),void 0!==t.gapSize&&(i.gapSize=t.gapSize),void 0!==t.scale&&(i.scale=t.scale),void 0!==t.polygonOffset&&(i.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(i.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(i.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.skinning&&(i.skinning=t.skinning),void 0!==t.morphTargets&&(i.morphTargets=t.morphTargets),void 0!==t.morphNormals&&(i.morphNormals=t.morphNormals),void 0!==t.dithering&&(i.dithering=t.dithering),void 0!==t.vertexTangents&&(i.vertexTangents=t.vertexTangents),void 0!==t.visible&&(i.visible=t.visible),void 0!==t.toneMapped&&(i.toneMapped=t.toneMapped),void 0!==t.userData&&(i.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),void 0!==t.uniforms)for(const e in t.uniforms){const r=t.uniforms[e];switch(i.uniforms[e]={},r.type){case"t":i.uniforms[e].value=n(r.value);break;case"c":i.uniforms[e].value=(new ie).setHex(r.value);break;case"v2":i.uniforms[e].value=(new E).fromArray(r.value);break;case"v3":i.uniforms[e].value=(new F).fromArray(r.value);break;case"v4":i.uniforms[e].value=(new O).fromArray(r.value);break;case"m3":i.uniforms[e].value=(new A).fromArray(r.value);break;case"m4":i.uniforms[e].value=(new ht).fromArray(r.value);break;default:i.uniforms[e].value=r.value;}}if(void 0!==t.defines&&(i.defines=t.defines),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.extensions)for(const e in t.extensions)i.extensions[e]=t.extensions[e];if(void 0!==t.shading&&(i.flatShading=1===t.shading),void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(i.map=n(t.map)),void 0!==t.matcap&&(i.matcap=n(t.matcap)),void 0!==t.alphaMap&&(i.alphaMap=n(t.alphaMap)),void 0!==t.bumpMap&&(i.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(i.normalMapType=t.normalMapType),void 0!==t.normalScale){let e=t.normalScale;!1===Array.isArray(e)&&(e=[e,e]),i.normalScale=(new E).fromArray(e);}return void 0!==t.displacementMap&&(i.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=n(t.specularMap)),void 0!==t.envMap&&(i.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(i.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(i.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(i.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=n(t.gradientMap)),void 0!==t.clearcoatMap&&(i.clearcoatMap=n(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(i.clearcoatNormalScale=(new E).fromArray(t.clearcoatNormalScale)),void 0!==t.transmission&&(i.transmission=t.transmission),void 0!==t.transmissionMap&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const La=function(t){if("undefined"!=typeof TextDecoder)return (new TextDecoder).decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(t){return e}},Ra=function(t){const e=t.lastIndexOf("/");return -1===e?"./":t.substr(0,e+1)};function Ca(){Re.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0;}function Pa(t,e,n,i){"number"==typeof n&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),he.call(this,t,e,n),this.meshPerAttribute=i||1;}function Oa(t){No.call(this,t);}Ca.prototype=Object.assign(Object.create(Re.prototype),{constructor:Ca,isInstancedBufferGeometry:!0,copy:function(t){return Re.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return (new this.constructor).copy(this)},toJSON:function(){const t=Re.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}),Pa.prototype=Object.assign(Object.create(he.prototype),{constructor:Pa,isInstancedBufferAttribute:!0,copy:function(t){return he.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=he.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}),Oa.prototype=Object.assign(Object.create(No.prototype),{constructor:Oa,load:function(t,e,n,i){const r=this,s=new Uo(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);},parse:function(t){const e={},n={};function i(t,i){if(void 0!==e[i])return e[i];const r=t.interleavedBuffers[i],s=function(t,e){if(void 0!==n[e])return n[e];const i=t.arrayBuffers[e],r=new Uint32Array(i).buffer;return n[e]=r,r}(t,r.buffer),o=new br(new Ia[r.type](s),r.stride);return o.uuid=r.uuid,e[i]=o,o}const r=t.isInstancedBufferGeometry?new Ca:new Re,s=t.data.index;if(void 0!==s){const t=new Ia[s.type](s.array);r.setIndex(new he(t,1));}const o=t.data.attributes;for(const e in o){const n=o[e];let s;if(n.isInterleavedBufferAttribute){s=new _r(i(t.data,n.data),n.itemSize,n.offset,n.normalized);}else {const t=new Ia[n.type](n.array);s=new(n.isInstancedBufferAttribute?Pa:he)(t,n.itemSize,n.normalized);}void 0!==n.name&&(s.name=n.name),r.setAttribute(e,s);}const a=t.data.morphAttributes;if(a)for(const e in a){const n=a[e],s=[];for(let e=0,r=n.length;e<r;e++){const r=n[e];let o;if(r.isInterleavedBufferAttribute){o=new _r(i(t.data,r.data),r.itemSize,r.offset,r.normalized);}else {o=new he(new Ia[r.type](r.array),r.itemSize,r.normalized);}void 0!==r.name&&(o.name=r.name),s.push(o);}r.morphAttributes[e]=s;}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const l=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==l)for(let t=0,e=l.length;t!==e;++t){const e=l[t];r.addGroup(e.start,e.count,e.materialIndex);}const c=t.data.boundingSphere;if(void 0!==c){const t=new F;void 0!==c.center&&t.fromArray(c.center),r.boundingSphere=new et(t,c.radius);}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}});const Ia={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!=typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function Da(t){"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),No.call(this,t),this.options={premultiplyAlpha:"none"};}function Na(){this.type="ShapePath",this.color=new ie,this.subPaths=[],this.currentPath=null;}function Fa(t){this.type="Font",this.data=t;}function Ua(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s)return void console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");const o=new Na;let a,l,c,h,u,d,p,m;if(s.o){const t=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let r=0,s=t.length;r<s;){switch(t[r++]){case"m":a=t[r++]*e+n,l=t[r++]*e+i,o.moveTo(a,l);break;case"l":a=t[r++]*e+n,l=t[r++]*e+i,o.lineTo(a,l);break;case"q":c=t[r++]*e+n,h=t[r++]*e+i,u=t[r++]*e+n,d=t[r++]*e+i,o.quadraticCurveTo(u,d,c,h);break;case"b":c=t[r++]*e+n,h=t[r++]*e+i,u=t[r++]*e+n,d=t[r++]*e+i,p=t[r++]*e+n,m=t[r++]*e+i,o.bezierCurveTo(u,d,p,m,c,h);}}}return {offsetX:s.ha*e,path:o}}function za(t){No.call(this,t);}let ka;Da.prototype=Object.assign(Object.create(No.prototype),{constructor:Da,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Io.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s;const o={};o.credentials="anonymous"===this.crossOrigin?"same-origin":"include",fetch(t,o).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,r.options)})).then((function(n){Io.add(t,n),e&&e(n),r.manager.itemEnd(t);})).catch((function(e){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t);})),r.manager.itemStart(t);}}),Object.assign(Na.prototype,{moveTo:function(t,e){return this.currentPath=new ua,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n],r=new da;r.curves=i.curves,e.push(r);}return e}function i(t,e){const n=e.length;let i=!1;for(let r=n-1,s=0;s<n;r=s++){let n=e[r],o=e[s],a=o.x-n.x,l=o.y-n.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(n=e[s],a=-a,o=e[r],l=-l),t.y<n.y||t.y>o.y)continue;if(t.y===n.y){if(t.x===n.x)return !0}else {const e=l*(t.x-n.x)-a*(t.y-n.y);if(0===e)return !0;if(e<0)continue;i=!i;}}else {if(t.y!==n.y)continue;if(o.x<=t.x&&t.x<=n.x||n.x<=t.x&&t.x<=o.x)return !0}}return i}const r=Zs.isClockWise,s=this.subPaths;if(0===s.length)return [];if(!0===e)return n(s);let o,a,l;const c=[];if(1===s.length)return a=s[0],l=new da,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=t?!h:h;const u=[],d=[];let p,m,f=[],g=0;d[g]=void 0,f[g]=[];for(let e=0,n=s.length;e<n;e++)a=s[e],p=a.getPoints(),o=r(p),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new da,p:p},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:p[0]});if(!d[0])return n(s);if(d.length>1){let t=!1;const e=[];for(let t=0,e=d.length;t<e;t++)u[t]=[];for(let n=0,r=d.length;n<r;n++){const r=f[n];for(let s=0;s<r.length;s++){const o=r[s];let a=!0;for(let r=0;r<d.length;r++)i(o.p,d[r].p)&&(n!==r&&e.push({froms:n,tos:r,hole:s}),a?(a=!1,u[r].push(o)):t=!0);a&&u[n].push(o);}}e.length>0&&(t||(f=u));}for(let t=0,e=d.length;t<e;t++){l=d[t].s,c.push(l),m=f[t];for(let t=0,e=m.length;t<e;t++)l.holes.push(m[t].h);}return c}}),Object.assign(Fa.prototype,{isFont:!0,generateShapes:function(t,e){void 0===e&&(e=100);const n=[],i=function(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,l=0;for(let t=0;t<i.length;t++){const e=i[t];if("\n"===e)a=0,l-=s;else {const t=Ua(e,r,a,l,n);a+=t.offsetX,o.push(t.path);}}return o}(t,e,this.data);for(let t=0,e=i.length;t<e;t++)Array.prototype.push.apply(n,i[t].toShapes());return n}}),za.prototype=Object.assign(Object.create(No.prototype),{constructor:za,load:function(t,e,n,i){const r=this,s=new Uo(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(t){let n;try{n=JSON.parse(t);}catch(e){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),n=JSON.parse(t.substring(65,t.length-2));}const i=r.parse(n);e&&e(i);}),n,i);},parse:function(t){return new Fa(t)}});const Ba=function(){return void 0===ka&&(ka=new(window.AudioContext||window.webkitAudioContext)),ka};function Ha(t){No.call(this,t);}function Ga(t,e,n){Ea.call(this,void 0,n);const i=(new ie).set(t),r=(new ie).set(e),s=new F(i.r,i.g,i.b),o=new F(r.r,r.g,r.b),a=Math.sqrt(Math.PI),l=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(l);}function Va(t,e){Ea.call(this,void 0,e);const n=(new ie).set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI));}Ha.prototype=Object.assign(Object.create(No.prototype),{constructor:Ha,load:function(t,e,n,i){const r=this,s=new Uo(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{const t=n.slice(0);Ba().decodeAudioData(t,(function(t){e(t);}));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);}}),Ga.prototype=Object.assign(Object.create(Ea.prototype),{constructor:Ga,isHemisphereLightProbe:!0,copy:function(t){return Ea.prototype.copy.call(this,t),this},toJSON:function(t){return Ea.prototype.toJSON.call(this,t)}}),Va.prototype=Object.assign(Object.create(Ea.prototype),{constructor:Va,isAmbientLightProbe:!0,copy:function(t){return Ea.prototype.copy.call(this,t),this},toJSON:function(t){return Ea.prototype.toJSON.call(this,t)}});const ja=new ht,Wa=new ht;Object.assign(function(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new nn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new nn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null};}.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const n=t.projectionMatrix.clone(),i=e.eyeSep/2,r=i*e.near/e.focus,s=e.near*Math.tan(T.DEG2RAD*e.fov*.5)/e.zoom;let o,a;Wa.elements[12]=-i,ja.elements[12]=i,o=-s*e.aspect+r,a=s*e.aspect+r,n.elements[0]=2*e.near/(a-o),n.elements[8]=(a+o)/(a-o),this.cameraL.projectionMatrix.copy(n),o=-s*e.aspect-r,a=s*e.aspect-r,n.elements[0]=2*e.near/(a-o),n.elements[8]=(a+o)/(a-o),this.cameraR.projectionMatrix.copy(n);}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Wa),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ja);}});function qa(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n);}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0;}Object.assign(qa.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(0===s){for(let t=0;t!==i;++t)n[r+t]=n[t];s=e;}else {s+=e;const t=e/s;this._mixBufferRegion(n,r,0,t,i);}this.cumulativeWeight=s;},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t;},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const t=e*this._origIndex;this._mixBufferRegion(n,i,t,1-r,e);}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let t=e,r=e+e;t!==r;++t)if(n[t]!==n[t+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let t=n,r=i;t!==r;++t)e[t]=e[i+t%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0;},restoreOriginalState:function(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t);},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0;},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1;},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n];},_select:function(t,e,n,i,r){if(i>=.5)for(let i=0;i!==r;++i)t[e+i]=t[n+i];},_slerp:function(t,e,n,i){N.slerpFlat(t,e,t,e,t,n,i);},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;N.multiplyQuaternionsFlat(t,s,t,e,t,n),N.slerpFlat(t,e,t,e,t,s,i);},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const r=e+o;t[r]=t[r]*s+t[n+o]*i;}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const r=e+s;t[r]=t[r]+t[n+s]*i;}}});const Xa=new RegExp("[\\[\\]\\.:\\/]","g"),Ya="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Ja=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),Za=/(WCOD+)?/.source.replace("WCOD",Ya),Ka=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Qa=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),$a=new RegExp("^"+Ja+Za+Ka+Qa+"$"),tl=["material","materials","bones"];function el(t,e,n){const i=n||nl.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i);}function nl(t,e,n){this.path=e,this.parsedPath=n||nl.parseTrackName(e),this.node=nl.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t;}Object.assign(el.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];void 0!==i&&i.getValue(t,e);},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e);},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind();},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind();}}),Object.assign(nl,{Composite:el,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new nl.Composite(t,e,n):new nl(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Xa,"")},parseTrackName:function(t){const e=$a.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){const t=n.nodeName.substring(i+1);-1!==tl.indexOf(t)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=t);}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){const n=function(t){for(let i=0;i<t.length;i++){const r=t[i];if(r.name===e||r.uuid===e)return r;const s=n(r.children);if(s)return s}return null},i=n(t.children);if(i)return i}return null}}),Object.assign(nl.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName];},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i];},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex];},function(t,e){this.resolvedProperty.toArray(t,e);}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e];},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0;},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0;},function(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e];},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0;},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(t,e){this.resolvedProperty.fromArray(t,e);},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0;},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0;}]],getValue:function(t,e){this.bind(),this.getValue(t,e);},setValue:function(t,e){this.bind(),this.setValue(t,e);},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=nl.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let i=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let e=0;e<t.length;e++)if(t[e].name===i){i=e;break}break;default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n];}if(void 0!==i){if(void 0===t[i])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[i];}}const s=t[i];if(void 0===s){const n=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+i+" but it wasn't found.",t)}let o=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?o=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r]);}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r;}else void 0!==s.fromArray&&void 0!==s.toArray?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o];},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound;}}),Object.assign(nl.prototype,{_getValue_unbound:nl.prototype.getValue,_setValue_unbound:nl.prototype.setValue}),Object.assign(function(){this.uuid=T.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}};}.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o=void 0,a=t.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const h=arguments[c],u=h.uuid;let d=e[u];if(void 0===d){d=a++,e[u]=d,t.push(h);for(let t=0,e=s;t!==e;++t)r[t].push(new nl(h,n[t],i[t]));}else if(d<l){o=t[d];const a=--l,c=t[a];e[c.uuid]=d,t[d]=c,e[u]=a,t[a]=h;for(let t=0,e=s;t!==e;++t){const e=r[t],s=e[a];let o=e[d];e[d]=s,void 0===o&&(o=new nl(h,n[t],i[t])),e[a]=o;}}else t[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}this.nCachedObjects_=l;},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const o=arguments[s],a=o.uuid,l=e[a];if(void 0!==l&&l>=r){const s=r++,c=t[s];e[c.uuid]=l,t[l]=c,e[a]=s,t[s]=o;for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[s],r=e[l];e[l]=i,e[s]=r;}}}this.nCachedObjects_=r;},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const a=arguments[o].uuid,l=e[a];if(void 0!==l)if(delete e[a],l<r){const o=--r,a=t[o],c=--s,h=t[c];e[a.uuid]=l,t[l]=a,e[h.uuid]=o,t[o]=h,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[o],r=e[c];e[l]=i,e[o]=r,e.pop();}}else {const r=--s,o=t[r];e[o.uuid]=l,t[l]=o,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t];e[l]=e[r],e.pop();}}}this.nCachedObjects_=r;},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(void 0!==i)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,l=a.length,c=this.nCachedObjects_,h=new Array(l);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(h);for(let n=c,i=a.length;n!==i;++n){const i=a[n];h[n]=new nl(i,t,e);}return h},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o];e[t[o]]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop();}}});class il{constructor(t,e,n,i){this._mixer=t,this._clip=e,this._localRoot=n||null,this.blendMode=i||e.blendMode;const r=e.tracks,s=r.length,o=new Array(s),a={endingStart:2400,endingEnd:2400};for(let t=0;t!==s;++t){const e=r[t].createInterpolant(null);o[t]=e,e.settings=a;}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0;}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const n=this._clip.duration,i=t._clip.duration,r=i/n,s=n/i;t.warp(1,r,e),this.warp(s,1,e);}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;null===o&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,a[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);const r=this._startTime;if(null!==r){const i=(t-r)*n;if(i<0||0===n)return;this._startTime=null,e=n*i;}e*=this._updateTimeScale(t);const s=this._updateTime(e),o=this._updateWeight(t);if(o>0){const t=this._interpolants,e=this._propertyBindings;switch(this.blendMode){case 2501:for(let n=0,i=t.length;n!==i;++n)t[n].evaluate(s),e[n].accumulateAdditive(o);break;case 2500:default:for(let n=0,r=t.length;n!==r;++n)t[n].evaluate(s),e[n].accumulate(i,o);}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(null!==n){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(this.enabled=!1));}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(null!==n){e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e);}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const s=2202===n;if(0===t)return -1===r?i:s&&1==(1&r)?e-i:i;if(2200===n){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else {if(!(i<0)){this.time=i;break t}i=0;}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1});}}else {if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),i>=e||i<0){const n=Math.floor(i/e);i-=e*n,r+=Math.abs(n);const o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else {if(1===o){const e=t<0;this._setEndings(e,!e,s);}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n});}}else this.time=i;if(s&&1==(1&r))return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402);}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;null===s&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,a=s.sampleValues;return o[0]=r,a[0]=e,o[1]=r+t,a[1]=n,this}}function rl(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1;}rl.prototype=Object.assign(Object.create(_.prototype),{constructor:rl,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,l=this._bindingsByRootAndName;let c=l[a];void 0===c&&(c={},l[a]=c);for(let t=0;t!==r;++t){const r=i[t],l=r.name;let h=c[l];if(void 0!==h)s[t]=h;else {if(h=s[t],void 0!==h){null===h._cacheIndex&&(++h.referenceCount,this._addInactiveBinding(h,a,l));continue}const i=e&&e._propertyBindings[t].binding.parsedPath;h=new qa(nl.create(n,l,i),r.ValueTypeName,r.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,a,l),s[t]=h;}o[t].resultBuffer=h.buffer;}},_activateAction:function(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e);}const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==n.useCount++&&(this._lendBinding(n),n.saveOriginalState());}this._lendAction(t);}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n));}this._takeBackAction(t);}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}};},_isActiveAction:function(t){const e=t._cacheIndex;return null!==e&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(void 0===s)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else {const e=s.knownActions;t._byClipCacheIndex=e.length,e.push(t);}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t;},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,l=a[a.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,a[c]=l,a.pop(),t._byClipCacheIndex=null;delete o.actionByRoot[(t._localRoot||this._root).uuid],0===a.length&&delete s[r],this._removeInactiveBindingsForAction(t);},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.referenceCount&&this._removeInactiveBinding(n);}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];void 0===s&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t);},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],l=t._cacheIndex;a._cacheIndex=l,e[l]=a,e.pop(),delete o[r],0===Object.keys(o).length&&delete s[i];},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return void 0===n&&(n=new wo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r;},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s="string"==typeof t?Po.findByName(i,t):t;const o=null!==s?s.uuid:t,a=this._actionsByClip[o];let l=null;if(void 0===n&&(n=null!==s?s.blendMode:2500),void 0!==a){const t=a.actionByRoot[r];if(void 0!==t&&t.blendMode===n)return t;l=a.knownActions[0],null===s&&(s=l._clip);}if(null===s)return null;const c=new il(this,s,e,n);return this._bindAction(c,l),this._addInactiveAction(c,o,r),c},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r="string"==typeof t?Po.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return void 0!==o&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let o=0;o!==n;++o){e[o]._update(i,t,r,s);}const o=this._bindings,a=this._nActiveBindings;for(let t=0;t!==a;++t)o[t].apply(s);return this},setTime:function(t){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){const t=r.knownActions;for(let n=0,i=t.length;n!==i;++n){const i=t[n];this._deactivateAction(i);const r=i._cacheIndex,s=e[e.length-1];i._cacheIndex=null,i._byClipCacheIndex=null,s._cacheIndex=r,e[r]=s,e.pop(),this._removeInactiveBindingsForAction(i);}delete i[n];}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const t in n){const i=n[t].actionByRoot[e];void 0!==i&&(this._deactivateAction(i),this._removeInactiveAction(i));}const i=this._bindingsByRootAndName[e];if(void 0!==i)for(const t in i){const e=i[t];e.restoreOriginalState(),this._removeInactiveBinding(e);}},uncacheAction:function(t,e){const n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n));}});class sl{constructor(t){"string"==typeof t&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t;}clone(){return new sl(void 0===this.value.clone?this.value:this.value.clone())}}function ol(t,e,n){br.call(this,t,e),this.meshPerAttribute=n||1;}function al(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0;}function ll(t,e,n,i){this.ray=new ct(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new wt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}});}function cl(t,e){return t.distance-e.distance}function hl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),!0===i){const i=t.children;for(let t=0,r=i.length;t<r;t++)hl(i[t],e,n,!0);}}ol.prototype=Object.assign(Object.create(br.prototype),{constructor:ol,isInstancedInterleavedBuffer:!0,copy:function(t){return br.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=br.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=br.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}),Object.defineProperty(al.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++;}}),Object.assign(al.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}}),Object.assign(ll.prototype,{set:function(t,e){this.ray.set(t,e);},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.");},intersectObject:function(t,e,n){const i=n||[];return hl(t,this,i,e),i.sort(cl),i},intersectObjects:function(t,e,n){const i=n||[];if(!1===Array.isArray(t))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let n=0,r=t.length;n<r;n++)hl(t[n],this,i,e);return i.sort(cl),i}});class ul{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}clone(){return (new this.constructor).copy(this)}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(T.clamp(e/this.radius,-1,1))),this}}const dl=new E;function pl(t){Nt.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0;}pl.prototype=Object.create(Nt.prototype),pl.prototype.constructor=pl,pl.prototype.isImmediateRenderObject=!0;const ml=new F,fl=new ht,gl=new ht;const xl=Math.pow(2,8),bl=[.125,.215,.35,.446,.526,.582],wl=5+bl.length,_l={3e3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Ml=new ba,{_lodPlanes:Sl,_sizeLods:Tl,_sigmas:El}=Il();let Al=null;const Ll=(1+Math.sqrt(5))/2,Rl=1/Ll,Cl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ll,Rl),new F(0,Ll,-Rl),new F(Rl,0,Ll),new F(-Rl,0,Ll),new F(Ll,Rl,0),new F(-Ll,Rl,0)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=function(t){const e=new Float32Array(t),n=new F(0,1,0);return new ao({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:_l[3e3]},outputEncoding:{value:_l[3e3]}},vertexShader:zl(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${kl()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}(20),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial);}fromScene(t,e=0,n=.1,i=100){Al=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t){return this._fromTexture(t)}fromCubemap(t){return this._fromTexture(t)}compileCubemapShader(){null===this._cubemapShader&&(this._cubemapShader=Ul(),this._compileMaterial(this._cubemapShader));}compileEquirectangularShader(){null===this._equirectShader&&(this._equirectShader=Fl(),this._compileMaterial(this._equirectShader));}dispose(){this._blurMaterial.dispose(),null!==this._cubemapShader&&this._cubemapShader.dispose(),null!==this._equirectShader&&this._equirectShader.dispose();for(let t=0;t<Sl.length;t++)Sl[t].dispose();}_cleanup(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Al),t.scissorTest=!1,Nl(t,0,0,t.width,t.height);}_fromTexture(t){Al=this._renderer.getRenderTarget();const e=this._allocateTargets(t);return this._textureToCubeUV(t,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(t){const e={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:1009,format:1023,encoding:Ol(t)?t.encoding:3002,depthBuffer:!1},n=Dl(e);return n.depthBuffer=!t,this._pingPongRenderTarget=Dl(e),n}_compileMaterial(t){const e=new Xe(Sl[0],t);this._renderer.compile(e,Ml);}_sceneToCubeUV(t,e,n,i){const r=new nn(90,1,e,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],a=this._renderer,l=a.outputEncoding,c=a.toneMapping,h=a.getClearColor(),u=a.getClearAlpha();a.toneMapping=0,a.outputEncoding=3e3;let d=t.background;if(d&&d.isColor){d.convertSRGBToLinear();const e=Math.max(d.r,d.g,d.b),n=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);d=d.multiplyScalar(Math.pow(2,-n));const i=(n+128)/255;a.setClearColor(d,i),t.background=null;}for(let e=0;e<6;e++){const n=e%3;0==n?(r.up.set(0,s[e],0),r.lookAt(o[e],0,0)):1==n?(r.up.set(0,0,s[e]),r.lookAt(0,o[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,o[e])),Nl(i,n*xl,e>2?xl:0,xl,xl),a.setRenderTarget(i),a.render(t,r);}a.toneMapping=c,a.outputEncoding=l,a.setClearColor(h,u);}_textureToCubeUV(t,e){const n=this._renderer;t.isCubeTexture?null==this._cubemapShader&&(this._cubemapShader=Ul()):null==this._equirectShader&&(this._equirectShader=Fl());const i=t.isCubeTexture?this._cubemapShader:this._equirectShader,r=new Xe(Sl[0],i),s=i.uniforms;s.envMap.value=t,t.isCubeTexture||s.texelSize.value.set(1/t.image.width,1/t.image.height),s.inputEncoding.value=_l[t.encoding],s.outputEncoding.value=_l[e.texture.encoding],Nl(e,0,0,3*xl,2*xl),n.setRenderTarget(e),n.render(r,Ml);}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let e=1;e<wl;e++){const n=Math.sqrt(El[e]*El[e]-El[e-1]*El[e-1]),i=Cl[(e-1)%Cl.length];this._blur(t,e-1,e,n,i);}e.autoClear=n;}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r);}_halfBlur(t,e,n,i,r,s,o){const a=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new Xe(Sl[i],l),h=l.uniforms,u=Tl[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):20;m>20&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<20;++t){const e=t/p,n=Math.exp(-e*e/2);f.push(n),0==t?g+=n:t<m&&(g+=2*n);}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,o&&(h.poleAxis.value=o),h.dTheta.value=d,h.mipInt.value=8-n,h.inputEncoding.value=_l[t.texture.encoding],h.outputEncoding.value=_l[t.texture.encoding];const v=Tl[i];Nl(e,3*Math.max(0,xl-2*v),(0===i?0:2*xl)+2*v*(i>4?i-8+4:0),3*v,2*v),a.setRenderTarget(e),a.render(c,Ml);}}function Ol(t){return void 0!==t&&1009===t.type&&(3e3===t.encoding||3001===t.encoding||3007===t.encoding)}function Il(){const t=[],e=[],n=[];let i=8;for(let r=0;r<wl;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>4?o=bl[r-8+4-1]:0==r&&(o=0),n.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,m=2,f=1,g=new Float32Array(p*d*u),v=new Float32Array(m*d*u),y=new Float32Array(f*d*u);for(let t=0;t<u;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];g.set(i,p*d*t),v.set(h,m*d*t);const r=[t,t,t,t,t,t];y.set(r,f*d*t);}const x=new Re;x.setAttribute("position",new he(g,p)),x.setAttribute("uv",new he(v,m)),x.setAttribute("faceIndex",new he(y,f)),t.push(x),i>4&&i--;}return {_lodPlanes:t,_sizeLods:e,_sigmas:n}}function Dl(t){const e=new I(3*xl,3*xl,t);return e.texture.mapping=306,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r);}function Fl(){return new ao({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:new E(1,1)},inputEncoding:{value:_l[3e3]},outputEncoding:{value:_l[3e3]}},vertexShader:zl(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${kl()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}function Ul(){return new ao({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:_l[3e3]},outputEncoding:{value:_l[3e3]}},vertexShader:zl(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${kl()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}function zl(){return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"}function kl(){return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t"}function Bl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Qo.call(this,t),this.type="catmullrom";}jo.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(jo.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(ha.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new Ss;for(let n=0,i=t.length;n<i;n++){const i=t[n];e.vertices.push(new F(i.x,i.y,i.z||0));}return e}}),Object.assign(ua.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}}),Bl.prototype=Object.create(Qo.prototype),Object.assign(Bl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.");},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.");},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");}}),Object.assign(No.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ra(t)}}),No.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");}},Object.assign(class{constructor(t,e){Object.defineProperty(this,"isBox2",{value:!0}),this.min=void 0!==t?t:new E(1/0,1/0),this.max=void 0!==e?e:new E(-1/0,-1/0);}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return void 0===t&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new E),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return void 0===t&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new E),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return !(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return void 0===e&&(console.warn("THREE.Box2: .getParameter() target is now required"),e=new E),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return !(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return void 0===e&&(console.warn("THREE.Box2: .clampPoint() target is now required"),e=new E),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return dl.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(k.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(et.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),hn.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Object.assign(T,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),T.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),T.ceilPowerOfTwo(t)}}),Object.assign(A.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");}}),Object.assign(ht.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),(new F).setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this);},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.");},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.");},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.");},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.");},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)}}),kt.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},N.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},Object.assign(ct.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(Zt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(Zt,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Zt.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Zt.getNormal(t,e,n,i)}}),Object.assign(da.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new eo(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new so(this,t)}}),Object.assign(E.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(F.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(O.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Ss.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.");},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.assign(Nt.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Nt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t;}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");}}}),Object.assign(Xe.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");}}),Object.defineProperties(Xe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");}}}),Object.defineProperties(Hr.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Wr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");}}),Gr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.");},Object.defineProperty(jo.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t;}}),nn.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==e&&(this.filmGauge=e),this.setFocalLength(t);},Object.defineProperties(pa.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.");}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t;}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t;}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t;}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t;}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t;}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t;}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t;}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t;}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.");}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t;}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t;}}}),Object.defineProperties(he.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),35048===this.usage},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048);}}}),Object.assign(he.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?35048:35044),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");}}),Object.assign(Re.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t);},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?"index"===t?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new he(arguments[1],arguments[2])))},addDrawCall:function(t,e,n){void 0!==n&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e);},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups();},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(Re.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(Ca.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t;}}}),Object.defineProperties(ll.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t;}}}),Object.defineProperties(br.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),35048===this.usage},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t);}}}),Object.assign(br.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?35048:35044),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");}}),Object.assign($s.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");}}),Object.assign(xr.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.");}}),Object.defineProperties(sl.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(oe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.");},set:function(){console.warn("THREE.Material: .wrapAround has been removed.");}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.");},set:function(){console.warn("THREE.Material: .overdraw has been removed.");}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ie}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===t;}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t;}}}),Object.defineProperties(ho.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");}}}),Object.defineProperties(co.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t;}}}),Object.defineProperties(tn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t;}}}),Object.assign(vr.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i);},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t);},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t);},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(vr.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t;}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t;}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=!0===t?3001:3e3;}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");}}}),Object.defineProperties(lr.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");}}}),Object.defineProperties(I.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t;}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t;}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t;}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t;}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t;}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t;}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t;}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t;}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t;}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t;}}}),Object.defineProperties(class extends Nt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[];}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t){if(void 0===t&&(t=0),!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return !0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.");}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.");}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this}setDetune(t){if(this.detune=t,void 0!==this.source.detune)return !0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.");}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1;}getLoop(){return !1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.");}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return (new Ha).load(t,(function(t){e.setBuffer(t);})),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).");}}}),rn.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},R.crossOrigin=void 0,R.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Vo;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},R.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Ho;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},R.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");},R.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"121"}}));var Hl=function(t){No.call(this,t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"};};Hl.prototype=Object.assign(Object.create(No.prototype),{constructor:Hl,setDecoderPath:function(t){return this.decoderPath=t,this},setDecoderConfig:function(t){return this.decoderConfig=t,this},setWorkerLimit:function(t){return this.workerLimit=t,this},setVerbosity:function(){console.warn("THREE.DRACOLoader: The .setVerbosity() method has been removed.");},setDrawMode:function(){console.warn("THREE.DRACOLoader: The .setDrawMode() method has been removed.");},setSkipDequantization:function(){console.warn("THREE.DRACOLoader: The .setSkipDequantization() method has been removed.");},load:function(t,e,n,i){var r=new Uo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,(t=>{var n={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(t,n).then(e).catch(i);}),n,i);},decodeDracoFile:function(t,e,n,i){var r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(t,r).then(e);},decodeGeometry:function(t,e){for(var n in e.attributeTypes){var i=e.attributeTypes[n];void 0!==i.BYTES_PER_ELEMENT&&(e.attributeTypes[n]=i.name);}var r,s=JSON.stringify(e);if(Hl.taskCache.has(t)){var o=Hl.taskCache.get(t);if(o.key===s)return o.promise;if(0===t.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}var a=this.workerNextTaskID++,l=t.byteLength,c=this._getWorker(a,l).then((n=>(r=n,new Promise(((n,i)=>{r._callbacks[a]={resolve:n,reject:i},r.postMessage({type:"decode",id:a,taskConfig:e,buffer:t},[t]);}))))).then((t=>this._createGeometry(t.geometry)));return c.catch((()=>!0)).then((()=>{r&&a&&this._releaseTask(r,a);})),Hl.taskCache.set(t,{key:s,promise:c}),c},_createGeometry:function(t){var e=new Re;t.index&&e.setIndex(new he(t.index.array,1));for(var n=0;n<t.attributes.length;n++){var i=t.attributes[n],r=i.name,s=i.array,o=i.itemSize;e.setAttribute(r,new he(s,o));}return e},_loadLibrary:function(t,e){var n=new Uo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise(((e,i)=>{n.load(t,e,void 0,i);}))},preload:function(){return this._initDecoder(),this},_initDecoder:function(){if(this.decoderPending)return this.decoderPending;var t="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then((e=>{var n=e[0];t||(this.decoderConfig.wasmBinary=e[1]);var i=Hl.DRACOWorker.toString(),r=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([r]));})),this.decoderPending},_getWorker:function(t,e){return this._initDecoder().then((()=>{var n;this.workerPool.length<this.workerLimit?((n=new Worker(this.workerSourceURL))._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(t){var e=t.data;switch(e.type){case"decode":n._callbacks[e.id].resolve(e);break;case"error":n._callbacks[e.id].reject(e);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+e.type+'"');}},this.workerPool.push(n)):this.workerPool.sort((function(t,e){return t._taskLoad>e._taskLoad?-1:1}));return (n=this.workerPool[this.workerPool.length-1])._taskCosts[t]=e,n._taskLoad+=e,n}))},_releaseTask:function(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e];},debug:function(){console.log("Task load: ",this.workerPool.map((t=>t._taskLoad)));},dispose:function(){for(var t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this}}),Hl.DRACOWorker=function(){var t,e;function n(t,e,n,i,r,s){var o=s.num_components(),a=n.num_points()*o,l=a*r.BYTES_PER_ELEMENT,c=function(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}(t,r),h=t._malloc(l);e.GetAttributeDataArrayForAllPoints(n,s,c,l,h);var u=new r(t.HEAPF32.buffer,h,a).slice();return t._free(h),{name:i,array:u,itemSize:o}}onmessage=function(i){var r=i.data;switch(r.type){case"init":t=r.decoderConfig,e=new Promise((function(e){t.onModuleLoaded=function(t){e({draco:t});},DracoDecoderModule(t);}));break;case"decode":var s=r.buffer,o=r.taskConfig;e.then((t=>{var e=t.draco,i=new e.Decoder,a=new e.DecoderBuffer;a.Init(new Int8Array(s),s.byteLength);try{var l=function(t,e,i,r){var s,o,a=r.attributeIDs,l=r.attributeTypes,c=e.GetEncodedGeometryType(i);if(c===t.TRIANGULAR_MESH)s=new t.Mesh,o=e.DecodeBufferToMesh(i,s);else {if(c!==t.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");s=new t.PointCloud,o=e.DecodeBufferToPointCloud(i,s);}if(!o.ok()||0===s.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+o.error_msg());var h={index:null,attributes:[]};for(var u in a){var d,p,m=self[l[u]];if(r.useUniqueIDs)p=a[u],d=e.GetAttributeByUniqueId(s,p);else {if(-1===(p=e.GetAttributeId(s,t[a[u]])))continue;d=e.GetAttribute(s,p);}h.attributes.push(n(t,e,s,u,m,d));}c===t.TRIANGULAR_MESH&&(h.index=function(t,e,n){var i=3*n.num_faces(),r=4*i,s=t._malloc(r);e.GetTrianglesUInt32Array(n,r,s);var o=new Uint32Array(t.HEAPF32.buffer,s,i).slice();return t._free(s),{array:o,itemSize:1}}(t,e,s));return t.destroy(s),h}(e,i,a,o),c=l.attributes.map((t=>t.array.buffer));l.index&&c.push(l.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:l},c);}catch(t){console.error(t),self.postMessage({type:"error",id:r.id,error:t.message});}finally{e.destroy(a),e.destroy(i);}}));}};},Hl.taskCache=new WeakMap,Hl.setDecoderPath=function(){console.warn("THREE.DRACOLoader: The .setDecoderPath() method has been removed. Use instance methods.");},Hl.setDecoderConfig=function(){console.warn("THREE.DRACOLoader: The .setDecoderConfig() method has been removed. Use instance methods.");},Hl.releaseDecoderModule=function(){console.warn("THREE.DRACOLoader: The .releaseDecoderModule() method has been removed. Use instance methods.");},Hl.getDecoderModule=function(){console.warn("THREE.DRACOLoader: The .getDecoderModule() method has been removed. Use instance methods.");};var Gl,Vl,jl=function(){function t(t){No.call(this,t),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.pluginCallbacks=[],this.register((function(t){return new o(t)})),this.register((function(t){return new l(t)})),this.register((function(t){return new a(t)})),this.register((function(t){return new r(t)}));}function e(){var t={};return {get:function(e){return t[e]},add:function(e,n){t[e]=n;},remove:function(e){delete t[e];},removeAll:function(){t={};}}}t.prototype=Object.assign(Object.create(No.prototype),{constructor:t,load:function(t,e,n,i){var r,s=this;r=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:Ra(t),this.manager.itemStart(t);var o=function(e){i?i(e):console.error(e),s.manager.itemError(t),s.manager.itemEnd(t);},a=new Uo(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,(function(n){try{s.parse(n,r,(function(n){e(n),s.manager.itemEnd(t);}),o);}catch(t){o(t);}}),n,o);},setDRACOLoader:function(t){return this.dracoLoader=t,this},setDDSLoader:function(t){return this.ddsLoader=t,this},setKTX2Loader:function(t){return this.ktx2Loader=t,this},register:function(t){return -1===this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.push(t),this},unregister:function(t){return -1!==this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this},parse:function(t,e,r,o){var a,l={},h={};if("string"==typeof t)a=t;else if(La(new Uint8Array(t,0,4))===c){try{l[n.KHR_BINARY_GLTF]=new d(t);}catch(t){return void(o&&o(t))}a=l[n.KHR_BINARY_GLTF].content;}else a=La(new Uint8Array(t));var u=JSON.parse(a);if(void 0===u.asset||u.asset.version[0]<2)o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else {var f=new q(u,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader});f.fileLoader.setRequestHeader(this.requestHeader);for(var y=0;y<this.pluginCallbacks.length;y++){var x=this.pluginCallbacks[y](f);h[x.name]=x,l[x.name]=!0;}if(u.extensionsUsed)for(y=0;y<u.extensionsUsed.length;++y){var b=u.extensionsUsed[y],w=u.extensionsRequired||[];switch(b){case n.KHR_MATERIALS_UNLIT:l[b]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:l[b]=new g;break;case n.KHR_DRACO_MESH_COMPRESSION:l[b]=new p(u,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:l[b]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:l[b]=new m;break;case n.KHR_MESH_QUANTIZATION:l[b]=new v;break;default:w.indexOf(b)>=0&&void 0===h[b]&&console.warn('THREE.GLTFLoader: Unknown extension "'+b+'".');}}f.setExtensions(l),f.setPlugins(h),f.parse(r,o);}}});var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(t){if(!t)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=t;}function r(t){this.parser=t,this.name=n.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}};}function s(){this.name=n.KHR_MATERIALS_UNLIT;}function o(t){this.parser=t,this.name=n.KHR_MATERIALS_CLEARCOAT;}function a(t){this.parser=t,this.name=n.KHR_MATERIALS_TRANSMISSION;}function l(t){this.parser=t,this.name=n.KHR_TEXTURE_BASISU;}r.prototype._markDefs=function(){for(var t=this.parser,e=this.parser.json.nodes||[],n=0,i=e.length;n<i;n++){var r=e[n];r.extensions&&r.extensions[this.name]&&void 0!==r.extensions[this.name].light&&t._addNodeRef(this.cache,r.extensions[this.name].light);}},r.prototype._loadLight=function(t){var e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;var r,s=e.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],a=new ie(16777215);void 0!==o.color&&a.fromArray(o.color);var l=void 0!==o.range?o.range:0;switch(o.type){case"directional":(r=new _a(a)).target.position.set(0,0,-1),r.add(r.target);break;case"point":(r=new xa(a)).distance=l;break;case"spot":(r=new va(a)).distance=l,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,r.angle=o.spot.outerConeAngle,r.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,r.target.position.set(0,0,-1),r.add(r.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+o.type+'".')}return r.position.set(0,0,0),r.decay=2,void 0!==o.intensity&&(r.intensity=o.intensity),r.name=e.createUniqueName(o.name||"light_"+t),i=Promise.resolve(r),e.cache.add(n,i),i},r.prototype.createNodeAttachment=function(t){var e=this,n=this.parser,i=n.json.nodes[t],r=(i.extensions&&i.extensions[this.name]||{}).light;return void 0===r?null:this._loadLight(r).then((function(t){return n._getNodeRef(e.cache,r,t)}))},s.prototype.getMaterialType=function(){return ae},s.prototype.extendParams=function(t,e,n){var i=[];t.color=new ie(1,1,1),t.opacity=1;var r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){var s=r.baseColorFactor;t.color.fromArray(s),t.opacity=s[3];}void 0!==r.baseColorTexture&&i.push(n.assignTexture(t,"map",r.baseColorTexture));}return Promise.all(i)},o.prototype.getMaterialType=function(t){var e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?co:null},o.prototype.extendMaterialParams=function(t,e){var n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();var r=[],s=i.extensions[this.name];if(void 0!==s.clearcoatFactor&&(e.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){var o=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new E(o,o);}return Promise.all(r)},a.prototype.getMaterialType=function(t){var e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?co:null},a.prototype.extendMaterialParams=function(t,e){var n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();var r=[],s=i.extensions[this.name];return void 0!==s.transmissionFactor&&(e.transmission=s.transmissionFactor),void 0!==s.transmissionTexture&&r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)},l.prototype.loadTexture=function(t){var e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;var r=i.extensions[this.name],s=n.images[r.source],o=e.options.ktx2Loader;if(!o)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return e.loadTextureImage(t,s,o)};var c="glTF",h=1313821514,u=5130562;function d(t){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var e=new DataView(t,0,12);if(this.header={magic:La(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==c)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var i=new DataView(t,12),r=0;r<i.byteLength;){var s=i.getUint32(r,!0);r+=4;var o=i.getUint32(r,!0);if(r+=4,o===h){var a=new Uint8Array(t,12+r,s);this.content=La(a);}else if(o===u){var l=12+r;this.body=t.slice(l,l+s);}r+=s;}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function p(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload();}function m(){this.name=n.KHR_TEXTURE_TRANSFORM;}function f(t){lo.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var e=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),n=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join("\n"),o={specular:{value:(new ie).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(t){for(var a in o)t.uniforms[a]=o[a];t.fragmentShader=t.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",e).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s);},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(t){o.specular.value=t;}},specularMap:{get:function(){return o.specularMap.value},set:function(t){o.specularMap.value=t,t?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP;}},glossiness:{get:function(){return o.glossiness.value},set:function(t){o.glossiness.value=t;}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(t){o.glossinessMap.value=t,t?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV);}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(t);}function g(){return {name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return f},extendParams:function(t,e,n){var i=e.extensions[this.name];t.color=new ie(1,1,1),t.opacity=1;var r=[];if(Array.isArray(i.diffuseFactor)){var s=i.diffuseFactor;t.color.fromArray(s),t.opacity=s[3];}if(void 0!==i.diffuseTexture&&r.push(n.assignTexture(t,"map",i.diffuseTexture)),t.emissive=new ie(0,0,0),t.glossiness=void 0!==i.glossinessFactor?i.glossinessFactor:1,t.specular=new ie(1,1,1),Array.isArray(i.specularFactor)&&t.specular.fromArray(i.specularFactor),void 0!==i.specularGlossinessTexture){var o=i.specularGlossinessTexture;r.push(n.assignTexture(t,"glossinessMap",o)),r.push(n.assignTexture(t,"specularMap",o));}return Promise.all(r)},createMaterial:function(t){var e=new f(t);return e.fog=!0,e.color=t.color,e.map=void 0===t.map?null:t.map,e.lightMap=null,e.lightMapIntensity=1,e.aoMap=void 0===t.aoMap?null:t.aoMap,e.aoMapIntensity=1,e.emissive=t.emissive,e.emissiveIntensity=1,e.emissiveMap=void 0===t.emissiveMap?null:t.emissiveMap,e.bumpMap=void 0===t.bumpMap?null:t.bumpMap,e.bumpScale=1,e.normalMap=void 0===t.normalMap?null:t.normalMap,e.normalMapType=0,t.normalScale&&(e.normalScale=t.normalScale),e.displacementMap=null,e.displacementScale=1,e.displacementBias=0,e.specularMap=void 0===t.specularMap?null:t.specularMap,e.specular=t.specular,e.glossinessMap=void 0===t.glossinessMap?null:t.glossinessMap,e.glossiness=t.glossiness,e.alphaMap=null,e.envMap=void 0===t.envMap?null:t.envMap,e.envMapIntensity=1,e.refractionRatio=.98,e}}}function v(){this.name=n.KHR_MESH_QUANTIZATION;}function y(t,e,n,i){xo.call(this,t,e,n,i);}p.prototype.decodePrimitive=function(t,e){var n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},a={},l={};for(var c in s){var h=O[c]||c.toLowerCase();o[h]=s[c];}for(c in t.attributes){h=O[c]||c.toLowerCase();if(void 0!==s[c]){var u=n.accessors[t.attributes[c]],d=L[u.componentType];l[h]=d,a[h]=!0===u.normalized;}}return e.getDependency("bufferView",r).then((function(t){return new Promise((function(e){i.decodeDracoFile(t,(function(t){for(var n in t.attributes){var i=t.attributes[n],r=a[n];void 0!==r&&(i.normalized=r);}e(t);}),o,l);}))}))},m.prototype.extendTexture=function(t,e){return t=t.clone(),void 0!==e.offset&&t.offset.fromArray(e.offset),void 0!==e.rotation&&(t.rotation=e.rotation),void 0!==e.scale&&t.repeat.fromArray(e.scale),void 0!==e.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.needsUpdate=!0,t},f.prototype=Object.create(lo.prototype),f.prototype.constructor=f,f.prototype.copy=function(t){return lo.prototype.copy.call(this,t),this.specularMap=t.specularMap,this.specular.copy(t.specular),this.glossinessMap=t.glossinessMap,this.glossiness=t.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this},y.prototype=Object.create(xo.prototype),y.prototype.constructor=y,y.prototype.copySampleValue_=function(t){for(var e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i,s=0;s!==i;s++)e[s]=n[r+s];return e},y.prototype.beforeStart_=y.prototype.copySampleValue_,y.prototype.afterEnd_=y.prototype.copySampleValue_,y.prototype.interpolate_=function(t,e,n,i){for(var r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=2*o,l=3*o,c=i-e,h=(n-e)/c,u=h*h,d=u*h,p=t*l,m=p-l,f=-2*d+3*u,g=d-u,v=1-f,y=g-u+h,x=0;x!==o;x++){var b=s[m+x+o],w=s[m+x+a]*c,_=s[p+x+o],M=s[p+x]*c;r[x]=v*b+y*w+f*_+g*M;}return r};var x=0,b=1,w=2,_=3,M=4,S=5,A=6,L={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},R={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},C={33071:1001,33648:1002,10497:1e3},P={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},O={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},I={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},N="OPAQUE",U="MASK",z="BLEND";function B(t,e){return "string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}function H(t){return void 0===t.DefaultMaterial&&(t.DefaultMaterial=new lo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),t.DefaultMaterial}function G(t,e,n){for(var i in n.extensions)void 0===t[i]&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i]);}function V(t,e){void 0!==e.extras&&("object"==typeof e.extras?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras));}function j(t,e){if(t.updateMorphTargets(),void 0!==e.weights)for(var n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){var r=e.extras.targetNames;if(t.morphTargetInfluences.length===r.length){t.morphTargetDictionary={};for(n=0,i=r.length;n<i;n++)t.morphTargetDictionary[r[n]]=n;}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");}}function W(t){for(var e="",n=Object.keys(t).sort(),i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function q(t,n){this.json=t||{},this.extensions={},this.plugins={},this.options=n||{},this.cache=new e,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},"undefined"!=typeof createImageBitmap&&!1===/Firefox/.test(navigator.userAgent)?this.textureLoader=new Da(this.options.manager):this.textureLoader=new Vo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new Uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0);}function X(t,e,n){var i=e.attributes,r=[];function s(e,i){return n.getDependency("accessor",e).then((function(e){t.setAttribute(i,e);}))}for(var o in i){var a=O[o]||o.toLowerCase();a in t.attributes||r.push(s(i[o],a));}if(void 0!==e.indices&&!t.index){var l=n.getDependency("accessor",e.indices).then((function(e){t.setIndex(e);}));r.push(l);}return V(t,e),function(t,e,n){var i=e.attributes,r=new k;if(void 0!==i.POSITION){var s=(d=n.json.accessors[i.POSITION]).min,o=d.max;if(void 0!==s&&void 0!==o){r.set(new F(s[0],s[1],s[2]),new F(o[0],o[1],o[2]));var a=e.targets;if(void 0!==a){for(var l=new F,c=new F,h=0,u=a.length;h<u;h++){var d,p=a[h];if(void 0!==p.POSITION)s=(d=n.json.accessors[p.POSITION]).min,o=d.max,void 0!==s&&void 0!==o?(c.setX(Math.max(Math.abs(s[0]),Math.abs(o[0]))),c.setY(Math.max(Math.abs(s[1]),Math.abs(o[1]))),c.setZ(Math.max(Math.abs(s[2]),Math.abs(o[2]))),l.max(c)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");}r.expandByVector(l);}t.boundingBox=r;var m=new et;r.getCenter(m.center),m.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=m;}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");}}(t,e,n),Promise.all(r).then((function(){return void 0!==e.targets?function(t,e,n){for(var i=!1,r=!1,s=0,o=e.length;s<o&&(void 0!==(c=e[s]).POSITION&&(i=!0),void 0!==c.NORMAL&&(r=!0),!i||!r);s++);if(!i&&!r)return Promise.resolve(t);var a=[],l=[];for(s=0,o=e.length;s<o;s++){var c=e[s];if(i){var h=void 0!==c.POSITION?n.getDependency("accessor",c.POSITION):t.attributes.position;a.push(h);}r&&(h=void 0!==c.NORMAL?n.getDependency("accessor",c.NORMAL):t.attributes.normal,l.push(h));}return Promise.all([Promise.all(a),Promise.all(l)]).then((function(e){var n=e[0],s=e[1];return i&&(t.morphAttributes.position=n),r&&(t.morphAttributes.normal=s),t.morphTargetsRelative=!0,t}))}(t,e.targets,n):t}))}function Y(t,e){var n=t.getIndex();if(null===n){var i=[],r=t.getAttribute("position");if(void 0===r)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t;for(var s=0;s<r.count;s++)i.push(s);t.setIndex(i),n=t.getIndex();}var o=n.count-2,a=[];if(2===e)for(s=1;s<=o;s++)a.push(n.getX(0)),a.push(n.getX(s)),a.push(n.getX(s+1));else for(s=0;s<o;s++)s%2==0?(a.push(n.getX(s)),a.push(n.getX(s+1)),a.push(n.getX(s+2))):(a.push(n.getX(s+2)),a.push(n.getX(s+1)),a.push(n.getX(s)));a.length/3!==o&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var l=t.clone();return l.setIndex(a),l}return q.prototype.setExtensions=function(t){this.extensions=t;},q.prototype.setPlugins=function(t){this.plugins=t;},q.prototype.parse=function(t,e){var n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll((function(t){return t._markDefs&&t._markDefs()})),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then((function(e){var s={scene:e[0][i.scene||0],scenes:e[0],animations:e[1],cameras:e[2],asset:i.asset,parser:n,userData:{}};G(r,s,i),V(s,i),t(s);})).catch(e);},q.prototype._markDefs=function(){for(var t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[],i=0,r=e.length;i<r;i++)for(var s=e[i].joints,o=0,a=s.length;o<a;o++)t[s[o]].isBone=!0;for(var l=0,c=t.length;l<c;l++){var h=t[l];void 0!==h.mesh&&(this._addNodeRef(this.meshCache,h.mesh),void 0!==h.skin&&(n[h.mesh].isSkinnedMesh=!0)),void 0!==h.camera&&this._addNodeRef(this.cameraCache,h.camera);}},q.prototype._addNodeRef=function(t,e){void 0!==e&&(void 0===t.refs[e]&&(t.refs[e]=t.uses[e]=0),t.refs[e]++);},q.prototype._getNodeRef=function(t,e,n){if(t.refs[e]<=1)return n;var i=n.clone();return i.name+="_instance_"+t.uses[e]++,i},q.prototype._invokeOne=function(t){var e=Object.values(this.plugins);e.push(this);for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}},q.prototype._invokeAll=function(t){var e=Object.values(this.plugins);e.unshift(this);for(var n=[],i=0;i<e.length;i++){var r=t(e[i]);r&&n.push(r);}return n},q.prototype.getDependency=function(t,e){var n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this.loadNode(e);break;case"mesh":i=this._invokeOne((function(t){return t.loadMesh&&t.loadMesh(e)}));break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne((function(t){return t.loadBufferView&&t.loadBufferView(e)}));break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne((function(t){return t.loadMaterial&&t.loadMaterial(e)}));break;case"texture":i=this._invokeOne((function(t){return t.loadTexture&&t.loadTexture(e)}));break;case"skin":i=this.loadSkin(e);break;case"animation":i=this.loadAnimation(e);break;case"camera":i=this.loadCamera(e);break;default:throw new Error("Unknown type: "+t)}this.cache.add(n,i);}return i},q.prototype.getDependencies=function(t){var e=this.cache.get(t);if(!e){var n=this,i=this.json[t+("mesh"===t?"es":"s")]||[];e=Promise.all(i.map((function(e,i){return n.getDependency(t,i)}))),this.cache.add(t,e);}return e},q.prototype.loadBuffer=function(t){var e=this.json.buffers[t],i=this.fileLoader;if(e.type&&"arraybuffer"!==e.type)throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(void 0===e.uri&&0===t)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var r=this.options;return new Promise((function(t,n){i.load(B(e.uri,r.path),t,void 0,(function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'));}));}))},q.prototype.loadBufferView=function(t){var e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then((function(t){var n=e.byteLength||0,i=e.byteOffset||0;return t.slice(i,i+n)}))},q.prototype.loadAccessor=function(t){var e=this,n=this.json,i=this.json.accessors[t];if(void 0===i.bufferView&&void 0===i.sparse)return Promise.resolve(null);var r=[];return void 0!==i.bufferView?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),void 0!==i.sparse&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then((function(t){var r,s=t[0],o=P[i.type],a=L[i.componentType],l=a.BYTES_PER_ELEMENT,c=l*o,h=i.byteOffset||0,u=void 0!==i.bufferView?n.bufferViews[i.bufferView].byteStride:void 0,d=!0===i.normalized;if(u&&u!==c){var p=Math.floor(h/u),m="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,f=e.cache.get(m);f||(f=new br(new a(s,p*u,i.count*u/l),u/l),e.cache.add(m,f)),r=new _r(f,o,h%u/l,d);}else r=new he(null===s?new a(i.count*o):new a(s,h,i.count*o),o,d);if(void 0!==i.sparse){var g=P.SCALAR,v=L[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new v(t[1],y,i.sparse.count*g),w=new a(t[2],x,i.sparse.count*o);null!==s&&(r=new he(r.array.slice(),r.itemSize,r.normalized));for(var _=0,M=b.length;_<M;_++){var S=b[_];if(r.setX(S,w[_*o]),o>=2&&r.setY(S,w[_*o+1]),o>=3&&r.setZ(S,w[_*o+2]),o>=4&&r.setW(S,w[_*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return r}))},q.prototype.loadTexture=function(t){var e,i,r=this.json,s=this.options,o=r.textures[t],a=o.extensions||{};return (e=a[n.MSFT_TEXTURE_DDS]?r.images[a[n.MSFT_TEXTURE_DDS].source]:r.images[o.source]).uri&&(i=s.manager.getHandler(e.uri)),i||(i=a[n.MSFT_TEXTURE_DDS]?this.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(t,e,i)},q.prototype.loadTextureImage=function(t,e,n){var i=this,r=this.json,s=this.options,o=r.textures[t],a=self.URL||self.webkitURL,l=e.uri,c=!1,h=!0;return "image/jpeg"===e.mimeType&&(h=!1),void 0!==e.bufferView&&(l=i.getDependency("bufferView",e.bufferView).then((function(t){if("image/png"===e.mimeType){var n=new DataView(t,25,1).getUint8(0,!1);h=6===n||4===n||3===n;}c=!0;var i=new Blob([t],{type:e.mimeType});return l=a.createObjectURL(i)}))),Promise.resolve(l).then((function(t){return new Promise((function(e,i){var r=e;!0===n.isImageBitmapLoader&&(r=function(t){e(new ys(t));}),n.load(B(t,s.path),r,void 0,i);}))})).then((function(e){!0===c&&a.revokeObjectURL(l),e.flipY=!1,o.name&&(e.name=o.name),h||(e.format=1022);var n=(r.samplers||{})[o.sampler]||{};return e.magFilter=R[n.magFilter]||1006,e.minFilter=R[n.minFilter]||1008,e.wrapS=C[n.wrapS]||1e3,e.wrapT=C[n.wrapT]||1e3,i.associations.set(e,{type:"textures",index:t}),e}))},q.prototype.assignTexture=function(t,e,i){var r=this;return this.getDependency("texture",i.index).then((function(s){if(void 0===i.texCoord||0==i.texCoord||"aoMap"===e&&1==i.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+e+" not yet supported."),r.extensions[n.KHR_TEXTURE_TRANSFORM]){var o=void 0!==i.extensions?i.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(o){var a=r.associations.get(s);s=r.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a);}}t[e]=s;}))},q.prototype.assignFinalMaterial=function(t){var e=t.geometry,n=t.material,i=void 0!==e.attributes.tangent,r=void 0!==e.attributes.color,s=void 0===e.attributes.normal,o=!0===t.isSkinnedMesh,a=Object.keys(e.morphAttributes).length>0,l=a&&void 0!==e.morphAttributes.normal;if(t.isPoints){var c="PointsMaterial:"+n.uuid,h=this.cache.get(c);h||(h=new cs,oe.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(c,h)),n=h;}else if(t.isLine){c="LineBasicMaterial:"+n.uuid;var u=this.cache.get(c);u||(u=new Qr,oe.prototype.copy.call(u,n),u.color.copy(n.color),this.cache.add(c,u)),n=u;}if(i||r||s||o||a){c="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),o&&(c+="skinning:"),i&&(c+="vertex-tangents:"),r&&(c+="vertex-colors:"),s&&(c+="flat-shading:"),a&&(c+="morph-targets:"),l&&(c+="morph-normals:");var d=this.cache.get(c);d||(d=n.clone(),o&&(d.skinning=!0),i&&(d.vertexTangents=!0),r&&(d.vertexColors=!0),s&&(d.flatShading=!0),a&&(d.morphTargets=!0),l&&(d.morphNormals=!0),this.cache.add(c,d),this.associations.set(d,this.associations.get(n))),n=d;}n.aoMap&&void 0===e.attributes.uv2&&void 0!==e.attributes.uv&&e.setAttribute("uv2",e.attributes.uv),n.normalScale&&!i&&(n.normalScale.y=-n.normalScale.y),n.clearcoatNormalScale&&!i&&(n.clearcoatNormalScale.y=-n.clearcoatNormalScale.y),t.material=n;},q.prototype.getMaterialType=function(){return lo},q.prototype.loadMaterial=function(t){var e,i=this,r=this.json,s=this.extensions,o=r.materials[t],a={},l=o.extensions||{},c=[];if(l[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var h=s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];e=h.getMaterialType(),c.push(h.extendParams(a,o,i));}else if(l[n.KHR_MATERIALS_UNLIT]){var u=s[n.KHR_MATERIALS_UNLIT];e=u.getMaterialType(),c.push(u.extendParams(a,o,i));}else {var d=o.pbrMetallicRoughness||{};if(a.color=new ie(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){var p=d.baseColorFactor;a.color.fromArray(p),a.opacity=p[3];}void 0!==d.baseColorTexture&&c.push(i.assignTexture(a,"map",d.baseColorTexture)),a.metalness=void 0!==d.metallicFactor?d.metallicFactor:1,a.roughness=void 0!==d.roughnessFactor?d.roughnessFactor:1,void 0!==d.metallicRoughnessTexture&&(c.push(i.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(i.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),e=this._invokeOne((function(e){return e.getMaterialType&&e.getMaterialType(t)})),c.push(Promise.all(this._invokeAll((function(e){return e.extendMaterialParams&&e.extendMaterialParams(t,a)}))));}!0===o.doubleSided&&(a.side=2);var m=o.alphaMode||N;return m===z?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,m===U&&(a.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&e!==ae&&(c.push(i.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new E(1,1),void 0!==o.normalTexture.scale&&a.normalScale.set(o.normalTexture.scale,o.normalTexture.scale)),void 0!==o.occlusionTexture&&e!==ae&&(c.push(i.assignTexture(a,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(a.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&e!==ae&&(a.emissive=(new ie).fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&e!==ae&&c.push(i.assignTexture(a,"emissiveMap",o.emissiveTexture)),Promise.all(c).then((function(){var r;return r=e===f?s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):new e(a),o.name&&(r.name=o.name),r.map&&(r.map.encoding=3001),r.emissiveMap&&(r.emissiveMap.encoding=3001),V(r,o),i.associations.set(r,{type:"materials",index:t}),o.extensions&&G(s,r,o),r}))},q.prototype.createUniqueName=function(t){for(var e=nl.sanitizeNodeName(t||""),n=1;this.nodeNamesUsed[e];++n)e=t+"_"+n;return this.nodeNamesUsed[e]=!0,e},q.prototype.loadGeometries=function(t){var e=this,i=this.extensions,r=this.primitiveCache;function s(t){return i[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t,e).then((function(n){return X(n,t,e)}))}for(var o,a,l=[],c=0,h=t.length;c<h;c++){var u,d=t[c],p=(a=void 0,(a=(o=d).extensions&&o.extensions[n.KHR_DRACO_MESH_COMPRESSION])?"draco:"+a.bufferView+":"+a.indices+":"+W(a.attributes):o.indices+":"+W(o.attributes)+":"+o.mode),m=r[p];if(m)l.push(m.promise);else u=d.extensions&&d.extensions[n.KHR_DRACO_MESH_COMPRESSION]?s(d):X(new Re,d,e),r[p]={primitive:d,promise:u},l.push(u);}return Promise.all(l)},q.prototype.loadMesh=function(t){for(var e=this,n=this.json.meshes[t],i=n.primitives,r=[],s=0,o=i.length;s<o;s++){var a=void 0===i[s].material?H(this.cache):this.getDependency("material",i[s].material);r.push(a);}return r.push(e.loadGeometries(i)),Promise.all(r).then((function(r){for(var s=r.slice(0,r.length-1),o=r[r.length-1],a=[],l=0,c=o.length;l<c;l++){var h,u=o[l],d=i[l],p=s[l];if(d.mode===M||d.mode===S||d.mode===A||void 0===d.mode)!0!==(h=!0===n.isSkinnedMesh?new Gr(u,p):new Xe(u,p)).isSkinnedMesh||h.geometry.attributes.skinWeight.normalized||h.normalizeSkinWeights(),d.mode===S?h.geometry=Y(h.geometry,1):d.mode===A&&(h.geometry=Y(h.geometry,2));else if(d.mode===b)h=new as(u,p);else if(d.mode===_)h=new rs(u,p);else if(d.mode===w)h=new ls(u,p);else {if(d.mode!==x)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);h=new ms(u,p);}Object.keys(h.geometry.morphAttributes).length>0&&j(h,n),h.name=e.createUniqueName(n.name||"mesh_"+t),o.length>1&&(h.name+="_"+l),V(h,n),e.assignFinalMaterial(h),a.push(h);}if(1===a.length)return a[0];var m=new pr;for(l=0,c=a.length;l<c;l++)m.add(a[l]);return m}))},q.prototype.loadCamera=function(t){var e,n=this.json.cameras[t],i=n[n.type];if(i)return "perspective"===n.type?e=new nn(T.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):"orthographic"===n.type&&(e=new ba(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),V(e,n),Promise.resolve(e);console.warn("THREE.GLTFLoader: Missing camera parameters.");},q.prototype.loadSkin=function(t){var e=this.json.skins[t],n={joints:e.joints};return void 0===e.inverseBindMatrices?Promise.resolve(n):this.getDependency("accessor",e.inverseBindMatrices).then((function(t){return n.inverseBindMatrices=t,n}))},q.prototype.loadAnimation=function(t){for(var e=this.json.animations[t],n=[],i=[],r=[],s=[],o=[],a=0,l=e.channels.length;a<l;a++){var c=e.channels[a],h=e.samplers[c.sampler],u=c.target,d=void 0!==u.node?u.node:u.id,p=void 0!==e.parameters?e.parameters[h.input]:h.input,m=void 0!==e.parameters?e.parameters[h.output]:h.output;n.push(this.getDependency("node",d)),i.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",m)),s.push(h),o.push(u);}return Promise.all([Promise.all(n),Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o)]).then((function(n){for(var i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],l=[],c=0,h=i.length;c<h;c++){var u=i[c],d=r[c],p=s[c],m=o[c],f=a[c];if(void 0!==u){var g;switch(u.updateMatrix(),u.matrixAutoUpdate=!0,I[f.path]){case I.weights:g=Eo;break;case I.rotation:g=Lo;break;case I.position:case I.scale:default:g=Co;}var v=u.name?u.name:u.uuid,x=void 0!==m.interpolation?D[m.interpolation]:2301,b=[];I[f.path]===I.weights?u.traverse((function(t){!0===t.isMesh&&t.morphTargetInfluences&&b.push(t.name?t.name:t.uuid);})):b.push(v);var w=p.array;if(p.normalized){var _;if(w.constructor===Int8Array)_=1/127;else if(w.constructor===Uint8Array)_=1/255;else if(w.constructor==Int16Array)_=1/32767;else {if(w.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");_=1/65535;}for(var M=new Float32Array(w.length),S=0,T=w.length;S<T;S++)M[S]=w[S]*_;w=M;}for(S=0,T=b.length;S<T;S++){var E=new g(b[S]+"."+I[f.path],d.array,w,x);"CUBICSPLINE"===m.interpolation&&(E.createInterpolant=function(t){return new y(this.times,this.values,this.getValueSize()/3,t)},E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(E);}}}return new Po(e.name?e.name:"animation_"+t,void 0,l)}))},q.prototype.loadNode=function(t){var e,n=this.json,i=this.extensions,r=this,s=n.nodes[t],o=s.name?r.createUniqueName(s.name):"";return (e=[],void 0!==s.mesh&&e.push(r.getDependency("mesh",s.mesh).then((function(t){var e=r._getNodeRef(r.meshCache,s.mesh,t);return void 0!==s.weights&&e.traverse((function(t){if(t.isMesh)for(var e=0,n=s.weights.length;e<n;e++)t.morphTargetInfluences[e]=s.weights[e];})),e}))),void 0!==s.camera&&e.push(r.getDependency("camera",s.camera).then((function(t){return r._getNodeRef(r.cameraCache,s.camera,t)}))),r._invokeAll((function(e){return e.createNodeAttachment&&e.createNodeAttachment(t)})).forEach((function(t){e.push(t);})),Promise.all(e)).then((function(e){var n;if((n=!0===s.isBone?new qr:e.length>1?new pr:1===e.length?e[0]:new Nt)!==e[0])for(var a=0,l=e.length;a<l;a++)n.add(e[a]);if(s.name&&(n.userData.name=s.name,n.name=o),V(n,s),s.extensions&&G(i,n,s),void 0!==s.matrix){var c=new ht;c.fromArray(s.matrix),n.applyMatrix4(c);}else void 0!==s.translation&&n.position.fromArray(s.translation),void 0!==s.rotation&&n.quaternion.fromArray(s.rotation),void 0!==s.scale&&n.scale.fromArray(s.scale);return r.associations.set(n,{type:"nodes",index:t}),n}))},q.prototype.loadScene=function(){function t(e,n,i,r){var s=i.nodes[e];return r.getDependency("node",e).then((function(t){return void 0===s.skin?t:r.getDependency("skin",s.skin).then((function(t){for(var n=[],i=0,s=(e=t).joints.length;i<s;i++)n.push(r.getDependency("node",e.joints[i]));return Promise.all(n)})).then((function(n){return t.traverse((function(t){if(t.isMesh){for(var i=[],r=[],s=0,o=n.length;s<o;s++){var a=n[s];if(a){i.push(a);var l=new ht;void 0!==e.inverseBindMatrices&&l.fromArray(e.inverseBindMatrices.array,16*s),r.push(l);}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[s]);}t.bind(new Wr(i,r),t.matrixWorld);}})),t}));var e;})).then((function(e){n.add(e);var o=[];if(s.children)for(var a=s.children,l=0,c=a.length;l<c;l++){var h=a[l];o.push(t(h,e,i,r));}return Promise.all(o)}))}return function(e){var n=this.json,i=this.extensions,r=this.json.scenes[e],s=new pr;r.name&&(s.name=this.createUniqueName(r.name)),V(s,r),r.extensions&&G(i,s,r);for(var o=r.nodes||[],a=[],l=0,c=o.length;l<c;l++)a.push(t(o[l],s,n,this));return Promise.all(a).then((function(){return s}))}}(),t}();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=Symbol("retainerCount"),ql=Symbol("recentlyUsed"),Xl=Symbol("evict"),Yl=Symbol("evictionThreshold"),Jl=Symbol("cache");class Zl{constructor(t,e=5){this[Gl]=new Map,this[Vl]=[],this[Jl]=t,this[Yl]=e;}set evictionThreshold(t){this[Yl]=t,this[Xl]();}get evictionThreshold(){return this[Yl]}get cache(){return this[Jl]}retainerCount(t){return this[Wl].get(t)||0}reset(){this[Wl].clear(),this[ql]=[];}retain(t){this[Wl].has(t)||this[Wl].set(t,0),this[Wl].set(t,this[Wl].get(t)+1);const e=this[ql].indexOf(t);-1!==e&&this[ql].splice(e,1),this[ql].unshift(t),this[Xl]();}release(t){this[Wl].has(t)&&this[Wl].set(t,Math.max(this[Wl].get(t)-1,0)),this[Xl]();}[(Gl=Wl,Vl=ql,Xl)](){if(!(this[ql].length<this[Yl]))for(let t=this[ql].length-1;t>=this[Yl];--t){const e=this[ql][t];0===this[Wl].get(e)&&(this[Jl].delete(e),this[ql].splice(t,1));}}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kl,Ql;const $l=new Map,tc=new Map;let ec;const nc=new Hl,ic=Symbol("loader"),rc=Symbol("evictionPolicy"),sc=Symbol("GLTFInstance");class oc extends _{constructor(t){super(),this[Ql]=new jl,this[sc]=t,this[ic].setDRACOLoader(nc);}static setDRACODecoderLocation(t){ec=t,nc.setDecoderPath(t);}static getDRACODecoderLocation(){return ec}static get cache(){return $l}static clearCache(){$l.forEach(((t,e)=>{this.delete(e);})),this[rc].reset();}static has(t){return $l.has(t)}static async delete(t){if(!this.has(t))return;const e=$l.get(t);tc.delete(t),$l.delete(t);(await e).dispose();}static hasFinishedLoading(t){return !!tc.get(t)}get[(Kl=rc,Ql=ic,rc)](){return this.constructor[rc]}async preload(t,e,n=(()=>{})){if(this.dispatchEvent({type:"preload",element:e,src:t}),!$l.has(t)){const e=((t,e,n=(()=>{}))=>{const i=t=>{const e=t.loaded/t.total;n(Math.max(0,Math.min(1,isFinite(e)?e:1)));};return new Promise(((n,r)=>{e.load(t,n,i,r);}))})(t,this[ic],(t=>{n(.8*t);})),i=this[sc],r=e.then((t=>i.prepare(t))).then((t=>(n(.9),new i(t))));$l.set(t,r);}await $l.get(t),tc.set(t,!0),n&&n(1);}async load(t,e,n=(()=>{})){await this.preload(t,e,n);const i=await $l.get(t),r=await i.clone();return this[rc].retain(t),r.dispose=(()=>{const e=r.dispose;let n=!1;return ()=>{n||(n=!0,e.apply(r),this[rc].release(t));}})(),r}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ac;oc[Kl]=new Zl(oc);const lc=Symbol("velocity");class cc{constructor(){this[ac]=0;}update(t,e,n,i){if(null==t||0===i)return e;if(t===e&&0===this[lc])return e;if(n<0)return t;const r=t-e,s=this[lc]+.02*r,o=r+n*s,a=Math.exp(-.02*n),l=(s-.02*o)*a,c=-.02*(l+s*a);return Math.abs(l)<4000000000000001e-21*Math.abs(i)&&c*r>=0?(this[lc]=0,e):(this[lc]=l,e+o*a)}}ac=lc;var hc=function(t){Nt.call(this),this.element=t||document.createElement("div"),this.element.style.position="absolute",this.addEventListener("removed",(function(){this.traverse((function(t){t.element instanceof Element&&null!==t.element.parentNode&&t.element.parentNode.removeChild(t.element);}));}));};hc.prototype=Object.assign(Object.create(Nt.prototype),{constructor:hc,copy:function(t,e){return Nt.prototype.copy.call(this,t,e),this.element=t.element.cloneNode(!0),this}});var uc=function(){var t,e,n,i,r=this,s=new F,o=new ht,a=new ht,l={objects:new WeakMap},c=document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return {width:t,height:e}},this.setSize=function(r,s){n=(t=r)/2,i=(e=s)/2,c.style.width=r+"px",c.style.height=s+"px";};var h,u,d=function(t,e,o){if(t instanceof hc){t.onBeforeRender(r,e,o),s.setFromMatrixPosition(t.matrixWorld),s.applyMatrix4(a);var h=t.element,u="translate(-50%,-50%) translate("+(s.x*n+n)+"px,"+(-s.y*i+i)+"px)";h.style.WebkitTransform=u,h.style.MozTransform=u,h.style.oTransform=u,h.style.transform=u,h.style.display=t.visible&&s.z>=-1&&s.z<=1?"":"none";var m={distanceToCameraSquared:p(o,t)};l.objects.set(t,m),h.parentNode!==c&&c.appendChild(h),t.onAfterRender(r,e,o);}for(var f=0,g=t.children.length;f<g;f++)d(t.children[f],e,o);},p=(h=new F,u=new F,function(t,e){return h.setFromMatrixPosition(t.matrixWorld),u.setFromMatrixPosition(e.matrixWorld),h.distanceToSquared(u)}),m=function(t){for(var e=function(t){var e=[];return t.traverse((function(t){t instanceof hc&&e.push(t);})),e}(t).sort((function(t,e){return l.objects.get(t).distanceToCameraSquared-l.objects.get(e).distanceToCameraSquared})),n=e.length,i=0,r=e.length;i<r;i++)e[i].element.style.zIndex=n-i;};this.render=function(t,e){!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),o.copy(e.matrixWorldInverse),a.multiplyMatrices(e.projectionMatrix,o),d(t,t,e),m(t);};};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=(t,e)=>({type:"number",number:t,unit:e}),pc=(()=>{const t={};return e=>{const n=e;if(n in t)return t[n];const i=[];let r=0;for(;e;){if(++r>1e3){e="";break}const t=mc(e),n=t.nodes[0];if(null==n||0===n.terms.length)break;i.push(n),e=t.remainingInput;}return t[n]=i}})(),mc=(()=>{const t=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,n=/^[\),]/;return i=>{const r=[];for(;i.length&&(i=i.trim(),!n.test(i));)if("("===i[0]){const{nodes:t,remainingInput:e}=yc(i);i=e,r.push({type:"function",name:{type:"ident",value:"calc"},arguments:t});}else if(t.test(i)){const t=fc(i),e=t.nodes[0];if("("===(i=t.remainingInput)[0]){const{nodes:t,remainingInput:n}=yc(i);r.push({type:"function",name:e,arguments:t}),i=n;}else r.push(e);}else if(e.test(i))r.push({type:"operator",value:i[0]}),i=i.slice(1);else {const{nodes:t,remainingInput:e}="#"===i[0]?vc(i):gc(i);if(0===t.length)break;r.push(t[0]),i=e;}return {nodes:[{type:"expression",terms:r}],remainingInput:i}}})(),fc=(()=>{const t=/[^a-z^0-9^_^\-^\u0240-\uffff]/i;return e=>{const n=e.match(t);return {nodes:[{type:"ident",value:null==n?e:e.substr(0,n.index)}],remainingInput:null==n?"":e.substr(n.index)}}})(),gc=(()=>{const t=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,n=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const r=i.match(t),s=null==r?"0":r[0],o=(i=null==s?i:i.slice(s.length)).match(e);let a=null!=o&&""!==o[0]?o[0]:null;const l=null==o?i:i.slice(a.length);return null==a||n.test(a)||(a=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:a}],remainingInput:l}}})(),vc=(()=>{const t=/^[a-f0-9]*/i;return e=>{const n=(e=e.slice(1).trim()).match(t);return {nodes:null==n?[]:[{type:"hex",value:n[0]}],remainingInput:null==n?e:e.slice(n[0].length)}}})(),yc=t=>{const e=[];for(t=t.slice(1).trim();t.length;){const n=mc(t);if(e.push(n.nodes[0]),","===(t=n.remainingInput.trim())[0])t=t.slice(1).trim();else if(")"===t[0]){t=t.slice(1);break}}return {nodes:e,remainingInput:t}},xc=Symbol("visitedTypes");class bc{constructor(t){this[xc]=t;}walk(t,e){const n=t.slice();for(;n.length;){const t=n.shift();switch(this[xc].indexOf(t.type)>-1&&e(t),t.type){case"expression":n.unshift(...t.terms);break;case"function":n.unshift(t.name,...t.arguments);}}}}const wc=Object.freeze({type:"number",number:0,unit:null}),_c=(t,e=0)=>{let{number:n,unit:i}=t;if(isFinite(n)){if("rad"===t.unit||null==t.unit)return t}else n=e,i="rad";return {type:"number",number:("deg"===i&&null!=n?n:0)*Math.PI/180,unit:"rad"}},Mc=(t,e=0)=>{let n,{number:i,unit:r}=t;if(isFinite(i)){if("m"===t.unit)return t}else i=e,r="m";switch(r){default:n=1;break;case"cm":n=.01;break;case"mm":n=.001;}return {type:"number",number:n*i,unit:"m"}},Sc=(()=>{const t=t=>t,e={rad:t,deg:_c,m:t,mm:Mc,cm:Mc};return (t,n=wc)=>{let{number:i,unit:r}=t;if(isFinite(i)||(i=n.number,r=n.unit),null==r)return t;const s=e[r];return null==s?n:s(t)}})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc extends hc{constructor(t){super(document.createElement("div")),this.normal=new F(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal);}get facingCamera(){return !this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0);}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1);}increment(){this.referenceCount++;}decrement(){return this.referenceCount>0&&--this.referenceCount,0===this.referenceCount}updatePosition(t){if(null==t)return;const e=pc(t)[0].terms;for(let t=0;t<3;++t)this.position.setComponent(t,Sc(e[t]).number);}updateNormal(t){if(null==t)return;const e=pc(t)[0].terms;for(let t=0;t<3;++t)this.normal.setComponent(t,Sc(e[t]).number);}orient(t){this.pivot.style.transform=`rotate(${t}rad)`;}updateVisibility(t){t?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const n=e,i=n.dataset.visibilityAttribute;if(null!=i){const e="data-"+i;t?n.setAttribute(e,""):n.removeAttribute(e);}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}));})),this.initialized=!0;}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=(t,e)=>{let n=0;const i=new F;return t.traverse((t=>{let r,s;t.updateWorldMatrix(!1,!1);let o=t.geometry;if(void 0!==o)if(o.isGeometry){let a=o.vertices;for(r=0,s=a.length;r<s;r++)i.copy(a[r]),i.applyMatrix4(t.matrixWorld),n=e(n,i);}else if(o.isBufferGeometry){let a=o.attributes.position;if(void 0!==a)for(r=0,s=a.count;r<s;r++)i.fromBufferAttribute(a,r).applyMatrix4(t.matrixWorld),n=e(n,i);}})),n};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends _a{constructor(t,e){super(),this.shadowMaterial=new oo,this.boundingBox=new k,this.size=new F,this.isAnimated=!1,this.needsUpdate=!1,this.intensity=0,this.castShadow=!0,this.frustumCulled=!1,this.floor=new Xe(new pn,this.shadowMaterial),this.floor.rotateX(-Math.PI/2),this.floor.receiveShadow=!0,this.floor.castShadow=!1,this.floor.frustumCulled=!1,this.add(this.floor),this.shadow.camera.up.set(0,0,1),t.add(this),this.target=t,this.setModel(t,e);}setModel(t,e){this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size);const{boundingBox:n,size:i}=this;if(this.isAnimated){const t=2*Math.max(i.x,i.y,i.z);i.y=t,n.expandByVector(i.subScalar(t).multiplyScalar(-.5)),n.max.y=n.min.y+t,i.set(t,t,t);}const r=.001*i.y;this.position.y=n.max.y+r,n.getCenter(this.floor.position),this.setSoftness(e);}setSoftness(t){const e=Math.pow(2,9-3*t);this.setMapSize(e);}setMapSize(t){const{camera:e,mapSize:n,map:i}=this.shadow,{size:r,boundingBox:s}=this;null!=i&&(i.dispose(),this.shadow.map=null),this.isAnimated&&(t*=2);const o=Math.floor(r.x>r.z?t:t*r.x/r.z),a=Math.floor(r.x>r.z?t*r.z/r.x:t);n.set(o,a);const l=2.5*r.x/o,c=2.5*r.z/a;e.left=-s.max.x-l,e.right=-s.min.x+l,e.bottom=s.min.z-c,e.top=s.max.z+c,this.setScaleAndOffset(e.zoom,0),this.shadow.updateMatrices(this),this.floor.scale.set(r.x+2*l,r.z+2*c,1),this.needsUpdate=!0;}setIntensity(t){this.shadowMaterial.opacity=t,t>0?(this.visible=!0,this.floor.visible=!0):(this.visible=!1,this.floor.visible=!1);}getIntensity(){return this.shadowMaterial.opacity}setRotation(t){this.shadow.camera.up.set(Math.sin(t),0,Math.cos(t)),this.shadow.updateMatrices(this);}setScaleAndOffset(t,e){const n=this.size.y,i=1/t,r=.001*n;this.floor.position.y=2*r-n+e*i;const{camera:s}=this.shadow;s.zoom=t,s.near=0,s.far=n*t-e,s.projectionMatrix.makeOrthographic(s.left*t,s.right*t,s.top*t,s.bottom*t,s.near,s.far),s.projectionMatrixInverse.getInverse(s.projectionMatrix);}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lc,Rc;const Cc=22.5*Math.PI/180,Pc=Math.sin(Cc),Oc=Math.tan(Cc),Ic=Symbol("shadow"),Dc=Symbol("cancelPendingSourceChange"),Nc=Symbol("currentGLTF"),Fc=new F,Uc=new F,zc=new F;class kc extends Nt{constructor(){super(),this[Lc]=null,this[Rc]=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.animations=[],this.modelContainer=new Nt,this.animationNames=[],this.boundingBox=new k,this.size=new F,this.idealCameraDistance=0,this.fieldOfViewAspect=0,this.userData={url:null},this.url=null,this.name="Model",this.modelContainer.name="ModelContainer",this.add(this.modelContainer),this.mixer=new rl(this.modelContainer);}get currentGLTF(){return this[Nc]}hasModel(){return !!this.modelContainer.children.length}setObject(t){this.clear(),this.modelContainer.add(t),this.updateFraming(),this.dispatchEvent({type:"model-load"});}async setSource(t,e,n){if(!e||e===this.url)return void(n&&n(1));let i;null!=this[Dc]&&(this[Dc](),this[Dc]=null),this.url=e;try{i=await new Promise((async(i,r)=>{this[Dc]=()=>r();try{i(await t[Tp].loader.load(e,t,n));}catch(t){r(t);}}));}catch(t){if(null==t)return;throw t}this.clear(),this[Nc]=i,null!=i&&this.modelContainer.add(i.scene);const{animations:r}=i,s=new Map,o=[];for(const t of r)s.set(t.name,t),o.push(t.name);this.animations=r,this.animationsByName=s,this.animationNames=o,this.userData.url=e,this.updateFraming(),this.dispatchEvent({type:"model-load",url:e});}set animationTime(t){this.mixer.setTime(t);}get animationTime(){return null!=this.currentAnimationAction?this.currentAnimationAction.time:0}get hasActiveAnimation(){return null!=this.currentAnimationAction}playAnimation(t=null,e=0){const{animations:n}=this;if(null==n||0===n.length)return void console.warn("Cannot play animation (model does not have any animations)");let i=null;null!=t&&(i=this.animationsByName.get(t)),null==i&&(i=n[0]);try{const{currentAnimationAction:t}=this;this.currentAnimationAction=this.mixer.clipAction(i,this).play(),this.currentAnimationAction.enabled=!0,null!=t&&this.currentAnimationAction!==t&&this.currentAnimationAction.crossFadeFrom(t,e,!1);}catch(t){console.error(t);}}stopAnimation(){null!=this.currentAnimationAction&&(this.currentAnimationAction.stop(),this.currentAnimationAction.reset(),this.currentAnimationAction=null),this.mixer.stopAllAction();}updateAnimation(t){this.mixer.update(t);}clear(){this.url=null,this.userData={url:null};const t=this[Nc];if(null!=t){for(const t of this.modelContainer.children)this.modelContainer.remove(t);t.dispose(),this[Nc]=null;}null!=this.currentAnimationAction&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this);}updateFraming(t=null){this.remove(this.modelContainer),null==t&&(this.boundingBox.setFromObject(this.modelContainer),this.boundingBox.getSize(this.size),t=this.boundingBox.getCenter(new F));const e=Math.sqrt(Ec(this.modelContainer,((e,n)=>Math.max(e,t.distanceToSquared(n)))));this.idealCameraDistance=e/Pc;this.fieldOfViewAspect=Ec(this.modelContainer,((e,n)=>{n.sub(t);const i=Math.sqrt(n.x*n.x+n.z*n.z);return Math.max(e,i/(this.idealCameraDistance-Math.abs(n.y)))}))/Oc,this.add(this.modelContainer);}setShadowIntensity(t,e){let n=this[Ic];null!=n?(n.setIntensity(t),n.setModel(this,e)):t>0&&(n=new Ac(this,e),n.setIntensity(t),this[Ic]=n);}setShadowSoftness(t){const e=this[Ic];null!=e&&e.setSoftness(t);}setShadowRotation(t){const e=this[Ic];null!=e&&e.setRotation(t);}updateShadow(){const t=this[Ic];if(null==t)return !1;{const{needsUpdate:e}=t;return t.needsUpdate=!1,e}}setShadowScaleAndOffset(t,e){const n=this[Ic];null!=n&&n.setScaleAndOffset(t,e);}addHotspot(t){this.add(t);}removeHotspot(t){this.remove(t);}forHotspots(t){const{children:e}=this;for(let n=0,i=e.length;n<i;n++){const i=e[n];i instanceof Tc&&t(i);}}updateHotspots(t){this.forHotspots((e=>{Fc.copy(t),Uc.setFromMatrixPosition(e.matrixWorld),Fc.sub(Uc),zc.copy(e.normal).transformDirection(this.matrixWorld),Fc.dot(zc)<0?e.hide():e.show();}));}orientHotspots(t){this.forHotspots((e=>{e.orient(t);}));}setHotspotsVisibility(t){this.forHotspots((e=>{e.visible=t;}));}}Lc=Ic,Rc=Nc;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bc=Math.tan(22.5*Math.PI/180),Hc=new ll,Gc=new F;class Vc extends xr{constructor({canvas:t,element:e,width:n,height:i}){super(),this.aspect=1,this.shadowIntensity=0,this.shadowSoftness=1,this.width=1,this.height=1,this.isDirty=!1,this.context=null,this.exposure=1,this.canScale=!0,this.framedFieldOfView=45,this.camera=new nn(45,1,.1,100),this.goalTarget=new F,this.targetDamperX=new cc,this.targetDamperY=new cc,this.targetDamperZ=new cc,this.name="ModelScene",this.element=e,this.canvas=t,this.model=new kc,this.camera=new nn(45,1,.1,100),this.camera.name="MainCamera",this.activeCamera=this.camera,this.add(this.model),this.setSize(n,i),this.model.addEventListener("model-load",(t=>this.onModelLoad(t)));}createContext(){this.context=this.canvas.getContext("2d");}async setModelSource(t,e){try{await this.model.setSource(this.element,t,e);}catch(e){throw new Error(`Could not set model source to '${t}': ${e.message}`)}}setSize(t,e){this.width===t&&this.height===e||(this.width=Math.max(t,1),this.height=Math.max(e,1),this.aspect=this.width/this.height,this.frameModel(),this.isDirty=!0);}frameModel(){const t=Bc*Math.max(1,this.model.fieldOfViewAspect/this.aspect);this.framedFieldOfView=2*Math.atan(t)*180/Math.PI;}getSize(){return {width:this.width,height:this.height}}getCamera(){return this.activeCamera}setCamera(t){this.activeCamera=t;}onModelLoad(t){this.frameModel(),this.setShadowIntensity(this.shadowIntensity),this.isDirty=!0,this.dispatchEvent({type:"model-load",url:t.url});}setTarget(t,e,n){this.goalTarget.set(-t,-e,-n);}getTarget(){return Gc.copy(this.goalTarget).multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4);}updateTarget(t){const e=this.goalTarget,n=this.model.position;if(!e.equals(n)){const i=this.model.idealCameraDistance;let{x:r,y:s,z:o}=n;r=this.targetDamperX.update(r,e.x,t,i),s=this.targetDamperY.update(s,e.y,t,i),o=this.targetDamperZ.update(o,e.z,t,i),this.model.position.set(r,s,o),this.model.updateMatrixWorld(),this.model.setShadowRotation(this.yaw),this.isDirty=!0;}}pointTowards(t,e){const{x:n,z:i}=this.position;this.yaw=Math.atan2(t-n,e-i);}set yaw(t){this.rotation.y=t,this.model.setShadowRotation(t),this.isDirty=!0;}get yaw(){return this.rotation.y}setShadowIntensity(t){t=Math.max(t,0),this.shadowIntensity=t,this.model.hasModel()&&this.model.setShadowIntensity(t,this.shadowSoftness);}setShadowSoftness(t){this.shadowSoftness=t,this.model.setShadowSoftness(t);}positionAndNormalFromPoint(t,e=this){Hc.setFromCamera(t,this.getCamera());const n=Hc.intersectObject(e,!0);if(0===n.length)return null;const i=n[0];return null==i.face?null:(i.face.normal.applyNormalMatrix((new A).getNormalMatrix(i.object.matrixWorld)),{position:i.point,normal:i.face.normal})}}var jc,Wc=((jc=new ao({uniforms:{roughnessMap:{value:null},normalMap:{value:null},texelSize:{value:new E(1,1)}},vertexShader:"\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tattribute vec3 position;\n\t\t\tattribute vec2 uv;\n\n\t\t\tvarying vec2 vUv;\n\n\t\t\tvoid main() {\n\n\t\t\t\tvUv = uv;\n\n\t\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t\t}\n\t\t",fragmentShader:"\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec2 vUv;\n\n\t\t\tuniform sampler2D roughnessMap;\n\t\t\tuniform sampler2D normalMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\n\t\t\tvec4 envMapTexelToLinear( vec4 a ) { return a; }\n\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tfloat roughnessToVariance( float roughness ) {\n\n\t\t\t\tfloat variance = 0.0;\n\n\t\t\t\tif ( roughness >= r1 ) {\n\n\t\t\t\t\tvariance = ( r0 - roughness ) * ( v1 - v0 ) / ( r0 - r1 ) + v0;\n\n\t\t\t\t} else if ( roughness >= r4 ) {\n\n\t\t\t\t\tvariance = ( r1 - roughness ) * ( v4 - v1 ) / ( r1 - r4 ) + v1;\n\n\t\t\t\t} else if ( roughness >= r5 ) {\n\n\t\t\t\t\tvariance = ( r4 - roughness ) * ( v5 - v4 ) / ( r4 - r5 ) + v4;\n\n\t\t\t\t} else {\n\n\t\t\t\t\tfloat roughness2 = roughness * roughness;\n\n\t\t\t\t\tvariance = 1.79 * roughness2 * roughness2;\n\n\t\t\t\t}\n\n\t\t\t\treturn variance;\n\n\t\t\t}\n\n\t\t\tfloat varianceToRoughness( float variance ) {\n\n\t\t\t\tfloat roughness = 0.0;\n\n\t\t\t\tif ( variance >= v1 ) {\n\n\t\t\t\t\troughness = ( v0 - variance ) * ( r1 - r0 ) / ( v0 - v1 ) + r0;\n\n\t\t\t\t} else if ( variance >= v4 ) {\n\n\t\t\t\t\troughness = ( v1 - variance ) * ( r4 - r1 ) / ( v1 - v4 ) + r1;\n\n\t\t\t\t} else if ( variance >= v5 ) {\n\n\t\t\t\t\troughness = ( v4 - variance ) * ( r5 - r4 ) / ( v4 - v5 ) + r4;\n\n\t\t\t\t} else {\n\n\t\t\t\t\troughness = pow( 0.559 * variance, 0.25 ); // 0.559 = 1.0 / 1.79\n\n\t\t\t\t}\n\n\t\t\t\treturn roughness;\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = texture2D( roughnessMap, vUv, - 1.0 );\n\n\t\t\t\tif ( texelSize.x == 0.0 ) return;\n\n\t\t\t\tfloat roughness = gl_FragColor.g;\n\n\t\t\t\tfloat variance = roughnessToVariance( roughness );\n\n\t\t\t\tvec3 avgNormal;\n\n\t\t\t\tfor ( float x = - 1.0; x < 2.0; x += 2.0 ) {\n\n\t\t\t\t\tfor ( float y = - 1.0; y < 2.0; y += 2.0 ) {\n\n\t\t\t\t\t\tvec2 uv = vUv + vec2( x, y ) * 0.25 * texelSize;\n\n\t\t\t\t\t\tavgNormal += normalize( texture2D( normalMap, uv, - 1.0 ).xyz - 0.5 );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tvariance += 1.0 - 0.25 * length( avgNormal );\n\n\t\t\t\tgl_FragColor.g = varianceToRoughness( variance );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})).type="RoughnessMipmapper",jc),qc=new Xe(new pn(2,2),Wc),Xc=new ba(0,1,0,1,0,1),Yc=null,Jc=null;function Zc(t){(Jc=t).compile(qc,Xc);}Zc.prototype={constructor:Zc,generateMipmaps:function(t){if("roughnessMap"in t!=!1){var{roughnessMap:e,normalMap:n}=t;if(null!==e&&null!==n&&e.generateMipmaps&&!t.userData.roughnessUpdated){t.userData.roughnessUpdated=!0;var i=Math.max(e.image.width,n.image.width),r=Math.max(e.image.height,n.image.height);if(T.isPowerOfTwo(i)&&T.isPowerOfTwo(r)){var s=Jc.getRenderTarget(),o=Jc.autoClear;if(Jc.autoClear=!1,null!==Yc&&Yc.width===i&&Yc.height===r||(null!==Yc&&Yc.dispose(),(Yc=new I(i,r,{depthBuffer:!1})).scissorTest=!0),i!==e.image.width||r!==e.image.height){var a=new I(i,r,{wrapS:e.wrapS,wrapT:e.wrapT,magFilter:e.magFilter,minFilter:e.minFilter,depthBuffer:!1});a.texture.generateMipmaps=!0,Jc.setRenderTarget(a),t.roughnessMap=a.texture,t.metalnessMap==e&&(t.metalnessMap=t.roughnessMap),t.aoMap==e&&(t.aoMap=t.roughnessMap);}Wc.uniforms.roughnessMap.value=e,Wc.uniforms.normalMap.value=n;for(var l=new E(0,0),c=Wc.uniforms.texelSize.value,h=0;i>=1&&r>=1;++h,i/=2,r/=2)c.set(1/i,1/r),0==h&&c.set(0,0),Yc.viewport.set(l.x,l.y,i,r),Yc.scissor.set(l.x,l.y,i,r),Jc.setRenderTarget(Yc),Jc.render(qc,Xc),Jc.copyFramebufferToTexture(l,t.roughnessMap,h),Wc.uniforms.roughnessMap.value=t.roughnessMap;e!==t.roughnessMap&&e.dispose(),Jc.setRenderTarget(s),Jc.autoClear=o;}}}},dispose:function(){Wc.dispose(),qc.geometry.dispose(),null!=Yc&&Yc.dispose();}};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kc=t=>t&&"null"!==t?$c(t):null,Qc=()=>{if(u)return;const t=[];throw a||t.push("WebXR Device API"),l||t.push("WebXR Hit Test API"),new Error("The following APIs are required for AR, but are missing in this browser: "+t.join(", "))},$c=t=>new URL(t,window.location.toString()).toString(),th=(t,e)=>{let n=null;return (...i)=>{null!=n&&self.clearTimeout(n),n=self.setTimeout((()=>{n=null,t(...i);}),e);}},eh=(t,e,n)=>Math.max(e,Math.min(n,t)),nh=(()=>{const t=(()=>{const t=null!=document.head?Array.from(document.head.querySelectorAll("meta")):[];for(const e of t)if("viewport"===e.name)return !0;return !1})();return t||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>t?window.devicePixelRatio:1})(),ih=(()=>{const t=new RegExp("[?&]model-viewer-debug-mode(&|$)");return ()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),rh=Math.PI/24,sh=new E,oh=(t,e,n)=>{let i=e>0?n>0?0:-Math.PI/2:n>0?Math.PI/2:Math.PI;for(let r=0;r<=12;++r)t.push(e+.17*Math.cos(i),n+.17*Math.sin(i),0,e+.2*Math.cos(i),n+.2*Math.sin(i),0),i+=rh;};class ah extends Xe{constructor(t){const e=new Re,n=[],i=[],{size:r,boundingBox:s}=t,o=r.x/2,a=r.z/2;oh(i,o,a),oh(i,-o,a),oh(i,-o,-a),oh(i,o,-a);const l=i.length/3;for(let t=0;t<l-2;t+=2)n.push(t,t+1,t+3,t,t+3,t+2);const c=l-2;n.push(c,c+1,1,c,1,0),e.setAttribute("position",new ye(i,3)),e.setIndex(n),super(e);const h=this.material;h.side=2,h.transparent=!0,h.opacity=0,this.goalOpacity=0,this.opacityDamper=new cc,this.hitPlane=new Xe(new pn(r.x+.4,r.z+.4)),this.hitPlane.visible=!1,this.add(this.hitPlane),this.rotateX(-Math.PI/2),s.getCenter(this.position),this.shadowHeight=s.min.y,this.position.y=this.shadowHeight,t.add(this);}getHit(t,e,n){sh.set(e,-n),this.hitPlane.visible=!0;const i=t.positionAndNormalFromPoint(sh,this.hitPlane);return this.hitPlane.visible=!1,null==i?null:i.position}set offsetHeight(t){this.position.y=this.shadowHeight+t;}get offsetHeight(){return this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?.75:0;}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0;}dispose(){const{geometry:t,material:e}=this.hitPlane;t.dispose(),e.dispose(),this.geometry.dispose(),this.material.dispose();}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lh,ch,hh,uh,dh,ph,mh,fh,gh,vh,yh,xh,bh,wh,_h,Mh,Sh,Th,Eh,Ah,Lh,Rh,Ch,Ph,Oh,Ih,Dh,Nh,Fh,Uh,zh,kh,Bh,Hh,Gh,Vh,jh;const Wh="not-presenting",qh="session-started",Xh="object-placed",Yh="failed",Jh=Symbol("presentedScene"),Zh=Symbol("placementBox"),Kh=Symbol("lastTick"),Qh=Symbol("turntableRotation"),$h=Symbol("oldShadowIntensity"),tu=Symbol("oldBackground"),eu=Symbol("rafId"),nu=Symbol("currentSession"),iu=Symbol("tick"),ru=Symbol("refSpace"),su=Symbol("viewerRefSpace"),ou=Symbol("frame"),au=Symbol("initialized"),lu=Symbol("initialModelToWorld"),cu=Symbol("placementComplete"),hu=Symbol("hitTestSource"),uu=Symbol("transiertHitTestSource"),du=Symbol("inputSource"),pu=Symbol("isTranslating"),mu=Symbol("isRotating"),fu=Symbol("isScaling"),gu=Symbol("lastDragPosition"),vu=Symbol("lastScalar"),yu=Symbol("goalPosition"),xu=Symbol("goalYaw"),bu=Symbol("goalScale"),wu=Symbol("xDamper"),_u=Symbol("yDamper"),Mu=Symbol("zDamper"),Su=Symbol("yawDamper"),Tu=Symbol("scaleDamper"),Eu=Symbol("damperRate"),Au=Symbol("resolveCleanup"),Lu=Symbol("exitWebXRButtonContainer"),Ru=Symbol("onWebXRFrame"),Cu=Symbol("postSessionCleanup"),Pu=Symbol("updateCamera"),Ou=Symbol("placeInitially"),Iu=Symbol("getHitPoint"),Du=Symbol("onSelectStart"),Nu=Symbol("onSelect"),Fu=Symbol("onUpdateScene"),Uu=Symbol("fingerSeparation"),zu=Symbol("processInput"),ku=Symbol("moveScene"),Bu=Symbol("onExitWebXRButtonContainerClick"),Hu=new F,Gu=new ht,Vu=new F;class ju extends _{constructor(t){super(),this.renderer=t,this.camera=new nn,this[lh]=null,this[ch]=null,this[hh]=null,this[uh]=null,this[dh]=null,this[ph]=null,this[mh]=null,this[fh]=null,this[gh]=null,this[vh]=null,this[yh]=null,this[xh]=null,this[bh]=null,this[wh]=null,this[_h]=null,this[Mh]=null,this[Sh]=!1,this[Th]=new ht,this[Eh]=!1,this[Ah]=!1,this[Lh]=!1,this[Rh]=!1,this[Ch]=new F,this[Ph]=0,this[Oh]=new F,this[Ih]=0,this[Dh]=1,this[Nh]=new cc,this[Fh]=new cc,this[Uh]=new cc,this[zh]=new cc,this[kh]=new cc,this[Bh]=1,this[Hh]=()=>this.stopPresenting(),this[Gh]=()=>{null!=this[Zh]&&this.isPresenting&&(this[Zh].dispose(),this[Zh]=new ah(this[Jh].model));},this[Vh]=t=>{const e=this[uu];if(null==e)return;const n=this[ou].getHitTestResultsForTransientInput(e),i=this[Jh],r=this[Zh];if(1===n.length){this[du]=t.inputSource;const{axes:e}=this[du].gamepad,n=r.getHit(this[Jh],e[0],e[1]);r.show=!0,null!=n?(this[pu]=!0,this[gu].copy(n)):(this[mu]=!0,this[vu]=e[0]);}else 2===n.length&&i.canScale&&(r.show=!0,this[fu]=!0,this[vu]=this[Uu](n)/i.scale.x);},this[jh]=()=>{this[pu]=!1,this[mu]=!1,this[fu]=!1,this[du]=null,this[yu].y+=this[Zh].offsetHeight*this[Jh].scale.x,this[Zh].show=!1;},this.threeRenderer=t.threeRenderer,this.camera.matrixAutoUpdate=!1;}async resolveARSession(t){Qc();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:t.element.shadowRoot.querySelector("div.default")}}),n=this.threeRenderer.context;await n.makeXRCompatible(),e.updateRenderState({baseLayer:new XRWebGLLayer(e,n,{alpha:!0})});let i=new Promise(((t,n)=>{e.requestAnimationFrame((()=>t()));}));await i,t.element[Sp](window.screen);const{framebuffer:r,framebufferWidth:s,framebufferHeight:o}=e.renderState.baseLayer;this.threeRenderer.setFramebuffer(r),this.threeRenderer.setPixelRatio(1),this.threeRenderer.setSize(s,o,!1);const a=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");return a.classList.add("enabled"),a.addEventListener("click",this[Bu]),this[Lu]=a,e}get presentedScene(){return this[Jh]}async supportsPresentation(){try{return Qc(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return !1}}async present(t){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let e=new Promise(((t,e)=>{requestAnimationFrame((()=>t()));}));t.model.setHotspotsVisibility(!1),t.isDirty=!0,await e,this[Jh]=t;const n=await this.resolveARSession(t);n.addEventListener("end",(()=>{this[Cu]();}),{once:!0}),this[ru]=await n.requestReferenceSpace("local"),this[su]=await n.requestReferenceSpace("viewer"),t.setCamera(this.camera),this[au]=!1,this[Eu]=.4,this[Qh]=t.yaw,t.yaw=0,this[xu]=0,this[bu]=1,this[tu]=t.background,t.background=null,this[$h]=t.shadowIntensity,t.setShadowIntensity(0),t.addEventListener("model-load",this[Fu]);const i=20*Math.PI/180,r=new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(i),z:-Math.cos(i)});n.requestHitTestSource({space:this[su],offsetRay:r}).then((t=>{this[hu]=t;})),this[nu]=n,this[Zh]=new ah(t.model),this[cu]=!1,this[Kh]=performance.now(),this[iu]();}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise((t=>{this[Au]=t;}));try{await this[nu].end(),await t;}catch(t){console.warn("Error while trying to end AR session"),console.warn(t),this[Cu]();}}[(lh=Zh,ch=Kh,hh=Qh,uh=$h,dh=tu,ph=eu,mh=nu,fh=ru,gh=su,vh=ou,yh=hu,xh=uu,bh=du,wh=Jh,_h=Au,Mh=Lu,Sh=au,Th=lu,Eh=cu,Ah=pu,Lh=mu,Rh=fu,Ch=gu,Ph=vu,Oh=yu,Ih=xu,Dh=bu,Nh=wu,Fh=_u,Uh=Mu,zh=Su,kh=Tu,Bh=Eu,Hh=Bu,Cu)](){this.threeRenderer.setFramebuffer(null);const t=this[nu];null!=t&&(t.removeEventListener("selectstart",this[Du]),t.removeEventListener("selectend",this[Nu]),t.cancelAnimationFrame(this[eu]),this[nu]=null);const e=this[Jh];if(null!=e){const{model:t,element:n}=e;e.setCamera(e.camera),t.remove(this[Zh]),e.position.set(0,0,0),e.scale.set(1,1,1),t.setShadowScaleAndOffset(1,0);const i=this[Qh];null!=i&&(e.yaw=i);const r=this[$h];null!=r&&e.setShadowIntensity(r);const s=this[tu];null!=s&&(e.background=s),e.removeEventListener("model-load",this[Fu]),t.orientHotspots(0),n.requestUpdate("cameraTarget"),n[Sp](n.getBoundingClientRect());}this.renderer.height=0;const n=this[Lu];null!=n&&(n.classList.remove("enabled"),n.removeEventListener("click",this[Bu]),this[Lu]=null);const i=this[uu];null!=i&&(i.cancel(),this[uu]=null);const r=this[hu];null!=r&&(r.cancel(),this[hu]=null),null!=this[Zh]&&(this[Zh].dispose(),this[Zh]=null),this[Kh]=null,this[Qh]=null,this[$h]=null,this[tu]=null,this[eu]=null,this[ru]=null,this[Jh]=null,this[su]=null,this[ou]=null,this[du]=null,null!=this[Au]&&this[Au](),this.dispatchEvent({type:"status",status:Wh});}get isPresenting(){return null!=this[Jh]}updateTarget(){const t=this[Jh];if(null!=t){const e=t.getTarget();t.setTarget(e.x,t.model.boundingBox.min.y,e.z);}}[(Gh=Fu,Pu)](t){const{camera:e}=this,{matrix:n}=e;if(n.fromArray(t.transform.matrix),e.updateMatrixWorld(!0),e.position.setFromMatrixPosition(n),null!=this[hu]){const{position:t,model:n}=this[Jh],i=n.idealCameraDistance;e.getWorldDirection(t),t.multiplyScalar(i),t.add(e.position);}if(!this[au]){e.projectionMatrix.fromArray(t.projectionMatrix),e.projectionMatrixInverse.getInverse(e.projectionMatrix);const{x:n,z:i}=e.position,r=this[Jh];r.pointTowards(n,i),r.model.updateMatrixWorld(!0),this[xu]=r.yaw,this[lu].copy(r.model.matrixWorld),r.model.setHotspotsVisibility(!0),this[au]=!0,this.dispatchEvent({type:"status",status:qh});}if(t.requestViewportScale&&t.recommendedViewportScale){const e=t.recommendedViewportScale;t.requestViewportScale(Math.max(e,.25));}const i=this[nu].renderState.baseLayer.getViewport(t);this.threeRenderer.setViewport(i.x,i.y,i.width,i.height),this[Jh].model.orientHotspots(Math.atan2(n.elements[1],n.elements[5]));}[Ou](t){const e=this[hu];if(null==e)return;const n=t.getHitTestResults(e);if(0==n.length)return;const i=n[0],r=this[Iu](i);if(null==r)return;this.placeModel(r),e.cancel(),this[hu]=null;const{session:s}=t;s.addEventListener("selectstart",this[Du]),s.addEventListener("selectend",this[Nu]),s.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then((t=>{this[uu]=t;}));}[Iu](t){const e=t.getPose(this[ru]);if(null==e)return null;const n=Gu.fromArray(e.transform.matrix);return n.elements[5]>.75?Vu.setFromMatrixPosition(n):null}placeModel(t){const e=this[Jh],{model:n}=e,{min:i,max:r}=n.boundingBox;this[Zh].show=!0;const s=this[yu];s.copy(t);const o=t.y,a=this.camera.position.clone(),l=t.clone().sub(a).normalize();a.sub(l.multiplyScalar(n.idealCameraDistance));const c=new ct(a,l.normalize()),h=this[lu],u=(new F).setFromMatrixPosition(h).add(t);h.setPosition(u);const d=(new ht).getInverse(h);c.applyMatrix4(d),r.y+=10,c.intersectBox(n.boundingBox,u),r.y-=10,null!=u&&(u.applyMatrix4(h),s.add(t).sub(u));const p=e.getTarget();e.setTarget(p.x,i.y,p.z),s.y=o,this.dispatchEvent({type:"status",status:Xh});}[(Vh=Du,jh=Nu,Uu)](t){const e=t[0].inputSource.gamepad.axes,n=t[1].inputSource.gamepad.axes,i=n[0]-e[0],r=n[1]-e[1];return Math.sqrt(i*i+r*r)}[zu](t){const e=this[uu];if(null==e)return;if(!this[pu]&&!this[fu]&&!this[mu])return;const n=t.getHitTestResultsForTransientInput(e),i=this[Jh],r=i.scale.x;if(this[fu])if(n.length<2)this[fu]=!1;else {const t=this[Uu](n)/this[vu];this[bu]=t<1.2&&t>.8333333333333334?1:t;}else {if(2===n.length&&i.canScale)return this[pu]=!1,this[mu]=!1,this[fu]=!0,void(this[vu]=this[Uu](n)/r);if(this[mu]){const t=this[du].gamepad.axes[0];this[xu]+=1.5*(t-this[vu]),this[vu]=t;}else this[pu]&&n.forEach((t=>{if(t.inputSource!==this[du]||t.results.length<1)return;const e=this[Iu](t.results[0]);if(null==e)return;this[yu].sub(this[gu]);const n=e.y-this[gu].y;if(n<0){this[Zh].offsetHeight=n/r,this[Jh].model.setShadowScaleAndOffset(r,n);const t=Hu.copy(this.camera.position),i=-n/(t.y-e.y);t.multiplyScalar(i),e.multiplyScalar(1-i).add(t);}this[yu].add(e),this[gu].copy(e);}));}}[ku](t){const e=this[Jh],{model:n,position:i,yaw:r}=e,s=n.idealCameraDistance,o=this[yu],a=e.scale.x,l=this[Zh];if(null==this[hu]&&(!o.equals(i)||this[bu]!==a)){let{x:r,y:c,z:h}=i;t*=this[Eu],r=this[wu].update(r,o.x,t,s),c=this[_u].update(c,o.y,t,s),h=this[Mu].update(h,o.z,t,s),i.set(r,c,h);const u=this[Tu].update(a,this[bu],t,1);if(e.scale.set(u,u,u),!this[pu]){const t=o.y-c;this[cu]?(l.offsetHeight=t/u,n.setShadowScaleAndOffset(u,t)):0===t&&(this[cu]=!0,l.show=!1,e.setShadowIntensity(.3),this[Eu]=1);}}l.updateOpacity(t),e.updateTarget(t),e.updateMatrixWorld(!0),e.yaw=this[Su].update(r,this[xu],t,Math.PI);}[iu](){this[eu]=this[nu].requestAnimationFrame(((t,e)=>this[Ru](t,e)));}[Ru](t,e){this[ou]=e;const n=e.getViewerPose(this[ru]);this[iu]();const i=this[Jh];if(null==n||null==i)return;let r=!0;for(const s of n.views){if(this[Pu](s),r){this[Ou](e),this[zu](e);const n=t-this[Kh];this[ku](n),this.renderer.preRender(i,t,n),this[Kh]=t;}this.threeRenderer.render(i,this.camera),r=!1;}}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){t.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then((()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:t,THREE:{ShaderMaterial:tn,Texture:P,Mesh:Xe,Scene:xr,PlaneBufferGeometry:pn,OrthographicCamera:ba,WebGLRenderTarget:I}}}));}));}addScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:t}}));}removeScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:t}}));}}const qu=Symbol("threeGLTF"),Xu=Symbol("gltf"),Yu=Symbol("gltfElementMap"),Ju=Symbol("threeObjectMap"),Zu=Symbol("parallelTraverseThreeScene"),Ku=Symbol("correlateOriginalThreeGLTF"),Qu=Symbol("correlateCloneThreeGLTF");class $u{constructor(t,e,n,i){this[qu]=t,this[Xu]=e,this[Yu]=i,this[Ju]=n;}static from(t,e){return null!=e?this[Qu](t,e):this[Ku](t)}static[Ku](t){const e=t.parser.json,{associations:n}=t.parser,i=new Map;return n.forEach(((t,n)=>{if(null==t)return;const{type:r,index:s}=t,o=(e[r]||[])[s];if(null==o)return;let a=i.get(o);null==a&&(a=new Set,i.set(o,a)),a.add(n);})),new $u(t,e,n,i)}static[Qu](t,e){const n=e.threeGLTF,i=e.gltf,r=JSON.parse(JSON.stringify(i)),s=new Map,o=new Map;for(let i=0;i<n.scenes.length;i++)this[Zu](n.scenes[i],t.scenes[i],((t,n)=>{const i=e.threeObjectMap.get(t);if(null!=i){const{type:t,index:e}=i,a=r[t][e];s.set(n,{type:t,index:e});const l=o.get(a)||new Set;l.add(n),o.set(a,l);}}));return new $u(t,r,s,o)}static[Zu](t,e,n){const i=(t,e)=>{if(n(t,e),t.isObject3D){if(t.isMesh)if(Array.isArray(t.material))for(let n=0;n<t.material.length;++n)i(t.material[n],e.material[n]);else i(t.material,e.material);for(let n=0;n<t.children.length;++n)i(t.children[n],e.children[n]);}};i(t,e);}get threeGLTF(){return this[qu]}get gltf(){return this[Xu]}get gltfElementMap(){return this[Yu]}get threeObjectMap(){return this[Ju]}}od=new F,ad=new N,ld=new F,cd=new ht,hd=new ht,ud=new ht,td=new F,ed=new F,nd=new F,id=new F,rd=new E,sd=new E;var td,ed,nd,id,rd,sd,od,ad,ld,cd,hd,ud,dd=function(t){var e=new Map,n=new Map,i=t.clone();return pd(t,i,(function(t,i){e.set(i,t),n.set(t,i);})),i.traverse((function(t){if(t.isSkinnedMesh){var i=t,r=e.get(t),s=r.skeleton.bones;i.skeleton=r.skeleton.clone(),i.bindMatrix.copy(r.bindMatrix),i.skeleton.bones=s.map((function(t){return n.get(t)})),i.bind(i.skeleton,i.bindMatrix);}})),i};function pd(t,e,n){n(t,e);for(var i=0;i<t.children.length;i++)pd(t.children[i],e.children[i],n);}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=Symbol("prepared"),fd=Symbol("prepare"),gd=Symbol("preparedGLTF"),vd=Symbol("clone");class yd{constructor(t){this[gd]=t;}static prepare(t){if(null==t.scene)throw new Error("Model does not have a scene");if(t[md])return t;const e=this[fd](t);return e[md]=!0,e}static[fd](t){const{scene:e}=t,n=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:n})}get parser(){return this[gd].parser}get animations(){return this[gd].animations}get scene(){return this[gd].scene}get scenes(){return this[gd].scenes}get cameras(){return this[gd].cameras}get asset(){return this[gd].asset}get userData(){return this[gd].userData}clone(){return new(this.constructor)(this[vd]())}dispose(){this.scenes.forEach((t=>{t.traverse((t=>{if(!t.isMesh)return;const e=t;(Array.isArray(e.material)?e.material:[e.material]).forEach((t=>{t.dispose();})),e.geometry.dispose();}));}));}[vd](){const t=this[gd],e=dd(this.scene),n=[e],i=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:n,userData:i})}}
/**
 * @license MIT
 * @see https://github.com/mrdoob/three.js/blob/dev/LICENSE
 */const xd="\n#ifdef ALPHATEST\n\n    if ( diffuseColor.a < ALPHATEST ) discard;\n    diffuseColor.a = 1.0;\n\n#endif\n",bd=Symbol("cloneAndPatchMaterial"),wd=Symbol("correlatedSceneGraph");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends yd{static[fd](t){const e=super[fd](t);null==e[wd]&&(e[wd]=$u.from(e));const{scene:n}=e,i=[];n.traverse((t=>{if(t.renderOrder=1e3,t.frustumCulled=!1,t.name||(t.name=t.uuid),!t.isMesh)return;t.castShadow=!0;const e=t;let n=!1;(Array.isArray(e.material)?e.material:[e.material]).forEach((t=>{t.isMeshStandardMaterial&&(t.transparent&&2===t.side&&(n=!0,t.side=0),Nd.singleton.roughnessMipmapper.generateMipmaps(t));})),n&&i.push(e);}));for(const t of i){const e=(Array.isArray(t.material)?t.material:[t.material]).map((t=>{const e=t.clone();return e.side=1,e})),n=Array.isArray(t.material)?e:e[0],i=new Xe(t.geometry,n);i.renderOrder=-1,t.add(i);}return e}get correlatedSceneGraph(){return this[gd][wd]}[vd](){const t=super[vd](),e=new Map;return t.scene.traverse((t=>{if(t.isMesh){const n=t;Array.isArray(n.material)?n.material=n.material.map((t=>this[bd](t,e))):null!=n.material&&(n.material=this[bd](n.material,e));}})),t[wd]=$u.from(t,this.correlatedSceneGraph),t}[bd](t,e){if(e.has(t.uuid))return e.get(t.uuid);const n=t.clone(),i=t.onBeforeCompile;return n.onBeforeCompile=t.isGLTFSpecularGlossinessMaterial?t=>{i(t,void 0),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_fragment>",xd);}:t=>{t.fragmentShader=t.fragmentShader.replace("#include <alphatest_fragment>",xd),i(t,void 0);},n.shadowSide=0,n.transparent&&(n.depthWrite=!1),n.alphaTest||n.transparent||(n.alphaTest=-.5),e.set(t.uuid,n),n}}var Md=function(t){Go.call(this,t),this.type=1009;};Md.prototype=Object.assign(Object.create(Go.prototype),{constructor:Md,parse:function(t){var e=function(t,e){switch(t){case 1:console.error("RGBELoader Read Error: "+(e||""));break;case 2:console.error("RGBELoader Write Error: "+(e||""));break;case 3:console.error("RGBELoader Bad File Format: "+(e||""));break;default:case 4:console.error("RGBELoader: Error: "+(e||""));}return -1},n=function(t,e,n){e=e||1024;for(var i=t.pos,r=-1,s=0,o="",a=String.fromCharCode.apply(null,new Uint16Array(t.subarray(i,i+128)));0>(r=a.indexOf("\n"))&&s<e&&i<t.byteLength;)o+=a,s+=a.length,i+=128,a+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(i,i+128)));return -1<r&&(!1!==n&&(t.pos+=s+r+1),o+a.slice(0,r))},i=function(t,e,n,i){var r=t[e+3],s=Math.pow(2,r-128)/255;n[i+0]=t[e+0]*s,n[i+1]=t[e+1]*s,n[i+2]=t[e+2]*s;},r=function(){var t=new Float32Array(1),e=new Int32Array(t.buffer);function n(n){t[0]=n;var i=e[0],r=i>>16&32768,s=i>>12&2047,o=i>>23&255;return o<103?r:o>142?(r|=31744,r|=(255==o?0:1)&&8388607&i):o<113?r|=((s|=2048)>>114-o)+(s>>113-o&1):(r|=o-112<<10|s>>1,r+=1&s)}return function(t,e,i,r){var s=t[e+3],o=Math.pow(2,s-128)/255;i[r+0]=n(t[e+0]*o),i[r+1]=n(t[e+1]*o),i[r+2]=n(t[e+2]*o);}}(),s=new Uint8Array(t);s.pos=0;var o=function(t){var i,r,s=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(t.pos>=t.byteLength||!(i=n(t)))return e(1,"no header found");if(!(r=i.match(/^#\?(\S+)$/)))return e(3,"bad initial token");for(c.valid|=1,c.programtype=r[1],c.string+=i+"\n";!1!==(i=n(t));)if(c.string+=i+"\n","#"!==i.charAt(0)){if((r=i.match(s))&&(c.gamma=parseFloat(r[1],10)),(r=i.match(o))&&(c.exposure=parseFloat(r[1],10)),(r=i.match(a))&&(c.valid|=2,c.format=r[1]),(r=i.match(l))&&(c.valid|=4,c.height=parseInt(r[1],10),c.width=parseInt(r[2],10)),2&c.valid&&4&c.valid)break}else c.comments+=i+"\n";return 2&c.valid?4&c.valid?c:e(3,"missing image size specifier"):e(3,"missing format specifier")}(s);if(-1!==o){var a=o.width,l=o.height,c=function(t,n,i){var r,s,o,a,l,c,h,u,d,p,m,f,g,v=n,y=i;if(v<8||v>32767||2!==t[0]||2!==t[1]||128&t[2])return new Uint8Array(t);if(v!==(t[2]<<8|t[3]))return e(3,"wrong scanline width");if(!(r=new Uint8Array(4*n*i)).length)return e(4,"unable to allocate buffer space");for(s=0,o=0,u=4*v,g=new Uint8Array(4),c=new Uint8Array(u);y>0&&o<t.byteLength;){if(o+4>t.byteLength)return e(1);if(g[0]=t[o++],g[1]=t[o++],g[2]=t[o++],g[3]=t[o++],2!=g[0]||2!=g[1]||(g[2]<<8|g[3])!=v)return e(3,"bad rgbe scanline format");for(h=0;h<u&&o<t.byteLength;){if((f=(a=t[o++])>128)&&(a-=128),0===a||h+a>u)return e(3,"bad scanline data");if(f)for(l=t[o++],d=0;d<a;d++)c[h++]=l;else c.set(t.subarray(o,o+a),h),h+=a,o+=a;}for(p=v,d=0;d<p;d++)m=0,r[s]=c[d+m],m+=v,r[s+1]=c[d+m],m+=v,r[s+2]=c[d+m],m+=v,r[s+3]=c[d+m],s+=4;y--;}return r}(s.subarray(s.pos),a,l);if(-1!==c){switch(this.type){case 1009:var h=c,u=1023,d=1009;break;case 1015:for(var p=c.length/4*3,m=new Float32Array(p),f=0;f<p;f++)i(c,4*f,m,3*f);h=m,u=1022,d=1015;break;case 1016:p=c.length/4*3;var g=new Uint16Array(p);for(f=0;f<p;f++)r(c,4*f,g,3*f);h=g,u=1022,d=1016;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);}return {width:a,height:l,data:h,header:o.string,gamma:o.gamma,exposure:o.exposure,format:u,type:d}}}return null},setDataType:function(t){return this.type=t,this},load:function(t,e,n,i){return Go.prototype.load.call(this,t,(function(t,n){switch(t.type){case 1009:t.encoding=3002,t.minFilter=1003,t.magFilter=1003,t.generateMipmaps=!1,t.flipY=!0;break;case 1015:case 1016:t.encoding=3e3,t.minFilter=1006,t.magFilter=1006,t.generateMipmaps=!1,t.flipY=!0;}e&&e(t,n);}),n,i)}});
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sd extends xr{constructor(){super(),this.position.y=-3.5;const t=new Ze;t.deleteAttribute("uv");const e=new lo({metalness:0,side:1}),n=new lo({metalness:0}),i=new xa(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Xe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const s=new Xe(t,n);s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);const o=new Xe(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const a=new Xe(t,n);a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),this.add(a);const l=new Xe(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const c=new Xe(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const h=new Xe(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new Xe(t,this.createAreaLightMaterial(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new Xe(t,this.createAreaLightMaterial(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Xe(t,this.createAreaLightMaterial(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const m=new Xe(t,this.createAreaLightMaterial(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const f=new Xe(t,this.createAreaLightMaterial(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const g=new Xe(t,this.createAreaLightMaterial(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g);}createAreaLightMaterial(t){const e=new ae;return e.color.setScalar(t),e}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Io.enabled=!0;const Td=/\.hdr(\.js)?$/,Ed=new Vo,Ad=new Md,Ld={url:null};class Rd extends _{constructor(t){super(),this.generatedEnvironmentMap=null,this.skyboxCache=new Map,this.environmentMapCache=new Map,this.PMREMGenerator=new Pl(t);}async load(t,e=(()=>{})){try{const n=Td.test(t),i=n?Ad:Ed,r=await new Promise(((n,r)=>i.load(t,n,(t=>{e(t.loaded/t.total*.9);}),r)));return e(1),this.addMetadata(r,t),r.mapping=303,n?(r.encoding=3002,r.minFilter=1003,r.magFilter=1003,r.flipY=!0):r.encoding=3007,r}finally{e&&e(1);}}async generateEnvironmentMapAndSkybox(t=null,e=null,n={}){const{progressTracker:i}=n,r=null!=i?i.beginActivity():()=>{};try{let n,s=Promise.resolve(null);t&&(s=this.loadSkyboxFromUrl(t,i)),n=e?this.loadEnvironmentMapFromUrl(e,i):t?this.loadEnvironmentMapFromUrl(t,i):this.loadGeneratedEnvironmentMap();let[o,a]=await Promise.all([n,s]);if(null==o)throw new Error("Failed to load environment map.");return {environmentMap:o,skybox:a}}finally{r(1);}}addMetadata(t,e){null!=t&&(t.userData=Object.assign(Object.assign({},Ld),{url:e}));}loadSkyboxFromUrl(t,e){if(!this.skyboxCache.has(t)){const n=e?e.beginActivity():()=>{},i=this.load(t,n);this.skyboxCache.set(t,i);}return this.skyboxCache.get(t)}loadEnvironmentMapFromUrl(t,e){if(!this.environmentMapCache.has(t)){const n=this.loadSkyboxFromUrl(t,e).then((e=>{const n=this.PMREMGenerator.fromEquirectangular(e);return this.addMetadata(n.texture,t),n}));this.PMREMGenerator.compileEquirectangularShader(),this.environmentMapCache.set(t,n);}return this.environmentMapCache.get(t)}loadGeneratedEnvironmentMap(){if(null==this.generatedEnvironmentMap){const t=new Sd;this.generatedEnvironmentMap=this.PMREMGenerator.fromScene(t,.04),this.addMetadata(this.generatedEnvironmentMap.texture,null);}return Promise.resolve(this.generatedEnvironmentMap)}async dispose(){const t=[];this.environmentMapCache.forEach((e=>{t.push(e);})),this.environmentMapCache.clear();for(const e of t)try{(await e).dispose();}catch(t){}null!=this.generatedEnvironmentMap&&(this.generatedEnvironmentMap.dispose(),this.generatedEnvironmentMap=null);}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cd,Pd;const Od=Symbol("onWebGLContextLost"),Id=Symbol("webGLContextLostHandler"),Dd=Symbol("singleton");class Nd extends _{constructor(t){super(),this.loader=new oc(_d),this.width=0,this.height=0,this.dpr=1,this.minScale=.5,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.scale=1,this.avgFrameDuration=22,this[Pd]=t=>this[Od](t),this.dpr=nh(),this.canvasElement=document.createElement("canvas"),this.canvasElement.id="webgl-canvas",this.canvas3D=this.canvasElement,this.canvas3D.addEventListener("webglcontextlost",this[Id]);try{this.threeRenderer=new yr({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=3007,this.threeRenderer.gammaFactor=2.2,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.shadowMap.enabled=!0,this.threeRenderer.shadowMap.type=2,this.threeRenderer.shadowMap.autoUpdate=!1,this.debugger=null!=t&&t.debug?new Wu(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=4;}catch(t){console.warn(t);}this.arRenderer=new ju(this),this.textureUtils=this.canRender?new Rd(this.threeRenderer):null,this.roughnessMipmapper=new Zc(this.threeRenderer),this.updateRendererSize(),this.lastTick=performance.now(),this.avgFrameDuration=0;}static get singleton(){return this[Dd]}static resetSingleton(){this[Dd].dispose(),this[Dd]=new Nd({debug:ih()});}get canRender(){return null!=this.threeRenderer}get scaleFactor(){return this.scale}updateRendererSize(){const t=nh();if(t!==this.dpr)for(const t of this.scenes){const{element:e}=t;e[hp](e.getBoundingClientRect());}let e=0,n=0;for(const t of this.scenes)e=Math.max(e,t.width),n=Math.max(n,t.height);if(e===this.width&&n===this.height&&t===this.dpr)return;this.width=e,this.height=n,this.dpr=t,this.canRender&&this.threeRenderer.setSize(e*t,n*t,!1);const i=e/this.scale,r=n/this.scale;this.canvasElement.style.width=i+"px",this.canvasElement.style.height=r+"px";for(const s of this.scenes){const{canvas:o}=s;o.width=Math.round(e*t),o.height=Math.round(n*t),o.style.width=i+"px",o.style.height=r+"px",s.isDirty=!0;}}updateRendererScale(){let{scale:t}=this;if(this.avgFrameDuration>26&&t>this.minScale?t*=.79:this.avgFrameDuration<18&&t<1&&(t/=.79,t=Math.min(t,1)),t=Math.max(t,this.minScale),t==this.scale)return;this.scale=t,this.avgFrameDuration=22;const e=this.width/t,n=this.height/t;this.canvasElement.style.width=e+"px",this.canvasElement.style.height=n+"px";for(const t of this.scenes){const{style:i}=t.canvas;i.width=e+"px",i.height=n+"px",t.isDirty=!0;}}registerScene(t){this.scenes.add(t);const{canvas:e}=t;e.width=Math.round(this.width*this.dpr),e.height=Math.round(this.height*this.dpr),e.style.width=this.width/this.scale+"px",e.style.height=this.height/this.scale+"px",this.multipleScenesVisible&&e.classList.add("show"),t.isDirty=!0,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((t=>this.render(t))),null!=this.debugger&&this.debugger.addScene(t);}unregisterScene(t){this.scenes.delete(t),this.canRender&&0===this.scenes.size&&this.threeRenderer.setAnimationLoop(null),null!=this.debugger&&this.debugger.removeScene(t);}displayCanvas(t){return this.multipleScenesVisible?t.element[xp]:this.canvasElement}selectCanvas(){let t=0,e=null;for(const n of this.scenes){const{element:i}=n;i.modelIsVisible&&(++t,e=i[yp]);}const n=t>1||false,{canvasElement:i}=this;if(n!==this.multipleScenesVisible||!n&&i.parentElement!==e){this.multipleScenesVisible=n,n&&i.classList.remove("show");for(const t of this.scenes){const r=t.element[yp],s=t.element[xp];n?(s.classList.add("show"),t.isDirty=!0):r===e&&(r.appendChild(i),i.classList.add("show"),s.classList.remove("show"),t.isDirty=!0);}}}orderedScenes(){const t=[];for(const e of [!1,!0])for(const n of this.scenes)n.element.modelIsVisible===e&&t.push(n);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,n){const{element:i,exposure:r,model:s}=t;i[_p](e,n);const o="number"==typeof r&&!self.isNaN(r);this.threeRenderer.toneMappingExposure=o?r:1,s.updateShadow()&&(this.threeRenderer.shadowMap.needsUpdate=!0);}render(t){const e=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.avgFrameDuration+=eh(.2*(e-this.avgFrameDuration),-2,2),this.selectCanvas(),this.updateRendererSize(),this.updateRendererScale();const{dpr:n,scale:i}=this;for(const r of this.orderedScenes()){if(!r.element[Cp]())continue;if(this.preRender(r,t,e),!r.isDirty)continue;if(r.isDirty=!1,!r.element.modelIsVisible&&!this.multipleScenesVisible)for(const t of this.scenes)t.element.modelIsVisible&&(t.isDirty=!0);const s=Math.min(Math.ceil(r.width*i*n),this.canvas3D.width),o=Math.min(Math.ceil(r.height*i*n),this.canvas3D.height);if(this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.floor(this.height*n)-o,s,o),this.threeRenderer.render(r,r.getCamera()),this.multipleScenesVisible){null==r.context&&r.createContext();{const t=r.context;t.clearRect(0,0,s,o),t.drawImage(this.canvas3D,0,0,s,o,0,0,s,o);}}}}dispose(){null!=this.textureUtils&&this.textureUtils.dispose(),null!=this.threeRenderer&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null,this.scenes.clear(),this.canvas3D.removeEventListener("webglcontextlost",this[Id]);}[(Cd=Dd,Pd=Id,Od)](t){this.dispatchEvent({type:"contextlost",sourceEvent:t});}}Nd[Cd]=new Nd({debug:ih()});
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fd,Ud;const zd=Symbol("ongoingActivities"),kd=Symbol("announceTotalProgress"),Bd=Symbol("eventDelegate");class Hd{constructor(){this[Fd]=document.createDocumentFragment(),this.addEventListener=(...t)=>this[Bd].addEventListener(...t),this.removeEventListener=(...t)=>this[Bd].removeEventListener(...t),this.dispatchEvent=(...t)=>this[Bd].dispatchEvent(...t),this[Ud]=new Set;}get ongoingActivityCount(){return this[zd].size}beginActivity(){const t={progress:0};return this[zd].add(t),1===this.ongoingActivityCount&&this[kd](),e=>{let n;return n=Math.max(eh(e,0,1),t.progress),n!==t.progress&&(t.progress=n,this[kd]()),t.progress}}[(Fd=Bd,Ud=zd,kd)](){let t=0,e=0,n=0;for(const i of this[zd]){const{progress:r}=i;t+=r*(.5/Math.pow(2,e++)),1===r&&n++;}n===this.ongoingActivityCount&&(t=1,this[zd].clear()),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:t}}));}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gd,Vd,jd,Wd,qd,Xd,Yd,Jd,Zd,Kd,Qd=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const $d=document.createElement("canvas");let tp=null;const ep=Symbol("template"),np=Symbol("fallbackResizeHandler"),ip=Symbol("defaultAriaLabel"),rp=Symbol("resizeObserver"),sp=Symbol("intersectionObserver"),op=Symbol("clearModelTimeout"),ap=Symbol("onContextLost"),lp=Symbol("contextLostHandler"),cp=Symbol("loaded"),hp=Symbol("updateSize"),up=Symbol("isElementInViewport"),dp=Symbol("announceModelVisibility"),pp=Symbol("ariaLabel"),mp=Symbol("loadedTime"),fp=Symbol("updateSource"),gp=Symbol("markLoaded"),vp=Symbol("container"),yp=Symbol("input"),xp=Symbol("canvas"),bp=Symbol("scene"),wp=Symbol("needsRender"),_p=Symbol("tick"),Mp=Symbol("onModelLoad"),Sp=Symbol("onResize"),Tp=Symbol("renderer"),Ep=Symbol("progressTracker"),Ap=Symbol("getLoaded"),Lp=Symbol("getModelIsVisible"),Rp=Symbol("shouldAttemptPreload"),Cp=Symbol("sceneIsReady"),Pp=Symbol("hasTransitioned"),Op=t=>({x:t.x,y:t.y,z:t.z,toString(){return `${this.x}m ${this.y}m ${this.z}m`}});class Ip extends r{constructor(){super(),this.alt=null,this.src=null,this[Gd]=!1,this[Vd]=!1,this[jd]=0,this[Wd]=null,this[qd]=th((()=>{const t=this.getBoundingClientRect();this[hp](t);}),50),this[Xd]=th((t=>{const e=this.modelIsVisible;e!==t&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:e}}));}),0),this[Yd]=null,this[Jd]=null,this[Zd]=new Hd,this[Kd]=t=>this[ap](t);const t=this.constructor.template;window.ShadyCSS&&window.ShadyCSS.styleElement(this,{}),this.attachShadow({mode:"open"});const e=this.shadowRoot;let n,i;if(e.appendChild(t.content.cloneNode(!0)),this[vp]=e.querySelector(".container"),this[yp]=e.querySelector(".userInput"),this[xp]=e.querySelector("canvas"),this[ip]=this[yp].getAttribute("aria-label"),this.isConnected){const t=this.getBoundingClientRect();n=t.width,i=t.height;}else n=300,i=150;this[bp]=new Vc({canvas:this[xp],element:this,width:n,height:i}),this[bp].addEventListener("model-load",(t=>{this[gp](),this[Mp](),this.dispatchEvent(new CustomEvent("load",{detail:{url:t.url}}));})),Promise.resolve().then((()=>{this[hp](this.getBoundingClientRect());})),c&&(this[rp]=new ResizeObserver((t=>{if(!this[Tp].isPresenting)for(let e of t)e.target===this&&this[hp](e.contentRect);}))),h?this[sp]=new IntersectionObserver((t=>{for(let e of t)if(e.target===this){const t=this.modelIsVisible;this[up]=e.isIntersecting,this[dp](t),this[up]&&!this[Cp]()&&this[fp]();}}),{root:null,rootMargin:"0px",threshold:0}):this[up]=!0;}static get is(){return "model-viewer"}static get template(){return this.hasOwnProperty(ep)||(this[ep]=(t=>{const e=document.createElement("template");return e.innerHTML=w.innerHTML,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,t),e})(this.is)),this[ep]}static set modelCacheSize(t){oc[rc].evictionThreshold=t;}static get modelCacheSize(){return oc[rc].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0. This could result in single-pixel renders on some devices; consider increasing."),Nd.singleton.minScale=Math.max(0,Math.min(1,t));}static get minimumRenderScale(){return Nd.singleton.minScale}get loaded(){return this[Ap]()}get[(Gd=up,Vd=cp,jd=mp,Wd=op,qd=np,Xd=dp,Yd=rp,Jd=sp,Zd=Ep,Kd=lp,Tp)](){return Nd.singleton}get modelIsVisible(){return this[Lp]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),c?this[rp].observe(this):self.addEventListener("resize",this[np]),h&&this[sp].observe(this);const t=this[Tp];t.addEventListener("contextlost",this[lp]),t.registerScene(this[bp]),null!=this[op]&&(self.clearTimeout(this[op]),this[op]=null,this.requestUpdate("src",null));}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),c?this[rp].unobserve(this):self.removeEventListener("resize",this[np]),h&&this[sp].unobserve(this);const t=this[Tp];t.removeEventListener("contextlost",this[lp]),t.unregisterScene(this[bp]),this[op]=self.setTimeout((()=>{this[bp].model.clear();}),1e3);}updated(t){if(super.updated(t),!t.has("src")||null!=this.src&&this.src===this[bp].model.url||(this[cp]=!1,this[mp]=0,this[fp]()),t.has("alt")){const t=null==this.alt?this[ip]:this.alt;this[yp].setAttribute("aria-label",t);}}toDataURL(t,e){return this[Tp].displayCanvas(this[bp]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,n=t?t.qualityArgument:void 0,i=t?t.idealAspect:void 0,{width:r,height:s,model:o,aspect:a}=this[bp],{dpr:l,scaleFactor:c}=this[Tp];let h=r*c*l,u=s*c*l,d=0,p=0;if(!0===i)if(o.fieldOfViewAspect>a){const t=u;u=Math.round(h/o.fieldOfViewAspect),p=(t-u)/2;}else {const t=h;h=Math.round(u*o.fieldOfViewAspect),d=(t-h)/2;}$d.width=h,$d.height=u;try{return new Promise((async(t,i)=>(null==tp&&(tp=$d.getContext("2d")),tp.drawImage(this[Tp].displayCanvas(this[bp]),d,p,h,u,0,0,h,u),!$d.msToBlob||e&&"image/png"!==e?$d.toBlob?void $d.toBlob((e=>{if(!e)return i(new Error("Unable to retrieve canvas blob"));t(e);}),e,n):t(await(async t=>new Promise(((e,n)=>{const i=t.match(/data:(.*);/);if(!i)return n(new Error(t+" is not a valid data Url"));const r=i[1],s=t.replace(/data:image\/\w+;base64,/,""),o=atob(s),a=[];for(let t=0;t<o.length;t+=512){const e=o.slice(t,t+512),n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const i=new Uint8Array(n);a.push(i);}e(new Blob(a,{type:r}));})))($d.toDataURL(e,n))):t($d.msToBlob()))))}finally{this[hp]({width:r,height:s});}}get[pp](){return null==this.alt||"null"===this.alt?this[ip]:this.alt}[Ap](){return this[cp]}[Lp](){return this.loaded&&this[up]}[Pp](){return this.modelIsVisible}[Rp](){return !!this.src&&this[up]}[Cp](){return this[cp]}[hp]({width:t,height:e}){this[vp].style.width=t+"px",this[vp].style.height=e+"px",this[Sp]({width:parseFloat(t),height:parseFloat(e)});}[_p](t,e){}[gp](){this[cp]||(this[cp]=!0,this[mp]=performance.now());}[wp](){this[bp].isDirty=!0;}[Mp](){}[Sp](t){this[bp].setSize(t.width,t.height);}[ap](t){this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:t.sourceEvent}}));}async[fp](){if(this.loaded||!this[Rp]())return;const t=this[Ep].beginActivity(),e=this.src;try{await this[bp].setModelSource(e,(e=>t(.8*e)));const n={url:e};this.dispatchEvent(new CustomEvent("preload",{detail:n}));}catch(t){this.dispatchEvent(new CustomEvent("error",{detail:t}));}finally{t(.9),requestAnimationFrame((()=>{requestAnimationFrame((()=>{t(1);}));}));}}}Qd([o({type:String})],Ip.prototype,"alt",void 0),Qd([o({type:String})],Ip.prototype,"src",void 0);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dp=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const Np=Symbol("changeAnimation"),Fp=Symbol("paused"),Up=Symbol("annotationRenderer"),zp=Symbol("hotspotMap"),kp=Symbol("mutationCallback"),Bp=Symbol("observer"),Hp=Symbol("addHotspot"),Gp=Symbol("removeHotspot"),Vp=new E,jp=new ht,Wp=new A,qp=t=>e=>{try{const n=pc(e),i=(n.length?n[0].terms:[]).filter((t=>t&&"ident"===t.type)).map((t=>t.value)).filter((e=>t.indexOf(e)>-1)),r=new Set;for(const t of i)r.add(t);return r}catch(t){}return new Set}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var Xp=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};let Yp=!1,Jp=!1;const Zp=qp(["safari","chrome"]),Kp=qp(["quick-look","scene-viewer","webxr","none"]),Qp="quick-look",$p="scene-viewer",tm="webxr",em="none",nm=Symbol("arButtonContainer"),im=Symbol("enterARWithWebXR"),rm=Symbol("openSceneViewer"),sm=Symbol("openIOSARQuickLook"),om=Symbol("canActivateAR"),am=Symbol("arMode"),lm=Symbol("arModes"),cm=Symbol("canLaunchQuickLook"),hm=Symbol("quickLookBrowsers"),um=Symbol("arAnchor"),dm=Symbol("preload"),pm=Symbol("onARButtonContainerClick"),mm=Symbol("onARStatus"),fm=Symbol("onARTap"),gm=Symbol("selectARMode");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vm,ym,xm;const bm=Symbol("evaluate"),wm=Symbol("lastValue");class _m{constructor(){this[vm]=null;}static evaluatableFor(t,e=wc){if(t instanceof _m)return t;if("number"===t.type)return "%"===t.unit?new Tm(t,e):t;switch(t.name.value){case"calc":return new Cm(t,e);case"env":return new Am(t)}return wc}static evaluate(t){return t instanceof _m?t.evaluate():t}static isConstant(t){return !(t instanceof _m)||t.isConstant}static applyIntrinsics(t,e){const{basis:n,keywords:i}=e,{auto:r}=i;return n.map(((e,n)=>{const s=null==r[n]?e:r[n];let o=t[n]?t[n]:s;if("ident"===o.type){const t=o.value;t in i&&(o=i[t][n]);}return null!=o&&"ident"!==o.type||(o=s),"%"===o.unit?dc(o.number/100*e.number,e.unit):(o=Sc(o,e),o.unit!==e.unit?e:o)}))}get isConstant(){return !1}evaluate(){return this.isConstant&&null!=this[wm]||(this[wm]=this[bm]()),this[wm]}}vm=wm;const Mm=Symbol("percentage"),Sm=Symbol("basis");class Tm extends _m{constructor(t,e){super(),this[Mm]=t,this[Sm]=e;}get isConstant(){return !0}[bm](){return dc(this[Mm].number/100*this[Sm].number,this[Sm].unit)}}const Em=Symbol("identNode");class Am extends _m{constructor(t){super(),this[ym]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;null!=e&&"ident"===e.type&&(this[Em]=e);}get isConstant(){return !1}[(ym=Em,bm)](){if(null!=this[Em])switch(this[Em].value){case"window-scroll-y":return {type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}}return wc}}const Lm=/[\*\/]/,Rm=Symbol("evalutor");class Cm extends _m{constructor(t,e=wc){if(super(),this[xm]=null,1!==t.arguments.length)return;const n=t.arguments[0].terms.slice(),i=[];for(;n.length;){const t=n.shift();if(i.length>0){const n=i[i.length-1];if("operator"===n.type&&Lm.test(n.value)){const n=i.pop(),r=i.pop();if(null==r)return;i.push(new Dm(n,_m.evaluatableFor(r,e),_m.evaluatableFor(t,e)));continue}}i.push("operator"===t.type?t:_m.evaluatableFor(t,e));}for(;i.length>2;){const[t,n,r]=i.splice(0,3);if("operator"!==n.type)return;i.unshift(new Dm(n,_m.evaluatableFor(t,e),_m.evaluatableFor(r,e)));}1===i.length&&(this[Rm]=i[0]);}get isConstant(){return null==this[Rm]||_m.isConstant(this[Rm])}[(xm=Rm,bm)](){return null!=this[Rm]?_m.evaluate(this[Rm]):wc}}const Pm=Symbol("operator"),Om=Symbol("left"),Im=Symbol("right");class Dm extends _m{constructor(t,e,n){super(),this[Pm]=t,this[Om]=e,this[Im]=n;}get isConstant(){return _m.isConstant(this[Om])&&_m.isConstant(this[Im])}[bm](){const t=Sc(_m.evaluate(this[Om])),e=Sc(_m.evaluate(this[Im])),{number:n,unit:i}=t,{number:r,unit:s}=e;if(null!=s&&null!=i&&s!=i)return wc;const o=i||s;let a;switch(this[Pm].value){case"+":a=n+r;break;case"-":a=n-r;break;case"/":a=n/r;break;case"*":a=n*r;break;default:return wc}return {type:"number",number:a,unit:o}}}const Nm=Symbol("evaluatables"),Fm=Symbol("intrinsics");class Um extends _m{constructor(t,e){super(),this[Fm]=e;const n=t[0],i=null!=n?n.terms:[];this[Nm]=e.basis.map(((t,e)=>{const n=i[e];return null==n?{type:"ident",value:"auto"}:"ident"===n.type?n:_m.evaluatableFor(n,t)}));}get isConstant(){for(const t of this[Nm])if(!_m.isConstant(t))return !1;return !0}[bm](){const t=this[Nm].map((t=>_m.evaluate(t)));return _m.applyIntrinsics(t,this[Fm]).map((t=>t.number))}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zm,km,Bm,Hm;const Gm=Symbol("instances"),Vm=Symbol("activateListener"),jm=Symbol("deactivateListener"),Wm=Symbol("notifyInstances"),qm=Symbol("notify"),Xm=Symbol("callback");class Ym{constructor(t){this[Xm]=t;}static[Wm](){for(const t of Ym[Gm])t[qm]();}static[(zm=Gm,Vm)](){window.addEventListener("scroll",this[Wm],{passive:!0});}static[jm](){window.removeEventListener("scroll",this[Wm]);}observe(){0===Ym[Gm].size&&Ym[Vm](),Ym[Gm].add(this);}disconnect(){Ym[Gm].delete(this),0===Ym[Gm].size&&Ym[jm]();}[qm](){this[Xm]();}}Ym[zm]=new Set;const Jm=Symbol("computeStyleCallback"),Zm=Symbol("astWalker"),Km=Symbol("dependencies"),Qm=Symbol("scrollHandler"),$m=Symbol("onScroll");class tf{constructor(t){this[km]={},this[Bm]=new bc(["function"]),this[Hm]=()=>this[$m](),this[Jm]=t;}observeEffectsFor(t){const e={},n=this[Km];this[Zm].walk(t,(t=>{const{name:i}=t,r=t.arguments[0].terms[0];if("env"===i.value&&null!=r&&"ident"===r.type)switch(r.value){case"window-scroll-y":if(null==e["window-scroll"]){const t="window-scroll"in n?n["window-scroll"]:new Ym(this[Qm]);t.observe(),delete n["window-scroll"],e["window-scroll"]=t;}}}));for(const t in n){n[t].disconnect();}this[Km]=e;}dispose(){for(const t in this[Km]){this[Km][t].disconnect();}}[(km=Km,Bm=Zm,Hm=Qm,$m)](){this[Jm]({relatedState:"window-scroll"});}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=t=>{const e=t.observeEffects||!1,n=t.intrinsics instanceof Function?t.intrinsics:()=>t.intrinsics;return (i,r)=>{const s=i.updated,o=i.connectedCallback,a=i.disconnectedCallback,l=Symbol(r+"StyleEffector"),c=Symbol(r+"StyleEvaluator"),h=Symbol(r+"UpdateEvaluator"),u=Symbol(r+"EvaluateAndSync");Object.defineProperties(i,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const t=pc(this[r]);this[c]=new Um(t,n(this)),null==this[l]&&e&&(this[l]=new tf((()=>this[u]()))),null!=this[l]&&this[l].observeEffectsFor(t);}},[u]:{value:function(){if(null==this[c])return;const e=this[c].evaluate();this[t.updateHandler](e);}},updated:{value:function(t){t.has(r)&&(this[h](),this[u]()),s.call(this,t);}},connectedCallback:{value:function(){o.call(this),this.requestUpdate(r,this[r]);}},disconnectedCallback:{value:function(){a.call(this),null!=this[l]&&(this[l].dispose(),this[l]=null);}}});}},nf=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,interactionPolicy:"always-allow",touchAction:"pan-y"}),rf=/^touch(start|end|move)$/,sf=Math.PI/8,of=33,af=34,lf=37,cf=38,hf=39,uf=40,df="user-interaction",pf="none";
/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends _{constructor(t,e){super(),this.camera=t,this.element=e,this.sensitivity=1,this._interactionEnabled=!1,this.isUserChange=!1,this.isUserPointing=!1,this.spherical=new ul,this.goalSpherical=new ul,this.thetaDamper=new cc,this.phiDamper=new cc,this.radiusDamper=new cc,this.logFov=Math.log(nf.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new cc,this.pointerIsDown=!1,this.lastPointerPosition={clientX:0,clientY:0},this.touchMode="rotate",this.touchDecided=!1,this.onPointerMove=t=>{if(this.pointerIsDown&&this.canInteract){if(rf.test(t.type)){const{touches:e}=t;switch(this.touchMode){case"zoom":if(this.lastTouches.length>1&&e.length>1){const t=.04*(this.twoTouchDistance(this.lastTouches[0],this.lastTouches[1])-this.twoTouchDistance(e[0],e[1]))/10;this.userAdjustOrbit(0,0,t);}break;case"rotate":const{touchAction:t}=this._options;if(!this.touchDecided&&"none"!==t){this.touchDecided=!0;const{clientX:n,clientY:i}=e[0],r=Math.abs(n-this.lastPointerPosition.clientX),s=Math.abs(i-this.lastPointerPosition.clientY);if("pan-y"===t&&s>r&&document.body.scrollHeight>window.innerHeight||"pan-x"===t&&r>s)return void(this.touchMode="scroll")}this.handleSinglePointerMove(e[0]);break;case"scroll":return}this.lastTouches=e;}else this.handleSinglePointerMove(t);t.cancelable&&t.preventDefault();}},this.onPointerDown=t=>{if(this.pointerIsDown=!0,this.isUserPointing=!1,rf.test(t.type)){const{touches:e}=t;switch(this.touchDecided=!1,e.length){default:case 1:this.touchMode="rotate",this.handleSinglePointerDown(e[0]);break;case 2:this.touchMode="zoom";}this.lastTouches=e;}else this.handleSinglePointerDown(t);},this.onPointerUp=t=>{this.element.style.cursor="grab",this.pointerIsDown=!1,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end",pointer:Object.assign({},this.lastPointerPosition)});},this.onWheel=t=>{if(!this.canInteract)return;const e=t.deltaY*(1==t.deltaMode?18:1)*.04/30;this.userAdjustOrbit(0,0,e),t.cancelable&&t.preventDefault();},this.onKeyDown=t=>{let e=!1;switch(t.keyCode){case of:e=!0,this.userAdjustOrbit(0,0,.04);break;case af:e=!0,this.userAdjustOrbit(0,0,-.04);break;case cf:e=!0,this.userAdjustOrbit(0,-sf,0);break;case uf:e=!0,this.userAdjustOrbit(0,sf,0);break;case lf:e=!0,this.userAdjustOrbit(-sf,0,0);break;case hf:e=!0,this.userAdjustOrbit(sf,0,0);}e&&t.cancelable&&t.preventDefault();},this._options=Object.assign({},nf),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal();}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(!1===this._interactionEnabled){const{element:t}=this;t.addEventListener("mousemove",this.onPointerMove),t.addEventListener("mousedown",this.onPointerDown),t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchstart",this.onPointerDown,{passive:!0}),t.addEventListener("touchmove",this.onPointerMove),self.addEventListener("mouseup",this.onPointerUp),self.addEventListener("touchend",this.onPointerUp),this.element.style.cursor="grab",this._interactionEnabled=!0;}}disableInteraction(){if(!0===this._interactionEnabled){const{element:t}=this;t.removeEventListener("mousemove",this.onPointerMove),t.removeEventListener("mousedown",this.onPointerDown),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("touchstart",this.onPointerDown),t.removeEventListener("touchmove",this.onPointerMove),self.removeEventListener("mouseup",this.onPointerUp),self.removeEventListener("touchend",this.onPointerUp),t.style.cursor="",this._interactionEnabled=!1;}}get options(){return this._options}getCameraSpherical(t=new ul){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov));}updateNearFar(t,e){this.camera.near=Math.max(t,e/1e3),this.camera.far=e,this.camera.updateProjectionMatrix();}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix();}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:r,minimumPolarAngle:s,maximumPolarAngle:o,minimumRadius:a,maximumRadius:l}=this._options,{theta:c,phi:h,radius:u}=this.goalSpherical,d=eh(t,i,r);isFinite(i)||isFinite(r)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-d)+d);const p=eh(e,s,o),m=eh(n,a,l);return (d!==c||p!==h||m!==u)&&(this.goalSpherical.theta=d,this.goalSpherical.phi=p,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),this.isUserChange=!1,!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit();}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:n}=this._options;t=eh(t,e,n),this.goalLogFov=Math.log(t);}adjustOrbit(t,e,n){const{theta:i,phi:r,radius:s}=this.goalSpherical,{minimumRadius:o,maximumRadius:a,minimumFieldOfView:l,maximumFieldOfView:c}=this._options,h=this.spherical.theta-i,u=Math.PI-.001,d=i-eh(t,-u-h,u-h),p=r-e,m=0===n?0:n>0?(a-s)/(Math.log(c)-this.goalLogFov):(s-o)/(this.goalLogFov-Math.log(l)),f=s+n*Math.min(isFinite(m)?m:1/0,a-o);if(this.setOrbit(d,p,f),0!==n){const t=this.goalLogFov+n;this.setFieldOfView(Math.exp(t));}}jumpToGoal(){this.update(0,1e4);}update(t,e){if(this.isStationary())return;const{maximumPolarAngle:n,maximumRadius:i}=this._options,r=this.spherical.theta-this.goalSpherical.theta;Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(r)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera();}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new yt(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix());const t=this.isUserChange?df:pf;this.dispatchEvent({type:"change",source:t});}get canInteract(){if("allow-when-focused"==this._options.interactionPolicy){return this.element.getRootNode().activeElement===this.element}return "always-allow"===this._options.interactionPolicy}userAdjustOrbit(t,e,n){this.adjustOrbit(t*this.sensitivity,e*this.sensitivity,n),this.isUserChange=!0,this.dispatchEvent({type:"change",source:df});}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return 2*(e-Math.floor(e))*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.element.clientHeight}twoTouchDistance(t,e){const{clientX:n,clientY:i}=t,{clientX:r,clientY:s}=e,o=r-n,a=s-i;return Math.sqrt(o*o+a*a)}handleSinglePointerMove(t){const{clientX:e,clientY:n}=t,i=this.pixelLengthToSphericalAngle(e-this.lastPointerPosition.clientX),r=this.pixelLengthToSphericalAngle(n-this.lastPointerPosition.clientY);this.lastPointerPosition.clientX=e,this.lastPointerPosition.clientY=n,!1===this.isUserPointing&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start",pointer:Object.assign({},t)})),this.userAdjustOrbit(i,r,0);}handleSinglePointerDown(t){this.lastPointerPosition.clientX=t.clientX,this.lastPointerPosition.clientY=t.clientY,this.element.style.cursor="grabbing";}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=t=>t<.5?2*t*t:(4-2*t)*t-1,gf=(t,e,n=ff)=>i=>t+(e-t)*n(i),vf=(t,e)=>{const n=[],i=[];let r=t;for(let t=0;t<e.length;++t){const s=e[t],{value:o,frames:a}=s,l=s.ease||ff,c=gf(r,o,l);n.push(c),i.push(a),r=o;}return ((t,e)=>{const n=e.reduce(((t,e)=>t+e),0),i=e.map((t=>t/n));return e=>{let n=0,r=1/0,s=()=>0;for(let o=0;o<i.length&&(r=i[o],s=t[o],!(e<=n+r));++o)n+=r;return s((e-n)/r)}})(n,i)};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yf=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const xf=vf(0,[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]),bf=vf(0,[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]),wf=1.1*Pc,_f=["front","right","back","left"],Mf=["upper-","","lower-"],Sf="auto",Tf="when-focused",Ef="wiggle",Af="always-allow",Lf="pan-y",Rf=t=>({basis:[dc(t[sg]*Math.PI/180,"rad")],keywords:{auto:[null]}}),Cf={basis:[_c(dc(25,"deg"))],keywords:{auto:[null]}},Pf=t=>{const e=t[bp];return {basis:[_c(dc(45,"deg"))],keywords:{auto:[dc(e.framedFieldOfView,"deg")]}}},Of=(()=>{const t=pc("0deg 75deg 105%")[0].terms,e=Sc(t[0]),n=Sc(t[1]);return t=>{const i=t[bp].model.idealCameraDistance;return {basis:[e,n,dc(i,"m")],keywords:{auto:[null,null,dc(105,"%")]}}}})(),If=t=>{const e=wf*t[bp].model.idealCameraDistance;return {basis:[dc(-1/0,"rad"),dc(Math.PI/8,"rad"),dc(e,"m")],keywords:{auto:[null,null,null]}}},Df=t=>{const e=Of(t),n=new Um([],e).evaluate()[2];return {basis:[dc(1/0,"rad"),dc(Math.PI-Math.PI/8,"rad"),dc(n,"m")],keywords:{auto:[null,null,null]}}},Nf=t=>{const e=t[bp].model.boundingBox.getCenter(new F);return {basis:[dc(e.x,"m"),dc(e.y,"m"),dc(e.z,"m")],keywords:{auto:[null,null,null]}}},Ff=Math.PI/2,Uf=Math.PI/3,zf=Ff/2,kf=2*Math.PI,Bf=Symbol("controls"),Hf=Symbol("promptElement"),Gf=Symbol("promptAnimatedContainer"),Vf=Symbol("deferInteractionPrompt"),jf=Symbol("updateAria"),Wf=Symbol("updateCameraForRadius"),qf=Symbol("blurHandler"),Xf=Symbol("focusHandler"),Yf=Symbol("changeHandler"),Jf=Symbol("pointerChangeHandler"),Zf=Symbol("onBlur"),Kf=Symbol("onFocus"),Qf=Symbol("onChange"),$f=Symbol("onPointerChange"),tg=Symbol("waitingToPromptUser"),eg=Symbol("userHasInteracted"),ng=Symbol("promptElementVisibleTime"),ig=Symbol("lastPromptOffset"),rg=Symbol("focusedTime"),sg=Symbol("zoomAdjustedFieldOfView"),og=Symbol("lastSpherical"),ag=Symbol("jumpCamera"),lg=Symbol("initialized"),cg=Symbol("maintainThetaPhi"),hg=Symbol("syncCameraOrbit"),ug=Symbol("syncFieldOfView"),dg=Symbol("syncCameraTarget"),pg=Symbol("syncMinCameraOrbit"),mg=Symbol("syncMaxCameraOrbit"),fg=Symbol("syncMinFieldOfView"),gg=Symbol("syncMaxFieldOfView");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vg=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const yg=Symbol("currentEnvironmentMap"),xg=Symbol("applyEnvironmentMap"),bg=Symbol("updateEnvironment"),wg=Symbol("cancelEnvironmentUpdate"),_g=Symbol("onPreload");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mg,Sg;const Tg=Symbol("modelViewerStatusInstance"),Eg=Symbol("updateStatus");Mg=Tg,Sg=Eg;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ag=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const Lg="auto",Rg="manual",Cg="auto",Pg="eager",Og="interaction",Ig=new class extends _{constructor(){super(),this[Mg]=null,this.registeredInstanceStatuses=new Map,this.loadingPromises=[],this.statusElement=document.createElement("p"),this.statusUpdateInProgress=!1,this[Sg]=th((()=>this.updateStatus()),100);const{statusElement:t}=this,{style:e}=t;t.setAttribute("role","status"),t.classList.add("screen-reader-only"),e.top=e.left="0",e.pointerEvents="none";}registerInstance(t){if(this.registeredInstanceStatuses.has(t))return;let e=()=>{};const n=!1===t.loaded&&!!t.src,i=new Promise((i=>{if(!n)return void i();const r=()=>{i(),t.removeEventListener("load",r),t.removeEventListener("error",r);};t.addEventListener("load",r),t.addEventListener("error",r),e=r;}));this.registeredInstanceStatuses.set(t,{onUnregistered:e}),this.loadingPromises.push(i),null==this.modelViewerStatusInstance&&(this.modelViewerStatusInstance=t);}unregisterInstance(t){if(!this.registeredInstanceStatuses.has(t))return;const e=this.registeredInstanceStatuses,n=e.get(t);e.delete(t),n.onUnregistered(),this.modelViewerStatusInstance===t&&(this.modelViewerStatusInstance=e.size>0?(t=>{if(null!=t.keys)return t.keys().next().value||null;let e=null;try{t.forEach(((t,n,i)=>{throw e=n,new Error}));}catch(t){}return e})(e):null);}get modelViewerStatusInstance(){return this[Tg]}set modelViewerStatusInstance(t){if(this[Tg]===t)return;const{statusElement:e}=this;null!=t&&null!=t.shadowRoot?t.shadowRoot.appendChild(e):null!=e.parentNode&&e.parentNode.removeChild(e),this[Tg]=t,this[Eg]();}async updateStatus(){if(!this.statusUpdateInProgress&&0!==this.loadingPromises.length){for(this.statusElement.textContent="This page includes one or more 3D models that are loading",this.statusUpdateInProgress=!0,this.dispatchEvent({type:"initial-status-announced"});this.loadingPromises.length;){const{loadingPromises:t}=this;this.loadingPromises=[],await Promise.all(t);}this.statusElement.textContent="All 3D models in the page have loaded",this.statusUpdateInProgress=!1,this.dispatchEvent({type:"finished-loading-announced"});}}},Dg=Symbol("defaultProgressBarElement"),Ng=Symbol("defaultProgressMaskElement"),Fg=Symbol("posterContainerElement"),Ug=Symbol("defaultPosterElement"),zg=Symbol("posterDismissalSource"),kg=Symbol("showPoster"),Bg=Symbol("hidePoster"),Hg=Symbol("modelIsRevealed"),Gg=Symbol("updateProgressBar"),Vg=Symbol("lastReportedProgress"),jg=Symbol("transitioned"),Wg=Symbol("ariaLabelCallToAction"),qg=Symbol("clickHandler"),Xg=Symbol("keydownHandler"),Yg=Symbol("processHandler"),Jg=Symbol("onClick"),Zg=Symbol("onKeydown"),Kg=Symbol("onProgress"),Qg=3,$g=4,tv=6,ev=Symbol("ownerModel");class nv{constructor(t){if(null==t)throw new Error("Illegal constructor");this[ev]=t.model;}get ownerModel(){return this[ev]}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=Symbol("kernel"),rv=Symbol("uri"),sv=Symbol("name");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ov,av,lv;const cv=Symbol("pbrMetallicRoughness"),hv=Symbol("normalTexture"),uv=Symbol("occlusionTexture"),dv=Symbol("emissiveTexture"),pv=Symbol("kernel"),mv=Symbol("name");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fv;ov=hv,av=uv,lv=dv;const gv=Symbol("material"),vv=Symbol("kernel");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yv,xv;fv=gv;const bv=Symbol("kernel"),wv=Symbol("baseColorFactor"),_v=Symbol("baseColorTexture"),Mv=Symbol("metallicRoughnessTexture"),Sv=Symbol("metallicFactor"),Tv=Symbol("roughnessFactor");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ev,Av;yv=_v,xv=Mv;const Lv=Symbol("kernel"),Rv=Symbol("minFilter"),Cv=Symbol("magFilter"),Pv=Symbol("wrapS"),Ov=Symbol("wrapT"),Iv=Symbol("name");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dv;Ev=Rv,Av=Cv;const Nv=Symbol("kernel"),Fv=Symbol("texture");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uv,zv;Dv=Fv;const kv=Symbol("kernel"),Bv=Symbol("source"),Hv=Symbol("sampler"),Gv=Symbol("name");
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vv,jv,Wv,qv,Xv,Yv;Uv=Bv,zv=Hv;const Jv={model:class extends nv{constructor(t,e){super(t),this[fv]=Object.freeze([]),this[vv]=t;for(const t of e.materials)this[vv].deserialize("material",t);}get materials(){return this[vv].getElementsByType("material")}get ownerModel(){return this}},material:class extends nv{constructor(t,e){super(t),this[ov]=null,this[av]=null,this[lv]=null,this[pv]=t,null!=e.name&&(this[mv]=e.name);const{pbrMetallicRoughness:n,normalTexture:i,occlusionTexture:r,emissiveTexture:s}=e;this[cv]=t.deserialize("pbr-metallic-roughness",n),null!=i&&(this[hv]=t.deserialize("texture-info",i)),null!=r&&(this[uv]=t.deserialize("texture-info",r)),null!=s&&(this[dv]=t.deserialize("texture-info",s));}get pbrMetallicRoughness(){return this[cv]}get normalTexture(){return this[hv]}get occlusionTexture(){return this[uv]}get emissiveTexture(){return this[dv]}get name(){return this[mv]}},"pbr-metallic-roughness":class extends nv{constructor(t,e){super(t),this[yv]=null,this[xv]=null,this[bv]=t,this[wv]=Object.freeze(e.baseColorFactor),this[Sv]=e.metallicFactor,this[Tv]=e.roughnessFactor;const{baseColorTexture:n,metallicRoughnessTexture:i}=e;null!=n&&(this[_v]=t.deserialize("texture-info",n)),null!=i&&(this[Mv]=t.deserialize("texture-info",i));}get baseColorFactor(){return this[wv]}get metallicFactor(){return this[Sv]}get roughnessFactor(){return this[Tv]}get baseColorTexture(){return this[_v]}get metallicRoughnessTexture(){return this[Mv]}async setBaseColorFactor(t){await this[bv].mutate(this,"baseColorFactor",t),this[wv]=Object.freeze(t);}async setMetallicFactor(t){await this[bv].mutate(this,"metallicFactor",t),this[Sv]=t;}async setRoughnessFactor(t){await this[bv].mutate(this,"roughnessFactor",t),this[Tv]=t;}},image:class extends nv{constructor(t,e){super(t),this[iv]=t,this[rv]=e.uri||null,null!=e.name&&(this[sv]=e.name);}get name(){return this[sv]}get type(){return null!=this.uri?"external":"embedded"}get uri(){return this[rv]}async setURI(t){await this[iv].mutate(this,"uri",t),this[rv]=t;}},sampler:class extends nv{constructor(t,e){super(t),this[Ev]=null,this[Av]=null,this[Lv]=t,null!=e.name&&(this[Iv]=e.name),this[Rv]=e.minFilter||null,this[Cv]=e.magFilter||null,this[Pv]=e.wrapS||10497,this[Ov]=e.wrapT||10497;}get name(){return this[Iv]}get minFilter(){return this[Rv]}get magFilter(){return this[Cv]}get wrapS(){return this[Pv]}get wrapT(){return this[Ov]}async setMinFilter(t){await this[Lv].mutate(this,"minFilter",t),this[Rv]=t;}async setMagFilter(t){await this[Lv].mutate(this,"magFilter",t),this[Cv]=t;}async setWrapS(t){await this[Lv].mutate(this,"wrapS",t),this[Pv]=t;}async setWrapT(t){await this[Lv].mutate(this,"wrapT",t),this[Ov]=t;}},texture:class extends nv{constructor(t,e){super(t),this[Uv]=null,this[zv]=null,this[kv]=t;const{sampler:n,source:i,name:r}=e;null!=r&&(this[Gv]=r),null!=n&&(this[Hv]=t.deserialize("sampler",n)),null!=i&&(this[Bv]=t.deserialize("image",i));}get name(){return this[Gv]}get sampler(){return this[Hv]}get source(){return this[Bv]}async setSampler(t){await this[kv].mutate(this,"sampler",t),this[Hv]=t;}async setSource(t){await this[kv].mutate(this,"source",t),this[Bv]=t;}},"texture-info":class extends nv{constructor(t,e){super(t),this[Dv]=null,this[Nv]=t;const{texture:n}=e;null!=n&&(this[Fv]=t.deserialize("texture",n));}get texture(){return this[Fv]}async setTexture(t){await this[Nv].mutate(this,"texture",t),this[Fv]=t;}}},Zv=Symbol("onMessageEvent"),Kv=Symbol("port"),Qv=Symbol("model"),$v=Symbol("elementsByLocalId"),ty=Symbol("localIdsByElement"),ey=Symbol("elementsByType"),ny=Symbol("pendingMutations"),iy=Symbol("nextMutationId");class ry{constructor(t,e){this[Vv]=new Map,this[jv]=new Map,this[Wv]=new Map,this[qv]=new Map,this[Xv]=0,this[Yv]=t=>{const{data:e}=t;switch(e&&e.type){case $g:{const t=e,{applied:n,mutationId:i}=t,r=this[ny].get(i);this[ny].delete(i),null!=r&&(n?r.resolve():r.reject());break}}};const n=new Array("model","material","pbr-metallic-roughness","sampler","image","texture","texture-info");for(const t of n)this[ey].set(t,new Set);this[Kv]=t,this[Kv].addEventListener("message",this[Zv]),this[Kv].start(),this[Qv]=this.deserialize("model",e);}get model(){return this[Qv]}async mutate(t,e,n){if(!this[ty].has(t))throw new Error("Cannot mutate unknown element");const i=this[ty].get(t);return n instanceof nv&&(n=this[ty].get(n)),new Promise(((t,r)=>{const s=this[iy]++;this[Kv].postMessage({type:tv,id:i,property:e,value:n,mutationId:s}),this[ny].set(s,{resolve:t,reject:r});}))}deserialize(t,e){const{id:n}=e;if(this[$v].has(n))return this[$v].get(n);const i=Jv[t];if(null==i)throw new Error("Cannot deserialize unknown type: "+t);const r=new i(this,e);return this[$v].set(n,r),this[ty].set(r,n),this[ey].get(t).add(r),r}getElementsByType(t){return this[ey].has(t)?Array.from(this[ey].get(t)):[]}deactivate(){this[Kv].close(),this[Kv].removeEventListener("message",this[Zv]);}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sy;Vv=$v,jv=ty,Wv=ey,qv=ny,Xv=iy,Yv=Zv;const oy=Symbol("modelGraft"),ay=Symbol("port"),ly=Symbol("onMessageEvent");class cy{constructor(t,e){this[sy]=async t=>{const{data:e}=t;if(e&&e.type&&e.type===tv){let t=!1;const{mutationId:n}=e;try{await this[oy].mutate(e.id,e.property,e.value),t=!0;}finally{this[ay].postMessage({type:$g,applied:t,mutationId:n});}}},this[oy]=t,this[ay]=e,this[ay].addEventListener("message",this[ly]),this[ay].start();}dispose(){this[ay].removeEventListener("message",this[ly]),this[ay].close();}}sy=ly;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hy=(()=>{let t=0;return ()=>t++})(),uy=Symbol("callbacks"),dy=Symbol("visitMesh"),py=Symbol("visitElement"),my=Symbol("visitNode"),fy=Symbol("visitScene"),gy=Symbol("visitMaterial");class vy{constructor(t){this[uy]=t;}visit(t,e={}){const n=!!e.allScenes,i=!!e.sparse,r=n?t.scenes||[]:t.scenes&&null!=t.scene?[t.scenes[t.scene]]:[],s={hierarchy:[],visited:new Set,sparse:i,gltf:t};for(const e of r)this[fy](t.scenes.indexOf(e),s);}[py](t,e,n,i,r){if(null==e)return;const s=e[t],{sparse:o,hierarchy:a,visited:l}=n;null!=s&&(o&&l.has(s)||(l.add(s),a.push(s),null!=i&&i(s,t,a),null!=r&&r(s),a.pop()));}[fy](t,e){const{gltf:n}=e,{scene:i}=this[uy];this[py](t,n.scenes,e,i,(t=>{if(null!=t.nodes)for(const n of t.nodes)this[my](n,e);}));}[my](t,e){const{gltf:n}=e,{node:i}=this[uy];this[py](t,n.nodes,e,i,(t=>{if(null!=t.mesh&&this[dy](t.mesh,e),null!=t.children)for(const n of t.children)this[my](n,e);}));}[dy](t,e){const{gltf:n}=e,{mesh:i}=this[uy];this[py](t,n.meshes,e,i,(t=>{for(const n of t.primitives)null!=n.material&&this[gy](n.material,e);}));}[gy](t,e){const{gltf:n}=e,{material:i}=this[uy];this[py](t,n.materials,e,i);}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yy;const xy=Symbol("correlatedObjects"),by=Symbol("sourceObject"),wy=Symbol("graft"),_y=Symbol("id");class My{constructor(t,e,n=null){this[yy]=hy(),this[wy]=t,this[by]=e,this[xy]=n,t.adopt(this);}get ownerModel(){return this[wy].model}get internalID(){return this[_y]}get name(){return this[by].name||null}get correlatedObjects(){return this[xy]}get sourceObject(){return this[by]}mutate(t,e){throw new Error("Mutation not implemented for this element")}toJSON(){const t={id:this[_y]},{name:e}=this;return null!=e&&(t.name=e),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sy;yy=_y;const Ty=new Bo,Ey=Symbol("threeTextures"),Ay=Symbol("bufferViewImages");class Ly extends My{constructor(t,e,n){if(super(t,e,n),this[Sy]=new WeakMap,null!=e.bufferView)for(const t of n)this[Ay].set(t,t.image);}get[Ey](){return this[xy]}async mutate(t,e){let n=null;if("uri"!==t)throw new Error(`Cannot configure property "${t}" on Image`);null!=e&&(n=await new Promise(((t,n)=>{Ty.load(e,t,void 0,n);})));for(const t of this[Ey])null==n&&null!=this.sourceObject.bufferView?t.image=this[Ay].get(t):t.image=n,t.needsUpdate=!0;}toJSON(){const t=super.toJSON(),{uri:e}=this.sourceObject;return null!=e&&(t.uri=e),t}}Sy=Ay;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ry=(()=>{const t=[9728,9729,9984,9985,9986,9987];return e=>t.indexOf(e)>-1})(),Cy=(()=>{const t=[9728,9729];return e=>t.indexOf(e)>-1})(),Py=(()=>{const t=[33071,33648,10497];return e=>t.indexOf(e)>-1})(),Oy={minFilter:9987,magFilter:9729,wrapS:10497,wrapT:10497},Iy=Symbol("threeTextures");class Dy extends My{get[Iy](){return this[xy]}constructor(t,e,n){super(t,e,n);}async mutate(t,e){const n=this.sourceObject;if(null!=e){if(((t,e)=>{switch(t){case"minFilter":return Ry(e);case"magFilter":return Cy(e);case"wrapS":case"wrapT":return Py(e);default:throw new Error(`Cannot configure property "${t}" on Sampler`)}})(t,e)){n[t]=e;for(const n of this[Iy])n[t]=e,n.needsUpdate=!0;}}else if(t in n){delete n[t];for(const e of this[Iy])e[t]=Oy[t],e.needsUpdate=!0;}}toJSON(){const t=super.toJSON(),{minFilter:e,magFilter:n,wrapS:i,wrapT:r}=this.sourceObject;return null!=e&&(t.minFilter=e),null!=n&&(t.magFilter=n),10497!==i&&(t.wrapS=i),10497!==r&&(t.wrapT=r),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ny,Fy;const Uy=Symbol("source"),zy=Symbol("sampler");class ky extends My{constructor(t,e,n){super(t,e,n),this[Ny]=null,this[Fy]=null;const i=t.correlatedSceneGraph.gltf,{sampler:r,source:s}=e;if(null!=r){const e=i.samplers&&i.samplers[r];null!=e&&(this[zy]=new Dy(t,e,n));}if(null!=s){const e=i.images&&i.images[s];null!=e&&(this[Uy]=new Ly(t,e,n));}}get sampler(){return this[zy]}get source(){return this[Uy]}toJSON(){const t=super.toJSON(),{sampler:e,source:n}=this;return null!=e&&(t.sampler=e.toJSON()),null!=n&&(t.source=n.toJSON()),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var By;Ny=Uy,Fy=zy;const Hy=Symbol("texture");class Gy extends My{constructor(t,e,n){super(t,e,n),this[By]=null;const i=t.correlatedSceneGraph.gltf,{index:r}=e,s=null!=r&&null!=i.textures?i.textures[r]:null;null!=s&&(this[Hy]=new ky(t,s,n));}get texture(){return this[Hy]}toJSON(){const t=super.toJSON(),{texture:e}=this;return null!=e&&(t.texture=e.toJSON()),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vy,jy;By=Hy;const Wy=Symbol("threeMaterials"),qy=Symbol("baseColorTexture"),Xy=Symbol("metallicRoughnessTexture");class Yy extends My{constructor(t,e,n){super(t,e,n),this[Vy]=null,this[jy]=null;const{baseColorTexture:i,metallicRoughnessTexture:r}=e,s=new Set,o=new Set;for(const t of n)null!=i&&null!=t.map&&s.add(t.map),null!=r&&null!=t.metalnessMap&&o.add(t.metalnessMap);s.size>0&&(this[qy]=new Gy(t,i,s)),o.size>0&&(this[Xy]=new Gy(t,r,o));}get[(Vy=qy,jy=Xy,Wy)](){return this[xy]}get baseColorFactor(){return this.sourceObject.baseColorFactor||[1,1,1,1]}get metallicFactor(){return this.sourceObject.metallicFactor||0}get roughnessFactor(){return this.sourceObject.roughnessFactor||0}get baseColorTexture(){return this[qy]}get metallicRoughnessTexture(){return this[Xy]}async mutate(t,e){if(!["baseColorFactor","metallicFactor","roughnessFactor"].includes(t))throw new Error(`Cannot mutate ${t} on PBRMetallicRoughness`);switch(t){case"baseColorFactor":for(const t of this[Wy]){t.color.fromArray(e),t.opacity=e[3];const n=this[by];1===e&&1===e&&1===e&&1===e?delete n.baseColorFactor:n.baseColorFactor=e;}break;case"metallicFactor":for(const t of this[Wy]){t.metalness=e;this[by].metallicFactor=e;}break;case"roughnessFactor":for(const t of this[Wy]){t.roughness=e;this[by].roughnessFactor=e;}}}toJSON(){const t=super.toJSON(),{baseColorTexture:e,metallicRoughnessTexture:n,baseColorFactor:i,roughnessFactor:r,metallicFactor:s}=this;return null!=e&&(t.baseColorTexture=e.toJSON()),null!=i&&(t.baseColorFactor=i),null!=s&&(t.metallicFactor=s),null!=r&&(t.roughnessFactor=r),null!=n&&(t.metallicRoughnessTexture=n.toJSON()),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jy,Zy,Ky,Qy;const $y=Symbol("pbrMetallicRoughness"),tx=Symbol("normalTexture"),ex=Symbol("occlusionTexture"),nx=Symbol("emissiveTexture");class ix extends My{constructor(t,e,n){super(t,e,n),this[Jy]=null,this[Zy]=null,this[Ky]=null,this[Qy]=null;const{pbrMetallicRoughness:i,normalTexture:r,occlusionTexture:s,emissiveTexture:o}=e;null!=i&&(this[$y]=new Yy(t,i,n));const a=new Set,l=new Set,c=new Set;for(const t of n){const{normalMap:e,aoMap:n,emissiveMap:i}=t;null!=r&&null!=e&&a.add(e),null!=s&&null!=n&&l.add(n),null!=o&&null!=i&&c.add(i);}a.size>0&&(this[tx]=new Gy(t,r,a)),l.size>0&&(this[ex]=new Gy(t,s,l)),c.size>0&&(this[nx]=new Gy(t,o,c));}get pbrMetallicRoughness(){return this[$y]}get normalTexture(){return this[tx]}get occlusionTexture(){return this[ex]}get emissiveTexture(){return this[nx]}toJSON(){const t=super.toJSON(),{pbrMetallicRoughness:e,normalTexture:n,occlusionTexture:i,emissiveTexture:r}=this;return null!=e&&(t.pbrMetallicRoughness=e.toJSON()),null!=n&&(t.normalTexture=n.toJSON()),null!=i&&(t.occlusionTexture=i.toJSON()),null!=r&&(t.emissiveTexture=r.toJSON()),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rx,sx;Jy=$y,Zy=tx,Ky=ex,Qy=nx;const ox=Symbol("modelUri"),ax=Symbol("materials");class lx extends My{constructor(t,e,n){super(t,n.gltf),this[rx]="",this[sx]=[],this[ox]=e;new vy({material:e=>{this[ax].push(new ix(t,e,n.gltfElementMap.get(e)));}}).visit(n.gltf,{sparse:!0});}get materials(){return this[ax]}toJSON(){const t=super.toJSON();return t.modelUri=this[ox],t.materials=this[ax].map((t=>t.toJSON())),t}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cx,hx;rx=ox,sx=ax;const ux=Symbol("model"),dx=Symbol("correlatedSceneGraph"),px=Symbol("elementsByInternalId"),mx=Symbol("eventDelegate");class fx{constructor(t,e){this[cx]=document.createDocumentFragment(),this.addEventListener=(...t)=>this[mx].addEventListener(...t),this.removeEventListener=(...t)=>this[mx].removeEventListener(...t),this.dispatchEvent=(...t)=>this[mx].dispatchEvent(...t),this[hx]=new Map,this[dx]=e,this[ux]=new lx(this,t,e);}get correlatedSceneGraph(){return this[dx]}get model(){return this[ux]}getElementByInternalId(t){const e=this[px].get(t);return null==e?null:e}adopt(t){this[px].set(t.internalID,t);}async mutate(t,e,n){const i=this.getElementByInternalId(t);await i.mutate(e,n),this.dispatchEvent(new CustomEvent("mutation",{detail:{element:i}}));}}cx=mx,hx=px;var gx=0,vx=1,yx=2,xx=3,bx=4,wx=5121,_x=5123,Mx=5126,Sx=5125,Tx=34962,Ex=34963,Ax=9728,Lx=9729,Rx=9984,Cx=9985,Px=9986,Ox=9987,Ix=33071,Dx=33648,Nx=10497,Fx={};Fx[1003]=Ax,Fx[1004]=Rx,Fx[1005]=Px,Fx[1006]=Lx,Fx[1007]=Cx,Fx[1008]=Ox,Fx[1001]=Ix,Fx[1e3]=Nx,Fx[1002]=Dx;var Ux={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},zx=function(){};zx.prototype={constructor:zx,parse:function(t,e,n){var i={binary:!1,trs:!1,onlyVisible:!0,truncateDrawRange:!0,embedImages:!0,maxTextureSize:1/0,animations:[],forcePowerOfTwoTextures:!1,includeCustomExtensions:!1};(n=Object.assign({},i,n)).animations.length>0&&(n.trs=!0);var r,s={asset:{version:"2.0",generator:"GLTFExporter"}},o=0,a=[],l=[],c=new Map,h=[],u={},d={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},p=new Map,m=0;function f(t){return p.has(t)||p.set(t,m++),p.get(t)}function g(t,e){return t.length===e.length&&t.every((function(t,n){return t===e[n]}))}function v(t){return 4*Math.ceil(t/4)}function y(t,e){e=e||0;var n=v(t.byteLength);if(n!==t.byteLength){var i=new Uint8Array(n);if(i.set(new Uint8Array(t)),0!==e)for(var r=t.byteLength;r<n;r++)i[r]=e;return i.buffer}return t}function x(t,e){if(0!==Object.keys(t.userData).length)try{var i=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&i.gltfExtensions){for(var r in void 0===e.extensions&&(e.extensions={}),i.gltfExtensions)e.extensions[r]=i.gltfExtensions[r],u[r]=!0;delete i.gltfExtensions;}Object.keys(i).length>0&&(e.extras=i);}catch(e){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+e.message);}}function b(t,e){var n=!1,i={};0===e.offset.x&&0===e.offset.y||(i.offset=e.offset.toArray(),n=!0),0!==e.rotation&&(i.rotation=e.rotation,n=!0),1===e.repeat.x&&1===e.repeat.y||(i.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=i,u.KHR_texture_transform=!0);}function w(t){return s.buffers||(s.buffers=[{byteLength:0}]),a.push(t),0}function _(t,e,i,r){var a;if(t.array.constructor===Float32Array)a=Mx;else if(t.array.constructor===Uint32Array)a=Sx;else if(t.array.constructor===Uint16Array)a=_x;else {if(t.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");a=wx;}if(void 0===i&&(i=0),void 0===r&&(r=t.count),n.truncateDrawRange&&void 0!==e&&null===e.index){var l=i+r,c=e.drawRange.count===1/0?t.count:e.drawRange.start+e.drawRange.count;i=Math.max(i,e.drawRange.start),(r=Math.min(l,c)-i)<0&&(r=0);}if(0===r)return null;var h,u=function(t,e,n){for(var i={min:new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY)},r=e;r<e+n;r++)for(var s=0;s<t.itemSize;s++){var o=t.array[r*t.itemSize+s];i.min[s]=Math.min(i.min[s],o),i.max[s]=Math.max(i.max[s],o);}return i}(t,i,r);void 0!==e&&(h=t===e.index?Ex:Tx);var d=function(t,e,n,i,r){var a;s.bufferViews||(s.bufferViews=[]),a=e===wx?1:e===_x?2:4;for(var l=v(i*t.itemSize*a),c=new DataView(new ArrayBuffer(l)),h=0,u=n;u<n+i;u++)for(var d=0;d<t.itemSize;d++){var p;t.itemSize>4?p=t.array[u*t.itemSize+d]:0===d?p=t.getX(u):1===d?p=t.getY(u):2===d?p=t.getZ(u):3===d&&(p=t.getW(u)),e===Mx?c.setFloat32(h,p,!0):e===Sx?c.setUint32(h,p,!0):e===_x?c.setUint16(h,p,!0):e===wx&&c.setUint8(h,p),h+=a;}var m={buffer:w(c.buffer),byteOffset:o,byteLength:l};return void 0!==r&&(m.target=r),r===Tx&&(m.byteStride=t.itemSize*a),o+=l,s.bufferViews.push(m),{id:s.bufferViews.length-1,byteLength:0}}(t,a,i,r,h),p={bufferView:d.id,byteOffset:d.byteOffset,componentType:a,count:r,max:u.max,min:u.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"}[t.itemSize]};return !0===t.normalized&&(p.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(p),s.accessors.length-1}function M(t,e,i){d.images.has(t)||d.images.set(t,{});var a=d.images.get(t),c=1023===e?"image/png":"image/jpeg",h=c+":flipY/"+i.toString();if(void 0!==a[h])return a[h];s.images||(s.images=[]);var u={mimeType:c};if(n.embedImages){var p=r=r||document.createElement("canvas");p.width=Math.min(t.width,n.maxTextureSize),p.height=Math.min(t.height,n.maxTextureSize),n.forcePowerOfTwoTextures&&!function(t){return T.isPowerOfTwo(t.width)&&T.isPowerOfTwo(t.height)}(p)&&(console.warn("GLTFExporter: Resized non-power-of-two image.",t),p.width=T.floorPowerOfTwo(p.width),p.height=T.floorPowerOfTwo(p.height));var m=p.getContext("2d");!0===i&&(m.translate(0,p.height),m.scale(1,-1)),m.drawImage(t,0,0,p.width,p.height),!0===n.binary?l.push(new Promise((function(t){p.toBlob((function(e){(function(t){return s.bufferViews||(s.bufferViews=[]),new Promise((function(e){var n=new window.FileReader;n.readAsArrayBuffer(t),n.onloadend=function(){var t=y(n.result),i={buffer:w(t),byteOffset:o,byteLength:t.byteLength};o+=t.byteLength,s.bufferViews.push(i),e(s.bufferViews.length-1);};}))})(e).then((function(e){u.bufferView=e,t();}));}),c);}))):u.uri=p.toDataURL(c);}else u.uri=t.src;s.images.push(u);var f=s.images.length-1;return a[h]=f,f}function S(t){s.samplers||(s.samplers=[]);var e={magFilter:Fx[t.magFilter],minFilter:Fx[t.minFilter],wrapS:Fx[t.wrapS],wrapT:Fx[t.wrapT]};return s.samplers.push(e),s.samplers.length-1}function E(t){if(d.textures.has(t))return d.textures.get(t);s.textures||(s.textures=[]);var e={sampler:S(t),source:M(t.image,t.format,t.flipY)};t.name&&(e.name=t.name),s.textures.push(e);var n=s.textures.length-1;return d.textures.set(t,n),n}function A(t){if(d.materials.has(t))return d.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);var e={pbrMetallicRoughness:{}};t.isMeshBasicMaterial?(e.extensions={KHR_materials_unlit:{}},u.KHR_materials_unlit=!0):t.isGLTFSpecularGlossinessMaterial?(e.extensions={KHR_materials_pbrSpecularGlossiness:{}},u.KHR_materials_pbrSpecularGlossiness=!0):t.isMeshStandardMaterial||console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");var n=t.color.toArray().concat([t.opacity]);if(g(n,[1,1,1,1])||(e.pbrMetallicRoughness.baseColorFactor=n),t.isMeshStandardMaterial?(e.pbrMetallicRoughness.metallicFactor=t.metalness,e.pbrMetallicRoughness.roughnessFactor=t.roughness):t.isMeshBasicMaterial?(e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9):(e.pbrMetallicRoughness.metallicFactor=.5,e.pbrMetallicRoughness.roughnessFactor=.5),t.isGLTFSpecularGlossinessMaterial){e.pbrMetallicRoughness.baseColorFactor&&(e.extensions.KHR_materials_pbrSpecularGlossiness.diffuseFactor=e.pbrMetallicRoughness.baseColorFactor);var i=[1,1,1];t.specular.toArray(i,0),e.extensions.KHR_materials_pbrSpecularGlossiness.specularFactor=i,e.extensions.KHR_materials_pbrSpecularGlossiness.glossinessFactor=t.glossiness;}if(t.metalnessMap||t.roughnessMap)if(t.metalnessMap===t.roughnessMap){var r={index:E(t.metalnessMap)};b(r,t.metalnessMap),e.pbrMetallicRoughness.metallicRoughnessTexture=r;}else console.warn("THREE.GLTFExporter: Ignoring metalnessMap and roughnessMap because they are not the same Texture.");if(t.map){var o={index:E(t.map)};b(o,t.map),t.isGLTFSpecularGlossinessMaterial&&(e.extensions.KHR_materials_pbrSpecularGlossiness.diffuseTexture=o),e.pbrMetallicRoughness.baseColorTexture=o;}if(t.isGLTFSpecularGlossinessMaterial&&t.specularMap){var a={index:E(t.specularMap)};b(a,t.specularMap),e.extensions.KHR_materials_pbrSpecularGlossiness.specularGlossinessTexture=a;}if(t.emissive){var l=t.emissive.clone().multiplyScalar(t.emissiveIntensity).toArray();if(g(l,[0,0,0])||(e.emissiveFactor=l),t.emissiveMap){var c={index:E(t.emissiveMap)};b(c,t.emissiveMap),e.emissiveTexture=c;}}if(t.normalMap){var h={index:E(t.normalMap)};t.normalScale&&-1!==t.normalScale.x&&(t.normalScale.x!==t.normalScale.y&&console.warn("THREE.GLTFExporter: Normal scale components are different, ignoring Y and exporting X."),h.scale=t.normalScale.x),b(h,t.normalMap),e.normalTexture=h;}if(t.aoMap){var p={index:E(t.aoMap),texCoord:1};1!==t.aoMapIntensity&&(p.strength=t.aoMapIntensity),b(p,t.aoMap),e.occlusionTexture=p;}t.transparent?e.alphaMode="BLEND":t.alphaTest>0&&(e.alphaMode="MASK",e.alphaCutoff=t.alphaTest),2===t.side&&(e.doubleSided=!0),""!==t.name&&(e.name=t.name),x(t,e),s.materials.push(e);var m=s.materials.length-1;return d.materials.set(t,m),m}function L(t){var e=[t.geometry.uuid];if(Array.isArray(t.material))for(var n=0,i=t.material.length;n<i;n++)e.push(t.material[n].uuid);else e.push(t.material.uuid);var r=e.join(":");if(d.meshes.has(r))return d.meshes.get(r);var o,a=t.geometry;o=t.isLineSegments?vx:t.isLineLoop?yx:t.isLine?xx:t.isPoints?gx:t.material.wireframe?vx:bx,a.isBufferGeometry||(console.warn("GLTFExporter: Exporting THREE.Geometry will increase file size. Use BufferGeometry instead."),a=(new Re).setFromObject(t));var l={},c={},h=[],u=[],p={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},m=a.getAttribute("normal");void 0===m||function(t){if(d.attributesNormalized.has(t))return !1;for(var e=new F,n=0,i=t.count;n<i;n++)if(Math.abs(e.fromArray(t.array,3*n).length()-1)>5e-4)return !1;return !0}(m)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",function(t){if(d.attributesNormalized.has(t))return d.attributesNormalized.get(t);for(var e=t.clone(),n=new F,i=0,r=e.count;i<r;i++)n.fromArray(e.array,3*i),0===n.x&&0===n.y&&0===n.z?n.setX(1):n.normalize(),n.toArray(e.array,3*i);return d.attributesNormalized.set(t,e),e}(m)));var g=null;for(var v in a.attributes)if("morph"!==v.substr(0,5)){var y=a.attributes[v];v=p[v]||v.toUpperCase();if(/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),d.attributes.has(f(y)))c[v]=d.attributes.get(f(y));else {g=null;var b=y.array;"JOINTS_0"!==v||b instanceof Uint16Array||b instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new he(new Uint16Array(b),y.itemSize,y.normalized));var w=_(g||y,a);null!==w&&(c[v]=w,d.attributes.set(f(y),w));}}if(void 0!==m&&a.setAttribute("normal",m),0===Object.keys(c).length)return null;if(void 0!==t.morphTargetInfluences&&t.morphTargetInfluences.length>0){var M=[],S=[],T={};if(void 0!==t.morphTargetDictionary)for(var E in t.morphTargetDictionary)T[t.morphTargetDictionary[E]]=E;for(n=0;n<t.morphTargetInfluences.length;++n){var L={},R=!1;for(var v in a.morphAttributes)if("position"===v||"normal"===v){y=a.morphAttributes[v][n];var C=v.toUpperCase(),P=a.attributes[v];if(d.attributes.has(f(y)))L[C]=d.attributes.get(f(y));else {var O=y.clone();if(!a.morphTargetsRelative)for(var I=0,D=y.count;I<D;I++)O.setXYZ(I,y.getX(I)-P.getX(I),y.getY(I)-P.getY(I),y.getZ(I)-P.getZ(I));L[C]=_(O,a),d.attributes.set(f(P),L[C]);}}else R||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),R=!0);u.push(L),M.push(t.morphTargetInfluences[n]),void 0!==t.morphTargetDictionary&&S.push(T[n]);}l.weights=M,S.length>0&&(l.extras={},l.extras.targetNames=S);}var N=Array.isArray(t.material);if(N&&0===a.groups.length)return null;for(var U=N?t.material:[t.material],z=N?a.groups:[{materialIndex:0,start:void 0,count:void 0}],k=(n=0,z.length);n<k;n++){var B={mode:o,attributes:c};if(x(a,B),u.length>0&&(B.targets=u),null!==a.index){var H=f(a.index);void 0===z[n].start&&void 0===z[n].count||(H+=":"+z[n].start+":"+z[n].count),d.attributes.has(H)?B.indices=d.attributes.get(H):(B.indices=_(a.index,a,z[n].start,z[n].count),d.attributes.set(H,B.indices)),null===B.indices&&delete B.indices;}var G=A(U[z[n].materialIndex]);null!==G&&(B.material=G),h.push(B);}l.primitives=h,s.meshes||(s.meshes=[]),s.meshes.push(l);var V=s.meshes.length-1;return d.meshes.set(r,V),V}function R(t,e){s.animations||(s.animations=[]);for(var n=(t=zx.Utils.mergeMorphTargetTracks(t.clone(),e)).tracks,i=[],r=[],o=0;o<n.length;++o){var a=n[o],l=nl.parseTrackName(a.name),h=nl.findNode(e,l.nodeName),u=Ux[l.propertyName];if("bones"===l.objectName&&(h=!0===h.isSkinnedMesh?h.skeleton.getBoneByName(l.objectIndex):void 0),!h||!u)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',a.name),null;var d,p=a.values.length/a.times.length;u===Ux.morphTargetInfluences&&(p/=h.morphTargetInfluences.length),!0===a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline?(d="CUBICSPLINE",p/=3):d=2300===a.getInterpolation()?"STEP":"LINEAR",r.push({input:_(new he(a.times,1)),output:_(new he(a.values,p)),interpolation:d}),i.push({sampler:r.length-1,target:{node:c.get(h),path:u}});}return s.animations.push({name:t.name||"clip_"+s.animations.length,samplers:r,channels:i}),s.animations.length-1}function C(t){var e=s.nodes[c.get(t)],n=t.skeleton;if(void 0===n)return null;var i=t.skeleton.bones[0];if(void 0===i)return null;for(var r=[],o=new Float32Array(16*n.bones.length),a=0;a<n.bones.length;++a)r.push(c.get(n.bones[a])),n.boneInverses[a].toArray(o,16*a);return void 0===s.skins&&(s.skins=[]),s.skins.push({inverseBindMatrices:_(new he(o,16)),joints:r,skeleton:c.get(i)}),e.skin=s.skins.length-1}function P(t){var e={};t.name&&(e.name=t.name),e.color=t.color.toArray(),e.intensity=t.intensity,t.isDirectionalLight?e.type="directional":t.isPointLight?(e.type="point",t.distance>0&&(e.range=t.distance)):t.isSpotLight&&(e.type="spot",t.distance>0&&(e.range=t.distance),e.spot={},e.spot.innerConeAngle=(t.penumbra-1)*t.angle*-1,e.spot.outerConeAngle=t.angle),void 0!==t.decay&&2!==t.decay&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!t.target||t.target.parent===t&&0===t.target.position.x&&0===t.target.position.y&&-1===t.target.position.z||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1.");var n=s.extensions.KHR_lights_punctual.lights;return n.push(e),n.length-1}function O(t){s.nodes||(s.nodes=[]);var e={};if(n.trs){var i=t.quaternion.toArray(),r=t.position.toArray(),o=t.scale.toArray();g(i,[0,0,0,1])||(e.rotation=i),g(r,[0,0,0])||(e.translation=r),g(o,[1,1,1])||(e.scale=o);}else t.matrixAutoUpdate&&t.updateMatrix(),g(t.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])||(e.matrix=t.matrix.elements);if(""!==t.name&&(e.name=String(t.name)),x(t,e),t.isMesh||t.isLine||t.isPoints){var a=L(t);null!==a&&(e.mesh=a);}else if(t.isCamera)e.camera=function(t){s.cameras||(s.cameras=[]);var e=t.isOrthographicCamera,n={type:e?"orthographic":"perspective"};return e?n.orthographic={xmag:2*t.right,ymag:2*t.top,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:n.perspective={aspectRatio:t.aspect,yfov:T.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},""!==t.name&&(n.name=t.type),s.cameras.push(n),s.cameras.length-1}(t);else if(t.isDirectionalLight||t.isPointLight||t.isSpotLight)u.KHR_lights_punctual||(s.extensions=s.extensions||{},s.extensions.KHR_lights_punctual={lights:[]},u.KHR_lights_punctual=!0),e.extensions=e.extensions||{},e.extensions.KHR_lights_punctual={light:P(t)};else if(t.isLight)return console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t),null;if(t.isSkinnedMesh&&h.push(t),t.children.length>0){for(var l=[],d=0,p=t.children.length;d<p;d++){var m=t.children[d];if(m.visible||!1===n.onlyVisible){var f=O(m);null!==f&&l.push(f);}}l.length>0&&(e.children=l);}s.nodes.push(e);var v=s.nodes.length-1;return c.set(t,v),v}function I(t){s.scenes||(s.scenes=[],s.scene=0);var e={};""!==t.name&&(e.name=t.name),s.scenes.push(e);for(var i=[],r=0,o=t.children.length;r<o;r++){var a=t.children[r];if(a.visible||!1===n.onlyVisible){var l=O(a);null!==l&&i.push(l);}}i.length>0&&(e.nodes=i),x(t,e);}!function(t){t=t instanceof Array?t:[t];for(var e=[],i=0;i<t.length;i++)t[i]instanceof xr?I(t[i]):e.push(t[i]);for(e.length>0&&function(t){var e=new xr;e.name="AuxScene";for(var n=0;n<t.length;n++)e.children.push(t[n]);I(e);}(e),i=0;i<h.length;++i)C(h[i]);for(i=0;i<n.animations.length;++i)R(n.animations[i],t[0]);}(t),Promise.all(l).then((function(){var t=new Blob(a,{type:"application/octet-stream"}),i=Object.keys(u);if(i.length>0&&(s.extensionsUsed=i),s.buffers&&s.buffers.length>0&&(s.buffers[0].byteLength=t.size),!0===n.binary){(r=new window.FileReader).readAsArrayBuffer(t),r.onloadend=function(){var t=y(r.result),n=new DataView(new ArrayBuffer(8));n.setUint32(0,t.byteLength,!0),n.setUint32(4,5130562,!0);var i=y(function(t){if(void 0!==window.TextEncoder)return (new TextEncoder).encode(t).buffer;for(var e=new Uint8Array(new ArrayBuffer(t.length)),n=0,i=t.length;n<i;n++){var r=t.charCodeAt(n);e[n]=r>255?32:r;}return e.buffer}(JSON.stringify(s)),32),o=new DataView(new ArrayBuffer(8));o.setUint32(0,i.byteLength,!0),o.setUint32(4,1313821514,!0);var a=new ArrayBuffer(12),l=new DataView(a);l.setUint32(0,1179937895,!0),l.setUint32(4,2,!0);var c=12+o.byteLength+i.byteLength+n.byteLength+t.byteLength;l.setUint32(8,c,!0);var h=new Blob([a,o,i,n,t],{type:"application/octet-stream"}),u=new window.FileReader;u.readAsArrayBuffer(h),u.onloadend=function(){e(u.result);};};}else {var r;if(s.buffers&&s.buffers.length>0)(r=new window.FileReader).readAsDataURL(t),r.onloadend=function(){var t=r.result;s.buffers[0].uri=t,e(s);};else e(s);}}));}},zx.Utils={insertKeyframe:function(t,e){var n,i=.001,r=t.getValueSize(),s=new t.TimeBufferType(t.times.length+1),o=new t.ValueBufferType(t.values.length+r),a=t.createInterpolant(new t.ValueBufferType(r));if(0===t.times.length){s[0]=e;for(var l=0;l<r;l++)o[l]=0;n=0;}else if(e<t.times[0]){if(Math.abs(t.times[0]-e)<i)return 0;s[0]=e,s.set(t.times,1),o.set(a.evaluate(e),0),o.set(t.values,r),n=0;}else if(e>t.times[t.times.length-1]){if(Math.abs(t.times[t.times.length-1]-e)<i)return t.times.length-1;s[s.length-1]=e,s.set(t.times,0),o.set(t.values,0),o.set(a.evaluate(e),t.values.length),n=s.length-1;}else for(l=0;l<t.times.length;l++){if(Math.abs(t.times[l]-e)<i)return l;if(t.times[l]<e&&t.times[l+1]>e){s.set(t.times.slice(0,l+1),0),s[l+1]=e,s.set(t.times.slice(l+1),l+2),o.set(t.values.slice(0,(l+1)*r),0),o.set(a.evaluate(e),(l+1)*r),o.set(t.values.slice((l+1)*r),(l+2)*r),n=l+1;break}}return t.times=s,t.values=o,n},mergeMorphTargetTracks:function(t,e){for(var n=[],i={},r=t.tracks,s=0;s<r.length;++s){var o=r[s],a=nl.parseTrackName(o.name),l=nl.findNode(e,a.nodeName);if("morphTargetInfluences"===a.propertyName&&void 0!==a.propertyIndex){if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),(o=o.clone()).setInterpolation(2301);}var c,h=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(void 0===u)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);if(void 0!==i[l.uuid]){var d=o.createInterpolant(new o.ValueBufferType(1));c=i[l.uuid];for(f=0;f<c.times.length;f++)c.values[f*h+u]=d.evaluate(c.times[f]);for(f=0;f<o.times.length;f++){var p=this.insertKeyframe(c,o.times[f]);c.values[p*h+u]=o.values[f];}}else {for(var m=new((c=o.clone()).ValueBufferType)(h*c.times.length),f=0;f<c.times.length;f++)m[f*h+u]=c.values[f];c.name=a.nodeName+".morphTargetInfluences",c.values=m,i[l.uuid]=c,n.push(c);}}else n.push(o);}return t.tracks=n,t}};const kx=Symbol("updateThreeSide"),Bx=Symbol("currentGLTF"),Hx=Symbol("modelGraft"),Gx=Symbol("mainPort"),Vx=Symbol("threePort"),jx=Symbol("manipulator"),Wx=Symbol("modelKernel"),qx=Symbol("onModelChange"),Xx=Symbol("onModelGraftMutation");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yx=function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};const Jx=Math.PI/32,Zx={basis:[_c(dc(Jx,"rad"))],keywords:{auto:[null]}},Kx=Symbol("autoRotateStartTime"),Qx=Symbol("radiansPerSecond"),$x=Symbol("syncRotationRate"),tb=Symbol("cameraChangeHandler"),eb=Symbol("onCameraChange"),nb=(t=>{var e,n,i,r;class s extends t{constructor(...t){super(...t),this[e]=new uc,this[n]=new Map,this[i]=t=>{t.forEach((t=>{t instanceof MutationRecord&&"childList"!==t.type||(t.addedNodes.forEach((t=>{this[Hp](t);})),t.removedNodes.forEach((t=>{this[Gp](t);})),this[wp]());}));},this[r]=new MutationObserver(this[kp]);const{domElement:s}=this[Up],{style:o}=s;o.display="none",o.pointerEvents="none",o.position="absolute",o.top="0",this.shadowRoot.querySelector(".default").appendChild(s);}connectedCallback(){super.connectedCallback();for(let t=0;t<this.children.length;++t)this[Hp](this.children[t]);const{ShadyDOM:t}=self;null==t?this[Bp].observe(this,{childList:!0}):this[Bp]=t.observeChildren(this,this[kp]);}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:t}=self;null==t?this[Bp].disconnect():t.unobserveChildren(this[Bp]);}updateHotspot(t){const e=this[zp].get(t.name);null!=e&&(e.updatePosition(t.position),e.updateNormal(t.normal));}positionAndNormalFromPoint(t,e){const n=this[bp],{width:i,height:r,model:s}=n;Vp.set(t/i,e/r).multiplyScalar(2).subScalar(1),Vp.y*=-1;const o=n.positionAndNormalFromPoint(Vp);if(null==o)return null;jp.getInverse(s.matrixWorld);const a=Op(o.position.applyMatrix4(jp));Wp.getNormalMatrix(jp);return {position:a,normal:Op(o.normal.applyNormalMatrix(Wp))}}[(e=Up,n=zp,i=kp,r=Bp,_p)](t,e){super[_p](t,e);const n=this[bp],i=n.getCamera();n.isDirty&&(n.model.updateHotspots(i.position),this[Up].domElement.style.display="",this[Up].render(n,i));}[Sp](t){super[Sp](t),this[Up].setSize(t.width,t.height);}[Hp](t){if(!(t instanceof HTMLElement&&0===t.slot.indexOf("hotspot")))return;let e=this[zp].get(t.slot);null!=e?e.increment():(e=new Tc({name:t.slot,position:t.dataset.position,normal:t.dataset.normal}),this[zp].set(t.slot,e),this[bp].model.addHotspot(e),this[Up].domElement.appendChild(e.element)),this[bp].isDirty=!0;}[Gp](t){if(!(t instanceof HTMLElement))return;const e=this[zp].get(t.slot);e&&(e.decrement()&&(this[bp].model.removeHotspot(e),this[zp].delete(t.slot)),this[bp].isDirty=!0);}}return s})((t=>{var e,n,i,r,s,a,l,c;class h extends t{constructor(){super(...arguments),this[c]=null,this[e]=null,this[n]=null,this[i]=null,this[r]=null,this[s]=null,this[a]=t=>{const{data:e}=t;if(e&&e.type===Qg){const t=e.model,n=this[Wx];if(null!=n)n.deactivate();else if(null==t)return;this[Wx]=null!=t?new ry(e.port,t):null,this.dispatchEvent(new CustomEvent("scene-graph-ready",{detail:{url:t?t.modelUri:null}}));}},this[l]=t=>{this[wp]();};}get model(){const t=this[Wx];return t?t.model:void 0}connectedCallback(){super.connectedCallback();const{port1:t,port2:e}=new MessageChannel;t.start(),e.start(),this[Gx]=t,this[Vx]=e,this[Gx].onmessage=this[qx];}disconnectedCallback(){super.disconnectedCallback(),this[Gx].close(),this[Vx].close(),this[Gx]=null,this[Vx]=null,null!=this[jx]&&this[jx].dispose(),null!=this[Wx]&&this[Wx].deactivate();}updated(t){if(super.updated(t),t.has(Hx)){const e=t.get(Hx);null!=e&&e.removeEventListener("mutation",this[Xx]);const n=this[Hx];null!=n&&n.addEventListener("mutation",this[Xx]);}}[(c=Hx,e=Bx,n=Gx,i=Vx,r=jx,s=Wx,Mp)](){super[Mp](),this[kx]();}[kx](){const t=this[bp],{model:e}=t,{currentGLTF:n}=e;let i=null,r=null;if(null!=n){const{correlatedSceneGraph:t}=n,s=this[Hx],o=this[jx];if(null!=t){if(null!=o&&o.dispose(),null!=s&&n===this[Bx])return;i=new fx(e.url||"",t);let a=null;null!=i&&null!=i.model?(a=new MessageChannel,r=new cy(i,a.port1),this[Vx].postMessage({type:Qg,model:i.model.toJSON(),port:a.port2},[a.port2])):this[Vx].postMessage({type:Qg,model:null,port:null});}}this[Hx]=i,this[jx]=r,this[Bx]=n;}async exportScene(t){const{model:e}=this[bp];return new Promise((async(n,i)=>{if(null==e)return i("Model missing or not yet loaded");const r={binary:!0,onlyVisible:!0,maxTextureSize:1/0,forcePowerOfTwoTextures:!1,includeCustomExtensions:!1,embedImages:!0};Object.assign(r,t),r.animations=e.animations,r.truncateDrawRange=!0;const s=e[Ic];let o=!1;null!=s&&(o=s.visible,s.visible=!1);(new zx).parse(e.modelContainer,(t=>n(new Blob([r.binary?t:JSON.stringify(t)],{type:r.binary?"application/octet-stream":"application/json"}))),r),null!=s&&(s.visible=o);}))}}return a=qx,l=Xx,function(t,e,n,i){for(var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);s>3&&o&&Object.defineProperty(e,n,o);}([o({type:Object})],h.prototype,c,void 0),h})((t=>{var e,n,i;class r extends t{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[e]=performance.now(),this[n]=0,this[i]=t=>this[eb](t);}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[tb]),this[Kx]=performance.now();}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[tb]),this[Kx]=performance.now();}updated(t){super.updated(t),t.has("autoRotate")&&(this[Kx]=performance.now());}[(e=Kx,n=Qx,i=tb,$x)](t){this[Qx]=t[0];}[_p](t,e){if(super[_p](t,e),!this.autoRotate||!this[Pp]()||this[Tp].isPresenting)return;const n=Math.min(e,t-this[Kx]-this.autoRotateDelay);n>0&&(this[bp].yaw=this.turntableRotation+this[Qx]*n*.001);}[eb](t){this.autoRotate&&"user-interaction"===t.detail.source&&(this[Kx]=performance.now());}get turntableRotation(){return this[bp].yaw}resetTurntableRotation(t=0){this[bp].yaw=t;}}return Yx([o({type:Boolean,attribute:"auto-rotate"})],r.prototype,"autoRotate",void 0),Yx([o({type:Number,attribute:"auto-rotate-delay"})],r.prototype,"autoRotateDelay",void 0),Yx([ef({intrinsics:Zx,updateHandler:$x}),o({type:String,attribute:"rotation-per-second"})],r.prototype,"rotationPerSecond",void 0),r})((t=>{var e,n,i;class r extends t{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this[e]=null,this[n]=null,this[i]=t=>{t.element===this&&this[bg]();};}connectedCallback(){super.connectedCallback(),this[Tp].loader.addEventListener("preload",this[_g]);}disconnectedCallback(){super.disconnectedCallback(),this[Tp].loader.removeEventListener("preload",this[_g]);}updated(t){super.updated(t),t.has("shadowIntensity")&&(this[bp].setShadowIntensity(.1*this.shadowIntensity),this[wp]()),t.has("shadowSoftness")&&(this[bp].setShadowSoftness(this.shadowSoftness),this[wp]()),t.has("exposure")&&(this[bp].exposure=this.exposure,this[wp]()),(t.has("environmentImage")||t.has("skyboxImage"))&&this[Rp]()&&this[bg]();}[(e=yg,n=wg,i=_g,Mp)](){super[Mp](),null!=this[yg]&&this[xg](this[yg]);}async[bg](){const{skyboxImage:t,environmentImage:e}=this;null!=this[wg]&&(this[wg](),this[wg]=null);const{textureUtils:n}=this[Tp];if(null!=n)try{const{environmentMap:i,skybox:r}=await new Promise((async(i,r)=>{const s=n.generateEnvironmentMapAndSkybox(Kc(t),Kc(e),{progressTracker:this[Ep]});this[wg]=()=>r(s),i(await s);})),s=i.texture;this[bp].background=null!=r?r.userData.url===s.userData.url?s:r:null,this[xg](i.texture),this[bp].model.dispatchEvent({type:"envmap-update"});}catch(t){if(t instanceof Error)throw this[xg](null),t}}[xg](t){this[yg]=t,this[bp].environment=this[yg],this.dispatchEvent(new CustomEvent("environment-change")),this[wp]();}}return vg([o({type:String,attribute:"environment-image"})],r.prototype,"environmentImage",void 0),vg([o({type:String,attribute:"skybox-image"})],r.prototype,"skyboxImage",void 0),vg([o({type:Number,attribute:"shadow-intensity"})],r.prototype,"shadowIntensity",void 0),vg([o({type:Number,attribute:"shadow-softness"})],r.prototype,"shadowSoftness",void 0),vg([o({type:Number})],r.prototype,"exposure",void 0),r})((t=>{var e,n,i,r,s,a,l,c,h,u,d,p,m,f,g,v,y;class x extends t{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit="0deg 75deg 105%",this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPromptStyle=Ef,this.interactionPrompt=Sf,this.interactionPolicy=Af,this.orbitSensitivity=1,this.touchAction=Lf,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[n]=this.shadowRoot.querySelector(".interaction-prompt > .animated-container"),this[i]=1/0,this[r]=0,this[s]=1/0,this[a]=!1,this[l]=!1,this[c]=new mf(this[bp].camera,this[yp]),this[h]=0,this[u]=new ul,this[d]=!1,this[p]=!1,this[m]=!1,this[f]=t=>this[Qf](t),this[g]=t=>this[$f](t),this[v]=()=>this[Kf](),this[y]=()=>this[Zf]();}getCameraOrbit(){const{theta:t,phi:e,radius:n}=this[og];return {theta:t,phi:e,radius:n}}getCameraTarget(){return Op(this[bp].getTarget())}getFieldOfView(){return this[Bf].getFieldOfView()}getMinimumFieldOfView(){return this[Bf].options.minimumFieldOfView}getMaximumFieldOfView(){return this[Bf].options.maximumFieldOfView}jumpCameraToGoal(){this[ag]=!0,this.requestUpdate(ag,!1);}resetInteractionPrompt(){this[ig]=0,this[ng]=1/0,this[eg]=!1,this[tg]=this.interactionPrompt===Sf&&this.cameraControls;}connectedCallback(){super.connectedCallback(),this[Bf].addEventListener("change",this[Yf]),this[Bf].addEventListener("pointer-change-start",this[Jf]),this[Bf].addEventListener("pointer-change-end",this[Jf]);}disconnectedCallback(){super.disconnectedCallback(),this[Bf].removeEventListener("change",this[Yf]),this[Bf].removeEventListener("pointer-change-start",this[Jf]),this[Bf].removeEventListener("pointer-change-end",this[Jf]);}updated(t){super.updated(t);const e=this[Bf],n=this[yp];if(t.has("cameraControls")&&(this.cameraControls?(e.enableInteraction(),this.interactionPrompt===Sf&&(this[tg]=!0),n.addEventListener("focus",this[Xf]),n.addEventListener("blur",this[qf])):(n.removeEventListener("focus",this[Xf]),n.removeEventListener("blur",this[qf]),e.disableInteraction(),this[Vf]())),(t.has("interactionPrompt")||t.has("cameraControls")||t.has("src"))&&(this.interactionPrompt===Sf&&this.cameraControls&&!this[eg]?this[tg]=!0:this[Vf]()),t.has("interactionPromptStyle")&&this[Hf].classList.toggle("wiggle",this.interactionPromptStyle===Ef),t.has("interactionPolicy")){const t=this.interactionPolicy;e.applyOptions({interactionPolicy:t});}if(t.has("touchAction")){const t=this.touchAction;e.applyOptions({touchAction:t});}t.has("orbitSensitivity")&&(this[Bf].sensitivity=this.orbitSensitivity),!0===this[ag]&&Promise.resolve().then((()=>{this[Bf].jumpToGoal(),this[bp].jumpToGoal(),this[ag]=!1;}));}[(e=Hf,n=Gf,i=rg,r=ig,s=ng,a=eg,l=tg,c=Bf,h=sg,u=og,d=ag,p=lg,m=cg,f=Yf,g=Jf,v=Xf,y=qf,ug)](t){this[Bf].setFieldOfView(180*t[0]/Math.PI);}[hg](t){if(this[cg]){const{theta:e,phi:n}=this.getCameraOrbit();t[0]=e,t[1]=n,this[cg]=!1;}this[Bf].setOrbit(t[0],t[1],t[2]);}[pg](t){this[Bf].applyOptions({minimumAzimuthalAngle:t[0],minimumPolarAngle:t[1],minimumRadius:t[2]}),this.jumpCameraToGoal();}[mg](t){this[Bf].applyOptions({maximumAzimuthalAngle:t[0],maximumPolarAngle:t[1],maximumRadius:t[2]}),this[Wf](t[2]),this.jumpCameraToGoal();}[fg](t){this[Bf].applyOptions({minimumFieldOfView:180*t[0]/Math.PI}),this.jumpCameraToGoal();}[gg](t){this[Bf].applyOptions({maximumFieldOfView:180*t[0]/Math.PI}),this.jumpCameraToGoal();}[dg](t){const[e,n,i]=t;this[bp].setTarget(e,n,i),this[Tp].arRenderer.updateTarget();}[_p](t,e){if(super[_p](t,e),this[Tp].isPresenting||!this[Pp]())return;const n=performance.now();if(this[tg]){const t=this.interactionPrompt===Sf?this[mp]:this[rg];this.loaded&&n>t+this.interactionPromptThreshold&&(this[yp].setAttribute("aria-label","Use mouse, touch or arrow keys to control the camera!"),this[tg]=!1,this[ng]=n,this[Hf].classList.add("visible"));}if(isFinite(this[ng])&&this.interactionPromptStyle===Ef){const t=this[bp],e=(n-this[ng])/5e3%1,i=xf(e),r=bf(e);if(this[Gf].style.opacity=""+r,i!==this[ig]){const e=i*t.width*.05,n=(i-this[ig])*Math.PI/16;this[Gf].style.transform=`translateX(${e}px)`,this[Bf].adjustOrbit(n,0,0),this[ig]=i;}}this[Bf].update(t,e),this[bp].updateTarget(e);}[Vf](){this[tg]=!1,this[Hf].classList.remove("visible"),this[ng]=1/0;}[Wf](t){const{idealCameraDistance:e}=this[bp].model,n=2*Math.max(e,t);this[Bf].updateNearFar(0,n);}[jf](){const{theta:t,phi:e}=this[og],{theta:n,phi:i}=this[Bf].getCameraSpherical(this[og]),r=this.getRootNode();if(null!=r&&r.activeElement===this){const r=(4+Math.floor((t%kf+zf)/Ff))%4,s=(4+Math.floor((n%kf+zf)/Ff))%4,o=Math.floor(e/Uf),a=Math.floor(i/Uf);if(s!==r||a!==o){const t=`View from stage ${Mf[a]}${_f[s]}`;this[yp].setAttribute("aria-label",t);}}}[Sp](t){const e=this[Bf],n=this[bp].framedFieldOfView;super[Sp](t);const i=this[bp].framedFieldOfView,r=e.getFieldOfView()/n;this[sg]=i*r,e.updateAspect(this[bp].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.jumpCameraToGoal();}[Mp](){super[Mp]();const{framedFieldOfView:t}=this[bp];this[sg]=t,this[lg]?this[cg]=!0:this[lg]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal();}[Kf](){const t=this[yp];isFinite(this[rg])||(this[rg]=performance.now());const e=this[pp];t.getAttribute("aria-label")!==e&&t.setAttribute("aria-label",e),this.interactionPrompt!==Tf||this[eg]||(this[tg]=!0);}[Zf](){this.interactionPrompt===Tf&&(this[tg]=!1,this[Hf].classList.remove("visible"),this[ng]=1/0,this[rg]=1/0);}[Qf]({source:t}){this[jf](),this[wp](),t===df&&(this[eg]=!0,this[Vf]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:t}}));}[$f](t){"pointer-change-start"===t.type?this[vp].classList.add("pointer-tumbling"):this[vp].classList.remove("pointer-tumbling");}}return yf([o({type:Boolean,attribute:"camera-controls"})],x.prototype,"cameraControls",void 0),yf([ef({intrinsics:Of,observeEffects:!0,updateHandler:hg}),o({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],x.prototype,"cameraOrbit",void 0),yf([ef({intrinsics:Nf,observeEffects:!0,updateHandler:dg}),o({type:String,attribute:"camera-target",hasChanged:()=>!0})],x.prototype,"cameraTarget",void 0),yf([ef({intrinsics:Rf,observeEffects:!0,updateHandler:ug}),o({type:String,attribute:"field-of-view",hasChanged:()=>!0})],x.prototype,"fieldOfView",void 0),yf([ef({intrinsics:If,updateHandler:pg}),o({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],x.prototype,"minCameraOrbit",void 0),yf([ef({intrinsics:Df,updateHandler:mg}),o({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],x.prototype,"maxCameraOrbit",void 0),yf([ef({intrinsics:Cf,updateHandler:fg}),o({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],x.prototype,"minFieldOfView",void 0),yf([ef({intrinsics:Pf,updateHandler:gg}),o({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],x.prototype,"maxFieldOfView",void 0),yf([o({type:Number,attribute:"interaction-prompt-threshold"})],x.prototype,"interactionPromptThreshold",void 0),yf([o({type:String,attribute:"interaction-prompt-style"})],x.prototype,"interactionPromptStyle",void 0),yf([o({type:String,attribute:"interaction-prompt"})],x.prototype,"interactionPrompt",void 0),yf([o({type:String,attribute:"interaction-policy"})],x.prototype,"interactionPolicy",void 0),yf([o({type:Number,attribute:"orbit-sensitivity"})],x.prototype,"orbitSensitivity",void 0),yf([o({type:String,attribute:"touch-action"})],x.prototype,"touchAction",void 0),x})((t=>{var e,n,i,r,s,a,l,c,h,d;class p extends t{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arModes="webxr scene-viewer quick-look",this.iosSrc=null,this.quickLookBrowsers="safari",this[e]=!1,this[n]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[r]=new Set,this[s]=em,this[a]=!1,this[l]=new Set,this[c]=t=>{t.preventDefault(),this.activateAR();},this[h]=({status:t})=>{t!==Wh&&this[Tp].arRenderer.presentedScene!==this[bp]||(this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}})));},this[d]=t=>{"_apple_ar_quicklook_button_tapped"==t.data&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"));};}get canActivateAR(){return this[am]!==em}connectedCallback(){super.connectedCallback(),this[Tp].arRenderer.addEventListener("status",this[mm]),this.setAttribute("ar-status",Wh),this[um].addEventListener("message",this[fm]);}disconnectedCallback(){super.disconnectedCallback(),this[Tp].arRenderer.removeEventListener("status",this[mm]),this[um].removeEventListener("message",this[fm]);}async update(t){super.update(t),t.has("quickLookBrowsers")&&(this[hm]=Zp(this.quickLookBrowsers)),(t.has("ar")||t.has("arModes")||t.has("iosSrc"))&&(t.has("arModes")&&(this[lm]=Kp(this.arModes)),t.has("arScale")&&(this[bp].canScale="fixed"!==this.arScale),this[gm]());}async activateAR(){switch(this[am]){case Qp:this[sm]();break;case tm:await this[im]();break;case $p:this[rm]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");}}async[(e=om,n=nm,i=um,r=lm,s=am,a=dm,l=hm,c=pm,h=mm,d=fm,gm)](){if(this[am]=em,this.ar){const t=[];this[lm].forEach((e=>{t.push(e);}));for(const e of t){if("webxr"===e&&u&&!Yp&&await this[Tp].arRenderer.supportsPresentation()){this[am]=tm;break}if("scene-viewer"===e&&b&&!Jp){this[am]=$p;break}if("quick-look"===e&&this.iosSrc&&this[cm]&&m){this[am]=Qp;break}}}if(this.canActivateAR)this[nm].classList.add("enabled"),this[nm].addEventListener("click",this[pm]);else if(this[nm].classList.contains("enabled")){this[nm].removeEventListener("click",this[pm]),this[nm].classList.remove("enabled");const t=Yh;this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}}));}}get[cm](){return y?this[hm].has("chrome"):!!x&&this[hm].has("safari")}async[im](){console.log("Attempting to present in AR..."),this[cp]||(this[dm]=!0,this[fp](),await((t,e,n=null)=>new Promise((i=>{t.addEventListener(e,(function r(s){n&&!n(s)||(i(s),t.removeEventListener(e,r));}));})))
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this,"load"),this[dm]=!1);try{this[nm].removeEventListener("click",this[pm]),await this[Tp].arRenderer.present(this[bp]);}catch(t){console.warn("Error while trying to present to AR"),console.error(t),await this[Tp].arRenderer.stopPresenting(),Yp=!0,await this[gm](),this.activateAR();}finally{this[gm]();}}[Rp](){return super[Rp]()||this[dm]}[rm](){const t=this.src.replace("?","&"),e=self.location.toString(),n=new URL(e),i=new URL(t,e);n.hash="#model-viewer-no-ar-fallback";let r=`?file=${i.toString()}&mode=ar_only`;t.includes("&link=")||(r+="&link="+e),t.includes("&title=")||(r+="&title="+encodeURIComponent(this.alt||"")),"fixed"===this.arScale&&(r+="&resizable=false");const s=`intent://arvr.google.com/scene-viewer/1.0${r}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(n.toString())};end;`;self.addEventListener("hashchange",(()=>{"#model-viewer-no-ar-fallback"===self.location.hash&&(Jp=!0,self.history.back(),this[gm]());}),{once:!0}),this[um].setAttribute("href",s),this[um].click();}[sm](){const t=new URL(this.iosSrc,self.location.toString());"fixed"===this.arScale&&(t.hash="allowsContentScaling=0");const e=this[um];e.setAttribute("rel","ar");const n=document.createElement("img");e.appendChild(n),e.setAttribute("href",t.toString()),e.click(),e.removeChild(n);}}return Xp([o({type:Boolean,attribute:"ar"})],p.prototype,"ar",void 0),Xp([o({type:String,attribute:"ar-scale"})],p.prototype,"arScale",void 0),Xp([o({type:String,attribute:"ar-modes"})],p.prototype,"arModes",void 0),Xp([o({type:String,attribute:"ios-src"})],p.prototype,"iosSrc",void 0),Xp([o({type:String,attribute:"quick-look-browsers"})],p.prototype,"quickLookBrowsers",void 0),p})((t=>{var e,n,i,r,s,a,l,c,h,u,d,p,m;class f extends t{constructor(...t){super(...t),this.poster=null,this.reveal=Lg,this.loading=Cg,this[e]=!1,this[n]=!1,this[i]=0,this[r]=null,this[s]=this.shadowRoot.querySelector(".slot.poster"),this[a]=this.shadowRoot.querySelector("#default-poster"),this[l]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[c]=this.shadowRoot.querySelector("#default-progress-bar > .mask"),this[h]=this[Ug].getAttribute("aria-label"),this[u]=()=>this[Jg](),this[d]=t=>this[Zg](t),this[p]=t=>this[Kg](t),this[m]=((t,e)=>{let n=null;const i=(...i)=>{null==n&&(t(...i),n=self.setTimeout((()=>n=null),e));};return i.flush=()=>{null!=n&&(self.clearTimeout(n),n=null);},i})((t=>{const e=this[Dg].parentNode;requestAnimationFrame((()=>{this[Ng].style.opacity=""+.2*(1-t),this[Dg].style.transform=`scaleX(${t})`,0===t&&(e.removeChild(this[Dg]),e.appendChild(this[Dg])),1===t?this[Dg].classList.add("hide"):this[Dg].classList.remove("hide");}));}),100);const o=(self.ModelViewerElement||{}).dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.3.6/";oc.setDRACODecoderLocation(o);}static set dracoDecoderLocation(t){oc.setDRACODecoderLocation(t);}static get dracoDecoderLocation(){return oc.getDRACODecoderLocation()}static mapURLs(t){Nd.singleton.loader[ic].manager.setURLModifier(t);}dismissPoster(){this[Cp]()?this[Bg]():(this[zg]=Og,this[fp]());}getDimensions(){return Op(this[bp].model.size)}connectedCallback(){super.connectedCallback(),this[Fg].addEventListener("click",this[qg]),this[Fg].addEventListener("keydown",this[Xg]),this[Ep].addEventListener("progress",this[Yg]),Ig.registerInstance(this);}disconnectedCallback(){super.disconnectedCallback(),this[Fg].removeEventListener("click",this[qg]),this[Fg].removeEventListener("keydown",this[Xg]),this[Ep].removeEventListener("progress",this[Yg]),Ig.unregisterInstance(this);}async updated(t){super.updated(t),t.has("poster")&&null!=this.poster&&(this[Ug].style.backgroundImage=`url(${this.poster})`),t.has("alt")&&this[Ug].setAttribute("aria-label",`${this[pp]}. ${this[Wg]}`),(t.has("reveal")||t.has("loaded"))&&(this[Cp]()||this[fp]());}[(e=Hg,n=jg,i=Vg,r=zg,s=Fg,a=Ug,l=Dg,c=Ng,h=Wg,u=qg,d=Xg,p=Yg,m=Gg,Jg)](){this.reveal!==Rg&&this.dismissPoster();}[Zg](t){if(this.reveal!==Rg)switch(t.keyCode){case 32:case 13:this.dismissPoster();}}[Kg](t){const e=t.detail.totalProgress;this[Vg]=Math.max(e,this[Vg]),1===e&&(this[Gg].flush(),!this[Cp]()||null==this[zg]&&this.reveal!==Lg||this[Bg]()),this[Gg](e),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:e}}));}[Rp](){return !!this.src&&(null!=this[zg]||this.loading===Pg||this.reveal===Lg&&this[up])}[Cp](){const{src:t}=this;return !!t&&super[Cp]()&&1===this[Vg]}[kg](){const t=this[Fg],e=this[Ug];e.removeAttribute("tabindex"),e.removeAttribute("aria-hidden"),t.classList.add("show");const n=this.modelIsVisible;this[Hg]=!1,this[dp](n),this[jg]=!1;}[Bg](){this[zg]=null;const t=this[Fg],e=this[Ug];if(t.classList.contains("show")){t.classList.remove("show");const n=this.modelIsVisible;this[Hg]=!0,this[dp](n),t.addEventListener("transitionend",(()=>{requestAnimationFrame((()=>{this[jg]=!0;const t=this.getRootNode();t&&t.activeElement===this&&this[yp].focus(),e.setAttribute("aria-hidden","true"),e.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"));}));}),{once:!0});}}[Lp](){return super[Lp]()&&this[Hg]}[Pp](){return super[Pp]()&&this[jg]}async[fp](){this[Vg]=0,null!=this[bp].model.currentGLTF&&null!=this.src&&this[Rp]()||this[kg](),await super[fp]();}}return Ag([o({type:String})],f.prototype,"poster",void 0),Ag([o({type:String})],f.prototype,"reveal",void 0),Ag([o({type:String})],f.prototype,"loading",void 0),f})((t=>{var e;class n extends t{constructor(){super(...arguments),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0;}get availableAnimations(){return this.loaded?this[bp].model.animationNames:[]}get paused(){return this[Fp]}get currentTime(){return this[bp].model.animationTime}set currentTime(t){this[bp].model.animationTime=t,this[Tp].threeRenderer.shadowMap.needsUpdate=!0,this[wp]();}pause(){this[Fp]||(this[Fp]=!0,this[Tp].threeRenderer.shadowMap.autoUpdate=!1,this.dispatchEvent(new CustomEvent("pause")));}play(){this[Fp]&&this.availableAnimations.length>0&&(this[Fp]=!1,this[Tp].threeRenderer.shadowMap.autoUpdate=!0,this[bp].model.hasActiveAnimation||this[Np](),this.dispatchEvent(new CustomEvent("play")));}[(e=Fp,Mp)](){super[Mp](),this[Fp]=!0,this.autoplay&&(this[Np](),this.play());}[_p](t,e){if(super[_p](t,e),this[Fp]||!this[Pp]())return;const{model:n}=this[bp];n.updateAnimation(e/1e3),this[wp]();}updated(t){super.updated(t),t.has("autoplay")&&this.autoplay&&this.play(),t.has("animationName")&&this[Np]();}async[fp](){return this[bp].model.stopAnimation(),super[fp]()}[Np](){const{model:t}=this[bp];t.playAnimation(this.animationName,this.animationCrossfadeDuration/1e3),this[Fp]&&(t.updateAnimation(0),this[wp]());}}return Dp([o({type:Boolean})],n.prototype,"autoplay",void 0),Dp([o({type:String,attribute:"animation-name"})],n.prototype,"animationName",void 0),Dp([o({type:Number,attribute:"animation-crossfade-duration"})],n.prototype,"animationCrossfadeDuration",void 0),n})((t=>{var e;const n=Symbol("endPolyfillCoordination");return e=n,class extends t{constructor(){super(...arguments),this[e]=null;}connectedCallback(){super.connectedCallback&&super.connectedCallback(),null==this[n]&&(this[n]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return ()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill(t.shadowRoot);};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e);}}return self.applyFocusVisiblePolyfill(t.shadowRoot),()=>{}})(this));}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),null!=this[n]&&(this[n](),this[n]=null);}}})(Ip)))))))));customElements.define("model-viewer",nb);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (isTemplatePartActive(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = isCEPolyfill ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : nodeMarker);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                    marker;
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (isDirective(this.value)) {
            const directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof TemplateResult) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === nothing) {
            this.value = nothing;
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = noChange;
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = templateCaches.get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(marker);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                removeNodesFromTemplate(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        removeNodesFromTemplate(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render$1 = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = parts.has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = parts.get(renderContainer);
        parts.delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof TemplateInstance ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a$1;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
            Object.defineProperty(this.prototype, name, descriptor);
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this
                    .requestUpdateInternal(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */
    static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) ||
            defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._updateState = 0;
        this._updatePromise =
            new Promise((res) => this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            options = options || ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._updatePromise = this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) {
            return;
        }
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
            else {
                this._markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    _getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a$1 = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a$1] = true;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function internalProperty(options) {
    return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        if (cache) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            descriptor.get = function () {
                if (this[key] === undefined) {
                    (this[key] =
                        this.renderRoot.querySelector(selector));
                }
                return this[key];
            };
        }
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `supportsAdoptingStyleSheets` is true then we assume
            // CSSStyleSheet is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.4.0');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */
const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */
class LitElement extends UpdatingElement {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    static getStyles() {
        return this.styles;
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
            return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set) => styles.reduceRight((set, s) => 
            // Note: On IE set.add() does not return the set
            Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v) => styles.unshift(v));
            this._styles = styles;
        }
        else {
            this._styles = userStyles === undefined ? [] : [userStyles];
        }
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map((s) => {
            if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                const cssText = Array.prototype.slice.call(s.cssRules)
                    .reduce((css, rule) => css + rule.cssText, '');
                return unsafeCSS(cssText);
            }
            return s;
        });
    }
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (supportsAdoptingStyleSheets) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */
    render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */
LitElement.render = render$1;

/**
 * Use this type when you need to store safe object URLs. And then when you need
 * the actual url, just access the .url member.
 */
class SafeObjectUrl {
    constructor(url) {
        this.url = url;
    }
    get unsafeUrl() {
        return this.url;
    }
}
/**
 * Returns a SafeUrl, for google3-specific lit-html checks which require them.
 */
function createSafeObjectURL(blob) {
    return new SafeObjectUrl(URL.createObjectURL(blob));
}
/**
 * This should only be used when you don't care what the blob type is. For
 * example, when loading GLBs directly via modelviewer.src.
 */
function urlFromArrayBuffer(contents) {
    return createSafeObjectURL(new Blob([new Uint8Array(contents)]));
}
async function urlFromUnzippedFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const safeObjectUrl = urlFromArrayBuffer(arrayBuffer);
    const unsafeUrl = file.name.match(/\.(hdr)$/i)
        ? safeObjectUrl.unsafeUrl + "#.hdr"
        : safeObjectUrl.unsafeUrl;
    return unsafeUrl;
}
// export async function urlFromZippedFile(file: File) {
//   let src: string;
//   let skybox: string;
//   let annotations: any;
// }
async function jsonFromFile(file) {
    return JSON.parse((await file.text()).toString());
}
async function getJsonFromUrl(url) {
    let json = await fetch(url);
    if (json.ok) {
        return await json.json();
    }
    else
        return undefined;
}
async function gettextFromFile(url) {
    let file = await fetch(url);
    if (file.ok) {
        return await file.text();
    }
    return undefined;
}

/*
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class ExtendRegexp {
    constructor(regex, flags = '') {
        this.source = regex.source;
        this.flags = flags;
    }
    /**
     * Extend regular expression.
     *
     * @param groupName Regular expression for search a group name.
     * @param groupRegexp Regular expression of named group.
     */
    setGroup(groupName, groupRegexp) {
        let newRegexp = typeof groupRegexp == 'string' ? groupRegexp : groupRegexp.source;
        newRegexp = newRegexp.replace(/(^|[^\[])\^/g, '$1');
        // Extend regexp.
        this.source = this.source.replace(groupName, newRegexp);
        return this;
    }
    /**
     * Returns a result of extending a regular expression.
     */
    getRegexp() {
        return new RegExp(this.source, this.flags);
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    // tslint:disable-next-line:quotemark
    "'": '&#39;',
};
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
function escape$1(html, encode) {
    if (encode) {
        if (escapeTest.test(html)) {
            return html.replace(escapeReplace, (ch) => replacements[ch]);
        }
    }
    else {
        if (escapeTestNoEncode.test(html)) {
            return html.replace(escapeReplaceNoEncode, (ch) => replacements[ch]);
        }
    }
    return html;
}
function unescape(html) {
    // Explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') {
            return ':';
        }
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}

/**
 * @license
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
var TokenType;
(function (TokenType) {
    TokenType[TokenType["space"] = 1] = "space";
    TokenType[TokenType["text"] = 2] = "text";
    TokenType[TokenType["paragraph"] = 3] = "paragraph";
    TokenType[TokenType["heading"] = 4] = "heading";
    TokenType[TokenType["listStart"] = 5] = "listStart";
    TokenType[TokenType["listEnd"] = 6] = "listEnd";
    TokenType[TokenType["looseItemStart"] = 7] = "looseItemStart";
    TokenType[TokenType["looseItemEnd"] = 8] = "looseItemEnd";
    TokenType[TokenType["listItemStart"] = 9] = "listItemStart";
    TokenType[TokenType["listItemEnd"] = 10] = "listItemEnd";
    TokenType[TokenType["blockquoteStart"] = 11] = "blockquoteStart";
    TokenType[TokenType["blockquoteEnd"] = 12] = "blockquoteEnd";
    TokenType[TokenType["code"] = 13] = "code";
    TokenType[TokenType["table"] = 14] = "table";
    TokenType[TokenType["html"] = 15] = "html";
    TokenType[TokenType["hr"] = 16] = "hr";
})(TokenType || (TokenType = {}));
class MarkedOptions {
    constructor() {
        this.gfm = true;
        this.tables = true;
        this.breaks = false;
        this.pedantic = false;
        this.sanitize = false;
        this.mangle = true;
        this.smartLists = false;
        this.silent = false;
        this.langPrefix = 'lang-';
        this.smartypants = false;
        this.headerPrefix = '';
        /**
         * Self-close the tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.)
         * with a "/" as required by XHTML.
         */
        this.xhtml = false;
        /**
         * The function that will be using to escape HTML entities.
         * By default using inner helper.
         */
        this.escape = escape$1;
        /**
         * The function that will be using to unescape HTML entities.
         * By default using inner helper.
         */
        this.unescape = unescape;
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class Renderer {
    constructor(options) {
        this.options = options || Marked.options;
    }
    code(code, lang, escaped) {
        if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }
        if (!lang) {
            return '\n<pre><code>' + (escaped ? code : this.options.escape(code, true)) + '\n</code></pre>\n';
        }
        return ('\n<pre><code class="' +
            this.options.langPrefix +
            this.options.escape(lang, true) +
            '">' +
            (escaped ? code : this.options.escape(code, true)) +
            '\n</code></pre>\n');
    }
    blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
    }
    html(html) {
        return html;
    }
    heading(text, level, raw) {
        const id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>\n`;
    }
    hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
    list(body, ordered) {
        const type = ordered ? 'ol' : 'ul';
        return `\n<${type}>\n${body}</${type}>\n`;
    }
    listitem(text) {
        return '<li>' + text + '</li>\n';
    }
    paragraph(text) {
        return '<p>' + text + '</p>\n';
    }
    table(header, body) {
        return `
<table>
<thead>
${header}</thead>
<tbody>
${body}</tbody>
</table>
`;
    }
    tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
    }
    tablecell(content, flags) {
        const type = flags.header ? 'th' : 'td';
        const tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    }
    // *** Inline level renderer methods. ***
    strong(text) {
        return '<strong>' + text + '</strong>';
    }
    em(text) {
        return '<em>' + text + '</em>';
    }
    codespan(text) {
        return '<code>' + text + '</code>';
    }
    br() {
        return this.options.xhtml ? '<br/>' : '<br>';
    }
    del(text) {
        return '<del>' + text + '</del>';
    }
    link(href, title, text) {
        if (this.options.sanitize) {
            let prot;
            try {
                prot = decodeURIComponent(this.options.unescape(href))
                    .replace(/[^\w:]/g, '')
                    .toLowerCase();
            }
            catch (e) {
                return text;
            }
            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
                return text;
            }
        }
        let out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    }
    image(href, title, text) {
        let out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    }
    text(text) {
        return text;
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
/**
 * Inline Lexer & Compiler.
 */
class InlineLexer {
    constructor(staticThis, links, options = Marked.options, renderer) {
        this.staticThis = staticThis;
        this.links = links;
        this.options = options;
        this.renderer = renderer || this.options.renderer || new Renderer(this.options);
        if (!this.links) {
            throw new Error(`InlineLexer requires 'links' parameter.`);
        }
        this.setRules();
    }
    /**
     * Static Lexing/Compiling Method.
     */
    static output(src, links, options) {
        const inlineLexer = new this(this, links, options);
        return inlineLexer.output(src);
    }
    static getRulesBase() {
        if (this.rulesBase) {
            return this.rulesBase;
        }
        /**
         * Inline-Level Grammar.
         */
        const base = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
            _inside: /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
            _href: /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
        };
        base.link = new ExtendRegexp(base.link).setGroup('inside', base._inside).setGroup('href', base._href).getRegexp();
        base.reflink = new ExtendRegexp(base.reflink).setGroup('inside', base._inside).getRegexp();
        return (this.rulesBase = base);
    }
    static getRulesPedantic() {
        if (this.rulesPedantic) {
            return this.rulesPedantic;
        }
        return (this.rulesPedantic = Object.assign(Object.assign({}, this.getRulesBase()), {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        }));
    }
    static getRulesGfm() {
        if (this.rulesGfm) {
            return this.rulesGfm;
        }
        const base = this.getRulesBase();
        const escape = new ExtendRegexp(base.escape).setGroup('])', '~|])').getRegexp();
        const text = new ExtendRegexp(base.text).setGroup(']|', '~]|').setGroup('|', '|https?://|').getRegexp();
        return (this.rulesGfm = Object.assign(Object.assign({}, base), {
            escape,
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text,
        }));
    }
    static getRulesBreaks() {
        if (this.rulesBreaks) {
            return this.rulesBreaks;
        }
        const inline = this.getRulesGfm();
        const gfm = this.getRulesGfm();
        return (this.rulesBreaks = Object.assign(Object.assign({}, gfm), {
            br: new ExtendRegexp(inline.br).setGroup('{2,}', '*').getRegexp(),
            text: new ExtendRegexp(gfm.text).setGroup('{2,}', '*').getRegexp(),
        }));
    }
    setRules() {
        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = this.staticThis.getRulesBreaks();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else if (this.options.pedantic) {
            this.rules = this.staticThis.getRulesPedantic();
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.url !== undefined;
    }
    /**
     * Lexing/Compiling.
     */
    output(nextPart) {
        nextPart = nextPart;
        let execArr;
        let out = '';
        while (nextPart) {
            // escape
            if ((execArr = this.rules.escape.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += execArr[1];
                continue;
            }
            // autolink
            if ((execArr = this.rules.autolink.exec(nextPart))) {
                let text;
                let href;
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[2] === '@') {
                    text = this.options.escape(execArr[1].charAt(6) === ':' ? this.mangle(execArr[1].substring(7)) : this.mangle(execArr[1]));
                    href = this.mangle('mailto:') + text;
                }
                else {
                    text = this.options.escape(execArr[1]);
                    href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
            }
            // url (gfm)
            if (!this.inLink && this.hasRulesGfm && (execArr = this.rules.url.exec(nextPart))) {
                let text;
                let href;
                nextPart = nextPart.substring(execArr[0].length);
                text = this.options.escape(execArr[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue;
            }
            // tag
            if ((execArr = this.rules.tag.exec(nextPart))) {
                if (!this.inLink && /^<a /i.test(execArr[0])) {
                    this.inLink = true;
                }
                else if (this.inLink && /^<\/a>/i.test(execArr[0])) {
                    this.inLink = false;
                }
                nextPart = nextPart.substring(execArr[0].length);
                out += this.options.sanitize
                    ? this.options.sanitizer
                        ? this.options.sanitizer(execArr[0])
                        : this.options.escape(execArr[0])
                    : execArr[0];
                continue;
            }
            // link
            if ((execArr = this.rules.link.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.inLink = true;
                out += this.outputLink(execArr, {
                    href: execArr[2],
                    title: execArr[3],
                });
                this.inLink = false;
                continue;
            }
            // reflink, nolink
            if ((execArr = this.rules.reflink.exec(nextPart)) || (execArr = this.rules.nolink.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const keyLink = (execArr[2] || execArr[1]).replace(/\s+/g, ' ');
                const link = this.links[keyLink.toLowerCase()];
                if (!link || !link.href) {
                    out += execArr[0].charAt(0);
                    nextPart = execArr[0].substring(1) + nextPart;
                    continue;
                }
                this.inLink = true;
                out += this.outputLink(execArr, link);
                this.inLink = false;
                continue;
            }
            // strong
            if ((execArr = this.rules.strong.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.strong(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // em
            if ((execArr = this.rules.em.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.em(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // code
            if ((execArr = this.rules.code.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.codespan(this.options.escape(execArr[2].trim(), true));
                continue;
            }
            // br
            if ((execArr = this.rules.br.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.br();
                continue;
            }
            // del (gfm)
            if (this.hasRulesGfm && (execArr = this.rules.del.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.del(this.output(execArr[1]));
                continue;
            }
            // text
            if ((execArr = this.rules.text.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.text(this.options.escape(this.smartypants(execArr[0])));
                continue;
            }
            if (nextPart) {
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0));
            }
        }
        return out;
    }
    /**
     * Compile Link.
     */
    outputLink(execArr, link) {
        const href = this.options.escape(link.href);
        const title = link.title ? this.options.escape(link.title) : null;
        return execArr[0].charAt(0) !== '!'
            ? this.renderer.link(href, title, this.output(execArr[1]))
            : this.renderer.image(href, title, this.options.escape(execArr[1]));
    }
    /**
     * Smartypants Transformations.
     */
    smartypants(text) {
        if (!this.options.smartypants) {
            return text;
        }
        return (text
            // em-dashes
            .replace(/---/g, '\u2014')
            // en-dashes
            .replace(/--/g, '\u2013')
            // opening singles
            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
            // closing singles & apostrophes
            .replace(/'/g, '\u2019')
            // opening doubles
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
            // closing doubles
            .replace(/"/g, '\u201d')
            // ellipses
            .replace(/\.{3}/g, '\u2026'));
    }
    /**
     * Mangle Links.
     */
    mangle(text) {
        if (!this.options.mangle) {
            return text;
        }
        let out = '';
        const length = text.length;
        for (let i = 0; i < length; i++) {
            let str;
            if (Math.random() > 0.5) {
                str = 'x' + text.charCodeAt(i).toString(16);
            }
            out += '&#' + str + ';';
        }
        return out;
    }
}
InlineLexer.rulesBase = null;
/**
 * Pedantic Inline Grammar.
 */
InlineLexer.rulesPedantic = null;
/**
 * GFM Inline Grammar
 */
InlineLexer.rulesGfm = null;
/**
 * GFM + Line Breaks Inline Grammar.
 */
InlineLexer.rulesBreaks = null;

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
/**
 * Parsing & Compiling.
 */
class Parser {
    constructor(options) {
        this.simpleRenderers = [];
        this.line = 0;
        this.tokens = [];
        this.token = null;
        this.options = options || Marked.options;
        this.renderer = this.options.renderer || new Renderer(this.options);
    }
    static parse(tokens, links, options) {
        const parser = new this(options);
        return parser.parse(links, tokens);
    }
    parse(links, tokens) {
        this.inlineLexer = new InlineLexer(InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        let out = '';
        while (this.next()) {
            out += this.tok();
        }
        return out;
    }
    debug(links, tokens) {
        this.inlineLexer = new InlineLexer(InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        let out = '';
        while (this.next()) {
            const outToken = this.tok();
            this.token.line = this.line += outToken.split('\n').length - 1;
            out += outToken;
        }
        return out;
    }
    next() {
        return (this.token = this.tokens.pop());
    }
    getNextElement() {
        return this.tokens[this.tokens.length - 1];
    }
    parseText() {
        let body = this.token.text;
        let nextElement;
        while ((nextElement = this.getNextElement()) && nextElement.type == TokenType.text) {
            body += '\n' + this.next().text;
        }
        return this.inlineLexer.output(body);
    }
    tok() {
        switch (this.token.type) {
            case TokenType.space: {
                return '';
            }
            case TokenType.paragraph: {
                return this.renderer.paragraph(this.inlineLexer.output(this.token.text));
            }
            case TokenType.text: {
                if (this.options.isNoP) {
                    return this.parseText();
                }
                else {
                    return this.renderer.paragraph(this.parseText());
                }
            }
            case TokenType.heading: {
                return this.renderer.heading(this.inlineLexer.output(this.token.text), this.token.depth, this.token.text);
            }
            case TokenType.listStart: {
                let body = '';
                const ordered = this.token.ordered;
                while (this.next().type != TokenType.listEnd) {
                    body += this.tok();
                }
                return this.renderer.list(body, ordered);
            }
            case TokenType.listItemStart: {
                let body = '';
                while (this.next().type != TokenType.listItemEnd) {
                    body += this.token.type == TokenType.text ? this.parseText() : this.tok();
                }
                return this.renderer.listitem(body);
            }
            case TokenType.looseItemStart: {
                let body = '';
                while (this.next().type != TokenType.listItemEnd) {
                    body += this.tok();
                }
                return this.renderer.listitem(body);
            }
            case TokenType.code: {
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            }
            case TokenType.table: {
                let header = '';
                let body = '';
                let cell;
                // header
                cell = '';
                for (let i = 0; i < this.token.header.length; i++) {
                    const flags = { header: true, align: this.token.align[i] };
                    const out = this.inlineLexer.output(this.token.header[i]);
                    cell += this.renderer.tablecell(out, flags);
                }
                header += this.renderer.tablerow(cell);
                for (const row of this.token.cells) {
                    cell = '';
                    for (let j = 0; j < row.length; j++) {
                        cell += this.renderer.tablecell(this.inlineLexer.output(row[j]), {
                            header: false,
                            align: this.token.align[j]
                        });
                    }
                    body += this.renderer.tablerow(cell);
                }
                return this.renderer.table(header, body);
            }
            case TokenType.blockquoteStart: {
                let body = '';
                while (this.next().type != TokenType.blockquoteEnd) {
                    body += this.tok();
                }
                return this.renderer.blockquote(body);
            }
            case TokenType.hr: {
                return this.renderer.hr();
            }
            case TokenType.html: {
                const html = !this.token.pre && !this.options.pedantic ? this.inlineLexer.output(this.token.text) : this.token.text;
                return this.renderer.html(html);
            }
            default: {
                if (this.simpleRenderers.length) {
                    for (let i = 0; i < this.simpleRenderers.length; i++) {
                        if (this.token.type == 'simpleRule' + (i + 1)) {
                            return this.simpleRenderers[i].call(this.renderer, this.token.execArr);
                        }
                    }
                }
                const errMsg = `Token with "${this.token.type}" type was not found.`;
                if (this.options.silent) {
                    console.log(errMsg);
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class Marked {
    /**
     * Merges the default options with options that will be set.
     *
     * @param options Hash of options.
     */
    static setOptions(options) {
        Object.assign(this.options, options);
        return this;
    }
    /**
     * Setting simple block rule.
     */
    static setBlockRule(regexp, renderer = () => '') {
        BlockLexer.simpleRules.push(regexp);
        this.simpleRenderers.push(renderer);
        return this;
    }
    /**
     * Accepts Markdown text and returns text in HTML format.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    static parse(src, options = this.options) {
        try {
            const { tokens, links } = this.callBlockLexer(src, options);
            return this.callParser(tokens, links, options);
        }
        catch (e) {
            return this.callMe(e);
        }
    }
    /**
     * Accepts Markdown text and returns object with text in HTML format,
     * tokens and links from `BlockLexer.parser()`.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    static debug(src, options = this.options) {
        const { tokens, links } = this.callBlockLexer(src, options);
        let origin = tokens.slice();
        const parser = new Parser(options);
        parser.simpleRenderers = this.simpleRenderers;
        const result = parser.debug(links, tokens);
        /**
         * Translates a token type into a readable form,
         * and moves `line` field to a first place in a token object.
         */
        origin = origin.map(token => {
            token.type = TokenType[token.type] || token.type;
            const line = token.line;
            delete token.line;
            if (line) {
                return Object.assign({ line }, token);
            }
            else {
                return token;
            }
        });
        return { tokens: origin, links, result };
    }
    static callBlockLexer(src = '', options) {
        if (typeof src != 'string') {
            throw new Error(`Expected that the 'src' parameter would have a 'string' type, got '${typeof src}'`);
        }
        // Preprocessing.
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ')
            .replace(/\u00a0/g, ' ')
            .replace(/\u2424/g, '\n')
            .replace(/^ +$/gm, '');
        return BlockLexer.lex(src, options, true);
    }
    static callParser(tokens, links, options) {
        if (this.simpleRenderers.length) {
            const parser = new Parser(options);
            parser.simpleRenderers = this.simpleRenderers;
            return parser.parse(links, tokens);
        }
        else {
            return Parser.parse(tokens, links, options);
        }
    }
    static callMe(err) {
        err.message += '\nPlease report this to https://github.com/ts-stack/markdown';
        if (this.options.silent) {
            return '<p>An error occured:</p><pre>' + this.options.escape(err.message + '', true) + '</pre>';
        }
        throw err;
    }
}
Marked.options = new MarkedOptions();
Marked.simpleRenderers = [];

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2020, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class BlockLexer {
    constructor(staticThis, options) {
        this.staticThis = staticThis;
        this.links = {};
        this.tokens = [];
        this.options = options || Marked.options;
        this.setRules();
    }
    /**
     * Accepts Markdown text and returns object with tokens and links.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options.
     */
    static lex(src, options, top, isBlockQuote) {
        const lexer = new this(this, options);
        return lexer.getTokens(src, top, isBlockQuote);
    }
    static getRulesBase() {
        if (this.rulesBase) {
            return this.rulesBase;
        }
        const base = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/,
            bullet: /(?:[*+-]|\d+\.)/,
            item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
        };
        base.item = new ExtendRegexp(base.item, 'gm').setGroup(/bull/g, base.bullet).getRegexp();
        base.list = new ExtendRegexp(base.list)
            .setGroup(/bull/g, base.bullet)
            .setGroup('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
            .setGroup('def', '\\n+(?=' + base.def.source + ')')
            .getRegexp();
        const tag = '(?!(?:' +
            'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' +
            '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' +
            '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
        base.html = new ExtendRegexp(base.html)
            .setGroup('comment', /<!--[\s\S]*?-->/)
            .setGroup('closed', /<(tag)[\s\S]+?<\/\1>/)
            .setGroup('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
            .setGroup(/tag/g, tag)
            .getRegexp();
        base.paragraph = new ExtendRegexp(base.paragraph)
            .setGroup('hr', base.hr)
            .setGroup('heading', base.heading)
            .setGroup('lheading', base.lheading)
            .setGroup('blockquote', base.blockquote)
            .setGroup('tag', '<' + tag)
            .setGroup('def', base.def)
            .getRegexp();
        return (this.rulesBase = base);
    }
    static getRulesGfm() {
        if (this.rulesGfm) {
            return this.rulesGfm;
        }
        const base = this.getRulesBase();
        const gfm = Object.assign(Object.assign({}, base), {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
        });
        const group1 = gfm.fences.source.replace('\\1', '\\2');
        const group2 = base.list.source.replace('\\1', '\\3');
        gfm.paragraph = new ExtendRegexp(base.paragraph).setGroup('(?!', `(?!${group1}|${group2}|`).getRegexp();
        return (this.rulesGfm = gfm);
    }
    static getRulesTable() {
        if (this.rulesTables) {
            return this.rulesTables;
        }
        return (this.rulesTables = Object.assign(Object.assign({}, this.getRulesGfm()), {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
        }));
    }
    setRules() {
        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = this.staticThis.getRulesTable();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.fences !== undefined;
        this.hasRulesTables = this.rules.table !== undefined;
    }
    /**
     * Lexing.
     */
    getTokens(src, top, isBlockQuote) {
        let nextPart = src;
        let execArr;
        mainLoop: while (nextPart) {
            // newline
            if ((execArr = this.rules.newline.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[0].length > 1) {
                    this.tokens.push({ type: TokenType.space });
                }
            }
            // code
            if ((execArr = this.rules.code.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const code = execArr[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                    type: TokenType.code,
                    text: !this.options.pedantic ? code.replace(/\n+$/, '') : code,
                });
                continue;
            }
            // fences code (gfm)
            if (this.hasRulesGfm && (execArr = this.rules.fences.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.code,
                    lang: execArr[2],
                    text: execArr[3] || '',
                });
                continue;
            }
            // heading
            if ((execArr = this.rules.heading.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.heading,
                    depth: execArr[1].length,
                    text: execArr[2],
                });
                continue;
            }
            // table no leading pipe (gfm)
            if (top && this.hasRulesTables && (execArr = this.rules.nptable.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const item = {
                    type: TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: [],
                };
                for (let i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                const td = execArr[3].replace(/\n$/, '').split('\n');
                for (let i = 0; i < td.length; i++) {
                    item.cells[i] = td[i].split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // lheading
            if ((execArr = this.rules.lheading.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.heading,
                    depth: execArr[2] === '=' ? 1 : 2,
                    text: execArr[1],
                });
                continue;
            }
            // hr
            if ((execArr = this.rules.hr.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.hr });
                continue;
            }
            // blockquote
            if ((execArr = this.rules.blockquote.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.blockquoteStart });
                const str = execArr[0].replace(/^ *> ?/gm, '');
                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.getTokens(str);
                this.tokens.push({ type: TokenType.blockquoteEnd });
                continue;
            }
            // list
            if ((execArr = this.rules.list.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const bull = execArr[2];
                this.tokens.push({ type: TokenType.listStart, ordered: bull.length > 1 });
                // Get each top-level item.
                const str = execArr[0].match(this.rules.item);
                const length = str.length;
                let next = false;
                let space;
                let blockBullet;
                let loose;
                for (let i = 0; i < length; i++) {
                    let item = str[i];
                    // Remove the list item's bullet so it is seen as the next token.
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');
                    // Outdent whatever the list item contains. Hacky.
                    if (item.indexOf('\n ') !== -1) {
                        space -= item.length;
                        item = !this.options.pedantic
                            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                            : item.replace(/^ {1,4}/gm, '');
                    }
                    // Determine whether the next list item belongs here.
                    // Backpedal if it does not belong in this list.
                    if (this.options.smartLists && i !== length - 1) {
                        blockBullet = this.staticThis.getRulesBase().bullet.exec(str[i + 1])[0];
                        if (bull !== blockBullet && !(bull.length > 1 && blockBullet.length > 1)) {
                            nextPart = str.slice(i + 1).join('\n') + nextPart;
                            i = length - 1;
                        }
                    }
                    // Determine whether item is loose or not.
                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                    // for discount behavior.
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== length - 1) {
                        next = item.charAt(item.length - 1) === '\n';
                        if (!loose) {
                            loose = next;
                        }
                    }
                    this.tokens.push({ type: loose ? TokenType.looseItemStart : TokenType.listItemStart });
                    // Recurse.
                    this.getTokens(item, false, isBlockQuote);
                    this.tokens.push({ type: TokenType.listItemEnd });
                }
                this.tokens.push({ type: TokenType.listEnd });
                continue;
            }
            // html
            if ((execArr = this.rules.html.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const attr = execArr[1];
                const isPre = attr === 'pre' || attr === 'script' || attr === 'style';
                this.tokens.push({
                    type: this.options.sanitize ? TokenType.paragraph : TokenType.html,
                    pre: !this.options.sanitizer && isPre,
                    text: execArr[0],
                });
                continue;
            }
            // def
            if (top && (execArr = this.rules.def.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.links[execArr[1].toLowerCase()] = {
                    href: execArr[2],
                    title: execArr[3],
                };
                continue;
            }
            // table (gfm)
            if (top && this.hasRulesTables && (execArr = this.rules.table.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const item = {
                    type: TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: [],
                };
                for (let i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                const td = execArr[3].replace(/(?: *\| *)?\n$/, '').split('\n');
                for (let i = 0; i < td.length; i++) {
                    item.cells[i] = td[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // simple rules
            if (this.staticThis.simpleRules.length) {
                const simpleRules = this.staticThis.simpleRules;
                for (let i = 0; i < simpleRules.length; i++) {
                    if ((execArr = simpleRules[i].exec(nextPart))) {
                        nextPart = nextPart.substring(execArr[0].length);
                        const type = 'simpleRule' + (i + 1);
                        this.tokens.push({ type, execArr });
                        continue mainLoop;
                    }
                }
            }
            // top-level paragraph
            if (top && (execArr = this.rules.paragraph.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[1].slice(-1) === '\n') {
                    this.tokens.push({
                        type: TokenType.paragraph,
                        text: execArr[1].slice(0, -1),
                    });
                }
                else {
                    this.tokens.push({
                        type: this.tokens.length > 0 ? TokenType.paragraph : TokenType.text,
                        text: execArr[1],
                    });
                }
                continue;
            }
            // text
            // Top-level should never reach here.
            if ((execArr = this.rules.text.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.text, text: execArr[0] });
                continue;
            }
            if (nextPart) {
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0) + `, near text '${nextPart.slice(0, 30)}...'`);
            }
        }
        return { tokens: this.tokens, links: this.links };
    }
}
BlockLexer.simpleRules = [];
BlockLexer.rulesBase = null;
/**
 * GFM Block Grammar.
 */
BlockLexer.rulesGfm = null;
/**
 * GFM + Tables Block Grammar.
 */
BlockLexer.rulesTables = null;

const styles = css `
  model-viewer {
    width: 100%;
    height: 100vh;
    outline: none;
  }
  button {
    background: #fff;
    border-radius: 32px;
    border: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    cursor: pointer;
    height: 24px;
    padding-top: 2px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 15px;
    position: relative;
    min-width: 24px;
  }

  button:not([data-visible]) {
    background: transparent;
    border: 4px solid #fff;
    box-shadow: none;
    pointer-events: none;
    height: 32px;
    min-width: 32px;
  }

  button:focus {
    border: 4px solid rgb(0, 128, 200);
    height: 32px;
    outline: none;
    min-width: 32px;
  }

  button:focus .HotspotAnnotation {
    transition: opacity 0.3s;
    opacity: 1;
    pointer-events: initial;
  }

  button .HotspotAnnotation {
    opacity: 0;
    pointer-events: none;
  }

  .HotspotAnnotation {
    background: rgb(0, 0, 0, 0.8);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.8);
    display: block;
    font-size: 12px;
    font-weight: 200;
    left: calc(100% + 1em);
    max-width: 250px;
    padding: 0.5em;
    position: absolute;
    top: 50%;
    width: max-content;
    overflow-y: auto;
    max-height: 400px;
  }

  .annotation_label {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: white;
  }

  .annotation_description {
    color: white;
    font-size: 12px;
    font-weight: 200;
    text-align: left;
  }

  .label_nav {
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    left: 50%;
    bottom: 10px;
    padding: 6px;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    width: 200px;
    background: rgb(0, 0, 0, 0.8);
    border-radius: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  /* This keeps child nodes hidden while the element loads */
  :not(:defined) > * {
    display: none;
  }

  #download {
    display: none;
  }

  .drag_drop_text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20pt;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .drag_drop_text small {
    font-size: 12pt;
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .round {
    border-radius: 50%;
  }

  .nav_arrow {
    text-decorations: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }

  .nav_prev {
    grid-column: 1 / span 1;
  }

  .nav_next {
    grid-column: 6 / span 1;
  }

  .nav_center {
    grid-column: 2 / span 4;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    padding: 6px;
  }

  /* width */
  .HotspotAnnotation::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .HotspotAnnotation::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  .HotspotAnnotation::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  /* Handle on hover */
  .HotspotAnnotation::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const map_style = {
    height: "100vh",
    width: "100%",
};
class HbllModelViewerElementBase extends LitElement {
    constructor() {
        super();
        this.src = null;
        this.annotation_src = null;
        this.skybox_image = null;
        this.annotations = null;
        this.manifest_src = null;
        this.manifest = null;
        this.cameraIsDirty = false;
        this.currentAnnotation = undefined;
        this.files = new Map();
    }
    async firstUpdated() {
        var _a, _b, _c, _d;
        // Give the browser a chance to paint
        await new Promise((r) => setTimeout(r, 0));
        if (this.annotation_src != undefined) {
            this.annotations = await getJsonFromUrl(this.annotation_src);
        }
        if (this.manifest_src != undefined) {
            this.manifest = await getJsonFromUrl(this.manifest_src);
            if (((_a = this.manifest) === null || _a === void 0 ? void 0 : _a.entries) != undefined)
                for (let i = 0; i < ((_b = this.manifest) === null || _b === void 0 ? void 0 : _b.entries.length) || 0; i++) {
                    let text = await gettextFromFile((_c = this.manifest) === null || _c === void 0 ? void 0 : _c.entries[i].url);
                    if (text != undefined)
                        this.files.set((_d = this.manifest) === null || _d === void 0 ? void 0 : _d.entries[i].name, text);
                }
        }
        this.addEventListener("drop", this.onDrop);
        this.addEventListener("dragover", this.onDragover);
    }
    onDragover(event) {
        if (!event.dataTransfer)
            return;
        event.stopPropagation();
        event.preventDefault();
    }
    async onDrop(event) {
        event.stopPropagation();
        event.preventDefault();
        if (event.dataTransfer && event.dataTransfer.items[0].kind === "file") {
            const file = event.dataTransfer.items[0].getAsFile();
            if (!file)
                return;
            if (file.name.match(/\.(glb)$/i)) {
                this.src = await urlFromUnzippedFile(file);
            }
            if (file.name.match(/\.(hdr|png|jpg|jpeg)$/i)) {
                this.skybox_image = await urlFromUnzippedFile(file);
            }
            if (file.name.match(/\.(json)$/i)) {
                if (file.name === "manifest.json") {
                    this.manifest = await jsonFromFile(file);
                }
                this.annotations = await jsonFromFile(file);
                // console.log(this.annotations);
            }
            if (file.name.match(/\.(zip)$/i)) {
                console.log("Dropped a zipped file");
            }
        }
    }
    handleClick(event) {
        this.modelViewer.cameraTarget = `auto auto auto`;
        if (!this.cameraIsDirty) {
            if (!this.modelViewer) {
                throw new Error("Model Viewer doesn't exist");
            }
            const rect = this.modelViewer.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const positionAndNormal = this.modelViewer.positionAndNormalFromPoint(x, y);
            this.requestUpdate();
            if (!positionAndNormal) {
                throw new Error("invalid click position");
            }
        }
        else
            this.cameraIsDirty = false;
    }
    cameraMoved() {
        this.cameraIsDirty = true;
    }
    saveAnnotations() {
        let blob = new Blob([JSON.stringify(this.annotations)], {
            type: "text/plain;charset=utf-8",
        }), url = window.URL.createObjectURL(blob);
        this.downloader.href = url;
        this.downloader.download = "annotations.json";
        this.downloader.click();
        window.URL.revokeObjectURL(url);
    }
    saveCameraOrbit() {
        // console.log(JSON.stringify(this.modelViewer.getCameraOrbit()));
        let blob = new Blob([JSON.stringify(this.modelViewer.getCameraOrbit())], {
            type: "text/plain;charset=utf-8",
        }), url = window.URL.createObjectURL(blob);
        this.downloader.href = url;
        this.downloader.download = "camera_orbit.json";
        this.downloader.click();
        window.URL.revokeObjectURL(url);
    }
    annotationClick(annotation) {
        // console.log(annotation);
        this.currentAnnotation = annotation;
        if (annotation == undefined)
            return;
        this.modelViewer.cameraTarget = `${annotation.position.x || "auto"}m ${annotation.position.y || "auto"}m ${annotation.position.z || "auto"}m`;
        this.modelViewer.cameraOrbit = `${annotation.cameraOrbit.theta}rad ${annotation.cameraOrbit.phi}rad ${annotation.cameraOrbit.radius}m`;
        this.requestUpdate();
    }
    no_model_msg() {
        return html `<div slot="poster" class="drag_drop_text unselectable">
      Drag and drop a model here!<br />
      <small class="unselectable">Add an HDR for environment</small>
    </div>`;
    }
    nav_label() {
        var _a;
        return html `<div class="label_nav grid-container">
      <div @click=${(e) => {
            this.previousAnnotaion();
            e.stopPropagation();
            e.preventDefault();
        }} class="round nav_arrow nav_prev unselectable">&#8249;</div>
      <div class="annotation_label unselectable nav_center">
        ${((_a = this.currentAnnotation) === null || _a === void 0 ? void 0 : _a.name) || "Select an annotion"}
        </div>
        <div @click=${(e) => {
            this.nextAnnotaion();
            e.stopPropagation();
            e.preventDefault();
        }} class="round nav_arrow nav_next unselectable">&#8250;</div>
      </div>
    </div>`;
    }
    nextAnnotaion() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.currentAnnotation == undefined) {
            this.annotationClick((_a = this.annotations) === null || _a === void 0 ? void 0 : _a.annotations[0]);
            (_e = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById("hotspot-" + ((_d = (_c = this.annotations) === null || _c === void 0 ? void 0 : _c.annotations[0]) === null || _d === void 0 ? void 0 : _d.name) || "rand")) === null || _e === void 0 ? void 0 : _e.focus();
        }
        else {
            if (this.annotations != undefined) {
                let index = this.annotations.annotations.indexOf(this.currentAnnotation);
                this.annotationClick(this.annotations.annotations[(index + 1) % this.annotations.annotations.length]);
                (_h = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.getElementById("hotspot-" + ((_g = this.currentAnnotation) === null || _g === void 0 ? void 0 : _g.name) || "rand")) === null || _h === void 0 ? void 0 : _h.focus();
            }
        }
    }
    previousAnnotaion() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.currentAnnotation == undefined) {
            this.annotationClick((_a = this.annotations) === null || _a === void 0 ? void 0 : _a.annotations[0]);
            (_e = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById("hotspot-" + ((_d = (_c = this.annotations) === null || _c === void 0 ? void 0 : _c.annotations[0]) === null || _d === void 0 ? void 0 : _d.name) || "rand")) === null || _e === void 0 ? void 0 : _e.focus();
        }
        else {
            if (this.annotations != undefined) {
                let index = this.annotations.annotations.indexOf(this.currentAnnotation);
                this.annotationClick(this.annotations.annotations[index - 1 < 0 ? this.annotations.annotations.length - 1 : index - 1]);
                (_h = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.getElementById("hotspot-" + ((_g = this.currentAnnotation) === null || _g === void 0 ? void 0 : _g.name) || "rand")) === null || _h === void 0 ? void 0 : _h.focus();
            }
        }
    }
    static get styles() {
        return styles;
    }
    returnString(str) {
        var frag = document.createRange().createContextualFragment(`${str}`);
        return frag;
    }
    getAnnotationDescription(annotation) {
        let text = annotation.descriptionFileName != undefined
            ? this.files.get(annotation.descriptionFileName)
            : annotation.description;
        return html `${(annotation.markdown || false) == true
            ? html `${this.returnString(Marked.parse(text || ""))}`
            : text}`;
    }
    render() {
        var _a, _b, _c, _d;
        return html `
      <a id="download"></a>
      <model-viewer
        style=${map_style}
        src=${this.src || ""}
        skybox-image=${this.skybox_image || ""}
        camera-controls
        @click="${this.handleClick},"
        @camera-change=${this.cameraMoved}
      >
        <style>
          ${(_b = (_a = this.annotations) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.map((i, index) => html ` button[slot="hotspot-${i.name || "random"}"] {
            background: ${i.fill_color || "#FFFFFFFF"}; }`)};
        </style>
        ${(_d = (_c = this.annotations) === null || _c === void 0 ? void 0 : _c.annotations) === null || _d === void 0 ? void 0 : _d.map((i, index) => html `<button
              id="hotspot-${i.name || "rand"}"
              @click=${(e) => {
            this.annotationClick(i);
            e.stopPropagation();
            e.preventDefault();
        }}
              slot="hotspot-${i.name || "rand"}"
              data-position="${i.position.x} ${i.position.y} ${i.position.z}"
              data-normal="${i.normal.x} ${i.normal.y} ${i.normal.z}"
              data-visibility-attribute="visible"
            >
              ${index + 1}
              <div class="HotspotAnnotation">
                <div class="annotation_description">
                  ${this.getAnnotationDescription(i)}
                </div>
              </div>
            </button>`)}
        ${this.src == undefined && this.annotations == undefined
            ? html ``
            : this.nav_label()}
        ${this.annotations == undefined && this.src == undefined
            ? this.no_model_msg()
            : html ``}
      </model-viewer>
    `;
    }
}
__decorate([
    query("model-viewer")
], HbllModelViewerElementBase.prototype, "modelViewer", void 0);
__decorate([
    query("a")
], HbllModelViewerElementBase.prototype, "downloader", void 0);
__decorate([
    property({ type: String })
], HbllModelViewerElementBase.prototype, "src", void 0);
__decorate([
    property({ type: String })
], HbllModelViewerElementBase.prototype, "annotation_src", void 0);
__decorate([
    property({ type: String })
], HbllModelViewerElementBase.prototype, "skybox_image", void 0);
__decorate([
    property()
], HbllModelViewerElementBase.prototype, "annotations", void 0);
__decorate([
    property()
], HbllModelViewerElementBase.prototype, "manifest_src", void 0);
__decorate([
    internalProperty()
], HbllModelViewerElementBase.prototype, "cameraIsDirty", void 0);
__decorate([
    internalProperty()
], HbllModelViewerElementBase.prototype, "currentAnnotation", void 0);
__decorate([
    internalProperty()
], HbllModelViewerElementBase.prototype, "buttonStyles", void 0);
__decorate([
    internalProperty()
], HbllModelViewerElementBase.prototype, "files", void 0);
__decorate([
    internalProperty()
], HbllModelViewerElementBase.prototype, "manifest", void 0);

const HbllModelViewerElement = HbllModelViewerElementBase;
customElements.define("hbll-model-viewer", HbllModelViewerElement);

export { HbllModelViewerElement };
//# sourceMappingURL=hbll-model-viewer.js.map
