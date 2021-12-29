import{x as K,s as _,f as $,g as u,k as F,z as D,o as l,h as f,i as o,F as E,j as I,b as S,A as L,n as x,t as z,r as y,m,w as v,q as j,v as P,p as N,l as V}from"./vendor.4142124e.js";import{B as A}from"./button.15c44f6f.js";import{_ as h}from"./index.f13b6e12.js";let H=`
<template>
    <Tabs v-model:tabKey="tabKey">
        <Tab title="tab 1" key="tab1">tab111</Tab>
        <Tab title="tab 2" key="tab2">tab222</Tab>
    </Tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '@components/tabs.vue'
import Tab from '@components/tab.vue'

export default defineComponent({
    components: {
        Tabs,
        Tab
    },
    setup() {
        const tabKey = ref('tab1')
        return {
            tabKey
        }
    },
})
<\/script>
`;const M={},R=_("\u6DFB\u52A0\u5185\u5BB9");function q(t,e){return K(t.$slots,"default",{},()=>[R])}var k=h(M,[["render",q]]);const U=$({props:{tabKey:{type:String}},setup(t,e){var T,g;const n=(g=(T=e.slots).default)==null?void 0:g.call(T);if(!n)throw new Error("Tabs\u7EC4\u4EF6\u5FC5\u987B\u548CTab\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528");if(!n.every(a=>a.type===k))throw new Error("Tabs\u7EC4\u4EF6\u5FC5\u987B\u548CTab\u7EC4\u4EF6\u642D\u914D\u4F7F\u7528");const d=u(),c=u(),s=u(),i=F(()=>n.filter(a=>{var b;return((b=a.props)==null?void 0:b.key)===t.tabKey})[0]),r=n.map(a=>a.props),p=a=>{e.emit("update:tabKey",a.key)};return D(()=>{let{left:a}=c.value.getBoundingClientRect(),{left:b,width:w}=d.value.getBoundingClientRect();s.value.style.left=b-a+"px",s.value.style.width=w+"px"},{flush:"post"}),{tabTitleList:r,tabChange:p,tabList:n,selectedItem:d,container:c,current:i,slide:s}}}),G={class:"tabTitle",ref:"container"},J=["onClick"],O={class:"lemo-slide",ref:"slide"},Q={class:"tabContent"};function W(t,e,n,C,d,c){return l(),f(E,null,[o("div",G,[(l(!0),f(E,null,I(t.tabTitleList,(s,i)=>(l(),f("div",{key:i,onClick:r=>t.tabChange(s),class:x(["tabItem",{select:s.key===t.tabKey}]),ref_for:!0,ref:r=>{s.key===t.tabKey&&r&&(t.selectedItem=r)}},z(s.title),11,J))),128))],512),o("div",O,null,512),o("div",Q,[(l(),S(L(t.current)))])],64)}var X=h(U,[["render",W],["__scopeId","data-v-d08f6ad8"]]);const Y=window.Prism,Z=$({components:{Tabs:X,Tab:k,Button:A},setup(){const t=u("tab1"),e=u(!0);return{tabKey:t,tabs1:H,code1:e,Prism:Y}}}),B=t=>(N("data-v-d981a65e"),t=t(),V(),t),tt={style:{color:"#37474f","margin-left":"20px"}},et=B(()=>o("h2",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1)),st={class:"ButtonBox"},ot=B(()=>o("div",{style:{padding:"12px","font-size":"14px"}},"\u5E38\u89C4\u7528\u6CD5",-1)),at={class:"tabsDomContent"},nt=_("tab111"),rt=_("tab222"),it={style:{padding:"12px","font-size":"12px"}},ut=_("\u67E5\u770B\u4EE3\u7801"),lt={class:"sourceContent"},dt=["innerHTML"];function ct(t,e,n,C,d,c){const s=y("Tab"),i=y("Tabs"),r=y("Button");return l(),f("div",tt,[et,o("div",st,[o("div",null,[ot,o("div",at,[m(i,{tabKey:t.tabKey,"onUpdate:tabKey":e[0]||(e[0]=p=>t.tabKey=p)},{default:v(()=>[m(s,{title:"tab 1",key:"tab1"},{default:v(()=>[nt]),_:1}),m(s,{title:"tab 2",key:"tab2"},{default:v(()=>[rt]),_:1})]),_:1},8,["tabKey"])]),o("div",it,[m(r,{style:{"font-size":"12px"},onClick:e[1]||(e[1]=p=>t.code1=!t.code1)},{default:v(()=>[ut]),_:1})]),j(o("div",lt,[o("pre",{class:"language-css",innerHTML:t.Prism.highlight(t.tabs1.trim(),t.Prism.languages.html,"html")},null,8,dt)],512),[[P,t.code1]])])])])}var ft=h(Z,[["render",ct],["__scopeId","data-v-d981a65e"]]);export{ft as default};
