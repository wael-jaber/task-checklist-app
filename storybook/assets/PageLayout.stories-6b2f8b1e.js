import{j as o}from"./jsx-runtime-6d9837fe.js";import{N as S,d as h,a as T}from"./Navigation-d75ad1c7.js";import{A as C}from"./AppLayout-36af4e20.js";import{B as i}from"./Box-eaeca253.js";import{u as k,_ as d}from"./DefaultPropsProvider-4fe26c0b.js";import{r as P}from"./index-93f6b7ae.js";import{G as B}from"./GlobalStyles-86810e6f.js";import{T as m}from"./Typography-7ec13922.js";import{P as b}from"./Paper-ca91e69e.js";import"./createSvgIcon-97a11aa5.js";import"./ButtonBase-54c4ca59.js";import"./ownerWindow-598c61de.js";import"./Assignment-12195fb3.js";import"./List-241a6e95.js";import"./resolveComponentProps-ebe7f1f8.js";import"./index-e5d314f4.js";import"./getThemeProps-9dd38701.js";import"./IconButton-5241931a.js";import"./Divider-7e260bb1.js";import"./ListItemIcon-64c3e971.js";import"./listItemTextClasses-b71efde8.js";import"./ListItemText-fdeedf6d.js";import"./UserProfileBadge-aa2821f8.js";import"./useSlot-625e2a1e.js";import"./Menu-2edf3461.js";import"./MenuItem-431051d4.js";import"./Container-815d4aff.js";import"./useThemeProps-a9526340.js";const L=(e,t)=>d({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),w=e=>d({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),_=(e,t=!1)=>{var n;const a={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([p,g])=>{var u;a[e.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(u=g.palette)==null?void 0:u.mode}});let r=d({html:L(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:d({margin:0},w(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a);const s=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return s&&(r=[r,s]),r};function D(e){const t=k({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return o.jsxs(P.Fragment,{children:[o.jsx(B,{styles:r=>_(r,a)}),n]})}const N=({children:e,userName:t,onLogout:n,title:a,navigationItems:r,selectedNavigationItemId:s,onNavigationItemClick:p})=>o.jsxs(i,{sx:{display:"flex"},children:[o.jsx(D,{}),o.jsx(S,{items:r,selectedItemId:s,onItemClick:p,width:240}),o.jsx(i,{component:"main",sx:{flexGrow:1,width:{md:"calc(100% - 240px)"}},children:o.jsx(C,{userName:t,onLogout:n,title:a,children:o.jsx(i,{component:"div",sx:{p:2},children:e})})})]});N.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},userName:{required:!1,tsType:{name:"string"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},navigationItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:""},selectedNavigationItemId:{required:!1,tsType:{name:"string"},description:""},onNavigationItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""}}};const ce={title:"Layout/PageLayout",component:N,tags:["autodocs"],parameters:{layout:"fullscreen"}},c={args:{userName:"John Doe",title:"Dashboard",selectedNavigationItemId:"home",onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Main Content"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"This is the main content area of the page."})})]})}},l={args:{userName:"Jane Smith",title:"Projects",selectedNavigationItemId:"projects",navigationItems:[{id:"dashboard",label:"Dashboard",icon:o.jsx(h,{})},{id:"projects",label:"Projects",icon:o.jsx(h,{})},{id:"settings",label:"Settings",icon:o.jsx(T,{}),divider:!0}],onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Projects"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"Custom navigation items with Projects selected."})})]})}};var y,v,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
