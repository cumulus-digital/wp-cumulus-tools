!function(){"use strict";var e=window.ReactJSXRuntime,o={foreground:"#00588d",src:(0,e.jsx)("svg",{enableBackground:"new 0 0 40 40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsxs)("g",{fill:"#00588d",children:[(0,e.jsx)("path",{d:"m34.88.16h-29.76c-1.66 0-3 1.34-3 3v2.34 5.33 26c0 1.66 1.34 3 3 3h29.77c1.66 0 3-1.34 3-3v-26-5.33-2.34c-.01-1.65-1.35-3-3.01-3zm.13 6.84c0 .55-.45 1-1 1h-5.71c-.55 0-1-.45-1-1s.45-1 1-1h5.71c.55 0 1 .45 1 1zm-1.71 29.84h-26.6c-1.11 0-2-.87-2-1.95v-21.09c.14.02.28.04.42.04h29.77c.15 0 .28-.02.42-.04v21.09c0 1.08-.9 1.95-2.01 1.95z"}),(0,e.jsx)("path",{d:"m31.07 20.53h-22.14c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h22.15c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.43 1.42z"}),(0,e.jsx)("path",{d:"m20.32 26.53h-11.39c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h11.39c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42z"}),(0,e.jsx)("path",{d:"m27.49 32.53h-18.56c-.78 0-1.42-.64-1.42-1.42s.64-1.42 1.42-1.42h18.56c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42z"})]})})},t=JSON.parse('{"UU":"cumulus-gutenberg/collapsable-group"}'),l=JSON.parse('{"_#":"Wordpress features support","apiVersion":2,"keywords":["cumulus","cmls","group","stick","sticky","mobile"],"icon":"star-filled","category":"cmls","parent":["cumulus-gutenberg/collapsable-group"],"attributes":{},"supports":{"_#":"Allow customizing border","align":true,"alignWide":false,"className":true,"color":{"background":true,"__experimentalDuotone":false,"gradients":true,"link":true,"text":true},"customClassName":false,"defaultStylePicker":true,"html":false,"inserter":false,"multiple":true,"reusable":false,"lock":true,"spacing":{"margin":false,"padding":false,"blockGap":false},"typography":{"align":true,"fontSize":true,"lineHeight":true,"fontWeight":true,"fontStyle":true,"textTransform":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true},"border":false,"__experimentalBorder":false}}'),s=window.wp.blocks,n=window.wp.blockEditor,r=window.wp.element,a=window.wp.data;(0,s.registerBlockType)("cumulus-gutenberg/collapsable-group-header",{...l,icon:{foreground:"#00588d",src:"heading"},name:"cumulus-gutenberg/collapsable-group-header",title:"Collapsable Group Header",description:"Header for a collapsable group.",keywords:[...l.keywords,"header"],attributes:{bodyId:{type:"string",source:"attribute",selector:"header",attribute:"aria-controls"},mobileExpandIcon:{type:"string"}},usesContext:["cmls-collapse-group/bodyId","cmls-collapse-group/mobileExpandIcon"],edit:o=>{const{attributes:t,setAttributes:l,context:s,clientId:i}=o;(0,r.useEffect)((()=>{const e={};t.bodyId!==s["cmls-collapse-group/bodyId"]&&(e.bodyId=s["cmls-collapse-group/bodyId"]),t.mobileExpandIcon!==s["cmls-collapse-group/mobileExpandIcon"]&&(e.mobileExpandIcon=s["cmls-collapse-group/mobileExpandIcon"]),Object.values(e).length&&l(e)}),[s["cmls-collapse-group/bodyId"],s["cmls-collapse-group/mobileExpandIcon"]]);const c=(0,a.useSelect)((e=>{const o=e("core/block-editor").getBlockParentsByBlockName(i,"cumulus-gutenberg/collapsable-group");if(o){const t=e("core/block-editor").getBlocksByClientId(o[o.length-1]);if(t&&t.length){const e=t[0].innerBlocks.filter((e=>"cumulus-gutenberg/collapsable-group-body"===e?.name));if(e&&e.length)return e[e.length-1].clientId}}return null}),[]),d=(0,n.useBlockProps)({"aria-controls":`block-${c}`});return(0,e.jsxs)("header",{...d,children:[(0,e.jsx)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-content",children:(0,e.jsx)(n.InnerBlocks,{template:[["core/heading",{level:2,style:{typography:{fontStyle:"normal",fontWeight:"400"}},fontSize:"normal"}]],templateLock:!1})}),(0,e.jsx)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-icon","data-icon":t.mobileExpandIcon,children:(0,e.jsx)("span",{})})]})},save:o=>{const{attributes:t}=o,l=n.useBlockProps.save({"aria-controls":t.bodyId});return(0,e.jsxs)("header",{...l,children:[(0,e.jsx)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-content",children:(0,e.jsx)(n.InnerBlocks.Content,{})}),(0,e.jsx)("div",{className:"wp-block-cumulus-gutenberg-collapsable-group-header-icon","data-icon":t.mobileExpandIcon,children:(0,e.jsx)("span",{})})]})}}),(0,s.registerBlockType)("cumulus-gutenberg/collapsable-group-body",{...l,icon:{foreground:"#00588d",src:"format-aside"},name:"cumulus-gutenberg/collapsable-group-body",title:"Collapsable Group Body",description:"Body for a collapsable group.",keywords:[...l.keywords,"body"],attributes:{anchor:{type:"string",source:"attribute",selector:"div.wp-block-cumulus-gutenberg-collapsable-group-body",attribute:"id"}},usesContext:["cmls-collapse-group/bodyId"],edit:o=>{const{context:t,attributes:l,setAttributes:s}=o;(0,r.useEffect)((()=>{l.anchor!==t["cmls-collapse-group/bodyId"]&&s({anchor:t["cmls-collapse-group/bodyId"]})}),[t["cmls-collapse-group/bodyId"]]);const a=(0,n.useBlockProps)();return(0,e.jsx)("div",{...a,"data-anchor":t["cmls-collapse-group/bodyId"],children:(0,e.jsx)(n.InnerBlocks,{template:[["core/paragraph"]],templateLock:!1,directInsert:!0,defaultBlock:"core/paragraph"})})},save:o=>{const{attributes:t}=o,l=n.useBlockProps.save({id:t.anchor});return(0,e.jsx)("div",{...l,children:(0,e.jsx)(n.InnerBlocks.Content,{})})}});const i=(e="")=>e+[...Array(12)].map((()=>Math.random().toString(32)[2])).join("");var c=window.wp.i18n,d=window.wp.components,u=o=>{const{settings:t}=o,l=(()=>{const e={disableCustomColors:!(0,n.useSetting)("color.custom"),disableCustomGradients:!(0,n.useSetting)("color.customGradient")},o=(0,n.useSetting)("color.palette.custom"),t=(0,n.useSetting)("color.palette.theme"),l=(0,n.useSetting)("color.palette.default"),s=(0,n.useSetting)("color.defaultPalette");return e.__experimentalHasMultipleOrigins=!0,e.colors=(0,r.useMemo)((()=>{const e=[];return t&&t.length&&e.push({name:(0,c._x)("Theme","Indicates this palette comes from the theme."),colors:t}),s&&l&&l.length&&e.push({name:(0,c._x)("Default","Indicates this palette comes from WordPress."),colors:l}),o&&o.length&&e.push({name:(0,c._x)("Custom","Indicates this palette comes from the theme."),colors:o}),e}),[l,t,o]),e})();return(0,e.jsx)(d.__experimentalItemGroup,{isBordered:!0,isSeparated:!0,className:"block-editor-panel-color-gradient-settings__item-group",children:t.map(((o,t)=>o&&(0,e.jsx)(d.Dropdown,{position:"bottom left",className:"block-editor-panel-color-gradient-settings__dropdown",contentClassName:"block-editor-panel-color-gradient-settings__dropdown-content",renderToggle:({isOpen:t,onToggle:l})=>{var s;return(0,e.jsx)(d.__experimentalItem,{onClick:l,className:["block-editor-panel-color-gradient-settings__item",t?"is-open":""].filter((e=>e)),children:(0,e.jsxs)(d.__experimentalHStack,{justify:"flex-start",children:[(0,e.jsx)(d.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:null!==(s=o.gradientValue)&&void 0!==s?s:o.colorValue}),(0,e.jsx)(d.FlexItem,{children:o.label})]})})},renderContent:()=>(0,e.jsx)(n.__experimentalColorGradientControl,{showTitle:!!o.label,__experimentalIsRenderedInSidebar:!0,...l,...o})},t)))})},p=(0,r.forwardRef)((({className:o,children:t},l)=>(0,e.jsx)("div",{className:"components-panel__row",style:{display:"block"},ref:l,children:t})));const b=e=>{const o={"--padding-top":e?.style?.spacing?.padding?.top,"--padding-right":e?.style?.spacing?.padding?.right,"--padding-bottom":e?.style?.spacing?.padding?.bottom,"--padding-left":e?.style?.spacing?.padding?.left,"--separator-color":e?.separatorColor};return e.borderColor&&(o.borderColor=e.borderColor),e.hasStickyPosition&&Object.assign(o,{"--sticky-position":e?.stickyPosition,"--sticky-zindex":e?.stickyZIndex}),e.mobileExpandIconColor&&(o["--mobile-expand-icon-color"]=e?.mobileExpandIconColor),Object.keys(o).filter((e=>null!=o[e]&&null!=o[e])).reduce(((e,t)=>({...e,[t]:o[t]})),{})},h=e=>{const o={};return e?.hasStickyPosition&&(o["sticky-desktop-container"]=e?.stickyDesktopContainer,o["sticky-mobile-container"]=e?.stickyMobileContainer),Object.keys(o).filter((e=>null!=o[e]&&null!=o[e])).reduce(((e,t)=>({...e,[`data-${t}`]:o[t]})),{})},g=e=>[e?.collapseOnMobile?"has-collapse-on-mobile":null,e?.alwaysShowHeader?"has-always-show-header":null,e?.hasStickyPosition?"has-sticky-position":null,e?.hasOnlyStickOnMobile?"has-only-stick-on-mobile":null].filter((e=>e)).join(" "),m={section:"The <section> element should represent a standalone portion of the document that can't be better represented by another element.",aside:"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."};(0,s.registerBlockType)(t.UU,{icon:o,providesContext:{"cmls-collapse-group/bodyId":"bodyId","cmls-collapse-group/mobileExpandIcon":"mobileExpandIcon"},edit:o=>{const{attributes:t,setAttributes:l}=o,{tagName:s="div"}=t,[a,c]=(0,r.useState)(b(t)),x="web"===r.Platform.OS;(0,r.useMemo)((()=>{(!t.blockId||document.querySelectorAll("#"+t.blockId).length>1)&&window._wpLoadBlockEditor.then((()=>{(e=>{const o=Object.assign({prefix:"",attributes:{},setAttributes:()=>{},attribute:"bodyId"},e);if(!o.attributes?.bodyId||o.attributes.bodyId&&window.document.querySelectorAll(`[data-anchor="${o.attributes.bodyId}"],#${o.attributes.bodyId}`)?.length>1){let e=i(o.prefix);for(;window.document.querySelector(`[data-anchor="${e}],#${e}`);)e=i(o.prefix);o.setAttributes({[o.attribute]:e})}o.attributes.bodyId})({prefix:"cgcg-",attributes:t,setAttributes:l,attribute:"bodyId"})}))}),[]),(0,r.useMemo)((()=>{c(b(t))}),[t]),(0,r.useMemo)((()=>{t.className!==g(t)&&l({className:g(t)})}),[t]);const y=(0,n.useBlockProps)({className:g(t),...h(t),style:a});return(0,e.jsxs)(s,{...y,children:[(0,e.jsx)(n.InspectorControls,{children:(0,e.jsxs)(d.Panel,{children:[(0,e.jsxs)(d.PanelBody,{title:"Collapse",children:[(0,e.jsx)(p,{children:(0,e.jsx)(d.ToggleControl,{label:"Collapse on Mobile",checked:t.collapseOnMobile,onChange:e=>l({collapseOnMobile:e})})}),(0,e.jsx)(p,{children:(0,e.jsx)(d.ToggleControl,{label:"Show Header on Desktop",checked:t.alwaysShowHeader,onChange:e=>l({alwaysShowHeader:e})})}),(t.collapseOnMobile||t.alwaysShowHeader)&&(0,e.jsx)(p,{children:(0,e.jsx)(u,{settings:[{label:"Header Separator",colorValue:t.separatorColor,onColorChange:e=>l({separatorColor:e})}]})}),t.collapseOnMobile&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{children:(0,e.jsx)(d.SelectControl,{label:"Expand Icon",value:t.mobileExpandIcon,options:[{value:"plus",label:"Plus/Minus"},{value:"arrows",label:"Arrows"}],onChange:e=>l({mobileExpandIcon:e})})}),(0,e.jsx)(p,{children:(0,e.jsx)(u,{settings:[{label:"Icon Color",colorValue:t.mobileExpandIconColor,onColorChange:e=>l({mobileExpandIconColor:e})}]})})]})]}),(0,e.jsxs)(d.PanelBody,{title:"Sticky Position",children:[(0,e.jsx)(p,{children:(0,e.jsx)(d.ToggleControl,{label:"Stick Scroll Position",help:"Element will 'stick' within its boundary on desktop and mobile.",checked:t.hasStickyPosition,onChange:e=>l({hasStickyPosition:e})})}),t.hasStickyPosition&&(0,e.jsxs)(e.Fragment,{children:[!t.backgroundColor&&(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"Note: "}),"Set a background color on this block when using sticky position so content underneath it does not show through!"]}),(0,e.jsx)(p,{children:(0,e.jsx)(d.ToggleControl,{label:"Only Stick on Mobile",checked:t.hasOnlyStickOnMobile,onChange:e=>l({hasOnlyStickOnMobile:e})})}),(0,e.jsx)(p,{children:(0,e.jsx)(d.TextControl,{label:"Sticky Position",help:(0,e.jsxs)(e.Fragment,{children:["Accepts any valid CSS"," ",(0,e.jsx)("em",{children:"value"}),". Relative to the boundary container's top. Default setting accounts for masthead height in the Cumulus Wordpress theme."]}),value:t.stickyPosition,onChange:e=>l({stickyPosition:e})})}),(0,e.jsx)(p,{children:(0,e.jsx)(d.TextControl,{label:"Sticky Z-Index",help:"Z-Index to apply when stuck.",value:t.stickyZIndex,onChange:e=>l({stickyZIndex:e})})}),(0,e.jsx)("h3",{children:"Boundary Containers"}),(0,e.jsx)("p",{children:"The block's stickiness will be contained to the specified containers. The boundary must be a container of this block. If no selector is defined, the document body will be used."}),(0,e.jsxs)("p",{children:["Containers between the boundary and this block which have position may break the boundary!",x&&(0,e.jsx)(d.ExternalLink,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#positioning_contexts",style:{display:"block",marginTop:"8px"},children:"Learn more about position context"})]}),(0,e.jsx)(d.TextControl,{label:"Desktop Container",help:(0,e.jsxs)(e.Fragment,{children:["Accepts any valid CSS"," ",(0,e.jsx)("em",{children:"selector"}),"."]}),value:t.stickyDesktopContainer,onChange:e=>l({stickyDesktopContainer:e})}),(0,e.jsx)(d.TextControl,{label:"Mobile Container",help:(0,e.jsxs)(e.Fragment,{children:["Accepts any valid CSS"," ",(0,e.jsx)("em",{children:"selector"}),"."]}),value:t.stickyMobileContainer,onChange:e=>l({stickyMobileContainer:e})})]})]})]})}),(0,e.jsx)(n.InspectorAdvancedControls,{children:(0,e.jsx)(d.SelectControl,{label:"HTML element",options:[{label:"Default (<div>)",value:"div"},{label:"<section>",value:"section"},{label:"<aside>",value:"aside"}],value:s,onChange:e=>l({tagName:e}),help:m[s]})}),(0,e.jsx)(n.InnerBlocks,{template:[["cumulus-gutenberg/collapsable-group-header"],["cumulus-gutenberg/collapsable-group-body",{anchor:t.bodyId}]],templateLock:!1})]})},save:o=>{const{attributes:t}=o,{tagName:l="div"}=t,s=n.useBlockProps.save({className:g(t),...h(t),style:b(t)});return(0,e.jsx)(l,{...s,children:(0,e.jsx)(n.InnerBlocks.Content,{})})}})}();