import{j as e}from"./jsx-runtime-6d9837fe.js";import{r as P}from"./index-93f6b7ae.js";import{i as m}from"./DefaultPropsProvider-320a04f5.js";import{r as p}from"./createSvgIcon-df99a646.js";import{d as F}from"./Edit-c8aac845.js";import{d as N}from"./Delete-f5faf074.js";import{d as U}from"./CheckCircle-07b0e376.js";import{I as G}from"./IconButton-bd7d2e9a.js";import{M as J}from"./Menu-664a8722.js";import{M as n}from"./MenuItem-83d7d03b.js";import{L as r,a}from"./ListItemText-35d148df.js";import{D as K}from"./Divider-1f441a49.js";import{B as Q}from"./Box-1320c606.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./List-984827ab.js";import"./resolveComponentProps-c005490e.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./Paper-f1d4e8e3.js";import"./listItemTextClasses-9dd24f52.js";import"./Typography-ff3380f1.js";var f={},W=m;Object.defineProperty(f,"__esModule",{value:!0});var z=f.default=void 0,X=W(p()),Y=e;z=f.default=(0,X.default)((0,Y.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert");var g={},Z=m;Object.defineProperty(g,"__esModule",{value:!0});var R=g.default=void 0,ee=Z(p()),oe=e;R=g.default=(0,ee.default)((0,oe.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var k={},te=m;Object.defineProperty(k,"__esModule",{value:!0});var L=k.default=void 0,se=te(p()),ne=e;L=k.default=(0,se.default)((0,ne.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8"}),"Block");const O=({onEdit:o,onDelete:x,onDuplicate:v,onToggleBlocked:h,isBlocked:u=!1,disabled:V=!1})=>{const[j,D]=P.useState(null),w=!!j,H=s=>{D(s.currentTarget)},_=()=>{D(null)},t=s=>{s&&s(),_()};return e.jsxs(e.Fragment,{children:[e.jsx(G,{"aria-label":"task actions","aria-controls":"task-action-menu","aria-haspopup":"true",onClick:H,disabled:V,size:"small",children:e.jsx(z,{})}),e.jsxs(J,{id:"task-action-menu",anchorEl:j,open:w,onClose:_,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[o&&e.jsxs(n,{onClick:()=>t(o),children:[e.jsx(r,{children:e.jsx(F,{fontSize:"small"})}),e.jsx(a,{children:"Edit Task"})]}),v&&e.jsxs(n,{onClick:()=>t(v),children:[e.jsx(r,{children:e.jsx(R,{fontSize:"small"})}),e.jsx(a,{children:"Duplicate Task"})]}),h&&e.jsxs(n,{onClick:()=>t(()=>h(!u)),children:[e.jsx(r,{children:u?e.jsx(U,{fontSize:"small",color:"success"}):e.jsx(L,{fontSize:"small",color:"error"})}),e.jsx(a,{children:u?"Mark as Unblocked":"Mark as Blocked"})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsxs(n,{onClick:()=>t(x),children:[e.jsx(r,{children:e.jsx(N,{fontSize:"small",color:"error"})}),e.jsx(a,{children:"Delete Task"})]})]})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"TaskActionMenu",props:{onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDuplicate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleBlocked:{required:!1,tsType:{name:"signature",type:"function",raw:"(blocked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"blocked"}],return:{name:"void"}}},description:""},isBlocked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Se={title:"Tasks/TaskActionMenu",component:O,tags:["autodocs"],parameters:{layout:"centered"},decorators:[o=>e.jsx(Q,{sx:{p:2,width:"100%",display:"flex",justifyContent:"flex-end"},children:e.jsx(o,{})})]},l={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onDuplicate:()=>{console.log("Duplicate task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!1}},i={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!0}},c={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")}}},d={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},disabled:!0}};var b,E,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,S,M;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(S=i.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var B,C,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    }
  }
}`,...($=(C=c.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var q,A,I;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    disabled: true
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Me=["AllActions","BlockedTask","LimitedActions","Disabled"];export{l as AllActions,i as BlockedTask,d as Disabled,c as LimitedActions,Me as __namedExportsOrder,Se as default};
