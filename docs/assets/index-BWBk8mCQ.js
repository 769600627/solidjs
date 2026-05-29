(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const $t=!1,Pt=(e,t)=>e===t,pe=Symbol("solid-proxy"),Ze=typeof Proxy=="function",Ot=Symbol("solid-track"),de={equals:Pt};let Je=at;const j=1,ue=2,et={owned:null,cleanups:null,context:null,owner:null};var x=null;let _e=null,It=null,C=null,E=null,H=null,fe=0;function Y(e,t){const n=C,o=x,r=e.length===0,s=t===void 0?o:t,l=r?et:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=r?e:()=>e(()=>D(()=>Z(l)));x=l,C=null;try{return U(a,!0)}finally{C=n,x=o}}function N(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),ot(n,r));return[rt.bind(n),o]}function k(e,t,n){const o=De(e,t,!1,j);ne(o)}function Et(e,t,n){Je=Lt;const o=De(e,t,!1,j);o.user=!0,H?H.push(o):ne(o)}function O(e,t,n){n=n?Object.assign({},de,n):de;const o=De(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,ne(o),rt.bind(o)}function Tt(e){return U(e,!1)}function D(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function Ne(e,t,n){const o=Array.isArray(e);let r,s=n&&n.defer;return l=>{let a;if(o){a=Array(e.length);for(let c=0;c<e.length;c++)a[c]=e[c]()}else a=e();if(s)return s=!1,l;const i=D(()=>t(a,r,l));return r=a,i}}function R(e){Et(()=>D(e))}function G(e){return x===null||(x.cleanups===null?x.cleanups=[e]:x.cleanups.push(e)),e}function tt(){return x}function nt(e,t){const n=x,o=C;x=e,C=null;try{return U(t,!0)}catch(r){Le(r)}finally{x=n,C=o}}function Nt(e){const t=C,n=x;return Promise.resolve().then(()=>{C=t,x=n;let o;return U(e,!1),C=x=null,o?o.done:void 0})}const[ro,oo]=N(!1);function ge(e,t){const n=Symbol("context");return{id:n,Provider:Ft(n),defaultValue:e}}function te(e){let t;return x&&x.context&&(t=x.context[e.id])!==void 0?t:e.defaultValue}function ke(e){const t=O(e),n=O(()=>$e(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function rt(){if(this.sources&&this.state)if(this.state===j)ne(this);else{const e=E;E=null,U(()=>me(this),!1),E=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function ot(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=_e&&_e.running;l&&_e.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?E.push(s):H.push(s),s.observers&&st(s)),l||(s.state=j)}if(E.length>1e6)throw E=[],new Error},!1)),t}function ne(e){if(!e.fn)return;Z(e);const t=fe;kt(e,e.value,t)}function kt(e,t,n){let o;const r=x,s=C;C=x=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=n+1,Le(l)}finally{C=s,x=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ot(e,o):e.value=o,e.updatedAt=n)}function De(e,t,n,o=j,r){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:x?x.context:null,pure:n};return x===null||x!==et&&(x.owned?x.owned.push(s):x.owned=[s]),s}function he(e){if(e.state===0)return;if(e.state===ue)return me(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)ne(e);else if(e.state===ue){const o=E;E=null,U(()=>me(e,t[0]),!1),E=o}}function U(e,t){if(E)return e();let n=!1;t||(E=[]),H?n=!0:H=[],fe++;try{const o=e();return Dt(n),o}catch(o){n||(H=null),E=null,Le(o)}}function Dt(e){if(E&&(at(E),E=null),e)return;const t=H;H=null,t.length&&U(()=>Je(t),!1)}function at(e){for(let t=0;t<e.length;t++)he(e[t])}function Lt(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:he(o)}for(t=0;t<n;t++)he(e[t])}function me(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===j?o!==t&&(!o.updatedAt||o.updatedAt<fe)&&he(o):r===ue&&me(o,t)}}}function st(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?E.push(n):H.push(n),n.observers&&st(n))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),l=n.observerSlots.pop();o<r.length&&(s.sourceSlots[l]=o,r[o]=s,n.observerSlots[o]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Z(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Rt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Le(e,t=x){throw Rt(e)}function $e(e){if(typeof e=="function"&&!e.length)return $e(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=$e(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function Ft(e,t){return function(o){let r;return k(()=>r=D(()=>(x.context={...x.context,[e]:o.value},ke(()=>o.children))),void 0),r}}const Mt=Symbol("fallback");function Ue(e){for(let t=0;t<e.length;t++)e[t]()}function Ht(e,t,n={}){let o=[],r=[],s=[],l=0,a=t.length>1?[]:null;return G(()=>Ue(s)),()=>{let i=e()||[],c=i.length,p,d;return i[Ot],D(()=>{let m,w,f,v,_,y,$,P,T;if(c===0)l!==0&&(Ue(s),s=[],o=[],r=[],l=0,a&&(a=[])),n.fallback&&(o=[Mt],r[0]=Y(B=>(s[0]=B,n.fallback())),l=1);else if(l===0){for(r=new Array(c),d=0;d<c;d++)o[d]=i[d],r[d]=Y(u);l=c}else{for(f=new Array(c),v=new Array(c),a&&(_=new Array(c)),y=0,$=Math.min(l,c);y<$&&o[y]===i[y];y++);for($=l-1,P=c-1;$>=y&&P>=y&&o[$]===i[P];$--,P--)f[P]=r[$],v[P]=s[$],a&&(_[P]=a[$]);for(m=new Map,w=new Array(P+1),d=P;d>=y;d--)T=i[d],p=m.get(T),w[d]=p===void 0?-1:p,m.set(T,d);for(p=y;p<=$;p++)T=o[p],d=m.get(T),d!==void 0&&d!==-1?(f[d]=r[p],v[d]=s[p],a&&(_[d]=a[p]),d=w[d],m.set(T,d)):s[p]();for(d=y;d<c;d++)d in f?(r[d]=f[d],s[d]=v[d],a&&(a[d]=_[d],a[d](d))):r[d]=Y(u);r=r.slice(0,l=c),o=i.slice(0)}return r});function u(m){if(s[d]=m,a){const[w,f]=N(d);return a[d]=f,t(i[d],w)}return t(i[d])}}}function h(e,t){return D(()=>e(t||{}))}function ie(){return!0}const Pe={get(e,t,n){return t===pe?n:e.get(t)},has(e,t){return t===pe?!0:e.has(t)},set:ie,deleteProperty:ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ie,deleteProperty:ie}},ownKeys(e){return e.keys()}};function xe(e){return(e=typeof e=="function"?e():e)?e:{}}function jt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Oe(...e){let t=!1;for(let l=0;l<e.length;l++){const a=e[l];t=t||!!a&&pe in a,e[l]=typeof a=="function"?(t=!0,O(a)):a}if(Ze&&t)return new Proxy({get(l){for(let a=e.length-1;a>=0;a--){const i=xe(e[a])[l];if(i!==void 0)return i}},has(l){for(let a=e.length-1;a>=0;a--)if(l in xe(e[a]))return!0;return!1},keys(){const l=[];for(let a=0;a<e.length;a++)l.push(...Object.keys(xe(e[a])));return[...new Set(l)]}},Pe);const n={},o=Object.create(null);for(let l=e.length-1;l>=0;l--){const a=e[l];if(!a)continue;const i=Object.getOwnPropertyNames(a);for(let c=i.length-1;c>=0;c--){const p=i[c];if(p==="__proto__"||p==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,p);if(!o[p])o[p]=d.get?{enumerable:!0,configurable:!0,get:jt.bind(n[p]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const u=n[p];u&&(d.get?u.push(d.get.bind(a)):d.value!==void 0&&u.push(()=>d.value))}}}const r={},s=Object.keys(o);for(let l=s.length-1;l>=0;l--){const a=s[l],i=o[a];i&&i.get?Object.defineProperty(r,a,i):r[a]=i?i.value:void 0}return r}function Gt(e,...t){const n=t.length;if(Ze&&pe in e){const r=n>1?t.flat():t[0],s=t.map(l=>new Proxy({get(a){return l.includes(a)?e[a]:void 0},has(a){return l.includes(a)&&a in e},keys(){return l.filter(a=>a in e)}},Pe));return s.push(new Proxy({get(l){return r.includes(l)?void 0:e[l]},has(l){return r.includes(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.includes(l))}},Pe)),s}const o=[];for(let r=0;r<=n;r++)o[r]={};for(const r of Object.getOwnPropertyNames(e)){let s=n;for(let i=0;i<t.length;i++)if(t[i].includes(r)){s=i;break}const l=Object.getOwnPropertyDescriptor(e,r);!l.get&&!l.set&&l.enumerable&&l.writable&&l.configurable?o[s][r]=l.value:Object.defineProperty(o[s],r,l)}return o}let Ut=0;function Bt(){return`cl-${Ut++}`}const Wt=e=>`Stale read from <${e}>.`;function Se(e){const t="fallback"in e&&{fallback:()=>e.fallback};return O(Ht(()=>e.each,e.children,t||void 0))}function lt(e){const t=e.keyed,n=O(()=>e.when,void 0,void 0),o=t?n:O(n,void 0,{equals:(r,s)=>!r==!s});return O(()=>{const r=o();if(r){const s=e.children;return typeof s=="function"&&s.length>0?D(()=>s(t?r:()=>{if(!D(o))throw Wt("Show");return n()})):s}return e.fallback},void 0,void 0)}const Kt=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],Xt=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...Kt]),qt=new Set(["innerHTML","textContent","innerText","children"]),Qt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Vt=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function Yt(e,t){const n=Vt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const zt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Zt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},z=e=>O(()=>e());function Jt(e,t,n){let o=n.length,r=t.length,s=o,l=0,a=0,i=t[r-1].nextSibling,c=null;for(;l<r||a<s;){if(t[l]===n[a]){l++,a++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const p=s<o?a?n[a-1].nextSibling:n[s-a]:i;for(;a<s;)e.insertBefore(n[a++],p)}else if(s===a)for(;l<r;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[a]===t[r-1]){const p=t[--r].nextSibling;e.insertBefore(n[a++],t[l++].nextSibling),e.insertBefore(n[--s],p),t[r]=n[s]}else{if(!c){c=new Map;let d=a;for(;d<s;)c.set(n[d],d++)}const p=c.get(t[l]);if(p!=null)if(a<p&&p<s){let d=l,u=1,m;for(;++d<r&&d<s&&!((m=c.get(t[d]))==null||m!==p+u);)u++;if(u>p-a){const w=t[l];for(;a<p;)e.insertBefore(n[a++],w)}else e.replaceChild(n[a++],t[l++])}else l++;else t[l++].remove()}}}const Be="_$DX_DELEGATE";function en(e,t,n,o={}){let r;return Y(s=>{r=s,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function b(e,t,n,o){let r;const s=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},l=()=>(r||(r=s())).cloneNode(!0);return l.cloneNode=l,l}function re(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let o=0,r=e.length;o<r;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,pn))}}function J(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function tn(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function nn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function rn(e,t){t==null?e.removeAttribute("class"):e.className=t}function on(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function an(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const a=r[s];!a||a==="undefined"||t[a]||(We(e,a,!1),delete n[a])}for(s=0,l=o.length;s<l;s++){const a=o[s],i=!!t[a];!a||a==="undefined"||n[a]===i||!i||(We(e,a,!0),n[a]=i)}return n}function it(e,t,n){if(!t)return n?J(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&o.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(o.setProperty(s,r),n[s]=r);return n}function sn(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function Ie(e,t={},n,o){const r={};return o||k(()=>r.children=ee(e,t.children,r.children)),k(()=>typeof t.ref=="function"&&oe(t.ref,e)),k(()=>ln(e,t,n,!0,r,!0)),r}function oe(e,t,n){return D(()=>e(t,n))}function g(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return ee(e,t,o,n);k(r=>ee(e,t(),r,n),o)}function ln(e,t,n,o,r={},s=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Ke(e,l,null,r[l],n,s,t)}for(const l in t){if(l==="children")continue;const a=t[l];r[l]=Ke(e,l,a,r[l],n,s,t)}}function cn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function We(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,s=o.length;r<s;r++)e.classList.toggle(o[r],n)}function Ke(e,t,n,o,r,s,l){let a,i,c,p,d;if(t==="style")return it(e,n,o);if(t==="classList")return an(e,n,o);if(n===o)return o;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);o&&e.removeEventListener(u,o,typeof o!="function"&&o),n&&e.addEventListener(u,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);o&&e.removeEventListener(u,o,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),m=zt.has(u);if(!m&&o){const w=Array.isArray(o)?o[0]:o;e.removeEventListener(u,w)}(m||n)&&(on(e,u,n,m),m&&re([u]))}else if(t.slice(0,5)==="attr:")J(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")nn(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=qt.has(t))||!r&&((p=Yt(t,e.tagName))||(i=Xt.has(t)))||(a=e.nodeName.includes("-")||"is"in l))d&&(t=t.slice(5),i=!0),t==="class"||t==="className"?rn(e,n):a&&!i&&!c?e[cn(t)]=n:e[p||t]=n;else{const u=r&&t.indexOf(":")>-1&&Zt[t.split(":")[0]];u?tn(e,u,t,n):J(e,Qt[t]||t,n)}return n}function pn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,s=i=>Object.defineProperty(e,"target",{configurable:!0,value:i}),l=()=>{const i=t[n];if(i&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?i.call(t,c,e):i.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},a=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const i=e.composedPath();s(i[0]);for(let c=0;c<i.length-2&&(t=i[c],!!l());c++){if(t._$host){t=t._$host,a();break}if(t.parentNode===r)break}}else a();s(o)}function ee(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=q(e,n,o,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=q(e,n,o);else{if(s==="function")return k(()=>{let a=t();for(;typeof a=="function";)a=a();n=ee(e,a,n,o)}),()=>n;if(Array.isArray(t)){const a=[],i=n&&Array.isArray(n);if(Ee(a,t,n,r))return k(()=>n=ee(e,a,n,o,!0)),()=>n;if(a.length===0){if(n=q(e,n,o),l)return n}else i?n.length===0?Xe(e,a,o):Jt(e,n,a):(n&&q(e),Xe(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=q(e,n,o,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ee(e,t,n,o){let r=!1;for(let s=0,l=t.length;s<l;s++){let a=t[s],i=n&&n[e.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))r=Ee(e,a,i)||r;else if(c==="function")if(o){for(;typeof a=="function";)a=a();r=Ee(e,Array.isArray(a)?a:[a],Array.isArray(i)?i:[i])||r}else e.push(a),r=!0;else{const p=String(a);i&&i.nodeType===3&&i.data===p?e.push(i):e.push(document.createTextNode(p))}}return r}function Xe(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function q(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const a=t[l];if(r!==a){const i=a.parentNode===e;!s&&!l?i?e.replaceChild(r,a):e.insertBefore(r,n):i&&a.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const dn=!1;function ct(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,s){if(n)return!(n=!1);const l={to:r,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const a of e)a.listener({...l,from:a.location,retry:i=>{i&&(n=!0),a.navigate(r,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:o}}let Te;function Re(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Te=window.history.state._depth}Re();function un(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function hn(e,t){let n=!1;return()=>{const o=Te;Re();const r=o==null?null:Te-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const mn=/^(?:[a-z0-9]+:)?\/\//i,fn=/^\/+|(\/)\/+$/g,pt="http://sr";function K(e,t=!1){const n=e.replace(fn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ce(e,t,n){if(mn.test(t))return;const o=K(e),r=n&&K(n);let s="";return!r||t.startsWith("/")?s=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?s=o+r:s=r,(s||"/")+K(t,!s)}function gn(e,t){if(e==null)throw new Error(t);return e}function vn(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function dt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function wn(e,t,n){const[o,r]=e.split("/*",2),s=o.split("/").filter(Boolean),l=s.length;return a=>{const i=a.split("/").filter(Boolean),c=i.length-l;if(c<0||c>0&&r===void 0&&!t)return null;const p={path:l?"":"/",params:{}},d=u=>n===void 0?void 0:n[u];for(let u=0;u<l;u++){const m=s[u],w=m[0]===":",f=w?i[u]:i[u].toLowerCase(),v=w?m.slice(1):m.toLowerCase();if(w&&Ce(f,d(v)))p.params[v]=f;else if(w||!Ce(f,v))return null;p.path+=`/${f}`}if(r){const u=c?i.slice(-c).join("/"):"";if(Ce(u,d(r)))p.params[r]=u;else return null}return p}}function Ce(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function bn(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,s)=>r+(s.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function ut(e){const t=new Map,n=tt();return new Proxy({},{get(o,r){return t.has(r)||nt(n,()=>t.set(r,O(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ht(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return ht(o).reduce((s,l)=>[...s,...r.map(a=>a+l)],[])}const yn=100,mt=ge(),Fe=ge(),ve=()=>gn(te(mt),"<A> and 'use' router primitives can be only used inside a Route."),_n=()=>te(Fe)||ve().base,xn=e=>{const t=_n();return O(()=>t.resolvePath(e()))},Sn=e=>{const t=ve();return O(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},ft=()=>ve().navigatorFactory(),Cn=()=>ve().location;function An(e,t=""){const{component:n,preload:o,load:r,children:s,info:l}=e,a=!s||Array.isArray(s)&&!s.length,i={key:e,component:n,preload:o||r,info:l};return gt(e.path).reduce((c,p)=>{for(const d of ht(p)){const u=vn(t,d);let m=a?u:u.split("/*",1)[0];m=m.split("/").map(w=>w.startsWith(":")||w.startsWith("*")?w:encodeURIComponent(w)).join("/"),c.push({...i,originalPath:p,pattern:m,matcher:wn(m,!a,e.matchFilters)})}return c},[])}function $n(e,t=0){return{routes:e,score:bn(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const s=e[r],l=s.matcher(n);if(!l)return null;o.unshift({...l,route:s})}return o}}}function gt(e){return Array.isArray(e)?e:[e]}function vt(e,t="",n=[],o=[]){const r=gt(e);for(let s=0,l=r.length;s<l;s++){const a=r[s];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const i=An(a,t);for(const c of i){n.push(c);const p=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!p)vt(a.children,c.pattern,n,o);else{const d=$n([...n],o.length);o.push(d)}n.pop()}}}return n.length?o:o.sort((s,l)=>l.score-s.score)}function Ae(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Pn(e,t,n){const o=new URL(pt),r=O(p=>{const d=e();try{return new URL(d,o)}catch{return console.error(`Invalid path ${d}`),p}},o,{equals:(p,d)=>p.href===d.href}),s=O(()=>r().pathname),l=O(()=>r().search,!0),a=O(()=>r().hash),i=()=>"",c=Ne(l,()=>dt(r()));return{get pathname(){return s()},get search(){return l()},get hash(){return a()},get state(){return t()},get key(){return i()},query:n?n(c):ut(c)}}let W;function On(){return W}function In(e,t,n,o={}){const{signal:[r,s],utils:l={}}=e,a=l.parsePath||(S=>S),i=l.renderPath||(S=>S),c=l.beforeLeave||ct(),p=ce("",o.base||"");if(p===void 0)throw new Error(`${p} is not a valid base path`);p&&!r().value&&s({value:p,replace:!0,scroll:!1});const[d,u]=N(!1);let m;const w=(S,A)=>{A.value===f()&&A.state===_()||(m===void 0&&u(!0),W=S,m=A,Nt(()=>{m===A&&(v(m.value),y(m.state),T[1]([]))}).finally(()=>{m===A&&Tt(()=>{W=void 0,S==="navigate"&&Ct(m),u(!1),m=void 0})}))},[f,v]=N(r().value),[_,y]=N(r().state),$=Pn(f,_,l.queryWrapper),P=[],T=N([]),B=O(()=>typeof o.transformUrl=="function"?Ae(t(),o.transformUrl($.pathname)):Ae(t(),$.pathname)),He=()=>{const S=B(),A={};for(let L=0;L<S.length;L++)Object.assign(A,S[L].params);return A},_t=l.paramsWrapper?l.paramsWrapper(He,t):ut(He),je={pattern:p,path:()=>p,outlet:()=>null,resolvePath(S){return ce(p,S)}};return k(Ne(r,S=>w("native",S),{defer:!0})),{base:je,location:$,params:_t,isRouting:d,renderPath:i,parsePath:a,navigatorFactory:St,matches:B,beforeLeave:c,preloadRoute:At,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:T};function xt(S,A,L){D(()=>{if(typeof A=="number"){A&&(l.go?l.go(A):console.warn("Router integration does not support relative routing"));return}const se=!A||A[0]==="?",{replace:be,resolve:X,scroll:ye,state:Q}={replace:!1,resolve:!se,scroll:!0,...L},le=X?S.resolvePath(A):ce(se&&$.pathname||"",A);if(le===void 0)throw new Error(`Path '${A}' is not a routable path`);if(P.length>=yn)throw new Error("Too many redirects");const Ge=f();(le!==Ge||Q!==_())&&(dn||c.confirm(le,L)&&(P.push({value:Ge,replace:be,scroll:ye,state:_()}),w("navigate",{value:le,state:Q})))})}function St(S){return S=S||te(Fe)||je,(A,L)=>xt(S,A,L)}function Ct(S){const A=P[0];A&&(s({...S,replace:A.replace,scroll:A.scroll}),P.length=0)}function At(S,A){const L=Ae(t(),S.pathname),se=W;W="preload";for(let be in L){const{route:X,params:ye}=L[be];X.component&&X.component.preload&&X.component.preload();const{preload:Q}=X;A&&Q&&nt(n(),()=>Q({params:ye,location:{pathname:S.pathname,search:S.search,hash:S.hash,query:dt(S),state:null,key:""},intent:"preload"}))}W=se}}function En(e,t,n,o){const{base:r,location:s,params:l}=e,{pattern:a,component:i,preload:c}=o().route,p=O(()=>o().path);i&&i.preload&&i.preload();const d=c?c({params:l,location:s,intent:W||"initial"}):void 0;return{parent:t,pattern:a,path:p,outlet:()=>i?h(i,{params:l,location:s,data:d,get children(){return n()}}):n(),resolvePath(m){return ce(r.path(),m,p())}}}const Tn=e=>t=>{const{base:n}=t,o=ke(()=>t.children),r=O(()=>vt(o(),t.base||""));let s;const l=In(e,r,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),h(mt.Provider,{value:l,get children(){return h(Nn,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[z(()=>(s=tt())&&null),h(kn,{routerState:l,get branches(){return r()}})]}})}})};function Nn(e){const t=e.routerState.location,n=e.routerState.params,o=O(()=>e.preload&&D(()=>{e.preload({params:n,location:t,intent:On()||"initial"})}));return h(lt,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>h(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function kn(e){const t=[];let n;const o=O(Ne(e.routerState.matches,(r,s,l)=>{let a=s&&r.length===s.length;const i=[];for(let c=0,p=r.length;c<p;c++){const d=s&&s[c],u=r[c];l&&d&&u.route.key===d.route.key?i[c]=l[c]:(a=!1,t[c]&&t[c](),Y(m=>{t[c]=m,i[c]=En(e.routerState,i[c-1]||e.routerState.base,qe(()=>o()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),l&&a?l:(n=i[0],i)}));return qe(()=>o()&&n)()}const qe=e=>()=>h(lt,{get when(){return e()},keyed:!0,children:t=>h(Fe.Provider,{value:t,get children(){return t.outlet()}})}),F=e=>{const t=ke(()=>e.children);return Oe(e,{get children(){return t()}})};function Dn([e,t],n,o){return[e,o?r=>t(o(r)):t]}function Ln(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=Dn(N(n(e.get()),{equals:(r,s)=>r.value===s.value&&r.state===s.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&G(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),Tn({signal:o,create:e.create,utils:e.utils})}function Rn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Fn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Mn=new Map;function Hn(e=!0,t=!1,n="/_server",o){return r=>{const s=r.base.path(),l=r.navigatorFactory(r.base);let a,i;function c(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function p(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const v=f.composedPath().find(B=>B instanceof Node&&B.nodeName.toUpperCase()==="A");if(!v||t&&!v.hasAttribute("link"))return;const _=c(v),y=_?v.href.baseVal:v.href;if((_?v.target.baseVal:v.target)||!y&&!v.hasAttribute("state"))return;const P=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||P&&P.includes("external"))return;const T=_?new URL(y,document.baseURI):new URL(y);if(!(T.origin!==window.location.origin||s&&T.pathname&&!T.pathname.toLowerCase().startsWith(s.toLowerCase())))return[v,T]}function d(f){const v=p(f);if(!v)return;const[_,y]=v,$=r.parsePath(y.pathname+y.search+y.hash),P=_.getAttribute("state");f.preventDefault(),l($,{resolve:!1,replace:_.hasAttribute("replace"),scroll:!_.hasAttribute("noscroll"),state:P?JSON.parse(P):void 0})}function u(f){const v=p(f);if(!v)return;const[_,y]=v;r.preloadRoute(y,_.getAttribute("preload")!=="false")}function m(f){clearTimeout(a);const v=p(f);if(!v)return i=null;const[_,y]=v;i!==_&&(a=setTimeout(()=>{r.preloadRoute(y,_.getAttribute("preload")!=="false"),i=_},20))}function w(f){if(f.defaultPrevented)return;let v=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!v)return;if(!v.startsWith("https://action/")){const y=new URL(v,pt);if(v=r.parsePath(y.pathname+y.search),!v.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const _=Mn.get(v);if(_){f.preventDefault();const y=new FormData(f.target,f.submitter);_.call({r,f:f.target},f.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}re(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",u,{passive:!0}),document.addEventListener("touchstart",u,{passive:!0})),document.addEventListener("submit",w),G(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",w)})}}function jn(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Gn(e){const t=()=>window.location.hash.slice(1),n=ct();return Ln({get:t,set({value:o,replace:r,scroll:s,state:l}){r?window.history.replaceState(un(l),"","#"+o):window.history.pushState(l,"","#"+o);const a=o.indexOf("#"),i=a>=0?o.slice(a+1):"";Fn(i,s),Re()},init:o=>Rn(window,"hashchange",hn(o,r=>!n.confirm(r&&r<0?r:t()))),create:Hn(e.preload,e.explicitLinks,e.actionBase),utils:{go:o=>window.history.go(o),renderPath:o=>`#${o}`,parsePath:jn,beforeLeave:n}})(e)}var Un=b("<a>");function I(e){e=Oe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Gt(e,["href","state","class","activeClass","inactiveClass","end"]),n=xn(()=>e.href),o=Sn(n),r=Cn(),s=O(()=>{const l=n();if(l===void 0)return[!1,!1];const a=K(l.split(/[?#]/,1)[0]).toLowerCase(),i=decodeURI(K(r.pathname).toLowerCase());return[e.end?a===i:i.startsWith(a+"/")||i===a,a===i]});return(()=>{var l=Un();return Ie(l,Oe(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s()[0],[e.activeClass]:s()[0],...t.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),l})()}const wt=ge(),Bn=["title","meta"],Qe=[],Ve=["name","http-equiv","content","charset","media"].concat(["property"]),Ye=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([o])=>t.includes(o)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function Wn(){{const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,o=>o.parentNode.removeChild(o))}const e=new Map;function t(n){if(n.ref)return n.ref;let o=document.querySelector(`[data-sm="${n.id}"]`);return o?(o.tagName.toLowerCase()!==n.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(n.tag)),o.removeAttribute("data-sm")):o=document.createElement(n.tag),o}return{addTag(n){if(Bn.indexOf(n.tag)!==-1){const s=n.tag==="title"?Qe:Ve,l=Ye(n,s);e.has(l)||e.set(l,[]);let a=e.get(l),i=a.length;a=[...a,n],e.set(l,a);let c=t(n);n.ref=c,Ie(c,n.props);let p=null;for(var o=i-1;o>=0;o--)if(a[o]!=null){p=a[o];break}return c.parentNode!=document.head&&document.head.appendChild(c),p&&p.ref&&p.ref.parentNode&&document.head.removeChild(p.ref),i}let r=t(n);return n.ref=r,Ie(r,n.props),r.parentNode!=document.head&&document.head.appendChild(r),-1},removeTag(n,o){const r=n.tag==="title"?Qe:Ve,s=Ye(n,r);if(n.ref){const l=e.get(s);if(l){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let a=o-1;a>=0;a--)l[a]!=null&&document.head.appendChild(l[a].ref)}l[o]=null,e.set(s,l)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const Kn=e=>{const t=Wn();return h(wt.Provider,{value:t,get children(){return e.children}})},bt=(e,t,n)=>(Xn({tag:e,props:t,setting:n,id:Bt(),get name(){return t.name||t.property}}),null);function Xn(e){const t=te(wt);if(!t)throw new Error("<MetaProvider /> should be in the tree");k(()=>{const n=t.addTag(e);G(()=>t.removeTag(e,n))})}const M=e=>bt("title",e,{escape:!0,close:!0}),V=e=>bt("meta",e),qn="4bc8c4f28c625fca2004a5f486c31aa4f161dc9f3c0c6b2c9237db12f55ac442",Qn="ba5f920b7136c1cd3101518a952c085a4e2313e4800d628c86b630f142808039";async function ze(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return Array.from(new Uint8Array(t)).map(n=>n.toString(16).padStart(2,"0")).join("")}const yt=ge();function Vn(e){const[t,n]=N(localStorage.getItem("auth_logged_in")==="true"),[o,r]=N(localStorage.getItem("auth_username")||""),s=async(a,i)=>{const c=await ze(a),p=await ze(i);return c===qn&&p===Qn?(localStorage.setItem("auth_logged_in","true"),localStorage.setItem("auth_username",a),n(!0),r(a),!0):!1},l=()=>{localStorage.removeItem("auth_logged_in"),localStorage.removeItem("auth_username"),n(!1),r("")};return h(yt.Provider,{value:{isLoggedIn:t,username:o,login:s,logout:l},get children(){return e.children}})}function Me(){const e=te(yt);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}var Yn=b("<nav id=navbar><ul class=nav-links><li></li><li></li><li></li><li></li><li>"),zn=b("<span class=logged-in-text style=cursor:pointer;color:#00d4ff;font-weight:bold;font-size:0.9rem>已登录"),Zn=b("<div class=dialog-overlay>"),Jn=b('<div class=dialog-box><p style="margin:0 0 6px;font-size:1rem">当前用户：<strong></strong></p><p style="margin:0 0 20px;color:#888;font-size:0.85rem">确定要退出登录吗？退出后需重新输入密码访问项目链接。</p><div style=display:flex;gap:10px;justify-content:flex-end><button style="padding:8px 20px;background:#333;color:#fff;border:none;border-radius:6px;cursor:pointer">取消</button><button style="padding:8px 20px;background:#d33;color:#fff;border:none;border-radius:6px;cursor:pointer">退出登录');function er(){let e;const{isLoggedIn:t,username:n,logout:o}=Me(),[r,s]=N(!1);R(()=>{let a=window.scrollY;const i=()=>{const c=Math.max(0,window.scrollY);c>a&&c>100?e.classList.add("hidden"):e.classList.remove("hidden"),a=c};window.addEventListener("scroll",i),G(()=>window.removeEventListener("scroll",i))});const l=()=>{o(),s(!1)};return[(()=>{var a=Yn(),i=a.firstChild,c=i.firstChild,p=c.nextSibling,d=p.nextSibling,u=d.nextSibling,m=u.nextSibling,w=e;return typeof w=="function"?oe(w,a):e=a,g(a,h(I,{href:"/",class:"logo",style:"text-decoration:none;",children:"DeltrivX"}),i),g(c,h(I,{href:"/about",children:"关于"})),g(p,h(I,{href:"/skills",children:"技能"})),g(d,h(I,{href:"/projects",children:"项目"})),g(u,h(I,{href:"/articles",children:"实战"})),g(m,(()=>{var f=z(()=>!!t());return()=>f()?(()=>{var v=zn();return v.$$click=()=>s(!0),v})():h(I,{href:"/login",style:"color:#007bff;font-weight:bold;",children:"登录"})})()),a})(),z(()=>z(()=>!!r())()&&[(()=>{var a=Zn();return a.$$click=()=>s(!1),a})(),(()=>{var a=Jn(),i=a.firstChild,c=i.firstChild,p=c.nextSibling,d=i.nextSibling,u=d.nextSibling,m=u.firstChild,w=m.nextSibling;return g(p,n),m.$$click=()=>s(!1),w.$$click=l,a})()])]}re(["click"]);var tr=b("<footer><p>© <!> DeltrivX. Made with ❤️ and lots of ☕");function nr(){const e=new Date().getFullYear();return(()=>{var t=tr(),n=t.firstChild,o=n.firstChild,r=o.nextSibling;return r.nextSibling,g(n,e,r),t})()}var rr=b("<canvas id=particles>");function or(){let e,t;return R(()=>{const n=e.getContext("2d");let o=[],r={x:null,y:null};const s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};s(),window.addEventListener("resize",s);const l=p=>{r.x=p.clientX,r.y=p.clientY};document.addEventListener("mousemove",l);class a{constructor(){this.reset()}reset(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=Math.random()*2+.5,this.speedX=(Math.random()-.5)*.5,this.speedY=(Math.random()-.5)*.5,this.opacity=Math.random()*.5+.1}update(){if(this.x+=this.speedX,this.y+=this.speedY,r.x!==null){const d=r.x-this.x,u=r.y-this.y,m=Math.sqrt(d*d+u*u);if(m<120){const w=(120-m)/120;this.x-=d/m*w*1.5,this.y-=u/m*w*1.5}}(this.x<0||this.x>e.width||this.y<0||this.y>e.height)&&this.reset()}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fillStyle=`rgba(108, 92, 231, ${this.opacity})`,n.fill()}}const i=Math.min(120,Math.floor(e.width*e.height/12e3));for(let p=0;p<i;p++)o.push(new a);function c(){n.clearRect(0,0,e.width,e.height),o.forEach(p=>{p.update(),p.draw()}),t=requestAnimationFrame(c)}c(),G(()=>{window.removeEventListener("resize",s),document.removeEventListener("mousemove",l),cancelAnimationFrame(t)})}),(()=>{var n=rr(),o=e;return typeof o=="function"?oe(o,n):e=n,n})()}var ar=b("<div class=spotlight>"),sr=b("<main>");function lr(e){let t;return R(()=>{const n=o=>{document.documentElement.style.setProperty("--mouse-x",`${o.clientX}px`),document.documentElement.style.setProperty("--mouse-y",`${o.clientY}px`)};window.addEventListener("mousemove",n),G(()=>window.removeEventListener("mousemove",n))}),[(()=>{var n=ar(),o=t;return typeof o=="function"?oe(o,n):t=n,n})(),h(or,{}),h(er,{}),(()=>{var n=sr();return g(n,()=>e.children),n})(),h(nr,{})]}function ae(){const e=document.querySelectorAll(".reveal"),t=new IntersectionObserver(n=>{n.forEach((o,r)=>{o.isIntersecting&&setTimeout(()=>o.target.classList.add("visible"),r*100)})},{threshold:.15});e.forEach(n=>t.observe(n))}function we(){document.querySelectorAll(".tilt-card").forEach(t=>{const n=t.querySelector(".tilt-card-inner")||t;t.addEventListener("mousemove",o=>{const r=t.getBoundingClientRect(),s=o.clientX-r.left,l=o.clientY-r.top,a=r.width/2,i=r.height/2,c=(l-i)/i*-10,p=(s-a)/a*10;n.style.transform=`rotateX(${c}deg) rotateY(${p}deg) scale(1.02)`}),t.addEventListener("mouseleave",()=>{n.style.transform="rotateX(0) rotateY(0) scale(1)"})})}var ir=b("<section class=hero><div class=hero-content><span class=hero-badge>👋 欢迎来到我的个人主页</span><h1>Hi, I'm <span class=gradient-text>DeltrivX</span></h1><div class=typewriter></div><div class=hero-buttons></div></div><div class=scroll-indicator><span>"),cr=b("<div class=nav-card-icon>👨‍💻"),pr=b("<h3>关于我"),dr=b("<p>了解我的背景和经历"),ur=b("<div class=nav-card-icon>⚡"),hr=b("<h3>技能栈"),mr=b("<p>掌握的技术与工具"),fr=b("<div class=nav-card-icon>🚀"),gr=b("<h3>精选项目"),vr=b("<p>查看我的作品展示"),wr=b("<div class=nav-card-icon>📝"),br=b("<h3>文章"),yr=b("<p>阅读我的技术分享"),_r=b('<section class=explore-section><div class="section-header reveal"><h2><span class=gradient-text>探索更多</span></h2><p>了解我的技能、项目和联系方式</p></div><div class=nav-cards-grid>');function xr(){let e,t;return R(()=>{ae(),we();const n=["全栈开发者 🚀","UI/UX 设计爱好者 🎨","开源贡献者 💡","终身学习者 📚","AI 探索者 🤖"];let o=0,r=0,s=!1;function l(){const a=n[o];s?(e.innerHTML=a.substring(0,r-1)+'<span class="cursor"></span>',r--):(e.innerHTML=a.substring(0,r+1)+'<span class="cursor"></span>',r++);let i=s?40:80;!s&&r===a.length?(i=2e3,s=!0):s&&r===0&&(s=!1,o=(o+1)%n.length,i=500),t=setTimeout(l,i)}l()}),G(()=>clearTimeout(t)),[(()=>{var n=ir(),o=n.firstChild,r=o.firstChild,s=r.nextSibling,l=s.nextSibling,a=l.nextSibling,i=e;return typeof i=="function"?oe(i,l):e=l,g(a,h(I,{href:"/projects",class:"btn btn-primary",children:"🚀 查看项目"}),null),g(a,h(I,{href:"/about",class:"btn btn-outline",children:"💬 联系我"}),null),n})(),(()=>{var n=_r(),o=n.firstChild,r=o.nextSibling;return g(r,h(I,{href:"/about",class:"nav-card reveal tilt-card",get children(){return[cr(),pr(),dr()]}}),null),g(r,h(I,{href:"/skills",class:"nav-card reveal tilt-card",get children(){return[ur(),hr(),mr()]}}),null),g(r,h(I,{href:"/projects",class:"nav-card reveal tilt-card",get children(){return[fr(),gr(),vr()]}}),null),g(r,h(I,{href:"/articles",class:"nav-card reveal tilt-card",get children(){return[wr(),br(),yr()]}}),null),n})()]}var Sr=b('<section id=about><div class=about-grid><div class="about-image-wrapper reveal"><div class=about-image>🖥️</div></div><div class="about-text reveal"><h3>AI 折腾党 & 自建派</h3><p>我是 DeltrivX，一名热爱自建（self-hosting）的技术爱好者。从一台 FnOS 起步，逐步搭建起覆盖存储、影音、下载、AI 的家庭数据中心。</p><p>热衷于用 Docker 容器编排各类服务，打通 Cloudflare Tunnel 公网访问，构建属于自己的数字基础设施。同时也在探索 LLM 应用与 AIGC 的可能性。</p><div class=stats-row><div class=stat-item><div class=stat-number data-target=27>0</div><div class=stat-label>Docker 容器</div></div><div class=stat-item><div class=stat-number data-target=20>0</div><div class=stat-label>自建服务</div></div><div class=stat-item><div class=stat-number data-target=9>0</div><div class=stat-label>GitHub 仓库</div></div></div></div></div><div class="contact-wrapper reveal"><div class=contact-info><h3>保持联系 🤝</h3><p>无论是项目合作、技术交流还是随便聊聊，都欢迎联系我。</p><div class=contact-links><a href=mailto:deltrivx@icloud.com class=contact-link-item><span class=contact-link-icon>📧</span><div class=contact-link-text><strong>Email</strong><span>deltrivx@icloud.com</span></div></a><a href=https://github.com/deltrivx target=_blank rel=noopener class=contact-link-item><span class=contact-link-icon>🐙</span><div class=contact-link-text><strong>GitHub</strong><span>DeltrivX</span></div></a><a href=https://x.com/deltrivx target=_blank rel=noopener class=contact-link-item><span class=contact-link-icon>🐦</span><div class=contact-link-text><strong>Twitter（X）</strong><span>@deltrivx</span></div></a></div></div><form class=contact-form action=https://formspree.io/f/placeholder><div class=form-group><input type=text name=name placeholder=你的名字 required></div><div class=form-group><input type=email name=email placeholder=你的邮箱 required></div><div class=form-group><textarea name=message placeholder=你想说什么... required></textarea></div><button type=submit class="btn btn-primary">');function Cr(){const[e,t]=N({text:"🚀 发送消息",bg:""});let n=!1;R(()=>{ae();const r=document.querySelectorAll(".stat-number"),s=new IntersectionObserver(l=>{l.forEach(a=>{if(a.isIntersecting){const i=a.target,c=parseInt(i.dataset.target);let p=0;const d=Math.max(1,Math.floor(c/60)),u=setInterval(()=>{p+=d,p>=c&&(p=c,clearInterval(u)),i.textContent=p.toLocaleString()+"+"},30);s.unobserve(i)}})},{threshold:.5});r.forEach(l=>s.observe(l))});const o=async r=>{if(r.preventDefault(),n)return;n=!0;const s=r.target;t({text:"⏳ 发送中...",bg:""});try{if((await fetch(s.action,{method:"POST",body:new FormData(s),headers:{Accept:"application/json"}})).ok)t({text:"✅ 已发送！",bg:"linear-gradient(135deg, #00b894, #00cec9)"}),s.reset();else throw new Error("发送失败")}catch{t({text:"❌ 发送失败，请直接邮件联系",bg:"linear-gradient(135deg, #d63031, #e17055)"})}setTimeout(()=>{n=!1,t({text:"🚀 发送消息",bg:""})},3e3)};return(()=>{var r=Sr(),s=r.firstChild,l=s.nextSibling,a=l.firstChild,i=a.nextSibling,c=i.firstChild,p=c.nextSibling,d=p.nextSibling,u=d.nextSibling;return i.addEventListener("submit",o),u.disabled=n,g(u,()=>e().text),k(m=>it(u,`width:100%;justify-content:center;background:${e().bg}`,m)),r})()}const Ar=[{icon:"🎨",title:"前端开发",description:"构建响应式、交互丰富的现代 Web 应用",tags:[{name:"SolidJS",level:88},{name:"React",level:82},{name:"TypeScript",level:80},{name:"Vite",level:88},{name:"Tailwind CSS",level:75}]},{icon:"⚙️",title:"后端开发",description:"设计高可用、可扩展的服务端架构",tags:[{name:"Node.js",level:85},{name:"Python",level:75},{name:"PostgreSQL",level:70},{name:"REST API",level:82}]},{icon:"☁️",title:"DevOps & 云",description:"自动化部署，保障系统稳定运行",tags:[{name:"Docker",level:85},{name:"Cloudflare",level:80},{name:"Nginx",level:75},{name:"GitHub Actions",level:80},{name:"Linux",level:78}]},{icon:"🤖",title:"AI 应用",description:"大模型应用开发与智能代理系统",tags:[{name:"LLM",level:85},{name:"RAG",level:78},{name:"AI Agent",level:85},{name:"TTS",level:72},{name:"Prompt Engineering",level:80}]},{icon:"🎬",title:"影视媒体",description:"全流程影视资源管理与媒体服务搭建",tags:[{name:"Emby",level:80},{name:"MoviePilot",level:75},{name:"FFmpeg",level:65},{name:"Aria2",level:82},{name:"qBittorrent",level:82},{name:"Transmission",level:78}]},{icon:"🗄️",title:"数据与存储",description:"多类型数据存储方案与私有云基础设施",tags:[{name:"PostgreSQL",level:72},{name:"Redis",level:70},{name:"Kvrocks",level:65},{name:"NAS 私有云",level:75}]}];var $r=b('<section id=skills><div class="section-header reveal"><h2><span class=gradient-text>技能栈</span></h2><p>持续学习，不断突破技术边界</p></div><div class=skills-grid>'),Pr=b('<div class="skill-card reveal tilt-card"><div class=skill-icon></div><h3></h3><p></p><div class=skill-tags></div><div class=skill-bar-group>'),Or=b("<span class=skill-tag>"),Ir=b("<div class=skill-bar-item><div class=skill-bar-header><span></span><span>%</span></div><div class=skill-bar-track><div class=skill-bar-fill style=width:0>");function Er(){return R(()=>{ae(),we();const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.querySelectorAll(".skill-bar-fill").forEach((r,s)=>{const l=r.dataset.level;setTimeout(()=>{r.style.width=l+"%"},s*80)}),e.unobserve(n.target))})},{threshold:.3});setTimeout(()=>{document.querySelectorAll(".skill-bar-group").forEach(t=>e.observe(t))},100)}),(()=>{var e=$r(),t=e.firstChild,n=t.nextSibling;return g(n,h(Se,{each:Ar,children:o=>(()=>{var r=Pr(),s=r.firstChild,l=s.nextSibling,a=l.nextSibling,i=a.nextSibling,c=i.nextSibling;return g(s,()=>o.icon),g(l,()=>o.title),g(a,()=>o.description),g(i,h(Se,{get each(){return o.tags},children:p=>(()=>{var d=Or();return g(d,()=>p.name),d})()})),g(c,h(Se,{get each(){return o.tags},children:p=>(()=>{var d=Ir(),u=d.firstChild,m=u.firstChild,w=m.nextSibling,f=w.firstChild,v=u.nextSibling,_=v.firstChild;return g(m,()=>p.name),g(w,()=>p.level,f),k(()=>J(_,"data-level",p.level)),d})()})),r})()})),e})()}var Tr=b('<a target=_blank rel="noopener noreferrer">');function Nr(e){const{isLoggedIn:t}=Me(),n=ft(),o=r=>{t()||(r.preventDefault(),n(`/login?redirect=${encodeURIComponent(e.href)}`))};return(()=>{var r=Tr();return r.$$click=o,g(r,()=>e.label),k(()=>J(r,"href",e.href)),r})()}re(["click"]);var kr=b('<section id=projects><div class="section-header reveal"><h2><span class=gradient-text>精选项目</span></h2><p>一些我引以为豪的作品</p></div><div class=projects-grid>'),Dr=b('<div class="project-card reveal tilt-card"><div class=project-preview><div class=project-preview-bg style=fontSize:3rem;display:flex;alignItems:center;justifyContent:center;height:100%></div></div><div class=project-info><h3></h3><p></p><div class=project-tech></div><div class=project-links>'),Lr=b("<span class=tech-tag>");function Rr(){R(()=>{ae(),we()});const e=[{icon:"🐮",name:"飞牛系统",desc:"FnOS 私有云系统，提供存储、影音、下载等一站式服务。",tech:["FnOS","NAS"],links:[{url:"https://fnos.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:5080",label:"🔗 内网"}]},{icon:"🧱",name:"宝塔面板",desc:"服务器运维管理面板，可视化网站、数据库、FTP 管理。",tech:["面板","运维"],links:[{url:"https://baota.deltrivx.com/btpanel",label:"🌐 公网"},{url:"http://192.168.31.5:19190/btpanel",label:"🔗 内网"}]},{icon:"🏠",name:"HomeAssistant",desc:"智能家居控制系统，集成灯光、传感器、自动化场景等设备。",tech:["IoT","智能家居"],links:[{url:"https://homeassistant.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.3:8123",label:"🔗 内网"}]},{icon:"🎬",name:"飞牛影视",desc:"FnOS 内置影视中心，支持在线观影与媒体管理。",tech:["FnOS","影视"],links:[{url:"https://fntv.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:8005",label:"🔗 内网"}]},{icon:"🔱",name:"Hermes",desc:"多平台消息集成网关，支持 QQBot、Telegram 等渠道统一接入。",tech:["Gateway","消息集成"],links:[{url:"https://hermes.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.5:8787",label:"🔗 内网"}]},{icon:"🌀",name:"Sub2API",desc:"AI API 网关平台，支持订阅转换与多模型路由。",tech:["API","AI","Gateway"],links:[{url:"https://sub2api.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.5:8080",label:"🔗 内网"}]},{icon:"🔗",name:"SubStore",desc:"订阅管理与转换工具，支持多协议节点聚合与规则处理。",tech:["订阅","代理","工具"],links:[{url:"https://substore.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.5:3000",label:"🔗 内网"}]},{icon:"🛜",name:"iStoreOS",desc:"软路由与家庭网络管理系统，承载双网接入、插件扩展与局域网服务。",tech:["iStoreOS","软路由","网络"],links:[{url:"https://istoreos.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.10:80",label:"🔗 内网"}]},{icon:"🌐",name:"Chromium",desc:"远程 Chromium 浏览器实例，支持自动化脚本和 Web 测试。",tech:["Chromium","浏览器"],links:[{url:"https://chromium.deltrivx.com",label:"🌐 公网"},{url:"https://192.168.31.2:3011",label:"🔗 内网"}]},{icon:"🐻",name:"Aria2",desc:"轻量级命令行下载工具，支持 HTTP/HTTPS/BT/Metalink 协议，搭配 AriaNg WebUI 管理。",tech:["aria2","下载"],links:[{url:"https://aria2.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:6880",label:"🔗 内网"}]},{icon:"⚡",name:"qBittorrent",desc:"轻量级 BT/PT 下载客户端，功能完善，支持 WebUI 远程管理。",tech:["qBittorrent","BT/PT"],links:[{url:"https://qbittorrent.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:8080",label:"🔗 内网"}]},{icon:"📡",name:"Transmission",desc:"轻量 BT 下载客户端，资源占用低，适合 7x24 运行。",tech:["Transmission","BT"],links:[{url:"https://transmission.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:9091",label:"🔗 内网"}]},{icon:"🎛️",name:"Emby 影音中心",desc:"全平台媒体管理与串流服务器，整合影视资源库。",tech:["Emby Server","NAS"],links:[{url:"https://emby.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:8096",label:"🔗 内网"}]},{icon:"🎯",name:"MoviePilot",desc:"自动化影视资源订阅与下载管理，辅以豆瓣榜单同步。",tech:["MoviePilot","自动化"],links:[{url:"https://moviepilot.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:3000",label:"🔗 内网"}]},{icon:"📡",name:"PanSou 搜盘引擎",desc:"网盘资源搜索引擎，聚合多方盘源。",tech:["搜索","网盘"],links:[{url:"https://pansou.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:8880",label:"🔗 内网"}]},{icon:"📥",name:"Telegram 下载器",desc:"自动抓取 Telegram 频道的媒体文件并下载到本地存储。",tech:["Telegram API","自动化"],links:[{url:"https://telegram.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:5000",label:"🔗 内网"}]},{icon:"📊",name:"Portainer 容器管理",desc:"Docker 容器集群图形化管理面板。",tech:["Docker","管理"],links:[{url:"https://portainer.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:9000",label:"🔗 内网"}]},{icon:"🔄",name:"DDNS-GO",desc:"自动更新域名解析记录，保障内网服务通过域名可达。",tech:["DNS","自动运维"],links:[{url:"https://ddnsgo.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:9876",label:"🔗 内网"}]},{icon:"📂",name:"OpenList 目录索引",desc:"轻量级文件目录索引与分享系统。",tech:["文件管理","分享"],links:[{url:"https://openlist.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:5244",label:"🔗 内网"}]},{icon:"🐧",name:"Xunlei 迅雷远程",desc:"远程迅雷下载服务，支持磁力链接与 BT 下载。",tech:["下载","P2P"],links:[{url:"https://xunlei.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:2345",label:"🔗 内网"}]},{icon:"🔗",name:"OmniBox 综合工具",desc:"多功能集成工具箱。",tech:["工具","集成"],links:[{url:"https://omnibox.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:7023",label:"🔗 内网"}]},{icon:"🎥",name:"咪咕视频助手",desc:"咪咕视频资源抓取与下载工具。",tech:["视频","抓取"],links:[{url:"https://migu.deltrivx.com",label:"🌐 公网"},{url:"http://192.168.31.2:1234",label:"🔗 内网"}]},{icon:"📺",name:"MDC 媒体下载中心",desc:"多平台媒体资源下载与聚合中心。",tech:["媒体","下载"],links:[{url:"http://192.168.31.2:9208",label:"🔗 内网"}]},{icon:"🔐",name:"AllInSSL 证书管理",desc:"SSL 证书全生命周期管理工具。",tech:["SSL","证书"],links:[{url:"http://192.168.31.2:8888/allinssl",label:"🔗 内网"}]},{icon:"🖥️",name:"MDCx 图形界面",desc:"MDCx 媒体下载工具 GUI 版，基于 VNC 远程桌面操作。",tech:["媒体","下载","GUI"],links:[{url:"http://192.168.31.2:5800",label:"🔗 内网"}]},{icon:"☁️",name:"Cloud Saver 云盘转存",desc:"115 网盘与阿里云盘自动转存工具。",tech:["网盘","转存","自动化"],links:[{url:"http://192.168.31.2:8032",label:"🔗 内网"}]},{icon:"⚡",name:"KV Rocks 缓存",desc:"Apache Kvrocks 高性能键值存储，兼容 Redis 协议。",tech:["Kvrocks","Redis"],links:[]},{icon:"🤖",name:"OpenClaw AI",desc:"智能 AI 代理系统，支持多模型切换与自动化任务编排。",tech:["AI Agent","LLM"],links:[]},{icon:"🛡️",name:"FlareSolverr",desc:"Cloudflare 挑战解析代理，为自动化工具提供免验证访问。",tech:["代理","反爬"],links:[]},{icon:"🗄️",name:"PostgreSQL 数据库",desc:"PostgreSQL 17 关系型数据库，为各服务提供可靠的数据存储。",tech:["PostgreSQL","数据库"],links:[]},{icon:"📦",name:"Redis 缓存",desc:"高性能内存缓存数据库，加速服务响应。",tech:["Redis","缓存"],links:[]},{icon:"🌐",name:"Nginx 反向代理",desc:"Web 服务反向代理与负载均衡网关。",tech:["Nginx","代理"],links:[]}];return(()=>{var t=kr(),n=t.firstChild,o=n.nextSibling;return g(o,()=>e.map((r,s)=>(()=>{var l=Dr(),a=l.firstChild,i=a.firstChild,c=a.nextSibling,p=c.firstChild,d=p.nextSibling,u=d.nextSibling,m=u.nextSibling;return sn(l,"animationDelay",s*.1+"s"),g(i,()=>r.icon),g(p,()=>r.name),g(d,()=>r.desc),g(u,()=>r.tech.map(w=>(()=>{var f=Lr();return g(f,w),f})())),g(m,()=>r.links.map(w=>h(Nr,{get href(){return w.url},get label(){return w.label}}))),l})())),t})()}var Fr=b('<section id=articles><div class="section-header reveal"><h2><span class=gradient-text>技术实战</span></h2><p>分享我的思考和见解</p></div><div class=articles-list>'),Mr=b("<div class=article-meta><span class=article-date></span><div class=article-tags>"),Hr=b("<h3>"),jr=b("<p>"),Gr=b("<span class=read-more>阅读更多 →"),Ur=b("<span class=tech-tag>");function Br(){R(()=>{ae(),we()});const e=[{title:"飞牛系统商店版 OpenClaw 优化实战：启动守护、路径复刻与更新按钮增强",subtitle:"FnOS App Center · trim.openclaw · systemd 兜底自启 · Gateway loopback · 插件优先更新",date:"2026-05-29",tags:["FnOS","OpenClaw","systemd","Bun","Gateway"],summary:"完整记录飞牛系统商店版 OpenClaw 的运行路径、用户权限、systemd 兜底启动脚本、控制面板检查更新按钮逻辑，以及更新前检查商店插件、优先升级渠道插件的优化方案。按文中路径、脚本、运行用户与权限基线，可在另一台 FnOS 设备复刻一致运行环境，避免 root 权限污染。",slug:"fnos-openclaw-store-optimization"},{title:"iOS Quantumult X 异地接入内网：HomeNet 双节点实战指南",subtitle:"Cloudflare Tunnel + Sub-Store + Shadowsocks over WSS · 从零到可用的内网回家方案",date:"2026-05-29",tags:["iOS","Quantumult X","Cloudflare","Sub-Store","内网穿透","Shadowsocks"],summary:"从 Cloudflare Tunnel 创建到 Nginx IPv6 直连加速、Sub-Store 订阅分发，再到 Quantumult X 双节点策略组配置，完整覆盖 iOS 设备异地接入内网的整个链路。双路径冗余：Fast 路径提供最低延迟，CF 路径提供最大兼容性。",slug:"homenet-qx"},{title:"从零搭建双栈域名体系：Cloudflare Tunnel + 内网穿透完全指南",subtitle:"V4/V6 双栈 · 域名统一接入 · 内外网分流防回环",date:"2026-05-28",tags:["Cloudflare","Tunnel","双栈","内网穿透","DNS"],summary:"详解如何通过 Cloudflare Tunnel 实现域名的 V4+V6 双栈接入，涵盖 CF 前期准备、Tunnel 部署、DNS 批量配置、内网防回环方案，以及最终的双栈验证方法。",slug:"dual-stack-domain"}];return(()=>{var t=Fr(),n=t.firstChild,o=n.nextSibling;return g(o,()=>e.map((r,s)=>h(I,{get href(){return`/article/${r.slug}`},class:"article-card reveal tilt-card",style:{animationDelay:s*.1+"s"},get children(){return[(()=>{var l=Mr(),a=l.firstChild,i=a.nextSibling;return g(a,()=>r.date),g(i,()=>r.tags.map(c=>(()=>{var p=Ur();return g(p,c),p})())),l})(),(()=>{var l=Hr();return g(l,()=>r.title),l})(),(()=>{var l=jr();return g(l,()=>r.summary),l})(),Gr()]}}))),t})()}var Wr=b(`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>从零搭建双栈域名体系：Cloudflare Tunnel + 内网穿透完全指南</h1><p class=article-subtitle>V4/V6 双栈 · 域名统一接入 · 内外网分流防回环</p><div class=article-meta><span class=article-date>2026-05-28</span><div class=article-tags><span class=tech-tag>Cloudflare</span><span class=tech-tag>Tunnel</span><span class=tech-tag>双栈</span><span class=tech-tag>内网穿透</span><span class=tech-tag>DNS</span></div></div></div><div class=article-content><h2>一、为什么要做双栈域名？</h2><p>IPv6 已经普及，但很多服务只配置了 IPv4。双栈（Dual Stack）让域名同时支持 IPv4 和 IPv6 访问，用户无论使用哪种协议都能连通。结合 Cloudflare Tunnel，可以在没有公网 IP 的情况下，实现全域名双栈接入。</p><p>实际场景中，家中服务器可能只有 IPv6 公网地址（由运营商分配），而很多用户的网络环境仅支持 IPv4。双栈域名体系让两种网络环境下的用户都能无缝访问你的服务。</p><h2>二、基础架构设计</h2><p>整体架构分两条路径：外网用户通过 Cloudflare 边缘节点（天然双栈）进入 Tunnel，内网用户通过路由器 DNS 重定向直达本机。两条路径互不干扰，避免回环。</p><pre>┌─────────────────────────────────────────────────────────────┐
│  外网用户（IPv4 / IPv6）                                     │
│       ↓                                                       │
│  Cloudflare 边缘节点（天然双栈）                               │
│       ↓                                                       │
│  Cloudflare Tunnel（内网穿透）                                 │
│       ↓                                                       │
│  本机 cloudflared → ingress 规则匹配                           │
│       ↓                                                       │
│  本机服务（localhost）/ 远程服务（内网 IP）                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  内网用户                                                     │
│       ↓                                                       │
│  路由器 DNS 重定向（如 192.168.31.1）                          │
│       ↓                                                       │
│  本机 nginx → 127.0.0.1:port（防回环）                        │
└─────────────────────────────────────────────────────────────┘</pre><h2>三、Cloudflare 前期准备</h2><h3>3.1 注册与域名接入</h3><p>将域名的 NS 记录指向 Cloudflare，在面板中完成域名添加。这一步是所有后续操作的基础。</p><h3>3.2 创建 API Token</h3><p>进入 Cloudflare 控制台 → My Profile → API Tokens → Create Token。选择 "Edit zone DNS" 模板，生成用于 DNS 管理的 Token。建议仅授权当前域名的 DNS 编辑权限，遵循最小权限原则。</p><pre># API Token 权限模板
Zone - DNS - Edit
Zone - Zone - Read</pre><h3>3.3 获取关键 ID</h3><p>后续操作需要用到 Zone ID 和 Account ID，可在 Cloudflare 控制台右侧栏找到：</p><pre>Zone ID: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Account ID: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre><h2>四、部署 Cloudflare Tunnel</h2><h3>4.1 安装 cloudflared</h3><pre>wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-x86_64.rpm
rpm -ivh cloudflared-linux-x86_64.rpm
cloudflared --version</pre><h3>4.2 认证并创建 Tunnel</h3><pre>cloudflared tunnel login
cloudflared tunnel create my-tunnel</pre><p>登录后会生成凭证文件，创建 Tunnel 后记录 Tunnel ID，后续配置 DNS CNAME 记录时需要用到。</p><h3>4.3 编写 ingress 配置文件</h3><p>创建 /etc/cloudflared/config.yml。本机服务指向 localhost，远程服务指向内网 IP。ingress 规则按顺序匹配，最后一条设为 http_status:404 兜底：</p><pre>token: "你的 Tunnel Token"
ingress:
  # 本机服务
  - hostname: baota.example.com
    service: http://localhost:19190
  - hostname: sub2api.example.com
    service: http://localhost:8080
  - hostname: substore.example.com
    service: http://localhost:3000

  # 远程服务（内网其他设备）
  - hostname: emby.example.com
    service: http://192.168.31.2:8096
  - hostname: fnos.example.com
    service: http://192.168.31.2:5080
  - hostname: homeassistant.example.com
    service: http://192.168.31.3:8123

  # 兜底 404
  - service: http_status:404</pre><h3>4.4 配置 systemd 服务</h3><pre>systemctl enable --now cloudflared
systemctl status cloudflared</pre><h2>五、DNS 记录批量配置</h2><p>所有域名统一添加 CNAME 记录指向 &lt;Tunnel-ID&gt;.cfargotunnel.com，开启代理（🟠）。以多个子域名为例，逐一添加：</p><pre># 单个添加
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/&lt;ZONE_ID>/dns_records" \\
  -H "Authorization: Bearer &lt;API_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "CNAME",
    "name": "emby",
    "content": "&lt;TUNNEL_ID>.cfargotunnel.com",
    "ttl": 1,
    "proxied": true
  }'

# 批量添加（多个域名）
for name in aria2 baota chromium ddnsgo emby fnos fntv \\
          hermes homeassistant istoreos migu moviepilot \\
          omnibox openlist pansou portainer qbittorrent \\
          socks sub2api substore telegram transmission xunlei; do
  curl -s -X POST ".../dns_records" \\
    -H "Authorization: Bearer &lt;API_TOKEN>" \\
    -H "Content-Type: application/json" \\
    -d "{\\"type\\":\\"CNAME\\",\\"name\\":\\"$name\\",\\"content\\":\\"&lt;TUNNEL_ID>.cfargotunnel.com\\",\\"ttl\\":1,\\"proxied\\":true}"
  sleep 0.5
done</pre><p>代理开启后，Cloudflare 边缘节点天然支持 IPv4 + IPv6 双栈，无需额外配置。</p><h2>六、内网防回环</h2><p>内网用户如果也走 CF Tunnel，会形成回环：内网设备 → 路由器 → 外网 → CF 边缘 → Tunnel → 本机。延迟增加且浪费带宽。</p><p>解决方案：在路由器 DNS 中将域名解析到本机 IP，nginx 代理到 127.0.0.1:port：</p><pre>内网设备 → 路由器 DNS 重定向 → 本机 nginx → 本机服务</pre><p>以 FnOS 上的 Nginx 容器为例，在路由器中将 *.example.com 解析到 FnOS 的 IP（如 192.168.31.2），Nginx 再反代到各服务端口。</p><h2>七、双栈验证</h2><p>配置完成后，分别验证 IPv4 和 IPv6 解析：</p><pre># IPv4 解析
dig +short A emby.example.com
# 返回 CF IPv4 地址（如 104.21.x.x）

# IPv6 解析
dig +short AAAA emby.example.com
# 返回 CF IPv6 地址（如 2606:4700::xxx）

# 连通性测试
curl -4 -I https://emby.example.com
curl -6 -I https://emby.example.com</pre><p>如果主域名本身有公网 IPv6（如家中服务器有 /128 的 IPv6 地址），还可以额外添加一条 AAAA 记录直连：</p><pre># 主域名 AAAA 记录（直连 IPv6，不走 CF 代理）
AAAA  example.com  →  2408:8266:xxxx::xxx  ⚪仅 DNS</pre><p>这样 IPv6 用户直连家中服务器，IPv4 用户走 CF Tunnel，实现最优路径。</p><h2>八、最终效果</h2><pre>✅ 外网用户（IPv4）→ CF 边缘 → Tunnel → 各服务
✅ 外网用户（IPv6）→ CF 边缘 → Tunnel → 各服务
✅ 内网用户 → 路由器 DNS → 本机 nginx → 各服务
✅ 无回环、无暴露真实 IP、统一安全防护
✅ 可以多个子域名统一接入，全部双栈可达</pre><h2>九、常见问题</h2><h3>Q: 双栈是否需要单独配置 IPv6？</h3><p>不需要。CF 边缘节点天然双栈，IPv6 访问时自动回源到 Tunnel 的 IPv4 连接。</p><h3>Q: 如何验证双栈？</h3><pre>dig +short A emby.example.com
dig +short AAAA emby.example.com</pre><h3>Q: 部分域名不需要走 CF 代理怎么办？</h3><p>对于已有其他 CDN 或自托管服务的域名，可以关闭代理（⚪仅 DNS），仅保留 DNS 解析功能。例如博客域名 www.example.com 指向 GitHub Pages，可以设为 CNAME → yourname.github.io，关闭代理。</p><h3>Q: Tunnel 最多支持多少域名？</h3><p>Cloudflare 免费版 Tunnel 支持最多 100 个 ingress 规则，对于个人使用完全足够。`);function Kr(){return R(()=>{document.querySelectorAll(".reveal").forEach(e=>e.classList.add("visible")),window.scrollTo(0,0)}),(()=>{var e=Wr(),t=e.firstChild,n=t.firstChild;return g(t,h(I,{href:"/articles",class:"back-link",children:"← 返回文章列表"}),n),e})()}var Xr=b(`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>iOS Quantumult X 异地接入内网：HomeNet 双节点实战指南</h1><p class=article-subtitle>Cloudflare Tunnel + Sub-Store + Shadowsocks over WSS · 从零到可用的内网回家方案</p><div class=article-meta><span class=article-date>2026-05-29</span><div class=article-tags><span class=tech-tag>iOS</span><span class=tech-tag>Quantumult X</span><span class=tech-tag>Cloudflare</span><span class=tech-tag>Sub-Store</span><span class=tech-tag>内网穿透</span><span class=tech-tag>Shadowsocks</span></div></div></div><div class=article-content><h2>一、方案概述</h2><p>异地访问家中内网，常见方案有 Tailscale、ZeroTier、frp 等。本文另辟蹊径——利用 Cloudflare Tunnel 的天然双栈穿透能力，结合 Shadowsocks over WebSocket Secure（WSS）协议，在 iOS Quantumult X 上实现双节点自动切换，让手机无论身处何地都能像在家一样访问 192.168.31.0/24 内网。</p><p>整个链路分三层：<strong>Cloudflare 边缘层</strong>（双栈接入）、<strong>隧道与代理层</strong>（cloudflared + gost + Nginx）、<strong>订阅与客户端层</strong>（Sub-Store + Quantumult X）。下面逐层展开。</p><pre>┌─────────────────────────────────────────────────────────┐
│  iOS Quantumult X                                       │
│    ├─ HomeNet-Fast（直连 · IPv6/DDNS）                   │
│    └─ HomeNet-CF  （Cloudflare 中继 · IPv4/IPv6）        │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   ┌────▼─────┐           ┌──────▼──────┐
   │ Fast 路径 │           │  CF 路径     │
   │          │           │             │
   │ example  │           │ substore.   │
   │ .com     │           │ example.com │
   │ :18443   │           │ .com:443    │
   │          │           │             │
   │ FnOS IPv6│           │ CF 边缘节点  │
   │ 直连     │           │ 双栈接入     │
   └────┬─────┘           └──────┬──────┘
        │                         │
   ┌────▼─────────────────────────▼─────┐
   │  192.168.31.5（TencentOS 服务器）    │
   │    gost :18443（WSS 后端）           │
   │    gost :10089（CF 专用后端）         │
   │    nginx（反代 / PAC）               │
   │    cloudflared（Tunnel 客户端）      │
   └─────────────────────────────────────┘</pre><h2>二、Cloudflare 前期配置</h2><h3>2.1 域名接入与 DNS 准备</h3><p>将域名 NS 记录指向 Cloudflare 后，在控制台完成域名添加。随后创建 API Token（My Profile → API Tokens → Create Token），选择 "Edit zone DNS" 模板——这是后续自动化管理 DNS 记录的基础。</p><h3>2.2 创建 Cloudflare Tunnel</h3><p>在 Cloudflare Zero Trust 控制台中创建 Tunnel，获取 Tunnel ID 和 Token。在本机（192.168.31.5）安装 cloudflared 并配置服务：</p><pre># /etc/cloudflared/config.yml
token: "eyJhIjoi..."  # 替换为你的 Tunnel Token
ingress:
  # HomeNet 直连入口
  - hostname: example.com
    service: https://localhost:18443
    originRequest:
      noTLSVerify: true
  # Sub-Store + HomeNet-CF 入口
  - hostname: substore.example.com
    service: http://localhost:3000
  # 兜底 404
  - service: http_status:404</pre><p>cloudflared 作为 systemd 服务运行，监听 Cloudflare 边缘的入站连接，根据 ingress 规则将流量分发到本机不同端口。</p><h3>2.3 DNS CNAME 记录</h3><p>为每个 Tunnel 子域名添加 CNAME 记录，指向 <code>&lt;tunnel-id&gt;.cfargotunnel.com</code>，并开启代理（🟠）：</p><pre># 通过 CF API 添加 CNAME 记录
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \\
  -H "Authorization: Bearer $CF_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "CNAME",
    "name": "substore",
    "content": "$TUNNEL_ID.cfargotunnel.com",
    "ttl": 1,
    "proxied": true
  }'</pre><h2>三、Nginx 配置：IPv6 直连加速</h2><p>HomeNet 的 Fast 路径依赖 IPv6 直连。家中 FnOS（192.168.31.2）上的 Nginx 容器承担了 WebSocket 流量转发的角色。</p><p>核心配置仅保留 HomeNet Direct Fast 这一个 server 块，负责将 WSS 流量转发到内网 gost 服务：</p><pre># /vol2/1000/Docker/nginx/conf.d/default.conf

