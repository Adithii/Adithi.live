(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{640:function(a,b,c){"use strict";var d=c(1742),e={"text/plain":"Text","text/html":"Url",default:"Text"};a.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n=!1;b||(b={}),h=b.debug||!1;try{if(j=d(),k=document.createRange(),l=document.getSelection(),m=document.createElement("span"),m.textContent=a,m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(c){if(c.stopPropagation(),b.format){if(c.preventDefault(),void 0===c.clipboardData){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=e[b.format]||e.default;window.clipboardData.setData(d,a)}else c.clipboardData.clearData(),c.clipboardData.setData(b.format,a)}b.onCopy&&(c.preventDefault(),b.onCopy(c.clipboardData))}),document.body.appendChild(m),k.selectNodeContents(m),l.addRange(k),!document.execCommand("copy"))throw Error("copy command was unsuccessful");n=!0}catch(o){h&&console.error("unable to copy using execCommand: ",o),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(b.format||"text",a),b.onCopy&&b.onCopy(window.clipboardData),n=!0}catch(p){h&&console.error("unable to copy using clipboardData: ",p),h&&console.error("falling back to prompt"),i=(f="message"in b?b.message:"Copy to clipboard: #{key}, Enter",g=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",f.replace(/#{\s*key\s*}/g,g)),window.prompt(i,a)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(k):l.removeAllRanges()),m&&document.body.removeChild(m),j()}return n}},2841:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/referrals",function(){return c(1174)}])},1174:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return ax},default:function(){return ay}});var d=c(9815),e=c(5893),f=c(3848),g=c(7294);let h={data:""},i=a=>"object"==typeof window?((a?a.querySelector("#_goober"):window._goober)||Object.assign((a||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:a||h,j=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,m=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?m(g,f):f+"{"+m(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=m(g,b?b.replace(/([^,])+/g,a=>f.replace(/(^:.*)|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=m.p?m.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},n={},o=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+o(a[c]);return b}return a},p=(a,b,c,d,e)=>{var f,g,h;let i=o(a),p=n[i]||(n[i]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(i));if(!n[p]){let q=i!==a?a:(a=>{let b,c,d=[{}];for(;b=j.exec(a.replace(k,""));)b[4]?d.shift():b[3]?(c=b[3].replace(l," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(l," ").trim();return d[0]})(a);n[p]=m(e?{["@keyframes "+p]:q}:q,c?"":"."+p)}return f=n[p],g=b,h=d,-1==g.data.indexOf(f)&&(g.data=h?f+g.data:g.data+f),p},q=(a,b,c)=>a.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let g=f(c),h=g&&g.props&&g.props.className||/^go/.test(g)&&g;f=h?"."+h:g&&"object"==typeof g?g.props?"":m(g,""):!1===g?"":g}return a+d+(null==f?"":f)},"");function r(a){let b=this||{},c=a.call?a(b.p):a;return p(c.unshift?c.raw?q(c,[].slice.call(arguments,1),b.p):c.reduce((a,c)=>Object.assign(a,c&&c.call?c(b.p):c),{}):c,i(b.target),b.g,b.o,b.k)}r.bind({g:1});let s,t,u,v=r.bind({k:1});function w(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:t&&t()},h),c.o=/ *go\d+/.test(i),h.className=r.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),u&&j[0]&&u(h),s(j,h)}return b?b(e):e}}var x=a=>"function"==typeof a,y=(a,b)=>x(a)?a(b):a;let z,A;var B=(z=0,()=>(++z).toString()),C=a=>b=>{b&&setTimeout(()=>{a(b.getBoundingClientRect())})},D=()=>{if(void 0===A&&"u">typeof window){let a=matchMedia("(prefers-reduced-motion: reduce)");A=!a||a.matches}return A},E=new Map,F=a=>{if(E.has(a))return;let b=setTimeout(()=>{E.delete(a),K({type:4,toastId:a})},1e3);E.set(a,b)},G=a=>{let b=E.get(a);b&&clearTimeout(b)},H=(a,b)=>{switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,20)};case 1:return b.toast.id&&G(b.toast.id),{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:c}=b;return a.toasts.find(a=>a.id===c.id)?H(a,{type:1,toast:c}):H(a,{type:0,toast:c});case 3:let{toastId:d}=b;return d?F(d):a.toasts.forEach(a=>{F(a.id)}),{...a,toasts:a.toasts.map(a=>a.id===d|| void 0===d?{...a,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let e=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+e}))}}},I=[],J={toasts:[],pausedAt:void 0},K=a=>{J=H(J,a),I.forEach(a=>{a(J)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(a={})=>{let[b,c]=(0,g.useState)(J);(0,g.useEffect)(()=>(I.push(c),()=>{let a=I.indexOf(c);a> -1&&I.splice(a,1)}),[b]);let d=b.toasts.map(b=>{var c,d;return{...a,...a[b.type],...b,duration:b.duration||(null==(c=a[b.type])?void 0:c.duration)||(null==a?void 0:a.duration)||L[b.type],style:{...a.style,...null==(d=a[b.type])?void 0:d.style,...b.style}}});return{...b,toasts:d}},N=(a,b="blank",c)=>({createdAt:Date.now(),visible:!0,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||B()}),O=a=>(b,c)=>{let d=N(b,a,c);return K({type:2,toast:d}),d.id},P=(a,b)=>O("blank")(a,b);P.error=O("error"),P.success=O("success"),P.loading=O("loading"),P.custom=O("custom"),P.dismiss=a=>{K({type:3,toastId:a})},P.remove=a=>K({type:4,toastId:a}),P.promise=(a,b,c)=>{let d=P.loading(b.loading,{...c,...null==c?void 0:c.loading});return a.then(a=>(P.success(y(b.success,a),{id:d,...c,...null==c?void 0:c.success}),a)).catch(a=>{P.error(y(b.error,a),{id:d,...c,...null==c?void 0:c.error})}),a};var Q,R=a=>{let{toasts:b,pausedAt:c}=M(a);(0,g.useEffect)(()=>{if(c)return;let a=Date.now(),d=b.map(b=>{if(b.duration===1/0)return;let c=(b.duration||0)+b.pauseDuration-(a-b.createdAt);if(c<0){b.visible&&P.dismiss(b.id);return}return setTimeout(()=>P.dismiss(b.id),c)});return()=>{d.forEach(a=>a&&clearTimeout(a))}},[b,c]);let d=(0,g.useMemo)(()=>({startPause:()=>{K({type:5,time:Date.now()})},endPause:()=>{c&&K({type:6,time:Date.now()})},updateHeight:(a,b)=>K({type:1,toast:{id:a,height:b}}),calculateOffset:(a,c)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=c||{},g=b.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)}}),[b,c]);return{toasts:b,handlers:d}},S=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,Y=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Z=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,$=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,_=w("div")`
  position: absolute;
`,aa=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ab=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ac=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ab} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ad=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?g.createElement(ac,null,b):b:"blank"===c?null:g.createElement(aa,null,g.createElement(X,{...d}),"loading"!==c&&g.createElement(_,null,"error"===c?g.createElement(V,{...d}):g.createElement($,{...d})))},ae=a=>`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,af=a=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`,ag=w("div",g.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ah=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ai=(a,b)=>{let c=a.includes("top")?1:-1,[d,e]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ae(c),af(c)];return{animation:b?`${v(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(e)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},aj=g.memo(({toast:a,position:b,style:c,children:d})=>{let e=null!=a&&a.height?ai(a.position||b||"top-center",a.visible):{opacity:0},f=g.createElement(ad,{toast:a}),h=g.createElement(ah,{...a.ariaProps},y(a.message,a));return g.createElement(ag,{className:a.className,style:{...e,...c,...a.style}},"function"==typeof d?d({icon:f,message:h}):g.createElement(g.Fragment,null,f,h))});Q=g.createElement,m.p=void 0,s=Q,t=void 0,u=void 0;var ak=(a,b)=>{let c=a.includes("top"),d=a.includes("center")?{justifyContent:"center"}:a.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${b*(c?1:-1)}px)`,...c?{top:0}:{bottom:0},...d}},al=r`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,am=({reverseOrder:a,position:b="top-center",toastOptions:c,gutter:d,children:e,containerStyle:f,containerClassName:h})=>{let{toasts:i,handlers:j}=R(c);return g.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:h,onMouseEnter:j.startPause,onMouseLeave:j.endPause},i.map(c=>{let f=c.position||b,h=j.calculateOffset(c,{reverseOrder:a,gutter:d,defaultPosition:b}),i=ak(f,h),k=c.height?void 0:C(a=>{j.updateHeight(c.id,a.height)});return g.createElement("div",{ref:k,className:c.visible?al:"",key:c.id,style:i},"custom"===c.type?y(c.message,c):e?e(c):g.createElement(aj,{toast:c,position:f}))}))},an=P,ao=c(640),ap=c.n(ao),aq=c(1954),ar=c(4829),as=c(425),at=c(5786),au=c(8613),av=c(1132),aw=c(2536),ax=!0;function ay(a){var b=a.referrals,c=(0,as.F)().theme,h=(0,ar.Z)("(prefers-color-scheme: dark)",!1),i=(0,g.useMemo)(function(){switch(c){case aw.Q2.SYSTEM:return!!h;case aw.Q2.LIGHT:return!1;case aw.Q2.DARK:return!0}},[h,c]);return(0,e.jsxs)(au.A.Default,{seo:{title:"nuro ─ referrals"},children:[(0,e.jsx)(am,{toastOptions:{position:"bottom-right",style:{background:i?at.O9.gray[900]:at.O9.gray[50],borderColor:i?at.O9.gray[800]:at.O9.gray[100],borderWidth:"2px",color:i?null===at.O9|| void 0===at.O9?void 0:at.O9.gray[400]:null===at.O9|| void 0===at.O9?void 0:at.O9.gray[700]}}}),(0,e.jsx)("div",{className:"my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8",children:(0,e.jsx)("div",{className:"relative max-w-xl mx-auto",children:(0,e.jsx)(av.aV.W,{children:b.map(function(a,b){return(0,e.jsx)(av.rs,{animation:{y:[50,0],opacity:[0,1]},transition:{delay:.1*b},children:(0,e.jsx)(av.aV.c,{actions:[{type:aw.GY.LINK,icon:"feather:home",label:"".concat(a.name," homepage"),href:a.homepage},].concat((0,d.Z)(a.code?[{type:aw.GY.BUTTON,icon:"feather:hash",label:"Copy Referral Code",onClick:function(){ap()(a.code),an.success("Copied referral code")}},]:[]),[{type:aw.GY.LINK,icon:"feather:external-link",label:"Referral Link",href:a.url,onClick:function(){return f.Z.track(a.name.toLowerCase(),{code:a.code,type:"referral",url:a.url})}},]),description:a.description,icon:a.icon,iconColor:a.color,title:a.name,children:a.bonus&&(0,e.jsx)("div",{className:"m-2 mt-0",children:(0,e.jsxs)(av.DR.q,{className:"flex items-center justify-center w-full md:pb-2 bg-primary-500 bg-opacity-15 saturate-200 text-sm text-primary-500 rounded-lg",children:[(0,e.jsx)(aq.JO,{className:"mt-0.5 mr-2",icon:"feather:award"}),a.bonus]})})})},b)})})})})]})}},1742:function(a){a.exports=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var b=document.activeElement,c=[],d=0;d<a.rangeCount;d++)c.push(a.getRangeAt(d));switch(b.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":b.blur();break;default:b=null}return a.removeAllRanges(),function(){"Caret"===a.type&&a.removeAllRanges(),a.rangeCount||c.forEach(function(b){a.addRange(b)}),b&&b.focus()}}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=2841)}),_N_E=a.O()}])