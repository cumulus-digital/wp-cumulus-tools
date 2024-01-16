!function(){"use strict";var t={};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}function c(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,l(o.key),o)}}function u(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,e,i){return(e=l(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,{a:i}),i},t.d=function(e,i){for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var d=window.lodash,p=!1;try{var f=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}catch(t){}var y=function(){return p},b=window.jQuery;function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,s){return e=n(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}(t,k()?Reflect.construct(e,s||[],n(t).constructor):e.apply(t,s))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}var S=t.n(b)();addEventListener("DOMContentLoaded",(function(){if(!document.body.classList.contains("block-editor-page")){var t=matchMedia("(min-width: 768px)"),i=!1,n=function(t){i=!t.matches};t.addEventListener("change",n),n(t);var s=function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;switch(e){case">":case">=":return function(t,e){return t-o>=e||t+o>=e}(t,i);case"<":case"<=":return function(t,e){return t-o<=e||t+o<=e}(t,i)}},l=[],c=function t(){var e=Date.now().toString(36)+Math.random().toString(36).substring(2);return l.includes(e)?t():(l.push(e),e)},p={group:".wp-block-cumulus-gutenberg-collapsable-group",header:".wp-block-cumulus-gutenberg-collapsable-group-header",body:".wp-block-cumulus-gutenberg-collapsable-group-body",placeholder:".wp-block-cumulus-gutenberg-collapsable-group-placeholder"},f=function(){function t(e){var i=this;if(a(this,t),h(this,"uid",null),h(this,"el",null),h(this,"$el",null),h(this,"header",null),h(this,"body",null),h(this,"classes",{stuck:"is-stuck",bodyStuck:"wp-b-cgcg-stuck",bottomed:"is-bottom",overflow:"is-overflow",expanded:"is-expanded"}),h(this,"originalClassNames",null),h(this,"stateListeners",[]),h(this,"enabled",!1),!e.el)throw"Must supply an el to StickGroup!";Object.keys(e).forEach((function(t){i[t]=e[t]})),this.$el=S(this.el),this.uid=c(),this.CollapseGroup=this}return u(t,[{key:"registerListener",value:function(t){this.stateListeners.push(t)}},{key:"fireStateListeners",value:function(t){this.stateListeners.forEach((function(e){return e(t)}))}},{key:"setState",value:function(t,e){this["state"+t[0].toUpperCase()+t.slice(1)]=e,this.fireStateListeners({group:this.el,state:t,val:e})}}]),t}(),b=function(t){function e(t){var i;return a(this,e),h(o(i=w(this,e,[t])),"isCollapsable",!1),h(o(i),"stateExpanded",!1),i.isCollapsable=i.el.classList.contains("has-collapse-on-mobile"),i.setAria(),i}return r(e,t),u(e,[{key:"setAria",value:function(){var t=!1;return i||(t="hidden"!==getComputedStyle(this.body).display),this.header.setAttribute("aria-expanded",t),this.body.setAttribute("aria-hidden",!t),this.setState("expanded",t),t}},{key:"isExpanded",value:function(){return!!this.isCollapsable&&"none"!==getComputedStyle(this.el).getPropertyValue("display")}},{key:"setExpanded",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.stateExpanded;if(!i)return!1;var e=t?"add":"remove";this.el.classList[e](this.classes.expanded),this.setState("expanded",t),this.header.setAttribute("aria-expanded",t),this.body.setAttribute("aria-hidden",!t)}}]),e}(f),v=function(t){function n(t){var e;if(a(this,n),h(o(e=w(this,n,[t])),"placeholder",null),h(o(e),"stickyPosition",null),h(o(e),"cache",{cmlsScrollMargin:null,offset:null,position:null,height:null,width:null,margin:{top:null,right:null,bottom:null,left:null},padding:{top:null,right:null,bottom:null,left:null},container:{desktop:{attribute:"data-sticky-desktop-container",el:null,$el:null,height:null,offset:null},mobile:{attribute:"data-sticky-mobile-container",el:null,$el:null,height:null,offset:null}}}),h(o(e),"isStickable",!1),h(o(e),"onlyStickOnMobile",!1),h(o(e),"stateStuck",!1),h(o(e),"stateBottomed",!1),h(o(e),"stateOverflow",!1),e.isStickable=e.el.classList.contains("has-sticky-position"),e.onlyStickOnMobile=e.el.classList.contains("has-only-stick-on-mobile"),e.isStickable){var i;for(var s in e.generatePlaceholder(),e.cache.container)e.cache.container[s].el=e.el.closest(e.el.getAttribute(e.cache.container[s].attribute)),e.cache.container[s].el?e.cache.container[s].$el=S(e.cache.container[s].el):(e.cache.container[s].el=document.body,e.cache.container[s].$el=S(document.body));e.update(),null!==(i=window)&&void 0!==i&&i.ResizeObserver&&(e.resizeObserver=new ResizeObserver((0,d.debounce)(e.onResize,30)),e.resizeObserver.observe(e.el))}return e}return r(n,t),u(n,[{key:"update",value:function(){if(this.isStickable){this.enabled=!1,this.unstyle();var t=this.el.style.marginBottom,e=getComputedStyle(this.el).getPropertyValue("--sticky-position");this.el.style.setProperty("margin-bottom",e),e=parseFloat(getComputedStyle(this.el).marginBottom),this.el.style.marginBottom=t;var o=i?"mobile":"desktop";"static"===getComputedStyle(this.cache.container[o].el).position&&this.cache.container[o].el.style.setProperty("position","relative"),Object.assign(this,{stickyPosition:e,cache:{offset:this.$el.offset(),position:this.$el.position(),height:this.$el.outerHeight(),width:this.$el.outerWidth(),style:this.el.getAttribute("style"),margin:{top:parseInt(this.$el.css("marginTop"),10)||0,right:parseInt(this.$el.css("marginRight"),10)||0,bottom:parseInt(this.$el.css("marginBottom"),10)||0,left:parseInt(this.$el.css("marginLeft"),10)||0},padding:{top:parseInt(this.$el.css("paddingTop"),10)||0,right:parseInt(this.$el.css("paddingRight"),10)||0,bottom:parseInt(this.$el.css("paddingBottom"),10)||0,left:parseInt(this.$el.css("paddingLeft"),10)||0},container:m(m({},this.cache.container),{},{desktop:m(m({},this.cache.container.desktop),{},{height:this.cache.container.desktop.$el.height(),offset:this.cache.container.desktop.$el.offset()}),mobile:m(m({},this.cache.container.mobile),{},{height:this.cache.container.mobile.$el.height(),offset:this.cache.container.mobile.$el.offset()})})}}),this.cache.offset.left-=this.cache.margin.left,this.cache.offset.top-=this.cache.margin.top,this.restyle(),Object.assign(this,{stateStuck:null===this.stateStuck?this.el.classList.contains(this.classes.stuck):this.stateStuck,stateOverflow:null===this.stateOverflow?this.el.classList.contains(this.classes.overflow):this.stateOverflow,stateBottomed:null===this.stateBottomed?this.el.classList.contains(this.classes.bottomed):this.stateBottomed}),this.setupScrollEvent(),this.enabled=!0}}},{key:"generatePlaceholder",value:function(){if(this.isStickable)return this.placeholder=document.createElement("div"),this.placeholder.classList.add(p.placeholder.substring(1)),Object.assign(this.placeholder.style,{display:"none",height:"var(--placeholder-height)"}),this.placeholder.style.setProperty("--placeholder-height",this.cache.height),this.$el.after(this.placeholder),this.placeholder}},{key:"unstyle",value:function(){var t,i;this.cache.originalClassNames=this.el.className,(t=this.el.classList).remove.apply(t,function(t){if(Array.isArray(t))return e(t)}(i=Object.values(this.classes))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,i){if(t){if("string"==typeof t)return e(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,i):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),this.header.setAttribute("aria-expanded",!0),this.body.setAttribute("aria-hidden",!1),this.el.style.removeProperty("width")}},{key:"restyle",value:function(){this.stateStuck?(this.setStuck(!0),this.setBottomed(this.stateBottomed)):this.setStuck(!1),this.header.setAttribute("aria-expanded",!!this.stateExpanded),this.body.setAttribute("aria-hidden",!this.stateExpanded)}},{key:"onResize",value:function(t){var e,i=function(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw s}}}}(t);try{for(i.s();!(e=i.n()).done;){var o,n=e.value;if(n.target.CollapseGroup&&n.borderBoxSize){var s=Array.isArray(n.borderBoxSize)?n.borderBoxSize[0]:n.borderBoxSize;null===(o=n.target.CollapseGroup)||void 0===o||null===(o=o.placeholder)||void 0===o||null===(o=o.style)||void 0===o||o.setProperty("--placeholder-height",s.blockSize+"px")}}}catch(t){i.e(t)}finally{i.f()}}},{key:"scrollHandler",value:function(){var t=S(window).scrollTop(),e=i?"mobile":"desktop";s(t,">=",this.cache.offset.top-this.stickyPosition)&&s(t,"<=",this.cache.container[e].offset.top+this.cache.container[e].height-this.stickyPosition-this.cache.height,1)&&(!this.stateStuck||this.stateBottomed)?(this.stateBottomed&&this.setBottomed(!1),this.setStuck(!0)):s(t,"<",this.cache.offset.top-this.stickyPosition,1)&&this.stateStuck?this.setStuck(!1):!s(t,">=",this.cache.container[e].offset.top+this.cache.container[e].height-this.stickyPosition+this.body.scrollTop-this.cache.height,1)||this.stateBottomed||i&&this.stateExpanded||(this.stateStuck||this.setStuck(!0),this.setBottomed(!0))}},{key:"setupScrollEvent",value:function(){var t=this,e="scroll.".concat(this.uid);if(this.onlyStickOnMobile&&!i)return this.setStuck(!1),this.setBottomed(!1),void S(window).off(e);S(window).off(e).on(e,(0,d.debounce)((function(){t.scrollHandler()}),10)),this.scrollHandler()}},{key:"setStuck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===t&&(t=!this.stateStuck);var e=t?"add":"remove";this.el.classList[e](this.classes.stuck),window.document.body.classList[e](this.classes.bodyStuck),this.placeholder.style.setProperty("display",t?"block":"none"),this.stateStuck=t,t?(this.cache.style=JSON.parse(JSON.stringify(this.el.style)),Object.assign(this.el.style,{left:this.cache.offset.left+"px",top:this.stickyPosition+"px",width:this.cache.width+"px"}),window.cmlsExtraScrollMargin&&window.cmlsExtraScrollMargin.add(this.uid,this.cache.height+"px")):(Object.assign(this.el.style,{left:this.cache.style.left,top:this.cache.style.top,width:this.cache.style.width}),window.cmlsExtraScrollMargin&&window.cmlsExtraScrollMargin.remove(this.uid))}},{key:"setBottomed",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=i?"mobile":"desktop";null===t&&(t=!this.stateBottomed);var o=t?"add":"remove";this.el.classList[o](this.classes.bottomed),this.stateBottomed=t,t&&Object.assign(this.el.style,{left:this.cache.position.left,top:this.cache.container[e].height-this.cache.height+"px",width:this.cache.width})}}]),n}(b),k=(0,d.debounce)((function(){var t=document.querySelectorAll(p.group);t&&t.length&&[].forEach.call(t,(function(t){if(t.CollapseGroup)t.CollapseGroup instanceof v&&t.CollapseGroup.update();else{var e=t.querySelector(p.header),i=t.querySelector(p.body),o=f;t.classList.contains("has-collapse-on-mobile")&&(o=b),t.classList.contains("has-sticky-position")&&(o=v),t.CollapseGroup=new o({el:t,header:e,body:i})}t.CollapseGroup instanceof b&&t.CollapseGroup.setAria(),t.CollapseGroup.enabled=!0}))}),100);addEventListener("load",(function(){k()})),addEventListener("resize",(0,d.debounce)(k,200,{leading:!1,trailing:!0})),addEventListener("click",(function(t){if(i&&t.target.matches(p.header+" a")){var e=t.target.closest(p.group);e&&e.CollapseGroup instanceof b&&t.preventDefault()}})),addEventListener("click",(function(t){if(i){var e=t.target.closest(p.header);if(e){var o=e.parentNode;o.CollapseGroup instanceof b&&o.CollapseGroup.setExpanded()}}}),y?{passive:!0}:null)}}))}();