# HomeNet Direct Fast
server {
    listen 18443 ssl;
    listen [::]:18443 ssl;    # ← IPv6 双栈监听
    http2 on;
    server_name example.com;

    ssl_certificate     /ssl/example.com/fullchain.pem;
    ssl_certificate_key /ssl/example.com/privkey.pem;

    location = /ss-direct {
        proxy_pass http://192.168.31.5:18443;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}</pre><p>关键点：<code>listen [::]:18443 ssl</code> 同时监听 IPv4 和 IPv6。当 iOS 设备通过 IPv6 访问时，流量直接到达 FnOS Nginx，再转发到 192.168.31.5 的 gost 服务，全程不经 Cloudflare，延迟最低。</p><p>WebSocket 路径统一为 <code>/ss-direct</code>，这是 Shadowsocks over WSS 的约定路径，后续在 Quantumult X 节点配置中会用到。</p><h2>四、Sub-Store 搭建与订阅分发</h2><h3>4.1 部署 Sub-Store</h3><p>Sub-Store 是一个订阅管理工具，可以将节点信息以标准格式分发给各类客户端。在本机（192.168.31.5）直接以 Node.js 进程方式运行：</p><pre># 目录结构
/opt/Sub-Store/
├── backend/
│   ├── sub-store.min.js    # 主程序（单文件编译版）
│   ├── sub-store.json      # 订阅与制品配置
│   ├── root.json           # 缓存资源
│   └── substore.log        # 运行日志
├── config/                 # 客户端模板
│   ├── QX.snippet          # Quantumult X 片段
│   ├── QX-Task.json        # QX 定时任务
│   ├── Loon.plugin         # Loon 插件
│   ├── Surge.sgmodule      # Surge 模块
│   └── ...
└── scripts/                # 辅助脚本

# 启动方式（systemd 或直接 node）
node /opt/Sub-Store/backend/sub-store.min.js
# 监听端口：3000（前端/通用）、3001（后端 API）</pre><h3>4.2 配置 HomeNet 双节点订阅</h3><p>在 Sub-Store 中创建名为 <code>HomeNet-QX</code> 的订阅，包含两个 Shadowsocks 节点：</p><pre># HomeNet-QX 订阅内容（QX 格式）

# 节点一：HomeNet-Fast（直连 · 优先）
shadowsocks=example.com:18443,method=chacha20-ietf-poly1305,\\
  password=your_password,obfs=wss,obfs-host=example.com,\\
  obfs-uri=/ss-direct,fast-open=true,udp-relay=false,\\
  tag=HomeNet-Fast

# 节点二：HomeNet-CF（Cloudflare 中继 · 备用）
shadowsocks=substore.example.com:443,method=chacha20-ietf-poly1305,\\
  password=your_password,obfs=wss,obfs-host=substore.example.com,\\
  obfs-uri=/ss-direct,fast-open=true,udp-relay=false,\\
  tag=HomeNet-CF</pre><p>两个节点的加密方式和密码完全相同，区别仅在于入口域名和端口：</p><ul><li><strong>HomeNet-Fast</strong>：<code>example.com:18443</code> → FnOS IPv6 直连 → gost :18443</li><li><strong>HomeNet-CF</strong>：<code>substore.example.com:443</code> → Cloudflare 边缘 → cloudflared → gost :10089</li></ul><h3>4.3 创建 QX 专用订阅端点</h3><p>Sub-Store 的 <code>/download/&lt;订阅名&gt;?target=QX</code> 接口可以直接输出 Quantumult X 格式的订阅。但由于目标解析的换行问题，更稳妥的方式是通过 Nginx 创建静态端点：</p><pre># Nginx 配置
location = /qx {
    proxy_pass http://127.0.0.1:3001/download/HomeNet-QX?target=QX;
    proxy_set_header Host $host;
}

# QX 订阅地址
# https://substore.example.com/qx</pre><p>订阅 URL 为 <code>https://substore.example.com/qx</code>，Quantumult X 通过此地址拉取节点列表。</p><h2>五、Quantumult X 配置</h2><h3>5.1 添加订阅</h3><p>在 Quantumult X 中，进入「订阅」→「添加」，填入订阅地址：</p><pre>https://substore.example.com/qx</pre><p>Quantumult X 会自动解析出 HomeNet-Fast 和 HomeNet-CF 两个节点。</p><h3>5.2 配置策略组</h3><p>要实现双节点自动切换（优先 Fast，CF 兜底），需要创建一个策略组。在 QX 配置文件中添加：</p><pre># 策略组：自动选择可用节点
[policy]
available=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, \\
  check-interval=300, alive-checking=true, \\
  img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png</pre><p>参数说明：</p><ul><li><code>available</code>：自动选择策略组，优先选取第一个可用节点</li><li><code>server-tag-regex=^HomeNet-(Fast|CF)$</code>：匹配 HomeNet-Fast 和 HomeNet-CF</li><li><code>check-interval=300</code>：每 300 秒检测一次节点存活</li><li><code>alive-checking=true</code>：启用存活检测</li></ul><p><strong>注意</strong>：<code>available</code> 策略组按订阅中的节点顺序选择，因此订阅中 <strong>HomeNet-Fast 必须排在 HomeNet-CF 前面</strong>，否则会优先走 Cloudflare 中继。</p><p>如果需要<strong>手动切换</strong>节点，将策略组类型改为 <code>static</code>：</p><pre>[policy]
static=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, \\
  img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png</pre><h3>5.3 配置分流规则</h3><p>HomeNet 只应路由内网流量，其他流量走用户原有的科学上网节点。在 QX 配置中添加分流规则：</p><pre>[filter_local]
# 内网 IP 段走 HomeNet（必须放在其他 private-IP DIRECT 规则之前）
ip-cidr, 192.168.31.0/24, HomeNet, no-resolve

# 其他内网段直连
ip-cidr, 192.168.0.0/16, DIRECT
ip-cidr, 10.0.0.0/8, DIRECT
ip-cidr, 172.16.0.0/12, DIRECT</pre><p><code>no-resolve</code> 参数表示不解析域名，直接匹配 IP 范围，避免 DNS 泄漏。</p><h3>5.4 完整配置片段</h3><p>以下是可直接导入 Quantumult X 的完整配置片段：</p><pre># HomeNet 内网回家配置
# 订阅地址：https://substore.example.com/qx

[server_remote]
https://substore.example.com/qx, tag=HomeNet, \\
  update-interval=86400, opt-parser=false, \\
  enabled=true

[policy]
# 自动切换（Fast 优先，CF 兜底）
available=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, \\
  check-interval=300, alive-checking=true, \\
  img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png

[filter_local]
# 内网流量走 HomeNet
ip-cidr, 192.168.31.0/24, HomeNet, no-resolve

[rewrite_local]
# 可选：拦截内网域名的 DNS 解析
# ^https?://.+\\.local reject</pre><h2>六、连接优化与排障</h2><h3>6.1 双节点切换逻辑</h3><p>Quantumult X 的 <code>available</code> 策略组行为：</p><ul><li>按订阅中节点顺序依次检测可用性</li><li>选择第一个可用的节点</li><li>每 <code>check-interval</code> 秒重新检测一次</li><li>当当前节点不可用时，自动切换到下一个可用节点</li></ul><p>因此，<strong>订阅中节点顺序至关重要</strong>。HomeNet-Fast 在前、HomeNet-CF 在后，确保优先走直连路径。</p><h3>6.2 Fast 路径排障</h3><p>如果 HomeNet-Fast 无法连接，按以下顺序排查：</p><ol><li><strong>IPv6 连通性</strong>：确认 iOS 设备当前网络支持 IPv6（蜂窝网络通常支持）</li><li><strong>DDNS 解析</strong>：<code>nslookup example.com</code> 应返回 IPv6 地址</li><li><strong>端口可达性</strong>：<code>curl -6 https://example.com:18443</code> 应返回 WebSocket 握手响应</li><li><strong>证书有效性</strong>：确认 <code>/ssl/example.com/fullchain.pem</code> 未过期</li><li><strong>gost 服务</strong>：<code>ss -tlnp | grep 18443</code> 确认 gost 正在监听</li></ol><h3>6.3 CF 路径排障</h3><p>HomeNet-CF 经过 Cloudflare 边缘，排查重点不同：</p><ol><li><strong>Tunnel 状态</strong>：<code>systemctl status cloudflared</code> 确认 Tunnel 在线</li><li><strong>Ingress 规则</strong>：确认 <code>substore.example.com</code> 的 ingress 正确指向 <code>http://localhost:10089</code>（gost CF 专用端口）</li><li><strong>路径分流</strong>：CF 路径下 <code>/ss-direct</code> 应直达 gost，不经过 Nginx</li></ol><h3>6.4 常见连接问题与解决</h3><table><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>两个节点都显示不可达</td><td>订阅地址不通或密码错误</td><td>检查订阅 URL 和密码配置</td></tr><tr><td>只能连 CF，连不上 Fast</td><td>IPv6 不通或 DDNS 未更新</td><td>检查 IPv6 连通性和 DNS 解析</td></tr><tr><td>连接后无法访问内网 IP</td><td>分流规则顺序错误</td><td>将 HomeNet 规则放在其他 private-IP 规则之前</td></tr><tr><td>手动切换不生效</td><td>策略组类型为 available</td><td>改为 static 类型</td></tr><tr><td>连接后所有流量都走 HomeNet</td><td>分流规则范围过大</td><td>确认 ip-cidr 仅匹配 192.168.31.0/24</td></tr></tbody></table><h2>七、安全建议</h2><ul><li><strong>密码强度</strong>：Shadowsocks 密码应使用随机字符串，避免使用弱密码</li><li><strong>TLS 证书</strong>：使用 Let's Encrypt 或 Cloudflare Origin CA 签名的有效证书</li><li><strong>分流精确</strong>：仅将内网 IP 段（192.168.31.0/24）路由到 HomeNet，避免全局代理</li><li><strong>订阅保护</strong>：Sub-Store 订阅地址建议添加 token 参数，防止未授权访问</li><li><strong>日志审计</strong>：定期检查 gost 和 cloudflared 日志，排查异常连接</li></ul><h2>八、总结</h2><p>本文从 Cloudflare Tunnel 的创建出发，经 Nginx IPv6 直连加速、Sub-Store 订阅分发，到 Quantumult X 双节点策略组配置，完整覆盖了 iOS 设备异地接入内网的整个链路。</p><p>核心设计思想是<strong>双路径冗余</strong>：Fast 路径（IPv6 直连）提供最低延迟，CF 路径（Cloudflare 中继）提供最大兼容性。Quantumult X 的 <code>available</code> 策略组自动在两者之间切换，用户无需手动干预。</p><p>整个方案无需公网 IP、无需额外硬件，仅利用 Cloudflare 免费 Tunnel 和家中现有服务器即可实现。对于需要随时访问家中 NAS、HomeAssistant、开发环境等内网服务的场景，这是一个简洁而可靠的解决方案。`);function qr(){return R(()=>{document.querySelectorAll(".reveal").forEach(e=>e.classList.add("visible")),window.scrollTo(0,0)}),(()=>{var e=Xr(),t=e.firstChild,n=t.firstChild;return g(t,h(I,{href:"/articles",class:"back-link",children:"← 返回文章列表"}),n),e})()}var Qr=b(`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>飞牛系统商店版 OpenClaw 优化实战：开机自启、状态修复、备份复用与更新按钮增强</h1><p class=article-subtitle>FnOS App Center · trim.openclaw · systemd 兜底自启 · Gateway loopback · root Monitor 根治 · 一键备份恢复</p><div class=article-meta><span class=article-date>2026-05-29</span><div class=article-tags><span class=tech-tag>FnOS</span><span class=tech-tag>OpenClaw</span><span class=tech-tag>systemd</span><span class=tech-tag>Bun</span><span class=tech-tag>Node.js</span><span class=tech-tag>Gateway</span></div></div></div><div class=article-content><h2>一、写在前面：本文解决什么问题</h2><p>飞牛系统（FnOS）商店版 OpenClaw 的运行方式与普通 Docker 部署不同。它不是直接由 root 启动一个裸进程，而是由 FnOS App Center 管理应用包，再由商店版 Monitor 启动 OpenClaw Gateway。本文记录一次完整的商店版 OpenClaw 优化过程：反向定位运行路径、修复开机自启、根治 root Monitor 残留、修复控制面板卡“启动中”、梳理“检查更新”按钮的真实逻辑，并沉淀出一份可一键还原或迁移复用的完整备份方案。</p><p>本文所有域名、Token、用户名、内网地址均做脱敏处理。示例中的 <code>example.com</code>、<code>192.168.x.x</code>、<code>&lt;TOKEN&gt;</code> 等请替换为你自己的环境。</p><h2>二、目标架构</h2><p>优化后的商店版 OpenClaw 采用以下链路：</p><pre>FnOS systemd / App Center
  ├─ FnOS App Center
  │   → /var/apps/trim.openclaw/cmd/main start
  │     → bun /vol1/@appcenter/trim.openclaw/server/index.js
  │       → Monitor Unix Socket: /vol1/@appcenter/trim.openclaw/trim.openclaw.sock
  │
  └─ openclaw-ensure.service
      → /usr/local/sbin/openclaw-ensure.sh
        → 等待 trim.openclaw 用户下的 Monitor 就绪
        → runuser -u trim.openclaw -- openclaw gateway run --port 25730 --bind loopback
          → Gateway: 127.0.0.1:25730 / [::1]:25730</pre><p>关键设计原则：</p><ul><li><strong>商店版独立用户运行</strong>：使用 <code>trim.openclaw</code> 用户，不与 root 或 Docker 版混用。</li><li><strong>Gateway 仅监听 loopback</strong>：默认 <code>127.0.0.1:25730</code>，避免直接暴露到局域网或公网。</li><li><strong>Monitor 归 FnOS App Center</strong>：<code>cmd/main</code> 由商店体系调用，避免 systemd/root 直接拉起 Monitor。</li><li><strong>systemd 只兜底 Gateway</strong>：<code>openclaw-ensure.service</code> 等待 Monitor 后，仅以 <code>trim.openclaw</code> 启动 Gateway。</li><li><strong>更新前优雅停止 Gateway</strong>：避免安装包替换过程中进程仍占用旧文件。</li><li><strong>更新 OpenClaw 前先检查商店插件</strong>：如果 FnOS 商店包本身有更新，优先提示先升级商店包。</li><li><strong>OpenClaw 升级前先更新渠道插件</strong>：例如 QQBot，避免 OpenClaw 基底升级后插件 SDK 不兼容。</li></ul><h2>三、路径与运行环境定位</h2><p>在 FnOS 中，商店应用通常由 <code>/var/apps/&lt;appname&gt;</code> 暴露入口，再通过软链接指向 <code>/vol1/@appcenter</code> 与 <code>/vol1/@apphome</code>。以商店版 OpenClaw 为例：</p><pre># 商店应用入口
/var/apps/trim.openclaw

# 实际程序目录（App Center 管理）
/vol1/@appcenter/trim.openclaw

# 实际数据目录（用户数据与运行态）
/vol1/@apphome/trim.openclaw/data

# OpenClaw 安装目录
/vol1/@apphome/trim.openclaw/data/openclaw

# OpenClaw HOME
/vol1/@apphome/trim.openclaw/data/home

# OpenClaw 配置文件
/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json

# 工作区
/vol1/@apphome/trim.openclaw/data/workspace

# 状态目录
/vol1/@apphome/trim.openclaw/data/state

# 运行目录
/vol1/@apphome/trim.openclaw/data/runtime</pre><p>商店版依赖 FnOS 提供的 Bun 与 Node.js：</p><pre># Bun
/var/apps/bunjs/target/bin/bun
# 通常指向：/vol1/@appcenter/bunjs/bin/bun

# Node.js
/var/apps/nodejs_v24/target/bin/node
# 通常指向：/vol1/@appcenter/nodejs_v24/bin/node</pre><p>建议先确认版本：</p><pre>/var/apps/bunjs/target/bin/bun --version
/var/apps/nodejs_v24/target/bin/node --version</pre><p>在本次环境中，Bun 为 1.3.x，Node.js 为 v24.x。你不必强求小版本完全一致，但建议 Bun ≥ 1.3.9，Node.js 使用 FnOS 商店依赖中声明的 v24 系列。</p><h3>3.1 本次修复后的运行快照</h3><p>以下是本文最终落地后的真实运行状态，可作为排查时的基准线：</p><pre>主机：FnOS
内核：Linux 6.18.18-trim x86_64
商店应用：trim.openclaw
商店包版本：0.0.10
OpenClaw Gateway：127.0.0.1:25730 / [::1]:25730
Monitor Socket：/vol1/@appcenter/trim.openclaw/trim.openclaw.sock
systemd：openclaw-ensure.service enabled / active (exited)

Monitor:
  用户：trim.openclaw
  进程：bun /vol1/@appcenter/trim.openclaw/server/index.js
  PID 文件：/vol1/@appdata/trim.openclaw/app.pid

Gateway:
  用户：trim.openclaw
  工作目录：/vol1/@apphome/trim.openclaw/data/openclaw
  PID 文件：/vol1/@apphome/trim.openclaw/data/runtime/gateway.pid
  配置：/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json

Monitor DB:
  /vol1/@apphome/trim.openclaw/data/monitor/monitor.sqlite
  instances.default.status = running
  instances.default.gateway_port = 25730</pre><p>注意：如果同时存在 Docker 版或手工版 OpenClaw，例如 root 用户、cwd 为 <code>/app</code>、监听 <code>0.0.0.0:18789</code>，它不是本文所说的 FnOS 商店版。排查商店版时必须把这一路排除。</p><h2>四、商店版主启动脚本 cmd/main</h2><p>商店版主脚本位于：</p><pre>/var/apps/trim.openclaw/cmd/main</pre><p>它的职责不是直接跑 Gateway，而是启动商店版 Monitor：</p><pre>#!/bin/bash

LOG_FILE="\${TRIM_PKGVAR}/info.log"
PID_FILE="\${TRIM_PKGVAR}/app.pid"

# Bun / Node.js path
export PATH=/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:$PATH

# Data directory (@apphome)
OPENCLAW_DATA_DIR="\${TRIM_PKGHOME}/data"

# Static files directory (frontend)
STATIC_DIR="\${TRIM_APPDEST}/ui"
SOCKET_PATH="\${TRIM_APPDEST}/trim.openclaw.sock"
OPENCLAW_PATCHES_DIR="\${TRIM_APPDEST}/vendor/openclaw-patches/dist"

# Custom SOUL.md shipped with this package
SOUL_MD_SRC="\${TRIM_APPDEST}/../config/prompts/SOUL.md"

# Monitor command
CMD="env OPENCLAW_DATA_DIR="\${OPENCLAW_DATA_DIR}" STATIC_DIR="\${STATIC_DIR}" SOUL_MD_SRC="\${SOUL_MD_SRC}" MONITOR_SOCKET_PATH="\${SOCKET_PATH}" MONITOR_ACCESS_MODE="public" OPENCLAW_PATCHES_DIR="\${OPENCLAW_PATCHES_DIR}" bun "\${TRIM_APPDEST}/server/index.js""

log_msg() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> \${LOG_FILE}
}

check_process() {
    local pid=$1
    if kill -0 "\${pid}" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

status() {
    if [ -f "\${PID_FILE}" ]; then
        pid=$(head -n 1 "\${PID_FILE}" | tr -d '[:space:]')
        if check_process "\${pid}"; then
            return 0
        else
            rm -f "\${PID_FILE}"
        fi
    fi
    return 1
}

start_process() {
    if status; then
        return 0
    fi

    if ! command -v bun >/dev/null 2>&amp;1; then
        log_msg "bun command not found in PATH"
        return 1
    fi

    log_msg "Starting process ..."
    rm -f "\${SOCKET_PATH}"
    bash -c "\${CMD}" >> \${LOG_FILE} 2>&amp;1 &amp;
    printf "%s" "$!" > \${PID_FILE}
    return 0
}

stop_process() {
    log_msg "Stopping process ..."

    if [ -r "\${PID_FILE}" ]; then
        pid=$(head -n 1 "\${PID_FILE}" | tr -d '[:space:]')

        log_msg "pid=\${pid}"
        if ! check_process "\${pid}"; then
            rm -f "\${PID_FILE}"
            log_msg "remove pid file 1"
            return
        fi

        log_msg "send TERM signal to PID:\${pid}..."
        kill -TERM \${pid} >> \${LOG_FILE} 2>&amp;1

        local count=0
        while check_process "\${pid}" &amp;&amp; [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
            log_msg "waiting process terminal... (\${count}s/10s)"
        done

        if check_process "\${pid}"; then
            log_msg "send KILL signal to PID:\${pid}..."
            kill -KILL "\${pid}"
            sleep 1
            rm -f "\${PID_FILE}"
        else
            log_msg "process killed... "
        fi
    fi

    rm -f "\${SOCKET_PATH}"
    return 0
}

case $1 in
start)
    start_process
    ;;
stop)
    stop_process
    ;;
status)
    if status; then
        exit 0
    else
        exit 3
    fi
    ;;
