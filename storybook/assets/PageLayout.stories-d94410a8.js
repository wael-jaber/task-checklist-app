import{j as o}from"./jsx-runtime-6d9837fe.js";import{N as S,d as h,a as T}from"./Navigation-0a100c09.js";import{A as C}from"./AppLayout-db4993d6.js";import{B as i}from"./Box-1320c606.js";import{u as k,_ as d}from"./DefaultPropsProvider-320a04f5.js";import{r as P}from"./index-93f6b7ae.js";import{G as B}from"./GlobalStyles-b437e017.js";import{T as m}from"./Typography-ff3380f1.js";import{P as b}from"./Paper-f1d4e8e3.js";import"./createSvgIcon-df99a646.js";import"./ButtonBase-3dac11a5.js";import"./ownerWindow-598c61de.js";import"./Assignment-c767f471.js";import"./dividerClasses-9531ba68.js";import"./index-e5d314f4.js";import"./getThemeProps-d35f8808.js";import"./IconButton-bd7d2e9a.js";import"./Divider-1f441a49.js";import"./List-984827ab.js";import"./resolveComponentProps-c005490e.js";import"./ListItemText-35d148df.js";import"./listItemTextClasses-9dd24f52.js";import"./UserProfileBadge-679a7b9d.js";import"./useSlot-e95d4028.js";import"./Menu-664a8722.js";import"./MenuItem-83d7d03b.js";import"./Container-5ff9c593.js";import"./useThemeProps-db35ee36.js";const L=(e,t)=>d({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),w=e=>d({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),_=(e,t=!1)=>{var n;const a={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([p,g])=>{var u;a[e.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(u=g.palette)==null?void 0:u.mode}});let r=d({html:L(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:d({margin:0},w(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a);const s=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return s&&(r=[r,s]),r};function D(e){const t=k({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:a=!1}=t;return o.jsxs(P.Fragment,{children:[o.jsx(B,{styles:r=>_(r,a)}),n]})}const N=({children:e,userName:t,onLogout:n,title:a,navigationItems:r,selectedNavigationItemId:s,onNavigationItemClick:p})=>o.jsxs(i,{sx:{display:"flex"},children:[o.jsx(D,{}),o.jsx(S,{items:r,selectedItemId:s,onItemClick:p,width:240}),o.jsx(i,{component:"main",sx:{flexGrow:1,width:{md:"calc(100% - 240px)"}},children:o.jsx(C,{userName:t,onLogout:n,title:a,children:o.jsx(i,{component:"div",sx:{p:2},children:e})})})]});N.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},userName:{required:!1,tsType:{name:"string"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},navigationItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:""},selectedNavigationItemId:{required:!1,tsType:{name:"string"},description:""},onNavigationItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""}}};const ce={title:"Layout/PageLayout",component:N,tags:["autodocs"],parameters:{layout:"fullscreen"}},c={args:{userName:"John Doe",title:"Dashboard",selectedNavigationItemId:"home",onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Main Content"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"This is the main content area of the page."})})]})}},l={args:{userName:"Jane Smith",title:"Projects",selectedNavigationItemId:"projects",navigationItems:[{id:"dashboard",label:"Dashboard",icon:o.jsx(h,{})},{id:"projects",label:"Projects",icon:o.jsx(h,{})},{id:"settings",label:"Settings",icon:o.jsx(T,{}),divider:!0}],onNavigationItemClick:e=>{console.log(`Navigation to: ${e}`)},onLogout:()=>{console.log("Logout clicked")},children:o.jsxs(i,{children:[o.jsx(m,{variant:"h4",gutterBottom:!0,children:"Projects"}),o.jsx(b,{sx:{p:3},children:o.jsx(m,{children:"Custom navigation items with Projects selected."})})]})}};var y,v,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
