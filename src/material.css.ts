import { css, CSSResult } from "lit-element";

export const mat_styles: CSSResult = css`
  /**
* @license
* Copyright Google LLC All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
*/

  /* fallback */
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
      format("woff2");
  }

  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }

  .mdc-banner__text {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-banner__graphic {
    color: #fff;
    color: var(--mdc-theme-surface, #fff);
  }
  .mdc-banner__graphic {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-banner__graphic {
    border-radius: 50%;
  }
  .mdc-banner__content,
  .mdc-banner__fixed {
    min-width: 344px;
  }
  @media (max-width: 480px), (max-width: 344px) {
    .mdc-banner__content,
    .mdc-banner__fixed {
      min-width: 100%;
    }
  }
  .mdc-banner__content {
    max-width: 720px;
  }
  .mdc-banner {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    border-bottom-color: rgba(0, 0, 0, 0.12);
    z-index: 1;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-sizing: border-box;
    display: none;
    flex-shrink: 0;
    height: 0;
    position: relative;
    width: 100%;
  }
  .mdc-banner .mdc-banner__fixed {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-banner .mdc-banner__fixed {
    border-bottom-color: rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 480px) {
    .mdc-banner .mdc-banner__fixed {
      left: 0;
      right: 0;
    }
    .mdc-banner .mdc-banner__content {
      flex-wrap: wrap;
    }
    .mdc-banner .mdc-banner__graphic {
      margin-bottom: 12px;
    }
    .mdc-banner .mdc-banner__text {
      margin-left: 16px;
      margin-right: 8px;
      padding-bottom: 4px;
    }
    .mdc-banner .mdc-banner__actions {
      margin-left: auto;
    }
  }
  .mdc-banner--opening,
  .mdc-banner--open,
  .mdc-banner--closing {
    display: flex;
  }
  .mdc-banner--open {
    transition: height 300ms ease;
  }
  .mdc-banner--open .mdc-banner__content {
    transition: -webkit-transform 300ms ease;
    transition: transform 300ms ease;
    transition: transform 300ms ease, -webkit-transform 300ms ease;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .mdc-banner--closing {
    transition: height 250ms ease;
  }
  .mdc-banner--closing .mdc-banner__content {
    transition: -webkit-transform 250ms ease;
    transition: transform 250ms ease;
    transition: transform 250ms ease, -webkit-transform 250ms ease;
  }
  .mdc-banner--centered .mdc-banner__content {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    right: 0;
  }
  .mdc-banner__fixed {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-sizing: border-box;
    height: inherit;
    position: fixed;
    width: 100%;
  }
  .mdc-banner__content {
    display: flex;
    min-height: 52px;
    position: absolute;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    width: 100%;
  }
  .mdc-banner__graphic-text-wrapper {
    display: flex;
    width: 100%;
  }
  .mdc-banner__graphic {
    margin-left: 16px;
    margin-right: 0;
    flex-shrink: 0;
    height: 40px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    width: 40px;
  }
  [dir="rtl"] .mdc-banner__graphic,
  .mdc-banner__graphic[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-banner__icon {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .mdc-banner__text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    margin-left: 24px;
    margin-right: 90px;
    align-self: center;
    flex-grow: 1;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  [dir="rtl"] .mdc-banner__text,
  .mdc-banner__text[dir="rtl"] {
    margin-left: 90px;
    margin-right: 24px;
  }
  .mdc-banner__actions {
    padding-left: 0;
    padding-right: 8px;
    align-self: flex-end;
    display: flex;
    flex-shrink: 0;
    padding-bottom: 8px;
    padding-top: 8px;
  }
  [dir="rtl"] .mdc-banner__actions,
  .mdc-banner__actions[dir="rtl"] {
    padding-left: 8px;
    padding-right: 0;
  }
  .mdc-banner__primary-action:not(:disabled) {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-banner__primary-action::before,
  .mdc-banner__primary-action::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-banner__primary-action:hover::before {
    opacity: 0.04;
  }
  .mdc-banner__primary-action.mdc-ripple-upgraded--background-focused::before,
  .mdc-banner__primary-action:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-banner__primary-action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-banner__primary-action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-banner__primary-action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-banner__secondary-action {
    margin-left: 0;
    margin-right: 8px;
  }
  .mdc-banner__secondary-action:not(:disabled) {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-banner__secondary-action::before,
  .mdc-banner__secondary-action::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-banner__secondary-action:hover::before {
    opacity: 0.04;
  }
  .mdc-banner__secondary-action.mdc-ripple-upgraded--background-focused::before,
  .mdc-banner__secondary-action:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-banner__secondary-action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-banner__secondary-action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-banner__secondary-action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  [dir="rtl"] .mdc-banner__secondary-action,
  .mdc-banner__secondary-action[dir="rtl"] {
    margin-left: 8px;
    margin-right: 0;
  }
  .mdc-touch-target-wrapper {
    display: inline;
  }
  .mdc-elevation-overlay {
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    opacity: var(--mdc-elevation-overlay-opacity, 0);
    transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #fff;
    background-color: var(--mdc-elevation-overlay-color, #fff);
  }
  .mdc-button {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: 2.25rem;
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: 0.0892857143em;
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
    text-decoration: none;
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
    padding: 0 8px 0 8px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    border: none;
    outline: none;
    line-height: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    border-radius: 4px;
    border-radius: var(--mdc-shape-small, 4px);
    height: 36px;
  }
  .mdc-button .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  .mdc-button:active {
    outline: none;
  }
  .mdc-button:hover {
    cursor: pointer;
  }
  .mdc-button:disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-button .mdc-button__ripple {
    border-radius: 4px;
    border-radius: var(--mdc-shape-small, 4px);
  }
  .mdc-button:not(:disabled) {
    background-color: transparent;
  }
  .mdc-button:disabled {
    background-color: transparent;
  }
  .mdc-button .mdc-button__icon {
    margin-left: 0;
    margin-right: 8px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 18px;
    vertical-align: top;
  }
  [dir="rtl"] .mdc-button .mdc-button__icon,
  .mdc-button .mdc-button__icon[dir="rtl"] {
    margin-left: 8px;
    margin-right: 0;
  }
  .mdc-button .mdc-button__touch {
    position: absolute;
    top: 50%;
    right: 0;
    height: 48px;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .mdc-button:not(:disabled) {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-button:disabled {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-button__label + .mdc-button__icon {
    margin-left: 8px;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-button__label + .mdc-button__icon,
  .mdc-button__label + .mdc-button__icon[dir="rtl"] {
    margin-left: 0;
    margin-right: 8px;
  }
  svg.mdc-button__icon {
    fill: currentColor;
  }
  .mdc-button--raised .mdc-button__icon,
  .mdc-button--unelevated .mdc-button__icon,
  .mdc-button--outlined .mdc-button__icon {
    margin-left: -4px;
    margin-right: 8px;
  }
  [dir="rtl"] .mdc-button--raised .mdc-button__icon,
  .mdc-button--raised .mdc-button__icon[dir="rtl"],
  [dir="rtl"] .mdc-button--unelevated .mdc-button__icon,
  .mdc-button--unelevated .mdc-button__icon[dir="rtl"],
  [dir="rtl"] .mdc-button--outlined .mdc-button__icon,
  .mdc-button--outlined .mdc-button__icon[dir="rtl"] {
    margin-left: 8px;
    margin-right: -4px;
  }
  .mdc-button--raised .mdc-button__label + .mdc-button__icon,
  .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
  .mdc-button--outlined .mdc-button__label + .mdc-button__icon {
    margin-left: 8px;
    margin-right: -4px;
  }
  [dir="rtl"] .mdc-button--raised .mdc-button__label + .mdc-button__icon,
  .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir="rtl"],
  [dir="rtl"] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
  .mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir="rtl"],
  [dir="rtl"] .mdc-button--outlined .mdc-button__label + .mdc-button__icon,
  .mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir="rtl"] {
    margin-left: -4px;
    margin-right: 8px;
  }
  .mdc-button--raised,
  .mdc-button--unelevated {
    padding: 0 16px 0 16px;
  }
  .mdc-button--raised:not(:disabled),
  .mdc-button--unelevated:not(:disabled) {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-button--raised:not(:disabled),
  .mdc-button--unelevated:not(:disabled) {
    color: #fff;
    color: var(--mdc-theme-on-primary, #fff);
  }
  .mdc-button--raised:disabled,
  .mdc-button--unelevated:disabled {
    background-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-button--raised:disabled,
  .mdc-button--unelevated:disabled {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-button--raised {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-button--raised:hover,
  .mdc-button--raised:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-button--raised:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .mdc-button--raised:disabled {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
      0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-button--outlined {
    padding: 0 15px 0 15px;
    border-width: 1px;
    border-style: solid;
  }
  .mdc-button--outlined .mdc-button__ripple {
    top: -1px;
    left: -1px;
    border: 1px solid transparent;
  }
  .mdc-button--outlined .mdc-button__touch {
    left: -1px;
    width: calc(100% + 2 * 1px);
  }
  .mdc-button--outlined:not(:disabled) {
    border-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-button--outlined:disabled {
    border-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-button--touch {
    margin-top: 6px;
    margin-bottom: 6px;
  }
  @-webkit-keyframes mdc-ripple-fg-radius-in {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0))
        scale(1);
      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
        scale(var(--mdc-ripple-fg-scale, 1));
      transform: translate(var(--mdc-ripple-fg-translate-end, 0))
        scale(var(--mdc-ripple-fg-scale, 1));
    }
  }
  @keyframes mdc-ripple-fg-radius-in {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0))
        scale(1);
      transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
        scale(var(--mdc-ripple-fg-scale, 1));
      transform: translate(var(--mdc-ripple-fg-translate-end, 0))
        scale(var(--mdc-ripple-fg-scale, 1));
    }
  }
  @-webkit-keyframes mdc-ripple-fg-opacity-in {
    from {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      opacity: 0;
    }
    to {
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
  }
  @keyframes mdc-ripple-fg-opacity-in {
    from {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      opacity: 0;
    }
    to {
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
  }
  @-webkit-keyframes mdc-ripple-fg-opacity-out {
    from {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mdc-ripple-fg-opacity-out {
    from {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
      opacity: 0;
    }
  }
  .mdc-button {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-button .mdc-button__ripple::before,
  .mdc-button .mdc-button__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-button .mdc-button__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-button.mdc-ripple-upgraded--foreground-activation
    .mdc-button__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-button.mdc-ripple-upgraded--foreground-deactivation
    .mdc-button__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-button .mdc-button__ripple::before,
  .mdc-button .mdc-button__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-button .mdc-button__ripple::before,
  .mdc-button .mdc-button__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-button:hover .mdc-button__ripple::before {
    opacity: 0.04;
  }
  .mdc-button.mdc-ripple-upgraded--background-focused
    .mdc-button__ripple::before,
  .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-button .mdc-button__ripple {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .mdc-button:not(.mdc-button--outlined) .mdc-button__ripple {
    top: 0;
    left: 0;
  }
  .mdc-button--raised .mdc-button__ripple::before,
  .mdc-button--raised .mdc-button__ripple::after,
  .mdc-button--unelevated .mdc-button__ripple::before,
  .mdc-button--unelevated .mdc-button__ripple::after {
    background-color: #fff;
    background-color: var(--mdc-theme-on-primary, #fff);
  }
  .mdc-button--raised:hover .mdc-button__ripple::before,
  .mdc-button--unelevated:hover .mdc-button__ripple::before {
    opacity: 0.08;
  }
  .mdc-button--raised.mdc-ripple-upgraded--background-focused
    .mdc-button__ripple::before,
  .mdc-button--raised:not(.mdc-ripple-upgraded):focus
    .mdc-button__ripple::before,
  .mdc-button--unelevated.mdc-ripple-upgraded--background-focused
    .mdc-button__ripple::before,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus
    .mdc-button__ripple::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-button--raised:not(.mdc-ripple-upgraded):active
    .mdc-button__ripple::after,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded):active
    .mdc-button__ripple::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-button--raised.mdc-ripple-upgraded,
  .mdc-button--unelevated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-card {
    border-radius: 4px;
    border-radius: var(--mdc-shape-medium, 4px);
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    position: relative;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .mdc-card .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-card::after {
    border-radius: 4px;
    border-radius: var(--mdc-shape-medium, 4px);
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    content: "";
    pointer-events: none;
  }
  .mdc-card--outlined {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
      0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }
  .mdc-card--outlined::after {
    border: none;
  }
  .mdc-card__content {
    border-radius: inherit;
    height: 100%;
  }
  .mdc-card__media {
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .mdc-card__media::before {
    display: block;
    content: "";
  }
  .mdc-card__media:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .mdc-card__media:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  .mdc-card__media--square::before {
    margin-top: 100%;
  }
  .mdc-card__media--16-9::before {
    margin-top: 56.25%;
  }
  .mdc-card__media-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }
  .mdc-card__primary-action {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
  }
  .mdc-card__primary-action:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .mdc-card__primary-action:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  .mdc-card__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    min-height: 52px;
    padding: 8px;
  }
  .mdc-card__actions--full-bleed {
    padding: 0;
  }
  .mdc-card__action-buttons,
  .mdc-card__action-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }
  .mdc-card__action-icons {
    color: rgba(0, 0, 0, 0.6);
    flex-grow: 1;
    justify-content: flex-end;
  }
  .mdc-card__action-buttons + .mdc-card__action-icons {
    margin-left: 16px;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-card__action-buttons + .mdc-card__action-icons,
  .mdc-card__action-buttons + .mdc-card__action-icons[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-card__action {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mdc-card__action:focus {
    outline: none;
  }
  .mdc-card__action--button {
    margin-left: 0;
    margin-right: 8px;
    padding: 0 8px;
  }
  [dir="rtl"] .mdc-card__action--button,
  .mdc-card__action--button[dir="rtl"] {
    margin-left: 8px;
    margin-right: 0;
  }
  .mdc-card__action--button:last-child {
    margin-left: 0;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-card__action--button:last-child,
  .mdc-card__action--button:last-child[dir="rtl"] {
    margin-left: 0;
    margin-right: 0;
  }
  .mdc-card__actions--full-bleed .mdc-card__action--button {
    justify-content: space-between;
    width: 100%;
    height: auto;
    max-height: none;
    margin: 0;
    padding: 8px 16px;
    text-align: left;
  }
  [dir="rtl"] .mdc-card__actions--full-bleed .mdc-card__action--button,
  .mdc-card__actions--full-bleed .mdc-card__action--button[dir="rtl"] {
    text-align: right;
  }
  .mdc-card__action--icon {
    margin: -6px 0;
    padding: 12px;
  }
  .mdc-card__action--icon:not(:disabled) {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-card__primary-action {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-card__primary-action::before,
  .mdc-card__primary-action::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-card__primary-action::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-card__primary-action.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-card__primary-action::before,
  .mdc-card__primary-action::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-card__primary-action::before,
  .mdc-card__primary-action::after {
    background-color: #000;
  }
  .mdc-card__primary-action:hover::before {
    opacity: 0.04;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before,
  .mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-card__primary-action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-card__primary-action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-checkbox {
    padding: 11px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
  .mdc-checkbox .mdc-checkbox__ripple::before,
  .mdc-checkbox .mdc-checkbox__ripple::after {
    background-color: #000;
  }
  .mdc-checkbox:hover .mdc-checkbox__ripple::before {
    opacity: 0.04;
  }
  .mdc-checkbox.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-checkbox.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background::before,
  .mdc-checkbox
    .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background::before,
  .mdc-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background::before {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
  .mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before {
    opacity: 0.04;
  }
  .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus
    .mdc-checkbox__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)
    .mdc-checkbox__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active
    .mdc-checkbox__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::after {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-checkbox .mdc-checkbox__background {
    top: 11px;
    left: 11px;
  }
  .mdc-checkbox .mdc-checkbox__background::before {
    top: -13px;
    left: -13px;
    width: 40px;
    height: 40px;
  }
  .mdc-checkbox .mdc-checkbox__native-control {
    top: 0px;
    right: 0px;
    left: 0px;
    width: 40px;
    height: 40px;
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate="true"])
    ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.54);
    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
    background-color: transparent;
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background,
  .mdc-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]:enabled
    ~ .mdc-checkbox__background {
    border-color: #018786;
    border-color: var(
      --mdc-checkbox-checked-color,
      var(--mdc-theme-secondary, #018786)
    );
    background-color: #018786;
    background-color: var(
      --mdc-checkbox-checked-color,
      var(--mdc-theme-secondary, #018786)
    );
  }
  @-webkit-keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786 {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
    50% {
      border-color: #018786;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
      background-color: #018786;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
    }
  }
  @keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786 {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
    50% {
      border-color: #018786;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
      background-color: #018786;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
    }
  }
  @-webkit-keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786 {
    0%,
    80% {
      border-color: #018786;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
      background-color: #018786;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
  }
  @keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786 {
    0%,
    80% {
      border-color: #018786;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
      background-color: #018786;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #018786)
      );
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
  }
  .mdc-checkbox.mdc-checkbox--anim-unchecked-checked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786;
    animation-name: mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786;
  }
  .mdc-checkbox.mdc-checkbox--anim-checked-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786;
    animation-name: mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786;
  }
  .mdc-checkbox
    .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate="true"])
    ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.38);
    border-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));
    background-color: transparent;
  }
  .mdc-checkbox
    .mdc-checkbox__native-control[disabled]:checked
    ~ .mdc-checkbox__background,
  .mdc-checkbox
    .mdc-checkbox__native-control[disabled]:indeterminate
    ~ .mdc-checkbox__background,
  .mdc-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"][disabled]
    ~ .mdc-checkbox__background {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.38);
    background-color: var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark {
    color: #fff;
    color: var(--mdc-checkbox-ink-color, #fff);
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background
    .mdc-checkbox__mixedmark {
    border-color: #fff;
    border-color: var(--mdc-checkbox-ink-color, #fff);
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:disabled
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark {
    color: #fff;
    color: var(--mdc-checkbox-ink-color, #fff);
  }
  .mdc-checkbox
    .mdc-checkbox__native-control:disabled
    ~ .mdc-checkbox__background
    .mdc-checkbox__mixedmark {
    border-color: #fff;
    border-color: var(--mdc-checkbox-ink-color, #fff);
  }
  @-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path {
    0%,
    50% {
      stroke-dashoffset: 29.7833385;
    }
    50% {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes mdc-checkbox-unchecked-checked-checkmark-path {
    0%,
    50% {
      stroke-dashoffset: 29.7833385;
    }
    50% {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
    0%,
    68.2% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    68.2% {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);
      animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
    0%,
    68.2% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    68.2% {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0, 1);
      animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
      animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
      opacity: 1;
      stroke-dashoffset: 0;
    }
    to {
      opacity: 0;
      stroke-dashoffset: -29.7833385;
    }
  }
  @keyframes mdc-checkbox-checked-unchecked-checkmark-path {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
      animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
      opacity: 1;
      stroke-dashoffset: 0;
    }
    to {
      opacity: 0;
      stroke-dashoffset: -29.7833385;
    }
  }
  @-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes mdc-checkbox-checked-indeterminate-checkmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      opacity: 1;
    }
  }
  @keyframes mdc-checkbox-indeterminate-checked-checkmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      opacity: 1;
    }
  }
  @-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark {
    from {
      -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;
      animation-timing-function: mdc-animation-deceleration-curve-timing-function;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes mdc-checkbox-checked-indeterminate-mixedmark {
    from {
      -webkit-animation-timing-function: mdc-animation-deceleration-curve-timing-function;
      animation-timing-function: mdc-animation-deceleration-curve-timing-function;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      opacity: 0;
    }
    to {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
  }
  @-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
      opacity: 0;
    }
  }
  @keyframes mdc-checkbox-indeterminate-checked-mixedmark {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      -webkit-transform: rotate(315deg);
      transform: rotate(315deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
    0% {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
    32.8%,
    100% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 0;
    }
  }
  @keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
    0% {
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
    32.8%,
    100% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 0;
    }
  }
  .mdc-checkbox {
    display: inline-block;
    position: relative;
    flex: 0 0 18px;
    box-sizing: content-box;
    width: 18px;
    height: 18px;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: bottom;
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate="true"])
      ~ .mdc-checkbox__background {
      border-color: GrayText;
      border-color: var(--mdc-checkbox-disabled-color, GrayText);
      background-color: transparent;
    }
    .mdc-checkbox__native-control[disabled]:checked ~ .mdc-checkbox__background,
    .mdc-checkbox__native-control[disabled]:indeterminate
      ~ .mdc-checkbox__background,
    .mdc-checkbox__native-control[data-indeterminate="true"][disabled]
      ~ .mdc-checkbox__background {
      border-color: GrayText;
      background-color: transparent;
      background-color: var(--mdc-checkbox-disabled-color, transparent);
    }
    .mdc-checkbox__native-control:disabled
      ~ .mdc-checkbox__background
      .mdc-checkbox__checkmark {
      color: GrayText;
      color: var(--mdc-checkbox-ink-color, GrayText);
    }
    .mdc-checkbox__native-control:disabled
      ~ .mdc-checkbox__background
      .mdc-checkbox__mixedmark {
      border-color: GrayText;
      border-color: var(--mdc-checkbox-ink-color, GrayText);
    }
    .mdc-checkbox__mixedmark {
      margin: 0 1px;
    }
  }
  .mdc-checkbox--disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-checkbox__background {
    display: inline-flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: 2px solid currentColor;
    border-radius: 2px;
    background-color: transparent;
    pointer-events: none;
    will-change: background-color, border-color;
    transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-checkbox__background .mdc-checkbox__background::before {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-checkbox__checkmark {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-checkbox--upgraded .mdc-checkbox__checkmark {
    opacity: 1;
  }
  .mdc-checkbox__checkmark-path {
    transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    stroke: currentColor;
    stroke-width: 3.12px;
    stroke-dashoffset: 29.7833385;
    stroke-dasharray: 29.7833385;
  }
  .mdc-checkbox__mixedmark {
    width: 100%;
    height: 0;
    -webkit-transform: scaleX(0) rotate(0deg);
    transform: scaleX(0) rotate(0deg);
    border-width: 1px;
    border-style: solid;
    opacity: 0;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
  .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
  .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
  .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
    -webkit-animation-duration: 180ms;
    animation-duration: 180ms;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
    -webkit-animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms
      linear 0s;
    animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms
      linear 0s;
    animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
    -webkit-animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear
      0s;
    animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
    -webkit-animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear
      0s;
    animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear
      0s;
    animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
    -webkit-animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear
      0s;
    animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear
      0s;
    animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;
    transition: none;
  }
  .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
    -webkit-animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms
      linear 0s;
    animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;
    transition: none;
  }
  .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background {
    transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),
      background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark-path,
  .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark-path,
  .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark-path {
    stroke-dashoffset: 0;
  }
  .mdc-checkbox__background::before {
    position: absolute;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    will-change: opacity, transform;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.12;
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-checkbox__native-control {
    position: absolute;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
  }
  .mdc-checkbox__native-control:disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-checkbox--touch {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    margin-left: 4px;
  }
  .mdc-checkbox--touch .mdc-checkbox__native-control {
    top: -4px;
    right: -4px;
    left: -4px;
    width: 48px;
    height: 48px;
  }
  .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark {
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);
    opacity: 1;
  }
  .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background
    .mdc-checkbox__mixedmark {
    -webkit-transform: scaleX(1) rotate(-45deg);
    transform: scaleX(1) rotate(-45deg);
  }
  .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark,
  .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background
    .mdc-checkbox__mixedmark,
  .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background
    .mdc-checkbox__mixedmark {
    -webkit-transform: scaleX(1) rotate(0deg);
    transform: scaleX(1) rotate(0deg);
    opacity: 1;
  }
  .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,
  .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,
  .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,
  .mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {
    transition: none;
  }
  .mdc-checkbox {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    z-index: 0;
  }
  .mdc-checkbox .mdc-checkbox__ripple::before,
  .mdc-checkbox .mdc-checkbox__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-checkbox .mdc-checkbox__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-checkbox.mdc-ripple-upgraded--foreground-activation
    .mdc-checkbox__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation
    .mdc-checkbox__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-checkbox .mdc-checkbox__ripple::before,
  .mdc-checkbox .mdc-checkbox__ripple::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,
  .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-checkbox .mdc-checkbox__ripple::before,
  .mdc-checkbox .mdc-checkbox__ripple::after {
    z-index: -1;
  }
  .mdc-checkbox__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before {
    content: none;
  }
  .mdc-chip-trailing-action__touch {
    position: absolute;
    top: 50%;
    right: 0;
    height: 48px;
    left: 50%;
    width: 48px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .mdc-chip-trailing-action {
    border: none;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
    background: none;
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__icon {
    height: 18px;
    width: 18px;
    font-size: 18px;
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__touch {
    width: 26px;
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__icon {
    fill: currentColor;
    color: inherit;
  }
  .mdc-chip-trailing-action {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::before,
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded
    .mdc-chip-trailing-action__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded
    .mdc-chip-trailing-action__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded--unbounded
    .mdc-chip-trailing-action__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded--foreground-activation
    .mdc-chip-trailing-action__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded--foreground-deactivation
    .mdc-chip-trailing-action__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::before,
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded
    .mdc-chip-trailing-action__ripple::before,
  .mdc-chip-trailing-action.mdc-ripple-upgraded
    .mdc-chip-trailing-action__ripple::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded
    .mdc-chip-trailing-action__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::before,
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple::after {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-chip-trailing-action:hover .mdc-chip-trailing-action__ripple::before {
    opacity: 0.04;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded--background-focused
    .mdc-chip-trailing-action__ripple::before,
  .mdc-chip-trailing-action:not(.mdc-ripple-upgraded):focus
    .mdc-chip-trailing-action__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-chip-trailing-action:not(.mdc-ripple-upgraded)
    .mdc-chip-trailing-action__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-chip-trailing-action:not(.mdc-ripple-upgraded):active
    .mdc-chip-trailing-action__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-chip-trailing-action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-chip-trailing-action .mdc-chip-trailing-action__ripple {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .mdc-chip__icon--leading {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-chip-trailing-action {
    color: #000;
  }
  .mdc-chip__icon--trailing {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-chip__icon--trailing:hover {
    color: rgba(0, 0, 0, 0.62);
  }
  .mdc-chip__icon--trailing:focus {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
  .mdc-chip-trailing-action__icon {
    height: 18px;
    width: 18px;
    font-size: 18px;
  }
  .mdc-chip__icon.mdc-chip__icon--trailing {
    width: 18px;
    height: 18px;
    font-size: 18px;
  }
  .mdc-chip-trailing-action {
    margin-left: 4px;
    margin-right: -4px;
  }
  [dir="rtl"] .mdc-chip-trailing-action,
  .mdc-chip-trailing-action[dir="rtl"] {
    margin-left: -4px;
    margin-right: 4px;
  }
  .mdc-chip__icon--trailing {
    margin-left: 4px;
    margin-right: -4px;
  }
  [dir="rtl"] .mdc-chip__icon--trailing,
  .mdc-chip__icon--trailing[dir="rtl"] {
    margin-left: -4px;
    margin-right: 4px;
  }
  .mdc-chip {
    border-radius: 16px;
    background-color: #e0e0e0;
    color: rgba(0, 0, 0, 0.87);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    height: 32px;
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 12px;
    border-width: 0;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
  }
  .mdc-chip .mdc-chip__ripple {
    border-radius: 16px;
  }
  .mdc-chip:hover {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,
  .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
    margin-left: -4px;
    margin-right: 4px;
  }
  [dir="rtl"] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,
  .mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir="rtl"],
  [dir="rtl"]
    .mdc-chip
    .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),
  .mdc-chip
    .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir="rtl"] {
    margin-left: 4px;
    margin-right: -4px;
  }
  .mdc-chip .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-chip::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  .mdc-chip:hover {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-chip .mdc-chip__touch {
    position: absolute;
    top: 50%;
    right: 0;
    height: 48px;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .mdc-chip--exit {
    transition: opacity 75ms cubic-bezier(0.4, 0, 0.2, 1),
      width 150ms cubic-bezier(0, 0, 0.2, 1), padding 100ms linear,
      margin 100ms linear;
    opacity: 0;
  }
  .mdc-chip__overflow {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mdc-chip__text {
    white-space: nowrap;
  }
  .mdc-chip__icon {
    border-radius: 50%;
    outline: none;
    vertical-align: middle;
  }
  .mdc-chip__checkmark {
    height: 20px;
  }
  .mdc-chip__checkmark-path {
    transition: stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);
    stroke-width: 2px;
    stroke-dashoffset: 29.7833385;
    stroke-dasharray: 29.7833385;
  }
  .mdc-chip__primary-action:focus {
    outline: none;
  }
  .mdc-chip--selected .mdc-chip__checkmark-path {
    stroke-dashoffset: 0;
  }
  .mdc-chip__icon--leading,
  .mdc-chip__icon--trailing {
    position: relative;
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {
    color: rgba(98, 0, 238, 0.54);
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path {
    stroke: #6200ee;
    stroke: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-chip-set--choice .mdc-chip--selected {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-chip__checkmark-svg {
    width: 0;
    height: 20px;
    transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-chip--selected .mdc-chip__checkmark-svg {
    width: 20px;
  }
  .mdc-chip-set--filter .mdc-chip__icon--leading {
    transition: opacity 75ms linear;
    transition-delay: -50ms;
    opacity: 1;
  }
  .mdc-chip-set--filter .mdc-chip__icon--leading + .mdc-chip__checkmark {
    transition: opacity 75ms linear;
    transition-delay: 80ms;
    opacity: 0;
  }
  .mdc-chip-set--filter
    .mdc-chip__icon--leading
    + .mdc-chip__checkmark
    .mdc-chip__checkmark-svg {
    transition: width 0ms;
  }
  .mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading {
    opacity: 0;
  }
  .mdc-chip-set--filter
    .mdc-chip--selected
    .mdc-chip__icon--leading
    + .mdc-chip__checkmark {
    width: 0;
    opacity: 1;
  }
  .mdc-chip-set--filter
    .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading {
    width: 0;
    opacity: 0;
  }
  .mdc-chip-set--filter
    .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading
    + .mdc-chip__checkmark {
    width: 20px;
  }
  .mdc-chip {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-chip .mdc-chip__ripple::before,
  .mdc-chip .mdc-chip__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-chip .mdc-chip__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-chip.mdc-ripple-upgraded--foreground-activation
    .mdc-chip__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-chip.mdc-ripple-upgraded--foreground-deactivation
    .mdc-chip__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-chip .mdc-chip__ripple::before,
  .mdc-chip .mdc-chip__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-chip .mdc-chip__ripple::before,
  .mdc-chip .mdc-chip__ripple::after {
    background-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-chip:hover .mdc-chip__ripple::before {
    opacity: 0.04;
  }
  .mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple::before,
  .mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple::before,
  .mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple::before,
  .mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-chip.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-chip .mdc-chip__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before {
    opacity: 0.08;
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::before,
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected:hover
    .mdc-chip__ripple::before {
    opacity: 0.12;
  }
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused
    .mdc-chip__ripple::before,
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within
    .mdc-chip__ripple::before,
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus
    .mdc-chip__ripple::before,
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within
    .mdc-chip__ripple::before {
    transition-duration: 75ms;
    opacity: 0.2;
  }
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded)
    .mdc-chip__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-chip-set--choice
    .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active
    .mdc-chip__ripple::after {
    transition-duration: 75ms;
    opacity: 0.2;
  }
  .mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.2;
  }
  @-webkit-keyframes mdc-chip-entry {
    from {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.4;
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes mdc-chip-entry {
    from {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.4;
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  .mdc-chip-set {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .mdc-chip-set .mdc-chip {
    margin: 4px;
  }
  .mdc-chip-set .mdc-chip--touch {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .mdc-chip-set--input .mdc-chip {
    -webkit-animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);
    animation: mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-circular-progress__determinate-circle,
  .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: #6200ee;
    stroke: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-circular-progress__determinate-track {
    stroke: transparent;
  }
  @-webkit-keyframes mdc-circular-progress-container-rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes mdc-circular-progress-container-rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes mdc-circular-progress-spinner-layer-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    25% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    37.5% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
    50% {
      -webkit-transform: rotate(540deg);
      transform: rotate(540deg);
    }
    62.5% {
      -webkit-transform: rotate(675deg);
      transform: rotate(675deg);
    }
    75% {
      -webkit-transform: rotate(810deg);
      transform: rotate(810deg);
    }
    87.5% {
      -webkit-transform: rotate(945deg);
      transform: rotate(945deg);
    }
    100% {
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
    }
  }
  @keyframes mdc-circular-progress-spinner-layer-rotate {
    12.5% {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    25% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    37.5% {
      -webkit-transform: rotate(405deg);
      transform: rotate(405deg);
    }
    50% {
      -webkit-transform: rotate(540deg);
      transform: rotate(540deg);
    }
    62.5% {
      -webkit-transform: rotate(675deg);
      transform: rotate(675deg);
    }
    75% {
      -webkit-transform: rotate(810deg);
      transform: rotate(810deg);
    }
    87.5% {
      -webkit-transform: rotate(945deg);
      transform: rotate(945deg);
    }
    100% {
      -webkit-transform: rotate(1080deg);
      transform: rotate(1080deg);
    }
  }
  @-webkit-keyframes mdc-circular-progress-color-1-fade-in-out {
    from {
      opacity: 0.99;
    }
    25% {
      opacity: 0.99;
    }
    26% {
      opacity: 0;
    }
    89% {
      opacity: 0;
    }
    90% {
      opacity: 0.99;
    }
    to {
      opacity: 0.99;
    }
  }
  @keyframes mdc-circular-progress-color-1-fade-in-out {
    from {
      opacity: 0.99;
    }
    25% {
      opacity: 0.99;
    }
    26% {
      opacity: 0;
    }
    89% {
      opacity: 0;
    }
    90% {
      opacity: 0.99;
    }
    to {
      opacity: 0.99;
    }
  }
  @-webkit-keyframes mdc-circular-progress-color-2-fade-in-out {
    from {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    25% {
      opacity: 0.99;
    }
    50% {
      opacity: 0.99;
    }
    51% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mdc-circular-progress-color-2-fade-in-out {
    from {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    25% {
      opacity: 0.99;
    }
    50% {
      opacity: 0.99;
    }
    51% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes mdc-circular-progress-color-3-fade-in-out {
    from {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 0.99;
    }
    75% {
      opacity: 0.99;
    }
    76% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mdc-circular-progress-color-3-fade-in-out {
    from {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 0.99;
    }
    75% {
      opacity: 0.99;
    }
    76% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes mdc-circular-progress-color-4-fade-in-out {
    from {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    75% {
      opacity: 0.99;
    }
    90% {
      opacity: 0.99;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mdc-circular-progress-color-4-fade-in-out {
    from {
      opacity: 0;
    }
    65% {
      opacity: 0;
    }
    75% {
      opacity: 0.99;
    }
    90% {
      opacity: 0.99;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes mdc-circular-progress-left-spin {
    from {
      -webkit-transform: rotate(265deg);
      transform: rotate(265deg);
    }
    50% {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
    to {
      -webkit-transform: rotate(265deg);
      transform: rotate(265deg);
    }
  }
  @keyframes mdc-circular-progress-left-spin {
    from {
      -webkit-transform: rotate(265deg);
      transform: rotate(265deg);
    }
    50% {
      -webkit-transform: rotate(130deg);
      transform: rotate(130deg);
    }
    to {
      -webkit-transform: rotate(265deg);
      transform: rotate(265deg);
    }
  }
  @-webkit-keyframes mdc-circular-progress-right-spin {
    from {
      -webkit-transform: rotate(-265deg);
      transform: rotate(-265deg);
    }
    50% {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
    to {
      -webkit-transform: rotate(-265deg);
      transform: rotate(-265deg);
    }
  }
  @keyframes mdc-circular-progress-right-spin {
    from {
      -webkit-transform: rotate(-265deg);
      transform: rotate(-265deg);
    }
    50% {
      -webkit-transform: rotate(-130deg);
      transform: rotate(-130deg);
    }
    to {
      -webkit-transform: rotate(-265deg);
      transform: rotate(-265deg);
    }
  }
  .mdc-circular-progress {
    display: inline-flex;
    position: relative;
    direction: ltr;
    transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-circular-progress__determinate-container,
  .mdc-circular-progress__indeterminate-circle-graphic,
  .mdc-circular-progress__indeterminate-container,
  .mdc-circular-progress__spinner-layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mdc-circular-progress__determinate-container {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .mdc-circular-progress__indeterminate-container {
    opacity: 0;
  }
  .mdc-circular-progress__determinate-circle-graphic,
  .mdc-circular-progress__indeterminate-circle-graphic {
    fill: transparent;
  }
  .mdc-circular-progress__determinate-circle {
    transition: stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-circular-progress__gap-patch {
    position: absolute;
    top: 0;
    left: 47.5%;
    box-sizing: border-box;
    width: 5%;
    height: 100%;
    overflow: hidden;
  }
  .mdc-circular-progress__gap-patch
    .mdc-circular-progress__indeterminate-circle-graphic {
    left: -900%;
    width: 2000%;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .mdc-circular-progress__circle-clipper {
    display: inline-flex;
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .mdc-circular-progress__circle-clipper
    .mdc-circular-progress__indeterminate-circle-graphic {
    width: 200%;
  }
  .mdc-circular-progress__circle-right
    .mdc-circular-progress__indeterminate-circle-graphic {
    left: -100%;
  }
  .mdc-circular-progress--indeterminate
    .mdc-circular-progress__determinate-container {
    opacity: 0;
  }
  .mdc-circular-progress--indeterminate
    .mdc-circular-progress__indeterminate-container {
    opacity: 1;
  }
  .mdc-circular-progress--indeterminate
    .mdc-circular-progress__indeterminate-container {
    -webkit-animation: mdc-circular-progress-container-rotate 1568.2352941176ms
      linear infinite;
    animation: mdc-circular-progress-container-rotate 1568.2352941176ms linear
      infinite;
  }
  .mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
    -webkit-animation: mdc-circular-progress-spinner-layer-rotate 5332ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-spinner-layer-rotate 5332ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate .mdc-circular-progress__color-1 {
    -webkit-animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-1-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-1-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate .mdc-circular-progress__color-2 {
    -webkit-animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-2-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-2-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate .mdc-circular-progress__color-3 {
    -webkit-animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-3-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-3-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate .mdc-circular-progress__color-4 {
    -webkit-animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-4-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-spinner-layer-rotate 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both,
      mdc-circular-progress-color-4-fade-in-out 5332ms
        cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate
    .mdc-circular-progress__circle-left
    .mdc-circular-progress__indeterminate-circle-graphic {
    -webkit-animation: mdc-circular-progress-left-spin 1333ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-left-spin 1333ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--indeterminate
    .mdc-circular-progress__circle-right
    .mdc-circular-progress__indeterminate-circle-graphic {
    -webkit-animation: mdc-circular-progress-right-spin 1333ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: mdc-circular-progress-right-spin 1333ms
      cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  }
  .mdc-circular-progress--closed {
    opacity: 0;
  }
  .mdc-data-table__content {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
  }
  .mdc-data-table {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    border-radius: 4px;
    border-radius: var(--mdc-shape-medium, 4px);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    -webkit-overflow-scrolling: touch;
    display: inline-flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
  }
  .mdc-data-table .mdc-data-table__header-cell:first-child {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-medium, 4px);
  }
  [dir="rtl"] .mdc-data-table .mdc-data-table__header-cell:first-child,
  .mdc-data-table .mdc-data-table__header-cell:first-child[dir="rtl"] {
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-medium, 4px);
    border-top-left-radius: 0;
  }
  .mdc-data-table .mdc-data-table__header-cell:last-child {
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-medium, 4px);
  }
  [dir="rtl"] .mdc-data-table .mdc-data-table__header-cell:last-child,
  .mdc-data-table .mdc-data-table__header-cell:last-child[dir="rtl"] {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-medium, 4px);
    border-top-right-radius: 0;
  }
  .mdc-data-table__row {
    background-color: inherit;
  }
  .mdc-data-table__header-cell {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-data-table__row--selected {
    background-color: rgba(98, 0, 238, 0.04);
  }
  .mdc-data-table__header-cell:after {
    border-bottom-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled)
    .mdc-notched-outline__leading,
  .mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled)
    .mdc-notched-outline__notch,
  .mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled)
    .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-data-table__row,
  .mdc-data-table__pagination {
    border-top-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-data-table__header-cell:after {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .mdc-data-table__row,
  .mdc-data-table__pagination {
    border-top-width: 1px;
    border-top-style: solid;
  }
  .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .mdc-data-table__header-cell {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-data-table__pagination-total,
  .mdc-data-table__pagination-rows-per-page-label,
  .mdc-data-table__cell {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-data-table__cell {
    height: 52px;
  }
  .mdc-data-table__pagination {
    min-height: 52px;
  }
  .mdc-data-table__header-cell {
    height: 56px;
  }
  .mdc-data-table__cell,
  .mdc-data-table__header-cell {
    padding-right: 16px;
    padding-left: 16px;
  }
  .mdc-data-table__header-cell--checkbox,
  .mdc-data-table__cell--checkbox {
    padding-left: 4px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-data-table__header-cell--checkbox,
  .mdc-data-table__header-cell--checkbox[dir="rtl"],
  [dir="rtl"] .mdc-data-table__cell--checkbox,
  .mdc-data-table__cell--checkbox[dir="rtl"] {
    padding-left: 0;
    padding-right: 4px;
  }
  .mdc-data-table__sort-icon-button {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-data-table__sort-icon-button::before,
  .mdc-data-table__sort-icon-button::after {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mdc-data-table__sort-icon-button:hover::before {
    opacity: 0.04;
  }
  .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before,
  .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__sort-icon-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button::before,
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button::after {
    background-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button:hover::before {
    opacity: 0.04;
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before,
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-cell--sorted
    .mdc-data-table__sort-icon-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-data-table__table-container {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    width: 100%;
  }
  .mdc-data-table__table {
    min-width: 100%;
    border: 0;
    white-space: nowrap;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .mdc-data-table__cell {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    box-sizing: border-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
  }
  [dir="rtl"] .mdc-data-table__cell,
  .mdc-data-table__cell[dir="rtl"] {
    text-align: right;
  }
  .mdc-data-table__cell--numeric {
    text-align: right;
  }
  [dir="rtl"] .mdc-data-table__cell--numeric,
  .mdc-data-table__cell--numeric[dir="rtl"] {
    text-align: left;
  }
  .mdc-data-table__cell--checkbox {
    width: 1px;
  }
  .mdc-data-table__header-cell {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
    line-height: 1.375rem;
    line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
    letter-spacing: 0.0071428571em;
    letter-spacing: var(
      --mdc-typography-subtitle2-letter-spacing,
      0.0071428571em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    outline: none;
    text-align: left;
  }
  [dir="rtl"] .mdc-data-table__header-cell,
  .mdc-data-table__header-cell[dir="rtl"] {
    text-align: right;
  }
  .mdc-data-table__header-cell--checkbox {
    width: 1px;
  }
  .mdc-data-table__header-cell--numeric {
    text-align: right;
  }
  [dir="rtl"] .mdc-data-table__header-cell--numeric,
  .mdc-data-table__header-cell--numeric[dir="rtl"] {
    text-align: left;
  }
  .mdc-data-table__sort-icon-button {
    width: 28px;
    height: 28px;
    padding: 2px;
    -webkit-transform: rotate(0.0001deg);
    transform: rotate(0.0001deg);
    margin-left: 4px;
    margin-right: 0;
    transition: -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
  [dir="rtl"] .mdc-data-table__sort-icon-button,
  .mdc-data-table__sort-icon-button[dir="rtl"] {
    margin-left: 0;
    margin-right: 4px;
  }
  .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button {
    margin-left: 0;
    margin-right: 4px;
  }
  [dir="rtl"]
    .mdc-data-table__header-cell--numeric
    .mdc-data-table__sort-icon-button,
  .mdc-data-table__header-cell--numeric
    .mdc-data-table__sort-icon-button[dir="rtl"] {
    margin-left: 4px;
    margin-right: 0;
  }
  .mdc-data-table__header-cell--sorted-descending
    .mdc-data-table__sort-icon-button {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
  .mdc-data-table__sort-icon-button:focus,
  .mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,
  .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {
    opacity: 1;
  }
  .mdc-data-table__header-cell-wrapper {
    align-items: center;
    display: inline-flex;
    vertical-align: middle;
  }
  .mdc-data-table__header-cell--with-sort {
    cursor: pointer;
  }
  .mdc-data-table__sort-status-label {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .mdc-data-table__progress-indicator {
    display: none;
    position: absolute;
    width: 100%;
  }
  .mdc-data-table--in-progress .mdc-data-table__progress-indicator {
    display: block;
  }
  .mdc-data-table__scrim {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    height: 100%;
    opacity: 0.32;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .mdc-data-table--sticky-header .mdc-data-table__header-cell {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .mdc-data-table--sticky-header .mdc-data-table__header-cell:after {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    width: 100%;
  }
  .mdc-data-table--sticky-header .mdc-data-table__row:first-child {
    border-top: 0;
  }
  .mdc-data-table__pagination {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
  }
  .mdc-data-table__pagination-trailing {
    margin-left: 4px;
    margin-right: 0;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  [dir="rtl"] .mdc-data-table__pagination-trailing,
  .mdc-data-table__pagination-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 4px;
  }
  .mdc-data-table__pagination-navigation {
    align-items: center;
    display: flex;
  }
  .mdc-data-table__pagination-button {
    margin-left: 0;
    margin-right: 4px;
  }
  [dir="rtl"] .mdc-data-table__pagination-button .mdc-button__icon,
  .mdc-data-table__pagination-button .mdc-button__icon[dir="rtl"] {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  [dir="rtl"] .mdc-data-table__pagination-button,
  .mdc-data-table__pagination-button[dir="rtl"] {
    margin-left: 4px;
    margin-right: 0;
  }
  .mdc-data-table__pagination-total {
    margin-left: 14px;
    margin-right: 36px;
    white-space: nowrap;
  }
  [dir="rtl"] .mdc-data-table__pagination-total,
  .mdc-data-table__pagination-total[dir="rtl"] {
    margin-left: 36px;
    margin-right: 14px;
  }
  .mdc-data-table__pagination-rows-per-page {
    margin-left: 0;
    margin-right: 22px;
    align-items: center;
    display: inline-flex;
  }
  [dir="rtl"] .mdc-data-table__pagination-rows-per-page,
  .mdc-data-table__pagination-rows-per-page[dir="rtl"] {
    margin-left: 22px;
    margin-right: 0;
  }
  .mdc-data-table__pagination-rows-per-page-label {
    margin-left: 0;
    margin-right: 12px;
    white-space: nowrap;
  }
  [dir="rtl"] .mdc-data-table__pagination-rows-per-page-label,
  .mdc-data-table__pagination-rows-per-page-label[dir="rtl"] {
    margin-left: 12px;
    margin-right: 0;
  }
  .mdc-data-table__pagination-rows-per-page-select {
    width: 80px;
    min-width: 80px;
    margin: 8px 0;
  }
  .mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor {
    height: 36px;
  }
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-27.25px) scale(1);
    transform: translateY(-27.25px) scale(1);
  }
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor
    .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-24.75px) scale(0.75);
    transform: translateY(-24.75px) scale(0.75);
  }
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-data-table__pagination-rows-per-page-select
    .mdc-select__anchor
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-36px
      250ms 1;
    animation: mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-36px {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-select-outlined-36px {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
  }
  .mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon {
    width: 20px;
    height: 20px;
  }
  .mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined
    .mdc-select__anchor
    :not(.mdc-notched-outline--notched)
    .mdc-notched-outline__notch {
    max-width: calc(100% - 56px);
  }
  .mdc-data-table__pagination-rows-per-page-select .mdc-list-item {
    height: 36px;
  }
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]
    ~ .mdc-checkbox__background::before {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected
    .mdc-checkbox__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:hover
    .mdc-checkbox__ripple::before {
    opacity: 0.04;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus
    .mdc-checkbox__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)
    .mdc-checkbox__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active
    .mdc-checkbox__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate="true"])
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate="true"])
    ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.54);
    border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
    background-color: transparent;
  }
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control[data-indeterminate="true"]:enabled
    ~ .mdc-checkbox__background {
    border-color: #6200ee;
    border-color: var(
      --mdc-checkbox-checked-color,
      var(--mdc-theme-secondary, #6200ee)
    );
    background-color: #6200ee;
    background-color: var(
      --mdc-checkbox-checked-color,
      var(--mdc-theme-secondary, #6200ee)
    );
  }
  @-webkit-keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
    50% {
      border-color: #6200ee;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
      background-color: #6200ee;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
    }
  }
  @keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
    50% {
      border-color: #6200ee;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
      background-color: #6200ee;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
    }
  }
  @-webkit-keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE {
    0%,
    80% {
      border-color: #6200ee;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
      background-color: #6200ee;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
  }
  @keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE {
    0%,
    80% {
      border-color: #6200ee;
      border-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
      background-color: #6200ee;
      background-color: var(
        --mdc-checkbox-checked-color,
        var(--mdc-theme-secondary, #6200ee)
      );
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      border-color: var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));
      background-color: transparent;
    }
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE;
    animation-name: mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE;
    animation-name: mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE;
  }
  .mdc-dialog,
  .mdc-dialog__scrim {
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .mdc-dialog {
    display: none;
    z-index: 7;
  }
  .mdc-dialog .mdc-dialog__surface {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-dialog .mdc-dialog__scrim {
    background-color: rgba(0, 0, 0, 0.32);
  }
  .mdc-dialog .mdc-dialog__title {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-dialog .mdc-dialog__content {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,
  .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions {
    border-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-dialog .mdc-dialog__content {
    padding: 20px 24px 20px 24px;
  }
  .mdc-dialog .mdc-dialog__surface {
    min-width: 280px;
  }
  @media (max-width: 592px) {
    .mdc-dialog .mdc-dialog__surface {
      max-width: calc(100vw - 32px);
    }
  }
  @media (min-width: 592px) {
    .mdc-dialog .mdc-dialog__surface {
      max-width: 560px;
    }
  }
  .mdc-dialog .mdc-dialog__surface {
    max-height: calc(100% - 32px);
  }
  .mdc-dialog .mdc-dialog__surface {
    border-radius: 4px;
    border-radius: var(--mdc-shape-medium, 4px);
  }
  .mdc-dialog__scrim {
    opacity: 0;
    z-index: -1;
  }
  .mdc-dialog__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
    pointer-events: none;
  }
  .mdc-dialog__surface {
    position: relative;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    pointer-events: auto;
    overflow-y: auto;
  }
  .mdc-dialog__surface .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-dialog[dir="rtl"] .mdc-dialog__surface,
  [dir="rtl"] .mdc-dialog .mdc-dialog__surface {
    text-align: right;
  }
  .mdc-dialog__title {
    display: block;
    margin-top: 0;
    line-height: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline6-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1.25rem;
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: 0.0125em;
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline6-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0 24px 9px;
    border-bottom: 1px solid transparent;
  }
  .mdc-dialog__title::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
  }
  .mdc-dialog[dir="rtl"] .mdc-dialog__title,
  [dir="rtl"] .mdc-dialog .mdc-dialog__title {
    text-align: right;
  }
  .mdc-dialog--scrollable .mdc-dialog__title {
    padding-bottom: 15px;
  }
  .mdc-dialog__content {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-body1-font-size, 1rem);
    line-height: 1.5rem;
    line-height: var(--mdc-typography-body1-line-height, 1.5rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body1-font-weight, 400);
    letter-spacing: 0.03125em;
    letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body1-text-transform, inherit);
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .mdc-dialog__content > :first-child {
    margin-top: 0;
  }
  .mdc-dialog__content > :last-child {
    margin-bottom: 0;
  }
  .mdc-dialog__title + .mdc-dialog__content {
    padding-top: 0;
  }
  .mdc-dialog--scrollable .mdc-dialog__title + .mdc-dialog__content {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .mdc-dialog__content .mdc-list:first-child:last-child {
    padding: 6px 0 0;
  }
  .mdc-dialog--scrollable
    .mdc-dialog__content
    .mdc-list:first-child:last-child {
    padding: 0;
  }
  .mdc-dialog__actions {
    display: flex;
    position: relative;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    min-height: 52px;
    margin: 0;
    padding: 8px;
    border-top: 1px solid transparent;
  }
  .mdc-dialog--stacked .mdc-dialog__actions {
    flex-direction: column;
    align-items: flex-end;
  }
  .mdc-dialog__button {
    margin-left: 8px;
    margin-right: 0;
    max-width: 100%;
    text-align: right;
  }
  [dir="rtl"] .mdc-dialog__button,
  .mdc-dialog__button[dir="rtl"] {
    margin-left: 0;
    margin-right: 8px;
  }
  .mdc-dialog__button:first-child {
    margin-left: 0;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-dialog__button:first-child,
  .mdc-dialog__button:first-child[dir="rtl"] {
    margin-left: 0;
    margin-right: 0;
  }
  .mdc-dialog[dir="rtl"] .mdc-dialog__button,
  [dir="rtl"] .mdc-dialog .mdc-dialog__button {
    text-align: left;
  }
  .mdc-dialog--stacked .mdc-dialog__button:not(:first-child) {
    margin-top: 12px;
  }
  .mdc-dialog--open,
  .mdc-dialog--opening,
  .mdc-dialog--closing {
    display: flex;
  }
  .mdc-dialog--opening .mdc-dialog__scrim {
    transition: opacity 150ms linear;
  }
  .mdc-dialog--opening .mdc-dialog__container {
    transition: opacity 75ms linear,
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 75ms linear,
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 75ms linear,
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-dialog--closing .mdc-dialog__scrim,
  .mdc-dialog--closing .mdc-dialog__container {
    transition: opacity 75ms linear;
  }
  .mdc-dialog--closing .mdc-dialog__container {
    -webkit-transform: none;
    transform: none;
  }
  .mdc-dialog--open .mdc-dialog__scrim {
    opacity: 1;
  }
  .mdc-dialog--open .mdc-dialog__container {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
  .mdc-dialog-scroll-lock {
    overflow: hidden;
  }
  .mdc-drawer {
    border-color: rgba(0, 0, 0, 0.12);
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-right-radius: var(--mdc-shape-large, 0);
    border-bottom-right-radius: 0;
    border-bottom-right-radius: var(--mdc-shape-large, 0);
    border-bottom-left-radius: 0;
    z-index: 6;
    width: 256px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-sizing: border-box;
    height: 100%;
    border-right-width: 1px;
    border-right-style: solid;
    overflow: hidden;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-drawer .mdc-drawer__title {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-drawer .mdc-list-group__subheader {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-drawer .mdc-drawer__subtitle {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-drawer .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-drawer .mdc-list-item {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic {
    color: #6200ee;
  }
  .mdc-drawer .mdc-list-item--activated {
    color: rgba(98, 0, 238, 0.87);
  }
  [dir="rtl"] .mdc-drawer,
  .mdc-drawer[dir="rtl"] {
    border-top-left-radius: 0;
    border-top-left-radius: var(--mdc-shape-large, 0);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-left-radius: var(--mdc-shape-large, 0);
  }
  .mdc-drawer .mdc-list-item {
    border-radius: 4px;
    border-radius: var(--mdc-shape-small, 4px);
  }
  .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)
    + .mdc-drawer-app-content {
    margin-left: 256px;
    margin-right: 0;
  }
  [dir="rtl"]
    .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)
    + .mdc-drawer-app-content,
  .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)
    + .mdc-drawer-app-content[dir="rtl"] {
    margin-left: 0;
    margin-right: 256px;
  }
  [dir="rtl"] .mdc-drawer,
  .mdc-drawer[dir="rtl"] {
    border-right-width: 0;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }
  .mdc-drawer .mdc-list-item {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
    line-height: 1.375rem;
    line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
    letter-spacing: 0.0071428571em;
    letter-spacing: var(
      --mdc-typography-subtitle2-letter-spacing,
      0.0071428571em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);
    height: calc(48px - 2 * 4px);
    margin: 8px 8px;
    padding: 0 8px;
  }
  .mdc-drawer .mdc-list-item:nth-child(1) {
    margin-top: 2px;
  }
  .mdc-drawer .mdc-list-item:nth-last-child(1) {
    margin-bottom: 0;
  }
  .mdc-drawer .mdc-list-group__subheader {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
    margin: 0;
    padding: 0 16px;
  }
  .mdc-drawer .mdc-list-group__subheader::before {
    display: inline-block;
    width: 0;
    height: 24px;
    content: "";
    vertical-align: 0;
  }
  .mdc-drawer .mdc-list-divider {
    margin: 3px 0 4px;
  }
  .mdc-drawer .mdc-list-item__text,
  .mdc-drawer .mdc-list-item__graphic {
    pointer-events: none;
  }
  .mdc-drawer--animate {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  [dir="rtl"] .mdc-drawer--animate,
  .mdc-drawer--animate[dir="rtl"] {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  .mdc-drawer--opening {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition-duration: 250ms;
  }
  [dir="rtl"] .mdc-drawer--opening,
  .mdc-drawer--opening[dir="rtl"] {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .mdc-drawer--closing {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    transition-duration: 200ms;
  }
  [dir="rtl"] .mdc-drawer--closing,
  .mdc-drawer--closing[dir="rtl"] {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  .mdc-drawer__header {
    flex-shrink: 0;
    box-sizing: border-box;
    min-height: 64px;
    padding: 0 16px 4px;
  }
  .mdc-drawer__title {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline6-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1.25rem;
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: 0.0125em;
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline6-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-drawer__title::before {
    display: inline-block;
    width: 0;
    height: 36px;
    content: "";
    vertical-align: 0;
  }
  .mdc-drawer__title::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-drawer__subtitle {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: 0;
  }
  .mdc-drawer__subtitle::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
  }
  .mdc-drawer__content {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .mdc-drawer--dismissible {
    left: 0;
    right: initial;
    display: none;
    position: absolute;
  }
  [dir="rtl"] .mdc-drawer--dismissible,
  .mdc-drawer--dismissible[dir="rtl"] {
    left: initial;
    right: 0;
  }
  .mdc-drawer--dismissible.mdc-drawer--open {
    display: flex;
  }
  .mdc-drawer-app-content {
    margin-left: 0;
    margin-right: 0;
    position: relative;
  }
  [dir="rtl"] .mdc-drawer-app-content,
  .mdc-drawer-app-content[dir="rtl"] {
    margin-left: 0;
    margin-right: 0;
  }
  .mdc-drawer--modal {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    left: 0;
    right: initial;
    display: none;
    position: fixed;
  }
  .mdc-drawer--modal + .mdc-drawer-scrim {
    background-color: rgba(0, 0, 0, 0.32);
  }
  [dir="rtl"] .mdc-drawer--modal,
  .mdc-drawer--modal[dir="rtl"] {
    left: initial;
    right: 0;
  }
  .mdc-drawer--modal.mdc-drawer--open {
    display: flex;
  }
  .mdc-drawer-scrim {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-drawer--open + .mdc-drawer-scrim {
    display: block;
  }
  .mdc-drawer--animate + .mdc-drawer-scrim {
    opacity: 0;
  }
  .mdc-drawer--opening + .mdc-drawer-scrim {
    transition-duration: 250ms;
    opacity: 1;
  }
  .mdc-drawer--closing + .mdc-drawer-scrim {
    transition-duration: 200ms;
    opacity: 0;
  }
  .mdc-elevation--z0 {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
      0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z1 {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z3 {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z6 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z7 {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
      0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z8 {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z9 {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2),
      0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z10 {
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
      0px 10px 14px 1px rgba(0, 0, 0, 0.14),
      0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z11 {
    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2),
      0px 11px 15px 1px rgba(0, 0, 0, 0.14),
      0px 4px 20px 3px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z12 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
      0px 12px 17px 2px rgba(0, 0, 0, 0.14),
      0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z13 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
      0px 13px 19px 2px rgba(0, 0, 0, 0.14),
      0px 5px 24px 4px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z14 {
    box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2),
      0px 14px 21px 2px rgba(0, 0, 0, 0.14),
      0px 5px 26px 4px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z15 {
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
      0px 15px 22px 2px rgba(0, 0, 0, 0.14),
      0px 6px 28px 5px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z16 {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z17 {
    box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2),
      0px 17px 26px 2px rgba(0, 0, 0, 0.14),
      0px 6px 32px 5px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z18 {
    box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2),
      0px 18px 28px 2px rgba(0, 0, 0, 0.14),
      0px 7px 34px 6px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z19 {
    box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2),
      0px 19px 29px 2px rgba(0, 0, 0, 0.14),
      0px 7px 36px 6px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z20 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
      0px 20px 31px 3px rgba(0, 0, 0, 0.14),
      0px 8px 38px 7px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z21 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
      0px 21px 33px 3px rgba(0, 0, 0, 0.14),
      0px 8px 40px 7px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z22 {
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2),
      0px 22px 35px 3px rgba(0, 0, 0, 0.14),
      0px 8px 42px 7px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z23 {
    box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2),
      0px 23px 36px 3px rgba(0, 0, 0, 0.14),
      0px 9px 44px 8px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation--z24 {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
  .mdc-elevation-transition {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow;
  }
  .mdc-fab {
    position: relative;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    padding: 0;
    border: none;
    fill: currentColor;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    overflow: visible;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 15ms linear 30ms,
      -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
    color: #fff;
    color: var(--mdc-theme-on-secondary, #fff);
  }
  .mdc-fab .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-fab:not(.mdc-fab--extended) {
    border-radius: 50%;
  }
  .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple {
    border-radius: 50%;
  }
  .mdc-fab::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  .mdc-fab:hover,
  .mdc-fab:focus {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .mdc-fab:active {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
      0px 12px 17px 2px rgba(0, 0, 0, 0.14),
      0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  }
  .mdc-fab:active,
  .mdc-fab:focus {
    outline: none;
  }
  .mdc-fab:hover {
    cursor: pointer;
  }
  .mdc-fab > svg {
    width: 100%;
  }
  .mdc-fab .mdc-fab__icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
  .mdc-fab--mini {
    width: 40px;
    height: 40px;
  }
  .mdc-fab--extended {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: 2.25rem;
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: 0.0892857143em;
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
    text-decoration: none;
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
    border-radius: 24px;
    padding-left: 20px;
    padding-right: 20px;
    width: auto;
    max-width: 100%;
    height: 48px;
    line-height: normal;
  }
  .mdc-fab--extended .mdc-fab__ripple {
    border-radius: 24px;
  }
  .mdc-fab--extended .mdc-fab__icon {
    margin-left: calc(12px - 20px);
    margin-right: 12px;
  }
  [dir="rtl"] .mdc-fab--extended .mdc-fab__icon,
  .mdc-fab--extended .mdc-fab__icon[dir="rtl"] {
    margin-left: 12px;
    margin-right: calc(12px - 20px);
  }
  .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon {
    margin-left: 12px;
    margin-right: calc(12px - 20px);
  }
  [dir="rtl"] .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon,
  .mdc-fab--extended .mdc-fab__label + .mdc-fab__icon[dir="rtl"] {
    margin-left: calc(12px - 20px);
    margin-right: 12px;
  }
  .mdc-fab--touch {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    margin-left: 4px;
  }
  .mdc-fab--touch .mdc-fab__touch {
    position: absolute;
    top: 50%;
    right: 0;
    height: 48px;
    left: 50%;
    width: 48px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .mdc-fab::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    content: "";
  }
  .mdc-fab__label {
    justify-content: flex-start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: visible;
  }
  .mdc-fab__icon {
    transition: -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
    fill: currentColor;
    will-change: transform;
  }
  .mdc-fab .mdc-fab__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mdc-fab--exited {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    transition: opacity 15ms linear 150ms,
      -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 15ms linear 150ms,
      transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 15ms linear 150ms,
      transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1),
      -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mdc-fab--exited .mdc-fab__icon {
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1),
      -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mdc-fab {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-fab .mdc-fab__ripple::before,
  .mdc-fab .mdc-fab__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-fab .mdc-fab__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-fab.mdc-ripple-upgraded--foreground-deactivation
    .mdc-fab__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-fab .mdc-fab__ripple::before,
  .mdc-fab .mdc-fab__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-fab .mdc-fab__ripple::before,
  .mdc-fab .mdc-fab__ripple::after {
    background-color: #fff;
    background-color: var(--mdc-theme-on-secondary, #fff);
  }
  .mdc-fab:hover .mdc-fab__ripple::before {
    opacity: 0.08;
  }
  .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple::before,
  .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-fab.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-fab .mdc-fab__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: -1;
  }
  .mdc-floating-label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    position: absolute;
    left: 0;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    line-height: 1.15rem;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  [dir="rtl"] .mdc-floating-label,
  .mdc-floating-label[dir="rtl"] {
    right: 0;
    left: auto;
    -webkit-transform-origin: right top;
    transform-origin: right top;
    text-align: right;
  }
  .mdc-floating-label--float-above {
    cursor: auto;
  }
  .mdc-floating-label--required::after {
    margin-left: 1px;
    margin-right: 0px;
    content: "*";
  }
  [dir="rtl"] .mdc-floating-label--required::after,
  .mdc-floating-label--required[dir="rtl"]::after {
    margin-left: 0;
    margin-right: 1px;
  }
  .mdc-floating-label--float-above {
    -webkit-transform: translateY(-106%) scale(0.75);
    transform: translateY(-106%) scale(0.75);
  }
  .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-standard 250ms 1;
    animation: mdc-floating-label-shake-float-above-standard 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-standard {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-106%)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-standard {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-106%)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
  }
  .mdc-form-field {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  }
  .mdc-form-field > label {
    margin-left: 0;
    margin-right: auto;
    padding-left: 4px;
    padding-right: 0;
    order: 0;
  }
  [dir="rtl"] .mdc-form-field > label,
  .mdc-form-field > label[dir="rtl"] {
    margin-left: auto;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-form-field > label,
  .mdc-form-field > label[dir="rtl"] {
    padding-left: 0;
    padding-right: 4px;
  }
  .mdc-form-field--nowrap > label {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .mdc-form-field--align-end > label {
    margin-left: auto;
    margin-right: 0;
    padding-left: 0;
    padding-right: 4px;
    order: -1;
  }
  [dir="rtl"] .mdc-form-field--align-end > label,
  .mdc-form-field--align-end > label[dir="rtl"] {
    margin-left: 0;
    margin-right: auto;
  }
  [dir="rtl"] .mdc-form-field--align-end > label,
  .mdc-form-field--align-end > label[dir="rtl"] {
    padding-left: 4px;
    padding-right: 0;
  }
  .mdc-form-field--space-between {
    justify-content: space-between;
  }
  .mdc-form-field--space-between > label {
    margin: 0;
  }
  [dir="rtl"] .mdc-form-field--space-between > label,
  .mdc-form-field--space-between > label[dir="rtl"] {
    margin: 0;
  }
  .mdc-icon-button {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: transparent;
    fill: currentColor;
    color: inherit;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 48px;
    height: 48px;
    padding: 12px;
  }
  .mdc-icon-button svg,
  .mdc-icon-button img {
    width: 24px;
    height: 24px;
  }
  .mdc-icon-button:disabled {
    color: rgba(0, 0, 0, 0.38);
    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
  }
  .mdc-icon-button:disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-icon-button__icon {
    display: inline-block;
  }
  .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: none;
  }
  .mdc-icon-button--on .mdc-icon-button__icon {
    display: none;
  }
  .mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {
    display: inline-block;
  }
  .mdc-icon-button {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-icon-button::before,
  .mdc-icon-button::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-icon-button::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-icon-button.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-icon-button.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-icon-button.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-icon-button::before,
  .mdc-icon-button::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-icon-button.mdc-ripple-upgraded::before,
  .mdc-icon-button.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-icon-button.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-icon-button::before,
  .mdc-icon-button::after {
    background-color: #000;
  }
  .mdc-icon-button:hover::before {
    opacity: 0.04;
  }
  .mdc-icon-button.mdc-ripple-upgraded--background-focused::before,
  .mdc-icon-button:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-icon-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-icon-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-icon-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-image-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
  }
  .mdc-image-list__item,
  .mdc-image-list__image-aspect-container {
    position: relative;
    box-sizing: border-box;
  }
  .mdc-image-list__item {
    list-style-type: none;
  }
  .mdc-image-list__image {
    width: 100%;
  }
  .mdc-image-list__image-aspect-container .mdc-image-list__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .mdc-image-list__image-aspect-container {
    padding-bottom: calc(100% / 1);
  }
  .mdc-image-list__image {
    border-radius: 0;
  }
  .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .mdc-image-list__supporting {
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 0;
    line-height: 24px;
  }
  .mdc-image-list__label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
  .mdc-image-list--masonry {
    display: block;
  }
  .mdc-image-list--masonry .mdc-image-list__item {
    -webkit-column-break-inside: avoid;
    break-inside: avoid-column;
  }
  .mdc-image-list--masonry .mdc-image-list__image {
    display: block;
    height: auto;
  }
  :root {
    --mdc-layout-grid-margin-desktop: 24px;
    --mdc-layout-grid-gutter-desktop: 24px;
    --mdc-layout-grid-column-width-desktop: 72px;
    --mdc-layout-grid-margin-tablet: 16px;
    --mdc-layout-grid-gutter-tablet: 16px;
    --mdc-layout-grid-column-width-tablet: 72px;
    --mdc-layout-grid-margin-phone: 16px;
    --mdc-layout-grid-gutter-phone: 16px;
    --mdc-layout-grid-column-width-phone: 72px;
  }
  @media (min-width: 840px) {
    .mdc-layout-grid {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 24px;
      padding: var(--mdc-layout-grid-margin-desktop, 24px);
    }
  }
  @media (min-width: 600px) and (max-width: 839px) {
    .mdc-layout-grid {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 16px;
      padding: var(--mdc-layout-grid-margin-tablet, 16px);
    }
  }
  @media (max-width: 599px) {
    .mdc-layout-grid {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 16px;
      padding: var(--mdc-layout-grid-margin-phone, 16px);
    }
  }
  @media (min-width: 840px) {
    .mdc-layout-grid__inner {
      display: flex;
      flex-flow: row wrap;
      align-items: stretch;
      margin: -12px;
      margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);
    }
    @supports (display: grid) {
      .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 24px;
        grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);
        grid-template-columns: repeat(12, minmax(0, 1fr));
      }
    }
  }
  @media (min-width: 600px) and (max-width: 839px) {
    .mdc-layout-grid__inner {
      display: flex;
      flex-flow: row wrap;
      align-items: stretch;
      margin: -8px;
      margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);
    }
    @supports (display: grid) {
      .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 16px;
        grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);
        grid-template-columns: repeat(8, minmax(0, 1fr));
      }
    }
  }
  @media (max-width: 599px) {
    .mdc-layout-grid__inner {
      display: flex;
      flex-flow: row wrap;
      align-items: stretch;
      margin: -8px;
      margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);
    }
    @supports (display: grid) {
      .mdc-layout-grid__inner {
        display: grid;
        margin: 0;
        grid-gap: 16px;
        grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  }
  @media (min-width: 840px) {
    .mdc-layout-grid__cell {
      width: calc(33.3333333333% - 24px);
      width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
      box-sizing: border-box;
      margin: 12px;
      margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
      }
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        margin: 0;
      }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-desktop {
      width: calc(8.3333333333% - 24px);
      width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-1,
      .mdc-layout-grid__cell--span-1-desktop {
        width: auto;
        grid-column-end: span 1;
      }
    }
    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-desktop {
      width: calc(16.6666666667% - 24px);
      width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-2,
      .mdc-layout-grid__cell--span-2-desktop {
        width: auto;
        grid-column-end: span 2;
      }
    }
    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-desktop {
      width: calc(25% - 24px);
      width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-3,
      .mdc-layout-grid__cell--span-3-desktop {
        width: auto;
        grid-column-end: span 3;
      }
    }
    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-desktop {
      width: calc(33.3333333333% - 24px);
      width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-4,
      .mdc-layout-grid__cell--span-4-desktop {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-desktop {
      width: calc(41.6666666667% - 24px);
      width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-5,
      .mdc-layout-grid__cell--span-5-desktop {
        width: auto;
        grid-column-end: span 5;
      }
    }
    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-desktop {
      width: calc(50% - 24px);
      width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-6,
      .mdc-layout-grid__cell--span-6-desktop {
        width: auto;
        grid-column-end: span 6;
      }
    }
    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-desktop {
      width: calc(58.3333333333% - 24px);
      width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-7,
      .mdc-layout-grid__cell--span-7-desktop {
        width: auto;
        grid-column-end: span 7;
      }
    }
    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-desktop {
      width: calc(66.6666666667% - 24px);
      width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-8,
      .mdc-layout-grid__cell--span-8-desktop {
        width: auto;
        grid-column-end: span 8;
      }
    }
    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-desktop {
      width: calc(75% - 24px);
      width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-9,
      .mdc-layout-grid__cell--span-9-desktop {
        width: auto;
        grid-column-end: span 9;
      }
    }
    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-desktop {
      width: calc(83.3333333333% - 24px);
      width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-10,
      .mdc-layout-grid__cell--span-10-desktop {
        width: auto;
        grid-column-end: span 10;
      }
    }
    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-desktop {
      width: calc(91.6666666667% - 24px);
      width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-11,
      .mdc-layout-grid__cell--span-11-desktop {
        width: auto;
        grid-column-end: span 11;
      }
    }
    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-desktop {
      width: calc(100% - 24px);
      width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-12,
      .mdc-layout-grid__cell--span-12-desktop {
        width: auto;
        grid-column-end: span 12;
      }
    }
  }
  @media (min-width: 600px) and (max-width: 839px) {
    .mdc-layout-grid__cell {
      width: calc(50% - 16px);
      width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));
      box-sizing: border-box;
      margin: 8px;
      margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
      }
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        margin: 0;
      }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-tablet {
      width: calc(12.5% - 16px);
      width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-1,
      .mdc-layout-grid__cell--span-1-tablet {
        width: auto;
        grid-column-end: span 1;
      }
    }
    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-tablet {
      width: calc(25% - 16px);
      width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-2,
      .mdc-layout-grid__cell--span-2-tablet {
        width: auto;
        grid-column-end: span 2;
      }
    }
    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-tablet {
      width: calc(37.5% - 16px);
      width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-3,
      .mdc-layout-grid__cell--span-3-tablet {
        width: auto;
        grid-column-end: span 3;
      }
    }
    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-tablet {
      width: calc(50% - 16px);
      width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-4,
      .mdc-layout-grid__cell--span-4-tablet {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-tablet {
      width: calc(62.5% - 16px);
      width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-5,
      .mdc-layout-grid__cell--span-5-tablet {
        width: auto;
        grid-column-end: span 5;
      }
    }
    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-tablet {
      width: calc(75% - 16px);
      width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-6,
      .mdc-layout-grid__cell--span-6-tablet {
        width: auto;
        grid-column-end: span 6;
      }
    }
    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-tablet {
      width: calc(87.5% - 16px);
      width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-7,
      .mdc-layout-grid__cell--span-7-tablet {
        width: auto;
        grid-column-end: span 7;
      }
    }
    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-tablet {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-8,
      .mdc-layout-grid__cell--span-8-tablet {
        width: auto;
        grid-column-end: span 8;
      }
    }
    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-tablet {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-9,
      .mdc-layout-grid__cell--span-9-tablet {
        width: auto;
        grid-column-end: span 8;
      }
    }
    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-tablet {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-10,
      .mdc-layout-grid__cell--span-10-tablet {
        width: auto;
        grid-column-end: span 8;
      }
    }
    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-tablet {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-11,
      .mdc-layout-grid__cell--span-11-tablet {
        width: auto;
        grid-column-end: span 8;
      }
    }
    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-tablet {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-12,
      .mdc-layout-grid__cell--span-12-tablet {
        width: auto;
        grid-column-end: span 8;
      }
    }
  }
  @media (max-width: 599px) {
    .mdc-layout-grid__cell {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
      box-sizing: border-box;
      margin: 8px;
      margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        width: auto;
        grid-column-end: span 4;
      }
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell {
        margin: 0;
      }
    }
    .mdc-layout-grid__cell--span-1,
    .mdc-layout-grid__cell--span-1-phone {
      width: calc(25% - 16px);
      width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-1,
      .mdc-layout-grid__cell--span-1-phone {
        width: auto;
        grid-column-end: span 1;
      }
    }
    .mdc-layout-grid__cell--span-2,
    .mdc-layout-grid__cell--span-2-phone {
      width: calc(50% - 16px);
      width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-2,
      .mdc-layout-grid__cell--span-2-phone {
        width: auto;
        grid-column-end: span 2;
      }
    }
    .mdc-layout-grid__cell--span-3,
    .mdc-layout-grid__cell--span-3-phone {
      width: calc(75% - 16px);
      width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-3,
      .mdc-layout-grid__cell--span-3-phone {
        width: auto;
        grid-column-end: span 3;
      }
    }
    .mdc-layout-grid__cell--span-4,
    .mdc-layout-grid__cell--span-4-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-4,
      .mdc-layout-grid__cell--span-4-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-5,
    .mdc-layout-grid__cell--span-5-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-5,
      .mdc-layout-grid__cell--span-5-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-6,
    .mdc-layout-grid__cell--span-6-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-6,
      .mdc-layout-grid__cell--span-6-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-7,
    .mdc-layout-grid__cell--span-7-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-7,
      .mdc-layout-grid__cell--span-7-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-8,
    .mdc-layout-grid__cell--span-8-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-8,
      .mdc-layout-grid__cell--span-8-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-9,
    .mdc-layout-grid__cell--span-9-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-9,
      .mdc-layout-grid__cell--span-9-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-10,
    .mdc-layout-grid__cell--span-10-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-10,
      .mdc-layout-grid__cell--span-10-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-11,
    .mdc-layout-grid__cell--span-11-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-11,
      .mdc-layout-grid__cell--span-11-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
    .mdc-layout-grid__cell--span-12,
    .mdc-layout-grid__cell--span-12-phone {
      width: calc(100% - 16px);
      width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));
    }
    @supports (display: grid) {
      .mdc-layout-grid__cell--span-12,
      .mdc-layout-grid__cell--span-12-phone {
        width: auto;
        grid-column-end: span 4;
      }
    }
  }
  .mdc-layout-grid__cell--order-1 {
    order: 1;
  }
  .mdc-layout-grid__cell--order-2 {
    order: 2;
  }
  .mdc-layout-grid__cell--order-3 {
    order: 3;
  }
  .mdc-layout-grid__cell--order-4 {
    order: 4;
  }
  .mdc-layout-grid__cell--order-5 {
    order: 5;
  }
  .mdc-layout-grid__cell--order-6 {
    order: 6;
  }
  .mdc-layout-grid__cell--order-7 {
    order: 7;
  }
  .mdc-layout-grid__cell--order-8 {
    order: 8;
  }
  .mdc-layout-grid__cell--order-9 {
    order: 9;
  }
  .mdc-layout-grid__cell--order-10 {
    order: 10;
  }
  .mdc-layout-grid__cell--order-11 {
    order: 11;
  }
  .mdc-layout-grid__cell--order-12 {
    order: 12;
  }
  .mdc-layout-grid__cell--align-top {
    align-self: flex-start;
  }
  @supports (display: grid) {
    .mdc-layout-grid__cell--align-top {
      align-self: start;
    }
  }
  .mdc-layout-grid__cell--align-middle {
    align-self: center;
  }
  .mdc-layout-grid__cell--align-bottom {
    align-self: flex-end;
  }
  @supports (display: grid) {
    .mdc-layout-grid__cell--align-bottom {
      align-self: end;
    }
  }
  @media (min-width: 840px) {
    .mdc-layout-grid--fixed-column-width {
      width: 1176px;
      width: calc(
        var(--mdc-layout-grid-column-width-desktop, 72px) * 12 +
          var(--mdc-layout-grid-gutter-desktop, 24px) * 11 +
          var(--mdc-layout-grid-margin-desktop, 24px) * 2
      );
    }
  }
  @media (min-width: 600px) and (max-width: 839px) {
    .mdc-layout-grid--fixed-column-width {
      width: 720px;
      width: calc(
        var(--mdc-layout-grid-column-width-tablet, 72px) * 8 +
          var(--mdc-layout-grid-gutter-tablet, 16px) * 7 +
          var(--mdc-layout-grid-margin-tablet, 16px) * 2
      );
    }
  }
  @media (max-width: 599px) {
    .mdc-layout-grid--fixed-column-width {
      width: 368px;
      width: calc(
        var(--mdc-layout-grid-column-width-phone, 72px) * 4 +
          var(--mdc-layout-grid-gutter-phone, 16px) * 3 +
          var(--mdc-layout-grid-margin-phone, 16px) * 2
      );
    }
  }
  .mdc-layout-grid--align-left {
    margin-right: auto;
    margin-left: 0;
  }
  .mdc-layout-grid--align-right {
    margin-right: 0;
    margin-left: auto;
  }
  .mdc-line-ripple::before,
  .mdc-line-ripple::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-style: solid;
    content: "";
  }
  .mdc-line-ripple::before {
    border-bottom-width: 1px;
    z-index: 1;
  }
  .mdc-line-ripple::after {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    border-bottom-width: 2px;
    opacity: 0;
    z-index: 2;
  }
  .mdc-line-ripple::after {
    transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-line-ripple--active::after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
  .mdc-line-ripple--deactivating::after {
    opacity: 0;
  }
  @-webkit-keyframes mdc-linear-progress-primary-indeterminate-translate {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    20% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    59.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(83.67142%);
      transform: translateX(83.67142%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-half, 83.67142%)
      );
      transform: translateX(var(--mdc-linear-progress-primary-half, 83.67142%));
    }
    100% {
      -webkit-transform: translateX(200.611057%);
      transform: translateX(200.611057%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-full, 200.611057%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-full, 200.611057%)
      );
    }
  }
  @keyframes mdc-linear-progress-primary-indeterminate-translate {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    20% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    59.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(83.67142%);
      transform: translateX(83.67142%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-half, 83.67142%)
      );
      transform: translateX(var(--mdc-linear-progress-primary-half, 83.67142%));
    }
    100% {
      -webkit-transform: translateX(200.611057%);
      transform: translateX(200.611057%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-full, 200.611057%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-full, 200.611057%)
      );
    }
  }
  @-webkit-keyframes mdc-linear-progress-primary-indeterminate-scale {
    0% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    36.65% {
      -webkit-animation-timing-function: cubic-bezier(
        0.334731,
        0.12482,
        0.785844,
        1
      );
      animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    69.15% {
      -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
      animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
      -webkit-transform: scaleX(0.661479);
      transform: scaleX(0.661479);
    }
    100% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
  }
  @keyframes mdc-linear-progress-primary-indeterminate-scale {
    0% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    36.65% {
      -webkit-animation-timing-function: cubic-bezier(
        0.334731,
        0.12482,
        0.785844,
        1
      );
      animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    69.15% {
      -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
      animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
      -webkit-transform: scaleX(0.661479);
      transform: scaleX(0.661479);
    }
    100% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
  }
  @-webkit-keyframes mdc-linear-progress-secondary-indeterminate-translate {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.15,
        0,
        0.515058,
        0.409685
      );
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    25% {
      -webkit-animation-timing-function: cubic-bezier(
        0.31033,
        0.284058,
        0.8,
        0.733712
      );
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      -webkit-transform: translateX(37.651913%);
      transform: translateX(37.651913%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-quarter, 37.651913%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-quarter, 37.651913%)
      );
    }
    48.35% {
      -webkit-animation-timing-function: cubic-bezier(
        0.4,
        0.627035,
        0.6,
        0.902026
      );
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      -webkit-transform: translateX(84.386165%);
      transform: translateX(84.386165%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-half, 84.386165%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-half, 84.386165%)
      );
    }
    100% {
      -webkit-transform: translateX(160.277782%);
      transform: translateX(160.277782%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-full, 160.277782%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-full, 160.277782%)
      );
    }
  }
  @keyframes mdc-linear-progress-secondary-indeterminate-translate {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.15,
        0,
        0.515058,
        0.409685
      );
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    25% {
      -webkit-animation-timing-function: cubic-bezier(
        0.31033,
        0.284058,
        0.8,
        0.733712
      );
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      -webkit-transform: translateX(37.651913%);
      transform: translateX(37.651913%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-quarter, 37.651913%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-quarter, 37.651913%)
      );
    }
    48.35% {
      -webkit-animation-timing-function: cubic-bezier(
        0.4,
        0.627035,
        0.6,
        0.902026
      );
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      -webkit-transform: translateX(84.386165%);
      transform: translateX(84.386165%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-half, 84.386165%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-half, 84.386165%)
      );
    }
    100% {
      -webkit-transform: translateX(160.277782%);
      transform: translateX(160.277782%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-full, 160.277782%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-full, 160.277782%)
      );
    }
  }
  @-webkit-keyframes mdc-linear-progress-secondary-indeterminate-scale {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.205028,
        0.057051,
        0.57661,
        0.453971
      );
      animation-timing-function: cubic-bezier(
        0.205028,
        0.057051,
        0.57661,
        0.453971
      );
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    19.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.152313,
        0.196432,
        0.648374,
        1.004315
      );
      animation-timing-function: cubic-bezier(
        0.152313,
        0.196432,
        0.648374,
        1.004315
      );
      -webkit-transform: scaleX(0.457104);
      transform: scaleX(0.457104);
    }
    44.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.257759,
        -0.003163,
        0.211762,
        1.38179
      );
      animation-timing-function: cubic-bezier(
        0.257759,
        -0.003163,
        0.211762,
        1.38179
      );
      -webkit-transform: scaleX(0.72796);
      transform: scaleX(0.72796);
    }
    100% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
  }
  @keyframes mdc-linear-progress-secondary-indeterminate-scale {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.205028,
        0.057051,
        0.57661,
        0.453971
      );
      animation-timing-function: cubic-bezier(
        0.205028,
        0.057051,
        0.57661,
        0.453971
      );
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
    19.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.152313,
        0.196432,
        0.648374,
        1.004315
      );
      animation-timing-function: cubic-bezier(
        0.152313,
        0.196432,
        0.648374,
        1.004315
      );
      -webkit-transform: scaleX(0.457104);
      transform: scaleX(0.457104);
    }
    44.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.257759,
        -0.003163,
        0.211762,
        1.38179
      );
      animation-timing-function: cubic-bezier(
        0.257759,
        -0.003163,
        0.211762,
        1.38179
      );
      -webkit-transform: scaleX(0.72796);
      transform: scaleX(0.72796);
    }
    100% {
      -webkit-transform: scaleX(0.08);
      transform: scaleX(0.08);
    }
  }
  @-webkit-keyframes mdc-linear-progress-buffering {
    from {
      -webkit-transform: rotate(180deg) translateX(-10px);
      transform: rotate(180deg) translateX(-10px);
    }
  }
  @keyframes mdc-linear-progress-buffering {
    from {
      -webkit-transform: rotate(180deg) translateX(-10px);
      transform: rotate(180deg) translateX(-10px);
    }
  }
  @-webkit-keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    20% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    59.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(-83.67142%);
      transform: translateX(-83.67142%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-half-neg, -83.67142%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-half-neg, -83.67142%)
      );
    }
    100% {
      -webkit-transform: translateX(-200.611057%);
      transform: translateX(-200.611057%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-full-neg, -200.611057%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-full-neg, -200.611057%)
      );
    }
  }
  @keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    20% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    59.15% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(-83.67142%);
      transform: translateX(-83.67142%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-half-neg, -83.67142%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-half-neg, -83.67142%)
      );
    }
    100% {
      -webkit-transform: translateX(-200.611057%);
      transform: translateX(-200.611057%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-primary-full-neg, -200.611057%)
      );
      transform: translateX(
        var(--mdc-linear-progress-primary-full-neg, -200.611057%)
      );
    }
  }
  @-webkit-keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.15,
        0,
        0.515058,
        0.409685
      );
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    25% {
      -webkit-animation-timing-function: cubic-bezier(
        0.31033,
        0.284058,
        0.8,
        0.733712
      );
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      -webkit-transform: translateX(-37.651913%);
      transform: translateX(-37.651913%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%)
      );
    }
    48.35% {
      -webkit-animation-timing-function: cubic-bezier(
        0.4,
        0.627035,
        0.6,
        0.902026
      );
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      -webkit-transform: translateX(-84.386165%);
      transform: translateX(-84.386165%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-half-neg, -84.386165%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-half-neg, -84.386165%)
      );
    }
    100% {
      -webkit-transform: translateX(-160.277782%);
      transform: translateX(-160.277782%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-full-neg, -160.277782%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-full-neg, -160.277782%)
      );
    }
  }
  @keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
    0% {
      -webkit-animation-timing-function: cubic-bezier(
        0.15,
        0,
        0.515058,
        0.409685
      );
      animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    25% {
      -webkit-animation-timing-function: cubic-bezier(
        0.31033,
        0.284058,
        0.8,
        0.733712
      );
      animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
      -webkit-transform: translateX(-37.651913%);
      transform: translateX(-37.651913%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%)
      );
    }
    48.35% {
      -webkit-animation-timing-function: cubic-bezier(
        0.4,
        0.627035,
        0.6,
        0.902026
      );
      animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
      -webkit-transform: translateX(-84.386165%);
      transform: translateX(-84.386165%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-half-neg, -84.386165%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-half-neg, -84.386165%)
      );
    }
    100% {
      -webkit-transform: translateX(-160.277782%);
      transform: translateX(-160.277782%);
      -webkit-transform: translateX(
        var(--mdc-linear-progress-secondary-full-neg, -160.277782%)
      );
      transform: translateX(
        var(--mdc-linear-progress-secondary-full-neg, -160.277782%)
      );
    }
  }
  @-webkit-keyframes mdc-linear-progress-buffering-reverse {
    from {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
  }
  @keyframes mdc-linear-progress-buffering-reverse {
    from {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
  }
  .mdc-linear-progress {
    position: relative;
    width: 100%;
    height: 4px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    outline: 1px solid transparent;
    overflow: hidden;
    transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-linear-progress__bar {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-animation: none;
    animation: none;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-linear-progress__bar-inner {
    display: inline-block;
    position: absolute;
    width: 100%;
    -webkit-animation: none;
    animation: none;
    border-top: 4px solid;
  }
  .mdc-linear-progress__buffer {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mdc-linear-progress__buffer-dots {
    background-repeat: repeat-x;
    background-size: 10px 4px;
    flex: auto;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation: mdc-linear-progress-buffering 250ms infinite linear;
    animation: mdc-linear-progress-buffering 250ms infinite linear;
  }
  .mdc-linear-progress__buffer-bar {
    flex: 0 1 100%;
    transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-linear-progress__primary-bar {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  .mdc-linear-progress__secondary-bar {
    visibility: hidden;
  }
  .mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
    transition: none;
  }
  .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
    left: -145.166611%;
  }
  .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
    left: -54.888891%;
    visibility: visible;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready
    .mdc-linear-progress__primary-bar {
    -webkit-animation: mdc-linear-progress-primary-indeterminate-translate 2s
      infinite linear;
    animation: mdc-linear-progress-primary-indeterminate-translate 2s infinite
      linear;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready
    .mdc-linear-progress__primary-bar
    > .mdc-linear-progress__bar-inner {
    -webkit-animation: mdc-linear-progress-primary-indeterminate-scale 2s
      infinite linear;
    animation: mdc-linear-progress-primary-indeterminate-scale 2s infinite
      linear;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready
    .mdc-linear-progress__secondary-bar {
    -webkit-animation: mdc-linear-progress-secondary-indeterminate-translate 2s
      infinite linear;
    animation: mdc-linear-progress-secondary-indeterminate-translate 2s infinite
      linear;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready
    .mdc-linear-progress__secondary-bar
    > .mdc-linear-progress__bar-inner {
    -webkit-animation: mdc-linear-progress-secondary-indeterminate-scale 2s
      infinite linear;
    animation: mdc-linear-progress-secondary-indeterminate-scale 2s infinite
      linear;
  }
  .mdc-linear-progress--reversed .mdc-linear-progress__bar {
    right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
  }
  .mdc-linear-progress--reversed.mdc-linear-progress--animation-ready
    .mdc-linear-progress__primary-bar {
    -webkit-animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
    animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
  }
  .mdc-linear-progress--reversed.mdc-linear-progress--animation-ready
    .mdc-linear-progress__secondary-bar {
    -webkit-animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
    animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
  }
  .mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots {
    -webkit-animation: mdc-linear-progress-buffering-reverse 250ms infinite
      linear;
    animation: mdc-linear-progress-buffering-reverse 250ms infinite linear;
    order: 0;
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  .mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar {
    order: 1;
  }
  .mdc-linear-progress--closed {
    opacity: 0;
  }
  .mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots {
    -webkit-animation: none;
    animation: none;
  }
  .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate
    .mdc-linear-progress__bar,
  .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate
    .mdc-linear-progress__bar
    .mdc-linear-progress__bar-inner {
    -webkit-animation: none;
    animation: none;
  }
  .mdc-linear-progress__bar-inner {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-linear-progress__buffer-dots {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");
  }
  .mdc-linear-progress__buffer-bar {
    background-color: #e6e6e6;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--reversed
    .mdc-linear-progress__primary-bar {
    right: -145.166611%;
    left: auto;
  }
  .mdc-linear-progress--indeterminate.mdc-linear-progress--reversed
    .mdc-linear-progress__secondary-bar {
    right: -54.888891%;
    left: auto;
  }
  .mdc-list {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    margin: 0;
    padding: 8px 0;
    list-style-type: none;
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
  }
  .mdc-list:focus {
    outline: none;
  }
  .mdc-list-item {
    height: 48px;
  }
  .mdc-list-item__secondary-text {
    color: rgba(0, 0, 0, 0.54);
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  }
  .mdc-list-item__graphic {
    background-color: transparent;
  }
  .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.38);
    color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
  }
  .mdc-list-item__meta {
    color: rgba(0, 0, 0, 0.38);
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
  }
  .mdc-list-group__subheader {
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
  }
  .mdc-list-item--disabled .mdc-list-item__text {
    opacity: 0.38;
  }
  .mdc-list-item--disabled .mdc-list-item__text,
  .mdc-list-item--disabled .mdc-list-item__primary-text,
  .mdc-list-item--disabled .mdc-list-item__secondary-text {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-list-item--selected,
  .mdc-list-item--activated {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-list-item--selected .mdc-list-item__graphic,
  .mdc-list-item--activated .mdc-list-item__graphic {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-list--dense {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 0.812rem;
  }
  .mdc-list-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    height: 48px;
  }
  .mdc-list-item:focus {
    outline: none;
  }
  .mdc-list-item:not(.mdc-list-item--selected):focus::before,
  .mdc-list-item.mdc-ripple-upgraded--background-focused::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    content: "";
  }
  .mdc-list-item.mdc-list-item--selected::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 3px double transparent;
    border-radius: inherit;
    content: "";
  }
  [dir="rtl"] .mdc-list-item,
  .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-list--icon-list .mdc-list-item {
    padding-left: 16px;
    padding-right: 16px;
    height: 56px;
  }
  [dir="rtl"] .mdc-list--icon-list .mdc-list-item,
  .mdc-list--icon-list .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-list--avatar-list .mdc-list-item {
    padding-left: 16px;
    padding-right: 16px;
    height: 56px;
  }
  [dir="rtl"] .mdc-list--avatar-list .mdc-list-item,
  .mdc-list--avatar-list .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-list--thumbnail-list .mdc-list-item {
    padding-left: 16px;
    padding-right: 16px;
    height: 56px;
  }
  [dir="rtl"] .mdc-list--thumbnail-list .mdc-list-item,
  .mdc-list--thumbnail-list .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-list--image-list .mdc-list-item {
    padding-left: 16px;
    padding-right: 16px;
    height: 72px;
  }
  [dir="rtl"] .mdc-list--image-list .mdc-list-item,
  .mdc-list--image-list .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-list--video-list .mdc-list-item {
    padding-left: 0px;
    padding-right: 16px;
    height: 72px;
  }
  [dir="rtl"] .mdc-list--video-list .mdc-list-item,
  .mdc-list--video-list .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 0px;
  }
  .mdc-list--dense .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }
  [dir="rtl"] .mdc-list--dense .mdc-list-item__graphic,
  .mdc-list--dense .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-list-item__graphic {
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    fill: currentColor;
    -o-object-fit: cover;
    object-fit: cover;
    margin-left: 0;
    margin-right: 32px;
    width: 24px;
    height: 24px;
  }
  [dir="rtl"] .mdc-list-item__graphic,
  .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 32px;
    margin-right: 0;
  }
  .mdc-list--icon-list .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 32px;
    width: 24px;
    height: 24px;
  }
  [dir="rtl"] .mdc-list--icon-list .mdc-list-item__graphic,
  .mdc-list--icon-list .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 32px;
    margin-right: 0;
  }
  .mdc-list--avatar-list .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  [dir="rtl"] .mdc-list--avatar-list .mdc-list-item__graphic,
  .mdc-list--avatar-list .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-list--thumbnail-list .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }
  [dir="rtl"] .mdc-list--thumbnail-list .mdc-list-item__graphic,
  .mdc-list--thumbnail-list .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-list--image-list .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 56px;
    height: 56px;
  }
  [dir="rtl"] .mdc-list--image-list .mdc-list-item__graphic,
  .mdc-list--image-list .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-list--video-list .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 100px;
    height: 56px;
  }
  [dir="rtl"] .mdc-list--video-list .mdc-list-item__graphic,
  .mdc-list--video-list .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-list .mdc-list-item__graphic {
    display: inline-flex;
  }
  .mdc-list-item__meta {
    margin-left: auto;
    margin-right: 0;
  }
  .mdc-list-item__meta:not(.material-icons) {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
  }
  .mdc-list-item[dir="rtl"] .mdc-list-item__meta,
  [dir="rtl"] .mdc-list-item .mdc-list-item__meta {
    margin-left: 0;
    margin-right: auto;
  }
  .mdc-list-item__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mdc-list-item__text[for] {
    pointer-events: none;
  }
  .mdc-list-item__primary-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 28px;
    content: "";
    vertical-align: 0;
  }
  .mdc-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-list--video-list .mdc-list-item__primary-text,
  .mdc-list--image-list .mdc-list-item__primary-text,
  .mdc-list--thumbnail-list .mdc-list-item__primary-text,
  .mdc-list--avatar-list .mdc-list-item__primary-text,
  .mdc-list--icon-list .mdc-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-list--video-list .mdc-list-item__primary-text::before,
  .mdc-list--image-list .mdc-list-item__primary-text::before,
  .mdc-list--thumbnail-list .mdc-list-item__primary-text::before,
  .mdc-list--avatar-list .mdc-list-item__primary-text::before,
  .mdc-list--icon-list .mdc-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-list--video-list .mdc-list-item__primary-text::after,
  .mdc-list--image-list .mdc-list-item__primary-text::after,
  .mdc-list--thumbnail-list .mdc-list-item__primary-text::after,
  .mdc-list--avatar-list .mdc-list-item__primary-text::after,
  .mdc-list--icon-list .mdc-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-list--dense .mdc-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-list--dense .mdc-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 24px;
    content: "";
    vertical-align: 0;
  }
  .mdc-list--dense .mdc-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-list-item__secondary-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin-top: 0;
    line-height: normal;
  }
  .mdc-list-item__secondary-text::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
  }
  .mdc-list--dense .mdc-list-item__secondary-text {
    font-size: inherit;
  }
  .mdc-list--dense .mdc-list-item {
    height: 40px;
  }
  .mdc-list--two-line .mdc-list-item__text {
    align-self: flex-start;
  }
  .mdc-list--two-line .mdc-list-item {
    height: 64px;
  }
  .mdc-list--two-line.mdc-list--video-list .mdc-list-item,
  .mdc-list--two-line.mdc-list--image-list .mdc-list-item,
  .mdc-list--two-line.mdc-list--thumbnail-list .mdc-list-item,
  .mdc-list--two-line.mdc-list--avatar-list .mdc-list-item,
  .mdc-list--two-line.mdc-list--icon-list .mdc-list-item {
    height: 72px;
  }
  .mdc-list--two-line.mdc-list--icon-list .mdc-list-item__graphic {
    align-self: flex-start;
    margin-top: 16px;
  }
  .mdc-list--two-line.mdc-list--dense .mdc-list-item,
  .mdc-list--avatar-list.mdc-list--dense .mdc-list-item {
    height: 60px;
  }
  .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 16px;
    width: 36px;
    height: 36px;
  }
  [dir="rtl"] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,
  .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  :not(.mdc-list-item--disabled).mdc-list-item {
    cursor: pointer;
  }
  a.mdc-list-item {
    color: inherit;
    text-decoration: none;
  }
  .mdc-list-divider {
    height: 0;
    margin: 0;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .mdc-list-divider {
    border-bottom-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-list-divider--padded {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"] .mdc-list-divider--padded,
  .mdc-list-divider--padded[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list-divider--inset {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 72px);
  }
  [dir="rtl"] .mdc-list-divider--inset,
  .mdc-list-divider--inset[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list-divider--inset.mdc-list-divider--padded {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 88px);
  }
  [dir="rtl"] .mdc-list-divider--inset.mdc-list-divider--padded,
  .mdc-list-divider--inset.mdc-list-divider--padded[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list .mdc-list-divider--inset-leading {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"] .mdc-list .mdc-list-divider--inset-leading,
  .mdc-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--icon-list .mdc-list-divider--inset-leading {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 72px);
  }
  [dir="rtl"] .mdc-list--icon-list .mdc-list-divider--inset-leading,
  .mdc-list--icon-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--icon-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 88px);
  }
  [dir="rtl"]
    .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list--icon-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--avatar-list .mdc-list-divider--inset-leading {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 72px);
  }
  [dir="rtl"] .mdc-list--avatar-list .mdc-list-divider--inset-leading,
  .mdc-list--avatar-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--avatar-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 88px);
  }
  [dir="rtl"]
    .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list--avatar-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--thumbnail-list .mdc-list-divider--inset-leading {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 72px);
  }
  [dir="rtl"] .mdc-list--thumbnail-list .mdc-list-divider--inset-leading,
  .mdc-list--thumbnail-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--thumbnail-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 72px;
    margin-right: 0;
    width: calc(100% - 88px);
  }
  [dir="rtl"]
    .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 72px;
  }
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list--thumbnail-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--image-list .mdc-list-divider--inset-leading {
    margin-left: 88px;
    margin-right: 0;
    width: calc(100% - 88px);
  }
  [dir="rtl"] .mdc-list--image-list .mdc-list-divider--inset-leading,
  .mdc-list--image-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 88px;
  }
  .mdc-list--image-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 88px;
    margin-right: 0;
    width: calc(100% - 104px);
  }
  [dir="rtl"]
    .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 88px;
  }
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 16px;
    margin-right: 0;
    width: calc(100% - 32px);
  }
  [dir="rtl"]
    .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list--image-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 16px;
  }
  .mdc-list--video-list .mdc-list-divider--inset-leading {
    margin-left: 116px;
    margin-right: 0;
    width: calc(100% - 116px);
  }
  [dir="rtl"] .mdc-list--video-list .mdc-list-divider--inset-leading,
  .mdc-list--video-list .mdc-list-divider--inset-leading[dir="rtl"] {
    margin-left: 0;
    margin-right: 116px;
  }
  .mdc-list--video-list .mdc-list-divider--inset-trailing {
    width: calc(100% - 16px);
  }
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing {
    margin-left: 116px;
    margin-right: 0;
    width: calc(100% - 132px);
  }
  [dir="rtl"]
    .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir="rtl"] {
    margin-left: 0;
    margin-right: 116px;
  }
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding {
    margin-left: 0px;
    margin-right: 0;
    width: calc(100% - 0px);
  }
  [dir="rtl"]
    .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding,
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 0px;
  }
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding {
    margin-left: 0px;
    margin-right: 0;
    width: calc(100% - 16px);
  }
  [dir="rtl"]
    .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,
  .mdc-list--video-list
    .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir="rtl"] {
    margin-left: 0;
    margin-right: 0px;
  }
  .mdc-list-group .mdc-list {
    padding: 0;
  }
  .mdc-list-group__subheader {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    margin: calc((3rem - 1.5rem) / 2) 16px;
  }
  .mdc-evolution-list-item__primary-text {
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
  }
  .mdc-evolution-list-item__secondary-text {
    color: rgba(0, 0, 0, 0.54);
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  }
  .mdc-evolution-list-item__start {
    background-color: transparent;
  }
  .mdc-evolution-list-item__start {
    color: rgba(0, 0, 0, 0.38);
    color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
  }
  .mdc-evolution-list-item__end {
    color: rgba(0, 0, 0, 0.38);
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
  }
  .mdc-list-group__subheader {
    color: rgba(0, 0, 0, 0.87);
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
  }
  .mdc-evolution-list-item--disabled .mdc-evolution-list-item__content {
    opacity: 0.38;
  }
  .mdc-evolution-list-item--disabled .mdc-evolution-list-item__content,
  .mdc-evolution-list-item--disabled .mdc-evolution-list-item__primary-text,
  .mdc-evolution-list-item--disabled .mdc-evolution-list-item__secondary-text {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-evolution-list-item--selected .mdc-evolution-list-item__primary-text,
  .mdc-list-item--activated .mdc-evolution-list-item__primary-text {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-evolution-list-item--selected .mdc-evolution-list-item__start,
  .mdc-list-item--activated .mdc-evolution-list-item__start {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-evolution-list {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    margin: 0;
    padding: 8px 0;
    list-style-type: none;
  }
  .mdc-evolution-list:focus {
    outline: none;
  }
  .mdc-evolution-list-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    align-items: stretch;
  }
  .mdc-evolution-list-item:focus {
    outline: none;
  }
  [dir="rtl"] .mdc-evolution-list-item,
  .mdc-evolution-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-one-line {
    height: 48px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-two-lines {
    height: 64px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-three-lines {
    height: 88px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-one-line
    .mdc-evolution-list-item__start {
    align-self: center;
    margin-top: 0;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__start {
    align-self: flex-start;
    margin-top: 16px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__start {
    align-self: flex-start;
    margin-top: 16px;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-one-line
    .mdc-evolution-list-item__end {
    align-self: center;
    margin-top: 0;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__end {
    align-self: center;
    margin-top: 0;
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end {
    align-self: flex-start;
    margin-top: 16px;
  }
  .mdc-evolution-list-item:not(.mdc-evolution-list-item--selected):focus::before,
  .mdc-evolution-list-item.mdc-ripple-upgraded--background-focused::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    content: "";
  }
  .mdc-evolution-list-item.mdc-evolution-list-item--selected::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 3px double transparent;
    border-radius: inherit;
    content: "";
  }
  .mdc-evolution-list-item:not(.mdc-evolution-list-item--disabled) {
    cursor: pointer;
  }
  a.mdc-evolution-list-item {
    color: inherit;
    text-decoration: none;
  }
  .mdc-evolution-list-item__start {
    fill: currentColor;
  }
  .mdc-evolution-list-item__content {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-self: center;
    min-width: 50%;
    flex: 1;
  }
  .mdc-evolution-list-item--with-two-lines .mdc-evolution-list-item__content,
  .mdc-evolution-list-item--with-three-lines .mdc-evolution-list-item__content {
    align-self: stretch;
  }
  .mdc-evolution-list-item__content[for] {
    pointer-events: none;
  }
  .mdc-evolution-list-item__primary-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 28px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item__secondary-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin-top: 0;
    line-height: normal;
  }
  .mdc-evolution-list-item__secondary-text::before {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item__overline-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__overline-text,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__overline-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__overline-text::before,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__overline-text::before {
    display: inline-block;
    width: 0;
    height: 24px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__overline-text::after,
  .mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__overline-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-avatar
    .mdc-evolution-list-item__start {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-avatar
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-avatar
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-leading-avatar
    .mdc-evolution-list-item__start {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-avatar.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-avatar
    .mdc-evolution-list-item__start {
    border-radius: 50%;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-icon .mdc-evolution-list-item__start {
    width: 24px;
    height: 24px;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-icon .mdc-evolution-list-item__start {
    margin-left: 16px;
    margin-right: 32px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-icon
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-icon
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 32px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-icon.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-thumbnail
    .mdc-evolution-list-item__start {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-thumbnail
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-thumbnail
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail
    .mdc-evolution-list-item__start {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-thumbnail.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item--with-one-line {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-image .mdc-evolution-list-item__start {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-image
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-image
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-leading-image .mdc-evolution-list-item__start {
    width: 56px;
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-image.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-one-line {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__start {
    align-self: flex-start;
    margin-top: 8px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-video .mdc-evolution-list-item__start {
    margin-left: 0;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-video
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-video
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 16px;
    margin-right: 0;
  }
  .mdc-evolution-list-item--with-leading-video .mdc-evolution-list-item__start {
    width: 100px;
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-video.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-checkbox
    .mdc-evolution-list-item__start {
    margin-left: 8px;
    margin-right: 24px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-checkbox
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-checkbox
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 24px;
    margin-right: 8px;
  }
  .mdc-evolution-list-item--with-leading-checkbox
    .mdc-evolution-list-item__start {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-checkbox.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-radio .mdc-evolution-list-item__start {
    margin-left: 8px;
    margin-right: 24px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-radio
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-radio
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 24px;
    margin-right: 8px;
  }
  .mdc-evolution-list-item--with-leading-radio .mdc-evolution-list-item__start {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-radio.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item--with-one-line {
    height: 56px;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item--with-two-lines {
    height: 72px;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item {
    padding-left: 0;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item[dir="rtl"] {
    padding-left: auto;
    padding-right: 0;
  }
  .mdc-evolution-list-item--with-leading-switch
    .mdc-evolution-list-item__start {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-leading-switch
    .mdc-evolution-list-item__start,
  .mdc-evolution-list-item--with-leading-switch
    .mdc-evolution-list-item__start[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-leading-switch
    .mdc-evolution-list-item__start {
    width: 36px;
    height: 20px;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text {
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-bottom: -20px;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::before {
    display: inline-block;
    width: 0;
    height: 32px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-leading-switch.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__primary-text::after {
    display: inline-block;
    width: 0;
    height: 20px;
    content: "";
    vertical-align: -20px;
  }
  .mdc-evolution-list-item--with-trailing-icon.mdc-evolution-list-item {
    padding-left: auto;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-icon.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-trailing-icon.mdc-evolution-list-item[dir="rtl"] {
    padding-left: 0;
    padding-right: auto;
  }
  .mdc-evolution-list-item--with-trailing-icon .mdc-evolution-list-item__end {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-icon
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-icon
    .mdc-evolution-list-item__end[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-trailing-icon .mdc-evolution-list-item__end {
    width: 24px;
    height: 24px;
  }
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__end {
    align-self: flex-start;
    margin-top: 0;
  }
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end {
    align-self: flex-start;
    margin-top: 0;
  }
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item {
    padding-left: auto;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item[dir="rtl"] {
    padding-left: 0;
    padding-right: auto;
  }
  .mdc-evolution-list-item--with-trailing-meta .mdc-evolution-list-item__end {
    margin-left: 28px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-meta
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-meta
    .mdc-evolution-list-item__end[dir="rtl"] {
    margin-left: 16px;
    margin-right: 28px;
  }
  .mdc-evolution-list-item--with-trailing-meta .mdc-evolution-list-item__end {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
  }
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end {
    display: block;
    margin-top: 0;
    line-height: normal;
  }
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-two-lines
    .mdc-evolution-list-item__end::before,
  .mdc-evolution-list-item--with-trailing-meta.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end::before {
    display: inline-block;
    width: 0;
    height: 28px;
    content: "";
    vertical-align: 0;
  }
  .mdc-evolution-list-item--with-trailing-checkbox.mdc-evolution-list-item {
    padding-left: auto;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-checkbox.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-trailing-checkbox.mdc-evolution-list-item[dir="rtl"] {
    padding-left: 0;
    padding-right: auto;
  }
  .mdc-evolution-list-item--with-trailing-checkbox
    .mdc-evolution-list-item__end {
    margin-left: 24px;
    margin-right: 8px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-checkbox
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-checkbox
    .mdc-evolution-list-item__end[dir="rtl"] {
    margin-left: 8px;
    margin-right: 24px;
  }
  .mdc-evolution-list-item--with-trailing-checkbox
    .mdc-evolution-list-item__end {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-trailing-checkbox.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end {
    align-self: flex-start;
    margin-top: 8px;
  }
  .mdc-evolution-list-item--with-trailing-radio.mdc-evolution-list-item {
    padding-left: auto;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-radio.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-trailing-radio.mdc-evolution-list-item[dir="rtl"] {
    padding-left: 0;
    padding-right: auto;
  }
  .mdc-evolution-list-item--with-trailing-radio .mdc-evolution-list-item__end {
    margin-left: 24px;
    margin-right: 8px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-radio
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-radio
    .mdc-evolution-list-item__end[dir="rtl"] {
    margin-left: 8px;
    margin-right: 24px;
  }
  .mdc-evolution-list-item--with-trailing-radio .mdc-evolution-list-item__end {
    width: 40px;
    height: 40px;
  }
  .mdc-evolution-list-item--with-trailing-radio.mdc-evolution-list-item--with-three-lines
    .mdc-evolution-list-item__end {
    align-self: flex-start;
    margin-top: 8px;
  }
  .mdc-evolution-list-item--with-trailing-switch.mdc-evolution-list-item {
    padding-left: auto;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-switch.mdc-evolution-list-item,
  .mdc-evolution-list-item--with-trailing-switch.mdc-evolution-list-item[dir="rtl"] {
    padding-left: 0;
    padding-right: auto;
  }
  .mdc-evolution-list-item--with-trailing-switch .mdc-evolution-list-item__end {
    margin-left: 16px;
    margin-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-item--with-trailing-switch
    .mdc-evolution-list-item__end,
  .mdc-evolution-list-item--with-trailing-switch
    .mdc-evolution-list-item__end[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-evolution-list-item--with-trailing-switch .mdc-evolution-list-item__end {
    width: 36px;
    height: 20px;
  }
  .mdc-evolution-list-group .mdc-list {
    padding: 0;
  }
  .mdc-evolution-list-group__subheader {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    margin: calc((3rem - 1.5rem) / 2) 16px;
  }
  .mdc-evolution-list-divider {
    background-color: rgba(0, 0, 0, 0.12);
  }
  .mdc-evolution-list-divider {
    height: 1px;
    padding: 0;
    background-clip: content-box;
  }
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-padding {
    padding-left: 16px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-padding,
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-padding[dir="rtl"] {
    padding-left: auto;
    padding-right: 16px;
  }
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 16px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 16px;
  }
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-trailing-inset {
    padding-left: auto;
    padding-right: 16px;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider.mdc-evolution-list-divider--with-trailing-inset,
  .mdc-evolution-list-divider.mdc-evolution-list-divider--with-trailing-inset[dir="rtl"] {
    padding-left: 16px;
    padding-right: auto;
  }
  .mdc-evolution-list-divider--with-leading-icon.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 72px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-icon.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-icon.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 72px;
  }
  .mdc-evolution-list-divider--with-leading-image.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 88px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-image.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-image.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 88px;
  }
  .mdc-evolution-list-divider--with-leading-thumbnail.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 72px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-thumbnail.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-thumbnail.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 72px;
  }
  .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-padding {
    padding-left: 0px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-padding,
  .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-padding[dir="rtl"] {
    padding-left: auto;
    padding-right: 0px;
  }
  .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 116px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-video.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 116px;
  }
  .mdc-evolution-list-divider--with-leading-avatar.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 72px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-avatar.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-avatar.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 72px;
  }
  .mdc-evolution-list-divider--with-leading-checkbox.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 72px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-checkbox.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-checkbox.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 72px;
  }
  .mdc-evolution-list-divider--with-leading-switch.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 84px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-switch.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-switch.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 84px;
  }
  .mdc-evolution-list-divider--with-leading-radio.mdc-evolution-list-divider--with-leading-inset {
    padding-left: 72px;
    padding-right: auto;
  }
  [dir="rtl"]
    .mdc-evolution-list-divider--with-leading-radio.mdc-evolution-list-divider--with-leading-inset,
  .mdc-evolution-list-divider--with-leading-radio.mdc-evolution-list-divider--with-leading-inset[dir="rtl"] {
    padding-left: auto;
    padding-right: 72px;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item,
  :not(.mdc-list-item--disabled).mdc-list-item {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded--unbounded
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded
    .mdc-list-item__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded--foreground-activation
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation
    .mdc-list-item__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded--foreground-deactivation
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation
    .mdc-list-item__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded
    .mdc-list-item__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after {
    background-color: #000;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item:hover
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item:hover
    .mdc-list-item__ripple::before {
    opacity: 0.04;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after {
    transition: opacity 150ms linear;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item.mdc-ripple-upgraded,
  :not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--activated
    .mdc-list-item__ripple::before {
    opacity: 0.12;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--activated
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--activated
    .mdc-list-item__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated:hover
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--activated:hover
    .mdc-list-item__ripple::before {
    opacity: 0.16;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after {
    transition: opacity 150ms linear;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--activated.mdc-ripple-upgraded,
  :not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--selected
    .mdc-list-item__ripple::before {
    opacity: 0.08;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--selected
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--selected
    .mdc-list-item__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected:hover
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--selected:hover
    .mdc-list-item__ripple::before {
    opacity: 0.12;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before {
    transition-duration: 75ms;
    opacity: 0.2;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after {
    transition: opacity 150ms linear;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after,
  :not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after {
    transition-duration: 75ms;
    opacity: 0.2;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item--selected.mdc-ripple-upgraded,
  :not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.2;
  }
  :not(.mdc-list-item--disabled).mdc-evolution-list-item .mdc-list-item__ripple,
  :not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-list-item--disabled {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-list-item--disabled .mdc-list-item__ripple::before,
  .mdc-list-item--disabled .mdc-list-item__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-list-item--disabled .mdc-list-item__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded--unbounded
    .mdc-list-item__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation
    .mdc-list-item__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation
    .mdc-list-item__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-list-item--disabled .mdc-list-item__ripple::before,
  .mdc-list-item--disabled .mdc-list-item__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-list-item--disabled .mdc-list-item__ripple::before,
  .mdc-list-item--disabled .mdc-list-item__ripple::after {
    background-color: #000;
  }
  .mdc-list-item--disabled.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  .mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-list-item--disabled .mdc-list-item__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-menu {
    min-width: 112px;
  }
  .mdc-menu .mdc-list-item__meta {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-menu .mdc-list-item__graphic {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-menu .mdc-list {
    color: rgba(0, 0, 0, 0.87);
    position: relative;
  }
  .mdc-menu .mdc-list .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-menu .mdc-list-divider {
    margin: 8px 0;
  }
  .mdc-menu .mdc-list-item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mdc-menu .mdc-list-item--disabled {
    cursor: auto;
  }
  .mdc-menu a.mdc-list-item .mdc-list-item__text,
  .mdc-menu a.mdc-list-item .mdc-list-item__graphic {
    pointer-events: none;
  }
  .mdc-menu__selection-group {
    padding: 0;
    fill: currentColor;
  }
  .mdc-menu__selection-group .mdc-list-item {
    padding-left: 56px;
    padding-right: 16px;
  }
  [dir="rtl"] .mdc-menu__selection-group .mdc-list-item,
  .mdc-menu__selection-group .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 56px;
  }
  .mdc-menu__selection-group .mdc-menu__selection-group-icon {
    left: 16px;
    right: initial;
    display: none;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  [dir="rtl"] .mdc-menu__selection-group .mdc-menu__selection-group-icon,
  .mdc-menu__selection-group .mdc-menu__selection-group-icon[dir="rtl"] {
    left: initial;
    right: 16px;
  }
  .mdc-menu-item--selected .mdc-menu__selection-group-icon {
    display: inline;
  }
  .mdc-menu-surface {
    display: none;
    position: absolute;
    box-sizing: border-box;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    margin: 0;
    padding: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    opacity: 0;
    overflow: auto;
    will-change: transform, opacity;
    z-index: 8;
    transition: opacity 0.03s linear, height 250ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1),
      height 250ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1),
      height 250ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
    border-radius: 4px;
    border-radius: var(--mdc-shape-medium, 4px);
    transform-origin-left: top left;
    transform-origin-right: top right;
  }
  .mdc-menu-surface:focus {
    outline: none;
  }
  .mdc-menu-surface--open {
    display: inline-block;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  .mdc-menu-surface--animating-open {
    display: inline-block;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }
  .mdc-menu-surface--animating-closed {
    display: inline-block;
    opacity: 0;
    transition: opacity 0.075s linear;
  }
  [dir="rtl"] .mdc-menu-surface,
  .mdc-menu-surface[dir="rtl"] {
    transform-origin-left: top right;
    transform-origin-right: top left;
  }
  .mdc-menu-surface--anchor {
    position: relative;
    overflow: visible;
  }
  .mdc-menu-surface--fixed {
    position: fixed;
  }
  .mdc-menu-surface--fullwidth {
    width: 100%;
  }
  .mdc-notched-outline {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
  }
  [dir="rtl"] .mdc-notched-outline,
  .mdc-notched-outline[dir="rtl"] {
    text-align: right;
  }
  .mdc-notched-outline__leading,
  .mdc-notched-outline__notch,
  .mdc-notched-outline__trailing {
    box-sizing: border-box;
    height: 100%;
    border-top: 1px solid;
    border-bottom: 1px solid;
    pointer-events: none;
  }
  .mdc-notched-outline__leading {
    border-left: 1px solid;
    border-right: none;
    width: 12px;
  }
  [dir="rtl"] .mdc-notched-outline__leading,
  .mdc-notched-outline__leading[dir="rtl"] {
    border-left: none;
    border-right: 1px solid;
  }
  .mdc-notched-outline__trailing {
    border-left: none;
    border-right: 1px solid;
    flex-grow: 1;
  }
  [dir="rtl"] .mdc-notched-outline__trailing,
  .mdc-notched-outline__trailing[dir="rtl"] {
    border-left: 1px solid;
    border-right: none;
  }
  .mdc-notched-outline__notch {
    flex: 0 0 auto;
    width: auto;
    max-width: calc(100% - 12px * 2);
  }
  .mdc-notched-outline .mdc-floating-label {
    display: inline-block;
    position: relative;
    max-width: 100%;
  }
  .mdc-notched-outline .mdc-floating-label--float-above {
    text-overflow: clip;
  }
  .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75);
  }
  .mdc-notched-outline--notched .mdc-notched-outline__notch {
    padding-left: 0;
    padding-right: 8px;
    border-top: none;
  }
  [dir="rtl"] .mdc-notched-outline--notched .mdc-notched-outline__notch,
  .mdc-notched-outline--notched .mdc-notched-outline__notch[dir="rtl"] {
    padding-left: 8px;
    padding-right: 0;
  }
  .mdc-notched-outline--no-label .mdc-notched-outline__notch {
    padding: 0;
  }
  .mdc-radio {
    padding: 10px;
    display: inline-block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: content-box;
    width: 20px;
    height: 20px;
    cursor: pointer;
    will-change: opacity, transform, border-color, color;
  }
  .mdc-radio
    .mdc-radio__native-control:enabled:not(:checked)
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: rgba(0, 0, 0, 0.54);
  }
  .mdc-radio
    .mdc-radio__native-control:enabled:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: #018786;
    border-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-radio
    .mdc-radio__native-control:enabled
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    border-color: #018786;
    border-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-radio
    [aria-disabled="true"]
    .mdc-radio__native-control:not(:checked)
    + .mdc-radio__background
    .mdc-radio__outer-circle,
  .mdc-radio
    .mdc-radio__native-control:disabled:not(:checked)
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-radio
    [aria-disabled="true"]
    .mdc-radio__native-control:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle,
  .mdc-radio
    .mdc-radio__native-control:disabled:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-radio
    [aria-disabled="true"]
    .mdc-radio__native-control
    + .mdc-radio__background
    .mdc-radio__inner-circle,
  .mdc-radio
    .mdc-radio__native-control:disabled
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-radio .mdc-radio__background::before {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-radio .mdc-radio__background::before {
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
  }
  .mdc-radio .mdc-radio__native-control {
    top: 0px;
    right: 0px;
    left: 0px;
    width: 40px;
    height: 40px;
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-radio
      [aria-disabled="true"]
      .mdc-radio__native-control:not(:checked)
      + .mdc-radio__background
      .mdc-radio__outer-circle,
    .mdc-radio
      .mdc-radio__native-control:disabled:not(:checked)
      + .mdc-radio__background
      .mdc-radio__outer-circle {
      border-color: GrayText;
    }
    .mdc-radio
      [aria-disabled="true"]
      .mdc-radio__native-control:checked
      + .mdc-radio__background
      .mdc-radio__outer-circle,
    .mdc-radio
      .mdc-radio__native-control:disabled:checked
      + .mdc-radio__background
      .mdc-radio__outer-circle {
      border-color: GrayText;
    }
    .mdc-radio
      [aria-disabled="true"]
      .mdc-radio__native-control
      + .mdc-radio__background
      .mdc-radio__inner-circle,
    .mdc-radio
      .mdc-radio__native-control:disabled
      + .mdc-radio__background
      .mdc-radio__inner-circle {
      border-color: GrayText;
    }
  }
  .mdc-radio__background {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }
  .mdc-radio__background::before {
    position: absolute;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-radio__outer-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-radio__inner-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  }
  .mdc-radio__native-control {
    position: absolute;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
    z-index: 1;
  }
  .mdc-radio--touch {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    margin-left: 4px;
  }
  .mdc-radio--touch .mdc-radio__native-control {
    top: -4px;
    right: -4px;
    left: -4px;
    width: 48px;
    height: 48px;
  }
  .mdc-radio__native-control:checked + .mdc-radio__background,
  .mdc-radio__native-control:disabled + .mdc-radio__background {
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-radio__native-control:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle,
  .mdc-radio__native-control:disabled
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-radio__native-control:checked
    + .mdc-radio__background
    .mdc-radio__inner-circle,
  .mdc-radio__native-control:disabled
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-radio--disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-radio__native-control:checked
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-radio__native-control:disabled + .mdc-radio__background,
  [aria-disabled="true"] .mdc-radio__native-control + .mdc-radio__background {
    cursor: default;
  }
  .mdc-radio__native-control:focus + .mdc-radio__background::before {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.12;
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-radio {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-radio .mdc-radio__ripple::before,
  .mdc-radio .mdc-radio__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-radio .mdc-radio__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-radio.mdc-ripple-upgraded--foreground-activation
    .mdc-radio__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-radio.mdc-ripple-upgraded--foreground-deactivation
    .mdc-radio__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-radio .mdc-radio__ripple::before,
  .mdc-radio .mdc-radio__ripple::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before,
  .mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-radio .mdc-radio__ripple::before,
  .mdc-radio .mdc-radio__ripple::after {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-radio:hover .mdc-radio__ripple::before {
    opacity: 0.04;
  }
  .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,
  .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-radio.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-radio.mdc-ripple-upgraded--background-focused
    .mdc-radio__background::before {
    content: none;
  }
  .mdc-radio__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-ripple-surface {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    position: relative;
    outline: none;
    overflow: hidden;
  }
  .mdc-ripple-surface::before,
  .mdc-ripple-surface::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-ripple-surface::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-ripple-surface.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-ripple-surface::before,
  .mdc-ripple-surface::after {
    background-color: #000;
  }
  .mdc-ripple-surface:hover::before {
    opacity: 0.04;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,
  .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-ripple-surface::before,
  .mdc-ripple-surface::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-ripple-surface.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded] {
    overflow: visible;
  }
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-ripple-surface--primary::before,
  .mdc-ripple-surface--primary::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-ripple-surface--primary:hover::before {
    opacity: 0.04;
  }
  .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,
  .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface--primary.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-ripple-surface--accent::before,
  .mdc-ripple-surface--accent::after {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-ripple-surface--accent:hover::before {
    opacity: 0.04;
  }
  .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,
  .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-ripple-surface--accent.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-select {
    display: inline-flex;
    position: relative;
  }
  .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text {
    color: rgba(0, 0, 0, 0.87);
  }
  .mdc-select.mdc-select--disabled .mdc-select__selected-text {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-select:not(.mdc-select--disabled) .mdc-floating-label {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-select:not(.mdc-select--disabled).mdc-select--focused
    .mdc-floating-label {
    color: rgba(98, 0, 238, 0.87);
  }
  .mdc-select.mdc-select--disabled .mdc-floating-label {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon {
    fill: rgba(0, 0, 0, 0.54);
  }
  .mdc-select:not(.mdc-select--disabled).mdc-select--focused
    .mdc-select__dropdown-icon {
    fill: #6200ee;
    fill: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-select.mdc-select--disabled .mdc-select__dropdown-icon {
    fill: rgba(0, 0, 0, 0.38);
  }
  .mdc-select:not(.mdc-select--disabled) + .mdc-select-helper-text {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-select.mdc-select--disabled + .mdc-select-helper-text {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-select:not(.mdc-select--disabled) .mdc-select__icon {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-select.mdc-select--disabled .mdc-select__icon {
    color: rgba(0, 0, 0, 0.38);
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-select.mdc-select--disabled .mdc-select__selected-text {
      color: GrayText;
    }
    .mdc-select.mdc-select--disabled .mdc-select__dropdown-icon {
      fill: red;
    }
    .mdc-select.mdc-select--disabled .mdc-floating-label {
      color: GrayText;
    }
    .mdc-select.mdc-select--disabled .mdc-line-ripple::before {
      border-bottom-color: GrayText;
    }
    .mdc-select.mdc-select--disabled .mdc-notched-outline__leading,
    .mdc-select.mdc-select--disabled .mdc-notched-outline__notch,
    .mdc-select.mdc-select--disabled .mdc-notched-outline__trailing {
      border-color: GrayText;
    }
    .mdc-select.mdc-select--disabled .mdc-select__icon {
      color: GrayText;
    }
    .mdc-select.mdc-select--disabled + .mdc-select-helper-text {
      color: GrayText;
    }
  }
  .mdc-select .mdc-floating-label {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    pointer-events: none;
  }
  .mdc-select .mdc-select__anchor {
    padding-left: 16px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-select .mdc-select__anchor,
  .mdc-select .mdc-select__anchor[dir="rtl"] {
    padding-left: 0;
    padding-right: 16px;
  }
  .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor {
    padding-left: 0;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,
  .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir="rtl"] {
    padding-left: 0;
    padding-right: 0;
  }
  .mdc-select .mdc-select__icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
  .mdc-select .mdc-select__dropdown-icon {
    width: 24px;
    height: 24px;
  }
  .mdc-select .mdc-select__menu .mdc-list-item {
    padding-left: 16px;
    padding-right: 16px;
  }
  [dir="rtl"] .mdc-select .mdc-select__menu .mdc-list-item,
  .mdc-select .mdc-select__menu .mdc-list-item[dir="rtl"] {
    padding-left: 16px;
    padding-right: 16px;
  }
  .mdc-select .mdc-select__menu .mdc-list-item__graphic {
    margin-left: 0;
    margin-right: 12px;
  }
  [dir="rtl"] .mdc-select .mdc-select__menu .mdc-list-item__graphic,
  .mdc-select .mdc-select__menu .mdc-list-item__graphic[dir="rtl"] {
    margin-left: 12px;
    margin-right: 0;
  }
  .mdc-select__dropdown-icon {
    margin-left: 12px;
    margin-right: 12px;
    display: inline-flex;
    position: relative;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    pointer-events: none;
  }
  .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,
  .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive {
    position: absolute;
    top: 0;
    left: 0;
  }
  .mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic {
    width: 41.6666666667%;
    height: 20.8333333333%;
  }
  .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive {
    opacity: 1;
    transition: opacity 75ms linear 75ms;
  }
  .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active {
    opacity: 0;
    transition: opacity 75ms linear;
  }
  [dir="rtl"] .mdc-select__dropdown-icon,
  .mdc-select__dropdown-icon[dir="rtl"] {
    margin-left: 12px;
    margin-right: 12px;
  }
  .mdc-select--activated
    .mdc-select__dropdown-icon
    .mdc-select__dropdown-icon-inactive {
    opacity: 0;
    transition: opacity 49.5ms linear;
  }
  .mdc-select--activated
    .mdc-select__dropdown-icon
    .mdc-select__dropdown-icon-active {
    opacity: 1;
    transition: opacity 100.5ms linear 49.5ms;
  }
  .mdc-select__anchor {
    width: 200px;
    min-width: 0;
    flex: 1 1 auto;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    cursor: pointer;
  }
  .mdc-select__anchor .mdc-floating-label--float-above {
    -webkit-transform: translateY(-106%) scale(0.75);
    transform: translateY(-106%) scale(0.75);
  }
  .mdc-select__selected-text-container {
    display: flex;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    pointer-events: none;
    box-sizing: border-box;
    width: auto;
    min-width: 0;
    flex-grow: 1;
    height: 28px;
    border: none;
    outline: none;
    padding: 0;
    background-color: transparent;
    color: inherit;
  }
  .mdc-select__selected-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    width: 100%;
    text-align: left;
  }
  [dir="rtl"] .mdc-select__selected-text,
  .mdc-select__selected-text[dir="rtl"] {
    text-align: right;
  }
  .mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-floating-label {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid
    + .mdc-select-helper-text--validation-msg {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon {
    fill: #b00020;
    fill: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-select__dropdown-icon {
    fill: #b00020;
    fill: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--disabled {
    cursor: default;
    pointer-events: none;
  }
  .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item {
    padding-left: 12px;
    padding-right: 12px;
  }
  [dir="rtl"] .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item,
  .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item[dir="rtl"] {
    padding-left: 12px;
    padding-right: 12px;
  }
  .mdc-select__menu .mdc-list .mdc-select__icon {
    margin-left: 0;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-select__menu .mdc-list .mdc-select__icon,
  .mdc-select__menu .mdc-list .mdc-select__icon[dir="rtl"] {
    margin-left: 0;
    margin-right: 0;
  }
  .mdc-select__menu .mdc-list .mdc-list-item--selected,
  .mdc-select__menu .mdc-list .mdc-list-item--activated {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__graphic,
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--activated
    .mdc-list-item__graphic {
    color: #000;
    color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-select--filled .mdc-select__anchor {
    height: 56px;
    display: flex;
    align-items: baseline;
  }
  .mdc-select--filled .mdc-select__anchor::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
  }
  .mdc-select--filled.mdc-select--no-label
    .mdc-select__anchor
    .mdc-select__selected-text::before {
    content: "​";
  }
  .mdc-select--filled.mdc-select--no-label
    .mdc-select__anchor
    .mdc-select__selected-text-container {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before {
    display: none;
  }
  .mdc-select--filled .mdc-select__anchor {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor {
    background-color: whitesmoke;
  }
  .mdc-select--filled.mdc-select--disabled .mdc-select__anchor {
    background-color: #fafafa;
  }
  .mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.42);
  }
  .mdc-select--filled:not(.mdc-select--disabled):hover
    .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after {
    border-bottom-color: #6200ee;
    border-bottom-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.06);
  }
  .mdc-select--filled .mdc-floating-label {
    max-width: calc(100% - 64px);
  }
  .mdc-select--filled .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 64px / 0.75);
  }
  .mdc-select--filled .mdc-menu-surface--is-open-below {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .mdc-select--filled.mdc-select--focused.mdc-line-ripple::after {
    -webkit-transform: scale(1, 2);
    transform: scale(1, 2);
    opacity: 1;
  }
  .mdc-select--filled .mdc-floating-label {
    left: 16px;
    right: initial;
  }
  [dir="rtl"] .mdc-select--filled .mdc-floating-label,
  .mdc-select--filled .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 16px;
  }
  .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label {
    left: 48px;
    right: initial;
  }
  [dir="rtl"]
    .mdc-select--filled.mdc-select--with-leading-icon
    .mdc-floating-label,
  .mdc-select--filled.mdc-select--with-leading-icon
    .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 48px;
  }
  .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label {
    max-width: calc(100% - 96px);
  }
  .mdc-select--filled.mdc-select--with-leading-icon
    .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 96px / 0.75);
  }
  .mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled):hover
    .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--outlined {
    border: none;
  }
  .mdc-select--outlined .mdc-select__anchor {
    height: 56px;
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) scale(1);
    transform: translateY(-37.25px) scale(1);
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-select--outlined
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) scale(0.75);
    transform: translateY(-34.75px) scale(0.75);
  }
  .mdc-select--outlined
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-56px
      250ms 1;
    animation: mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-56px {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-select-outlined-56px {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-left-radius: var(--mdc-shape-small, 4px);
  }
  [dir="rtl"]
    .mdc-select--outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading[dir="rtl"] {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 4px;
    border-bottom-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-left-radius: 0;
  }
  @supports (top: max(0%)) {
    .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading {
      width: max(12px, var(--mdc-shape-small, 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch {
      max-width: calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2);
    }
  }
  .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 4px;
    border-bottom-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-left-radius: 0;
  }
  [dir="rtl"]
    .mdc-select--outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing,
  .mdc-select--outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing[dir="rtl"] {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-left-radius: var(--mdc-shape-small, 4px);
  }
  @supports (top: max(0%)) {
    .mdc-select--outlined .mdc-select__anchor {
      padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  [dir="rtl"] .mdc-select--outlined .mdc-select__anchor,
  .mdc-select--outlined .mdc-select__anchor[dir="rtl"] {
    padding-left: 0;
  }
  @supports (top: max(0%)) {
    [dir="rtl"] .mdc-select--outlined .mdc-select__anchor,
    .mdc-select--outlined .mdc-select__anchor[dir="rtl"] {
      padding-right: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-select--outlined + .mdc-select-helper-text {
      margin-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  [dir="rtl"] .mdc-select--outlined + .mdc-select-helper-text,
  .mdc-select--outlined + .mdc-select-helper-text[dir="rtl"] {
    margin-left: 0;
  }
  @supports (top: max(0%)) {
    [dir="rtl"] .mdc-select--outlined + .mdc-select-helper-text,
    .mdc-select--outlined + .mdc-select-helper-text[dir="rtl"] {
      margin-right: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor {
    background-color: transparent;
  }
  .mdc-select--outlined.mdc-select--disabled .mdc-select__anchor {
    background-color: transparent;
  }
  .mdc-select--outlined:not(.mdc-select--disabled)
    .mdc-notched-outline__leading,
  .mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,
  .mdc-select--outlined:not(.mdc-select--disabled)
    .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-width: 2px;
  }
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,
  .mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,
  .mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.06);
  }
  .mdc-select--outlined
    .mdc-select__anchor
    :not(.mdc-notched-outline--notched)
    .mdc-notched-outline__notch {
    max-width: calc(100% - 60px);
  }
  .mdc-select--outlined .mdc-select__anchor {
    display: flex;
    align-items: baseline;
    overflow: visible;
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined
      250ms 1;
    animation: mdc-floating-label-shake-float-above-select-outlined 250ms 1;
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) scale(1);
    transform: translateY(-37.25px) scale(1);
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-select--outlined
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) scale(0.75);
    transform: translateY(-34.75px) scale(0.75);
  }
  .mdc-select--outlined
    .mdc-select__anchor.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 1px;
  }
  .mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before {
    content: "​";
  }
  .mdc-select--outlined
    .mdc-select__anchor
    .mdc-select__selected-text-container {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .mdc-select--outlined .mdc-select__anchor::before {
    display: none;
  }
  .mdc-select--outlined .mdc-select__selected-text-container {
    display: flex;
    border: none;
    z-index: 1;
    background-color: transparent;
  }
  .mdc-select--outlined .mdc-select__icon {
    z-index: 2;
  }
  .mdc-select--outlined .mdc-floating-label {
    line-height: 1.15rem;
    left: 4px;
    right: initial;
  }
  [dir="rtl"] .mdc-select--outlined .mdc-floating-label,
  .mdc-select--outlined .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 4px;
  }
  .mdc-select--outlined.mdc-select--focused
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 2px;
  }
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled)
    .mdc-notched-outline__leading,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled)
    .mdc-notched-outline__notch,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled)
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused)
    .mdc-select__anchor:hover
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-width: 2px;
  }
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label {
    left: 36px;
    right: initial;
  }
  [dir="rtl"]
    .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label,
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 36px;
  }
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) translateX(-32px) scale(1);
    transform: translateY(-37.25px) translateX(-32px) scale(1);
  }
  [dir="rtl"]
    .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--float-above,
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--float-above[dir="rtl"] {
    -webkit-transform: translateY(-37.25px) translateX(32px) scale(1);
    transform: translateY(-37.25px) translateX(32px) scale(1);
  }
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) translateX(-32px) scale(0.75);
    transform: translateY(-34.75px) translateX(-32px) scale(0.75);
  }
  [dir="rtl"]
    .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above[dir="rtl"],
  [dir="rtl"]
    .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above[dir="rtl"] {
    -webkit-transform: translateY(-34.75px) translateX(32px) scale(0.75);
    transform: translateY(-34.75px) translateX(32px) scale(0.75);
  }
  .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px
      250ms 1;
    animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px
      250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  [dir="rtl"]
    .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-floating-label--shake,
  .mdc-select--outlined.mdc-select--with-leading-icon[dir="rtl"]
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px
      250ms 1;
    animation: mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px
      250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }
  .mdc-select--outlined.mdc-select--with-leading-icon
    .mdc-select__anchor
    :not(.mdc-notched-outline--notched)
    .mdc-notched-outline__notch {
    max-width: calc(100% - 96px);
  }
  .mdc-select--outlined .mdc-menu-surface {
    margin-bottom: 8px;
  }
  .mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,
  .mdc-select--outlined .mdc-menu-surface--is-open-below {
    margin-bottom: 0;
  }
  .mdc-select__anchor {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-select__anchor .mdc-select__ripple::before,
  .mdc-select__anchor .mdc-select__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-select__anchor .mdc-select__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-select__anchor.mdc-ripple-upgraded--unbounded
    .mdc-select__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-select__anchor.mdc-ripple-upgraded--foreground-activation
    .mdc-select__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation
    .mdc-select__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-select__anchor .mdc-select__ripple::before,
  .mdc-select__anchor .mdc-select__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-select__anchor .mdc-select__ripple::before,
  .mdc-select__anchor .mdc-select__ripple::after {
    background-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-select__anchor:hover .mdc-select__ripple::before {
    opacity: 0.04;
  }
  .mdc-select__anchor.mdc-ripple-upgraded--background-focused
    .mdc-select__ripple::before,
  .mdc-select__anchor:not(.mdc-ripple-upgraded):focus
    .mdc-select__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-select__anchor .mdc-select__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected
    .mdc-list-item__ripple::before,
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected
    .mdc-list-item__ripple::after {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected:hover
    .mdc-list-item__ripple::before {
    opacity: 0.04;
  }
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected.mdc-ripple-upgraded--background-focused
    .mdc-list-item__ripple::before,
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus
    .mdc-list-item__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected:not(.mdc-ripple-upgraded)
    .mdc-list-item__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-select__menu
    .mdc-list
    .mdc-list-item--selected:not(.mdc-ripple-upgraded):active
    .mdc-list-item__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-select-helper-text {
    margin: 0;
    margin-left: 16px;
    margin-right: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
  }
  [dir="rtl"] .mdc-select-helper-text,
  .mdc-select-helper-text[dir="rtl"] {
    margin-left: 16px;
    margin-right: 16px;
  }
  .mdc-select-helper-text::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
  }
  .mdc-select-helper-text--validation-msg {
    opacity: 0;
    transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-select--invalid + .mdc-select-helper-text--validation-msg,
  .mdc-select-helper-text--validation-msg-persistent {
    opacity: 1;
  }
  .mdc-select--with-leading-icon .mdc-select__icon {
    display: inline-block;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    align-self: center;
    background-color: transparent;
    fill: currentColor;
  }
  .mdc-select--with-leading-icon .mdc-select__icon {
    margin-left: 12px;
    margin-right: 12px;
  }
  [dir="rtl"] .mdc-select--with-leading-icon .mdc-select__icon,
  .mdc-select--with-leading-icon .mdc-select__icon[dir="rtl"] {
    margin-left: 12px;
    margin-right: 12px;
  }
  .mdc-select__icon:not([tabindex]),
  .mdc-select__icon[tabindex="-1"] {
    cursor: default;
    pointer-events: none;
  }
  .mdc-segmented-button {
    display: inline-block;
    font-size: 0;
  }
  .mdc-segmented-button__segment {
    border-color: rgba(0, 0, 0, 0.12);
    border-color: var(
      --mdc-segmented-button-outline-color,
      rgba(0, 0, 0, 0.12)
    );
  }
  .mdc-segmented-button__segment {
    color: rgba(0, 0, 0, 0.6);
    color: var(--mdc-segmented-button-unselected-ink-color, rgba(0, 0, 0, 0.6));
  }
  .mdc-segmented-button__segment {
    background-color: white;
    background-color: var(
      --mdc-segmented-button-unselected-container-fill-color,
      white
    );
  }
  .mdc-segmented-button__segment--selected {
    color: #6200ee;
    color: var(--mdc-segmented-button-selected-ink-color, #6200ee);
  }
  .mdc-segmented-button__segment--selected {
    background-color: rgba(98, 0, 238, 0.08);
    background-color: var(
      --mdc-segmented-button-selected-container-fill-color,
      rgba(98, 0, 238, 0.08)
    );
  }
  .mdc-segmented-button__segment {
    position: relative;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: 2.25rem;
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: 0.0892857143em;
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
    text-decoration: none;
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
    display: inline-flex;
    vertical-align: top;
    align-items: center;
    height: 36px;
    min-width: 48px;
    padding: 0 12px;
    border-width: 1px 0 1px 1px;
  }
  .mdc-segmented-button__segment .mdc-elevation-overlay {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .mdc-segmented-button__segment:hover {
    cursor: pointer;
  }
  .mdc-segmented-button__segment:focus {
    outline-width: 0;
  }
  .mdc-segmented-button__segment:first-child {
    border-radius: 4px 0 0 4px;
  }
  .mdc-segmented-button__segment:last-child {
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }
  .mdc-segmented-button__segment .mdc-segmented-button__segment__touch {
    position: absolute;
    top: 50%;
    right: 0;
    height: 48px;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .mdc-segmented-button__segment .mdc-segmented-button__segment--touch {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .mdc-touch-target-wrapper .mdc-segmented-button__segment {
    border-radius: 0;
    border-right-width: 0;
  }
  .mdc-touch-target-wrapper:first-child .mdc-segmented-button__segment {
    border-radius: 4px 0 0 4px;
  }
  .mdc-touch-target-wrapper:last-child .mdc-segmented-button__segment {
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }
  .mdc-segmented-button__icon {
    width: 24px;
    font-size: 18px;
  }
  .mdc-segmented-button__icon + .mdc-segmented-button__label {
    padding-left: 6px;
  }
  .mdc-segmented-button__segment {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    overflow: hidden;
  }
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded
    .mdc-segmented-button__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded
    .mdc-segmented-button__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded--unbounded
    .mdc-segmented-button__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-activation
    .mdc-segmented-button__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-deactivation
    .mdc-segmented-button__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded
    .mdc-segmented-button__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment .mdc-segmented-button__ripple::after {
    background-color: #6200ee;
  }
  .mdc-segmented-button__segment:hover .mdc-segmented-button__ripple::before {
    opacity: 0.04;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded--background-focused
    .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment.mdc-ripple-upgraded:focus-within
    .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus
    .mdc-segmented-button__ripple::before,
  .mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus-within
    .mdc-segmented-button__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-segmented-button__segment:not(.mdc-ripple-upgraded)
    .mdc-segmented-button__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-segmented-button__segment:not(.mdc-ripple-upgraded):active
    .mdc-segmented-button__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-segmented-button__segment.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-segmented-button__segment .mdc-segmented-button__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-slider__thumb {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-slider__thumb::before,
  .mdc-slider__thumb::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-slider__thumb::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-slider__thumb.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-slider__thumb.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-slider__thumb::before,
  .mdc-slider__thumb::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded::before,
  .mdc-slider__thumb.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-slider__thumb.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-slider__thumb::before,
  .mdc-slider__thumb::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-slider__thumb:hover::before {
    opacity: 0.04;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,
  .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-slider__thumb.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-slider {
    cursor: pointer;
    height: 48px;
    margin: 0 24px;
    position: relative;
    touch-action: none;
  }
  .mdc-slider .mdc-slider__track {
    height: 4px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
  }
  .mdc-slider .mdc-slider__track--active,
  .mdc-slider .mdc-slider__track--inactive {
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .mdc-slider .mdc-slider__track--active {
    border-radius: 3px;
    height: 6px;
    overflow: hidden;
    top: -1px;
  }
  .mdc-slider .mdc-slider__track--active_fill {
    border: 6px solid;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: relative;
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  [dir="rtl"] .mdc-slider .mdc-slider__track--active_fill,
  .mdc-slider .mdc-slider__track--active_fill[dir="rtl"] {
    -webkit-transform-origin: right;
    transform-origin: right;
  }
  .mdc-slider .mdc-slider__track--inactive {
    border-radius: 2px;
    height: 4px;
    left: 0;
    outline: 1px solid transparent;
    top: 0;
  }
  .mdc-slider .mdc-slider__track--active_fill {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill {
    border-color: #000;
    border-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-slider .mdc-slider__track--inactive {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
    opacity: 0.24;
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
    opacity: 0.24;
  }
  .mdc-slider .mdc-slider__value-indicator-container {
    bottom: 44px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .mdc-slider .mdc-slider__value-indicator {
    transition: -webkit-transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1),
      -webkit-transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);
    align-items: center;
    border-radius: 4px;
    display: flex;
    height: 32px;
    outline: 1px solid transparent;
    padding: 0 12px;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
  .mdc-slider .mdc-slider__value-indicator::before {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid;
    bottom: -5px;
    content: "";
    height: 0;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
  }
  .mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
    transition: -webkit-transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  @media (prefers-reduced-motion) {
    .mdc-slider .mdc-slider__value-indicator,
    .mdc-slider
      .mdc-slider__thumb--with-indicator
      .mdc-slider__value-indicator {
      transition: none;
    }
  }
  .mdc-slider .mdc-slider__value-indicator-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
    line-height: 1.375rem;
    line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
    letter-spacing: 0.0071428571em;
    letter-spacing: var(
      --mdc-typography-subtitle2-letter-spacing,
      0.0071428571em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);
  }
  .mdc-slider .mdc-slider__value-indicator {
    background-color: #000;
    opacity: 0.6;
  }
  .mdc-slider .mdc-slider__value-indicator::before {
    border-top-color: #000;
  }
  .mdc-slider .mdc-slider__value-indicator {
    color: #fff;
    color: var(--mdc-theme-on-primary, #fff);
  }
  .mdc-slider .mdc-slider__thumb {
    display: flex;
    height: 48px;
    left: -24px;
    outline: none;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 48px;
  }
  .mdc-slider .mdc-slider__thumb--top {
    z-index: 1;
  }
  .mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob {
    border: 1px solid;
    box-sizing: content-box;
    border-color: #fff;
  }
  .mdc-slider .mdc-slider__thumb-knob {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border: 10px solid;
    border-radius: 50%;
    box-sizing: border-box;
    height: 20px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 20px;
  }
  .mdc-slider .mdc-slider__thumb-knob {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
    border-color: #000;
    border-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-slider .mdc-slider__thumb::before,
  .mdc-slider .mdc-slider__thumb::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-slider .mdc-slider__thumb:hover::before {
    opacity: 0.04;
  }
  .mdc-slider
    .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,
  .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-slider .mdc-slider__tick-marks {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 1px;
    position: absolute;
    width: 100%;
  }
  .mdc-slider .mdc-slider__tick-mark--active,
  .mdc-slider .mdc-slider__tick-mark--inactive {
    border-radius: 50%;
    height: 2px;
    width: 2px;
  }
  .mdc-slider .mdc-slider__tick-mark--active {
    background-color: #fff;
    background-color: var(--mdc-theme-on-primary, #fff);
    opacity: 0.6;
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active {
    background-color: #fff;
    background-color: var(--mdc-theme-on-primary, #fff);
    opacity: 0.6;
  }
  .mdc-slider .mdc-slider__tick-mark--inactive {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
    opacity: 0.6;
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  .mdc-slider.mdc-slider--disabled {
    opacity: 0.38;
    cursor: auto;
  }
  .mdc-slider.mdc-slider--disabled .mdc-slider__thumb {
    pointer-events: none;
  }
  .mdc-slider--discrete .mdc-slider__thumb,
  .mdc-slider--discrete .mdc-slider__track--active_fill {
    transition: -webkit-transform 80ms ease;
    transition: transform 80ms ease;
    transition: transform 80ms ease, -webkit-transform 80ms ease;
  }
  @media (prefers-reduced-motion) {
    .mdc-slider--discrete .mdc-slider__thumb,
    .mdc-slider--discrete .mdc-slider__track--active_fill {
      transition: none;
    }
  }
  .mdc-snackbar {
    z-index: 8;
    margin: 8px;
    display: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    pointer-events: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .mdc-snackbar__surface {
    background-color: #333333;
  }
  .mdc-snackbar__label {
    color: rgba(255, 255, 255, 0.87);
  }
  .mdc-snackbar__surface {
    min-width: 344px;
  }
  @media (max-width: 480px), (max-width: 344px) {
    .mdc-snackbar__surface {
      min-width: 100%;
    }
  }
  .mdc-snackbar__surface {
    max-width: 672px;
  }
  .mdc-snackbar__surface {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
  .mdc-snackbar__surface {
    border-radius: 4px;
    border-radius: var(--mdc-shape-small, 4px);
  }
  .mdc-snackbar--opening,
  .mdc-snackbar--open,
  .mdc-snackbar--closing {
    display: flex;
  }
  .mdc-snackbar--open .mdc-snackbar__label,
  .mdc-snackbar--open .mdc-snackbar__actions {
    visibility: visible;
  }
  .mdc-snackbar--leading {
    justify-content: flex-start;
  }
  .mdc-snackbar--stacked .mdc-snackbar__label {
    padding-left: 16px;
    padding-right: 8px;
    padding-bottom: 12px;
  }
  [dir="rtl"] .mdc-snackbar--stacked .mdc-snackbar__label,
  .mdc-snackbar--stacked .mdc-snackbar__label[dir="rtl"] {
    padding-left: 8px;
    padding-right: 16px;
  }
  .mdc-snackbar--stacked .mdc-snackbar__surface {
    flex-direction: column;
    align-items: flex-start;
  }
  .mdc-snackbar--stacked .mdc-snackbar__actions {
    align-self: flex-end;
    margin-bottom: 8px;
  }
  .mdc-snackbar__surface {
    padding-left: 0;
    padding-right: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }
  [dir="rtl"] .mdc-snackbar__surface,
  .mdc-snackbar__surface[dir="rtl"] {
    padding-left: 8px;
    padding-right: 0;
  }
  .mdc-snackbar--open .mdc-snackbar__surface {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-snackbar--closing .mdc-snackbar__surface {
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mdc-snackbar__label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    padding-left: 16px;
    padding-right: 8px;
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0;
    visibility: hidden;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  [dir="rtl"] .mdc-snackbar__label,
  .mdc-snackbar__label[dir="rtl"] {
    padding-left: 8px;
    padding-right: 16px;
  }
  .mdc-snackbar__label::before {
    display: inline;
    content: attr(data-mdc-snackbar-label-text);
  }
  .mdc-snackbar__actions {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-sizing: border-box;
    visibility: hidden;
  }
  .mdc-snackbar__action:not(:disabled) {
    color: #bb86fc;
  }
  .mdc-snackbar__action::before,
  .mdc-snackbar__action::after {
    background-color: #bb86fc;
  }
  .mdc-snackbar__action:hover::before {
    opacity: 0.08;
  }
  .mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,
  .mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-snackbar__action:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-snackbar__action.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-snackbar__dismiss {
    color: rgba(255, 255, 255, 0.87);
  }
  .mdc-snackbar__dismiss::before,
  .mdc-snackbar__dismiss::after {
    background-color: rgba(255, 255, 255, 0.87);
  }
  .mdc-snackbar__dismiss:hover::before {
    opacity: 0.08;
  }
  .mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,
  .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-snackbar__dismiss.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-snackbar__dismiss.mdc-snackbar__dismiss {
    width: 36px;
    height: 36px;
    padding: 9px;
    font-size: 18px;
  }
  .mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,
  .mdc-snackbar__dismiss.mdc-snackbar__dismiss img {
    width: 18px;
    height: 18px;
  }
  .mdc-snackbar__action + .mdc-snackbar__dismiss {
    margin-left: 8px;
    margin-right: 0;
  }
  [dir="rtl"] .mdc-snackbar__action + .mdc-snackbar__dismiss,
  .mdc-snackbar__action + .mdc-snackbar__dismiss[dir="rtl"] {
    margin-left: 0;
    margin-right: 8px;
  }
  .mdc-switch__thumb-underlay {
    left: -14px;
    right: initial;
    top: -17px;
    width: 48px;
    height: 48px;
  }
  [dir="rtl"] .mdc-switch__thumb-underlay,
  .mdc-switch__thumb-underlay[dir="rtl"] {
    left: initial;
    right: -14px;
  }
  .mdc-switch__native-control {
    width: 64px;
    height: 48px;
  }
  .mdc-switch {
    display: inline-block;
    position: relative;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .mdc-switch.mdc-switch--checked .mdc-switch__track {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-switch.mdc-switch--checked .mdc-switch__thumb {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
    border-color: #018786;
    border-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
    background-color: #000;
    background-color: var(--mdc-theme-on-surface, #000);
  }
  .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
    border-color: #fff;
    border-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-switch__native-control {
    left: 0;
    right: initial;
    position: absolute;
    top: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    pointer-events: auto;
    transition: -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  [dir="rtl"] .mdc-switch__native-control,
  .mdc-switch__native-control[dir="rtl"] {
    left: initial;
    right: 0;
  }
  .mdc-switch__track {
    box-sizing: border-box;
    width: 36px;
    height: 14px;
    border: 1px solid transparent;
    border-radius: 7px;
    opacity: 0.38;
    transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-switch__thumb-underlay {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition: background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 90ms cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-switch__thumb {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 10px solid;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  .mdc-switch--checked .mdc-switch__track {
    opacity: 0.54;
  }
  .mdc-switch--checked .mdc-switch__thumb-underlay {
    -webkit-transform: translateX(16px);
    transform: translateX(16px);
  }
  [dir="rtl"] .mdc-switch--checked .mdc-switch__thumb-underlay,
  .mdc-switch--checked .mdc-switch__thumb-underlay[dir="rtl"] {
    -webkit-transform: translateX(-16px);
    transform: translateX(-16px);
  }
  .mdc-switch--checked .mdc-switch__native-control {
    -webkit-transform: translateX(-16px);
    transform: translateX(-16px);
  }
  [dir="rtl"] .mdc-switch--checked .mdc-switch__native-control,
  .mdc-switch--checked .mdc-switch__native-control[dir="rtl"] {
    -webkit-transform: translateX(16px);
    transform: translateX(16px);
  }
  .mdc-switch--disabled {
    opacity: 0.38;
    pointer-events: none;
  }
  .mdc-switch--disabled .mdc-switch__thumb {
    border-width: 1px;
  }
  .mdc-switch--disabled .mdc-switch__native-control {
    cursor: default;
    pointer-events: none;
  }
  .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,
  .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after {
    background-color: #9e9e9e;
  }
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay:hover::before {
    opacity: 0.08;
  }
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-switch:not(.mdc-switch--checked)
    .mdc-switch__thumb-underlay.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-switch__thumb-underlay {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-switch__thumb-underlay::before,
  .mdc-switch__thumb-underlay::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-switch__thumb-underlay::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-switch__thumb-underlay::before,
  .mdc-switch__thumb-underlay::after {
    top: calc(50% - 50%);
    left: calc(50% - 50%);
    width: 100%;
    height: 100%;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    top: var(--mdc-ripple-top, calc(50% - 50%));
    left: var(--mdc-ripple-left, calc(50% - 50%));
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-switch__thumb-underlay::before,
  .mdc-switch__thumb-underlay::after {
    background-color: #018786;
    background-color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-switch__thumb-underlay:hover::before {
    opacity: 0.04;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,
  .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-switch__thumb-underlay.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-tab {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: 2.25rem;
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: 0.0892857143em;
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
    text-decoration: none;
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
    padding-right: 24px;
    padding-left: 24px;
    position: relative;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    outline: none;
    background: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    z-index: 1;
  }
  .mdc-tab .mdc-tab__text-label {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-tab .mdc-tab__icon {
    color: rgba(0, 0, 0, 0.54);
    fill: currentColor;
  }
  .mdc-tab::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  .mdc-tab--min-width {
    flex: 0 1 auto;
  }
  .mdc-tab__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    pointer-events: none;
  }
  .mdc-tab__text-label {
    transition: 150ms color linear;
    display: inline-block;
    line-height: 1;
    z-index: 2;
  }
  .mdc-tab__icon {
    transition: 150ms color linear;
    width: 24px;
    height: 24px;
    font-size: 24px;
    z-index: 2;
  }
  .mdc-tab--stacked .mdc-tab__content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mdc-tab--stacked .mdc-tab__text-label {
    padding-top: 6px;
    padding-bottom: 4px;
  }
  .mdc-tab--active .mdc-tab__text-label {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-tab--active .mdc-tab__icon {
    color: #6200ee;
    color: var(--mdc-theme-primary, #6200ee);
    fill: currentColor;
  }
  .mdc-tab--active .mdc-tab__text-label,
  .mdc-tab--active .mdc-tab__icon {
    transition-delay: 100ms;
  }
  .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon + .mdc-tab__text-label {
    padding-left: 8px;
    padding-right: 0;
  }
  [dir="rtl"]
    .mdc-tab:not(.mdc-tab--stacked)
    .mdc-tab__icon
    + .mdc-tab__text-label,
  .mdc-tab:not(.mdc-tab--stacked)
    .mdc-tab__icon
    + .mdc-tab__text-label[dir="rtl"] {
    padding-left: 0;
    padding-right: 8px;
  }
  .mdc-tab__ripple {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .mdc-tab__ripple::before,
  .mdc-tab__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-tab__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-tab__ripple.mdc-ripple-upgraded::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-tab__ripple::before,
  .mdc-tab__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-tab__ripple::before,
  .mdc-tab__ripple::after {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-tab__ripple:hover::before {
    opacity: 0.04;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,
  .mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-tab__ripple:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-tab__ripple.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-tab-bar {
    width: 100%;
  }
  .mdc-tab {
    height: 48px;
  }
  .mdc-tab--stacked {
    height: 72px;
  }
  .mdc-tab-indicator {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  .mdc-tab-indicator .mdc-tab-indicator__content--underline {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-tab-indicator .mdc-tab-indicator__content--icon {
    color: #018786;
    color: var(--mdc-theme-secondary, #018786);
  }
  .mdc-tab-indicator .mdc-tab-indicator__content--underline {
    border-top-width: 2px;
  }
  .mdc-tab-indicator .mdc-tab-indicator__content--icon {
    height: 34px;
    font-size: 34px;
  }
  .mdc-tab-indicator__content {
    -webkit-transform-origin: left;
    transform-origin: left;
    opacity: 0;
  }
  .mdc-tab-indicator__content--underline {
    align-self: flex-end;
    box-sizing: border-box;
    width: 100%;
    border-top-style: solid;
  }
  .mdc-tab-indicator__content--icon {
    align-self: center;
    margin: 0 auto;
  }
  .mdc-tab-indicator--active .mdc-tab-indicator__content {
    opacity: 1;
  }
  .mdc-tab-indicator .mdc-tab-indicator__content {
    transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1),
      250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
    transition: none;
  }
  .mdc-tab-indicator--fade .mdc-tab-indicator__content {
    transition: 150ms opacity linear;
  }
  .mdc-tab-indicator--active.mdc-tab-indicator--fade
    .mdc-tab-indicator__content {
    transition-delay: 100ms;
  }
  .mdc-tab-scroller {
    overflow-y: hidden;
  }
  .mdc-tab-scroller.mdc-tab-scroller--animating
    .mdc-tab-scroller__scroll-content {
    transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);
    transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1),
      250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-tab-scroller__test {
    position: absolute;
    top: -9999px;
    width: 100px;
    height: 100px;
    overflow-x: scroll;
  }
  .mdc-tab-scroller__scroll-area {
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: hidden;
  }
  .mdc-tab-scroller__scroll-area::-webkit-scrollbar,
  .mdc-tab-scroller__test::-webkit-scrollbar {
    display: none;
  }
  .mdc-tab-scroller__scroll-area--scroll {
    overflow-x: scroll;
  }
  .mdc-tab-scroller__scroll-content {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    -webkit-transform: none;
    transform: none;
    will-change: transform;
  }
  .mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {
    justify-content: flex-start;
  }
  .mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {
    justify-content: flex-end;
  }
  .mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {
    justify-content: center;
  }
  .mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {
    -webkit-overflow-scrolling: auto;
  }
  .mdc-text-field--filled {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    will-change: transform, opacity;
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
    transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--unbounded
    .mdc-text-field__ripple::after {
    top: var(--mdc-ripple-top, 0);
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation
    .mdc-text-field__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
    animation: mdc-ripple-fg-radius-in 225ms forwards,
      mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation
    .mdc-text-field__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
    animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
    transform: translate(var(--mdc-ripple-fg-translate-end, 0))
      scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }
  .mdc-text-field__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .mdc-text-field {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    display: inline-flex;
    align-items: baseline;
    padding: 0 16px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    will-change: opacity, transform, color;
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.87);
  }
  @media all {
    .mdc-text-field:not(.mdc-text-field--disabled)
      .mdc-text-field__input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled)
      .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled)
      .mdc-text-field__input::-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled)
      .mdc-text-field__input::placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
  }
  @media all {
    .mdc-text-field:not(.mdc-text-field--disabled)
      .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .mdc-text-field .mdc-text-field__input {
    caret-color: #6200ee;
    caret-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    .mdc-text-field-character-counter,
  .mdc-text-field:not(.mdc-text-field--disabled)
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    .mdc-text-field__icon--leading {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    .mdc-text-field__icon--trailing {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    .mdc-text-field__affix--prefix {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled)
    .mdc-text-field__affix--suffix {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field .mdc-floating-label {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    pointer-events: none;
  }
  .mdc-text-field__input {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    height: 28px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    min-width: 0;
    border: none;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
  }
  .mdc-text-field__input::-ms-clear {
    display: none;
  }
  .mdc-text-field__input::-webkit-calendar-picker-indicator {
    display: none;
  }
  .mdc-text-field__input:focus {
    outline: none;
  }
  .mdc-text-field__input:invalid {
    box-shadow: none;
  }
  @media all {
    .mdc-text-field__input::-webkit-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input:-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input::-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input::placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
  @media all {
    .mdc-text-field__input:-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
  @media all {
    .mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,
    .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,
    .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--no-label .mdc-text-field__input::-ms-input-placeholder,
    .mdc-text-field--focused .mdc-text-field__input::-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--no-label .mdc-text-field__input::placeholder,
    .mdc-text-field--focused .mdc-text-field__input::placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
  }
  @media all {
    .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,
    .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
  }
  .mdc-text-field__affix {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    height: 28px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    white-space: nowrap;
  }
  .mdc-text-field--label-floating .mdc-text-field__affix,
  .mdc-text-field--no-label .mdc-text-field__affix {
    opacity: 1;
  }
  @supports (-webkit-hyphens: none) {
    .mdc-text-field--outlined .mdc-text-field__affix {
      align-items: center;
      align-self: center;
      display: inline-flex;
      height: 100%;
    }
  }
  .mdc-text-field__affix--prefix {
    padding-left: 0;
    padding-right: 2px;
  }
  [dir="rtl"] .mdc-text-field__affix--prefix,
  .mdc-text-field__affix--prefix[dir="rtl"] {
    padding-left: 2px;
    padding-right: 0;
  }
  .mdc-text-field--end-aligned .mdc-text-field__affix--prefix {
    padding-left: 0;
    padding-right: 12px;
  }
  [dir="rtl"] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,
  .mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir="rtl"] {
    padding-left: 12px;
    padding-right: 0;
  }
  .mdc-text-field__affix--suffix {
    padding-left: 12px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-text-field__affix--suffix,
  .mdc-text-field__affix--suffix[dir="rtl"] {
    padding-left: 0;
    padding-right: 12px;
  }
  .mdc-text-field--end-aligned .mdc-text-field__affix--suffix {
    padding-left: 2px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,
  .mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir="rtl"] {
    padding-left: 0;
    padding-right: 2px;
  }
  .mdc-text-field--filled {
    height: 56px;
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    background-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--filled:hover .mdc-text-field__ripple::before {
    opacity: 0.04;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--background-focused
    .mdc-text-field__ripple::before,
  .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus
    .mdc-text-field__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-text-field--filled::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled) {
    background-color: whitesmoke;
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled)
    .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.42);
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled):hover
    .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--filled .mdc-line-ripple::after {
    border-bottom-color: #6200ee;
    border-bottom-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field--filled .mdc-floating-label {
    left: 16px;
    right: initial;
  }
  [dir="rtl"] .mdc-text-field--filled .mdc-floating-label,
  .mdc-text-field--filled .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 16px;
  }
  .mdc-text-field--filled .mdc-floating-label--float-above {
    -webkit-transform: translateY(-106%) scale(0.75);
    transform: translateY(-106%) scale(0.75);
  }
  .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
    height: 100%;
  }
  .mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
    display: none;
  }
  .mdc-text-field--filled.mdc-text-field--no-label::before {
    display: none;
  }
  @supports (-webkit-hyphens: none) {
    .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix {
      align-items: center;
      align-self: center;
      display: inline-flex;
      height: 100%;
    }
  }
  .mdc-text-field--outlined {
    height: 56px;
    overflow: visible;
  }
  .mdc-text-field--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) scale(1);
    transform: translateY(-37.25px) scale(1);
  }
  .mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) scale(0.75);
    transform: translateY(-34.75px) scale(0.75);
  }
  .mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined
      250ms 1;
    animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  .mdc-text-field--outlined .mdc-text-field__input {
    height: 100%;
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled)
    .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__trailing {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-left-radius: var(--mdc-shape-small, 4px);
  }
  [dir="rtl"]
    .mdc-text-field--outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-text-field--outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading[dir="rtl"] {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 4px;
    border-bottom-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-left-radius: 0;
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading {
      width: max(12px, var(--mdc-shape-small, 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
      max-width: calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2);
    }
  }
  .mdc-text-field--outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-right-radius: 4px;
    border-bottom-right-radius: var(--mdc-shape-small, 4px);
    border-bottom-left-radius: 0;
  }
  [dir="rtl"]
    .mdc-text-field--outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing,
  .mdc-text-field--outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing[dir="rtl"] {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small, 4px);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-left-radius: var(--mdc-shape-small, 4px);
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined {
      padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined {
      padding-right: max(16px, var(--mdc-shape-small, 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined + .mdc-text-field-helper-line {
      padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined + .mdc-text-field-helper-line {
      padding-right: max(16px, var(--mdc-shape-small, 4px));
    }
  }
  .mdc-text-field--outlined.mdc-text-field--with-leading-icon {
    padding-left: 0;
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined.mdc-text-field--with-leading-icon {
      padding-right: max(16px, var(--mdc-shape-small, 4px));
    }
  }
  [dir="rtl"] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,
  .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir="rtl"] {
    padding-right: 0;
  }
  @supports (top: max(0%)) {
    [dir="rtl"] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,
    .mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir="rtl"] {
      padding-left: max(16px, var(--mdc-shape-small, 4px));
    }
  }
  .mdc-text-field--outlined.mdc-text-field--with-trailing-icon {
    padding-right: 0;
  }
  @supports (top: max(0%)) {
    .mdc-text-field--outlined.mdc-text-field--with-trailing-icon {
      padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  [dir="rtl"] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,
  .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir="rtl"] {
    padding-left: 0;
  }
  @supports (top: max(0%)) {
    [dir="rtl"] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,
    .mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir="rtl"] {
      padding-right: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
    }
  }
  .mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
    padding-left: 0;
    padding-right: 0;
  }
  .mdc-text-field--outlined
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 1px;
  }
  .mdc-text-field--outlined .mdc-text-field__ripple::before,
  .mdc-text-field--outlined .mdc-text-field__ripple::after {
    content: none;
  }
  .mdc-text-field--outlined .mdc-floating-label {
    left: 4px;
    right: initial;
  }
  [dir="rtl"] .mdc-text-field--outlined .mdc-floating-label,
  .mdc-text-field--outlined .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 4px;
  }
  .mdc-text-field--outlined .mdc-text-field__input {
    display: flex;
    border: none !important;
    background-color: transparent;
  }
  .mdc-text-field--outlined .mdc-notched-outline {
    z-index: 1;
  }
  .mdc-text-field--textarea {
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    padding: 0;
    transition: none;
  }
  .mdc-text-field--textarea .mdc-floating-label {
    top: 19px;
  }
  .mdc-text-field--textarea
    .mdc-floating-label:not(.mdc-floating-label--float-above) {
    -webkit-transform: none;
    transform: none;
  }
  .mdc-text-field--textarea .mdc-text-field__input {
    flex-grow: 1;
    height: auto;
    min-height: 1.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    resize: none;
    padding: 0 16px;
    line-height: 1.5rem;
  }
  .mdc-text-field--textarea.mdc-text-field--filled::before {
    display: none;
  }
  .mdc-text-field--textarea.mdc-text-field--filled
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-10.25px) scale(0.75);
    transform: translateY(-10.25px) scale(0.75);
  }
  .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-textarea-filled
      250ms 1;
    animation: mdc-floating-label-shake-float-above-textarea-filled 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-textarea-filled {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-textarea-filled {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-10.25px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
    }
  }
  .mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input {
    margin-top: 23px;
    margin-bottom: 9px;
  }
  .mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label
    .mdc-text-field__input {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 0;
  }
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-27.25px) scale(1);
    transform: translateY(-27.25px) scale(1);
  }
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-24.75px) scale(0.75);
    transform: translateY(-24.75px) scale(0.75);
  }
  .mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--textarea.mdc-text-field--outlined
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-textarea-outlined
      250ms 1;
    animation: mdc-floating-label-shake-float-above-textarea-outlined 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-textarea-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-textarea-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px)
        scale(0.75);
      transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
    }
  }
  .mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label {
    top: 18px;
  }
  .mdc-text-field--textarea.mdc-text-field--with-internal-counter
    .mdc-text-field__input {
    margin-bottom: 2px;
  }
  .mdc-text-field--textarea.mdc-text-field--with-internal-counter
    .mdc-text-field-character-counter {
    align-self: flex-end;
    padding: 0 16px;
  }
  .mdc-text-field--textarea.mdc-text-field--with-internal-counter
    .mdc-text-field-character-counter::after {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: -16px;
  }
  .mdc-text-field--textarea.mdc-text-field--with-internal-counter
    .mdc-text-field-character-counter::before {
    display: none;
  }
  .mdc-text-field__resizer {
    align-self: stretch;
    display: inline-flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 100%;
    max-width: 100%;
    min-height: 56px;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    min-width: -moz-available;
    min-width: -webkit-fill-available;
    overflow: hidden;
    resize: both;
  }
  .mdc-text-field--filled .mdc-text-field__resizer {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
  .mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,
  .mdc-text-field--filled
    .mdc-text-field__resizer
    .mdc-text-field-character-counter {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  .mdc-text-field--outlined .mdc-text-field__resizer {
    -webkit-transform: translateX(-1px) translateY(-1px);
    transform: translateX(-1px) translateY(-1px);
  }
  [dir="rtl"] .mdc-text-field--outlined .mdc-text-field__resizer,
  .mdc-text-field--outlined .mdc-text-field__resizer[dir="rtl"] {
    -webkit-transform: translateX(1px) translateY(-1px);
    transform: translateX(1px) translateY(-1px);
  }
  .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,
  .mdc-text-field--outlined
    .mdc-text-field__resizer
    .mdc-text-field-character-counter {
    -webkit-transform: translateX(1px) translateY(1px);
    transform: translateX(1px) translateY(1px);
  }
  [dir="rtl"]
    .mdc-text-field--outlined
    .mdc-text-field__resizer
    .mdc-text-field__input,
  .mdc-text-field--outlined
    .mdc-text-field__resizer
    .mdc-text-field__input[dir="rtl"],
  [dir="rtl"]
    .mdc-text-field--outlined
    .mdc-text-field__resizer
    .mdc-text-field-character-counter,
  .mdc-text-field--outlined
    .mdc-text-field__resizer
    .mdc-text-field-character-counter[dir="rtl"] {
    -webkit-transform: translateX(-1px) translateY(1px);
    transform: translateX(-1px) translateY(1px);
  }
  .mdc-text-field--with-leading-icon {
    padding-left: 0;
    padding-right: 16px;
  }
  [dir="rtl"] .mdc-text-field--with-leading-icon,
  .mdc-text-field--with-leading-icon[dir="rtl"] {
    padding-left: 16px;
    padding-right: 0;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--filled
    .mdc-floating-label {
    max-width: calc(100% - 48px);
    left: 48px;
    right: initial;
  }
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--filled
    .mdc-floating-label,
  .mdc-text-field--with-leading-icon.mdc-text-field--filled
    .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 48px;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--filled
    .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 64px / 0.75);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label {
    left: 36px;
    right: initial;
  }
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label[dir="rtl"] {
    left: initial;
    right: 36px;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    :not(.mdc-notched-outline--notched)
    .mdc-notched-outline__notch {
    max-width: calc(100% - 60px);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) translateX(-32px) scale(1);
    transform: translateY(-37.25px) translateX(-32px) scale(1);
  }
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--float-above[dir="rtl"] {
    -webkit-transform: translateY(-37.25px) translateX(32px) scale(1);
    transform: translateY(-37.25px) translateX(32px) scale(1);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) translateX(-32px) scale(0.75);
    transform: translateY(-34.75px) translateX(-32px) scale(0.75);
  }
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above[dir="rtl"],
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above[dir="rtl"] {
    -webkit-transform: translateY(-34.75px) translateX(32px) scale(0.75);
    transform: translateY(-34.75px) translateX(32px) scale(0.75);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded
    .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-notched-outline--upgraded
    .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon
      250ms 1;
    animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon
      250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  [dir="rtl"]
    .mdc-text-field--with-leading-icon.mdc-text-field--outlined
    .mdc-floating-label--shake,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir="rtl"]
    .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon
      250ms 1;
    animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon
      250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(
        0.5,
        0,
        0.701732,
        0.495819
      );
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px)
        scale(0.75);
      transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }
  .mdc-text-field--with-trailing-icon {
    padding-left: 16px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-text-field--with-trailing-icon,
  .mdc-text-field--with-trailing-icon[dir="rtl"] {
    padding-left: 0;
    padding-right: 16px;
  }
  .mdc-text-field--with-trailing-icon.mdc-text-field--filled
    .mdc-floating-label {
    max-width: calc(100% - 64px);
  }
  .mdc-text-field--with-trailing-icon.mdc-text-field--filled
    .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 64px / 0.75);
  }
  .mdc-text-field--with-trailing-icon.mdc-text-field--outlined
    :not(.mdc-notched-outline--notched)
    .mdc-notched-outline__notch {
    max-width: calc(100% - 60px);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
    padding-left: 0;
    padding-right: 0;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled
    .mdc-floating-label {
    max-width: calc(100% - 96px);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled
    .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 96px / 0.75);
  }
  .mdc-text-field-helper-line {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .mdc-text-field + .mdc-text-field-helper-line {
    padding-right: 16px;
    padding-left: 16px;
  }
  .mdc-form-field > .mdc-text-field + label {
    align-self: flex-start;
  }
  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(98, 0, 238, 0.87);
  }
  .mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--focused .mdc-notched-outline__trailing {
    border-width: 2px;
  }
  .mdc-text-field--focused
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
    opacity: 1;
  }
  .mdc-text-field--focused.mdc-text-field--outlined
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 2px;
  }
  .mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea
    .mdc-notched-outline--notched
    .mdc-notched-outline__notch {
    padding-top: 0;
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):hover
    .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-line-ripple::after {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text--validation-msg {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid .mdc-text-field__input {
    caret-color: #b00020;
    caret-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-text-field__icon--trailing {
    color: #b00020;
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled)
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover
    .mdc-notched-outline
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused
    .mdc-notched-outline__trailing {
    border-color: #b00020;
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text--validation-msg {
    opacity: 1;
  }
  .mdc-text-field--disabled {
    pointer-events: none;
  }
  .mdc-text-field--disabled .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.38);
  }
  @media all {
    .mdc-text-field--disabled
      .mdc-text-field__input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input::placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
  }
  @media all {
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
  }
  .mdc-text-field--disabled .mdc-floating-label {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled
    + .mdc-text-field-helper-line
    .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field-character-counter,
  .mdc-text-field--disabled
    + .mdc-text-field-helper-line
    .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field__icon--leading {
    color: rgba(0, 0, 0, 0.3);
  }
  .mdc-text-field--disabled .mdc-text-field__icon--trailing {
    color: rgba(0, 0, 0, 0.3);
  }
  .mdc-text-field--disabled .mdc-text-field__affix--prefix {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field__affix--suffix {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.06);
  }
  .mdc-text-field--disabled .mdc-notched-outline__leading,
  .mdc-text-field--disabled .mdc-notched-outline__notch,
  .mdc-text-field--disabled .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.06);
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled
      .mdc-text-field__input::-webkit-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input::placeholder {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-floating-label {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled
      + .mdc-text-field-helper-line
      .mdc-text-field-helper-text {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field-character-counter,
    .mdc-text-field--disabled
      + .mdc-text-field-helper-line
      .mdc-text-field-character-counter {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__icon--leading {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__icon--trailing {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__affix--prefix {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__affix--suffix {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-line-ripple::before {
      border-bottom-color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-notched-outline__leading,
    .mdc-text-field--disabled .mdc-notched-outline__notch,
    .mdc-text-field--disabled .mdc-notched-outline__trailing {
      border-color: GrayText;
    }
  }
  .mdc-text-field--disabled .mdc-floating-label {
    cursor: default;
  }
  .mdc-text-field--disabled.mdc-text-field--filled {
    background-color: #fafafa;
  }
  .mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple {
    display: none;
  }
  .mdc-text-field--disabled .mdc-text-field__input {
    pointer-events: auto;
  }
  .mdc-text-field--end-aligned .mdc-text-field__input {
    text-align: right;
  }
  [dir="rtl"] .mdc-text-field--end-aligned .mdc-text-field__input,
  .mdc-text-field--end-aligned .mdc-text-field__input[dir="rtl"] {
    text-align: left;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__input,
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__affix,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__input,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__affix {
    direction: ltr;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__affix--prefix {
    padding-left: 0;
    padding-right: 2px;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__affix--suffix {
    padding-left: 12px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__icon--leading {
    order: 1;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__affix--suffix {
    order: 2;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__input,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__input {
    order: 3;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__affix--prefix {
    order: 4;
  }
  [dir="rtl"] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,
  .mdc-text-field--ltr-text[dir="rtl"] .mdc-text-field__icon--trailing {
    order: 5;
  }
  [dir="rtl"]
    .mdc-text-field--ltr-text.mdc-text-field--end-aligned
    .mdc-text-field__input,
  .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir="rtl"]
    .mdc-text-field__input {
    text-align: right;
  }
  [dir="rtl"]
    .mdc-text-field--ltr-text.mdc-text-field--end-aligned
    .mdc-text-field__affix--prefix,
  .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir="rtl"]
    .mdc-text-field__affix--prefix {
    padding-right: 12px;
  }
  [dir="rtl"]
    .mdc-text-field--ltr-text.mdc-text-field--end-aligned
    .mdc-text-field__affix--suffix,
  .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir="rtl"]
    .mdc-text-field__affix--suffix {
    padding-left: 2px;
  }
  .mdc-text-field-helper-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
    margin: 0;
    opacity: 0;
    will-change: opacity;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-text-field-helper-text::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
  }
  .mdc-text-field-helper-text--persistent {
    transition: none;
    opacity: 1;
    will-change: initial;
  }
  .mdc-text-field-character-counter {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    display: block;
    margin-top: 0;
    line-height: normal;
    margin-left: auto;
    margin-right: 0;
    padding-left: 16px;
    padding-right: 0;
    white-space: nowrap;
  }
  .mdc-text-field-character-counter::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
  }
  [dir="rtl"] .mdc-text-field-character-counter,
  .mdc-text-field-character-counter[dir="rtl"] {
    margin-left: 0;
    margin-right: auto;
  }
  [dir="rtl"] .mdc-text-field-character-counter,
  .mdc-text-field-character-counter[dir="rtl"] {
    padding-left: 0;
    padding-right: 16px;
  }
  .mdc-text-field__icon {
    align-self: center;
    cursor: pointer;
  }
  .mdc-text-field__icon:not([tabindex]),
  .mdc-text-field__icon[tabindex="-1"] {
    cursor: default;
    pointer-events: none;
  }
  .mdc-text-field__icon svg {
    display: block;
  }
  .mdc-text-field__icon--leading {
    margin-left: 16px;
    margin-right: 8px;
  }
  [dir="rtl"] .mdc-text-field__icon--leading,
  .mdc-text-field__icon--leading[dir="rtl"] {
    margin-left: 8px;
    margin-right: 16px;
  }
  .mdc-text-field__icon--trailing {
    padding: 12px;
    margin-left: 0px;
    margin-right: 0px;
  }
  [dir="rtl"] .mdc-text-field__icon--trailing,
  .mdc-text-field__icon--trailing[dir="rtl"] {
    margin-left: 0px;
    margin-right: 0px;
  }
  :root {
    --mdc-theme-primary: #6200ee;
    --mdc-theme-secondary: #018786;
    --mdc-theme-background: #fff;
    --mdc-theme-surface: #fff;
    --mdc-theme-error: #b00020;
    --mdc-theme-on-primary: #fff;
    --mdc-theme-on-secondary: #fff;
    --mdc-theme-on-surface: #000;
    --mdc-theme-on-error: #fff;
    --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-dark: white;
    --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
    --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
  }
  .mdc-theme--primary {
    color: #6200ee !important;
    color: var(--mdc-theme-primary, #6200ee) !important;
  }
  .mdc-theme--secondary {
    color: #018786 !important;
    color: var(--mdc-theme-secondary, #018786) !important;
  }
  .mdc-theme--background {
    background-color: #fff;
    background-color: var(--mdc-theme-background, #fff);
  }
  .mdc-theme--surface {
    background-color: #fff;
    background-color: var(--mdc-theme-surface, #fff);
  }
  .mdc-theme--error {
    color: #b00020 !important;
    color: var(--mdc-theme-error, #b00020) !important;
  }
  .mdc-theme--on-primary {
    color: #fff !important;
    color: var(--mdc-theme-on-primary, #fff) !important;
  }
  .mdc-theme--on-secondary {
    color: #fff !important;
    color: var(--mdc-theme-on-secondary, #fff) !important;
  }
  .mdc-theme--on-surface {
    color: #000 !important;
    color: var(--mdc-theme-on-surface, #000) !important;
  }
  .mdc-theme--on-error {
    color: #fff !important;
    color: var(--mdc-theme-on-error, #fff) !important;
  }
  .mdc-theme--text-primary-on-background {
    color: rgba(0, 0, 0, 0.87) !important;
    color: var(
      --mdc-theme-text-primary-on-background,
      rgba(0, 0, 0, 0.87)
    ) !important;
  }
  .mdc-theme--text-secondary-on-background {
    color: rgba(0, 0, 0, 0.54) !important;
    color: var(
      --mdc-theme-text-secondary-on-background,
      rgba(0, 0, 0, 0.54)
    ) !important;
  }
  .mdc-theme--text-hint-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(
      --mdc-theme-text-hint-on-background,
      rgba(0, 0, 0, 0.38)
    ) !important;
  }
  .mdc-theme--text-disabled-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(
      --mdc-theme-text-disabled-on-background,
      rgba(0, 0, 0, 0.38)
    ) !important;
  }
  .mdc-theme--text-icon-on-background {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(
      --mdc-theme-text-icon-on-background,
      rgba(0, 0, 0, 0.38)
    ) !important;
  }
  .mdc-theme--text-primary-on-light {
    color: rgba(0, 0, 0, 0.87) !important;
    color: var(
      --mdc-theme-text-primary-on-light,
      rgba(0, 0, 0, 0.87)
    ) !important;
  }
  .mdc-theme--text-secondary-on-light {
    color: rgba(0, 0, 0, 0.54) !important;
    color: var(
      --mdc-theme-text-secondary-on-light,
      rgba(0, 0, 0, 0.54)
    ) !important;
  }
  .mdc-theme--text-hint-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important;
  }
  .mdc-theme--text-disabled-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(
      --mdc-theme-text-disabled-on-light,
      rgba(0, 0, 0, 0.38)
    ) !important;
  }
  .mdc-theme--text-icon-on-light {
    color: rgba(0, 0, 0, 0.38) !important;
    color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important;
  }
  .mdc-theme--text-primary-on-dark {
    color: white !important;
    color: var(--mdc-theme-text-primary-on-dark, white) !important;
  }
  .mdc-theme--text-secondary-on-dark {
    color: rgba(255, 255, 255, 0.7) !important;
    color: var(
      --mdc-theme-text-secondary-on-dark,
      rgba(255, 255, 255, 0.7)
    ) !important;
  }
  .mdc-theme--text-hint-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    color: var(
      --mdc-theme-text-hint-on-dark,
      rgba(255, 255, 255, 0.5)
    ) !important;
  }
  .mdc-theme--text-disabled-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    color: var(
      --mdc-theme-text-disabled-on-dark,
      rgba(255, 255, 255, 0.5)
    ) !important;
  }
  .mdc-theme--text-icon-on-dark {
    color: rgba(255, 255, 255, 0.5) !important;
    color: var(
      --mdc-theme-text-icon-on-dark,
      rgba(255, 255, 255, 0.5)
    ) !important;
  }
  .mdc-theme--primary-bg {
    background-color: #6200ee !important;
    background-color: var(--mdc-theme-primary, #6200ee) !important;
  }
  .mdc-theme--secondary-bg {
    background-color: #018786 !important;
    background-color: var(--mdc-theme-secondary, #018786) !important;
  }
  .mdc-tooltip__surface {
    border-radius: 4px;
    border-radius: var(--mdc-shape-small, 4px);
  }
  .mdc-tooltip__surface {
    color: white;
    color: var(--mdc-theme-text-primary-on-dark, white);
  }
  .mdc-tooltip__surface {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mdc-tooltip__surface {
    word-break: break-all;
    word-break: var(--mdc-tooltip-word-break, normal);
    overflow-wrap: anywhere;
  }
  .mdc-tooltip {
    z-index: 2;
  }
  .mdc-tooltip {
    position: fixed;
    display: none;
  }
  .mdc-tooltip--shown,
  .mdc-tooltip--showing,
  .mdc-tooltip--hide {
    display: inline-flex;
  }
  .mdc-tooltip__surface {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    line-height: 16px;
    padding: 4px 8px;
    min-width: 40px;
    max-width: 200px;
    min-height: 24px;
    max-height: 40vh;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    text-align: center;
    opacity: 0;
    outline: 1px solid transparent;
  }
  .mdc-tooltip--multiline .mdc-tooltip__surface {
    text-align: left;
  }
  [dir="rtl"] .mdc-tooltip--multiline .mdc-tooltip__surface,
  .mdc-tooltip--multiline .mdc-tooltip__surface[dir="rtl"] {
    text-align: right;
  }
  .mdc-tooltip--shown .mdc-tooltip__surface {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  .mdc-tooltip--showing-transition .mdc-tooltip__surface {
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
  }
  .mdc-tooltip--hide .mdc-tooltip__surface {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .mdc-tooltip--hide-transition .mdc-tooltip__surface {
    transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mdc-top-app-bar {
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
    color: white;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    z-index: 4;
  }
  .mdc-top-app-bar .mdc-top-app-bar__action-item,
  .mdc-top-app-bar .mdc-top-app-bar__navigation-icon {
    color: #fff;
    color: var(--mdc-theme-on-primary, #fff);
  }
  .mdc-top-app-bar .mdc-top-app-bar__action-item::before,
  .mdc-top-app-bar .mdc-top-app-bar__action-item::after,
  .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,
  .mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after {
    background-color: #fff;
    background-color: var(--mdc-theme-on-primary, #fff);
  }
  .mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,
  .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before {
    opacity: 0.08;
  }
  .mdc-top-app-bar
    .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,
  .mdc-top-app-bar
    .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,
  .mdc-top-app-bar
    .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,
  .mdc-top-app-bar
    .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-top-app-bar
    .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,
  .mdc-top-app-bar
    .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }
  .mdc-top-app-bar
    .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,
  .mdc-top-app-bar
    .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.24;
  }
  .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,
  .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.24;
  }
  .mdc-top-app-bar__row {
    display: flex;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
  }
  .mdc-top-app-bar__section {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    min-width: 0;
    padding: 8px 12px;
    z-index: 1;
  }
  .mdc-top-app-bar__section--align-start {
    justify-content: flex-start;
    order: -1;
  }
  .mdc-top-app-bar__section--align-end {
    justify-content: flex-end;
    order: 1;
  }
  .mdc-top-app-bar__title {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline6-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1.25rem;
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: 0.0125em;
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline6-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    padding-left: 20px;
    padding-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }
  [dir="rtl"] .mdc-top-app-bar__title,
  .mdc-top-app-bar__title[dir="rtl"] {
    padding-left: 0;
    padding-right: 20px;
  }
  .mdc-top-app-bar--short-collapsed {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 0;
  }
  [dir="rtl"] .mdc-top-app-bar--short-collapsed,
  .mdc-top-app-bar--short-collapsed[dir="rtl"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 24px;
  }
  .mdc-top-app-bar--short {
    top: 0;
    right: auto;
    left: 0;
    width: 100%;
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  [dir="rtl"] .mdc-top-app-bar--short,
  .mdc-top-app-bar--short[dir="rtl"] {
    right: 0;
    left: auto;
  }
  .mdc-top-app-bar--short .mdc-top-app-bar__row {
    height: 56px;
  }
  .mdc-top-app-bar--short .mdc-top-app-bar__section {
    padding: 4px;
  }
  .mdc-top-app-bar--short .mdc-top-app-bar__title {
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }
  .mdc-top-app-bar--short-collapsed {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 56px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title {
    display: none;
  }
  .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item {
    transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item {
    width: 112px;
  }
  .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item
    .mdc-top-app-bar__section--align-end {
    padding-left: 0;
    padding-right: 12px;
  }
  [dir="rtl"]
    .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item
    .mdc-top-app-bar__section--align-end,
  .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item
    .mdc-top-app-bar__section--align-end[dir="rtl"] {
    padding-left: 12px;
    padding-right: 0;
  }
  .mdc-top-app-bar--dense .mdc-top-app-bar__row {
    height: 48px;
  }
  .mdc-top-app-bar--dense .mdc-top-app-bar__section {
    padding: 0 4px;
  }
  .mdc-top-app-bar--dense .mdc-top-app-bar__title {
    padding-left: 12px;
    padding-right: 0;
  }
  [dir="rtl"] .mdc-top-app-bar--dense .mdc-top-app-bar__title,
  .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir="rtl"] {
    padding-left: 0;
    padding-right: 12px;
  }
  .mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 128px;
  }
  .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    align-self: flex-end;
    padding-bottom: 2px;
  }
  .mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,
  .mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon {
    align-self: flex-start;
  }
  .mdc-top-app-bar--fixed {
    transition: box-shadow 200ms linear;
  }
  .mdc-top-app-bar--fixed-scrolled {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 200ms linear;
  }
  .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row {
    height: 96px;
  }
  .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section {
    padding: 0 12px;
  }
  .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title {
    padding-left: 20px;
    padding-right: 0;
    padding-bottom: 9px;
  }
  [dir="rtl"]
    .mdc-top-app-bar--dense.mdc-top-app-bar--prominent
    .mdc-top-app-bar__title,
  .mdc-top-app-bar--dense.mdc-top-app-bar--prominent
    .mdc-top-app-bar__title[dir="rtl"] {
    padding-left: 0;
    padding-right: 20px;
  }
  .mdc-top-app-bar--fixed-adjust {
    padding-top: 64px;
  }
  .mdc-top-app-bar--dense-fixed-adjust {
    padding-top: 48px;
  }
  .mdc-top-app-bar--short-fixed-adjust {
    padding-top: 56px;
  }
  .mdc-top-app-bar--prominent-fixed-adjust {
    padding-top: 128px;
  }
  .mdc-top-app-bar--dense-prominent-fixed-adjust {
    padding-top: 96px;
  }
  @media (max-width: 599px) {
    .mdc-top-app-bar__row {
      height: 56px;
    }
    .mdc-top-app-bar__section {
      padding: 4px;
    }
    .mdc-top-app-bar--short {
      transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed {
      transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end {
      padding-left: 0;
      padding-right: 12px;
    }
    [dir="rtl"]
      .mdc-top-app-bar--short-collapsed
      .mdc-top-app-bar__section--align-end,
    .mdc-top-app-bar--short-collapsed
      .mdc-top-app-bar__section--align-end[dir="rtl"] {
      padding-left: 12px;
      padding-right: 0;
    }
    .mdc-top-app-bar--prominent .mdc-top-app-bar__title {
      padding-bottom: 6px;
    }
    .mdc-top-app-bar--fixed-adjust {
      padding-top: 56px;
    }
  }
  .mdc-typography {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(--mdc-typography-font-family, Roboto, sans-serif);
  }
  .mdc-typography--headline1 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 6rem;
    font-size: var(--mdc-typography-headline1-font-size, 6rem);
    line-height: 6rem;
    line-height: var(--mdc-typography-headline1-line-height, 6rem);
    font-weight: 300;
    font-weight: var(--mdc-typography-headline1-font-weight, 300);
    letter-spacing: -0.015625em;
    letter-spacing: var(--mdc-typography-headline1-letter-spacing, -0.015625em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline1-text-transform, inherit);
  }
  .mdc-typography--headline2 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 3.75rem;
    font-size: var(--mdc-typography-headline2-font-size, 3.75rem);
    line-height: 3.75rem;
    line-height: var(--mdc-typography-headline2-line-height, 3.75rem);
    font-weight: 300;
    font-weight: var(--mdc-typography-headline2-font-weight, 300);
    letter-spacing: -0.0083333333em;
    letter-spacing: var(
      --mdc-typography-headline2-letter-spacing,
      -0.0083333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline2-text-transform, inherit);
  }
  .mdc-typography--headline3 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline3-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 3rem;
    font-size: var(--mdc-typography-headline3-font-size, 3rem);
    line-height: 3.125rem;
    line-height: var(--mdc-typography-headline3-line-height, 3.125rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-headline3-font-weight, 400);
    letter-spacing: normal;
    letter-spacing: var(--mdc-typography-headline3-letter-spacing, normal);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline3-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline3-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline3-text-transform, inherit);
  }
  .mdc-typography--headline4 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline4-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 2.125rem;
    font-size: var(--mdc-typography-headline4-font-size, 2.125rem);
    line-height: 2.5rem;
    line-height: var(--mdc-typography-headline4-line-height, 2.5rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-headline4-font-weight, 400);
    letter-spacing: 0.0073529412em;
    letter-spacing: var(
      --mdc-typography-headline4-letter-spacing,
      0.0073529412em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline4-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline4-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline4-text-transform, inherit);
  }
  .mdc-typography--headline5 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline5-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1.5rem;
    font-size: var(--mdc-typography-headline5-font-size, 1.5rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-headline5-line-height, 2rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-headline5-font-weight, 400);
    letter-spacing: normal;
    letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline5-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline5-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline5-text-transform, inherit);
  }
  .mdc-typography--headline6 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-headline6-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1.25rem;
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: 0.0125em;
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-headline6-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
  }
  .mdc-typography--subtitle1 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    line-height: 1.75rem;
    line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
  }
  .mdc-typography--subtitle2 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-subtitle2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
    line-height: 1.375rem;
    line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
    letter-spacing: 0.0071428571em;
    letter-spacing: var(
      --mdc-typography-subtitle2-letter-spacing,
      0.0071428571em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-subtitle2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);
  }
  .mdc-typography--body1 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body1-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 1rem;
    font-size: var(--mdc-typography-body1-font-size, 1rem);
    line-height: 1.5rem;
    line-height: var(--mdc-typography-body1-line-height, 1.5rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body1-font-weight, 400);
    letter-spacing: 0.03125em;
    letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body1-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body1-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body1-text-transform, inherit);
  }
  .mdc-typography--body2 {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-body2-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-body2-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: 0.0178571429em;
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-body2-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
  }
  .mdc-typography--caption {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-caption-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    letter-spacing: var(
      --mdc-typography-caption-letter-spacing,
      0.0333333333em
    );
    text-decoration: inherit;
    -webkit-text-decoration: var(
      --mdc-typography-caption-text-decoration,
      inherit
    );
    text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
  }
  .mdc-typography--button {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-button-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.875rem;
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: 2.25rem;
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: 0.0892857143em;
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
    text-decoration: none;
    -webkit-text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
  }
  .mdc-typography--overline {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-family: var(
      --mdc-typography-overline-font-family,
      var(--mdc-typography-font-family, Roboto, sans-serif)
    );
    font-size: 0.75rem;
    font-size: var(--mdc-typography-overline-font-size, 0.75rem);
    line-height: 2rem;
    line-height: var(--mdc-typography-overline-line-height, 2rem);
    font-weight: 500;
    font-weight: var(--mdc-typography-overline-font-weight, 500);
    letter-spacing: 0.1666666667em;
    letter-spacing: var(
      --mdc-typography-overline-letter-spacing,
      0.1666666667em
    );
    text-decoration: none;
    -webkit-text-decoration: var(
      --mdc-typography-overline-text-decoration,
      none
    );
    text-decoration: var(--mdc-typography-overline-text-decoration, none);
    text-transform: uppercase;
    text-transform: var(--mdc-typography-overline-text-transform, uppercase);
  }

  /*# sourceMappingURL=material-components-web.min.css.map*/
`;
