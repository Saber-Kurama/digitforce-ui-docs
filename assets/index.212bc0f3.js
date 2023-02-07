import{d as l,h as y,l as t,a8 as D,a3 as b,o as d,a as k,j as s,u as i,S as x,v as F,c as g,B as w,t as L,f as n,F as P}from"./index.b1592b5a.js";import{B as h}from"./index.1c87d657.js";import{C as S,a as $,b as N}from"./index.3dba93b2.js";import"./use-form-item.46584813.js";import"./use-size.803c1c7b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const j=l({name:"ALoadingButton",inheritAttrs:!1,props:{...h.props,timeout:{type:Number}},setup(c,o){const{slots:u,attrs:e}=o,r=y(!1),{timeout:p,...B}=c,{onClick:m,...E}=e,f=async a=>{r.value=!0;let _=[m==null?void 0:m(a)];if(p){const v=new Promise(A=>{setTimeout(()=>{A(!0)},p)});_.push(v)}await Promise.all(_),r.value=!1};return()=>t(h,D(B,E,{loading:r.value,onClick:a=>f(a)}),{default:()=>{var a;return[(a=u==null?void 0:u.default)==null?void 0:a.call(u)]}})}}),C=b(j),T=F("\u8FD9\u662F\u4E00\u4E2A\u52A0\u8F7D\u6309\u94AE"),V=F("\u8FD9\u662F\u4E00\u4E2A\u81F3\u5C115\u79D2\u7684\u52A0\u8F7D\u6309\u94AE"),I=l({__name:"basic",setup(c){const o=async e=>{await u(),console.log("????")},u=()=>new Promise((e,r)=>{setTimeout(()=>{e("data")},3e3)});return(e,r)=>(d(),k(i(x),null,{default:s(()=>[t(i(C),{type:"primary",onClick:o},{default:s(()=>[T]),_:1}),t(i(C),{type:"primary",timeout:5e3,onClick:o},{default:s(()=>[V]),_:1})]),_:1}))}}),q=`<template>
  <Space>
    <LoadingButton type="primary" @click="handleClick"
      >\u8FD9\u662F\u4E00\u4E2A\u52A0\u8F7D\u6309\u94AE</LoadingButton
    >
    <LoadingButton type="primary" :timeout="5000" @click="handleClick"
      >\u8FD9\u662F\u4E00\u4E2A\u81F3\u5C115\u79D2\u7684\u52A0\u8F7D\u6309\u94AE</LoadingButton
    >
  </Space>
</template>

<script setup lang="ts">
import { LoadingButton } from "@dangojs/digitforce-ui";
import { Space } from "@arco-design/web-vue";

const handleClick = async (e: any) => {
  await getData();
  console.log("????");
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 3000);
  });
};
<\/script>
`,z={class:"markdown-body"},G=w('<h3 id="%3Cloading-button%3E-props" tabindex="-1"><code class="">&lt;loading-button&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>timeout</td><td>loading\u7684\u6700\u5C0F\u6301\u7EED\u65F6\u957F</td><td><code class="">number</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>\u2026</td><td>\u5176\u4ED6\u53C2\u6570\u503C\u914D\u7F6E\u53EF\u53C2\u8003 button</td><td>``</td><td style="text-align:center;">``</td></tr></tbody></table></div><h3 id="%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9" tabindex="-1">\u6CE8\u610F\u4E8B\u9879</h3><p>onClick \u4E8B\u4EF6\u9700\u662F\u5F02\u6B65\u4E8B\u4EF6</p>',4),H=[G],J=l({__name:"api",setup(c,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(u,e)=>(d(),g("div",z,H))}}),K=n("div",{class:"article-header"},[n("h2",{class:"article-header-title"},"\u52A0\u8F7D\u6309\u94AE LoadingButton"),n("div",{class:"article-header-desc"},"\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u63CF\u8FF0")],-1),M={class:"article-content"},O=n("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),Q=n("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),R=n("h3",null,"API",-1),et=l({__name:"demo-loading-button",setup(c){return(o,u)=>{const e=L("a-divider");return d(),g(P,null,[K,t(e),n("div",M,[t(N,null,{description:s(()=>[O,Q]),default:s(()=>[t(S,null,{default:s(()=>[t(i(I))]),_:1}),t($,{code:i(q)},null,8,["code"])]),_:1}),n("div",null,[R,t(i(J))])])],64)}}});export{et as default};
