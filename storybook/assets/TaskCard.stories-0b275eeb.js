import{T as k}from"./TaskCard-1ac71c66.js";import{v as t}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./ChecklistItem-1fe7831b.js";import"./CheckCircle-f4fa5de3.js";import"./IconButton-dd2d5a4e.js";import"./Menu-52018f57.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./Box-5929dc9d.js";import"./index-e5d314f4.js";import"./Paper-251b2ec4.js";import"./Typography-e5f4b08d.js";import"./TextField-8e9231a7.js";import"./GlobalStyles-cf00909d.js";import"./Button-93e65238.js";import"./MenuItem-6d822d7a.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemIcon-dfbc7e8c.js";import"./TaskActionMenu-01cb8968.js";import"./Edit-10cbb104.js";import"./Delete-bf956c96.js";import"./ListItemText-28470848.js";import"./Divider-01e4102b.js";import"./CardHeader-540a6e4b.js";import"./Chip-24959d50.js";const Q={title:"Tasks/TaskCard",component:k,tags:["autodocs"],parameters:{layout:"padded"}},i={id:t(),userId:"user123",title:"Light Bulb 150S",isBlocked:!1,checklist:[{id:t(),text:"Check item 1",status:"not_started"},{id:t(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:t(),text:"Check item 3",status:"final_installation_done"}],createdAt:Date.now(),updatedAt:Date.now()},u={...i,id:t(),title:"Blocked Task Example",isBlocked:!0,checklist:[...i.checklist,{id:t(),text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"}]},e={args:{task:i,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}},s={args:{task:u,onChecklistItemStatusChange:(a,o,r)=>{console.log(`Task ${a}, Item ${o} status changed to ${r}`)}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
