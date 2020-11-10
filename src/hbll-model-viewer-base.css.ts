import { css, CSSResult } from "lit-element";
import "roboto-fontface";

export const styles: CSSResult = css`
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
`;