(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ctpf:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ZVWf"),waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("64y6"),waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__),_scripts_VanillaLazyLoadHandler__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("JvTj"),_Utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("RPtf"),_signalBus__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("mqRl"),js_logger__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("GGSb"),js_logger__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(js_logger__WEBPACK_IMPORTED_MODULE_5__);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}var InfiniteScroller=function(){function InfiniteScroller(){_classCallCheck(this,InfiniteScroller),this.loader=new _Loader__WEBPACK_IMPORTED_MODULE_0__.a,this.VanillaLazyLoadHandler=new _scripts_VanillaLazyLoadHandler__WEBPACK_IMPORTED_MODULE_2__.a,this.instances=[];for(var e=document.querySelectorAll("infinite-scroller"),t=0,i=e.length;t<i;t++){var n=this._getInstance(e[t],t);this.instances.push(n)}this.variations={normal:"inverse",inverse:"normal"}}return _createClass(InfiniteScroller,[{key:"_getInstance",value:function(e){var t=e,i=null,n=null,a=null,s=1,o=1,r=null,d=null,l="normal",c=null,u=null,v="300px",_="300px",h="300px",p="300px",f="";return e.getAttribute("data-entity")&&(a=e.getAttribute("data-entity")),e.getAttribute("data-section")&&(i=e.getAttribute("data-section")),e.getAttribute("data-subsection")&&(n=e.getAttribute("data-subsection")),e.getAttribute("data-max-pages")&&(r=parseInt(e.getAttribute("data-max-pages"))),e.getAttribute("data-page-number")&&(s=parseInt(e.getAttribute("data-page-number"))),e.getAttribute("data-page-size")&&(o=parseInt(e.getAttribute("data-page-size"))),e.getAttribute("data-url")&&(d=e.getAttribute("data-url")),e.getAttribute("data-title")&&(c=e.getAttribute("data-title")),e.getAttribute("data-variation")&&(l=e.getAttribute("data-variation")),e.getAttribute("data-initial-waypoint-element-id")&&(u=e.getAttribute("data-initial-waypoint-element-id")),e.getAttribute("data-initial-waypoint-up-offset")&&(v=e.getAttribute("data-initial-waypoint-up-offset")),e.getAttribute("data-initial-waypoint-down-offset")&&(_=e.getAttribute("data-initial-waypoint-down-offset")),e.getAttribute("data-waypoint-up-offset")&&(h=e.getAttribute("data-waypoint-up-offset")),e.getAttribute("data-waypoint-down-offset")&&(p=e.getAttribute("data-waypoint-down-offset")),e.getAttribute("data-query-string")&&(f=e.getAttribute("data-query-string")),{entity:a,section:i,subsection:n,pageNumber:s,pageSize:o,maxPages:r,moreResults:!0,domNode:t,calling:!1,url:d,title:c,variation:l,urlTitlesLoaded:[],elementsLoaded:[],initialWaypointElementId:u,initialWaypointUpOffset:v,initialWaypointDownOffset:_,waypointUpOffset:h,waypointDownOffset:p,queryString:f}}},{key:"init",value:function(){this.handleScroll(this.loadInitial.bind(this))}},{key:"loadInitial",value:function(){for(var e=0,t=this.instances.length;e<t;e++)this.loadElement(e)}},{key:"loadElement",value:function(e){"section"!=this.instances[e].entity?"story"!=this.instances[e].entity?"home"!=this.instances[e].entity?"tag"!=this.instances[e].entity||this.loadTag(e):this.loadHomeSection(e):this.loadStory(e):this.loadSection(e)}},{key:"getNextHomeSection",value:function(e){var t=this,i=window.frontendcms.config.reloadSection.filter((function(i){return!t.instances[e].elementsLoaded.includes(i.label)}));return 0===i.length?null:i[0]}},{key:"getNextHomeVariation",value:function(e){return this.variations[e]}},{key:"loadHomeSection",value:function(e){var t=this.getNextHomeSection(e);if(this.instances[e].domNode&&!this.instances[e].calling&&t){this.loader.showLoader();var i=this.getNextHomeVariation(this.instances[e].variation),n=this.instances[e].url,a=[{name:"section",value:t.url.slice(1,-1)},{name:"title",value:t.label},{name:"variation",value:t.variation?t.variation:i},{name:"number",value:this.instances[e].elementsLoaded.length}];t.logo&&a.push({name:"logo",value:t.logo}),t.provider&&a.push({name:"siteCode",value:t.siteCode},{name:"provider",value:t.provider}),n=Object(_Utils__WEBPACK_IMPORTED_MODULE_3__.e)(n,a),this.sendRequest(n,e,this.onElementRequested.bind(this,e))}}},{key:"loadSection",value:function(e){if(!this.instances[e].calling&&this.instances[e].moreResults&&this.instances[e].maxPages>this.instances[e].pageNumber&&this.instances[e].domNode&&this.instances[e].section){this.loader.showLoader();var t="/".concat(this.instances[e].section,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/").concat(this.instances[e].queryString);this.instances[e].subsection&&(t="/".concat(this.instances[e].section,"/").concat(this.instances[e].subsection,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/").concat(this.instances[e].queryString)),!0===window.frontendcms.config.common.activeUSRoutes&&(t=(t="/us"+t).replace("/us/es/","/us-es/")),this.sendRequest(t,e,this.onElementRequested.bind(this,e))}}},{key:"loadTag",value:function(e){if(!this.instances[e].calling&&this.instances[e].moreResults&&this.instances[e].maxPages>this.instances[e].pageNumber&&this.instances[e].domNode&&this.instances[e].section){this.instances[e].pageNumber=1==this.instances[e].pageNumber?this.instances[e].pageNumber+1:this.instances[e].pageNumber,this.loader.showLoader();var t="/".concat(this.instances[e].section,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/").concat(this.instances[e].queryString);this.instances[e].subsection&&(t="/".concat(this.instances[e].section,"/").concat(this.instances[e].subsection,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/").concat(this.instances[e].queryString)),!0===window.frontendcms.config.common.activeUSRoutes&&(t="/us"+t),this.sendRequest(t,e,this.onElementRequested.bind(this,e))}}},{key:"loadStory",value:function(e){if(!this.instances[e].calling&&this.instances[e].moreResults&&this.instances[e].maxPages>this.instances[e].pageNumber&&this.instances[e].section){this.loader.showLoader();var t="/scroll/".concat(this.instances[e].section,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/");this.instances[e].subsection&&(t="/scroll/".concat(this.instances[e].section,"/").concat(this.instances[e].subsection,"/").concat(this.instances[e].pageNumber,"/").concat(this.instances[e].pageSize,"/")),!0===window.frontendcms.config.common.activeUSRoutes&&(t="/us"+t),this.sendRequest(t,e,this.onElementRequested.bind(this,e))}}},{key:"sendRequest",value:function(e,t,i){this.instances[t].calling=!0;var n=new XMLHttpRequest;n.onreadystatechange=i,n.open("GET",e),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send()}},{key:"getNewUrl",value:function(e,t,i){if("section"==this.instances[e].entity||"tag"==this.instances[e].entity)return"randomSection";if("story"==this.instances[e].entity)return(new DOMParser).parseFromString(t,"text/html").querySelector("[data-url]").getAttribute("data-url");var n=i.url;return!0===window.frontendcms.config.common.activeUSRoutes&&(n="/us"+n),"home"==this.instances[e].entity?n:void 0}},{key:"getNewTitle",value:function(e,t){return"section"==this.instances[e].entity||"tag"==this.instances[e].entity?"":"story"==this.instances[e].entity?(new DOMParser).parseFromString(t,"text/html").querySelector("h1").innerHTML:"home"==this.instances[e].entity?"":void 0}},{key:"addContent",value:function(e,t){if(document.querySelector("[data-infinite-zone]"))document.querySelector("[data-infinite-zone]").insertAdjacentHTML("beforeend",t),this.evalJs('data-type="video"',"[data-type=video]",t);else if("section"!=this.instances[e].entity&&"tag"!=this.instances[e].entity||(document.querySelector('main[role="main"]').insertAdjacentHTML("beforeend",t),this.evalJs('data-type="video"',"[data-type=video]",t)),"story"==this.instances[e].entity&&(this.instances[e].domNode.insertAdjacentHTML("beforeend",t),this.evalJs('data-type="video"',"[data-type=video]",t)),"home"==this.instances[e].entity){var i=JSON.parse(t);this.instances[e].domNode.insertAdjacentHTML("beforeend",i.result),this.evalJs('data-module="videoPlayer"',".hr-block__figure",i.result)}}},{key:"getWaypointName",value:function(e,t){return"home"==this.instances[e].entity?"url-page-"+t.url.slice(1,-1)+"-waypoint":"load-"+this.instances[e].pageNumber+"-waypoint"}},{key:"onElementRequested",value:function(e,t){var i=t.currentTarget;if(i.readyState===XMLHttpRequest.DONE){this.instances[e].calling=!1;var n=this.getNextHomeSection(e),a=this.getNextHomeVariation(this.instances[e].variation);if(null!=n&&this.instances[e].elementsLoaded.push(n.label),this.instances[e].variation=a,this.loader.hideLoader(),200===i.status){i.response.length||(this.instances[e].moreResults=!1);var s=this.getNewTitle(e,i.response),o=this.getNewUrl(e,i.response,n),r=o.replaceAll("/","");if(r.indexOf("-")>-1&&(r=(r=r.split("-"))[r.length-1]),this.instances[e].urlTitlesLoaded[this.instances[e].pageNumber]={url:o,title:s},o!==this.instances[e].url){this.addContent(e,i.response),this.VanillaLazyLoadHandler.refresh();var d=this.instances[e],l="/";!0===window.frontendcms.config.common.activeUSRoutes&&(l="/us/"),self=this,new Waypoint({element:document.getElementById(this.getWaypointName(e,n)),offset:d.waypointDownOffset,group:"down",handler:function(t){"down"==t&&(this===this.group.last()&&self.loadElement(e),window.location.pathname!=l?_signalBus__WEBPACK_IMPORTED_MODULE_4__.a.onWaypointDown.dispatch({event:"onWaypointDown",eventAction:"scroll-infinito",eventType:d.entity,eventPageNumber:d.pageNumber,eventInitialWaypoint:!1,eventUrl:o,eventTitle:s}):window.dataLayer.push({event:"pageview_"+r}))}}),this.instances[e].pageNumber>1&&new Waypoint({element:document.getElementById(this.getWaypointName(e,n)),offset:d.waypointUpOffset,group:"up",handler:function(e){if("up"==e){for(var t=d.title,i=d.url,n=d.urlTitlesLoaded.length-1;n>0;n--)d.urlTitlesLoaded[n]&&1==window.location.href.endsWith(d.urlTitlesLoaded[n].url)&&d.urlTitlesLoaded[n-1]&&(t=d.urlTitlesLoaded[n-1].title,i=d.urlTitlesLoaded[n-1].url);window.location.pathname!=l?_signalBus__WEBPACK_IMPORTED_MODULE_4__.a.onWaypointUp.dispatch({event:"onWaypointUp",eventAction:"scroll-infinito",eventType:d.entity,eventPageNumber:d.pageNumber,eventInitialWaypoint:!1,eventUrl:i,eventTitle:t}):window.dataLayer.push({event:"pageview_"+r})}}}),this.VanillaLazyLoadHandler.refresh(),_signalBus__WEBPACK_IMPORTED_MODULE_4__.a.onScroll.dispatch({event:"scroll",eventAction:"scroll-infinito",eventType:this.instances[e].entity,eventPageNumber:this.instances[e].pageNumber}),this.instances[e].pageNumber++,document.dispatchEvent(new CustomEvent("lazyLoadRefresh"))}else this.instances[e].maxPages=parseInt(this.instances[e].maxPages)+1,this.instances[e].pageNumber++,this.loadElement(e)}else js_logger__WEBPACK_IMPORTED_MODULE_5___default.a.info("InfiniteScroller::Error: "+i.status)}}},{key:"handleScroll",value:function(e){for(var t=this,i=0,n=this.instances.length;i<n;i++){var a=this.instances[i].domNode;null!=this.instances[i].initialWaypointElementId&&(a=document.getElementById(this.instances[i].initialWaypointElementId)),this.instances[i].domNode&&function(){var n=t.instances[i],s=new Waypoint({element:a,offset:n.initialWaypointDownOffset,handler:function(t){"down"===t&&(s.destroy(),e())}})}(),null!=a&&function(){var e=t.instances[i];new Waypoint({element:a,offset:e.initialWaypointUpOffset,handler:function(t){try{"up"==t&&_signalBus__WEBPACK_IMPORTED_MODULE_4__.a.onWaypointUp.dispatch({event:"onWaypointUp",eventAction:"scroll-infinito",eventType:e.entity,eventPageNumber:e.pageNumber,eventInitialWaypoint:!0,eventUrl:e.url,eventTitle:e.title})}catch(e){js_logger__WEBPACK_IMPORTED_MODULE_5___default.a.error("InfiniteScroller::Error ->",e)}}})}()}}},{key:"evalJs",value:function evalJs(filterString,filterSelector,htmlString){if(htmlString.indexOf(filterString)>-1){var jsToEvaluate=[],div=document.createElement("div");div.insertAdjacentHTML("beforeend",htmlString),div.childNodes.forEach((function(e){if(e.id&&e.id.indexOf("-waypoint")>-1){var t=e.querySelectorAll(filterSelector);t.length&&t.forEach((function(e){e.childNodes.forEach((function(e){"SCRIPT"==e.nodeName&&(e.src?jsToEvaluate.push(e.src):jsToEvaluate.push(e.innerHTML))}))}))}})),jsToEvaluate.forEach((function(js){if(0==js.indexOf("http")){var script=document.createElement("script");script.src=js,document.head.appendChild(script)}else eval(js)}))}}}]),InfiniteScroller}();__webpack_exports__.default=InfiniteScroller},ZVWf:function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=null,this.selector=document.querySelector("main")}var t,i,a;return t=e,(i=[{key:"setLoaderType",value:function(e){this.type=e}},{key:"setLoaderSelector",value:function(e){this.selector=e}},{key:"createLoader",value:function(){this.setLoaderType(window.frontendcms.config.common.jsSpinnerType);var e=document.createElement("div");switch(e.id="hola-loader",this.type){case"circle":e.classList.add("lds-circle"),e.innerHTML="<div></div>";break;case"dual-ring":e.classList.add("lds-dual-ring");break;case"facebook":e.classList.add("lds-facebook"),e.innerHTML="<div></div><div></div><div></div>";break;case"heart":e.classList.add("lds-heart"),e.innerHTML="<div></div>";break;case"ring":e.classList.add("lds-ring"),e.innerHTML="<div></div><div></div><div></div><div></div>";break;case"roller":e.classList.add("lds-roller"),e.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";break;case"default":e.classList.add("lds-default"),e.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";break;case"ellipsis":e.classList.add("lds-ellipsis"),e.innerHTML="<div></div><div></div><div></div><div></div>";break;case"grid":e.classList.add("lds-grid"),e.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";break;case"hourglass":e.classList.add("lds-hourglass");break;case"ripple":e.classList.add("lds-ripple"),e.innerHTML="<div></div><div></div>";break;case"spinner":e.classList.add("lds-spinner"),e.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";break;case"TODspinner":e.classList.add("tod-spinner"),e.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"}return e}},{key:"showLoader",value:function(){this.selector.appendChild(this.createLoader())}},{key:"hideLoader",value:function(){document.getElementById("hola-loader").remove()}},{key:"init",value:function(){}}])&&n(t.prototype,i),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.a=a}}]);