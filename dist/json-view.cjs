Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let l=require(`react`),u=require(`@emotion/styled`);u=c(u,1);let d=require(`react/jsx-runtime`);var f={scheme:`google`,author:`seth wright (http://sethawright.com)`,base00:`#1d1f21`,base01:`#282a2e`,base02:`#373b41`,base03:`#969896`,base04:`#b4b7b4`,base05:`#c5c8c6`,base06:`#e0e0e0`,base07:`#ffffff`,base08:`#CC342B`,base09:`#F96A38`,base0A:`#FBA922`,base0B:`#198844`,base0C:`#3971ED`,base0D:`#3971ED`,base0E:`#A36AC7`,base0F:`#3971ED`},p={scheme:`monokai`,author:`wimer hazenberg (http://www.monokai.nl)`,base00:`#272822`,base01:`#383830`,base02:`#49483e`,base03:`#75715e`,base04:`#a59f85`,base05:`#f8f8f2`,base06:`#f5f4f1`,base07:`#f9f8f5`,base08:`#f92672`,base09:`#fd971f`,base0A:`#f4bf75`,base0B:`#a6e22e`,base0C:`#a1efe4`,base0D:`#66d9ef`,base0E:`#ae81ff`,base0F:`#cc6633`},m=e=>{try{return JSON.stringify(e,void 0,2)}catch(e){return e instanceof Error?e.message:null}},h=e=>{let t=typeof e;return t===`number`||t===`bigint`||t===`boolean`},g=e=>typeof e==`object`&&!!e,_=c(o(((e,t)=>{(function(){"use strict";var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}))(),1),v=u.default.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`,y=u.default.div`
    padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    width: 1rem;
    height: 1rem;
    flex-direction: row;
    gap: 0.25rem;
    cursor: default;
    &.expandable {
        transition: all 0.1s ease-in-out;
        border-radius: 0.25rem;
        transform: rotate(0deg);
        transform-origin: center;
        cursor: pointer;
        &.type--string {
            ::before {
                content: '+';
                font-size: 1rem;
            }
            &.open {
                ::before {
                    content: '-';
                }
                transform: rotate(0deg);
            }
        }
        &::before {
            content: '▶';
            font-size: 0.5rem;
        }
        &.open {
            transform: rotate(90deg);
        }
    }
`,b=({children:e,type:t,expandable:n,expanded:r,onClick:i})=>(0,d.jsxs)(v,{children:[(0,d.jsx)(y,{className:(0,_.default)(`type--${t}`,{expandable:n,open:r}),onClick:()=>{n&&i&&i()}}),(0,d.jsxs)(`div`,{children:[e,`:`]})]}),x={dark:p,light:f},S={collapsedStringLength:25,maxArrayElements:25,maxObjectElements:50,defaultOpenLevels:1},C=(0,l.createContext)(S),w=u.default.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`,T=u.default.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`,E=u.default.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`,D=({currentIndex:e,onClick:t})=>{let{maxArrayElements:n}=(0,l.useContext)(C);return(0,d.jsxs)(w,{onClick:t,children:[(0,d.jsxs)(T,{children:[`[0 … `,e*n-1,`]`]}),(0,d.jsx)(E,{className:`json-view--value`,children:`prev`})]})},O=({currentIndex:e,maxItems:t,onClick:n})=>{let{maxArrayElements:r}=(0,l.useContext)(C);return(0,d.jsxs)(w,{onClick:n,children:[(0,d.jsxs)(T,{children:[`[`,(e+1)*r,` … `,t-1,`]`]}),(0,d.jsx)(E,{children:`next`})]})},k=u.default.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`,A=(0,l.memo)(({value:e,nodeKey:t,open:n=0})=>{let r=Math.max(n??0,0)>0,{maxArrayElements:i}=(0,l.useContext)(C),[a,o]=(0,l.useState)(r),[s,c]=(0,l.useState)(0),u=Math.floor(e.length/i);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{expandable:!!e.length,type:typeof e,expanded:a,onClick:()=>o(!a),children:t}),!a&&(0,d.jsx)(`dd`,{children:(0,d.jsx)(k,{children:e.length>0&&(0,d.jsxs)(`span`,{children:[`… `,e.length]})})})]}),a&&(0,d.jsxs)(`dl`,{children:[s>0&&(0,d.jsx)(D,{currentIndex:s,onClick:()=>{c(Math.max(s-1,0))}}),e.filter((e,t)=>Math.floor(t/i)===s).map((e,t)=>(0,d.jsx)(L,{nodeKey:t+s*i,value:e},t)),s<u&&u>0&&(0,d.jsx)(O,{currentIndex:s,maxItems:e.length,onClick:()=>{c(Math.min(u,s+1))}})]})]})}),j=u.default.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`,M=(0,l.memo)(({value:e,nodeKey:t,open:n=0})=>{let[r,i]=(0,l.useState)(Math.max(n??0,0)>0),{collapsedStringLength:a}=(0,l.useContext)(C),o=Object.keys(e),s=o.map(t=>`${t}:${JSON.stringify(e[t])}`).join(`, `);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{expandable:o.length>0,expanded:r,onClick:()=>i(!r),type:typeof e,children:t}),!r&&(0,d.jsx)(w,{children:(0,d.jsxs)(j,{children:[s.slice(0,a),s.length>a&&(0,d.jsx)(`span`,{className:`ms-1`,children:`…`})]})})]}),r&&(0,d.jsx)(`dl`,{children:o.map(t=>(0,d.jsx)(L,{nodeKey:t,value:e[t],open:n-1},t))})]})}),N=u.default.dd`
    color: var(--theme-base09);
`,P=({nodeKey:e,value:t})=>(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{type:typeof t,children:e}),(0,d.jsx)(N,{children:m(t)})]}),F=u.default.dd`
    color: var(--theme-base0B);
    width: 100%;
    &:not(.collapsed) {
        white-space: pre-wrap;
        word-break: break-all;
    }
    &.collapsed {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &::before {
        content: '"';
    }

    &::after {
        content: '"';
    }
`,I=({nodeKey:e,value:t})=>{let{collapsedStringLength:n}=(0,l.useContext)(C),[r,i]=(0,l.useState)(t.length<=n);return(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{expandable:t.length>n,expanded:r,onClick:()=>i(!r),type:typeof t,children:e}),(0,d.jsxs)(F,{className:(0,_.default)({collapsed:!r}),children:[!r&&(0,d.jsx)(d.Fragment,{children:t.replace(/[\n\t]/g,` `)}),r&&(0,d.jsx)(d.Fragment,{children:t})]})]})},L=({nodeKey:e,value:t,open:n=0})=>h(t)?(0,d.jsx)(P,{value:t,nodeKey:e,open:n}):typeof t==`string`?(0,d.jsx)(I,{value:t,nodeKey:e,open:n}):Array.isArray(t)?(0,d.jsx)(A,{value:t,nodeKey:e,open:n}):g(t)?(0,d.jsx)(M,{value:t,nodeKey:e,open:n}):(0,d.jsxs)(w,{children:[(0,d.jsx)(b,{type:typeof t,children:e}),(0,d.jsx)(`dd`,{children:m(t)})]}),R=u.default.div`
    .json-view {
        --theme-base00: #002b36;
        --theme-base01: #073642;
        --theme-base02: #586e75;
        --theme-base03: #657b83;
        --theme-base04: #839496;
        --theme-base05: #93a1a1;
        --theme-base06: #eee8d5;
        --theme-base07: #fdf6e3;
        --theme-base08: #dc322f;
        --theme-base09: #cb4b16;
        --theme-base0A: #b58900;
        --theme-base0B: #859900;
        --theme-base0C: #2aa198;
        --theme-base0D: #268bd2;
        --theme-base0E: #6c71c4;
        --theme-base0F: #d33682;

        font-size: 0.7rem;
        line-height: 0.85rem;
        max-height: 90vh;
        overflow: auto;
        font-family: Roboto Mono, monospace;
        white-space: pre-wrap;
        background-color: var(--theme-base07);
        color: var(--theme-base04);
        padding: 1rem;

        &--dark {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }
        @media (prefers-color-scheme: dark) {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }

        dl {
            margin-left: 0;
            margin-bottom: 0;
            & dl {
                margin-left: 1rem;
            }
            dd {
                margin-bottom: 0.25rem;
            }
        }
    }

`;function z({data:e,theme:t,dark:n,rootNodeName:r,collapsedStringLength:i,maxArrayElements:a,maxObjectElements:o,defaultOpenLevels:s}){let[c,u]=(0,l.useState)({}),[f,p]=(0,l.useState)(e),m=(0,l.useContext)(C);(0,l.useEffect)(()=>{Promise.resolve().then(()=>{let e=t??(n?x.dark:x.light);u({"--theme-base00":e.base00,"--theme-base01":e.base01,"--theme-base02":e.base02,"--theme-base03":e.base03,"--theme-base04":e.base04,"--theme-base05":e.base05,"--theme-base06":e.base06,"--theme-base07":e.base07,"--theme-base08":e.base08,"--theme-base09":e.base09,"--theme-base0A":e.base0A,"--theme-base0B":e.base0B,"--theme-base0C":e.base0C,"--theme-base0D":e.base0D,"--theme-base0E":e.base0E,"--theme-base0F":e.base0F})})},[t,n]);let h={collapsedStringLength:i??m?.collapsedStringLength??S.collapsedStringLength,maxArrayElements:a??m.maxArrayElements??S.maxArrayElements,maxObjectElements:o??m.maxObjectElements??S.maxObjectElements,defaultOpenLevels:s??m.defaultOpenLevels??S.defaultOpenLevels};return(0,l.useEffect)(()=>{Promise.resolve().then(()=>{p(e)})},[e]),(0,d.jsx)(C.Provider,{value:h,children:(0,d.jsx)(R,{children:(0,d.jsx)(`div`,{className:(0,_.default)(`json-view`,{"json-view--dark":n}),style:c,children:(0,d.jsx)(`dl`,{children:(0,d.jsx)(L,{nodeKey:r||`root`,value:e,open:s})})})})})}exports.JSONView=z,exports.JSONViewContext=C,exports.defaultSettings=S,exports.google=f,exports.monokai=p,exports.preferredThemes=x;
//# sourceMappingURL=json-view.cjs.map