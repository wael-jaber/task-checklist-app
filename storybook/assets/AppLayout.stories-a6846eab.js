import{j as t}from"./jsx-runtime-6d9837fe.js";import{U as G}from"./UserProfileBadge-4834614e.js";import{B as p,T as n}from"./Box-25983615.js";import{g as R,h as N,s as P,f as h,_ as e,u as U,b as $,c as M,d as O}from"./DefaultPropsProvider-6d541532.js";import{r as _}from"./index-93f6b7ae.js";import{P as f}from"./Paper-eebdd5ee.js";import{C as q}from"./Container-18f7ae52.js";import"./IconButton-5a2125ae.js";import"./ButtonBase-64324024.js";import"./useSlot-49918663.js";import"./resolveComponentProps-e8e0e122.js";import"./Menu-04459ced.js";import"./ownerWindow-598c61de.js";import"./dividerClasses-232aba77.js";import"./index-e5d314f4.js";import"./useThemeProps-15943237.js";function E(o){return R("MuiAppBar",o)}N("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const J=["className","color","enableColorOnDark","position"],V=o=>{const{color:r,position:a,classes:s}=o,i={root:["root",`color${h(r)}`,`position${h(a)}`]};return O(i,E,s)},d=(o,r)=>o?`${o==null?void 0:o.replace(")","")}, ${r})`:r,F=P(f,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`position${h(a.position)}`],r[`color${h(a.color)}`]]}})(({theme:o,ownerState:r})=>{const a=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return e({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},r.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},r.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},r.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},r.position==="static"&&{position:"static"},r.position==="relative"&&{position:"relative"},!o.vars&&e({},r.color==="default"&&{backgroundColor:a,color:o.palette.getContrastText(a)},r.color&&r.color!=="default"&&r.color!=="inherit"&&r.color!=="transparent"&&{backgroundColor:o.palette[r.color].main,color:o.palette[r.color].contrastText},r.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!r.enableColorOnDark&&{backgroundColor:null,color:null},r.color==="transparent"&&e({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&e({},r.color==="default"&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette.AppBar.defaultBg:d(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?o.vars.palette.text.primary:d(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette[r.color].main:d(o.vars.palette.AppBar.darkBg,o.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?o.vars.palette[r.color].contrastText:d(o.vars.palette.AppBar.darkColor,o.vars.palette[r.color].contrastText)},!["inherit","transparent"].includes(r.color)&&{backgroundColor:"var(--AppBar-background)"},{color:r.color==="inherit"?"inherit":"var(--AppBar-color)"},r.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),H=_.forwardRef(function(r,a){const s=U({props:r,name:"MuiAppBar"}),{className:i,color:c="primary",enableColorOnDark:y=!1,position:u="fixed"}=s,b=$(s,J),l=e({},s,{color:c,position:u,enableColorOnDark:y}),v=V(l);return t.jsx(F,e({square:!0,component:"header",ownerState:l,elevation:4,className:M(v.root,i,u==="fixed"&&"mui-fixed"),ref:a},b))}),W=H;function Y(o){return R("MuiToolbar",o)}N("MuiToolbar",["root","gutters","regular","dense"]);const K=["className","component","disableGutters","variant"],Q=o=>{const{classes:r,disableGutters:a,variant:s}=o;return O({root:["root",!a&&"gutters",s]},Y,r)},X=P("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,!a.disableGutters&&r.gutters,r[a.variant]]}})(({theme:o,ownerState:r})=>e({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},r.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:r})=>r.variant==="regular"&&o.mixins.toolbar),Z=_.forwardRef(function(r,a){const s=U({props:r,name:"MuiToolbar"}),{className:i,component:c="div",disableGutters:y=!1,variant:u="regular"}=s,b=$(s,K),l=e({},s,{component:c,disableGutters:y,variant:u}),v=Q(l);return t.jsx(X,e({as:c,className:M(v.root,i),ref:a,ownerState:l},b))}),S=Z,z=({children:o,userName:r,onLogout:a=()=>{},title:s="Task Checklist App"})=>t.jsxs(p,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[t.jsx(W,{position:"static",children:t.jsxs(S,{children:[t.jsx(n,{variant:"h6",component:"div",sx:{flexGrow:1},children:s}),r&&t.jsx(G,{userName:r,onLogout:a})]})}),t.jsx(q,{component:"main",sx:{py:4,flexGrow:1},children:o}),t.jsx(p,{component:"footer",sx:{py:2,textAlign:"center",bgcolor:"background.paper"},children:t.jsxs(n,{variant:"body2",color:"text.secondary",children:["© ",new Date().getFullYear()," Task Checklist App"]})})]});z.__docgenInfo={description:"",methods:[],displayName:"AppLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},userName:{required:!1,tsType:{name:"string"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Task Checklist App'",computed:!1}}}};const ho={title:"Layout/AppLayout",component:z,tags:["autodocs"],parameters:{layout:"fullscreen"}},g={args:{children:t.jsxs(p,{sx:{p:3},children:[t.jsx(n,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),t.jsx(f,{sx:{p:2},children:t.jsx(n,{children:"This is the main content of the page."})})]})}},x={args:{userName:"John Doe",onLogout:()=>console.log("User logged out"),children:t.jsxs(p,{sx:{p:3},children:[t.jsx(n,{variant:"h4",gutterBottom:!0,children:"Authenticated Content"}),t.jsx(f,{sx:{p:2},children:t.jsx(n,{children:"This content is visible to authenticated users."})})]})}},m={args:{title:"Construction Tasks",userName:"Jane Smith",onLogout:()=>console.log("User logged out"),children:t.jsxs(p,{sx:{p:3},children:[t.jsx(n,{variant:"h4",gutterBottom:!0,children:"Custom Title Demo"}),t.jsx(f,{sx:{p:2},children:t.jsx(n,{children:"The app bar shows a custom title."})})]})}};var T,B,k;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(B=g.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var C,A,j;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(A=x.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var D,L,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const fo=["LoggedOut","LoggedIn","CustomTitle"];export{m as CustomTitle,x as LoggedIn,g as LoggedOut,fo as __namedExportsOrder,ho as default};
