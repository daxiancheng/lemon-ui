import{_ as d}from"./index.f13b6e12.js";import{f as i,k as n,o as r,h as l,u as m,x as p,n as u}from"./vendor.4142124e.js";const c=i({props:{theme:{type:String,default:"normal"},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{theme:s,size:t}=e,o=n(()=>"lemon-theme-"+s),a=n(()=>"lemon-size-"+t);return{classTheme:o,sizeTheme:a}}}),_={key:0,class:"lemo-loading"};function f(e,s,t,o,a,h){return r(),l("button",{class:u([e.classTheme,e.sizeTheme,{disabled:e.disabled}])},[e.loading?(r(),l("span",_)):m("",!0),p(e.$slots,"default",{},void 0,!0)],2)}var y=d(c,[["render",f],["__scopeId","data-v-69c0d8b6"]]);export{y as B};
