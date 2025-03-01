import{T as p}from"./TaskCard-92c698d1.js";import{v as t}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-320a04f5.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./ChecklistItem-029cd1b5.js";import"./CheckCircle-07b0e376.js";import"./Box-1320c606.js";import"./useFormControl-104fac70.js";import"./Typography-ff3380f1.js";import"./IconButton-bd7d2e9a.js";import"./CardHeader-e4a5b74a.js";import"./Paper-f1d4e8e3.js";import"./Divider-1f441a49.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";const L={title:"Tasks/TaskCard",component:p,tags:["autodocs"],parameters:{layout:"padded"}},n={id:t(),userId:"user123",title:"Light Bulb 150S",isBlocked:!1,checklist:[{id:t(),text:"Check item 1",status:"not_started"},{id:t(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:t(),text:"Check item 3",status:"final_installation_done"}],createdAt:Date.now(),updatedAt:Date.now()},u={...n,id:t(),title:"Blocked Task Example",isBlocked:!0,checklist:[...n.checklist,{id:t(),text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"}]},e={args:{task:n,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}},s={args:{task:u,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    task: sampleTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(\`Task \${taskId}, Item \${itemId} status changed to \${status}\`);
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: blockedTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(\`Task \${taskId}, Item \${itemId} status changed to \${status}\`);
    }
  }
}`,...(k=(m=s.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const O=["Default","Blocked"];export{s as Blocked,e as Default,O as __namedExportsOrder,L as default};
