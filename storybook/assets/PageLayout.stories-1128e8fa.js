import{j as o}from"./jsx-runtime-6d9837fe.js";import{N as S,d as h,a as T}from"./Navigation-ebec1a68.js";import{A as C}from"./AppLayout-f1344a27.js";import{B as i}from"./Box-5929dc9d.js";import{u as k,_ as d}from"./DefaultPropsProvider-fd6e58b8.js";import{r as P}from"./index-93f6b7ae.js";import{G as B}from"./GlobalStyles-cf00909d.js";import{T as m}from"./Typography-e5f4b08d.js";import{P as b}from"./Paper-251b2ec4.js";import"./createSvgIcon-12ab1a12.js";import"./ButtonBase-bb19b134.js";import"./ownerWindow-598c61de.js";import"./Assignment-41f0556b.js";import"./List-6a2de8d1.js";import"./resolveComponentProps-a2b9119e.js";import"./index-e5d314f4.js";import"./getThemeProps-f1c58075.js";import"./IconButton-dd2d5a4e.js";import"./Divider-01e4102b.js";import"./ListItemIcon-dfbc7e8c.js";import"./listItemTextClasses-33b07b16.js";import"./ListItemText-28470848.js";import"./UserProfileBadge-7156d207.js";import"./useSlot-5724a49f.js";import"./Menu-52018f57.js";import"./MenuItem-6d822d7a.js";import"./Container-b5574b5b.js";import"./useThemeProps-6a88d483.js";const L=(e,t)=>d({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),w=e=>d({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),_=(e,t=!1)=>{var n;const a={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([p,g])=>{var u;a[e.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(u=g.palette)==null?void 0:u.mode}});let r=d({html:L(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:d({margin:0},w(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a);const s=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return s&&(r=[r,s]),r};function D(e){const t=k({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return o.jsxs(P.Fragment,{children:[o.jsx(B,{styles:r=>_(r,a)}),n]})}const N=({children:e,userName:t,onLogout:n,title:a,navigationItems:r,selectedNavigationItemId:s,onNavigationItemClick:p})=>o.jsxs(i,{sx:{display:"flex"},children:[o.jsx(D,{}),o.jsx(S,{items:r,selectedItemId:s,onItemClick:p,width:240}),o.jsx(i,{component:"main",sx:{flexGrow:1,width:{md:"calc(100% - 240px)"}},children:o.jsx(C,{userName:t,onLogout:n,title:a,children:o.jsx(i,{component:"div",sx:{p:2},children:e})})})]});N.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},userName:{required:!1,tsType:{name:"string"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},navigationItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:""},selectedNavigationItemId:{required:!1,tsType:{name:"string"},description:""},onNavigationItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""}}};const ce={title:"Layout/PageLayout",component:N,tags:["autodocs"],parameters:{layout:"fullscreen"}},c={args:{userName:"John Doe",title:"Dashboard",selectedNavigationItemId:"home",onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Main Content"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"This is the main content area of the page."})})]})}},l={args:{userName:"Jane Smith",title:"Projects",selectedNavigationItemId:"projects",navigationItems:[{id:"dashboard",label:"Dashboard",icon:o.jsx(h,{})},{id:"projects",label:"Projects",icon:o.jsx(h,{})},{id:"settings",label:"Settings",icon:o.jsx(T,{}),divider:!0}],onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Projects"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"Custom navigation items with Projects selected."})})]})}};var y,v,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    userName: 'John Doe',
    title: 'Dashboard',
    selectedNavigationItemId: 'home',
    onNavigationItemClick: itemId => {
      console.log(\`Navigation to: \${itemId}\`);
    },
    onLogout: () => {
      console.log('Logout clicked');
    },
    children: <Box>
        <Typography variant="h4" gutterBottom>
          Main Content
        </Typography>
        <Paper sx={{
        p: 3
      }}>
          <Typography>This is the main content area of the page.</Typography>
        </Paper>
      </Box>
  }
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,j,I;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userName: 'Jane Smith',
    title: 'Projects',
    selectedNavigationItemId: 'projects',
    navigationItems: [{
      id: 'dashboard',
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
    onNavigationItemClick: itemId => {
      console.log(\`Navigation to: \${itemId}\`);
    },
    onLogout: () => {
      console.log('Logout clicked');
    },
    children: <Box>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Paper sx={{
        p: 3
      }}>
          <Typography>Custom navigation items with Projects selected.</Typography>
        </Paper>
      </Box>
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const le=["Default","CustomNavigation"];export{l as CustomNavigation,c as Default,le as __namedExportsOrder,ce as default};
