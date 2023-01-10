!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r=window.wp.element,l={foreground:"#00588d",src:(0,r.createElement)("svg",{enableBackground:"new 0 0 40 40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("g",{fill:"#00588d"},(0,r.createElement)("path",{d:"m34.88.16h-29.76c-1.66 0-3 1.34-3 3v2.34 5.33 26c0 1.66 1.34 3 3 3h29.77c1.66 0 3-1.34 3-3v-26-5.33-2.34c-.01-1.65-1.35-3-3.01-3zm.13 6.84c0 .55-.45 1-1 1h-5.71c-.55 0-1-.45-1-1s.45-1 1-1h5.71c.55 0 1 .45 1 1zm-1.71 29.84h-26.6c-1.11 0-2-.87-2-1.95v-21.09c.14.02.28.04.42.04h29.77c.15 0 .28-.02.42-.04v21.09c0 1.08-.9 1.95-2.01 1.95z"}),(0,r.createElement)("path",{d:"m31.07 20.53h-22.14c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h22.15c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.43 1.42z"}),(0,r.createElement)("path",{d:"m20.32 26.53h-11.39c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h11.39c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42z"}),(0,r.createElement)("path",{d:"m27.49 32.53h-18.56c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h18.56c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42z"})))},a=JSON.parse('{"u2":"cumulus-gutenberg/collapsable-group"}');function c(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=JSON.parse('{"_#":"Wordpress features support","apiVersion":2,"keywords":["cumulus","cmls","group","stick","sticky","mobile"],"icon":"star-filled","category":"cmls","parent":["cumulus-gutenberg/collapsable-group"],"attributes":{},"supports":{"_#":"Allow customizing border","align":true,"alignWide":false,"className":true,"color":{"background":true,"__experimentalDuotone":false,"gradients":true,"link":true,"text":true},"customClassName":false,"defaultStylePicker":true,"html":false,"inserter":false,"multiple":true,"reusable":false,"lock":true,"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"align":true,"fontSize":true,"lineHeight":true,"fontWeight":true,"fontStyle":true,"textTransform":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true},"border":false,"__experimentalBorder":false}}'),s=window.wp.blocks,u=window.wp.blockEditor,d=window.wp.data;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b.apply(this,arguments)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,s.registerBlockType)("cumulus-gutenberg/collapsable-group-header",m(m({},i),{},{icon:{foreground:"#00588d",src:"heading"},name:"cumulus-gutenberg/collapsable-group-header",title:"Collapsable Group Header",description:"Header for a collapsable group.",keywords:[].concat(c(i.keywords),["header"]),attributes:{bodyId:{type:"string",source:"attribute",selector:"header",attribute:"aria-controls"},mobileExpandIcon:{type:"string"}},usesContext:["cmls-collapse-group/bodyId","cmls-collapse-group/mobileExpandIcon"],edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.context,l=e.clientId;(0,r.useEffect)((function(){var e={};t.bodyId!==o["cmls-collapse-group/bodyId"]&&(e.bodyId=o["cmls-collapse-group/bodyId"]),t.mobileExpandIcon!==o["cmls-collapse-group/mobileExpandIcon"]&&(e.mobileExpandIcon=o["cmls-collapse-group/mobileExpandIcon"]),Object.values(e).length&&n(e)}),[o["cmls-collapse-group/bodyId"],o["cmls-collapse-group/mobileExpandIcon"]]);var a=(0,d.useSelect)((function(e){var t=e("core/block-editor").getBlockParentsByBlockName(l,"cumulus-gutenberg/collapsable-group");if(t){var n=e("core/block-editor").getBlocksByClientId(t[t.length-1]);if(n&&n.length){var o=n[0].innerBlocks.filter((function(e){return"cumulus-gutenberg/collapsable-group-body"===(null==e?void 0:e.name)}));if(o&&o.length)return o[o.length-1].clientId}}return null}),[]),c=(0,u.useBlockProps)({"aria-controls":"block-".concat(a)});return(0,r.createElement)("header",c,(0,r.createElement)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-content"},(0,r.createElement)(u.InnerBlocks,{template:[["core/heading",{level:2,style:{typography:{fontStyle:"normal",fontWeight:"400"}},fontSize:"normal"}]],templateLock:!1})),(0,r.createElement)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-icon","data-icon":t.mobileExpandIcon},(0,r.createElement)("span",null)))},save:function(e){var t=e.attributes,n=u.useBlockProps.save({"aria-controls":t.bodyId});return(0,r.createElement)("header",n,(0,r.createElement)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-content"},(0,r.createElement)(u.InnerBlocks.Content,null)),(0,r.createElement)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-icon","data-icon":t.mobileExpandIcon},(0,r.createElement)("span",null)))}})),(0,s.registerBlockType)("cumulus-gutenberg/collapsable-group-body",f(f({},i),{},{icon:{foreground:"#00588d",src:"format-aside"},name:"cumulus-gutenberg/collapsable-group-body",title:"Collapsable Group Body",description:"Body for a collapsable group.",keywords:[].concat(c(i.keywords),["body"]),attributes:{anchor:{type:"string",source:"attribute",selector:"div.wp-block-cumulus-gutenberg-collapsable-group-body",attribute:"id"}},usesContext:["cmls-collapse-group/bodyId"],edit:function(e){var t=e.context,n=e.attributes,o=e.setAttributes;(0,r.useEffect)((function(){n.anchor!==t["cmls-collapse-group/bodyId"]&&o({anchor:t["cmls-collapse-group/bodyId"]})}),[t["cmls-collapse-group/bodyId"]]);var l=(0,u.useBlockProps)();return(0,r.createElement)("div",b({},l,{"data-anchor":t["cmls-collapse-group/bodyId"]}),(0,r.createElement)(u.InnerBlocks,{template:[["core/paragraph"]],templateLock:!1,__experimentalDirectInsert:!0,__experimentalDefaultBlock:"core/paragraph"}))},save:function(e){var t=e.attributes,n=u.useBlockProps.save({id:t.anchor});return(0,r.createElement)("div",n,(0,r.createElement)(u.InnerBlocks.Content,null))}}));var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+c(Array(12)).map((function(){return Math.random().toString(32)[2]})).join("")},h=window.wp.i18n,v=window.wp.components,k=function(e){var t,n,o,l,a,c=e.settings,i=(t={disableCustomColors:!(0,u.useSetting)("color.custom"),disableCustomGradients:!(0,u.useSetting)("color.customGradient")},n=(0,u.useSetting)("color.palette.custom"),o=(0,u.useSetting)("color.palette.theme"),l=(0,u.useSetting)("color.palette.default"),a=(0,u.useSetting)("color.defaultPalette"),t.__experimentalHasMultipleOrigins=!0,t.colors=(0,r.useMemo)((function(){var e=[];return o&&o.length&&e.push({name:(0,h._x)("Theme","Indicates this palette comes from the theme."),colors:o}),a&&l&&l.length&&e.push({name:(0,h._x)("Default","Indicates this palette comes from WordPress."),colors:l}),n&&n.length&&e.push({name:(0,h._x)("Custom","Indicates this palette comes from the theme."),colors:n}),e}),[l,o,n]),t);return(0,r.createElement)(v.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group"},c.map((function(e,t){return e&&(0,r.createElement)(v.Dropdown,{key:t,position:"bottom left",className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",renderToggle:function(t){var n,o=t.isOpen,l=t.onToggle;return(0,r.createElement)(v.__experimentalItem,{onClick:l,className:["block-editor-panel-color-gradient-settings__item",o?"is-open":""].filter((function(e){return e}))},(0,r.createElement)(v.__experimentalHStack,{justify:"flex-start"},(0,r.createElement)(v.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:null!==(n=e.gradientValue)&&void 0!==n?n:e.colorValue}),(0,r.createElement)(v.FlexItem,null,e.label)))},renderContent:function(){return(0,r.createElement)(u.__experimentalColorGradientControl,b({showTitle:!!e.label,__experimentalIsRenderedInSidebar:!0},i,e))}})})))},E=(0,r.forwardRef)((function(e,t){e.className;var n=e.children;return(0,r.createElement)("div",{className:"components-panel__row",style:{display:"block"},ref:t},n)}));function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t,n,r,l,a,c,i,s,u,d,p,m,b={"--padding-top":null==e||null===(t=e.style)||void 0===t||null===(n=t.spacing)||void 0===n||null===(r=n.padding)||void 0===r?void 0:r.top,"--padding-right":null==e||null===(l=e.style)||void 0===l||null===(a=l.spacing)||void 0===a||null===(c=a.padding)||void 0===c?void 0:c.right,"--padding-bottom":null==e||null===(i=e.style)||void 0===i||null===(s=i.spacing)||void 0===s||null===(u=s.padding)||void 0===u?void 0:u.bottom,"--padding-left":null==e||null===(d=e.style)||void 0===d||null===(p=d.spacing)||void 0===p||null===(m=p.padding)||void 0===m?void 0:m.left,"--separator-color":null==e?void 0:e.separatorColor};return e.borderColor&&(b.borderColor=e.borderColor),e.hasStickyPosition&&Object.assign(b,{"--sticky-position":null==e?void 0:e.stickyPosition,"--sticky-zindex":null==e?void 0:e.stickyZIndex}),e.mobileExpandIconColor&&(b["--mobile-expand-icon-color"]=null==e?void 0:e.mobileExpandIconColor),Object.keys(b).filter((function(e){return null!=b[e]&&null!=b[e]})).reduce((function(e,t){return O(O({},e),{},o({},t,b[t]))}),{})},C=function(e){var t={};return null!=e&&e.hasStickyPosition&&(t["sticky-desktop-container"]=null==e?void 0:e.stickyDesktopContainer,t["sticky-mobile-container"]=null==e?void 0:e.stickyMobileContainer),Object.keys(t).filter((function(e){return null!=t[e]&&null!=t[e]})).reduce((function(e,n){return O(O({},e),{},o({},"data-".concat(n),t[n]))}),{})},I=function(e){return[null!=e&&e.collapseOnMobile?"has-collapse-on-mobile":null,null!=e&&e.alwaysShowHeader?"has-always-show-header":null,null!=e&&e.hasStickyPosition?"has-sticky-position":null,null!=e&&e.hasOnlyStickOnMobile?"has-only-stick-on-mobile":null].filter((function(e){return e})).join(" ")},x={section:"The <section> element should represent a standalone portion of the document that can't be better represented by another element.",aside:"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."};(0,s.registerBlockType)(a.u2,{icon:l,providesContext:{"cmls-collapse-group/bodyId":"bodyId","cmls-collapse-group/mobileExpandIcon":"mobileExpandIcon"},edit:function(e){var n,l,a=e.attributes,c=e.setAttributes,i=a.tagName,s=void 0===i?"div":i,d=(n=(0,r.useState)(S(a)),l=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,_x,l,a=[],_n=!0,c=!1;try{if(_x=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;_n=!1}else for(;!(_n=(o=_x.call(n)).done)&&(a.push(o.value),a.length!==t);_n=!0);}catch(e){c=!0,r=e}finally{try{if(!_n&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw r}}return a}}(n,l)||t(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=d[0],m=d[1],b="web"===r.Platform.OS;(0,r.useMemo)((function(){(!a.blockId||document.querySelectorAll("#"+a.blockId).length>1)&&window._wpLoadBlockEditor.then((function(){!function(e){var t,n,r=Object.assign({prefix:"",attributes:{},setAttributes:function(){},attribute:"bodyId"},e);if(null===(t=r.attributes)||void 0===t||!t.bodyId||r.attributes.bodyId&&(null===(n=window.document.querySelectorAll('[data-anchor="'.concat(r.attributes.bodyId,'"],#').concat(r.attributes.bodyId)))||void 0===n?void 0:n.length)>1){for(var l=y(r.prefix);window.document.querySelector('[data-anchor="'.concat(l,"],#").concat(l));)l=y(r.prefix);r.setAttributes(o({},r.attribute,l))}r.attributes.bodyId}({prefix:"cgcg-",attributes:a,setAttributes:c,attribute:"bodyId"})}))}),[]),(0,r.useMemo)((function(){m(S(a))}),[a]),(0,r.useMemo)((function(){a.className!==I(a)&&c({className:I(a)})}),[a]);var g=(0,u.useBlockProps)(O(O({className:I(a)},C(a)),{},{style:p}));return(0,r.createElement)(s,g,(0,r.createElement)(u.InspectorControls,null,(0,r.createElement)(v.Panel,null,(0,r.createElement)(v.PanelBody,{title:"Collapse"},(0,r.createElement)(E,null,(0,r.createElement)(v.ToggleControl,{label:"Collapse on Mobile",checked:a.collapseOnMobile,onChange:function(e){return c({collapseOnMobile:e})}})),(0,r.createElement)(E,null,(0,r.createElement)(v.ToggleControl,{label:"Show Header on Desktop",checked:a.alwaysShowHeader,onChange:function(e){return c({alwaysShowHeader:e})}})),(a.collapseOnMobile||a.alwaysShowHeader)&&(0,r.createElement)(E,null,(0,r.createElement)(k,{settings:[{label:"Header Separator",colorValue:a.separatorColor,onColorChange:function(e){return c({separatorColor:e})}}]})),a.collapseOnMobile&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(E,null,(0,r.createElement)(v.SelectControl,{label:"Expand Icon",value:a.mobileExpandIcon,options:[{value:"plus",label:"Plus/Minus"},{value:"arrows",label:"Arrows"}],onChange:function(e){return c({mobileExpandIcon:e})}})),(0,r.createElement)(E,null,(0,r.createElement)(k,{settings:[{label:"Icon Color",colorValue:a.mobileExpandIconColor,onColorChange:function(e){return c({mobileExpandIconColor:e})}}]})))),(0,r.createElement)(v.PanelBody,{title:"Sticky Position"},(0,r.createElement)(E,null,(0,r.createElement)(v.ToggleControl,{label:"Stick Scroll Position",help:"Element will 'stick' within its boundary on desktop and mobile.",checked:a.hasStickyPosition,onChange:function(e){return c({hasStickyPosition:e})}})),a.hasStickyPosition&&(0,r.createElement)(r.Fragment,null,!a.backgroundColor&&(0,r.createElement)("p",null,(0,r.createElement)("strong",null,"Note: "),"Set a background color on this block when using sticky position so content underneath it does not show through!"),(0,r.createElement)(E,null,(0,r.createElement)(v.ToggleControl,{label:"Only Stick on Mobile",checked:a.hasOnlyStickOnMobile,onChange:function(e){return c({hasOnlyStickOnMobile:e})}})),(0,r.createElement)(E,null,(0,r.createElement)(v.TextControl,{label:"Sticky Position",help:(0,r.createElement)(r.Fragment,null,"Accepts any valid CSS"," ",(0,r.createElement)("em",null,"value"),". Relative to the boundary container's top. Default setting accounts for masthead height in the Cumulus Wordpress theme."),value:a.stickyPosition,onChange:function(e){return c({stickyPosition:e})}})),(0,r.createElement)(E,null,(0,r.createElement)(v.TextControl,{label:"Sticky Z-Index",help:"Z-Index to apply when stuck.",value:a.stickyZIndex,onChange:function(e){return c({stickyZIndex:e})}})),(0,r.createElement)("h3",null,"Boundary Containers"),(0,r.createElement)("p",null,"The block's stickiness will be contained to the specified containers. The boundary must be a container of this block. If no selector is defined, the document body will be used."),(0,r.createElement)("p",null,"Containers between the boundary and this block which have position may break the boundary!",b&&(0,r.createElement)(v.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#positioning_contexts",style:{display:"block",marginTop:"8px"}},"Learn more about position context")),(0,r.createElement)(v.TextControl,{label:"Desktop Container",help:(0,r.createElement)(r.Fragment,null,"Accepts any valid CSS"," ",(0,r.createElement)("em",null,"selector"),"."),value:a.stickyDesktopContainer,onChange:function(e){return c({stickyDesktopContainer:e})}}),(0,r.createElement)(v.TextControl,{label:"Mobile Container",help:(0,r.createElement)(r.Fragment,null,"Accepts any valid CSS"," ",(0,r.createElement)("em",null,"selector"),"."),value:a.stickyMobileContainer,onChange:function(e){return c({stickyMobileContainer:e})}}))))),(0,r.createElement)(u.InspectorAdvancedControls,null,(0,r.createElement)(v.SelectControl,{label:"HTML element",options:[{label:"Default (<div>)",value:"div"},{label:"<section>",value:"section"},{label:"<aside>",value:"aside"}],value:s,onChange:function(e){return c({tagName:e})},help:x[s]})),(0,r.createElement)(u.InnerBlocks,{template:[["cumulus-gutenberg/collapsable-group-header"],["cumulus-gutenberg/collapsable-group-body",{anchor:a.bodyId}]],templateLock:!1}))},save:function(e){var t=e.attributes,n=t.tagName,o=void 0===n?"div":n,l=u.useBlockProps.save(O(O({className:I(t)},C(t)),{},{style:S(t)}));return(0,r.createElement)(o,l,(0,r.createElement)(u.InnerBlocks.Content,null))}})}();