import{T as k}from"./TaskCard-88b9c3a9.js";import{v as t}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./ChecklistItem-82138f56.js";import"./CheckCircle-31f857df.js";import"./IconButton-5241931a.js";import"./Menu-2edf3461.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./Box-eaeca253.js";import"./index-e5d314f4.js";import"./Paper-ca91e69e.js";import"./Typography-7ec13922.js";import"./TextField-acc8520a.js";import"./GlobalStyles-86810e6f.js";import"./Button-960882eb.js";import"./MenuItem-431051d4.js";import"./listItemTextClasses-b71efde8.js";import"./ListItemIcon-64c3e971.js";import"./Block-926010f8.js";import"./Edit-5e653335.js";import"./Delete-9dcaa643.js";import"./ListItemText-fdeedf6d.js";import"./Divider-7e260bb1.js";import"./CardHeader-f4eecaf3.js";import"./Chip-a53555c6.js";const Q={title:"Tasks/TaskCard",component:k,tags:["autodocs"],parameters:{layout:"padded"}},i={id:t(),userId:"user123",title:"Light Bulb 150S",isBlocked:!1,checklist:[{id:t(),text:"Check item 1",status:"not_started"},{id:t(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:t(),text:"Check item 3",status:"final_installation_done"}],createdAt:Date.now(),updatedAt:Date.now()},u={...i,id:t(),title:"Blocked Task Example",isBlocked:!0,checklist:[...i.checklist,{id:t(),text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"}]},e={args:{task:i,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}},s={args:{task:u,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    task: sampleTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(\`Task \${taskId}, Item \${itemId} status changed to \${status}\`);
    }
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: blockedTask,
    onChecklistItemStatusChange: (taskId, itemId, status) => {
      console.log(\`Task \${taskId}, Item \${itemId} status changed to \${status}\`);
    }
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const R=["Default","Blocked"];export{s as Blocked,e as Default,R as __namedExportsOrder,Q as default};
