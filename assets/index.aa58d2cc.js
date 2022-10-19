import{a as E}from"./index.e2d2bacd.js";import{d as n,h as _,t as c,o,a as p,j as u,l as t,u as l,v as m,x,c as v,A,f as e,F as y}from"./index.7cc85840.js";import{C as F,a as h,b as C}from"./index.9c1d2d50.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f=n({__name:"basic",setup(i){const d=_([{label:"\u59D3\u540D",value:"\u53F8\u7A7A\u5343\u843D"},{label:"\u624B\u673A\u53F7",value:"123-1234-1234"},{label:"\u8EAB\u4EFD",value:"\u67AA\u4ED9\u4E4B\u5973\u3001\u56DB\u5B88\u62A4\u6731\u96C0"},{label:"\u767B\u573A\u4F5C\u54C1",value:"\u5C11\u5E74\u6B4C\u884C\uFF1A\u98CE\u82B1\u96EA\u6708\u7BC7"}]);return setTimeout(()=>{d.value=[{label:"\u59D3\u540D",value:"\u53F8\u7A7A\u5343\u843D"},{label:"\u624B\u673A\u53F7",value:"123-1234-1234"},{label:"\u8EAB\u4EFD",value:"\u67AA\u4ED9\u4E4B\u5973\u3001\u56DB\u5B88\u62A4\u6731\u96C0"},{label:"\u767B\u573A\u4F5C\u54C1",value:"\u5C11\u5E74\u6B4C\u884C\uFF1A\u98CE\u82B1\u96EA\u6708\u7BC7"},{label:"\u89D2\u8272\u80FD\u529B",value:"\u7FFB\u4E91\u8986\u96E8\u3001\u71CE\u539F\u767E\u91CC\u3001\u767E\u9E1F\u671D\u51E4\u3001\u5FD8\u5FE7\u62F3"}]},3e3),(a,s)=>{const r=c("a-space");return o(),p(r,{direction:"vertical",size:"large",fill:""},{default:u(()=>[t(l(E),{data:d.value,title:"\u7528\u6237\u4FE1\u606F"},null,8,["data"])]),_:1})}}}),S=n({__name:"align",setup(i){const d=_("left"),a=[{label:"\u59D3\u540D",value:"\u53F8\u7A7A\u5343\u843D"},{label:"\u624B\u673A\u53F7",value:"123-1234-1234"},{label:"\u8EAB\u4EFD",value:"\u67AA\u4ED9\u4E4B\u5973\u3001\u56DB\u5B88\u62A4\u6731\u96C0"},{label:"\u767B\u573A\u4F5C\u54C1",value:"\u5C11\u5E74\u6B4C\u884C\uFF1A\u98CE\u82B1\u96EA\u6708\u7BC7"},{label:"\u89D2\u8272\u80FD\u529B",value:"\u7FFB\u4E91\u8986\u96E8\u3001\u71CE\u539F\u767E\u91CC\u3001\u767E\u9E1F\u671D\u51E4\u3001\u5FD8\u5FE7\u62F3"}];return setTimeout(()=>{d.value="right"},3e3),(s,r)=>{const D=c("a-descriptions"),B=c("a-space");return o(),p(B,{direction:"vertical",size:"large",fill:""},{default:u(()=>[t(l(E),{data:a,title:"\u7528\u6237\u4FE1\u606F",align:d.value},null,8,["align"]),t(D,{data:a,title:"\u7528\u6237\u4FE1\u606F",layout:"inline-vertical"},{label:u(g=>[m(x(g.label)+" : ",1)]),_:1})]),_:1})}}}),b=`<template>
  <a-space direction="vertical" size="large" fill>
    <Descriptions :data="data" title="\u7528\u6237\u4FE1\u606F" />
  </a-space>
</template>

<script lang="ts" setup>
import { Descriptions } from "@dangojs/digitforce-ui";
import { ref } from "vue";

const data = ref([
  {
    label: "\u59D3\u540D",
    value: "\u53F8\u7A7A\u5343\u843D",
  },
  {
    label: "\u624B\u673A\u53F7",
    value: "123-1234-1234",
  },
  {
    label: "\u8EAB\u4EFD",
    value: "\u67AA\u4ED9\u4E4B\u5973\u3001\u56DB\u5B88\u62A4\u6731\u96C0",
  },
  {
    label: "\u767B\u573A\u4F5C\u54C1",
    value: "\u5C11\u5E74\u6B4C\u884C\uFF1A\u98CE\u82B1\u96EA\u6708\u7BC7",
  },
  // {
  //   label: "\u89D2\u8272\u80FD\u529B",
  //   value: "\u7FFB\u4E91\u8986\u96E8\u3001\u71CE\u539F\u767E\u91CC\u3001\u767E\u9E1F\u671D\u51E4\u3001\u5FD8\u5FE7\u62F3",
  // },
]);

