import{r as I,c as H,d as c,a as p,j as e,I as d,f as n,s as D,b as j,e as G,B as L,L as W,g as z,R as y,z as M,H as V,T as C,h as B,i as U,k as $}from"./index.c4ac14b0.js";import{F as K}from"./FullscreenClear.0d191a4f.js";import{u as J,L as Q}from"./LangSelector.8465320f.js";import{b as g,c as X,a as m,d as Y,u as Z,o as ee}from"./array.b9b12b7b.js";import{u as _,c as se}from"./checkEmail.e9cc601c.js";import{u as ae,S as re}from"./useStateMachine.6e68ce09.js";import{u as h}from"./useTranslation.d539c65d.js";import{T as ne}from"./Trans.dcd090ac.js";const oe=I(({userName:s,userEmail:a,userPassword:r,token:o})=>H.post("/auth/local/signup",{name:s,email:a,password:r,token:o}),{maxAttempts:3}),te=({register:s,errors:a})=>{const{t:r}=h(),o=g({register:s,name:"userName",errors:a}),u=g({register:s,name:"userEmail",errors:a});return c(p.exports.Fragment,{children:[e(d,{placeholder:r("common.name"),type:"text",...o}),e(n,{}),e(d,{placeholder:r("common.email"),type:"text",...u})]})},ie=({register:s,errors:a})=>{const{t:r}=h(),o=g({register:s,name:"userPassword",errors:a}),u=g({register:s,name:"userPasswordConfirmation",errors:a});return c(p.exports.Fragment,{children:[e(d,{placeholder:r("common.password"),type:"password",autoFocus:!0,...o}),e(n,{}),e(d,{placeholder:r("page.signup.password.confirm"),type:"password",...u})]})},me=s=>X().shape({userName:m().min(4,"page.signup.name.too_short").max(50,"page.signup.name.too_long").required("page.signup.name.required"),userEmail:m().email("page.signin.email.invalid").required("page.signin.email.required"),userPassword:m().when(["userName","userEmail"],{is:()=>s,then:m().min(12,"page.signin.password.too_short").max(50,"page.signin.password.too_long").required("page.signin.password.required")}),userPasswordConfirmation:m().when(["userName","userEmail"],{is:()=>s,then:m().required("page.signup.password.confirm.required").oneOf([Y("userPassword")],"page.signup.password.do_not_match")})}),ce=D.form.withConfig({displayName:"Form",componentId:"sc-jub5wj-0"})(["display:flex;flex-direction:column;"]),ue=new re("nameAndEmail",{nameAndEmail:"nameAndEmail",passwords:"passwords"},{CHANGE_TO_PASSWORDS:"CHANGE_TO_PASSWORDS"},{nameAndEmail:{CHANGE_TO_PASSWORDS:"passwords"}}),pe=()=>{const{t:s}=h(),[a,r]=p.exports.useState(""),[o,u]=p.exports.useState(!1),{states:t,actions:P,updateState:A,compareState:i}=ae(ue),T=J(),N=j(),b={userName:"",userEmail:"",userPassword:"",userPasswordConfirmation:""},{register:f,handleSubmit:k,formState:{errors:E,isSubmitting:l},setError:w}=Z({defaultValues:b,resolver:ee(me(i(t.passwords)))}),{request:q}=_(se,{successCallback:({data:S})=>{S.exist?w("userEmail",{type:"custom",message:s("page.signup.email.already_in_use")}):A(P.CHANGE_TO_PASSWORDS)}}),{request:R}=_(oe,{successCallback:async()=>{await T(z()),N(y.INTRODUCTION)},failureCallback:()=>{w("userPassword",{type:"custom",message:s("service.unknown_error")}),w("userPasswordConfirmation",{type:"custom",message:""})}}),O=p.exports.useCallback(r,[r]);return c(ce,{onSubmit:k(async({userName:S,userEmail:x,userPassword:v})=>{if(i(t.nameAndEmail)&&q({userEmail:x,token:a}),i(t.passwords))try{await R({userName:S,userEmail:x,userPassword:v,token:a})}catch{M(s("service.unknown_error"))}u(F=>!F)}),noValidate:!0,children:[e(G,{onVerify:O,refreshReCaptcha:o}),i(t.nameAndEmail)&&e(te,{register:f,errors:E}),i(t.passwords)&&e(ie,{register:f,errors:E}),e(n,{}),c(L,{width:"auto",disabled:l,type:"submit",children:[l&&e(W,{color:"white"}),!l&&i(t.nameAndEmail)&&s("common.next"),!l&&i(t.passwords)&&s("common.sign_up")]})]})},Ce=()=>{const{t:s}=h();return c(K,{children:[e(V,{textAlign:"center",children:s("common.sign_up")}),e(n,{space:"small"}),e(C,{fontSize:"0.875",fontColor:"gray400",textAlign:"center",children:s("page.signup.description")}),e(n,{space:"large"}),e(pe,{}),e(n,{}),e(C,{fontSize:"0.875",fontColor:"gray400",textAlign:"center",children:e(ne,{i18nKey:"page.signup.already_have_account",components:{signin:e(B,{to:y.SIGNIN,fontColor:"blue"})}})}),e(n,{space:"large"}),e(n,{space:"large"}),e(n,{space:"large"}),c(U.exports.Column,{alignItems:"center",children:[e(Q,{}),e(n,{}),e($,{})]})]})};export{Ce as Signup};