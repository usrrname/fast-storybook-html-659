(()=>{"use strict";var e,r={46:(e,r,t)=>{var o=t(273),n=t(31);class i extends n.g{}const a=t(506).i`
    :host {
        display: inline-flex;
        font-family: var(--body-font);
        outline: none;
        user-select: none;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        height: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
        );
        min-width: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
        );
        background-color: var(--neutral-fill-rest);
        color: var(--neutral-foreground-rest);
        border-radius: calc(var(--control-corner-radius) * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    :host([hidden]) {
        display: none;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(var(--stroke-width) * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-weight: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: var(--neutral-fill-hover);
    }

    :host(:active) {
        background-color: var(--neutral-fill-active);
    }

    .control:focus-visible {
        border-color: var(--focus-stroke-outer);
        box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px)
            var(--focus-stroke-outer) inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="content"]),
    ::slotted([slot="end"]),
    .content {
        display: flex;
    }

    .control.icon-only {
        line-height: 0;
        padding: 0;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`;i.define({name:"fast-button",template:(0,o.u)(),styles:a})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(r,t,n,i)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,i]=e[d],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=n();void 0!==c&&(r=c)}}return r}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,n,i]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={841:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[a,l,s]=t,c=0;if(a.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var d=s(o)}for(r&&r(t);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},t=self.webpackChunkfast_storybook_html_webpack=self.webpackChunkfast_storybook_html_webpack||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[736],(()=>o(46)));n=o.O(n)})();