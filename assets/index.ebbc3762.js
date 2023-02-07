import{a2 as x,l as e,a3 as F,d as _,h as B,t as p,o as h,a as C,j as n,u as o,c as m,m as j,F as E,v as l,f as u,aO as w,aP as z}from"./index.b1592b5a.js";import{a as $,S as A}from"./index.611bc4b5.js";import{C as b,a as v,b as S}from"./index.3dba93b2.js";import"./vue-utils.2efa99c0.js";import"./keyboard.6cdb1690.js";import"./use-form-item.46584813.js";import"./use-size.803c1c7b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y=x(A,{},(d,a)=>({"arrow-icon":()=>e($,{class:"arco-select-arrow-icon"},null),...a.slots})),s=F(y),D=l("Beijing"),P=l("Shanghai"),G=l("Guangzhou"),V=l("Disabled"),W=l("Beijing"),k=l("Shanghai"),M=l("Guangzhou"),T=l("Disabled"),I=l("Beijing-Beijing-Beijing"),O=l("Shanghai"),N=l("Guangzhou"),U=l("Disabled"),L=_({__name:"basic",setup(d){const a=B(),i=[{value:"beijing",label:"Beijing",other:"extra"},{value:"shanghai",label:"Shanghai",other:"extra"},{value:"guangzhou",label:"Guangzhou",other:"extra"},{value:"chengdu",label:"Chengdu",other:"extra"}];return(r,g)=>{const t=p("a-option"),f=p("a-space");return h(),C(f,{direction:"vertical",size:"large"},{default:n(()=>[e(o(s),{style:{width:"320px"},placeholder:"Please select ..."},{default:n(()=>[e(t,null,{default:n(()=>[D]),_:1}),e(t,null,{default:n(()=>[P]),_:1}),e(t,null,{default:n(()=>[G]),_:1}),e(t,{disabled:""},{default:n(()=>[V]),_:1})]),_:1}),e(o(s),{defaultValue:"Beijing",style:{width:"320px"},placeholder:"Please select ...",disabled:""},{default:n(()=>[e(t,null,{default:n(()=>[W]),_:1}),e(t,null,{default:n(()=>[k]),_:1}),e(t,null,{default:n(()=>[M]),_:1}),e(t,{disabled:""},{default:n(()=>[T]),_:1})]),_:1}),e(o(s),{modelValue:a.value,"onUpdate:modelValue":g[0]||(g[0]=c=>a.value=c),style:{width:"320px"},placeholder:"Please select ...","allow-clear":""},{default:n(()=>[(h(),m(E,null,j(i,c=>e(t,{value:c,label:c.label,key:c.label},null,8,["value","label"])),64))]),_:1},8,["modelValue"]),e(o(s),{style:{width:"160px"},placeholder:"Select","trigger-props":{autoFitPopupMinWidth:!0}},{default:n(()=>[e(t,null,{default:n(()=>[I]),_:1}),e(t,null,{default:n(()=>[O]),_:1}),e(t,null,{default:n(()=>[N]),_:1}),e(t,{disabled:""},{default:n(()=>[U]),_:1})]),_:1})]),_:1})}}}),q={style:{"margin-bottom":"10px"}},H=l(" Virtual Scrollbar "),J=l("Beijing"),K=l("Shanghai"),Q=l("Guangzhou"),R=l("Disabled"),X=l("Shenzhen"),Y=l("Wuhan"),Z=l("Beijing"),ee=l("Shanghai"),ne=l("Guangzhou"),te=l("Disabled"),le=l("Shenzhen"),ae=l("Chengdu"),oe=l("Wuhan"),ue=l("Beijing"),ie=l("Shanghai"),se=l("Guangzhou"),de=l("Disabled"),ce=l("Shenzhen"),re=l("Wuhan"),pe=_({__name:"multiple",setup(d){const a=B(!0);return(i,r)=>{const g=p("a-switch"),t=p("a-option"),f=p("a-space");return h(),m(E,null,[u("div",q,[e(g,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c)},null,8,["modelValue"]),H]),e(f,{direction:"vertical",size:"large"},{default:n(()=>[e(o(s),{"default-value":["Beijing","Shanghai"],style:{width:"360px"},placeholder:"Please select ...",multiple:"",scrollbar:a.value},{default:n(()=>[e(t,null,{default:n(()=>[J]),_:1}),e(t,{"tag-props":{color:"red"}},{default:n(()=>[K]),_:1}),e(t,null,{default:n(()=>[Q]),_:1}),e(t,{disabled:""},{default:n(()=>[R]),_:1}),e(t,null,{default:n(()=>[X]),_:1}),e(t,null,{default:n(()=>[Y]),_:1})]),_:1},8,["scrollbar"]),e(o(s),{"default-value":["Beijing","Shanghai","Guangzhou"],style:{width:"360px"},placeholder:"Please select ...",multiple:"","max-tag-count":2,"allow-clear":"",scrollbar:a.value},{default:n(()=>[e(t,null,{default:n(()=>[Z]),_:1}),e(t,null,{default:n(()=>[ee]),_:1}),e(t,null,{default:n(()=>[ne]),_:1}),e(t,{disabled:""},{default:n(()=>[te]),_:1}),e(t,null,{default:n(()=>[le]),_:1}),e(t,null,{default:n(()=>[ae]),_:1}),e(t,null,{default:n(()=>[oe]),_:1})]),_:1},8,["scrollbar"]),e(o(s),{"default-value":["Beijing","Shanghai"],style:{width:"360px"},placeholder:"Please select ...",multiple:"",limit:2,scrollbar:a.value},{default:n(()=>[e(t,null,{default:n(()=>[ue]),_:1}),e(t,{"tag-props":{color:"red"}},{default:n(()=>[ie]),_:1}),e(t,null,{default:n(()=>[se]),_:1}),e(t,{disabled:""},{default:n(()=>[de]),_:1}),e(t,null,{default:n(()=>[ce]),_:1}),e(t,null,{default:n(()=>[re]),_:1})]),_:1},8,["scrollbar"])]),_:1})],64)}}}),he=_({name:"MultipleTsx",setup(){const d=B([]);return setTimeout(()=>{d.value=Array.from({length:6}).map((a,i)=>({label:`label-${i}`,value:i}))},3e3),()=>e("div",null,[e(s,{placeholder:"Please select ...",multiple:!0},{default:()=>[d.value.map(a=>e(w,{value:a.value},{default:()=>[l(" "),a.label]}))],"arrow-icon":()=>e(z,null,null)})])}}),_e=`<template>
  <a-space direction="vertical" size="large">
    <Select :style="{ width: '320px' }" placeholder="Please select ...">
      <a-option>Beijing</a-option>
      <a-option>Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
    </Select>
    <Select defaultValue="Beijing" :style="{ width: '320px' }" placeholder="Please select ..." disabled>
      <a-option>Beijing</a-option>
      <a-option>Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
    </Select>
    <Select v-model="value" :style="{ width: '320px' }" placeholder="Please select ..." allow-clear>
      <a-option v-for="item of data" :value="item" :label="item.label" :key="item.label" />
    </Select>
    <!-- <div>Select Value: {{ value }}</div> -->
    <Select :style="{ width: '160px' }" placeholder="Select" :trigger-props="{ autoFitPopupMinWidth: true }">
      <a-option>Beijing-Beijing-Beijing</a-option>
      <a-option>Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
    </Select>
  </a-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Select } from '@dangojs/digitforce-ui';

  const value = ref();
  const data = [
    {
      value: 'beijing',
      label: 'Beijing',
      other: 'extra',
    },
    {
      value: 'shanghai',
      label: 'Shanghai',
      other: 'extra',
    },
    {
      value: 'guangzhou',
      label: 'Guangzhou',
      other: 'extra',
    },
    {
      value: 'chengdu',
      label: 'Chengdu',
      other: 'extra',
    },
  ];