*)
    exit 1
    ;;
esac</pre><p>这个脚本依赖 FnOS 注入的环境变量：</p><ul><li><code>TRIM_PKGVAR</code>：应用运行状态目录，如日志与 pid 文件。</li><li><code>TRIM_PKGHOME</code>：应用 home 目录，通常映射到 <code>/vol1/@apphome/trim.openclaw</code>。</li><li><code>TRIM_APPDEST</code>：应用程序目录，通常映射到 <code>/vol1/@appcenter/trim.openclaw</code>。</li></ul><h2>五、OpenClaw CLI wrapper</h2><p>商店版还应提供一个 wrapper，用于保证 OpenClaw 以正确 HOME、配置路径和依赖目录运行：</p><pre>/var/apps/trim.openclaw/target/bin/openclaw</pre><p>建议内容如下：</p><pre>#!/bin/bash
set -e

export PATH="/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin:$PATH"
export OPENCLAW_DATA_DIR="/vol1/@apphome/trim.openclaw/data"
export HOME="/vol1/@apphome/trim.openclaw/data/home"
export OPENCLAW_CONFIG_PATH="/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json"
export OPENCLAW_HIDE_BANNER="1"

exec "/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin/openclaw" "$@"</pre><p>权限建议：</p><pre>chown trim.openclaw:trim.openclaw /var/apps/trim.openclaw/target/bin/openclaw
chmod 770 /var/apps/trim.openclaw/target/bin/openclaw</pre><h2>六、systemd 兜底启动脚本：只拉 Gateway，不拉 Monitor</h2><p>这一节是本文后半段修复的核心。最初的兜底脚本直接以 root 调用 <code>/var/apps/trim.openclaw/cmd/main start</code>，结果导致同一台机器上出现两个 Monitor：一个 root 拉起，一个 FnOS App Center 以 <code>trim.openclaw</code> 拉起。最终方案是：<strong>Monitor 交给 FnOS App Center，systemd ensure 只等待 Monitor，然后只负责以 <code>trim.openclaw</code> 启动 Gateway。</strong></p><h3>6.1 systemd unit</h3><p>创建：</p><pre>/etc/systemd/system/openclaw-ensure.service</pre><p>内容：</p><pre>[Unit]
Description=Ensure OpenClaw Gateway is running
After=network-online.target trim_open_gateway.service trim_app_center.service
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/openclaw-ensure.sh
TimeoutStartSec=120
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target</pre><h3>6.2 ensure 脚本</h3><p>创建：</p><pre>/usr/local/sbin/openclaw-ensure.sh</pre><p>推荐代码如下。它会读取商店版路径、清理旧 lock、等待 <code>trim.openclaw</code> 用户下的 Monitor，再用 <code>runuser</code> 启动 Gateway。注意：这里故意不再调用 <code>cmd/main start</code>。</p><pre>#!/bin/bash
# OpenClaw Gateway Ensure Script
# Called by systemd at boot to ensure FnOS store Monitor + Gateway are running.

