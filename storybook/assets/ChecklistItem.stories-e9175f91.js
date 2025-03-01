import{C}from"./ChecklistItem-82138f56.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./CheckCircle-31f857df.js";import"./IconButton-5241931a.js";import"./Menu-2edf3461.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./Box-eaeca253.js";import"./index-e5d314f4.js";import"./Paper-ca91e69e.js";import"./Typography-7ec13922.js";import"./TextField-acc8520a.js";import"./GlobalStyles-86810e6f.js";import"./Button-960882eb.js";import"./MenuItem-431051d4.js";import"./listItemTextClasses-b71efde8.js";import"./ListItemIcon-64c3e971.js";const H={title:"Checklist/ChecklistItem",component:C,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{item:{id:"1",text:"Check item 1",status:"not_started"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},n={args:{item:{id:"2",text:"Electrical connection, general, 3-pin",status:"in_progress",statusText:"Installation in progress"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},o={args:{item:{id:"3",text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},a={args:{item:{id:"4",text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}};var r,i,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    item: {
      id: '1',
      text: 'Check item 1',
      status: 'not_started'
    },
    onStatusChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    }
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    item: {
      id: '2',
      text: 'Electrical connection, general, 3-pin',
      status: 'in_progress',
      statusText: 'Installation in progress'
    },
    onStatusChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    item: {
      id: '3',
      text: 'Electrical connection, general, 3-pin. Electrical',
      status: 'blocked',
      statusText: 'Blocked: Part installation done'
    },
    onStatusChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    }
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,$;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    item: {
      id: '4',
      text: 'Electrical connection, general, 3-pin',
      status: 'done',
      statusText: 'Done: Part installation done'
    },
    onStatusChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    }
  }
}`,...($=(x=a.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const J=["NotStarted","InProgress","Blocked","Done"];export{o as Blocked,a as Done,n as InProgress,s as NotStarted,J as __namedExportsOrder,H as default};
