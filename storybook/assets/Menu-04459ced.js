import{b as z,_ as v,g as ce,h as ue,s as Y,u as de,c as J,d as fe,p as Ve}from"./DefaultPropsProvider-6d541532.js";import{r as a}from"./index-93f6b7ae.js";import{j as O}from"./jsx-runtime-6d9837fe.js";import{o as W,a as le,c as Ne,d as Ye}from"./ownerWindow-598c61de.js";import{u as q,b as Re,s as Le,d as Fe,a as qe}from"./ButtonBase-64324024.js";import{r as Xe,m as Je,a as Qe,e as Ze,i as et}from"./resolveComponentProps-e8e0e122.js";import{u as He,T as Be,r as Ke,a as me}from"./dividerClasses-232aba77.js";import{r as tt}from"./index-e5d314f4.js";import{P as nt}from"./Paper-eebdd5ee.js";function ze(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const ot=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function oe(e){var t;const{elementType:n,externalSlotProps:o,ownerState:l,skipResolvingSlotProps:r=!1}=e,s=z(e,ot),c=r?{}:Xe(o,l),{props:u,internalRef:h}=Je(v({},s,{externalSlotProps:c})),P=q(h,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return Qe(n,v({},u,{ref:P}),l)}function ge(e){if(parseInt(a.version,10)>=19){var t;return(e==null||(t=e.props)==null?void 0:t.ref)||null}return(e==null?void 0:e.ref)||null}const rt=a.createContext(),st=()=>{const e=a.useContext(rt);return e??!1};function it(e){return typeof e=="function"?e():e}const at=a.forwardRef(function(t,n){const{children:o,container:l,disablePortal:r=!1}=t,[s,c]=a.useState(null),u=q(a.isValidElement(o)?ge(o):null,n);if(Re(()=>{r||c(it(l)||document.body)},[l,r]),Re(()=>{if(s&&!r)return Le(n,s),()=>{Le(n,null)}},[n,s,r]),r){if(a.isValidElement(o)){const h={ref:u};return a.cloneElement(o,h)}return O.jsx(a.Fragment,{children:o})}return O.jsx(a.Fragment,{children:s&&tt.createPortal(o,s)})}),lt=at,ct=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ut={entering:{opacity:1},entered:{opacity:1}},dt=a.forwardRef(function(t,n){const o=He(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:c,easing:u,in:h,onEnter:P,onEntered:x,onEntering:M,onExit:R,onExited:E,onExiting:I,style:T,timeout:m=l,TransitionComponent:F=Be}=t,i=z(t,ct),d=a.useRef(null),p=q(d,ge(c),n),S=C=>g=>{if(C){const b=d.current;g===void 0?C(b):C(b,g)}},f=S(M),N=S((C,g)=>{Ke(C);const b=me({style:T,timeout:m,easing:u},{mode:"enter"});C.style.webkitTransition=o.transitions.create("opacity",b),C.style.transition=o.transitions.create("opacity",b),P&&P(C,g)}),A=S(x),L=S(I),H=S(C=>{const g=me({style:T,timeout:m,easing:u},{mode:"exit"});C.style.webkitTransition=o.transitions.create("opacity",g),C.style.transition=o.transitions.create("opacity",g),R&&R(C)}),D=S(E),$=C=>{r&&r(d.current,C)};return O.jsx(F,v({appear:s,in:h,nodeRef:d,onEnter:N,onEntered:A,onEntering:f,onExit:H,onExited:D,onExiting:L,addEndListener:$,timeout:m},i,{children:(C,g)=>a.cloneElement(c,v({style:v({opacity:0,visibility:C==="exited"&&!h?"hidden":void 0},ut[C],T,c.props.style),ref:p},g))}))}),ft=dt;function pt(e){return ce("MuiBackdrop",e)}ue("MuiBackdrop",["root","invisible"]);const ht=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],mt=e=>{const{classes:t,invisible:n}=e;return fe({root:["root",n&&"invisible"]},pt,t)},gt=Y("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),bt=a.forwardRef(function(t,n){var o,l,r;const s=de({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:h="div",components:P={},componentsProps:x={},invisible:M=!1,open:R,slotProps:E={},slots:I={},TransitionComponent:T=ft,transitionDuration:m}=s,F=z(s,ht),i=v({},s,{component:h,invisible:M}),d=mt(i),p=(o=E.root)!=null?o:x.root;return O.jsx(T,v({in:R,timeout:m},F,{children:O.jsx(gt,v({"aria-hidden":!0},p,{as:(l=(r=I.root)!=null?r:P.Root)!=null?l:h,className:J(d.root,u,p==null?void 0:p.className),ownerState:v({},i,p==null?void 0:p.ownerState),classes:d,ref:n,children:c}))}))}),Et=bt;function xt(e){const t=W(e);return t.body===e?le(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ae(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function De(e){return parseInt(le(e).getComputedStyle(e).paddingRight,10)||0}function vt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function $e(e,t,n,o,l){const r=[t,n,...o];[].forEach.call(e.children,s=>{const c=r.indexOf(s)===-1,u=!vt(s);c&&u&&ae(s,l)})}function xe(e,t){let n=-1;return e.some((o,l)=>t(o)?(n=l,!0):!1),n}function Pt(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(xt(o)){const s=ze(W(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${De(o)+s}px`;const c=W(o).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${De(u)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=W(o).body;else{const s=o.parentElement,c=le(o);r=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:c})=>{r?s.style.setProperty(c,r):s.style.removeProperty(c)})}}function yt(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Rt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ae(t.modalRef,!1);const l=yt(n);$e(n,t.mount,t.modalRef,l,!0);const r=xe(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:l}),o)}mount(t,n){const o=xe(this.containers,r=>r.modals.indexOf(t)!==-1),l=this.containers[o];l.restore||(l.restore=Pt(l,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const l=xe(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[l];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ae(t.modalRef,n),$e(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(l,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&ae(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Tt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function St(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ct(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function kt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ct(e))}function wt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Tt)).forEach((o,l)=>{const r=St(o);r===-1||!kt(o)||(r===0?t.push(o):n.push({documentOrder:l,tabIndex:r,node:o}))}),n.sort((o,l)=>o.tabIndex===l.tabIndex?o.documentOrder-l.documentOrder:o.tabIndex-l.tabIndex).map(o=>o.node).concat(t)}function Mt(){return!0}function It(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:l=!1,getTabbable:r=wt,isEnabled:s=Mt,open:c}=e,u=a.useRef(!1),h=a.useRef(null),P=a.useRef(null),x=a.useRef(null),M=a.useRef(null),R=a.useRef(!1),E=a.useRef(null),I=q(ge(t),E),T=a.useRef(null);a.useEffect(()=>{!c||!E.current||(R.current=!n)},[n,c]),a.useEffect(()=>{if(!c||!E.current)return;const i=W(E.current);return E.current.contains(i.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),R.current&&E.current.focus()),()=>{l||(x.current&&x.current.focus&&(u.current=!0,x.current.focus()),x.current=null)}},[c]),a.useEffect(()=>{if(!c||!E.current)return;const i=W(E.current),d=f=>{T.current=f,!(o||!s()||f.key!=="Tab")&&i.activeElement===E.current&&f.shiftKey&&(u.current=!0,P.current&&P.current.focus())},p=()=>{const f=E.current;if(f===null)return;if(!i.hasFocus()||!s()||u.current){u.current=!1;return}if(f.contains(i.activeElement)||o&&i.activeElement!==h.current&&i.activeElement!==P.current)return;if(i.activeElement!==M.current)M.current=null;else if(M.current!==null)return;if(!R.current)return;let N=[];if((i.activeElement===h.current||i.activeElement===P.current)&&(N=r(E.current)),N.length>0){var A,L;const H=!!((A=T.current)!=null&&A.shiftKey&&((L=T.current)==null?void 0:L.key)==="Tab"),D=N[0],$=N[N.length-1];typeof D!="string"&&typeof $!="string"&&(H?$.focus():D.focus())}else f.focus()};i.addEventListener("focusin",p),i.addEventListener("keydown",d,!0);const S=setInterval(()=>{i.activeElement&&i.activeElement.tagName==="BODY"&&p()},50);return()=>{clearInterval(S),i.removeEventListener("focusin",p),i.removeEventListener("keydown",d,!0)}},[n,o,l,s,c,r]);const m=i=>{x.current===null&&(x.current=i.relatedTarget),R.current=!0,M.current=i.target;const d=t.props.onFocus;d&&d(i)},F=i=>{x.current===null&&(x.current=i.relatedTarget),R.current=!0};return O.jsxs(a.Fragment,{children:[O.jsx("div",{tabIndex:c?0:-1,onFocus:F,ref:h,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:I,onFocus:m}),O.jsx("div",{tabIndex:c?0:-1,onFocus:F,ref:P,"data-testid":"sentinelEnd"})]})}function Nt(e){return typeof e=="function"?e():e}function Lt(e){return e?e.props.hasOwnProperty("in"):!1}const Ft=new Rt;function Dt(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:l=Ft,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:c,children:u,onClose:h,open:P,rootRef:x}=e,M=a.useRef({}),R=a.useRef(null),E=a.useRef(null),I=q(E,x),[T,m]=a.useState(!P),F=Lt(u);let i=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(i=!1);const d=()=>W(R.current),p=()=>(M.current.modalRef=E.current,M.current.mount=R.current,M.current),S=()=>{l.mount(p(),{disableScrollLock:o}),E.current&&(E.current.scrollTop=0)},f=Fe(()=>{const b=Nt(t)||d().body;l.add(p(),b),E.current&&S()}),N=a.useCallback(()=>l.isTopModal(p()),[l]),A=Fe(b=>{R.current=b,b&&(P&&N()?S():E.current&&ae(E.current,i))}),L=a.useCallback(()=>{l.remove(p(),i)},[i,l]);a.useEffect(()=>()=>{L()},[L]),a.useEffect(()=>{P?f():(!F||!r)&&L()},[P,L,F,r,f]);const H=b=>y=>{var k;(k=b.onKeyDown)==null||k.call(b,y),!(y.key!=="Escape"||y.which===229||!N())&&(n||(y.stopPropagation(),h&&h(y,"escapeKeyDown")))},D=b=>y=>{var k;(k=b.onClick)==null||k.call(b,y),y.target===y.currentTarget&&h&&h(y,"backdropClick")};return{getRootProps:(b={})=>{const y=Ze(e);delete y.onTransitionEnter,delete y.onTransitionExited;const k=v({},y,b);return v({role:"presentation"},k,{onKeyDown:H(k),ref:I})},getBackdropProps:(b={})=>{const y=b;return v({"aria-hidden":!0},y,{onClick:D(y),open:P})},getTransitionProps:()=>{const b=()=>{m(!1),s&&s()},y=()=>{m(!0),c&&c(),r&&L()};return{onEnter:Ne(b,u==null?void 0:u.props.onEnter),onExited:Ne(y,u==null?void 0:u.props.onExited)}},rootRef:I,portalRef:A,isTopModal:N,exited:T,hasTransition:F}}function $t(e){return ce("MuiModal",e)}ue("MuiModal",["root","hidden","backdrop"]);const Ot=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],At=e=>{const{open:t,exited:n,classes:o}=e;return fe({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},$t,o)},_t=Y("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),jt=Y(Et,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Ht=a.forwardRef(function(t,n){var o,l,r,s,c,u;const h=de({name:"MuiModal",props:t}),{BackdropComponent:P=jt,BackdropProps:x,className:M,closeAfterTransition:R=!1,children:E,container:I,component:T,components:m={},componentsProps:F={},disableAutoFocus:i=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:p=!1,disablePortal:S=!1,disableRestoreFocus:f=!1,disableScrollLock:N=!1,hideBackdrop:A=!1,keepMounted:L=!1,onBackdropClick:H,open:D,slotProps:$,slots:C}=h,g=z(h,Ot),b=v({},h,{closeAfterTransition:R,disableAutoFocus:i,disableEnforceFocus:d,disableEscapeKeyDown:p,disablePortal:S,disableRestoreFocus:f,disableScrollLock:N,hideBackdrop:A,keepMounted:L}),{getRootProps:y,getBackdropProps:k,getTransitionProps:j,portalRef:G,isTopModal:pe,exited:K,hasTransition:he}=Dt(v({},b,{rootRef:n})),X=v({},b,{exited:K}),V=At(X),Q={};if(E.props.tabIndex===void 0&&(Q.tabIndex="-1"),he){const{onEnter:w,onExited:_}=j();Q.onEnter=w,Q.onExited=_}const Z=(o=(l=C==null?void 0:C.root)!=null?l:m.Root)!=null?o:_t,re=(r=(s=C==null?void 0:C.backdrop)!=null?s:m.Backdrop)!=null?r:P,se=(c=$==null?void 0:$.root)!=null?c:F.root,ee=(u=$==null?void 0:$.backdrop)!=null?u:F.backdrop,be=oe({elementType:Z,externalSlotProps:se,externalForwardedProps:g,getSlotProps:y,additionalProps:{ref:n,as:T},ownerState:X,className:J(M,se==null?void 0:se.className,V==null?void 0:V.root,!X.open&&X.exited&&(V==null?void 0:V.hidden))}),Ee=oe({elementType:re,externalSlotProps:ee,additionalProps:x,getSlotProps:w=>k(v({},w,{onClick:_=>{H&&H(_),w!=null&&w.onClick&&w.onClick(_)}})),className:J(ee==null?void 0:ee.className,x==null?void 0:x.className,V==null?void 0:V.backdrop),ownerState:X});return!L&&!D&&(!he||K)?null:O.jsx(lt,{ref:G,container:I,disablePortal:S,children:O.jsxs(Z,v({},be,{children:[!A&&P?O.jsx(re,v({},Ee)):null,O.jsx(It,{disableEnforceFocus:d,disableAutoFocus:i,disableRestoreFocus:f,isEnabled:pe,open:D,children:a.cloneElement(E,Q)})]}))})}),Bt=Ht,Kt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Te(e){return`scale(${e}, ${e**2})`}const zt={entering:{opacity:1,transform:Te(1)},entered:{opacity:1,transform:"none"}},ve=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ue=a.forwardRef(function(t,n){const{addEndListener:o,appear:l=!0,children:r,easing:s,in:c,onEnter:u,onEntered:h,onEntering:P,onExit:x,onExited:M,onExiting:R,style:E,timeout:I="auto",TransitionComponent:T=Be}=t,m=z(t,Kt),F=qe(),i=a.useRef(),d=He(),p=a.useRef(null),S=q(p,ge(r),n),f=g=>b=>{if(g){const y=p.current;b===void 0?g(y):g(y,b)}},N=f(P),A=f((g,b)=>{Ke(g);const{duration:y,delay:k,easing:j}=me({style:E,timeout:I,easing:s},{mode:"enter"});let G;I==="auto"?(G=d.transitions.getAutoHeightDuration(g.clientHeight),i.current=G):G=y,g.style.transition=[d.transitions.create("opacity",{duration:G,delay:k}),d.transitions.create("transform",{duration:ve?G:G*.666,delay:k,easing:j})].join(","),u&&u(g,b)}),L=f(h),H=f(R),D=f(g=>{const{duration:b,delay:y,easing:k}=me({style:E,timeout:I,easing:s},{mode:"exit"});let j;I==="auto"?(j=d.transitions.getAutoHeightDuration(g.clientHeight),i.current=j):j=b,g.style.transition=[d.transitions.create("opacity",{duration:j,delay:y}),d.transitions.create("transform",{duration:ve?j:j*.666,delay:ve?y:y||j*.333,easing:k})].join(","),g.style.opacity=0,g.style.transform=Te(.75),x&&x(g)}),$=f(M),C=g=>{I==="auto"&&F.start(i.current||0,g),o&&o(p.current,g)};return O.jsx(T,v({appear:l,in:c,nodeRef:p,onEnter:A,onEntered:L,onEntering:N,onExit:D,onExited:$,onExiting:H,addEndListener:C,timeout:I==="auto"?null:I},m,{children:(g,b)=>a.cloneElement(r,v({style:v({opacity:0,transform:Te(.75),visibility:g==="exited"&&!c?"hidden":void 0},zt[g],E,r.props.style),ref:S},b))}))});Ue.muiSupportAuto=!0;const Ut=Ue,Wt=a.createContext({}),Gt=Wt;function Vt(e){return ce("MuiList",e)}ue("MuiList",["root","padding","dense","subheader"]);const Yt=["children","className","component","dense","disablePadding","subheader"],qt=e=>{const{classes:t,disablePadding:n,dense:o,subheader:l}=e;return fe({root:["root",!n&&"padding",o&&"dense",l&&"subheader"]},Vt,t)},Xt=Y("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>v({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Jt=a.forwardRef(function(t,n){const o=de({props:t,name:"MuiList"}),{children:l,className:r,component:s="ul",dense:c=!1,disablePadding:u=!1,subheader:h}=o,P=z(o,Yt),x=a.useMemo(()=>({dense:c}),[c]),M=v({},o,{component:s,dense:c,disablePadding:u}),R=qt(M);return O.jsx(Gt.Provider,{value:x,children:O.jsxs(Xt,v({as:s,className:J(R.root,r),ref:n,ownerState:M},P,{children:[h,l]}))})}),Qt=Jt,Zt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Pe(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Oe(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function We(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function ie(e,t,n,o,l,r){let s=!1,c=l(e,t,t?n:!1);for(;c;){if(c===e.firstChild){if(s)return!1;s=!0}const u=o?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!We(c,r)||u)c=l(e,c,n);else return c.focus(),!0}return!1}const en=a.forwardRef(function(t,n){const{actions:o,autoFocus:l=!1,autoFocusItem:r=!1,children:s,className:c,disabledItemsFocusable:u=!1,disableListWrap:h=!1,onKeyDown:P,variant:x="selectedMenu"}=t,M=z(t,Zt),R=a.useRef(null),E=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Re(()=>{l&&R.current.focus()},[l]),a.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(i,{direction:d})=>{const p=!R.current.style.width;if(i.clientHeight<R.current.clientHeight&&p){const S=`${ze(W(i))}px`;R.current.style[d==="rtl"?"paddingLeft":"paddingRight"]=S,R.current.style.width=`calc(100% + ${S})`}return R.current}}),[]);const I=i=>{const d=R.current,p=i.key,S=W(d).activeElement;if(p==="ArrowDown")i.preventDefault(),ie(d,S,h,u,Pe);else if(p==="ArrowUp")i.preventDefault(),ie(d,S,h,u,Oe);else if(p==="Home")i.preventDefault(),ie(d,null,h,u,Pe);else if(p==="End")i.preventDefault(),ie(d,null,h,u,Oe);else if(p.length===1){const f=E.current,N=p.toLowerCase(),A=performance.now();f.keys.length>0&&(A-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&N!==f.keys[0]&&(f.repeating=!1)),f.lastTime=A,f.keys.push(N);const L=S&&!f.repeating&&We(S,f);f.previousKeyMatched&&(L||ie(d,S,!1,u,Pe,f))?i.preventDefault():f.previousKeyMatched=!1}P&&P(i)},T=q(R,n);let m=-1;a.Children.forEach(s,(i,d)=>{if(!a.isValidElement(i)){m===d&&(m+=1,m>=s.length&&(m=-1));return}i.props.disabled||(x==="selectedMenu"&&i.props.selected||m===-1)&&(m=d),m===d&&(i.props.disabled||i.props.muiSkipListHighlight||i.type.muiSkipListHighlight)&&(m+=1,m>=s.length&&(m=-1))});const F=a.Children.map(s,(i,d)=>{if(d===m){const p={};return r&&(p.autoFocus=!0),i.props.tabIndex===void 0&&x==="selectedMenu"&&(p.tabIndex=0),a.cloneElement(i,p)}return i});return O.jsx(Qt,v({role:"menu",ref:T,className:c,onKeyDown:I,tabIndex:l?0:-1},M,{children:F}))}),tn=en;function nn(e){return ce("MuiPopover",e)}ue("MuiPopover",["root","paper"]);const on=["onEntering"],rn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],sn=["slotProps"];function Ae(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function _e(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function je(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ye(e){return typeof e=="function"?e():e}const an=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"]},nn,t)},ln=Y(Bt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ge=Y(nt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),cn=a.forwardRef(function(t,n){var o,l,r;const s=de({props:t,name:"MuiPopover"}),{action:c,anchorEl:u,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:P,anchorReference:x="anchorEl",children:M,className:R,container:E,elevation:I=8,marginThreshold:T=16,open:m,PaperProps:F={},slots:i,slotProps:d,transformOrigin:p={vertical:"top",horizontal:"left"},TransitionComponent:S=Ut,transitionDuration:f="auto",TransitionProps:{onEntering:N}={},disableScrollLock:A=!1}=s,L=z(s.TransitionProps,on),H=z(s,rn),D=(o=d==null?void 0:d.paper)!=null?o:F,$=a.useRef(),C=q($,D.ref),g=v({},s,{anchorOrigin:h,anchorReference:x,elevation:I,marginThreshold:T,externalPaperSlotProps:D,transformOrigin:p,TransitionComponent:S,transitionDuration:f,TransitionProps:L}),b=an(g),y=a.useCallback(()=>{if(x==="anchorPosition")return P;const w=ye(u),B=(w&&w.nodeType===1?w:W($.current).body).getBoundingClientRect();return{top:B.top+Ae(B,h.vertical),left:B.left+_e(B,h.horizontal)}},[u,h.horizontal,h.vertical,P,x]),k=a.useCallback(w=>({vertical:Ae(w,p.vertical),horizontal:_e(w,p.horizontal)}),[p.horizontal,p.vertical]),j=a.useCallback(w=>{const _={width:w.offsetWidth,height:w.offsetHeight},B=k(_);if(x==="none")return{top:null,left:null,transformOrigin:je(B)};const Se=y();let te=Se.top-B.vertical,ne=Se.left-B.horizontal;const Ce=te+_.height,ke=ne+_.width,we=le(ye(u)),Me=we.innerHeight-T,Ie=we.innerWidth-T;if(T!==null&&te<T){const U=te-T;te-=U,B.vertical+=U}else if(T!==null&&Ce>Me){const U=Ce-Me;te-=U,B.vertical+=U}if(T!==null&&ne<T){const U=ne-T;ne-=U,B.horizontal+=U}else if(ke>Ie){const U=ke-Ie;ne-=U,B.horizontal+=U}return{top:`${Math.round(te)}px`,left:`${Math.round(ne)}px`,transformOrigin:je(B)}},[u,x,y,k,T]),[G,pe]=a.useState(m),K=a.useCallback(()=>{const w=$.current;if(!w)return;const _=j(w);_.top!==null&&(w.style.top=_.top),_.left!==null&&(w.style.left=_.left),w.style.transformOrigin=_.transformOrigin,pe(!0)},[j]);a.useEffect(()=>(A&&window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)),[u,A,K]);const he=(w,_)=>{N&&N(w,_),K()},X=()=>{pe(!1)};a.useEffect(()=>{m&&K()}),a.useImperativeHandle(c,()=>m?{updatePosition:()=>{K()}}:null,[m,K]),a.useEffect(()=>{if(!m)return;const w=Ye(()=>{K()}),_=le(u);return _.addEventListener("resize",w),()=>{w.clear(),_.removeEventListener("resize",w)}},[u,m,K]);let V=f;f==="auto"&&!S.muiSupportAuto&&(V=void 0);const Q=E||(u?W(ye(u)).body:void 0),Z=(l=i==null?void 0:i.root)!=null?l:ln,re=(r=i==null?void 0:i.paper)!=null?r:Ge,se=oe({elementType:re,externalSlotProps:v({},D,{style:G?D.style:v({},D.style,{opacity:0})}),additionalProps:{elevation:I,ref:C},ownerState:g,className:J(b.paper,D==null?void 0:D.className)}),ee=oe({elementType:Z,externalSlotProps:(d==null?void 0:d.root)||{},externalForwardedProps:H,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Q,open:m},ownerState:g,className:J(b.root,R)}),{slotProps:be}=ee,Ee=z(ee,sn);return O.jsx(Z,v({},Ee,!et(Z)&&{slotProps:be,disableScrollLock:A},{children:O.jsx(S,v({appear:!0,in:m,onEntering:he,onExited:X,timeout:V},L,{children:O.jsx(re,v({},se,{children:M}))}))}))}),un=cn;function dn(e){return ce("MuiMenu",e)}ue("MuiMenu",["root","paper","list"]);const fn=["onEntering"],pn=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],hn={vertical:"top",horizontal:"right"},mn={vertical:"top",horizontal:"left"},gn=e=>{const{classes:t}=e;return fe({root:["root"],paper:["paper"],list:["list"]},dn,t)},bn=Y(un,{shouldForwardProp:e=>Ve(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),En=Y(Ge,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),xn=Y(tn,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),vn=a.forwardRef(function(t,n){var o,l;const r=de({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:c,className:u,disableAutoFocusItem:h=!1,MenuListProps:P={},onClose:x,open:M,PaperProps:R={},PopoverClasses:E,transitionDuration:I="auto",TransitionProps:{onEntering:T}={},variant:m="selectedMenu",slots:F={},slotProps:i={}}=r,d=z(r.TransitionProps,fn),p=z(r,pn),S=st(),f=v({},r,{autoFocus:s,disableAutoFocusItem:h,MenuListProps:P,onEntering:T,PaperProps:R,transitionDuration:I,TransitionProps:d,variant:m}),N=gn(f),A=s&&!h&&M,L=a.useRef(null),H=(k,j)=>{L.current&&L.current.adjustStyleForScrollbar(k,{direction:S?"rtl":"ltr"}),T&&T(k,j)},D=k=>{k.key==="Tab"&&(k.preventDefault(),x&&x(k,"tabKeyDown"))};let $=-1;a.Children.map(c,(k,j)=>{a.isValidElement(k)&&(k.props.disabled||(m==="selectedMenu"&&k.props.selected||$===-1)&&($=j))});const C=(o=F.paper)!=null?o:En,g=(l=i.paper)!=null?l:R,b=oe({elementType:F.root,externalSlotProps:i.root,ownerState:f,className:[N.root,u]}),y=oe({elementType:C,externalSlotProps:g,ownerState:f,className:N.paper});return O.jsx(bn,v({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:S?"right":"left"},transformOrigin:S?hn:mn,slots:{paper:C,root:F.root},slotProps:{root:b,paper:y},open:M,ref:n,transitionDuration:I,TransitionProps:v({onEntering:H},d),ownerState:f},p,{classes:E,children:O.jsx(xn,v({onKeyDown:D,actions:L,autoFocus:s&&($===-1||h),autoFocusItem:A,variant:m},P,{className:J(N.list,P.className),children:c}))}))}),In=vn;export{Gt as L,In as M,ge as g};
