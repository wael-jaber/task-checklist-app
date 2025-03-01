import{j as t}from"./jsx-runtime-6d9837fe.js";import{B as K}from"./Box-1320c606.js";import{g as W,j as G,q as T,s as k,f as m,_ as i,t as U,u as O,b as Z,c as H,d as J}from"./DefaultPropsProvider-320a04f5.js";import{r as Q}from"./index-93f6b7ae.js";import{T as X}from"./Typography-ff3380f1.js";function Y(e){return W("MuiCircularProgress",e)}G("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ee=["className","color","disableShrink","size","style","thickness","value","variant"];let p=e=>e,D,_,$,j;const a=44,re=T(D||(D=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),se=T(_||(_=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ae=e=>{const{classes:r,variant:s,color:o,disableShrink:f}=e,g={root:["root",s,`color${m(o)}`],svg:["svg"],circle:["circle",`circle${m(s)}`,f&&"circleDisableShrink"]};return J(g,Y,r)},te=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${m(s.color)}`]]}})(({ownerState:e,theme:r})=>i({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&U($||($=p`
      animation: ${0} 1.4s linear infinite;
    `),re)),oe=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),ie=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${m(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>i({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&U(j||(j=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),se)),ne=Q.forwardRef(function(r,s){const o=O({props:r,name:"MuiCircularProgress"}),{className:f,color:g="primary",disableShrink:B=!1,size:h=40,style:V,thickness:n=3.6,value:x=0,variant:C="indeterminate"}=o,A=Z(o,ee),c=i({},o,{color:g,disableShrink:B,size:h,thickness:n,value:x,variant:C}),y=ae(c),v={},S={},P={};if(C==="determinate"){const b=2*Math.PI*((a-n)/2);v.strokeDasharray=b.toFixed(3),P["aria-valuenow"]=Math.round(x),v.strokeDashoffset=`${((100-x)/100*b).toFixed(3)}px`,S.transform="rotate(-90deg)"}return t.jsx(te,i({className:H(y.root,f),style:i({width:h,height:h},S,V),ownerState:c,ref:s,role:"progressbar"},P,A,{children:t.jsx(oe,{className:y.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:t.jsx(ie,{className:y.circle,style:v,ownerState:c,cx:a,cy:a,r:(a-n)/2,fill:"none",strokeWidth:n})})}))}),ce=ne,q=({message:e="Loading...",fullScreen:r=!1})=>t.jsxs(K,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:r?"100vh":"200px",width:"100%"},children:[t.jsx(ce,{size:40}),t.jsx(X,{variant:"body1",sx:{mt:2},children:e})]});q.__docgenInfo={description:"",methods:[],displayName:"LoadingIndicator",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading...'",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const fe={title:"Common/LoadingIndicator",tags:["autodocs"],component:q},l={},u={args:{message:"Authenticating..."}},d={args:{fullScreen:!0,message:"Loading your profile..."},parameters:{layout:"fullscreen"}};var M,I,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,w,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: 'Authenticating...'
  }
}`,...(N=(w=u.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var z,E,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    fullScreen: true,
    message: 'Loading your profile...'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const ge=["Default","CustomMessage","FullScreen"];export{u as CustomMessage,l as Default,d as FullScreen,ge as __namedExportsOrder,fe as default};
