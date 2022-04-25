!function(){"use strict";var e=window.wp.element,t="#00588d",r={foreground:t,src:(0,e.createElement)("svg",{enableBackground:"new 0 0 20 20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"m18.58 0h-17.16c-.78 0-1.42.64-1.42 1.42v17.15c0 .79.64 1.43 1.42 1.43h17.15c.79 0 1.42-.64 1.42-1.42v-17.16c.01-.78-.63-1.42-1.41-1.42zm-9.38 17.77c0 .43-.35.78-.78.78h-6.19c-.43 0-.78-.35-.78-.78v-6.19c0-.43.35-.78.78-.78h6.19c.43 0 .78.35.78.78zm9.35 0c0 .43-.35.78-.78.78h-6.19c-.43 0-.78-.35-.78-.78v-6.19c0-.43.35-.78.78-.78h6.19c.43 0 .78.35.78.78zm0-9.47c0 .43-.35.78-.78.78h-15.54c-.43 0-.78-.35-.78-.78v-6.07c0-.43.35-.78.78-.78h15.54c.43 0 .78.35.78.78z",fill:"#00588d"}))},n=JSON.parse('{"u2":"cumulus-gutenberg/big-feature"}');function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=JSON.parse('{"_#":"Wordpress features support","apiVersion":2,"keywords":["cumulus","cmls","feature","panel","hero"],"icon":"star-filled","category":"cmls","attributes":{},"supports":{"_#":"Allow customizing border","anchor":false,"align":false,"alignWide":false,"className":true,"color":{"background":false,"__experimentalDuotone":false,"gradients":false,"link":false,"text":false},"customClassName":false,"defaultStylePicker":false,"html":false,"inserter":false,"multiple":true,"reusable":true,"lock":true,"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"align":false,"fontSize":false,"lineHeight":false,"fontWeight":false,"fontStyle":false,"textTransform":false,"__experimentalFontWeight":false,"__experimentalFontStyle":false,"__experimentalTextTransform":false},"border":{"color":false,"radius":false,"style":false,"width":false,"defaultControls":{"color":false,"radius":false,"style":false,"width":false}},"__experimentalBorder":{"color":false,"radius":false,"style":false,"width":false,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}}}'),u={className:"g-bf-column"},c=window.wp.blockEditor,m=[{save:function(t){var r=c.useBlockProps.save({className:"g-bf-container"});return(0,e.createElement)("ul",r,(0,e.createElement)(c.InnerBlocks.Content,null))}}],f=window.wp.blocks;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,f.registerBlockType)("cumulus-gutenberg/big-feature-column",d(d({},s),{},{title:"Big Feature Column",description:"Column within a Big Feature",keywords:[].concat(i(s.keywords),["feature","box","column"]),parent:["cumulus-gutenberg/big-feature"],icon:{src:"columns",foreground:t},edit:function(t){var r=(0,c.useBlockProps)(u),n=(0,c.useInnerBlocksProps)({title:"Big Feature Column"},{template:[["cumulus-gutenberg/big-feature-square",{className:"g-bf-big"}],["cumulus-gutenberg/big-feature-small-cluster"]],templateLock:!1});return(0,e.createElement)("ul",r,n.children)},save:function(){var t=c.useBlockProps.save(u);return(0,e.createElement)("ul",t,(0,e.createElement)(c.InnerBlocks.Content,null))},deprecated:m}));var g=JSON.parse('{"_#":"Wordpress features support","apiVersion":2,"name":"cumulus-gutenberg/big-feature-square","title":"Big Feature Square","description":"Image container within a Big Feature","keywords":["cumulus","cmls","feature","panel","hero","bo","image"],"icon":"star-filled","category":"cmls","parent":["cumulus-gutenberg/big-feature-column","cumulus-gutenberg/big-feature-small-cluster"],"attributes":{"mediaUrl":{"type":"string","source":"attribute","selector":"img","attribute":"src","default":"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},"mediaId":{"type":"integer"},"mediaDimensions":{"type":"object","default":{"width":null,"height":null}},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"href":{"type":"string","source":"attribute","selector":"a","attribute":"href","default":null},"linkTarget":{"type":"string","source":"attribute","selector":"a","attribute":"target"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel"}},"supports":{"_#":"Allow customizing border","anchor":false,"align":false,"alignWide":false,"className":true,"color":{"background":false,"__experimentalDuotone":false,"gradients":false,"link":false,"text":false},"customClassName":false,"defaultStylePicker":false,"html":false,"inserter":false,"multiple":true,"reusable":true,"lock":true,"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"align":false,"fontSize":false,"lineHeight":false,"fontWeight":false,"fontStyle":false,"textTransform":false,"__experimentalFontWeight":false,"__experimentalFontStyle":false,"__experimentalTextTransform":false},"border":{"color":false,"radius":false,"style":false,"width":false,"defaultControls":{"color":false,"radius":false,"style":false,"width":false}},"__experimentalBorder":{"color":false,"radius":false,"style":false,"width":false,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}}}');function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],_n=!0,i=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);_n=!0);}catch(e){i=!0,l=e}finally{try{_n||null==r.return||r.return()}finally{if(i)throw l}}return a}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=window.wp.url,w=function(e){var t=(0,y.getAuthority)(e);return t&&t.toLowerCase().includes(window.location.host.toLowerCase())?((0,y.getPathAndQueryString)(e)||"")+((0,y.getFragment)(e)||""):e},v=function(e){var t,r,n,l,a,i=(null==e||null===(t=e.sizes)||void 0===t||null===(r=t.full)||void 0===r?void 0:r.url)||(null==e||null===(n=e.media_details)||void 0===n||null===(l=n.sizes)||void 0===l||null===(a=l.full)||void 0===a?void 0:a.source_url),o=null==e?void 0:e.alt;return{mediaUrl:w(i||e.url),mediaId:e.id,alt:o||"",mediaDimensions:{width:e.width,height:e.height}}},E=function(e,t){return!(!g.attributes[t].hasOwnProperty("default")||e[t]!=g.attributes[t].default)},k=window.wp.primitives,A=(0,e.createElement)(k.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(k.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),O=window.wp.components,P=window.wp.dom,T=function(t){var r=t.attributes,n=t.setAttributes;return(0,e.createElement)(c.MediaUploadCheck,null,(0,e.createElement)(c.MediaUpload,b({title:"Big Feature Square",label:"Square Image",type:"image",allowedTypes:["image"],value:r.mediaId,onSelect:function(e){n(v(e))}},t)))},S=function(t){var r=t.attributes,n=t.setAttributes;return(0,e.createElement)(c.MediaReplaceFlow,{mediaId:r.mediaId,mediaURL:r.mediaUrl,allowedTypes:["image"],accept:"image/*",onSelect:function(e){n(v(e))},label:"Replace image",title:"Replace image",showTooltip:!0,name:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(O.Icon,{icon:A}),"Replace")})},x=function(t){var r=t.attributes,n=t.setAttributes;return(0,e.createElement)(O.TextControl,{label:"Image Alt Attribute",help:(0,e.createElement)(e.Fragment,null,!r.alt&&(0,e.createElement)("strong",{style:{color:"red",fontStyle:"italic"}},"Alt attributes are ",(0,e.createElement)("u",null,"necessary")," for SEO and accessibility!"),(0,e.createElement)(e.Fragment,null," "),"This should be the name of the show you're featuring or some other short, text interpretation of the image/link."),value:r.alt,onChange:function(e){return n({alt:e})}})},B=function(t){var r=t.attributes,n=t.setAttributes;return(0,e.createElement)(c.__experimentalLinkControl,{searchInputPlaceholder:"Search here…",value:{url:r.href,title:r.alt,opensInNewTab:"_blank"===r.linkTarget,useTitleAsAlt:!0},settings:[{id:"opensInNewTab",title:"Open in a new tab"},{id:"useTitleAsAlt",title:'Use Post Title as "alt" attribute'}],onChange:function(e){n({href:w(e.url),alt:e.useTitleAsAlt?e.title:r.alt,linkTarget:e.opensInNewTab?"_blank":"_self",rel:e.opensInNewTab?"noopener":""})},onRemove:function(){return n({href:null,linkTarget:null,rel:null})}})},C=(0,e.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(k.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),j=(0,e.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(k.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),I=function(t){var r=t.attributes,n=t.setAttributes,l=(0,e.createElement)(O.Icon,{icon:"warning",style:{color:"red"}});return(0,e.createElement)(c.BlockControls,null,!E(r,"mediaUrl")&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(O.ToolbarGroup,null,(0,e.createElement)(S,{attributes:r,setAttributes:n})),(0,e.createElement)(O.ToolbarGroup,null,(0,e.createElement)(O.Dropdown,{headerTitle:"Alt Attribute",contentClassNAme:"is-alternate",renderToggle:function(t){var n=t.isOpen,a=t.onToggle;return(0,e.createElement)(O.ToolbarButton,{icon:r.alt?"awards":l,label:r.alt?'Change "alt" attribute':'Set an "alt" attribute!',name:"Alt",title:r.alt?'Change "alt" attribute':'Set an "alt" attribute!',isActive:!!r.alt,showTooltip:!0,"aria-expanded":n,"aria-haspopup":!0,onClick:a})},renderContent:function(){return(0,e.createElement)("div",{style:{minWidth:"250px",paddingTop:"6px",paddingRight:"16px",paddingLeft:"16px"}},(0,e.createElement)(x,{attributes:r,setAttributes:n}))}})),(0,e.createElement)(O.ToolbarGroup,null,(0,e.createElement)(O.Dropdown,{headerTitle:"Link",renderToggle:function(t){var n=t.isOpen,l=t.onToggle;return(0,e.createElement)(e.Fragment,null,!r.href&&(0,e.createElement)(O.ToolbarButton,{name:"link",icon:C,title:"Set a link",onClick:l,"aria-expanded":n,"aria-haspopup":!0,showTooltip:!0}),r.href&&(0,e.createElement)(O.ToolbarButton,{name:"link",icon:j,title:"Change link",onClick:l,isActive:!0,"aria-expanded":n,"aria-haspopup":!0,showTooltip:!0}))},renderContent:function(){return(0,e.createElement)(B,{attributes:r,setAttributes:n})}}))))},_=function(t){var r=t.attributes,n=t.setAttributes,l=t.alerts;return(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(O.Panel,null,(0,e.createElement)(O.PanelBody,null,l&&l.length?(0,e.createElement)(O.PanelRow,null,(0,e.createElement)("div",{style:{display:"block",position:"relative",width:"100%"}},(0,e.createElement)("ul",{style:{margin:"0 0 0 2ch",listStyle:"square"}},l.map((function(t,r){return(0,e.createElement)("li",{key:r,style:{color:"red"}},t)}))))):null,E(r,"mediaUrl")?(0,e.createElement)(c.MediaPlaceholder,{icon:A,accept:"image/*",allowedTypes:["image"],onSelect:function(e){n(v(e))}}):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(O.PanelRow,{title:"Link"},r.href?(0,e.createElement)(O.Flex,null,(0,e.createElement)(O.FlexItem,null,(0,e.createElement)(O.ExternalLink,{href:r.href,style:{display:"block"}},(0,P.__unstableStripHTML)(r.alt||r.href)),(0,e.createElement)("span",{style:{color:"#757575",fontSize:"0.9em",lineHeight:1.3,wordBreak:"break-all"}},(0,y.filterURLForDisplay)((0,y.safeDecodeURI)(r.href),16)||"")),(0,e.createElement)(O.FlexItem,{style:{minWidth:"32px"}},(0,e.createElement)(O.Dropdown,{headerTitle:"Set a link",renderToggle:function(t){var r=t.isOpen,n=t.onToggle;return(0,e.createElement)(O.Button,{isPrimary:!0,icon:j,onClick:n,"aria-expanded":r,"aria-haspopup":!0})},renderContent:function(){return(0,e.createElement)(B,{attributes:r,setAttributes:n})}}))):(0,e.createElement)(O.Dropdown,{headerTitle:"Set a link",renderToggle:function(t){var r=t.isOpen,n=t.onToggle;return(0,e.createElement)(O.Button,{isPrimary:!0,icon:C,onClick:n,"aria-expanded":r,"aria-haspopup":!0},"Set a link")},renderContent:function(){return(0,e.createElement)(B,{attributes:r,setAttributes:n})}})),(0,e.createElement)("hr",{style:{width:"100%"}}),(0,e.createElement)(O.PanelRow,{style:{display:"block"}},(0,e.createElement)(x,{attributes:r,setAttributes:n})),(0,e.createElement)(O.PanelRow,null,(0,e.createElement)(T,{attributes:r,setAttributes:n,render:function(t){var l=t.open;return(0,e.createElement)(O.Flex,{direction:"column"},(0,e.createElement)("div",null,(0,e.createElement)("img",{src:r.mediaUrl,width:"100%",onClick:l})),(0,e.createElement)(O.Flex,{direction:"row"},(0,e.createElement)(O.Button,{className:"button button-large",onClick:l},"Replace Image"),(0,e.createElement)(O.Button,{className:"button button-large",onClick:function(){!function(e){var t=e.attributes,r=e.setAttributes,n={};for(var l in t)n[l]=g.attributes[l].default;r(n)}({attributes:r,setAttributes:n})}},"Remove")))}}))))))};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,f.registerBlockType)(g.name,F(F({},g),{},{icon:{src:"format-image",foreground:t},edit:function(t){var r=t.attributes,n=(t.setAttributes,h((0,e.useState)([]),2)),l=n[0],a=n[1],i=h((0,e.useState)([]),2),o=i[0],s=i[1],u=h((0,e.useState)([]),2),m=u[0],f=u[1];(0,e.useEffect)((function(){if(E(r,"mediaUrl"))a(["is-placeholder"]);else{var t=[],n=[],l=[];E(r,"href")?(t.push("is-unlinked"),n.push("Needs a link."),l.push((0,e.createElement)(O.Icon,{key:"1",icon:"editor-unlink"}))):t.push("is-linked"),E(r,"alt")&&(t.push("is-inaccessable"),n.push('Needs an "alt" attribute.'),l.push((0,e.createElement)(O.Icon,{key:"2",icon:"warning"}))),E(r,"mediaDimensions")||r.mediaDimensions.width===r.mediaDimensions.height||(t.push("is-not-square"),n.push("Is not square."),l.push((0,e.createElement)(O.Icon,{key:"3",icon:"image-crop"}))),t.length&&(a(t),s(n),f(l))}}),[r]);var p=(0,c.useBlockProps)({className:l,title:o.join("\n")});return(0,e.createElement)("li",p,(0,e.createElement)(I,t),(0,e.createElement)(_,b({},t,{alerts:o})),E(r,"mediaUrl")?(0,e.createElement)(T,b({},t,{render:function(t){var n=t.open;return(0,e.createElement)("img",{className:"g-bf-placeholder",src:r.mediaUrl,alt:"Click to add an image",title:"Click to add an image",onClick:n,style:{cursor:"pointer"}})}})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("img",{src:r.mediaUrl,alt:r.alt}),m.length?(0,e.createElement)("div",{className:"g-bf-notice-icons"},m):null))},save:function(t){var r=t.attributes,n=c.useBlockProps.save();return r.mediaUrl&&!E(r,"mediaUrl")?(0,e.createElement)("li",n,(0,e.createElement)((function(t){if(t.href){var r={href:t.href};return t.linkTarget&&(r.target=t.linkTarget),t.rel&&(r.rel=t.rel),(0,e.createElement)("a",r,t.children)}return(0,e.createElement)(e.Fragment,null,null==t?void 0:t.children)}),r,(0,e.createElement)("img",{src:r.mediaUrl,alt:r.alt}))):(0,e.createElement)("li",n)}}));var N={className:"g-bf-cluster"};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,f.registerBlockType)("cumulus-gutenberg/big-feature-small-cluster",U(U({},s),{},{title:"Big Feature Small Cluster",description:"Cluster of small boxes in a Big Feature Column",keywords:[].concat(i(s.keywords),["box"]),parent:["cumulus-gutenberg/big-feature-column"],icon:{src:"columns",foreground:t},edit:function(t){var r=(0,c.useBlockProps)(N),n=(0,c.useInnerBlocksProps)({},{orientation:"horizontal",template:[["cumulus-gutenberg/big-feature-square",{className:"g-bf-small"}],["cumulus-gutenberg/big-feature-square",{className:"g-bf-small"}]],templateLock:!1});return(0,e.createElement)("li",r,(0,e.createElement)("ul",null,n.children))},save:function(t){var r=c.useBlockProps.save(N);return(0,e.createElement)("li",r,(0,e.createElement)("ul",null,(0,e.createElement)(c.InnerBlocks.Content,null)))}}));var z={className:"g-big-feature"};(0,f.registerBlockType)(n.u2,{icon:r,edit:function(t){var r=(0,c.useBlockProps)(z),n=(0,c.useInnerBlocksProps)({},{template:[["cumulus-gutenberg/big-feature-column"],["cumulus-gutenberg/big-feature-column"],["cumulus-gutenberg/big-feature-column"]],templateLock:!1});return(0,e.createElement)("section",r,n.children)},save:function(){var t=c.useBlockProps.save(z);return(0,e.createElement)("section",t,(0,e.createElement)(c.InnerBlocks.Content,null))}})}();