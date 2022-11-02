import{W as I,R as d,X as x,Y as y,Z as k,s as i,C as p,$ as v,a0 as b,T as f,j as o,d as s,i as l,f as u,a as g,o as w,a1 as N,a2 as D,H as A,k as L,a3 as m,a4 as R,u as O,a5 as H,U as S,a6 as B,V as T}from"./index.c4ac14b0.js";import{u as h}from"./useTranslation.d539c65d.js";import{L as z,u as _}from"./LangSelector.8465320f.js";import{A as M,u as j}from"./useBreakpoint.10558c8c.js";import{s as W}from"./account.28c42cf2.js";function E(t){return I({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"}}]})(t)}const F=[{to:d.DASHBOARD.HOME,title:"navigation.home",icon:x},{to:d.DASHBOARD.PORTFOLIO,title:"navigation.portfolios",icon:y},{to:d.DASHBOARD.HUB,title:"navigation.hub",icon:k}],P=i.nav.withConfig({displayName:"StyledNav",componentId:"sc-1kdvemg-0"})(["position:fixed;width:270px;left:calc(50% - 135px);right:calc(50% - 135px);",""],({theme:{isDark:t,colors:e,padding:r,zIndex:a,shadows:n,spacing:c,radius:C}})=>p(["padding:",";background-color:",";z-index:",";box-shadow:",";bottom:",";border-radius:",";"],r.medium,t?v(e.gray100,.03):e.white,a.bottomBar,n.box,c.large,C.primary)),V=i.ul.withConfig({displayName:"List",componentId:"sc-1kdvemg-1"})(["padding:0;display:grid;grid-template-columns:repeat(3,1fr);"]),U=i.li.withConfig({displayName:"ListItem",componentId:"sc-1kdvemg-2"})(["list-style:none;"]),$=i(b).withConfig({displayName:"StyledNavLink",componentId:"sc-1kdvemg-3"})(["text-decoration:none;",""],({theme:t})=>p(["color:",";outline-color:",";&.active{color:",";}"],t.colors.gray400,t.colors.blue,t.colors.blue)),Y=i(f).withConfig({displayName:"Title",componentId:"sc-1kdvemg-4"})(["width:75px;overflow:hidden;display:inline-block;box-sizing:border-box;text-overflow:ellipsis;white-space:nowrap;"]),q=()=>{const{t}=h();return o(P,{children:o(V,{children:F.map(({to:e,title:r,icon:a})=>o(U,{children:o($,{to:e,end:!0,children:({isActive:n})=>s(l.exports.Column,{alignItems:"center",children:[o(a,{size:"1.5rem"}),o(u,{space:"tiny"}),o(Y,{fontColor:n?"text":"gray400",fontWeight:n?"700":"500",lineHeight:"1rem",textAlign:"center",fontSize:"0.875",children:t(r)})]})})},r))})})},G=i.ul.withConfig({displayName:"List",componentId:"sc-12b453m-0"})(["padding:0;"]),X=i.li.withConfig({displayName:"ListItem",componentId:"sc-12b453m-1"})(["list-style:none;"]),Z=i(b).withConfig({displayName:"StyledNavLink",componentId:"sc-12b453m-2"})(["display:flex;justify-content:space-between;align-items:center;text-decoration:none;width:214px;"," padding-right:0;"],({theme:t})=>p(["color:",";padding:",";outline-color:",";&.active{color:",";}"],t.colors.gray400,t.padding.small,t.colors.blue,t.colors.blue)),J=i.span.withConfig({displayName:"Bar",componentId:"sc-12b453m-3"})(["border-bottom-left-radius:9999px;border-top-left-radius:9999px;",""],({theme:t})=>p(["width:",";height:calc("," + ",");background-color:",";"],t.spacing.tiny,t.spacing.medium,t.spacing.tiny,t.colors.blue)),K=({navigation:t})=>{const{t:e}=h();return o("nav",{children:o(G,{children:t.map(({to:r,title:a,icon:n})=>o(X,{children:o(Z,{to:r,end:!0,children:({isActive:c})=>s(g.exports.Fragment,{children:[s(l.exports.Row,{children:[o(n,{size:"1.25rem"}),o(w,{spread:"small"}),o(f,{fontColor:c?"text":"gray400",fontWeight:c?"700":"500",children:e(a)})]}),c&&o(J,{})]})})},a))})})},Q=[{to:d.DASHBOARD.HOME,title:"navigation.home",icon:x},{to:d.DASHBOARD.PORTFOLIO,title:"navigation.portfolios",icon:y},{to:d.DASHBOARD.CASH_ACCOUNTS,title:"navigation.cash_accounts",icon:E},{to:d.DASHBOARD.TRANSACTIONS,title:"navigation.transactions",icon:N},{to:d.DASHBOARD.HISTORY,title:"navigation.history",icon:D}],tt=i(l.exports.Column).withConfig({displayName:"StyledColumn",componentId:"sc-17ah631-0"})(["position:fixed;top:0;left:0;height:100%;height:var(--doc-height);",""],({theme:{isDark:t,colors:e,zIndex:r,shadows:a,spacing:n}})=>p(["background-color:",";z-index:",";padding:calc("," * 2.5) 0 "," ",";box-shadow:",";"],t?v(e.gray100,.03):e.white,r.sidebar,n.huge,n.huge,n.huge,a.box)),ot=()=>{const{t}=h();return s(tt,{justifyContent:"space-between",children:[s(l.exports.Column,{children:[o(A,{level:"h2",fontSize:"1.25",children:t("common.dashboard")}),o(u,{space:"small"}),o(K,{navigation:Q})]}),s(l.exports.Column,{alignItems:"center",children:[o(L,{}),o(u,{}),o(z,{})]})]})},et=g.exports.forwardRef(({handleToggle:t,...e},r)=>{const{t:a}=h(),n=_(),c=()=>{n(R()),t()};return s(m,{minMenuWidth:"270px",ref:r,...e,children:[o(m.Item,{padding:"medium",children:a("navigation.my_profile")}),o(m.Divider,{width:"85%"}),o(m.Item,{padding:"medium",onClick:c,children:a("common.sign_out")})]})}),nt=()=>{const{data:t}=O(W),{t:e}=h();return o(H,{content:et,placement:"bottom-end",children:s(l.exports.Row,{alignItems:"center",children:[o(M,{name:t.name}),o(w,{spread:"tiny"}),s(f,{fontWeight:"700",children:[e("common.hi"),", ",t.name,"!"]})]})})},it=i(l.exports.Row).withConfig({displayName:"StyledRow",componentId:"sc-1hlafq8-0"})(["position:fixed;top:0;left:0;right:0;",""],({theme:t})=>p(["z-index:",";padding:",";"],t.zIndex.topbar,t.padding.huge)),at=g.exports.lazy(()=>S(()=>import("./logo-name-vertical.e3ad8cef.js"),["assets/logo-name-vertical.e3ad8cef.js","assets/index.c4ac14b0.js","assets/index.26b45885.css"]).then(({ReactComponent:t})=>({default:t}))),st=g.exports.lazy(()=>S(()=>import("./logo-name-vertical-dark.50fe616b.js"),["assets/logo-name-vertical-dark.50fe616b.js","assets/index.c4ac14b0.js","assets/index.26b45885.css"]).then(({ReactComponent:t})=>({default:t}))),rt=()=>{const{isDark:t}=B();return s(it,{justifyContent:"space-between",children:[o(g.exports.Suspense,{children:t?o(at,{width:"135px"}):o(st,{width:"135px"})}),o(nt,{})]})},dt=i.div.withConfig({displayName:"Wrapper",componentId:"sc-1wwj5j2-0"})(["height:100%;height:var(--doc-height);",""],({theme:t})=>p(["background-color:",";padding:",";","{margin-left:270px;padding:",";padding-top:98px;}"],t.colors.gray100,t.spacing.large,t.breakpoints.desktop,t.spacing.huge)),mt=({children:t})=>{const e=j("desktop","min");return s(dt,{children:[e&&o(rt,{}),e&&o(ot,{}),!e&&o(q,{}),o(g.exports.Suspense,{fallback:o(T,{}),children:t})]})};export{mt as Dashboard};