set -e

LOG="/var/log/openclaw-ensure.log"
APP_MAIN="/var/apps/trim.openclaw/cmd/main"
PORT="25730"
OC_USER="trim.openclaw"
OC_DATA_DIR="/vol1/@apphome/trim.openclaw/data"
OC_INSTALL_DIR="\${OC_DATA_DIR}/openclaw"
OC_HOME_DIR="\${OC_DATA_DIR}/home"
OC_CONFIG_PATH="\${OC_HOME_DIR}/.openclaw/openclaw.json"
OC_BINARY="\${OC_INSTALL_DIR}/node_modules/.bin/openclaw"
OC_GATEWAY_LOG="\${OC_INSTALL_DIR}/gateway.log"
OC_RUNTIME_DIR="\${OC_DATA_DIR}/runtime"
OC_PID_PATH="\${OC_RUNTIME_DIR}/gateway.pid"
OC_ENV_PATH="\${OC_INSTALL_DIR}/.env"

log() {
    echo "$(date '+%F %T') $*" >> "$LOG"
}

port_listening() {
    ss -tln 2>/dev/null | grep -q ":\${PORT} "
}

find_gateway_pid() {
    ss -tlnp 2>/dev/null | grep ":\${PORT} " | grep -oP 'pid=K[0-9]+' | head -1
}

