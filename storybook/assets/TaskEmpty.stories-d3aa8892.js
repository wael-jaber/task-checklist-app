import{j as e}from"./jsx-runtime-6d9837fe.js";import{d as B}from"./Add-cc8cb6c7.js";import{d as C}from"./Assignment-12195fb3.js";import{P as v}from"./Paper-ca91e69e.js";import{T as d}from"./Typography-7ec13922.js";import{B as j}from"./Button-960882eb.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";const h=({message:T="No task selected",showAddButton:b=!1,onAddTask:r,addButtonLabel:A="Create New Task"})=>e.jsxs(v,{elevation:0,sx:{p:4,borderRadius:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:300,bgcolor:"background.default",border:"1px dashed",borderColor:"divider"},children:[e.jsx(C,{sx:{fontSize:64,color:"text.disabled",mb:2}}),e.jsx(d,{variant:"h6",color:"text.secondary",align:"center",gutterBottom:!0,children:T}),e.jsx(d,{variant:"body2",color:"text.secondary",align:"center",sx:{mb:3,maxWidth:400},children:"Select a task from the list or create a new task to get started."}),b&&r&&e.jsx(j,{variant:"contained",color:"primary",startIcon:e.jsx(B,{}),onClick:r,children:A})]});h.__docgenInfo={description:"",methods:[],displayName:"TaskEmpty",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No task selected'",computed:!1}},showAddButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAddTask:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},addButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create New Task'",computed:!1}}}};const W={title:"Tasks/TaskEmpty",component:h,tags:["autodocs"],parameters:{layout:"padded"}},t={},s={args:{message:"No tasks found"}},a={args:{message:"No tasks found",showAddButton:!0,onAddTask:()=>{console.log("Add task clicked")}}},o={args:{message:"Your task list is empty",showAddButton:!0,addButtonLabel:"Create Your First Task",onAddTask:()=>{console.log("Add task clicked")}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: 'No tasks found'
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'No tasks found',
    showAddButton: true,
    onAddTask: () => {
      console.log('Add task clicked');
    }
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,x,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: 'Your task list is empty',
    showAddButton: true,
    addButtonLabel: 'Create Your First Task',
    onAddTask: () => {
      console.log('Add task clicked');
    }
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const F=["Default","CustomMessage","WithAddButton","CustomButtonLabel"];export{o as CustomButtonLabel,s as CustomMessage,t as Default,a as WithAddButton,F as __namedExportsOrder,W as default};
