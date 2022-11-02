import{c as w,e as L,a as E,b as D,u as H,f as _,o as V}from"./array.b9b12b7b.js";import{ab as T,s as $,d as n,i as d,j as e,T as A,f as r,B as u,o as m,ac as v,a as z,I as B,n as G,ad as W,ae as j,H as k,L as M}from"./index.c4ac14b0.js";import{u as q}from"./index.6418082d.js";import{u as b}from"./useTranslation.d539c65d.js";import{u as O}from"./useSelect.c8727468.js";import{T as K}from"./Trans.dcd090ac.js";import"./FullscreenClear.0d191a4f.js";import"./useStateMachine.6e68ce09.js";const X=w().shape({accounts:L().of(w({name:E().required("\u200E").min(2,"\u200E"),currency:E().required()})).min(1).max(T,"\u200E")}),Y=$.div.withConfig({displayName:"FieldsWrapper",componentId:"sc-15wozii-0"})(["overflow-y:auto;max-height:250px;> div:not(:last-child){margin-bottom:",";}"],({theme:t})=>t.spacing.small),I=({handleAppend:t})=>{const{t:a}=b();return n(d.exports.Column,{alignItems:"center",children:[e(A,{textAlign:"center",fontWeight:"700",children:a("add.cash.accounts.empty")}),e(r,{space:"tiny"}),n(u,{color:"secondary",onClick:t,children:[a("add.cash.accounts.button.add")," ",e(m,{spread:"tiny"})," ",e(v,{})]})]})};I.displayName="AddCashAccountsEmptyList";const J="CHF",Q="EUR",Z="GBP",ee="PLN",te="USD",ae=[J,Q,Z,te,ee],oe=({register:t,errors:a,index:s,values:p,remove:h})=>{const{t:c}=b(),y=D({register:t,name:`accounts.${s}.name`,errors:a}),g=O({register:t,name:`accounts.${s}.currency`,errors:a,defaultValues:p}),i=z.exports.useMemo(()=>ae.map(o=>({label:c(`currency.${o}`),value:o})),[c]),f=({value:o})=>o,C=()=>h(s);return n(d.exports.Row,{children:[e(B,{placeholder:c("common.input.name.placeholder"),flexGrow:1,...y}),e(m,{spread:"tiny"}),e(G,{width:"130px",options:i,customLabel:f,...g}),e(m,{spread:"tiny"}),e(u,{borderRadius:"secondary",color:"secondary",onClick:C,boxShadow:"none",children:e(W,{})})]})},ne=()=>{const{t}=b(),{updateState:a,actions:s}=q(),p=async S=>{console.log(S),await new Promise(x=>{setTimeout(x,3e3)}),a(s.CHANGE_TO_ADD_INSTRUMENT)},h={accounts:[]},{register:c,handleSubmit:y,formState:{errors:g,isSubmitting:i,isValid:f,isDirty:C},control:o,getValues:N}=H({defaultValues:h,resolver:V(X),mode:"onChange"}),{fields:l,append:R,remove:P}=_({control:o,name:"accounts"}),U=N(),F=()=>R({name:"",currency:"USD"});return e(j.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:n(d.exports.Column,{children:[e(k,{textAlign:"center",children:t("add.cash.accounts.title")}),e(r,{space:"small"}),e(A,{fontSize:"0.875",fontColor:"gray400",textAlign:"center",children:e(K,{i18nKey:"add.cash.accounts.description",components:{bold:e(A,{fontSize:"0.875",fontColor:"gray400",textAlign:"center",fontWeight:"700"})}})}),e(r,{space:"large"}),e("form",{onSubmit:y(p),noValidate:!0,children:n(d.exports.Column,{children:[l.length===0?e(I,{handleAppend:F}):null,e(Y,{children:l.map((S,x)=>e(oe,{index:x,register:c,errors:g,values:U,remove:P},S.id))}),e(r,{space:"tiny"}),l.length>0&&l.length<T?n(u,{color:"secondary",onClick:F,children:[t("add.cash.accounts.button.add")," ",e(m,{spread:"tiny"})," ",e(v,{})]}):null,e(r,{space:"large"}),e(u,{size:"large",type:"submit",disabled:i||!f||!C,width:"100%",children:i?e(M,{color:"white"}):t("add.cash.accounts.submit")})]})})]})})};ne.displayName="IntroductionAddCashAccountsForm";export{ne as AddCashAccountsForm};