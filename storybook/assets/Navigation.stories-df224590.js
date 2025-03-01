import{j as e}from"./jsx-runtime-6d9837fe.js";import{N as i,d as r,a as x}from"./Navigation-0a100c09.js";import{B as s}from"./Box-1320c606.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-320a04f5.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./Assignment-c767f471.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./getThemeProps-d35f8808.js";import"./IconButton-bd7d2e9a.js";import"./Divider-1f441a49.js";import"./List-984827ab.js";import"./resolveComponentProps-c005490e.js";import"./ListItemText-35d148df.js";import"./listItemTextClasses-9dd24f52.js";import"./Typography-ff3380f1.js";import"./Paper-f1d4e8e3.js";const E={title:"Layout/Navigation",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{selectedItemId:"home",onItemClick:o=>{console.log(`Clicked on item: ${o}`)}},render:o=>e.jsxs(s,{sx:{height:"100vh",display:"flex"},children:[e.jsx(i,{...o}),e.jsxs(s,{sx:{flexGrow:1,p:3},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Navigation is on the left"})]})]})},t={args:{selectedItemId:"projects",items:[{id:"home",label:"Dashboard",icon:e.jsx(r,{})},{id:"projects",label:"Projects",icon:e.jsx(r,{})},{id:"settings",label:"Settings",icon:e.jsx(x,{}),divider:!0}],onItemClick:o=>{console.log(`Clicked on item: ${o}`)}},render:o=>e.jsxs(s,{sx:{height:"100vh",display:"flex"},children:[e.jsx(i,{...o}),e.jsxs(s,{sx:{flexGrow:1,p:3},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Custom navigation items"})]})]})};var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    selectedItemId: 'home',
    onItemClick: itemId => {
      console.log(\`Clicked on item: \${itemId}\`);
    }
  },
  render: args => <Box sx={{
    height: '100vh',
    display: 'flex'
  }}>
      <Navigation {...args} />
      <Box sx={{
      flexGrow: 1,
      p: 3
    }}>
        <h1>Content Area</h1>
        <p>Navigation is on the left</p>
      </Box>
    </Box>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    selectedItemId: 'projects',
    items: [{
      id: 'home',
      label: 'Dashboard',
      icon: <FolderIcon />
    }, {
      id: 'projects',
      label: 'Projects',
      icon: <FolderIcon />
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      divider: true
    }],
    onItemClick: itemId => {
      console.log(\`Clicked on item: \${itemId}\`);
    }
  },
  render: args => <Box sx={{
    height: '100vh',
    display: 'flex'
  }}>
      <Navigation {...args} />
      <Box sx={{
      flexGrow: 1,
      p: 3
    }}>
        <h1>Content Area</h1>
        <p>Custom navigation items</p>
      </Box>
    </Box>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const F=["Default","CustomItems"];export{t as CustomItems,n as Default,F as __namedExportsOrder,E as default};
