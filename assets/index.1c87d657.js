import{d as B,O as z,Q as G,X as O,E as f,aw as R,Z as D,t as T,o as a,c as u,n as p,a as h,g as c,b as S,U as q,R as w,a0 as A,a1 as F}from"./index.b1592b5a.js";import{I as K,u as L}from"./use-form-item.46584813.js";import{u as N}from"./use-size.803c1c7b.js";const I=Symbol("ArcoButtonGroup"),Q=B({name:"Button",components:{IconLoading:K},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:o}){const{size:l,disabled:r}=z(e),n=G("btn"),s=O(I,void 0),i=f(()=>{var t;return(t=l.value)!=null?t:s==null?void 0:s.size}),d=f(()=>Boolean(r.value||(s==null?void 0:s.disabled))),{mergedSize:j,mergedDisabled:$}=L({size:i,disabled:d}),{mergedSize:P}=N(j),E=f(()=>{var t,y,b,C,k,v;return[n,`${n}-${(y=(t=e.type)!=null?t:s==null?void 0:s.type)!=null?y:"secondary"}`,`${n}-shape-${(C=(b=e.shape)!=null?b:s==null?void 0:s.shape)!=null?C:"square"}`,`${n}-size-${P.value}`,`${n}-status-${(v=(k=e.status)!=null?k:s==null?void 0:s.status)!=null?v:"normal"}`,{[`${n}-long`]:e.long,[`${n}-loading`]:e.loading,[`${n}-disabled`]:$.value,[`${n}-link`]:R(e.href)}]});return{prefixCls:n,cls:E,mergedDisabled:$,handleClick:t=>{if(e.disabled||e.loading){t.preventDefault();return}o("click",t)}}}}),U=["href"],V=["type","disabled"];function X(e,o,l,r,n,s){const i=T("icon-loading");return e.href?(a(),u("a",{key:0,class:p([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:o[0]||(o[0]=(...d)=>e.handleClick&&e.handleClick(...d))},[e.loading||e.$slots.icon?(a(),u("span",{key:0,class:p(`${e.prefixCls}-icon`)},[e.loading?(a(),h(i,{key:0,spin:"true"})):c(e.$slots,"icon",{key:1})],2)):S("v-if",!0),c(e.$slots,"default")],10,U)):(a(),u("button",{key:1,class:p([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:o[1]||(o[1]=(...d)=>e.handleClick&&e.handleClick(...d))},[e.loading||e.$slots.icon?(a(),u("span",{key:0,class:p(`${e.prefixCls}-icon`)},[e.loading?(a(),h(i,{key:0,spin:!0})):c(e.$slots,"icon",{key:1})],2)):S("v-if",!0),c(e.$slots,"default")],10,V))}var g=D(Q,[["render",X]]);const Z=B({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:o,size:l,status:r,disabled:n,shape:s}=z(e),i=G("btn-group");return q(I,w({type:o,size:l,shape:s,status:r,disabled:n})),{prefixCls:i}}});function H(e,o,l,r,n,s){return a(),u("div",{class:p(e.prefixCls)},[c(e.$slots,"default")],2)}var m=D(Z,[["render",H]]);const _=Object.assign(g,{Group:m,install:(e,o)=>{A(e,o);const l=F(o);e.component(l+g.name,g),e.component(l+m.name,m)}});export{_ as B};
