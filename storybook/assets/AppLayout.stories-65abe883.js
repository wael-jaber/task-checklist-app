import{j as o}from"./jsx-runtime-6d9837fe.js";import{A as x}from"./AppLayout-36af4e20.js";import{B as a}from"./Box-eaeca253.js";import{T as t}from"./Typography-7ec13922.js";import{P as n}from"./Paper-ca91e69e.js";import"./index-93f6b7ae.js";import"./UserProfileBadge-aa2821f8.js";import"./IconButton-5241931a.js";import"./DefaultPropsProvider-4fe26c0b.js";import"./ButtonBase-54c4ca59.js";import"./useSlot-625e2a1e.js";import"./resolveComponentProps-ebe7f1f8.js";import"./Menu-2edf3461.js";import"./List-241a6e95.js";import"./ownerWindow-598c61de.js";import"./index-e5d314f4.js";import"./MenuItem-431051d4.js";import"./listItemTextClasses-b71efde8.js";import"./Container-815d4aff.js";import"./useThemeProps-a9526340.js";import"./getThemeProps-9dd38701.js";const M={title:"Layout/AppLayout",component:x,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This is the main content of the page."})})]})}},r={args:{userName:"John Doe",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Authenticated Content"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This content is visible to authenticated users."})})]})}},s={args:{title:"Construction Tasks",userName:"Jane Smith",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Custom Title Demo"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"The app bar shows a custom title."})})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
