import{j as t}from"./jsx-runtime-6d9837fe.js";import{r as v}from"./index-93f6b7ae.js";import{g as W,j as G,s as T,_ as h,k as J,a as K,c as Q,f as B,b as X,d as de,u as ue,i as w}from"./DefaultPropsProvider-4fe26c0b.js";import{u as pe,r as R}from"./createSvgIcon-97a11aa5.js";import{d as he}from"./CheckCircle-31f857df.js";import{I as me}from"./IconButton-5241931a.js";import{M as fe}from"./Menu-2edf3461.js";import{B as $}from"./Box-eaeca253.js";import{T as M}from"./Typography-7ec13922.js";import{u as xe,T as ve}from"./TextField-acc8520a.js";import{B as A}from"./Button-960882eb.js";import{M as Ce}from"./MenuItem-431051d4.js";import{L as ke}from"./ListItemIcon-64c3e971.js";import{B as ge,c as q}from"./ButtonBase-54c4ca59.js";function be(e){return W("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ie=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Se=e=>{const{classes:s,checked:o,disabled:r,edge:n}=e,c={root:["root",o&&"checked",r&&"disabled",n&&`edge${B(n)}`],input:["input"]};return X(c,be,s)},ye=T(ge)(({ownerState:e})=>h({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),je=T("input",{shouldForwardProp:J})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),_e=v.forwardRef(function(s,o){const{autoFocus:r,checked:n,checkedIcon:c,className:i,defaultChecked:d,disabled:b,disableFocusRipple:u=!1,edge:m=!1,icon:y,id:f,inputProps:j,inputRef:I,name:S,onBlur:l,onChange:C,onFocus:k,readOnly:a,required:g=!1,tabIndex:ae,type:z,value:D}=s,oe=K(s,Ie),[H,ne]=pe({controlled:n,default:!!d,name:"SwitchBase",state:"checked"}),x=xe(),re=p=>{k&&k(p),x&&x.onFocus&&x.onFocus(p)},ce=p=>{l&&l(p),x&&x.onBlur&&x.onBlur(p)},ie=p=>{if(p.nativeEvent.defaultPrevented)return;const U=p.target.checked;ne(U),C&&C(p,U)};let _=b;x&&typeof _>"u"&&(_=x.disabled);const le=z==="checkbox"||z==="radio",P=h({},s,{checked:H,disabled:_,disableFocusRipple:u,edge:m}),V=Se(P);return t.jsxs(ye,h({component:"span",className:Q(V.root,i),centerRipple:!0,focusRipple:!u,disabled:_,tabIndex:null,role:void 0,onFocus:re,onBlur:ce,ownerState:P,ref:o},oe,{children:[t.jsx(je,h({autoFocus:r,checked:n,defaultChecked:d,className:V.input,disabled:_,id:le?f:void 0,name:S,onChange:ie,readOnly:a,ref:I,required:g,ownerState:P,tabIndex:ae,type:z},z==="checkbox"&&D===void 0?{}:{value:D},j)),H?c:y]}))}),Be=_e,ze=q(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),$e=q(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Te=q(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function we(e){return W("MuiCheckbox",e)}const Re=G("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),F=Re,Pe=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Fe=e=>{const{classes:s,indeterminate:o,color:r,size:n}=e,c={root:["root",o&&"indeterminate",`color${B(r)}`,`size${B(n)}`]},i=X(c,we,s);return h({},s,i)},Me=T(Be,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,o.indeterminate&&s.indeterminate,s[`size${B(o.size)}`],o.color!=="default"&&s[`color${B(o.color)}`]]}})(({theme:e,ownerState:s})=>h({color:(e.vars||e).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${s.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[s.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:de(s.color==="default"?e.palette.action.active:e.palette[s.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[s.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),qe=t.jsx($e,{}),Ee=t.jsx(ze,{}),Le=t.jsx(Te,{}),Ne=v.forwardRef(function(s,o){var r,n;const c=ue({props:s,name:"MuiCheckbox"}),{checkedIcon:i=qe,color:d="primary",icon:b=Ee,indeterminate:u=!1,indeterminateIcon:m=Le,inputProps:y,size:f="medium",className:j}=c,I=K(c,Pe),S=u?m:b,l=u?m:i,C=h({},c,{color:d,indeterminate:u,size:f}),k=Fe(C);return t.jsx(Me,h({type:"checkbox",inputProps:h({"data-indeterminate":u},y),icon:v.cloneElement(S,{fontSize:(r=S.props.fontSize)!=null?r:f}),checkedIcon:v.cloneElement(l,{fontSize:(n=l.props.fontSize)!=null?n:f}),ownerState:C,ref:o,className:Q(k.root,j)},I,{classes:k}))}),Oe=Ne;var E={},De=w;Object.defineProperty(E,"__esModule",{value:!0});var Y=E.default=void 0,He=De(R()),Ve=t;Y=E.default=(0,He.default)((0,Ve.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked");var L={},Ue=w;Object.defineProperty(L,"__esModule",{value:!0});var Z=L.default=void 0,Ae=Ue(R()),We=t;Z=L.default=(0,Ae.default)((0,We.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error");var N={},Ge=w;Object.defineProperty(N,"__esModule",{value:!0});var ee=N.default=void 0,Je=Ge(R()),Ke=t;ee=N.default=(0,Je.default)((0,Ke.jsx)("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"}),"HourglassEmpty");var O={},Qe=w;Object.defineProperty(O,"__esModule",{value:!0});var te=O.default=void 0,Xe=Qe(R()),Ye=t;te=O.default=(0,Xe.default)((0,Ye.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll");const se=({status:e,statusText:s,onStatusChange:o})=>{const[r,n]=v.useState(null),[c,i]=v.useState(e),[d,b]=v.useState(s||""),[u,m]=v.useState(!1),y=a=>{n(a.currentTarget),i(e),b(s||""),m(!1)},f=()=>{n(null)},j=a=>{i(a.value),a.showTextInput?m(!0):I(a.value)},I=(a,g)=>{o(a,g),f()},S=()=>{I(c,d)},l=[{value:"not_started",label:"Not Started",icon:t.jsx(Y,{color:"disabled"})},{value:"in_progress",label:"In Progress",icon:t.jsx(ee,{color:"warning"}),showTextInput:!0},{value:"blocked",label:"Blocked",icon:t.jsx(Z,{color:"error"}),showTextInput:!0},{value:"done",label:"Done",icon:t.jsx(he,{color:"success"}),showTextInput:!0},{value:"final_installation_done",label:"Final Installation Done",icon:t.jsx(te,{color:"info"})}],C=()=>{const a=l.find(g=>g.value===e);return a?a.icon:l[0].icon},k=()=>{const a=l.find(g=>g.value===e);return a?a.label:"Not Started"};return t.jsxs(t.Fragment,{children:[t.jsx(me,{onClick:y,size:"small","aria-label":"change status","aria-controls":"status-menu","aria-haspopup":"true",children:C()}),t.jsx(fe,{id:"status-menu",anchorEl:r,keepMounted:!0,open:!!r,onClose:f,children:u?t.jsxs($,{sx:{p:2,width:300},children:[t.jsxs(M,{variant:"subtitle2",gutterBottom:!0,children:["Add details for ",k()]}),t.jsx(ve,{fullWidth:!0,size:"small",label:"Status details",value:d,onChange:a=>b(a.target.value),variant:"outlined",sx:{mb:2},autoFocus:!0}),t.jsxs($,{sx:{display:"flex",justifyContent:"flex-end",gap:1},children:[t.jsx(A,{size:"small",onClick:()=>m(!1),children:"Back"}),t.jsx(A,{size:"small",variant:"contained",onClick:S,children:"Save"})]})]}):l.map(a=>t.jsxs(Ce,{onClick:()=>j(a),selected:e===a.value,children:[t.jsx(ke,{children:a.icon}),a.label]},a.value))})]})};se.__docgenInfo={description:"",methods:[],displayName:"ChecklistItemStatusSelector",props:{status:{required:!0,tsType:{name:"ChecklistItemStatus"},description:""},statusText:{required:!1,tsType:{name:"string"},description:""},onStatusChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(status: ChecklistItemStatus, statusText?: string) => void",signature:{arguments:[{type:{name:"ChecklistItemStatus"},name:"status"},{type:{name:"string"},name:"statusText"}],return:{name:"void"}}},description:""}}};const Ze=T($)(({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(1,0),borderBottom:`1px solid ${e.palette.divider}`})),et=({item:e,onStatusChange:s})=>{const o=()=>{const i=e.status==="done"?"not_started":"done";s(e.id,i)},r=(i,d)=>{s(e.id,i,d)},n=e.status==="done"||e.status==="final_installation_done",c=e.status==="blocked";return t.jsxs(Ze,{children:[t.jsx(Oe,{checked:n,onChange:o,disabled:c}),t.jsxs($,{sx:{flexGrow:1},children:[t.jsx(M,{variant:"body1",children:e.text}),e.statusText&&t.jsx(M,{variant:"body2",color:"text.secondary",children:e.statusText})]}),t.jsx(se,{status:e.status,statusText:e.statusText,onStatusChange:r})]})};et.__docgenInfo={description:"",methods:[],displayName:"ChecklistItem",props:{item:{required:!0,tsType:{name:"ChecklistItemType"},description:""},onStatusChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, status: ChecklistItemType['status'], statusText?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"ChecklistItemType['status']",raw:"ChecklistItemType['status']"},name:"status"},{type:{name:"string"},name:"statusText"}],return:{name:"void"}}},description:""}}};export{et as C,Be as S,Z as d};
