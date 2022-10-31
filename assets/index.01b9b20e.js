import{d as a,i as c,L as p,o as s,c as r,t as m,l as o,f as e,j as n,u as t,F as _}from"./index.0f8995ee.js";import{C,a as f,b as F}from"./index.f6a19307.js";import"./_plugin-vue_export-helper.cdc0426e.js";const h={id:"saber"},v=a({__name:"confirm",setup(u){return c(()=>{p.confirm({title:"saber",content:"",popupContainer:"#saber",renderToBody:!0})}),(d,i)=>(s(),r("div",h))}}),D=`<template>
  <div id="saber">
    <!-- <a-modal visible popupContainer="#app" :renderToBody="false"> sss </a-modal> -->
    <!-- <a-modal visible> sssaaa </a-modal>  -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { Modal } from "@arco-design/web-vue";

onMounted(() => {
  Modal.confirm({
    title: "saber",
    content: "",
    popupContainer: "#saber",
    renderToBody: true,
  });
});
<\/script>
`,b=e("div",{class:"article-header"},[e("h2",{class:"article-header-title"},"\u5BF9\u8BDD\u6846 Modal"),e("div",{class:"article-header-desc"}," \u5728\u5F53\u524D\u9875\u9762\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002 ")],-1),B={class:"article-content"},M=e("h3",null,"confrim\u7684\u63D0\u793A",-1),x=e("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),y=a({__name:"DemoModal",setup(u){return(d,i)=>{const l=m("a-divider");return s(),r(_,null,[b,o(l),e("div",B,[o(F,null,{description:n(()=>[M,x]),default:n(()=>[o(C,null,{default:n(()=>[o(t(v))]),_:1}),o(f,{code:t(D)},null,8,["code"])]),_:1})])],64)}}});export{y as default};
