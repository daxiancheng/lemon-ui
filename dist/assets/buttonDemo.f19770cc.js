import{B as c}from"./button.6539082c.js";import{f as _,g as d,r as h,o as f,h as B,i as t,m as n,w as s,q as l,v as a,s as u}from"./vendor.4142124e.js";import{_ as g}from"./index.fd178b57.js";let v=`
<template>
    <Button>\u6309\u94AE</Button>
    <Button theme="primary">\u6309\u94AE</Button>
    <Button theme="danger">\u6309\u94AE</Button>
    <Button :disabled="true">\u6309\u94AE</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
<\/script>
`,E=`
<template>
    <Button>\u6309\u94AE</Button>
    <Button size="large">\u6309\u94AE</Button>
    <Button size="small">\u6309\u94AE</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
<\/script>
`,A=`
<template>
    <Button :loading="true">\u6309\u94AE</Button>
    <Button theme="primary" :loading="true">\u6309\u94AE</Button>
    <Button theme="danger" :loading="true">\u6309\u94AE</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
<\/script>
`;const m=window.Prism;console.log("Prism",m);const C=_({components:{Button:c},setup(){const e=d(!0),i=d(!1),r=d(!1);return{btn1:v,btn2:E,btn3:A,code1:e,code2:i,code3:r,Prism:m}}}),b={style:{color:"#37474f","margin-left":"20px"}},y=t("h2",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1),z={class:"ButtonBox"},x=t("div",{style:{padding:"12px","font-size":"14px"}},"\u5E38\u89C4\u7528\u6CD5",-1),P={class:"buttonContent"},L=u("\u6309\u94AE"),T=u("\u6309\u94AE"),$=u("\u6309\u94AE"),w=u("\u6309\u94AE"),H={style:{padding:"12px","font-size":"12px"}},M=u("\u67E5\u770B\u4EE3\u7801"),k={class:"sourceContent"},D=["innerHTML"],j={class:"ButtonBox"},F=t("div",{style:{padding:"12px","font-size":"14px"}},"Size \u7C7B\u578B",-1),N={class:"buttonContent"},V=u("\u6309\u94AE"),S=u("\u6309\u94AE"),q=u("\u6309\u94AE"),G={style:{padding:"12px","font-size":"12px"}},I=u("\u67E5\u770B\u4EE3\u7801"),J={class:"sourceContent"},K=["innerHTML"],O={class:"ButtonBox"},Q=t("div",{style:{padding:"12px","font-size":"14px"}},"\u6DFB\u52A0 Loading",-1),R={class:"buttonContent"},U=u("\u6309\u94AE"),W=u("\u6309\u94AE"),X=u("\u6309\u94AE"),Y={style:{padding:"12px","font-size":"12px"}},Z=u("\u67E5\u770B\u4EE3\u7801"),tt={class:"sourceContent"},et=["innerHTML"];function ot(e,i,r,nt,st,ut){const o=h("Button");return f(),B("div",b,[y,t("div",z,[t("div",null,[x,t("div",P,[n(o,null,{default:s(()=>[L]),_:1}),n(o,{theme:"primary"},{default:s(()=>[T]),_:1}),n(o,{theme:"danger"},{default:s(()=>[$]),_:1}),n(o,{disabled:!0},{default:s(()=>[w]),_:1})]),t("div",H,[n(o,{style:{"font-size":"12px"},onClick:i[0]||(i[0]=p=>e.code1=!e.code1)},{default:s(()=>[M]),_:1})]),l(t("div",k,[t("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.btn1.trim(),e.Prism.languages.html,"html")},null,8,D)],512),[[a,e.code1]])])]),t("div",j,[t("div",null,[F,t("div",N,[n(o,null,{default:s(()=>[V]),_:1}),n(o,{size:"large"},{default:s(()=>[S]),_:1}),n(o,{size:"small"},{default:s(()=>[q]),_:1})]),t("div",G,[n(o,{style:{"font-size":"12px"},onClick:i[1]||(i[1]=p=>e.code2=!e.code2)},{default:s(()=>[I]),_:1})]),l(t("div",J,[t("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.btn2.trim(),e.Prism.languages.html,"html")},null,8,K)],512),[[a,e.code2]])])]),t("div",O,[t("div",null,[Q,t("div",R,[n(o,{loading:!0},{default:s(()=>[U]),_:1}),n(o,{theme:"primary",loading:!0},{default:s(()=>[W]),_:1}),n(o,{theme:"danger",loading:!0},{default:s(()=>[X]),_:1})]),t("div",Y,[n(o,{style:{"font-size":"12px"},onClick:i[2]||(i[2]=p=>e.code3=!e.code3)},{default:s(()=>[Z]),_:1})]),l(t("div",tt,[t("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.btn3.trim(),e.Prism.languages.html,"html")},null,8,et)],512),[[a,e.code3]])])])])}var at=g(C,[["render",ot]]);export{at as default};
