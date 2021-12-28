import{f as a,o as u,h as p,n as S,p as B,l as C,i as s,g as c,r as m,m as d,w as f,q as k,v as _,s as v}from"./vendor.4142124e.js";import{B as $}from"./button.93687a24.js";import{_ as g}from"./index.fb8930c9.js";const b=a({props:{checked:Boolean,disabled:Boolean},setup(e,t){return{toggle:()=>{t.emit("update:checked",!e.checked)}}}}),y=e=>(B("data-v-08ffc668"),e=e(),C(),e),E=["disabled"],z=y(()=>s("span",null,null,-1)),P=[z];function T(e,t,i,l,r,w){return u(),p("button",{class:S({checked:e.checked,disabled:e.disabled}),onClick:t[0]||(t[0]=(...n)=>e.toggle&&e.toggle(...n)),disabled:e.disabled},P,10,E)}var j=g(b,[["render",T],["__scopeId","data-v-08ffc668"]]);let H=`
<template>
    <Switch v-model:checked="checked"></Switch>
    <Switch v-model:checked="checked1"></Switch>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "@components/Switch.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false)
    const checked1 = ref(true)
    return {
        checked,
        checked1,
    }
  },
});
<\/script>
`,I=`
<template>
    <Switch v-model:checked="checked2" :disabled="true"></Switch>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "@components/Switch.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const checked2 = ref(false)
    return {
        checked2
    }
  },
});
<\/script>
`;const L=window.Prism,M=a({components:{Switch:j,Button:$},setup(){const e=c(!1),t=c(!0),i=c(!0),l=c(!0),r=c(!1);return{checked:e,checked1:t,checked2:i,switch1:H,switch2:I,code1:l,code2:r,Prism:L}}}),D={style:{color:"#37474f","margin-left":"20px"}},F=s("h2",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1),N={class:"ButtonBox"},U=s("div",{style:{padding:"12px","font-size":"14px"}},"\u5E38\u89C4\u7528\u6CD5",-1),V={class:"buttonContent"},q={style:{padding:"12px","font-size":"12px"}},x=v("\u67E5\u770B\u4EE3\u7801"),A={class:"sourceContent"},G=["innerHTML"],J={class:"ButtonBox"},K=s("div",{style:{padding:"12px","font-size":"14px"}},"\u7981\u7528\u70B9\u51FB",-1),O={class:"buttonContent",style:{"justify-content":"flex-start"}},Q={style:{padding:"12px","font-size":"12px"}},R=v("\u67E5\u770B\u4EE3\u7801"),W={class:"sourceContent"},X=["innerHTML"];function Y(e,t,i,l,r,w){const n=m("Switch"),h=m("Button");return u(),p("div",D,[F,s("div",N,[s("div",null,[U,s("div",V,[d(n,{checked:e.checked,"onUpdate:checked":t[0]||(t[0]=o=>e.checked=o)},null,8,["checked"]),d(n,{checked:e.checked1,"onUpdate:checked":t[1]||(t[1]=o=>e.checked1=o)},null,8,["checked"])]),s("div",q,[d(h,{style:{"font-size":"12px"},onClick:t[2]||(t[2]=o=>e.code1=!e.code1)},{default:f(()=>[x]),_:1})]),k(s("div",A,[s("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.switch1.trim(),e.Prism.languages.html,"html")},null,8,G)],512),[[_,e.code1]])])]),s("div",J,[s("div",null,[K,s("div",O,[d(n,{checked:e.checked2,"onUpdate:checked":t[3]||(t[3]=o=>e.checked2=o),disabled:!0},null,8,["checked"])]),s("div",Q,[d(h,{style:{"font-size":"12px"},onClick:t[4]||(t[4]=o=>e.code2=!e.code2)},{default:f(()=>[R]),_:1})]),k(s("div",W,[s("pre",{class:"language-css",innerHTML:e.Prism.highlight(e.switch2.trim(),e.Prism.languages.html,"html")},null,8,X)],512),[[_,e.code2]])])])])}var se=g(M,[["render",Y]]);export{se as default};
