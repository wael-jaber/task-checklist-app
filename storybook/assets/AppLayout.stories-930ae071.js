import{j as o}from"./jsx-runtime-6d9837fe.js";import{A as x}from"./AppLayout-db4993d6.js";import{B as a}from"./Box-1320c606.js";import{T as t}from"./Typography-ff3380f1.js";import{P as n}from"./Paper-f1d4e8e3.js";import"./index-93f6b7ae.js";import"./UserProfileBadge-679a7b9d.js";import"./IconButton-bd7d2e9a.js";import"./DefaultPropsProvider-320a04f5.js";import"./ButtonBase-3dac11a5.js";import"./useSlot-e95d4028.js";import"./resolveComponentProps-c005490e.js";import"./Menu-664a8722.js";import"./List-984827ab.js";import"./ownerWindow-598c61de.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./MenuItem-83d7d03b.js";import"./listItemTextClasses-9dd24f52.js";import"./Container-5ff9c593.js";import"./useThemeProps-db35ee36.js";import"./getThemeProps-d35f8808.js";const _={title:"Layout/AppLayout",component:x,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={args:{children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This is the main content of the page."})})]})}},r={args:{userName:"John Doe",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Authenticated Content"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"This content is visible to authenticated users."})})]})}},s={args:{title:"Construction Tasks",userName:"Jane Smith",onLogout:()=>console.log("User logged out"),children:o.jsxs(a,{sx:{p:3},children:[o.jsx(t,{variant:"h4",gutterBottom:!0,children:"Custom Title Demo"}),o.jsx(n,{sx:{p:2},children:o.jsx(t,{children:"The app bar shows a custom title."})})]})}};var p,i,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["LoggedOut","LoggedIn","CustomTitle"];export{s as CustomTitle,r as LoggedIn,e as LoggedOut,R as __namedExportsOrder,_ as default};
