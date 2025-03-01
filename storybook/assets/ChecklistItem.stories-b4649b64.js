import{C}from"./ChecklistItem-1fe7831b.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./CheckCircle-f4fa5de3.js";import"./IconButton-dd2d5a4e.js";import"./Menu-52018f57.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./Box-5929dc9d.js";import"./index-e5d314f4.js";import"./Paper-251b2ec4.js";import"./Typography-e5f4b08d.js";import"./TextField-8e9231a7.js";import"./GlobalStyles-cf00909d.js";import"./Button-93e65238.js";import"./MenuItem-6d822d7a.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemIcon-dfbc7e8c.js";const H={title:"Checklist/ChecklistItem",component:C,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{item:{id:"1",text:"Check item 1",status:"not_started"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},n={args:{item:{id:"2",text:"Electrical connection, general, 3-pin",status:"in_progress",statusText:"Installation in progress"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},o={args:{item:{id:"3",text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},a={args:{item:{id:"4",text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}};var r,i,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