if [ -z "$TRIM_PKGVAR" ]; then
    export TRIM_PKGVAR="/vol1/@appdata/trim.openclaw"
    export TRIM_PKGHOME="/vol1/@apphome/trim.openclaw"
    export TRIM_APPDEST="/vol1/@appcenter/trim.openclaw"
fi

mkdir -p "$(dirname "$LOG")" "$OC_RUNTIME_DIR"
touch "$LOG" "$OC_GATEWAY_LOG"
chown "$OC_USER:$OC_USER" "$OC_RUNTIME_DIR" "$OC_GATEWAY_LOG" 2>/dev/null || true

if [ -f "$OC_ENV_PATH" ]; then
    env_port=$(grep -E '^PORT=' "$OC_ENV_PATH" 2>/dev/null | head -1 | cut -d= -f2- | tr -d "'")
    if [ -n "$env_port" ]; then PORT="$env_port"; fi
fi

if port_listening; then
    pid=$(find_gateway_pid || true)
    if [ -n "$pid" ]; then
        printf "%s" "$pid" > "$OC_PID_PATH"
        chown "$OC_USER:$OC_USER" "$OC_PID_PATH" 2>/dev/null || true
    fi
    log "Gateway already running on port \${PORT}, skipping"
    exit 0
fi

log "Gateway not running, ensuring monitor and starting store gateway"

