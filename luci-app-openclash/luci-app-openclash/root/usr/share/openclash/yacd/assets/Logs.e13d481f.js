var T=Object.defineProperty,C=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&v(e,a,t[a]);if(E)for(var a of E(t))N.call(t,a)&&v(e,a,t[a]);return e},h=(e,t)=>C(e,y(t));import{r as o,R as l,K as P,k as W,P as b,D as I,j as k,g as w}from"./vendor.3cf270b6.js";import{a as z,F as D}from"./index.esm.5b55aaed.js";import{r as F,s as M,f as A}from"./logs.8963bea3.js";import{c as S,w as $,x as H,k as B,y as K,C as j,S as q,z as V,A as Y,g as G,D as J}from"./index.d6596dd6.js";import{d as O}from"./debounce.76599460.js";import{u as Q}from"./useRemainingViewPortHeight.91bbcf1d.js";import{F as U,p as X}from"./Fab.78b2c04b.js";const Z="_RuleSearch_1gcst_1",ee="_RuleSearchContainer_1gcst_5",te="_inputWrapper_1gcst_10",ae="_input_1gcst_10",oe="_iconWrapper_1gcst_35";var i={RuleSearch:Z,RuleSearchContainer:ee,inputWrapper:te,input:ae,iconWrapper:oe};function re({dispatch:e,searchText:t,updateSearchText:a}){const[r,s]=o.exports.useState(t),p=o.exports.useCallback(c=>{e(a(c))},[e,a]),d=o.exports.useMemo(()=>O(p,300),[p]),g=c=>{s(c.target.value),d(c.target.value)};return l.createElement("div",{className:i.RuleSearch},l.createElement("div",{className:i.RuleSearchContainer},l.createElement("div",{className:i.inputWrapper},l.createElement("input",{type:"text",value:r,onChange:g,className:i.input})),l.createElement("div",{className:i.iconWrapper},l.createElement(P,{size:20}))))}const se=e=>({searchText:$(e),updateSearchText:H});var ne=S(se)(re);const ce="_logMeta_1dg5t_1",le="_logType_1dg5t_8",pe="_logTime_1dg5t_18",ie="_logText_1dg5t_24",ge="_logsWrapper_1dg5t_37",me="_logPlaceholder_1dg5t_51",ue="_logPlaceholderIcon_1dg5t_64";var n={logMeta:ce,logType:le,logTime:pe,logText:ie,logsWrapper:ge,logPlaceholder:me,logPlaceholderIcon:ue};const{useCallback:f,memo:de,useEffect:he}=k,x=30,xe={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function _e({time:e,even:t,payload:a,type:r}){const s=w({even:t},"log");return o.exports.createElement("div",{className:s},o.exports.createElement("div",{className:n.logMeta},o.exports.createElement("div",{className:n.logTime},e),o.exports.createElement("div",{className:n.logType,style:{backgroundColor:xe[r]}},r),o.exports.createElement("div",{className:n.logText},a)))}function Ee(e,t){return t[e].id}const ve=de(({index:e,style:t,data:a})=>{const r=a[e];return o.exports.createElement("div",{style:t},o.exports.createElement(_e,u({},r)))},z);function fe({dispatch:e,logLevel:t,apiConfig:a,logs:r,logStreamingPaused:s}){const p=B(),d=f(()=>{s?F(h(u({},a),{logLevel:t})):M(),p.app.updateAppConfig("logStreamingPaused",!s)},[a,t,s,p.app]),g=f(R=>e(K(R)),[e]);he(()=>{A(h(u({},a),{logLevel:t}),g)},[a,t,g]);const[c,_]=Q(),{t:m}=W();return o.exports.createElement("div",null,o.exports.createElement(j,{title:m("Logs")}),o.exports.createElement(ne,null),o.exports.createElement("div",{ref:c,style:{paddingBottom:x}},r.length===0?o.exports.createElement("div",{className:n.logPlaceholder,style:{height:_-x}},o.exports.createElement("div",{className:n.logPlaceholderIcon},o.exports.createElement(q,{width:200,height:200})),o.exports.createElement("div",null,m("no_logs"))):o.exports.createElement("div",{className:n.logsWrapper},o.exports.createElement(D,{height:_-x,width:"100%",itemCount:r.length,itemSize:80,itemData:r,itemKey:Ee},ve),o.exports.createElement(U,{icon:s?o.exports.createElement(b,{size:16}):o.exports.createElement(I,{size:16}),mainButtonStyles:s?{background:"#e74c3c"}:{},style:X,text:m(s?"Resume Refresh":"Pause Refresh"),onClick:d}))))}const Se=e=>({logs:V(e),logLevel:Y(e),apiConfig:G(e),logStreamingPaused:J(e)});var be=S(Se)(fe);export{be as default};
