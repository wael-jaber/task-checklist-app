import{j as t}from"./jsx-runtime-6d9837fe.js";import{d as f}from"./Add-0f0c8af2.js";import{B as x}from"./Box-1320c606.js";import{T as y}from"./Typography-ff3380f1.js";import{B as A}from"./Button-0c80fbf6.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-320a04f5.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";const k=({title:g,onAddTask:o,addButtonLabel:T="Add Task"})=>t.jsxs(x,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:4,flexDirection:{xs:"column",sm:"row"},gap:{xs:2,sm:0}},children:[t.jsx(y,{variant:"h4",component:"h1",children:g}),o&&t.jsx(A,{variant:"contained",color:"primary",startIcon:t.jsx(f,{}),onClick:o,children:T})]});k.__docgenInfo={description:"",methods:[],displayName:"TaskListHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},onAddTask:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},addButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Add Task'",computed:!1}}}};const q={title:"Tasks/TaskListHeader",tags:["autodocs"],component:k},e={args:{title:"My Tasks",onAddTask:()=>{console.log("Add task button clicked")}}},s={args:{title:"Project Tasks",addButtonLabel:"Create New Task",onAddTask:()=>{console.log("Add task button clicked")}}},a={args:{title:"Completed Tasks"}};var r,n,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'My Tasks',
    onAddTask: () => {
      console.log('Add task button clicked');
    }
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Project Tasks',
    addButtonLabel: 'Create New Task',
    onAddTask: () => {
      console.log('Add task button clicked');
    }
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Completed Tasks'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Default","WithCustomButtonLabel","WithoutAddButton"];export{e as Default,s as WithCustomButtonLabel,a as WithoutAddButton,D as __namedExportsOrder,q as default};
