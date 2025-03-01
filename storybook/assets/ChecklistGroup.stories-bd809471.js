import{C as c}from"./ChecklistGroup-8549dc61.js";import{v as e}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./Add-cc8cb6c7.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./Delete-9dcaa643.js";import"./ChecklistItem-82138f56.js";import"./CheckCircle-31f857df.js";import"./IconButton-5241931a.js";import"./Menu-2edf3461.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./Box-eaeca253.js";import"./index-e5d314f4.js";import"./Paper-ca91e69e.js";import"./Typography-7ec13922.js";import"./TextField-acc8520a.js";import"./GlobalStyles-86810e6f.js";import"./Button-960882eb.js";import"./MenuItem-431051d4.js";import"./listItemTextClasses-b71efde8.js";import"./ListItemIcon-64c3e971.js";import"./Button-e2ddc82b.js";import"./Divider-7e260bb1.js";const j={title:"Checklist/ChecklistGroup",component:c,tags:["autodocs"],parameters:{layout:"padded"}},p=[{id:e(),text:"Check item 1",status:"not_started"},{id:e(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:e(),text:"Final installation",status:"final_installation_done"},{id:e(),text:"LED installation",status:"blocked",statusText:"Blocked: Missing parts"}],o={args:{items:p,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)}}},s={args:{items:p,editable:!0,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)},onItemAdd:t=>{console.log(`New item added: ${t}`)},onItemRemove:t=>{console.log(`Item removed: ${t}`)}}};var n,r,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const q=["ReadOnly","Editable"];export{s as Editable,o as ReadOnly,q as __namedExportsOrder,j as default};
