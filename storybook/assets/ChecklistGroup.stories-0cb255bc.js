import{C as p}from"./ChecklistGroup-6309ac1c.js";import{v as e}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./Button-706965c1.js";import"./DefaultPropsProvider-9b95c2c6.js";import"./createSvgIcon-20e0ddca.js";import"./ChecklistItem-da3c7fa9.js";import"./Box-ea9ec25c.js";import"./Divider-ccb91951.js";import"./index-e5d314f4.js";import"./Paper-463eca62.js";const f={title:"Checklist/ChecklistGroup",component:p,parameters:{layout:"padded"}},c=[{id:e(),text:"Check item 1",status:"not_started"},{id:e(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:e(),text:"Final installation",status:"final_installation_done"},{id:e(),text:"LED installation",status:"blocked",statusText:"Blocked: Missing parts"}],o={args:{items:c,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)}}},s={args:{items:c,editable:!0,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)},onItemAdd:t=>{console.log(`New item added: ${t}`)},onItemRemove:t=>{console.log(`Item removed: ${t}`)}}};var n,r,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    onItemChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    }
  }
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    editable: true,
    onItemChange: (id, status) => {
      console.log(\`Item \${id} status changed to \${status}\`);
    },
    onItemAdd: text => {
      console.log(\`New item added: \${text}\`);
    },
    onItemRemove: id => {
      console.log(\`Item removed: \${id}\`);
    }
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const R=["ReadOnly","Editable"];export{s as Editable,o as ReadOnly,R as __namedExportsOrder,f as default};
