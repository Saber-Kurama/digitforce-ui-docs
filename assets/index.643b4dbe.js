import{d as l,o as i,a as b,j as n,l as e,u as t,P as F,y as d,c as _,S as r,z as u,A as s,f as a,I as E,F as v,t as C,B as S}from"./index.b1592b5a.js";import{C as y,a as h,b as g}from"./index.3dba93b2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={formatYear:"YYYY",formatMonth:"MMM YYYY",today:"Today",view:{month:"Month",year:"Year",week:"Week",day:"Day"},month:{long:{January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December"},short:{January:"Jan",February:"Feb",March:"Mar",April:"Apr",May:"May",June:"Jun",July:"Jul",August:"Aug",September:"Sept",October:"Oct",November:"Nov",December:"Dec"}},week:{long:{self:"Week",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},short:{self:"Week",monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"}}},D={locale:"en-US",empty:{description:"No Data"},drawer:{okText:"Ok",cancelText:"Cancel"},popconfirm:{okText:"Ok",cancelText:"Cancel"},modal:{okText:"Ok",cancelText:"Cancel"},pagination:{goto:"Goto",page:"Page",countPerPage:" / Page",total:"Total: {0}"},table:{okText:"Ok",resetText:"Reset"},upload:{start:"Start",cancel:"Cancel",delete:"Delete",retry:"Click to retry",buttonText:"Upload",preview:"Preview",drag:"Click or drag file to this area to upload",dragHover:"Release to upload",error:"Upload Error"},datePicker:{view:f.view,month:f.month,week:f.week,placeholder:{date:"Please select date",week:"Please select week",month:"Please select month",year:"Please select year",quarter:"Please select quarter",time:"Please select time"},rangePlaceholder:{date:["Start date","End date"],week:["Start week","End week"],month:["Start month","End month"],year:["Start year","End year"],quarter:["Start quarter","End quarter"],time:["Start time","End time"]},selectTime:"Select time",today:"Today",now:"Now",ok:"Ok"},image:{loading:"loading"},imagePreview:{fullScreen:"Full Screen",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",zoomIn:"Zoom In",zoomOut:"Zoom Out",originalSize:"Original Size"},typography:{copied:"Copied",copy:"Copy",expand:"Expand",collapse:"Collapse",edit:"Edit"}},A=l({__name:"basic",setup(c){return(o,m)=>(i(),b(t(d),{locale:t(D)},{default:n(()=>[e(t(F),{total:50,"show-total":"","show-jumper":"","show-page-size":""})]),_:1},8,["locale"]))}}),w=a("div",{style:{"margin-bottom":"18px"}},null,-1),P={class:"my-empty"},B=l({__name:"empty",setup(c){const o=[{title:"Name",dataIndex:"name"},{title:"Salary",dataIndex:"salary"},{title:"Address",dataIndex:"address"},{title:"Email",dataIndex:"email"}];return(m,p)=>(i(),_(v,null,[e(t(d),null,{default:n(()=>[e(t(r),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[e(t(u),{columns:o,data:[]}),e(t(s),{options:[]})]),_:1})]),_:1}),w,e(t(d),null,{empty:n(()=>[a("div",P,[e(t(E))])]),default:n(()=>[e(t(r),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[e(t(u),{columns:o,data:[]}),e(t(s),{options:[]})]),_:1})]),_:1})],64))}});const x=[{title:"Name",dataIndex:"name"},{title:"Salary",dataIndex:"salary"},{title:"Address",dataIndex:"address"},{title:"Email",dataIndex:"email"}],T=l({name:"emptyTsxDemo",setup(){return()=>e(v,null,[e(d,null,{default:()=>[e(r,{direction:"vertical",style:"width: 100%"},{default:()=>[e(u,{columns:x,data:[]},null),e(s,{options:[]},null)]})]}),e("div",{style:"margin-bottom: 18px"},null),e(d,null,{default:()=>[e(r,{direction:"vertical",style:"width: 100%"},{default:()=>[e(u,{columns:x,data:[]},null),e(s,{options:[]},null)]})],empty(){return e("div",{class:"my-empty"},[e(C("icon-trophy"),null,null)])}})])}}),k=`<template>
  <ConfigProvider :locale="enUS">
    <Pagination :total="50" show-total show-jumper show-page-size />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from "@dangojs/digitforce-ui";
import { Pagination } from "@arco-design/web-vue";
import enUS from "@arco-design/web-vue/es/locale/lang/en-us";
<\/script>
`,I=`<template>
  <ConfigProvider>
    <Space direction="vertical" style="width: 100%">
      <Table :columns="columns" :data="[]" />
      <Select :options="[]" />
    </Space>
  </ConfigProvider>
  <div style="margin-bottom: 18px"></div>
  <ConfigProvider>
    <template #empty>
      <div class="my-empty">
        <icon-trophy />
      </div>
    </template>
    <Space direction="vertical" style="width: 100%">
      <Table :columns="columns" :data="[]" />
      <Select :options="[]" />
    </Space>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { Table, Select, Space } from "@arco-design/web-vue";
import { ConfigProvider } from "@dangojs/digitforce-ui";
import { IconTrophy } from "@arco-design/web-vue/es/icon";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
<\/script>

<style>
.my-empty {
  padding: 20px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}
</style>
`,M=`import { defineComponent } from "vue";
import { Table, Select, Space } from "@arco-design/web-vue";
import { ConfigProvider } from "@dangojs/digitforce-ui";
import { IconTrophy } from "@arco-design/web-vue/es/icon";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export default defineComponent({
  name: "emptyTsxDemo",
  setup() {
    return () => {
      return (
        <>
          <ConfigProvider>
            <Space direction="vertical" style="width: 100%">
              <Table columns={columns} data={[]} />
              <Select options={[]} />
            </Space>
          </ConfigProvider>
          <div style="margin-bottom: 18px"></div>
          <ConfigProvider
            v-slots={{
              empty() {
                return (
                  <div class="my-empty">
                    <icon-trophy />
                  </div>
                );
              },
            }}
          >
            <Space direction="vertical" style="width: 100%">
              <Table columns={columns} data={[]} />
              <Select options={[]} />
            </Space>
          </ConfigProvider>
        </>
      );
    };
  },
});
`,N={class:"markdown-body"},J=S('<h3 id="%3Cconfig-provider%3E-props" tabindex="-1"><code class="">&lt;config-provider&gt;</code> Props</h3><div class="md-table"><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u7248\u672C</th></tr></thead><tbody><tr><td>prefix-cls</td><td>\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00</td><td><code class="">string</code></td><td style="text-align:center;"><code class="">&#39;arco&#39;</code></td><td style="text-align:left;"></td></tr><tr><td>locale</td><td>\u914D\u7F6E\u8BED\u8A00\u5305</td><td><code class="">ArcoLang</code></td><td style="text-align:center;"><code class="">-</code></td><td style="text-align:left;"></td></tr><tr><td>size</td><td>\u5927\u5C0F</td><td><code class="">Size</code></td><td style="text-align:center;"><code class="">-</code></td><td style="text-align:left;">2.14.0</td></tr><tr><td>global</td><td>\u662F\u5426\u5168\u5C40\u751F\u6548</td><td><code class="">boolean</code></td><td style="text-align:center;"><code class="">false</code></td><td style="text-align:left;">2.25.0</td></tr><tr><td>update-at-scroll</td><td>\u662F\u5426\u5728\u5BB9\u5668\u6EDA\u52A8\u65F6\u66F4\u65B0\u5F39\u51FA\u6846\u7684\u4F4D\u7F6E</td><td><code class="">boolean</code></td><td style="text-align:center;"><code class="">false</code></td><td style="text-align:left;">2.25.0</td></tr></tbody></table></div><h3 id="%3Cconfig-provider%3E-slots" tabindex="-1"><code class="">&lt;config-provider&gt;</code> Slots</h3><div class="md-table"><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th><th style="text-align:left;">\u7248\u672C</th></tr></thead><tbody><tr><td>loading</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u5143\u7D20</td><td>-</td><td style="text-align:left;">2.28.0</td></tr><tr><td>empty</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5143\u7D20</td><td>-</td><td style="text-align:left;">2.28.0</td></tr></tbody></table></div>',4),O=[J],z=l({__name:"api",setup(c,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(m,p)=>(i(),_("div",N,O))}}),Y=a("div",{class:"article-header"},[a("h2",{class:"article-header-title"},"\u5168\u5C40\u914D\u7F6E ConfigProvider"),a("div",{class:"article-header-desc"}," \u5728\u5E94\u7528\u7684\u6700\u5916\u5C42\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E00\u6B21\u8BBE\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u3002\u4E00\u822C\u7528\u4E8E\u8BBE\u7F6E\u56FD\u9645\u5316\u8BED\u8A00\u7B49\u529F\u80FD\u3002 ")],-1),$={class:"article-content"},j=a("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),R=a("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),q=a("h3",null,"\u7A7A\u72B6\u6001\u5143\u7D20",-1),U=a("p",null,"\u901A\u8FC7 empty \u63D2\u69FD\u53EF\u4EE5\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5143\u7D20\u3002",-1),W=a("h3",null,"\u7A7A\u72B6\u6001\u5143\u7D20 TSX",-1),L=a("p",null,"\u901A\u8FC7 empty \u63D2\u69FD\u53EF\u4EE5\u5168\u5C40\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5143\u7D20\u3002",-1),V=a("h3",null,"API",-1),X=l({__name:"DemoConfigProvider",setup(c){return(o,m)=>{const p=C("a-divider");return i(),_(v,null,[Y,e(p),a("div",$,[e(g,null,{description:n(()=>[j,R]),default:n(()=>[e(y,null,{default:n(()=>[e(t(A))]),_:1}),e(h,{code:t(k)},null,8,["code"])]),_:1}),e(g,null,{description:n(()=>[q,U]),default:n(()=>[e(y,null,{default:n(()=>[e(t(B))]),_:1}),e(h,{code:t(I)},null,8,["code"])]),_:1}),e(g,null,{description:n(()=>[W,L]),default:n(()=>[e(y,null,{default:n(()=>[e(t(T))]),_:1}),e(h,{code:t(M)},null,8,["code"])]),_:1}),a("div",null,[V,e(t(z))])])],64)}}});export{X as default};
