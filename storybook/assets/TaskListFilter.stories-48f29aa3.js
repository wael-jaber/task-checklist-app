import{j as e}from"./jsx-runtime-6d9837fe.js";import{r as g}from"./index-93f6b7ae.js";import{j as q,g as D,s as N,_ as S,u as W,b as B,c as U,f as b,d as O,i as E}from"./DefaultPropsProvider-320a04f5.js";import{r as V}from"./createSvgIcon-df99a646.js";import{P as H}from"./Paper-f1d4e8e3.js";import{B as G}from"./Box-1320c606.js";import{T as J,F as K,I as Q,S as X}from"./TextField-b21c7a2c.js";import{u as Y,F as Z}from"./useFormControl-104fac70.js";import{T as ee}from"./Typography-ff3380f1.js";import{M as m}from"./MenuItem-83d7d03b.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./Menu-664a8722.js";import"./List-984827ab.js";import"./resolveComponentProps-c005490e.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./GlobalStyles-b437e017.js";import"./listItemTextClasses-9dd24f52.js";function te(t){return D("MuiInputAdornment",t)}const ae=q("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),_=ae;var k;const se=["children","className","component","disablePointerEvents","disableTypography","position","variant"],re=(t,a)=>{const{ownerState:s}=t;return[a.root,a[`position${b(s.position)}`],s.disablePointerEvents===!0&&a.disablePointerEvents,a[s.variant]]},ne=t=>{const{classes:a,disablePointerEvents:s,hiddenLabel:n,position:r,size:l,variant:u}=t,c={root:["root",s&&"disablePointerEvents",r&&`position${b(r)}`,u,n&&"hiddenLabel",l&&`size${b(l)}`]};return O(c,te,a)},oe=N("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:re})(({theme:t,ownerState:a})=>S({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},a.variant==="filled"&&{[`&.${_.positionStart}&:not(.${_.hiddenLabel})`]:{marginTop:16}},a.position==="start"&&{marginRight:8},a.position==="end"&&{marginLeft:8},a.disablePointerEvents===!0&&{pointerEvents:"none"})),le=g.forwardRef(function(a,s){const n=W({props:a,name:"MuiInputAdornment"}),{children:r,className:l,component:u="div",disablePointerEvents:c=!1,disableTypography:f=!1,position:p,variant:i}=n,o=B(n,se),d=Y()||{};let x=i;i&&d.variant,d&&!x&&(x=d.variant);const y=S({},n,{hiddenLabel:d.hiddenLabel,size:d.size,disablePointerEvents:c,position:p,variant:x}),w=ne(y);return e.jsx(Z.Provider,{value:null,children:e.jsx(oe,S({as:u,ownerState:y,className:U(w.root,l),ref:s},o,{children:typeof r=="string"&&!f?e.jsx(ee,{color:"text.secondary",children:r}):e.jsxs(g.Fragment,{children:[p==="start"?k||(k=e.jsx("span",{className:"notranslate",children:"​"})):null,r]})}))})}),I=le;var C={},ie=E;Object.defineProperty(C,"__esModule",{value:!0});var z=C.default=void 0,ue=ie(V()),ce=e;z=C.default=(0,ue.default)((0,ce.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var j={},de=E;Object.defineProperty(j,"__esModule",{value:!0});var R=j.default=void 0,pe=de(V()),me=e;R=j.default=(0,pe.default)((0,me.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList");const M=({onSearchChange:t,onStatusChange:a,searchValue:s="",statusValue:n="all"})=>{const[r,l]=g.useState(s),[u,c]=g.useState(n),f=i=>{const o=i.target.value;l(o),t(o)},p=i=>{const o=i.target.value;c(o),a(o)};return e.jsx(H,{elevation:0,sx:{p:2,mb:3,borderRadius:2,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:e.jsxs(G,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:2},children:[e.jsx(J,{fullWidth:!0,placeholder:"Search tasks...",variant:"outlined",size:"small",value:r,onChange:f,InputProps:{startAdornment:e.jsx(I,{position:"start",children:e.jsx(z,{color:"action"})})}}),e.jsxs(K,{variant:"outlined",size:"small",sx:{minWidth:{xs:"100%",sm:200}},children:[e.jsx(Q,{id:"task-status-filter-label",htmlFor:"task-status-filter",children:"Status"}),e.jsxs(X,{labelId:"task-status-filter-label",id:"task-status-filter",value:u,onChange:p,label:"Status",startAdornment:e.jsx(I,{position:"start",children:e.jsx(R,{color:"action"})}),children:[e.jsx(m,{value:"all",children:"All Tasks"}),e.jsx(m,{value:"active",children:"Active"}),e.jsx(m,{value:"completed",children:"Completed"}),e.jsx(m,{value:"blocked",children:"Blocked"})]})]})]})})};M.__docgenInfo={description:"",methods:[],displayName:"TaskListFilter",props:{onSearchChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchText: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchText"}],return:{name:"void"}}},description:""},onStatusChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(status: TaskFilterStatus) => void",signature:{arguments:[{type:{name:"union",raw:"'all' | 'active' | 'completed' | 'blocked'",elements:[{name:"literal",value:"'all'"},{name:"literal",value:"'active'"},{name:"literal",value:"'completed'"},{name:"literal",value:"'blocked'"}]},name:"status"}],return:{name:"void"}}},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},statusValue:{required:!1,tsType:{name:"union",raw:"'all' | 'active' | 'completed' | 'blocked'",elements:[{name:"literal",value:"'all'"},{name:"literal",value:"'active'"},{name:"literal",value:"'completed'"},{name:"literal",value:"'blocked'"}]},description:"",defaultValue:{value:"'all'",computed:!1}}}};const Ee={title:"Tasks/TaskListFilter",tags:["autodocs"],component:M},h={args:{onSearchChange:t=>{console.log(`Search text: ${t}`)},onStatusChange:t=>{console.log(`Status filter: ${t}`)}}},v={args:{searchValue:"light",statusValue:"blocked",onSearchChange:t=>{console.log(`Search text: ${t}`)},onStatusChange:t=>{console.log(`Status filter: ${t}`)}}};var P,T,$;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    onSearchChange: text => {
      console.log(\`Search text: \${text}\`);
    },
    onStatusChange: status => {
      console.log(\`Status filter: \${status}\`);
    }
  }
}`,...($=(T=h.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,F,L;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    searchValue: 'light',
    statusValue: 'blocked',
    onSearchChange: text => {
      console.log(\`Search text: \${text}\`);
    },
    onStatusChange: status => {
      console.log(\`Status filter: \${status}\`);
    }
  }
}`,...(L=(F=v.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const Ve=["Default","WithPresetValues"];export{h as Default,v as WithPresetValues,Ve as __namedExportsOrder,Ee as default};
