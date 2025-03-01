import{C as c}from"./ChecklistGroup-c153d752.js";import{v as e}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./Add-0f0c8af2.js";import"./DefaultPropsProvider-320a04f5.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./Delete-f5faf074.js";import"./ChecklistItem-029cd1b5.js";import"./CheckCircle-07b0e376.js";import"./Box-1320c606.js";import"./useFormControl-104fac70.js";import"./Typography-ff3380f1.js";import"./Button-d1567d38.js";import"./Button-0c80fbf6.js";import"./Divider-1f441a49.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./IconButton-bd7d2e9a.js";import"./TextField-b21c7a2c.js";import"./Menu-664a8722.js";import"./List-984827ab.js";import"./resolveComponentProps-c005490e.js";import"./Paper-f1d4e8e3.js";import"./GlobalStyles-b437e017.js";const P={title:"Checklist/ChecklistGroup",component:c,tags:["autodocs"],parameters:{layout:"padded"}},p=[{id:e(),text:"Check item 1",status:"not_started"},{id:e(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:e(),text:"Final installation",status:"final_installation_done"},{id:e(),text:"LED installation",status:"blocked",statusText:"Blocked: Missing parts"}],o={args:{items:p,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)}}},s={args:{items:p,editable:!0,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)},onItemAdd:t=>{console.log(`New item added: ${t}`)},onItemRemove:t=>{console.log(`Item removed: ${t}`)}}};var n,r,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const j=["ReadOnly","Editable"];export{s as Editable,o as ReadOnly,j as __namedExportsOrder,P as default};
