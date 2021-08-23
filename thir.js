;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="49b283b4076840f76d2dc1971ddeed65";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["CsxVnaptk7af"]={appId:"FNLDMmozBjjL",scope:{}};;CloudflareApps.installs["CsxVnaptk7af"].options={"globalPageOptions":{"themeColor":"black","themeHeadingText":"We're undergoing a bit of scheduled maintenance","themeSiteName":"","themeSubheadingText":"We'll be back online soon."},"globalTemplateOptions":{"htmlTemplate":""},"isGlobalMaintenancePageEnabled":false,"routeBasedOptions":{"routes":[{"isMaintenancePageEnabled":false,"route":""}]},"showGettingStarted":false,"viewGlobalPageOptions":false,"viewGlobalTemplateOptions":false,"viewRouteBasedOptions":false};;CloudflareApps.installs["CsxVnaptk7af"].product={"id":"free"};;if(CloudflareApps.matchPage(CloudflareApps.installs['CsxVnaptk7af'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="./src/index.js");})
({"./src/index.js":(function(module,exports,__webpack_require__){"use strict";function init(){if(!window.addEventListener)return;var globalHtmlTemplateCache="";var routesCache=[];var isHostnameRoute=function isHostnameRoute(){var route=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return route.split(".").length>2;};var addLeadingSlashToInput=function addLeadingSlashToInput(){var route=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return"/"+route;};var stripProtocolFromInput=function stripProtocolFromInput(){var route=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return route.replace("/https?:///","");};var validateRoutes=function validateRoutes(routes){return routes.filter(function(routeConfig){return routeConfig.route;}).map(function(routeConfig){var out=routeConfig;var routeIncludesHostname=isHostnameRoute(routeConfig.route);if(!routeIncludesHostname&&routeConfig.route[0]!=="/"){out.route=addLeadingSlashToInput(routeConfig.route);}
if(routeIncludesHostname){out.route=stripProtocolFromInput(routeConfig.route);}
return out;});};window.CloudflareApps.installs['CsxVnaptk7af'].scope={updateProduct:function updateProduct(nextProduct){if(nextProduct.id==="free"){routesCache=CloudflareApps.installs['CsxVnaptk7af'].options.routeBasedOptions.routes;globalHtmlTemplateCache=CloudflareApps.installs['CsxVnaptk7af'].options.globalPageOptions.htmlTemplate;CloudflareApps.installs['CsxVnaptk7af'].options.routeBasedOptions.routes=[];CloudflareApps.installs['CsxVnaptk7af'].options.globalPageOptions.htmlTemplate="";}else{CloudflareApps.installs['CsxVnaptk7af'].options.routeBasedOptions.routes=routesCache;CloudflareApps.installs['CsxVnaptk7af'].options.globalPageOptions.htmlTemplate=globalHtmlTemplateCache;}},updateRoutes:function updateRoutes(nextOptions){if(nextOptions.routeBasedOptions.routes&&nextOptions.routeBasedOptions.routes.length>0){CloudflareApps.installs['CsxVnaptk7af'].options.routeBasedOptions.routes=validateRoutes(nextOptions.routeBasedOptions.routes);console.log("CloudflareApps.installs['CsxVnaptk7af'].options",JSON.stringify(CloudflareApps.installs['CsxVnaptk7af'].options));}}};}
init();})});}
