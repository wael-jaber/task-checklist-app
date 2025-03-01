import{C}from"./ChecklistItem-d49b720a.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./createSvgIcon-0629cebc.js";const P={title:"Checklist/ChecklistItem",component:C,parameters:{layout:"centered"}},n={args:{item:{id:"1",text:"Check item 1",status:"not_started"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},s={args:{item:{id:"2",text:"Electrical connection, general, 3-pin",status:"in_progress",statusText:"Installation in progress"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},a={args:{item:{id:"3",text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},o={args:{item:{id:"4",text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}};var r,c,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,x,$;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...($=(x=o.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const T=["NotStarted","InProgress","Blocked","Done"];export{a as Blocked,o as Done,s as InProgress,n as NotStarted,T as __namedExportsOrder,P as default};
