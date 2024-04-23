!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.apply(this,arguments)}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}var o=window.wp.element,n=JSON.parse('{"_#":"Wordpress features support","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"cumulus-gutenberg/category-slideshow","title":"Category Slideshow","description":"Displays a simple slideshow of media in a category.","keywords":["cumulus","cmls","slideshow","image"],"icon":"images-alt2","category":"cmls","script":"file:./assets/global.js","editorScript":"file:./assets/editor.js","viewScript":"file:./assets/frontend.js","style":"file:./assets/frontend.css","attributes":{"category":{"type":"string"},"timeout":{"type":"number","default":2}},"supports":{"_#":"Allow editing raw html of block","anchor":true,"html":false}}');function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){var n,a,i;n=e,a=t,i=o[t],(a=r(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l=wp.blocks.registerBlockType,c=wp.blockEditor,s=c.useBlockProps,u=(c.BlockControls,c.InspectorControls),p=wp.components,m=(p.Panel,p.PanelBody),y=(p.PanelRow,p.ToolbarGroup,p.ToolbarItem,p.DropdownMenu,p.TextControl,p.ToggleControl,p.RangeControl),f=p.SelectControl,g=(p.Button,p.IconButton,p.__experimentalUnitControl,p.Flex,wp.element),b=(g.useState,g.useEffect),d=wp.data.useSelect;l(n.name,i(i({},n),{},{icon:{src:"images-alt2",foreground:"#3399cc"},edit:function(t){var r=s(),n=t.attributes,a=t.setAttributes,i=d((function(e){return{availableCategories:e("core").getEntityRecords("taxonomy","category")}})).availableCategories;return b((function(){var e;null!==(e=window)&&void 0!==e&&null!==(e=e.jQuery)&&void 0!==e&&e.fn.crsgCategorySlideshow&&n.category&&window.jQuery("#block-".concat(t.clientId)).crsgCategorySlideshow(window.ajaxurl)}),[n]),(0,o.createElement)("div",e({},r,{"data-category":n.category,"data-timeout":n.timeout}),(0,o.createElement)(u,null,(0,o.createElement)(m,{title:"Slideshow Options"},(0,o.createElement)(f,{label:"Media Category",value:n.category,options:null!=i&&i.length?i.map((function(e){return{label:e.name,value:e.id}})):{label:"No categories available!"},onChange:function(e){return a({category:e})}})),(0,o.createElement)(m,{title:"Timer"},(0,o.createElement)("h3",null,"Seconds between slides"),(0,o.createElement)(y,{value:n.timeout,onChange:function(e){return a({timeout:e})},min:0,max:20}))),(0,o.createElement)("div",{class:"crsg-category_slideshow-loading"}))},save:function(t){var r=s.save(),n=t.attributes;return(0,o.createElement)("div",e({},r,{"data-category":n.category,"data-timeout":n.timeout}))}}))}();