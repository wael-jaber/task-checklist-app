import{r as u,a as I,b}from"./index-93f6b7ae.js";import{c as v,s as g,a as _,d as S,u as y,e as C}from"./ButtonBase-3dac11a5.js";import{C as E,f as N}from"./DefaultPropsProvider-320a04f5.js";import{c as P,d as R,o as F,a as $}from"./ownerWindow-598c61de.js";function h(e,t){return()=>null}function j(e,t){var a,n;return u.isValidElement(e)&&t.indexOf((a=e.type.muiName)!=null?a:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function q(e,t){return()=>null}let s=0;function V(e){const[t,a]=u.useState(e),n=e||t;return u.useEffect(()=>{t==null&&(s+=1,a(`mui-${s}`))},[t]),n}const l=I["useId".toString()];function k(e){if(l!==void 0){const t=l();return e??t}return V(e)}function w(e,t,a,n,r){return null}function G({controlled:e,default:t,name:a,state:n="value"}){const{current:r}=u.useRef(e!==void 0),[i,f]=u.useState(t),d=r?e:i,m=u.useCallback(p=>{r||f(p)},[]);return[d,m]}const M={configure:e=>{E.configure(e)}},x=Object.freeze(Object.defineProperty({__proto__:null,capitalize:N,createChainedFunction:P,createSvgIcon:v,debounce:R,deprecatedPropType:h,isMuiElement:j,ownerDocument:F,ownerWindow:$,requirePropFactory:q,setRef:g,unstable_ClassNameGenerator:M,unstable_useEnhancedEffect:_,unstable_useId:k,unsupportedProp:w,useControlled:G,useEventCallback:S,useForkRef:y,useIsFocusVisible:C},Symbol.toStringTag,{value:"Module"}));var o={};const z=b(x);var c;function A(){return c||(c=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=z}(o)),o}export{k as a,j as i,A as r,G as u};
