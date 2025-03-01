import{j as o}from"./jsx-runtime-6d9837fe.js";import{d as ie}from"./CheckCircle-07b0e376.js";import{g as N,j as U,s as k,_ as i,k as A,b as G,c as W,f as v,d as J,a as le,u as de,i as y}from"./DefaultPropsProvider-320a04f5.js";import{u as ue,r as j}from"./createSvgIcon-df99a646.js";import{B as w}from"./Box-1320c606.js";import{r as I}from"./index-93f6b7ae.js";import{u as pe}from"./useFormControl-104fac70.js";import{B as he,c as F}from"./ButtonBase-3dac11a5.js";import{T as D}from"./Typography-ff3380f1.js";function fe(e){return N("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const me=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],xe=e=>{const{classes:t,checked:a,disabled:n,edge:s}=e,r={root:["root",a&&"checked",n&&"disabled",s&&`edge${v(s)}`],input:["input"]};return J(r,fe,t)},ve=k(he)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ke=k("input",{shouldForwardProp:A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ge=I.forwardRef(function(t,a){const{autoFocus:n,checked:s,checkedIcon:r,className:u,defaultChecked:g,disabled:B,disableFocusRipple:d=!1,edge:C=!1,icon:$,id:p,inputProps:S,inputRef:z,name:b,onBlur:h,onChange:f,onFocus:m,readOnly:Z,required:ee=!1,tabIndex:te,type:_,value:H}=t,oe=G(t,me),[L,ae]=ue({controlled:s,default:!!g,name:"SwitchBase",state:"checked"}),l=pe(),se=c=>{m&&m(c),l&&l.onFocus&&l.onFocus(c)},ne=c=>{h&&h(c),l&&l.onBlur&&l.onBlur(c)},re=c=>{if(c.nativeEvent.defaultPrevented)return;const V=c.target.checked;ae(V),f&&f(c,V)};let x=B;l&&typeof x>"u"&&(x=l.disabled);const ce=_==="checkbox"||_==="radio",R=i({},t,{checked:L,disabled:x,disableFocusRipple:d,edge:C}),T=xe(R);return o.jsxs(ve,i({component:"span",className:W(T.root,u),centerRipple:!0,focusRipple:!d,disabled:x,tabIndex:null,role:void 0,onFocus:se,onBlur:ne,ownerState:R,ref:a},oe,{children:[o.jsx(ke,i({autoFocus:n,checked:s,defaultChecked:g,className:T.input,disabled:x,id:ce?p:void 0,name:b,onChange:re,readOnly:Z,ref:z,required:ee,ownerState:R,tabIndex:te,type:_},_==="checkbox"&&H===void 0?{}:{value:H},S)),L?r:$]}))}),Ce=ge,be=F(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),_e=F(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ie=F(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ye(e){return N("MuiCheckbox",e)}const je=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),P=je,Be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],$e=e=>{const{classes:t,indeterminate:a,color:n,size:s}=e,r={root:["root",a&&"indeterminate",`color${v(n)}`,`size${v(s)}`]},u=J(r,ye,t);return i({},t,u)},Se=k(Ce,{shouldForwardProp:e=>A(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.indeterminate&&t.indeterminate,t[`size${v(a.size)}`],a.color!=="default"&&t[`color${v(a.color)}`]]}})(({theme:e,ownerState:t})=>i({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${P.checked}, &.${P.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${P.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ze=o.jsx(_e,{}),Re=o.jsx(be,{}),Pe=o.jsx(Ie,{}),we=I.forwardRef(function(t,a){var n,s;const r=de({props:t,name:"MuiCheckbox"}),{checkedIcon:u=ze,color:g="primary",icon:B=Re,indeterminate:d=!1,indeterminateIcon:C=Pe,inputProps:$,size:p="medium",className:S}=r,z=G(r,Be),b=d?C:B,h=d?C:u,f=i({},r,{color:g,indeterminate:d,size:p}),m=$e(f);return o.jsx(Se,i({type:"checkbox",inputProps:i({"data-indeterminate":d},$),icon:I.cloneElement(b,{fontSize:(n=b.props.fontSize)!=null?n:p}),checkedIcon:I.cloneElement(h,{fontSize:(s=h.props.fontSize)!=null?s:p}),ownerState:f,ref:a,className:W(m.root,S)},z,{classes:m}))}),Fe=we;var M={},Me=y;Object.defineProperty(M,"__esModule",{value:!0});var K=M.default=void 0,qe=Me(j()),Ee=o;K=M.default=(0,qe.default)((0,Ee.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked");var q={},Oe=y;Object.defineProperty(q,"__esModule",{value:!0});var Q=q.default=void 0,He=Oe(j()),Le=o;Q=q.default=(0,He.default)((0,Le.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error");var E={},Te=y;Object.defineProperty(E,"__esModule",{value:!0});var X=E.default=void 0,Ve=Te(j()),De=o;X=E.default=(0,Ve.default)((0,De.jsx)("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"}),"HourglassEmpty");var O={},Ne=y;Object.defineProperty(O,"__esModule",{value:!0});var Y=O.default=void 0,Ue=Ne(j()),Ae=o;Y=O.default=(0,Ue.default)((0,Ae.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");const Ge=k(w)(({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(1,0),borderBottom:`1px solid ${e.palette.divider}`})),We=k(w)(({theme:e,status:t})=>({display:"flex",alignItems:"center",color:(()=>{switch(t){case"blocked":return e.palette.error.main;case"done":return e.palette.success.main;case"final_installation_done":return e.palette.info.main;case"in_progress":return e.palette.warning.main;default:return e.palette.text.disabled}})(),marginRight:e.spacing(1)})),Je=({item:e,onStatusChange:t})=>{const a=()=>{const s=e.status==="done"?"not_started":"done";t(e.id,s)},n=()=>{switch(e.status){case"blocked":return o.jsx(Q,{color:"error"});case"done":return o.jsx(ie,{color:"success"});case"final_installation_done":return o.jsx(Y,{color:"info"});case"in_progress":return o.jsx(X,{color:"warning"});default:return o.jsx(K,{color:"disabled"})}};return o.jsxs(Ge,{children:[o.jsx(Fe,{checked:e.status==="done"||e.status==="final_installation_done",onChange:a,disabled:e.status==="blocked"}),o.jsxs(w,{sx:{flexGrow:1},children:[o.jsx(D,{variant:"body1",children:e.text}),e.statusText&&o.jsx(D,{variant:"body2",color:"text.secondary",children:e.statusText})]}),o.jsx(We,{status:e.status,children:n()})]})};Je.__docgenInfo={description:"",methods:[],displayName:"ChecklistItem",props:{item:{required:!0,tsType:{name:"ChecklistItemType"},description:""},onStatusChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, status: ChecklistItemType['status']) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"ChecklistItemType['status']",raw:"ChecklistItemType['status']"},name:"status"}],return:{name:"void"}}},description:""}}};export{Je as C,Ce as S,Q as d};
