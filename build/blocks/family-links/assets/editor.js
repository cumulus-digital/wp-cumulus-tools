!function(){"use strict";var e={};function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n=window.wp.element,r={foreground:"#00588d",src:(0,n.createElement)("svg",{enableBackground:"new 0 0 40 40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m34.5 3c.6 0 1 .4 1 1v32c0 .6-.4 1-1 1h-29c-.6 0-1-.4-1-1v-32c0-.6.4-1 1-1zm0-3h-29c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h28.9c2.2 0 4-1.8 4-4v-32c0-2.2-1.7-4-3.9-4zm-3.4 9.8h-18.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h18.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-22 0h-.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.5 1.4-1.3 1.4zm22 17.4h-18.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h18.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-22 0h-.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.5 1.4-1.3 1.4zm3-11.6h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-19 5.8h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm-19 11.6h-.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h.1c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4zm19 0h-15.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4h15.2c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4z",fill:"#00588d"}))},l=JSON.parse('{"_#":"Wordpress features support","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"cumulus-gutenberg/family-links","title":"Family Links","description":"Insert links to a page\'s children or siblings","keywords":["cumulus","cmls","family","parent","child","children","siblings"],"icon":"admin-links","category":"cmls","editorScript":"file:./assets/editor.js","style":"file:./assets/editor.css","attributes":{"postType":{"type":"string"},"parentPostId":{"type":"number"},"showCurrentChildren":{"type":"boolean","default":true},"maxDepth":{"type":"integer","default":0},"excludeNoindex":{"type":"boolean","default":true},"excludeAdditionalIDs":{"type":"array","default":[]},"displayType":{"type":"string","enum":["plain","bullets","square","numbered","custom"],"default":"plain"},"customBullet":{"type":"string","default":""},"itemMargin":{"type":"object","default":{"top":null,"right":null,"bottom":null,"left":null}},"childrenMargin":{"type":"object","default":{"top":null,"right":null,"bottom":null,"left":"1em"}},"bulletColor":{"type":"string","default":null},"underlineLinks":{"type":"boolean","default":true},"underlineOnHover":{"type":"boolean","default":true},"linkColor":{"type":"string","default":null},"linkColorHover":{"type":"string","default":null},"textAlign":{"type":"string","default":null},"fontWeight":{"type":"string","default":null},"fontStyle":{"type":"string","default":null},"highlightCurrent":{"type":"boolean","default":true},"currentFontSize":{"type":"string","default":null},"currentFontWeight":{"type":"string","default":"700"},"currentFontStyle":{"type":"string","default":"normal"},"currentUnderlineLinks":{"type":"boolean","default":true},"currentUnderlineOnHover":{"type":"boolean","default":true},"currentLinkColor":{"type":"string","default":null},"currentLinkColorHover":{"type":"string","default":null}},"supports":{"_#":"Allow customizing border","anchor":true,"align":true,"alignWide":true,"className":true,"color":{"background":true,"__experimentalDuotone":false,"gradients":true,"link":false,"text":false},"customClassName":false,"defaultStylePicker":true,"html":false,"inserter":true,"multiple":true,"reusable":true,"lock":true,"spacing":{"margin":true,"padding":true,"blockGap":true},"typography":{"align":true,"fontSize":true,"lineHeight":true,"fontWeight":true,"fontStyle":true,"textTransform":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true},"border":{"color":true,"radius":true,"style":true,"width":true,"defaultControls":{"color":true,"radius":true,"style":true,"width":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}}}');function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){i=!0,l=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw l}}return o}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=window.wp.components,c=window.wp.blockEditor,s=window.wp.primitives,d=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})),p=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})),f=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),m=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"})),g=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M12.5 5L10 19h1.9l2.5-14z"}));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=wp.element,b=(v.useRef,v.useEffect),w=v.useState,E=function(e){var r,l,o,i,s,h,v,E,C,P,O=e.attributes,x=e.setAttributes,_=a(w(d),2),S=_[0],k=_[1];b((function(){var e,t,n={uppercase:p,lowercase:f};k((null==n?void 0:n[null===(e=O.style)||void 0===e||null===(t=e.typography)||void 0===t?void 0:t.textTransform])||d)}),[O.style]);var T=function(){var e,t,n,r,l,o,i,a;return(null===(e=O.style)||void 0===e||null===(t=e.typography)||void 0===t?void 0:t.fontWeight)&&((null===(n=O.style)||void 0===n||null===(r=n.typography)||void 0===r||null===(l=r.fontWeight)||void 0===l||null===(o=l.toString())||void 0===o?void 0:o.includes("bold"))||(null===(i=O.style)||void 0===i||null===(a=i.typography)||void 0===a?void 0:a.fontWeight)>500)},j=function(){var e,t;return"italic"==(null===(e=O.style)||void 0===e||null===(t=e.typography)||void 0===t?void 0:t.fontStyle)},I=function(e,n){var r,l,o=y(y({},null===(r=O.style)||void 0===r?void 0:r.typography),{},t({},e,n));n||null==o||null===(l=o.typography)||void 0===l||delete l[e],x({style:y(y({},O.style),{},{typography:o})})};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.AlignmentToolbar,{value:null===(r=O.style)||void 0===r||null===(l=r.typography)||void 0===l?void 0:l.textAlign,onChange:function(e){return x({textAlign:e})}}),(0,n.createElement)(u.ToolbarGroup,null,(0,n.createElement)(u.ToolbarDropdownMenu,{label:"Letter Case",icon:S,controls:[{title:"Normal",icon:d,isActive:!(null!==(o=O.style)&&void 0!==o&&null!==(i=o.typography)&&void 0!==i&&i.textTransform),onClick:function(){return I("textTransform",null)}},{title:"UPPERCASE",isActive:"uppercase"===(null===(s=O.style)||void 0===s||null===(h=s.typography)||void 0===h?void 0:h.textTransform),icon:p,onClick:function(){return I("textTransform","uppercase")}},{title:"Capitalize",isActive:"capitalize"===(null===(v=O.style)||void 0===v||null===(E=v.typography)||void 0===E?void 0:E.textTransform),icon:d,onClick:function(){return I("textTransform","capitalize")}},{title:"lowercase",isActive:"lowercase"===(null===(C=O.style)||void 0===C||null===(P=C.typography)||void 0===P?void 0:P.textTransform),icon:f,onClick:function(){return I("textTransform","lowercase")}}]})),(0,n.createElement)(u.ToolbarGroup,null,(0,n.createElement)(u.ToolbarButton,{icon:m,label:"Bold",isPressed:T(),onClick:function(){I("fontWeight",T()?null:700)}}),(0,n.createElement)(u.ToolbarButton,{icon:g,label:"Italic",isPressed:j(),onClick:function(){I("fontStyle",j()?null:"italic")}})))};function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}function x(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=window.wp.data,S=window.wp.htmlEntities,k=window.wp.apiFetch,T=e.n(k),j=window.wp.url,I=function(e){var t=Object.assign({selectedPostType:null,onChange:function(){},filter:!1},e),r=t.selectedPostType,l=t.onChange,o=t.filter,i="undefined"==typeof AbortController?void 0:new AbortController,c=a((0,n.useState)(!1),2),s=c[0],d=c[1],p=a((0,n.useState)(),2),f=p[0],m=p[1];(0,n.useEffect)((function(){return function(){return i.abort()}}),[]);var g=(0,_.useSelect)((function(e){return{currentPostType:e("core/editor").getCurrentPostType()}}),[]).currentPostType;(0,n.useMemo)((function(){d(!1);var e={path:(0,j.addQueryArgs)("/wp/v2/types",{context:"view"}),signal:null==i?void 0:i.signal};return T()(e).then((function(e){return m(e)})),e}),[]);var h=(0,n.useMemo)((function(){var e;if(f){var t,n=Object.values(f);o&&(n=null===(t=n)||void 0===t?void 0:t.filter(o));var r=null===(e=n)||void 0===e?void 0:e.map((function(e){return{id:e.slug,name:(0,S.decodeEntities)(e.name)}}));return d(!0),r}}),[f]);return(0,n.useEffect)((function(){if(null!=h&&h.length&&(1===h.length&&l(h[0].id),!r)){var e=h.find((function(e){return e.id===g}));null!=e&&e.id&&l(e.id)}}),[h]),(0,n.createElement)(n.Fragment,null,s?(0,n.createElement)((function(e){var t=Object.assign({label:"Post Type",style:{lineHeight:1.3}},e),o=function(e){return e.children};if(f&&h){if(1===h.length)return"Post type: ".concat(h[0].name);Object.assign(t,{selectedId:r,onChange:l,tree:h})}else o=u.Disabled,t.noOptionLabel="None available";return(0,n.createElement)(o,null,(0,n.createElement)(u.TreeSelect,t))}),null):(0,n.createElement)(u.Flex,{direction:"row",justify:"left",align:"center"},(0,n.createElement)(u.Spinner,null),"Loading post types…"))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?A(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=function(e){var r,l,o=Object.assign({label:"",help:"",noOptionLabel:null,postType:"page",parentPostId:null,selectedId:null,onChange:function(){},onLoad:function(){},multiple:!1,style:{}},e),i=o.postType,c=o.parentPostId,s=o.selectedId,d=(o.multiple,o.onChange),p=o.onLoad;if(!i)return(0,n.createElement)(n.Fragment,null);var f="undefined"==typeof AbortController?void 0:new AbortController,m=(null==f||null===(r=f.signal)||void 0===r||r.aborted,a((0,n.useState)(!1),2)),g=m[0],h=m[1],y=a((0,n.useState)(),2),v=y[0],b=y[1],w=a((0,n.useState)(),2),E=w[0],C=w[1];(0,n.useEffect)((function(){return function(){return f.abort()}}),[]),(0,n.useMemo)((function(){var e={path:(0,j.addQueryArgs)("/wp/v2/types/".concat(i),{context:"view"}),signal:null==f?void 0:f.signal};return i&&(h(!1),T()(e).then((function(e){e.hierarchical&&b(e)}))),e}),[i]),(0,n.useMemo)((function(){if(v){var e={type:null==v?void 0:v.slug,per_page:-1,_fields:"id,title,parent",context:"view"},t={path:(0,j.addQueryArgs)("/cumulus-gutenberg-family-links/v1/children-of/".concat(c||0),e),signal:null==f?void 0:f.signal};h(!1),T()(t).then((function(e){C(e)}))}}),[v,c]);var P=(0,n.useMemo)((function(){var e;return null!=E&&E.length&&(e=function(e){var t=e.map((function(e){return L({children:[],parent:null},e)})),n=t.reduce((function(e,t){return e[t.parent]||(e[t.parent]=[]),e[t.parent].push(t),e}),{});if(n.null&&n.null.length)return t;var r=function e(t){return t.map((function(t){var r=n[t.id];return L(L({},t),{},{children:r&&r.length?e(r):[]})}))};return n[0]?r(n[0]):Object.values(n).length?r(Object.values(n)[0]):[]}(null==E?void 0:E.map((function(e){var t,n;if(null!=e&&e.id)return{id:e.id,parent:e.parent,name:(t=e,null!=t&&null!==(n=t.title)&&void 0!==n&&n.rendered?(0,S.decodeEntities)(t.title.rendered):"#".concat(t.id," (","n",")"))}})).filter(Boolean)),h(!0)),{childPageOptions:e}}),[E]).childPageOptions;return(0,n.useEffect)((function(){p(P)}),[P]),(0,n.createElement)(n.Fragment,null,g?(0,n.createElement)((function(e){var r,l,i=Object.assign(o.multiple&&null!=P&&P.length?{height:"auto",minHeight:"6em",padding:"8px"}:{},o.style);o.noOptionLabel||"No ".concat((null==v||null===(r=v.labels)||void 0===r?void 0:r.singular_name)||"page"," selected"),o.noOptionLabel;var a=Object.assign(t({label:o.label||"Select a ".concat((null==v||null===(l=v.labels)||void 0===l?void 0:l.singular_name)||"page"),help:null==o?void 0:o.help,className:"editor-page-attributes__parent",style:{lineHeight:1.3},multiple:o.multiple},"style",i),e),c=function(e){return e.children};if(null!=P&&P.length){var p=P;o.multiple||(p=[{id:0,name:"• None Selected"}].concat(x(p))),Object.assign(a,{selectedId:s,tree:p,onChange:d})}else c=u.Disabled,a.noOptionLabel="None available";return(0,n.createElement)(c,null,(0,n.createElement)(u.TreeSelect,a))}),null):(0,n.createElement)(u.Flex,{direction:"row",justify:"left",align:"center",style:o.multiple?{height:"auto",minHeight:"6em",padding:"8px"}:{}},(0,n.createElement)(u.Spinner,null),"Loading ".concat((null==v||null===(l=v.labels)||void 0===l?void 0:l.plural_name)||"pages","…")))},D=function(e){var t=Object.assign({showPostType:!0,onPostTypeChange:function(){},selectedPostType:null,onPostChange:function(){},selectedPostId:null,onPostListLoad:function(){},beginTreeFrom:null},e),r=t.showPostType,l=t.onPostTypeChange,o=t.selectedPostType,i=t.onPostChange,a=t.selectedPostId,c=t.beginTreeFrom,s=t.onPostListLoad;return(0,n.createElement)(n.Fragment,null,r&&(0,n.createElement)(u.PanelRow,null,(0,n.createElement)(I,{selectedPostType:o,onChange:l,filter:function(e){return e.hierarchical}})),o&&(0,n.createElement)(u.PanelRow,null,(0,n.createElement)(F,{postType:o,selectedId:a,onChange:i,beginTreeFrom:c,onLoad:s})))},M=window.wp.i18n,z=[{name:(0,M._x)("Regular","font style"),value:"normal"},{name:(0,M._x)("Italic","font style"),value:"italic"}],H=[{name:(0,M._x)("Thin","font weight"),value:"100"},{name:(0,M._x)("Extra Light","font weight"),value:"200"},{name:(0,M._x)("Light","font weight"),value:"300"},{name:(0,M._x)("Regular","font weight"),value:"400"},{name:(0,M._x)("Medium","font weight"),value:"500"},{name:(0,M._x)("Semi Bold","font weight"),value:"600"},{name:(0,M._x)("Bold","font weight"),value:"700"},{name:(0,M._x)("Extra Bold","font weight"),value:"800"},{name:(0,M._x)("Black","font weight"),value:"900"}];function B(e){var t=e.onChange,r=e.hasFontStyles,l=void 0===r||r,o=e.hasFontWeights,i=void 0===o||o,a=e.value,c=a.fontStyle,s=a.fontWeight,d=l||i,p=function(e,t){return e?t?(0,M.__)("Appearance"):(0,M.__)("Font style"):(0,M.__)("Font weight")}(l,i),f={key:"default",name:(0,M.__)("Default"),style:{fontStyle:void 0,fontWeight:void 0}},m=(0,n.useMemo)((function(){return l&&i?(e=[f],z.forEach((function(t){var n=t.name,r=t.value;H.forEach((function(t){var l=t.name,o=t.value,i="normal"===r?l:(0,M.sprintf)(
/* translators: 1: Font weight name. 2: Font style name. */
(0,M.__)("%1$s %2$s"),l,n);e.push({key:"".concat(r,"-").concat(o),name:i,style:{fontStyle:r,fontWeight:o}})}))})),e):l?function(){var e=[f];return z.forEach((function(t){var n=t.name,r=t.value;e.push({key:r,name:n,style:{fontStyle:r,fontWeight:void 0}})})),e}():function(){var e=[f];return H.forEach((function(t){var n=t.name,r=t.value;e.push({key:r,name:n,style:{fontStyle:void 0,fontWeight:r}})})),e}();var e}),[e.options]),g=m.find((function(e){return e.style.fontStyle===c&&e.style.fontWeight===s}))||m[0];return d&&(0,n.createElement)(u.CustomSelectControl,{className:"components-font-appearance-control",label:p,describedBy:g?l?i?(0,M.sprintf)(// translators: %s: Currently selected font appearance.
(0,M.__)("Currently selected font appearance: %s"),g.name):(0,M.sprintf)(// translators: %s: Currently selected font style.
(0,M.__)("Currently selected font style: %s"),g.name):(0,M.sprintf)(// translators: %s: Currently selected font weight.
(0,M.__)("Currently selected font weight: %s"),g.name):(0,M.__)("No selected font appearance"),options:m,value:g,onChange:function(e){var n=e.selectedItem;return t(n.style)}})}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}var V=function(e){var t,r,l,o,i,a=e.settings,s=(t={disableCustomColors:!(0,c.useSetting)("color.custom"),disableCustomGradients:!(0,c.useSetting)("color.customGradient")},r=(0,c.useSetting)("color.palette.custom"),l=(0,c.useSetting)("color.palette.theme"),o=(0,c.useSetting)("color.palette.default"),i=(0,c.useSetting)("color.defaultPalette"),t.__experimentalHasMultipleOrigins=!0,t.colors=(0,n.useMemo)((function(){var e=[];return l&&l.length&&e.push({name:(0,M._x)("Theme","Indicates this palette comes from the theme."),colors:l}),i&&o&&o.length&&e.push({name:(0,M._x)("Default","Indicates this palette comes from WordPress."),colors:o}),r&&r.length&&e.push({name:(0,M._x)("Custom","Indicates this palette comes from the theme."),colors:r}),e}),[o,l,r]),t);return(0,n.createElement)(u.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group"},a.map((function(e,t){return e&&(0,n.createElement)(u.Dropdown,{key:t,position:"bottom left",className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",renderToggle:function(t){var r,l=t.isOpen,o=t.onToggle;return(0,n.createElement)(u.__experimentalItem,{onClick:o,className:["block-editor-panel-color-gradient-settings__item",l?"is-open":""].filter((function(e){return e}))},(0,n.createElement)(u.__experimentalHStack,{justify:"flex-start"},(0,n.createElement)(u.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:null!==(r=e.gradientValue)&&void 0!==r?r:e.colorValue}),(0,n.createElement)(u.FlexItem,null,e.label)))},renderContent:function(){return(0,n.createElement)(c.__experimentalColorGradientControl,N({showTitle:!!e.label,__experimentalIsRenderedInSidebar:!0},s,e))}})})))},W=(0,n.forwardRef)((function(e,t){e.className;var r=e.children;return(0,n.createElement)("div",{className:"components-panel__row",style:{display:"block"},ref:t},r)})),R=window.lodash,U=function e(t,n,r){for(var l in t){var o;return!!n(t[l])||Array.isArray(null===(o=t[l])||void 0===o?void 0:o[r])&&e(t[l][r],n,r)}return!1};function G(){G=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,l){var o=new RegExp(e,r);return t.set(o,l||t.get(e)),P(o,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return O(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=r(n,this)),n},n.prototype[Symbol.replace]=function(n,l){if("string"==typeof l){var o=t.get(this);return e[Symbol.replace].call(this,n,l.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof l){var i=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=C(e[e.length-1])&&(e=[].slice.call(e)).push(r(e,i)),l.apply(this,e)}))}return e[Symbol.replace].call(this,n,l)},G.apply(this,arguments)}var Q=function(e){var t,r,o,i,a,s,d,p,f,m,g,h=e.attributes,y=e.setAttributes,v=(0,_.useSelect)((function(e){return{currentPostId:e("core/editor").getCurrentPostId(),parentPostId:e("core/editor").getEditedPostAttribute("parent")}})),b=v.currentPostId,w=v.parentPostId,E=function(e){if(l.attributes.hasOwnProperty(e)&&l.attributes[e].hasOwnProperty("default"))return l.attributes[e].default},C=function(e){return!(e=Array.isArray(e)?e:[e]).some((function(e){return!(0,R.isEqual)(h[e],E(e))}))},P=function(e){e=Array.isArray(e)?e:[e];var t={};e.forEach((function(e){t[e]=E(e)})),y(t)};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.__experimentalToolsPanel,{label:"Query",resetAll:function(e){e.forEach((function(e){return e()}))}},(0,n.createElement)(u.__experimentalToolsPanelItem,{hasValue:function(){return!0},label:"Parent Context",isShownByDefault:!0},(0,n.createElement)(D,{selectedPostType:h.postType,onPostTypeChange:function(e){y({postType:e})},selectedPostId:h.parentPostId,onPostChange:function(e){y({parentPostId:parseInt(e)})},onPostListLoad:function(e){null!=e&&e.length&&w&&void 0===h.parentPostId&&U(e,(function(e){return(null==e?void 0:e.id)===w}),"children")&&(console.debug("Setting parent",w,h.parentPostId),y({parentPostId:w}))}}),h.parentPostId!==b&&(0,n.createElement)(W,null,(0,n.createElement)(u.Flex,{direction:"column"},(0,n.createElement)("p",null,"If the ",(0,n.createElement)("strong",null,"current page")," is in the parent context's hierarchy:"),(0,n.createElement)(u.ToggleControl,{label:"Include This Page's Children",checked:h.showCurrentChildren,onChange:function(e){return y({showCurrentChildren:e})}})))),null!==h.parentPostId&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"Max Depth",hasValue:function(){return!C("maxDepth")},resetAllFilter:function(){return P(["maxDepth"])},isShownByDefault:!0},(0,n.createElement)(u.RangeControl,{label:"Maximum depth of children to display",allowReset:!0,resetFallbackValue:0,step:1,type:"stepper",withInputField:!1,marks:[{value:0,label:"All"}].concat(x([1,2,3,4,5,6].map((function(e){return{value:e,label:e}})))),value:h.maxDepth,onChange:function(e){return y({maxDepth:e})},min:0,max:6})),(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"Exclusions",hasValue:function(){return!C("excludeAdditionalIDs")},resetAllFilter:function(){return P(["excludeAdditionalIDs","excludeNoIndex"])},isShownByDefault:!0},(0,n.createElement)(F,{label:"Exclude Specific Child Pages",help:"Select multiple or deselect an item by holding\n\t\t\t\t\t\t\t\t\t\t\t\t".concat(0==((null===(t=navigator)||void 0===t||null===(r=t.userAgentData)||void 0===r?void 0:r.platform)||(null===(o=navigator)||void 0===o?void 0:o.platform)||"unknown").toUpperCase().indexOf("MAC")?"Command (⌘)":"Control","\n\t\t\t\t\t\t\t\t\t\t\t\twhile clicking."),noOptionLabel:!1,multiple:!0,postType:h.postType,parentPostId:h.parentPostId,selectedId:h.excludeAdditionalIDs,onChange:function(e){return y({excludeAdditionalIDs:e})}}),h.excludeAdditionalIDs.length>0&&(0,n.createElement)(u.TextControl,{label:"Raw excluded page IDs",value:h.excludeAdditionalIDs.join(","),onChange:function(e){var t,n,r,l=e.match(G(/(\d+)/,{id:1}));null!=l&&null!==(t=l.groups)&&void 0!==t&&t.id&&null!=l&&null!==(n=l.groups)&&void 0!==n&&null!==(r=n.id)&&void 0!==r&&r.length?y({excludeAdditionalIDs:l.groups.id}):y({excludeAdditionalIDs:[]})}}),(0,n.createElement)(u.ToggleControl,{label:"Automatically exclude pages marked 'noindex' in popular SEO plugins.",checked:h.excludeNoindex,onChange:function(e){return y({excludeNoindex:e})}})))),(0,n.createElement)(u.__experimentalToolsPanel,{label:"List Style",resetAll:function(e){return e.forEach((function(e){return e()}))}},(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"List Type",isShownByDefault:!0,hasValue:function(){return!C("displayType")},resetAllFilter:function(){return P(["displayType"])}},(0,n.createElement)(u.SelectControl,{label:"Display Type",labelPosition:"side",value:h.displayType,onChange:function(e){return y({displayType:e})},options:l.attributes.displayType.enum.map((function(e){return{value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}}))})),"plain"!==h.displayType&&(0,n.createElement)(u.__experimentalToolsPanelItem,{isShownByDefault:!0,label:"Bullet Style",hasValue:function(){return!C(["customBullet","bulletColor"])},resetAllFilter:function(){return P(["customBullet","bulletColor"])}},"custom"==h.displayType&&(0,n.createElement)(W,null,(0,n.createElement)(u.TextControl,{label:"Custom Bullet",value:h.customBullet,style:{width:"10ch"},onChange:function(e){return y({customBullet:e.substring(0,1)})}})),(0,n.createElement)(W,null,(0,n.createElement)(V,{settings:[{label:"Bullet Color",colorValue:h.bulletColor,onColorChange:function(e){return y({bulletColor:e})}}]}))),(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"Item Margins",hasValue:function(){return!C(["itemMargin","childrenMargin"])},resetAllFilter:function(){return P(["itemMargin","childrenMargin"])}},(0,n.createElement)(W,null,(0,n.createElement)(u.__experimentalBoxControl,{label:"Item Margin",values:{top:null===(i=h.itemMargin)||void 0===i?void 0:i.top,right:null===(a=h.itemMargin)||void 0===a?void 0:a.right,bottom:null===(s=h.itemMargin)||void 0===s?void 0:s.bottom,left:null===(d=h.itemMargin)||void 0===d?void 0:d.left},onChange:function(e){return y({itemMargin:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(u.__experimentalBoxControl,{label:"Children Container Margin",values:{top:null===(p=h.childrenMargin)||void 0===p?void 0:p.top,right:null===(f=h.childrenMargin)||void 0===f?void 0:f.right,bottom:null===(m=h.childrenMargin)||void 0===m?void 0:m.bottom,left:null===(g=h.childrenMargin)||void 0===g?void 0:g.left},onChange:function(e){return y({childrenMargin:e})}})))),(0,n.createElement)(u.__experimentalToolsPanel,{label:"Link Styles",resetAll:function(e){return e.forEach((function(e){return e()}))}},(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"All Links",hasValue:function(){return!C(["linkColor","linkColorHover","underlineLinks","underlineOnHover"])},resetAllFilter:function(){return P(["linkColor","linkColorHover","underlineLinks","underlineOnHover"])}},(0,n.createElement)(W,null,(0,n.createElement)(u.ToggleControl,{label:"Underline Links",checked:h.underlineLinks,onChange:function(e){return y({underlineLinks:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(u.ToggleControl,{label:"Underline Links on Hover",checked:h.underlineOnHover,onChange:function(e){return y({underlineOnHover:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(V,{settings:[{label:"Link Color",colorValue:h.linkColor,onColorChange:function(e){return y({linkColor:e})}},{label:"Hover Color",colorValue:h.linkColorHover,onColorChange:function(e){return y({linkColorHover:e})}}]}))),(0,n.createElement)(u.__experimentalToolsPanelItem,{label:"Current Page",hasValue:function(){return!C(["highlightCurrent","currentFontSize","currentFontWeight","currentFontStyle","currentLinkColor","currentUnderlineLinks","currentLinkColorHover","currentUnderlineOnHover"])},resetAllFilter:function(){return P(["highlightCurrent","currentFontSize","currentFontWeight","currentFontStyle","currentLinkColor","currentUnderlineLinks","currentLinkColorHover","currentUnderlineOnHover"])}},(0,n.createElement)("h3",null,"Current Page Highlight"),(0,n.createElement)(u.ToggleControl,{label:"Highlight Current Page",checked:h.highlightCurrent,onChange:function(e){return y({highlightCurrent:e})}}),h.highlightCurrent&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(W,null,(0,n.createElement)(c.FontSizePicker,{label:"Current Page Font Size",value:h.currentFontSize,onChange:function(e){return y({currentFontSize:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(B,{value:{fontStyle:h.currentFontStyle,fontWeight:h.currentFontWeight},onChange:function(e){return y({currentFontStyle:e.fontStyle,currentFontWeight:e.fontWeight})}})),(0,n.createElement)(W,null,(0,n.createElement)(u.ToggleControl,{label:"Underline Current Page Link",checked:h.currentUnderlineLinks,onChange:function(e){return y({currentUnderlineLinks:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(u.ToggleControl,{label:"Underline Current Page Link on Hover",checked:h.currentUnderlineOnHover,onChange:function(e){return y({currentUnderlineOnHover:e})}})),(0,n.createElement)(W,null,(0,n.createElement)(V,{settings:[{label:"Link Color",colorValue:h.currentLinkColor,onColorChange:function(e){return y({currentLinkColor:e})}},{label:"Hover Color",colorValue:h.currentLinkColorHover,onColorChange:function(e){return y({currentLinkColorHover:e})}}]}))))))};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?$(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=wp.compose,K=J.useDebounce,X=J.usePrevious,Y=wp.element,Z=Y.RawHTML,ee=Y.useEffect,te=Y.useRef,ne=Y.useState,re=Y.useCallback,le=wp.i18n,__=le.__,oe=le.sprintf,ie=wp.apiFetch,ae=wp.url.addQueryArgs,ue=wp.components,ce=ue.Placeholder,se=ue.Spinner,de=wp.blocks.getBlockType;function pe(e){var t=e.className;return(0,n.createElement)(ce,{className:t},__("Block rendered as empty."))}function fe(e){var t=e.response,r=e.className,l=oe(// translators: %s: error message describing the problem
__("Error loading block: %s"),t.errorMsg);return(0,n.createElement)(ce,{className:r},l)}function me(e){var t=e.attributes,r=e.block,l=e.className,o=e.httpMethod,i=void 0===o?"GET":o,u=e.urlQueryArgs,c=e.onChange,s=e.onError,d=e.EmptyResponsePlaceholder,p=void 0===d?pe:d,f=e.ErrorResponsePlaceholder,m=void 0===f?fe:f,g=te(!0),h=te(),y=a(ne(null),2),v=y[0],b=y[1],w=a(ne(null),2),E=w[0],C=w[1],P=a(ne(!1),2),O=P[0],x=P[1],_=X(e),S=re((function(){if(g.current){null!==v&&(C(v),b(null));var e=t&&function(e,t){var n=de(e);if(void 0===n)throw new Error("Block type '".concat(e,"' is not registered."));return Object.entries(n.attributes).reduce((function(e,n){var r=a(n,2),l=r[0],o=r[1],i=t[l];return void 0!==i?e[l]=i:o.hasOwnProperty("default")&&(e[l]=o.default),-1!==["node","children"].indexOf(o.soource)&&("string"==typeof e[l]?e[l]=[e[l]]:Array.isArray(e[l])||(e[l]=[])),e}),{})}(r,t),n="POST"===i,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return ae("/wp/v2/block-renderer/".concat(e),q(q({context:"edit"},null!==t?{attributes:t}:{}),n))}(r,n?null:null!=e?e:null,u),o=n?{attributes:null!=e?e:null}:null,d=function(e){return g.current&&e===h.current};return x(!0),h.current=ie({path:l,data:o,method:n?"POST":"GET"}).then((function(e){d&&e&&b(e.rendered)})).then((function(){c&&c()})).finally((function(){x(!1)})).catch((function(e){d&&(b({error:!0,errorMsg:e.message}),s&&s(e))}))}})),k=K(S,100,{leading:!0,trailing:!0});ee((function(){return function(){g.current=!1}}),[]),ee((function(){void 0===_?S():(0,R.isEqual)(_.attributes,e.attributes)||k()}),[e.attributes]);var T=e.LoadingResponsePlaceholder?e.LoadingResponsePlaceholder:(0,n.createElement)(se,null);return""===v?(0,n.createElement)(p,e):!v||O?E?(0,n.createElement)("div",{style:{position:"relative"}},(0,n.createElement)("div",{style:{position:"absolute",top:0,right:0}},(0,n.createElement)(se,null)),(0,n.createElement)(Z,{className:l},E)):(0,n.createElement)(T,null):v.error?(0,n.createElement)(m,N({response:v},e)):(0,n.createElement)(Z,{className:l},v)}var ge=function(){return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.Spinner,null),(0,n.createElement)("small",null,"Loading Family…"))};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?he(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,window.wp.blocks.registerBlockType)(l.name,ye(ye({},l),{},{icon:r,edit:function(e){var t=(0,c.useBlockProps)(),r=e.attributes,o=(0,_.useSelect)((function(e){return{currentPostId:e("core/editor").getCurrentPostId(),parentPostId:e("core/editor").getEditedPostAttribute("parent")}})),i=o.currentPostId,a=o.parentPostId;return(0,n.createElement)("div",t,(0,n.createElement)(c.BlockControls,null,(0,n.createElement)(E,e)),(0,n.createElement)(c.InspectorControls,null,(0,n.createElement)(Q,e)),null===r.parentPostId?(0,n.createElement)(ge,null):(0,n.createElement)(me,{block:l.name,attributes:r,urlQueryArgs:{"attributes[parentPostId]":void 0!==r.parentPostId?r.parentPostId:a,post_id:i},LoadingResponsePlaceholder:ge}))}}))}();