import{j as e}from"./jsx-runtime-6d9837fe.js";import{N as i,d as r,a as x}from"./Navigation-ebec1a68.js";import{B as s}from"./Box-5929dc9d.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./Assignment-41f0556b.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./index-e5d314f4.js";import"./getThemeProps-f1c58075.js";import"./IconButton-dd2d5a4e.js";import"./Divider-01e4102b.js";import"./ListItemIcon-dfbc7e8c.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemText-28470848.js";import"./Typography-e5f4b08d.js";import"./Paper-251b2ec4.js";const E={title:"Layout/Navigation",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{selectedItemId:"home",onItemClick:o=>{console.log(`Clicked on item: ${o}`)}},render:o=>e.jsxs(s,{sx:{height:"100vh",display:"flex"},children:[e.jsx(i,{...o}),e.jsxs(s,{sx:{flexGrow:1,p:3},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Navigation is on the left"})]})]})},t={args:{selectedItemId:"projects",items:[{id:"home",label:"Dashboard",icon:e.jsx(r,{})},{id:"projects",label:"Projects",icon:e.jsx(r,{})},{id:"settings",label:"Settings",icon:e.jsx(x,{}),divider:!0}],onItemClick:o=>{console.log(`Clicked on item: ${o}`)}},render:o=>e.jsxs(s,{sx:{height:"100vh",display:"flex"},children:[e.jsx(i,{...o}),e.jsxs(s,{sx:{flexGrow:1,p:3},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Custom navigation items"})]})]})};var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
