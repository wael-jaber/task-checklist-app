import{C as p}from"./ChecklistGroup-db8d5a6d.js";import{v as e}from"./v4-4a60fe23.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./Add-b8add3ec.js";import"./DefaultPropsProvider-6d541532.js";import"./createSvgIcon-c92fb94b.js";import"./ButtonBase-64324024.js";import"./ownerWindow-598c61de.js";import"./ChecklistItem-048a1ec7.js";import"./Box-25983615.js";import"./useFormControl-104fac70.js";import"./Button-1b73cd2a.js";import"./Divider-347a66af.js";import"./dividerClasses-232aba77.js";import"./index-e5d314f4.js";import"./IconButton-5a2125ae.js";import"./TextField-cdcc9957.js";import"./Menu-04459ced.js";import"./resolveComponentProps-e8e0e122.js";import"./Paper-eebdd5ee.js";const S={title:"Checklist/ChecklistGroup",component:p,tags:["autodocs"],parameters:{layout:"padded"}},c=[{id:e(),text:"Check item 1",status:"not_started"},{id:e(),text:"Electrical connection, general, 3-pin",status:"done",statusText:"Done: Part installation done"},{id:e(),text:"Final installation",status:"final_installation_done"},{id:e(),text:"LED installation",status:"blocked",statusText:"Blocked: Missing parts"}],o={args:{items:c,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)}}},s={args:{items:c,editable:!0,onItemChange:(t,a)=>{console.log(`Item ${t} status changed to ${a}`)},onItemAdd:t=>{console.log(`New item added: ${t}`)},onItemRemove:t=>{console.log(`Item removed: ${t}`)}}};var n,r,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["ReadOnly","Editable"];export{s as Editable,o as ReadOnly,T as __namedExportsOrder,S as default};