if [ ! -x "$APP_MAIN" ]; then
    log "ERROR: $APP_MAIN not found or not executable"
    exit 1
fi
if [ ! -x "$OC_BINARY" ]; then
    log "ERROR: $OC_BINARY not found or not executable"
    exit 1
fi

rm -f /tmp/openclaw-*/gateway.*.lock 2>/dev/null || true
rm -f "$OC_PID_PATH" 2>/dev/null || true

# Do not call cmd/main from ensure. FnOS App Center owns Monitor startup.
for i in $(seq 1 15); do
    if pgrep -u "$OC_USER" -f "bun \${TRIM_APPDEST}/server/index.js" >/dev/null 2>&amp;1; then
        log "Monitor already running as \${OC_USER}"
        break
    fi
    sleep 1
done

log "Starting Gateway directly as \${OC_USER} on 127.0.0.1:\${PORT}"
/usr/sbin/runuser -u "$OC_USER" -- /bin/bash -lc "
    export HOME='\${OC_HOME_DIR}'
    export OPENCLAW_DATA_DIR='\${OC_DATA_DIR}'
    export OPENCLAW_CONFIG_PATH='\${OC_CONFIG_PATH}'
    export OPENCLAW_HIDE_BANNER=1
    export PATH='\${OC_INSTALL_DIR}/node_modules/.bin:/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
    cd '\${OC_INSTALL_DIR}'
    exec '\${OC_BINARY}' gateway run --port '\${PORT}' --bind loopback
