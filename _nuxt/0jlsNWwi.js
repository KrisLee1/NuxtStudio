import P from"./Mc8nxENT.js";import k from"./BUkFqQFL.js";import L from"./C_BQCv-3.js";import{u as b,d as f,D as R,P as g,s as C,E as x,G as S,r as B,a as E,H as m,I as N,J as T,K as p,T as j,L as u,M as H,N as O,S as A,O as D,Q as w,p as $,R as q,c as d,e as I,i as y,w as _,U as v}from"./DKUVEzHw.js";import{u as M}from"./BaBw9gQB.js";import"./DtLCt8gj.js";import"./Dnd51l0P.js";const F=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),G=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=b(),o=R(g),s=o===C()?x():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),i=B();n.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);E().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??N;return T(j,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(l)}},{default:()=>p(J,{layoutProps:H(n.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),J=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&D(w,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(F,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),K={class:"document-driven-page"},Z=f({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&M(e),(s,r)=>{const i=P,l=k,a=L,c=G;return d(),I("div",K,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(d(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(d(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
