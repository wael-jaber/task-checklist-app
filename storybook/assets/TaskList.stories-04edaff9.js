import{j as e}from"./jsx-runtime-6d9837fe.js";import{T as S}from"./TaskCard-88b9c3a9.js";import{B as d}from"./Box-eaeca253.js";import{T as u}from"./Typography-7ec13922.js";import{D as _}from"./Divider-7e260bb1.js";import{A as $}from"./Alert-c86ecba4.js";import{v as a}from"./v4-4a60fe23.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./ChecklistItem-82138f56.js";import"./CheckCircle-31f857df.js";import"./IconButton-5241931a.js";import"./Menu-2edf3461.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./index-e5d314f4.js";import"./Paper-ca91e69e.js";import"./TextField-acc8520a.js";import"./GlobalStyles-86810e6f.js";import"./Button-960882eb.js";import"./MenuItem-431051d4.js";import"./listItemTextClasses-b71efde8.js";import"./ListItemIcon-64c3e971.js";import"./Block-926010f8.js";import"./Edit-5e653335.js";import"./Delete-9dcaa643.js";import"./ListItemText-fdeedf6d.js";import"./CardHeader-f4eecaf3.js";import"./Chip-a53555c6.js";import"./useSlot-625e2a1e.js";const v=({tasks:t,title:o="Tasks",emptyMessage:m="No tasks found",onTaskClick:c,onChecklistItemStatusChange:l,renderTask:p})=>{const j=(s,D,E)=>{l&&l(s,D,E)};return e.jsxs(d,{children:[e.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[e.jsx(u,{variant:"h5",component:"h2",children:o}),t.length>0&&e.jsxs(u,{variant:"body2",color:"text.secondary",children:[t.length," ",t.length===1?"task":"tasks"]})]}),e.jsx(_,{sx:{mb:3}}),t.length===0?e.jsx($,{severity:"info",children:m}):e.jsx(d,{children:p?t.map(s=>p(s)):t.map(s=>e.jsx(S,{task:s,onChecklistItemStatusChange:j,onClick:c?()=>c(s.id):void 0},s.id))})]})};v.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{tasks:{required:!0,tsType:{name:"Array",elements:[{name:"Task"}],raw:"Task[]"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tasks'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No tasks found'",computed:!1}},onTaskClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(taskId: string) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"}],return:{name:"void"}}},description:""},onChecklistItemStatusChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(taskId: string, itemId: string, status: string) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"},{type:{name:"string"},name:"itemId"},{type:{name:"string"},name:"status"}],return:{name:"void"}}},description:""},renderTask:{required:!1,tsType:{name:"signature",type:"function",raw:"(task: Task) => React.ReactNode",signature:{arguments:[{type:{name:"Task"},name:"task"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const ct={title:"Tasks/TaskList",component:v,tags:["autodocs"],parameters:{layout:"padded"}},w=[{id:a(),userId:"user123",title:"Light Bulb 150S",isBlocked:!1,checklist:[{id:a(),text:"Check item 1",status:"not_started"},{id:a(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:a(),text:"Check item 3",status:"final_installation_done"}],createdAt:Date.now(),updatedAt:Date.now()},{id:a(),userId:"user123",title:"Electrical connection, general, 3-pin",isBlocked:!0,checklist:[{id:a(),text:"L3.1 LED surface-mounted wall light",status:"not_started"},{id:a(),text:"Electrical connection, general, 3-pin",status:"blocked",statusText:"Blocked: Part installation done"}],createdAt:Date.now(),updatedAt:Date.now()}],r={args:{tasks:w,title:"My Tasks",onTaskClick:t=>{console.log(`Task clicked: ${t}`)},onChecklistItemStatusChange:(t,o,m)=>{console.log(`Task ${t}, Item ${o} status changed to ${m}`)}}},n={args:{tasks:[],title:"My Tasks",emptyMessage:"You have no tasks. Create a new task to get started!"}},i={args:{tasks:w,title:"Critical Tasks"}};var k,g,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tasks: sampleTasks,
    title: 'My Tasks',
    onTaskClick: taskId => {
      console.log(\`Task clicked: \${taskId}\`);
    },
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(\`Task \${taskId}, Item \${itemId} status changed to \${status}\`);
    }
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tasks: [],
    title: 'My Tasks',
    emptyMessage: 'You have no tasks. Create a new task to get started!'
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,I,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tasks: sampleTasks,
    title: 'Critical Tasks'
  }
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const lt=["WithTasks","Empty","CustomTitle"];export{i as CustomTitle,n as Empty,r as WithTasks,lt as __namedExportsOrder,ct as default};