" >> "$OC_GATEWAY_LOG" 2>&amp;1 &amp;

for i in $(seq 1 90); do
    sleep 1
    if port_listening; then
        pid=$(find_gateway_pid || true)
        if [ -n "$pid" ]; then
            printf "%s" "$pid" > "$OC_PID_PATH"
            chown "$OC_USER:$OC_USER" "$OC_PID_PATH" 2>/dev/null || true
            log "Gateway is now running on port \${PORT} (PID \${pid})"
        else
            log "Gateway is now running on port \${PORT}"
        fi
        exit 0
    fi
done

log "ERROR: Gateway still not listening on port \${PORT} after 90s"
exit 1</pre><p>启用：</p><pre>chmod +x /usr/local/sbin/openclaw-ensure.sh
systemctl daemon-reload
systemctl enable openclaw-ensure.service
systemctl start openclaw-ensure.service
systemctl status openclaw-ensure.service --no-pager</pre><h3>6.3 为什么不能让 ensure 调 cmd/main start</h3><p><code>openclaw-ensure.service</code> 是 root 身份运行。若它直接调用 <code>cmd/main start</code>，Monitor 会以 root 身份启动，随后 FnOS App Center 又会以 <code>trim.openclaw</code> 启动正确 Monitor，形成双进程与权限污染。判断是否踩坑：</p><pre>ps -eo pid,ppid,user,group,cmd   | grep "bun /vol1/@appcenter/trim.openclaw/server/index.js"   | grep -v grep

# 正确：只应有 trim.openclaw
# 错误：出现 root 用户的 Monitor</pre><h2>七、权限统一：复刻成功的关键</h2><p><strong>这是整套方案最容易踩坑、也最必须强调的部分：</strong>商店版 OpenClaw 的运行用户不是 root，而是 FnOS 为商店应用创建的独立用户 <code>trim.openclaw</code>。如果用 root 运行过安装、更新或修复命令，很容易把 <code>node_modules</code>、<code>.openclaw</code>、<code>sessions</code>、<code>runtime</code> 等目录污染成 root 属主，最终导致商店版进程读写失败、更新失败、会话不可写，或者出现“root 版能跑、商店版不能跑”的混乱状态。</p><p>复刻环境时应坚持一条铁律：</p><pre>商店版 OpenClaw 的数据目录、配置目录、安装目录、运行目录、workspace，统一归 trim.openclaw:trim.openclaw。
root 只负责 systemd、FnOS 应用脚本、必要的文件修复；不要让 root 成为 OpenClaw 运行态文件的属主。</pre><h3>7.1 先确认商店用户存在</h3><p>另一台设备上，<code>trim.openclaw</code> 用户通常由 FnOS App Center 安装商店包时自动创建。不要优先手工创建用户；如果用户不存在，优先重新安装或修复商店包。</p><pre>id trim.openclaw
getent passwd trim.openclaw
getent group trim.openclaw</pre><p>预期结果类似：</p><pre>uid=xxx(trim.openclaw) gid=xxx(trim.openclaw) groups=...,AppUsers,OfficialAppUsers,trim.openclaw</pre><h3>7.2 统一属主范围</h3><p>需要统一归属的核心目录：</p><pre>/vol1/@apphome/trim.openclaw/data
/vol1/@apphome/trim.openclaw/data/openclaw
/vol1/@apphome/trim.openclaw/data/openclaw/node_modules
/vol1/@apphome/trim.openclaw/data/home
/vol1/@apphome/trim.openclaw/data/home/.openclaw
/vol1/@apphome/trim.openclaw/data/runtime
/vol1/@apphome/trim.openclaw/data/state
/vol1/@apphome/trim.openclaw/data/workspace
/vol1/@apphome/trim.openclaw/data/monitor</pre><p>检查命令：</p><pre>find /vol1/@apphome/trim.openclaw/data   -maxdepth 4   ( ! -user trim.openclaw -o ! -group trim.openclaw )   -printf '%u:%g %m %p
' | head -n 100</pre><p>如果有输出，说明存在 root 或其他用户污染。修复：</p><pre>chown -R trim.openclaw:trim.openclaw /vol1/@apphome/trim.openclaw/data
chmod -R u+rwX,g+rX,o-rwx /vol1/@apphome/trim.openclaw/data</pre><h3>7.3 推荐权限基线</h3><p>为了既能让商店版运行，又避免过度开放权限，推荐基线如下：</p><pre># 数据根目录：商店用户可读写，组可读进，其他用户不可访问
chown -R trim.openclaw:trim.openclaw /vol1/@apphome/trim.openclaw/data
chmod 750 /vol1/@apphome/trim.openclaw/data
chmod 750 /vol1/@apphome/trim.openclaw/data/openclaw
chmod 750 /vol1/@apphome/trim.openclaw/data/home
chmod 700 /vol1/@apphome/trim.openclaw/data/home/.openclaw
chmod 750 /vol1/@apphome/trim.openclaw/data/runtime
chmod 750 /vol1/@apphome/trim.openclaw/data/state
chmod 750 /vol1/@apphome/trim.openclaw/data/workspace

# 配置文件：含模型、渠道、Gateway 等配置，禁止其他用户读取
chmod 640 /vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json

# CLI wrapper：由商店用户执行
chown trim.openclaw:trim.openclaw /var/apps/trim.openclaw/target/bin/openclaw
chmod 770 /var/apps/trim.openclaw/target/bin/openclaw</pre><h3>7.4 所有 OpenClaw CLI 操作都应以商店用户执行</h3><p>需要查看版本、安装插件、执行诊断时，不要直接 root 执行 <code>openclaw</code>。正确方式是用 <code>runuser</code> 切到 <code>trim.openclaw</code>，并显式带上商店版 HOME 与配置路径：</p><pre>runuser -u trim.openclaw -- env   HOME=/vol1/@apphome/trim.openclaw/data/home   OPENCLAW_DATA_DIR=/vol1/@apphome/trim.openclaw/data   OPENCLAW_CONFIG_PATH=/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json   PATH=/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin:$PATH   /var/apps/trim.openclaw/target/bin/openclaw --version</pre><p>插件安装也同理：</p><pre>runuser -u trim.openclaw -- env   HOME=/vol1/@apphome/trim.openclaw/data/home   OPENCLAW_DATA_DIR=/vol1/@apphome/trim.openclaw/data   OPENCLAW_CONFIG_PATH=/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json   PATH=/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin:$PATH   /var/apps/trim.openclaw/target/bin/openclaw plugins install @openclaw/qqbot@latest --force</pre><h3>7.5 验证进程绝不能跑成 root</h3><p>Gateway 进程应满足：</p><pre># 进程用户应为 trim.openclaw
ps -eo pid,ppid,user,group,cwd,cmd | grep -E 'trim.openclaw|server/index.js|openclaw' | grep -v grep

# 端口应只监听 loopback 的商店版端口
ss -ltnp | grep 25730

# 当前工作目录应是商店版安装目录
readlink -f /proc/&lt;GATEWAY_PID>/cwd
# 预期：/vol1/@apphome/trim.openclaw/data/openclaw</pre><p>如果看到 <code>root</code> 用户运行的 <code>openclaw</code>，或者 cwd 是 <code>/app</code>、端口是其他值，那通常不是商店版，排查时必须排除，避免将 Docker 版或手工版误认为商店版。</p><h2>八、控制面板“检查更新”按钮的真实逻辑</h2><p>商店版控制面板前端按钮位于 UI bundle 中，点击“检查更新”后并不是只检查版本，而是弹出确认框，确认后调用后端安装接口：</p><pre>POST /app/trim-openclaw/api/install
Content-Type: application/json

{
  "method": "bun",
  "action": "update"
}</pre><p>前端会切换到运行日志页面，通过 SSE 持续接收后端日志。后端入口在：</p><pre>/vol1/@appcenter/trim.openclaw/server/index.js</pre><p>更新目标由以下常量决定：</p><pre>const OPENCLAW_NPM_REGISTRY =
  process.env.OPENCLAW_NPM_REGISTRY || "https://registry.npmmirror.com/";

const OPENCLAW_VERSION =
  process.env.OPENCLAW_VERSION || "2026.5.4";

