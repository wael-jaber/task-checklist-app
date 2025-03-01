import{a as O,_ as u,g as Z,j as ee,s as T,k as he,f as K,u as te,c as w,b as oe,d as A,i as F}from"./DefaultPropsProvider-4fe26c0b.js";import{i as Se,r as H}from"./createSvgIcon-97a11aa5.js";import{j as r}from"./jsx-runtime-6d9837fe.js";import{r as m,a as Me,R as ue}from"./index-93f6b7ae.js";import{d as _e}from"./Assignment-12195fb3.js";import{u as ne,b as De,T as Ee,r as Ae,a as fe,M as Be,h as Oe,L as G,e as Te}from"./List-241a6e95.js";import{a as Ne,B as X}from"./Box-eaeca253.js";import{g as Ve}from"./getThemeProps-9dd38701.js";import{a as re,u as se,B as ye}from"./ButtonBase-54c4ca59.js";import{I as me}from"./IconButton-5241931a.js";import{D as ve}from"./Divider-7e260bb1.js";import{i as ge}from"./resolveComponentProps-ebe7f1f8.js";import{L as ze}from"./ListItemIcon-64c3e971.js";import{L as Ge}from"./ListItemText-fdeedf6d.js";import{P as Fe}from"./Paper-ca91e69e.js";import{d as He,a as Ce}from"./ownerWindow-598c61de.js";function Ue(e,t,o,n,s){const[l,d]=m.useState(()=>s&&o?o(e).matches:n?n(e).matches:t);return re(()=>{let p=!0;if(!o)return;const a=o(e),c=()=>{p&&d(a.matches)};return c(),a.addListener(c),()=>{p=!1,a.removeListener(c)}},[e,o]),l}const Ie=Me["useSyncExternalStore"];function Qe(e,t,o,n,s){const l=m.useCallback(()=>t,[t]),d=m.useMemo(()=>{if(s&&o)return()=>o(e).matches;if(n!==null){const{matches:f}=n(e);return()=>f}return l},[l,e,n,s,o]),[p,a]=m.useMemo(()=>{if(o===null)return[l,()=>()=>{}];const f=o(e);return[()=>f.matches,v=>(f.addListener(v),()=>{f.removeListener(v)})]},[l,o,e]);return Ie(a,p,d)}function We(e,t={}){const o=Ne(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:l=n?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:p=!1}=Ve({name:"MuiUseMediaQuery",props:t,theme:o});let a=typeof e=="function"?e(o):e;return a=a.replace(/^@media( ?)/m,""),(Ie!==void 0?Qe:Ue)(a,s,l,d,p)}const Ye=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function qe(e,t,o){const n=t.getBoundingClientRect(),s=o&&o.getBoundingClientRect(),l=Ce(t);let d;if(t.fakeTransform)d=t.fakeTransform;else{const c=l.getComputedStyle(t);d=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let p=0,a=0;if(d&&d!=="none"&&typeof d=="string"){const c=d.split("(")[1].split(")")[0].split(",");p=parseInt(c[4],10),a=parseInt(c[5],10)}return e==="left"?s?`translateX(${s.right+p-n.left}px)`:`translateX(${l.innerWidth+p-n.left}px)`:e==="right"?s?`translateX(-${n.right-s.left-p}px)`:`translateX(-${n.left+n.width-p}px)`:e==="up"?s?`translateY(${s.bottom+a-n.top}px)`:`translateY(${l.innerHeight+a-n.top}px)`:s?`translateY(-${n.top-s.top+n.height-a}px)`:`translateY(-${n.top+n.height-a}px)`}function Xe(e){return typeof e=="function"?e():e}function J(e,t,o){const n=Xe(o),s=qe(e,t,n);s&&(t.style.webkitTransform=s,t.style.transform=s)}const Je=m.forwardRef(function(t,o){const n=ne(),s={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},l={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:d,appear:p=!0,children:a,container:c,direction:f="down",easing:v=s,in:b,onEnter:M,onEntered:C,onEntering:I,onExit:$,onExited:j,onExiting:_,style:k,timeout:h=l,TransitionComponent:U=Ee}=t,D=O(t,Ye),x=m.useRef(null),Q=se(De(a),x,o),S=i=>g=>{i&&(g===void 0?i(x.current):i(x.current,g))},L=S((i,g)=>{J(f,i,c),Ae(i),M&&M(i,g)}),y=S((i,g)=>{const P=fe({timeout:h,style:k,easing:v},{mode:"enter"});i.style.webkitTransition=n.transitions.create("-webkit-transform",u({},P)),i.style.transition=n.transitions.create("transform",u({},P)),i.style.webkitTransform="none",i.style.transform="none",I&&I(i,g)}),E=S(C),R=S(_),Y=S(i=>{const g=fe({timeout:h,style:k,easing:v},{mode:"exit"});i.style.webkitTransition=n.transitions.create("-webkit-transform",g),i.style.transition=n.transitions.create("transform",g),J(f,i,c),$&&$(i)}),N=S(i=>{i.style.webkitTransition="",i.style.transition="",j&&j(i)}),q=i=>{d&&d(x.current,i)},W=m.useCallback(()=>{x.current&&J(f,x.current,c)},[f,c]);return m.useEffect(()=>{if(b||f==="down"||f==="right")return;const i=He(()=>{x.current&&J(f,x.current,c)}),g=Ce(x.current);return g.addEventListener("resize",i),()=>{i.clear(),g.removeEventListener("resize",i)}},[f,b,c]),m.useEffect(()=>{b||W()},[b,W]),r.jsx(U,u({nodeRef:x,onEnter:L,onEntered:E,onEntering:y,onExit:Y,onExited:N,onExiting:R,addEndListener:q,appear:p,in:b,timeout:h},D,{children:(i,g)=>m.cloneElement(a,u({ref:Q,style:u({visibility:i==="exited"&&!b?"hidden":void 0},k,a.props.style)},g))}))}),Ke=Je;function Ze(e){return Z("MuiDrawer",e)}ee("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const et=["BackdropProps"],tt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],$e=(e,t)=>{const{ownerState:o}=e;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},ot=e=>{const{classes:t,anchor:o,variant:n}=e,s={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${K(o)}`,n!=="temporary"&&`paperAnchorDocked${K(o)}`]};return oe(s,Ze,t)},nt=T(Be,{name:"MuiDrawer",slot:"Root",overridesResolver:$e})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),xe=T("div",{shouldForwardProp:he,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:$e})({flex:"0 0 auto"}),rt=T(Fe,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`paperAnchor${K(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${K(o.anchor)}`]]}})(({theme:e,ownerState:t})=>u({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),ke={left:"right",right:"left",top:"down",bottom:"up"};function st(e){return["left","right"].indexOf(e)!==-1}function at({direction:e},t){return e==="rtl"&&st(t)?ke[t]:t}const it=m.forwardRef(function(t,o){const n=te({props:t,name:"MuiDrawer"}),s=ne(),l=Oe(),d={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:p="left",BackdropProps:a,children:c,className:f,elevation:v=16,hideBackdrop:b=!1,ModalProps:{BackdropProps:M}={},onClose:C,open:I=!1,PaperProps:$={},SlideProps:j,TransitionComponent:_=Ke,transitionDuration:k=d,variant:h="temporary"}=n,U=O(n.ModalProps,et),D=O(n,tt),x=m.useRef(!1);m.useEffect(()=>{x.current=!0},[]);const Q=at({direction:l?"rtl":"ltr"},p),L=u({},n,{anchor:p,elevation:v,open:I,variant:h},D),y=ot(L),E=r.jsx(rt,u({elevation:h==="temporary"?v:0,square:!0},$,{className:w(y.paper,$.className),ownerState:L,children:c}));if(h==="permanent")return r.jsx(xe,u({className:w(y.root,y.docked,f),ownerState:L,ref:o},D,{children:E}));const R=r.jsx(_,u({in:I,direction:ke[Q],timeout:k,appear:x.current},j,{children:E}));return h==="persistent"?r.jsx(xe,u({className:w(y.root,y.docked,f),ownerState:L,ref:o},D,{children:R})):r.jsx(nt,u({BackdropProps:u({},a,M,{transitionDuration:k}),className:w(y.root,y.modal,f),open:I,ownerState:L,onClose:C,hideBackdrop:b,ref:o},D,U,{children:R}))}),be=it;function lt(e){return Z("MuiListItem",e)}const ct=ee("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),V=ct;function dt(e){return Z("MuiListItemButton",e)}const pt=ee("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),z=pt,ut=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],ft=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},mt=e=>{const{alignItems:t,classes:o,dense:n,disabled:s,disableGutters:l,divider:d,selected:p}=e,c=oe({root:["root",n&&"dense",!l&&"gutters",d&&"divider",s&&"disabled",t==="flex-start"&&"alignItemsFlexStart",p&&"selected"]},dt,o);return u({},o,c)},vt=T(ye,{shouldForwardProp:e=>he(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:ft})(({theme:e,ownerState:t})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),gt=m.forwardRef(function(t,o){const n=te({props:t,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:l=!1,component:d="div",children:p,dense:a=!1,disableGutters:c=!1,divider:f=!1,focusVisibleClassName:v,selected:b=!1,className:M}=n,C=O(n,ut),I=m.useContext(G),$=m.useMemo(()=>({dense:a||I.dense||!1,alignItems:s,disableGutters:c}),[s,I.dense,a,c]),j=m.useRef(null);re(()=>{l&&j.current&&j.current.focus()},[l]);const _=u({},n,{alignItems:s,dense:$.dense,disableGutters:c,divider:f,selected:b}),k=mt(_),h=se(j,o);return r.jsx(G.Provider,{value:$,children:r.jsx(vt,u({ref:h,href:C.href||C.to,component:(C.href||C.to)&&d==="div"?"button":d,focusVisibleClassName:w(k.focusVisible,v),ownerState:_,className:w(k.root,M)},C,{classes:k,children:p}))})}),xt=gt;function bt(e){return Z("MuiListItemSecondaryAction",e)}ee("MuiListItemSecondaryAction",["root","disableGutters"]);const ht=["className"],yt=e=>{const{disableGutters:t,classes:o}=e;return oe({root:["root",t&&"disableGutters"]},bt,o)},Ct=T("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>u({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Re=m.forwardRef(function(t,o){const n=te({props:t,name:"MuiListItemSecondaryAction"}),{className:s}=n,l=O(n,ht),d=m.useContext(G),p=u({},n,{disableGutters:d.disableGutters}),a=yt(p);return r.jsx(Ct,u({className:w(a.root,s),ownerState:p,ref:o},l))});Re.muiName="ListItemSecondaryAction";const It=Re,$t=["className"],kt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Rt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},jt=e=>{const{alignItems:t,button:o,classes:n,dense:s,disabled:l,disableGutters:d,disablePadding:p,divider:a,hasSecondaryAction:c,selected:f}=e;return oe({root:["root",s&&"dense",!d&&"gutters",!p&&"padding",a&&"divider",l&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",c&&"secondaryAction",f&&"selected"],container:["container"]},lt,n)},Lt=T("div",{name:"MuiListItem",slot:"Root",overridesResolver:Rt})(({theme:e,ownerState:t})=>u({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&u({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${z.root}`]:{paddingRight:48}},{[`&.${V.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${V.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${V.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${V.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),Pt=T("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),wt=m.forwardRef(function(t,o){const n=te({props:t,name:"MuiListItem"}),{alignItems:s="center",autoFocus:l=!1,button:d=!1,children:p,className:a,component:c,components:f={},componentsProps:v={},ContainerComponent:b="li",ContainerProps:{className:M}={},dense:C=!1,disabled:I=!1,disableGutters:$=!1,disablePadding:j=!1,divider:_=!1,focusVisibleClassName:k,secondaryAction:h,selected:U=!1,slotProps:D={},slots:x={}}=n,Q=O(n.ContainerProps,$t),S=O(n,kt),L=m.useContext(G),y=m.useMemo(()=>({dense:C||L.dense||!1,alignItems:s,disableGutters:$}),[s,L.dense,C,$]),E=m.useRef(null);re(()=>{l&&E.current&&E.current.focus()},[l]);const R=m.Children.toArray(p),Y=R.length&&Se(R[R.length-1],["ListItemSecondaryAction"]),N=u({},n,{alignItems:s,autoFocus:l,button:d,dense:y.dense,disabled:I,disableGutters:$,disablePadding:j,divider:_,hasSecondaryAction:Y,selected:U}),q=jt(N),W=se(E,o),i=x.root||f.Root||Lt,g=D.root||v.root||{},P=u({className:w(q.root,g.className,a),disabled:I},S);let B=c||"li";return d&&(P.component=c||"div",P.focusVisibleClassName=w(V.focusVisible,k),B=ye),Y?(B=!P.component&&!c?"div":B,b==="li"&&(B==="li"?B="div":P.component==="li"&&(P.component="div")),r.jsx(G.Provider,{value:y,children:r.jsxs(Pt,u({as:b,className:w(q.container,M),ref:W,ownerState:N},Q,{children:[r.jsx(i,u({},g,!ge(i)&&{as:B,ownerState:u({},N,g.ownerState)},P,{children:R})),R.pop()]}))})):r.jsx(G.Provider,{value:y,children:r.jsxs(i,u({},g,{as:B,ref:W},!ge(i)&&{ownerState:u({},N,g.ownerState)},P,{children:[R,h&&r.jsx(It,{children:h})]}))})}),St=wt;var ae={},Mt=F;Object.defineProperty(ae,"__esModule",{value:!0});var _t=ae.default=void 0,Dt=Mt(H()),Et=r;_t=ae.default=(0,Dt.default)((0,Et.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder");var ie={},At=F;Object.defineProperty(ie,"__esModule",{value:!0});var Bt=ie.default=void 0,Ot=At(H()),Tt=r;Bt=ie.default=(0,Ot.default)((0,Tt.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");var le={},Nt=F;Object.defineProperty(le,"__esModule",{value:!0});var je=le.default=void 0,Vt=Nt(H()),zt=r;je=le.default=(0,Vt.default)((0,zt.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var ce={},Gt=F;Object.defineProperty(ce,"__esModule",{value:!0});var Le=ce.default=void 0,Ft=Gt(H()),Ht=r;Le=ce.default=(0,Ft.default)((0,Ht.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckBox");var de={},Ut=F;Object.defineProperty(de,"__esModule",{value:!0});var Pe=de.default=void 0,Qt=Ut(H()),Wt=r;Pe=de.default=(0,Qt.default)((0,Wt.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");var pe={},Yt=F;Object.defineProperty(pe,"__esModule",{value:!0});var we=pe.default=void 0,qt=Yt(H()),Xt=r;we=pe.default=(0,qt.default)((0,Xt.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Jt=[{id:"home",label:"Dashboard",icon:r.jsx(je,{})},{id:"tasks",label:"Tasks",icon:r.jsx(_e,{})},{id:"completed",label:"Completed",icon:r.jsx(Le,{}),divider:!0}],Kt=({items:e=Jt,selectedItemId:t="home",onItemClick:o,width:n=240})=>{const s=ne(),l=We(s.breakpoints.down("md")),[d,p]=ue.useState(!1),a=()=>{p(!d)},c=v=>{o(v),l&&p(!1)},f=r.jsxs(X,{sx:{width:n},children:[r.jsxs(X,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2},children:[r.jsx(X,{component:"img",src:"/cendas-logo.webp",alt:"Logo",sx:{height:40}}),l&&r.jsx(me,{onClick:a,children:r.jsx(we,{})})]}),r.jsx(ve,{}),r.jsx(Te,{children:e.map(v=>r.jsxs(ue.Fragment,{children:[r.jsx(St,{disablePadding:!0,children:r.jsxs(xt,{selected:t===v.id,onClick:()=>c(v.id),sx:{"&.Mui-selected":{bgcolor:"action.selected",borderRight:"3px solid",borderColor:"primary.main"}},children:[r.jsx(ze,{children:v.icon}),r.jsx(Ge,{primary:v.label})]})}),v.divider&&r.jsx(ve,{sx:{my:1}})]},v.id))})]});return r.jsxs(r.Fragment,{children:[l&&r.jsx(me,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{md:"none"}},children:r.jsx(Pe,{})}),r.jsx(X,{component:"nav",sx:{width:{md:n},flexShrink:{md:0}},children:l?r.jsx(be,{variant:"temporary",open:d,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",md:"none"},"& .MuiDrawer-paper":{width:n}},children:f}):r.jsx(be,{variant:"permanent",sx:{display:{xs:"none",md:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:n}},open:!0,children:f})})]})};Kt.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:"",defaultValue:{value:`[
  { id: 'home', label: 'Dashboard', icon: <HomeIcon /> },
  { id: 'tasks', label: 'Tasks', icon: <AssignmentIcon /> },
  { id: 'completed', label: 'Completed', icon: <CheckBoxIcon />, divider: true },
]`,computed:!1}},selectedItemId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'home'",computed:!1}},onItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}}}};export{Kt as N,Bt as a,_t as d};
