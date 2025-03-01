import{I as g}from"./ImageMarker-c9a5e415.js";import"./jsx-runtime-6d9837fe.js";import"./index-93f6b7ae.js";import"./DefaultPropsProvider-fd6e58b8.js";import"./Box-5929dc9d.js";import"./Paper-251b2ec4.js";import"./Typography-e5f4b08d.js";const C={title:"Tasks/ImageMarker",component:g,tags:["autodocs"],parameters:{layout:"padded"}},r={args:{src:"https://placehold.co/600x400/png",onChange:o=>{console.log("Marker position:",o)}}},a={args:{src:"https://placehold.co/600x400/png",initialMarker:{x:50,y:50},onChange:o=>{console.log("Marker position:",o)}}},e={args:{src:"https://placehold.co/600x400/png",initialMarker:{x:30,y:70},disabled:!0}};var n,s,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: 'https://placehold.co/600x400/png',
    onChange: marker => {
      console.log('Marker position:', marker);
    }
  }
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,p,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: 'https://placehold.co/600x400/png',
    initialMarker: {
      x: 50,
      y: 50
    },
    onChange: marker => {
      console.log('Marker position:', marker);
    }
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: 'https://placehold.co/600x400/png',
    initialMarker: {
      x: 30,
      y: 70
    },
    disabled: true
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const O=["NoMarker","WithInitialMarker","ReadOnly"];export{r as NoMarker,e as ReadOnly,a as WithInitialMarker,O as __namedExportsOrder,C as default};
