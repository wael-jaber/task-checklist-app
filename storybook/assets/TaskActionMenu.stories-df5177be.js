import{j as e}from"./jsx-runtime-6d9837fe.js";import{r as I}from"./index-93f6b7ae.js";import{d as q,a as L,b as w}from"./Block-926010f8.js";import{d as O}from"./Edit-5e653335.js";import{d as F}from"./Delete-9dcaa643.js";import{d as V}from"./CheckCircle-31f857df.js";import{I as N}from"./IconButton-5241931a.js";import{M as R}from"./Menu-2edf3461.js";import{M as t}from"./MenuItem-431051d4.js";import{L as r}from"./ListItemIcon-64c3e971.js";import{L as a}from"./ListItemText-fdeedf6d.js";import{D as U}from"./Divider-7e260bb1.js";import{B as G}from"./Box-eaeca253.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./index-e5d314f4.js";import"./Paper-ca91e69e.js";import"./listItemTextClasses-b71efde8.js";import"./Typography-7ec13922.js";const M=({onEdit:o,onDelete:u,onDuplicate:p,onToggleBlocked:g,isBlocked:m=!1,disabled:$=!1})=>{const[k,f]=I.useState(null),z=!!k,C=n=>{f(n.currentTarget)},x=()=>{f(null)},s=n=>{n&&n(),x()};return e.jsxs(e.Fragment,{children:[e.jsx(N,{"aria-label":"task actions","aria-controls":"task-action-menu","aria-haspopup":"true",onClick:C,disabled:$,size:"small",children:e.jsx(q,{})}),e.jsxs(R,{id:"task-action-menu",anchorEl:k,open:z,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[o&&e.jsxs(t,{onClick:()=>s(o),children:[e.jsx(r,{children:e.jsx(O,{fontSize:"small"})}),e.jsx(a,{children:"Edit Task"})]}),p&&e.jsxs(t,{onClick:()=>s(p),children:[e.jsx(r,{children:e.jsx(L,{fontSize:"small"})}),e.jsx(a,{children:"Duplicate Task"})]}),g&&e.jsxs(t,{onClick:()=>s(()=>g(!m)),children:[e.jsx(r,{children:m?e.jsx(V,{fontSize:"small",color:"success"}):e.jsx(w,{fontSize:"small",color:"error"})}),e.jsx(a,{children:m?"Mark as Unblocked":"Mark as Blocked"})]}),u&&e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsxs(t,{onClick:()=>s(u),children:[e.jsx(r,{children:e.jsx(F,{fontSize:"small",color:"error"})}),e.jsx(a,{children:"Delete Task"})]})]})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"TaskActionMenu",props:{onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleBlocked:{required:!1,tsType:{name:"signature",type:"function",raw:"(blocked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"blocked"}],return:{name:"void"}}},description:""},isBlocked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ge={title:"Tasks/TaskActionMenu",component:M,tags:["autodocs"],parameters:{layout:"centered"},decorators:[o=>e.jsx(G,{sx:{p:2,width:"100%",display:"flex",justifyContent:"flex-end"},children:e.jsx(o,{})})]},l={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onDuplicate:()=>{console.log("Duplicate task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!1}},i={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!0}},c={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")}}},d={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},disabled:!0}};var h,j,D;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    onDuplicate: () => {
      console.log('Duplicate task');
    },
    onToggleBlocked: blocked => {
      console.log(\`Set blocked: \${blocked}\`);
    },
    isBlocked: false
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var b,E,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    onToggleBlocked: blocked => {
      console.log(\`Set blocked: \${blocked}\`);
    },
    isBlocked: true
  }
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,B,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    }
  }
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,A,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    disabled: true
  }
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const ke=["AllActions","BlockedTask","LimitedActions","Disabled"];export{l as AllActions,i as BlockedTask,d as Disabled,c as LimitedActions,ke as __namedExportsOrder,ge as default};
