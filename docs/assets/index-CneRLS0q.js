(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Tt=!1,Rt=(e,t)=>e===t,ce=Symbol("solid-proxy"),Ve=typeof Proxy=="function",pe={equals:Rt};let ze=rt;const H=1,de=2,Ze={owned:null,cleanups:null,context:null,owner:null};var y=null;let ye=null,At=null,O=null,T=null,D=null,he=0;function Je(e,t){const n=O,o=y,r=e.length===0,s=t===void 0?o:t,a=r?Ze:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=r?e:()=>e(()=>N(()=>Z(a)));y=a,O=null;try{return L(i,!0)}finally{O=n,y=o}}function I(e,t){t=t?Object.assign({},pe,t):pe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),ot(n,r));return[nt.bind(n),o]}function R(e,t,n){const o=$e(e,t,!1,H);ne(o)}function $t(e,t,n){ze=Mt;const o=$e(e,t,!1,H);o.user=!0,D?D.push(o):ne(o)}function E(e,t,n){n=n?Object.assign({},pe,n):pe;const o=$e(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,ne(o),nt.bind(o)}function It(e){return L(e,!1)}function N(e){if(O===null)return e();const t=O;O=null;try{return e()}finally{O=t}}function Re(e,t,n){const o=Array.isArray(e);let r,s=n&&n.defer;return a=>{let i;if(o){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(s)return s=!1,a;const l=N(()=>t(i,r,a));return r=i,l}}function M(e){$t(()=>N(e))}function K(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function et(){return y}function tt(e,t){const n=y,o=O;y=e,O=null;try{return L(t,!0)}catch(r){Ie(r)}finally{y=n,O=o}}function Nt(e){const t=O,n=y;return Promise.resolve().then(()=>{O=t,y=n;let o;return L(e,!1),O=y=null,o?o.done:void 0})}const[Do,Mo]=I(!1);function ge(e,t){const n=Symbol("context");return{id:n,Provider:Lt(n),defaultValue:e}}function te(e){let t;return y&&y.context&&(t=y.context[e.id])!==void 0?t:e.defaultValue}function Ae(e){const t=E(e),n=E(()=>Oe(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function nt(){if(this.sources&&this.state)if(this.state===H)ne(this);else{const e=T;T=null,L(()=>ue(this),!1),T=e}if(O){const e=this.observers?this.observers.length:0;O.sources?(O.sources.push(this),O.sourceSlots.push(e)):(O.sources=[this],O.sourceSlots=[e]),this.observers?(this.observers.push(O),this.observerSlots.push(O.sources.length-1)):(this.observers=[O],this.observerSlots=[O.sources.length-1])}return this.value}function ot(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],a=ye&&ye.running;a&&ye.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?T.push(s):D.push(s),s.observers&&st(s)),a||(s.state=H)}if(T.length>1e6)throw T=[],new Error},!1)),t}function ne(e){if(!e.fn)return;Z(e);const t=he;kt(e,e.value,t)}function kt(e,t,n){let o;const r=y,s=O;O=y=e;try{o=e.fn(t)}catch(a){return e.pure&&(e.state=H,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=n+1,Ie(a)}finally{O=s,y=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ot(e,o):e.value=o,e.updatedAt=n)}function $e(e,t,n,o=H,r){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==Ze&&(y.owned?y.owned.push(s):y.owned=[s]),s}function me(e){if(e.state===0)return;if(e.state===de)return ue(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===H)ne(e);else if(e.state===de){const o=T;T=null,L(()=>ue(e,t[0]),!1),T=o}}function L(e,t){if(T)return e();let n=!1;t||(T=[]),D?n=!0:D=[],he++;try{const o=e();return Dt(n),o}catch(o){n||(D=null),T=null,Ie(o)}}function Dt(e){if(T&&(rt(T),T=null),e)return;const t=D;D=null,t.length&&L(()=>ze(t),!1)}function rt(e){for(let t=0;t<e.length;t++)me(e[t])}function Mt(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:me(o)}for(t=0;t<n;t++)me(e[t])}function ue(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===H?o!==t&&(!o.updatedAt||o.updatedAt<he)&&me(o):r===de&&ue(o,t)}}}function st(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=de,n.pure?T.push(n):D.push(n),n.observers&&st(n))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),a=n.observerSlots.pop();o<r.length&&(s.sourceSlots[a]=o,r[o]=s,n.observerSlots[o]=a)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Z(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ht(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ie(e,t=y){throw Ht(e)}function Oe(e){if(typeof e=="function"&&!e.length)return Oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=Oe(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function Lt(e,t){return function(o){let r;return R(()=>r=N(()=>(y.context={...y.context,[e]:o.value},Ae(()=>o.children))),void 0),r}}function u(e,t){return N(()=>e(t||{}))}function ae(){return!0}const Se={get(e,t,n){return t===ce?n:e.get(t)},has(e,t){return t===ce?!0:e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function Ft(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Pe(...e){let t=!1;for(let a=0;a<e.length;a++){const i=e[a];t=t||!!i&&ce in i,e[a]=typeof i=="function"?(t=!0,E(i)):i}if(Ve&&t)return new Proxy({get(a){for(let i=e.length-1;i>=0;i--){const l=be(e[i])[a];if(l!==void 0)return l}},has(a){for(let i=e.length-1;i>=0;i--)if(a in be(e[i]))return!0;return!1},keys(){const a=[];for(let i=0;i<e.length;i++)a.push(...Object.keys(be(e[i])));return[...new Set(a)]}},Se);const n={},o=Object.create(null);for(let a=e.length-1;a>=0;a--){const i=e[a];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let c=l.length-1;c>=0;c--){const p=l[c];if(p==="__proto__"||p==="constructor")continue;const d=Object.getOwnPropertyDescriptor(i,p);if(!o[p])o[p]=d.get?{enumerable:!0,configurable:!0,get:Ft.bind(n[p]=[d.get.bind(i)])}:d.value!==void 0?d:void 0;else{const m=n[p];m&&(d.get?m.push(d.get.bind(i)):d.value!==void 0&&m.push(()=>d.value))}}}const r={},s=Object.keys(o);for(let a=s.length-1;a>=0;a--){const i=s[a],l=o[i];l&&l.get?Object.defineProperty(r,i,l):r[i]=l?l.value:void 0}return r}function Ut(e,...t){const n=t.length;if(Ve&&ce in e){const r=n>1?t.flat():t[0],s=t.map(a=>new Proxy({get(i){return a.includes(i)?e[i]:void 0},has(i){return a.includes(i)&&i in e},keys(){return a.filter(i=>i in e)}},Se));return s.push(new Proxy({get(a){return r.includes(a)?void 0:e[a]},has(a){return r.includes(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!r.includes(a))}},Se)),s}const o=[];for(let r=0;r<=n;r++)o[r]={};for(const r of Object.getOwnPropertyNames(e)){let s=n;for(let l=0;l<t.length;l++)if(t[l].includes(r)){s=l;break}const a=Object.getOwnPropertyDescriptor(e,r);!a.get&&!a.set&&a.enumerable&&a.writable&&a.configurable?o[s][r]=a.value:Object.defineProperty(o[s],r,a)}return o}let Gt=0;function Wt(){return`cl-${Gt++}`}const Xt=e=>`Stale read from <${e}>.`;function at(e){const t=e.keyed,n=E(()=>e.when,void 0,void 0),o=t?n:E(n,void 0,{equals:(r,s)=>!r==!s});return E(()=>{const r=o();if(r){const s=e.children;return typeof s=="function"&&s.length>0?N(()=>s(t?r:()=>{if(!N(o))throw Xt("Show");return n()})):s}return e.fallback},void 0,void 0)}const jt=["allowfullscreen","async","alpha","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","adauctionheaders","browsingtopics","credentialless","defaultchecked","defaultmuted","defaultselected","defer","disablepictureinpicture","disableremoteplayback","preservespitch","shadowrootclonable","shadowrootcustomelementregistry","shadowrootdelegatesfocus","shadowrootserializable","sharedstoragewritable"],Bt=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline","adAuctionHeaders","allowFullscreen","browsingTopics","defaultChecked","defaultMuted","defaultSelected","disablePictureInPicture","disableRemotePlayback","preservesPitch","shadowRootClonable","shadowRootCustomElementRegistry","shadowRootDelegatesFocus","shadowRootSerializable","sharedStorageWritable",...jt]),Yt=new Set(["innerHTML","textContent","innerText","children"]),Kt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),qt=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1},adauctionheaders:{$:"adAuctionHeaders",IFRAME:1},allowfullscreen:{$:"allowFullscreen",IFRAME:1},browsingtopics:{$:"browsingTopics",IMG:1},defaultchecked:{$:"defaultChecked",INPUT:1},defaultmuted:{$:"defaultMuted",AUDIO:1,VIDEO:1},defaultselected:{$:"defaultSelected",OPTION:1},disablepictureinpicture:{$:"disablePictureInPicture",VIDEO:1},disableremoteplayback:{$:"disableRemotePlayback",AUDIO:1,VIDEO:1},preservespitch:{$:"preservesPitch",AUDIO:1,VIDEO:1},shadowrootclonable:{$:"shadowRootClonable",TEMPLATE:1},shadowrootdelegatesfocus:{$:"shadowRootDelegatesFocus",TEMPLATE:1},shadowrootserializable:{$:"shadowRootSerializable",TEMPLATE:1},sharedstoragewritable:{$:"sharedStorageWritable",IFRAME:1,IMG:1}});function Qt(e,t){const n=qt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Vt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),zt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Y=e=>E(()=>e());function Zt(e,t,n){let o=n.length,r=t.length,s=o,a=0,i=0,l=t[r-1].nextSibling,c=null;for(;a<r||i<s;){if(t[a]===n[i]){a++,i++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===a){const p=s<o?i?n[i-1].nextSibling:n[s-i]:l;for(;i<s;)e.insertBefore(n[i++],p)}else if(s===i)for(;a<r;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[s-1]&&n[i]===t[r-1]){const p=t[--r].nextSibling;e.insertBefore(n[i++],t[a++].nextSibling),e.insertBefore(n[--s],p),t[r]=n[s]}else{if(!c){c=new Map;let d=i;for(;d<s;)c.set(n[d],d++)}const p=c.get(t[a]);if(p!=null)if(i<p&&p<s){let d=a,m=1,h;for(;++d<r&&d<s&&!((h=c.get(t[d]))==null||h!==p+m);)m++;if(m>p-i){const b=t[a];for(;i<p;)e.insertBefore(n[i++],b)}else e.replaceChild(n[i++],t[a++])}else a++;else t[a++].remove()}}}const Ge="_$DX_DELEGATE";function Jt(e,t,n,o={}){let r;return Je(s=>{r=s,t===document?e():f(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function _(e,t,n,o){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},a=()=>(r||(r=s())).cloneNode(!0);return a.cloneNode=a,a}function q(e,t=window.document){const n=t[Ge]||(t[Ge]=new Set);for(let o=0,r=e.length;o<r;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,sn))}}function J(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function en(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function tn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function it(e,t){t==null?e.removeAttribute("class"):e.className=t}function lt(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function nn(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let s,a;for(s=0,a=r.length;s<a;s++){const i=r[s];!i||i==="undefined"||t[i]||(We(e,i,!1),delete n[i])}for(s=0,a=o.length;s<a;s++){const i=o[s],l=!!t[i];!i||i==="undefined"||n[i]===l||!l||(We(e,i,!0),n[i]=l)}return n}function ct(e,t,n){if(!t)return n?J(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&o.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(o.setProperty(s,r),n[s]=r);return n}function Ee(e,t={},n,o){const r={};return o||R(()=>r.children=ee(e,t.children,r.children)),R(()=>typeof t.ref=="function"&&Ne(t.ref,e)),R(()=>on(e,t,n,!0,r,!0)),r}function Ne(e,t,n){return N(()=>e(t,n))}function f(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return ee(e,t,o,n);R(r=>ee(e,t(),r,n),o)}function on(e,t,n,o,r={},s=!1){t||(t={});for(const a in r)if(!(a in t)){if(a==="children")continue;r[a]=Xe(e,a,null,r[a],n,s,t)}for(const a in t){if(a==="children")continue;const i=t[a];r[a]=Xe(e,a,i,r[a],n,s,t)}}function rn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function We(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,s=o.length;r<s;r++)e.classList.toggle(o[r],n)}function Xe(e,t,n,o,r,s,a){let i,l,c,p,d;if(t==="style")return ct(e,n,o);if(t==="classList")return nn(e,n,o);if(n===o)return o;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const m=t.slice(3);o&&e.removeEventListener(m,o,typeof o!="function"&&o),n&&e.addEventListener(m,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const m=t.slice(10);o&&e.removeEventListener(m,o,!0),n&&e.addEventListener(m,n,!0)}else if(t.slice(0,2)==="on"){const m=t.slice(2).toLowerCase(),h=Vt.has(m);if(!h&&o){const b=Array.isArray(o)?o[0]:o;e.removeEventListener(m,b)}(h||n)&&(lt(e,m,n,h),h&&q([m]))}else if(t.slice(0,5)==="attr:")J(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")tn(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=Yt.has(t))||!r&&((p=Qt(t,e.tagName))||(l=Bt.has(t)))||(i=e.nodeName.includes("-")||"is"in a))d&&(t=t.slice(5),l=!0),t==="class"||t==="className"?it(e,n):i&&!l&&!c?e[rn(t)]=n:e[p||t]=n;else{const m=r&&t.indexOf(":")>-1&&zt[t.split(":")[0]];m?en(e,m,t,n):J(e,Kt[t]||t,n)}return n}function sn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,s=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),a=()=>{const l=t[n];if(l&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?l.call(t,c,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},i=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();s(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!a());c++){if(t._$host){t=t._$host,i();break}if(t.parentNode===r)break}}else i();s(o)}function ee(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,a=o!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(a){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=j(e,n,o,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=j(e,n,o);else{if(s==="function")return R(()=>{let i=t();for(;typeof i=="function";)i=i();n=ee(e,i,n,o)}),()=>n;if(Array.isArray(t)){const i=[],l=n&&Array.isArray(n);if(Ce(i,t,n,r))return R(()=>n=ee(e,i,n,o,!0)),()=>n;if(i.length===0){if(n=j(e,n,o),a)return n}else l?n.length===0?je(e,i,o):Zt(e,n,i):(n&&j(e),je(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=j(e,n,o,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,o){let r=!1;for(let s=0,a=t.length;s<a;s++){let i=t[s],l=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=Ce(e,i,l)||r;else if(c==="function")if(o){for(;typeof i=="function";)i=i();r=Ce(e,Array.isArray(i)?i:[i],Array.isArray(l)?l:[l])||r}else e.push(i),r=!0;else{const p=String(i);l&&l.nodeType===3&&l.data===p?e.push(l):e.push(document.createTextNode(p))}}return r}function je(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function j(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let s=!1;for(let a=t.length-1;a>=0;a--){const i=t[a];if(r!==i){const l=i.parentNode===e;!s&&!a?l?e.replaceChild(r,i):e.insertBefore(r,n):l&&i.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const an=!1;function pt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,s){if(n)return!(n=!1);const a={to:r,options:s,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const i of e)i.listener({...a,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...s,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:o}}let Te;function ke(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Te=window.history.state._depth}ke();function ln(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function cn(e,t){let n=!1;return()=>{const o=Te;ke();const r=o==null?null:Te-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const pn=/^(?:[a-z0-9]+:)?\/\//i,dn=/^\/+|(\/)\/+$/g,dt="http://sr";function W(e,t=!1){const n=e.replace(dn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function le(e,t,n){if(pn.test(t))return;const o=W(e),r=n&&W(n);let s="";return!r||t.startsWith("/")?s=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?s=o+r:s=r,(s||"/")+W(t,!s)}function mn(e,t){if(e==null)throw new Error(t);return e}function un(e,t){return W(e).replace(/\/*(\*.*)?$/g,"")+W(t)}function mt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function hn(e,t,n){const[o,r]=e.split("/*",2),s=o.split("/").filter(Boolean),a=s.length;return i=>{const l=i.split("/").filter(Boolean),c=l.length-a;if(c<0||c>0&&r===void 0&&!t)return null;const p={path:a?"":"/",params:{}},d=m=>n===void 0?void 0:n[m];for(let m=0;m<a;m++){const h=s[m],b=h[0]===":",g=b?l[m]:l[m].toLowerCase(),w=b?h.slice(1):h.toLowerCase();if(b&&ve(g,d(w)))p.params[w]=g;else if(b||!ve(g,w))return null;p.path+=`/${g}`}if(r){const m=c?l.slice(-c).join("/"):"";if(ve(m,d(r)))p.params[r]=m;else return null}return p}}function ve(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function gn(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,s)=>r+(s.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function ut(e){const t=new Map,n=et();return new Proxy({},{get(o,r){return t.has(r)||tt(n,()=>t.set(r,E(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function fn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,s])=>{s==null||s===""||s instanceof Array&&!s.length?n.delete(r):s instanceof Array?(n.delete(r),s.forEach(a=>{n.append(r,String(a))})):n.set(r,String(s))});const o=n.toString();return o?`?${o}`:""}function ht(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return ht(o).reduce((s,a)=>[...s,...r.map(i=>i+a)],[])}const wn=100,gt=ge(),De=ge(),oe=()=>mn(te(gt),"<A> and 'use' router primitives can be only used inside a Route."),_n=()=>te(De)||oe().base,yn=e=>{const t=_n();return E(()=>t.resolvePath(e()))},bn=e=>{const t=oe();return E(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Me=()=>oe().navigatorFactory(),He=()=>oe().location,vn=()=>oe().params,xn=()=>{const e=He(),t=Me(),n=(o,r)=>{const s=N(()=>fn(e.search,o)+e.hash);t(s,{scroll:!1,resolve:!1,...r})};return[e.query,n]};function On(e,t=""){const{component:n,preload:o,load:r,children:s,info:a}=e,i=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,preload:o||r,info:a};return ft(e.path).reduce((c,p)=>{for(const d of ht(p)){const m=un(t,d);let h=i?m:m.split("/*",1)[0];h=h.split("/").map(b=>b.startsWith(":")||b.startsWith("*")?b:encodeURIComponent(b)).join("/"),c.push({...l,originalPath:p,pattern:h,matcher:hn(h,!i,e.matchFilters)})}return c},[])}function Sn(e,t=0){return{routes:e,score:gn(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const s=e[r],a=s.matcher(n);if(!a)return null;o.unshift({...a,route:s})}return o}}}function ft(e){return Array.isArray(e)?e:[e]}function wt(e,t="",n=[],o=[]){const r=ft(e);for(let s=0,a=r.length;s<a;s++){const i=r[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=On(i,t);for(const c of l){n.push(c);const p=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!p)wt(i.children,c.pattern,n,o);else{const d=Sn([...n],o.length);o.push(d)}n.pop()}}}return n.length?o:o.sort((s,a)=>a.score-s.score)}function xe(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Pn(e,t,n){const o=new URL(dt),r=E(p=>{const d=e();try{return new URL(d,o)}catch{return console.error(`Invalid path ${d}`),p}},o,{equals:(p,d)=>p.href===d.href}),s=E(()=>r().pathname),a=E(()=>r().search,!0),i=E(()=>r().hash),l=()=>"",c=Re(a,()=>mt(r()));return{get pathname(){return s()},get search(){return a()},get hash(){return i()},get state(){return t()},get key(){return l()},query:n?n(c):ut(c)}}let G;function En(){return G}function Cn(e,t,n,o={}){const{signal:[r,s],utils:a={}}=e,i=a.parsePath||(v=>v),l=a.renderPath||(v=>v),c=a.beforeLeave||pt(),p=le("",o.base||"");if(p===void 0)throw new Error(`${p} is not a valid base path`);p&&!r().value&&s({value:p,replace:!0,scroll:!1});const[d,m]=I(!1);let h;const b=(v,P)=>{P.value===g()&&P.state===x()||(h===void 0&&m(!0),G=v,h=P,Nt(()=>{h===P&&(w(h.value),S(h.state),F[1]([]))}).finally(()=>{h===P&&It(()=>{G=void 0,v==="navigate"&&Et(h),m(!1),h=void 0})}))},[g,w]=I(r().value),[x,S]=I(r().state),A=Pn(g,x,a.queryWrapper),C=[],F=I([]),V=E(()=>typeof o.transformUrl=="function"?xe(t(),o.transformUrl(A.pathname)):xe(t(),A.pathname)),Le=()=>{const v=V(),P={};for(let k=0;k<v.length;k++)Object.assign(P,v[k].params);return P},Ot=a.paramsWrapper?a.paramsWrapper(Le,t):ut(Le),Fe={pattern:p,path:()=>p,outlet:()=>null,resolvePath(v){return le(p,v)}};return R(Re(r,v=>b("native",v),{defer:!0})),{base:Fe,location:A,params:Ot,isRouting:d,renderPath:l,parsePath:i,navigatorFactory:Pt,matches:V,beforeLeave:c,preloadRoute:Ct,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:F};function St(v,P,k){N(()=>{if(typeof P=="number"){P&&(a.go?a.go(P):console.warn("Router integration does not support relative routing"));return}const re=!P||P[0]==="?",{replace:we,resolve:X,scroll:_e,state:z}={replace:!1,resolve:!re,scroll:!0,...k},se=X?v.resolvePath(P):le(re&&A.pathname||"",P);if(se===void 0)throw new Error(`Path '${P}' is not a routable path`);if(C.length>=wn)throw new Error("Too many redirects");const Ue=g();(se!==Ue||z!==x())&&(an||c.confirm(se,k)&&(C.push({value:Ue,replace:we,scroll:_e,state:x()}),b("navigate",{value:se,state:z})))})}function Pt(v){return v=v||te(De)||Fe,(P,k)=>St(v,P,k)}function Et(v){const P=C[0];P&&(s({...v,replace:P.replace,scroll:P.scroll}),C.length=0)}function Ct(v,P){const k=xe(t(),v.pathname),re=G;G="preload";for(let we in k){const{route:X,params:_e}=k[we];X.component&&X.component.preload&&X.component.preload();const{preload:z}=X;P&&z&&tt(n(),()=>z({params:_e,location:{pathname:v.pathname,search:v.search,hash:v.hash,query:mt(v),state:null,key:""},intent:"preload"}))}G=re}}function Tn(e,t,n,o){const{base:r,location:s,params:a}=e,{pattern:i,component:l,preload:c}=o().route,p=E(()=>o().path);l&&l.preload&&l.preload();const d=c?c({params:a,location:s,intent:G||"initial"}):void 0;return{parent:t,pattern:i,path:p,outlet:()=>l?u(l,{params:a,location:s,data:d,get children(){return n()}}):n(),resolvePath(h){return le(r.path(),h,p())}}}const Rn=e=>t=>{const{base:n}=t,o=Ae(()=>t.children),r=E(()=>wt(o(),t.base||""));let s;const a=Cn(e,r,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(a),u(gt.Provider,{value:a,get children(){return u(An,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Y(()=>(s=et())&&null),u($n,{routerState:a,get branches(){return r()}})]}})}})};function An(e){const t=e.routerState.location,n=e.routerState.params,o=E(()=>e.preload&&N(()=>{e.preload({params:n,location:t,intent:En()||"initial"})}));return u(at,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>u(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function $n(e){const t=[];let n;const o=E(Re(e.routerState.matches,(r,s,a)=>{let i=s&&r.length===s.length;const l=[];for(let c=0,p=r.length;c<p;c++){const d=s&&s[c],m=r[c];a&&d&&m.route.key===d.route.key?l[c]=a[c]:(i=!1,t[c]&&t[c](),Je(h=>{t[c]=h,l[c]=Tn(e.routerState,l[c-1]||e.routerState.base,Be(()=>o()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),a&&i?a:(n=l[0],l)}));return Be(()=>o()&&n)()}const Be=e=>()=>u(at,{get when(){return e()},keyed:!0,children:t=>u(De.Provider,{value:t,get children(){return t.outlet()}})}),U=e=>{const t=Ae(()=>e.children);return Pe(e,{get children(){return t()}})};function In([e,t],n,o){return[e,o?r=>t(o(r)):t]}function Nn(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=In(I(n(e.get()),{equals:(r,s)=>r.value===s.value&&r.state===s.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&K(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),Rn({signal:o,create:e.create,utils:e.utils})}function kn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Dn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Mn=new Map;function Hn(e=!0,t=!1,n="/_server",o){return r=>{const s=r.base.path(),a=r.navigatorFactory(r.base);let i,l;function c(g){return g.namespaceURI==="http://www.w3.org/2000/svg"}function p(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const w=g.composedPath().find(V=>V instanceof Node&&V.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const x=c(w),S=x?w.href.baseVal:w.href;if((x?w.target.baseVal:w.target)||!S&&!w.hasAttribute("state"))return;const C=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||C&&C.includes("external"))return;const F=x?new URL(S,document.baseURI):new URL(S);if(!(F.origin!==window.location.origin||s&&F.pathname&&!F.pathname.toLowerCase().startsWith(s.toLowerCase())))return[w,F]}function d(g){const w=p(g);if(!w)return;const[x,S]=w,A=r.parsePath(S.pathname+S.search+S.hash),C=x.getAttribute("state");g.preventDefault(),a(A,{resolve:!1,replace:x.hasAttribute("replace"),scroll:!x.hasAttribute("noscroll"),state:C?JSON.parse(C):void 0})}function m(g){const w=p(g);if(!w)return;const[x,S]=w;r.preloadRoute(S,x.getAttribute("preload")!=="false")}function h(g){clearTimeout(i);const w=p(g);if(!w)return l=null;const[x,S]=w;l!==x&&(i=setTimeout(()=>{r.preloadRoute(S,x.getAttribute("preload")!=="false"),l=x},20))}function b(g){if(g.defaultPrevented)return;let w=g.submitter&&g.submitter.hasAttribute("formaction")?g.submitter.getAttribute("formaction"):g.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const S=new URL(w,dt);if(w=r.parsePath(S.pathname+S.search),!w.startsWith(n))return}if(g.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const x=Mn.get(w);if(x){g.preventDefault();const S=new FormData(g.target,g.submitter);x.call({r,f:g.target},g.target.enctype==="multipart/form-data"?S:new URLSearchParams(S))}}q(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",h,{passive:!0}),document.addEventListener("focusin",m,{passive:!0}),document.addEventListener("touchstart",m,{passive:!0})),document.addEventListener("submit",b),K(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",h),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",b)})}}function Ln(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Fn(e){const t=()=>window.location.hash.slice(1),n=pt();return Nn({get:t,set({value:o,replace:r,scroll:s,state:a}){r?window.history.replaceState(ln(a),"","#"+o):window.history.pushState(a,"","#"+o);const i=o.indexOf("#"),l=i>=0?o.slice(i+1):"";Dn(l,s),ke()},init:o=>kn(window,"hashchange",cn(o,r=>!n.confirm(r&&r<0?r:t()))),create:Hn(e.preload,e.explicitLinks,e.actionBase),utils:{go:o=>window.history.go(o),renderPath:o=>`#${o}`,parsePath:Ln,beforeLeave:n}})(e)}var Un=_("<a>");function $(e){e=Pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Ut(e,["href","state","class","activeClass","inactiveClass","end"]),n=yn(()=>e.href),o=bn(n),r=He(),s=E(()=>{const a=n();if(a===void 0)return[!1,!1];const i=W(a.split(/[?#]/,1)[0]).toLowerCase(),l=decodeURI(W(r.pathname).toLowerCase());return[e.end?i===l:l.startsWith(i+"/")||l===i,i===l]});return(()=>{var a=Un();return Ee(a,Pe(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s()[0],[e.activeClass]:s()[0],...t.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),a})()}const _t=ge(),Gn=["title","meta"],Ye=[],Ke=["name","http-equiv","content","charset","media"].concat(["property"]),qe=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([o])=>t.includes(o)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function Wn(){{const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,o=>o.parentNode.removeChild(o))}const e=new Map;function t(n){if(n.ref)return n.ref;let o=document.querySelector(`[data-sm="${n.id}"]`);return o?(o.tagName.toLowerCase()!==n.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(n.tag)),o.removeAttribute("data-sm")):o=document.createElement(n.tag),o}return{addTag(n){if(Gn.indexOf(n.tag)!==-1){const s=n.tag==="title"?Ye:Ke,a=qe(n,s);e.has(a)||e.set(a,[]);let i=e.get(a),l=i.length;i=[...i,n],e.set(a,i);let c=t(n);n.ref=c,Ee(c,n.props);let p=null;for(var o=l-1;o>=0;o--)if(i[o]!=null){p=i[o];break}return c.parentNode!=document.head&&document.head.appendChild(c),p&&p.ref&&p.ref.parentNode&&document.head.removeChild(p.ref),l}let r=t(n);return n.ref=r,Ee(r,n.props),r.parentNode!=document.head&&document.head.appendChild(r),-1},removeTag(n,o){const r=n.tag==="title"?Ye:Ke,s=qe(n,r);if(n.ref){const a=e.get(s);if(a){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let i=o-1;i>=0;i--)a[i]!=null&&document.head.appendChild(a[i].ref)}a[o]=null,e.set(s,a)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const Xn=e=>{const t=Wn();return u(_t.Provider,{value:t,get children(){return e.children}})},yt=(e,t,n)=>(jn({tag:e,props:t,setting:n,id:Wt(),get name(){return t.name||t.property}}),null);function jn(e){const t=te(_t);if(!t)throw new Error("<MetaProvider /> should be in the tree");R(()=>{const n=t.addTag(e);K(()=>t.removeTag(e,n))})}const B=e=>yt("title",e,{escape:!0,close:!0}),ie=e=>yt("meta",e),bt=ge();function Bn(e){const[t,n]=I(!1),[o,r]=I(!1);M(()=>{localStorage.getItem("mohican_auth")==="Ww1433223@_unlocked"&&n(!0)});const s=i=>i==="Ww1433223@"?(n(!0),localStorage.setItem("mohican_auth","Ww1433223@_unlocked"),!0):!1,a=()=>{n(!1),localStorage.removeItem("mohican_auth"),r(!1)};return u(bt.Provider,{value:{isLoggedIn:t,login:s,logout:a,showLogoutModal:o,setShowLogoutModal:r},get children(){return e.children}})}function fe(){return te(bt)}var Yn=_("<nav id=navbar><ul class=nav-links><li></li><li></li><li></li><li></li><li>"),Kn=_('<button type=button class=nav-btn style="background:rgba(0, 206, 201, 0.15);border-color:var(--accent-2)">🔓 已解锁');function qn(){const{isLoggedIn:e,setShowLogoutModal:t}=fe(),n=He();return(()=>{var o=Yn(),r=o.firstChild,s=r.firstChild,a=s.nextSibling,i=a.nextSibling,l=i.nextSibling,c=l.nextSibling;return f(o,u($,{href:"/",class:"logo",children:"Mohican"}),r),f(s,u($,{href:"/",get class(){return n.pathname==="/"?"active":""},children:"首页"})),f(a,u($,{href:"/about",get class(){return n.pathname==="/about"?"active":""},children:"关于"})),f(i,u($,{href:"/projects",get class(){return n.pathname==="/projects"?"active":""},children:"项目"})),f(l,u($,{href:"/articles",get class(){return n.pathname.startsWith("/article")?"active":""},children:"实战"})),f(c,(()=>{var p=Y(()=>!!e());return()=>p()?(()=>{var d=Kn();return d.$$click=()=>t(!0),d})():u($,{href:"/login",class:"nav-btn",children:"🔒 解锁"})})()),o})()}q(["click"]);var Qn=_("<footer><p>© <!> Mohican. Made with ❤️ and lots of ☕");function Vn(){return(()=>{var e=Qn(),t=e.firstChild,n=t.firstChild,o=n.nextSibling;return o.nextSibling,f(t,()=>new Date().getFullYear(),o),e})()}var zn=_("<canvas id=particles>");function Zn(){let e,t;return M(()=>{const n=e.getContext("2d");let o=[],r={x:null,y:null};const s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};s(),window.addEventListener("resize",s);const a=p=>{r.x=p.clientX,r.y=p.clientY};document.addEventListener("mousemove",a);class i{constructor(){this.reset()}reset(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=Math.random()*2+.5,this.speedX=(Math.random()-.5)*.5,this.speedY=(Math.random()-.5)*.5,this.opacity=Math.random()*.5+.1}update(){if(this.x+=this.speedX,this.y+=this.speedY,r.x!==null){const d=r.x-this.x,m=r.y-this.y,h=Math.sqrt(d*d+m*m);if(h<120){const b=(120-h)/120;this.x-=d/h*b*1.5,this.y-=m/h*b*1.5}}(this.x<0||this.x>e.width||this.y<0||this.y>e.height)&&this.reset()}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fillStyle=`rgba(108, 92, 231, ${this.opacity})`,n.fill()}}const l=Math.min(120,Math.floor(e.width*e.height/12e3));for(let p=0;p<l;p++)o.push(new i);function c(){n.clearRect(0,0,e.width,e.height),o.forEach(p=>{p.update(),p.draw()}),t=requestAnimationFrame(c)}c(),K(()=>{window.removeEventListener("resize",s),document.removeEventListener("mousemove",a),cancelAnimationFrame(t)})}),(()=>{var n=zn(),o=e;return typeof o=="function"?Ne(o,n):e=n,n})()}var Jn=_('<div class=dialog-overlay><div class=dialog-box><h3>锁定私有服务</h3><p>确定要退出解锁状态吗？退出后访问内网与私有服务链接需重新输入密码。</p><div class=dialog-actions><button type=button class="btn btn-outline">取消</button><button type=button class="btn btn-primary">确认锁定');function eo(){const{showLogoutModal:e,setShowLogoutModal:t,logout:n}=fe();return e()?(()=>{var o=Jn(),r=o.firstChild,s=r.firstChild,a=s.nextSibling,i=a.nextSibling,l=i.firstChild,c=l.nextSibling;return o.$$click=()=>t(!1),r.$$click=p=>p.stopPropagation(),l.$$click=()=>t(!1),lt(c,"click",n,!0),o})():null}q(["click"]);var to=_("<div class=spotlight>"),no=_("<main>");function oo(e){return M(()=>{const t=n=>{document.documentElement.style.setProperty("--mouse-x",n.clientX+"px"),document.documentElement.style.setProperty("--mouse-y",n.clientY+"px")};window.addEventListener("mousemove",t),typeof window.__dismissBootSplash=="function"&&window.__dismissBootSplash(),K(()=>window.removeEventListener("mousemove",t))}),u(Bn,{get children(){return[to(),u(Zn,{}),u(qn,{}),(()=>{var t=no();return f(t,()=>e.children),t})(),u(Vn,{}),u(eo,{})]}})}function Q(){const e=document.querySelectorAll(".reveal"),t=new IntersectionObserver(n=>{n.forEach((o,r)=>{o.isIntersecting&&setTimeout(()=>{o.target.classList.add("visible")},r*80)})},{threshold:.15});e.forEach(n=>t.observe(n))}function vt(){document.querySelectorAll(".tilt-card").forEach(e=>{const t=e.querySelector(".tilt-card-inner")||e,n=r=>{const s=e.getBoundingClientRect(),a=r.clientX-s.left,i=r.clientY-s.top,l=s.width/2,c=s.height/2,p=(i-c)/c*-8,d=(a-l)/l*8;t.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${d}deg) scale(1.02)`},o=()=>{t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"};e.addEventListener("mousemove",n),e.addEventListener("mouseleave",o)})}var ro=_("<section class=hero><div class=hero-content><span class=hero-badge>👋 欢迎来到我的个人主页</span><h1><span class=gradient-text>Mohican</span></h1><div class=typewriter><span class=cursor></span></div><div class=hero-buttons></div></div><div class=scroll-indicator><span>"),so=_('<section class=explore-section><div class="section-header reveal"><h2><span class=gradient-text>探索更多</span></h2><p>了解我的自建服务矩阵与技术实战文章</p></div><div class=nav-cards-grid style="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr))">'),ao=_("<span class=nav-card-icon>"),io=_("<h3>"),lo=_("<p>");function Qe(){let e,t;M(()=>{Q(),vt();const o=["折腾党 & 自建派 🏠","全栈开发者 🚀","AI 探索者 🤖","开源贡献者 💡","终身学习者 📚"];let r=0,s=0,a=!1;function i(){if(!e)return;const l=o[r];a?(e.innerHTML=l.substring(0,s-1)+'<span class="cursor"></span>',s--):(e.innerHTML=l.substring(0,s+1)+'<span class="cursor"></span>',s++);let c=a?40:80;!a&&s===l.length?(c=2e3,a=!0):a&&s===0&&(a=!1,r=(r+1)%o.length,c=500),t=setTimeout(i,c)}i()}),K(()=>{t&&clearTimeout(t)});const n=[{icon:"👨‍💻",title:"关于我",desc:"了解我的背景、折腾经历与家庭数据中心",link:"/about"},{icon:"🚀",title:"精选项目 & 自建服务",desc:"飞牛私有云、Emby、HomeAssistant 与自建服务矩阵",link:"/projects"},{icon:"📝",title:"技术实战专栏",desc:"FnOS、Docker 容器编排、双栈网络与系统优化文章",link:"/articles"}];return[(()=>{var o=ro(),r=o.firstChild,s=r.firstChild,a=s.nextSibling,i=a.nextSibling,l=i.nextSibling,c=e;return typeof c=="function"?Ne(c,i):e=i,f(l,u($,{href:"/projects",class:"btn btn-primary",children:"🚀 探索项目"}),null),f(l,u($,{href:"/about",class:"btn btn-outline",children:"👨‍💻 关于我"}),null),o})(),(()=>{var o=so(),r=o.firstChild,s=r.nextSibling;return f(s,()=>n.map(a=>u($,{get href(){return a.link},class:"nav-card reveal tilt-card",get children(){return[(()=>{var i=ao();return f(i,()=>a.icon),i})(),(()=>{var i=io();return f(i,()=>a.title),i})(),(()=>{var i=lo();return f(i,()=>a.desc),i})()]}}))),o})()]}var co=_('<section id=about><div class=about-grid><div class="about-image-wrapper reveal"><div class=about-image>🖥️</div></div><div class="about-text reveal"><h3>折腾党 & 自建派</h3><p>我是 Mohican，一名热爱自建（Self-Hosting）与前沿技术的极客。以飞牛 NAS（FnOS）为核心枢纽，搭建起了覆盖私有云存储、Emby 影音娱乐、MoviePilot 自动化追剧、HomeAssistant 全屋智能以及 OpenClaw AI 大模型调度的家庭数字基础设施。</p><p>热衷于使用 Docker 容器编排各类现代化微服务，通过 Cloudflare Tunnel 与 Nginx 实现双栈统一域名接入，打造高可用、免折腾、极致体验的私人网络生态。</p><div class=stats-row><div class=stat-item><div class=stat-number data-target=38 data-suffix=+>0</div><div class=stat-label>Docker 容器</div></div><div class=stat-item><div class=stat-number data-target=20 data-suffix=+>0</div><div class=stat-label>自建服务</div></div><div class=stat-item><div class=stat-number data-target=10 data-suffix=+>0</div><div class=stat-label>开源仓库</div></div><div class=stat-item><div class=stat-number data-target=99 data-suffix=.9%>0</div><div class=stat-label>在线可用率</div></div></div></div></div><div class="contact-wrapper reveal"><div class=contact-info><h3>保持联系 🤝</h3><p>无论是自建经验交流、影视方案讨论、开源项目协作还是随便聊聊，都欢迎与我联系。</p><div class=contact-links><a href=mailto:769600627@qq.com class=contact-link-item><span class=contact-link-icon>📧</span><div class=contact-link-text><strong>Email</strong><span>769600627@qq.com</span></div></a><a href=https://github.com/769600627 target=_blank rel="noopener noreferrer"class=contact-link-item><span class=contact-link-icon>🐙</span><div class=contact-link-text><strong>GitHub</strong><span>github.com/769600627</span></div></a><a href=https://x.com/769600627 target=_blank rel="noopener noreferrer"class=contact-link-item><span class=contact-link-icon>🐦</span><div class=contact-link-text><strong>Twitter / X</strong><span>@769600627</span></div></a></div></div><form class=contact-form><div class=form-group><input type=text name=name placeholder=你的名字 required></div><div class=form-group><input type=email name=email placeholder=你的邮箱 required></div><div class=form-group><textarea name=message placeholder=想对我说点什么... required></textarea></div><button type=submit class="btn btn-primary">');function po(){const[e,t]=I({text:"🚀 发送消息",bg:""});let n=!1;M(()=>{Q();const r=document.querySelectorAll(".stat-number"),s=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const l=i.target,c=parseInt(l.dataset.target,10);let p=0;const d=Math.max(1,Math.floor(c/40)),m=setInterval(()=>{p+=d,p>=c&&(p=c,clearInterval(m)),l.textContent=p+(l.dataset.suffix||"+")},30);s.unobserve(l)}})},{threshold:.5});r.forEach(a=>s.observe(a))});const o=async r=>{if(r.preventDefault(),n)return;n=!0;const s=r.target;t({text:"⏳ 发送中...",bg:""});try{if((await fetch("https://formspree.io/f/placeholder",{method:"POST",body:new FormData(s),headers:{Accept:"application/json"}})).ok)t({text:"✅ 已发送！",bg:"linear-gradient(135deg, #00b894, #00cec9)"}),s.reset();else throw new Error("fail")}catch{t({text:"💌 感谢留言！可直接邮件联系",bg:"linear-gradient(135deg, #6c5ce7, #00cec9)"})}setTimeout(()=>{n=!1,t({text:"🚀 发送消息",bg:""})},4e3)};return(()=>{var r=co(),s=r.firstChild,a=s.nextSibling,i=a.firstChild,l=i.nextSibling,c=l.firstChild,p=c.nextSibling,d=p.nextSibling,m=d.nextSibling;return l.addEventListener("submit",o),f(m,()=>e().text),R(h=>ct(m,`width: 100%; justify-content: center; background: ${e().bg}`,h)),r})()}var mo=_('<section id=projects><div class="section-header reveal"><h2><span class=gradient-text>精选项目 & 自建服务</span></h2><p>家庭数据中心（Homelab）的核心服务矩阵与真实端口直达</p></div><div class="project-filters reveal"></div><div class=projects-grid>'),uo=_("<button type=button>"),ho=_('<div class="project-card reveal tilt-card"><div class=project-preview><div class=project-preview-bg></div></div><div class=project-info><h3></h3><p></p><div class=project-tech></div><div class=project-links>'),go=_("<span class=tech-tag>"),fo=_('<a target=_blank rel="noopener noreferrer"class=project-link-btn>🌐 公网访问'),wo=_('<a target=_blank rel="noopener noreferrer"class="project-link-btn internal">🔗 内网直达');function _o(){const{isLoggedIn:e}=fe();Me();const[t,n]=I("all"),o=[{icon:"🐮",name:"飞牛私有云 (FnOS)",desc:"家庭私有云存储、备份、相册与系统管理中枢，承载全部微服务体系。",category:"homelab",tech:["FnOS","NAS","私有云"],publicUrl:"https://nas.769600627.xyz",internalUrl:"http://192.168.2.188:5666"},{icon:"🎬",name:"Emby 媒体中心",desc:"4K HDR 影视私人影院，全端自动刮削海报墙与硬件解码流媒体。",category:"media",tech:["Emby","影视","流媒体"],publicUrl:"https://emby.769600627.xyz",internalUrl:"http://192.168.2.188:8096"},{icon:"🤖",name:"OpenClaw AI 平台",desc:"大模型智能体（Agent）平台与工作流自动化调度中心。",category:"ai",tech:["OpenClaw","AI","Agent"],publicUrl:"https://openclaw.769600627.xyz",internalUrl:"http://192.168.2.188:8088"},{icon:"🍿",name:"MoviePilot 观影自动化",desc:"全自动影视识别抓取、洗版追剧、BrushFlow 刷流与 Emby 自动整理入库。",category:"media",tech:["MoviePilot","PT","自动化"],publicUrl:"https://mp.769600627.xyz",internalUrl:"http://192.168.2.188:3000"},{icon:"🏠",name:"HomeAssistant 智能家居",desc:"全屋智能控制中枢，集成灯光、传感器、家电与自动化联动场景。",category:"homelab",tech:["HomeAssistant","IoT","智能家居"],publicUrl:"https://ha.769600627.xyz",internalUrl:"http://192.168.2.188:8123"},{icon:"🧩",name:"SubStore 订阅转换",desc:"高级订阅管理、协议转换与节点规则自动化处理工具。",category:"tools",tech:["SubStore","网络","规则"],publicUrl:"https://substore.769600627.xyz",internalUrl:"http://192.168.2.188:3301"},{icon:"📥",name:"Transmission 下载器",desc:"高性能 PT 做种保种客户端，深度整合 BrushFlow 差异化刷流策略。",category:"media",tech:["Transmission","PT","下载"],publicUrl:"https://tr.769600627.xyz",internalUrl:"http://192.168.2.188:9091"},{icon:"⚡",name:"qBittorrent 下载器",desc:"多功能种子下载器，支持多站点任务管理与高速下载队列。",category:"media",tech:["qBittorrent","BT/PT","下载"],publicUrl:"https://qb.769600627.xyz",internalUrl:"http://192.168.2.188:8080"},{icon:"🐉",name:"青龙面板 (Qinglong)",desc:"支持 Python / Node.js 的自动化定时任务与脚本管理系统。",category:"tools",tech:["Qinglong","自动化","定时任务"],publicUrl:"https://ql.769600627.xyz",internalUrl:"http://192.168.2.188:15700"},{icon:"🧭",name:"Sun-Panel 导航看板",desc:"极简自建服务统一入口看板，轻松掌握所有家庭服务的运行状态。",category:"tools",tech:["Sun-Panel","Dashboard","导航"],publicUrl:"https://nav.769600627.xyz",internalUrl:"http://192.168.2.188:3002"},{icon:"🎵",name:"ByteMuse 音乐服务",desc:"私人高保真云端音乐与有声读物流媒体播放服务。",category:"media",tech:["ByteMuse","音乐","流媒体"],publicUrl:"https://music.769600627.xyz",internalUrl:"http://192.168.2.188:8043"},{icon:"💬",name:"VoceChat 私有即时通讯",desc:"轻量安全、支持端对端通信的自托管聊天室与通知系统。",category:"homelab",tech:["VoceChat","IM","私有通讯"],publicUrl:"https://chat.769600627.xyz",internalUrl:"http://192.168.2.188:3111"},{icon:"🛠️",name:"IT-Tools 开发者工具箱",desc:"开发者必备工具集合（编解码、JWT 调试、JSON 格式化、网络测试）。",category:"tools",tech:["IT-Tools","开发工具","工具箱"],publicUrl:"https://tools.769600627.xyz",internalUrl:"http://192.168.2.188:8011"},{icon:"🌐",name:"AriaNg 下载管理",desc:"现代化 Aria2 Web 前端，支持全格式多线程高速下载管理。",category:"tools",tech:["Aria2","AriaNg","下载"],publicUrl:"https://ariang.769600627.xyz",internalUrl:"http://192.168.2.188:6880"},{icon:"🧠",name:"Grok2API / CliproxyAPI",desc:"大语言模型 API 反向代理网关与格式统一转换接口。",category:"ai",tech:["API网关","LLM","代理"],publicUrl:"https://api.769600627.xyz",internalUrl:"http://192.168.2.188:8000"}],r=[{key:"all",name:"全部服务"},{key:"homelab",name:"自建系统"},{key:"media",name:"影视媒体"},{key:"ai",name:"AI 智能"},{key:"tools",name:"实用工具"}];M(()=>{Q(),vt()});const s=()=>t()==="all"?o:o.filter(a=>a.category===t());return(()=>{var a=mo(),i=a.firstChild,l=i.nextSibling,c=l.nextSibling;return f(l,()=>r.map(p=>(()=>{var d=uo();return d.$$click=()=>n(p.key),f(d,()=>p.name),R(()=>it(d,`filter-btn ${t()===p.key?"active":""}`)),d})())),f(c,()=>s().map(p=>(()=>{var d=ho(),m=d.firstChild,h=m.firstChild,b=m.nextSibling,g=b.firstChild,w=g.nextSibling,x=w.nextSibling,S=x.nextSibling;return f(h,()=>p.icon),f(g,()=>p.name),f(w,()=>p.desc),f(x,()=>p.tech.map(A=>(()=>{var C=go();return f(C,A),C})())),f(S,(()=>{var A=Y(()=>!!e());return()=>A()?[(()=>{var C=fo();return R(()=>J(C,"href",p.publicUrl)),C})(),(()=>{var C=wo();return R(()=>J(C,"href",p.internalUrl)),C})()]:u($,{href:"/login",class:"project-link-btn",style:"width: 100%; justify-content: center; background: rgba(108, 92, 231, 0.15); border-color: rgba(108, 92, 231, 0.35); color: var(--accent-2);",children:"🔒 解锁后显示访问链接"})})()),d})())),a})()}q(["click"]);const xt=[{slug:"fnos-hermes-store-boot",title:"飞牛系统商店版 Hermes 开机引导实战：oneshot 点火 + wrapper 共存（可完整复刻）",subtitle:"trim.hermes · oneshot · KillMode=none · 一键安装脚本 · Dashboard :19119 · Gateway :18642 · NO_PROXY 精确 IP",date:"2026-07-21",tags:["FnOS","Hermes","systemd","App Center","Gateway","oneshot","维护"],summary:"飞牛系统（FnOS）商店版 Hermes 不是「随便起一个 Python 进程」这么简单。商店侧由 App Center 拉起 <code>trim-hermes-wrapper</code>（Go），wrapper 在起 Dashboard 前会对 <code>:18642</code>（及必要时 <code>:19119</code>）做<strong>硬绑定端口预检</strong>。若 systemd 用常驻 unit 长期占住 Gateway，面板常见现象是：",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>飞牛系统商店版 Hermes 开机引导实战：oneshot 点火 + wrapper 共存（可完整复刻）</h1><p class=article-subtitle>trim.hermes · oneshot · KillMode=none · 一键安装脚本 · Dashboard :19119 · Gateway :18642 · NO_PROXY 精确 IP</p><div class=article-meta><span class=article-date>2026-07-21</span><div class=article-tags><span class=tech-tag>FnOS</span><span class=tech-tag>Hermes</span><span class=tech-tag>systemd</span><span class=tech-tag>App Center</span><span class=tech-tag>Gateway</span><span class=tech-tag>oneshot</span><span class=tech-tag>维护</span></div></div></div><div class=article-content><h2>一、写在前面：本文解决什么问题</h2><p>飞牛系统（FnOS）商店版 Hermes 不是「随便起一个 Python 进程」这么简单。商店侧由 App Center 拉起 <code>trim-hermes-wrapper</code>（Go），wrapper 在起 Dashboard 前会对 <code>:18642</code>（及必要时 <code>:19119</code>）做<strong>硬绑定端口预检</strong>。若 systemd 用常驻 unit 长期占住 Gateway，面板常见现象是：</p><ul><li>面板 “Hermes could not start” / address already in use</li><li>wrapper 预检失败，Dashboard 起不来或页面 502</li><li>Gateway 其实在跑，但商店生命周期与 systemd 互抢端口</li></ul><p><strong>2026-07-21 修订说明：</strong>早期文章使用常驻 <code>trim-hermes-gateway.service</code> + drop-in <code>20-boot-order.conf</code>（等 Dashboard 再起 Gateway、<code>Restart=on-failure</code>）。真实踩坑后确认：<strong>常驻监管 Gateway 与 wrapper 的 preflight 硬 bind 本质冲突</strong>。现行稳定方案改为与商店版 OpenClaw 同思路的<strong>开机 oneshot 点火</strong>：</p><ul><li>unit：<code>hermes-gateway-boot.service</code>（<code>Type=oneshot</code>，<code>KillMode=none</code>）</li><li>脚本：<code>/usr/local/bin/hermes-gateway-boot.sh</code></li><li>以商店用户 <code>trim.hermes</code> 走 wrapper 路径尽量保住 Dashboard 归属，再用原生 CLI 起 Gateway</li><li>网关 detached 后由 Hermes 自己管（lock / state），oneshot 不再 <code>Restart=always</code> 抢端口</li></ul><p>本文给出可迁移到其它 FnOS 主机的完整路径、unit、脚本、NO_PROXY 坑、验收矩阵与回滚清单。域名、Token、真实内网地址已脱敏；示例 <code>192.168.x.x</code>、<code>&lt;TOKEN&gt;</code> 请替换为你的环境。</p><p>对照 OpenClaw 商店引导见 <!>：两边都是「systemd 只点火，生命周期尽量落在商店路径内」。</p><h2>二、目标架构（2026-07-21 现行）</h2><pre>FnOS App Center / trim_app_center
  → wrapper: trim-hermes-wrapper
       --socket  /vol1/@appcenter/trim.hermes/run/trim-hermes.sock
       --dashboard-host 127.0.0.1
       --dashboard-port 19119
       --app-root  /vol1/@appcenter/trim.hermes
       --data-root /vol1/@appdata/trim.hermes
    → preflightRuntimePorts（硬 bind 探测 :18642，必要时也探 :19119）
    → Dashboard: 127.0.0.1:19119   （理想：ppid = wrapper）

systemd oneshot: hermes-gateway-boot.service （enabled）
  Type=oneshot · RemainAfterExit=yes · KillMode=none
  User/Group=trim.hermes
  WorkingDirectory=.../workspace
  ExecStart=/usr/local/bin/hermes-gateway-boot.sh
  脚本顺序：
    1) 等 wrapper unix sock + health
    2) 若 Dashboard 未起 / 归属不对 → 短暂释放 :18642 → 走 wrapper admin 入口拉起面板
    3) 若 :18642 未 LISTEN → setsid hermes gateway run --replace --accept-hooks
    4) 写 gateway.lock / gateway_state.json；health 200 后 exit 0
    5) 不再常驻监管；stop unit 不得杀已 detached 的网关
       （RemainAfterExit=yes 时 process 可能仍显示在 unit cgroup 下，但 PPid 可为 1；以 stop 后是否存活验收）

Hermes Gateway
  → 127.0.0.1:18642
  → HERMES_HOME=/vol1/@appdata/trim.hermes/hermes
  → 原生指纹：python3.11.real -m hermes_cli.main gateway run --replace --accept-hooks
  → Dashboard 理想态：ppid = trim-hermes-wrapper；Gateway 理想态：ppid=1 自管
</pre><p>关键设计原则：</p><ul><li><strong>oneshot 点火，不常驻监管</strong>：长期 <code>Restart=always</code> 占着 <code>:18642</code> 必撞 preflight。</li><li><strong>KillMode=none</strong>：oneshot 退出/stop 时默认 control-group 会杀子进程；网关必须继续活。systemd 会告警 deprecation，但当前仍是让网关存活的必要项；勿改回 control-group。</li><li><strong>Dashboard 归商店 wrapper</strong>：不要另起常驻 <code>hermes-dashboard.service</code>（只会把碰撞从 18642 挪到 19119）。</li><li><strong>Gateway 归 Hermes 原生 lock</strong>：同用户、同 CLI、同状态文件，商店后续可识别/接管。</li><li><strong>先尽量满足 wrapper，再起 Gateway</strong>：必要时短暂释放 <code>:18642</code> 让 preflight 过。</li><li><strong>NO_PROXY 写精确 IP</strong>：Python httpx/requests <strong>不认 CIDR / 通配</strong>，见第八节。</li><li><strong>Gateway 优先 loopback</strong>：外网走反代 / Tunnel，不直暴进程端口。</li></ul><h2>三、路径与运行环境定位</h2><p>复刻前先在目标机核对（卷名可能略有差异）：</p><pre># 商店应用入口
/var/apps/trim.hermes
  target -> /vol1/@appcenter/trim.hermes
  var    -> /vol1/@appdata/trim.hermes
  home   -> /vol1/@apphome/trim.hermes
  etc    -> /vol1/@appconf/trim.hermes

# 程序 / 运行时
/vol1/@appcenter/trim.hermes/
  wrapper/trim-hermes-wrapper
  runtime/python/bin/hermes
  runtime/python/bin/python3.11.real
  runtime/python/node/bin/...
  run/trim-hermes.sock

# 数据（配置、日志、工作区）
/vol1/@appdata/trim.hermes/
  hermes/                 # HERMES_HOME
  hermes/config.yaml
  hermes/.env
  hermes/logs/gateway.log
  hermes/logs/gateway-boot.log
  hermes/gateway.lock
  hermes/gateway_state.json
  home/
  workspace/

# systemd（现行两件套）
/etc/systemd/system/hermes-gateway-boot.service
/usr/local/bin/hermes-gateway-boot.sh

# 已弃用（勿再启用）
# /etc/systemd/system/trim-hermes-gateway.service
# /etc/systemd/system/trim-hermes-gateway.service.d/20-boot-order.conf
# /etc/systemd/system/hermes-dashboard.service</pre><p>端口与用户约定：</p><pre>| 组件              | 地址 / 身份              | 说明 |
|-------------------|--------------------------|------|
| Hermes Dashboard  | 127.0.0.1:19119          | wrapper 拉起的面板 |
| Hermes Gateway    | 127.0.0.1:18642          | 消息网关 / API |
| wrapper unix sock | .../run/trim-hermes.sock | App Center 通信 |
| 运行用户          | trim.hermes              | 主组常见为 AppUsers，辅组含 trim.hermes；uid/gid 以命令 id trim.hermes 为准 |
| unit Group        | Group=trim.hermes        | 对齐商店运行时 gid，避免写权限漂移 |</pre><h2>四、根因时间线：为什么旧方案会翻车</h2><h3>4.1 wrapper 硬 bind 预检</h3><ol><li><code>trim_app_center</code> 拉起 <code>trim-hermes-wrapper</code>。</li><li>点控制面板 / ensureDashboard 时执行 <code>preflightRuntimePorts</code>：对 <code>:18642</code>（必要时也有 <code>:19119</code>）做<strong>硬 bind 探测</strong>。</li><li>若 Gateway 已由常驻 systemd 占住 <code>:18642</code> → 预检失败 → “already in use / could not start”。</li><li>即便 Gateway 健康、消息渠道已 connected，面板仍可能认为启动失败。</li></ol><h3>4.2 常驻 unit 的两个死结</h3><ul><li><strong>Restart=always 抢端口</strong>：unit 一直管着进程，wrapper 永远过不了 preflight。</li><li><strong>TimeoutStartSec 与 ExecStartPre 互相打架</strong>（旧 drop-in）：Pre 循环等 Dashboard 90s，但 unit <code>TimeoutStartSec=45</code> 会提前杀掉 Pre，冷启动「等不到就兜底启动」永远触发不了。</li></ul><h3>4.3 常驻 Dashboard 也是错方向</h3><p>有人想「先常驻 :19119 再起网关」——wrapper 点面板时两端都可能硬 bind，结果只是把红条从 <code>:18642 already in use</code> 变成 <code>:19119 already in use</code>。已否决。</p><h3>4.4 正确顺序（实测成功路径）</h3><pre>trim_app_center / wrapper sock 就绪
  → （如需）短暂释放 :18642 让 preflight 能 bind-probe
  → 经 wrapper admin 路径拉起 Dashboard（ppid 最好是 wrapper）
  → hermes CLI: gateway run --replace --accept-hooks
  → :18642 LISTEN + /health 200 + gateway.lock
  → oneshot 退出；网关 ppid=1 或自管，继续活着</pre><h2>五、可复刻配置（其它主机按此落地）</h2><h3>5.1 清理冲突残留（首次必做）</h3><pre># 停掉并禁用旧常驻方案（若存在）
sudo systemctl disable --now trim-hermes-gateway.service 2>/dev/null || true
sudo systemctl disable --now hermes-dashboard.service 2>/dev/null || true
sudo systemctl disable --now hermes-gateway.service 2>/dev/null || true

# 建议整体移走而非直接 rm
sudo mkdir -p /root/backup/hermes-residual-$(date +%Y%m%d)
sudo mv /etc/systemd/system/trim-hermes-gateway.service \\\\
        /etc/systemd/system/trim-hermes-gateway.service.d \\\\
        /etc/systemd/system/hermes-dashboard.service \\\\
        /root/backup/hermes-residual-$(date +%Y%m%d)/ 2>/dev/null || true
sudo systemctl daemon-reload</pre><h3>5.2 oneshot unit</h3><p>路径：<code>/etc/systemd/system/hermes-gateway-boot.service</code></p><pre>[Unit]
Description=Hermes boot assist (OpenClaw-style via shop wrapper + gateway CLI)
After=network-online.target trim_app_center.service trim_connect.service
Wants=network-online.target

[Service]
Type=oneshot
RemainAfterExit=yes
User=trim.hermes
Group=trim.hermes
# 关键：oneshot 退出后网关必须继续活；默认 control-group 会在 stop/清理时杀子进程
KillMode=none
WorkingDirectory=/vol1/@appdata/trim.hermes/workspace
# 脚本幂等：端口已起则跳过；始终跑一遍以便必要时修 Dashboard 归属
ExecStart=/usr/local/bin/hermes-gateway-boot.sh
TimeoutStartSec=180

[Install]
WantedBy=multi-user.target</pre><h3>5.3 boot 脚本（核心，完整可复用）</h3><p>脚本里的 <code>X-Trim-Isadmin: true</code> 是飞牛商店 wrapper 的本地 admin 头，用于触发控制入口拉起 Dashboard；<strong>不是</strong> API Token/密钥，可写在文档里。</p><p>路径：<code>/usr/local/bin/hermes-gateway-boot.sh</code>，<code>chmod 755</code>，属主 root 即可（由 unit 切到 <code>trim.hermes</code> 执行）。代理地址请按你的出口修改；没有代理可保留空 fallback 或删掉相关行。</p><pre>#!/bin/bash
# Hermes boot assist — same idea as OpenClaw store bootstrap:
# prefer shop control path so the panel is happy, then ensure gateway is up.
#
# Shop Hermes constraint:
#   Go wrapper preflightRuntimePorts hard-binds :18642 before starting dashboard.
#   Dashboard started by bare CLI is NOT owned by wrapper → opening panel can fail.
#   Correct order:
#     1) wait for wrapper sock
#     2) ensure dashboard via wrapper admin hit (needs :18642 free at that moment)
#     3) ensure gateway via hermes CLI (same user as shop)
set -euo pipefail

GW_PORT=18642
DASH_PORT=19119
APP_ROOT=/vol1/@appcenter/trim.hermes
HERMES_ROOT=/vol1/@appdata/trim.hermes
HERMES_HOME=\\\${HERMES_ROOT}/hermes
HOME_DIR=\\\${HERMES_ROOT}/home
WORKSPACE=\\\${HERMES_ROOT}/workspace
PY_BIN=\\\${APP_ROOT}/runtime/python/bin
NODE_BIN=\\\${APP_ROOT}/runtime/python/node/bin
HERMES_BIN=\\\${PY_BIN}/hermes
PYTHON=\\\${PY_BIN}/python3.11.real
ENV_FILE=\\\${HERMES_HOME}/.env
LOG_DIR=\\\${HERMES_HOME}/logs
LOG_FILE=\\\${LOG_DIR}/gateway-boot.log
WRAPPER_SOCK=\\\${APP_ROOT}/run/trim-hermes.sock

mkdir -p "\\\${LOG_DIR}" "\\\${WORKSPACE}"
chown trim.hermes:trim.hermes "\\\${LOG_DIR}" 2>/dev/null || true
exec >>"\\\${LOG_FILE}" 2>&amp;1
echo "===== $(date '+%F %T') hermes-gateway-boot start ====="

port_up() {
  local p="$1"
  ss -lntH "sport = :\\\${p}" 2>/dev/null | grep -q LISTEN
}

wait_port() {
  local p="$1" label="$2" max="\\\${3:-60}"
  local i
  for i in $(seq 1 "\\\${max}"); do
    if port_up "\\\${p}"; then
      echo "\\\${label} ready on :\\\${p} after \\\${i}s"
      return 0
    fi
    sleep 1
  done
  echo "ERROR: \\\${label} did not bind :\\\${p} within \\\${max}s"
  return 1
}

export HOME="\\\${HOME_DIR}"
export HERMES_HOME="\\\${HERMES_HOME}"
export USER=trim.hermes
export LOGNAME=trim.hermes
export PATH="\\\${PY_BIN}:\\\${NODE_BIN}:\\\${HERMES_HOME}/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
export LD_LIBRARY_PATH="\\\${PY_BIN}/../system-libs"
export HERMES_MANAGED_BY=trim.hermes
export HERMES_NODE="\\\${NODE_BIN}/node"
export HERMES_WRITE_SAFE_ROOT="\\\${WORKSPACE}"
export HERMES_NONINTERACTIVE=1
export HERMES_QUIET=1
export TRIM_APPNAME=trim.hermes
export TRIM_APPDEST="\\\${APP_ROOT}"
export TRIM_HERMES_DATA_ROOT="\\\${HERMES_ROOT}"
export TRIM_PKGVAR="\\\${HERMES_ROOT}"
export TRIM_UID=$(id -u trim.hermes)
export TRIM_GID=$(getent group trim.hermes | cut -d: -f3)
export TRIM_USERNAME=trim.hermes
export TRIM_GROUPNAME=trim.hermes
export TRIM_RUN_UID=\\\${TRIM_UID}
export TRIM_RUN_GID=\\\${TRIM_GID}
export TRIM_RUN_USERNAME=trim.hermes
export TRIM_RUN_GROUPNAME=trim.hermes
export TRIM_SERVICE_PORT=\\\${DASH_PORT}

if [ -f "\\\${ENV_FILE}" ]; then
  set -a
  . "\\\${ENV_FILE}"
  set +a
  echo "loaded env_file=\\\${ENV_FILE}"
fi

# re-pin after sourcing .env
export HOME="\\\${HOME_DIR}"
export HERMES_HOME="\\\${HERMES_HOME}"
export HERMES_MANAGED_BY=trim.hermes
export HERMES_NODE="\\\${NODE_BIN}/node"
export HERMES_WRITE_SAFE_ROOT="\\\${WORKSPACE}"
export PATH="\\\${PY_BIN}:\\\${NODE_BIN}:\\\${HERMES_HOME}/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
export LD_LIBRARY_PATH="\\\${PY_BIN}/../system-libs"

# 代理：按你的内网出口改；NO_PROXY 必须精确 IP（见第八节）
: "\\\${HTTP_PROXY:=http://192.168.x.x:7890}"
: "\\\${HTTPS_PROXY:=http://192.168.x.x:7890}"
: "\\\${http_proxy:=\\\${HTTP_PROXY}}"
: "\\\${https_proxy:=\\\${HTTPS_PROXY}}"
: "\\\${NO_PROXY:=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1}"
: "\\\${no_proxy:=\\\${NO_PROXY}}"
export HTTP_PROXY HTTPS_PROXY http_proxy https_proxy NO_PROXY no_proxy

cd "\\\${WORKSPACE}"
export PWD="\\\${WORKSPACE}"
export TERMINAL_CWD="\\\${WORKSPACE}"

if [ -x "\\\${HERMES_BIN}" ]; then
  HCMD=("\\\${HERMES_BIN}")
else
  HCMD=("\\\${PYTHON}" -m hermes_cli.main)
fi
echo "hermes_cmd=\\\${HCMD[*]}"

# 0) Wait shop wrapper
if [ ! -S "\\\${WRAPPER_SOCK}" ]; then
  echo "waiting for wrapper sock"
  for i in $(seq 1 90); do
    [ -S "\\\${WRAPPER_SOCK}" ] &amp;&amp; break
    sleep 1
  done
fi
if [ -S "\\\${WRAPPER_SOCK}" ] &amp;&amp; curl -fsS --unix-socket "\\\${WRAPPER_SOCK}" -m 3 http://localhost/health >/dev/null 2>&amp;1; then
  echo "wrapper health OK"
else
  echo "WARN: wrapper not healthy yet"
fi

dashboard_owned_by_wrapper() {
  port_up "\\\${DASH_PORT}" || return 1
  local dpid wpid ppid
  dpid=$(ss -lntp "sport = :\\\${DASH_PORT}" 2>/dev/null | sed -n 's/.*pid=\\\\([0-9]*\\\\).*/\\\\1/p' | head -1)
  [ -n "\\\${dpid}" ] || return 1
  wpid=$(pgrep -f 'trim-hermes-wrapper' | head -1 || true)
  [ -n "\\\${wpid}" ] || return 1
  ppid=$(awk '/^PPid:/{print $2}' "/proc/\\\${dpid}/status" 2>/dev/null || true)
  [ "\\\${ppid}" = "\\\${wpid}" ]
}

stop_gateway_briefly() {
  echo "temporarily stopping gateway so wrapper preflight can bind-probe :\\\${GW_PORT}"
  "\\\${HCMD[@]}" gateway stop >>"\\\${LOG_DIR}/gateway-boot.log" 2>&amp;1 || true
  local i
  for i in $(seq 1 20); do
    port_up "\\\${GW_PORT}" || return 0
    sleep 1
  done
  fuser -k "\\\${GW_PORT}/tcp" 2>/dev/null || true
  sleep 1
}

start_dashboard_via_wrapper() {
  if [ ! -S "\\\${WRAPPER_SOCK}" ]; then
    echo "ERROR: no wrapper sock; cannot start shop dashboard"
    return 1
  fi
  if port_up "\\\${GW_PORT}"; then
    stop_gateway_briefly
  fi
  echo "starting dashboard via shop wrapper admin API"
  curl -fsS --unix-socket "\\\${WRAPPER_SOCK}" -m 90 \\\\
    -H 'X-Trim-Isadmin: true' \\\\
    -o /tmp/hermes-boot-panel.html \\\\
    "http://localhost/app/trim-hermes/" || true
  if grep -q 'Hermes could not start' /tmp/hermes-boot-panel.html 2>/dev/null; then
    echo "WARN: wrapper returned could-not-start page"
  fi
  wait_port "\\\${DASH_PORT}" dashboard 45
}

start_gateway_cli() {
  if port_up "\\\${GW_PORT}"; then
    echo "gateway :\\\${GW_PORT} already LISTEN — skip"
    return 0
  fi
  echo "starting gateway via hermes CLI"
  setsid "\\\${HCMD[@]}" gateway run --replace --accept-hooks \\\\
    >>"\\\${LOG_DIR}/gateway.log" 2>&amp;1 &lt;/dev/null &amp;
  echo "spawned gateway setsid_pid=$!"
  wait_port "\\\${GW_PORT}" gateway 60
  if [ -f "\\\${HERMES_HOME}/gateway.lock" ]; then
    echo "gateway.lock=$(cat "\\\${HERMES_HOME}/gateway.lock")"
  fi
  curl -fsS -m 3 "http://127.0.0.1:\\\${GW_PORT}/health" >/dev/null 2>&amp;1 &amp;&amp; echo "gateway health 200"
}

# 1) Ensure dashboard
if dashboard_owned_by_wrapper; then
  echo "dashboard already owned by wrapper — ok"
elif port_up "\\\${DASH_PORT}"; then
  echo "dashboard on :\\\${DASH_PORT} but not wrapper-owned — leave as-is (do not kill UI)"
else
  start_dashboard_via_wrapper || {
    echo "ERROR: failed to start shop dashboard"
    exit 1
  }
fi

# 2) Ensure gateway
start_gateway_cli || {
  echo "ERROR: failed to start gateway"
  exit 1
}

echo "final:"
ss -lntp "sport = :\\\${DASH_PORT}" 2>/dev/null | head -n 2 || true
ss -lntp "sport = :\\\${GW_PORT}" 2>/dev/null | head -n 2 || true
echo "boot assist done"
exit 0</pre><h3>5.4 启用与加载</h3><pre>sudo install -m 755 hermes-gateway-boot.sh /usr/local/bin/hermes-gateway-boot.sh
sudo install -m 644 hermes-gateway-boot.service /etc/systemd/system/hermes-gateway-boot.service
sudo systemctl daemon-reload
sudo systemctl enable hermes-gateway-boot.service

# 热验证
sudo systemctl start hermes-gateway-boot.service
systemctl status hermes-gateway-boot.service --no-pager
# 期望：active (exited)，且 :18642 已 LISTEN

# 冷启动验证（最能暴露顺序问题）
# sudo reboot</pre><h2>六、从零到可跑：一键安装脚本（其它主机直接复刻）</h2><p>下面脚本把<strong>清理旧常驻 unit → 写入 oneshot 两件套 → enable/start → 最小验收</strong>串成一条。在已安装商店版 Hermes 的 FnOS 上以 <code>root</code> 执行。路径默认按 <code>/vol1/@appcenter|@appdata/trim.hermes</code>；卷名不同时先改顶部变量。</p><p><strong>执行前请改 3 处：</strong></p><ol><li><code>HTTP_PROXY_DEFAULT</code> / <code>HTTPS_PROXY_DEFAULT</code>：你的内网代理；无代理可留空字符串 <code>""</code>。</li><li><code>NO_PROXY_DEFAULT</code>：写成<strong>精确 IP 列表</strong>（含本机、内网 API、代理网关），禁止 CIDR/通配。</li><li>若 Dashboard/Gateway 端口不是 <code>19119/18642</code>，改 <code>DASH_PORT</code> / <code>GW_PORT</code>。</li></ol><pre>#!/bin/bash
# install-hermes-gateway-boot.sh
# FnOS 商店版 Hermes oneshot 开机引导 — 一键落地
# 要求：已商店安装 trim.hermes；以 root 运行
set -euo pipefail

# ========== 按环境修改 ==========
APP_ROOT=/vol1/@appcenter/trim.hermes
HERMES_ROOT=/vol1/@appdata/trim.hermes
GW_PORT=18642
DASH_PORT=19119
# 无代理：两行都写成空 ""
HTTP_PROXY_DEFAULT="http://192.168.x.x:7890"
HTTPS_PROXY_DEFAULT="http://192.168.x.x:7890"
# 精确 IP，勿用 CIDR/通配；按你的内网改
NO_PROXY_DEFAULT="localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1"
# ========== 一般不用改 ==========
HERMES_HOME=\\\${HERMES_ROOT}/hermes
WORKSPACE=\\\${HERMES_ROOT}/workspace
UNIT=/etc/systemd/system/hermes-gateway-boot.service
SCRIPT=/usr/local/bin/hermes-gateway-boot.sh
BACKUP_DIR=/root/backup/hermes-residual-$(date +%Y%m%d-%H%M%S)

die() { echo "ERROR: $*" >&amp;2; exit 1; }
need() { command -v "$1" >/dev/null 2>&amp;1 || die "缺少命令: $1"; }

[ "$(id -u)" -eq 0 ] || die "请用 root 执行"
need ss; need curl; need systemctl; need install

id trim.hermes >/dev/null 2>&amp;1 || die "用户 trim.hermes 不存在（请先商店安装 Hermes）"
[ -d "\\\${APP_ROOT}" ] || die "APP_ROOT 不存在: \\\${APP_ROOT}"
[ -d "\\\${HERMES_ROOT}" ] || die "HERMES_ROOT 不存在: \\\${HERMES_ROOT}"
[ -x "\\\${APP_ROOT}/runtime/python/bin/hermes" ] || [ -x "\\\${APP_ROOT}/runtime/python/bin/python3.11.real" ] \\\\
  || die "找不到 hermes runtime（检查商店安装是否完整）"

echo "==> 1) 备份并禁用冲突常驻 unit"
mkdir -p "\\\${BACKUP_DIR}"
for u in trim-hermes-gateway hermes-dashboard hermes-gateway; do
  systemctl disable --now "\\\${u}.service" 2>/dev/null || true
done
for f in \\\\
  /etc/systemd/system/trim-hermes-gateway.service \\\\
  /etc/systemd/system/hermes-dashboard.service \\\\
  /etc/systemd/system/hermes-gateway.service
do
  [ -e "$f" ] &amp;&amp; mv "$f" "\\\${BACKUP_DIR}/" || true
done
[ -d /etc/systemd/system/trim-hermes-gateway.service.d ] \\\\
  &amp;&amp; mv /etc/systemd/system/trim-hermes-gateway.service.d "\\\${BACKUP_DIR}/" || true
# 用户级残留
for f in /etc/systemd/user/hermes-gateway.service \\\\
         /home/*/ .config/systemd/user/hermes-gateway.service; do
  true
done
systemctl daemon-reload

echo "==> 2) 写入 oneshot unit: \\\${UNIT}"
install -d -m 755 /etc/systemd/system
cat > "\\\${UNIT}" &lt;&lt;EOF
[Unit]
Description=Hermes boot assist (OpenClaw-style via shop wrapper + gateway CLI)
After=network-online.target trim_app_center.service trim_connect.service
Wants=network-online.target

[Service]
Type=oneshot
RemainAfterExit=yes
User=trim.hermes
Group=trim.hermes
KillMode=none
WorkingDirectory=\\\${WORKSPACE}
ExecStart=\\\${SCRIPT}
TimeoutStartSec=180

[Install]
WantedBy=multi-user.target
EOF

echo "==> 3) 写入 boot 脚本: \\\${SCRIPT}"
cat > "\\\${SCRIPT}" &lt;&lt;'EOS'
#!/bin/bash
# Hermes boot assist — shop wrapper path + native gateway CLI
set -euo pipefail

GW_PORT=__GW_PORT__
DASH_PORT=__DASH_PORT__
APP_ROOT=__APP_ROOT__
HERMES_ROOT=__HERMES_ROOT__
HERMES_HOME=\\\${HERMES_ROOT}/hermes
HOME_DIR=\\\${HERMES_ROOT}/home
WORKSPACE=\\\${HERMES_ROOT}/workspace
PY_BIN=\\\${APP_ROOT}/runtime/python/bin
NODE_BIN=\\\${APP_ROOT}/runtime/python/node/bin
HERMES_BIN=\\\${PY_BIN}/hermes
PYTHON=\\\${PY_BIN}/python3.11.real
ENV_FILE=\\\${HERMES_HOME}/.env
LOG_DIR=\\\${HERMES_HOME}/logs
LOG_FILE=\\\${LOG_DIR}/gateway-boot.log
WRAPPER_SOCK=\\\${APP_ROOT}/run/trim-hermes.sock

mkdir -p "\\\${LOG_DIR}" "\\\${WORKSPACE}"
chown trim.hermes:trim.hermes "\\\${LOG_DIR}" 2>/dev/null || true
exec >>"\\\${LOG_FILE}" 2>&amp;1
echo "===== $(date '+%F %T') hermes-gateway-boot start ====="

port_up() {
  local p="$1"
  ss -lntH "sport = :\\\${p}" 2>/dev/null | grep -q LISTEN
}

wait_port() {
  local p="$1" label="$2" max="\\\${3:-60}" i
  for i in $(seq 1 "\\\${max}"); do
    if port_up "\\\${p}"; then
      echo "\\\${label} ready on :\\\${p} after \\\${i}s"
      return 0
    fi
    sleep 1
  done
  echo "ERROR: \\\${label} did not bind :\\\${p} within \\\${max}s"
  return 1
}

export HOME="\\\${HOME_DIR}"
export HERMES_HOME="\\\${HERMES_HOME}"
export USER=trim.hermes
export LOGNAME=trim.hermes
export PATH="\\\${PY_BIN}:\\\${NODE_BIN}:\\\${HERMES_HOME}/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
export LD_LIBRARY_PATH="\\\${PY_BIN}/../system-libs"
export HERMES_MANAGED_BY=trim.hermes
export HERMES_NODE="\\\${NODE_BIN}/node"
export HERMES_WRITE_SAFE_ROOT="\\\${WORKSPACE}"
export HERMES_NONINTERACTIVE=1
export HERMES_QUIET=1
export TRIM_APPNAME=trim.hermes
export TRIM_APPDEST="\\\${APP_ROOT}"
export TRIM_HERMES_DATA_ROOT="\\\${HERMES_ROOT}"
export TRIM_PKGVAR="\\\${HERMES_ROOT}"
export TRIM_UID=$(id -u trim.hermes)
export TRIM_GID=$(getent group trim.hermes | cut -d: -f3)
export TRIM_USERNAME=trim.hermes
export TRIM_GROUPNAME=trim.hermes
export TRIM_RUN_UID=\\\${TRIM_UID}
export TRIM_RUN_GID=\\\${TRIM_GID}
export TRIM_RUN_USERNAME=trim.hermes
export TRIM_RUN_GROUPNAME=trim.hermes
export TRIM_SERVICE_PORT=\\\${DASH_PORT}

if [ -f "\\\${ENV_FILE}" ]; then
  set -a
  # shellcheck disable=SC1090
  . "\\\${ENV_FILE}"
  set +a
  echo "loaded env_file=\\\${ENV_FILE}"
fi

export HOME="\\\${HOME_DIR}"
export HERMES_HOME="\\\${HERMES_HOME}"
export HERMES_MANAGED_BY=trim.hermes
export HERMES_NODE="\\\${NODE_BIN}/node"
export HERMES_WRITE_SAFE_ROOT="\\\${WORKSPACE}"
export PATH="\\\${PY_BIN}:\\\${NODE_BIN}:\\\${HERMES_HOME}/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
export LD_LIBRARY_PATH="\\\${PY_BIN}/../system-libs"

: "\\\${HTTP_PROXY:=__HTTP_PROXY__}"
: "\\\${HTTPS_PROXY:=__HTTPS_PROXY__}"
: "\\\${http_proxy:=\\\${HTTP_PROXY}}"
: "\\\${https_proxy:=\\\${HTTPS_PROXY}}"
: "\\\${NO_PROXY:=__NO_PROXY__}"
: "\\\${no_proxy:=\\\${NO_PROXY}}"
export HTTP_PROXY HTTPS_PROXY http_proxy https_proxy NO_PROXY no_proxy

cd "\\\${WORKSPACE}"
export PWD="\\\${WORKSPACE}"
export TERMINAL_CWD="\\\${WORKSPACE}"

if [ -x "\\\${HERMES_BIN}" ]; then
  HCMD=("\\\${HERMES_BIN}")
else
  HCMD=("\\\${PYTHON}" -m hermes_cli.main)
fi
echo "hermes_cmd=\\\${HCMD[*]}"

if [ ! -S "\\\${WRAPPER_SOCK}" ]; then
  echo "waiting for wrapper sock"
  for i in $(seq 1 90); do
    [ -S "\\\${WRAPPER_SOCK}" ] &amp;&amp; break
    sleep 1
  done
fi
if [ -S "\\\${WRAPPER_SOCK}" ] &amp;&amp; curl -fsS --unix-socket "\\\${WRAPPER_SOCK}" -m 3 http://localhost/health >/dev/null 2>&amp;1; then
  echo "wrapper health OK"
else
  echo "WARN: wrapper not healthy yet"
fi

dashboard_owned_by_wrapper() {
  port_up "\\\${DASH_PORT}" || return 1
  local dpid wpid ppid
  dpid=$(ss -lntp "sport = :\\\${DASH_PORT}" 2>/dev/null | sed -n 's/.*pid=\\\\([0-9]*\\\\).*/\\\\1/p' | head -1)
  [ -n "\\\${dpid}" ] || return 1
  wpid=$(pgrep -f 'trim-hermes-wrapper' | head -1 || true)
  [ -n "\\\${wpid}" ] || return 1
  ppid=$(awk '/^PPid:/{print $2}' "/proc/\\\${dpid}/status" 2>/dev/null || true)
  [ "\\\${ppid}" = "\\\${wpid}" ]
}

stop_gateway_briefly() {
  echo "temporarily stopping gateway so wrapper preflight can bind-probe :\\\${GW_PORT}"
  "\\\${HCMD[@]}" gateway stop >>"\\\${LOG_DIR}/gateway-boot.log" 2>&amp;1 || true
  local i
  for i in $(seq 1 20); do
    port_up "\\\${GW_PORT}" || return 0
    sleep 1
  done
  fuser -k "\\\${GW_PORT}/tcp" 2>/dev/null || true
  sleep 1
}

start_dashboard_via_wrapper() {
  if [ ! -S "\\\${WRAPPER_SOCK}" ]; then
    echo "ERROR: no wrapper sock; cannot start shop dashboard"
    return 1
  fi
  if port_up "\\\${GW_PORT}"; then
    stop_gateway_briefly
  fi
  echo "starting dashboard via shop wrapper admin API"
  curl -fsS --unix-socket "\\\${WRAPPER_SOCK}" -m 90 \\\\
    -H 'X-Trim-Isadmin: true' \\\\
    -o /tmp/hermes-boot-panel.html \\\\
    "http://localhost/app/trim-hermes/" || true
  wait_port "\\\${DASH_PORT}" dashboard 45
}

start_gateway_cli() {
  if port_up "\\\${GW_PORT}"; then
    echo "gateway :\\\${GW_PORT} already LISTEN — skip"
    return 0
  fi
  echo "starting gateway via hermes CLI"
  setsid "\\\${HCMD[@]}" gateway run --replace --accept-hooks \\\\
    >>"\\\${LOG_DIR}/gateway.log" 2>&amp;1 &lt;/dev/null &amp;
  echo "spawned gateway setsid_pid=$!"
  wait_port "\\\${GW_PORT}" gateway 60
  curl -fsS -m 3 "http://127.0.0.1:\\\${GW_PORT}/health" >/dev/null 2>&amp;1 &amp;&amp; echo "gateway health 200"
}

if dashboard_owned_by_wrapper; then
  echo "dashboard already owned by wrapper — ok"
elif port_up "\\\${DASH_PORT}"; then
  echo "dashboard on :\\\${DASH_PORT} but not wrapper-owned — leave as-is"
else
  start_dashboard_via_wrapper || {
    echo "ERROR: failed to start shop dashboard"
    exit 1
  }
fi

start_gateway_cli || {
  echo "ERROR: failed to start gateway"
  exit 1
}

echo "final:"
ss -lntp "sport = :\\\${DASH_PORT}" 2>/dev/null | head -n 2 || true
ss -lntp "sport = :\\\${GW_PORT}" 2>/dev/null | head -n 2 || true
if [ -S "\\\${WRAPPER_SOCK}" ]; then
  curl -fsS --unix-socket "\\\${WRAPPER_SOCK}" -m 15 -H 'X-Trim-Isadmin: true' \\\\
    -o /tmp/hermes-boot-panel-final.html "http://localhost/app/trim-hermes/" || true
  if grep -q 'Hermes Agent - Dashboard' /tmp/hermes-boot-panel-final.html 2>/dev/null; then
    echo "panel page OK (Hermes Agent - Dashboard)"
  elif grep -q 'Hermes could not start' /tmp/hermes-boot-panel-final.html 2>/dev/null; then
    echo "WARN: panel still error page (check preflight ownership)"
  fi
fi
echo "boot assist done"
exit 0
EOS

# 注入路径/端口/代理（避免 heredoc 变量在 root 安装时写死错环境）
sed -i \\\\
  -e "s|__GW_PORT__|\\\${GW_PORT}|g" \\\\
  -e "s|__DASH_PORT__|\\\${DASH_PORT}|g" \\\\
  -e "s|__APP_ROOT__|\\\${APP_ROOT}|g" \\\\
  -e "s|__HERMES_ROOT__|\\\${HERMES_ROOT}|g" \\\\
  -e "s|__HTTP_PROXY__|\\\${HTTP_PROXY_DEFAULT}|g" \\\\
  -e "s|__HTTPS_PROXY__|\\\${HTTPS_PROXY_DEFAULT}|g" \\\\
  -e "s|__NO_PROXY__|\\\${NO_PROXY_DEFAULT}|g" \\\\
  "\\\${SCRIPT}"
chmod 755 "\\\${SCRIPT}"

# 可选：把 NO_PROXY 精确 IP 合并进商店 .env（不覆盖已有密钥）
if [ -f "\\\${HERMES_HOME}/.env" ]; then
  if grep -qE '^[Nn][Oo]_[Pp][Rr][Oo][Xx][Yy]=' "\\\${HERMES_HOME}/.env"; then
    echo "==> 4) .env 已有 NO_PROXY，请人工确认是精确 IP（勿 CIDR）"
  else
    echo "==> 4) 追加 NO_PROXY 到 hermes/.env"
    {
      echo "NO_PROXY=\\\${NO_PROXY_DEFAULT}"
      echo "no_proxy=\\\${NO_PROXY_DEFAULT}"
    } >> "\\\${HERMES_HOME}/.env"
    chown trim.hermes:trim.hermes "\\\${HERMES_HOME}/.env" 2>/dev/null || true
  fi
else
  echo "==> 4) 无 .env，跳过（首次打开面板后商店会生成）"
fi

mkdir -p "\\\${WORKSPACE}" "\\\${HERMES_HOME}/logs"
chown -R trim.hermes:trim.hermes "\\\${WORKSPACE}" "\\\${HERMES_HOME}/logs" 2>/dev/null || true

echo "==> 5) enable + start oneshot"
systemctl daemon-reload
systemctl enable hermes-gateway-boot.service
systemctl start hermes-gateway-boot.service

echo "==> 6) 最小验收"
systemctl is-enabled hermes-gateway-boot.service
systemctl is-active hermes-gateway-boot.service   # 期望 active (exited)
ss -lntH "sport = :\\\${GW_PORT}" || true
ss -lntH "sport = :\\\${DASH_PORT}" || true
curl -sf -m 5 "http://127.0.0.1:\\\${GW_PORT}/health" &amp;&amp; echo || echo "WARN: gateway health 未通，看 \\\${HERMES_HOME}/logs/gateway-boot.log"
echo
echo "备份目录: \\\${BACKUP_DIR}"
echo "日志: \\\${HERMES_HOME}/logs/gateway-boot.log"
echo "完成。建议再 reboot 做一次冷启动验收。"
</pre><h3>6.1 一键安装后的 30 秒自检</h3><pre># unit 应为 oneshot 成功态
systemctl is-active hermes-gateway-boot.service    # active (exited)
systemctl is-enabled hermes-gateway-boot.service   # enabled

# 网关健康
curl -sf http://127.0.0.1:18642/health

# 关键：stop unit 不得杀网关（KillMode=none）
GW_PID=$(ss -lntp 'sport = :18642' | sed -n 's/.*pid=\\\\([0-9]*\\\\).*/\\\\1/p' | head -1)
systemctl stop hermes-gateway-boot.service
sleep 2
ss -lntH 'sport = :18642' | grep -q LISTEN &amp;&amp; echo "gateway still up — OK"
curl -sf http://127.0.0.1:18642/health &amp;&amp; echo

# 幂等再点一次
systemctl start hermes-gateway-boot.service
tail -n 40 /vol1/@appdata/trim.hermes/hermes/logs/gateway-boot.log</pre><h3>6.2 卸载 / 回滚</h3><pre>systemctl disable --now hermes-gateway-boot.service
# 可选：停网关（会断消息通道）
# runuser -u trim.hermes -- /vol1/@appcenter/trim.hermes/runtime/python/bin/hermes gateway stop
rm -f /etc/systemd/system/hermes-gateway-boot.service /usr/local/bin/hermes-gateway-boot.sh
systemctl daemon-reload
# 若需恢复旧 unit：从 /root/backup/hermes-residual-* 移回后 daemon-reload</pre><p>装完后若只要「开机自启网关」而不关心面板红条，到此即可。若还要面板绿，务必保证 Dashboard 由 wrapper 拉起（脚本已尽量走 admin 路径）；Go 二进制 preflight 无法改时，可能仍出现误报红条，以 <code>/health</code> 与渠道连通为准。</p><h2>七、运行态验收矩阵（复制到其它主机）</h2><pre># 1) unit
systemctl cat hermes-gateway-boot.service
systemctl is-enabled hermes-gateway-boot.service   # enabled
systemctl is-active  hermes-gateway-boot.service   # active (exited)  ← oneshot 正常

# 2) 停 unit 不得杀网关（KillMode=none 验收）
GW_PID=$(ss -lntp 'sport = :18642' | sed -n 's/.*pid=\\\\([0-9]*\\\\).*/\\\\1/p' | head -1)
echo "gateway pid before stop: $GW_PID"
sudo systemctl stop hermes-gateway-boot.service
sleep 2
ss -lntH 'sport = :18642' | grep -q LISTEN &amp;&amp; echo "gateway still up after stop unit — OK"
curl -sf -m 3 http://127.0.0.1:18642/health &amp;&amp; echo

# 3) 进程角色
pgrep -af 'trim-hermes-wrapper|hermes_cli.main|gateway run' | grep -v grep

# 4) 端口（均 loopback）
ss -lntH 'sport = :19119'
ss -lntH 'sport = :18642'

# 5) 健康
curl -sf -m 3 http://127.0.0.1:18642/health
curl -sf -o /dev/null -m 3 -w 'dashboard_%{http_code}\\\\n' http://127.0.0.1:19119/

# 6) sock / lock / 属主
ls -l /vol1/@appcenter/trim.hermes/run/trim-hermes.sock
ls -l /vol1/@appdata/trim.hermes/hermes/gateway.lock
id trim.hermes
# HERMES_HOME 下文件属主应为 trim.hermes，不是 root

# 7) 日志（勿贴 Token）
tail -n 80 /vol1/@appdata/trim.hermes/hermes/logs/gateway-boot.log
tail -n 50 /vol1/@appdata/trim.hermes/hermes/logs/gateway.log

# 8) 幂等：端口已占再 start 应快速 skip
sudo systemctl start hermes-gateway-boot.service</pre><p>通过标准：Dashboard 与 Gateway 均 loopback 监听；Gateway <code>/health</code> 返回 ok；oneshot 为 <code>active (exited)</code>；stop unit 后网关仍存活；冷启动后无需每次手点面板「启动网关」。附加：<code>ss</code> 看 Dashboard 监听进程的 PPid 最好等于 <code>trim-hermes-wrapper</code>；Gateway 的 PPid 可为 1。systemd 对 <code>KillMode=none</code> 的 deprecation 告警可忽略（当前必要）。</p><h2>八、NO_PROXY 与代理：Python 生态的硬坑</h2><p>商店 Hermes 走 Python（httpx / OpenAI SDK）。若 Gateway 需要经内网代理访问外网 LLM，但要把内网 API（如 CLIProxyAPI、其它局域网服务）直连：</p><ul><li><code>HTTP(S)_PROXY</code> 指向内网出口（示例 <code>http://192.168.x.x:7890</code>）</li><li><code>NO_PROXY</code> / <code>no_proxy</code> <strong>必须写精确 IP 列表</strong></li></ul><pre># ✅ 正确（示例）
NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1

# ❌ 错误：httpx/requests 不认
NO_PROXY=localhost,127.0.0.1,192.168.x.0/24,::1     # CIDR
NO_PROXY=localhost,127.0.0.1,192.168.x.*,::1        # 通配
NO_PROXY=localhost,127.0.0.1,192.168.x.,::1         # 前缀</pre><p>错误症状：curl 直连内网 API 200，但 Hermes/Python 调用秒回 502——请求被错误塞给代理，代理拒绝转发内网。改 <code>hermes/.env</code> 与任何 systemd Environment 后记得重启 Gateway 再验。</p><h2>九、日常维护清单</h2><h3>9.1 更新商店 Hermes 前</h3><ol><li>备份 unit + 脚本 + <code>config.yaml</code> / <code>.env</code>（见下）。</li><li>优先用 Hermes CLI / 面板优雅停 Gateway，避免安装包替换时占用旧文件。</li><li>更新后检查 oneshot 两件套是否被覆盖；路径、runtime 是否变化。</li><li>再 <code>daemon-reload && systemctl start hermes-gateway-boot</code> 做热验收（6.1 / 第七节），必要时 reboot 冷验收。</li></ol><h3>9.2 建议备份范围</h3><pre>/etc/systemd/system/hermes-gateway-boot.service
/usr/local/bin/hermes-gateway-boot.sh
/vol1/@appdata/trim.hermes/hermes/config.yaml
/vol1/@appdata/trim.hermes/hermes/.env          # 含密钥，离线加密保存
# 可选：workspace / state，视是否需要会话连续性</pre><h3>9.3 权限铁律</h3><ul><li>不要用 root 长期写 <code>HERMES_HOME</code> 下配置/会话文件。</li><li>修复后统一：<code>chown -R trim.hermes:trim.hermes /vol1/@appdata/trim.hermes</code>（确认路径后再执行）。</li><li>unit 使用 <code>User=trim.hermes</code> 且 <code>Group=trim.hermes</code>（辅组 gid 与商店运行时对齐）。</li><li>禁止把另一套 Hermes/OpenClaw 的 HOME 挂到本实例目录。</li></ul><h3>9.4 职责边界（避免再踩）</h3><ul><li>oneshot：开机代拉 / 幂等补齐，不长期独占抢面板。</li><li>Dashboard <code>:19119</code>：归商店 wrapper。</li><li>Gateway <code>:18642</code>：原生 CLI + lock，Hermes 自管。</li><li>与 OpenClaw 完全独立（端口/用户/进程谱系均无重叠）。</li></ul><h2>十、排错速查</h2><pre>| 现象 | 优先检查 | 处置思路 |
|------|----------|----------|
| 面板 already in use :18642 | 是否有常驻 unit/野进程占端口；Dashboard 是否 wrapper 子进程 | 禁掉常驻 unit；必要时脚本短暂 gateway stop 再走 wrapper |
| 面板 already in use :19119 | 是否误启常驻 dashboard unit | disable 并移走 hermes-dashboard.service |
| oneshot 成功但 stop 后网关死了 | unit 是否漏 KillMode=none | 补 KillMode=none 并 daemon-reload |
| unit start timeout | wrapper sock 未起；卷未挂载；TimeoutStartSec 过短 | After=trim_app_center；TimeoutStartSec≥180；查 gateway-boot.log |
| Gateway 502 / 内网 API 秒失败 | NO_PROXY 是否 CIDR/通配 | 改精确 IP；验 Python 侧直连 |
| 权限 denied / 配置写不进 | 目录被 root 污染 | chown 回 trim.hermes |
| 冷启动偶发失败、热启动正常 | App Center / wrapper 未就绪 | 脚本内等 sock；After= 补齐；reboot 回归 |
| 点面板仍红但 /health 200 | wrapper preflight 不认外部已起 api_server | 倾向保自启；或接受先点面板；勿再 Restart=always |</pre><h2>十一、与商店版 OpenClaw 的对照</h2><pre>| 维度 | Hermes（本文） | OpenClaw（姊妹文） |
|------|----------------|--------------------|
| 商店用户 | trim.hermes | trim.openclaw |
| 控制面 | wrapper unix sock + Dashboard :19119 | Monitor unix sock + API |
| 业务端口 | Gateway :18642 | Gateway :25730（示例） |
| systemd 角色 | oneshot 脚本：wrapper 路径 + 原生 CLI 点火 | oneshot bootstrap：Monitor API action=start |
| 禁止项 | 常驻 Restart=always 监管 :18642；常驻抢 :19119 | ensure 直拉 Gateway 与面板抢进程 |
| 跳过条件 | :18642 已 LISTEN 则 skip | 业务端口已 LISTEN 则 skip |
| 共同原则 | App Center 先就绪；不长期抢端口；loopback；独立用户；可冷启动复刻 | 同左 |</pre><h2>十二、其它主机最小复刻 Checklist</h2><ol><li>商店安装 Hermes，确认用户 <code>trim.hermes</code> 与 <code>@appcenter / @appdata</code> 路径映射。</li><li>确认端口：Dashboard <code>19119</code>、Gateway <code>18642</code>（不同则全文替换）。</li><li><strong>推荐</strong>：改第六节一键脚本顶部 3 处变量后，root 执行整段落地（含清理旧 unit）。</li><li>或手动：清理旧常驻 → 写入 unit/脚本 → <code>daemon-reload && enable && start</code>。</li><li>跑 6.1 自检 + 第七节完整矩阵（含 stop unit 不杀网关）。</li><li><strong>reboot</strong> 冷启动验收。</li><li>两件套 + 密钥配置纳入备份；更新商店后复查路径与 unit。</li></ol><h2>十三、结语</h2><p>商店版 Hermes 的稳定关键，不在于「多写一个 Restart=always」，而在于<strong>尊重 wrapper 的硬 bind 预检，并让 systemd 只做开机协助</strong>。oneshot + <code>KillMode=none</code> + 商店同用户原生 CLI，能在冷启动后自动带起 Gateway，又尽量不和 App Center 抢生命周期。把 unit、脚本、NO_PROXY 精确 IP 与验收矩阵按本文固化后，换一台 FnOS 也可以完整复刻同一运行环境。</p><p>若你同时维护商店版 OpenClaw，建议两套 oneshot 引导一起备份、一起做冷启动回归，避免只修一侧、重启后另一侧回归翻车。`},{slug:"fnos-openclaw-dual-instance",title:"FnOS 双 OpenClaw 实例并存实战：商店版 + 自装版隔离、端口与 systemd 复刻",subtitle:"trim.openclaw · openclaw-user · loopback 端口隔离 · config-guard · 一键 boot 交叉链 · Monitor/Gateway 双链路",date:"2026-07-21",tags:["FnOS","OpenClaw","双实例","systemd","Gateway","隔离"],summary:"本文所有域名、Token、真实用户名、内网地址均已脱敏。示例中的 <code>example.com</code>、<code>192.168.x.x</code>、<code>openclaw-user</code>、<code>&lt;TOKEN&gt;</code> 请替换为你自己的环境。商店版用户名 <code>trim.openclaw</code> 是 FnOS App Center 常见约定，可按实际保留。",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>FnOS 双 OpenClaw 实例并存实战：商店版 + 自装版隔离、端口与 systemd 复刻</h1><p class=article-subtitle>trim.openclaw · openclaw-user · loopback 端口隔离 · config-guard · 一键 boot 交叉链 · Monitor/Gateway 双链路</p><div class=article-meta><span class=article-date>2026-07-21</span><div class=article-tags><span class=tech-tag>FnOS</span><span class=tech-tag>OpenClaw</span><span class=tech-tag>双实例</span><span class=tech-tag>systemd</span><span class=tech-tag>Gateway</span><span class=tech-tag>隔离</span></div></div></div><div class=article-content><blockquote><p>本文所有域名、Token、真实用户名、内网地址均已脱敏。示例中的 <code>example.com</code>、<code>192.168.x.x</code>、<code>openclaw-user</code>、<code>&lt;TOKEN&gt;</code> 请替换为你自己的环境。商店版用户名 <code>trim.openclaw</code> 是 FnOS App Center 常见约定，可按实际保留。</p></blockquote><h2>一、写在前面：本文解决什么问题</h2><p>同一台飞牛系统（FnOS）上，经常会同时需要两套 OpenClaw：</p><ul><li><strong>实例 A（商店版）</strong>：由 FnOS 应用中心管理，适合面板运维、日常主通道。</li><li><strong>实例 B（自装版）</strong>：独立目录、独立端口、独立 systemd，适合试验升级、第二通道、与商店生命周期解耦。</li></ul><p>只装一套时问题简单；两套并存时，真正会翻车的是：抢端口、root 污染权限、配置/session 串目录、代理把 loopback 拐走、Monitor 停不了自己的 unit、冷启动卷未就绪导致 209/STDOUT。</p><p>本文记录一套可复刻的双实例方案：路径、用户、端口、systemd、Monitor、代理与隔离清单。商店版「如何跑稳」的完整细节见 <!>（含 <strong>6.7 一键安装开机引导</strong>）；本文以<strong>双实例共存与自装版从零落地</strong>为主，商店版只给对照与核对清单。</p><p><strong>2026-07-21 修订说明：</strong>（1）商店侧交叉链到旧文 6.7 <code>install-openclaw-gateway-boot.sh</code>，复刻实例 A 时优先一键落地 bootstrap，勿再手抄 ensure 反面教材；（2）自装实例 B 增补 <code>ensureDevModeConfig</code> 冲配置根因与防护：Monitor 在 system 模式下误写 <code>openclaw.json</code> 只剩 <code>gateway.controlUi</code> 残片 → Gateway exit 78；落地 <code>OPENCLAW_USE_SYSTEM_CONFIG=1</code> / skip 补丁、启动前 <code>config-guard</code>、NO_PROXY 精确 IP。</p><h2>二、目标架构</h2><pre>┌─────────────────────────────── 同一台 FnOS ───────────────────────────────┐
│                                                                           │
│  实例 A · 商店版                            实例 B · 自装版                 │
│  用户: trim.openclaw                        用户: openclaw-user             │
│  路径: /vol1/@apphome/trim.openclaw         路径: /volX/OpenClaw            │
│        /vol1/@appcenter/trim.openclaw              (示例: /vol2/1000/OpenClaw)│
│                                                                           │
│  App Center / Monitor(A)                    systemd Monitor(B)              │
│        │                                           │                      │
│        ▼                                           ▼                      │
│  Gateway :25730 (loopback)                  Gateway :11751 (loopback)       │
│  可选: trim-openclaw-gateway 兜底           openclaw-11751.service          │
│        (端口已占用则跳过)                   openclaw-11751-monitor.service  │
│                                                                           │
│  硬隔离: 数据目录不共享 · 用户不混用 · InaccessiblePaths 互挡 · 升级分通道  │
└───────────────────────────────────────────────────────────────────────────┘</pre><h3>2.1 对照表（复刻时先抄这张）</h3><pre>| 维度       | 实例 A 商店版                         | 实例 B 自装版                          |
|------------|---------------------------------------|----------------------------------------|
| 运行用户   | trim.openclaw                         | openclaw-user（示例关键词）            |
| 数据根目录 | /vol1/@apphome/trim.openclaw          | /volX/OpenClaw                         |
| 配置路径   | .../home/.openclaw/openclaw.json      | .../home/.openclaw/openclaw.json       |
| Gateway 端口 | 25730 loopback                      | 11751 loopback                         |
| 主启动方   | App Center / 商店 Monitor             | systemd unit                           |
| 兜底 unit  | trim-openclaw-gateway / bootstrap     | openclaw-11751.service                 |
| 面板后端   | 商店 Monitor (unix socket)            | openclaw-11751-monitor (如 PORT=19201) |
| 代理       | HTTP(S)_PROXY → 内网出口              | 同左，注意 NO_PROXY                    |
| 隔离       | 独立 HOME/DATA                        | InaccessiblePaths 挡商店路径           |</pre><h3>2.2 复刻铁律（违反即不保证可迁移）</h3><ol><li><strong>端口不共用</strong>：两套 Gateway 必须不同端口，且都 bind loopback。</li><li><strong>用户不混用</strong>：禁止用 root 长期跑安装/升级/修 session；属主必须是各自用户。</li><li><strong>目录不串挂</strong>：不把 A 的 <code>.openclaw</code> / sessions 挂给 B，反之亦然。</li><li><strong>公网不直暴 Gateway</strong>：外网入口走 Cloudflare Tunnel / Nginx 反代（见隧道相关旧文）。</li><li><strong>升级分通道</strong>：不要一条 <code>npm i -g</code> / 全局 update 同时动两边。</li></ol><h2>三、前置条件与版本基线</h2><ul><li>FnOS（或同类 Linux NAS）具备 systemd、Node 24 / Bun 可用路径（商店环境常见 <code>/var/apps/nodejs_v24</code>、<code>/var/apps/bunjs</code>）。</li><li>实例 A 建议先按旧文跑通商店版，控制面板与 Gateway 在线。</li><li>实例 B 建议固定 OpenClaw 版本（示例基线 <code>2026.7.1</code>），记录 <code>openclaw --version</code> 输出。</li><li>内网 HTTP 代理可选；若有，统一写成 <code>http://192.168.x.x:7890</code>，并配置 <code>NO_PROXY</code>。</li></ul><pre># 关键词替换表（全文通用）
openclaw-user     → 你的自装运行用户
openclaw-group    → 该用户主组（示例 Users）
/volX/OpenClaw    → 自装根目录（示例 /vol2/1000/OpenClaw）
:11751 / :25730   → 可改，但两实例必须不同
192.168.x.x:7890  → 你的内网代理（没有可删代理环境变量）</pre><h2>四、实例 A（商店版）— 双实例视角核对清单</h2><p>商店版完整启动链、权限基线、更新按钮逻辑见旧文 <!>。复刻实例 A 的开机引导时，优先用旧文 <strong>第六节 6.7</strong> 一键脚本 <code>install-openclaw-gateway-boot.sh</code>（root 一条命令写 unit + drop-in + bootstrap），不要再手抄旧的 <code>openclaw-ensure</code>。这里只列<strong>双实例场景下必须确认</strong>的点：</p><pre># 1) 商店用户存在
id trim.openclaw

# 2) Gateway 监听 loopback:25730（端口号以你环境为准）
ss -lntH | grep 25730

# 3) 进程用户不是 root
ps -o user,pid,cmd -C openclaw-gateway 2>/dev/null || \\\\
  ps aux | grep -E 'openclaw.*gateway|openclaw-gatewa' | grep -v grep

# 4) 配置与数据在 apphome，不在自装目录
echo "$OPENCLAW_CONFIG_PATH"   # 期望含 @apphome/trim.openclaw
# 或从 unit / 进程环境读取</pre><h3>4.1 商店 Gateway 兜底：优先一键 bootstrap，端口已占用则跳过</h3><p>推荐直接跑旧文 6.7 一键脚本落地 <code>trim-openclaw-gateway.service</code> + <code>trim-openclaw-bootstrap.sh</code>（Monitor API <code>action=start</code>，端口已 LISTEN 则 exit 0）。若你手工写 unit，务必加「端口已被 App Center 占用则跳过」的条件，避免双进程抢 <code>:25730</code>：</p><pre># unit 片段示意（User=trim.openclaw）
ExecCondition=/bin/bash -c "! ss -lntH sport = :25730 | grep -q LISTEN"
ExecStart=.../openclaw gateway run --port 25730 --bind loopback</pre><p>更稳的做法就是旧文 6.7 / 第六节现行方案：oneshot bootstrap 等商店 Monitor unix socket API ready，再 POST start；若端口已 LISTEN 则直接 exit 0。不要在 root 下直接 <code>cmd/main start</code> 拉起 Monitor，否则会污染为 root Monitor（旧文已强调）。一键脚本<strong>不会</strong>触碰 <code>openclaw-11751*</code>，与实例 B 边界安全。</p><h3>4.2 与自装版的边界</h3><ul><li>商店路径：<code>/vol1/@apphome/trim.openclaw</code>、<code>/vol1/@appcenter/trim.openclaw</code>、<code>/var/apps/trim.openclaw</code></li><li>自装 unit 应用 <code>InaccessiblePaths=</code> 指向上述路径，降低串读配置/插件的概率</li><li>两边插件、session、memory DB 各自维护</li></ul><h2>五、实例 B（自装版）— 从零复刻</h2><h3>5.1 目录树约定</h3><pre>/volX/OpenClaw/
├── bin/openclaw              # CLI 入口（可指向 data/node_modules 包装脚本）
├── data/                     # OPENCLAW_DATA_DIR；node_modules / workspace 等
├── home/                     # HOME；.openclaw/openclaw.json 在此
├── log/                      # gateway.log / monitor.log（启动前准备）
├── server/                   # 自建 Monitor 后端（可选）
├── web/dist/                 # Monitor 静态资源（可选）
├── runtime/                  # 运行时临时文件
└── .env                      # 可选：版本号等非密钥状态</pre><pre># 创建用户与目录（示例）
# 若系统已有普通用户，可直接用，不必新建；关键词统一为 openclaw-user
sudo useradd -r -m -s /bin/bash openclaw-user 2>/dev/null || true
sudo mkdir -p /volX/OpenClaw/{bin,data,home,log,server,web/dist,runtime}
sudo chown -R openclaw-user:openclaw-group /volX/OpenClaw
sudo chmod 0711 /volX /volX/...   # 保证中间路径可遍历
sudo find /volX/OpenClaw -type d -exec chmod 0700 {} +</pre><h3>5.2 安装包与 CLI</h3><p>推荐把 OpenClaw 安装在 <code>/volX/OpenClaw/data</code> 的本地 <code>node_modules</code>，用 <code>bin/openclaw</code> 固定环境，避免全局 <code>npm i -g</code> 污染系统：</p><pre>sudo -u openclaw-user -H bash -lc '
  export HOME=/volX/OpenClaw/home
  export OPENCLAW_DATA_DIR=/volX/OpenClaw/data
  export OPENCLAW_CONFIG_PATH=/volX/OpenClaw/home/.openclaw/openclaw.json
  cd /volX/OpenClaw/data
  # 按你惯用方式安装固定版本 openclaw 到本地 node_modules
  # 然后写 bin/openclaw 包装，确保 PATH 含 node/bun
'
/volX/OpenClaw/bin/openclaw --version</pre><h3>5.3 环境变量契约</h3><pre>HOME=/volX/OpenClaw/home
OPENCLAW_DATA_DIR=/volX/OpenClaw/data
OPENCLAW_CONFIG_PATH=/volX/OpenClaw/home/.openclaw/openclaw.json
OPENCLAW_HIDE_BANNER=1
HTTP_PROXY=http://192.168.x.x:7890
HTTPS_PROXY=http://192.168.x.x:7890
NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
# 必须精确 IP：Node / Python httpx 等不认 CIDR/通配/前缀；curl 认 CIDR 会掩盖问题
# 若还有 sidecar 同步脚本访问内网管理口，请额外写精确 IP</pre><h3>5.4 Gateway systemd unit</h3><pre># /etc/systemd/system/openclaw-11751.service
[Unit]
Description=OpenClaw Gateway (Port 11751)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=openclaw-user
Group=openclaw-group
WorkingDirectory=/volX/OpenClaw/data
# 若 shebang/权限环境复杂，可用 bash 包装（见 drop-in）
ExecStart=/volX/OpenClaw/bin/openclaw gateway run --port 11751 --bind loopback
Restart=always
RestartSec=5
Environment=HOME=/volX/OpenClaw/home
Environment=OPENCLAW_DATA_DIR=/volX/OpenClaw/data
Environment=OPENCLAW_CONFIG_PATH=/volX/OpenClaw/home/.openclaw/openclaw.json
Environment=OPENCLAW_HIDE_BANNER=1
Environment=HTTP_PROXY=http://192.168.x.x:7890
Environment=HTTPS_PROXY=http://192.168.x.x:7890
Environment=NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
StandardOutput=append:/volX/OpenClaw/log/gateway.log
StandardError=append:/volX/OpenClaw/log/gateway.log
NoNewPrivileges=true
# 关键：挡住商店版路径，降低串环境风险
InaccessiblePaths=/vol1/@apphome/trim.openclaw /vol1/@appcenter/trim.openclaw /var/apps/trim.openclaw

[Install]
WantedBy=multi-user.target</pre><h3>5.5 推荐 drop-in</h3><p>除权限与挂载外，建议再补两类 drop-in（2026-07 实战后强烈建议）：</p><pre># /etc/systemd/system/openclaw-11751.service.d/00-requires-mounts.conf
[Unit]
RequiresMountsFor=/volX/OpenClaw /volX/OpenClaw/log

# /etc/systemd/system/openclaw-11751.service.d/01-log-prepare.conf
[Unit]
Requires=openclaw-11751-log-prepare.service
After=openclaw-11751-log-prepare.service

# /etc/systemd/system/openclaw-11751.service.d/05-permission-fix.conf
[Service]
PermissionsStartOnly=true
ExecStartPre=/usr/local/sbin/openclaw-11751-permission-fix.sh

# /etc/systemd/system/openclaw-11751.service.d/06-config-guard.conf
[Service]
# 启动前校验 openclaw.json；坏配置自动从 last-good 恢复（见 5.10）
ExecStartPre=/usr/local/sbin/openclaw-11751-config-guard.sh

# /etc/systemd/system/openclaw-11751.service.d/15-noproxy-exact.conf
[Service]
# 覆盖 base unit 里可能写的 CIDR；精确 IP only
Environment=NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
Environment=no_proxy=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1

# /etc/systemd/system/openclaw-11751.service.d/20-exec-via-bash.conf （若 CLI 为 shell 包装）
[Service]
ExecStart=
ExecStart=/bin/bash /volX/OpenClaw/bin/openclaw gateway run --port 11751 --bind loopback</pre><h3>5.6 log-prepare oneshot</h3><pre># /etc/systemd/system/openclaw-11751-log-prepare.service
[Unit]
Description=Prepare OpenClaw 11751 log files
RequiresMountsFor=/volX/OpenClaw
Before=openclaw-11751.service openclaw-11751-monitor.service

[Service]
Type=oneshot
ExecStart=/usr/bin/install -d -o openclaw-user -g openclaw-group -m 0700 /volX/OpenClaw/log
ExecStart=/usr/bin/touch /volX/OpenClaw/log/gateway.log /volX/OpenClaw/log/monitor.log
ExecStart=/usr/bin/chown openclaw-user:openclaw-group /volX/OpenClaw/log/gateway.log /volX/OpenClaw/log/monitor.log
ExecStart=/usr/bin/chmod 0600 /volX/OpenClaw/log/gateway.log /volX/OpenClaw/log/monitor.log
RemainAfterExit=yes</pre><h3>5.7 权限修复脚本（最小可用）</h3><pre># /usr/local/sbin/openclaw-11751-permission-fix.sh
#!/bin/bash
set -euo pipefail
ROOT=/volX/OpenClaw
RUN_USER=openclaw-user
RUN_GROUP=openclaw-group
[ -d "$ROOT" ] || exit 0
chown -R "$RUN_USER:$RUN_GROUP" "$ROOT"
# 中间路径可遍历（按你的卷布局调整）
chmod 0711 "$(dirname "$ROOT")" 2>/dev/null || true
find "$ROOT" -type d -exec chmod 0700 {} +
find "$ROOT" -type f -exec chmod 0600 {} +
# 可执行入口
chmod 0700 "$ROOT/bin/openclaw" 2>/dev/null || true
find "$ROOT/data/node_modules/.bin" -maxdepth 1 -type l -exec chmod 0700 {} + 2>/dev/null || true</pre><h3>5.8 Monitor（可选但强烈建议）</h3><p>自装版若带独立控制面板后端，用第二个 unit 管理，并通过环境变量声明「系统托管 Gateway unit」：</p><pre># /etc/systemd/system/openclaw-11751-monitor.service （关键字段）
[Service]
User=openclaw-user
Group=openclaw-group
WorkingDirectory=/volX/OpenClaw/server
ExecStart=/path/to/bun /volX/OpenClaw/server/index.js
Environment=HOME=/volX/OpenClaw/home
Environment=OPENCLAW_DATA_DIR=/volX/OpenClaw/data
Environment=OPENCLAW_CONFIG_PATH=/volX/OpenClaw/home/.openclaw/openclaw.json
Environment=PORT=19201
Environment=OPENCLAW_VERSION=2026.7.1
Environment=OPENCLAW_USE_SYSTEM_CONFIG=1
Environment=OPENCLAW_SYSTEM_UNIT=openclaw-11751.service
InaccessiblePaths=/vol1/@apphome/trim.openclaw /vol1/@appcenter/trim.openclaw /var/apps/trim.openclaw</pre><p>Monitor 侧务必同时设置（可放 unit 或 drop-in <code>20-system-managed.conf</code>）：</p><pre>Environment=OPENCLAW_USE_SYSTEM_CONFIG=1
Environment=OPENCLAW_SYSTEM_UNIT=openclaw-11751.service
# 同样建议精确 NO_PROXY（与 Gateway 一致）
Environment=NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
Environment=no_proxy=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1</pre><p>有这两项时，Monitor 应<strong>跳过</strong> <code>ensureDevModeConfig()</code> 对完整 <code>openclaw.json</code> 的改写；否则可能在读失败时只写出 <code>gateway.controlUi</code> 残片（见 5.10）。若 Monitor 需要 stop/start Gateway，给 <code>openclaw-user</code> 做<strong>窄授权</strong>即可（polkit 或 sudoers），只允许操作 <code>openclaw-11751.service</code>，不要给 ALL：</p><pre># /etc/sudoers.d/openclaw-11751-openclaw-user  （示例，visudo 语法）
openclaw-user ALL=(root) NOPASSWD: /bin/systemctl start openclaw-11751.service, \\\\
  /bin/systemctl stop openclaw-11751.service, \\\\
  /bin/systemctl restart openclaw-11751.service, \\\\
  /bin/systemctl status openclaw-11751.service</pre><h3>5.9 启用并启动</h3><pre>sudo systemctl daemon-reload
sudo systemctl enable openclaw-11751-log-prepare.service
sudo systemctl enable --now openclaw-11751.service
sudo systemctl enable --now openclaw-11751-monitor.service   # 若有
ss -lntH | grep -E '11751|25730'
curl -fsS http://127.0.0.1:11751/healthz || true</pre><h3>5.10 配置防冲：ensureDevModeConfig 坑 + config-guard（必做）</h3><p><strong>现象：</strong>自装 Gateway 突然 failed，日志：</p><pre>Gateway start blocked: existing config is missing gateway.mode.
Treat this as suspicious or clobbered config.</pre><p>进程 exit 78/CONFIG；<code>:11751</code> 无监听。此时查配置文件体积往往只剩约 <strong>300 字节</strong>，内容类似：</p><pre>{
  "gateway": {
    "controlUi": {
      "enabled": true,
      "allowInsecureAuth": true,
      "dangerouslyDisableDeviceAuth": true,
      "allowedOrigins": ["http://localhost:3000", "http://127.0.0.1:3000"]
    }
  }
}</pre><p>完整配置（通常十几 KB，含 <code>gateway.mode=local</code>、<code>channels</code>、<code>agents</code>、<code>models</code>）被冲掉。商店实例 <code>:25730</code> 可仍正常——问题只在自装 Monitor 写到了实例 B 的 <code>openclaw.json</code>。</p><p><strong>根因：</strong>自建 Monitor（<code>server/index.js</code>）里的 <code>ensureDevModeConfig()</code> 在 system 模式下仍会改「系统配置」。当读配置失败/得到空对象时，旧逻辑会把只含 <code>gateway.controlUi</code> 的残片<strong>写回</strong>同一路径，覆盖完整文件。日志侧可看到：</p><pre>[dev-config] Updated system OpenClaw config at .../openclaw.json
# 随后 gateway 反复：
Config write audit / size-drop-vs-last-good: ~17000 -> ~298</pre><p><strong>防护（三层，建议全上）：</strong></p><ol><li><strong>Monitor 环境变量</strong>（见 5.8）：<code>OPENCLAW_USE_SYSTEM_CONFIG=1</code> + <code>OPENCLAW_SYSTEM_UNIT=openclaw-11751.service</code>。</li><li><strong>代码补丁</strong>（Monitor 源码 <code>ensureDevModeConfig</code>）：system-managed 时直接 skip；且仅当已有 <code>gateway.mode=local</code> 才允许改 controlUi。示意：</li></ol><pre>async function ensureDevModeConfig() {
  // system-managed 实例拥有完整 openclaw.json，禁止用 controlUi 残片覆盖
  if (process.env.OPENCLAW_USE_SYSTEM_CONFIG === "1" || process.env.OPENCLAW_SYSTEM_UNIT) {
    console.log("[dev-config] Skipping ensureDevModeConfig for system-managed OpenClaw");
    return;
  }
  // ... 读取 config 后：
  if (!config?.gateway || config.gateway.mode !== "local") {
    console.error("[dev-config] Refusing to patch: missing gateway.mode=local");
    return;
  }
  // 仅在已有完整 local 配置上合并 controlUi 字段
}</pre><p>3. <strong>启动前 config-guard</strong>（Gateway unit 的 <code>ExecStartPre</code>）：校验当前配置；坏则从 <code>openclaw.json.last-good</code>（或你自己的 bak）恢复。健康启动成功后顺便刷新 last-good。</p><pre># /usr/local/sbin/openclaw-11751-config-guard.sh
#!/bin/bash
set -euo pipefail
CFG_DIR=/volX/OpenClaw/home/.openclaw
CFG="$CFG_DIR/openclaw.json"
LAST_GOOD="$CFG_DIR/openclaw.json.last-good"
# 可再列一份你信任的历史 bak
BAK="$CFG_DIR/openclaw.json.bak-known-good"
LOG=/volX/OpenClaw/log/config-guard.log
mkdir -p /volX/OpenClaw/log

ok_mode() {
  local f="$1"
  [ -f "$f" ] || return 1
  python3 - "$f" &lt;&lt;'PY'
import json, sys
d=json.load(open(sys.argv[1], encoding="utf-8"))
g=d.get("gateway") or {}
if g.get("mode") != "local":
  sys.exit(1)
if int(g.get("port") or 0) != 11751:  # 按你的端口改
  sys.exit(1)
if "channels" not in d or "meta" not in d:
  sys.exit(1)
sys.exit(0)
PY
}

if ok_mode "$CFG"; then
  if ! cmp -s "$CFG" "$LAST_GOOD" 2>/dev/null; then
    cp -a "$CFG" "$LAST_GOOD"
    chown openclaw-user:openclaw-group "$LAST_GOOD"
    chmod 600 "$LAST_GOOD"
  fi
  echo "$(date '+%F %T') config ok" >>"$LOG"
  exit 0
fi

echo "$(date '+%F %T') BAD config; restoring" >>"$LOG"
cp -a "$CFG" "$CFG_DIR/openclaw.json.broken-auto-$(date +%Y%m%d-%H%M%S)" 2>/dev/null || true
for src in "$LAST_GOOD" "$BAK"; do
  if ok_mode "$src"; then
    cp -a "$src" "$CFG"
    chown openclaw-user:openclaw-group "$CFG"
    chmod 600 "$CFG"
    echo "$(date '+%F %T') restored from $src" >>"$LOG"
    exit 0
  fi
done
echo "$(date '+%F %T') FATAL: no valid backup" >>"$LOG"
exit 1</pre><pre>install -m 0755 openclaw-11751-config-guard.sh /usr/local/sbin/
# drop-in 见 5.5 的 06-config-guard.conf
# 建议平时保留：
#   openclaw.json.last-good
#   至少一份带时间戳的 bak（升级/改模型前手动 cp）</pre><p><strong>验收：</strong>Monitor 日志出现 <code>Skipping ensureDevModeConfig for system-managed...</code>；人为把配置改成残片后 <code>systemctl restart openclaw-11751</code> 应被 guard 自动救回；正常时 <code>openclaw.json</code> 体积保持完整量级，且 <code>gateway.mode=local</code>。</p><p><strong>恢复应急（无 guard 时）：</strong></p><pre># 1) 停 gateway
sudo systemctl stop openclaw-11751
# 2) 从 last-good / 备份恢复
cp -a .../openclaw.json.last-good .../openclaw.json
chown openclaw-user:openclaw-group .../openclaw.json
# 3) 确认 JSON：gateway.mode=local、port=11751
# 4) 先给 Monitor 打上 skip 补丁与环境变量，再 start
sudo systemctl start openclaw-11751
curl -fsS http://127.0.0.1:11751/healthz</pre><h2>六、双实例共存硬隔离清单</h2><pre>| 检查项     | 命令/标准                                      | 通过标准                          |
|------------|------------------------------------------------|-----------------------------------|
| 双端口     | ss -lntH | grep -E '25730|11751'               | 各自 loopback LISTEN，无交叉      |
| 用户       | ps 看 gateway 进程 User                        | A=trim.openclaw；B=openclaw-user  |
| 配置路径   | 两进程 OPENCLAW_CONFIG_PATH                    | 路径不同、目录不共享              |
| 互不可见   | systemctl cat B | grep InaccessiblePaths       | 含商店版路径                      |
| 重启隔离   | systemctl restart openclaw-11751               | A 的 25730 不掉线                 |
| 代理       | 进程环境 HTTP_PROXY / NO_PROXY                 | 精确 IP；禁止 CIDR/通配           |
| 权限       | namei -l 数据目录                              | 无 root 属主污染                  |
| 配置完整   | wc -c openclaw.json；含 gateway.mode=local     | 非 ~300B controlUi 残片           |
| system 标记| Monitor 环境 OPENCLAW_USE_SYSTEM_CONFIG=1      | ensureDevModeConfig 应 skip       |
| config-guard | ExecStartPre 存在且 Result=success           | 坏配置可自动从 last-good 恢复     |</pre><h2>七、通道、插件与共享能力</h2><ul><li><strong>消息通道</strong>（QQBot / Telegram 等）：各实例独立 appId/token/session，禁止共享 sessions 目录。</li><li><strong>模型中转</strong>（CLIProxy / sub2api 等）：可共用同一上游，但各实例的 api-key / base URL 配置分开写；密钥不进公开备份。</li><li><strong>Embedding / memory-core</strong>：可共用本机 Ollama（见 <!>），provider 配置仍按实例写。</li><li><strong>外网入口</strong>：两套面板/健康检查都经反代或 Tunnel 暴露，Gateway 保持 loopback（见 <!>）。</li></ul><h2>八、另一台设备复刻步骤总览</h2><pre># 1. 先落地实例 A（商店版）—— 旧文 6.7 一键 install-openclaw-gateway-boot.sh
# 2. 建 openclaw-user 与 /volX/OpenClaw 目录树，修权限
# 3. 安装固定版本 OpenClaw 到 data/，写 bin/openclaw
# 4. 初始化完整 openclaw.json（gateway.mode=local + port）；保留 last-good
# 5. 安装 log-prepare / permission-fix / config-guard / gateway unit / drop-in
# 6. enable --now Gateway；验证 :11751 healthz
# 7. Monitor：OPENCLAW_USE_SYSTEM_CONFIG=1 + OPENCLAW_SYSTEM_UNIT + ensureDevModeConfig skip 补丁
# 8. 窄 sudoers/polkit；精确 NO_PROXY
# 9. 核对 :25730 与 :11751 同时在线
# 10. 只 restart B，确认 A 不受影响；人为残片配置测 guard 恢复
# 11. 冷启动一次；打备份 manifest（不含 secrets）</pre><h2>九、验证矩阵</h2><pre>| 场景                 | 操作                              | 期望结果                    |
|----------------------|-----------------------------------|-----------------------------|
| 双在线               | ss + healthz                      | 两端口正常                  |
| 只重启 B             | systemctl restart openclaw-11751  | A 会话/端口保持             |
| 只停 A               | 商店面板停止 / 停 A 进程          | B 仍可对话                  |
| 只停 B               | systemctl stop openclaw-11751     | A 仍可对话                  |
| 冷启动               | 开机后检查 unit                   | RequiresMountsFor 后成功    |
| 升级 B               | 仅更新 /volX/OpenClaw/data        | A 版本号不变                |
| 权限污染演练         | 误用 root touch 文件后 fix 脚本   | 服务可再启动                |
| 配置残片演练         | 故意写成仅 controlUi 后 restart B | guard 从 last-good 恢复     |
| Monitor skip         | 日志含 Skipping ensureDevMode...  | 不再 Updated system config  |</pre><h2>十、备份与一键还原（公开可说的部分）</h2><pre># 建议分两份包：store-A / selfhost-B
manifest.txt          # 路径清单、unit 列表、版本号、端口
systemd/              # *.service 与 drop-in（已脱敏）
scripts/              # permission-fix / bootstrap / auto-update
# 不要打进公开包：
#   *.env 含 token、oauth json、accounts、management secret、私钥</pre><p>还原顺序：目录与权限 → 放 unit → daemon-reload → log-prepare → start B → 核对 A 仍在 → 再导入密钥（手工，不进脚本仓库）。</p><h2>十一、排错清单</h2><h3>1. 抢端口 / 双 Gateway</h3><pre>ss -lntp | grep -E '25730|11751'
# 同一端口两个进程：先停错误启动方；商店兜底加 ExecCondition</pre><h3>2. root 污染 node_modules / sessions</h3><pre>find /volX/OpenClaw -user root | head
# 跑 permission-fix；以后所有 openclaw CLI 用：
sudo -u openclaw-user -H env HOME=... OPENCLAW_CONFIG_PATH=... openclaw ...</pre><h3>3. Monitor 停不了 service</h3><p>system mode 下 Monitor 以普通用户调 systemctl 会要 polkit。补窄 polkit/sudoers，只放开自己的 unit。</p><h3>4. 重启后 port not ready / 配置被改写 / exit 78</h3><p>若日志是 <code>missing gateway.mode</code> 或配置只剩 ~300B controlUi，就是 5.10 的 <code>ensureDevModeConfig</code> 冲配置。立刻从 last-good 恢复，再上 skip 补丁 + config-guard，不要反复 restart 空转。日常：等待端口时做连续多次 stable check；system mode 下禁止 Monitor 每次改完整 <code>openclaw.json</code>。</p><h3>5. 代理拐走内网管理口</h3><p><code>HTTP_PROXY</code> 存在时，访问 <code>192.168.x.x</code> 管理 API 可能 502。给<strong>精确 IP</strong>进 <code>NO_PROXY</code>/<code>no_proxy</code>（含 loopback、本机、内网 API、代理网关），禁止 CIDR/通配/前缀。curl 认 CIDR 会掩盖 Node/httpx 的 502。</p><h3>6. 开机 209/STDOUT</h3><p>日志目录所在卷未就绪。加 <code>RequiresMountsFor=</code> + log-prepare oneshot。</p><h3>7. 把 Docker 版和商店版混谈</h3><p>cwd/环境若是容器内 <code>/app</code>，说明你在 Docker 实例，不是本文的双 systemd/商店模型。路径与 unit 不可照搬。</p><h2>十二、最终效果</h2><pre>✅ 同一台 FnOS：商店版 :25730 + 自装版 :11751 同时 loopback 在线
✅ 用户/目录/配置/session 完全分离
✅ 重启一侧不影响另一侧
✅ 冷启动有卷就绪与日志准备
✅ 权限脚本可从 root 污染中拉回
✅ 升级分通道，可独立回滚
✅ 另一台设备可按清单复刻，而不是「凭记忆拼」
✅ 实例 A 开机引导可走旧文 6.7 一键脚本，不碰 11751
✅ 实例 B：ensureDevModeConfig skip + config-guard + last-good，防冲配置
✅ NO_PROXY 精确 IP，两边一致</pre><p>这套方案的关键不是「再装一个 OpenClaw」，而是把<strong>隔离契约</strong>写进 systemd 与目录规范：端口、用户、路径、InaccessiblePaths、升级通道，以及<strong>配置所有权</strong>（谁可以写 <code>openclaw.json</code>）。商店版负责「符合 App Center 范式」——优先旧文 6.7 一键 boot；自装版负责「可独立运维的第二生命线」——Monitor 不得用 controlUi 残片覆盖完整配置。两者并存时，先保证边界与配置守卫，再谈插件与通道。</p><p>推荐阅读顺序：</p><ol><li>（含 6.7 一键开机引导）</li><li>本文：双实例并存、自装版复刻与配置防冲</li><li>（多实例共享 Ollama 时）</li><li>（外网暴露面板时）`},{slug:"tunnel-dualstack-full-guide",title:"家庭内网双栈隧道架构：Cloudflare Tunnel + Nginx 统一域名入口实战",subtitle:"Cloudflare Tunnel · CoreDNS · Nginx 反代 · 双栈 · 内网防回环 · 端口隔离 · Shadowsocks over WSS",date:"2026-07-10",tags:["Cloudflare","Tunnel","Nginx","双栈","内网穿透","CoreDNS","HomeNet"],summary:"本文完整记录了一套家庭内网域名统一接入体系：从 Cloudflare Tunnel 公网穿透、Nginx 统一路由分发、CoreDNS 内网域名劫持，到主路由 hosts 防回环、双栈 V4/V6 支持，以及 Shadowsocks over WSS 直连节点。所有配置均脱敏，按本文步骤可在另一台设备上完整复刻。",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>家庭内网双栈隧道架构：Cloudflare Tunnel + Nginx 统一域名入口实战</h1><p class=article-subtitle>Cloudflare Tunnel · CoreDNS · Nginx 反代 · 双栈 · 内网防回环 · 端口隔离 · Shadowsocks over WSS</p><div class=article-meta><span class=article-date>2026-07-10</span><div class=article-tags><span class=tech-tag>Cloudflare</span><span class=tech-tag>Tunnel</span><span class=tech-tag>Nginx</span><span class=tech-tag>双栈</span><span class=tech-tag>内网穿透</span><span class=tech-tag>CoreDNS</span><span class=tech-tag>HomeNet</span></div></div></div><div class=article-content><blockquote><p>本文完整记录了一套家庭内网域名统一接入体系：从 Cloudflare Tunnel 公网穿透、Nginx 统一路由分发、CoreDNS 内网域名劫持，到主路由 hosts 防回环、双栈 V4/V6 支持，以及 Shadowsocks over WSS 直连节点。所有配置均脱敏，按本文步骤可在另一台设备上完整复刻。</p></blockquote><h2>一、方案概述</h2><p>当家庭服务器上运行了十几个服务（NAS、Emby、HomeAssistant、SubStore、下载器等），每个服务一个端口号显然不可维护。更好的做法是：统一域名入口，通过反向代理按 hostname 分发。</p><p>本文的架构解决三个核心问题：</p><ul><li><strong>公网访问</strong>：没有公网 IPv4 怎么办？用 Cloudflare Tunnel 穿透。</li><li><strong>内网访问</strong>：内网设备不走公网绕一圈，通过 DNS 劫持 + 本地 Nginx 直连。</li><li><strong>异地回家</strong>：手机在外面能像在家一样访问内网服务，通过 Shadowsocks over WSS 代理隧道。</li></ul><p>整体架构分三条路径：</p><pre>┌─────────────────────────────────────────────────────────────────┐
│                    外网用户 (IPv4 / IPv6)                       │
│                          ↓                                      │
│            Cloudflare 边缘节点 (天然双栈)                        │
│                          ↓                                      │
│              Cloudflare Tunnel (cloudflared)                     │
│                          ↓                                      │
│                 Nginx 18080 统一入口                              │
│                    ↙    ↓    ↘                                   │
│              Tower/31.2  FnOS/31.5  iStoreOS/31.10              │
│              各 Docker 容器  影音/存储  软路由管理               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     内网用户                                     │
│                          ↓                                      │
│           主路由 hosts → 192.168.31.250                         │
│             (V4: 192.168.31.250 / V6: 2408:...::250)            │
│                          ↓                                      │
│           LanProxy (OpenResty) :443 SSL 卸载                      │
│                          ↓                                      │
│              Tower Nginx :18080 统一入口                          │
│                          ↓                                      │
│                      后端服务                                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    iOS / 异地客户端                               │
│         HomeNet-Fast: fast.deltrivx.com:18443 (直连)              │
│         HomeNet-CF:   substore.deltrivx.com:8443  (CF 中继)      │
│                          ↓                                      │
│               Nginx 18443 SSL → gost 11843 WSS                   │
│               Cloudflared → gost 10089 WSS                       │
│                          ↓                                      │
│                     内网服务                                      │
└─────────────────────────────────────────────────────────────────┘</pre><h2>二、硬件与网络拓扑</h2><table><thead><tr><th>设备</th><th>IP</th><th>角色</th></tr></thead><tbody><tr><td>主路由</td><td>192.168.31.1</td><td>拨号、DHCP、hosts 域名劫持</td></tr><tr><td>Tower</td><td>192.168.31.2</td><td>主力服务器，运行 Cloudflared、Nginx、LanProxy、LanDNS、所有容器</td></tr><tr><td>FnOS</td><td>192.168.31.5</td><td>存储与影音服务</td></tr><tr><td>iStoreOS</td><td>192.168.31.10</td><td>软路由子系统</td></tr><tr><td>LanProxy</td><td>192.168.31.250</td><td>内网 SSL 卸载，OpenResty 容器 br0 独立 IP</td></tr><tr><td>LanDNS</td><td>192.168.31.251</td><td>内网 DNS，CoreDNS 容器 br0 独立 IP</td></tr></tbody></table><p>主路由 DHCP 将 DNS 指向 <code>192.168.31.251</code>（LanDNS），所有内网设备自动使用 CoreDNS 解析。</p><h2>三、Cloudflare 准备工作</h2><h3>3.1 域名与 NS</h3><p>将域名 NS 记录指向 Cloudflare，在面板完成域名添加后获得 Zone ID 和 Account ID。</p><h3>3.2 创建 API Token</h3><p>进入 Cloudflare 控制台 → My Profile → API Tokens → Create Token，选择 "Edit zone DNS" 模板，授权给当前域名。</p><h3>3.3 创建 Tunnel</h3><pre>cloudflared tunnel login
cloudflared tunnel create my-tunnel
# 记录 Tunnel ID，例如 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</pre><p>Tunnel 创建后域名入口为 <code>&lt;TUNNEL_ID&gt;.cfargotunnel.com</code>，后续所有 DNS CNAME 记录指向这个地址。</p><h2>四、容器化部署 Cloudflared</h2><p>使用 Docker 运行，host 网络模式：</p><pre>services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: Cloudflared
    network_mode: host
    restart: always
    cap_add:
      - CAP_NET_RAW
    command: tunnel run
    entrypoint: cloudflared --no-autoupdate
    volumes:
      - /path/to/config.yml:/etc/cloudflared/config.yml</pre><p><code>config.yml</code> 配置示例：</p><pre># /path/to/config.yml
token: "&lt;TUNNEL_TOKEN>"

ingress:
  # 普通域名 → Nginx 18080 统一入口
  - hostname: homeassistant.example.com
    service: http://127.0.0.1:18080
  - hostname: emby.example.com
    service: http://127.0.0.1:18080
  - hostname: fnos.example.com
    service: http://127.0.0.1:18080

  # SubStore 特殊路径：ss-direct 直达 gost
  - hostname: substore.example.com
    path: /ss-direct
    service: http://127.0.0.1:10089
  - hostname: substore.example.com
    service: http://127.0.0.1:18080

  # 直连节点不由 Cloudflared 处理
  - hostname: fast.example.com
    service: http_status:404

  # 兜底
  - service: http_status:404</pre><p>验证并重启：</p><pre>docker exec Cloudflared cloudflared tunnel --config /etc/cloudflared/config.yml ingress validate
docker restart Cloudflared</pre><h2>五、Nginx 统一路由分发层</h2><p>Nginx 监听 18080 端口，按 <code>Host</code> header 分发到对应后端。容器配置：</p><pre>services:
  nginx:
    image: nginx:latest
    container_name: Nginx
    network_mode: host
    restart: always
    volumes:
      - /path/to/nginx/nginx.conf:/etc/nginx/nginx.conf
      - /path/to/nginx/conf.d:/etc/nginx/conf.d
      - /path/to/nginx/certs:/etc/nginx/certs
      - /path/to/nginx/html:/usr/share/nginx/html
      - /path/to/nginx/logs:/var/log/nginx</pre><p>主配置文件：</p><pre># /path/to/nginx/nginx.conf
worker_processes auto;
events { worker_connections 4096; }
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    server_tokens off;

    map $http_upgrade $connection_upgrade {
        default upgrade;
        "" close;
    }

    include /etc/nginx/conf.d/*.conf;
}</pre><p>域名入口 <code>80-domains.conf</code> —— 每个服务一个 server block，按功能分组。以下仅列示例，实际按需添加：</p><pre># 18080 域名代理总入口 · *.example.com
# 注: map $http_upgrade $connection_upgrade 已在 nginx.conf 定义

# FnOS 管理后台（跨主机）
server {
    listen 18080;
    server_name fnos.example.com;
    location / {
        proxy_pass http://192.168.31.5:5080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}

# Emby 媒体服务器（本机服务）
server {
    listen 18080;
    server_name emby.example.com;
    location / {
        proxy_pass http://192.168.31.2:8096;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# HomeAssistant（WebSocket）
server {
    listen 18080;
    server_name homeassistant.example.com;
    location / {
        proxy_pass http://192.168.31.2:8123;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    location /api/websocket {
        proxy_pass http://192.168.31.2:8123/api/websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400s;
    }
}

# 兜底 404
server {
    listen 18080 default_server;
    server_name _;
    location / { return 404; }
}</pre><p>添加新服务时，新增一个 server block 然后 reload：</p><pre>docker exec Nginx nginx -t &amp;&amp; docker exec Nginx nginx -s reload</pre><p><strong>反代模板速查</strong>：</p><p>普通 HTTP：</p><pre>location / {
    proxy_pass http://BACKEND_IP:PORT;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}</pre><p>WebSocket：</p><pre>location / {
    proxy_pass http://BACKEND_IP:PORT;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_set_header Host $host;
    proxy_read_timeout 86400s;
    proxy_send_timeout 86400s;
}</pre><h2>六、内网 DNS 劫持：CoreDNS</h2><p>内网用户访问 <code>*.example.com</code> 时如果走公网会形成回环：内网设备 → 主路由 → 外网 → CF 边缘 → Tunnel → 本机。解决方案：内网 DNS 将域名解析到本地 IP。</p><pre>services:
  landns:
    image: coredns/coredns:1.12.2
    container_name: LanDNS
    networks:
      br0:
        ipv4_address: 192.168.31.251
    restart: always
    command: -conf /etc/coredns/Corefile
    volumes:
      - /path/to/landns/Corefile:/etc/coredns/Corefile
      - /path/to/landns/lan-hosts:/etc/coredns/lan-hosts</pre><pre># /path/to/landns/Corefile
.:53 {
    errors
    log
    hosts /etc/coredns/lan-hosts {
        ttl 30
        fallthrough
    }
    forward . 223.5.5.5 119.29.29.29
    cache 30
}</pre><pre># /path/to/landns/lan-hosts
# V4 解析
192.168.31.250 homeassistant.example.com emby.example.com fnos.example.com substore.example.com

# V6 解析（可选）
2408:8266:2e01:a560::250 homeassistant.example.com emby.example.com fnos.example.com substore.example.com</pre><p>添加新域名时同步更新两行，重启 LanDNS：<code>docker restart LanDNS</code>。</p><p>主路由 DHCP 将 DNS 指向 <code>192.168.31.251</code>。同时主路由 <code>/etc/hosts</code> 中追加同样映射，确保路由器自身不走公网：</p><pre># 主路由 /etc/hosts 追加
192.168.31.250 homeassistant.example.com emby.example.com fnos.example.com substore.example.com
2408:8266:2e01:a560::250 homeassistant.example.com emby.example.com fnos.example.com substore.example.com</pre><h2>七、内网 SSL 卸载：LanProxy</h2><p>内网用户需要 HTTPS 访问，用 OpenResty 统一 SSL 卸载后转发到 Nginx 18080。</p><pre>services:
  lanproxy:
    image: openresty/openresty:alpine
    container_name: LanProxy
    restart: always
    networks:
      br0:
        ipv4_address: 192.168.31.250
        ipv6_address: 2408:8266:2e01:a560::250
    command: /usr/local/openresty/bin/openresty -g 'daemon off;'
    volumes:
      - /path/to/lanproxy/default.conf:/etc/nginx/conf.d/default.conf
      - /path/to/nginx/certs:/etc/nginx/certs
      - /path/to/lanproxy/logs:/var/log/nginx</pre><pre># /path/to/lanproxy/default.conf
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

upstream tunnel_proxy {
    server 192.168.31.248:18080;  # Tower 的 Nginx 18080
    keepalive 32;
}

upstream fast_direct_tls {
    server 192.168.31.248:18443;  # 直连节点
    keepalive 8;
}

# HTTP → HTTPS 重定向
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 308 https://$host$request_uri;
}

# 主 SSL 入口 - 统一代理所有域名
server {
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    http2 on;
    server_name
        homeassistant.example.com
        emby.example.com
        fnos.example.com
        substore.example.com;

    ssl_certificate     /etc/nginx/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/example.com/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        proxy_pass http://tunnel_proxy;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}

# fast 直连节点
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name fast.example.com;

    ssl_certificate     /etc/nginx/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/example.com/privkey.pem;

    location = /ss-direct {
        proxy_pass https://fast_direct_tls;
        proxy_ssl_server_name on;
        proxy_ssl_name fast.example.com;
        proxy_ssl_verify off;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }

    location / { return 404; }
}

# 兜底 404
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name _;
    ssl_certificate     /etc/nginx/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/example.com/privkey.pem;
    return 404;
}</pre><p>证书可通过 AllinSSL 自动续签：</p><pre>services:
  allinssl:
    image: allinssl/allinssl:latest
    container_name: AllinSSL
    restart: always
    network_mode: host
    volumes:
      - /path/to/allinssl:/www/allinssl/data</pre><h2>八、双栈（V4/V6）实现</h2><p><strong>公网双栈</strong>：Cloudflare 边缘节点天然支持 V4/V6，DNS 记录开启代理（橙云）即可，无需额外配置。</p><pre># DNS 添加示例
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/&lt;ZONE_ID>/dns_records" \\\\
  -H "Authorization: Bearer &lt;API_TOKEN>" \\\\
  -H "Content-Type: application/json" \\\\
  -d '{"type":"CNAME","name":"emby","content":"&lt;TUNNEL_ID>.cfargotunnel.com","ttl":1,"proxied":true}'</pre><p><strong>内网双栈</strong>：CoreDNS 同时配置 V4 和 V6 解析，主路由 hosts 同样双行。</p><p>验证命令：</p><pre># 内网解析
dig +short A emby.example.com @192.168.31.251       # → 192.168.31.250
dig +short AAAA emby.example.com @192.168.31.251    # → 2408:...::250

# 公网解析
dig +short A emby.example.com                       # → CF IPv4
dig +short AAAA emby.example.com                    # → CF IPv6</pre><h2>九、HomeNet 直连节点：Shadowsocks over WSS</h2><p>异地访问内网时，通过 gost 建立两条代理路径。gost 嵌入在 Sub-Store 容器内：</p><pre># start-single.sh（gost 部分）
# Fast 路径 - 监听 127.0.0.1:11843
gost -L "ss+ws://chacha20-ietf-poly1305:***@127.0.0.1:11843?path=/ss-direct" &amp;

# CF 路径 - 监听 127.0.0.1:10089
gost -L "ss+ws://chacha20-ietf-poly1305:***@127.0.0.1:10089?path=/ss-direct" &amp;</pre><p>Fast 路径走 Nginx 18443 SSL 转发到 gost 11843：</p><pre># /path/to/nginx/conf.d/443-fast.conf
server {
    listen 18443 ssl;
    listen [::]:18443 ssl;
    server_name fast.example.com;

    ssl_certificate     /etc/nginx/certs/example.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/example.com/privkey.pem;

    location = /ss-direct {
        proxy_pass http://127.0.0.1:11843;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }

    location / { return 404; }
}</pre><p>CF 路径在 Cloudflared ingress 中直接指向 gost 10089，不走 Nginx：</p><pre>  - hostname: substore.example.com
    path: /ss-direct
    service: http://127.0.0.1:10089</pre><p>端口隔离原则：</p><ul><li><code>443</code>：页面、订阅、userinfo</li><li><code>8443</code>：CF 中继 /ss-direct</li><li><code>18443</code>：直连 /ss-direct</li></ul><p>Quantumult X 客户端节点配置：</p><pre># HomeNet-Fast（直连）
shadowsocks=fast.example.com:18443, method=chacha20-ietf-poly1305, password=*** obfs=wss, obfs-host=fast.example.com, obfs-uri=/ss-direct, tag=HomeNet-Fast

# HomeNet-CF（CF 中继）
shadowsocks=substore.example.com:8443, method=chacha20-ietf-poly1305, password=*** obfs=wss, obfs-host=substore.example.com, obfs-uri=/ss-direct, tls-verification=false, tag=HomeNet-CF</pre><h2>十、公网 DNS 批量配置</h2><pre>#!/bin/bash
ZONE_ID="你的ZoneID"
API_TOKEN="***"
TUNNEL_ID="你的TunnelID.cfargotunnel.com"

for name in homeassistant emby fnos substore; do
  curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \\\\
    -H "Authorization: Bearer $API_TOKEN" \\\\
    -H "Content-Type: application/json" \\\\
    -d "{\\\\"type\\\\":\\\\"CNAME\\\\",\\\\"name\\\\":\\\\"$name\\\\",\\\\"content\\\\":\\\\"$TUNNEL_ID\\\\",\\\\"ttl\\\\":1,\\\\"proxied\\\\":true}"
  sleep 0.3
done</pre><p>注意：<code>fast.example.com</code> 的 DNS 应为 A/AAAA 记录指向公网 IP，不开启代理。</p><h2>十一、内网防回环完整流程</h2><pre>内网设备 → 主路由 DHCP → DNS 192.168.31.251 (CoreDNS)
         → CoreDNS hosts 匹配 *.example.com
         → 返回 192.168.31.250 (LanProxy V4) / V6 地址
         → 浏览器访问 https://emby.example.com
         → 主路由 hosts 也指向 31.250（路由器自身）
         → LanProxy 443 SSL 卸载
         → proxy_pass → Tower Nginx 18080
         → Nginx 按 Host header 分发到后端

结果：全程内网，不经过公网，延迟 &lt;1ms</pre><p>注意：<code>192.168.31.248</code> 是 Tower 在 Docker br0 网络中的 IP，你的环境可能不同。</p><h2>十二、容器配置清单</h2><pre>version: '3.8'

networks:
  br0:
    driver: macvlan
    driver_opts:
      parent: br0
    ipam:
      config:
        - subnet: 192.168.31.0/24
          gateway: 192.168.31.1
          ip_range: 192.168.31.248/29
        - subnet: "2408:8266:2e01:a560::/64"
          gateway: "2408:8266:2e01:a560::1"

services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: Cloudflared
    network_mode: host
    restart: always
    cap_add: [CAP_NET_RAW]
    command: tunnel run
    entrypoint: cloudflared --no-autoupdate
    volumes:
      - /mnt/user/appdata/cloudflared/config.yml:/etc/cloudflared/config.yml

  nginx:
    image: nginx:latest
    container_name: Nginx
    network_mode: host
    restart: always
    volumes:
      - /mnt/user/appdata/nginx/nginx.conf:/etc/nginx/nginx.conf
      - /mnt/user/appdata/nginx/conf.d:/etc/nginx/conf.d
      - /mnt/user/appdata/nginx/certs:/etc/nginx/certs
      - /mnt/user/appdata/nginx/html:/usr/share/nginx/html
      - /mnt/user/appdata/nginx/logs:/var/log/nginx

  lanproxy:
    image: openresty/openresty:alpine
    container_name: LanProxy
    restart: always
    networks:
      br0:
        ipv4_address: 192.168.31.250
        ipv6_address: 2408:8266:2e01:a560::250
    command: /usr/local/openresty/bin/openresty -g 'daemon off;'
    volumes:
      - /mnt/user/appdata/lanproxy/default.conf:/etc/nginx/conf.d/default.conf
      - /mnt/user/appdata/nginx/certs:/etc/nginx/certs
      - /mnt/user/appdata/lanproxy/logs:/var/log/nginx

  landns:
    image: coredns/coredns:1.12.2
    container_name: LanDNS
    restart: always
    networks:
      br0:
        ipv4_address: 192.168.31.251
    command: -conf /etc/coredns/Corefile
    volumes:
      - /mnt/user/appdata/landns/Corefile:/etc/coredns/Corefile
      - /mnt/user/appdata/landns/lan-hosts:/etc/coredns/lan-hosts

  allinssl:
    image: allinssl/allinssl:latest
    container_name: AllinSSL
    restart: always
    network_mode: host
    volumes:
      - /mnt/user/appdata/allinssl:/www/allinssl/data</pre><h2>十三、验证流程</h2><pre># Cloudflared
docker ps --filter name=Cloudflared
docker exec Cloudflared cloudflared tunnel --config /etc/cloudflared/config.yml ingress validate

# Nginx
docker exec Nginx nginx -t
curl -I -H "Host: emby.example.com" http://127.0.0.1:18080/

# 公网
dig +short A emby.example.com          # → CF IPv4
dig +short AAAA emby.example.com       # → CF IPv6

# 内网直连
dig +short A emby.example.com @192.168.31.251   # → 192.168.31.250
curl -I https://emby.example.com                # 不走公网

# 代理隧道
curl -k -I https://fast.example.com:18443/ss-direct
curl -k -I https://substore.example.com:8443/ss-direct</pre><h2>十四、添加新服务流程</h2><ol><li>Nginx <code>80-domains.conf</code> 新增 server block</li><li>CoreDNS <code>lan-hosts</code> 新增域名（V4 + V6 两行）</li><li>主路由 <code>/etc/hosts</code> 新增域名（V4 + V6 两行）</li><li>Cloudflared <code>config.yml</code> 新增 ingress 规则</li><li>Cloudflare DNS 添加 CNAME 记录</li><li>验证：<code>nginx -t && cloudflared ingress validate && nginx -s reload && docker restart Cloudflared</code></li></ol><h2>十五、常见问题</h2><h3>Q1：内网访问走公网回环？</h3><p>检查 CoreDNS 是否运行，主路由 DHCP DNS 是否指向 31.251，主路由 hosts 是否正确。内网设备执行 <code>nslookup emby.example.com</code> 确认解析结果。</p><h3>Q2：Cloudflared ingress 验证失败？</h3><p>检查规则顺序——特殊路径必须在普通域名之前，兜底 404 必须在最后。修改后需重启容器。</p><h3>Q3：Nginx 502？</h3><p>检查后端服务端口。使用 <code>curl -I http://127.0.0.1:PORT</code> 直接测试后端。WebSocket 服务需 <code>proxy_http_version 1.1</code> 和 Upgrade 头。</p><h3>Q4：双栈 V6 不通？</h3><p>检查主路由 V6 防火墙是否放行 443。CF 边缘到 Tunnel 回源走 V4，内网 V6 需 LanProxy V6 地址和 hosts 双行正确配置。</p><h3>Q5：如何备份？</h3><pre>tar -czf tunnel-backup-$(date +%Y%m%d).tar.gz \\\\
  /path/to/cloudflared/ /path/to/nginx/conf.d/ /path/to/nginx/nginx.conf \\\\
  /path/to/lanproxy/ /path/to/landns/ /path/to/nginx/certs/</pre><h2>十六、总结</h2><p>核心设计原则：</p><ul><li><strong>统一入口</strong>：所有域名走 Nginx 18080 分发</li><li><strong>职责分离</strong>：Cloudflared 管隧道，Nginx 管路由，CoreDNS 管解析</li><li><strong>内外分流</strong>：内网 DNS 劫持直连，外网 Tunnel 穿透</li><li><strong>双栈就绪</strong>：V4/V6 同时支持</li><li><strong>端口隔离</strong>：页面、订阅、代理隧道不同端口</li></ul><p>按本文步骤替换域名、IP 和 Token 后即可完整复刻。`},{slug:"substore-homenet-traffic-8443",title:"SubStore HomeNet 优化实战：流量显示修复与 ss-direct 8443 独立链路",subtitle:"SubStore · Quantumult X · Shadowsocks over WSS · Cloudflare Tunnel · Nginx 端口隔离",date:"2026-06-12",tags:["SubStore","Quantumult X","Cloudflare","Nginx","HomeNet","WSS"],summary:"SubStore · Quantumult X · Shadowsocks over WSS · Cloudflare Tunnel · Nginx 端口隔离",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>SubStore HomeNet 优化实战：流量显示修复与 ss-direct 8443 独立链路</h1><p class=article-subtitle>SubStore · Quantumult X · Shadowsocks over WSS · Cloudflare Tunnel · Nginx 端口隔离</p><div class=article-meta><span class=article-date>2026-06-12</span><div class=article-tags><span class=tech-tag>SubStore</span><span class=tech-tag>Quantumult X</span><span class=tech-tag>Cloudflare</span><span class=tech-tag>Nginx</span><span class=tech-tag>HomeNet</span><span class=tech-tag>WSS</span></div></div></div><div class=article-content><blockquote><p>本文所有域名、密码、Token、内网地址均已脱敏。示例中的 <code>example.com</code>、<code>substore.example.com</code>、<code>192.168.31.x</code> 只代表架构位置，不对应真实环境。</p></blockquote><h2>一、背景：为什么要优化 HomeNet</h2><p>HomeNet 的目标很简单：人在外面时，手机也能像在家一样访问内网服务。此前已经有一套双节点方案：</p><ul><li><strong>HomeNet-Fast</strong>：优先路径，走家庭 IPv6 / DDNS 直连，延迟最低。</li><li><strong>HomeNet-CF</strong>：备用路径，走 Cloudflare Tunnel，适合运营商网络不稳定、IPv6 不通或公共 Wi-Fi 场景。</li></ul><p>这套方案能用，但实际使用中出现了两个问题：第一，SubStore / Quantumult X 里的流量显示不准确；第二，备用节点 <code>HomeNet-CF</code> 复用了 <code>substore.example.com:443</code>，导致页面、订阅和 WebSocket 隧道职责混在一起，后续排障很不清晰。</p><h2>二、脱敏后的目标架构</h2><p>优化后的架构如下：</p><pre>┌──────────────────────────────────────────────────────┐
│ iPhone / Quantumult X                                │
│   ├─ HomeNet-Fast: home.example.com:18443             │
│   └─ HomeNet-CF:   substore.example.com:8443          │
└──────────────────────┬───────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
┌───────▼────────┐           ┌────────▼────────┐
│ Fast 直连路径   │           │ Cloudflare 备用 │
│ home.example   │           │ substore.example│
│ :18443         │           │ :8443           │
└───────┬────────┘           └────────┬────────┘
        │                             │
┌───────▼─────────────────────────────▼────────┐
│ FnOS / Nginx                                 │
│   443  → SubStore 页面、订阅、userinfo         │
│   8443 → 只转发 /ss-direct                    │
└───────┬──────────────────────────────────────┘
        │
┌───────▼──────────────────────────────────────┐
│ Proxy / SubStore 后端                         │
│   /qx                  输出 QX 订阅            │
│   /homenet-userinfo    输出流量统计             │
│   gost / ss-wss        承载真正代理流量          │
└──────────────────────────────────────────────┘</pre><p>优化原则是：<strong>页面归页面，订阅归订阅，隧道归隧道，统计归统计</strong>。只要职责拆清，后续定位问题会轻松很多。</p><h2>三、问题一：节点能用，但流量显示异常</h2><p>最初的症状通常是这样：</p><ul><li>QX 订阅能拉取，节点也能连通。</li><li>使用代理后，SubStore 或客户端里看不到正确流量。</li><li>有时只显示订阅下载流量，不显示实际代理消耗。</li><li>有时 userinfo 接口存在，但没有返回客户端能识别的 header。</li></ul><p>原因并不神秘：订阅下载、userinfo 查询、代理转发是三条不同链路。如果它们各算各的，或者只有其中一条写入计数，最终显示就会错。</p><h2>四、修复一：统一流量统计与 userinfo</h2><p>最小可用方案是准备一个轻量 Node.js 统计后端，负责两件事：</p><ul><li><code>/qx</code>：输出 Quantumult X 订阅，同时把订阅下载量计入统计。</li><li><code>/homenet-userinfo</code>：输出客户端可识别的 <code>subscription-userinfo</code> header。</li></ul><p>下面是一个适合新手理解的简化版。生产环境建议把计数持久化到 JSON、SQLite 或 Redis，避免进程重启后清零。</p><pre>// homenet-subscription-proxy.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA_FILE = path.join(__dirname, "homenet-traffic.json");

const DEFAULT_TRAFFIC = {
  upload: 0,
  download: 0,
  total: 100 * 1024 * 1024 * 1024,
  expire: Math.floor(Date.now() / 1000) + 30 * 86400,
};

function loadTraffic() {
  try {
    return { ...DEFAULT_TRAFFIC, ...JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) };
  } catch {
    return { ...DEFAULT_TRAFFIC };
  }
}

function saveTraffic(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function addTraffic(upload, download) {
  const data = loadTraffic();
  data.upload += upload;
  data.download += download;
  saveTraffic(data);
  return data;
}

function userinfoHeader(data) {
  return [
    "upload=" + data.upload,
    "download=" + data.download,
    "total=" + data.total,
    "expire=" + data.expire,
  ].join("; ");
}

app.get("/homenet-userinfo", (req, res) => {
  const data = loadTraffic();
  res.setHeader("subscription-userinfo", userinfoHeader(data));
  res.json({
    upload: data.upload,
    download: data.download,
    used: data.upload + data.download,
    total: data.total,
    expire: data.expire,
  });
});

app.get("/qx", (req, res) => {
  const subscription = [
    "shadowsocks=home.example.com:18443,method=chacha20-ietf-poly1305,password=your_password,obfs=wss,obfs-host=home.example.com,obfs-uri=/ss-direct,fast-open=true,udp-relay=false,tag=HomeNet-Fast",
    "shadowsocks=substore.example.com:8443,method=chacha20-ietf-poly1305,password=your_password,obfs=wss,obfs-host=substore.example.com,obfs-uri=/ss-direct,fast-open=true,udp-relay=false,tls-verification=false,server_check_url=http://connectivitycheck.gstatic.com/generate_204,tag=HomeNet-CF",
  ].join("
");

  const data = addTraffic(0, Buffer.byteLength(subscription));
  res.setHeader("subscription-userinfo", userinfoHeader(data));
  res.type("text/plain").send(subscription);
});

app.listen(3100, "0.0.0.0", () => {
  console.log("HomeNet subscription proxy listening on :3100");
});</pre><p>启动它：</p><pre>npm init -y
npm install express
node homenet-subscription-proxy.js</pre><p>验证 userinfo：</p><pre>curl -i http://127.0.0.1:3100/homenet-userinfo</pre><p>重点看响应头里是否有类似内容：</p><pre>subscription-userinfo: upload=0; download=1234; total=107374182400; expire=1781190000</pre><h2>五、Nginx 转发：让订阅和 userinfo 走同一个统计后端</h2><p>如果 SubStore 前面有 Nginx，建议显式增加两个 location，把订阅和流量信息都转给同一个统计服务：</p><pre>server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name substore.example.com;

    ssl_certificate     /path/to/ssl/fullchain.pem;
    ssl_certificate_key /path/to/ssl/privkey.pem;

    # SubStore 前端或已有入口
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    # QX 订阅
    location = /qx {
        proxy_pass http://127.0.0.1:3100/qx;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    # QX / SubStore 可读取的流量信息
    location = /homenet-userinfo {
        proxy_pass http://127.0.0.1:3100/homenet-userinfo;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}</pre><p>这样，订阅内容和 userinfo 都来自同一个计数源，避免“订阅更新了，但流量不更新”的错位。</p><h2>六、问题二：ss-direct 复用 443，职责混乱</h2><p>早期方案里，备用节点常写成：</p><pre>shadowsocks=substore.example.com:443,...,obfs-uri=/ss-direct,tag=HomeNet-CF</pre><p>它能工作，但并不优雅。因为 <code>substore.example.com:443</code> 同时承担：</p><ul><li>SubStore 页面访问。</li><li>订阅文件下载。</li><li><code>/homenet-userinfo</code> 流量信息。</li><li><code>/ss-direct</code> WebSocket 代理隧道。</li></ul><p>一旦出现问题，很难判断是页面反代、订阅后端、WebSocket Upgrade、TLS 证书，还是 Cloudflare 回源配置出了问题。</p><h2>七、修复二：让 ss-direct 独立走 8443</h2><p>更清晰的做法是：保留 <code>443</code> 给页面和订阅，新增 <code>8443</code> 只承载 <code>/ss-direct</code>。</p><pre>server {
    listen 8443 ssl;
    listen [::]:8443 ssl;
    http2 on;

    server_name substore.example.com;

    ssl_certificate     /path/to/ssl/fullchain.pem;
    ssl_certificate_key /path/to/ssl/privkey.pem;

    location = /ss-direct {
        proxy_pass http://192.168.31.5:18443;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}</pre><p>配置完成后先测试再重载：</p><pre>nginx -t
nginx -s reload</pre><p>如果 Nginx 在 Docker 容器里：</p><pre>docker exec nginx nginx -t
docker exec nginx nginx -s reload</pre><h2>八、Cloudflare 与 8443</h2><p>Cloudflare 的 HTTPS 代理支持若干非标准端口，<code>8443</code> 就是常用端口之一。因此 DNS 仍然可以保持橙云代理：</p><pre>substore.example.com  CNAME  &lt;tunnel-id>.cfargotunnel.com  Proxied</pre><p>Cloudflare Tunnel 的常见配置如下：</p><pre># /etc/cloudflared/config.yml
# 示例已脱敏
token: "$TUNNEL_TOKEN"

ingress:
  - hostname: substore.example.com
    service: http://192.168.31.2:3000

  - service: http_status:404</pre><p>注意：Cloudflare 对 <code>substore.example.com:8443</code> 的访问会走 Cloudflare 边缘支持的 8443 端口，再到你的源站或 Tunnel。你的 Nginx 必须确实监听 <code>8443</code>，否则客户端会连不上。</p><h2>九、Quantumult X 节点配置</h2><p>优化后的两个节点可以写成：</p><pre># HomeNet-Fast：优先直连
shadowsocks=home.example.com:18443,method=chacha20-ietf-poly1305,password=your_password,obfs=wss,obfs-host=home.example.com,obfs-uri=/ss-direct,fast-open=true,udp-relay=false,tag=HomeNet-Fast

# HomeNet-CF：Cloudflare 备用，走 8443
shadowsocks=substore.example.com:8443,method=chacha20-ietf-poly1305,password=your_password,obfs=wss,obfs-host=substore.example.com,obfs-uri=/ss-direct,fast-open=true,udp-relay=false,tls-verification=false,server_check_url=http://connectivitycheck.gstatic.com/generate_204,tag=HomeNet-CF</pre><p><code>tls-verification=false</code> 不是最佳实践。它只适合临时处理证书 SAN 不覆盖 <code>substore.example.com</code> 的情况。长期方案应申请包含 <code>substore.example.com</code> 或 <code>*.example.com</code> 的证书，然后打开 TLS 校验。</p><h2>十、完整验证流程</h2><h3>10.1 检查端口监听</h3><pre>ss -ltnp | grep ':8443'</pre><p>期望看到 Nginx 正在监听 <code>0.0.0.0:8443</code> 或 <code>[::]:8443</code>。</p><h3>10.2 检查 userinfo</h3><pre>curl -i https://substore.example.com/homenet-userinfo</pre><p>期望看到：</p><pre>subscription-userinfo: upload=...; download=...; total=...; expire=...</pre><h3>10.3 检查 8443 TLS</h3><pre>curl -k -I https://substore.example.com:8443/ss-direct</pre><p><code>/ss-direct</code> 是 WebSocket 隧道入口，不一定返回普通页面的 <code>200</code>。这一步主要确认 TLS 与 Nginx server 块能被命中。</p><h3>10.4 用 gost 做本机代理实测</h3><p>如果你熟悉 gost，可以临时起一个本地 SOCKS5，把它转到远端 WSS 节点：</p><pre>gost -L socks5://127.0.0.1:18188   -F 'ss+wss://chacha20-ietf-poly1305:your_password@substore.example.com:8443?path=/ss-direct&amp;host=substore.example.com&amp;secure=false'</pre><p>另开一个终端测试：</p><pre>curl --socks5-hostname 127.0.0.1:18188   -o /dev/null -w '%{http_code}
'   http://connectivitycheck.gstatic.com/generate_204</pre><p>返回 <code>204</code> 即代表代理链路可用。</p><h3>10.5 验证流量确实增长</h3><p>测试前先看一次 userinfo：</p><pre>curl -s https://substore.example.com/homenet-userinfo</pre><p>通过 QX 或 gost 下载一小段测试流量，再看一次：</p><pre>curl --socks5-hostname 127.0.0.1:18188   -r 0-524287   -o /tmp/homenet-test.bin   https://speed.cloudflare.com/__down?bytes=524288

curl -s https://substore.example.com/homenet-userinfo</pre><p>如果 <code>download</code> 约增长 512 KiB，就说明代理链路和流量统计都生效。</p><h2>十一、常见问题</h2><h3>Q1：8443 打不开？</h3><ul><li>检查 Nginx 是否监听 <code>8443</code>。</li><li>检查防火墙是否放行 <code>8443/tcp</code>。</li><li>检查 Cloudflare DNS 是否为橙云代理。</li><li>检查是否把 <code>server_name</code> 写成了错误域名。</li></ul><h3>Q2：QX 提示证书错误？</h3><ul><li>临时方案：节点加 <code>tls-verification=false</code>。</li><li>正式方案：签发覆盖 <code>substore.example.com</code> 的证书。</li></ul><h3>Q3：节点能用，流量还是不显示？</h3><ul><li>确认 <code>/homenet-userinfo</code> 返回了 <code>subscription-userinfo</code> header。</li><li>确认订阅地址和 userinfo 地址指向同一个统计后端。</li><li>确认真正代理流量经过了你的统计逻辑；如果只统计订阅下载，代理消耗当然不会变。</li></ul><h3>Q4：为什么不继续复用 443？</h3><p>不是不能复用，而是不利于维护。443 同时承载页面、订阅、userinfo、WebSocket 隧道时，任何一处出问题都会互相干扰。把 <code>/ss-direct</code> 拆到 8443 后，职责更清晰，也更容易回滚。</p><h2>十二、回滚方案</h2><p>如果 8443 方案不适合你的网络，可以按下面顺序回滚：</p><pre># 1. QX 节点端口改回旧值
# substore.example.com:8443 -> substore.example.com:443

# 2. 删除 Nginx 里的 8443 server 块

# 3. 测试配置
nginx -t

# 4. 重载 Nginx
nginx -s reload</pre><p>回滚只影响 <code>HomeNet-CF</code> 备用链路，不影响 SubStore 页面，也不影响 <code>HomeNet-Fast</code> 直连节点。</p><h2>十三、总结</h2><p>这次优化的关键不是“换一个端口”这么简单，而是把链路职责拆清楚：</p><ul><li><code>443</code> 保留给页面、订阅和 userinfo。</li><li><code>8443</code> 专门承载 <code>/ss-direct</code> WSS 隧道。</li><li>订阅和 userinfo 使用同一套统计后端。</li><li>流量验证不只看节点连通，还要看计数前后变化。</li></ul><p>对新手来说，最稳的排障方法是逐层验证：先看端口监听，再看 Nginx location，再看 userinfo header，最后用 QX 或 gost 跑真实流量。每一层都有明确输出，问题就不会混在一起。`},{slug:"memory-embed-ollama",title:"OpenClaw 记忆优化实战：Ollama Embedding + memory-core 本地化部署",subtitle:"Nomic Embed Text · Ollama 容器 · 多 OpenClaw 实例 provider 统一管理 · memory-core 语义搜索",date:"2026-06-01",tags:["OpenClaw","Ollama","FnOS","Docker","Embedding","Memory-Core","Nomic"],summary:"Nomic Embed Text · Ollama 容器 · 多 OpenClaw 实例 provider 统一管理 · memory-core 语义搜索",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>OpenClaw 记忆优化实战：Ollama Embedding + memory-core 本地化部署</h1><p class=article-subtitle>Nomic Embed Text · Ollama 容器 · 多 OpenClaw 实例 provider 统一管理 · memory-core 语义搜索</p><div class=article-meta><span class=article-date>2026-06-01</span><div class=article-tags><span class=tech-tag>OpenClaw</span><span class=tech-tag>Ollama</span><span class=tech-tag>FnOS</span><span class=tech-tag>Docker</span><span class=tech-tag>Embedding</span><span class=tech-tag>Memory-Core</span><span class=tech-tag>Nomic</span></div></div></div><div class=article-content><h2>一、缘起：OpenAI 不可用之后</h2><p>OpenClaw 的 <code>memory-core</code> 插件负责对话记忆、语义搜索和 dreaming。默认使用 OpenAI <code>text-embedding-3-small</code> 作为嵌入模型。</p><p>但由于网络限制 + API 配额耗尽，OpenAI 嵌入接口持续返回 503，导致：</p><ul><li>记忆搜索（memory search）不可用</li><li>Dreaming 自动摘要无法写入</li><li>语义向量库（sqlite-vec）无法增量更新</li></ul><p>解决方案：用本地 Ollama 容器中的 <code>nomic-embed-text</code> 模型替代 OpenAI 嵌入服务，单机运行，零费用。</p><h2>二、整体架构</h2><p>本文涉及三个 OpenClaw 实例和一个 Ollama 容器：</p><pre>                          ┌───────────────────┐
                          │  Ollama Container  │
                          │  nomic-embed-text  │
                          │  127.0.0.1:11434   │
                          └────────┬──────────┘
                                   │
               ┌───────────────────┼───────────────────┐
               ▼                   ▼                   ▼
    ┌──────────────────┐ ┌──────────────┐ ┌──────────────────┐
    │  TencentOS 本机  │ │ FnOS Docker  │ │ FnOS 商店版      │
    │  del_openclaw_bot│ │del_xiaoxia_bot│ │ del_jinger_bot   │
    └──────────────────┘ └──────────────┘ └──────────────────┘</pre><p>三个独立的 OpenClaw 实例各自连接同一个 Ollama 容器，由 <code>memorySearch</code> 配置统一指向。Ollama 不参与对话推理，仅提供向量化嵌入服务。</p><h2>三、Ollama 容器部署</h2><h3>3.1 Docker Compose</h3><pre>services:
  ollama:
    container_name: ollama
    image: ollama/ollama:0.30.0-rc31
    restart: always
    network_mode: host
    hostname: ollama
    environment:
      - TZ=Asia/Shanghai
      - OLLAMA_KEEP_ALIVE=24h
      - OLLAMA_NUM_PARALLEL=4
      - OLLAMA_MAX_LOADED_MODELS=2
    volumes:
      - ./data:/root/.ollama
    cpus: 2
    mem_limit: 2g</pre><p>注意事项：</p><ul><li><strong>不要挂载 /dev/dri 设备</strong>：Intel 核显在 LLM 推理中反而慢于 CPU，Ollama 0.30 会自动丢弃 iGPU</li><li><strong>CPU 限额设为 2 核足够</strong>：embedding 模型仅 137M 参数，推理极快，单次毫秒级</li><li><strong>内存 2G 足够</strong>：nomic-embed-text 加载仅占 ~300MB</li><li><strong>network_mode: host</strong>：方便其他容器/主机通过 localhost 访问</li><li><strong>cgroup v2 警告</strong>：0.30 版本已修复</li></ul><h3>3.2 拉取嵌入模型</h3><pre># 进入容器
docker exec -it ollama ollama pull nomic-embed-text

# 验证
curl http://127.0.0.1:11434/api/tags
# 输出应包含 nomic-embed-text (274MB, embedding-capable)

# 测试嵌入
curl http://127.0.0.1:11434/api/embed \\\\
  -d '{"model":"nomic-embed-text","input":["测试消息"]}'
# 输出: embeddings: 1x768</pre><p><code>nomic-embed-text</code> 是一个 137M 参数的 BERT 类模型，输出 768 维向量，完全本地运行，满足语义搜索需求。</p><h2>四、OpenClaw Provider 统一管理</h2><h3>4.1 核心概念</h3><p>OpenClaw 有两层模型配置：</p><ul><li><strong>openclaw.json</strong> → <code>models.providers</code> 是权威配置源</li><li><strong>models.json</strong> → 由 openclaw.json 通过 merge 模式生成的运行时产物</li></ul><p>两个文件的结构是完全一致的，只是存放位置不同。修改时必须同时保持两者同步。</p><h3>4.2 配置 Ollama Provider</h3><p>在 openclaw.json 和 models.json 的 providers 中添加：</p><pre>"ollama": {
  "baseUrl": "http://127.0.0.1:11434/v1",
  "apiKey": "ollama",
  "api": "openai-completions",
  "models": [
    {
      "id": "nomic-embed-text",
      "name": "nomic-embed-text",
      "input": ["text"]
    }
  ]
}</pre><p>注意：</p><ul><li>Ollama 不需要真实 API Key，填入任意占位即可</li><li>baseUrl 使用 <code>/v1</code> 后缀以兼容 OpenAI 接口格式</li><li><code>models</code> 列表填入 nomic-embed-text，使 OpenClaw 能自动发现嵌入模型</li><li>不要加 <code>capabilities</code> 字段——旧版 schema 不识别</li></ul><h3>4.3 memorySearch 配置</h3><p>在 agents.defaults 中配置 memorySearch：</p><pre>"memorySearch": {
  "provider": "ollama",
  "model": "nomic-embed-text"
}</pre><p>显式指定 <code>model</code> 是可选的——memory-core 能自动发现 provider 下的嵌入模型，但显式指定更安全可靠。</p><h3>4.4 不显示在模型切换列表</h3><p>Ollama 只用于嵌入，不应出现在对话模型的切换列表中。做法是不把 ollama/nomic-embed-text 加入 <code>agents.defaults.models</code> allowlist：</p><pre>"models": {
  "longcat-flash/LongCat-2.0-Preview": {},
  "openai/mimo-v2.5-pro": {},
  "openai/mimo-v2.5": {},
  "anthropic/claude-sonnet-4-6": {},
  // ... 不含 ollama
}</pre><p>ollama 保留在 <code>models.providers</code> 中供 embedding 使用，但在 allowlist 中不出现，模型切换器就不会展示它。</p><h2>五、多 OpenClaw 实例统一管理</h2><h3>5.1 实例总结</h3><table><thead><tr><th>实例</th><th>Host</th><th>用户</th><th>Telegram Bot</th><th>端口</th><th>Embedding</th></tr></thead><tbody><tr><td>TencentOS 本机</td><td>TentcentOS</td><td>root</td><td>del_openclaw_bot</td><td>18789</td><td>Ollama (192.168.31.2)</td></tr><tr><td>FnOS Docker</td><td>FnOS</td><td>root (容器内)</td><td>del_xiaoxia_bot</td><td>host 网络</td><td>Ollama (127.0.0.1)</td></tr><tr><td>FnOS 商店版</td><td>FnOS</td><td>trim.openclaw</td><td>del_jinger_bot</td><td>25730 (loopback)</td><td>Ollama (127.0.0.1)</td></tr></tbody></table><h3>5.2 Provider 同步策略</h3><p>多个实例使用同一套 provider 配置时，必须确保：</p><ul><li>两个文件都要改：<code>openclaw.json</code> 中的 <code>models.providers</code></li><li>和 <code>models.json</code> 中的 <code>providers</code></li><li>两个文件顺序也要一致</li></ul><p>推荐做法：先改 openclaw.json，然后</p><pre># Python 同步两文件
import json
with open('openclaw.json') as f:
    cfg = json.load(f)
with open('models.json') as f:
    m = json.load(f)
# 复制 providers 并保持顺序
order = list(cfg['models']['providers'].keys())
m['providers'] = {k: m['providers'][k]
    for k in order if k in m['providers']}
# 补缺失的
for k in order:
    if k not in m['providers']:
        m['providers'][k] = cfg['models']['providers'][k]
with open('models.json', 'w') as f:
    json.dump(m, f, indent=2)</pre><p>注意：不要手动分别编辑两个文件，否则配置会失步导致 Gateway 报 Invalid config。</p><h3>5.3 ollama 地址差异</h3><p>同一个 Ollama 容器在不同实例中地址不同：</p><ul><li><strong>TencentOS 本机</strong>：<code>http://192.168.31.2:11434/v1</code>（跨主机访问）</li><li><strong>FnOS 上实例（Docker/商店版）</strong>：<code>http://127.0.0.1:11434/v1</code>（同机 localhost）</li></ul><p>这是唯一需要区分的地方，其余配置完全一致。</p><h2>六、Telegram 通道问题排查</h2><h3>6.1 代理依赖</h3><p>所有 OpenClaw 实例的 Telegram API 请求都经过代理 <code>192.168.31.10:7890</code>（某内网代理节点）。代理不稳时会表现为：</p><ul><li><code>fetch timeout after 15000ms</code></li><li><code>deleteWebhook failed: Network request failed</code></li><li><code>sendChatAction failed: Network request failed</code></li><li>Bot 看起来"没反应"</li></ul><p>Docker 版和商店版都需要在启动环境中设置代理变量：</p><pre>export http_proxy=http://192.168.31.10:7890
export https_proxy=http://192.168.31.10:7890
export no_proxy=localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8</pre><h3>6.2 Ingress 队列卡死</h3><p>容器重启时，若 Telegram 消息正在处理，会留下 <code>.json.processing</code> 锁文件阻塞后续所有消息：</p><pre>ingress-spool-default/
├── 0000000220042926.json.processing  ← ⛔ 锁残留
├── 0000000220042927.json             ← 排队等待
├── 0000000220042930.json  ("刚刚回复我了吗")
├── 0000000220042933.json  ("embedding接入成功了吗？")</pre><p>修复方法：删除锁文件即可自动恢复。</p><pre>find /telegram/ingress-spool-default/ \\\\
  -name '*.processing' -mmin +5 -delete</pre><h2>七、效果验证</h2><p>配置完成后，memory-core 的 embedding 状态从 unavailable 变为 ready：</p><pre>变更前:
  Provider: openai  (requested: openai)
  Model: text-embedding-3-small
  Embeddings: unavailable ❌
  Error: 503 Service Unavailable

变更后:
  Provider: ollama  (requested: ollama)
  Model: nomic-embed-text
  Embeddings: ready ✅</pre><p>此外还可通过 API 直接验证：</p><pre>$ curl http://127.0.0.1:11434/api/embed \\\\
  -d '{"model":"nomic-embed-text","input":["测试消息"]}'
→ embeddings: 1 x 768</pre><p>768 维向量正确返回，sqlite-vec 语义搜索库即可正常工作。</p><h2>八、总结</h2><p>通过将 OpenAI 嵌入模型替换为本地 Ollama 的 nomic-embed-text，实现了：</p><ul><li><strong>零成本</strong>：完全本地运行，无 API 调用费用</li><li><strong>零延迟</strong>：同机推理，毫秒级返回</li><li><strong>统一管理</strong>：三个 OpenClaw 实例共享同一嵌入服务</li><li><strong>Provider 维护规范</strong>：openclaw.json 与 models.json 保持同步，避免 Invalid config</li><li><strong>高可用</strong>：避免 OpenAI 503 导致记忆服务中断</li></ul><p>同时本文也记录了多 OpenClaw 实例的统一管理模式、Telegram 通道常见问题及修复方法，可作为 FnOS 上 OpenClaw 运维的参考。`},{slug:"fnos-openclaw-store-optimization",title:"飞牛系统商店版 OpenClaw 优化实战：Monitor API 开机引导、状态修复、备份复用与更新按钮",subtitle:"FnOS App Center · trim.openclaw · bootstrap 引导 · perm-fix 开机前置 · root 护栏 · Gateway loopback · 权限隔离 · 一键备份恢复",date:"2026-07-26",tags:["FnOS","OpenClaw","systemd","Bun","Monitor","Gateway"],summary:"FnOS App Center · trim.openclaw · bootstrap 引导 · perm-fix 开机前置 · root 护栏 · Gateway loopback · 权限隔离 · 一键备份恢复",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>飞牛系统商店版 OpenClaw 优化实战：Monitor API 开机引导、状态修复、备份复用与更新按钮</h1><p class=article-subtitle>FnOS App Center · trim.openclaw · bootstrap 引导 · perm-fix 开机前置 · root 护栏 · Gateway loopback · 权限隔离 · 一键备份恢复</p><div class=article-meta><span class=article-date>2026-07-26</span><div class=article-tags><span class=tech-tag>FnOS</span><span class=tech-tag>OpenClaw</span><span class=tech-tag>systemd</span><span class=tech-tag>Bun</span><span class=tech-tag>Monitor</span><span class=tech-tag>Gateway</span></div></div></div><div class=article-content><h2>一、写在前面：本文解决什么问题</h2><p>飞牛系统（FnOS）商店版 OpenClaw 的运行方式与普通 Docker 部署不同。它不是直接由 root 启动一个裸进程，而是由 FnOS App Center 管理应用包，再由商店版 Monitor 启动 OpenClaw Gateway。本文记录完整的商店版优化过程：反向定位运行路径、修复开机自启、根治 root Monitor 残留、修复控制面板卡“启动中”、梳理“检查更新”按钮逻辑，并沉淀可一键还原或迁移的备份方案。</p><p><strong>2026-07-20 修订说明：</strong>早期文章使用 <code>openclaw-ensure.service</code> 在 Monitor 就绪后由 systemd 直接 <code>runuser</code> 拉起 Gateway。现行稳定方案已演进为 <code>trim-openclaw-gateway.service</code> + drop-in + <code>trim-openclaw-bootstrap.sh</code>：只等待商店 Monitor 的 unix socket API ready，再通过 <code>POST /app/trim-openclaw/api/install</code> 的 <code>action=start</code> 让 <strong>Monitor 自己</strong> 拉起 Gateway。这样生命周期完全落在 App Center 范式内，避免 ensure 与面板抢进程。旧 ensure 方案保留为第六节反面教材短节。</p><p><strong>2026-07-21 修订说明：</strong>对齐 Hermes 增强文的「从零到可跑」体验，新增第六节 <code>6.7</code> 一键安装脚本 <code>install-openclaw-gateway-boot.sh</code>：在已商店安装 <code>trim.openclaw</code> 的前提下，root 一条命令写入 base unit + drop-in + bootstrap、清理旧 ensure、enable/start 并做 30 秒自检。NO_PROXY 示范改为<strong>精确 IP 列表</strong>（勿写 CIDR/通配），避免 Node/httpx 等运行时不认网段导致内网请求被代理拐走。全量数据迁移仍走第十三节备份还原，与一键 boot 职责分离。</p><p><strong>2026-07-26 修订说明：</strong>实机踩坑后把开机链路再硬化一版。现象是 root 曾执行 <code>cmd/main start</code> → root Monitor/Gateway 占 <code>:25730</code>，配置被写成 root 属主 → boot bootstrap <code>EACCES openclaw.json</code> / 面板 <code>running=false</code> 但 health 仍 live。修订要点：① <code>openclaw-store-perm-fix.service</code> <strong>enable 进 multi-user</strong>，boot 先修 <code>.openclaw</code> 属主（path 触发仍保留）；② <code>trim-openclaw-gateway.service</code> 改为<strong>干净 oneshot</strong> 直接 <code>ExecStart=bootstrap</code>（不再依赖「旧 base 直拉 + drop-in 改写」半旧状态）；③ bootstrap 增加 perm 预检、监听者<strong>身份校验</strong>（仅 <code>trim.openclaw</code> + health 才 skip；root 脏 store 进程可回收）、失败后 perm-fix + 重试 1 次、成功尽量对齐面板 <code>running=true</code>；④ <code>cmd/main</code> root 护栏（root <code>start/restart</code> 默认 exit 77，紧急 <code>OPENCLAW_STORE_ALLOW_ROOT=1</code>）；⑤ <code>gateway-start.sh</code> 只转发 bootstrap；⑥ <code>openclaw-store-maint ensure</code> = perm-fix + bootstrap（废弃对 ensure unit 的引用）。冷启动验收：Monitor/Gateway user=<code>trim.openclaw</code>、cgroup 含 <code>trim_app_center</code>、health live、面板 running=true、gateway unit Result=success。</p><p>若同一台 FnOS 还要并行<strong>自装第二实例</strong>，见 <!>。本文只覆盖商店版（实例 A）。</p><p>本文所有域名、Token、真实内网地址均做脱敏。示例中的 <code>example.com</code>、<code>192.168.x.x</code>、<code>&lt;TOKEN&gt;</code> 请替换为你自己的环境。商店用户名 <code>trim.openclaw</code> 为 FnOS 常见约定，可按实际保留。</p><h2>二、目标架构</h2><p>优化后的商店版 OpenClaw 采用以下链路（2026-07 修订）：</p><pre>FnOS App Center / trim_app_center
  → /var/apps/trim.openclaw/cmd/main（商店生命周期，user=trim.openclaw）
    → bun /vol1/@appcenter/trim.openclaw/server/index.js  （Monitor）
      → Unix Socket: /vol1/@appcenter/trim.openclaw/trim.openclaw.sock
      → API: /app/trim-openclaw/api/health | /api/status | /api/install
      → 由 Monitor 拉起 OpenClaw Gateway
          → 127.0.0.1:25730 / [::1]:25730  （loopback only）

systemd 开机链（2026-07-26）：
  openclaw-store-perm-fix.service   # enable；boot 先修 .openclaw 属主
  openclaw-store-perm-fix.path      # 运行中 openclaw.json 被写坏仍自愈
  openclaw-pin-heal.service/path     # 可选；After perm-fix
  trim-openclaw-gateway.service      # enabled oneshot，干净主 unit
    After= network-online + vol1 + trim_app_center + perm-fix + pin-heal
    User=root（只跑 bootstrap，不长期托管 Gateway）
    ExecStart=/usr/local/sbin/trim-openclaw-bootstrap.sh
  bootstrap：
    1) perm-fix 预检；trim.openclaw 必须可读 openclaw.json
    2) 等 sock + health API ready（最多约 90s）
    3) :25730 已 LISTEN：
         - owner=trim.openclaw 且 health live → success skip
         - root/商店脏进程 → 只回收 store 脏进程后再 start
         - 自装 11751 / 无关进程 → fail，绝不杀
    4) 否则 POST install {"action":"start","instanceId":"default"}
       失败则 perm-fix + 重试 1 次
    5) 验收 health live + user=trim.openclaw（尽量 running=true）
  成功后 unit inactive (dead) + Result=success 属正常</pre><p>关键设计原则：</p><ul><li><strong>商店版独立用户运行</strong>：使用 <code>trim.openclaw</code>，不与 root、Docker 版或其它自装实例混用。</li><li><strong>Gateway 仅监听 loopback</strong>：默认 <code>127.0.0.1:25730</code> / <code>[::1]:25730</code>，外网入口走反代或 Tunnel。</li><li><strong>Monitor 归 FnOS App Center</strong>：禁止 systemd/root 直接 <code>cmd/main start</code> 拉起 Monitor。</li><li><strong>systemd 只做开机引导</strong>：不长期托管 Gateway 进程；通过 Monitor API <code>action=start</code> 委托启动。</li><li><strong>端口已占用要验身份</strong>：仅当监听者为 <code>trim.openclaw</code> 且 health live 才 skip；root 脏 store 进程要回收，禁止「见端口就成功」。</li><li><strong>boot 先修权限</strong>：<code>openclaw-store-perm-fix</code> 进 multi-user，避免 root 污染后的 <code>EACCES openclaw.json</code>。</li><li><strong>禁止 root 生命周期</strong>：<code>cmd/main start/restart</code> 在 root 下默认拒绝（紧急用 <code>OPENCLAW_STORE_ALLOW_ROOT=1</code>）。</li><li><strong>更新前优雅停止 Gateway</strong>：避免安装包替换过程中仍占用旧文件。</li><li><strong>更新顺序</strong>：优先商店插件 → 渠道插件 → OpenClaw 基底（见第八～十节，运维检查清单）。</li></ul><h2>三、路径与运行环境定位</h2><p>在 FnOS 中，商店应用通常由 <code>/var/apps/&lt;appname&gt;</code> 暴露入口，再通过软链接指向 <code>/vol1/@appcenter</code> 与 <code>/vol1/@apphome</code>。以商店版 OpenClaw 为例：</p><pre># 商店应用入口
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
/var/apps/nodejs_v24/target/bin/node --version</pre><p>在本次环境中，Bun 为 1.3.x，Node.js 为 v24.x。你不必强求小版本完全一致，但建议 Bun ≥ 1.3.9，Node.js 使用 FnOS 商店依赖中声明的 v24 系列。</p><h3>3.1 本次修订后的运行快照（2026-07）</h3><p>以下状态可作为排查基准线（数值已脱敏/抽象化，以你本机 <code>ss</code>/<code>ps</code>/<code>systemctl</code> 为准）：</p><pre>主机：FnOS
商店应用：trim.openclaw
OpenClaw 包版本（安装目录 package.json）：2026.7.x
OpenClaw Gateway：127.0.0.1:25730 / [::1]:25730
Monitor Socket：/vol1/@appcenter/trim.openclaw/trim.openclaw.sock
systemd：trim-openclaw-gateway.service
  enabled
  ActiveState=inactive / SubState=dead（oneshot 成功后正常）
  Result=success / ExecMainStatus=0
  主 unit：干净 oneshot（2026-07-26 起推荐，可无 drop-in）
  ExecStart：/usr/local/sbin/trim-openclaw-bootstrap.sh
  前置：openclaw-store-perm-fix.service（enabled）

Monitor:
  用户：trim.openclaw
  进程：bun /vol1/@appcenter/trim.openclaw/server/index.js

Gateway:
  用户：trim.openclaw
  工作目录：/vol1/@apphome/trim.openclaw/data/openclaw
  配置：/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json
  环境要点：HOME / OPENCLAW_DATA_DIR / OPENCLAW_CONFIG_PATH
  可选代理：HTTP(S)_PROXY=http://192.168.x.x:7890
            NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1

辅助脚本（可选）：
  /usr/local/sbin/trim-openclaw-gateway-start.sh  # 仅转发 bootstrap，禁止直拉
  /usr/local/sbin/openclaw-store-permission-fix.sh
  /usr/local/sbin/openclaw-store-maint            # ensure=perm-fix+bootstrap
  /usr/local/sbin/openclaw-pin-heal.sh            # 本地 pin 补丁重打（若启用）</pre><p>注意：如果同时存在 Docker 版、cwd 为 <code>/app</code>、或其它端口的自装 Gateway（例如 <code>:11751</code>），它们<strong>不是</strong>本文的商店版。同机双实例请读 <!>；排查商店版时务必用用户 <code>trim.openclaw</code> + 端口 <code>25730</code> 过滤。</p><h2>四、商店版主启动脚本 cmd/main</h2><p>商店版主脚本位于：</p><pre>/var/apps/trim.openclaw/cmd/main</pre><p>它的职责不是直接跑 Gateway，而是启动商店版 Monitor：</p><pre>#!/bin/bash

LOG_FILE="\\\${TRIM_PKGVAR}/info.log"
PID_FILE="\\\${TRIM_PKGVAR}/app.pid"

# Bun / Node.js path
export PATH=/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:$PATH

# Data directory (@apphome)
OPENCLAW_DATA_DIR="\\\${TRIM_PKGHOME}/data"

# Static files directory (frontend)
STATIC_DIR="\\\${TRIM_APPDEST}/ui"
SOCKET_PATH="\\\${TRIM_APPDEST}/trim.openclaw.sock"
OPENCLAW_PATCHES_DIR="\\\${TRIM_APPDEST}/vendor/openclaw-patches/dist"

# Custom SOUL.md shipped with this package
SOUL_MD_SRC="\\\${TRIM_APPDEST}/../config/prompts/SOUL.md"

# Monitor command
CMD="env OPENCLAW_DATA_DIR="\\\${OPENCLAW_DATA_DIR}" STATIC_DIR="\\\${STATIC_DIR}" SOUL_MD_SRC="\\\${SOUL_MD_SRC}" MONITOR_SOCKET_PATH="\\\${SOCKET_PATH}" MONITOR_ACCESS_MODE="public" OPENCLAW_PATCHES_DIR="\\\${OPENCLAW_PATCHES_DIR}" bun "\\\${TRIM_APPDEST}/server/index.js""

log_msg() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> \\\${LOG_FILE}
}

check_process() {
    local pid=$1
    if kill -0 "\\\${pid}" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

status() {
    if [ -f "\\\${PID_FILE}" ]; then
        pid=$(head -n 1 "\\\${PID_FILE}" | tr -d '[:space:]')
        if check_process "\\\${pid}"; then
            return 0
        else
            rm -f "\\\${PID_FILE}"
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
    rm -f "\\\${SOCKET_PATH}"
    bash -c "\\\${CMD}" >> \\\${LOG_FILE} 2>&amp;1 &amp;
    printf "%s" "$!" > \\\${PID_FILE}
    return 0
}

stop_process() {
    log_msg "Stopping process ..."

    if [ -r "\\\${PID_FILE}" ]; then
        pid=$(head -n 1 "\\\${PID_FILE}" | tr -d '[:space:]')

        log_msg "pid=\\\${pid}"
        if ! check_process "\\\${pid}"; then
            rm -f "\\\${PID_FILE}"
            log_msg "remove pid file 1"
            return
        fi

        log_msg "send TERM signal to PID:\\\${pid}..."
        kill -TERM \\\${pid} >> \\\${LOG_FILE} 2>&amp;1

        local count=0
        while check_process "\\\${pid}" &amp;&amp; [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
            log_msg "waiting process terminal... (\\\${count}s/10s)"
        done

        if check_process "\\\${pid}"; then
            log_msg "send KILL signal to PID:\\\${pid}..."
            kill -KILL "\\\${pid}"
            sleep 1
            rm -f "\\\${PID_FILE}"
        else
            log_msg "process killed... "
        fi
    fi

    rm -f "\\\${SOCKET_PATH}"
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
chmod 770 /var/apps/trim.openclaw/target/bin/openclaw</pre><h2>六、systemd 开机引导：Monitor API bootstrap（现行方案）</h2><p>这一节是 2026-07 修订的核心。早期方案用 <code>openclaw-ensure.service</code> 在 Monitor 就绪后以 <code>runuser</code> <strong>直接</strong>执行 <code>openclaw gateway run</code>。中期方案用「历史 base unit 直拉 gateway + drop-in 改写成 bootstrap」。现行（2026-07-26）方案改为：</p><ul><li>systemd <strong>干净 oneshot 主 unit</strong> 只跑 bootstrap，不再半旧半 drop-in；</li><li>boot 链前置 <code>openclaw-store-perm-fix</code>，避免 <code>EACCES openclaw.json</code>；</li><li>bootstrap 经 Monitor API 拉 Gateway，并校验监听者身份，杜绝 root 旁路假健康。</li></ul><p>相关路径：</p><pre>/etc/systemd/system/trim-openclaw-gateway.service
/etc/systemd/system/openclaw-store-perm-fix.service
/etc/systemd/system/openclaw-store-perm-fix.path
/usr/local/sbin/trim-openclaw-bootstrap.sh
/usr/local/sbin/openclaw-store-permission-fix.sh
/usr/local/sbin/openclaw-store-maint          # ensure = perm-fix + bootstrap
/usr/local/sbin/trim-openclaw-gateway-start.sh  # 仅转发 bootstrap，禁止直拉</pre><h3>6.1 干净 oneshot 主 unit（推荐）</h3><p>不要再维护「base 直拉 Gateway + drop-in 清空 ExecStart」的双层结构。主 unit 直接：</p><pre># /etc/systemd/system/trim-openclaw-gateway.service
[Unit]
Description=Bootstrap Trim OpenClaw Gateway Once at Boot (via App Center monitor API)
Wants=network-online.target
After=network-online.target local-fs.target vol1.mount trim_app_center.service openclaw-store-perm-fix.service openclaw-pin-heal.service

[Service]
Type=oneshot
User=root
Group=root
Environment=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
Environment=NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
Environment=no_proxy=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
ExecStart=/usr/local/sbin/trim-openclaw-bootstrap.sh
RemainAfterExit=no
Restart=no
TimeoutStartSec=180
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target</pre><p><code>User=root</code> 仅用于：perm-fix、识别/回收 root 脏 store 进程、调用 Monitor API。Gateway 本身仍必须由 Monitor 以 <code>trim.openclaw</code> 拉起。成功后 <code>inactive (dead)</code> + <code>Result=success</code> 正常。</p><h3>6.2 boot 前置：perm-fix（必 enable）</h3><pre># /etc/systemd/system/openclaw-store-perm-fix.service
[Unit]
Description=Fix store OpenClaw (.openclaw) ownership when non-store users rewrite config
After=local-fs.target vol1.mount
Before=trim-openclaw-gateway.service openclaw-pin-heal.service
ConditionPathIsDirectory=/vol1/@apphome/trim.openclaw/data/home/.openclaw

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/openclaw-store-permission-fix.sh --fix

[Install]
WantedBy=multi-user.target

# path 单元继续盯 openclaw.json，运行中被 root 写坏可秒级自愈
# WantedBy=multi-user.target
# PathChanged/PathModified=.../home/.openclaw/openclaw.json</pre><p>脚本范围建议<strong>只修</strong> <code>/vol1/@apphome/trim.openclaw/data/home/.openclaw</code> 下 owner ≠ <code>trim.openclaw</code> 的文件，避免无脑 <code>chown -R</code> 过大。支持 <code>--fix / --check / --dry-run</code>。</p><h3>6.3 bootstrap 行为（2026-07-26 推荐语义）</h3><p>脚本以 root 执行；它<strong>不</strong>直接 fork Gateway，只通过 unix socket 调 Monitor API。sock 文件可能在异常重启后残留，因此必须用 health 探测，不能只判断 <code>-S socket</code>。</p><p>推荐逻辑（可按此实现/对照现网脚本）：</p><ol><li>调用 <code>openclaw-store-permission-fix.sh --fix</code>；确认 <code>trim.openclaw</code> 可读 <code>openclaw.json</code>，否则 exit 1。</li><li>最多约 90s 等待 sock + <code>/api/health</code> 成功。</li><li>若 <code>:25730</code> 已 LISTEN：解析 pid/user/cwd/父进程；<code>trim.openclaw</code> + health live → success skip；可识别的 store 脏进程（常见 root Monitor 子 Gateway）→ 只回收这对再继续；自装 <code>:11751</code> / 无关进程 → fail，绝不杀。</li><li>否则 <code>POST /api/install</code> <code>{"action":"start","instanceId":"default"}</code>，等待 SSE <code>complete</code> + <code>success</code>。</li><li>失败则再 perm-fix + 回收脏端口后重试 1 次。</li><li>最终验收：health live 且监听 user=<code>trim.openclaw</code>；尽量再读 <code>/api/status</code> 的 <code>running=true</code>（避免旁路假健康）。</li></ol><p>最小可用骨架（旧版「见端口就 skip」已不够，请叠加上面身份校验）：</p><pre>#!/bin/sh
set -eu

socket=/vol1/@appcenter/trim.openclaw/trim.openclaw.sock
health_url=http://localhost/app/trim-openclaw/api/health
start_url=http://localhost/app/trim-openclaw/api/install

# 残留 socket inode 不等于 Monitor 已就绪
monitor_ready=0
for _ in $(seq 1 90); do
  if [ -S "$socket" ] &amp;&amp; timeout 3 curl --unix-socket "$socket" -fsS "$health_url" >/dev/null 2>&amp;1; then
    monitor_ready=1
    break
  fi
  sleep 1
done

if [ "$monitor_ready" -ne 1 ]; then
  echo "OpenClaw store monitor API did not become ready within 90 seconds" >&amp;2
  exit 1
fi

if ss -lntH sport = :25730 | grep -q LISTEN; then
  echo "OpenClaw store gateway already listens on 25730; bootstrap skipped"
  exit 0
fi

result=$(mktemp /vol1/@apphome/trim.openclaw/data/runtime/trim-openclaw-bootstrap.XXXXXX)
trap 'rm -f "$result"' EXIT HUP INT TERM

if ! timeout 90 curl --unix-socket "$socket" -fsS -N \\\\
  -X POST -H "Content-Type: application/json" \\\\
  --data-binary '{"action":"start","instanceId":"default"}' \\\\
  "$start_url" | tee "$result"; then
  echo "OpenClaw store monitor start request failed" >&amp;2
  exit 1
fi

if grep -q '"event":"complete"' "$result" &amp;&amp; grep -q '"success":true' "$result"; then
  echo "OpenClaw store gateway bootstrap completed"
  exit 0
fi

if grep -q '"event":"error"' "$result"; then
  echo "OpenClaw store monitor reported a startup error" >&amp;2
else
  echo "OpenClaw store monitor returned no successful completion event" >&amp;2
fi
exit 1</pre><pre>install -m 0755 trim-openclaw-bootstrap.sh /usr/local/sbin/trim-openclaw-bootstrap.sh
install -m 0755 openclaw-store-permission-fix.sh /usr/local/sbin/openclaw-store-permission-fix.sh
# 放置干净 oneshot unit + perm-fix unit/path 后：
systemctl daemon-reload
systemctl enable openclaw-store-perm-fix.service openclaw-store-perm-fix.path
systemctl enable trim-openclaw-gateway.service
# 冷启动验证：reboot 后
systemctl show -p Result -p ExecMainStatus trim-openclaw-gateway.service
# 期望：Result=success；:25730 LISTEN user=trim.openclaw；面板 running=true；cgroup 含 trim_app_center</pre><h3>6.4 历史：drop-in 改写 base unit（可废弃）</h3><p>若你环境仍是「base unit 写 gateway run + <code>20-boot-order.conf</code> 清空 ExecStart」，可继续工作，但维护成本高。2026-07-26 起推荐合并为上一节干净主 unit，并删除旧 drop-in。历史 drop-in 示意仅供对照：</p><pre># 历史 drop-in（可废弃）
# /etc/systemd/system/trim-openclaw-gateway.service.d/20-boot-order.conf
[Unit]
After=network-online.target trim_app_center.service
[Service]
Type=oneshot
ExecCondition=
ExecStart=
ExecStart=/usr/local/sbin/trim-openclaw-bootstrap.sh
RemainAfterExit=no</pre><p>旧 base unit 若仍描述环境变量/代理，可作文档对照；真正执行路径应只有 bootstrap。不要在没有 bootstrap 的情况下把 base unit 当长期 Gateway supervisor——商店版 Gateway 应由 Monitor 托管。</p><h3>6.4b 代理环境变量备忘（可选）</h3><p>若 Gateway/Monitor 需要出站代理，优先写在商店 <code>/vol1/@appconf/trim.openclaw/.env</code>（由 pin-heal/cmd/main LOCAL PATCH source），NO_PROXY 用<strong>精确 IP</strong>。下面保留一份历史 base 字段备忘，便于对照，不是开机主路径：</p><pre># /etc/systemd/system/trim-openclaw-gateway.service
[Unit]
Description=Bootstrap Trim OpenClaw Gateway Once at Boot
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=trim.openclaw
Group=trim.openclaw
WorkingDirectory=/vol1/@apphome/trim.openclaw/data/openclaw
Environment=HOME=/vol1/@apphome/trim.openclaw/data/home
Environment=OPENCLAW_DATA_DIR=/vol1/@apphome/trim.openclaw/data
Environment=OPENCLAW_CONFIG_PATH=/vol1/@apphome/trim.openclaw/data/home/.openclaw/openclaw.json
Environment=OPENCLAW_HIDE_BANNER=1
Environment=PATH=/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin:/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
# 可选代理（无代理则删除）
Environment=HTTP_PROXY=http://192.168.x.x:7890
Environment=HTTPS_PROXY=http://192.168.x.x:7890
Environment=NO_PROXY=localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1
# 下列 ExecStart 会被 drop-in 清空；仅作「无 drop-in 时」的兜底语义
ExecCondition=/bin/bash -c "! ss -lntH sport = :25730 | grep -q LISTEN"
ExecStart=/vol1/@apphome/trim.openclaw/data/openclaw/node_modules/.bin/openclaw gateway run --port 25730 --bind loopback
Restart=no
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target</pre><h3>6.5 可选：手工 gateway-start 脚本</h3><p><strong>禁止</strong>再作为开机主路径或 root 直拉 <code>gateway run</code>。推荐内容只剩一行转发：</p><pre>#!/bin/bash
# DEPRECATED direct gateway launcher → always bootstrap
exec /usr/local/sbin/trim-openclaw-bootstrap.sh</pre><p>运维入口可用 <code>openclaw-store-maint ensure</code>（= perm-fix + bootstrap），不要 <code>systemctl restart</code> 一个不存在的 ensure 服务。</p><h3>6.5b（原 6.5 说明）</h3><p>另有 <code>/usr/local/sbin/trim-openclaw-gateway-start.sh</code> 一类脚本，用于排障时在正确环境变量下启动/接管 Gateway（处理端口占用、App Center 子进程等）。它<strong>不是</strong>开机主路径；开机请走 bootstrap → Monitor API。</p><h3>6.6 历史方案：openclaw-ensure（反面教材，勿再照抄）</h3><p>旧文曾给出 <code>openclaw-ensure.service</code> + <code>openclaw-ensure.sh</code>：等待 Monitor 后 <code>runuser -u trim.openclaw -- openclaw gateway run ...</code>。问题与演进：</p><ul><li>Gateway 脱离 Monitor 进程树，面板状态/优雅停止可能不一致。</li><li>若 ensure 误调 <code>cmd/main start</code>，会以 root 起第二套 Monitor，造成权限污染与双 socket。</li><li>现行环境通常已删除 ensure unit/脚本；若仍存在，应迁移到 bootstrap 并 disable ensure。</li></ul><p>判断踩坑：</p><pre>ps -eo user,pid,cmd | grep -E 'server/index.js|openclaw-gateway|openclaw gateway' | grep -v grep
# 错误：出现 root 用户的 Monitor 或双 Monitor
# 正确：Monitor 与 Gateway 均为 trim.openclaw；仅一个 :25730</pre><h3>6.7 从零到可跑：一键安装脚本（其它主机直接复刻）</h3><p>第六节前面是「分步理解 + 手工落地」。若你只想在<strong>已商店安装 trim.openclaw</strong> 的 FnOS 上，把开机引导一次写齐，可用下面脚本（对齐 Hermes 文第六节体验）。</p><p>脚本会：检查商店用户与路径 → 备份并禁用旧 <code>openclaw-ensure*</code>（若有）→ 写入 base unit + <code>20-boot-order.conf</code> + <code>trim-openclaw-bootstrap.sh</code> → <code>daemon-reload</code> / enable / start 一次 → 最小验收。它<strong>不</strong>代替商店安装，<strong>不</strong>写入 sessions/token/完整 <code>openclaw.json</code>（那是第十三节全量备份还原的事），也<strong>不</strong>触碰自装实例 <code>openclaw-11751*</code>。</p><p><strong>执行前请改顶部变量：</strong></p><ol><li><code>APP_CENTER</code> / <code>APP_HOME</code>：卷名与商店路径不同时改这里。</li><li><code>GW_PORT</code>：默认 <code>25730</code>。</li><li><code>HTTP_PROXY_DEFAULT</code> / <code>HTTPS_PROXY_DEFAULT</code>：无代理写成空字符串 <code>""</code>。</li><li><code>NO_PROXY_DEFAULT</code>：写成<strong>精确 IP</strong>，禁止 CIDR/通配。</li></ol><pre>#!/bin/bash
# install-openclaw-gateway-boot.sh
# FnOS 商店版 OpenClaw 开机 bootstrap 一键落地
# 要求：已在 App Center 安装 trim.openclaw；以 root 运行
set -euo pipefail

# ========== 按环境修改 ==========
APP_CENTER=/vol1/@appcenter/trim.openclaw
APP_HOME=/vol1/@apphome/trim.openclaw
GW_PORT=25730
# 无代理：两行写成 ""
HTTP_PROXY_DEFAULT="http://192.168.x.x:7890"
HTTPS_PROXY_DEFAULT="http://192.168.x.x:7890"
# 精确 IP，勿用 CIDR/通配
NO_PROXY_DEFAULT="localhost,127.0.0.1,192.168.x.2,192.168.x.5,192.168.x.10,::1"
# ========== 一般不用改 ==========
SOCK=\\\${APP_CENTER}/trim.openclaw.sock
DATA=\\\${APP_HOME}/data
HOME_DIR=\\\${DATA}/home
OPENCLAW_DIR=\\\${DATA}/openclaw
RUNTIME_DIR=\\\${DATA}/runtime
UNIT=/etc/systemd/system/trim-openclaw-gateway.service
DROPIN_DIR=/etc/systemd/system/trim-openclaw-gateway.service.d
DROPIN=\\\${DROPIN_DIR}/20-boot-order.conf
BOOTSTRAP=/usr/local/sbin/trim-openclaw-bootstrap.sh
BACKUP_DIR=/root/backup/openclaw-boot-$(date +%Y%m%d-%H%M%S)

die() { echo "ERROR: $*" >&amp;2; exit 1; }
need() { command -v "$1" >/dev/null 2>&amp;1 || die "缺少命令: $1"; }

[ "$(id -u)" -eq 0 ] || die "请用 root 执行"
need ss; need curl; need systemctl; need install; need timeout

id trim.openclaw >/dev/null 2>&amp;1 || die "用户 trim.openclaw 不存在（请先商店安装 OpenClaw）"
[ -d "\\\${APP_CENTER}" ] || die "APP_CENTER 不存在: \\\${APP_CENTER}"
[ -d "\\\${APP_HOME}" ] || die "APP_HOME 不存在: \\\${APP_HOME}"
[ -d "\\\${OPENCLAW_DIR}" ] || die "OPENCLAW_DIR 不存在: \\\${OPENCLAW_DIR}（商店安装可能未完成）"
[ -x /var/apps/bunjs/target/bin/bun ] || die "找不到 bun（/var/apps/bunjs/target/bin/bun）"

echo "==> 1) 备份并禁用冲突 ensure unit（不碰 openclaw-11751*）"
mkdir -p "\\\${BACKUP_DIR}"
for u in openclaw-ensure openclaw-gateway-ensure; do
  systemctl disable --now "\\\${u}.service" 2>/dev/null || true
done
for f in \\\\
  /etc/systemd/system/openclaw-ensure.service \\\\
  /etc/systemd/system/openclaw-gateway-ensure.service \\\\
  /usr/local/sbin/openclaw-ensure.sh \\\\
  /usr/local/bin/openclaw-ensure.sh
do
  [ -e "$f" ] &amp;&amp; mv "$f" "\\\${BACKUP_DIR}/" || true
done
[ -d /etc/systemd/system/openclaw-ensure.service.d ] \\\\
  &amp;&amp; mv /etc/systemd/system/openclaw-ensure.service.d "\\\${BACKUP_DIR}/" || true
for f in "\\\${UNIT}" "\\\${DROPIN}" "\\\${BOOTSTRAP}"; do
  [ -e "$f" ] &amp;&amp; cp -a "$f" "\\\${BACKUP_DIR}/" || true
done

echo "==> 2) 准备 runtime 目录（bootstrap mktemp 用）"
install -d -o trim.openclaw -g trim.openclaw -m 0750 "\\\${RUNTIME_DIR}"

echo "==> 3) 写入 base unit: \\\${UNIT}"
install -d -m 755 /etc/systemd/system
cat > "\\\${UNIT}" &lt;&lt;EOF
[Unit]
Description=Bootstrap Trim OpenClaw Gateway Once at Boot
Documentation=man:systemd.service(5)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=trim.openclaw
Group=trim.openclaw
WorkingDirectory=\\\${OPENCLAW_DIR}

Environment=HOME=\\\${HOME_DIR}
Environment=OPENCLAW_DATA_DIR=\\\${DATA}
Environment=OPENCLAW_CONFIG_PATH=\\\${HOME_DIR}/.openclaw/openclaw.json
Environment=OPENCLAW_HIDE_BANNER=1
Environment=PATH=\\\${OPENCLAW_DIR}/node_modules/.bin:/var/apps/bunjs/target/bin:/var/apps/nodejs_v24/target/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
Environment=HTTP_PROXY=\\\${HTTP_PROXY_DEFAULT}
Environment=HTTPS_PROXY=\\\${HTTPS_PROXY_DEFAULT}
Environment=http_proxy=\\\${HTTP_PROXY_DEFAULT}
Environment=https_proxy=\\\${HTTPS_PROXY_DEFAULT}
Environment=NO_PROXY=\\\${NO_PROXY_DEFAULT}
Environment=no_proxy=\\\${NO_PROXY_DEFAULT}

# 无 drop-in 时的兜底语义；装好 drop-in 后会被清空，真正执行 bootstrap
ExecCondition=/bin/bash -c "! ss -lntH sport = :\\\${GW_PORT} | grep -q LISTEN"
ExecStart=\\\${OPENCLAW_DIR}/node_modules/.bin/openclaw gateway run --port \\\${GW_PORT} --bind loopback
Restart=no
KillMode=process
TimeoutStartSec=75
TimeoutStopSec=20
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
EOF

echo "==> 4) 写入 drop-in: \\\${DROPIN}"
install -d -m 755 "\\\${DROPIN_DIR}"
cat > "\\\${DROPIN}" &lt;&lt;EOF
[Unit]
After=network-online.target trim_app_center.service
Before=

[Service]
Type=oneshot
ExecCondition=
ExecStart=
ExecStart=\\\${BOOTSTRAP}
ExecStartPost=
Restart=no
TimeoutStartSec=120
StandardOutput=journal
StandardError=journal
RemainAfterExit=no
EOF

echo "==> 5) 写入 bootstrap: \\\${BOOTSTRAP}"
# 引号 heredoc 避免安装时展开 $(seq)/$(mktemp)；再用 sed 注入路径/端口
cat > "\\\${BOOTSTRAP}" &lt;&lt;'EOS'
#!/bin/sh
set -eu

socket=__SOCK__
health_url=http://localhost/app/trim-openclaw/api/health
start_url=http://localhost/app/trim-openclaw/api/install
gw_port=__GW_PORT__
runtime_dir=__RUNTIME_DIR__

# 残留 socket inode 不等于 Monitor 已就绪
monitor_ready=0
for _ in $(seq 1 90); do
  if [ -S "$socket" ] &amp;&amp; timeout 3 curl --unix-socket "$socket" -fsS "$health_url" >/dev/null 2>&amp;1; then
    monitor_ready=1
    break
  fi
  sleep 1
done

if [ "$monitor_ready" -ne 1 ]; then
  echo "OpenClaw store monitor API did not become ready within 90 seconds" >&amp;2
  exit 1
fi

if ss -lntH sport = :$gw_port | grep -q LISTEN; then
  echo "OpenClaw store gateway already listens on $gw_port; bootstrap skipped"
  exit 0
fi

result=$(mktemp "$runtime_dir/trim-openclaw-bootstrap.XXXXXX")
trap 'rm -f "$result"' EXIT HUP INT TERM

if ! timeout 90 curl --unix-socket "$socket" -fsS -N \\\\
  -X POST -H "Content-Type: application/json" \\\\
  --data-binary '{"action":"start","instanceId":"default"}' \\\\
  "$start_url" | tee "$result"; then
  echo "OpenClaw store monitor start request failed" >&amp;2
  exit 1
fi

if grep -q '"event":"complete"' "$result" &amp;&amp; grep -q '"success":true' "$result"; then
  echo "OpenClaw store gateway bootstrap completed"
  exit 0
fi

if grep -q '"event":"error"' "$result"; then
  echo "OpenClaw store monitor reported a startup error" >&amp;2
else
  echo "OpenClaw store monitor returned no successful completion event" >&amp;2
fi
exit 1
EOS

sed -i \\\\
  -e "s|__SOCK__|\\\${SOCK}|g" \\\\
  -e "s|__GW_PORT__|\\\${GW_PORT}|g" \\\\
  -e "s|__RUNTIME_DIR__|\\\${RUNTIME_DIR}|g" \\\\
  "\\\${BOOTSTRAP}"
chmod 755 "\\\${BOOTSTRAP}"

echo "==> 6) enable + start 一次"
systemctl daemon-reload
systemctl enable trim-openclaw-gateway.service
systemctl start trim-openclaw-gateway.service || true

echo "==> 7) 30 秒自检"
sleep 2
echo -n "unit enabled: "; systemctl is-enabled trim-openclaw-gateway.service || true
echo -n "unit active:  "; systemctl is-active trim-openclaw-gateway.service || true
systemctl show -p Result -p ExecMainStatus trim-openclaw-gateway.service --no-pager || true
if ss -lntH "sport = :\\\${GW_PORT}" | grep -q LISTEN; then
  echo "OK: gateway listens on :\\\${GW_PORT}"
else
  echo "WARN: :\\\${GW_PORT} 未监听；若 Monitor 未起，请先开商店面板或查 journalctl -u trim-openclaw-gateway"
fi
if [ -S "\\\${SOCK}" ] &amp;&amp; timeout 3 curl --unix-socket "\\\${SOCK}" -fsS http://localhost/app/trim-openclaw/api/health >/dev/null 2>&amp;1; then
  echo "OK: monitor health via unix socket"
else
  echo "WARN: monitor health 未通（sock=\\\${SOCK}）"
fi
ps -eo user,pid,cmd | grep -E 'server/index.js|openclaw-gatewa|openclaw gateway' | grep -v grep || true
echo "备份目录: \\\${BACKUP_DIR}"
echo "完成。期望：Gateway=trim.openclaw @ 127.0.0.1:\\\${GW_PORT}；bootstrap unit 可为 inactive(dead)+Result=success；无 root Monitor。"</pre><h4>6.7.1 一键安装后的 30 秒自检</h4><pre>systemctl is-enabled trim-openclaw-gateway.service   # enabled
systemctl is-active  trim-openclaw-gateway.service   # inactive (dead) 亦可
systemctl show -p Result -p ExecMainStatus trim-openclaw-gateway.service
ss -lntH | grep 25730
curl --unix-socket /vol1/@appcenter/trim.openclaw/trim.openclaw.sock -fsS \\\\
  http://localhost/app/trim-openclaw/api/health
ps -eo user,pid,cmd | grep -E 'trim.openclaw|server/index.js|openclaw-gatewa' | grep -v grep
# 正确：Monitor 与 Gateway 均为 trim.openclaw；仅一个 :25730
# 错误：出现 root 用户的 Monitor</pre><h4>6.7.2 卸载 / 回滚（只卸开机引导，不卸商店）</h4><pre>systemctl disable --now trim-openclaw-gateway.service 2>/dev/null || true
rm -f /etc/systemd/system/trim-openclaw-gateway.service
rm -rf /etc/systemd/system/trim-openclaw-gateway.service.d
rm -f /usr/local/sbin/trim-openclaw-bootstrap.sh
systemctl daemon-reload
# 商店 App / 数据目录保留；Gateway 仍可由面板手动 start
# 若有 6.7 脚本生成的备份：/root/backup/openclaw-boot-YYYYMMDD-HHMMSS/</pre><p>装完后若只关心「冷启动自动有 Gateway」，到此即可。全量会话/配置迁移请继续用第十三节备份还原脚本。自装第二实例请看 <!>，不要用本脚本去管 <code>:11751</code>。</p><h2>七、权限统一：复刻成功的关键</h2><p><strong>这是整套方案最容易踩坑、也最必须强调的部分：</strong>商店版 OpenClaw 的运行用户不是 root，而是 FnOS 为商店应用创建的独立用户 <code>trim.openclaw</code>。如果用 root 运行过安装、更新或修复命令，很容易把 <code>node_modules</code>、<code>.openclaw</code>、<code>sessions</code>、<code>runtime</code> 等目录污染成 root 属主，最终导致商店版进程读写失败、更新失败、会话不可写，或者出现“root 版能跑、商店版不能跑”的混乱状态。</p><p>复刻环境时应坚持一条铁律：</p><pre>商店版 OpenClaw 的数据目录、配置目录、安装目录、运行目录、workspace，统一归 trim.openclaw:trim.openclaw。
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
# 预期：/vol1/@apphome/trim.openclaw/data/openclaw</pre><p>如果看到 <code>root</code> 用户运行的 <code>openclaw</code>，或者 cwd 是 <code>/app</code>、端口是其他值，那通常不是商店版，排查时必须排除，避免将 Docker 版或手工版误认为商店版。</p><h3>7.6 自动自愈与 root 护栏（2026-07-26）</h3><p>手工 <code>chown -R</code> 能救急，但挡不住下次 root 写坏。推荐：</p><ul><li><code>openclaw-store-permission-fix.sh</code>：只修 <code>.openclaw</code> 下非 <code>trim.openclaw</code> owner；boot oneshot + path 双触发。</li><li><code>cmd/main</code> LOCAL PATCH：root 执行 <code>start/restart</code> 默认 exit 77，提示改用 App Center 或 <code>runuser -u trim.openclaw</code>；紧急才 <code>OPENCLAW_STORE_ALLOW_ROOT=1</code>。</li><li>pin-heal 重启商店时必须 <code>runuser -u trim.openclaw</code> + 注入 <code>TRIM_*</code>，禁止 root 直接 <code>cmd/main</code>。</li></ul><pre># 检查属主
/usr/local/sbin/openclaw-store-permission-fix.sh --check
# 修复
/usr/local/sbin/openclaw-store-permission-fix.sh --fix
# 正确重启 Monitor（示例）
runuser -u trim.openclaw -- env   TRIM_PKGVAR=/vol1/@appdata/trim.openclaw   TRIM_PKGHOME=/vol1/@apphome/trim.openclaw   TRIM_APPDEST=/vol1/@appcenter/trim.openclaw   /var/apps/trim.openclaw/cmd/main restart
# 拉 Gateway
/usr/local/sbin/trim-openclaw-bootstrap.sh</pre><h2>八、控制面板“检查更新”按钮的真实逻辑</h2><p><em>说明：以下流程与路径来自商店 Monitor 后端常见实现，不同商店包小版本可能略有差异。落地前请在本机反查 <code>/vol1/@appcenter/trim.openclaw/server</code> 与 UI bundle。本节与第九、十节偏「运维检查清单 / 可选补丁」，不必强行改闭源商店包源码。</em></p><p>商店版控制面板前端按钮位于 UI bundle 中，点击“检查更新”后并不是只检查版本，而是弹出确认框，确认后调用后端安装接口：</p><pre>POST /app/trim-openclaw/api/install
Content-Type: application/json

{
  "method": "bun",
  "action": "update"
}</pre><p>前端会切换到运行日志页面，通过 SSE 持续接收后端日志。后端入口在：</p><pre>/vol1/@appcenter/trim.openclaw/server/index.js</pre><p>更新目标由以下常量决定：</p><pre>const OPENCLAW_NPM_REGISTRY =
  process.env.OPENCLAW_NPM_REGISTRY || "https://registry.npmmirror.com/";

const OPENCLAW_VERSION =
  process.env.OPENCLAW_VERSION || "2026.7.1";  // 以本机环境变量/商店包为准

const OPENCLAW_PACKAGE_SPEC =
  \\`},{slug:"homenet-qx",title:"iOS Quantumult X 异地接入内网：HomeNet 双节点实战指南",subtitle:"Cloudflare Tunnel + Sub-Store + Shadowsocks over WSS · 从零到可用的内网回家方案",date:"2026-05-29",tags:["iOS","Quantumult X","Cloudflare","Sub-Store","内网穿透","Shadowsocks"],summary:"更新提示：本文记录的是 HomeNet 初版双节点方案。若需要流量显示修复、SubStore userinfo 统计与 ss-direct 8443 独立链路，请阅读 <!>。",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>iOS Quantumult X 异地接入内网：HomeNet 双节点实战指南</h1><p class=article-subtitle>Cloudflare Tunnel + Sub-Store + Shadowsocks over WSS · 从零到可用的内网回家方案</p><div class=article-meta><span class=article-date>2026-05-29</span><div class=article-tags><span class=tech-tag>iOS</span><span class=tech-tag>Quantumult X</span><span class=tech-tag>Cloudflare</span><span class=tech-tag>Sub-Store</span><span class=tech-tag>内网穿透</span><span class=tech-tag>Shadowsocks</span></div></div></div><div class=article-content><blockquote><p>更新提示：本文记录的是 HomeNet 初版双节点方案。若需要流量显示修复、SubStore userinfo 统计与 ss-direct 8443 独立链路，请阅读 <!>。</p></blockquote><h2>一、方案概述</h2><p>异地访问家中内网，常见方案有 Tailscale、ZeroTier、frp 等。本文另辟蹊径——利用 Cloudflare Tunnel 的天然双栈穿透能力，结合 Shadowsocks over WebSocket Secure（WSS）协议，在 iOS Quantumult X 上实现双节点自动切换，让手机无论身处何地都能像在家一样访问 192.168.31.0/24 内网。</p><p>整个链路分三层：<strong>Cloudflare 边缘层</strong>（双栈接入）、<strong>隧道与代理层</strong>（cloudflared + gost + Nginx）、<strong>订阅与客户端层</strong>（Sub-Store + Quantumult X）。下面逐层展开。</p><pre>┌─────────────────────────────────────────────────────────┐
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
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \\\\
  -H "Authorization: Bearer $CF_TOKEN" \\\\
  -H "Content-Type: application/json" \\\\
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
shadowsocks=example.com:18443,method=chacha20-ietf-poly1305,\\\\
  password=your_password,obfs=wss,obfs-host=example.com,\\\\
  obfs-uri=/ss-direct,fast-open=true,udp-relay=false,\\\\
  tag=HomeNet-Fast

# 节点二：HomeNet-CF（Cloudflare 中继 · 备用）
shadowsocks=substore.example.com:443,method=chacha20-ietf-poly1305,\\\\
  password=your_password,obfs=wss,obfs-host=substore.example.com,\\\\
  obfs-uri=/ss-direct,fast-open=true,udp-relay=false,\\\\
  tag=HomeNet-CF</pre><p>两个节点的加密方式和密码完全相同，区别仅在于入口域名和端口：</p><ul><li><strong>HomeNet-Fast</strong>：<code>example.com:18443</code> → FnOS IPv6 直连 → gost :18443</li><li><strong>HomeNet-CF</strong>：<code>substore.example.com:443</code> → Cloudflare 边缘 → cloudflared → gost :10089</li></ul><h3>4.3 创建 QX 专用订阅端点</h3><p>Sub-Store 的 <code>/download/&lt;订阅名&gt;?target=QX</code> 接口可以直接输出 Quantumult X 格式的订阅。但由于目标解析的换行问题，更稳妥的方式是通过 Nginx 创建静态端点：</p><pre># Nginx 配置
location = /qx {
    proxy_pass http://127.0.0.1:3001/download/HomeNet-QX?target=QX;
    proxy_set_header Host $host;
}

# QX 订阅地址
# https://substore.example.com/qx</pre><p>订阅 URL 为 <code>https://substore.example.com/qx</code>，Quantumult X 通过此地址拉取节点列表。</p><h2>五、Quantumult X 配置</h2><h3>5.1 添加订阅</h3><p>在 Quantumult X 中，进入「订阅」→「添加」，填入订阅地址：</p><pre>https://substore.example.com/qx</pre><p>Quantumult X 会自动解析出 HomeNet-Fast 和 HomeNet-CF 两个节点。</p><h3>5.2 配置策略组</h3><p>要实现双节点自动切换（优先 Fast，CF 兜底），需要创建一个策略组。在 QX 配置文件中添加：</p><pre># 策略组：自动选择可用节点
[policy]
available=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png</pre><p>参数说明：</p><ul><li><code>available</code>：自动选择策略组，优先选取第一个可用节点</li><li><code>server-tag-regex=^HomeNet-(Fast|CF)$</code>：匹配 HomeNet-Fast 和 HomeNet-CF</li><li><code>img-url</code>：设置策略组图标</li></ul><p><strong>注意</strong>：<code>available</code> 策略组按订阅中的节点顺序选择，因此订阅中 <strong>HomeNet-Fast 必须排在 HomeNet-CF 前面</strong>，否则会优先走 Cloudflare 中继。</p><p>如果需要<strong>手动切换</strong>节点，将策略组类型改为 <code>static</code>：</p><pre>[policy]
static=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png</pre><h3>5.3 配置分流规则</h3><p>HomeNet 只应路由内网流量，其他流量走用户原有的科学上网节点。在 QX 配置中添加分流规则：</p><pre>[filter_local]
# 内网 IP 段走 HomeNet（必须放在其他 private-IP DIRECT 规则之前）
ip-cidr, 192.168.31.0/24, HomeNet, no-resolve

# 其他内网段直连
ip-cidr, 192.168.0.0/16, DIRECT
ip-cidr, 10.0.0.0/8, DIRECT
ip-cidr, 172.16.0.0/12, DIRECT</pre><p><code>no-resolve</code> 参数表示不解析域名，直接匹配 IP 范围，避免 DNS 泄漏。</p><h3>5.4 完整配置片段</h3><p>以下是可直接导入 Quantumult X 的完整配置片段：</p><pre># HomeNet 内网回家配置
# 订阅地址：https://substore.example.com/qx

[server_remote]
https://substore.example.com/qx, tag=HomeNet, \\\\
  update-interval=86400, opt-parser=false, \\\\
  enabled=true

[policy]
# 自动切换（Fast 优先，CF 兜底）
available=HomeNet, server-tag-regex=^HomeNet-(Fast|CF)$, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png

[filter_local]
# 内网流量走 HomeNet
ip-cidr, 192.168.31.0/24, HomeNet, no-resolve

[rewrite_local]
# 可选：拦截内网域名的 DNS 解析
# ^https?://.+\\\\.local reject</pre><h2>六、连接优化与排障</h2><h3>6.1 双节点切换逻辑</h3><p>Quantumult X 的 <code>available</code> 策略组行为：</p><ul><li>按订阅中节点顺序依次检测可用性</li><li>选择第一个可用的节点</li><li>当当前节点不可用时，自动切换到下一个可用节点</li></ul><p>因此，<strong>订阅中节点顺序至关重要</strong>。HomeNet-Fast 在前、HomeNet-CF 在后，确保优先走直连路径。</p><h3>6.2 Fast 路径排障</h3><p>如果 HomeNet-Fast 无法连接，按以下顺序排查：</p><ol><li><strong>IPv6 连通性</strong>：确认 iOS 设备当前网络支持 IPv6（蜂窝网络通常支持）</li><li><strong>DDNS 解析</strong>：<code>nslookup example.com</code> 应返回 IPv6 地址</li><li><strong>端口可达性</strong>：<code>curl -6 https://example.com:18443</code> 应返回 WebSocket 握手响应</li><li><strong>证书有效性</strong>：确认 <code>/ssl/example.com/fullchain.pem</code> 未过期</li><li><strong>gost 服务</strong>：<code>ss -tlnp | grep 18443</code> 确认 gost 正在监听</li></ol><h3>6.3 CF 路径排障</h3><p>HomeNet-CF 经过 Cloudflare 边缘，排查重点不同：</p><ol><li><strong>Tunnel 状态</strong>：<code>systemctl status cloudflared</code> 确认 Tunnel 在线</li><li><strong>Ingress 规则</strong>：确认 <code>substore.example.com</code> 的 ingress 正确指向 <code>http://localhost:10089</code>（gost CF 专用端口）</li><li><strong>路径分流</strong>：CF 路径下 <code>/ss-direct</code> 应直达 gost，不经过 Nginx</li></ol><h3>6.4 常见连接问题与解决</h3><table><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>两个节点都显示不可达</td><td>订阅地址不通或密码错误</td><td>检查订阅 URL 和密码配置</td></tr><tr><td>只能连 CF，连不上 Fast</td><td>IPv6 不通或 DDNS 未更新</td><td>检查 IPv6 连通性和 DNS 解析</td></tr><tr><td>连接后无法访问内网 IP</td><td>分流规则顺序错误</td><td>将 HomeNet 规则放在其他 private-IP 规则之前</td></tr><tr><td>手动切换不生效</td><td>策略组类型为 available</td><td>改为 static 类型</td></tr><tr><td>连接后所有流量都走 HomeNet</td><td>分流规则范围过大</td><td>确认 ip-cidr 仅匹配 192.168.31.0/24</td></tr></tbody></table><h2>七、安全建议</h2><ul><li><strong>密码强度</strong>：Shadowsocks 密码应使用随机字符串，避免使用弱密码</li><li><strong>TLS 证书</strong>：使用 Let's Encrypt 或 Cloudflare Origin CA 签名的有效证书</li><li><strong>分流精确</strong>：仅将内网 IP 段（192.168.31.0/24）路由到 HomeNet，避免全局代理</li><li><strong>订阅保护</strong>：Sub-Store 订阅地址建议添加 token 参数，防止未授权访问</li><li><strong>日志审计</strong>：定期检查 gost 和 cloudflared 日志，排查异常连接</li></ul><h2>八、总结</h2><p>本文从 Cloudflare Tunnel 的创建出发，经 Nginx IPv6 直连加速、Sub-Store 订阅分发，到 Quantumult X 双节点策略组配置，完整覆盖了 iOS 设备异地接入内网的整个链路。</p><p>核心设计思想是<strong>双路径冗余</strong>：Fast 路径（IPv6 直连）提供最低延迟，CF 路径（Cloudflare 中继）提供最大兼容性。Quantumult X 的 <code>available</code> 策略组自动在两者之间切换，用户无需手动干预。</p><p>整个方案无需公网 IP、无需额外硬件，仅利用 Cloudflare 免费 Tunnel 和家中现有服务器即可实现。对于需要随时访问家中 NAS、HomeAssistant、开发环境等内网服务的场景，这是一个简洁而可靠的解决方案。`},{slug:"fnos-igpu-temp",title:"飞牛系统（FnOS）核显温度显示补丁：从原理到实现",subtitle:"Intel iGPU · WebSocket 代理 · JS 注入 · bind-mount · FnOS 资源监控面板适配",date:"2026-05-24",tags:["FnOS","iGPU","Intel","WebSocket","系统补丁"],summary:"Intel iGPU · WebSocket 代理 · JS 注入 · bind-mount · FnOS 资源监控面板适配",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>飞牛系统（FnOS）核显温度显示补丁：从原理到实现</h1><p class=article-subtitle>Intel iGPU · WebSocket 代理 · JS 注入 · bind-mount · FnOS 资源监控面板适配</p><div class=article-meta><span class=article-date>2026-05-24</span><div class=article-tags><span class=tech-tag>FnOS</span><span class=tech-tag>iGPU</span><span class=tech-tag>Intel</span><span class=tech-tag>WebSocket</span><span class=tech-tag>系统补丁</span></div></div></div><div class=article-content><h2>一、背景</h2><p>飞牛系统（FnOS）基于 Linux 深度定制，其 Web 管理面板内置了资源监控功能，可显示 CPU、内存、磁盘、网络、GPU 等设备的实时状态。然而，对于部分 Intel 处理器（特别是 10th/11th 代及更新型号），核显（iGPU）的温度在 FnOS 面板中显示为空或 0，因为 FnOS 的 GPU 监控逻辑只读取了独立显卡的温度传感器，而 Intel 核显的温度输出方式与独显不同。</p><p>问题的本质：Intel 核显（i915 驱动）通常不暴露独立的温度传感器（thermal zone），核显温度实际包含在 CPU 封装温度包（Package Temperature）中。FnOS 的资源监控通过「核心系统资源 API」（trim_cgi）获取 GPU 数据时，读取到的 GPU 温度为空，导致面板中 GPU 温度项无显示值。</p><p>本方案通过 WebSocket 代理注入 + JavaScript 补丁 + bind-mount 的方式，在完全不修改 FnOS 核心文件的前提下，将 CPU 封装温度回填到 GPU 温度显示字段中。</p><h2>二、方案架构</h2><pre>┌─────────────────────────────────────────────────────────────────┐
│                   FnOS Web 管理面板 (浏览器端)                    │
│  资源监控页面                                                    │
│  ┌─ ResourceMonitor.js (已补丁) ──────────────────────────────┐ │
│  │  GPU 温度显示逻辑：如果 GPU 返回 temp 为空，使用             │ │
│  │  window.__xiaIgpuTemp（来自 CPU Package 温度）回填          │ │
│  └───────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │ WebSocket
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│              fnos-igpu-ws-proxy.py (WebSocket 代理)              │
│  监听 /run/trim_cgi.socket                                       │
│  收到 GPU 查询请求 → 从 CPU 响应中提取 Package 温度               │
│  → 回填到 GPU 响应数据中 → 转发给浏览器                           │
│  直接读取 /sys/class/hwmon 作为 fallback                          │
└───────────┬──────────────────────────────┬───────────────────────┘
            │                              │
            ▼                              ▼
┌─────────────────────────┐  ┌──────────────────────────────┐
│ trim_cgi (FnOS 后端)     │  │ /sys/class/hwmon 传感器       │
│ 通过 /run/trim_cgi.socket│  │ coretemp → CPU Package 温度  │
│ .orig 接收原始请求        │  │ pch_cometlake → PCH 温度    │
└─────────────────────────┘  └──────────────────────────────┘</pre><p>三个核心组件：</p><ol><li><strong>WebSocket 代理</strong>（Python）：拦截 FnOS 资源监控的前后端 WebSocket 通信，在 GPU 数据中注入 CPU Package 温度</li><li><strong>JavaScript 补丁</strong>：修改 FnOS 前端的 GPU 温度显示逻辑，当温度值为空时接受来自代理的回填值</li><li><strong>bind-mount 挂载</strong>：将补丁后的文件覆盖原始文件，不修改原始系统分区</li></ol><h2>三、前置条件与系统检查</h2><h3>3.1 确认硬件</h3><p>本方案适用于搭载 Intel 核显的 FnOS 设备。检查方法：</p><pre># 检查 i915 驱动是否加载
lsmod | grep i915
# 输出示例：
# i915                 4739072  39 kvmgt
# drm_buddy              28672  1 i915
# ttm                   118784  1 i915

# 检查 GPU 设备是否存在
ls /sys/class/drm/
# 输出包含 card0、renderD128 等

# 检查 CPU 型号（带核显）
cat /proc/cpuinfo | grep "model name" | head -1
# Intel(R) Celeron(R) N5095 / Intel(R) Core(TM) i3-10100 等

# 检查 lm-sensors 是否安装
which sensors
sensors | grep -i "Package id"
# Package id 0:  +79.0°C  (high = +100.0°C, crit = +100.0°C)</pre><h3>3.2 确认问题</h3><p>打开 FnOS Web 面板 → 资源监控 → 查看 GPU 区域。如果核显类型/负载/显存有显示但温度为空白或 0，说明需要打此补丁。</p><h3>3.3 需要的东西</h3><ul><li>FnOS 设备（Debian 12 内核 6.x）with root 权限</li><li>Intel 核显（i915 驱动已加载）</li><li>Python 3.7+（FnOS 自带）</li><li>lm-sensors 包（用于手动验证温度，非必须）</li></ul><h2>四、核心组件详解</h2><h3>4.1 WebSocket 代理（fnos-igpu-ws-proxy.py）</h3><p>这是整个方案的核心。FnOS 的资源监控前端通过 WebSocket 与后端服务通信，WebSocket 请求通过 Unix Socket（/run/trim_cgi.socket）传输。代理程序做了两件事：</p><p><strong>socket 接管</strong>：启动时，代理程序将原始 FnOS 的监听 socket 重命名为 /run/trim_cgi.socket.orig，然后自己在 /run/trim_cgi.socket 上监听。这样所有 WebSocket 连接先经过代理，再转发到原始后端。</p><pre># 启动时
mv /run/trim_cgi.socket /run/trim_cgi.socket.orig
python3 fnos-igpu-ws-proxy.py   # 监听 /run/trim_cgi.socket

# 停止时恢复
rm -f /run/trim_cgi.socket
mv /run/trim_cgi.socket.orig /run/trim_cgi.socket</pre><p><strong>数据注入</strong>：代理程序在转发 WebSocket 帧时，拦截两类请求：</p><ul><li><code>appcgi.resmon.cpu</code>：提取 CPU 响应数据中的 Package 温度（coretemp 的第一个温度值），缓存到变量</li><li><code>appcgi.resmon.gpu</code>：遍历 GPU 列表，如果某个 GPU 的 temp 字段为空或无效，用缓存的 CPU Package 温度回填</li></ul><p>同时，代理程序还直接读取 <code>/sys/class/hwmon</code> 作为 fallback 温度来源，优先级为 coretemp > pch_cometlake，确保温度值始终在 0-130°C 范围内才采用。</p><pre># 温度读取策略
1. 优先从 appcgi.resmon.cpu 响应中提取（正常运行时）
2. 如果上述不可用，从 /sys/class/hwmon 读取
   2a. coretemp/temp1_input → CPU Package 温度
   2b. pch_cometlake → PCH 温度（备选）
3. 温度值必须在 0-130°C 范围，否则丢弃</pre><h3>4.2 JavaScript 补丁</h3><p>对 FnOS 前端文件做了三处修改：</p><p><strong>补丁一：GPU 温度显示条件（ResourceMonitor.js）</strong></p><p>原始代码中，GPU 温度显示的条件判断是 <code>r.temp</code>，当 temp 为空或 0 时不显示元素。修改后增加 <code>r.temp === 0</code> 的判断，即温度值即使为 0 也应显示，这样 WebSocket 代理注入的温度值才能被面板展示。</p><pre>// 修改前
dt=(e,r)=>{var s;r.temp&amp;&amp;e.add(U.Temp)

// 修改后
dt=(e,r)=>{var s;(r.temp||r.temp===0)&amp;&amp;e.add(U.Temp)</pre><p><strong>补丁二：CPU 温度捕获与缓存（ResourceMonitor.js）</strong></p><p>在资源监控的 CPU 数据请求回调中，将 CPU Package 温度保存到全局变量 window.__xiaIgpuTemp，供 GPU 数据注入使用。</p><pre>// window.__xiaIgpuTemp 全局变量
try{window.__xiaIgpuTemp=Array.isArray(a.data.cpu.temp)?
  a.data.cpu.temp[0]:void 0}catch{}</pre><p><strong>补丁三：核心 WebSocket 注入（index.js - 核心入口）</strong></p><p>在 FnOS 前端 WebSocket 底层框架中，对收到的每个消息尝试提取 CPU 温度和回填 GPU 温度。这里还读取 Cookie 中的 xia_igpu_temp 作为额外 fallback 来源。</p><h3>4.3 bind-mount 挂载</h3><p>为避免修改原始文件、防止 FnOS 系统更新时被覆盖，所有补丁文件通过 bind-mount 方式覆盖：</p><pre># 将补丁后的 JS 文件 mount 到原始路径
mount --bind /usr/local/share/fnos-igpu-temp-patch/ResourceMonitor-BacdZkk_.js \\\\
  /usr/trim/www/assets/ResourceMonitor-BacdZkk_.js

mount --bind /usr/local/share/fnos-igpu-temp-patch/index-CMZOY5-G.js \\\\
  /usr/trim/www/assets/index-CMZOY5-G.js

# 取消挂载
umount /usr/trim/www/assets/ResourceMonitor-BacdZkk_.js
umount /usr/trim/www/assets/index-CMZOY5-G.js</pre><h2>五、完整部署脚本</h2><p>以下为完整的 setup 脚本。逐行执行即可完成部署。本仓库也提供了完整的恢复脚本（见第八节）。</p><h3>5.1 安装 WebSocket 代理脚本</h3><pre>cat > /usr/local/sbin/fnos-igpu-ws-proxy.py &lt;&lt; 'PYEOF'
#!/usr/bin/env python3
import asyncio, base64, hashlib, json, os, re, socket, struct, time

LISTEN = os.environ.get('XIA_IGPU_LISTEN', '/run/trim_cgi.socket')
UPSTREAM = os.environ.get('XIA_IGPU_UPSTREAM', '/run/trim_cgi.socket.orig')
LOG = '/var/log/fnos-igpu-ws-proxy.log'
GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
TEMP_COOKIE = re.compile(r'(?:^|;s*)xia_igpu_temp=([0-9.]+)')

last_temp = None

def log(msg):
    try:
        with open(LOG, 'a') as f:
            f.write(time.strftime('%F %T ') + msg + '
')
    except Exception:
        pass

def read_temp():
    candidates = []
    try:
        for name_path in sorted(os.listdir('/sys/class/hwmon')):
            base = '/sys/class/hwmon/' + name_path
            try:
                name = open(base + '/name').read().strip()
            except Exception:
                continue
            if name == 'coretemp':
                candidates.insert(0, base + '/temp1_input')
            elif name == 'pch_cometlake':
                candidates.append(base + '/temp1_input')
        for p in candidates:
            try:
                v = int(open(p).read().strip()) / 1000.0
                if 0 &lt; v &lt; 130:
                    return round(v, 1)
            except Exception:
                pass
    except Exception:
        pass
    return None

def inject_payload(text):
    global last_temp
    try:
        obj = json.loads(text)
    except Exception:
        return text
    try:
        req = obj.get('req')
        data = obj.get('data')
        if req == 'appcgi.resmon.cpu':
            cpu = (data or {}).get('cpu') or {}
            temps = cpu.get('temp')
            if isinstance(temps, list) and temps:
                t = temps[0]
                if isinstance(t, (int, float)) and t >= 0:
                    last_temp = t
        elif req == 'appcgi.resmon.gpu':
            gpu = (data or {}).get('gpu')
            if isinstance(gpu, list):
                t = last_temp if isinstance(last_temp, (int, float)) and last_temp >= 0 else read_temp()
                if isinstance(t, (int, float)) and t >= 0:
                    changed = False
                    for g in gpu:
                        if isinstance(g, dict):
                            gt = g.get('temp')
                            if not isinstance(gt, (int, float)) or gt &lt; 0:
                                g['temp'] = t
                                changed = True
                    if changed:
                        obj['data']['gpu'] = gpu
                        return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))
    except Exception as e:
        log('inject error: %r' % (e,))
    return text

# --- WebSocket 帧解析和转发 ---

def encode_frame(payload, opcode=1, mask=False):
    if isinstance(payload, str):
        payload = payload.encode()
    ln = len(payload)
    first = 0x80 | opcode
    if ln &lt; 126:
        hdr = bytes([first, (0x80 if mask else 0) | ln])
    elif ln &lt; 65536:
        hdr = bytes([first, (0x80 if mask else 0) | 126]) + struct.pack('!H', ln)
    else:
        hdr = bytes([first, (0x80 if mask else 0) | 127]) + struct.pack('!Q', ln)
    if mask:
        key = os.urandom(4)
        payload = bytes(b ^ key[i % 4] for i, b in enumerate(payload))
        return hdr + key + payload
    return hdr + payload

async def read_frame(reader):
    h = await reader.readexactly(2)
    b1, b2 = h[0], h[1]
    opcode = b1 &amp; 0x0f
    masked, ln = b2 &amp; 0x80, b2 &amp; 0x7f
    if ln == 126:
        ln = struct.unpack('!H', await reader.readexactly(2))[0]
    elif ln == 127:
        ln = struct.unpack('!Q', await reader.readexactly(8))[0]
    key = await reader.readexactly(4) if masked else b''
    data = await reader.readexactly(ln) if ln else b''
    if masked:
        data = bytes(b ^ key[i % 4] for i, b in enumerate(data))
    return opcode, data

async def pipe_client_to_upstream(cr, uw):
    try:
        while True:
            op, data = await read_frame(cr)
            uw.write(encode_frame(data, op, mask=True))
            await uw.drain()
            if op == 8: break
    except Exception: pass
    try: uw.close()
    except: pass

async def pipe_upstream_to_client(ur, cw):
    try:
        while True:
            op, data = await read_frame(ur)
            if op == 1:
                try:
                    data = inject_payload(data.decode('utf-8', 'ignore')).encode('utf-8')
                except: pass
            cw.write(encode_frame(data, op, mask=False))
            await cw.drain()
            if op == 8: break
    except Exception: pass
    try: cw.close()
    except: pass

async def handle(reader, writer):
    try:
        buf = b''
        while b'\\r
\\r
' not in buf:
            chunk = await reader.read(4096)
            if not chunk: return
            buf += chunk
            if len(buf) > 65536: return
        # 解析 WebSocket 握手
        head, rest = buf.split(b'\\r
\\r
', 1)
        lines = head.decode('iso-8859-1', 'ignore').split('\\r
')
        headers = {}
        for line in lines[1:]:
            if ':' in line:
                k, v = line.split(':', 1)
                headers[k.lower().strip()] = v.strip()
        key = headers.get('sec-websocket-key')
        if not key:
            writer.write(b'HTTP/1.1 400 Bad Request\\r
Content-Length: 0\\r
\\r
')
            await writer.drain()
            return
        accept = base64.b64encode(hashlib.sha1((key + GUID).encode()).digest()).decode()
        writer.write(('HTTP/1.1 101 Switching Protocols\\r
'
            'Upgrade: websocket\\r
Connection: Upgrade\\r
'
            'Sec-WebSocket-Accept: %s\\r
\\r
') % accept)
        await writer.drain()

        ur, uw = await asyncio.open_unix_connection(UPSTREAM)
        up_key = base64.b64encode(os.urandom(16)).decode()
        req = ('GET / HTTP/1.1\\r
Host: localhost\\r
'
            'Upgrade: websocket\\r
Connection: Upgrade\\r
'
            'Sec-WebSocket-Key: ' + up_key + '\\r
Sec-WebSocket-Version: 13\\r
\\r
').encode()
        uw.write(req); await uw.drain()
        resp = b''
        while b'\\r
\\r
' not in resp:
            resp += await ur.read(4096)
            if len(resp) > 65536:
                raise RuntimeError('bad upstream handshake')
        await asyncio.gather(
            pipe_client_to_upstream(reader, uw),
            pipe_upstream_to_client(ur, writer))
    except Exception as e:
        log('handle error: %r' % (e,))
    finally:
        try: writer.close(); await writer.wait_closed()
        except: pass

async def main():
    try: os.unlink(LISTEN)
    except FileNotFoundError: pass
    server = await asyncio.start_unix_server(handle, LISTEN)
    os.chmod(LISTEN, 0o666)
    log('listening ' + LISTEN)
    async with server:
        await server.serve_forever()

if __name__ == '__main__':
    asyncio.run(main())
PYEOF
chmod +x /usr/local/sbin/fnos-igpu-ws-proxy.py</pre><h3>5.2 安装补丁脚本</h3><pre>mkdir -p /usr/local/share/fnos-igpu-temp-patch

# ==== patch 脚本 ====
cat > /usr/local/sbin/fnos-igpu-temp-patch &lt;&lt; 'SHEOF'
#!/bin/sh
set -eu
SRC=/usr/trim/www/assets/ResourceMonitor-BacdZkk_.js
DIR=/usr/local/share/fnos-igpu-temp-patch
PATCHED=$DIR/ResourceMonitor-BacdZkk_.js
LOG=/var/log/fnos-igpu-temp-patch.log
now(){ date "+%F %T"; }
mkdir -p "$DIR"
if [ ! -f "$SRC" ]; then echo "$(now) source missing: $SRC" >> "$LOG"; exit 0; fi
if findmnt -n "$SRC" >/dev/null 2>&amp;1; then umount "$SRC" || true; fi
python3 - "$SRC" "$PATCHED" "$LOG" &lt;&lt;"PY"
from pathlib import Path; from datetime import datetime; import sys
src=Path(sys.argv[1]); dst=Path(sys.argv[2]); log=Path(sys.argv[3])
s=src.read_text(errors="ignore")
now=datetime.now().strftime("%F %T")
changes=[]
repls=[
 ("gpu-temp-option",
  "dt=(e,r)=>{var s;r.temp&amp;&amp;e.add(U.Temp)",
  "dt=(e,r)=>{var s;(r.temp||r.temp===0)&amp;&amp;e.add(U.Temp)"),
 ("capture-cpu-package-temp",
  "ne.resmoCpu({},{timeout:1e3}).then(a=>{r(n=>(n.shift(),[...n,a.data.cpu]))}",
  "ne.resmoCpu({},{timeout:1e3}).then(a=>{try{window.__xiaIgpuTemp=Array.isArray(a.data.cpu.temp)?a.data.cpu.temp[0]:void 0}catch{}r(n=>(n.shift(),[...n,a.data.cpu]))}"),
 ("inject-gpu-temp",
  "ne.resmoGpu({},{timeout:1e3}).then(n=>{r(o=>(o.shift(),[...o,n.data]))}",
  "ne.resmoGpu({},{timeout:1e3}).then(n=>{try{const x=window.__xiaIgpuTemp;if(n&amp;&amp;n.data&amp;&amp;Array.isArray(n.data.gpu))n.data.gpu=n.data.gpu.map(g=>g&amp;&amp;(!(g.temp>=0)||Number.isNaN(g.temp))?{...g,temp:x}:g)}catch{}r(o=>(o.shift(),[...o,n.data]))}"),
]
for name,old,new in repls:
    if new in s: changes.append(f"{name}:already")
    elif old in s:
        s=s.replace(old,new,1); changes.append(f"{name}:patched")
    else: changes.append(f"{name}:missing")
dst.write_text(s)
log.open("a").write(f"{now} generated patched asset: {dst}; " + ", ".join(changes) + chr(10))
PY
mount --bind "$PATCHED" "$SRC"
echo "$(now) bind-mounted patched asset over $SRC" >> "$LOG"
SHEOF

# ==== core-patch 脚本 ====
cat > /usr/local/sbin/fnos-igpu-temp-core-patch &lt;&lt; 'SHEOF'
#!/bin/sh
set -eu
SRC=/usr/trim/www/assets/index-CMZOY5-G.js
DIR=/usr/local/share/fnos-igpu-temp-patch
PATCHED=$DIR/index-CMZOY5-G.js
LOG=/var/log/fnos-igpu-temp-patch.log
now(){ date "+%F %T"; }
mkdir -p "$DIR"
if [ ! -f "$SRC" ]; then echo "$(now) core source missing: $SRC" >> "$LOG"; exit 0; fi
python3 - "$SRC" "$PATCHED" "$LOG" &lt;&lt;'PY'
from pathlib import Path; from datetime import datetime; import sys
src=Path(sys.argv[1]); dst=Path(sys.argv[2]); log=Path(sys.argv[3])
s=src.read_text(errors="ignore")
old='const n=JSON.parse(e.data);if(this.emit("message",e),n.res==="pong")'
inject='const n=JSON.parse(e.data);try{if(n&amp;&amp;n.req==="appcgi.resmon.cpu"&amp;&amp;n.data&amp;&amp;n.data.cpu&amp;&amp;Array.isArray(n.data.cpu.temp))window.__xiaIgpuTemp=n.data.cpu.temp[0];if(n&amp;&amp;n.req==="appcgi.resmon.gpu"&amp;&amp;n.data&amp;&amp;Array.isArray(n.data.gpu)){let x=window.__xiaIgpuTemp;if(!(x>=0)){let c=document.cookie.match(/(?:^|; )xia_igpu_temp=([0-9.]+)/);x=c?Number(c[1]):void 0}if(x>=0)n.data.gpu=n.data.gpu.map(g=>g&amp;&amp;(!(g.temp>=0)||Number.isNaN(g.temp))?{...g,temp:x}:g)}}catch{}if(this.emit("message",e),n.res==="pong")'
now=datetime.now().strftime("%F %T")
if inject in s: st="already"
elif old in s:
    s=s.replace(old,inject,1); st="patched"
else: st="missing"
dst.write_text(s)
log.open("a").write(f"{now} generated core patched asset: {dst}; websocket-inject:{st}" + chr(10))
PY
mount --bind "$PATCHED" "$SRC"
SHEOF

# ==== refresh 脚本 ====
cat > /usr/local/sbin/fnos-igpu-temp-refresh &lt;&lt; 'SHEOF'
#!/bin/sh
set -eu
/usr/local/sbin/fnos-igpu-temp-patch
/usr/local/sbin/fnos-igpu-temp-core-patch
SHEOF

# ==== unpatch 脚本 ====
cat > /usr/local/sbin/fnos-igpu-temp-unpatch &lt;&lt; 'SHEOF'
#!/bin/sh
set -eu
systemctl disable --now fnos-igpu-temp-patch.service >/dev/null 2>&amp;1 || true
systemctl disable --now fnos-igpu-ws-proxy.service >/dev/null 2>&amp;1 || true
for f in /usr/trim/www/assets/ResourceMonitor-BacdZkk_.js   /usr/trim/www/assets/index-CMZOY5-G.js   /usr/trim/nginx/conf/nginx.conf; do
  if findmnt -n "$f" >/dev/null 2>&amp;1; then umount "$f"; fi
done
echo "unpatched FnOS iGPU temperature proxy and web assets"
SHEOF

chmod +x /usr/local/sbin/fnos-igpu-temp-patch   /usr/local/sbin/fnos-igpu-temp-core-patch   /usr/local/sbin/fnos-igpu-temp-refresh   /usr/local/sbin/fnos-igpu-temp-unpatch</pre><h3>5.3 安装 systemd 服务</h3><pre>cat > /etc/systemd/system/fnos-igpu-ws-proxy.service &lt;&lt; 'SERVEOF'
[Unit]
Description=FnOS Intel iGPU temperature WebSocket injection proxy
After=trim_main.service trim_nginx.service resmon_service.service
Requires=trim_main.service

[Service]
Type=simple
ExecStartPre=/bin/sh -c 'for i in $(seq 1 60); do \\\\
  if [ -S /run/trim_cgi.socket ] &amp;&amp; ss -lxnp | grep -q "/run/trim_cgi.socket.*trim"; then exit 0; fi; \\\\
  sleep 1; done; echo "trim_cgi.socket not ready" >&amp;2; exit 1'
ExecStartPre=/bin/sh -c 'if [ -S /run/trim_cgi.socket.orig ]; then rm -f /run/trim_cgi.socket.orig; fi; \\\\
  mv /run/trim_cgi.socket /run/trim_cgi.socket.orig; rm -f /run/trim_cgi.socket'
Environment=XIA_IGPU_LISTEN=/run/trim_cgi.socket
Environment=XIA_IGPU_UPSTREAM=/run/trim_cgi.socket.orig
ExecStart=/usr/local/sbin/fnos-igpu-ws-proxy.py
ExecStopPost=/bin/sh -c 'rm -f /run/trim_cgi.socket; \\\\
  if [ -S /run/trim_cgi.socket.orig ]; then mv /run/trim_cgi.socket.orig /run/trim_cgi.socket; fi'
Restart=always
RestartSec=2

[Install]
WantedBy=multi-user.target
SERVEOF

cat > /etc/systemd/system/fnos-igpu-temp-patch.service &lt;&lt; 'SERVEOF'
[Unit]
Description=Bind-mount patched FnOS web assets for Intel iGPU temperature display
After=local-fs.target trim_file_monitor.service trim_nginx.service
Wants=trim_nginx.service

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/fnos-igpu-temp-refresh
RemainAfterExit=yes
ExecStop=/bin/sh -c 'for f in \\\\
  /usr/trim/www/assets/ResourceMonitor-BacdZkk_.js \\\\
  /usr/trim/www/assets/index-CMZOY5-G.js; do \\\\
  findmnt -n "$f" >/dev/null 2>&amp;1 &amp;&amp; umount "$f" || true; done'

[Install]
WantedBy=multi-user.target
SERVEOF

systemctl daemon-reload</pre><h2>六、启动与验证</h2><h3>6.1 启动服务</h3><p>注意：必须先启动 WebSocket 代理服务，再刷新补丁（JS 补丁依赖原始前端文件）：</p><pre>systemctl enable --now fnos-igpu-ws-proxy.service
systemctl enable --now fnos-igpu-temp-patch.service
# 等待几秒后刷新 FnOS Web 面板

# 检查服务状态
systemctl status fnos-igpu-ws-proxy.service --no-pager
systemctl status fnos-igpu-temp-patch.service --no-pager</pre><h3>6.2 验证</h3><p>打开 FnOS Web 面板 → 资源监控 → GPU 区域，应能看到温度值。温度值来源于 CPU 封装温度（Package Temperature），并非独立 GPU 传感器，但已足够反映核显的散热状态。</p><p>也可以通过日志确认注入是否生效：</p><pre># WS 代理日志
tail -f /var/log/fnos-igpu-ws-proxy.log
# listening /run/trim_cgi.socket

# 补丁日志
cat /var/log/fnos-igpu-temp-patch.log
# gpu-temp-option:patched, capture-cpu-package-temp:patched, inject-gpu-temp:patched
# websocket-inject:patched</pre><h2>七、卸载</h2><pre># 一键卸载
bash /usr/local/sbin/fnos-igpu-temp-unpatch
# 或
systemctl disable --now fnos-igpu-ws-proxy.service
systemctl disable --now fnos-igpu-temp-patch.service
rm -f /etc/systemd/system/fnos-igpu-ws-proxy.service
rm -f /etc/systemd/system/fnos-igpu-temp-patch.service
systemctl daemon-reload
systemctl restart trim_nginx.service</pre><h2>八、Fnos系统更新后的处理</h2><p>FnOS 更新时可能会替换前端 JS 文件，导致 bind-mount 挂载点失效或补丁的文件名发生变化。更新后的处理步骤：</p><pre># 1. 检查补丁状态
cat /var/log/fnos-igpu-temp-patch.log | tail -5
# 如果有 "missing" 字样，说明前端文件名或代码结构已变化

# 2. 重新应用补丁
systemctl restart fnos-igpu-temp-patch.service

# 3. 如果仍不行，可能需要手动检查新的 JS 文件名
ls /usr/trim/www/assets/
# 找到新的 ResourceMonitor 和 index 文件，更新脚本中的文件名</pre><h2>九、备份与恢复</h2><h3>9.1 备份现有补丁</h3><pre># 完整备份所有补丁文件
BACKUP_DIR=/vol2/Backups/fnos-igpu-temp-patch-$(date +%Y%m%d-%H%M%S)
mkdir -p "$BACKUP_DIR"

# 收集所有相关文件
tar --zstd -cpf "$BACKUP_DIR/fnos-igpu-temp-patch-full.tar.zst" \\\\
  -C / etc/systemd/system/fnos-igpu-temp-patch.service \\\\
  -C / etc/systemd/system/fnos-igpu-ws-proxy.service \\\\
  -C / usr/local/sbin/fnos-igpu-ws-proxy.py \\\\
  -C / usr/local/sbin/fnos-igpu-temp-patch \\\\
  -C / usr/local/sbin/fnos-igpu-temp-core-patch \\\\
  -C / usr/local/sbin/fnos-igpu-temp-refresh \\\\
  -C / usr/local/sbin/fnos-igpu-temp-unpatch \\\\
  -C / usr/local/share/fnos-igpu-temp-patch \\\\
  -C / var/log/fnos-igpu-temp-patch.log \\\\
  -C / var/log/fnos-igpu-ws-proxy.log

# 生成摘要
cd "$BACKUP_DIR"
sha256sum fnos-igpu-temp-patch-full.tar.zst > checksums.sha256
echo "backup saved to $BACKUP_DIR"</pre><h3>9.2 在新设备上恢复</h3><pre># 从备份恢复
tar --zstd -xpf fnos-igpu-temp-patch-full.tar.zst -C /
chmod +x /usr/local/sbin/fnos-igpu-ws-proxy.py \\\\
  /usr/local/sbin/fnos-igpu-temp-patch \\\\
  /usr/local/sbin/fnos-igpu-temp-core-patch \\\\
  /usr/local/sbin/fnos-igpu-temp-refresh \\\\
  /usr/local/sbin/fnos-igpu-temp-unpatch

systemctl daemon-reload
systemctl enable --now fnos-igpu-ws-proxy.service
systemctl enable --now fnos-igpu-temp-patch.service
/usr/local/sbin/fnos-igpu-temp-refresh

# 验证
systemctl status fnos-igpu-ws-proxy.service --no-pager</pre><h2>十、技术原理深析</h2><h3>10.1 为什么 Intel 核显没有独立温度传感器？</h3><p>Intel 从 Sandy Bridge（第2代）开始将核显集成到 CPU 封装中，核显和 CPU 核心共用散热通道。从 Linux 4.15 开始，i915 驱动通过 hwmon 接口暴露了 GPU 温度（通过 GPU GT 热区），但这取决于硬件平台和驱动版本。在 10th Gen Comet Lake 及之前的部分平台上，i915 hwmon 接口可能缺失或返回无效值。</p><p>本方案将 CPU Package 温度（coretemp/temp1_input）复用给 GPU 显示，因为两者在同一封装中，温度高度相关，差异通常在 3-5°C 以内。</p><h3>10.2 WebSocket 代理原理</h3><p>FnOS 的前端与后端的 WebSocket 通信使用非标准的 WebSocket 协议（区别于标准 HTTP Upgrade 握手）。在实现中需要注意：</p><ul><li>客户端到代理的帧通常带 mask（masked = true），代理到上游的帧也需要 mask</li><li>上游返回的帧不带 mask（masked = false），代理到客户端也不带 mask</li><li>帧类型 opcode 1 = text, 8 = close</li></ul><h3>10.3 bind-mount 的优势</h3><ul><li>不修改原始文件系统，原始 JS 文件保持原样</li><li>系统更新时，如果原始文件被替换，bind-mount 挂载点变为孤儿挂载，下次重启服务时会自动 umount 并重新挂载</li><li>卸载时只需 umount + 移除 systemd 服务，不留痕迹</li></ul><h3>10.4 为什么有两个 JS 补丁？</h3><p>ResourceMonitor.js 负责资源监控页面的展示逻辑，index.js 是 FnOS 前端 WebSocket 底层通信框架。两个补丁的职责分工：</p><ul><li><strong>ResourceMonitor</strong>：修改 GPU 温度显示条件 + 捕获 CPU 温度 + 回填 GPU 数据</li><li><strong>index.js</strong>：在更低层的 WebSocket 消息处理中注入，确保所有通过 WebSocket 的 GPU 数据都被处理，与框架耦合更深、更可靠</li></ul><h2>十一、常见问题</h2><h3>Q: 补丁后 GPU 温度显示仍为空？</h3><p>检查以下项目：</p><pre># 1. 检查 WebSocket 代理是否运行
ss -lxnp | grep trim_cgi.socket
# 应看到 /run/trim_cgi.socket（代理）和 /run/trim_cgi.socket.orig（上游）

# 2. 检查补丁日志
cat /var/log/fnos-igpu-temp-patch.log
# 确认所有标记都是 "patched" 而非 "missing"

# 3. 检查 CPU 温度获取
cat /sys/class/hwmon/*/name 2>/dev/null | grep coretemp
cat /sys/class/hwmon/*/temp1_input 2>/dev/null
# 应返回一个三位数（如 79000 表示 79.0°C）

# 4. 清除浏览器缓存，或使用无痕模式刷新面板</pre><h3>Q: 补丁后温度值异常（过高或过低）？</h3><p>CPU Package 温度在 30-100°C 为正常范围。如果显示 0 或负值，可能是 hwmon 路径不正确。检查 /sys/class/hwmon 中的传感器列表，调整 fallback 逻辑。</p><h3>Q: FnOS 系统更新后补丁失效？</h3><p>FnOS 更新时前端 JS 文件的哈希值（文件名中的 BacdZkk_ 等字符串）会发生变化。需要重新运行 <code>systemctl restart fnos-igpu-temp-patch.service</code>。如果文件名已变，需要更新脚本中的文件名。</p><h3>Q: 是否支持 AMD 核显？</h3><p>AMD APU（如 4700U、5700G 等）的核显温度可能有独立的 hwmon 接口（amdgpu 驱动），本方案需要适配 AMD 的温度路径。AMD 用户应检查 /sys/class/hwmon 中是否有 amdgpu 相关传感器。</p><h3>Q: 是否影响 FnOS 其他功能？</h3><p>不影响。补丁仅修改资源监控页面的 GPU 温度显示逻辑，不涉及存储、网络、权限管理等核心功能。WebSocket 代理仅透传和修改 GPU 相关数据帧，其他消息完全无感知。</p><h3>Q: 可以还原至原始状态吗？</h3><p>可以。运行 <code>bash /usr/local/sbin/fnos-igpu-temp-unpatch</code> 即可一键卸载，系统恢复至完全原始状态。</p><h2>十二、总结</h2><p>本方案在没有 Intel 独立 GPU 温度传感器的情况下，通过巧妙的 WebSocket 代理 + JS 注入方式，将 CPU 封装温度复用到核显温度显示槽位，使 FnOS 的资源监控更加完整。所有操作通过 bind-mount 实现，不修改系统原始文件，可完整卸载还原。完整的备份和恢复机制保证了方案的可迁移性。</p><p>对于同样使用 FnOS + Intel 核显的用户，只需按照本文步骤操作即可实现核显温度显示。对于其他 Linux 发行版的类似需求，也可以借鉴 WebSocket 代理注入的思路加以适配。`},{slug:"dual-stack-domain",title:"从零搭建双栈域名体系：Cloudflare Tunnel + 内网穿透完全指南",subtitle:"V4/V6 双栈 · 域名统一接入 · 内外网分流防回环",date:"2026-05-28",tags:["Cloudflare","Tunnel","双栈","内网穿透","DNS"],summary:"V4/V6 双栈 · 域名统一接入 · 内外网分流防回环",html:`<section id=article-detail><div class="article-container reveal"><div class=article-header><h1>从零搭建双栈域名体系：Cloudflare Tunnel + 内网穿透完全指南</h1><p class=article-subtitle>V4/V6 双栈 · 域名统一接入 · 内外网分流防回环</p><div class=article-meta><span class=article-date>2026-05-28</span><div class=article-tags><span class=tech-tag>Cloudflare</span><span class=tech-tag>Tunnel</span><span class=tech-tag>双栈</span><span class=tech-tag>内网穿透</span><span class=tech-tag>DNS</span></div></div></div><div class=article-content><h2>一、为什么要做双栈域名？</h2><p>IPv6 已经普及，但很多服务只配置了 IPv4。双栈（Dual Stack）让域名同时支持 IPv4 和 IPv6 访问，用户无论使用哪种协议都能连通。结合 Cloudflare Tunnel，可以在没有公网 IP 的情况下，实现全域名双栈接入。</p><p>实际场景中，家中服务器可能只有 IPv6 公网地址（由运营商分配），而很多用户的网络环境仅支持 IPv4。双栈域名体系让两种网络环境下的用户都能无缝访问你的服务。</p><h2>二、基础架构设计</h2><p>整体架构分两条路径：外网用户通过 Cloudflare 边缘节点（天然双栈）进入 Tunnel，内网用户通过路由器 DNS 重定向直达本机。两条路径互不干扰，避免回环。</p><pre>┌─────────────────────────────────────────────────────────────┐
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
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/&lt;ZONE_ID>/dns_records" \\\\
  -H "Authorization: Bearer &lt;API_TOKEN>" \\\\
  -H "Content-Type: application/json" \\\\
  -d '{
    "type": "CNAME",
    "name": "emby",
    "content": "&lt;TUNNEL_ID>.cfargotunnel.com",
    "ttl": 1,
    "proxied": true
  }'

# 批量添加（多个域名）
for name in aria2 baota chromium ddnsgo emby fnos fntv \\\\
          hermes homeassistant istoreos migu moviepilot \\\\
          omnibox openlist pansou portainer qbittorrent \\\\
          socks sub2api substore telegram transmission xunlei; do
  curl -s -X POST ".../dns_records" \\\\
    -H "Authorization: Bearer &lt;API_TOKEN>" \\\\
    -H "Content-Type: application/json" \\\\
    -d "{\\\\"type\\\\":\\\\"CNAME\\\\",\\\\"name\\\\":\\\\"$name\\\\",\\\\"content\\\\":\\\\"&lt;TUNNEL_ID>.cfargotunnel.com\\\\",\\\\"ttl\\\\":1,\\\\"proxied\\\\":true}"
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
dig +short AAAA emby.example.com</pre><h3>Q: 部分域名不需要走 CF 代理怎么办？</h3><p>对于已有其他 CDN 或自托管服务的域名，可以关闭代理（⚪仅 DNS），仅保留 DNS 解析功能。例如博客域名 www.example.com 指向 GitHub Pages，可以设为 CNAME → yourname.github.io，关闭代理。</p><h3>Q: Tunnel 最多支持多少域名？</h3><p>Cloudflare 免费版 Tunnel 支持最多 100 个 ingress 规则，对于个人使用完全足够。`}];var yo=_('<section id=articles><div class="section-header reveal"><h2><span class=gradient-text>技术实战</span></h2><p>深入系统底层与网络架构，记录飞牛 NAS、Docker 编排与大模型实战经验</p></div><div class=articles-list>'),bo=_("<div class=article-meta><span class=article-date>📅 </span><div class=article-tags>"),vo=_("<h3>"),xo=_("<p>"),Oo=_("<span class=read-more>阅读全文 →"),So=_("<span class=tech-tag>");function Po(){return M(()=>{Q()}),(()=>{var e=yo(),t=e.firstChild,n=t.nextSibling;return f(n,()=>xt.map(o=>u($,{get href(){return`/article/${o.slug}`},class:"article-card reveal",get children(){return[(()=>{var r=bo(),s=r.firstChild;s.firstChild;var a=s.nextSibling;return f(s,()=>o.date,null),f(a,()=>o.tags.map(i=>(()=>{var l=So();return f(l,i),l})())),r})(),(()=>{var r=vo();return f(r,()=>o.title),r})(),(()=>{var r=xo();return f(r,()=>o.summary),r})(),Oo()]}}))),e})()}var Eo=_("<section id=article-detail>"),Co=_('<div class="article-container reveal"><div class=article-header><h1></h1><div class=article-meta><span class=article-date>📅 </span><div class=article-tags></div></div></div><div class=article-content>'),To=_("<p class=article-subtitle>"),Ro=_("<span class=tech-tag>"),Ao=_('<div class="article-container reveal"style="text-align:center;padding:4rem 2rem"><h2>未找到该文章</h2><p style="margin:1.5rem 0;color:var(--text-secondary)">请求的文章不存在或已被移除。');function $o(){const e=vn(),t=()=>xt.find(n=>n.slug===e.slug);return M(()=>{window.scrollTo({top:0,behavior:"smooth"}),Q()}),(()=>{var n=Eo();return f(n,(()=>{var o=Y(()=>!!t());return()=>o()?(()=>{var r=Co(),s=r.firstChild,a=s.firstChild,i=a.nextSibling,l=i.firstChild;l.firstChild;var c=l.nextSibling,p=s.nextSibling;return f(r,u($,{href:"/articles",class:"back-link",children:"← 返回技术实战列表"}),s),f(a,()=>t().title),f(s,(()=>{var d=Y(()=>!!t().subtitle);return()=>d()&&(()=>{var m=To();return f(m,()=>t().subtitle),m})()})(),i),f(l,()=>t().date,null),f(c,()=>t().tags.map(d=>(()=>{var m=Ro();return f(m,d),m})())),R(()=>p.innerHTML=t().html),r})():(()=>{var r=Ao(),s=r.firstChild;return s.nextSibling,f(r,u($,{href:"/articles",class:"btn btn-primary",children:"返回实战列表"}),null),r})()})()),n})()}var Io=_('<section style="min-height:calc(100vh - 160px);display:flex;align-items:center;justify-content:center;padding:2rem"><div class=reveal style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:20px;padding:3rem 2.5rem;width:min(420px, 92vw);backdrop-filter:blur(16px);text-align:center;box-shadow:0 16px 40px rgba(0, 0, 0, 0.4)"><div style=font-size:3.5rem;margin-bottom:1rem>🔒</div><h2 style=font-size:1.6rem;margin-bottom:0.5rem><span class=gradient-text>私有服务解锁</span></h2><p style=font-size:0.9rem;color:var(--text-secondary);margin-bottom:2rem>请输入访问密码以解锁家庭数据中心内网及私有服务直达链接</p><form style=display:flex;flex-direction:column;gap:1.2rem><div class=form-group><input type=password placeholder=输入访问密钥... required autofocus></div><button type=submit class="btn btn-primary"style=width:100%;justify-content:center;padding:0.9rem>🔓 立即解锁'),No=_('<p style="color:#ff7675;font-size:0.85rem;margin:-0.4rem 0 0">');function ko(){const[e]=xn(),t=Me(),{isLoggedIn:n,login:o}=fe(),[r,s]=I(""),[a,i]=I("");M(()=>{if(Q(),n()){const c=e.redirect;c?window.location.href=decodeURIComponent(c):t("/projects")}});const l=c=>{if(c.preventDefault(),!r().trim()){i("请输入访问密钥");return}if(o(r())){const d=e.redirect;d?window.location.href=decodeURIComponent(d):t("/projects")}else i("密钥不正确，请重试")};return(()=>{var c=Io(),p=c.firstChild,d=p.firstChild,m=d.nextSibling,h=m.nextSibling,b=h.nextSibling,g=b.firstChild,w=g.firstChild,x=g.nextSibling;return b.addEventListener("submit",l),w.$$input=S=>{s(S.target.value),i("")},f(b,(()=>{var S=Y(()=>!!a());return()=>S()&&(()=>{var A=No();return f(A,a),A})()})(),x),R(()=>w.value=r()),c})()}q(["input"]);Jt(()=>u(Xn,{get children(){return u(Fn,{root:oo,get children(){return[u(U,{path:"/",component:()=>[u(B,{children:"Mohican | 个人主页"}),u(ie,{name:"description",content:"Mohican - 全栈开发者、AI探索者、开源贡献者、自建派"}),u(Qe,{})]}),u(U,{path:"/about",component:()=>[u(B,{children:"Mohican | 关于我"}),u(ie,{name:"description",content:"了解 Mohican 的自建经历、家庭数据中心与技术栈"}),u(po,{})]}),u(U,{path:"/projects",component:()=>[u(B,{children:"Mohican | 精选项目 & 自建服务"}),u(ie,{name:"description",content:"Mohican 的家庭自建服务、开源作品与端口直达"}),u(_o,{})]}),u(U,{path:"/articles",component:()=>[u(B,{children:"Mohican | 技术实战"}),u(ie,{name:"description",content:"飞牛 NAS、Docker 编排与双栈网络实战经验"}),u(Po,{})]}),u(U,{path:"/article/:slug",component:()=>[u(B,{children:"Mohican | 技术实战详情"}),u($o,{})]}),u(U,{path:"/login",component:()=>[u(B,{children:"Mohican | 访问解锁"}),u(ko,{})]}),u(U,{path:"*paramName",component:()=>u(Qe,{})})]}})}}),document.getElementById("root"));
