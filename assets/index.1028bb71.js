import{d as o,o as a,a as _,u as n,aK as m,l as t,j as u,aL as F,v as C,c as h,B as E,t as f,f as e,F as y}from"./index.b1592b5a.js";import{C as l,a as i,b as r}from"./index.3dba93b2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g=o({__name:"basic",setup(c){return(s,d)=>(a(),_(n(m)))}}),x=o({name:"BasciTsxDemo",setup(){return()=>t(m,null,null)}}),B=C(" No data, please reload! "),D=o({__name:"custom",setup(c){return(s,d)=>(a(),_(n(m),null,{image:u(()=>[t(n(F))]),default:u(()=>[B]),_:1}))}}),A=`<template>
  <Empty />
</template>

<script lang="ts" setup>
import { Empty } from "@dangojs/digitforce-ui";
<\/script>
`,b=`<template>
  <Empty>
    <template #image>
      <icon-exclamation-circle-fill />
    </template>
    No data, please reload!
  </Empty>
</template>

<script lang="ts" setup>
import { IconExclamationCircleFill } from "@arco-design/web-vue/es/icon";
import { Empty } from "@dangojs/digitforce-ui";
<\/script>
`,v=`import { defineComponent } from "vue";
import { Empty } from "@dangojs/digitforce-ui";

export default defineComponent({
  name: "BasciTsxDemo",
  setup() {
    return () => {
      return <Empty></Empty>;
    };
  },
});
`,$={class:"markdown-body"},N=E('<h3 id="%3Cempty%3E-props" tabindex="-1"><code class="">&lt;empty&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>description</td><td>\u63CF\u8FF0\u5185\u5BB9</td><td><code class="">string</code></td><td style="text-align:center;"><code class="">-</code></td></tr><tr><td>img-src</td><td>\u81EA\u5B9A\u4E49\u56FE\u7247\u7684\u5730\u5740</td><td><code class="">string</code></td><td style="text-align:center;"><code class="">-</code></td></tr></tbody></table></div><h3 id="%3Cempty%3E-slots" tabindex="-1"><code class="">&lt;empty&gt;</code> Slots</h3><div class="md-table"><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>image</td><td style="text-align:center;">\u56FE\u7247/\u56FE\u6807</td><td>-</td></tr></tbody></table></div>',4),k=[N],T=o({__name:"api",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,p)=>(a(),h("div",$,k))}}),j=e("div",{class:"article-header"},[e("h2",{class:"article-header-title"},"\u7A7A\u72B6\u6001 Empty"),e("div",{class:"article-header-desc"},"\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u63CF\u8FF0")],-1),V={class:"article-content"},w=e("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),I=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),P=e("h3",null,"tsx\u57FA\u672C\u7528\u6CD5",-1),S=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),K=e("h3",null,"\u81EA\u5B9A\u4E49\u56FE\u7247\u548C\u6587\u6848",-1),L=e("p",null,"\u901A\u8FC7 image \u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u56FE\u7247\uFF0C\u6216\u901A\u8FC7\u5185\u5BB9\u4FEE\u6539\u6587\u6848\u3002",-1),q=e("h3",null,"API",-1),J=o({__name:"DemoEmpty",setup(c){return(s,d)=>{const p=f("a-divider");return a(),h(y,null,[j,t(p),e("div",V,[t(r,null,{description:u(()=>[w,I]),default:u(()=>[t(l,null,{default:u(()=>[t(n(g))]),_:1}),t(i,{code:n(A)},null,8,["code"])]),_:1}),t(r,null,{description:u(()=>[P,S]),default:u(()=>[t(l,null,{default:u(()=>[t(n(x))]),_:1}),t(i,{code:n(v)},null,8,["code"])]),_:1}),t(r,null,{description:u(()=>[K,L]),default:u(()=>[t(l,null,{default:u(()=>[t(n(D))]),_:1}),t(i,{code:n(b)},null,8,["code"])]),_:1}),e("div",null,[q,t(n(T))])])],64)}}});export{J as default};