<\/script>
`,ge=`<template>
  <div style="margin-bottom: 10px">
    <a-switch v-model="scrollbar" />
    Virtual Scrollbar
  </div>
  <a-space direction="vertical" size="large">
    <Select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :scrollbar="scrollbar"
    >
      <a-option>Beijing</a-option>
      <a-option :tag-props="{ color: 'red' }">Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
      <a-option>Shenzhen</a-option>
      <a-option>Wuhan</a-option>
    </Select>
    <Select
      :default-value="['Beijing', 'Shanghai', 'Guangzhou']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :max-tag-count="2"
      allow-clear
      :scrollbar="scrollbar"
    >
      <a-option>Beijing</a-option>
      <a-option>Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
      <a-option>Shenzhen</a-option>
      <a-option>Chengdu</a-option>
      <a-option>Wuhan</a-option>
    </Select>
    <Select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :limit="2"
      :scrollbar="scrollbar"
    >
      <a-option>Beijing</a-option>
      <a-option :tag-props="{ color: 'red' }">Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
      <a-option>Shenzhen</a-option>
      <a-option>Wuhan</a-option>
    </Select>
  </a-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Select } from "@dangojs/digitforce-ui";

const scrollbar = ref(true);
<\/script>
`,me=`import { Select } from "@dangojs/digitforce-ui";
import { Option } from "@arco-design/web-vue";
import { defineComponent, ref } from "vue";
import { IconApps } from "@arco-design/web-vue/es/icon";