const OPENCLAW_PACKAGE_SPEC =
  \`openclaw@\${OPENCLAW_VERSION}\`;

const OPENCLAW_UPDATE_PACKAGE_SPEC =
  process.env.OPENCLAW_UPDATE_PACKAGE_SPEC || "openclaw@latest";</pre><p>当 <code>action === "update"</code> 时，实际目标是：</p><pre>openclaw@latest</pre><p>核心更新流程：</p><pre>确认更新
  → POST /api/install action=update
  → gracefulStopGateway()
  → 准备 Bun / npm registry / cache 环境
  → ensureInstanceDirectories()
  → ensureManagedInstallPackageJson()
  → bun add --cwd &lt;installDir> --registry &lt;registry> openclaw@latest
  → refreshOpenClawVersionMetadata()
  → deploySoulMd()
  → startOpenclaw()
  → refreshChannelPlugins()
  → refreshModelsCatalogSnapshot()
  → SSE complete</pre><p>在本文路径中，等价命令为：</p><pre>/var/apps/bunjs/target/bin/bun add   --cwd /vol1/@apphome/trim.openclaw/data/openclaw   --registry https://registry.npmmirror.com/   openclaw@latest</pre><h2>九、优化一：更新前检查 FnOS 商店插件版本</h2><p>如果商店包 <code>trim.openclaw</code> 自身已有新版，而用户直接在 OpenClaw 控制面板里升级 npm 包，可能出现“基底已经升级，但商店 Monitor/UI/脚本仍是旧版”的错配。因此可在 OpenClaw 升级前先检查 FnOS App Center 数据库。</p><p>新增脚本：</p><pre>/vol1/@apphome/trim.openclaw/data/openclaw/scripts/check-store-plugin-update.sh</pre><p>示例代码如下。不同 FnOS 版本的 PostgreSQL 连接方式可能不同，需按实际 appcenter 数据库配置调整。</p><pre>#!/usr/bin/env bash
set -euo pipefail

APP_NAME="trim.openclaw"
PSQL_BIN="\${PSQL_BIN:-/usr/bin/psql}"
DB_NAME="\${DB_NAME:-appcenter}"

log() {
  printf '%s
' "$*"
}

if ! command -v "\${PSQL_BIN}" >/dev/null 2>&amp;1; then
  log "未找到 psql，跳过 FnOS 商店插件更新检查"
  exit 0
fi

SQL="
SELECT
  COALESCE(installed.version, '') AS installed_version,
  COALESCE(candidate.version, '') AS candidate_version
FROM
  (SELECT version FROM app_package WHERE app_name = '\${APP_NAME}' AND installed = true ORDER BY id DESC LIMIT 1) installed
FULL JOIN
  (SELECT version FROM app_package WHERE app_name = '\${APP_NAME}' AND installed = false ORDER BY id DESC LIMIT 1) candidate
ON true;
"

RESULT=$("\${PSQL_BIN}" -d "\${DB_NAME}" -Atc "\${SQL}" 2>/dev/null || true)

if [ -z "\${RESULT}" ]; then
  log "未查询到 \${APP_NAME} 的商店更新信息，继续 OpenClaw 更新流程"
  exit 0
fi

INSTALLED=$(printf '%s' "\${RESULT}" | awk -F '|' '{print $1}')
CANDIDATE=$(printf '%s' "\${RESULT}" | awk -F '|' '{print $2}')

if [ -n "\${CANDIDATE}" ] &amp;&amp; [ "\${CANDIDATE}" != "\${INSTALLED}" ]; then
  log "发现飞牛商店插件新版本: \${INSTALLED:-unknown} → \${CANDIDATE}"
  log "请先在 FnOS App Center 中更新『飞牛 OpenClaw』插件，再回到控制面板升级 OpenClaw。"
  exit 2
fi

log "飞牛商店插件已是最新版本，无需先更新商店包"
exit 0</pre><p>接入后端更新流程时，建议只在 <code>action === "update"</code> 时执行：</p><pre>if (action === "update") {
  enqueue("检查 FnOS 商店插件是否有更新...");
  const check = Bun.spawnSync({
    cmd: ["bash", instance.installDir + "/scripts/check-store-plugin-update.sh"],
    stdout: "pipe",
    stderr: "pipe",
    env: process.env,
  });

  const output = new TextDecoder().decode(check.stdout || new Uint8Array()).trim();
  if (output) enqueue(output);

  if (check.exitCode === 2) {
    throw new Error("检测到 FnOS 商店插件有新版本，请先更新商店插件");
  }
}</pre><h2>十、优化二：OpenClaw 基底更新前先更新渠道插件</h2><p>OpenClaw 升级后，渠道插件可能因 SDK 或 API 变化而不兼容。尤其是 QQBot 这类插件，建议在升级 OpenClaw 基底前先更新到最新版本。</p><p>后端可加入：</p><pre>const channelPkgs = ["@openclaw/qqbot@latest"];

if (action === "update") {
  for (const pkg of channelPkgs) {
    enqueue("升级渠道插件 " + pkg + " ...");
    const pluginResult = Bun.spawnSync({
      cmd: [
        bunPath,
        "add",
        "--cwd",
        instance.installDir,
        "--registry",
        registry,
        pkg,
      ],
      stdout: "pipe",
      stderr: "pipe",
      env: installEnv,
    });

    const stdout = new TextDecoder().decode(pluginResult.stdout || new Uint8Array()).trim();
    const stderr = new TextDecoder().decode(pluginResult.stderr || new Uint8Array()).trim();
    if (stdout) enqueue(stdout);
    if (stderr) enqueue(stderr);

    if (pluginResult.exitCode !== 0) {
      throw new Error("渠道插件 " + pkg + " 更新失败");
    }
  }
}</pre><p>这样完整顺序变为：</p><pre>点击“检查更新”
  → 确认弹窗
  → 停止 Gateway
  → Step 1：检测 FnOS 商店插件更新
  → Step 2：bun add @openclaw/qqbot@latest
  → Step 3：bun add openclaw@latest
  → 刷新渠道插件列表
  → 刷新模型目录快照
  → 启动 Gateway</pre><h2>十一、Gateway 启停与配置写入</h2><p>更新前应优雅停止 Gateway：</p><pre>gracefulStopGateway(instance, enqueue, action)</pre><p>建议逻辑：</p><pre>1. 读取当前 Gateway 端口
2. 查找监听端口 PID 与 pid 文件 PID
3. 校验 PID 是否确为 OpenClaw 进程
4. 发送 SIGTERM
5. 最多等待 15 秒
6. 若未退出，发送 SIGKILL
7. 清理 pid 文件
8. 标记 stopped</pre><p>更新后启动：</p><pre>openclaw gateway run --port 25730 --bind loopback</pre><p>配置建议写入：</p><pre>gateway.mode = "local"
gateway.port = 25730
gateway.bind = "loopback"
gateway.trustedProxies = ["127.0.0.1", "::1"]
gateway.controlUi.enabled = true
gateway.controlUi.basePath = "/app/trim-openclaw"
gateway.controlUi.allowInsecureAuth = true
gateway.controlUi.dangerouslyDisableDeviceAuth = true
gateway.controlUi.allowedOrigins = ["*"]
agents.defaults.workspace = "/vol1/@apphome/trim.openclaw/data/workspace"
update.checkOnStart = false
cli.banner.taglineMode = "off"</pre><p><strong>安全提醒：</strong><code>allowInsecureAuth</code> 与 <code>dangerouslyDisableDeviceAuth</code> 只适用于 FnOS App Center 已经提供外层认证、且 Gateway 仅 loopback 监听的场景。若你把 Gateway 暴露到局域网或公网，不应这样配置。</p><h2>十二、复刻步骤总览</h2><p>在另一台 FnOS 设备复刻时，推荐顺序如下：</p><pre># 1. 通过 FnOS App Center 安装飞牛 OpenClaw
# 确认 trim.openclaw 用户、应用目录与依赖已创建
id trim.openclaw
ls -ld /var/apps/trim.openclaw /vol1/@appcenter/trim.openclaw /vol1/@apphome/trim.openclaw

# 2. 确认 Bun / Node.js
/var/apps/bunjs/target/bin/bun --version
/var/apps/nodejs_v24/target/bin/node --version

# 3. 确认主脚本
sed -n '1,220p' /var/apps/trim.openclaw/cmd/main

# 4. 确认 OpenClaw wrapper
sed -n '1,120p' /var/apps/trim.openclaw/target/bin/openclaw

# 5. 修正数据目录权限
chown -R trim.openclaw:trim.openclaw /vol1/@apphome/trim.openclaw/data
chmod -R 750 /vol1/@apphome/trim.openclaw/data
chmod 700 /vol1/@apphome/trim.openclaw/data/home/.openclaw
chmod 640 /vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json

# 6. 安装 ensure 脚本与 systemd unit
chmod +x /usr/local/sbin/openclaw-ensure.sh
systemctl daemon-reload
systemctl enable --now openclaw-ensure.service

# 7. 验证商店版进程与端口
ps -eo pid,ppid,user,group,cmd | grep -E 'trim.openclaw|server/index.js|openclaw' | grep -v grep
ss -ltnp | grep 25730
curl -I http://127.0.0.1:25730/</pre><h2>十三、完整备份、一键还原与新机复用</h2><p>修复完成后，建议立即做一份完整备份。本文环境最终备份位于：</p><pre>/vol2/1000/Backup/OpenClaw/store-openclaw-20260529-215247

openclaw-store-full.tar.zst   # 完整归档，约 464M
restore-openclaw-store.sh     # 一键恢复/新机复用脚本
checksums.sha256              # 校验文件
backup-info.txt               # 备份说明
manifest.txt                  # 路径清单
README.md                     # 使用说明</pre><p>latest 指针：</p><pre>/vol2/1000/Backup/OpenClaw/LATEST_STORE.txt
/vol2/1000/Backup/OpenClaw/restore-latest-openclaw-store.sh</pre><p>恢复最新备份：</p><pre>/vol2/1000/Backup/OpenClaw/restore-latest-openclaw-store.sh</pre><p>无人值守恢复：</p><pre>/vol2/1000/Backup/OpenClaw/restore-latest-openclaw-store.sh --yes</pre><p>备份应至少包含：</p><pre>/var/apps/trim.openclaw/
/vol1/@appcenter/trim.openclaw/
/vol1/@apphome/trim.openclaw/
/vol1/@appdata/trim.openclaw/
/usr/local/bin/openclaw
/usr/local/sbin/openclaw-ensure.sh
/etc/systemd/system/openclaw-ensure.service</pre><p>新机复用时，建议先在 FnOS 商店安装一次 <code>trim.openclaw</code>，确保系统用户、App Center 注册与 nginx/socket 路由存在，再运行恢复脚本。完整运行态备份会包含 sessions、credentials、identity、plugin-state、media/outbound 等数据，适合自用迁移，不适合公开分享。</p><h2>十四、排错清单</h2><h3>1. 控制面板能打开，但 Gateway 不在线</h3><pre>systemctl status openclaw-ensure.service --no-pager
cat /var/log/openclaw-ensure.log
tail -n 100 /vol1/@appdata/trim.openclaw/info.log
ss -ltnp | grep 25730</pre><h3>2. bun command not found</h3><p>检查 <code>cmd/main</code> 与 wrapper 的 PATH：</p><pre>export PATH=/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:$PATH
command -v bun
command -v node</pre><h3>3. 配置文件读不到</h3><p>确认 HOME 与 OPENCLAW_CONFIG_PATH：</p><pre>runuser -u trim.openclaw -- env   HOME=/vol1/@apphome/trim.openclaw/data/home   OPENCLAW_CONFIG_PATH=/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json   /var/apps/trim.openclaw/target/bin/openclaw --version</pre><h3>4. 误把 Docker 版和商店版混在一起</h3><p>判断标准：</p><pre># 商店版
用户：trim.openclaw
端口：127.0.0.1:25730
cwd：/vol1/@apphome/trim.openclaw/data/openclaw

# Docker 或其他自建版
用户：通常为 root 或容器用户
端口：可能是 18789 或其他
cwd：通常是 /app 或容器内路径</pre><h2>十五、最终效果</h2><p>完成优化后，你会得到一个更稳的商店版 OpenClaw：</p><pre>✅ FnOS 商店包负责 UI / Monitor / 生命周期入口
✅ openclaw-ensure 不再以 root 调用 cmd/main start
✅ OpenClaw Gateway 以 trim.openclaw 用户运行
✅ Gateway 仅监听 127.0.0.1:25730
✅ systemd 只负责开机后兜底拉起 Gateway
✅ 控制面板“检查更新”可升级 openclaw@latest
✅ 更新前可检测 FnOS 商店插件版本
✅ 更新 OpenClaw 前可先升级渠道插件
✅ 更新后自动刷新渠道插件与模型目录
✅ 完整备份可一键还原或新机复用
✅ 整体路径清晰，便于备份、恢复和迁移</pre><p>这套方案的关键不是“把 OpenClaw 跑起来”，而是让它符合 FnOS 商店应用的运行范式：程序归 App Center，数据归 @apphome，权限归独立用户，Gateway 不直接暴露，升级逻辑有顺序、有日志、可回滚。这样迁移到另一台设备时，只需按目录、用户、wrapper、systemd、更新逻辑逐项复刻，就能得到一致的运行环境。`);function Vr(){return R(()=>{document.querySelectorAll(".reveal").forEach(e=>e.classList.add("visible")),window.scrollTo(0,0)}),(()=>{var e=Qr(),t=e.firstChild,n=t.firstChild;return g(t,h(I,{href:"/articles",class:"back-link",children:"← 返回文章列表"}),n),e})()}var Yr=b('<div style="max-width:400px;margin:100px auto;padding:40px 20px"><h1 style=text-align:center;margin-bottom:30px>登录</h1><form><div style=margin-bottom:20px><label style=display:block;margin-bottom:6px>用户名</label><input type=text style="width:100%;padding:10px;background:#1a1a2e;border:1px solid #333;color:#fff;border-radius:6px"></div><div style=margin-bottom:20px><label style=display:block;margin-bottom:6px>密码</label><input type=password style="width:100%;padding:10px;background:#1a1a2e;border:1px solid #333;color:#fff;border-radius:6px"></div><button type=submit style=width:100%;padding:12px;background:#00d4ff;color:#000;border:none;border-radius:6px;font-weight:bold;cursor:pointer>登录'),zr=b("<p style=color:#ff4444;margin-bottom:15px>");function Zr(){if(typeof window>"u")return"/";const e=window.location.hash,t=e.indexOf("?");return t===-1?"/":new URLSearchParams(e.slice(t+1)).get("redirect")||"/"}function Jr(e){return e.startsWith("http://")||e.startsWith("https://")}function eo(){const[e,t]=N("DeltrivX"),[n,o]=N(""),[r,s]=N(""),l=ft(),{login:a}=Me(),i=async c=>{if(c.preventDefault(),s(""),!e().trim()){s("请输入用户名");return}if(await a(e(),n())){const d=Zr();Jr(d)?(window.open(d,"_blank"),l("/projects",{replace:!0})):d!=="/"?l(d,{replace:!0}):l("/",{replace:!0})}else s("用户名或密码错误，请重试")};return(()=>{var c=Yr(),p=c.firstChild,d=p.nextSibling,u=d.firstChild,m=u.firstChild,w=m.nextSibling,f=u.nextSibling,v=f.firstChild,_=v.nextSibling,y=f.nextSibling;return d.addEventListener("submit",i),w.$$input=$=>t($.target.value),_.$$input=$=>o($.target.value),g(d,(()=>{var $=z(()=>!!r());return()=>$()&&(()=>{var P=zr();return g(P,r),P})()})(),y),k(()=>w.value=e()),k(()=>_.value=n()),c})()}re(["input"]);var to=b('<div class=content style=display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:70vh;text-align:center><div class=code style="font-size:clamp(6rem, 20vw, 10rem);font-weight:900;background:linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin-bottom:1rem">404</div><h1 style=font-size:1.5rem;margin-bottom:0.8rem;font-weight:600>页面未找到</h1><p style=color:var(--text-secondary);margin-bottom:2rem;font-size:1rem;line-height:1.6>你访问的页面不存在或已被移除。<br>别担心，让我们回到正轨。');function no(){return(()=>{var e=to(),t=e.firstChild,n=t.nextSibling;return n.nextSibling,g(e,h(I,{href:"/",class:"btn btn-primary",children:"🏠 返回首页"}),null),e})()}en(()=>h(Vn,{get children(){return h(Kn,{get children(){return h(Gn,{root:lr,get children(){return[h(F,{path:"/",component:()=>[h(M,{children:"Kris | 个人主页"}),h(V,{name:"description",content:"Kris - 全栈开发者、AI探索者、开源贡献者"}),h(xr,{})]}),h(F,{path:"/about",component:()=>[h(M,{children:"Kris | 关于我"}),h(V,{name:"description",content:"了解 Kris 的背景和经历"}),h(Cr,{})]}),h(F,{path:"/skills",component:()=>[h(M,{children:"Kris | 技能栈"}),h(V,{name:"description",content:"Kris 掌握的技术和工具"}),h(Er,{})]}),h(F,{path:"/projects",component:()=>[h(M,{children:"Kris | 精选项目"}),h(V,{name:"description",content:"Kris 引以为豪的作品"}),h(Rr,{})]}),h(F,{path:"/articles",component:()=>[h(M,{children:"Kris | 文章"}),h(V,{name:"description",content:"Kris 分享的技术文章与思考"}),h(Br,{})]}),h(F,{path:"/article/fnos-openclaw-store-optimization",component:()=>[h(M,{children:"Kris | 飞牛系统商店版 OpenClaw 优化实战"}),h(Vr,{})]}),h(F,{path:"/article/homenet-qx",component:()=>[h(M,{children:"Kris | iOS Quantumult X 异地接入内网：HomeNet 双节点实战指南"}),h(qr,{})]}),h(F,{path:"/article/dual-stack-domain",component:()=>[h(M,{children:"Kris | 双栈域名体系完全指南"}),h(Kr,{})]}),h(F,{path:"/login",component:()=>[h(M,{children:"Kris | 登录"}),h(eo,{})]}),h(F,{path:"*paramName",component:()=>[h(M,{children:"404 - 页面未找到"}),h(no,{})]})]}})}})}}),document.getElementById("root"));
