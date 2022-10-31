import{A as l}from"./index.b9e575be.js";import{d as c,o as d,a as m,j as u,l as t,u as o,S as h,v as r,c as _,A as F,t as C,f as e,F as E}from"./index.0f8995ee.js";import{C as g,a as B,b as f}from"./index.f6a19307.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A=r("\u8FD9\u662F\u4E00\u4E2A\u52A0\u8F7D\u6309\u94AE"),D=r("\u8FD9\u662F\u4E00\u4E2A\u81F3\u5C115\u79D2\u7684\u52A0\u8F7D\u6309\u94AE"),y=c({__name:"basic",setup(i){const a=async n=>{await s(),console.log("????")},s=()=>new Promise((n,p)=>{setTimeout(()=>{n("data")},3e3)});return(n,p)=>(d(),m(o(h),null,{default:u(()=>[t(o(l),{type:"primary",onClick:a},{default:u(()=>[A]),_:1}),t(o(l),{type:"primary",timeout:5e3,onClick:a},{default:u(()=>[D]),_:1})]),_:1}))}}),b=`<template>
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
`,v={class:"markdown-body"},k=F('<h3 id="%3Cloading-button%3E-props" tabindex="-1"><code class="">&lt;loading-button&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>timeout</td><td>loading\u7684\u6700\u5C0F\u6301\u7EED\u65F6\u957F</td><td><code class="">number</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>\u2026</td><td>\u5176\u4ED6\u53C2\u6570\u503C\u914D\u7F6E\u53EF\u53C2\u8003 button</td><td>``</td><td style="text-align:center;">``</td></tr></tbody></table></div><h3 id="%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9" tabindex="-1">\u6CE8\u610F\u4E8B\u9879</h3><p>onClick \u4E8B\u4EF6\u9700\u662F\u5F02\u6B65\u4E8B\u4EF6</p>',4),x=[k],w=c({__name:"api",setup(i,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(s,n)=>(d(),_("div",v,x))}}),L=e("div",{class:"article-header"},[e("h2",{class:"article-header-title"},"\u52A0\u8F7D\u6309\u94AE LoadingButton"),e("div",{class:"article-header-desc"},"\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u63CF\u8FF0")],-1),S={class:"article-content"},$=e("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),j=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),N=e("h3",null,"API",-1),q=c({__name:"demo-loading-button",setup(i){return(a,s)=>{const n=C("a-divider");return d(),_(E,null,[L,t(n),e("div",S,[t(f,null,{description:u(()=>[$,j]),default:u(()=>[t(g,null,{default:u(()=>[t(o(y))]),_:1}),t(B,{code:o(b)},null,8,["code"])]),_:1}),e("div",null,[N,t(o(w))])])],64)}}});export{q as default};
