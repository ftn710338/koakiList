/* empty css             *//* empty css               */import{d as J,r as oe,h as v,i as X,o as D,c as P,a as C,n as O,g as c,j as G,k as ne,b as L,w as U,l as B,m as q,F as N,e as H,p as ae,q as re,f as se}from"./index.ead62fed.js";const le={class:"w-full h-full flex justify-center items-center"},ue=["draggable"],ce=J({__name:"Item",props:{color:null,x:null,y:null,dragable:{type:Boolean}},emits:["dragStart","dragEnd","dragEnter","drop"],setup(Y,{expose:i,emit:g}){const _=Y,l=oe({x:_.x,y:_.y,color:_.color}),d=v(!1),k=v(!1),h=v(!1),r=v(!1),I=v(!0),R=X(()=>({"background-color":l.color})),A=X(()=>({left:`${l.x*80}px`,top:`${l.y*80}px`}));function E(){!_.dragable||g("dragStart",{x:l.x,y:l.y})}function b(){d.value=!0}function x(){d.value=!1,g("dragEnd")}function S(){k.value||g("dragEnter",{x:l.x,y:l.y})}function M(){l.color="rgb(0,0,0,0)"}function T(){return ne(l)}function V(f,p=!1){f.x===l.x&&f.y===l.y||(k.value=!0,l.x=f.x,l.y=f.y,h.value=p,setTimeout(()=>{k.value=!1},p?500:100))}function $(f,p){f&&(r.value=!0,l.x=f.x,l.y=f.y,setTimeout(()=>{r.value=!1},100)),p&&(l.color=p)}return i({getItemData:T,fadeOut:M,updatePos:V,setItemData:$}),(f,p)=>(D(),P("div",{class:O(["w-[80px] h-[80px] absolute z-0 transition-all border",{"duration-[500ms]":c(h)&&!c(r),"duration-[100ms]":!c(h)&&!c(r),"duration-[0ms]":c(r)}]),style:G(c(A))},[C("div",le,[C("div",{class:O(["w-[60px] h-[60px] rounded-full text-center z-10 transition-colors duration-[150ms]",{" opacity-0 duration-[0ms] cursor-grabbing":c(d)," duration-[150ms] cursor-grab":!c(d)}]),style:G(c(R)),draggable:c(I),onDrag:b,onDragstart:E,onDragenter:S,onDragend:x},null,46,ue)])],6))}}),ie={class:"w-screen h-screen"},de={class:"flex flex-col h-screen justify-center items-center"},fe={class:"mb-4"},me={class:"mb-4 flex"},ve={class:"w-[800px] h-[800px] border relative overflow-hidden bg-slate-300"},he=J({__name:"Pad2",setup(Y){const i=v(5),g=v(6),_=["red","black","blue","green","yellow"],l=3,d=v([]),k={itemRefs:d},h=v(-1),r=v([[]]),I=v("normal"),R=X(()=>I.value==="normal");function A(){return Math.floor(Math.random()*5)}function E(){const e=[];d.value=[];for(let t=0;t<g.value;t+=1){const a=[];for(let o=0;o<i.value;o+=1)a.push(-1);e.push(a)}r.value=e}E();function b(e=500){return new Promise(t=>{setTimeout(()=>{t("")},e)})}function x(e,t){return e*i.value+t}function S(e){return{x:Math.floor(e/i.value),y:e%i.value}}function M(e,t){if(e>=r.value.length||t>=r.value[e].length)return"";const a=r.value[e][t];return a===-1?"":_[a]}function T(){d.value.sort((e,t)=>{const a=x(e.getItemData().x,e.getItemData().y),o=x(t.getItemData().x,t.getItemData().y);return a<o?-1:1})}async function V(){r.value.forEach(async(e,t)=>{const a=[],o=[];for(let n=e.length-1;n>=0;n-=1){const u=e[n],y=x(t,n),m=d.value[y];if(u===-1)a.push(m),o.push(n),m.setItemData({x:t,y:-1*a.length});else{const w=o.splice(0,1)[0];w&&(o.push(n),m.updatePos({x:t,y:w},!0),r.value[t][w]=u)}}for(await b(500);a.length>0;){const n=a.splice(0,1)[0],u=o.splice(0,1)[0];if(!n||u===void 0)throw new Error("------emptyItemList emptyIndexList \u6709\u554F\u984C--------");const y=A(),m=_[y];r.value[t][u]=y,n.setItemData(void 0,m),n.updatePos({x:t,y:u},!0)}}),await b(500),T()}function $(){const e=[];return r.value.forEach((a,o)=>{a.forEach((n,u)=>{const y=[],m=[];for(let s=0;s<i.value;s+=1){if(u+s<i.value){const F=r.value[o][u+s];m.push(F===n)}if(o+s<g.value){const F=r.value[o+s][u];y.push(F===n)}}let w=0;for(let s=0;s<m.length&&m[s];s+=1)w+=1;if(w>=l)for(let s=0;s<w;s+=1)e.push(x(o,u+s));let z=0;for(let s=0;s<y.length&&y[s];s+=1)z+=1;if(z>=l)for(let s=0;s<z;s+=1)e.push(x(o+s,u))})}),[...new Set(e)]}function f(e){e.forEach(t=>{const a=d.value[t],o=a.getItemData();r.value[o.x][o.y]=-1,a.fadeOut()})}async function p(){const e=$();return e.length>0?(f(e),await b(),await V(),await b(),await p(),!0):!1}function K(e){h.value=x(e.x,e.y)}function j(e,t){return e===t-1||e===t+1||e===t}function Q(e){const t=S(h.value),a=j(e.x,t.x),o=j(e.y,t.y);return a&&o}function W(e){if(!Q(e))return;const a=x(e.x,e.y),o=e,n=S(h.value),u=r.value[o.x][o.y],y=r.value[n.x][n.y],m=d.value[h.value],w=d.value[a];r.value[o.x][o.y]=y,r.value[n.x][n.y]=u,m.updatePos(o),w.updatePos(n),T(),h.value=a}async function Z(){I.value="moving",await p(),I.value="normal"}async function ee(){I.value="moving",await V(),await b(1e3),await p(),I.value="normal"}function te(){console.log("---------- LOG ---------"),console.log(r.value)}return(e,t)=>{const a=ae,o=re;return D(),P("div",ie,[C("div",de,[C("div",fe,[L(a,{onClick:ee},{default:U(()=>[B(" start ")]),_:1}),L(a,{onClick:te},{default:U(()=>[B(" showData ")]),_:1})]),C("div",me,[B(" \u884C\u6578: "),L(o,{modelValue:c(i),"onUpdate:modelValue":t[0]||(t[0]=n=>q(i)?i.value=n:null),modelModifiers:{number:!0},class:"!w-20 mx-4",type:"number",onChange:E},null,8,["modelValue"]),B(" \u5217\u6578: "),L(o,{modelValue:c(g),"onUpdate:modelValue":t[1]||(t[1]=n=>q(g)?g.value=n:null),modelModifiers:{number:!0},class:"!w-20 ml-4",type:"number",onChange:E},null,8,["modelValue"])]),C("div",ve,[(D(!0),P(N,null,H(c(g),n=>(D(),P(N,{key:n},[(D(!0),P(N,null,H(c(i),u=>(D(),se(ce,{ref_for:!0,ref:k.itemRefs,key:u-1,color:M(n-1,u-1),x:n-1,y:u-1,dragable:c(R),onDragStart:K,onDragEnd:Z,onDragEnter:W},null,8,["color","x","y","dragable"]))),128))],64))),128))])])])}}});export{he as default};
