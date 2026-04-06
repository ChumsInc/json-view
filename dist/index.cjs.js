Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));let l=require(`react`),u=require(`@emotion/styled`);u=c(u);let d=require(`react/jsx-runtime`);var f={scheme:`google`,author:`seth wright (http://sethawright.com)`,base00:`#1d1f21`,base01:`#282a2e`,base02:`#373b41`,base03:`#969896`,base04:`#b4b7b4`,base05:`#c5c8c6`,base06:`#e0e0e0`,base07:`#ffffff`,base08:`#CC342B`,base09:`#F96A38`,base0A:`#FBA922`,base0B:`#198844`,base0C:`#3971ED`,base0D:`#3971ED`,base0E:`#A36AC7`,base0F:`#3971ED`},p={scheme:`monokai`,author:`wimer hazenberg (http://www.monokai.nl)`,base00:`#272822`,base01:`#383830`,base02:`#49483e`,base03:`#75715e`,base04:`#a59f85`,base05:`#f8f8f2`,base06:`#f5f4f1`,base07:`#f9f8f5`,base08:`#f92672`,base09:`#fd971f`,base0A:`#f4bf75`,base0B:`#a6e22e`,base0C:`#a1efe4`,base0D:`#66d9ef`,base0E:`#ae81ff`,base0F:`#cc6633`},m=e=>{let t=typeof e;switch(t){case`object`:return e===null?`null`:Array.isArray(e)?`array`:t;default:return t}},h=e=>{try{return JSON.stringify(e,void 0,2)}catch(e){return e instanceof Error?e.message:null}},g=c(o(((e,t)=>{(function(){"use strict";var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}))(),1),_=u.default.dt`
    //padding: 0 0.25rem;
    color: var(--theme-base04);
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`,v=u.default.div`
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
`,y=({children:e,type:t,expandable:n,expanded:r,onClick:i})=>(0,d.jsxs)(_,{children:[(0,d.jsx)(v,{className:(0,g.default)(`type--${t}`,{expandable:n,open:r}),onClick:()=>{n&&i&&i()}}),(0,d.jsxs)(`div`,{children:[e,`:`]})]}),b={dark:p,light:f},x={collapsedStringLength:25,maxArrayElements:25,maxObjectElements:50,defaultOpenLevels:1},S=(0,l.createContext)(x),C=u.default.dl`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;
    min-height: 1.25rem;
    gap: 0.5rem;
`,w=u.default.dt`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`,T=u.default.dd`
    color: var(--theme-base0D);
    display: block;
    font-weight: 700;
    cursor: pointer;
`,E=({currentIndex:e,onClick:t})=>{let{maxArrayElements:n}=(0,l.useContext)(S);return(0,d.jsxs)(C,{onClick:t,children:[(0,d.jsxs)(w,{children:[`[0 … `,e*n-1,`]`]}),(0,d.jsx)(T,{className:`json-view--value`,children:`prev`})]})},D=({currentIndex:e,maxItems:t,onClick:n})=>{let{maxArrayElements:r}=(0,l.useContext)(S);return(0,d.jsxs)(`div`,{className:`json-view--node`,onClick:n,children:[(0,d.jsxs)(`dt`,{className:`json-view--key`,children:[`[`,(e+1)*r,` … `,t-1,`]`]}),(0,d.jsx)(`dd`,{className:`json-view--value`,children:`next`})]})},O=u.default.span`
    &::before {
        content: '[ ';
    }

    &::after {
        content: ' ]';
    }
`,k=(0,l.memo)(({value:e,nodeKey:t,open:n=0})=>{let r=Math.max(n??0,0)>0,{maxArrayElements:i}=(0,l.useContext)(S),[a,o]=(0,l.useState)(r),[s,c]=(0,l.useState)(0),u=Math.floor(e.length/i);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(y,{expandable:!!e.length,type:typeof e,expanded:a,onClick:()=>o(!a),children:t}),!a&&(0,d.jsx)(`dd`,{children:(0,d.jsx)(O,{children:e.length>0&&(0,d.jsxs)(`span`,{children:[`… `,e.length]})})})]}),a&&(0,d.jsxs)(`dl`,{children:[s>0&&(0,d.jsx)(E,{currentIndex:s,onClick:()=>{c(Math.max(s-1,0))}}),e.filter((e,t)=>Math.floor(t/i)===s).map((e,t)=>(0,d.jsx)(I,{nodeKey:t+s*i,value:e},t)),s<u&&u>0&&(0,d.jsx)(D,{currentIndex:s,maxItems:e.length,onClick:()=>{c(Math.min(u,s+1))}})]})]})}),A=u.default.span`
    &::before {
        content: '{ ';
    }
    &::after {
        content: ' }';
    }
`,j=(0,l.memo)(({value:e,nodeKey:t,open:n=0})=>{let[r,i]=(0,l.useState)(Math.max(n??0,0)>0),{collapsedStringLength:a}=(0,l.useContext)(S),o=Object.keys(e),s=o.map(t=>`${t}:${JSON.stringify(e[t])}`).join(`, `);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(y,{expandable:o.length>0,expanded:r,onClick:()=>i(!r),type:typeof e,children:t}),!r&&(0,d.jsx)(`dd`,{children:(0,d.jsxs)(A,{children:[s.slice(0,a),s.length>a&&(0,d.jsx)(`span`,{className:`ms-1`,children:`…`})]})})]}),r&&(0,d.jsx)(`dl`,{children:o.map(t=>(0,d.jsx)(I,{nodeKey:t,value:e[t],open:n-1},t))})]})}),M=u.default.dd`
    color: var(--theme-base09);
`,N=({nodeKey:e,value:t})=>(0,d.jsxs)(C,{children:[(0,d.jsx)(y,{type:typeof t,children:e}),(0,d.jsx)(M,{children:h(t)})]}),P=u.default.dd`
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
`,F=({nodeKey:e,value:t})=>{let{collapsedStringLength:n}=(0,l.useContext)(S),[r,i]=(0,l.useState)(t.length<=n);return(0,d.jsxs)(C,{children:[(0,d.jsx)(y,{expandable:t.length>n,expanded:r,onClick:()=>i(!r),type:typeof t,children:e}),(0,d.jsxs)(P,{className:(0,g.default)({collapsed:!r}),children:[!r&&(0,d.jsx)(d.Fragment,{children:t.replace(/[\n\t]/g,` `)}),r&&(0,d.jsx)(d.Fragment,{children:t})]})]})},I=({nodeKey:e,value:t,open:n=0})=>{switch(m(t)){case`number`:case`boolean`:case`bigint`:return(0,d.jsx)(N,{value:t,nodeKey:e,open:n});case`string`:return(0,d.jsx)(F,{value:t,nodeKey:e,open:n});case`object`:return(0,d.jsx)(j,{nodeKey:e,value:t,open:n});case`array`:return(0,d.jsx)(k,{nodeKey:e,value:t,open:n})}return(0,d.jsxs)(C,{children:[(0,d.jsx)(y,{type:typeof t,children:e}),(0,d.jsx)(`dd`,{children:h(t)})]})},L=u.default.div`
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

`,R=({data:e,theme:t,dark:n,rootNodeName:r,collapsedStringLength:i,maxArrayElements:a,maxObjectElements:o,defaultOpenLevels:s})=>{let[c,u]=(0,l.useState)(f),[p,m]=(0,l.useState)({}),[h,_]=(0,l.useState)({}),v=(0,l.useContext)(S),[y,C]=(0,l.useState)({...x,...v});return(0,l.useEffect)(()=>{C({...x,...v})},[v]),(0,l.useEffect)(()=>{u(t||(n?b.dark:b.light))},[t]),(0,l.useEffect)(()=>{C({...y,...v,collapsedStringLength:i??v.collapsedStringLength,maxArrayElements:a??v.maxArrayElements,maxObjectElements:o??v.maxObjectElements,defaultOpenLevels:s??v.defaultOpenLevels})},[i,a,o,s]),(0,l.useEffect)(()=>{m({"--theme-base00":c.base00,"--theme-base01":c.base01,"--theme-base02":c.base02,"--theme-base03":c.base03,"--theme-base04":c.base04,"--theme-base05":c.base05,"--theme-base06":c.base06,"--theme-base07":c.base07,"--theme-base08":c.base08,"--theme-base09":c.base09,"--theme-base0A":c.base0A,"--theme-base0B":c.base0B,"--theme-base0C":c.base0C,"--theme-base0D":c.base0D,"--theme-base0E":c.base0E,"--theme-base0F":c.base0F})},[c]),(0,l.useEffect)(()=>{_(e)},[e]),(0,d.jsx)(S.Provider,{value:y,children:(0,d.jsx)(L,{children:(0,d.jsx)(`div`,{className:(0,g.default)(`json-view`,{"json-view--dark":n}),style:p,children:(0,d.jsx)(`dl`,{children:(0,d.jsx)(I,{nodeKey:r||`root`,value:h,open:s})})})})})};exports.JSONView=R,exports.JSONViewContext=S,exports.defaultSettings=x,exports.google=f,exports.monokai=p,exports.preferredThemes=b;
//# sourceMappingURL=index.cjs.js.map