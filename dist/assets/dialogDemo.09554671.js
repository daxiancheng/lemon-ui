import{f,r as p,o as m,b as y,h as g,i as t,x as h,u as $,T as A,p as F,l as O,m as u,w as l,s,d as w,y as S,g as v,q as k,v as C}from"./vendor.4142124e.js";import{B}from"./button.c0e3b5e0.js";import{_ as D}from"./index.d3d54d1e.js";const T=f({props:{visible:{type:Boolean,default:!1},ok:{type:Function},cancel:{type:Function}},components:{Button:B},setup(e,o){return{cancel:()=>{console.log("bbbbb",e.cancel),e.cancel&&e.cancel(),o.emit("cancel")},handleOk:()=>{console.log("aaaaa",e.ok),e.ok&&e.ok(),o.emit("ok")}}}}),E=e=>(F("data-v-f41ce6fe"),e=e(),O(),e),z={key:0,class:"mask"},P={class:"dialogContent"},j={style:{"padding-left":"20px"}},H=s("\u6DFB\u52A0\u6807\u9898"),I=E(()=>t("hr",null,null,-1)),L=s("\u6DFB\u52A0\u5185\u5BB9"),M=E(()=>t("hr",null,null,-1)),N={class:"btnContent"},V=s("\u53D6\u6D88"),x=s("\u786E\u5B9A");function q(e,o,c,i,a,r){const n=p("Button");return m(),y(A,{to:"body"},[e.visible?(m(),g("div",z,[t("div",P,[t("div",{class:"xcontent",onClick:o[0]||(o[0]=(...d)=>e.cancel&&e.cancel(...d))},"X"),t("header",j,[h(e.$slots,"title",{},()=>[H],!0)]),I,t("main",null,[h(e.$slots,"content",{},()=>[L],!0)]),M,t("footer",null,[h(e.$slots,"footer",{},()=>[t("div",N,[u(n,{onClick:e.cancel},{default:l(()=>[V]),_:1},8,["onClick"]),u(n,{theme:"primary",style:{"margin-left":"16px"},onClick:e.handleOk},{default:l(()=>[x]),_:1},8,["onClick"])])],!0)])])])):$("",!0)])}var b=D(T,[["render",q],["__scopeId","data-v-f41ce6fe"]]);const X=e=>{const o=document.createElement("div");document.body.appendChild(o);let{title:c,content:i,ok:a,cancel:r}=e,n=w({render(){return S(b,{visible:!0,ok:()=>{a(),o.remove(),n.unmount()},cancel:()=>{r(),o.remove(),n.unmount()}},{title:c,content:i})}});n.mount(o)};let G=`
<template>
    <Dialog
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    >
        <template v-slot:title>
            <h1>\u6807\u9898</h1>
        </template>
        <template v-slot:content>
            <p>\u5185\u5BB9\u533A\u57DF</p>
        </template>
    </Dialog>
    <Button theme="primary" @click="visible = true">dialog</Button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from "@components/dialog.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const visible = ref(false);
    const handleOk = () => {
      console.log("\u786E\u8BA4\u63D0\u4EA4");
      handleCancel();
    };
    const handleCancel = () => {
      console.log("\u5173\u95ED");
      visible.value = false;
    };
    return {
        visible,
        handleOk,
        handleCancel
    }
  },
});
<\/script>
`,J=`
<template>
    <Button theme="primary" @click="open">dialog</Button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// start \u53EF\u4EE5\u5355\u72EC\u653E\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D
import Dialog from "@components/dialog.vue";
import { createApp, h } from 'vue'
const openDialog = (opition:{title:string,content:string,ok:Function,cancel:Function}) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    let {title, content, ok, cancel} = opition
    let app = createApp({
        render(){
            return h(Dialog, {
                visible: true,
                ok: ()=>{
                    ok()
                    div.remove()
                    app.unmount()
                },
                cancel: ()=>{
                    cancel()
                    div.remove()
                    app.unmount()
                }
            },{
                title, content
            })
        }
    })
    app.mount(div)
}
// end

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const handleOk = () => {
      console.log("\u786E\u8BA4\u63D0\u4EA4");
      handleCancel();
    };
    const handleCancel = () => {
      console.log("\u5173\u95ED");
    };
    const open = () => {
        openDialog({
          title: "\u6807\u9898",
          content: "\u5185\u5BB9\u533A\u57DF",
          ok: handleOk,
          cancel: handleCancel,
        });
      };
    return {
        open
    }
  },
});
<\/script>
`;const K=window.Prism,Q=f({components:{Dialog:b,Button:B},setup(){const e=v(!1),o=v(!0),c=v(!1),i=()=>{console.log("\u786E\u8BA4\u63D0\u4EA4"),a()},a=()=>{console.log("\u5173\u95ED"),e.value=!1};return{visible:e,handleCancel:a,handleOk:i,open:()=>{X({title:"\u6807\u9898",content:"\u5185\u5BB9\u533A\u57DF",ok:i,cancel:a})},dialog1:G,code1:o,code2:c,dialog2:J,Prism:K}}}),R={style:{color:"#37474f","margin-left":"20px"}},U=t("h2",null,"Dialog \u7EC4\u4EF6\u793A\u4F8B",-1),W={class:"ButtonBox"},Y=t("div",{style:{padding:"12px","font-size":"14px"}},"\u5E38\u89C4\u7528\u6CD5",-1),Z={class:"buttonContent",style:{"justify-content":"flex-start"}},ee=t("h1",null,"\u6807\u9898",-1),te=t("p",null,"\u5185\u5BB9\u533A\u57DF",-1),oe=s("dialog"),ne={style:{padding:"12px","font-size":"12px"}},le=s("\u67E5\u770B\u4EE3\u7801"),se={class:"sourceContent"},ie=["innerHTML"],ae={class:"ButtonBox"},ue=t("div",{style:{padding:"12px","font-size":"14px"}},"render \u51FD\u6570\u6E32\u67D3",-1),ce={class:"buttonContent",style:{"justify-content":"flex-start"}},de=s("dialog"),re={style:{padding:"12px","font-size":"12px"}},pe=s("\u67E5\u770B\u4EE3\u7801"),me={class:"sourceContent"},he=["innerHTML"];function ve(e,o,c,i,a,r){const n=p("Dialog"),d=p("Button");return m(),g("div",R,[U,t("div",W,[t("div",null,[Y,t("div",Z,[u(n,{visible:e.visible,onOk:e.handleOk,onCancel:e.handleCancel},{title:l(()=>[ee]),content:l(()=>[te]),_:1},8,["visible","onOk","onCancel"]),u(d,{theme:"primary",onClick:o[0]||(o[0]=_=>e.visible=!0)},{default:l(()=>[oe]),_:1})]),t("div",ne,[u(d,{style:{"font-size":"12px"},onClick:o[1]||(o[1]=_=>e.code1=!e.code1)},{default:l(()=>[le]),_:1})]),k(t("div",se,[t("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.dialog1.trim(),e.Prism.languages.html,"html")},null,8,ie)],512),[[C,e.code1]])])]),t("div",ae,[t("div",null,[ue,t("div",ce,[u(d,{theme:"primary",onClick:e.open},{default:l(()=>[de]),_:1},8,["onClick"])]),t("div",re,[u(d,{style:{"font-size":"12px"},onClick:o[2]||(o[2]=_=>e.code2=!e.code2)},{default:l(()=>[pe]),_:1})]),k(t("div",me,[t("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.dialog2.trim(),e.Prism.languages.html,"html")},null,8,he)],512),[[C,e.code2]])])])])}var ke=D(Q,[["render",ve]]);export{ke as default};
