import "@google/model-viewer";
import HbllModelViewerElementBase from "./hbll-model-viewer-base.js";

export const HbllModelViewerElement = HbllModelViewerElementBase;

export type HbllModelViewerElement = InstanceType<
  typeof HbllModelViewerElement
>;

customElements.define("hbll-model-viewer", HbllModelViewerElement);

declare global {
  interface HTMLElementTagNameMap {
    "hbll-model-viewer": HbllModelViewerElement;
  }
}
