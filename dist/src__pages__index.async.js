(self.webpackChunk=self.webpackChunk||[]).push([[858],{37156:function(e,u,t){"use strict";t.d(u,{Z:function(){return $}});var l=t(27424),a=t.n(l),n=t(67294),d=t(861),c=t.n(d),o=t(85893),f=n.createContext(null),y=function(i,S){var A=i.value,k=i.onChange,b=i.options,N=b===void 0?[]:b,Z=i.className,M=i.style,_=i.children,D=i.disabled,v=(0,n.useState)(A||[]),r=a()(v,2),V=r[0],R=r[1],j=(0,n.useState)([]),w=a()(j,2),W=w[0],E=w[1];(0,n.useEffect)(function(){A&&R(A||[])},[A]);var H=function(){return N.map(function(g){return typeof g=="string"||typeof g=="number"?{label:g,value:g}:g})},G=function(g){E(function(U){return U.filter(function(B){return B!==g})})},h=function(g){E(function(U){return[].concat(c()(U),[g])})},L=function(g){var U=V.indexOf(g.value),B=c()(V);U===-1?B.push(g.value):B.splice(U,1);var z=H();k==null||k(B.filter(function(J){return W.includes(J)}).sort(function(J,K){var Q=z.findIndex(function(Y){return Y.value===J}),X=z.findIndex(function(Y){return Y.value===K});return Q-X}))};N&&N.length>0&&(_=H().map(function(m){return(0,o.jsx)(p,{disabled:"disabled"in m?m.disabled:D,value:m.value,checked:V.includes(m.value),onChange:m.onChange,className:"CheckboxGroup-item",style:m.style,children:m.label},m.value.toString())}));var F={toggleOption:L,value:V,disabled:D,registerValue:h,cancelValue:G};return(0,o.jsx)("div",{style:M,ref:S,children:(0,o.jsx)(f.Provider,{value:F,children:_})})},O=n.forwardRef(y),s=n.memo(O),I={"checkbox-label":"checkbox-label___xA64D","checkbox-wrapper-disabled":"checkbox-wrapper-disabled___OFdxR"},x=function(i,S){var A=i.className,k=i.children,b=i.indeterminate,N=b===void 0?!1:b,Z=i.style,M=i.disabled,_=i.onChange,D=i.checked,v=i.value,r=(0,n.useContext)(f),V=(0,n.useState)(),R=a()(V,2),j=R[0],w=R[1],W=M||(r==null?void 0:r.disabled),E=(0,n.useRef)(v);(0,n.useEffect)(function(){r==null||r.registerValue(v)},[]),(0,n.useEffect)(function(){return v!==E.current&&(r==null||r.cancelValue(E.current),r==null||r.registerValue(v),E.current=v),function(){return r==null?void 0:r.cancelValue(v)}},[v]);var H=function(h){M||(w(h.target.checked),r!=null&&r.toggleOption&&r.toggleOption({label:k,value:v}),_&&_(h))};return(0,n.useEffect)(function(){r&&w(r.value.includes(v))},[r==null?void 0:r.value]),(0,o.jsxs)("label",{style:Z,className:"".concat(I["checkbox-label"]," ").concat(j&&I["checkbox-wrapper-checked"]," ").concat(W&&I["checkbox-wrapper-disabled"]),children:[(0,o.jsx)("input",{type:"checkbox",onChange:H,disabled:W,checked:!!j,ref:S}),k!==void 0&&(0,o.jsx)("span",{children:k})]})},T=n.forwardRef(x),p=T,C=p;C.Group=s;var $=C},53126:function(e,u,t){"use strict";t.r(u),t.d(u,{default:function(){return x}});var l=t(861),a=t.n(l),n=t(27424),d=t.n(n),c=t(37156),o=t(67294),f={"project-box":"project-box___VJJ8T",columnsComponent:"columnsComponent___nwh0U","columnsComponent-button":"columnsComponent-button___lrfFy"},y;(function(p){p[p.Add=1]="Add",p[p.Minus=2]="Minus"})(y||(y={}));var O=t(32603),s=t(85893),I=["ddd","eee"];function x(){var p=(0,o.useState)(!0),C=d()(p,2),$=C[0],P=C[1],i=(0,o.useState)(!1),S=d()(i,2),A=S[0],k=S[1],b=(0,o.useState)(I),N=d()(b,2),Z=N[0],M=N[1],_=(0,o.useState)(function(){return[{label:"ddd",value:"ddd",disabled:!0},{label:"ggg",value:"ggg",disabled:!0},{label:"aaa",value:"aaa",disabled:!0},{label:"eee",value:"eee"},{label:"hhh",value:"hhh"},{label:"bbb",value:"bbb"},{label:"fff",value:"fff"},{label:"iii",value:"iii"},{label:"ccc",value:"ccc"}]}),D=d()(_,2),v=D[0],r=D[1],V=(0,o.useState)(3),R=d()(V,2),j=R[0],w=R[1],W=function(h){var L=[];return h.forEach(function(F){L.push(F.value)}),L},E=function(h){M(h.target.checked?W(v):[]),P(!1),k(h.target.checked)},H=function(h){console.log("checked = ",h),M(h)};return(0,o.useEffect)(function(){if(j){var G=Number((100/j).toFixed(1));r(function(h){var L=a()(h);return L.forEach(function(F){F.style={width:"".concat(G,"%")}}),L})}},[j]),(0,s.jsxs)("div",{className:f.project,children:[(0,s.jsxs)("div",{className:f["project-box"],children:[(0,s.jsx)(c.Z,{indeterminate:$,onChange:E,checked:A,children:"\u5168\u9009"}),(0,s.jsx)(c.Z.Group,{style:{display:"flex",flexWrap:"wrap"},options:v,onChange:H,value:Z})]}),(0,s.jsx)(T,{columns:j,setColumns:w,plainOptions:v}),(0,s.jsx)(O.rU,{to:"/demo",children:"\u67E5\u770B\u5176\u4ED6Demo"})]})}var T=function(C){var $=C.columns,P=C.setColumns,i=C.plainOptions,S=function(k){k==y.Add?P(function(b){return b<i.length?b+1:i.length}):P(function(b){return b>1?b-1:1})};return(0,s.jsxs)("div",{className:f.columnsComponent,children:[(0,s.jsx)("span",{children:"columns: "}),(0,s.jsx)("div",{className:f["columnsComponent-button"],onClick:function(){S(y.Minus)},children:"-"}),(0,s.jsxs)("div",{children:[" ",$]}),(0,s.jsx)("div",{className:f["columnsComponent-button"],onClick:function(){S(y.Add)},children:"+"})]})}},75251:function(e,u,t){"use strict";var l;var a=t(67294),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function y(O,s,I){var x,T={},p=null,C=null;I!==void 0&&(p=""+I),s.key!==void 0&&(p=""+s.key),s.ref!==void 0&&(C=s.ref);for(x in s)c.call(s,x)&&!f.hasOwnProperty(x)&&(T[x]=s[x]);if(O&&O.defaultProps)for(x in s=O.defaultProps,s)T[x]===void 0&&(T[x]=s[x]);return{$$typeof:n,type:O,key:p,ref:C,props:T,_owner:o.current}}l=d,u.jsx=y,u.jsxs=y},85893:function(e,u,t){"use strict";e.exports=t(75251)},73897:function(e){function u(t,l){(l==null||l>t.length)&&(l=t.length);for(var a=0,n=new Array(l);a<l;a++)n[a]=t[a];return n}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},85372:function(e){function u(t){if(Array.isArray(t))return t}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},63405:function(e,u,t){var l=t(73897);function a(n){if(Array.isArray(n))return l(n)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){function u(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},68872:function(e){function u(t,l){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],d=!0,c=!1,o,f;try{for(a=a.call(t);!(d=(o=a.next()).done)&&(n.push(o.value),!(l&&n.length===l));d=!0);}catch(y){c=!0,f=y}finally{try{!d&&a.return!=null&&a.return()}finally{if(c)throw f}}return n}}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},12218:function(e){function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},27424:function(e,u,t){var l=t(85372),a=t(68872),n=t(86116),d=t(12218);function c(o,f){return l(o)||a(o,f)||n(o,f)||d()}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,u,t){var l=t(63405),a=t(79498),n=t(86116),d=t(42281);function c(o){return l(o)||a(o)||n(o)||d()}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},86116:function(e,u,t){var l=t(73897);function a(n,d){if(!!n){if(typeof n=="string")return l(n,d);var c=Object.prototype.toString.call(n).slice(8,-1);if(c==="Object"&&n.constructor&&(c=n.constructor.name),c==="Map"||c==="Set")return Array.from(n);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return l(n,d)}}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
