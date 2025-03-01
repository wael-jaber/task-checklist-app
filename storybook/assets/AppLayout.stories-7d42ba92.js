import{j as o}from"./jsx-runtime-6d9837fe.js";import{A as x}from"./AppLayout-f1344a27.js";import{B as a}from"./Box-5929dc9d.js";import{T as t}from"./Typography-e5f4b08d.js";import{P as n}from"./Paper-251b2ec4.js";import"./index-93f6b7ae.js";import"./UserProfileBadge-7156d207.js";import"./IconButton-dd2d5a4e.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./ButtonBase-bb19b134.js";import"./useSlot-5724a49f.js";import"./resolveComponentProps-a2b9119e.js";import"./Menu-52018f57.js";import"./List-6a2de8d1.js";import"./ownerWindow-598c61de.js";import"./index-e5d314f4.js";import"./MenuItem-6d822d7a.js";import"./listItemTextClasses-33b07b16.js";import"./Container-b5574b5b.js";import"./useThemeProps-6a88d483.js";import"./getThemeProps-f1c58075.js";const M={title:"Layout/AppLayout",component:x,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This is the main content of the page."})})]})}},r={args:{userName:"John Doe",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Authenticated Content"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This content is visible to authenticated users."})})]})}},s={args:{title:"Construction Tasks",userName:"Jane Smith",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Custom Title Demo"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"The app bar shows a custom title."})})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <Box sx={{
      p: 3
    }}>
        <Typography variant="h4" gutterBottom>
          Main Content Area
        </Typography>
        <Paper sx={{
        p: 2
      }}>
          <Typography>This is the main content of the page.</Typography>
        </Paper>
      </Box>
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,h,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    userName: 'John Doe',
    onLogout: () => console.log('User logged out'),
    children: <Box sx={{
      p: 3
    }}>
        <Typography variant="h4" gutterBottom>
          Authenticated Content
        </Typography>
        <Paper sx={{
        p: 2
      }}>
          <Typography>This content is visible to authenticated users.</Typography>
        </Paper>
      </Box>
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Construction Tasks',
    userName: 'Jane Smith',
    onLogout: () => console.log('User logged out'),
    children: <Box sx={{
      p: 3
    }}>
        <Typography variant="h4" gutterBottom>
          Custom Title Demo
        </Typography>
        <Paper sx={{
        p: 2
      }}>
          <Typography>The app bar shows a custom title.</Typography>
        </Paper>
      </Box>
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["LoggedOut","LoggedIn","CustomTitle"];export{s as CustomTitle,r as LoggedIn,e as LoggedOut,_ as __namedExportsOrder,M as default};
