import{d as o,l as e,F as r,aI as g,aJ as R,v as _,a3 as $,h as v,o as m,c as y,j as n,f as t,x as p,u as a,aK as A,a as S,B as T,t as k}from"./index.b1592b5a.js";import{C as h,a as E,b as F}from"./index.3dba93b2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I=o({name:"EmptyReplace",props:{isEmpty:{type:[Boolean,String],default(){return"____init_empty_replace____"}}},setup(s,u){const{slots:l,attrs:c}=u,f=()=>e("span",{class:"a-empty-replace-span"},[_("--")]),x=d=>{var C,b;if(s.isEmpty==="____init_empty_replace____"){const D=document.createElement("div");if(g(R("div",{},d),D),D.innerText.trim()==="")return((C=l.empty)==null?void 0:C.call(l))||f()}else if(s.isEmpty)return((b=l.empty)==null?void 0:b.call(l))||f();return d};return()=>{var d;return e(r,null,[x((d=l.default)==null?void 0:d.call(l))])}}}),i=$(I),B=o({name:"saber",props:{name:String},setup(s){return()=>e(r,null,[e(r,null,[e("div",null,[s.name])])])}}),j=t("div",null,null,-1),N=_(" \u6682\u65E0\u6570\u636E "),V=o({__name:"basic",setup(s){const u=v("");return setTimeout(()=>{u.value="saber"},1e4),(l,c)=>(m(),y(r,null,[e(a(i),null,{default:n(()=>[t("div",null,p(u.value),1),e(a(B),{name:u.value},null,8,["name"])]),_:1}),j,e(a(i),null,{empty:n(()=>[N]),default:n(()=>[t("div",null,p(u.value),1),e(a(B),{name:u.value},null,8,["name"])]),_:1})],64))}});o({name:"BasciTsxDemo",setup(){return()=>e(A,null,null)}});const w=t("div",null,null,-1),P=t("br",null,null,-1),J=_(" \u6682\u65E0\u6570\u636E "),K=o({__name:"isEmpty",setup(s){const u=v("");return(l,c)=>(m(),y(r,null,[e(a(i),null,{default:n(()=>[t("div",null,"\u540D\u79F0\uFF1A"+p(u.value),1)]),_:1}),w,P,e(a(i),{"is-empty":!u.value},{empty:n(()=>[J]),default:n(()=>[t("div",null,"\u540D\u79F0\uFF1A"+p(u.value),1)]),_:1},8,["is-empty"])],64))}}),q=o({__name:"custom",setup(s){const u=v();return(l,c)=>(m(),S(a(i),null,{empty:n(()=>[e(a(A))]),default:n(()=>[_(" "+p(u.value),1)]),_:1}))}}),z=`<template>
  <EmptyReplace>
    <div>{{ name }}</div>
    <Saber :name="name" />
  </EmptyReplace>
  <div></div>
  <EmptyReplace>
    <template #empty> \u6682\u65E0\u6570\u636E </template>
    <div>{{ name }}</div>
    <Saber :name="name" />
  </EmptyReplace>
</template>

<script lang="ts" setup>
import { EmptyReplace } from "@dangojs/digitforce-ui";
import { ref } from "vue";
import Saber from "./saber";

const name = ref("");

setTimeout(() => {
  name.value = "saber";
}, 10000);
<\/script>
`,G=`<template>
  <EmptyReplace>
    <template #empty> <Empty /> </template>
    {{ data }}
  </EmptyReplace>
</template>

<script lang="ts" setup>
import { EmptyReplace, Empty } from "@dangojs/digitforce-ui";
import { ref } from "vue";

const data = ref();
<\/script>
`,H=`<template>
  <EmptyReplace>
    <div>\u540D\u79F0\uFF1A{{ name }}</div>
  </EmptyReplace>
  <div></div>
  <br />
  <EmptyReplace :is-empty="!name">
    <template #empty> \u6682\u65E0\u6570\u636E </template>
    <div>\u540D\u79F0\uFF1A{{ name }}</div>
  </EmptyReplace>
</template>

<script lang="ts" setup>
import { EmptyReplace } from "@dangojs/digitforce-ui";
import { ref } from "vue";
const name = ref("");
<\/script>
`,L={class:"markdown-body"},M=T('<h3 id="%3Cempty-replace%3E-props" tabindex="-1"><code class="">&lt;empty-replace&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>isEmpty</td><td>\u63CF\u8FF0\u5185\u5BB9</td><td><code class="">boole</code></td><td style="text-align:center;"><code class="">-</code></td></tr></tbody></table></div><h3 id="%3Cempty%3E-slots" tabindex="-1"><code class="">&lt;empty&gt;</code> Slots</h3><div class="md-table"><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>empty</td><td style="text-align:center;">\u6CA1\u6709\u6570\u636E\u7684\u65F6\u5019\uFF0C\u66FF\u6362\u7684\u63D2\u69FD</td><td>-</td></tr></tbody></table></div>',4),O=[M],Q=o({__name:"api",setup(s,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(l,c)=>(m(),y("div",L,O))}}),U=t("div",{class:"article-header"},[t("h2",{class:"article-header-title"},"\u7A7A\u6570\u636E\u66FF\u6362 EmptyReplace"),t("div",{class:"article-header-desc"}," \u7A7A\u6570\u636E\u66FF\u6362\uFF0C\u5982\u679C\u4E0D\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5224\u65AD\u5B50dom\u4E2DinnerText\u4E3A\u7A7A\u5C31\u66FF\u6362\u6210 empty ")],-1),W={class:"article-content"},X=t("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),Y=t("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),Z=t("h3",null,"isempty\u7528\u6CD5",-1),ee=t("p",null,"isempty\u7528\u6CD5\u7528\u6CD5\u7684\u63CF\u8FF0",-1),te=t("h3",null,"\u81EA\u5B9A\u4E49\u66FF\u6362\u5185\u5BB9",-1),ne=t("p",null,"\u901A\u8FC7 empty \u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u56FE\u7247\uFF0C\u6216\u901A\u8FC7\u5185\u5BB9\u4FEE\u6539\u6587\u6848\u3002",-1),ue=t("h3",null,"API",-1),ce=o({__name:"DemoEmptyReplace",setup(s){return(u,l)=>{const c=k("a-divider");return m(),y(r,null,[U,e(c),t("div",W,[e(F,null,{description:n(()=>[X,Y]),default:n(()=>[e(h,null,{default:n(()=>[e(a(V))]),_:1}),e(E,{code:a(z)},null,8,["code"])]),_:1}),e(F,null,{description:n(()=>[Z,ee]),default:n(()=>[e(h,null,{default:n(()=>[e(a(K))]),_:1}),e(E,{code:a(H)},null,8,["code"])]),_:1}),e(F,null,{description:n(()=>[te,ne]),default:n(()=>[e(h,null,{default:n(()=>[e(a(q))]),_:1}),e(E,{code:a(G)},null,8,["code"])]),_:1}),t("div",null,[ue,e(a(Q))])])],64)}}});export{ce as default};
