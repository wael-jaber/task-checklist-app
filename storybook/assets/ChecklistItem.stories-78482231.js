import{C}from"./ChecklistItem-029cd1b5.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./CheckCircle-07b0e376.js";import"./DefaultPropsProvider-320a04f5.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./Box-1320c606.js";import"./useFormControl-104fac70.js";import"./Typography-ff3380f1.js";const N={title:"Checklist/ChecklistItem",component:C,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{item:{id:"1",text:"Check item 1",status:"not_started"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},n={args:{item:{id:"2",text:"Electrical connection, general, 3-pin",status:"in_progress",statusText:"Installation in progress"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},a={args:{item:{id:"3",text:"Electrical connection, general, 3-pin. Electrical",status:"blocked",statusText:"Blocked: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}},o={args:{item:{id:"4",text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},onStatusChange:(t,e)=>{console.log(`Item ${t} status changed to ${e}`)}}};var r,c,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,x,$;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...($=(x=o.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const y=["NotStarted","InProgress","Blocked","Done"];export{a as Blocked,o as Done,n as InProgress,s as NotStarted,y as __namedExportsOrder,N as default};
