import{j as n}from"./jsx-runtime-6d9837fe.js";import{r as y}from"./index-93f6b7ae.js";import{g as re,j as oe,s as C,_ as a,u as se,v as ae,a as le,c as de,b as ce,i as pe}from"./DefaultPropsProvider-fd6e58b8.js";import{r as ue}from"./createSvgIcon-12ab1a12.js";import{d as me,C as he}from"./ChecklistItem-1fe7831b.js";import{T as fe}from"./TaskActionMenu-01cb8968.js";import{d as ge}from"./CheckCircle-f4fa5de3.js";import{I as xe}from"./IconButton-dd2d5a4e.js";import{B as v}from"./Box-5929dc9d.js";import{C as ye,a as ve,b as Ce}from"./CardHeader-540a6e4b.js";import{T as D}from"./Typography-e5f4b08d.js";import{C as Ee}from"./Chip-24959d50.js";import{D as je}from"./Divider-01e4102b.js";import{T as we,u as Te,a as F}from"./List-6a2de8d1.js";import{b as Ie,u as ze}from"./ButtonBase-bb19b134.js";function be(t){return re("MuiCollapse",t)}oe("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ke=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Re=t=>{const{orientation:i,classes:o}=t,c={root:["root",`${i}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${i}`],wrapperInner:["wrapperInner",`${i}`]};return ce(c,be,o)},Se=C("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:o}=t;return[i.root,i[o.orientation],o.state==="entered"&&i.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&i.hidden]}})(({theme:t,ownerState:i})=>a({height:0,overflow:"hidden",transition:t.transitions.create("height")},i.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},i.state==="entered"&&a({height:"auto",overflow:"visible"},i.orientation==="horizontal"&&{width:"auto"}),i.state==="exited"&&!i.in&&i.collapsedSize==="0px"&&{visibility:"hidden"})),De=C("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,i)=>i.wrapper})(({ownerState:t})=>a({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),_e=C("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,i)=>i.wrapperInner})(({ownerState:t})=>a({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),U=y.forwardRef(function(i,o){const c=se({props:i,name:"MuiCollapse"}),{addEndListener:E,children:_,className:$,collapsedSize:l="0px",component:M,easing:j,in:w,onEnter:T,onEntered:I,onEntering:r,onExit:z,onExited:G,onExiting:H,orientation:L="vertical",style:q,timeout:p=ae.standard,TransitionComponent:J=we}=c,K=le(c,ke),b=a({},c,{orientation:L,collapsedSize:l}),h=Re(b),N=Te(),Q=Ie(),u=y.useRef(null),B=y.useRef(),k=typeof l=="number"?`${l}px`:l,f=L==="horizontal",g=f?"width":"height",R=y.useRef(null),V=ze(o,R),m=e=>s=>{if(e){const d=R.current;s===void 0?e(d):e(d,s)}},W=()=>u.current?u.current[f?"clientWidth":"clientHeight"]:0,X=m((e,s)=>{u.current&&f&&(u.current.style.position="absolute"),e.style[g]=k,T&&T(e,s)}),Y=m((e,s)=>{const d=W();u.current&&f&&(u.current.style.position="");const{duration:x,easing:S}=F({style:q,timeout:p,easing:j},{mode:"enter"});if(p==="auto"){const A=N.transitions.getAutoHeightDuration(d);e.style.transitionDuration=`${A}ms`,B.current=A}else e.style.transitionDuration=typeof x=="string"?x:`${x}ms`;e.style[g]=`${d}px`,e.style.transitionTimingFunction=S,r&&r(e,s)}),Z=m((e,s)=>{e.style[g]="auto",I&&I(e,s)}),ee=m(e=>{e.style[g]=`${W()}px`,z&&z(e)}),te=m(G),ne=m(e=>{const s=W(),{duration:d,easing:x}=F({style:q,timeout:p,easing:j},{mode:"exit"});if(p==="auto"){const S=N.transitions.getAutoHeightDuration(s);e.style.transitionDuration=`${S}ms`,B.current=S}else e.style.transitionDuration=typeof d=="string"?d:`${d}ms`;e.style[g]=k,e.style.transitionTimingFunction=x,H&&H(e)}),ie=e=>{p==="auto"&&Q.start(B.current||0,e),E&&E(R.current,e)};return n.jsx(J,a({in:w,onEnter:X,onEntered:Z,onEntering:Y,onExit:ee,onExited:te,onExiting:ne,addEndListener:ie,nodeRef:R,timeout:p==="auto"?null:p},K,{children:(e,s)=>n.jsx(Se,a({as:M,className:de(h.root,$,{entered:h.entered,exited:!w&&k==="0px"&&h.hidden}[e]),style:a({[f?"minWidth":"minHeight"]:k},q),ref:V},s,{ownerState:a({},b,{state:e}),children:n.jsx(De,{ownerState:a({},b,{state:e}),className:h.wrapper,ref:u,children:n.jsx(_e,{ownerState:a({},b,{state:e}),className:h.wrapperInner,children:_})})}))}))});U.muiSupportAuto=!0;const $e=U;var P={},Me=pe;Object.defineProperty(P,"__esModule",{value:!0});var O=P.default=void 0,qe=Me(ue()),Be=n;O=P.default=(0,qe.default)((0,Be.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");const We=C(xe)(({theme:t,expanded:i})=>({transform:i?"rotate(180deg)":"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})})),Pe=C(v)(({theme:t})=>({display:"flex",alignItems:"center",color:t.palette.error.main,marginLeft:t.spacing(1)})),He=({task:t,onChecklistItemStatusChange:i,onClick:o,onEdit:c,onDelete:E,onDuplicate:_,onToggleBlocked:$})=>{const[l,M]=y.useState(!1),j=r=>{r.stopPropagation(),M(!l)},w=r=>{r.stopPropagation()},T=(r,z)=>{i(t.id,r,z)},I=t.checklist.filter(r=>r.status==="done"||r.status==="final_installation_done").length;return n.jsxs(ye,{sx:{mb:2,cursor:o?"pointer":"default","&:hover":{boxShadow:o?3:1}},onClick:o,children:[n.jsx(ve,{title:n.jsxs(v,{sx:{display:"flex",alignItems:"center"},children:[n.jsx(D,{variant:"h6",component:"div",children:t.title}),t.isBlocked&&n.jsxs(Pe,{children:[n.jsx(me,{fontSize:"small"}),n.jsx(D,{variant:"caption",ml:.5,children:"Blocked"})]}),!t.isBlocked&&t.isCompleted&&n.jsx(Ee,{icon:n.jsx(ge,{}),label:"Completed",color:"success",size:"small",sx:{ml:1}})]}),action:n.jsxs(v,{sx:{display:"flex",alignItems:"center"},onClick:w,children:[n.jsx(fe,{onEdit:c,onDelete:E,onDuplicate:_,onToggleBlocked:$,isBlocked:t.isBlocked}),n.jsx(We,{expanded:l,onClick:j,"aria-expanded":l,"aria-label":"show more",children:n.jsx(O,{})})]})}),n.jsx(je,{}),n.jsxs(Ce,{children:[n.jsxs(v,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:1},children:[n.jsx(D,{variant:"subtitle1",fontWeight:"medium",children:"Checklist"}),n.jsxs(D,{variant:"body2",color:"text.secondary",children:[I," / ",t.checklist.length," completed"]})]}),n.jsx($e,{in:l,timeout:"auto",unmountOnExit:!0,children:n.jsx(v,{sx:{mt:2},children:t.checklist.map(r=>n.jsx(he,{item:r,onStatusChange:T},r.id))})})]})]})};He.__docgenInfo={description:"",methods:[],displayName:"TaskCard",props:{task:{required:!0,tsType:{name:"Task"},description:""},onChecklistItemStatusChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(taskId: string, itemId: string, status: string) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"},{type:{name:"string"},name:"itemId"},{type:{name:"string"},name:"status"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleBlocked:{required:!1,tsType:{name:"signature",type:"function",raw:"(blocked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"blocked"}],return:{name:"void"}}},description:""}}};export{He as T};
