!function(){"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,"string");if("object"!==t(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r=window.wp.element,l={foreground:"#00588d",src:(0,r.createElement)("svg",{enableBackground:"new 0 0 40 40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"m34.5 3c.6 0 1 .4 1 1v32c0 .6-.4 1-1 1h-29c-.6 0-1-.4-1-1v-32c0-.6.4-1 1-1zm0-3h-29c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h28.9c2.2 0 4-1.8 4-4v-32c0-2.2-1.7-4-3.9-4zm-3.4 9.8h-18.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h18.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-22 0h-.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.5 1.4-1.3 1.4zm22 17.4h-18.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h18.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-22 0h-.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.5 1.4-1.3 1.4zm3-11.6h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-19 5.8h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-19 11.6h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4z",fill:"#00588d"}))},o=JSON.parse('{"_#":"Wordpress features support","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"cumulus-gutenberg/family-links","title":"Family Links","description":"Insert links to a page\'s children or siblings","keywords":["cumulus","cmls","family","parent","child","children","siblings"],"icon":"admin-links","category":"cmls","editorScript":"file:./assets/editor.js","style":"file:./assets/editor.css","attributes":{"postType":{"type":"string"},"parentPostId":{"type":"number"},"showCurrentChildren":{"type":"boolean","default":true},"maxDepth":{"type":"integer","default":0},"excludeNoindex":{"type":"boolean","default":true},"excludeAdditionalIDs":{"type":"array","default":[]},"displayType":{"type":"string","enum":["plain","bullets","square","numbered","custom"],"default":"plain"},"customBullet":{"type":"string","default":""},"itemMargin":{"type":"object","default":null},"childrenMargin":{"type":"object","default":{"left":"1em"}},"bulletColor":{"type":"string","default":null},"underlineLinks":{"type":"boolean","default":true},"underlineOnHover":{"type":"boolean","default":true},"linkColor":{"type":"string","default":null},"linkColorHover":{"type":"string","default":null},"textAlign":{"type":"string","default":null},"fontWeight":{"type":"string","default":null},"fontStyle":{"type":"string","default":null},"highlightCurrent":{"type":"boolean","default":true},"currentFontSize":{"type":"string","default":null},"currentFontWeight":{"type":"string","default":"700"},"currentFontStyle":{"type":"string","default":"normal"},"currentUnderlineLinks":{"type":"boolean","default":true},"currentUnderlineOnHover":{"type":"boolean","default":true},"currentLinkColor":{"type":"string","default":null},"currentLinkColorHover":{"type":"string","default":null}},"supports":{"_#":"Allow customizing border","anchor":true,"align":true,"alignWide":true,"className":true,"color":{"background":true,"__experimentalDuotone":false,"gradients":true,"link":false,"text":false},"customClassName":false,"defaultStylePicker":true,"html":false,"inserter":true,"multiple":true,"reusable":true,"lock":true,"spacing":{"margin":true,"padding":true,"blockGap":false},"typography":{"align":true,"fontSize":true,"lineHeight":true,"fontWeight":true,"fontStyle":true,"textTransform":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true},"border":{"color":true,"radius":true,"style":true,"width":true,"defaultControls":{"color":true,"radius":true,"style":true,"width":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}}}');function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,_x,o,i=[],_n=!0,a=!1;try{if(_x=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;_n=!1}else for(;!(_n=(r=_x.call(n)).done)&&(i.push(r.value),i.length!==t);_n=!0);}catch(e){a=!0,l=e}finally{try{if(!_n&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(a)throw l}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=window.wp.components,s=window.wp.blockEditor,p=window.wp.primitives,d=(0,r.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.Path,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})),f=(0,r.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})),m=(0,r.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),h=(0,r.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.Path,{d:"M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"})),g=(0,r.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(p.Path,{d:"M12.5 5L10 19h1.9l2.5-14z"}));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=wp.element,w=(b.useRef,b.useEffect),E=b.useState,C=function(e){var t,l,o,i,a,p=e.attributes,y=e.setAttributes,b=u(E(d),2),C=b[0],P=b[1];w((function(){var e,t={uppercase:f,lowercase:m};P((null==t?void 0:t[null===(e=p.style)||void 0===e||null===(e=e.typography)||void 0===e?void 0:e.textTransform])||d)}),[p.style]);var x=function(){var e,t,n;return(null===(e=p.style)||void 0===e||null===(e=e.typography)||void 0===e?void 0:e.fontWeight)&&((null===(t=p.style)||void 0===t||null===(t=t.typography)||void 0===t||null===(t=t.fontWeight)||void 0===t||null===(t=t.toString())||void 0===t?void 0:t.includes("bold"))||(null===(n=p.style)||void 0===n||null===(n=n.typography)||void 0===n?void 0:n.fontWeight)>500)},_=function(){var e;return"italic"==(null===(e=p.style)||void 0===e||null===(e=e.typography)||void 0===e?void 0:e.fontStyle)},S=function(e,t){var r,l,o=v(v({},null===(r=p.style)||void 0===r?void 0:r.typography),{},n({},e,t));t||null==o||null===(l=o.typography)||void 0===l||delete l[e],y({style:v(v({},p.style),{},{typography:o})})};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.AlignmentToolbar,{value:null===(t=p.style)||void 0===t||null===(t=t.typography)||void 0===t?void 0:t.textAlign,onChange:function(e){return y({textAlign:e})}}),(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(c.ToolbarDropdownMenu,{label:"Letter Case",icon:C,controls:[{title:"Normal",icon:d,isActive:!(null!==(l=p.style)&&void 0!==l&&null!==(l=l.typography)&&void 0!==l&&l.textTransform),onClick:function(){return S("textTransform",null)}},{title:"UPPERCASE",isActive:"uppercase"===(null===(o=p.style)||void 0===o||null===(o=o.typography)||void 0===o?void 0:o.textTransform),icon:f,onClick:function(){return S("textTransform","uppercase")}},{title:"Capitalize",isActive:"capitalize"===(null===(i=p.style)||void 0===i||null===(i=i.typography)||void 0===i?void 0:i.textTransform),icon:d,onClick:function(){return S("textTransform","capitalize")}},{title:"lowercase",isActive:"lowercase"===(null===(a=p.style)||void 0===a||null===(a=a.typography)||void 0===a?void 0:a.textTransform),icon:m,onClick:function(){return S("textTransform","lowercase")}}]})),(0,r.createElement)(c.ToolbarGroup,null,(0,r.createElement)(c.ToolbarButton,{icon:h,label:"Bold",isPressed:x(),onClick:function(){S("fontWeight",x()?null:700)}}),(0,r.createElement)(c.ToolbarButton,{icon:g,label:"Italic",isPressed:_(),onClick:function(){S("fontStyle",_()?null:"italic")}})))};function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function x(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=window.wp.data,S=window.wp.htmlEntities,O=window.wp.apiFetch,k=e.n(O),T=window.wp.url,I=function(e){var t=Object.assign({selectedPostType:null,onChange:function(){},filter:!1},e),n=t.selectedPostType,l=t.onChange,o=t.filter,i="undefined"==typeof AbortController?void 0:new AbortController,a=u((0,r.useState)(!1),2),s=a[0],p=a[1],d=u((0,r.useState)(),2),f=d[0],m=d[1];(0,r.useEffect)((function(){return function(){return i.abort()}}),[]);var h=(0,_.useSelect)((function(e){return{currentPostType:e("core/editor").getCurrentPostType()}}),[]).currentPostType;(0,r.useMemo)((function(){p(!1);var e={path:(0,T.addQueryArgs)("/wp/v2/types",{context:"view"}),signal:null==i?void 0:i.signal};return k()(e).then((function(e){return m(e)})),e}),[]);var g=(0,r.useMemo)((function(){var e;if(f){var t,n=Object.values(f);o&&(n=null===(t=n)||void 0===t?void 0:t.filter(o));var r=null===(e=n)||void 0===e?void 0:e.map((function(e){return{id:e.slug,name:(0,S.decodeEntities)(e.name)}}));return p(!0),r}}),[f]);return(0,r.useEffect)((function(){if(null!=g&&g.length&&(1===g.length&&l(g[0].id),!n)){var e=g.find((function(e){return e.id===h}));null!=e&&e.id&&l(e.id)}}),[g]),(0,r.createElement)(r.Fragment,null,s?(0,r.createElement)((function(e){var t=Object.assign({label:"Post Type",style:{lineHeight:1.3}},e),o=function(e){return e.children};if(f&&g){if(1===g.length)return"Post type: ".concat(g[0].name);Object.assign(t,{selectedId:n,onChange:l,tree:g})}else o=c.Disabled,t.noOptionLabel="None available";return(0,r.createElement)(o,null,(0,r.createElement)(c.TreeSelect,t))}),null):(0,r.createElement)(c.Flex,{direction:"row",justify:"left",align:"center"},(0,r.createElement)(c.Spinner,null),"Loading post types…"))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=function(e){var t,l,o=Object.assign({label:"",help:"",noOptionLabel:null,postType:"page",parentPostId:null,selectedId:null,onChange:function(){},onLoad:function(){},multiple:!1,style:{}},e),i=o.postType,a=o.parentPostId,s=o.selectedId,p=(o.multiple,o.onChange),d=o.onLoad;if(!i)return(0,r.createElement)(r.Fragment,null);var f="undefined"==typeof AbortController?void 0:new AbortController,m=(null==f||null===(t=f.signal)||void 0===t||t.aborted,u((0,r.useState)(!1),2)),h=m[0],g=m[1],y=u((0,r.useState)(),2),v=y[0],b=y[1],w=u((0,r.useState)(),2),E=w[0],C=w[1];(0,r.useEffect)((function(){return function(){return f.abort()}}),[]),(0,r.useMemo)((function(){var e={path:(0,T.addQueryArgs)("/wp/v2/types/".concat(i),{context:"view"}),signal:null==f?void 0:f.signal};return i&&(g(!1),k()(e).then((function(e){e.hierarchical&&b(e)}))),e}),[i]),(0,r.useMemo)((function(){if(v){var e={type:null==v?void 0:v.slug,per_page:-1,_fields:"id,title,parent",context:"view"},t={path:(0,T.addQueryArgs)("/cumulus-gutenberg-family-links/v1/children-of/".concat(a||0),e),signal:null==f?void 0:f.signal};g(!1),k()(t).then((function(e){C(e)}))}}),[v,a]);var P=(0,r.useMemo)((function(){var e;return null!=E&&E.length&&(e=function(e){var t=e.map((function(e){return A({children:[],parent:null},e)})),n=t.reduce((function(e,t){return e[t.parent]||(e[t.parent]=[]),e[t.parent].push(t),e}),{});if(n.null&&n.null.length)return t;var r=function e(t){return t.map((function(t){var r=n[t.id];return A(A({},t),{},{children:r&&r.length?e(r):[]})}))};return n[0]?r(n[0]):Object.values(n).length?r(Object.values(n)[0]):[]}(null==E?void 0:E.map((function(e){var t,n;if(null!=e&&e.id)return{id:e.id,parent:e.parent,name:(t=e,null!=t&&null!==(n=t.title)&&void 0!==n&&n.rendered?(0,S.decodeEntities)(t.title.rendered):"#".concat(t.id," (","n",")"))}})).filter(Boolean)),g(!0)),{childPageOptions:e}}),[E]).childPageOptions;return(0,r.useEffect)((function(){d(P)}),[P]),(0,r.createElement)(r.Fragment,null,h?(0,r.createElement)((function(e){var t,l,i=Object.assign(o.multiple&&null!=P&&P.length?{height:"auto",minHeight:"6em",padding:"8px"}:{},o.style);o.noOptionLabel||"No ".concat((null==v||null===(t=v.labels)||void 0===t?void 0:t.singular_name)||"page"," selected"),o.noOptionLabel;var a=Object.assign(n({label:o.label||"Select a ".concat((null==v||null===(l=v.labels)||void 0===l?void 0:l.singular_name)||"page"),help:null==o?void 0:o.help,className:"editor-page-attributes__parent",style:{lineHeight:1.3},multiple:o.multiple},"style",i),e),u=function(e){return e.children};if(null!=P&&P.length){var d=P;o.multiple||(d=[{id:0,name:"• None Selected"}].concat(x(d))),Object.assign(a,{selectedId:s,tree:d,onChange:p})}else u=c.Disabled,a.noOptionLabel="None available";return(0,r.createElement)(u,null,(0,r.createElement)(c.TreeSelect,a))}),null):(0,r.createElement)(c.Flex,{direction:"row",justify:"left",align:"center",style:o.multiple?{height:"auto",minHeight:"6em",padding:"8px"}:{}},(0,r.createElement)(c.Spinner,null),"Loading ".concat((null==v||null===(l=v.labels)||void 0===l?void 0:l.plural_name)||"pages","…")))},L=function(e){var t=Object.assign({showPostType:!0,onPostTypeChange:function(){},selectedPostType:null,onPostChange:function(){},selectedPostId:null,onPostListLoad:function(){},beginTreeFrom:null},e),n=t.showPostType,l=t.onPostTypeChange,o=t.selectedPostType,i=t.onPostChange,a=t.selectedPostId,u=t.beginTreeFrom,s=t.onPostListLoad;return(0,r.createElement)(r.Fragment,null,n&&(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(I,{selectedPostType:o,onChange:l,filter:function(e){return e.hierarchical}})),o&&(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(F,{postType:o,selectedId:a,onChange:i,beginTreeFrom:u,onLoad:s})))};function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}var z=window.wp.i18n,H=["onChange","hasFontStyles","hasFontWeights","value"],B=[{name:(0,z._x)("Regular","font style"),value:"normal"},{name:(0,z._x)("Italic","font style"),value:"italic"}],M=[{name:(0,z._x)("Thin","font weight"),value:"100"},{name:(0,z._x)("Extra Light","font weight"),value:"200"},{name:(0,z._x)("Light","font weight"),value:"300"},{name:(0,z._x)("Regular","font weight"),value:"400"},{name:(0,z._x)("Medium","font weight"),value:"500"},{name:(0,z._x)("Semi Bold","font weight"),value:"600"},{name:(0,z._x)("Bold","font weight"),value:"700"},{name:(0,z._x)("Extra Bold","font weight"),value:"800"},{name:(0,z._x)("Black","font weight"),value:"900"}];function V(e){var t=e.onChange,n=e.hasFontStyles,l=void 0===n||n,o=e.hasFontWeights,i=void 0===o||o,a=e.value,u=a.fontStyle,s=a.fontWeight,p=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,H),d=l||i,f=function(e,t){return e?t?(0,z.__)("Appearance"):(0,z.__)("Font style"):(0,z.__)("Font weight")}(l,i),m={key:"default",name:(0,z.__)("Default"),style:{fontStyle:void 0,fontWeight:void 0}},h=(0,r.useMemo)((function(){return l&&i?(e=[m],B.forEach((function(t){var n=t.name,r=t.value;M.forEach((function(t){var l=t.name,o=t.value,i="normal"===r?l:(0,z.sprintf)(/* translators: 1: Font weight name. 2: Font style name. */
(0,z.__)("%1$s %2$s"),l,n);e.push({key:"".concat(r,"-").concat(o),name:i,style:{fontStyle:r,fontWeight:o}})}))})),e):l?function(){var e=[m];return B.forEach((function(t){var n=t.name,r=t.value;e.push({key:r,name:n,style:{fontStyle:r,fontWeight:void 0}})})),e}():function(){var e=[m];return M.forEach((function(t){var n=t.name,r=t.value;e.push({key:r,name:n,style:{fontStyle:void 0,fontWeight:r}})})),e}();var e}),[e.options]),g=h.find((function(e){return e.style.fontStyle===u&&e.style.fontWeight===s}))||h[0];return d&&(0,r.createElement)(c.CustomSelectControl,D({},p,{className:"components-font-appearance-control",label:f,describedBy:g?l?i?(0,z.sprintf)(
// translators: %s: Currently selected font appearance.
(0,z.__)("Currently selected font appearance: %s"),g.name):(0,z.sprintf)(
// translators: %s: Currently selected font style.
(0,z.__)("Currently selected font style: %s"),g.name):(0,z.sprintf)(
// translators: %s: Currently selected font weight.
(0,z.__)("Currently selected font weight: %s"),g.name):(0,z.__)("No selected font appearance"),options:h,value:g,onChange:function(e){var n=e.selectedItem;return t(n.style)},__nextUnconstrainedWidth:!0}))}var W=function(e){var t,n,l,o,i,a=e.settings,u=(t={disableCustomColors:!(0,s.useSetting)("color.custom"),disableCustomGradients:!(0,s.useSetting)("color.customGradient")},n=(0,s.useSetting)("color.palette.custom"),l=(0,s.useSetting)("color.palette.theme"),o=(0,s.useSetting)("color.palette.default"),i=(0,s.useSetting)("color.defaultPalette"),t.__experimentalHasMultipleOrigins=!0,t.colors=(0,r.useMemo)((function(){var e=[];return l&&l.length&&e.push({name:(0,z._x)("Theme","Indicates this palette comes from the theme."),colors:l}),i&&o&&o.length&&e.push({name:(0,z._x)("Default","Indicates this palette comes from WordPress."),colors:o}),n&&n.length&&e.push({name:(0,z._x)("Custom","Indicates this palette comes from the theme."),colors:n}),e}),[o,l,n]),t);return(0,r.createElement)(c.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group"},a.map((function(e,t){return e&&(0,r.createElement)(c.Dropdown,{key:t,position:"bottom left",className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",renderToggle:function(t){var n,l=t.isOpen,o=t.onToggle;return(0,r.createElement)(c.__experimentalItem,{onClick:o,className:["block-editor-panel-color-gradient-settings__item",l?"is-open":""].filter((function(e){return e}))},(0,r.createElement)(c.__experimentalHStack,{justify:"flex-start"},(0,r.createElement)(c.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:null!==(n=e.gradientValue)&&void 0!==n?n:e.colorValue}),(0,r.createElement)(c.FlexItem,null,e.label)))},renderContent:function(){return(0,r.createElement)(s.__experimentalColorGradientControl,D({showTitle:!!e.label,__experimentalIsRenderedInSidebar:!0},u,e))}})})))},N=(0,r.forwardRef)((function(e,t){e.className;var n=e.children;return(0,r.createElement)("div",{className:"components-panel__row",style:{display:"block"},ref:t},n)})),U=window.lodash,R=function e(t,n,r){for(var l in t){var o;return!!n(t[l])||Array.isArray(null===(o=t[l])||void 0===o?void 0:o[r])&&e(t[l][r],n,r)}return!1};function G(){G=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,n=new WeakMap;function r(e,t,l){var o=new RegExp(e,t);return n.set(o,l||n.get(e)),P(o,r.prototype)}function l(e,t){var r=n.get(t);return Object.keys(r).reduce((function(t,n){var l=r[n];if("number"==typeof l)t[n]=e[l];else{for(var o=0;void 0===e[l[o]]&&o+1<l.length;)o++;t[n]=e[l[o]]}return t}),Object.create(null))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(r,RegExp),r.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=l(n,this);var r=n.indices;r&&(r.groups=l(r,this))}return n},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var i=n.get(this);return e[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(e,t){var n=i[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof o){var a=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!=t(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,a)),o.apply(this,e)}))}return e[Symbol.replace].call(this,r,o)},G.apply(this,arguments)}var $=function(e){var t,n,l=e.attributes,i=e.setAttributes,a=(0,_.useSelect)((function(e){return{currentPostId:e("core/editor").getCurrentPostId(),parentPostId:e("core/editor").getEditedPostAttribute("parent")}})),u=a.currentPostId,p=a.parentPostId,d=function(e){if(o.attributes.hasOwnProperty(e)&&o.attributes[e].hasOwnProperty("default"))return o.attributes[e].default},f=function(e){return!(e=Array.isArray(e)?e:[e]).some((function(e){return!(0,U.isEqual)(l[e],d(e))}))},m=function(e){e=Array.isArray(e)?e:[e];var t={};e.forEach((function(e){t[e]=d(e)})),i(t)};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.InspectorControls,{group:"settings"},(0,r.createElement)(c.__experimentalToolsPanel,{label:"Query",resetAll:function(e){e.forEach((function(e){return e()}))}},(0,r.createElement)(c.__experimentalToolsPanelItem,{hasValue:function(){return!0},label:"Parent Context",isShownByDefault:!0},(0,r.createElement)(N,null,(0,r.createElement)(L,{selectedPostType:l.postType,onPostTypeChange:function(e){i({postType:e})},selectedPostId:l.parentPostId,onPostChange:function(e){i({parentPostId:parseInt(e)})},onPostListLoad:function(e){null!=e&&e.length&&p&&void 0===l.parentPostId&&R(e,(function(e){return(null==e?void 0:e.id)===p}),"children")&&(console.debug("Setting parent",p,l.parentPostId),i({parentPostId:p}))}})),l.parentPostId!==u&&(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Include This Page's Children",help:"Applies only if the current page is a child of the selected parent.",checked:l.showCurrentChildren,onChange:function(e){return i({showCurrentChildren:e})}}))),null!==l.parentPostId&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Max Depth",hasValue:function(){return!f("maxDepth")},resetAllFilter:function(){return m(["maxDepth"])},isShownByDefault:!0},(0,r.createElement)(c.RangeControl,{label:"Maximum depth of children to display",allowReset:!0,resetFallbackValue:0,step:1,type:"stepper",withInputField:!1,marks:[{value:0,label:"All"}].concat(x([1,2,3,4,5,6].map((function(e){return{value:e,label:e}})))),value:l.maxDepth,onChange:function(e){return i({maxDepth:e})},min:0,max:6})),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Exclusions",hasValue:function(){return!f("excludeAdditionalIDs")},resetAllFilter:function(){return m(["excludeAdditionalIDs","excludeNoIndex"])},isShownByDefault:!0},(0,r.createElement)(N,null,(0,r.createElement)(F,{label:"Exclude Specific Child Pages",help:"Select multiple or deselect an item by holding\n\t\t\t\t\t\t\t\t\t\t\t\t".concat(0==((null===(t=navigator)||void 0===t||null===(t=t.userAgentData)||void 0===t?void 0:t.platform)||(null===(n=navigator)||void 0===n?void 0:n.platform)||"unknown").toUpperCase().indexOf("MAC")?"Command (⌘)":"Control","\n\t\t\t\t\t\t\t\t\t\t\t\twhile clicking."),noOptionLabel:!1,multiple:!0,postType:l.postType,parentPostId:l.parentPostId,selectedId:l.excludeAdditionalIDs,onChange:function(e){return i({excludeAdditionalIDs:e})}}),l.excludeAdditionalIDs.length>0&&(0,r.createElement)(c.TextControl,{label:"Raw excluded page IDs",value:l.excludeAdditionalIDs.join(","),onChange:function(e){var t,n,r=e.match(G(/(\d+)/,{id:1}));null!=r&&null!==(t=r.groups)&&void 0!==t&&t.id&&null!=r&&null!==(n=r.groups)&&void 0!==n&&null!==(n=n.id)&&void 0!==n&&n.length?i({excludeAdditionalIDs:r.groups.id}):i({excludeAdditionalIDs:[]})}})),(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Exclude 'noindex' Pages",help:"Automatically exclude pages marked 'noindex' in popular SEO plugins.",checked:l.excludeNoindex,onChange:function(e){return i({excludeNoindex:e})}})))))),(0,r.createElement)(s.InspectorControls,{group:"styles"},(0,r.createElement)(c.__experimentalToolsPanel,{label:"List",resetAll:function(e){return e.forEach((function(e){return e()}))}},(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"List Type",isShownByDefault:!0,hasValue:function(){return!f("displayType")},resetAllFilter:function(){return m(["displayType"])}},(0,r.createElement)(c.SelectControl,{label:"Display Type",labelPosition:"side",value:l.displayType,onChange:function(e){return i({displayType:e})},options:o.attributes.displayType.enum.map((function(e){return{value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}}))})),"plain"!==l.displayType&&(0,r.createElement)(c.__experimentalToolsPanelItem,{isShownByDefault:!0,label:"Bullet Style",hasValue:function(){f(["customBullet","bulletColor"])},resetAllFilter:function(){m(["customBullet","bulletColor"])}},"custom"==l.displayType&&(0,r.createElement)(N,null,(0,r.createElement)(c.TextControl,{label:"Custom Bullet",value:l.customBullet,style:{width:"10ch"},onChange:function(e){return i({customBullet:e.substring(0,1)})}})),(0,r.createElement)(N,null,(0,r.createElement)(W,{settings:[{label:"Bullet Color",colorValue:l.bulletColor,onColorChange:function(e){return i({bulletColor:e})}}]}))),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Item Margins",hasValue:function(){return!f(["itemMargin","childrenMargin"])},resetAllFilter:function(){m(["itemMargin","childrenMargin"])}},(0,r.createElement)(N,null,(0,r.createElement)(s.__experimentalSpacingSizesControl,{label:"Item Margin",values:l.itemMargin,onChange:function(e){return i({itemMargin:e})}})),0===l.maxDepth||l.maxDepth>1&&(0,r.createElement)(N,null,(0,r.createElement)(s.__experimentalSpacingSizesControl,{label:"Children Container Margin",values:l.childrenMargin,onChange:function(e){return i({childrenMargin:e})}})))),(0,r.createElement)(c.__experimentalToolsPanel,{label:"Links",resetAll:function(e){return e.forEach((function(e){return e()}))}},(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Link Color",hasValue:function(){return!f(["linkColor","linkColorHover"])},resetAllFilter:function(){m(["linkColor","linkColorHover"])},isShownByDefault:!0},(0,r.createElement)(N,null,(0,r.createElement)(W,{settings:[{label:"Color",colorValue:l.linkColor,onColorChange:function(e){return i({linkColor:e})}},{label:"Hover",colorValue:l.linkColorHover,onColorChange:function(e){return i({linkColorHover:e})}}]}))),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Link Underlines",hasValue:function(){return!f(["underlineLinks","underlineOnHover"])},resetAllFilter:function(){m(["underlineLinks","underlineOnHover"])},isShownByDefault:!0},(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Underline Links",checked:l.underlineLinks,onChange:function(e){return i({underlineLinks:e})}})),(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Underline Links on Hover",checked:l.underlineOnHover,onChange:function(e){return i({underlineOnHover:e})}})))),(0,r.createElement)(c.__experimentalToolsPanel,{label:"Current Page Item",resetAll:function(e){return e.forEach((function(e){return e()}))}},(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Highlight Current Page",hasValue:function(){return!f("highlightCurrent")},isShownByDefault:!0},(0,r.createElement)(c.ToggleControl,{label:"Highlight Current Page",checked:l.highlightCurrent,onChange:function(e){return i({highlightCurrent:e})}})),l.highlightCurrent&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Item Color",hasValue:function(){return!f(["currentLinkColor","currentLinkColorHover"])},resetAllFilter:function(){m(["currentLinkColor","currentLinkColorHover"])}},(0,r.createElement)(N,null,(0,r.createElement)(W,{settings:[{label:"Link Color",colorValue:l.currentLinkColor,onColorChange:function(e){return i({currentLinkColor:e})}},{label:"Hover Color",colorValue:l.currentLinkColorHover,onColorChange:function(e){return i({currentLinkColorHover:e})}}]}))),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Font Size",hasValue:function(){return!f("currentFontSize")},resetAllFilter:function(){m(["currentFontSize"])}},(0,r.createElement)(N,null,(0,r.createElement)(s.FontSizePicker,{value:l.currentFontSize,onChange:function(e){return i({currentFontSize:e})}}))),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Font Style",hasValue:function(){return!f(["currentFontStyle","currentFontWeight"])},resetAllFilter:function(){m(["currentFontStyle","currentFontWeight"])}},(0,r.createElement)(N,null,(0,r.createElement)(V,{value:{fontStyle:l.currentFontStyle,fontWeight:l.currentFontWeight},onChange:function(e){return i({currentFontStyle:e.fontStyle,currentFontWeight:e.fontWeight})}}))),(0,r.createElement)(c.__experimentalToolsPanelItem,{label:"Underlines",hasValue:function(){return!f(["currentUnderlineLinks","currentUnderlineOnHover"])},resetAllFilter:function(){m(["currentUnderlineLinks","currentUnderlineOnHover"])}},(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Underline",checked:l.currentUnderlineLinks,onChange:function(e){return i({currentUnderlineLinks:e})}})),(0,r.createElement)(N,null,(0,r.createElement)(c.ToggleControl,{label:"Underline on Hover",checked:l.currentUnderlineOnHover,onChange:function(e){return i({currentUnderlineOnHover:e})}})))))))},Q=wp.compose,q=(Q.useDebounce,Q.usePrevious,wp.element),J=(q.RawHTML,q.useEffect,q.useRef,q.useState,q.useCallback,wp.i18n),K=(J.__,J.sprintf,wp.apiFetch,wp.url.addQueryArgs,wp.components);K.Placeholder,K.Spinner,wp.blocks.getBlockType;var X=window.wp.serverSideRender,Y=e.n(X),Z=function(){return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.Spinner,null),(0,r.createElement)("small",null,"Loading Family…"))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,window.wp.blocks.registerBlockType)(o.name,te(te({},o),{},{icon:l,edit:function(e){var t=(0,s.useBlockProps)(),n=e.attributes,l=(0,_.useSelect)((function(e){return{currentPostId:e("core/editor").getCurrentPostId(),parentPostId:e("core/editor").getEditedPostAttribute("parent")}})),i=l.currentPostId,a=l.parentPostId;return(0,r.createElement)("div",t,(0,r.createElement)(s.BlockControls,null,(0,r.createElement)(C,e)),(0,r.createElement)($,e),null===n.parentPostId?(0,r.createElement)(Z,null):(0,r.createElement)(Y(),{block:o.name,attributes:n,urlQueryArgs:{"attributes[parentPostId]":void 0!==n.parentPostId?n.parentPostId:a,post_id:i}}))}}))}();