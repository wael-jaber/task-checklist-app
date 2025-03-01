import{j as l}from"./jsx-runtime-6d9837fe.js";import{T as b}from"./TaskActionMenu-01cb8968.js";import{B}from"./Box-5929dc9d.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./Edit-10cbb104.js";import"./Delete-bf956c96.js";import"./CheckCircle-f4fa5de3.js";import"./IconButton-dd2d5a4e.js";import"./Menu-52018f57.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./index-e5d314f4.js";import"./Paper-251b2ec4.js";import"./MenuItem-6d822d7a.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemIcon-dfbc7e8c.js";import"./ListItemText-28470848.js";import"./Typography-e5f4b08d.js";import"./Divider-01e4102b.js";const J={title:"Tasks/TaskActionMenu",component:b,tags:["autodocs"],parameters:{layout:"centered"},decorators:[o=>l.jsx(B,{sx:{p:2,width:"100%",display:"flex",justifyContent:"flex-end"},children:l.jsx(o,{})})]},e={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onDuplicate:()=>{console.log("Duplicate task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!1}},t={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},onToggleBlocked:o=>{console.log(`Set blocked: ${o}`)},isBlocked:!0}},s={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")}}},n={args:{onEdit:()=>{console.log("Edit task")},onDelete:()=>{console.log("Delete task")},disabled:!0}};var r,a,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    }
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var u,D,E;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onEdit: () => {
      console.log('Edit task');
    },
    onDelete: () => {
      console.log('Delete task');
    },
    disabled: true
  }
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const K=["AllActions","BlockedTask","LimitedActions","Disabled"];export{e as AllActions,t as BlockedTask,n as Disabled,s as LimitedActions,K as __namedExportsOrder,J as default};
