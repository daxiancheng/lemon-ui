import{c as m,a as p,r as d,o as f,b as h,d as v}from"./vendor.4142124e.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();const E="modulepreload",a={},g="./",i=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${g}${o}`,o in a)return;a[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":E,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,_)=>{r.addEventListener("load",u),r.addEventListener("error",_)})})).then(()=>s())},L=[{path:"/content",name:"content",component:()=>i(()=>import("./content.4687a841.js"),["assets/content.4687a841.js","assets/content.36f816af.css","assets/vendor.4142124e.js","assets/lemo.aa52d3a0.js"]),children:[{path:"",name:"button",component:()=>i(()=>import("./buttonDemo.b81e0e8d.js"),["assets/buttonDemo.b81e0e8d.js","assets/button.15c44f6f.js","assets/button.ed72e4bd.css","assets/vendor.4142124e.js"])},{path:"dialog",name:"dialog",component:()=>i(()=>import("./dialogDemo.6b451280.js"),["assets/dialogDemo.6b451280.js","assets/dialogDemo.1a4e93d6.css","assets/vendor.4142124e.js","assets/button.15c44f6f.js","assets/button.ed72e4bd.css"])},{path:"switch",name:"switch",component:()=>i(()=>import("./switchDemo.ac159952.js"),["assets/switchDemo.ac159952.js","assets/switchDemo.fd32ce38.css","assets/vendor.4142124e.js","assets/button.15c44f6f.js","assets/button.ed72e4bd.css"])},{path:"tabs",name:"tabs",component:()=>i(()=>import("./tabsDemo.00fce66a.js"),["assets/tabsDemo.00fce66a.js","assets/tabsDemo.3a880393.css","assets/vendor.4142124e.js","assets/button.15c44f6f.js","assets/button.ed72e4bd.css"])}]},{path:"/",name:"index",component:()=>i(()=>import("./index.4224691a.js"),["assets/index.4224691a.js","assets/index.90fb25a5.css","assets/lemo.aa52d3a0.js","assets/vendor.4142124e.js"])}],b=m({history:p(),routes:L});var O=(c,s)=>{const n=c.__vccOpts||c;for(const[o,e]of s)n[o]=e;return n};const P={};function A(c,s){const n=d("router-view");return f(),h(n)}var D=O(P,[["render",A]]);const l=v(D);l.use(b);l.mount("#app");export{O as _};