import{C as c}from"./ChecklistGroup-e2796f9c.js";import{v as e}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./Add-c12fc01a.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./Delete-bf956c96.js";import"./ChecklistItem-1fe7831b.js";import"./CheckCircle-f4fa5de3.js";import"./IconButton-dd2d5a4e.js";import"./Menu-52018f57.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./Box-5929dc9d.js";import"./index-e5d314f4.js";import"./Paper-251b2ec4.js";import"./Typography-e5f4b08d.js";import"./TextField-8e9231a7.js";import"./GlobalStyles-cf00909d.js";import"./Button-93e65238.js";import"./MenuItem-6d822d7a.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemIcon-dfbc7e8c.js";import"./Button-eca76548.js";import"./Divider-01e4102b.js";const j={title:"Checklist/ChecklistGroup",component:c,tags:["autodocs"],parameters:{layout:"padded"}},p=[{id:e(),text:"Check item 1",status:"not_started"},{id:e(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:e(),text:"Final installation",status:"final_installation_done"},{id:e(),text:"LED installation",status:"blocked",statusText:"Blocked: Missing parts"}],o={args:{items:p,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)}}},s={args:{items:p,editable:!0,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)},onItemAdd:t=>{console.log(`New item added: ${t}`)},onItemRemove:t=>{console.log(`Item removed: ${t}`)}}};var n,r,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