setTimeout(() => {
  data.value = [
    {
      label: "\u59D3\u540D",
      value: "\u53F8\u7A7A\u5343\u843D",
    },
    {
      label: "\u624B\u673A\u53F7",
      value: "123-1234-1234",
    },
    {
      label: "\u8EAB\u4EFD",
      value: "\u67AA\u4ED9\u4E4B\u5973\u3001\u56DB\u5B88\u62A4\u6731\u96C0",
    },
    {
      label: "\u767B\u573A\u4F5C\u54C1",
      value: "\u5C11\u5E74\u6B4C\u884C\uFF1A\u98CE\u82B1\u96EA\u6708\u7BC7",
    },
    {
      label: "\u89D2\u8272\u80FD\u529B",
      value: "\u7FFB\u4E91\u8986\u96E8\u3001\u71CE\u539F\u767E\u91CC\u3001\u767E\u9E1F\u671D\u51E4\u3001\u5FD8\u5FE7\u62F3",
    },
  ];
}, 3000);
<\/script>
`,z={class:"markdown-body"},T=A('<h3 id="%3Cdescriptions%3E-props" tabindex="-1"><code class="">&lt;descriptions&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u6570\u636E</td><td><code class="">DescData[]</code></td><td style="text-align:center;"><code class="">[]</code></td></tr><tr><td>column</td><td>\u6BCF\u884C\u653E\u7F6E\u7684\u6570\u636E\u4E2A\u6570\u30022.20.0 \u7248\u672C\u652F\u6301\u54CD\u5E94\u5F0F\u914D\u7F6E\uFF0C\u914D\u7F6E\u53EF\u53C2\u8003 Grid</td><td><code class="">number | ResponsiveValue</code></td><td style="text-align:center;"><code class="">3</code></td></tr><tr><td>title</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u6807\u9898</td><td><code class="">string</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>layout</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u6392\u5217\u65B9\u5F0F</td><td><code class="">&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline-horizontal&#39; | &#39;inline-vertical&#39;</code></td><td style="text-align:center;"><code class="">&#39;horizontal&#39;</code></td></tr><tr><td>align</td><td>\u6587\u5B57\u7684\u5BF9\u9F50\u4F4D\u7F6E</td><td><code class="">TextAlign | { label?: TextAlign; value?: TextAlign }</code></td><td style="text-align:center;"><code class="">&#39;{ label: &#39;right&#39;}&#39;</code></td></tr><tr><td>size</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u5927\u5C0F</td><td><code class="">&#39;mini&#39; | &#39;small&#39; | &#39;medium&#39; | &#39;large&#39;</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>bordered</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code class="">boolean</code></td><td style="text-align:center;"><code class="">false</code></td></tr><tr><td>label-style</td><td>\u6570\u636E\u6807\u7B7E\u7684\u6837\u5F0F</td><td><code class="">CSSProperties</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>value-style</td><td>\u6570\u636E\u5185\u5BB9\u7684\u6837\u5F0F</td><td><code class="">CSSProperties</code></td><td style="text-align:center;"><code class="">-</code></td></tr></tbody></table></div><h3 id="%3Cdescriptions%3E-slots" tabindex="-1"><code class="">&lt;descriptions&gt;</code> Slots</h3><div class="md-table"><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>value</td><td style="text-align:center;">\u6570\u636E\u5185\u5BB9</td><td>value: <code class="">string</code><br>index: <code class="">number</code><br>data: <code class="">DescData</code></td></tr><tr><td>label</td><td style="text-align:center;">\u6570\u636E\u6807\u7B7E</td><td>label: <code class="">string</code><br>index: <code class="">number</code><br>data: <code class="">DescData</code></td></tr><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td>-</td></tr></tbody></table></div><h3 id="%3Cdescriptions-item%3E-props" tabindex="-1"><code class="">&lt;descriptions-item&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th></tr></thead><tbody><tr><td>span</td><td>\u6240\u5360\u5217\u6570</td><td><code class="">number</code></td><td style="text-align:center;"><code class="">1</code></td><td style="text-align:left;">2.18.0</td></tr><tr><td>label</td><td>\u6807\u7B7E</td><td><code class="">string</code></td><td style="text-align:center;"><code class="">-</code></td><td style="text-align:left;">2.18.0</td></tr></tbody></table></div><h3 id="%3Cdescriptions-item%3E-slots" tabindex="-1"><code class="">&lt;descriptions-item&gt;</code> Slots</h3><div class="md-table"><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th><th style="text-align:left;">\u7248\u672C</th></tr></thead><tbody><tr><td>label</td><td style="text-align:center;">\u6807\u7B7E</td><td>-</td><td style="text-align:left;">2.18.0</td></tr></tbody></table></div><h3 id="descdata" tabindex="-1">DescData</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u6807\u7B7E</td><td><code class="">string | RenderFunction</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>value</td><td>\u6570\u636E</td><td><code class="">string | RenderFunction</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>span</td><td>\u6240\u5360\u5217\u6570</td><td><code class="">number</code></td><td style="text-align:center;"><code class="">-</code></td></tr></tbody></table></div>',10),k=[T],P=n({__name:"api",setup(i,{expose:d}){return d({frontmatter:{},excerpt:void 0}),(a,s)=>(o(),v("div",z,k))}}),V=e("div",{class:"article-header"},[e("h2",{class:"article-header-title"},"\u63CF\u8FF0\u5217\u8868 Descriptions"),e("div",{class:"article-header-desc"},"\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u63CF\u8FF0")],-1),$={class:"article-content"},N=e("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),R=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),j=e("h3",null,"\u6807\u7B7E\u6587\u672C\u5BF9\u9F50",-1),w=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),G=e("h3",null,"API",-1),K=n({__name:"DemoDescriptions",setup(i){return(d,a)=>{const s=c("a-divider");return o(),v(y,null,[V,t(s),e("div",$,[t(C,null,{description:u(()=>[N,R]),default:u(()=>[t(F,null,{default:u(()=>[t(l(f))]),_:1}),t(h,{code:l(b)},null,8,["code"])]),_:1}),t(C,null,{description:u(()=>[j,w]),default:u(()=>[t(F,null,{default:u(()=>[t(l(S))]),_:1}),t(h,{code:l(b)},null,8,["code"])]),_:1}),e("div",null,[G,t(l(P))])])],64)}}});export{K as default};