export default defineComponent({
  name: "MultipleTsx",
  setup() {
    const data = ref<any[]>([]);
    setTimeout(() => {
      data.value = Array.from({ length: 6 }).map((_, index) => {
        return {
          label: \`label-\${index}\`,
          value: index,
        };
      });
    }, 3000);
    return () => {
      return (
        <div>
          <Select
            placeholder="Please select ..."
            multiple
            v-slots={{
              "arrow-icon": () => <IconApps />,
            }}
          >
            {data.value.map((d) => {
              return <Option value={d.value}> {d.label}</Option>;
            })}
          </Select>
        </div>
      );
    };
  },
});
`,fe={class:"markdown-body"},be=_({__name:"api",setup(d,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(i,r)=>(h(),m("div",fe))}}),ve=u("div",{class:"article-header"},[u("h2",{class:"article-header-title"},"\u9009\u62E9\u5668 Select"),u("div",{class:"article-header-desc"}," \u5F53\u7528\u6237\u9700\u8981\u4ECE\u4E00\u7EC4\u540C\u7C7B\u6570\u636E\u4E2D\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u5668\uFF0C\u70B9\u51FB\u540E\u9009\u62E9\u5BF9\u5E94\u9879\u3002 ")],-1),Se={class:"article-content"},Be=u("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),Ee=u("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),xe=u("h3",null,"\u591A\u9009\u9009\u62E9\u5668",-1),Fe=u("p",null," \u901A\u8FC7\u8BBE\u7F6E multiple \uFF0C\u53EF\u4EE5\u8BA9\u9009\u62E9\u5668\u652F\u6301\u591A\u9009\u3002\u6B64\u5916\u901A\u8FC7 max-tag-count \u53EF\u4EE5\u8BBE\u7F6E\u6700\u591A\u663E\u793A\u7684\u6807\u7B7E\u4E2A\u6570\u3002 ",-1),Ce=u("h3",null,"\u591A\u9009\u9009\u62E9\u5668",-1),je=u("p",null," \u901A\u8FC7\u8BBE\u7F6E multiple \uFF0C\u53EF\u4EE5\u8BA9\u9009\u62E9\u5668\u652F\u6301\u591A\u9009\u3002\u6B64\u5916\u901A\u8FC7 max-tag-count \u53EF\u4EE5\u8BBE\u7F6E\u6700\u591A\u663E\u793A\u7684\u6807\u7B7E\u4E2A\u6570\u3002 ",-1),we=u("h3",null,"API",-1),We=_({__name:"DemoSelects",setup(d){return(a,i)=>{const r=p("a-divider");return h(),m(E,null,[ve,e(r),u("div",Se,[e(S,null,{description:n(()=>[Be,Ee]),default:n(()=>[e(b,null,{default:n(()=>[e(o(L))]),_:1}),e(v,{code:o(_e)},null,8,["code"])]),_:1}),e(S,null,{description:n(()=>[xe,Fe]),default:n(()=>[e(b,null,{default:n(()=>[e(o(pe))]),_:1}),e(v,{code:o(ge)},null,8,["code"])]),_:1}),e(S,null,{description:n(()=>[Ce,je]),default:n(()=>[e(b,null,{default:n(()=>[e(o(he))]),_:1}),e(v,{code:o(me)},null,8,["code"])]),_:1}),u("div",null,[we,e(o(be))])])],64)}}});export{We as default};
