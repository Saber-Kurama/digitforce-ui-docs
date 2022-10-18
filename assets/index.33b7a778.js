import{M as o}from"./index.9d6df5f9.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{t as s,o as h,a as g,j as t,l as n,v as a,d as m,c as p,f as c,u,F as b}from"./index.0d0db306.js";import{C as x,a as w,b as B}from"./index.78385b28.js";const E={setup(){return{handleClickConfirm:()=>{o.confirm({title:"\u63D0\u4EA4\u540E\u60A8\u7684\u8BBE\u7F6E\u5C06\u7ACB\u5373\u751F\u6548",content:"\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E"})},handleClickDangerConfirm:()=>{o.dangerConfirm({title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8BE5\u5546\u54C1\uFF1F",content:"\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D"})},handleClickInfo:()=>{o.info({title:"Info Notification",content:"This is an info description which directly indicates a neutral informative change or action."})},handleClickSuccess:()=>{o.success({title:"Success Notification",content:"This is a success notification"})},handleClickWarning:()=>{o.warning({title:"Warning Notification",content:"This is a warning description which directly indicates a warning that might need attention."})},handleClickError:()=>{o.error({title:"Error Notification",content:"This is an error description which directly indicates a dangerous or potentially negative action."})}}}},D=a("confirm"),F=a("dangerConfirm"),v=a("Info"),M=a("Success"),N=a("Warning"),I=a("Error");function S(r,l,d,e,C,f){const i=s("a-button"),k=s("a-space");return h(),g(k,null,{default:t(()=>[n(i,{onClick:e.handleClickConfirm},{default:t(()=>[D]),_:1},8,["onClick"]),n(i,{onClick:e.handleClickDangerConfirm,status:"danger"},{default:t(()=>[F]),_:1},8,["onClick"]),n(i,{onClick:e.handleClickInfo},{default:t(()=>[v]),_:1},8,["onClick"]),n(i,{onClick:e.handleClickSuccess,status:"success"},{default:t(()=>[M]),_:1},8,["onClick"]),n(i,{onClick:e.handleClickWarning,status:"warning"},{default:t(()=>[N]),_:1},8,["onClick"]),n(i,{onClick:e.handleClickError,status:"danger"},{default:t(()=>[I]),_:1},8,["onClick"])]),_:1})}const W=_(E,[["render",S]]),T=`<template>
  <a-space>
    <a-button @click="handleClickConfirm">confirm</a-button>
    <a-button @click="handleClickDangerConfirm" status="danger"
      >dangerConfirm</a-button
    >
    <a-button @click="handleClickInfo">Info</a-button>
    <a-button @click="handleClickSuccess" status="success">Success</a-button>
    <a-button @click="handleClickWarning" status="warning">Warning</a-button>
    <a-button @click="handleClickError" status="danger">Error</a-button>
  </a-space>
</template>

<script>
import { Modal } from "@arco-design/web-vue";
import { MessageBox } from "@dangojs/digitforce-ui";

export default {
  setup() {
    const handleClickConfirm = () => {
      MessageBox.confirm({
        title: "\u63D0\u4EA4\u540E\u60A8\u7684\u8BBE\u7F6E\u5C06\u7ACB\u5373\u751F\u6548",
        content: "\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E",
      });
    };
    const handleClickDangerConfirm = () => {
      MessageBox.dangerConfirm({
        title: "\u662F\u5426\u786E\u5B9A\u5220\u9664\u8BE5\u5546\u54C1\uFF1F",
        content: "\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\u8FD9\u91CC\u662F\u6587\u6848\u8BF4\u660E\uFF0C\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D",
      });
    };
    const handleClickInfo = () => {
      MessageBox.info({
        title: "Info Notification",
        content:
          "This is an info description which directly indicates a neutral informative change or action.",
      });
    };
    const handleClickSuccess = () => {
      MessageBox.success({
        title: "Success Notification",
        content: "This is a success notification",
      });
    };
    const handleClickWarning = () => {
      MessageBox.warning({
        title: "Warning Notification",
        content:
          "This is a warning description which directly indicates a warning that might need attention.",
      });
    };
    const handleClickError = () => {
      MessageBox.error({
        title: "Error Notification",
        content:
          "This is an error description which directly indicates a dangerous or potentially negative action.",
      });
    };

    return {
      handleClickConfirm,
      handleClickDangerConfirm,
      handleClickInfo,
      handleClickSuccess,
      handleClickWarning,
      handleClickError,
    };
  },
};
<\/script>
`,y=c("div",{class:"article-header"},[c("h2",{class:"article-header-title"},"\u6D88\u606F\u63D0\u793A\u6846 MessageBox"),c("div",{class:"article-header-desc"},"\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u63CF\u8FF0")],-1),A={class:"article-content"},V=c("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),$=c("p",null,"\u57FA\u672C\u7528\u6CD5\u7684\u63CF\u8FF0",-1),H=m({__name:"demo-message-box",setup(r){return(l,d)=>{const e=s("a-divider");return h(),p(b,null,[y,n(e),c("div",A,[n(B,null,{description:t(()=>[V,$]),default:t(()=>[n(x,null,{default:t(()=>[n(u(W))]),_:1}),n(w,{code:u(T)},null,8,["code"])]),_:1})])],64)}}});export{H as default};
