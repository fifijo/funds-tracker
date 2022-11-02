import{a as n,D as M,E as U,j as c,G as H,P as z,J as G,K as L,M as b,O as T,Q as j,U as I,V as k,d as V}from"./index.c4ac14b0.js";import{F as $}from"./FullscreenClear.0d191a4f.js";import{u as K,S as B}from"./useStateMachine.6e68ce09.js";function w(){const e=n.exports.useRef(!1);return M(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function J(){const e=w(),[r,t]=n.exports.useState(0),o=n.exports.useCallback(()=>{e.current&&t(r+1)},[r]);return[n.exports.useCallback(()=>U.postRender(o),[o]),r]}class Q extends n.exports.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function W({children:e,isPresent:r}){const t=n.exports.useId(),o=n.exports.useRef(null),m=n.exports.useRef({width:0,height:0,top:0,left:0});return n.exports.useInsertionEffect(()=>{const{width:l,height:d,top:u,left:C}=m.current;if(r||!o.current||!l||!d)return;o.current.dataset.motionPopId=t;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            top: ${u}px !important;
            left: ${C}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[r]),c(Q,{isPresent:r,childRef:o,sizeRef:m,children:n.exports.cloneElement(e,{ref:o})})}const R=({children:e,initial:r,isPresent:t,onExitComplete:o,custom:m,presenceAffectsLayout:l,mode:d})=>{const u=H(Y),C=n.exports.useId(),f=n.exports.useMemo(()=>({id:C,initial:r,isPresent:t,custom:m,onExitComplete:a=>{u.set(a,!0);for(const i of u.values())if(!i)return;o&&o()},register:a=>(u.set(a,!1),()=>u.delete(a))}),l?void 0:[t]);return n.exports.useMemo(()=>{u.forEach((a,i)=>u.set(i,!1))},[t]),n.exports.useEffect(()=>{!t&&!u.size&&o&&o()},[t]),d==="popLayout"&&(e=c(W,{isPresent:t,children:e})),c(z.Provider,{value:f,children:e})};function Y(){return new Map}const x=e=>e.key||"";function q(e,r){e.forEach(t=>{const o=x(t);r.set(o,t)})}function X(e){const r=[];return n.exports.Children.forEach(e,t=>{n.exports.isValidElement(t)&&r.push(t)}),r}const Z=({children:e,custom:r,initial:t=!0,onExitComplete:o,exitBeforeEnter:m,presenceAffectsLayout:l=!0,mode:d="sync"})=>{m&&(d="wait",G(!1,"Replace exitBeforeEnter with mode='wait'"));let[u]=J();const C=n.exports.useContext(L).forceRender;C&&(u=C);const f=w(),a=X(e);let i=a;const p=new Set,_=n.exports.useRef(i),A=n.exports.useRef(new Map).current,S=n.exports.useRef(!0);if(M(()=>{S.current=!1,q(a,A),_.current=i}),b(()=>{S.current=!0,A.clear(),p.clear()}),S.current)return c(T,{children:i.map(s=>c(R,{isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:l,mode:d,children:s},x(s)))});i=[...i];const E=_.current.map(x),O=a.map(x),N=E.length;for(let s=0;s<N;s++){const h=E[s];O.indexOf(h)===-1&&p.add(h)}return d==="wait"&&p.size&&(i=[]),p.forEach(s=>{if(O.indexOf(s)!==-1)return;const h=A.get(s);if(!h)return;const g=E.indexOf(s),v=()=>{A.delete(s),p.delete(s);const D=_.current.findIndex(F=>F.key===s);if(_.current.splice(D,1),!p.size){if(_.current=a,f.current===!1)return;u(),o&&o()}};i.splice(g,0,c(R,{isPresent:!1,onExitComplete:v,custom:r,presenceAffectsLayout:l,mode:d,children:h},x(h)))}),i=i.map(s=>{const h=s.key;return p.has(h)?s:c(R,{isPresent:!0,presenceAffectsLayout:l,mode:d,children:s},x(s))}),j!=="production"&&d==="wait"&&i.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),c(T,{children:p.size?i:i.map(s=>n.exports.cloneElement(s))})},P=n.exports.createContext(null),ee=new B("addCashAccounts",{addCashAccounts:"addCashAccounts",addInstrument:"addInstrument",formSuccess:"formSuccess"},{CHANGE_TO_ADD_CASH_ACCOUNTS:"CHANGE_TO_ADD_CASH_ACCOUNTS",CHANGE_TO_ADD_INSTRUMENT:"CHANGE_TO_ADD_INSTRUMENT",CHANGE_TO_FORM_SUCCESS:"CHANGE_TO_FORM_SUCCESS"},{addCashAccounts:{CHANGE_TO_ADD_INSTRUMENT:"addInstrument"},addInstrument:{CHANGE_TO_FORM_SUCCESS:"formSuccess",CHANGE_TO_ADD_CASH_ACCOUNTS:"addCashAccounts"}}),te=()=>{const{states:e,actions:r,updateState:t,compareState:o}=K(ee);return{states:e,actions:r,updateState:t,compareState:o}},ne=({children:e})=>{const r=te();return c(P.Provider,{value:r,children:e})},re=()=>{const e=n.exports.useContext(P);if(!e)throw new Error("useAddModelPortfolioContext must be used inside AddModelPortfolioProvider");return e},oe=n.exports.lazy(()=>I(()=>import("./index.c1da07d6.js"),["assets/index.c1da07d6.js","assets/array.b9b12b7b.js","assets/index.c4ac14b0.js","assets/index.26b45885.css","assets/useTranslation.d539c65d.js","assets/useSelect.c8727468.js","assets/Trans.dcd090ac.js","assets/FullscreenClear.0d191a4f.js","assets/useStateMachine.6e68ce09.js"]).then(({AddCashAccountsForm:e})=>({default:e}))),se=n.exports.lazy(()=>I(()=>import("./index.bc9d379b.js"),["assets/index.bc9d379b.js","assets/index.c4ac14b0.js","assets/index.26b45885.css","assets/array.b9b12b7b.js","assets/useTranslation.d539c65d.js","assets/useSelect.c8727468.js","assets/FullscreenClear.0d191a4f.js","assets/useStateMachine.6e68ce09.js"]).then(({AddInstrumentForm:e})=>({default:e}))),ce=n.exports.lazy(()=>I(()=>import("./index.7d2a7558.js"),["assets/index.7d2a7558.js","assets/index.c4ac14b0.js","assets/index.26b45885.css","assets/useTranslation.d539c65d.js"]).then(({FormSuccess:e})=>({default:e}))),ie=()=>{const{states:e,compareState:r}=re();return c($,{children:c(n.exports.Suspense,{fallback:c(k,{}),children:V(Z,{children:[r(e.addCashAccounts)&&c(oe,{}),r(e.addInstrument)&&c(se,{}),r(e.formSuccess)&&c(ce,{})]})})})},y=()=>c(ne,{children:c(ie,{})});y.displayName="Introduction";const le=Object.freeze(Object.defineProperty({__proto__:null,Introduction:y},Symbol.toStringTag,{value:"Module"}));export{le as i,re as u};