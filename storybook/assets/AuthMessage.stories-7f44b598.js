import{j as n}from"./jsx-runtime-6d9837fe.js";import{B as S}from"./Box-eaeca253.js";import{A as j}from"./Alert-c86ecba4.js";import{g as M,j as _,s as w,u as E,a as W,_ as b,c as k,b as C}from"./DefaultPropsProvider-4fe26c0b.js";import{r as R}from"./index-93f6b7ae.js";import{T as U}from"./Typography-7ec13922.js";import"./useSlot-625e2a1e.js";import"./resolveComponentProps-ebe7f1f8.js";import"./ButtonBase-54c4ca59.js";import"./Paper-ca91e69e.js";import"./IconButton-5241931a.js";function N(e){return M("MuiAlertTitle",e)}_("MuiAlertTitle",["root"]);const P=["className"],q=e=>{const{classes:s}=e;return C({root:["root"]},N,s)},B=w(U,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),I=R.forwardRef(function(s,t){const c=E({props:s,name:"MuiAlertTitle"}),{className:x}=c,T=W(c,P),i=c,v=q(i);return n.jsx(B,b({gutterBottom:!0,component:"div",ownerState:i,ref:t,className:k(v.root,x)},T))}),L=I,A=({type:e,title:s,message:t})=>n.jsx(S,{sx:{my:2},children:n.jsxs(j,{severity:e,sx:{width:"100%"},children:[s&&n.jsx(L,{children:s}),t]})});A.__docgenInfo={description:"",methods:[],displayName:"AuthMessage",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""}}};const V={title:"User/AuthMessage",tags:["autodocs"],component:A},r={args:{type:"success",title:"Login Successful",message:"Welcome back! You have been successfully logged in."}},o={args:{type:"error",title:"Authentication Failed",message:"We couldn't find an account with that name. Please try again."}},a={args:{type:"info",message:"Enter your name to access your tasks and checklists."}};var l,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Login Successful',
    message: 'Welcome back! You have been successfully logged in.'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Authentication Failed',
    message: "We couldn't find an account with that name. Please try again."
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,f,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'Enter your name to access your tasks and checklists.'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const X=["Success","Error","Info"];export{o as Error,a as Info,r as Success,X as __namedExportsOrder,V as default};
