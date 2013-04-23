
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     simile-production
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Timeline = {};

if(typeof SimileAjax=="undefined"){var SimileAjax={loaded:false,loadingScriptsCount:0,error:null,params:{bundle:"true"}};SimileAjax.Platform=new Object();var getHead=function(a){return a.getElementsByTagName("head")[0]};SimileAjax.findScript=function(g,c){var f=g.documentElement.getElementsByTagName("head");for(var d=0;d<f.length;d++){var e=f[d].firstChild;while(e!=null){if(e.nodeType==1&&e.tagName.toLowerCase()=="script"){var a=e.src;var b=a.indexOf(c);if(b>=0){return a}}e=e.nextSibling}}return null};SimileAjax.includeJavascriptFile=function(g,c,a,h){a=a||"";if(g.body==null){try{var d="'"+a.replace(/'/g,"&apos")+"'";g.write("<script src='"+c+"' onerror="+d+(h?" charset='"+h+"'":"")+" type='text/javascript'>"+a+"<\/script>");return}catch(f){}}var b=g.createElement("script");if(a){try{b.innerHTML=a}catch(f){}b.setAttribute("onerror",a)}if(h){b.setAttribute("charset",h)}b.type="text/javascript";b.language="JavaScript";b.src=c;return getHead(g).appendChild(b)};SimileAjax.includeJavascriptFiles=function(d,a,c){for(var b=0;b<c.length;b++){SimileAjax.includeJavascriptFile(d,a+c[b])}SimileAjax.loadingScriptsCount+=c.length;SimileAjax.includeJavascriptFile(d,SimileAjax.urlPrefix+"scripts/signal.js?"+c.length)};SimileAjax.includeCssFile=function(d,a){if(d.body==null){try{d.write("<link rel='stylesheet' href='"+a+"' type='text/css'/>");return}catch(c){}}var b=d.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",a);getHead(d).appendChild(b)};SimileAjax.includeCssFiles=function(d,a,c){for(var b=0;b<c.length;b++){SimileAjax.includeCssFile(d,a+c[b])}};SimileAjax.prefixURLs=function(d,a,b){for(var c=0;c<b.length;c++){d.push(a+b[c])}};SimileAjax.parseURLParameters=function(d,n,k){n=n||{};k=k||{};if(typeof d=="undefined"){d=location.href}var c=d.indexOf("?");if(c<0){return n}d=(d+"#").slice(c+1,d.indexOf("#"));var g=d.split("&"),f,m={};var a=window.decodeURIComponent||unescape;for(var j=0;f=g[j];j++){var o=f.indexOf("=");var b=a(f.slice(0,o));var e=m[b];if(typeof e=="undefined"){e=[]}else{if(!(e instanceof Array)){e=[e]}}m[b]=e.concat(a(f.slice(o+1)))}for(var j in m){if(!m.hasOwnProperty(j)){continue}var l=k[j]||String;var h=m[j];if(!(h instanceof Array)){h=[h]}if(l===Boolean&&h[0]=="false"){n[j]=false}else{n[j]=l.apply(this,h)}}return n};(function(){var c=["jquery-1.2.6.min.js","platform.js","debug.js","xmlhttp.js","json.js","dom.js","graphics.js","date-time.js","string.js","html.js","data-structure.js","units.js","ajax.js","history.js","window-manager.js"];var a=["graphics.css"];if(typeof SimileAjax_urlPrefix=="string"){SimileAjax.urlPrefix=SimileAjax_urlPrefix}else{var b=SimileAjax.findScript(document,"simile-ajax-api.js");if(b==null){SimileAjax.error=new Error("Failed to derive URL prefix for Simile Ajax API code files");return}SimileAjax.urlPrefix=b.substr(0,b.indexOf("simile-ajax-api.js"))}SimileAjax.parseURLParameters(b,SimileAjax.params,{bundle:Boolean});if(SimileAjax.params.bundle){SimileAjax.includeJavascriptFiles(document,SimileAjax.urlPrefix,["simile-ajax-bundle.js"])}else{SimileAjax.includeJavascriptFiles(document,SimileAjax.urlPrefix+"scripts/",c)}SimileAjax.includeCssFiles(document,SimileAjax.urlPrefix+"styles/",a);SimileAjax.loaded=true})()};
(function(){var _jQuery=window.jQuery,_$=window.$;var jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context)};var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,isSimple=/^.[^:#\[\.]*$/,undefined;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this}if(typeof selector=="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1]){selector=jQuery.clean([match[1]],context)}else{var elem=document.getElementById(match[3]);if(elem){if(elem.id!=match[3]){return jQuery().find(selector)}return jQuery(elem)}selector=[]}}else{return jQuery(context).find(selector)}}else{if(jQuery.isFunction(selector)){return jQuery(document)[jQuery.fn.ready?"ready":"load"](selector)}}return this.setArray(jQuery.makeArray(selector))},jquery:"1.2.6",size:function(){return this.length},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num]},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this},each:function(callback,args){return jQuery.each(this,callback,args)},index:function(elem){var ret=-1;return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this)},attr:function(name,value,type){var options=name;if(name.constructor==String){if(value===undefined){return this[0]&&jQuery[type||"attr"](this[0],name)}else{options={};options[name]=value}}return this.each(function(i){for(name in options){jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name))}})},css:function(key,value){if((key=="width"||key=="height")&&parseFloat(value)<0){value=undefined}return this.attr(key,value,"curCSS")},text:function(text){if(typeof text!="object"&&text!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text))}var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8){ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this])}})});return ret},wrapAll:function(html){if(this[0]){jQuery(html,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){var elem=this;while(elem.firstChild){elem=elem.firstChild}return elem}).append(this)}return this},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html)})},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html)})},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1){this.appendChild(elem)}})},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1){this.insertBefore(elem,this.firstChild)}})},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this)})},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling)})},end:function(){return this.prevObject||jQuery([])},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem)});return this.pushStack(/[^+>] [^+>]/.test(selector)||selector.indexOf("..")>-1?jQuery.unique(elems):elems)},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement("div");container.appendChild(clone);return jQuery.clean([container.innerHTML])[0]}else{return this.cloneNode(true)}});var clone=ret.find("*").andSelf().each(function(){if(this[expando]!=undefined){this[expando]=null}});if(events===true){this.find("*").andSelf().each(function(i){if(this.nodeType==3){return}var events=jQuery.data(this,"events");for(var type in events){for(var handler in events[type]){jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data)}}})}return ret},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i)})||jQuery.multiFilter(selector,this))},not:function(selector){if(selector.constructor==String){if(isSimple.test(selector)){return this.pushStack(jQuery.multiFilter(selector,this,true))}else{selector=jQuery.multiFilter(selector,this)}}var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector})},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector=="string"?jQuery(selector):jQuery.makeArray(selector))))},is:function(selector){return !!selector&&jQuery.multiFilter(selector,this).length>0},hasClass:function(selector){return this.is("."+selector)},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0){return null}for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&&!option.attributes.value.specified?option.text:option.value;if(one){return value}values.push(value)}}return values}else{return(this[0].value||"").replace(/\r/g,"")}}return undefined}if(value.constructor==Number){value+=""}return this.each(function(){if(this.nodeType!=1){return}if(value.constructor==Array&&/radio|checkbox/.test(this.type)){this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0)}else{if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0)});if(!values.length){this.selectedIndex=-1}}else{this.value=value}}})},html:function(value){return value==undefined?(this[0]?this[0].innerHTML:null):this.empty().append(value)},replaceWith:function(value){return this.after(value).remove()},eq:function(i){return this.slice(i,i+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},andSelf:function(){return this.add(this.prevObject)},data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key)}return data===undefined&&parts[1]?this.data(parts[0]):data}else{return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value)})}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key)})},domManip:function(args,table,reverse,callback){var clone=this.length>1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse){elems.reverse()}}var obj=this;if(table&&jQuery.nodeName(this,"table")&&jQuery.nodeName(elems[0],"tr")){obj=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"))}var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,"script")){scripts=scripts.add(elem)}else{if(elem.nodeType==1){scripts=scripts.add(jQuery("script",elem).remove())}callback.call(obj,elem)}});scripts.each(evalScript)})}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"})}else{jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"")}if(elem.parentNode){elem.parentNode.removeChild(elem)}}function now(){return +new Date}jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2}if(typeof target!="object"&&typeof target!="function"){target={}}if(length==i){target=this;--i}for(;i<length;i++){if((options=arguments[i])!=null){for(var name in options){var src=target[name],copy=options[name];if(target===copy){continue}if(deep&&copy&&typeof copy=="object"&&!copy.nodeType){target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy)}else{if(copy!==undefined){target[name]=copy}}}}}return target};var expando="jQuery"+now(),uuid=0,windowData={},exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep){window.jQuery=_jQuery}return jQuery},isFunction:function(fn){return !!fn&&typeof fn!="string"&&!fn.nodeName&&fn.constructor!=Array&&/^[\s[]?function/.test(fn+"")},isXMLDoc:function(elem){return elem.documentElement&&!elem.body||elem.tagName&&elem.ownerDocument&&!elem.ownerDocument.body},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.browser.msie){script.text=data}else{script.appendChild(document.createTextNode(data))}head.insertBefore(script,head.firstChild);head.removeChild(script)}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase()},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id){id=elem[expando]=++uuid}if(name&&!jQuery.cache[id]){jQuery.cache[id]={}}if(data!==undefined){jQuery.cache[id][name]=data}return name?jQuery.cache[id][name]:id},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id]){break}if(!name){jQuery.removeData(elem)}}}else{try{delete elem[expando]}catch(e){if(elem.removeAttribute){elem.removeAttribute(expando)}}delete jQuery.cache[id]}},each:function(object,callback,args){var name,i=0,length=object.length;if(args){if(length==undefined){for(name in object){if(callback.apply(object[name],args)===false){break}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break}}}}else{if(length==undefined){for(name in object){if(callback.call(object[name],name,object[name])===false){break}}}else{for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}}return object},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value)){value=value.call(elem,i)}return value&&value.constructor==Number&&type=="curCSS"&&!exclude.test(name)?value+"px":value},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className)){elem.className+=(elem.className?" ":"")+className}})},remove:function(elem,classNames){if(elem.nodeType==1){elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return !jQuery.className.has(classNames,className)}).join(" "):""}},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name]}callback.call(elem);for(var name in options){elem.style[name]=old[name]}},css:function(elem,name,force){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0});val-=Math.round(padding+border)}if(jQuery(elem).is(":visible")){getWH()}else{jQuery.swap(elem,props,getWH)}return Math.max(0,val)}return jQuery.curCSS(elem,name,force)},curCSS:function(elem,name,force){var ret,style=elem.style;function color(elem){if(!jQuery.browser.safari){return false}var ret=defaultView.getComputedStyle(elem,null);return !ret||ret.getPropertyValue("color")==""}if(name=="opacity"&&jQuery.browser.msie){ret=jQuery.attr(style,"opacity");return ret==""?"1":ret}if(jQuery.browser.opera&&name=="display"){var save=style.outline;style.outline="0 solid black";style.outline=save}if(name.match(/float/i)){name=styleFloat}if(!force&&style&&style[name]){ret=style[name]}else{if(defaultView.getComputedStyle){if(name.match(/float/i)){name="float"}name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle&&!color(elem)){ret=computedStyle.getPropertyValue(name)}else{var swap=[],stack=[],a=elem,i=0;for(;a&&color(a);a=a.parentNode){stack.unshift(a)}for(;i<stack.length;i++){if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display="block"}}ret=name=="display"&&swap[stack.length-1]!=null?"none":(computedStyle&&computedStyle.getPropertyValue(name))||"";for(i=0;i<swap.length;i++){if(swap[i]!=null){stack[i].style.display=swap[i]}}}if(name=="opacity"&&ret==""){ret="1"}}else{if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase()});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=ret||0;ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft}}}}return ret},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement=="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document}jQuery.each(elems,function(i,elem){if(!elem){return}if(elem.constructor==Number){elem+=""}if(typeof elem=="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">"});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement("div");var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--){div=div.lastChild}if(jQuery.browser.msie){var tbody=!tags.indexOf("<table")&&tags.indexOf("<tbody")<0?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&tags.indexOf("<tbody")<0?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j])}}if(/^\s/.test(elem)){div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild)}}elem=jQuery.makeArray(div.childNodes)}if(elem.length===0&&(!jQuery.nodeName(elem,"form")&&!jQuery.nodeName(elem,"select"))){return}if(elem[0]==undefined||jQuery.nodeName(elem,"form")||elem.options){ret.push(elem)}else{ret=jQuery.merge(ret,elem)}});return ret},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8){return undefined}var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined,msie=jQuery.browser.msie;name=notxml&&jQuery.props[name]||name;if(elem.tagName){var special=/href|src|style/.test(name);if(name=="selected"&&jQuery.browser.safari){elem.parentNode.selectedIndex}if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode){throw"type property can't be changed"}elem[name]=value}if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){return elem.getAttributeNode(name).nodeValue}return elem[name]}if(msie&&notxml&&name=="style"){return jQuery.attr(elem.style,"cssText",value)}if(set){elem.setAttribute(name,""+value)}var attr=msie&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr}if(msie&&name=="opacity"){if(set){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(value)+""=="NaN"?"":"alpha(opacity="+value*100+")")}return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase()});if(set){elem[name]=value}return elem[name]},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"")},makeArray:function(array){var ret=[];if(array!=null){var i=array.length;if(i==null||array.split||array.setInterval||array.call){ret[0]=array}else{while(i){ret[--i]=array[i]}}}return ret},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i}}return -1},merge:function(first,second){var i=0,elem,pos=first.length;if(jQuery.browser.msie){while(elem=second[i++]){if(elem.nodeType!=8){first[pos++]=elem}}}else{while(elem=second[i++]){first[pos++]=elem}}return first},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i])}}}catch(e){ret=array}return ret},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++){if(!inv!=!callback(elems[i],i)){ret.push(elems[i])}}return ret},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!=null){ret[ret.length]=value}}return ret.concat.apply([],ret)}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode=="CSS1Compat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing"}});jQuery.each({parent:function(elem){return elem.parentNode},parents:function(elem){return jQuery.dir(elem,"parentNode")},next:function(elem){return jQuery.nth(elem,2,"nextSibling")},prev:function(elem){return jQuery.nth(elem,2,"previousSibling")},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem)},children:function(elem){return jQuery.sibling(elem.firstChild)},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string"){ret=jQuery.multiFilter(selector,ret)}return this.pushStack(jQuery.unique(ret))}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i<length;i++){jQuery(args[i])[original](this)}})}});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1){this.removeAttribute(name)}},addClass:function(classNames){jQuery.className.add(this,classNames)},removeClass:function(classNames){jQuery.className.remove(this,classNames)},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?"remove":"add"](this,classNames)},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery("*",this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){jQuery(">*",this).remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments)}});jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&&document.body["client"+name]||jQuery.browser.safari&&window["inner"+name]||document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(Math.max(document.body["scroll"+name],document.documentElement["scroll"+name]),Math.max(document.body["offset"+name],document.documentElement["offset"+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+"px")}});function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0}var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2])},"#":function(a,i,m){return a.getAttribute("id")==m[2]},":":{lt:function(a,i,m){return i<m[3]-0},gt:function(a,i,m){return i>m[3]-0},nth:function(a,i,m){return m[3]-0==i},eq:function(a,i,m){return m[3]-0==i},first:function(a,i){return i==0},last:function(a,i,m,r){return i==r.length-1},even:function(a,i){return i%2==0},odd:function(a,i){return i%2},"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]==a},"last-child":function(a){return jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a},"only-child":function(a){return !jQuery.nth(a.parentNode.lastChild,2,"previousSibling")},parent:function(a){return a.firstChild},empty:function(a){return !a.firstChild},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||"").indexOf(m[3])>=0},visible:function(a){return"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden"},hidden:function(a){return"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden"},enabled:function(a){return !a.disabled},disabled:function(a){return a.disabled},checked:function(a){return a.checked},selected:function(a){return a.selected||jQuery.attr(a,"selected")},text:function(a){return"text"==a.type},radio:function(a){return"radio"==a.type},checkbox:function(a){return"checkbox"==a.type},file:function(a){return"file"==a.type},password:function(a){return"password"==a.type},submit:function(a){return"submit"==a.type},image:function(a){return"image"==a.type},reset:function(a){return"reset"==a.type},button:function(a){return"button"==a.type||jQuery.nodeName(a,"button")},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},has:function(a,i,m){return jQuery.find(m[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem}).length}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&&expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,"");cur=not?elems=f.r:jQuery.merge(cur,f.r)}return cur},find:function(t,context){if(typeof t!="string"){return[t]}if(context&&context.nodeType!=1&&context.nodeType!=9){return[]}context=context||document;var ret=[context],done=[],last,nodeName;while(t&&last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false,re=quickChild,m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++){for(var c=ret[i].firstChild;c;c=c.nextSibling){if(c.nodeType==1&&(nodeName=="*"||c.nodeName.toUpperCase()==nodeName)){r.push(c)}}}ret=r;t=t.replace(re,"");if(t.indexOf(" ")==0){continue}foundToken=true}else{re=/^([>+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j<rl;j++){var n=m=="~"||m=="+"?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling){if(n.nodeType==1){var id=jQuery.data(n);if(m=="~"&&merge[id]){break}if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m=="~"){merge[id]=true}r.push(n)}if(m=="+"){break}}}}ret=r;t=jQuery.trim(t.replace(re,""));foundToken=true}}if(t&&!foundToken){if(!t.indexOf(",")){if(context==ret[0]){ret.shift()}done=jQuery.merge(done,ret);r=ret=[context];t=" "+t.substr(1,t.length)}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]]}else{re2=quickClass;m=re2.exec(t)}m[2]=m[2].replace(/\\/g,"");var elem=ret[ret.length-1];if(m[1]=="#"&&elem&&elem.getElementById&&!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&&oid&&typeof oid.id=="string"&&oid.id!=m[2]){oid=jQuery('[@id="'+m[2]+'"]',elem)[0]}ret=r=oid&&(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[]}else{for(var i=0;ret[i];i++){var tag=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];if(tag=="*"&&ret[i].nodeName.toLowerCase()=="object"){tag="param"}r=jQuery.merge(r,ret[i].getElementsByTagName(tag))}if(m[1]=="."){r=jQuery.classFilter(r,m[2])}if(m[1]=="#"){var tmp=[];for(var i=0;r[i];i++){if(r[i].getAttribute("id")==m[2]){tmp=[r[i]];break}}r=tmp}ret=r}t=t.replace(re2,"")}}if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t)}}if(t){ret=[]}if(ret&&context==ret[0]){ret.shift()}done=jQuery.merge(done,ret);return done},classFilter:function(r,m,not){m=" "+m+" ";var tmp=[];for(var i=0;r[i];i++){var pass=(" "+r[i].className+" ").indexOf(m)>=0;if(!not&&pass||not&&!pass){tmp.push(r[i])}}return tmp},filter:function(t,r,not){var last;while(t&&t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,"");break}}if(!m){break}if(m[1]==":"&&m[2]=="not"){r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3])}else{if(m[1]=="."){r=jQuery.classFilter(r,m[2],not)}else{if(m[1]=="["){var tmp=[],type=m[3];for(var i=0,rl=r.length;i<rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2])){z=jQuery.attr(a,m[2])||""}if((type==""&&!!z||type=="="&&z==m[5]||type=="!="&&z!=m[5]||type=="^="&&z&&!z.indexOf(m[5])||type=="$="&&z.substr(z.length-m[5].length)==m[5]||(type=="*="||type=="~=")&&z.indexOf(m[5])>=0)^not){tmp.push(a)}}r=tmp}else{if(m[1]==":"&&m[2]=="nth-child"){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]=="even"&&"2n"||m[3]=="odd"&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i<rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling){if(n.nodeType==1){n.nodeIndex=c++}}merge[id]=true}var add=false;if(first==0){if(node.nodeIndex==last){add=true}}else{if((node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0){add=true}}if(add^not){tmp.push(node)}}r=tmp}else{var fn=jQuery.expr[m[1]];if(typeof fn=="object"){fn=fn[m[2]]}if(typeof fn=="string"){fn=eval("false||function(a,i){return "+fn+";}")}r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r)},not)}}}}}return{r:r,t:t}},dir:function(elem,dir){var matched=[],cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1){matched.push(cur)}cur=cur[dir]}return matched},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType==1&&++num==result){break}}return cur},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=elem){r.push(n)}}return r}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8){return}if(jQuery.browser.msie&&elem.setInterval){elem=window}if(!handler.guid){handler.guid=this.guid++}if(data!=undefined){var fn=handler;handler=this.proxy(fn,function(){return fn.apply(this,arguments)});handler.data=data}var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){if(typeof jQuery!="undefined"&&!jQuery.event.triggered){return jQuery.event.handle.apply(arguments.callee.elem,arguments)}});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener){elem.addEventListener(type,handle,false)}else{if(elem.attachEvent){elem.attachEvent("on"+type,handle)}}}}handlers[handler.guid]=handler;jQuery.event.global[type]=true});elem=null},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8){return}var events=jQuery.data(elem,"events"),ret,index;if(events){if(types==undefined||(typeof types=="string"&&types.charAt(0)==".")){for(var type in events){this.remove(elem,type+(types||""))}}else{if(types.type){handler=types.handler;types=types.type}jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];if(events[type]){if(handler){delete events[type][handler.guid]}else{for(handler in events[type]){if(!parts[1]||events[type][handler].type==parts[1]){delete events[type][handler]}}}for(ret in events[type]){break}if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener){elem.removeEventListener(type,jQuery.data(elem,"handle"),false)}else{if(elem.detachEvent){elem.detachEvent("on"+type,jQuery.data(elem,"handle"))}}}ret=null;delete events[type]}}})}for(ret in events){break}if(!ret){var handle=jQuery.data(elem,"handle");if(handle){handle.elem=null}jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle")}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data);if(type.indexOf("!")>=0){type=type.slice(0,-1);var exclusive=true}if(!elem){if(this.global[type]){jQuery("*").add([window,document]).trigger(type,data)}}else{if(elem.nodeType==3||elem.nodeType==8){return undefined}var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event){data.unshift({type:type,target:elem,preventDefault:function(){},stopPropagation:function(){},timeStamp:now()});data[0][expando]=true}data[0].type=type;if(exclusive){data[0].exclusive=true}var handle=jQuery.data(elem,"handle");if(handle){val=handle.apply(elem,data)}if((!fn||(jQuery.nodeName(elem,"a")&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false){val=false}if(event){data.shift()}if(extra&&jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined){val=ret}}if(fn&&donative!==false&&val!==false&&!(jQuery.nodeName(elem,"a")&&type=="click")){this.triggered=true;try{elem[type]()}catch(e){}}this.triggered=false}return val},handle:function(event){var val,ret,namespace,all,handlers;event=arguments[0]=jQuery.event.fix(event||window.event);namespace=event.type.split(".");event.type=namespace[0];namespace=namespace[1];all=!namespace&&!event.exclusive;handlers=(jQuery.data(this,"events")||{})[event.type];for(var j in handlers){var handler=handlers[j];if(all||handler.type==namespace){event.handler=handler;event.data=handler.data;ret=handler.apply(this,arguments);if(val!==false){val=ret}if(ret===false){event.preventDefault();event.stopPropagation()}}}return val},fix:function(event){if(event[expando]==true){return event}var originalEvent=event;event={originalEvent:originalEvent};var props="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view wheelDelta which".split(" ");for(var i=props.length;i;i--){event[props[i]]=originalEvent[props[i]]}event[expando]=true;event.preventDefault=function(){if(originalEvent.preventDefault){originalEvent.preventDefault()}originalEvent.returnValue=false};event.stopPropagation=function(){if(originalEvent.stopPropagation){originalEvent.stopPropagation()}originalEvent.cancelBubble=true};event.timeStamp=event.timeStamp||now();if(!event.target){event.target=event.srcElement||document}if(event.target.nodeType==3){event.target=event.target.parentNode}if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement}if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0)}if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode)){event.which=event.charCode||event.keyCode}if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey}if(!event.which&&event.button){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)))}return event},proxy:function(fn,proxy){proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;return proxy},special:{ready:{setup:function(){bindReady();return},teardown:function(){return}},mouseenter:{setup:function(){if(jQuery.browser.msie){return false}jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler);return true},teardown:function(){if(jQuery.browser.msie){return false}jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler);return true},handler:function(event){if(withinElement(event,this)){return true}event.type="mouseenter";return jQuery.event.handle.apply(this,arguments)}},mouseleave:{setup:function(){if(jQuery.browser.msie){return false}jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler);return true},teardown:function(){if(jQuery.browser.msie){return false}jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler);return true},handler:function(event){if(withinElement(event,this)){return true}event.type="mouseleave";return jQuery.event.handle.apply(this,arguments)}}}};jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data)})},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);return(fn||data).apply(this,arguments)});return this.each(function(){jQuery.event.add(this,type,one,fn&&data)})},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn)})},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn)})},triggerHandler:function(type,data,fn){return this[0]&&jQuery.event.trigger(type,data,this[0],false,fn)},toggle:function(fn){var args=arguments,i=1;while(i<args.length){jQuery.event.proxy(fn,args[i++])}return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;event.preventDefault();return args[this.lastToggle++].apply(this,arguments)||false}))},hover:function(fnOver,fnOut){return this.bind("mouseenter",fnOver).bind("mouseleave",fnOut)},ready:function(fn){bindReady();if(jQuery.isReady){fn.call(document,jQuery)}else{jQuery.readyList.push(function(){return fn.call(this,jQuery)})}return this}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document)});jQuery.readyList=null}jQuery(document).triggerHandler("ready")}}});var readyBound=false;function bindReady(){if(readyBound){return}readyBound=true;if(document.addEventListener&&!jQuery.browser.opera){document.addEventListener("DOMContentLoaded",jQuery.ready,false)}if(jQuery.browser.msie&&window==top){(function(){if(jQuery.isReady){return}try{document.documentElement.doScroll("left")}catch(error){setTimeout(arguments.callee,0);return}jQuery.ready()})()}if(jQuery.browser.opera){document.addEventListener("DOMContentLoaded",function(){if(jQuery.isReady){return}for(var i=0;i<document.styleSheets.length;i++){if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return}}jQuery.ready()},false)}if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady){return}if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return}if(numStyles===undefined){numStyles=jQuery("style, link[rel=stylesheet]").length}if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return}jQuery.ready()})()}jQuery.event.add(window,"load",jQuery.ready)}jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,change,select,submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name)}});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&&parent!=elem){try{parent=parent.parentNode}catch(error){parent=elem}}return parent==elem};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind()});jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!="string"){return this._load(url)}var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off)}callback=callback||function(){};var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=null}else{params=jQuery.param(params);type="POST"}}var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified"){self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText)}self.each(callback,[res.responseText,status,res])}});return this},serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val}}):{name:elem.name,value:val}}).get()}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f)}});var jsc=now();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null}return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type})},getScript:function(url,callback){return jQuery.get(url,null,callback,"script")},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={}}return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type})},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings)},ajaxSettings:{url:location.href,global:true,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:true,async:true,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!="string"){s.data=jQuery.param(s.data)}if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre)){s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?"}}else{if(!s.data||!s.data.match(jsre)){s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?"}}s.dataType="json"}if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data){s.data=(s.data+"").replace(jsre,"="+jsonp+"$1")}s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp]}catch(e){}if(head){head.removeChild(script)}}}if(s.dataType=="script"&&s.cache==null){s.cache=false}if(s.cache===false&&type=="GET"){var ts=now();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"")}if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null}if(s.global&&!jQuery.active++){jQuery.event.trigger("ajaxStart")}var remote=/^(?:\w+:)?\/\/([^\/?#]+)/;if(s.dataType=="script"&&type=="GET"&&remote.test(s.url)&&remote.exec(s.url)[1]!=location.host){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset){script.charset=s.scriptCharset}if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();head.removeChild(script)}}}head.appendChild(script);return undefined}var requestDone=false;var xhr=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(s.username){xhr.open(type,s.url,s.async,s.username,s.password)}else{xhr.open(type,s.url,s.async)}try{if(s.data){xhr.setRequestHeader("Content-Type",s.contentType)}if(s.ifModified){xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default)}catch(e){}if(s.beforeSend&&s.beforeSend(xhr,s)===false){s.global&&jQuery.active--;xhr.abort();return false}if(s.global){jQuery.event.trigger("ajaxSend",[xhr,s])}var onreadystatechange=function(isTimeout){if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null}status=isTimeout=="timeout"&&"timeout"||!jQuery.httpSuccess(xhr)&&"error"||s.ifModified&&jQuery.httpNotModified(xhr,s.url)&&"notmodified"||"success";if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s.dataFilter)}catch(e){status="parsererror"}}if(status=="success"){var modRes;try{modRes=xhr.getResponseHeader("Last-Modified")}catch(e){}if(s.ifModified&&modRes){jQuery.lastModified[s.url]=modRes}if(!jsonp){success()}}else{jQuery.handleError(s,xhr,status)}complete();if(s.async){xhr=null}}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0){setTimeout(function(){if(xhr){xhr.abort();if(!requestDone){onreadystatechange("timeout")}}},s.timeout)}}try{xhr.send(s.data)}catch(e){jQuery.handleError(s,xhr,null,e)}if(!s.async){onreadystatechange()}function success(){if(s.success){s.success(data,status)}if(s.global){jQuery.event.trigger("ajaxSuccess",[xhr,s])}}function complete(){if(s.complete){s.complete(xhr,status)}if(s.global){jQuery.event.trigger("ajaxComplete",[xhr,s])}if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop")}}return xhr},handleError:function(s,xhr,status,e){if(s.error){s.error(xhr,status,e)}if(s.global){jQuery.event.trigger("ajaxError",[xhr,s,e])}},active:0,httpSuccess:function(xhr){try{return !xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223||jQuery.browser.safari&&xhr.status==undefined}catch(e){}return false},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");return xhr.status==304||xhrRes==jQuery.lastModified[url]||jQuery.browser.safari&&xhr.status==undefined}catch(e){}return false},httpData:function(xhr,type,filter){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.tagName=="parsererror"){throw"parsererror"}if(filter){data=filter(data,type)}if(type=="script"){jQuery.globalEval(data)}if(type=="json"){data=eval("("+data+")")}return data},param:function(a){var s=[];if(a.constructor==Array||a.jquery){jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value))})}else{for(var j in a){if(a[j]&&a[j].constructor==Array){jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+"="+encodeURIComponent(this))})}else{s.push(encodeURIComponent(j)+"="+encodeURIComponent(jQuery.isFunction(a[j])?a[j]():a[j]))}}}return s.join("&").replace(/%20/g,"+")}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:"show",width:"show",opacity:"show"},speed,callback):this.filter(":hidden").each(function(){this.style.display=this.oldblock||"";if(jQuery.css(this,"display")=="none"){var elem=jQuery("<"+this.tagName+" />").appendTo("body");this.style.display=elem.css("display");if(this.style.display=="none"){this.style.display="block"}elem.remove()}}).end()},hide:function(speed,callback){return speed?this.animate({height:"hide",width:"hide",opacity:"hide"},speed,callback):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display");this.style.display="none"}).end()},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]()})},slideDown:function(speed,callback){return this.animate({height:"show"},speed,callback)},slideUp:function(speed,callback){return this.animate({height:"hide"},speed,callback)},slideToggle:function(speed,callback){return this.animate({height:"toggle"},speed,callback)},fadeIn:function(speed,callback){return this.animate({opacity:"show"},speed,callback)},fadeOut:function(speed,callback){return this.animate({opacity:"hide"},speed,callback)},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback)},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){if(this.nodeType!=1){return false}var opt=jQuery.extend({},optall),p,hidden=jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden){return opt.complete.call(this)}if(p=="height"||p=="width"){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow}}if(opt.overflow!=null){this.style.overflow="hidden"}opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val)){e[val=="toggle"?hidden?"show":"hide":val](prop)}else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit}if(parts[1]){end=((parts[1]=="-="?-1:1)*end)+start}e.custom(start,end,unit)}else{e.custom(start,val,"")}}});return true})},queue:function(type,fn){if(jQuery.isFunction(type)||(type&&type.constructor==Array)){fn=type;type="fx"}if(!type||(typeof type=="string"&&!fn)){return queue(this[0],type)}return this.each(function(){if(fn.constructor==Array){queue(this,type,fn)}else{queue(this,type).push(fn);if(queue(this,type).length==1){fn.call(this)}}})},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue){this.queue([])}this.each(function(){for(var i=timers.length-1;i>=0;i--){if(timers[i].elem==this){if(gotoEnd){timers[i](true)}timers.splice(i,1)}}});if(!gotoEnd){this.dequeue()}return this}});var queue=function(elem,type,array){if(elem){type=type||"fx";var q=jQuery.data(elem,type+"queue");if(!q||array){q=jQuery.data(elem,type+"queue",jQuery.makeArray(array))}}return q};jQuery.fn.dequeue=function(type){type=type||"fx";return this.each(function(){var q=queue(this,type);q.shift();if(q.length){q[0].call(this)}})};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&speed.constructor==Object?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&easing.constructor!=Function&&easing};opt.duration=(opt.duration&&opt.duration.constructor==Number?opt.duration:jQuery.fx.speeds[opt.duration])||jQuery.fx.speeds.def;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false){jQuery(this).dequeue()}if(jQuery.isFunction(opt.old)){opt.old.call(this)}};return opt},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig){options.orig={}}}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop=="height"||this.prop=="width"){this.elem.style.display="block"}},cur:function(force){if(this.elem[this.prop]!=null&&this.elem.style[this.prop]==null){return this.elem[this.prop]}var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd)}t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++){if(!timers[i]()){timers.splice(i--,1)}}if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null}},13)}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop=="width"||this.prop=="height"){this.elem.style[this.prop]="1px"}jQuery(this.elem).show()},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(gotoEnd){var t=now();if(gotoEnd||t>this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim){if(this.options.curAnim[i]!==true){done=false}}if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){this.elem.style.display="none"}if(this.options.hide||this.options.show){for(var p in this.options.curAnim){jQuery.attr(this.elem.style,p,this.options.orig[p])}}}if(done){this.options.complete.call(this.elem)}return false}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,def:400},step:{scrollLeft:function(fx){fx.elem.scrollLeft=fx.now},scrollTop:function(fx){fx.elem.scrollTop=fx.now},opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now)},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit}}});jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem){with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),css=jQuery.curCSS,fixed=css(elem,"position")=="fixed";if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop)}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2){border(offsetParent)}if(!fixed&&css(offsetParent,"position")=="fixed"){fixed=true}offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent}while(parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(css(parent,"display"))){add(-parent.scrollLeft,-parent.scrollTop)}if(mozilla&&css(parent,"overflow")!="visible"){border(parent)}parent=parent.parentNode}if((safari2&&(fixed||css(offsetChild,"position")=="absolute"))||(mozilla&&css(offsetChild,"position")!="absolute")){add(-doc.body.offsetLeft,-doc.body.offsetTop)}if(fixed){add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop))}}results={top:top,left:left}}}function border(elem){add(jQuery.curCSS(elem,"borderLeftWidth",true),jQuery.curCSS(elem,"borderTopWidth",true))}function add(l,t){left+=parseInt(l,10)||0;top+=parseInt(t,10)||0}return results};jQuery.fn.extend({position:function(){var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,"marginTop");offset.left-=num(this,"marginLeft");parentOffset.top+=num(offsetParent,"borderTopWidth");parentOffset.left+=num(offsetParent,"borderLeftWidth");results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}}return results},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,"position")=="static")){offsetParent=offsetParent.offsetParent}return jQuery(offsetParent)}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){if(!this[0]){return}return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val}):this[0]==window||this[0]==document?self[i?"pageYOffset":"pageXOffset"]||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method]}});jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom";jQuery.fn["inner"+name]=function(){return this[name.toLowerCase()]()+num(this,"padding"+tl)+num(this,"padding"+br)};jQuery.fn["outer"+name]=function(margin){return this["inner"+name]()+num(this,"border"+tl+"Width")+num(this,"border"+br+"Width")+(margin?num(this,"margin"+tl)+num(this,"margin"+br):0)}})})();SimileAjax.version="pre 2.3.0";SimileAjax.jQuery=jQuery.noConflict(true);if(typeof window["$"]=="undefined"){window.$=SimileAjax.jQuery}SimileAjax.Platform.os={isMac:false,isWin:false,isWin32:false,isUnix:false};SimileAjax.Platform.browser={isIE:false,isNetscape:false,isMozilla:false,isFirefox:false,isOpera:false,isSafari:false,majorVersion:0,minorVersion:0};(function(){var d=navigator.appName.toLowerCase();var a=navigator.userAgent.toLowerCase();SimileAjax.Platform.os.isMac=(a.indexOf("mac")!=-1);SimileAjax.Platform.os.isWin=(a.indexOf("win")!=-1);SimileAjax.Platform.os.isWin32=SimileAjax.Platform.isWin&&(a.indexOf("95")!=-1||a.indexOf("98")!=-1||a.indexOf("nt")!=-1||a.indexOf("win32")!=-1||a.indexOf("32bit")!=-1);SimileAjax.Platform.os.isUnix=(a.indexOf("x11")!=-1);SimileAjax.Platform.browser.isIE=(d.indexOf("microsoft")!=-1);SimileAjax.Platform.browser.isNetscape=(d.indexOf("netscape")!=-1);SimileAjax.Platform.browser.isMozilla=(a.indexOf("mozilla")!=-1);SimileAjax.Platform.browser.isFirefox=(a.indexOf("firefox")!=-1);SimileAjax.Platform.browser.isOpera=(d.indexOf("opera")!=-1);SimileAjax.Platform.browser.isSafari=(d.indexOf("safari")!=-1);var b=function(f){var g=f.split(".");SimileAjax.Platform.browser.majorVersion=parseInt(g[0]);SimileAjax.Platform.browser.minorVersion=parseInt(g[1])};var e=function(g,h,f){var i=g.indexOf(h,f);return i>=0?i:g.length};if(SimileAjax.Platform.browser.isMozilla){var c=a.indexOf("mozilla/");if(c>=0){b(a.substring(c+8,e(a," ",c)))}}if(SimileAjax.Platform.browser.isIE){var c=a.indexOf("msie ");if(c>=0){b(a.substring(c+5,e(a,";",c)))}}if(SimileAjax.Platform.browser.isNetscape){var c=a.indexOf("rv:");if(c>=0){b(a.substring(c+3,e(a,")",c)))}}if(SimileAjax.Platform.browser.isFirefox){var c=a.indexOf("firefox/");if(c>=0){b(a.substring(c+8,e(a," ",c)))}}if(!("localeCompare" in String.prototype)){String.prototype.localeCompare=function(f){if(this<f){return -1}else{if(this>f){return 1}else{return 0}}}}})();SimileAjax.Platform.getDefaultLocale=function(){return SimileAjax.Platform.clientLocale};SimileAjax.ListenerQueue=function(a){this._listeners=[];this._wildcardHandlerName=a};SimileAjax.ListenerQueue.prototype.add=function(a){this._listeners.push(a)};SimileAjax.ListenerQueue.prototype.remove=function(b){var a=this._listeners;for(var c=0;c<a.length;c++){if(a[c]==b){a.splice(c,1);break}}};SimileAjax.ListenerQueue.prototype.fire=function(e,f){var a=[].concat(this._listeners);for(var d=0;d<a.length;d++){var c=a[d];if(e in c){try{c[e].apply(c,f)}catch(b){SimileAjax.Debug.exception("Error firing event of name "+e,b)}}else{if(this._wildcardHandlerName!=null&&this._wildcardHandlerName in c){try{c[this._wildcardHandlerName].apply(c,[e])}catch(b){SimileAjax.Debug.exception("Error firing event of name "+e+" to wildcard handler",b)}}}}};SimileAjax.Set=function(a){this._hash={};this._count=0;if(a instanceof Array){for(var b=0;b<a.length;b++){this.add(a[b])}}else{if(a instanceof SimileAjax.Set){this.addSet(a)}}};SimileAjax.Set.prototype.add=function(a){if(!(a in this._hash)){this._hash[a]=true;this._count++;return true}return false};SimileAjax.Set.prototype.addSet=function(b){for(var a in b._hash){this.add(a)}};SimileAjax.Set.prototype.remove=function(a){if(a in this._hash){delete this._hash[a];this._count--;return true}return false};SimileAjax.Set.prototype.removeSet=function(b){for(var a in b._hash){this.remove(a)}};SimileAjax.Set.prototype.retainSet=function(b){for(var a in this._hash){if(!b.contains(a)){delete this._hash[a];this._count--}}};SimileAjax.Set.prototype.contains=function(a){return(a in this._hash)};SimileAjax.Set.prototype.size=function(){return this._count};SimileAjax.Set.prototype.toArray=function(){var a=[];for(var b in this._hash){a.push(b)}return a};SimileAjax.Set.prototype.visit=function(a){for(var b in this._hash){if(a(b)==true){break}}};SimileAjax.SortedArray=function(b,a){this._a=(a instanceof Array)?a:[];this._compare=b};SimileAjax.SortedArray.prototype.add=function(b){var a=this;var c=this.find(function(d){return a._compare(d,b)});if(c<this._a.length){this._a.splice(c,0,b)}else{this._a.push(b)}};SimileAjax.SortedArray.prototype.remove=function(b){var a=this;var c=this.find(function(d){return a._compare(d,b)});while(c<this._a.length&&this._compare(this._a[c],b)==0){if(this._a[c]==b){this._a.splice(c,1);return true}else{c++}}return false};SimileAjax.SortedArray.prototype.removeAll=function(){this._a=[]};SimileAjax.SortedArray.prototype.elementAt=function(a){return this._a[a]};SimileAjax.SortedArray.prototype.length=function(){return this._a.length};SimileAjax.SortedArray.prototype.find=function(c){var e=0;var a=this._a.length;while(e<a){var d=Math.floor((e+a)/2);var b=c(this._a[d]);if(d==e){return b<0?e+1:e}else{if(b<0){e=d}else{a=d}}}return e};SimileAjax.SortedArray.prototype.getFirst=function(){return(this._a.length>0)?this._a[0]:null};SimileAjax.SortedArray.prototype.getLast=function(){return(this._a.length>0)?this._a[this._a.length-1]:null};SimileAjax.EventIndex=function(b){var a=this;this._unit=(b!=null)?b:SimileAjax.NativeDateUnit;this._events=new SimileAjax.SortedArray(function(d,c){return a._unit.compare(d.getStart(),c.getStart())});this._idToEvent={};this._indexed=true};SimileAjax.EventIndex.prototype.getUnit=function(){return this._unit};SimileAjax.EventIndex.prototype.getEvent=function(a){return this._idToEvent[a]};SimileAjax.EventIndex.prototype.add=function(a){this._events.add(a);this._idToEvent[a.getID()]=a;this._indexed=false};SimileAjax.EventIndex.prototype.removeAll=function(){this._events.removeAll();this._idToEvent={};this._indexed=false};SimileAjax.EventIndex.prototype.getCount=function(){return this._events.length()};SimileAjax.EventIndex.prototype.getIterator=function(a,b){if(!this._indexed){this._index()}return new SimileAjax.EventIndex._Iterator(this._events,a,b,this._unit)};SimileAjax.EventIndex.prototype.getReverseIterator=function(a,b){if(!this._indexed){this._index()}return new SimileAjax.EventIndex._ReverseIterator(this._events,a,b,this._unit)};SimileAjax.EventIndex.prototype.getAllIterator=function(){return new SimileAjax.EventIndex._AllIterator(this._events)};SimileAjax.EventIndex.prototype.getEarliestDate=function(){var a=this._events.getFirst();return(a==null)?null:a.getStart()};SimileAjax.EventIndex.prototype.getLatestDate=function(){var a=this._events.getLast();if(a==null){return null}if(!this._indexed){this._index()}var c=a._earliestOverlapIndex;var d=this._events.elementAt(c).getEnd();for(var b=c+1;b<this._events.length();b++){d=this._unit.later(d,this._events.elementAt(b).getEnd())}return d};SimileAjax.EventIndex.prototype._index=function(){var d=this._events.length();for(var c=0;c<d;c++){var e=this._events.elementAt(c);e._earliestOverlapIndex=c}var b=1;for(var c=0;c<d;c++){var e=this._events.elementAt(c);var f=e.getEnd();b=Math.max(b,c+1);while(b<d){var a=this._events.elementAt(b);var g=a.getStart();if(this._unit.compare(g,f)<0){a._earliestOverlapIndex=c;b++}else{break}}}this._indexed=true};SimileAjax.EventIndex._Iterator=function(a,c,b,d){this._events=a;this._startDate=c;this._endDate=b;this._unit=d;this._currentIndex=a.find(function(e){return d.compare(e.getStart(),c)});if(this._currentIndex-1>=0){this._currentIndex=this._events.elementAt(this._currentIndex-1)._earliestOverlapIndex}this._currentIndex--;this._maxIndex=a.find(function(e){return d.compare(e.getStart(),b)});this._hasNext=false;this._next=null;this._findNext()};SimileAjax.EventIndex._Iterator.prototype={hasNext:function(){return this._hasNext},next:function(){if(this._hasNext){var a=this._next;this._findNext();return a}else{return null}},_findNext:function(){var b=this._unit;while((++this._currentIndex)<this._maxIndex){var a=this._events.elementAt(this._currentIndex);if(b.compare(a.getStart(),this._endDate)<0&&b.compare(a.getEnd(),this._startDate)>0){this._next=a;this._hasNext=true;return}}this._next=null;this._hasNext=false}};SimileAjax.EventIndex._ReverseIterator=function(a,c,b,d){this._events=a;this._startDate=c;this._endDate=b;this._unit=d;this._minIndex=a.find(function(e){return d.compare(e.getStart(),c)});if(this._minIndex-1>=0){this._minIndex=this._events.elementAt(this._minIndex-1)._earliestOverlapIndex}this._maxIndex=a.find(function(e){return d.compare(e.getStart(),b)});this._currentIndex=this._maxIndex;this._hasNext=false;this._next=null;this._findNext()};SimileAjax.EventIndex._ReverseIterator.prototype={hasNext:function(){return this._hasNext},next:function(){if(this._hasNext){var a=this._next;this._findNext();return a}else{return null}},_findNext:function(){var b=this._unit;while((--this._currentIndex)>=this._minIndex){var a=this._events.elementAt(this._currentIndex);if(b.compare(a.getStart(),this._endDate)<0&&b.compare(a.getEnd(),this._startDate)>0){this._next=a;this._hasNext=true;return}}this._next=null;this._hasNext=false}};SimileAjax.EventIndex._AllIterator=function(a){this._events=a;this._index=0};SimileAjax.EventIndex._AllIterator.prototype={hasNext:function(){return this._index<this._events.length()},next:function(){return this._index<this._events.length()?this._events.elementAt(this._index++):null}};SimileAjax.DateTime=new Object();SimileAjax.DateTime.MILLISECOND=0;SimileAjax.DateTime.SECOND=1;SimileAjax.DateTime.MINUTE=2;SimileAjax.DateTime.HOUR=3;SimileAjax.DateTime.DAY=4;SimileAjax.DateTime.WEEK=5;SimileAjax.DateTime.MONTH=6;SimileAjax.DateTime.YEAR=7;SimileAjax.DateTime.DECADE=8;SimileAjax.DateTime.CENTURY=9;SimileAjax.DateTime.MILLENNIUM=10;SimileAjax.DateTime.EPOCH=-1;SimileAjax.DateTime.ERA=-2;SimileAjax.DateTime.gregorianUnitLengths=[];(function(){var b=SimileAjax.DateTime;var a=b.gregorianUnitLengths;a[b.MILLISECOND]=1;a[b.SECOND]=1000;a[b.MINUTE]=a[b.SECOND]*60;a[b.HOUR]=a[b.MINUTE]*60;a[b.DAY]=a[b.HOUR]*24;a[b.WEEK]=a[b.DAY]*7;a[b.MONTH]=a[b.DAY]*31;a[b.YEAR]=a[b.DAY]*365;a[b.DECADE]=a[b.YEAR]*10;a[b.CENTURY]=a[b.YEAR]*100;a[b.MILLENNIUM]=a[b.YEAR]*1000})();SimileAjax.DateTime._dateRegexp=new RegExp("^(-?)([0-9]{4})("+["(-?([0-9]{2})(-?([0-9]{2}))?)","(-?([0-9]{3}))","(-?W([0-9]{2})(-?([1-7]))?)"].join("|")+")?$");SimileAjax.DateTime._timezoneRegexp=new RegExp("Z|(([-+])([0-9]{2})(:?([0-9]{2}))?)$");SimileAjax.DateTime._timeRegexp=new RegExp("^([0-9]{2})(:?([0-9]{2})(:?([0-9]{2})(.([0-9]+))?)?)?$");SimileAjax.DateTime.setIso8601Date=function(k,b){var i=b.match(SimileAjax.DateTime._dateRegexp);if(!i){throw new Error("Invalid date string: "+b)}var c=(i[1]=="-")?-1:1;var h=c*i[2];var j=i[5];var a=i[7];var l=i[9];var d=i[11];var e=(i[13])?i[13]:1;k.setUTCFullYear(h);if(l){k.setUTCMonth(0);k.setUTCDate(Number(l))}else{if(d){k.setUTCMonth(0);k.setUTCDate(1);var f=k.getUTCDay();var g=(f)?f:7;var m=Number(e)+(7*Number(d));if(g<=4){k.setUTCDate(m+1-g)}else{k.setUTCDate(m+8-g)}}else{if(j){k.setUTCDate(1);k.setUTCMonth(j-1)}if(a){k.setUTCDate(a)}}}return k};SimileAjax.DateTime.setIso8601Time=function(c,e){var b=e.match(SimileAjax.DateTime._timeRegexp);if(!b){SimileAjax.Debug.warn("Invalid time string: "+e);return false}var a=b[1];var d=Number((b[3])?b[3]:0);var f=(b[5])?b[5]:0;var g=b[7]?(Number("0."+b[7])*1000):0;c.setUTCHours(a);c.setUTCMinutes(d);c.setUTCSeconds(f);c.setUTCMilliseconds(g);return c};SimileAjax.DateTime.timezoneOffset=new Date().getTimezoneOffset();SimileAjax.DateTime.setIso8601=function(e,a){var c=null;var b=(a.indexOf("T")==-1)?a.split(" "):a.split("T");SimileAjax.DateTime.setIso8601Date(e,b[0]);if(b.length==2){var d=b[1].match(SimileAjax.DateTime._timezoneRegexp);if(d){if(d[0]=="Z"){c=0}else{c=(Number(d[3])*60)+Number(d[5]);c*=((d[2]=="-")?1:-1)}b[1]=b[1].substr(0,b[1].length-d[0].length)}SimileAjax.DateTime.setIso8601Time(e,b[1])}if(c==null){c=e.getTimezoneOffset()}e.setTime(e.getTime()+c*60000);return e};SimileAjax.DateTime.parseIso8601DateTime=function(a){try{return SimileAjax.DateTime.setIso8601(new Date(0),a)}catch(b){return null}};SimileAjax.DateTime.parseGregorianDateTime=function(c){if(c==null){return null}else{if(c instanceof Date){return c}}var g=c.toString();if(g.length>0&&g.length<8){var f=g.indexOf(" ");if(f>0){var a=parseInt(g.substr(0,f));var b=g.substr(f+1);if(b.toLowerCase()=="bc"){a=1-a}}else{var a=parseInt(g)}var d=new Date(0);d.setUTCFullYear(a);return d}try{return new Date(Date.parse(g))}catch(e){return null}};SimileAjax.DateTime.roundDownToInterval=function(k,c,g,e,d){var j=g*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR];var f=new Date(k.getTime()+j);var b=function(l){l.setUTCMilliseconds(0);l.setUTCSeconds(0);l.setUTCMinutes(0);l.setUTCHours(0)};var a=function(l){b(l);l.setUTCDate(1);l.setUTCMonth(0)};switch(c){case SimileAjax.DateTime.MILLISECOND:var h=f.getUTCMilliseconds();f.setUTCMilliseconds(h-(h%e));break;case SimileAjax.DateTime.SECOND:f.setUTCMilliseconds(0);var h=f.getUTCSeconds();f.setUTCSeconds(h-(h%e));break;case SimileAjax.DateTime.MINUTE:f.setUTCMilliseconds(0);f.setUTCSeconds(0);var h=f.getUTCMinutes();f.setTime(f.getTime()-(h%e)*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);break;case SimileAjax.DateTime.HOUR:f.setUTCMilliseconds(0);f.setUTCSeconds(0);f.setUTCMinutes(0);var h=f.getUTCHours();f.setUTCHours(h-(h%e));break;case SimileAjax.DateTime.DAY:b(f);break;case SimileAjax.DateTime.WEEK:b(f);var i=(f.getUTCDay()+7-d)%7;f.setTime(f.getTime()-i*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY]);break;case SimileAjax.DateTime.MONTH:b(f);f.setUTCDate(1);var h=f.getUTCMonth();f.setUTCMonth(h-(h%e));break;case SimileAjax.DateTime.YEAR:a(f);var h=f.getUTCFullYear();f.setUTCFullYear(h-(h%e));break;case SimileAjax.DateTime.DECADE:a(f);f.setUTCFullYear(Math.floor(f.getUTCFullYear()/10)*10);break;case SimileAjax.DateTime.CENTURY:a(f);f.setUTCFullYear(Math.floor(f.getUTCFullYear()/100)*100);break;case SimileAjax.DateTime.MILLENNIUM:a(f);f.setUTCFullYear(Math.floor(f.getUTCFullYear()/1000)*1000);break}k.setTime(f.getTime()-j)};SimileAjax.DateTime.roundUpToInterval=function(e,b,d,a,f){var c=e.getTime();SimileAjax.DateTime.roundDownToInterval(e,b,d,a,f);if(e.getTime()<c){e.setTime(e.getTime()+SimileAjax.DateTime.gregorianUnitLengths[b]*a)}};SimileAjax.DateTime.incrementByInterval=function(a,c,e){e=(typeof e=="undefined")?0:e;var b=e*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR];var d=new Date(a.getTime()+b);switch(c){case SimileAjax.DateTime.MILLISECOND:d.setTime(d.getTime()+1);break;case SimileAjax.DateTime.SECOND:d.setTime(d.getTime()+1000);break;case SimileAjax.DateTime.MINUTE:d.setTime(d.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.MINUTE]);break;case SimileAjax.DateTime.HOUR:d.setTime(d.getTime()+SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR]);break;case SimileAjax.DateTime.DAY:d.setUTCDate(d.getUTCDate()+1);break;case SimileAjax.DateTime.WEEK:d.setUTCDate(d.getUTCDate()+7);break;case SimileAjax.DateTime.MONTH:d.setUTCMonth(d.getUTCMonth()+1);break;case SimileAjax.DateTime.YEAR:d.setUTCFullYear(d.getUTCFullYear()+1);break;case SimileAjax.DateTime.DECADE:d.setUTCFullYear(d.getUTCFullYear()+10);break;case SimileAjax.DateTime.CENTURY:d.setUTCFullYear(d.getUTCFullYear()+100);break;case SimileAjax.DateTime.MILLENNIUM:d.setUTCFullYear(d.getUTCFullYear()+1000);break}a.setTime(d.getTime()-b)};SimileAjax.DateTime.removeTimeZoneOffset=function(a,b){return new Date(a.getTime()+b*SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.HOUR])};SimileAjax.DateTime.getTimezone=function(){var a=new Date().getTimezoneOffset();return a/-60};SimileAjax.Debug={silent:false};SimileAjax.Debug.log=function(b){var a;if("console" in window&&"log" in window.console){a=function(c){console.log(c)}}else{a=function(c){if(!SimileAjax.Debug.silent){alert(c)}}}SimileAjax.Debug.log=a;a(b)};SimileAjax.Debug.warn=function(b){var a;if("console" in window&&"warn" in window.console){a=function(c){console.warn(c)}}else{a=function(c){if(!SimileAjax.Debug.silent){alert(c)}}}SimileAjax.Debug.warn=a;a(b)};SimileAjax.Debug.exception=function(d,b){var a,c=SimileAjax.parseURLParameters();if(c.errors=="throw"||SimileAjax.params.errors=="throw"){a=function(e,f){throw (e)}}else{if("console" in window&&"error" in window.console){a=function(e,f){if(f!=null){console.error(f+" %o",e)}else{console.error(e)}throw (e)}}else{a=function(e,f){if(!SimileAjax.Debug.silent){alert("Caught exception: "+f+"\n\nDetails: "+("description" in e?e.description:e))}throw (e)}}}SimileAjax.Debug.exception=a;a(d,b)};SimileAjax.Debug.objectToString=function(a){return SimileAjax.Debug._objectToString(a,"")};SimileAjax.Debug._objectToString=function(c,d){var e=d+" ";if(typeof c=="object"){var a="{";for(b in c){a+=e+b+": "+SimileAjax.Debug._objectToString(c[b],e)+"\n"}a+=d+"}";return a}else{if(typeof c=="array"){var a="[";for(var b=0;b<c.length;b++){a+=SimileAjax.Debug._objectToString(c[b],e)+"\n"}a+=d+"]";return a}else{return c}}};SimileAjax.DOM=new Object();SimileAjax.DOM.registerEventWithObject=function(c,a,b,d){SimileAjax.DOM.registerEvent(c,a,function(f,g,e){return b[d].call(b,f,g,e)})};SimileAjax.DOM.registerEvent=function(c,d,b){var a=function(f){f=(f)?f:((event)?event:null);if(f){var e=(f.target)?f.target:((f.srcElement)?f.srcElement:null);if(e){e=(e.nodeType==1||e.nodeType==9)?e:e.parentNode}return b(c,f,e)}return true};if(SimileAjax.Platform.browser.isIE){c.attachEvent("on"+d,a)}else{c.addEventListener(d,a,false)}};SimileAjax.DOM.getPageCoordinates=function(e){var b=0;var c=0;if(e.nodeType!=1){e=e.parentNode}var d=e;while(d!=null){b+=d.offsetLeft;c+=d.offsetTop;d=d.offsetParent}var a=document.body;while(e!=null&&e!=a){if("scrollLeft" in e){b-=e.scrollLeft;c-=e.scrollTop}e=e.parentNode}return{left:b,top:c}};SimileAjax.DOM.getSize=function(c){var a=this.getStyle(c,"width");var b=this.getStyle(c,"height");if(a.indexOf("px")>-1){a=a.replace("px","")}if(b.indexOf("px")>-1){b=b.replace("px","")}return{w:a,h:b}};SimileAjax.DOM.getStyle=function(c,a){if(c.currentStyle){var b=c.currentStyle[a]}else{if(window.getComputedStyle){var b=document.defaultView.getComputedStyle(c,null).getPropertyValue(a)}else{var b=""}}return b};SimileAjax.DOM.getEventRelativeCoordinates=function(c,b){if(SimileAjax.Platform.browser.isIE){if(c.type=="mousewheel"){var a=SimileAjax.DOM.getPageCoordinates(b);return{x:c.clientX-a.left,y:c.clientY-a.top}}else{return{x:c.offsetX,y:c.offsetY}}}else{var a=SimileAjax.DOM.getPageCoordinates(b);if((c.type=="DOMMouseScroll")&&SimileAjax.Platform.browser.isFirefox&&(SimileAjax.Platform.browser.majorVersion==2)){return{x:c.screenX-a.left,y:c.screenY-a.top}}else{return{x:c.pageX-a.left,y:c.pageY-a.top}}}};SimileAjax.DOM.getEventPageCoordinates=function(a){if(SimileAjax.Platform.browser.isIE){return{x:a.clientX+document.body.scrollLeft,y:a.clientY+document.body.scrollTop}}else{return{x:a.pageX,y:a.pageY}}};SimileAjax.DOM.hittest=function(a,b,c){return SimileAjax.DOM._hittest(document.body,a,b,c)};SimileAjax.DOM._hittest=function(b,f,g,d){var e=b.childNodes;outer:for(var k=0;k<e.length;k++){var j=e[k];for(var l=0;l<d.length;l++){if(j==d[l]){continue outer}}if(j.offsetWidth==0&&j.offsetHeight==0){var c=SimileAjax.DOM._hittest(j,f,g,d);if(c!=j){return c}}else{var h=0;var m=0;var a=j;while(a){h+=a.offsetTop;m+=a.offsetLeft;a=a.offsetParent}if(m<=f&&h<=g&&(f-m)<j.offsetWidth&&(g-h)<j.offsetHeight){return SimileAjax.DOM._hittest(j,f,g,d)}else{if(j.nodeType==1&&j.tagName=="TR"){var i=SimileAjax.DOM._hittest(j,f,g,d);if(i!=j){return i}}}}}return b};SimileAjax.DOM.cancelEvent=function(a){a.returnValue=false;a.cancelBubble=true;if("preventDefault" in a){a.preventDefault()}};SimileAjax.DOM.appendClassName=function(b,a){var c=b.className.split(" ");for(var d=0;d<c.length;d++){if(c[d]==a){return}}c.push(a);b.className=c.join(" ")};SimileAjax.DOM.createInputElement=function(a){var b=document.createElement("div");b.innerHTML="<input type='"+a+"' />";return b.firstChild};SimileAjax.DOM.createDOMFromTemplate=function(a){var b={};b.elmt=SimileAjax.DOM._createDOMFromTemplate(a,b,null);return b};SimileAjax.DOM._createDOMFromTemplate=function(i,h,a){if(i==null){return null}else{if(typeof i!="object"){var b=document.createTextNode(i);if(a!=null){a.appendChild(b)}return b}else{var d=null;if("tag" in i){var e=i.tag;if(a!=null){if(e=="tr"){d=a.insertRow(a.rows.length)}else{if(e=="td"){d=a.insertCell(a.cells.length)}}}if(d==null){d=e=="input"?SimileAjax.DOM.createInputElement(i.type):document.createElement(e);if(a!=null){a.appendChild(d)}}}else{d=i.elmt;if(a!=null){a.appendChild(d)}}for(var c in i){var g=i[c];if(c=="field"){h[g]=d}else{if(c=="className"){d.className=g}else{if(c=="id"){d.id=g}else{if(c=="title"){d.title=g}else{if(c=="type"&&d.tagName=="input"){}else{if(c=="style"){for(n in g){var f=g[n];if(n=="float"){n=SimileAjax.Platform.browser.isIE?"styleFloat":"cssFloat"}d.style[n]=f}}else{if(c=="children"){for(var j=0;j<g.length;j++){SimileAjax.DOM._createDOMFromTemplate(g[j],h,d)}}else{if(c!="tag"&&c!="elmt"){d.setAttribute(c,g)}}}}}}}}}return d}}};SimileAjax.DOM._cachedParent=null;SimileAjax.DOM.createElementFromString=function(a){if(SimileAjax.DOM._cachedParent==null){SimileAjax.DOM._cachedParent=document.createElement("div")}SimileAjax.DOM._cachedParent.innerHTML=a;return SimileAjax.DOM._cachedParent.firstChild};SimileAjax.DOM.createDOMFromString=function(a,d,c){var e=typeof a=="string"?document.createElement(a):a;e.innerHTML=d;var b={elmt:e};SimileAjax.DOM._processDOMChildrenConstructedFromString(b,e,c!=null?c:{});return b};SimileAjax.DOM._processDOMConstructedFromString=function(c,a,e){var b=a.id;if(b!=null&&b.length>0){a.removeAttribute("id");if(b in e){var d=a.parentNode;d.insertBefore(e[b],a);d.removeChild(a);c[b]=e[b];return}else{c[b]=a}}if(a.hasChildNodes()){SimileAjax.DOM._processDOMChildrenConstructedFromString(c,a,e)}};SimileAjax.DOM._processDOMChildrenConstructedFromString=function(b,e,c){var d=e.firstChild;while(d!=null){var a=d.nextSibling;if(d.nodeType==1){SimileAjax.DOM._processDOMConstructedFromString(b,d,c)}d=a}};SimileAjax.Graphics=new Object();SimileAjax.Graphics.pngIsTranslucent=(!SimileAjax.Platform.browser.isIE)||(SimileAjax.Platform.browser.majorVersion>6);if(!SimileAjax.Graphics.pngIsTranslucent){SimileAjax.includeCssFile(document,SimileAjax.urlPrefix+"styles/graphics-ie6.css")}SimileAjax.Graphics._createTranslucentImage1=function(a,b){var c=document.createElement("img");c.setAttribute("src",a);if(b!=null){c.style.verticalAlign=b}return c};SimileAjax.Graphics._createTranslucentImage2=function(a,b){var c=document.createElement("img");c.style.width="1px";c.style.height="1px";c.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"', sizingMethod='image')";c.style.verticalAlign=(b!=null)?b:"middle";return c};SimileAjax.Graphics.createTranslucentImage=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImage1:SimileAjax.Graphics._createTranslucentImage2;SimileAjax.Graphics._createTranslucentImageHTML1=function(a,b){return'<img src="'+a+'"'+(b!=null?' style="vertical-align: '+b+';"':"")+" />"};SimileAjax.Graphics._createTranslucentImageHTML2=function(a,b){var c="width: 1px; height: 1px; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"', sizingMethod='image');"+(b!=null?" vertical-align: "+b+";":"");return"<img src='"+a+"' style=\""+c+'" />'};SimileAjax.Graphics.createTranslucentImageHTML=SimileAjax.Graphics.pngIsTranslucent?SimileAjax.Graphics._createTranslucentImageHTML1:SimileAjax.Graphics._createTranslucentImageHTML2;SimileAjax.Graphics.setOpacity=function(c,a){if(SimileAjax.Platform.browser.isIE){c.style.filter="progid:DXImageTransform.Microsoft.Alpha(Style=0,Opacity="+a+")"}else{var b=(a/100).toString();c.style.opacity=b;c.style.MozOpacity=b}};SimileAjax.Graphics.bubbleConfig={containerCSSClass:"simileAjax-bubble-container",innerContainerCSSClass:"simileAjax-bubble-innerContainer",contentContainerCSSClass:"simileAjax-bubble-contentContainer",borderGraphicSize:50,borderGraphicCSSClassPrefix:"simileAjax-bubble-border-",arrowGraphicTargetOffset:33,arrowGraphicLength:100,arrowGraphicWidth:49,arrowGraphicCSSClassPrefix:"simileAjax-bubble-arrow-",closeGraphicCSSClass:"simileAjax-bubble-close",extraPadding:20};SimileAjax.Graphics.createBubbleForContentAndPoint=function(b,c,e,f,d,a){if(typeof f!="number"){f=300}if(typeof a!="number"){a=0}b.style.position="absolute";b.style.left="-5000px";b.style.top="0px";b.style.width=f+"px";document.body.appendChild(b);window.setTimeout(function(){var j=b.scrollWidth+10;var h=b.scrollHeight+10;var k=0;if(a>0&&h>a){h=a;k=j-25}var i=SimileAjax.Graphics.createBubbleForPoint(c,e,j,h,d);document.body.removeChild(b);b.style.position="static";b.style.left="";b.style.top="";if(k>0){var g=document.createElement("div");b.style.width="";g.style.width=k+"px";g.appendChild(b);i.content.appendChild(g)}else{b.style.width=j+"px";i.content.appendChild(b)}},200)};SimileAjax.Graphics.createBubbleForPoint=function(r,s,i,e,m){i=parseInt(i,10);e=parseInt(e,10);var o=SimileAjax.Graphics.bubbleConfig;var f=SimileAjax.Graphics.pngIsTranslucent?"pngTranslucent":"pngNotTranslucent";var g=i+2*o.borderGraphicSize;var d=e+2*o.borderGraphicSize;var h=function(t){return t+" "+t+"-"+f};var k=document.createElement("div");k.className=h(o.containerCSSClass);k.style.width=i+"px";k.style.height=e+"px";var p=document.createElement("div");p.className=h(o.innerContainerCSSClass);k.appendChild(p);var j=function(){if(!b._closed){document.body.removeChild(b._div);b._doc=null;b._div=null;b._content=null;b._closed=true}};var b={_closed:false};var a=SimileAjax.WindowManager.pushLayer(j,true,k);b._div=k;b.close=function(){SimileAjax.WindowManager.popLayer(a)};var l=function(t){var u=document.createElement("div");u.className=h(o.borderGraphicCSSClassPrefix+t);p.appendChild(u)};l("top-left");l("top-right");l("bottom-left");l("bottom-right");l("left");l("right");l("top");l("bottom");var q=document.createElement("div");q.className=h(o.contentContainerCSSClass);p.appendChild(q);b.content=q;var c=document.createElement("div");c.className=h(o.closeGraphicCSSClass);p.appendChild(c);SimileAjax.WindowManager.registerEventWithObject(c,"click",b,"close");(function(){var z=SimileAjax.Graphics.getWindowDimensions();var w=z.w;var v=z.h;var u=Math.ceil(o.arrowGraphicWidth/2);var y=function(B){var C=document.createElement("div");C.className=h(o.arrowGraphicCSSClassPrefix+"point-"+B);p.appendChild(C);return C};if(r-u-o.borderGraphicSize-o.extraPadding>0&&r+u+o.borderGraphicSize+o.extraPadding<w){var A=r-Math.round(i/2);A=r<(w/2)?Math.max(A,o.extraPadding+o.borderGraphicSize):Math.min(A,w-o.extraPadding-o.borderGraphicSize-i);if((m&&m=="top")||(!m&&(s-o.arrowGraphicTargetOffset-e-o.borderGraphicSize-o.extraPadding>0))){var x=y("down");x.style.left=(r-u-A)+"px";k.style.left=A+"px";k.style.top=(s-o.arrowGraphicTargetOffset-e)+"px";return}else{if((m&&m=="bottom")||(!m&&(s+o.arrowGraphicTargetOffset+e+o.borderGraphicSize+o.extraPadding<v))){var x=y("up");x.style.left=(r-u-A)+"px";k.style.left=A+"px";k.style.top=(s+o.arrowGraphicTargetOffset)+"px";return}}}var t=s-Math.round(e/2);t=s<(v/2)?Math.max(t,o.extraPadding+o.borderGraphicSize):Math.min(t,v-o.extraPadding-o.borderGraphicSize-e);if((m&&m=="left")||(!m&&(r-o.arrowGraphicTargetOffset-i-o.borderGraphicSize-o.extraPadding>0))){var x=y("right");x.style.top=(s-u-t)+"px";k.style.top=t+"px";k.style.left=(r-o.arrowGraphicTargetOffset-i)+"px"}else{var x=y("left");x.style.top=(s-u-t)+"px";k.style.top=t+"px";k.style.left=(r+o.arrowGraphicTargetOffset)+"px"}})();document.body.appendChild(k);return b};SimileAjax.Graphics.getWindowDimensions=function(){if(typeof window.innerHeight=="number"){return{w:window.innerWidth,h:window.innerHeight}}else{if(document.documentElement&&document.documentElement.clientHeight){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}else{if(document.body&&document.body.clientHeight){return{w:document.body.clientWidth,h:document.body.clientHeight}}}}};SimileAjax.Graphics.createMessageBubble=function(f){var g=f.createElement("div");if(SimileAjax.Graphics.pngIsTranslucent){var e=f.createElement("div");e.style.height="33px";e.style.background="url("+SimileAjax.urlPrefix+"images/message-top-left.png) top left no-repeat";e.style.paddingLeft="44px";g.appendChild(e);var a=f.createElement("div");a.style.height="33px";a.style.background="url("+SimileAjax.urlPrefix+"images/message-top-right.png) top right no-repeat";e.appendChild(a);var h=f.createElement("div");h.style.background="url("+SimileAjax.urlPrefix+"images/message-left.png) top left repeat-y";h.style.paddingLeft="44px";g.appendChild(h);var c=f.createElement("div");c.style.background="url("+SimileAjax.urlPrefix+"images/message-right.png) top right repeat-y";c.style.paddingRight="44px";h.appendChild(c);var b=f.createElement("div");c.appendChild(b);var i=f.createElement("div");i.style.height="55px";i.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-left.png) bottom left no-repeat";i.style.paddingLeft="44px";g.appendChild(i);var d=f.createElement("div");d.style.height="55px";d.style.background="url("+SimileAjax.urlPrefix+"images/message-bottom-right.png) bottom right no-repeat";i.appendChild(d)}else{g.style.border="2px solid #7777AA";g.style.padding="20px";g.style.background="white";SimileAjax.Graphics.setOpacity(g,90);var b=f.createElement("div");g.appendChild(b)}return{containerDiv:g,contentDiv:b}};SimileAjax.Graphics.createAnimation=function(e,b,c,d,a){return new SimileAjax.Graphics._Animation(e,b,c,d,a)};SimileAjax.Graphics._Animation=function(e,b,c,d,a){this.f=e;this.cont=(typeof a=="function")?a:function(){};this.from=b;this.to=c;this.current=b;this.duration=d;this.start=new Date().getTime();this.timePassed=0};SimileAjax.Graphics._Animation.prototype.run=function(){var a=this;window.setTimeout(function(){a.step()},50)};SimileAjax.Graphics._Animation.prototype.step=function(){this.timePassed+=50;var a=this.timePassed/this.duration;var d=-Math.cos(a*Math.PI)/2+0.5;var b=d*(this.to-this.from)+this.from;try{this.f(b,b-this.current)}catch(c){}this.current=b;if(this.timePassed<this.duration){this.run()}else{this.f(this.to,0);this["cont"]()}};SimileAjax.Graphics.createStructuredDataCopyButton=function(c,g,e,d){var b=document.createElement("div");b.style.position="relative";b.style.display="inline";b.style.width=g+"px";b.style.height=e+"px";b.style.overflow="hidden";b.style.margin="2px";if(SimileAjax.Graphics.pngIsTranslucent){b.style.background="url("+c+") no-repeat"}else{b.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+c+"', sizingMethod='image')"}var a;if(SimileAjax.Platform.browser.isIE){a="filter:alpha(opacity=0)"}else{a="opacity: 0"}b.innerHTML="<textarea rows='1' autocomplete='off' value='none' style='"+a+"' />";var f=b.firstChild;f.style.width=g+"px";f.style.height=e+"px";f.onmousedown=function(h){h=(h)?h:((event)?event:null);if(h.button==2){f.value=d();f.select()}};return b};SimileAjax.Graphics.getWidthHeight=function(c){var a,d;if(c.getBoundingClientRect==null){a=c.offsetWidth;d=c.offsetHeight}else{var b=c.getBoundingClientRect();a=Math.ceil(b.right-b.left);d=Math.ceil(b.bottom-b.top)}return{width:a,height:d}};SimileAjax.Graphics.getFontRenderingContext=function(a,b){return new SimileAjax.Graphics._FontRenderingContext(a,b)};SimileAjax.Graphics._FontRenderingContext=function(a,b){this._elmt=a;this._elmt.style.visibility="hidden";if(typeof b=="string"){this._elmt.style.width=b}else{if(typeof b=="number"){this._elmt.style.width=b+"px"}}};SimileAjax.Graphics._FontRenderingContext.prototype.dispose=function(){this._elmt=null};SimileAjax.Graphics._FontRenderingContext.prototype.update=function(){this._elmt.innerHTML="A";this._lineHeight=this._elmt.offsetHeight};SimileAjax.Graphics._FontRenderingContext.prototype.computeSize=function(b,d){var c=this._elmt;c.innerHTML=b;c.className=d===undefined?"":d;var a=SimileAjax.Graphics.getWidthHeight(c);c.className="";return a};SimileAjax.Graphics._FontRenderingContext.prototype.getLineHeight=function(){return this._lineHeight};SimileAjax.History={maxHistoryLength:10,historyFile:"__history__.html",enabled:true,_initialized:false,_listeners:new SimileAjax.ListenerQueue(),_actions:[],_baseIndex:0,_currentIndex:0,_plainDocumentTitle:document.title};SimileAjax.History.formatHistoryEntryTitle=function(a){return SimileAjax.History._plainDocumentTitle+" {"+a+"}"};SimileAjax.History.initialize=function(){if(SimileAjax.History._initialized){return}if(SimileAjax.History.enabled){var a=document.createElement("iframe");a.id="simile-ajax-history";a.style.position="absolute";a.style.width="10px";a.style.height="10px";a.style.top="0px";a.style.left="0px";a.style.visibility="hidden";a.src=SimileAjax.History.historyFile+"?0";document.body.appendChild(a);SimileAjax.DOM.registerEvent(a,"load",SimileAjax.History._handleIFrameOnLoad);SimileAjax.History._iframe=a}SimileAjax.History._initialized=true};SimileAjax.History.addListener=function(a){SimileAjax.History.initialize();SimileAjax.History._listeners.add(a)};SimileAjax.History.removeListener=function(a){SimileAjax.History.initialize();SimileAjax.History._listeners.remove(a)};SimileAjax.History.addAction=function(a){SimileAjax.History.initialize();SimileAjax.History._listeners.fire("onBeforePerform",[a]);window.setTimeout(function(){try{a.perform();SimileAjax.History._listeners.fire("onAfterPerform",[a]);if(SimileAjax.History.enabled){SimileAjax.History._actions=SimileAjax.History._actions.slice(0,SimileAjax.History._currentIndex-SimileAjax.History._baseIndex);SimileAjax.History._actions.push(a);SimileAjax.History._currentIndex++;var c=SimileAjax.History._actions.length-SimileAjax.History.maxHistoryLength;if(c>0){SimileAjax.History._actions=SimileAjax.History._actions.slice(c);SimileAjax.History._baseIndex+=c}try{SimileAjax.History._iframe.contentWindow.location.search="?"+SimileAjax.History._currentIndex}catch(d){var b=SimileAjax.History.formatHistoryEntryTitle(a.label);document.title=b}}}catch(d){SimileAjax.Debug.exception(d,"Error adding action {"+a.label+"} to history")}},0)};SimileAjax.History.addLengthyAction=function(c,a,b){SimileAjax.History.addAction({perform:c,undo:a,label:b,uiLayer:SimileAjax.WindowManager.getBaseLayer(),lengthy:true})};SimileAjax.History._handleIFrameOnLoad=function(){try{var f=SimileAjax.History._iframe.contentWindow.location.search;var b=(f.length==0)?0:Math.max(0,parseInt(f.substr(1)));var d=function(){var g=b-SimileAjax.History._currentIndex;SimileAjax.History._currentIndex+=g;SimileAjax.History._baseIndex+=g;SimileAjax.History._iframe.contentWindow.location.search="?"+b};if(b<SimileAjax.History._currentIndex){SimileAjax.History._listeners.fire("onBeforeUndoSeveral",[]);window.setTimeout(function(){while(SimileAjax.History._currentIndex>b&&SimileAjax.History._currentIndex>SimileAjax.History._baseIndex){SimileAjax.History._currentIndex--;var h=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];try{h.undo()}catch(g){SimileAjax.Debug.exception(g,"History: Failed to undo action {"+h.label+"}")}}SimileAjax.History._listeners.fire("onAfterUndoSeveral",[]);d()},0)}else{if(b>SimileAjax.History._currentIndex){SimileAjax.History._listeners.fire("onBeforeRedoSeveral",[]);window.setTimeout(function(){while(SimileAjax.History._currentIndex<b&&SimileAjax.History._currentIndex-SimileAjax.History._baseIndex<SimileAjax.History._actions.length){var h=SimileAjax.History._actions[SimileAjax.History._currentIndex-SimileAjax.History._baseIndex];try{h.perform()}catch(g){SimileAjax.Debug.exception(g,"History: Failed to redo action {"+h.label+"}")}SimileAjax.History._currentIndex++}SimileAjax.History._listeners.fire("onAfterRedoSeveral",[]);d()},0)}else{var a=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1;var c=(a>=0&&a<SimileAjax.History._actions.length)?SimileAjax.History.formatHistoryEntryTitle(SimileAjax.History._actions[a].label):SimileAjax.History._plainDocumentTitle;SimileAjax.History._iframe.contentWindow.document.title=c;document.title=c}}}catch(e){}};SimileAjax.History.getNextUndoAction=function(){try{var a=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex-1;return SimileAjax.History._actions[a]}catch(b){return null}};SimileAjax.History.getNextRedoAction=function(){try{var a=SimileAjax.History._currentIndex-SimileAjax.History._baseIndex;return SimileAjax.History._actions[a]}catch(b){return null}};SimileAjax.HTML=new Object();SimileAjax.HTML._e2uHash={};(function(){var a=SimileAjax.HTML._e2uHash;a.nbsp="\u00A0[space]";a.iexcl="\u00A1";a.cent="\u00A2";a.pound="\u00A3";a.curren="\u00A4";a.yen="\u00A5";a.brvbar="\u00A6";a.sect="\u00A7";a.uml="\u00A8";a.copy="\u00A9";a.ordf="\u00AA";a.laquo="\u00AB";a.not="\u00AC";a.shy="\u00AD";a.reg="\u00AE";a.macr="\u00AF";a.deg="\u00B0";a.plusmn="\u00B1";a.sup2="\u00B2";a.sup3="\u00B3";a.acute="\u00B4";a.micro="\u00B5";a.para="\u00B6";a.middot="\u00B7";a.cedil="\u00B8";a.sup1="\u00B9";a.ordm="\u00BA";a.raquo="\u00BB";a.frac14="\u00BC";a.frac12="\u00BD";a.frac34="\u00BE";a.iquest="\u00BF";a.Agrave="\u00C0";a.Aacute="\u00C1";a.Acirc="\u00C2";a.Atilde="\u00C3";a.Auml="\u00C4";a.Aring="\u00C5";a.AElig="\u00C6";a.Ccedil="\u00C7";a.Egrave="\u00C8";a.Eacute="\u00C9";a.Ecirc="\u00CA";a.Euml="\u00CB";a.Igrave="\u00CC";a.Iacute="\u00CD";a.Icirc="\u00CE";a.Iuml="\u00CF";a.ETH="\u00D0";a.Ntilde="\u00D1";a.Ograve="\u00D2";a.Oacute="\u00D3";a.Ocirc="\u00D4";a.Otilde="\u00D5";a.Ouml="\u00D6";a.times="\u00D7";a.Oslash="\u00D8";a.Ugrave="\u00D9";a.Uacute="\u00DA";a.Ucirc="\u00DB";a.Uuml="\u00DC";a.Yacute="\u00DD";a.THORN="\u00DE";a.szlig="\u00DF";a.agrave="\u00E0";a.aacute="\u00E1";a.acirc="\u00E2";a.atilde="\u00E3";a.auml="\u00E4";a.aring="\u00E5";a.aelig="\u00E6";a.ccedil="\u00E7";a.egrave="\u00E8";a.eacute="\u00E9";a.ecirc="\u00EA";a.euml="\u00EB";a.igrave="\u00EC";a.iacute="\u00ED";a.icirc="\u00EE";a.iuml="\u00EF";a.eth="\u00F0";a.ntilde="\u00F1";a.ograve="\u00F2";a.oacute="\u00F3";a.ocirc="\u00F4";a.otilde="\u00F5";a.ouml="\u00F6";a.divide="\u00F7";a.oslash="\u00F8";a.ugrave="\u00F9";a.uacute="\u00FA";a.ucirc="\u00FB";a.uuml="\u00FC";a.yacute="\u00FD";a.thorn="\u00FE";a.yuml="\u00FF";a.quot="\u0022";a.amp="\u0026";a.lt="\u003C";a.gt="\u003E";a.OElig="";a.oelig="\u0153";a.Scaron="\u0160";a.scaron="\u0161";a.Yuml="\u0178";a.circ="\u02C6";a.tilde="\u02DC";a.ensp="\u2002";a.emsp="\u2003";a.thinsp="\u2009";a.zwnj="\u200C";a.zwj="\u200D";a.lrm="\u200E";a.rlm="\u200F";a.ndash="\u2013";a.mdash="\u2014";a.lsquo="\u2018";a.rsquo="\u2019";a.sbquo="\u201A";a.ldquo="\u201C";a.rdquo="\u201D";a.bdquo="\u201E";a.dagger="\u2020";a.Dagger="\u2021";a.permil="\u2030";a.lsaquo="\u2039";a.rsaquo="\u203A";a.euro="\u20AC";a.fnof="\u0192";a.Alpha="\u0391";a.Beta="\u0392";a.Gamma="\u0393";a.Delta="\u0394";a.Epsilon="\u0395";a.Zeta="\u0396";a.Eta="\u0397";a.Theta="\u0398";a.Iota="\u0399";a.Kappa="\u039A";a.Lambda="\u039B";a.Mu="\u039C";a.Nu="\u039D";a.Xi="\u039E";a.Omicron="\u039F";a.Pi="\u03A0";a.Rho="\u03A1";a.Sigma="\u03A3";a.Tau="\u03A4";a.Upsilon="\u03A5";a.Phi="\u03A6";a.Chi="\u03A7";a.Psi="\u03A8";a.Omega="\u03A9";a.alpha="\u03B1";a.beta="\u03B2";a.gamma="\u03B3";a.delta="\u03B4";a.epsilon="\u03B5";a.zeta="\u03B6";a.eta="\u03B7";a.theta="\u03B8";a.iota="\u03B9";a.kappa="\u03BA";a.lambda="\u03BB";a.mu="\u03BC";a.nu="\u03BD";a.xi="\u03BE";a.omicron="\u03BF";a.pi="\u03C0";a.rho="\u03C1";a.sigmaf="\u03C2";a.sigma="\u03C3";a.tau="\u03C4";a.upsilon="\u03C5";a.phi="\u03C6";a.chi="\u03C7";a.psi="\u03C8";a.omega="\u03C9";a.thetasym="\u03D1";a.upsih="\u03D2";a.piv="\u03D6";a.bull="\u2022";a.hellip="\u2026";a.prime="\u2032";a.Prime="\u2033";a.oline="\u203E";a.frasl="\u2044";a.weierp="\u2118";a.image="\u2111";a.real="\u211C";a.trade="\u2122";a.alefsym="\u2135";a.larr="\u2190";a.uarr="\u2191";a.rarr="\u2192";a.darr="\u2193";a.harr="\u2194";a.crarr="\u21B5";a.lArr="\u21D0";a.uArr="\u21D1";a.rArr="\u21D2";a.dArr="\u21D3";a.hArr="\u21D4";a.forall="\u2200";a.part="\u2202";a.exist="\u2203";a.empty="\u2205";a.nabla="\u2207";a.isin="\u2208";a.notin="\u2209";a.ni="\u220B";a.prod="\u220F";a.sum="\u2211";a.minus="\u2212";a.lowast="\u2217";a.radic="\u221A";a.prop="\u221D";a.infin="\u221E";a.ang="\u2220";a.and="\u2227";a.or="\u2228";a.cap="\u2229";a.cup="\u222A";a["int"]="\u222B";a.there4="\u2234";a.sim="\u223C";a.cong="\u2245";a.asymp="\u2248";a.ne="\u2260";a.equiv="\u2261";a.le="\u2264";a.ge="\u2265";a.sub="\u2282";a.sup="\u2283";a.nsub="\u2284";a.sube="\u2286";a.supe="\u2287";a.oplus="\u2295";a.otimes="\u2297";a.perp="\u22A5";a.sdot="\u22C5";a.lceil="\u2308";a.rceil="\u2309";a.lfloor="\u230A";a.rfloor="\u230B";a.lang="\u2329";a.rang="\u232A";a.loz="\u25CA";a.spades="\u2660";a.clubs="\u2663";a.hearts="\u2665";a.diams="\u2666"})();SimileAjax.HTML.deEntify=function(c){var b=SimileAjax.HTML._e2uHash;var d=/&(\w+?);/;while(d.test(c)){var a=c.match(d);c=c.replace(d,b[a[1]])}return c};SimileAjax.JSON=new Object();(function(){var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};var s={array:function(x){var a=["["],b,f,i,l=x.length,v;for(i=0;i<l;i+=1){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=","}a[a.length]=v;b=true}}}a[a.length]="]";return a.join("")},"boolean":function(x){return String(x)},"null":function(x){return"null"},number:function(x){return isFinite(x)?String(x):"null"},object:function(x){if(x){if(x instanceof Array){return s.array(x)}var a=["{"],b,f,i,v;for(i in x){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=="string"){if(b){a[a.length]=","}a.push(s.string(i),":",v);b=true}}}a[a.length]="}";return a.join("")}return"null"},string:function(x){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c}c=b.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})}return'"'+x+'"'}};SimileAjax.JSON.toJSONString=function(o){if(o instanceof Object){return s.object(o)}else{if(o instanceof Array){return s.array(o)}else{return o.toString()}}};SimileAjax.JSON.parseJSON=function(){try{return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(this.replace(/"(\\.|[^"\\])*"/g,"")))&&eval("("+this+")")}catch(e){return false}}})();String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.startsWith=function(a){return this.length>=a.length&&this.substr(0,a.length)==a};String.prototype.endsWith=function(a){return this.length>=a.length&&this.substr(this.length-a.length)==a};String.substitute=function(e,a){var d="";var b=0;while(b<e.length-1){var f=e.indexOf("%",b);if(f<0||f==e.length-1){break}else{if(f>b&&e.charAt(f-1)=="\\"){d+=e.substring(b,f-1)+"%";b=f+1}else{var c=parseInt(e.charAt(f+1));if(isNaN(c)||c>=a.length){d+=e.substring(b,f+2)}else{d+=e.substring(b,f)+a[c].toString()}b=f+2}}}if(b<e.length){d+=e.substring(b)}return d};SimileAjax.NativeDateUnit=new Object();SimileAjax.NativeDateUnit.makeDefaultValue=function(){return new Date()};SimileAjax.NativeDateUnit.cloneValue=function(a){return new Date(a.getTime())};SimileAjax.NativeDateUnit.getParser=function(a){if(typeof a=="string"){a=a.toLowerCase()}return(a=="iso8601"||a=="iso 8601")?SimileAjax.DateTime.parseIso8601DateTime:SimileAjax.DateTime.parseGregorianDateTime};SimileAjax.NativeDateUnit.parseFromObject=function(a){return SimileAjax.DateTime.parseGregorianDateTime(a)};SimileAjax.NativeDateUnit.toNumber=function(a){return a.getTime()};SimileAjax.NativeDateUnit.fromNumber=function(a){return new Date(a)};SimileAjax.NativeDateUnit.compare=function(b,c){var d,a;if(typeof b=="object"){d=b.getTime()}else{d=Number(b)}if(typeof c=="object"){a=c.getTime()}else{a=Number(c)}return d-a};SimileAjax.NativeDateUnit.earlier=function(b,a){return SimileAjax.NativeDateUnit.compare(b,a)<0?b:a};SimileAjax.NativeDateUnit.later=function(b,a){return SimileAjax.NativeDateUnit.compare(b,a)>0?b:a};SimileAjax.NativeDateUnit.change=function(a,b){return new Date(a.getTime()+b)};SimileAjax.WindowManager={_initialized:false,_listeners:[],_draggedElement:null,_draggedElementCallback:null,_dropTargetHighlightElement:null,_lastCoords:null,_ghostCoords:null,_draggingMode:"",_dragging:false,_layers:[]};SimileAjax.WindowManager.initialize=function(){if(SimileAjax.WindowManager._initialized){return}SimileAjax.DOM.registerEvent(document.body,"mousedown",SimileAjax.WindowManager._onBodyMouseDown);SimileAjax.DOM.registerEvent(document.body,"mousemove",SimileAjax.WindowManager._onBodyMouseMove);SimileAjax.DOM.registerEvent(document.body,"mouseup",SimileAjax.WindowManager._onBodyMouseUp);SimileAjax.DOM.registerEvent(document,"keydown",SimileAjax.WindowManager._onBodyKeyDown);SimileAjax.DOM.registerEvent(document,"keyup",SimileAjax.WindowManager._onBodyKeyUp);SimileAjax.WindowManager._layers.push({index:0});SimileAjax.WindowManager._historyListener={onBeforeUndoSeveral:function(){},onAfterUndoSeveral:function(){},onBeforeUndo:function(){},onAfterUndo:function(){},onBeforeRedoSeveral:function(){},onAfterRedoSeveral:function(){},onBeforeRedo:function(){},onAfterRedo:function(){}};SimileAjax.History.addListener(SimileAjax.WindowManager._historyListener);SimileAjax.WindowManager._initialized=true};SimileAjax.WindowManager.getBaseLayer=function(){SimileAjax.WindowManager.initialize();return SimileAjax.WindowManager._layers[0]};SimileAjax.WindowManager.getHighestLayer=function(){SimileAjax.WindowManager.initialize();return SimileAjax.WindowManager._layers[SimileAjax.WindowManager._layers.length-1]};SimileAjax.WindowManager.registerEventWithObject=function(c,a,b,e,d){SimileAjax.WindowManager.registerEvent(c,a,function(g,h,f){return b[e].call(b,g,h,f)},d)};SimileAjax.WindowManager.registerEvent=function(c,e,b,d){if(d==null){d=SimileAjax.WindowManager.getHighestLayer()}var a=function(h,i,f){if(SimileAjax.WindowManager._canProcessEventAtLayer(d)){SimileAjax.WindowManager._popToLayer(d.index);try{b(h,i,f)}catch(g){SimileAjax.Debug.exception(g)}}SimileAjax.DOM.cancelEvent(i);return false};SimileAjax.DOM.registerEvent(c,e,a)};SimileAjax.WindowManager.pushLayer=function(c,b,d){var a={onPop:c,index:SimileAjax.WindowManager._layers.length,ephemeral:(b),elmt:d};SimileAjax.WindowManager._layers.push(a);return a};SimileAjax.WindowManager.popLayer=function(b){for(var a=1;a<SimileAjax.WindowManager._layers.length;a++){if(SimileAjax.WindowManager._layers[a]==b){SimileAjax.WindowManager._popToLayer(a-1);break}}};SimileAjax.WindowManager.popAllLayers=function(){SimileAjax.WindowManager._popToLayer(0)};SimileAjax.WindowManager.registerForDragging=function(c,b,a){SimileAjax.WindowManager.registerEvent(c,"mousedown",function(e,f,d){SimileAjax.WindowManager._handleMouseDown(e,f,b)},a)};SimileAjax.WindowManager._popToLayer=function(b){while(b+1<SimileAjax.WindowManager._layers.length){try{var a=SimileAjax.WindowManager._layers.pop();if(a.onPop!=null){a.onPop()}}catch(c){}}};SimileAjax.WindowManager._canProcessEventAtLayer=function(b){if(b.index==(SimileAjax.WindowManager._layers.length-1)){return true}for(var a=b.index+1;a<SimileAjax.WindowManager._layers.length;a++){if(!SimileAjax.WindowManager._layers[a].ephemeral){return false}}return true};SimileAjax.WindowManager.cancelPopups=function(a){var b=(a)?SimileAjax.DOM.getEventPageCoordinates(a):{x:-1,y:-1};var c=SimileAjax.WindowManager._layers.length-1;while(c>0&&SimileAjax.WindowManager._layers[c].ephemeral){var d=SimileAjax.WindowManager._layers[c];if(d.elmt!=null){var e=d.elmt;var f=SimileAjax.DOM.getPageCoordinates(e);if(b.x>=f.left&&b.x<(f.left+e.offsetWidth)&&b.y>=f.top&&b.y<(f.top+e.offsetHeight)){break}}c--}SimileAjax.WindowManager._popToLayer(c)};SimileAjax.WindowManager._onBodyMouseDown=function(c,a,b){if(!("eventPhase" in a)||a.eventPhase==a.BUBBLING_PHASE){SimileAjax.WindowManager.cancelPopups(a)}};SimileAjax.WindowManager._handleMouseDown=function(c,a,b){SimileAjax.WindowManager._draggedElement=c;SimileAjax.WindowManager._draggedElementCallback=b;SimileAjax.WindowManager._lastCoords={x:a.clientX,y:a.clientY};SimileAjax.DOM.cancelEvent(a);return false};SimileAjax.WindowManager._onBodyKeyDown=function(c,a,b){if(SimileAjax.WindowManager._dragging){if(a.keyCode==27){SimileAjax.WindowManager._cancelDragging()}else{if((a.keyCode==17||a.keyCode==16)&&SimileAjax.WindowManager._draggingMode!="copy"){SimileAjax.WindowManager._draggingMode="copy";var d=SimileAjax.Graphics.createTranslucentImage(SimileAjax.urlPrefix+"images/copy.png");d.style.position="absolute";d.style.left=(SimileAjax.WindowManager._ghostCoords.left-16)+"px";d.style.top=(SimileAjax.WindowManager._ghostCoords.top)+"px";document.body.appendChild(d);SimileAjax.WindowManager._draggingModeIndicatorElmt=d}}}};SimileAjax.WindowManager._onBodyKeyUp=function(c,a,b){if(SimileAjax.WindowManager._dragging){if(a.keyCode==17||a.keyCode==16){SimileAjax.WindowManager._draggingMode="";if(SimileAjax.WindowManager._draggingModeIndicatorElmt!=null){document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt);SimileAjax.WindowManager._draggingModeIndicatorElmt=null}}}};SimileAjax.WindowManager._onBodyMouseMove=function(b,h,c){if(SimileAjax.WindowManager._draggedElement!=null){var i=SimileAjax.WindowManager._draggedElementCallback;var o=SimileAjax.WindowManager._lastCoords;var k=h.clientX-o.x;var l=h.clientY-o.y;if(!SimileAjax.WindowManager._dragging){if(Math.abs(k)>5||Math.abs(l)>5){try{if("onDragStart" in i){i.onDragStart()}if("ghost" in i&&i.ghost){var e=SimileAjax.WindowManager._draggedElement;SimileAjax.WindowManager._ghostCoords=SimileAjax.DOM.getPageCoordinates(e);SimileAjax.WindowManager._ghostCoords.left+=k;SimileAjax.WindowManager._ghostCoords.top+=l;var j=e.cloneNode(true);j.style.position="absolute";j.style.left=SimileAjax.WindowManager._ghostCoords.left+"px";j.style.top=SimileAjax.WindowManager._ghostCoords.top+"px";j.style.zIndex=1000;SimileAjax.Graphics.setOpacity(j,50);document.body.appendChild(j);i._ghostElmt=j}SimileAjax.WindowManager._dragging=true;SimileAjax.WindowManager._lastCoords={x:h.clientX,y:h.clientY};document.body.focus()}catch(m){SimileAjax.Debug.exception("WindowManager: Error handling mouse down",m);SimileAjax.WindowManager._cancelDragging()}}}else{try{SimileAjax.WindowManager._lastCoords={x:h.clientX,y:h.clientY};if("onDragBy" in i){i.onDragBy(k,l)}if("_ghostElmt" in i){var j=i._ghostElmt;SimileAjax.WindowManager._ghostCoords.left+=k;SimileAjax.WindowManager._ghostCoords.top+=l;j.style.left=SimileAjax.WindowManager._ghostCoords.left+"px";j.style.top=SimileAjax.WindowManager._ghostCoords.top+"px";if(SimileAjax.WindowManager._draggingModeIndicatorElmt!=null){var f=SimileAjax.WindowManager._draggingModeIndicatorElmt;f.style.left=(SimileAjax.WindowManager._ghostCoords.left-16)+"px";f.style.top=SimileAjax.WindowManager._ghostCoords.top+"px"}if("droppable" in i&&i.droppable){var g=SimileAjax.DOM.getEventPageCoordinates(h);var c=SimileAjax.DOM.hittest(g.x,g.y,[SimileAjax.WindowManager._ghostElmt,SimileAjax.WindowManager._dropTargetHighlightElement]);c=SimileAjax.WindowManager._findDropTarget(c);if(c!=SimileAjax.WindowManager._potentialDropTarget){if(SimileAjax.WindowManager._dropTargetHighlightElement!=null){document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement);SimileAjax.WindowManager._dropTargetHighlightElement=null;SimileAjax.WindowManager._potentialDropTarget=null}var d=false;if(c!=null){if((!("canDropOn" in i)||i.canDropOn(c))&&(!("canDrop" in c)||c.canDrop(SimileAjax.WindowManager._draggedElement))){d=true}}if(d){var q=4;var a=SimileAjax.DOM.getPageCoordinates(c);var p=document.createElement("div");p.style.border=q+"px solid yellow";p.style.backgroundColor="yellow";p.style.position="absolute";p.style.left=a.left+"px";p.style.top=a.top+"px";p.style.width=(c.offsetWidth-q*2)+"px";p.style.height=(c.offsetHeight-q*2)+"px";SimileAjax.Graphics.setOpacity(p,30);document.body.appendChild(p);SimileAjax.WindowManager._potentialDropTarget=c;SimileAjax.WindowManager._dropTargetHighlightElement=p}}}}}catch(m){SimileAjax.Debug.exception("WindowManager: Error handling mouse move",m);SimileAjax.WindowManager._cancelDragging()}}SimileAjax.DOM.cancelEvent(h);return false}};SimileAjax.WindowManager._onBodyMouseUp=function(e,a,b){if(SimileAjax.WindowManager._draggedElement!=null){try{if(SimileAjax.WindowManager._dragging){var d=SimileAjax.WindowManager._draggedElementCallback;if("onDragEnd" in d){d.onDragEnd()}if("droppable" in d&&d.droppable){var c=false;var b=SimileAjax.WindowManager._potentialDropTarget;if(b!=null){if((!("canDropOn" in d)||d.canDropOn(b))&&(!("canDrop" in b)||b.canDrop(SimileAjax.WindowManager._draggedElement))){if("onDropOn" in d){d.onDropOn(b)}b.ondrop(SimileAjax.WindowManager._draggedElement,SimileAjax.WindowManager._draggingMode);c=true}}if(!c){}}}}finally{SimileAjax.WindowManager._cancelDragging()}SimileAjax.DOM.cancelEvent(a);return false}};SimileAjax.WindowManager._cancelDragging=function(){var a=SimileAjax.WindowManager._draggedElementCallback;if("_ghostElmt" in a){var b=a._ghostElmt;document.body.removeChild(b);delete a._ghostElmt}if(SimileAjax.WindowManager._dropTargetHighlightElement!=null){document.body.removeChild(SimileAjax.WindowManager._dropTargetHighlightElement);SimileAjax.WindowManager._dropTargetHighlightElement=null}if(SimileAjax.WindowManager._draggingModeIndicatorElmt!=null){document.body.removeChild(SimileAjax.WindowManager._draggingModeIndicatorElmt);SimileAjax.WindowManager._draggingModeIndicatorElmt=null}SimileAjax.WindowManager._draggedElement=null;SimileAjax.WindowManager._draggedElementCallback=null;SimileAjax.WindowManager._potentialDropTarget=null;SimileAjax.WindowManager._dropTargetHighlightElement=null;SimileAjax.WindowManager._lastCoords=null;SimileAjax.WindowManager._ghostCoords=null;SimileAjax.WindowManager._draggingMode="";SimileAjax.WindowManager._dragging=false};SimileAjax.WindowManager._findDropTarget=function(a){while(a!=null){if("ondrop" in a&&(typeof a.ondrop)=="function"){break}a=a.parentNode}return a};SimileAjax.XmlHttp=new Object();SimileAjax.XmlHttp._onReadyStateChange=function(a,b,d){switch(a.readyState){case 4:try{if(a.status==0||a.status==200){if(d){d(a)}}else{if(b){b(a.statusText,a.status,a)}}}catch(c){SimileAjax.Debug.exception("XmlHttp: Error handling onReadyStateChange",c)}break}};SimileAjax.XmlHttp._createRequest=function(){if(SimileAjax.Platform.browser.isIE){var f=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];for(var e=0;e<f.length;e++){try{var a=f[e];var d=function(){return new ActiveXObject(a)};var b=d();SimileAjax.XmlHttp._createRequest=d;return b}catch(c){}}}try{var d=function(){return new XMLHttpRequest()};var b=d();SimileAjax.XmlHttp._createRequest=d;return b}catch(c){throw new Error("Failed to create an XMLHttpRequest object")}};SimileAjax.XmlHttp.get=function(d,b,c){var a=SimileAjax.XmlHttp._createRequest();a.open("GET",d,true);a.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(a,b,c)};a.send(null)};SimileAjax.XmlHttp.post=function(d,a,b,c){var e=SimileAjax.XmlHttp._createRequest();e.open("POST",d,true);e.onreadystatechange=function(){SimileAjax.XmlHttp._onReadyStateChange(e,b,c)};e.send(a)};SimileAjax.XmlHttp._forceXML=function(a){try{a.overrideMimeType("text/xml")}catch(b){a.setrequestheader("Content-Type","text/xml")}};
/*=================================================
 *
 * Coding standards:
 *
 * We aim towards Douglas Crockford's Javascript conventions.
 * See:  http://javascript.crockford.com/code.html
 * See also: http://www.crockford.com/javascript/javascript.html
 *
 * That said, this JS code was written before some recent JS
 * support libraries became widely used or available.
 * In particular, the _ character is used to indicate a class function or
 * variable that should be considered private to the class.
 *
 * The code mostly uses accessor methods for getting/setting the private
 * class variables.
 *
 * Over time, we'd like to formalize the convention by using support libraries
 * which enforce privacy in objects.
 *
 * We also want to use jslint:  http://www.jslint.com/
 *
 *
 *==================================================
 */



/*==================================================
 *  Band
 *==================================================
 */
Timeline._Band = function(timeline, bandInfo, index) {
    // Set up the band's object
    
    // Munge params: If autoWidth is on for the Timeline, then ensure that
    // bandInfo.width is an integer     
    if (timeline.autoWidth && typeof bandInfo.width == 'string') {
        bandInfo.width = bandInfo.width.indexOf("%") > -1 ? 0 : parseInt(bandInfo.width);
    }

    this._timeline = timeline;
    this._bandInfo = bandInfo;
    
    this._index = index;
    
    this._locale = ("locale" in bandInfo) ? bandInfo.locale : Timeline.getDefaultLocale();
    this._timeZone = ("timeZone" in bandInfo) ? bandInfo.timeZone : 0;
    this._labeller = ("labeller" in bandInfo) ? bandInfo.labeller : 
        (("createLabeller" in timeline.getUnit()) ?
            timeline.getUnit().createLabeller(this._locale, this._timeZone) :
            new Timeline.GregorianDateLabeller(this._locale, this._timeZone));
    this._theme = bandInfo.theme;
    this._zoomIndex = ("zoomIndex" in bandInfo) ? bandInfo.zoomIndex : 0;
    this._zoomSteps = ("zoomSteps" in bandInfo) ? bandInfo.zoomSteps : null;

    this._dragging = false;
    this._changing = false;
    this._originalScrollSpeed = 5; // pixels
    this._scrollSpeed = this._originalScrollSpeed;
    this._onScrollListeners = [];
    
    var b = this;
    this._syncWithBand = null;
    this._syncWithBandHandler = function(band) {
        b._onHighlightBandScroll();
    };
    this._selectorListener = function(band) {
        b._onHighlightBandScroll();
    };
    
    /*
     *  Install a textbox to capture keyboard events
     */
    var inputDiv = this._timeline.getDocument().createElement("div");
    inputDiv.className = "timeline-band-input";
    this._timeline.addDiv(inputDiv);
    
    this._keyboardInput = document.createElement("input");
    this._keyboardInput.type = "text";
    inputDiv.appendChild(this._keyboardInput);
    SimileAjax.DOM.registerEventWithObject(this._keyboardInput, "keydown", this, "_onKeyDown");
    SimileAjax.DOM.registerEventWithObject(this._keyboardInput, "keyup", this, "_onKeyUp");
    
    /*
     *  The band's outer most div that slides with respect to the timeline's div
     */
    this._div = this._timeline.getDocument().createElement("div");
    this._div.id = "timeline-band-" + index;
    this._div.className = "timeline-band timeline-band-" + index;
    this._timeline.addDiv(this._div);
    
    SimileAjax.DOM.registerEventWithObject(this._div, "mousedown", this, "_onMouseDown");
    SimileAjax.DOM.registerEventWithObject(this._div, "mousemove", this, "_onMouseMove");
    SimileAjax.DOM.registerEventWithObject(this._div, "mouseup", this, "_onMouseUp");
    SimileAjax.DOM.registerEventWithObject(this._div, "mouseout", this, "_onMouseOut");
    SimileAjax.DOM.registerEventWithObject(this._div, "dblclick", this, "_onDblClick");
    
    var mouseWheel = this._theme!= null ? this._theme.mouseWheel : 'scroll'; // theme is not always defined
    if (mouseWheel === 'zoom' || mouseWheel === 'scroll' || this._zoomSteps) {
        // capture mouse scroll
        if (SimileAjax.Platform.browser.isFirefox) {
            SimileAjax.DOM.registerEventWithObject(this._div, "DOMMouseScroll", this, "_onMouseScroll");
        } else {
            SimileAjax.DOM.registerEventWithObject(this._div, "mousewheel", this, "_onMouseScroll");
        }
    }    
    
    /*
     *  The inner div that contains layers
     */
    this._innerDiv = this._timeline.getDocument().createElement("div");
    this._innerDiv.className = "timeline-band-inner";
    this._div.appendChild(this._innerDiv);
    
    /*
     *  Initialize parts of the band
     */
    this._ether = bandInfo.ether;
    bandInfo.ether.initialize(this, timeline);
        
    this._etherPainter = bandInfo.etherPainter;
    bandInfo.etherPainter.initialize(this, timeline);
    
    this._eventSource = bandInfo.eventSource;
    if (this._eventSource) {
        this._eventListener = {
            onAddMany: function() { b._onAddMany(); },
            onClear:   function() { b._onClear(); }
        }
        this._eventSource.addListener(this._eventListener);
    }
        
    this._eventPainter = bandInfo.eventPainter;
    this._eventTracksNeeded = 0;   // set by painter via updateEventTrackInfo
    this._eventTrackIncrement = 0; 
    bandInfo.eventPainter.initialize(this, timeline);
    
    this._decorators = ("decorators" in bandInfo) ? bandInfo.decorators : [];
    for (var i = 0; i < this._decorators.length; i++) {
        this._decorators[i].initialize(this, timeline);
    }
};

Timeline._Band.SCROLL_MULTIPLES = 5;

Timeline._Band.prototype.dispose = function() {
    this.closeBubble();
    
    if (this._eventSource) {
        this._eventSource.removeListener(this._eventListener);
        this._eventListener = null;
        this._eventSource = null;
    }
    
    this._timeline = null;
    this._bandInfo = null;
    
    this._labeller = null;
    this._ether = null;
    this._etherPainter = null;
    this._eventPainter = null;
    this._decorators = null;
    
    this._onScrollListeners = null;
    this._syncWithBandHandler = null;
    this._selectorListener = null;
    
    this._div = null;
    this._innerDiv = null;
    this._keyboardInput = null;
};

Timeline._Band.prototype.addOnScrollListener = function(listener) {
    this._onScrollListeners.push(listener);
};

Timeline._Band.prototype.removeOnScrollListener = function(listener) {
    for (var i = 0; i < this._onScrollListeners.length; i++) {
        if (this._onScrollListeners[i] == listener) {
            this._onScrollListeners.splice(i, 1);
            break;
        }
    }
};

Timeline._Band.prototype.setSyncWithBand = function(band, highlight) {
    if (this._syncWithBand) {
        this._syncWithBand.removeOnScrollListener(this._syncWithBandHandler);
    }
    
    this._syncWithBand = band;
    this._syncWithBand.addOnScrollListener(this._syncWithBandHandler);
    this._highlight = highlight;
    this._positionHighlight();
};

Timeline._Band.prototype.getLocale = function() {
    return this._locale;
};

Timeline._Band.prototype.getTimeZone = function() {
    return this._timeZone;
};

Timeline._Band.prototype.getLabeller = function() {
    return this._labeller;
};

Timeline._Band.prototype.getIndex = function() {
    return this._index;
};

Timeline._Band.prototype.getEther = function() {
    return this._ether;
};

Timeline._Band.prototype.getEtherPainter = function() {
    return this._etherPainter;
};

Timeline._Band.prototype.getEventSource = function() {
    return this._eventSource;
};

Timeline._Band.prototype.getEventPainter = function() {
    return this._eventPainter;
};

Timeline._Band.prototype.getTimeline = function() {
    return this._timeline;
};

// Autowidth support
Timeline._Band.prototype.updateEventTrackInfo = function(tracks, increment) {
    this._eventTrackIncrement = increment; // doesn't vary for a specific band

    if (tracks > this._eventTracksNeeded) {
        this._eventTracksNeeded = tracks;
    }
};

// Autowidth support
Timeline._Band.prototype.checkAutoWidth = function() {
    // if a new (larger) width is needed by the band
    // then: a) updates the band's bandInfo.width
    //
    // desiredWidth for the band is 
    //   (number of tracks + margin) * track increment
    if (! this._timeline.autoWidth) {
      return; // early return
    }
    
    var overviewBand = this._eventPainter.getType() == 'overview';
    var margin = overviewBand ? 
       this._theme.event.overviewTrack.autoWidthMargin : 
       this._theme.event.track.autoWidthMargin;
    var desiredWidth = Math.ceil((this._eventTracksNeeded + margin) *
                       this._eventTrackIncrement);
    // add offset amount (additional margin)
    desiredWidth += overviewBand ? this._theme.event.overviewTrack.offset : 
                                   this._theme.event.track.offset;
    var bandInfo = this._bandInfo;
    
    if (desiredWidth != bandInfo.width) {
        bandInfo.width = desiredWidth;
    }
};

Timeline._Band.prototype.layout = function() {
    this.paint();
};

Timeline._Band.prototype.paint = function() {
    this._etherPainter.paint();
    this._paintDecorators();
    this._paintEvents();
};

Timeline._Band.prototype.softLayout = function() {
    this.softPaint();
};

Timeline._Band.prototype.softPaint = function() {
    this._etherPainter.softPaint();
    this._softPaintDecorators();
    this._softPaintEvents();
};

Timeline._Band.prototype.setBandShiftAndWidth = function(shift, width) {
    var inputDiv = this._keyboardInput.parentNode;
    var middle = shift + Math.floor(width / 2);
    if (this._timeline.isHorizontal()) {
        this._div.style.top = shift + "px";
        this._div.style.height = width + "px";
        
        inputDiv.style.top = middle + "px";
        inputDiv.style.left = "-1em";
    } else {
        this._div.style.left = shift + "px";
        this._div.style.width = width + "px";
        
        inputDiv.style.left = middle + "px";
        inputDiv.style.top = "-1em";
    }
};

Timeline._Band.prototype.getViewWidth = function() {
    if (this._timeline.isHorizontal()) {
        return this._div.offsetHeight;
    } else {
        return this._div.offsetWidth;
    }
};

Timeline._Band.prototype.setViewLength = function(length) {
    this._viewLength = length;
    this._recenterDiv();
    this._onChanging();
};

Timeline._Band.prototype.getViewLength = function() {
    return this._viewLength;
};

Timeline._Band.prototype.getTotalViewLength = function() {
    return Timeline._Band.SCROLL_MULTIPLES * this._viewLength;
};

Timeline._Band.prototype.getViewOffset = function() {
    return this._viewOffset;
};

Timeline._Band.prototype.getMinDate = function() {
    return this._ether.pixelOffsetToDate(this._viewOffset);
};

Timeline._Band.prototype.getMaxDate = function() {
    return this._ether.pixelOffsetToDate(this._viewOffset + Timeline._Band.SCROLL_MULTIPLES * this._viewLength);
};

Timeline._Band.prototype.getMinVisibleDate = function() {
    return this._ether.pixelOffsetToDate(0);
};

Timeline._Band.prototype.getMinVisibleDateAfterDelta = function(delta) {
    return this._ether.pixelOffsetToDate(delta);
};

Timeline._Band.prototype.getMaxVisibleDate = function() {
    // Max date currently visible on band
    return this._ether.pixelOffsetToDate(this._viewLength);
};

Timeline._Band.prototype.getMaxVisibleDateAfterDelta = function(delta) {
    // Max date visible on band after delta px view change is applied 
    return this._ether.pixelOffsetToDate(this._viewLength + delta);
};

Timeline._Band.prototype.getCenterVisibleDate = function() {
    return this._ether.pixelOffsetToDate(this._viewLength / 2);
};

Timeline._Band.prototype.setMinVisibleDate = function(date) {
    if (!this._changing) {
        this._moveEther(Math.round(-this._ether.dateToPixelOffset(date)));
    }
};

Timeline._Band.prototype.setMaxVisibleDate = function(date) {
    if (!this._changing) {
        this._moveEther(Math.round(this._viewLength - this._ether.dateToPixelOffset(date)));
    }
};

Timeline._Band.prototype.setCenterVisibleDate = function(date) {
    if (!this._changing) {
        this._moveEther(Math.round(this._viewLength / 2 - this._ether.dateToPixelOffset(date)));
    }
};

Timeline._Band.prototype.dateToPixelOffset = function(date) {
    return this._ether.dateToPixelOffset(date) - this._viewOffset;
};

Timeline._Band.prototype.pixelOffsetToDate = function(pixels) {
    return this._ether.pixelOffsetToDate(pixels + this._viewOffset);
};

Timeline._Band.prototype.createLayerDiv = function(zIndex, className) {
    var div = this._timeline.getDocument().createElement("div");
    div.className = "timeline-band-layer" + (typeof className == "string" ? (" " + className) : "");
    div.style.zIndex = zIndex;
    this._innerDiv.appendChild(div);
    
    var innerDiv = this._timeline.getDocument().createElement("div");
    innerDiv.className = "timeline-band-layer-inner";
    if (SimileAjax.Platform.browser.isIE) {
        innerDiv.style.cursor = "move";
    } else {
        innerDiv.style.cursor = "-moz-grab";
    }
    div.appendChild(innerDiv);
    
    return innerDiv;
};

Timeline._Band.prototype.removeLayerDiv = function(div) {
    this._innerDiv.removeChild(div.parentNode);
};

Timeline._Band.prototype.scrollToCenter = function(date, f) {
    var pixelOffset = this._ether.dateToPixelOffset(date);
    if (pixelOffset < -this._viewLength / 2) {
        this.setCenterVisibleDate(this.pixelOffsetToDate(pixelOffset + this._viewLength));
    } else if (pixelOffset > 3 * this._viewLength / 2) {
        this.setCenterVisibleDate(this.pixelOffsetToDate(pixelOffset - this._viewLength));
    }
    this._autoScroll(Math.round(this._viewLength / 2 - this._ether.dateToPixelOffset(date)), f);
};

Timeline._Band.prototype.showBubbleForEvent = function(eventID) {
    var evt = this.getEventSource().getEvent(eventID);
    if (evt) {
        var self = this;
        this.scrollToCenter(evt.getStart(), function() {
            self._eventPainter.showBubble(evt);
        });
    }
};

Timeline._Band.prototype.zoom = function(zoomIn, x, y, target) {
  if (!this._zoomSteps) {
    // zoom disabled
    return;
  }
  
  // shift the x value by our offset
  x += this._viewOffset;

  var zoomDate = this._ether.pixelOffsetToDate(x);
  var netIntervalChange = this._ether.zoom(zoomIn);
  this._etherPainter.zoom(netIntervalChange);

  // shift our zoom date to the far left
  this._moveEther(Math.round(-this._ether.dateToPixelOffset(zoomDate)));
  // then shift it back to where the mouse was
  this._moveEther(x);
};

Timeline._Band.prototype._onMouseDown = function(innerFrame, evt, target) {
    this.closeBubble();
    
    this._dragging = true;
    this._dragX = evt.clientX;
    this._dragY = evt.clientY;
};

Timeline._Band.prototype._onMouseMove = function(innerFrame, evt, target) {
    if (this._dragging) {
        var diffX = evt.clientX - this._dragX;
        var diffY = evt.clientY - this._dragY;
        
        this._dragX = evt.clientX;
        this._dragY = evt.clientY;
        
        this._moveEther(this._timeline.isHorizontal() ? diffX : diffY);
        this._positionHighlight();
    }
};

Timeline._Band.prototype._onMouseUp = function(innerFrame, evt, target) {
    this._dragging = false;
    this._keyboardInput.focus();
};

Timeline._Band.prototype._onMouseOut = function(innerFrame, evt, target) {
    var coords = SimileAjax.DOM.getEventRelativeCoordinates(evt, innerFrame);
    coords.x += this._viewOffset;
    if (coords.x < 0 || coords.x > innerFrame.offsetWidth ||
        coords.y < 0 || coords.y > innerFrame.offsetHeight) {
        this._dragging = false;
    }
};

Timeline._Band.prototype._onMouseScroll = function(innerFrame, evt, target) {
  var now = new Date();
  now = now.getTime();

  if (!this._lastScrollTime || ((now - this._lastScrollTime) > 50)) {
    // limit 1 scroll per 200ms due to FF3 sending multiple events back to back
    this._lastScrollTime = now;

    var delta = 0;
    if (evt.wheelDelta) {
      delta = evt.wheelDelta/120;
    } else if (evt.detail) {
      delta = -evt.detail/3;
    }
    
    // either scroll or zoom
    var mouseWheel = this._theme.mouseWheel;
    
    if (this._zoomSteps || mouseWheel === 'zoom') {
      var loc = SimileAjax.DOM.getEventRelativeCoordinates(evt, innerFrame);
      if (delta != 0) {
        var zoomIn;
        if (delta > 0)
          zoomIn = true;
        if (delta < 0)
          zoomIn = false;
        // call zoom on the timeline so we could zoom multiple bands if desired
        this._timeline.zoom(zoomIn, loc.x, loc.y, innerFrame);
      }
    }
    else if (mouseWheel === 'scroll') {
    	var move_amt = 50 * (delta < 0 ? -1 : 1);
      this._moveEther(move_amt);
    }
  }

  // prevent bubble
  if (evt.stopPropagation) {
    evt.stopPropagation();
  }
  evt.cancelBubble = true;

  // prevent the default action
  if (evt.preventDefault) {
    evt.preventDefault();
  }
  evt.returnValue = false;
};

Timeline._Band.prototype._onDblClick = function(innerFrame, evt, target) {
    var coords = SimileAjax.DOM.getEventRelativeCoordinates(evt, innerFrame);
    var distance = coords.x - (this._viewLength / 2 - this._viewOffset);
    
    this._autoScroll(-distance);
};

Timeline._Band.prototype._onKeyDown = function(keyboardInput, evt, target) {
    if (!this._dragging) {
        switch (evt.keyCode) {
        case 27: // ESC
            break;
        case 37: // left arrow
        case 38: // up arrow
            this._scrollSpeed = Math.min(50, Math.abs(this._scrollSpeed * 1.05));
            this._moveEther(this._scrollSpeed);
            break;
        case 39: // right arrow
        case 40: // down arrow
            this._scrollSpeed = -Math.min(50, Math.abs(this._scrollSpeed * 1.05));
            this._moveEther(this._scrollSpeed);
            break;
        default:
            return true;
        }
        this.closeBubble();
        
        SimileAjax.DOM.cancelEvent(evt);
        return false;
    }
    return true;
};

Timeline._Band.prototype._onKeyUp = function(keyboardInput, evt, target) {
    if (!this._dragging) {
        this._scrollSpeed = this._originalScrollSpeed;
        
        switch (evt.keyCode) {
        case 35: // end
            this.setCenterVisibleDate(this._eventSource.getLatestDate());
            break;
        case 36: // home
            this.setCenterVisibleDate(this._eventSource.getEarliestDate());
            break;
        case 33: // page up
            this._autoScroll(this._timeline.getPixelLength());
            break;
        case 34: // page down
            this._autoScroll(-this._timeline.getPixelLength());
            break;
        default:
            return true;
        }
        
        this.closeBubble();
        
        SimileAjax.DOM.cancelEvent(evt);
        return false;
    }
    return true;
};

Timeline._Band.prototype._autoScroll = function(distance, f) {
    var b = this;
    var a = SimileAjax.Graphics.createAnimation(
        function(abs, diff) {
            b._moveEther(diff);
        }, 
        0, 
        distance, 
        1000, 
        f
    );
    a.run();
};

Timeline._Band.prototype._moveEther = function(shift) {
    this.closeBubble();
    
    // A positive shift means back in time
    // Check that we're not moving beyond Timeline's limits
    if (!this._timeline.shiftOK(this._index, shift)) {
        return; // early return
    }

    this._viewOffset += shift;
    this._ether.shiftPixels(-shift);
    if (this._timeline.isHorizontal()) {
        this._div.style.left = this._viewOffset + "px";
    } else {
        this._div.style.top = this._viewOffset + "px";
    }
    
    if (this._viewOffset > -this._viewLength * 0.5 ||
        this._viewOffset < -this._viewLength * (Timeline._Band.SCROLL_MULTIPLES - 1.5)) {
        
        this._recenterDiv();
    } else {
        this.softLayout();
    }    
    
    this._onChanging();
}

Timeline._Band.prototype._onChanging = function() {
    this._changing = true;

    this._fireOnScroll();
    this._setSyncWithBandDate();
    
    this._changing = false;
};

Timeline._Band.prototype.busy = function() {
    // Is this band busy changing other bands?
    return(this._changing);
};

Timeline._Band.prototype._fireOnScroll = function() {
    for (var i = 0; i < this._onScrollListeners.length; i++) {
        this._onScrollListeners[i](this);
    }
};

Timeline._Band.prototype._setSyncWithBandDate = function() {
    if (this._syncWithBand) {
        var centerDate = this._ether.pixelOffsetToDate(this.getViewLength() / 2);
        this._syncWithBand.setCenterVisibleDate(centerDate);
    }
};

Timeline._Band.prototype._onHighlightBandScroll = function() {
    if (this._syncWithBand) {
        var centerDate = this._syncWithBand.getCenterVisibleDate();
        var centerPixelOffset = this._ether.dateToPixelOffset(centerDate);
        
        this._moveEther(Math.round(this._viewLength / 2 - centerPixelOffset));
        
        if (this._highlight) {
            this._etherPainter.setHighlight(
                this._syncWithBand.getMinVisibleDate(), 
                this._syncWithBand.getMaxVisibleDate());
        }
    }
};

Timeline._Band.prototype._onAddMany = function() {
    this._paintEvents();
};

Timeline._Band.prototype._onClear = function() {
    this._paintEvents();
};

Timeline._Band.prototype._positionHighlight = function() {
    if (this._syncWithBand) {
        var startDate = this._syncWithBand.getMinVisibleDate();
        var endDate = this._syncWithBand.getMaxVisibleDate();
        
        if (this._highlight) {
            this._etherPainter.setHighlight(startDate, endDate);
        }
    }
};

Timeline._Band.prototype._recenterDiv = function() {
    this._viewOffset = -this._viewLength * (Timeline._Band.SCROLL_MULTIPLES - 1) / 2;
    if (this._timeline.isHorizontal()) {
        this._div.style.left = this._viewOffset + "px";
        this._div.style.width = (Timeline._Band.SCROLL_MULTIPLES * this._viewLength) + "px";
    } else {
        this._div.style.top = this._viewOffset + "px";
        this._div.style.height = (Timeline._Band.SCROLL_MULTIPLES * this._viewLength) + "px";
    }
    this.layout();
};

Timeline._Band.prototype._paintEvents = function() {
    this._eventPainter.paint();
};

Timeline._Band.prototype._softPaintEvents = function() {
    this._eventPainter.softPaint();
};

Timeline._Band.prototype._paintDecorators = function() {
    for (var i = 0; i < this._decorators.length; i++) {
        this._decorators[i].paint();
    }
};

Timeline._Band.prototype._softPaintDecorators = function() {
    for (var i = 0; i < this._decorators.length; i++) {
        this._decorators[i].softPaint();
    }
};

Timeline._Band.prototype.closeBubble = function() {
    SimileAjax.WindowManager.cancelPopups();
};

/*==================================================
 *  Original Event Painter
 *==================================================
 */

Timeline.CompactEventPainter = function(params) {
    this._params = params;
    this._onSelectListeners = [];
    
    this._filterMatcher = null;
    this._highlightMatcher = null;
    this._frc = null;
    
    this._eventIdToElmt = {};
};

Timeline.CompactEventPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backLayer = null;
    this._eventLayer = null;
    this._lineLayer = null;
    this._highlightLayer = null;
    
    this._eventIdToElmt = null;
};

Timeline.CompactEventPainter.prototype.addOnSelectListener = function(listener) {
    this._onSelectListeners.push(listener);
};

Timeline.CompactEventPainter.prototype.removeOnSelectListener = function(listener) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        if (this._onSelectListeners[i] == listener) {
            this._onSelectListeners.splice(i, 1);
            break;
        }
    }
};

Timeline.CompactEventPainter.prototype.getFilterMatcher = function() {
    return this._filterMatcher;
};

Timeline.CompactEventPainter.prototype.setFilterMatcher = function(filterMatcher) {
    this._filterMatcher = filterMatcher;
};

Timeline.CompactEventPainter.prototype.getHighlightMatcher = function() {
    return this._highlightMatcher;
};

Timeline.CompactEventPainter.prototype.setHighlightMatcher = function(highlightMatcher) {
    this._highlightMatcher = highlightMatcher;
};

Timeline.CompactEventPainter.prototype.paint = function() {
    var eventSource = this._band.getEventSource();
    if (eventSource == null) {
        return;
    }
    
    this._eventIdToElmt = {};
    this._prepareForPainting();
    
    var theme = this._params.theme;
    var eventTheme = theme.event;
    
    var metrics = {
        trackOffset:            "trackOffset" in this._params ? this._params.trackOffset : 10,
        trackHeight:            "trackHeight" in this._params ? this._params.trackHeight : 10,
        
        tapeHeight:             theme.event.tape.height,
        tapeBottomMargin:       "tapeBottomMargin" in this._params ? this._params.tapeBottomMargin : 2,
        
        labelBottomMargin:      "labelBottomMargin" in this._params ? this._params.labelBottomMargin : 5,
        labelRightMargin:       "labelRightMargin" in this._params ? this._params.labelRightMargin : 5,
        
        defaultIcon:            eventTheme.instant.icon,
        defaultIconWidth:       eventTheme.instant.iconWidth,
        defaultIconHeight:      eventTheme.instant.iconHeight,
        
        customIconWidth:        "iconWidth" in this._params ? this._params.iconWidth : eventTheme.instant.iconWidth,
        customIconHeight:       "iconHeight" in this._params ? this._params.iconHeight : eventTheme.instant.iconHeight,
        
        iconLabelGap:           "iconLabelGap" in this._params ? this._params.iconLabelGap : 2,
        iconBottomMargin:       "iconBottomMargin" in this._params ? this._params.iconBottomMargin : 2
    };
    if ("compositeIcon" in this._params) {
        metrics.compositeIcon = this._params.compositeIcon;
        metrics.compositeIconWidth = this._params.compositeIconWidth || metrics.customIconWidth;
        metrics.compositeIconHeight = this._params.compositeIconHeight || metrics.customIconHeight;
    } else {
        metrics.compositeIcon = metrics.defaultIcon;
        metrics.compositeIconWidth = metrics.defaultIconWidth;
        metrics.compositeIconHeight = metrics.defaultIconHeight;
    }
    metrics.defaultStackIcon = "icon" in this._params.stackConcurrentPreciseInstantEvents ?
        this._params.stackConcurrentPreciseInstantEvents.icon : metrics.defaultIcon;
    metrics.defaultStackIconWidth = "iconWidth" in this._params.stackConcurrentPreciseInstantEvents ?
        this._params.stackConcurrentPreciseInstantEvents.iconWidth : metrics.defaultIconWidth;
    metrics.defaultStackIconHeight = "iconHeight" in this._params.stackConcurrentPreciseInstantEvents ?
        this._params.stackConcurrentPreciseInstantEvents.iconHeight : metrics.defaultIconHeight;
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var filterMatcher = (this._filterMatcher != null) ? 
        this._filterMatcher :
        function(evt) { return true; };
        
    var highlightMatcher = (this._highlightMatcher != null) ? 
        this._highlightMatcher :
        function(evt) { return -1; };
    
    var iterator = eventSource.getEventIterator(minDate, maxDate);
    
    var stackConcurrentPreciseInstantEvents = "stackConcurrentPreciseInstantEvents" in this._params && typeof this._params.stackConcurrentPreciseInstantEvents == "object";
    var collapseConcurrentPreciseInstantEvents = "collapseConcurrentPreciseInstantEvents" in this._params && this._params.collapseConcurrentPreciseInstantEvents;
    if (collapseConcurrentPreciseInstantEvents || stackConcurrentPreciseInstantEvents) {
        var bufferedEvents = [];
        var previousInstantEvent = null;
        
        while (iterator.hasNext()) {
            var evt = iterator.next();
            if (filterMatcher(evt)) {
                if (!evt.isInstant() || evt.isImprecise()) {
                    this.paintEvent(evt, metrics, this._params.theme, highlightMatcher(evt));
                } else if (previousInstantEvent != null &&
                        previousInstantEvent.getStart().getTime() == evt.getStart().getTime()) {
                    bufferedEvents[bufferedEvents.length - 1].push(evt);
                } else {
                    bufferedEvents.push([ evt ]);
                    previousInstantEvent = evt;
                }
            }
        }
        
        for (var i = 0; i < bufferedEvents.length; i++) {
            var compositeEvents = bufferedEvents[i];
            if (compositeEvents.length == 1) {
                this.paintEvent(compositeEvents[0], metrics, this._params.theme, highlightMatcher(evt)); 
            } else {
                var match = -1;
                for (var j = 0; match < 0 && j < compositeEvents.length; j++) {
                    match = highlightMatcher(compositeEvents[j]);
                }
                
                if (stackConcurrentPreciseInstantEvents) {
                    this.paintStackedPreciseInstantEvents(compositeEvents, metrics, this._params.theme, match);
                } else {
                    this.paintCompositePreciseInstantEvents(compositeEvents, metrics, this._params.theme, match);
                }
            }
        }
    } else {
        while (iterator.hasNext()) {
            var evt = iterator.next();
            if (filterMatcher(evt)) {
                this.paintEvent(evt, metrics, this._params.theme, highlightMatcher(evt));
            }
        }
    }
    
    this._highlightLayer.style.display = "block";
    this._lineLayer.style.display = "block";
    this._eventLayer.style.display = "block";
};

Timeline.CompactEventPainter.prototype.softPaint = function() {
};

Timeline.CompactEventPainter.prototype._prepareForPainting = function() {
    var band = this._band;
        
    if (this._backLayer == null) {
        this._backLayer = this._band.createLayerDiv(0, "timeline-band-events");
        this._backLayer.style.visibility = "hidden";
        
        var eventLabelPrototype = document.createElement("span");
        eventLabelPrototype.className = "timeline-event-label";
        this._backLayer.appendChild(eventLabelPrototype);
        this._frc = SimileAjax.Graphics.getFontRenderingContext(eventLabelPrototype);
    }
    this._frc.update();
    this._tracks = [];
    
    if (this._highlightLayer != null) {
        band.removeLayerDiv(this._highlightLayer);
    }
    this._highlightLayer = band.createLayerDiv(105, "timeline-band-highlights");
    this._highlightLayer.style.display = "none";
    
    if (this._lineLayer != null) {
        band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = band.createLayerDiv(110, "timeline-band-lines");
    this._lineLayer.style.display = "none";
    
    if (this._eventLayer != null) {
        band.removeLayerDiv(this._eventLayer);
    }
    this._eventLayer = band.createLayerDiv(115, "timeline-band-events");
    this._eventLayer.style.display = "none";
};

Timeline.CompactEventPainter.prototype.paintEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isInstant()) {
        this.paintInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintDurationEvent(evt, metrics, theme, highlightIndex);
    }
};
    
Timeline.CompactEventPainter.prototype.paintInstantEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseInstantEvent(evt, metrics, theme, highlightIndex);
    }
}

Timeline.CompactEventPainter.prototype.paintDurationEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseDurationEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseDurationEvent(evt, metrics, theme, highlightIndex);
    }
}
    
Timeline.CompactEventPainter.prototype.paintPreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var commonData = {
        tooltip: evt.getProperty("tooltip") || evt.getText()
    };
    
    var iconData = {
        url: evt.getIcon()
    };
    if (iconData.url == null) {
        iconData.url = metrics.defaultIcon;
        iconData.width = metrics.defaultIconWidth;
        iconData.height = metrics.defaultIconHeight;
        iconData.className = "timeline-event-icon-default";
    } else {
        iconData.width = evt.getProperty("iconWidth") || metrics.customIconWidth;
        iconData.height = evt.getProperty("iconHeight") || metrics.customIconHeight;
    }
    
    var labelData = {
        text:       evt.getText(),
        color:      evt.getTextColor() || evt.getColor(),
        className:  evt.getClassName()
    };
    
    var result = this.paintTapeIconLabel(
        evt.getStart(),
        commonData,
        null, // no tape data
        iconData,
        labelData,
        metrics,
        theme,
        highlightIndex
    );

    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickInstantEvent(result.iconElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(result.iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(result.labelElmtData.elmt, "mousedown", clickHandler);
    
    this._eventIdToElmt[evt.getID()] = result.iconElmtData.elmt;
};

Timeline.CompactEventPainter.prototype.paintCompositePreciseInstantEvents = function(events, metrics, theme, highlightIndex) {
    var evt = events[0];
    
    var tooltips = [];
    for (var i = 0; i < events.length; i++) {
        tooltips.push(events[i].getProperty("tooltip") || events[i].getText());
    }
    var commonData = {
        tooltip: tooltips.join("; ")
    };
    
    var iconData = {
        url: metrics.compositeIcon,
        width: metrics.compositeIconWidth,
        height: metrics.compositeIconHeight,
        className: "timeline-event-icon-composite"
    };
    
    var labelData = {
        text: String.substitute(this._params.compositeEventLabelTemplate, [ events.length ])
    };
    
    var result = this.paintTapeIconLabel(
        evt.getStart(),
        commonData,
        null, // no tape data
        iconData,
        labelData,
        metrics,
        theme,
        highlightIndex
    );
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickMultiplePreciseInstantEvent(result.iconElmtData.elmt, domEvt, events);
    };
    
    SimileAjax.DOM.registerEvent(result.iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(result.labelElmtData.elmt, "mousedown", clickHandler);
    
    for (var i = 0; i < events.length; i++) {
        this._eventIdToElmt[events[i].getID()] = result.iconElmtData.elmt;
    }
};

Timeline.CompactEventPainter.prototype.paintStackedPreciseInstantEvents = function(events, metrics, theme, highlightIndex) {
    var limit = "limit" in this._params.stackConcurrentPreciseInstantEvents ? 
        this._params.stackConcurrentPreciseInstantEvents.limit : 10;
    var moreMessageTemplate = "moreMessageTemplate" in this._params.stackConcurrentPreciseInstantEvents ? 
        this._params.stackConcurrentPreciseInstantEvents.moreMessageTemplate : "%0 More Events";
    var showMoreMessage = limit <= events.length - 2; // We want at least 2 more events above the limit.
                                                      // Otherwise we'd need the singular case of "1 More Event"

    var band = this._band;
    var getPixelOffset = function(date) {
        return Math.round(band.dateToPixelOffset(date));
    };
    var getIconData = function(evt) {
        var iconData = {
            url: evt.getIcon()
        };
        if (iconData.url == null) {
            iconData.url = metrics.defaultStackIcon;
            iconData.width = metrics.defaultStackIconWidth;
            iconData.height = metrics.defaultStackIconHeight;
            iconData.className = "timeline-event-icon-stack timeline-event-icon-default";
        } else {
            iconData.width = evt.getProperty("iconWidth") || metrics.customIconWidth;
            iconData.height = evt.getProperty("iconHeight") || metrics.customIconHeight;
            iconData.className = "timeline-event-icon-stack";
        }
        return iconData;
    };
    
    var firstIconData = getIconData(events[0]);
    var horizontalIncrement = 5;
    var leftIconEdge = 0;
    var totalLabelWidth = 0;
    var totalLabelHeight = 0;
    var totalIconHeight = 0;
    
    var records = [];
    for (var i = 0; i < events.length && (!showMoreMessage || i < limit); i++) {
        var evt = events[i];
        var text = evt.getText();
        var iconData = getIconData(evt);
        var labelSize = this._frc.computeSize(text);
        var record = {
            text:       text,
            iconData:   iconData,
            labelSize:  labelSize,
            iconLeft:   firstIconData.width + i * horizontalIncrement - iconData.width
        };
        record.labelLeft = firstIconData.width + i * horizontalIncrement + metrics.iconLabelGap;
        record.top = totalLabelHeight;
        records.push(record);
        
        leftIconEdge = Math.min(leftIconEdge, record.iconLeft);
        totalLabelHeight += labelSize.height;
        totalLabelWidth = Math.max(totalLabelWidth, record.labelLeft + labelSize.width);
        totalIconHeight = Math.max(totalIconHeight, record.top + iconData.height);
    }
    if (showMoreMessage) {
        var moreMessage = String.substitute(moreMessageTemplate, [ events.length - limit ]);
    
        var moreMessageLabelSize = this._frc.computeSize(moreMessage);
        var moreMessageLabelLeft = firstIconData.width + (limit - 1) * horizontalIncrement + metrics.iconLabelGap;
        var moreMessageLabelTop = totalLabelHeight;
        
        totalLabelHeight += moreMessageLabelSize.height;
        totalLabelWidth = Math.max(totalLabelWidth, moreMessageLabelLeft + moreMessageLabelSize.width);
    }
    totalLabelWidth += metrics.labelRightMargin;
    totalLabelHeight += metrics.labelBottomMargin;
    totalIconHeight += metrics.iconBottomMargin;
    
    var anchorPixel = getPixelOffset(events[0].getStart());
    var newTracks = [];
    
    var trackCount = Math.ceil(Math.max(totalIconHeight, totalLabelHeight) / metrics.trackHeight);
    var rightIconEdge = firstIconData.width + (events.length - 1) * horizontalIncrement;
    for (var i = 0; i < trackCount; i++) {
        newTracks.push({ start: leftIconEdge, end: rightIconEdge });
    }
    var labelTrackCount = Math.ceil(totalLabelHeight / metrics.trackHeight);
    for (var i = 0; i < labelTrackCount; i++) {
        var track = newTracks[i];
        track.end = Math.max(track.end, totalLabelWidth);
    }

    var firstTrack = this._fitTracks(anchorPixel, newTracks);
    var verticalPixelOffset = firstTrack * metrics.trackHeight + metrics.trackOffset;
    
    var iconStackDiv = this._timeline.getDocument().createElement("div");
    iconStackDiv.className = 'timeline-event-icon-stack';
    iconStackDiv.style.position = "absolute";
    iconStackDiv.style.overflow = "visible";
    iconStackDiv.style.left = anchorPixel + "px";
    iconStackDiv.style.top = verticalPixelOffset + "px";
    iconStackDiv.style.width = rightIconEdge + "px";
    iconStackDiv.style.height = totalIconHeight + "px";
    iconStackDiv.innerHTML = "<div style='position: relative'></div>";
    this._eventLayer.appendChild(iconStackDiv);
    
    var self = this;
    var onMouseOver = function(domEvt) {
        try {
            var n = parseInt(this.getAttribute("index"));
            var childNodes = iconStackDiv.firstChild.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                var child = childNodes[i];
                if (i == n) {
                    child.style.zIndex = childNodes.length;
                } else {
                    child.style.zIndex = childNodes.length - i;
                }
            }
        } catch (e) {
        }
    };
    var paintEvent = function(index) {
        var record = records[index];
        var evt = events[index];
        var tooltip = evt.getProperty("tooltip") || evt.getText();
        
        var labelElmtData = self._paintEventLabel(
            { tooltip: tooltip },
            { text: record.text },
            anchorPixel + record.labelLeft,
            verticalPixelOffset + record.top,
            record.labelSize.width, 
            record.labelSize.height, 
            theme
        );
        labelElmtData.elmt.setAttribute("index", index);
        labelElmtData.elmt.onmouseover = onMouseOver;
        
        var img = SimileAjax.Graphics.createTranslucentImage(record.iconData.url);
        var iconDiv = self._timeline.getDocument().createElement("div");
        iconDiv.className = 'timeline-event-icon' + ("className" in record.iconData ? (" " + record.iconData.className) : "");
        iconDiv.style.left = record.iconLeft + "px";
        iconDiv.style.top = record.top + "px";
        iconDiv.style.zIndex = (records.length - index);
        iconDiv.appendChild(img);
        iconDiv.setAttribute("index", index);
        iconDiv.onmouseover = onMouseOver;
        
        iconStackDiv.firstChild.appendChild(iconDiv);
        
        var clickHandler = function(elmt, domEvt, target) {
            return self._onClickInstantEvent(labelElmtData.elmt, domEvt, evt);
        };
        
        SimileAjax.DOM.registerEvent(iconDiv, "mousedown", clickHandler);
        SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
        
        self._eventIdToElmt[evt.getID()] = iconDiv;
    };
    for (var i = 0; i < records.length; i++) {
        paintEvent(i);
    }
    
    if (showMoreMessage) {
        var moreEvents = events.slice(limit);
        var moreMessageLabelElmtData = this._paintEventLabel(
            { tooltip: moreMessage },
            { text: moreMessage },
            anchorPixel + moreMessageLabelLeft,
            verticalPixelOffset + moreMessageLabelTop,
            moreMessageLabelSize.width, 
            moreMessageLabelSize.height, 
            theme
        );
        
        var moreMessageClickHandler = function(elmt, domEvt, target) {
            return self._onClickMultiplePreciseInstantEvent(moreMessageLabelElmtData.elmt, domEvt, moreEvents);
        };
        SimileAjax.DOM.registerEvent(moreMessageLabelElmtData.elmt, "mousedown", moreMessageClickHandler);
        
        for (var i = 0; i < moreEvents.length; i++) {
            this._eventIdToElmt[moreEvents[i].getID()] = moreMessageLabelElmtData.elmt;
        }
    }
    //this._createHighlightDiv(highlightIndex, iconElmtData, theme);
};

Timeline.CompactEventPainter.prototype.paintImpreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var commonData = {
        tooltip: evt.getProperty("tooltip") || evt.getText()
    };
    
    var tapeData = {
        start:          evt.getStart(),
        end:            evt.getEnd(),
        latestStart:    evt.getLatestStart(),
        earliestEnd:    evt.getEarliestEnd(),
        isInstant:      true
    };
    
    var iconData = {
        url: evt.getIcon()
    };
    if (iconData.url == null) {
        iconData = null;
    } else {
        iconData.width = evt.getProperty("iconWidth") || metrics.customIconWidth;
        iconData.height = evt.getProperty("iconHeight") || metrics.customIconHeight;
    }
    
    var labelData = {
        text:       evt.getText(),
        color:      evt.getTextColor() || evt.getColor(),
        className:  evt.getClassName()
    };
    
    var result = this.paintTapeIconLabel(
        evt.getStart(),
        commonData,
        tapeData, // no tape data
        iconData,
        labelData,
        metrics,
        theme,
        highlightIndex
    );

    var self = this;
    var clickHandler = iconData != null ? 
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.iconElmtData.elmt, domEvt, evt);
        } :
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.labelElmtData.elmt, domEvt, evt);
        };
        
    SimileAjax.DOM.registerEvent(result.labelElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(result.impreciseTapeElmtData.elmt, "mousedown", clickHandler);
    
    if (iconData != null) {
        SimileAjax.DOM.registerEvent(result.iconElmtData.elmt, "mousedown", clickHandler);
        this._eventIdToElmt[evt.getID()] = result.iconElmtData.elmt;
    } else {
        this._eventIdToElmt[evt.getID()] = result.labelElmtData.elmt;
    }
};

Timeline.CompactEventPainter.prototype.paintPreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var commonData = {
        tooltip: evt.getProperty("tooltip") || evt.getText()
    };
    
    var tapeData = {
        start:          evt.getStart(),
        end:            evt.getEnd(),
        isInstant:      false
    };
    
    var iconData = {
        url: evt.getIcon()
    };
    if (iconData.url == null) {
        iconData = null;
    } else {
        iconData.width = evt.getProperty("iconWidth") || metrics.customIconWidth;
        iconData.height = evt.getProperty("iconHeight") || metrics.customIconHeight;
    }
    
    var labelData = {
        text:       evt.getText(),
        color:      evt.getTextColor() || evt.getColor(),
        className:  evt.getClassName()
    };
    
    var result = this.paintTapeIconLabel(
        evt.getLatestStart(),
        commonData,
        tapeData, // no tape data
        iconData,
        labelData,
        metrics,
        theme,
        highlightIndex
    );

    var self = this;
    var clickHandler = iconData != null ? 
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.iconElmtData.elmt, domEvt, evt);
        } :
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.labelElmtData.elmt, domEvt, evt);
        };
        
    SimileAjax.DOM.registerEvent(result.labelElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(result.tapeElmtData.elmt, "mousedown", clickHandler);
    
    if (iconData != null) {
        SimileAjax.DOM.registerEvent(result.iconElmtData.elmt, "mousedown", clickHandler);
        this._eventIdToElmt[evt.getID()] = result.iconElmtData.elmt;
    } else {
        this._eventIdToElmt[evt.getID()] = result.labelElmtData.elmt;
    }
};

Timeline.CompactEventPainter.prototype.paintImpreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var commonData = {
        tooltip: evt.getProperty("tooltip") || evt.getText()
    };
    
    var tapeData = {
        start:          evt.getStart(),
        end:            evt.getEnd(),
        latestStart:    evt.getLatestStart(),
        earliestEnd:    evt.getEarliestEnd(),
        isInstant:      false
    };
    
    var iconData = {
        url: evt.getIcon()
    };
    if (iconData.url == null) {
        iconData = null;
    } else {
        iconData.width = evt.getProperty("iconWidth") || metrics.customIconWidth;
        iconData.height = evt.getProperty("iconHeight") || metrics.customIconHeight;
    }
    
    var labelData = {
        text:       evt.getText(),
        color:      evt.getTextColor() || evt.getColor(),
        className:  evt.getClassName()
    };
    
    var result = this.paintTapeIconLabel(
        evt.getLatestStart(),
        commonData,
        tapeData, // no tape data
        iconData,
        labelData,
        metrics,
        theme,
        highlightIndex
    );

    var self = this;
    var clickHandler = iconData != null ? 
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.iconElmtData.elmt, domEvt, evt);
        } :
        function(elmt, domEvt, target) {
            return self._onClickInstantEvent(result.labelElmtData.elmt, domEvt, evt);
        };
        
    SimileAjax.DOM.registerEvent(result.labelElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(result.tapeElmtData.elmt, "mousedown", clickHandler);
    
    if (iconData != null) {
        SimileAjax.DOM.registerEvent(result.iconElmtData.elmt, "mousedown", clickHandler);
        this._eventIdToElmt[evt.getID()] = result.iconElmtData.elmt;
    } else {
        this._eventIdToElmt[evt.getID()] = result.labelElmtData.elmt;
    }
};

Timeline.CompactEventPainter.prototype.paintTapeIconLabel = function(
    anchorDate, 
    commonData,
    tapeData, 
    iconData, 
    labelData, 
    metrics, 
    theme, 
    highlightIndex
) {
    var band = this._band;
    var getPixelOffset = function(date) {
        return Math.round(band.dateToPixelOffset(date));
    };
    
    var anchorPixel = getPixelOffset(anchorDate);
    var newTracks = [];
    
    var tapeHeightOccupied = 0;         // how many pixels (vertically) the tape occupies, including bottom margin
    var tapeTrackCount = 0;             // how many tracks the tape takes up, usually just 1
    var tapeLastTrackExtraSpace = 0;    // on the last track that the tape occupies, how many pixels are left (for icon and label to occupy as well)
    if (tapeData != null) {
        tapeHeightOccupied = metrics.tapeHeight + metrics.tapeBottomMargin;
        tapeTrackCount = Math.ceil(metrics.tapeHeight / metrics.trackHeight);
        
        var tapeEndPixelOffset = getPixelOffset(tapeData.end) - anchorPixel;
        var tapeStartPixelOffset = getPixelOffset(tapeData.start) - anchorPixel;
        
        for (var t = 0; t < tapeTrackCount; t++) {
            newTracks.push({ start: tapeStartPixelOffset, end: tapeEndPixelOffset });
        }
        
        tapeLastTrackExtraSpace = metrics.trackHeight - (tapeHeightOccupied % metrics.tapeHeight);
    }
    
    var iconStartPixelOffset = 0;        // where the icon starts compared to the anchor pixel; 
                                         // this can be negative if the icon is center-aligned around the anchor
    var iconHorizontalSpaceOccupied = 0; // how many pixels the icon take up from the anchor pixel, 
                                         // including the gap between the icon and the label
    if (iconData != null) {
        if ("iconAlign" in iconData && iconData.iconAlign == "center") {
            iconStartPixelOffset = -Math.floor(iconData.width / 2);
        }
        iconHorizontalSpaceOccupied = iconStartPixelOffset + iconData.width + metrics.iconLabelGap;
        
        if (tapeTrackCount > 0) {
            newTracks[tapeTrackCount - 1].end = Math.max(newTracks[tapeTrackCount - 1].end, iconHorizontalSpaceOccupied);
        }
        
        var iconHeight = iconData.height + metrics.iconBottomMargin + tapeLastTrackExtraSpace;
        while (iconHeight > 0) {
            newTracks.push({ start: iconStartPixelOffset, end: iconHorizontalSpaceOccupied });
            iconHeight -= metrics.trackHeight;
        }
    }
    
    var text = labelData.text;
    var labelSize = this._frc.computeSize(text);
    var labelHeight = labelSize.height + metrics.labelBottomMargin + tapeLastTrackExtraSpace;
    var labelEndPixelOffset = iconHorizontalSpaceOccupied + labelSize.width + metrics.labelRightMargin;
    if (tapeTrackCount > 0) {
        newTracks[tapeTrackCount - 1].end = Math.max(newTracks[tapeTrackCount - 1].end, labelEndPixelOffset);
    }
    for (var i = 0; labelHeight > 0; i++) {
        if (tapeTrackCount + i < newTracks.length) {
            var track = newTracks[tapeTrackCount + i];
            track.end = labelEndPixelOffset;
        } else {
            newTracks.push({ start: 0, end: labelEndPixelOffset });
        }
        labelHeight -= metrics.trackHeight;
    }
    
    /*
     *  Try to fit the new track on top of the existing tracks, then
     *  render the various elements.
     */
    var firstTrack = this._fitTracks(anchorPixel, newTracks);
    var verticalPixelOffset = firstTrack * metrics.trackHeight + metrics.trackOffset;
    var result = {};
    
    result.labelElmtData = this._paintEventLabel(
        commonData,
        labelData,
        anchorPixel + iconHorizontalSpaceOccupied,
        verticalPixelOffset + tapeHeightOccupied,
        labelSize.width, 
        labelSize.height, 
        theme
    );
    
    if (tapeData != null) {
        if ("latestStart" in tapeData || "earliestEnd" in tapeData) {
            result.impreciseTapeElmtData = this._paintEventTape(
                commonData,
                tapeData,
                metrics.tapeHeight,
                verticalPixelOffset, 
                getPixelOffset(tapeData.start),
                getPixelOffset(tapeData.end),
                theme.event.duration.impreciseColor,
                theme.event.duration.impreciseOpacity, 
                metrics, 
                theme
            );
        }
        if (!tapeData.isInstant && "start" in tapeData && "end" in tapeData) {
            result.tapeElmtData = this._paintEventTape(
                commonData,
                tapeData,
                metrics.tapeHeight,
                verticalPixelOffset,
                anchorPixel,
                getPixelOffset("earliestEnd" in tapeData ? tapeData.earliestEnd : tapeData.end), 
                tapeData.color, 
                100, 
                metrics, 
                theme
            );
        }
    }
    
    if (iconData != null) {
        result.iconElmtData = this._paintEventIcon(
            commonData,
            iconData,
            verticalPixelOffset + tapeHeightOccupied,
            anchorPixel + iconStartPixelOffset,
            metrics, 
            theme
        );
    }
    //this._createHighlightDiv(highlightIndex, iconElmtData, theme);
    
    return result;
};

Timeline.CompactEventPainter.prototype._fitTracks = function(anchorPixel, newTracks) {
    var firstTrack;
    for (firstTrack = 0; firstTrack < this._tracks.length; firstTrack++) {
        var fit = true;
        for (var j = 0; j < newTracks.length && (firstTrack + j) < this._tracks.length; j++) {
            var existingTrack = this._tracks[firstTrack + j];
            var newTrack = newTracks[j];
            if (anchorPixel + newTrack.start < existingTrack) {
                fit = false;
                break;
            }
        }
        
        if (fit) {
            break;
        }
    }
    for (var i = 0; i < newTracks.length; i++) {
        this._tracks[firstTrack + i] = anchorPixel + newTracks[i].end;
    }
    
    return firstTrack;
};


Timeline.CompactEventPainter.prototype._paintEventIcon = function(commonData, iconData, top, left, metrics, theme) {
    var img = SimileAjax.Graphics.createTranslucentImage(iconData.url);
    var iconDiv = this._timeline.getDocument().createElement("div");
    iconDiv.className = 'timeline-event-icon' + ("className" in iconData ? (" " + iconData.className) : "");
    iconDiv.style.left = left + "px";
    iconDiv.style.top = top + "px";
    iconDiv.appendChild(img);
    
    if ("tooltip" in commonData && typeof commonData.tooltip == "string") {
        iconDiv.title = commonData.tooltip;
    }
    
    this._eventLayer.appendChild(iconDiv);
    
    return {
        left:   left,
        top:    top,
        width:  metrics.iconWidth,
        height: metrics.iconHeight,
        elmt:   iconDiv
    };
};

Timeline.CompactEventPainter.prototype._paintEventLabel = function(commonData, labelData, left, top, width, height, theme) {
    var doc = this._timeline.getDocument();
    
    var labelDiv = doc.createElement("div");
    labelDiv.className = 'timeline-event-label';

    labelDiv.style.left = left + "px";
    labelDiv.style.width = (width + 1) + "px";
    labelDiv.style.top = top + "px";
    labelDiv.innerHTML = labelData.text;

    if ("tooltip" in commonData && typeof commonData.tooltip == "string") {
        labelDiv.title = commonData.tooltip;
    }
    if ("color" in labelData && typeof labelData.color == "string") {
        labelDiv.style.color = labelData.color;
    }
    if ("className" in labelData && typeof labelData.className == "string") {
        labelDiv.className += ' ' + labelData.className;
    }
    
    this._eventLayer.appendChild(labelDiv);
    
    return {
        left:   left,
        top:    top,
        width:  width,
        height: height,
        elmt:   labelDiv
    };
};

Timeline.CompactEventPainter.prototype._paintEventTape = function(
    commonData, tapeData, height, top, startPixel, endPixel, color, opacity, metrics, theme) {
    
    var width = endPixel - startPixel;
    
    var tapeDiv = this._timeline.getDocument().createElement("div");
    tapeDiv.className = "timeline-event-tape"

    tapeDiv.style.left = startPixel + "px";
    tapeDiv.style.top = top + "px";
    tapeDiv.style.width = width + "px";
    tapeDiv.style.height = height + "px";

    if ("tooltip" in commonData && typeof commonData.tooltip == "string") {
        tapeDiv.title = commonData.tooltip;
    }
    if (color != null && typeof tapeData.color == "string") {
        tapeDiv.style.backgroundColor = color;
    }
    
    if ("backgroundImage" in tapeData && typeof tapeData.backgroundImage == "string") {
        tapeDiv.style.backgroundImage = "url(" + backgroundImage + ")";
        tapeDiv.style.backgroundRepeat = 
            ("backgroundRepeat" in tapeData && typeof tapeData.backgroundRepeat == "string") 
                ? tapeData.backgroundRepeat : 'repeat';
    }
    
    SimileAjax.Graphics.setOpacity(tapeDiv, opacity);
    
    if ("className" in tapeData && typeof tapeData.className == "string") {
        tapeDiv.className += ' ' + tapeData.className;
    }

    this._eventLayer.appendChild(tapeDiv);
    
    return {
        left:   startPixel,
        top:    top,
        width:  width,
        height: height,
        elmt:   tapeDiv
    };
}

Timeline.CompactEventPainter.prototype._createHighlightDiv = function(highlightIndex, dimensions, theme) {
    if (highlightIndex >= 0) {
        var doc = this._timeline.getDocument();
        var eventTheme = theme.event;
        
        var color = eventTheme.highlightColors[Math.min(highlightIndex, eventTheme.highlightColors.length - 1)];
        
        var div = doc.createElement("div");
        div.style.position = "absolute";
        div.style.overflow = "hidden";
        div.style.left =    (dimensions.left - 2) + "px";
        div.style.width =   (dimensions.width + 4) + "px";
        div.style.top =     (dimensions.top - 2) + "px";
        div.style.height =  (dimensions.height + 4) + "px";
//        div.style.background = color;
        
        this._highlightLayer.appendChild(div);
    }
};

Timeline.CompactEventPainter.prototype._onClickMultiplePreciseInstantEvent = function(icon, domEvt, events) {
    var c = SimileAjax.DOM.getPageCoordinates(icon);
    this._showBubble(
        c.left + Math.ceil(icon.offsetWidth / 2), 
        c.top + Math.ceil(icon.offsetHeight / 2),
        events
    );
    
    var ids = [];
    for (var i = 0; i < events.length; i++) {
        ids.push(events[i].getID());
    }
    this._fireOnSelect(ids);
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    
    return false;
};

Timeline.CompactEventPainter.prototype._onClickInstantEvent = function(icon, domEvt, evt) {
    var c = SimileAjax.DOM.getPageCoordinates(icon);
    this._showBubble(
        c.left + Math.ceil(icon.offsetWidth / 2), 
        c.top + Math.ceil(icon.offsetHeight / 2),
        [evt]
    );
    this._fireOnSelect([evt.getID()]);
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.CompactEventPainter.prototype._onClickDurationEvent = function(target, domEvt, evt) {
    if ("pageX" in domEvt) {
        var x = domEvt.pageX;
        var y = domEvt.pageY;
    } else {
        var c = SimileAjax.DOM.getPageCoordinates(target);
        var x = domEvt.offsetX + c.left;
        var y = domEvt.offsetY + c.top;
    }
    this._showBubble(x, y, [evt]);
    this._fireOnSelect([evt.getID()]);
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.CompactEventPainter.prototype.showBubble = function(evt) {
    var elmt = this._eventIdToElmt[evt.getID()];
    if (elmt) {
        var c = SimileAjax.DOM.getPageCoordinates(elmt);
        this._showBubble(c.left + elmt.offsetWidth / 2, c.top + elmt.offsetHeight / 2, [evt]);
    }
};

Timeline.CompactEventPainter.prototype._showBubble = function(x, y, evts) {
    var div = document.createElement("div");
    
    evts = ("fillInfoBubble" in evts) ? [evts] : evts;
    for (var i = 0; i < evts.length; i++) {
        var div2 = document.createElement("div");
        div.appendChild(div2);
        
        evts[i].fillInfoBubble(div2, this._params.theme, this._band.getLabeller());
    }
    
    SimileAjax.WindowManager.cancelPopups();
    SimileAjax.Graphics.createBubbleForContentAndPoint(div, x, y, this._params.theme.event.bubble.width);
};

Timeline.CompactEventPainter.prototype._fireOnSelect = function(eventIDs) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        this._onSelectListeners[i](eventIDs);
    }
};

/*==================================================
 *  Span Highlight Decorator
 *==================================================
 */

Timeline.SpanHighlightDecorator = function(params) {
    // When evaluating params, test against null. Not "p in params". Testing against
    // null enables caller to explicitly request the default. Testing against "in" means
    // that the param has to be ommitted to get the default.
    this._unit = params.unit != null ? params.unit : SimileAjax.NativeDateUnit;
    this._startDate = (typeof params.startDate == "string") ? 
        this._unit.parseFromObject(params.startDate) : params.startDate;
    this._endDate = (typeof params.endDate == "string") ?
        this._unit.parseFromObject(params.endDate) : params.endDate;
    this._startLabel = params.startLabel != null ? params.startLabel : ""; // not null!
    this._endLabel   = params.endLabel   != null ? params.endLabel   : ""; // not null!
    this._color = params.color;
    this._cssClass = params.cssClass != null ? params.cssClass : null;
    this._opacity = params.opacity != null ? params.opacity : 100;
         // Default z is 10, behind everything but background grid.
         // If inFront, then place just behind events, in front of everything else
    this._zIndex = (params.inFront != null && params.inFront) ? 113 : 10;
};

Timeline.SpanHighlightDecorator.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._layerDiv = null;
};

Timeline.SpanHighlightDecorator.prototype.paint = function() {
    if (this._layerDiv != null) {
        this._band.removeLayerDiv(this._layerDiv);
    }
    this._layerDiv = this._band.createLayerDiv(this._zIndex);
    this._layerDiv.setAttribute("name", "span-highlight-decorator"); // for debugging
    this._layerDiv.style.display = "none";
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    if (this._unit.compare(this._startDate, maxDate) < 0 &&
        this._unit.compare(this._endDate, minDate) > 0) {
        
        minDate = this._unit.later(minDate, this._startDate);
        maxDate = this._unit.earlier(maxDate, this._endDate);
        
        var minPixel = this._band.dateToPixelOffset(minDate);
        var maxPixel = this._band.dateToPixelOffset(maxDate);
        
        var doc = this._timeline.getDocument();
        
        var createTable = function() {
            var table = doc.createElement("table");
            table.insertRow(0).insertCell(0);
            return table;
        };
    
        var div = doc.createElement("div");
        div.className='timeline-highlight-decorator'
        if(this._cssClass) {
        	  div.className += ' ' + this._cssClass;
        }
        if(this._color != null) {
        	  div.style.backgroundColor = this._color;
        }                      
        if (this._opacity < 100) {
            SimileAjax.Graphics.setOpacity(div, this._opacity);
        }
        this._layerDiv.appendChild(div);
            
        var tableStartLabel = createTable();
        tableStartLabel.className = 'timeline-highlight-label timeline-highlight-label-start'
        var tdStart =  tableStartLabel.rows[0].cells[0]
        tdStart.innerHTML = this._startLabel;
        if (this._cssClass) {
        	  tdStart.className = 'label_' + this._cssClass;
        }
        this._layerDiv.appendChild(tableStartLabel);
                    
        var tableEndLabel = createTable();
        tableEndLabel.className = 'timeline-highlight-label timeline-highlight-label-end'
        var tdEnd = tableEndLabel.rows[0].cells[0]
        tdEnd.innerHTML = this._endLabel;
        if (this._cssClass) {
        	   tdEnd.className = 'label_' + this._cssClass;
        }
        this._layerDiv.appendChild(tableEndLabel);
        
        if (this._timeline.isHorizontal()){
            div.style.left = minPixel + "px";
            div.style.width = (maxPixel - minPixel) + "px";
                              
            tableStartLabel.style.right = (this._band.getTotalViewLength() - minPixel) + "px";
            tableStartLabel.style.width = (this._startLabel.length) + "em";       
                                          
            tableEndLabel.style.left = maxPixel + "px";
            tableEndLabel.style.width = (this._endLabel.length) + "em";
            
        } else {
            div.style.top = minPixel + "px";
            div.style.height = (maxPixel - minPixel) + "px";
            
            tableStartLabel.style.bottom = minPixel + "px";
            tableStartLabel.style.height = "1.5px";
            
            tableEndLabel.style.top = maxPixel + "px";
            tableEndLabel.style.height = "1.5px";        
        }
    }
    this._layerDiv.style.display = "block";
};

Timeline.SpanHighlightDecorator.prototype.softPaint = function() {
};

/*==================================================
 *  Point Highlight Decorator
 *==================================================
 */

Timeline.PointHighlightDecorator = function(params) {
    this._unit = params.unit != null ? params.unit : SimileAjax.NativeDateUnit;
    this._date = (typeof params.date == "string") ? 
        this._unit.parseFromObject(params.date) : params.date;
    this._width = params.width != null ? params.width : 10;
      // Since the width is used to calculate placements (see minPixel, below), we
      // specify width here, not in css.
    this._color = params.color;
    this._cssClass = params.cssClass != null ? params.cssClass : '';
    this._opacity = params.opacity != null ? params.opacity : 100;
};

Timeline.PointHighlightDecorator.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;    
    this._layerDiv = null;
};

Timeline.PointHighlightDecorator.prototype.paint = function() {
    if (this._layerDiv != null) {
        this._band.removeLayerDiv(this._layerDiv);
    }
    this._layerDiv = this._band.createLayerDiv(10);
    this._layerDiv.setAttribute("name", "span-highlight-decorator"); // for debugging
    this._layerDiv.style.display = "none";
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    if (this._unit.compare(this._date, maxDate) < 0 &&
        this._unit.compare(this._date, minDate) > 0) {
        
        var pixel = this._band.dateToPixelOffset(this._date);
        var minPixel = pixel - Math.round(this._width / 2);
        
        var doc = this._timeline.getDocument();
    
        var div = doc.createElement("div");
        div.className='timeline-highlight-point-decorator';
        div.className += ' ' + this._cssClass;
                    
        if(this._color != null) {
        	  div.style.backgroundColor = this._color;
        }
        if (this._opacity < 100) {
            SimileAjax.Graphics.setOpacity(div, this._opacity);
        }
        this._layerDiv.appendChild(div);
            
        if (this._timeline.isHorizontal()) {
            div.style.left = minPixel + "px";
            div.style.width = this._width;
        } else {
            div.style.top = minPixel + "px";
            div.style.height = this._width;
        }
    }
    this._layerDiv.style.display = "block";
};

Timeline.PointHighlightDecorator.prototype.softPaint = function() {
};

/*==================================================
 *  Detailed Event Painter
 *==================================================
 */

// Note: a number of features from original-painter 
//       are not yet implemented in detailed painter.
//       Eg classname, id attributes for icons, labels, tapes

Timeline.DetailedEventPainter = function(params) {
    this._params = params;
    this._onSelectListeners = [];
    
    this._filterMatcher = null;
    this._highlightMatcher = null;
    this._frc = null;
    
    this._eventIdToElmt = {};
};

Timeline.DetailedEventPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backLayer = null;
    this._eventLayer = null;
    this._lineLayer = null;
    this._highlightLayer = null;
    
    this._eventIdToElmt = null;
};

Timeline.DetailedEventPainter.prototype.getType = function() {
    return 'detailed';
};

Timeline.DetailedEventPainter.prototype.addOnSelectListener = function(listener) {
    this._onSelectListeners.push(listener);
};

Timeline.DetailedEventPainter.prototype.removeOnSelectListener = function(listener) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        if (this._onSelectListeners[i] == listener) {
            this._onSelectListeners.splice(i, 1);
            break;
        }
    }
};

Timeline.DetailedEventPainter.prototype.getFilterMatcher = function() {
    return this._filterMatcher;
};

Timeline.DetailedEventPainter.prototype.setFilterMatcher = function(filterMatcher) {
    this._filterMatcher = filterMatcher;
};

Timeline.DetailedEventPainter.prototype.getHighlightMatcher = function() {
    return this._highlightMatcher;
};

Timeline.DetailedEventPainter.prototype.setHighlightMatcher = function(highlightMatcher) {
    this._highlightMatcher = highlightMatcher;
};

Timeline.DetailedEventPainter.prototype.paint = function() {
    var eventSource = this._band.getEventSource();
    if (eventSource == null) {
        return;
    }
    
    this._eventIdToElmt = {};
    this._prepareForPainting();
    
    var eventTheme = this._params.theme.event;
    var trackHeight = Math.max(eventTheme.track.height, this._frc.getLineHeight());
    var metrics = {
        trackOffset:    Math.round(this._band.getViewWidth() / 2 - trackHeight / 2),
        trackHeight:    trackHeight,
        trackGap:       eventTheme.track.gap,
        trackIncrement: trackHeight + eventTheme.track.gap,
        icon:           eventTheme.instant.icon,
        iconWidth:      eventTheme.instant.iconWidth,
        iconHeight:     eventTheme.instant.iconHeight,
        labelWidth:     eventTheme.label.width
    }
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var filterMatcher = (this._filterMatcher != null) ? 
        this._filterMatcher :
        function(evt) { return true; };
    var highlightMatcher = (this._highlightMatcher != null) ? 
        this._highlightMatcher :
        function(evt) { return -1; };
    
    var iterator = eventSource.getEventReverseIterator(minDate, maxDate);
    while (iterator.hasNext()) {
        var evt = iterator.next();
        if (filterMatcher(evt)) {
            this.paintEvent(evt, metrics, this._params.theme, highlightMatcher(evt));
        }
    }
    
    this._highlightLayer.style.display = "block";
    this._lineLayer.style.display = "block";
    this._eventLayer.style.display = "block";
    // update the band object for max number of tracks in this section of the ether
    this._band.updateEventTrackInfo(this._lowerTracks.length + this._upperTracks.length,
                                 metrics.trackIncrement); 
};

Timeline.DetailedEventPainter.prototype.softPaint = function() {
};

Timeline.DetailedEventPainter.prototype._prepareForPainting = function() {
    var band = this._band;
        
    if (this._backLayer == null) {
        this._backLayer = this._band.createLayerDiv(0, "timeline-band-events");
        this._backLayer.style.visibility = "hidden";
        
        var eventLabelPrototype = document.createElement("span");
        eventLabelPrototype.className = "timeline-event-label";
        this._backLayer.appendChild(eventLabelPrototype);
        this._frc = SimileAjax.Graphics.getFontRenderingContext(eventLabelPrototype);
    }
    this._frc.update();
    this._lowerTracks = [];
    this._upperTracks = [];
    
    if (this._highlightLayer != null) {
        band.removeLayerDiv(this._highlightLayer);
    }
    this._highlightLayer = band.createLayerDiv(105, "timeline-band-highlights");
    this._highlightLayer.style.display = "none";
    
    if (this._lineLayer != null) {
        band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = band.createLayerDiv(110, "timeline-band-lines");
    this._lineLayer.style.display = "none";
    
    if (this._eventLayer != null) {
        band.removeLayerDiv(this._eventLayer);
    }
    this._eventLayer = band.createLayerDiv(110, "timeline-band-events");
    this._eventLayer.style.display = "none";
};

Timeline.DetailedEventPainter.prototype.paintEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isInstant()) {
        this.paintInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintDurationEvent(evt, metrics, theme, highlightIndex);
    }
};
    
Timeline.DetailedEventPainter.prototype.paintInstantEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseInstantEvent(evt, metrics, theme, highlightIndex);
    }
}

Timeline.DetailedEventPainter.prototype.paintDurationEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseDurationEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseDurationEvent(evt, metrics, theme, highlightIndex);
    }
}
    
Timeline.DetailedEventPainter.prototype.paintPreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var iconRightEdge = Math.round(startPixel + metrics.iconWidth / 2);
    var iconLeftEdge = Math.round(startPixel - metrics.iconWidth / 2);
    
    var labelSize = this._frc.computeSize(text);
    var iconTrack = this._findFreeTrackForSolid(iconRightEdge, startPixel);
    var iconElmtData = this._paintEventIcon(evt, iconTrack, iconLeftEdge, metrics, theme);
    
    var labelLeft = iconRightEdge + theme.event.label.offsetFromLine;
    var labelTrack = iconTrack;
    
    var iconTrackData = this._getTrackData(iconTrack);
    if (Math.min(iconTrackData.solid, iconTrackData.text) >= labelLeft + labelSize.width) { // label on the same track, to the right of icon
        iconTrackData.solid = iconLeftEdge;
        iconTrackData.text = labelLeft;
    } else { // label on a different track, below icon
        iconTrackData.solid = iconLeftEdge;
        
        labelLeft = startPixel + theme.event.label.offsetFromLine;
        labelTrack = this._findFreeTrackForText(iconTrack, labelLeft + labelSize.width, function(t) { t.line = startPixel - 2; });
        this._getTrackData(labelTrack).text = iconLeftEdge;
        
        this._paintEventLine(evt, startPixel, iconTrack, labelTrack, metrics, theme);
    }
    
    var labelTop = Math.round(
        metrics.trackOffset + labelTrack * metrics.trackIncrement + 
        metrics.trackHeight / 2 - labelSize.height / 2);
        
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width, labelSize.height, theme);

    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickInstantEvent(iconElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    this._createHighlightDiv(highlightIndex, iconElmtData, theme);
    
    this._eventIdToElmt[evt.getID()] = iconElmtData.elmt;
};

Timeline.DetailedEventPainter.prototype.paintImpreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var endDate = evt.getEnd();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    
    var iconRightEdge = Math.round(startPixel + metrics.iconWidth / 2);
    var iconLeftEdge = Math.round(startPixel - metrics.iconWidth / 2);
    
    var labelSize = this._frc.computeSize(text);
    var iconTrack = this._findFreeTrackForSolid(endPixel, startPixel);
    
    var tapeElmtData = this._paintEventTape(evt, iconTrack, startPixel, endPixel, 
        theme.event.instant.impreciseColor, theme.event.instant.impreciseOpacity, metrics, theme);
    var iconElmtData = this._paintEventIcon(evt, iconTrack, iconLeftEdge, metrics, theme);
    
    var iconTrackData = this._getTrackData(iconTrack);
    iconTrackData.solid = iconLeftEdge;
    
    var labelLeft = iconRightEdge + theme.event.label.offsetFromLine;
    var labelRight = labelLeft + labelSize.width;
    var labelTrack;
    if (labelRight < endPixel) {
        labelTrack = iconTrack;
    } else {
        labelLeft = startPixel + theme.event.label.offsetFromLine;
        labelRight = labelLeft + labelSize.width;
    
        labelTrack = this._findFreeTrackForText(iconTrack, labelRight, function(t) { t.line = startPixel - 2; });
        this._getTrackData(labelTrack).text = iconLeftEdge;
        
        this._paintEventLine(evt, startPixel, iconTrack, labelTrack, metrics, theme);
    }
    var labelTop = Math.round(
        metrics.trackOffset + labelTrack * metrics.trackIncrement + 
        metrics.trackHeight / 2 - labelSize.height / 2);
        
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width, labelSize.height, theme);
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickInstantEvent(iconElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    this._createHighlightDiv(highlightIndex, iconElmtData, theme);
    
    this._eventIdToElmt[evt.getID()] = iconElmtData.elmt;
};

Timeline.DetailedEventPainter.prototype.paintPreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var endDate = evt.getEnd();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    
    var labelSize = this._frc.computeSize(text);
    var tapeTrack = this._findFreeTrackForSolid(endPixel);
    var color = evt.getColor();
    color = color != null ? color : theme.event.duration.color;
    
    var tapeElmtData = this._paintEventTape(evt, tapeTrack, startPixel, endPixel, color, 100, metrics, theme);
    
    var tapeTrackData = this._getTrackData(tapeTrack);
    tapeTrackData.solid = startPixel;
    
    var labelLeft = startPixel + theme.event.label.offsetFromLine;
    var labelTrack = this._findFreeTrackForText(tapeTrack, labelLeft + labelSize.width, function(t) { t.line = startPixel - 2; });
    this._getTrackData(labelTrack).text = startPixel - 2;
    
    this._paintEventLine(evt, startPixel, tapeTrack, labelTrack, metrics, theme);
    
    var labelTop = Math.round(
        metrics.trackOffset + labelTrack * metrics.trackIncrement + 
        metrics.trackHeight / 2 - labelSize.height / 2);
        
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width, labelSize.height, theme);

    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickDurationEvent(tapeElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    this._createHighlightDiv(highlightIndex, tapeElmtData, theme);
    
    this._eventIdToElmt[evt.getID()] = tapeElmtData.elmt;
};

Timeline.DetailedEventPainter.prototype.paintImpreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var latestStartDate = evt.getLatestStart();
    var endDate = evt.getEnd();
    var earliestEndDate = evt.getEarliestEnd();
    
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var latestStartPixel = Math.round(this._band.dateToPixelOffset(latestStartDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    var earliestEndPixel = Math.round(this._band.dateToPixelOffset(earliestEndDate));
    
    var labelSize = this._frc.computeSize(text);
    var tapeTrack = this._findFreeTrackForSolid(endPixel);
    var color = evt.getColor();
    color = color != null ? color : theme.event.duration.color;
    
    var impreciseTapeElmtData = this._paintEventTape(evt, tapeTrack, startPixel, endPixel, 
        theme.event.duration.impreciseColor, theme.event.duration.impreciseOpacity, metrics, theme);
    var tapeElmtData = this._paintEventTape(evt, tapeTrack, latestStartPixel, earliestEndPixel, color, 100, metrics, theme);
    
    var tapeTrackData = this._getTrackData(tapeTrack);
    tapeTrackData.solid = startPixel;
    
    var labelLeft = latestStartPixel + theme.event.label.offsetFromLine;
    var labelTrack = this._findFreeTrackForText(tapeTrack, labelLeft + labelSize.width, function(t) { t.line = latestStartPixel - 2; });
    this._getTrackData(labelTrack).text = latestStartPixel - 2;
    
    this._paintEventLine(evt, latestStartPixel, tapeTrack, labelTrack, metrics, theme);
    
    var labelTop = Math.round(
        metrics.trackOffset + labelTrack * metrics.trackIncrement + 
        metrics.trackHeight / 2 - labelSize.height / 2);
        
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width, labelSize.height, theme);
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickDurationEvent(tapeElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    this._createHighlightDiv(highlightIndex, tapeElmtData, theme);
    
    this._eventIdToElmt[evt.getID()] = tapeElmtData.elmt;
};

Timeline.DetailedEventPainter.prototype._findFreeTrackForSolid = function(solidEdge, softEdge) {
    for (var i = 0; true; i++) {
        if (i < this._lowerTracks.length) {
            var t = this._lowerTracks[i];
            if (Math.min(t.solid, t.text) > solidEdge && (!(softEdge) || t.line > softEdge)) {
                return i;
            }
        } else {
            this._lowerTracks.push({
                solid:  Number.POSITIVE_INFINITY,
                text:   Number.POSITIVE_INFINITY,
                line:   Number.POSITIVE_INFINITY
            });
            
            return i;
        }
        
        if (i < this._upperTracks.length) {
            var t = this._upperTracks[i];
            if (Math.min(t.solid, t.text) > solidEdge && (!(softEdge) || t.line > softEdge)) {
                return -1 - i;
            }
        } else {
            this._upperTracks.push({
                solid:  Number.POSITIVE_INFINITY,
                text:   Number.POSITIVE_INFINITY,
                line:   Number.POSITIVE_INFINITY
            });
            
            return -1 - i;
        }
    }
};

Timeline.DetailedEventPainter.prototype._findFreeTrackForText = function(fromTrack, edge, occupiedTrackVisitor) {
    var extendUp;
    var index;
    var firstIndex;
    var result;
    
    if (fromTrack < 0) {
        extendUp = true;
        firstIndex = -fromTrack;
        
        index = this._findFreeUpperTrackForText(firstIndex, edge);
        result = -1 - index;
    } else if (fromTrack > 0) {
        extendUp = false;
        firstIndex = fromTrack + 1;
        
        index = this._findFreeLowerTrackForText(firstIndex, edge);
        result = index;
    } else {
        var upIndex = this._findFreeUpperTrackForText(0, edge);
        var downIndex = this._findFreeLowerTrackForText(1, edge);
        
        if (downIndex - 1 <= upIndex) {
            extendUp = false;
            firstIndex = 1;
            index = downIndex;
            result = index;
        } else {
            extendUp = true;
            firstIndex = 0;
            index = upIndex;
            result = -1 - index;
        }
    }
    
    if (extendUp) {
        if (index == this._upperTracks.length) {
            this._upperTracks.push({
                solid:  Number.POSITIVE_INFINITY,
                text:   Number.POSITIVE_INFINITY,
                line:   Number.POSITIVE_INFINITY
            });
        }
        for (var i = firstIndex; i < index; i++) {
            occupiedTrackVisitor(this._upperTracks[i]);
        }
    } else {
        if (index == this._lowerTracks.length) {
            this._lowerTracks.push({
                solid:  Number.POSITIVE_INFINITY,
                text:   Number.POSITIVE_INFINITY,
                line:   Number.POSITIVE_INFINITY
            });
        }
        for (var i = firstIndex; i < index; i++) {
            occupiedTrackVisitor(this._lowerTracks[i]);
        }
    }
    return result;
};

Timeline.DetailedEventPainter.prototype._findFreeLowerTrackForText = function(index, edge) {
    for (; index < this._lowerTracks.length; index++) {
        var t = this._lowerTracks[index];
        if (Math.min(t.solid, t.text) >= edge) {
            break;
        }
    }
    return index;
};

Timeline.DetailedEventPainter.prototype._findFreeUpperTrackForText = function(index, edge) {
    for (; index < this._upperTracks.length; index++) {
        var t = this._upperTracks[index];
        if (Math.min(t.solid, t.text) >= edge) {
            break;
        }
    }
    return index;
};

Timeline.DetailedEventPainter.prototype._getTrackData = function(index) {
    return (index < 0) ? this._upperTracks[-index - 1] : this._lowerTracks[index];
};

Timeline.DetailedEventPainter.prototype._paintEventLine = function(evt, left, startTrack, endTrack, metrics, theme) {
    var top = Math.round(metrics.trackOffset + startTrack * metrics.trackIncrement + metrics.trackHeight / 2);
    var height = Math.round(Math.abs(endTrack - startTrack) * metrics.trackIncrement);
    
    var lineStyle = "1px solid " + theme.event.label.lineColor;
    var lineDiv = this._timeline.getDocument().createElement("div");
	lineDiv.style.position = "absolute";
    lineDiv.style.left = left + "px";
    lineDiv.style.width = theme.event.label.offsetFromLine + "px";
    lineDiv.style.height = height + "px";
    if (startTrack > endTrack) {
        lineDiv.style.top = (top - height) + "px";
        lineDiv.style.borderTop = lineStyle;
    } else {
        lineDiv.style.top = top + "px";
        lineDiv.style.borderBottom = lineStyle;
    }
    lineDiv.style.borderLeft = lineStyle;
    this._lineLayer.appendChild(lineDiv);
};

Timeline.DetailedEventPainter.prototype._paintEventIcon = function(evt, iconTrack, left, metrics, theme) {
    var icon = evt.getIcon();
    icon = icon != null ? icon : metrics.icon;
    
    var middle = metrics.trackOffset + iconTrack * metrics.trackIncrement + metrics.trackHeight / 2;
    var top = Math.round(middle - metrics.iconHeight / 2);

    var img = SimileAjax.Graphics.createTranslucentImage(icon);
    var iconDiv = this._timeline.getDocument().createElement("div");
    iconDiv.style.position = "absolute";
    iconDiv.style.left = left + "px";
    iconDiv.style.top = top + "px";
    iconDiv.appendChild(img);
    iconDiv.style.cursor = "pointer";

    if(evt._title != null)
        iconDiv.title = evt._title

    this._eventLayer.appendChild(iconDiv);
    
    return {
        left:   left,
        top:    top,
        width:  metrics.iconWidth,
        height: metrics.iconHeight,
        elmt:   iconDiv
    };
};

Timeline.DetailedEventPainter.prototype._paintEventLabel = function(evt, text, left, top, width, height, theme) {
    var doc = this._timeline.getDocument();
    
    var labelBackgroundDiv = doc.createElement("div");
    labelBackgroundDiv.style.position = "absolute";
    labelBackgroundDiv.style.left = left + "px";
    labelBackgroundDiv.style.width = width + "px";
    labelBackgroundDiv.style.top = top + "px";
    labelBackgroundDiv.style.height = height + "px";
    labelBackgroundDiv.style.backgroundColor = theme.event.label.backgroundColor;
    SimileAjax.Graphics.setOpacity(labelBackgroundDiv, theme.event.label.backgroundOpacity);
    this._eventLayer.appendChild(labelBackgroundDiv);
    
    var labelDiv = doc.createElement("div");
    labelDiv.style.position = "absolute";
    labelDiv.style.left = left + "px";
    labelDiv.style.width = width + "px";
    labelDiv.style.top = top + "px";
    labelDiv.innerHTML = text;
    labelDiv.style.cursor = "pointer";

    if(evt._title != null)
        labelDiv.title = evt._title;
    
    var color = evt.getTextColor();
    if (color == null) {
        color = evt.getColor();
    }
    if (color != null) {
        labelDiv.style.color = color;
    }
    
    this._eventLayer.appendChild(labelDiv);
    
    return {
        left:   left,
        top:    top,
        width:  width,
        height: height,
        elmt:   labelDiv
    };
};

Timeline.DetailedEventPainter.prototype._paintEventTape = function(
    evt, iconTrack, startPixel, endPixel, color, opacity, metrics, theme) {
    
    var tapeWidth = endPixel - startPixel;
    var tapeHeight = theme.event.tape.height;
    var middle = metrics.trackOffset + iconTrack * metrics.trackIncrement + metrics.trackHeight / 2;
    var top = Math.round(middle - tapeHeight / 2);
    
    var tapeDiv = this._timeline.getDocument().createElement("div");
    tapeDiv.style.position = "absolute";
    tapeDiv.style.left = startPixel + "px";
    tapeDiv.style.width = tapeWidth + "px";
    tapeDiv.style.top = top + "px";
    tapeDiv.style.height = tapeHeight + "px";
    tapeDiv.style.backgroundColor = color;
    tapeDiv.style.overflow = "hidden";
    tapeDiv.style.cursor = "pointer";

    if(evt._title != null)
        tapeDiv.title = evt._title;

    SimileAjax.Graphics.setOpacity(tapeDiv, opacity);
    
    this._eventLayer.appendChild(tapeDiv);
    
    return {
        left:   startPixel,
        top:    top,
        width:  tapeWidth,
        height: tapeHeight,
        elmt:   tapeDiv
    };
}

Timeline.DetailedEventPainter.prototype._createHighlightDiv = function(highlightIndex, dimensions, theme) {
    if (highlightIndex >= 0) {
        var doc = this._timeline.getDocument();
        var eventTheme = theme.event;
        
        var color = eventTheme.highlightColors[Math.min(highlightIndex, eventTheme.highlightColors.length - 1)];
        
        var div = doc.createElement("div");
        div.style.position = "absolute";
        div.style.overflow = "hidden";
        div.style.left =    (dimensions.left - 2) + "px";
        div.style.width =   (dimensions.width + 4) + "px";
        div.style.top =     (dimensions.top - 2) + "px";
        div.style.height =  (dimensions.height + 4) + "px";
        div.style.background = color;
        
        this._highlightLayer.appendChild(div);
    }
};

Timeline.DetailedEventPainter.prototype._onClickInstantEvent = function(icon, domEvt, evt) {
    var c = SimileAjax.DOM.getPageCoordinates(icon);
    this._showBubble(
        c.left + Math.ceil(icon.offsetWidth / 2), 
        c.top + Math.ceil(icon.offsetHeight / 2),
        evt
    );
    this._fireOnSelect(evt.getID());
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.DetailedEventPainter.prototype._onClickDurationEvent = function(target, domEvt, evt) {
    if ("pageX" in domEvt) {
        var x = domEvt.pageX;
        var y = domEvt.pageY;
    } else {
        var c = SimileAjax.DOM.getPageCoordinates(target);
        var x = domEvt.offsetX + c.left;
        var y = domEvt.offsetY + c.top;
    }
    this._showBubble(x, y, evt);
    this._fireOnSelect(evt.getID());
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.DetailedEventPainter.prototype.showBubble = function(evt) {
    var elmt = this._eventIdToElmt[evt.getID()];
    if (elmt) {
        var c = SimileAjax.DOM.getPageCoordinates(elmt);
        this._showBubble(c.left + elmt.offsetWidth / 2, c.top + elmt.offsetHeight / 2, evt);
    }
};

Timeline.DetailedEventPainter.prototype._showBubble = function(x, y, evt) {
    var div = document.createElement("div");
    var themeBubble = this._params.theme.event.bubble;
    evt.fillInfoBubble(div, this._params.theme, this._band.getLabeller());
    
    SimileAjax.WindowManager.cancelPopups();
    SimileAjax.Graphics.createBubbleForContentAndPoint(div, x, y, 
       themeBubble.width, null, themeBubble.maxHeight);
};

Timeline.DetailedEventPainter.prototype._fireOnSelect = function(eventID) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        this._onSelectListeners[i](eventID);
    }
};

/*==================================================
 *  Gregorian Ether Painter
 *==================================================
 */
 
Timeline.GregorianEtherPainter = function(params) {
    this._params = params;
    this._theme = params.theme;
    this._unit = params.unit;
    this._multiple = ("multiple" in params) ? params.multiple : 1;
};

Timeline.GregorianEtherPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backgroundLayer = band.createLayerDiv(0);
    this._backgroundLayer.setAttribute("name", "ether-background"); // for debugging
    this._backgroundLayer.className = 'timeline-ether-bg';
  //  this._backgroundLayer.style.background = this._theme.ether.backgroundColors[band.getIndex()];

    
    this._markerLayer = null;
    this._lineLayer = null;
    
    var align = ("align" in this._params && this._params.align != undefined) ? this._params.align : 
        this._theme.ether.interval.marker[timeline.isHorizontal() ? "hAlign" : "vAlign"];
    var showLine = ("showLine" in this._params) ? this._params.showLine : 
        this._theme.ether.interval.line.show;
        
    this._intervalMarkerLayout = new Timeline.EtherIntervalMarkerLayout(
        this._timeline, this._band, this._theme, align, showLine);
        
    this._highlight = new Timeline.EtherHighlight(
        this._timeline, this._band, this._theme, this._backgroundLayer);
}

Timeline.GregorianEtherPainter.prototype.setHighlight = function(startDate, endDate) {
    this._highlight.position(startDate, endDate);
}

Timeline.GregorianEtherPainter.prototype.paint = function() {
    if (this._markerLayer) {
        this._band.removeLayerDiv(this._markerLayer);
    }
    this._markerLayer = this._band.createLayerDiv(100);
    this._markerLayer.setAttribute("name", "ether-markers"); // for debugging
    this._markerLayer.style.display = "none";
    
    if (this._lineLayer) {
        this._band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = this._band.createLayerDiv(1);
    this._lineLayer.setAttribute("name", "ether-lines"); // for debugging
    this._lineLayer.style.display = "none";
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var timeZone = this._band.getTimeZone();
    var labeller = this._band.getLabeller();
    
    SimileAjax.DateTime.roundDownToInterval(minDate, this._unit, timeZone, this._multiple, this._theme.firstDayOfWeek);
    
    var p = this;
    var incrementDate = function(date) {
        for (var i = 0; i < p._multiple; i++) {
            SimileAjax.DateTime.incrementByInterval(date, p._unit);
        }
    };
    
    while (minDate.getTime() < maxDate.getTime()) {
        this._intervalMarkerLayout.createIntervalMarker(
            minDate, labeller, this._unit, this._markerLayer, this._lineLayer);
            
        incrementDate(minDate);
    }
    this._markerLayer.style.display = "block";
    this._lineLayer.style.display = "block";
};

Timeline.GregorianEtherPainter.prototype.softPaint = function() {
};

Timeline.GregorianEtherPainter.prototype.zoom = function(netIntervalChange) {
  if (netIntervalChange != 0) {
    this._unit += netIntervalChange;
  }
};


/*==================================================
 *  Hot Zone Gregorian Ether Painter
 *==================================================
 */
 
Timeline.HotZoneGregorianEtherPainter = function(params) {
    this._params = params;
    this._theme = params.theme;
    
    this._zones = [{
        startTime:  Number.NEGATIVE_INFINITY,
        endTime:    Number.POSITIVE_INFINITY,
        unit:       params.unit,
        multiple:   1
    }];
    for (var i = 0; i < params.zones.length; i++) {
        var zone = params.zones[i];
        var zoneStart = SimileAjax.DateTime.parseGregorianDateTime(zone.start).getTime();
        var zoneEnd = SimileAjax.DateTime.parseGregorianDateTime(zone.end).getTime();
        
        for (var j = 0; j < this._zones.length && zoneEnd > zoneStart; j++) {
            var zone2 = this._zones[j];
            
            if (zoneStart < zone2.endTime) {
                if (zoneStart > zone2.startTime) {
                    this._zones.splice(j, 0, {
                        startTime:   zone2.startTime,
                        endTime:     zoneStart,
                        unit:        zone2.unit,
                        multiple:    zone2.multiple
                    });
                    j++;
                    
                    zone2.startTime = zoneStart;
                }
                
                if (zoneEnd < zone2.endTime) {
                    this._zones.splice(j, 0, {
                        startTime:  zoneStart,
                        endTime:    zoneEnd,
                        unit:       zone.unit,
                        multiple:   (zone.multiple) ? zone.multiple : 1
                    });
                    j++;
                    
                    zone2.startTime = zoneEnd;
                    zoneStart = zoneEnd;
                } else {
                    zone2.multiple = zone.multiple;
                    zone2.unit = zone.unit;
                    zoneStart = zone2.endTime;
                }
            } // else, try the next existing zone
        }
    }
};

Timeline.HotZoneGregorianEtherPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backgroundLayer = band.createLayerDiv(0);
    this._backgroundLayer.setAttribute("name", "ether-background"); // for debugging
    this._backgroundLayer.className ='timeline-ether-bg';
    //this._backgroundLayer.style.background = this._theme.ether.backgroundColors[band.getIndex()];
    
    this._markerLayer = null;
    this._lineLayer = null;
    
    var align = ("align" in this._params && this._params.align != undefined) ? this._params.align : 
        this._theme.ether.interval.marker[timeline.isHorizontal() ? "hAlign" : "vAlign"];
    var showLine = ("showLine" in this._params) ? this._params.showLine : 
        this._theme.ether.interval.line.show;
        
    this._intervalMarkerLayout = new Timeline.EtherIntervalMarkerLayout(
        this._timeline, this._band, this._theme, align, showLine);
        
    this._highlight = new Timeline.EtherHighlight(
        this._timeline, this._band, this._theme, this._backgroundLayer);
}

Timeline.HotZoneGregorianEtherPainter.prototype.setHighlight = function(startDate, endDate) {
    this._highlight.position(startDate, endDate);
}

Timeline.HotZoneGregorianEtherPainter.prototype.paint = function() {
    if (this._markerLayer) {
        this._band.removeLayerDiv(this._markerLayer);
    }
    this._markerLayer = this._band.createLayerDiv(100);
    this._markerLayer.setAttribute("name", "ether-markers"); // for debugging
    this._markerLayer.style.display = "none";
    
    if (this._lineLayer) {
        this._band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = this._band.createLayerDiv(1);
    this._lineLayer.setAttribute("name", "ether-lines"); // for debugging
    this._lineLayer.style.display = "none";
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var timeZone = this._band.getTimeZone();
    var labeller = this._band.getLabeller();
    
    var p = this;
    var incrementDate = function(date, zone) {
        for (var i = 0; i < zone.multiple; i++) {
            SimileAjax.DateTime.incrementByInterval(date, zone.unit);
        }
    };
    
    var zStart = 0;
    while (zStart < this._zones.length) {
        if (minDate.getTime() < this._zones[zStart].endTime) {
            break;
        }
        zStart++;
    }
    var zEnd = this._zones.length - 1;
    while (zEnd >= 0) {
        if (maxDate.getTime() > this._zones[zEnd].startTime) {
            break;
        }
        zEnd--;
    }
    
    for (var z = zStart; z <= zEnd; z++) {
        var zone = this._zones[z];
        
        var minDate2 = new Date(Math.max(minDate.getTime(), zone.startTime));
        var maxDate2 = new Date(Math.min(maxDate.getTime(), zone.endTime));
        
        SimileAjax.DateTime.roundDownToInterval(minDate2, zone.unit, timeZone, zone.multiple, this._theme.firstDayOfWeek);
        SimileAjax.DateTime.roundUpToInterval(maxDate2, zone.unit, timeZone, zone.multiple, this._theme.firstDayOfWeek);
        
        while (minDate2.getTime() < maxDate2.getTime()) {
            this._intervalMarkerLayout.createIntervalMarker(
                minDate2, labeller, zone.unit, this._markerLayer, this._lineLayer);
                
            incrementDate(minDate2, zone);
        }
    }
    this._markerLayer.style.display = "block";
    this._lineLayer.style.display = "block";
};

Timeline.HotZoneGregorianEtherPainter.prototype.softPaint = function() {
};

Timeline.HotZoneGregorianEtherPainter.prototype.zoom = function(netIntervalChange) {
  if (netIntervalChange != 0) {
    for (var i = 0; i < this._zones.length; ++i) {
      if (this._zones[i]) {
        this._zones[i].unit += netIntervalChange;
      }
    }
  }
};

/*==================================================
 *  Year Count Ether Painter
 *==================================================
 */
 
Timeline.YearCountEtherPainter = function(params) {
    this._params = params;
    this._theme = params.theme;
    this._startDate = SimileAjax.DateTime.parseGregorianDateTime(params.startDate);
    this._multiple = ("multiple" in params) ? params.multiple : 1;
};

Timeline.YearCountEtherPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backgroundLayer = band.createLayerDiv(0);
    this._backgroundLayer.setAttribute("name", "ether-background"); // for debugging
    this._backgroundLayer.className = 'timeline-ether-bg';
   // this._backgroundLayer.style.background = this._theme.ether.backgroundColors[band.getIndex()];
    
    this._markerLayer = null;
    this._lineLayer = null;
    
    var align = ("align" in this._params) ? this._params.align : 
        this._theme.ether.interval.marker[timeline.isHorizontal() ? "hAlign" : "vAlign"];
    var showLine = ("showLine" in this._params) ? this._params.showLine : 
        this._theme.ether.interval.line.show;
        
    this._intervalMarkerLayout = new Timeline.EtherIntervalMarkerLayout(
        this._timeline, this._band, this._theme, align, showLine);
        
    this._highlight = new Timeline.EtherHighlight(
        this._timeline, this._band, this._theme, this._backgroundLayer);
};

Timeline.YearCountEtherPainter.prototype.setHighlight = function(startDate, endDate) {
    this._highlight.position(startDate, endDate);
};

Timeline.YearCountEtherPainter.prototype.paint = function() {
    if (this._markerLayer) {
        this._band.removeLayerDiv(this._markerLayer);
    }
    this._markerLayer = this._band.createLayerDiv(100);
    this._markerLayer.setAttribute("name", "ether-markers"); // for debugging
    this._markerLayer.style.display = "none";
    
    if (this._lineLayer) {
        this._band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = this._band.createLayerDiv(1);
    this._lineLayer.setAttribute("name", "ether-lines"); // for debugging
    this._lineLayer.style.display = "none";
    
    var minDate = new Date(this._startDate.getTime());
    var maxDate = this._band.getMaxDate();
    var yearDiff = this._band.getMinDate().getUTCFullYear() - this._startDate.getUTCFullYear();
    minDate.setUTCFullYear(this._band.getMinDate().getUTCFullYear() - yearDiff % this._multiple);
    
    var p = this;
    var incrementDate = function(date) {
        for (var i = 0; i < p._multiple; i++) {
            SimileAjax.DateTime.incrementByInterval(date, SimileAjax.DateTime.YEAR);
        }
    };
    var labeller = {
        labelInterval: function(date, intervalUnit) {
            var diff = date.getUTCFullYear() - p._startDate.getUTCFullYear();
            return {
                text: diff,
                emphasized: diff == 0
            };
        }
    };
    
    while (minDate.getTime() < maxDate.getTime()) {
        this._intervalMarkerLayout.createIntervalMarker(
            minDate, labeller, SimileAjax.DateTime.YEAR, this._markerLayer, this._lineLayer);
            
        incrementDate(minDate);
    }
    this._markerLayer.style.display = "block";
    this._lineLayer.style.display = "block";
};

Timeline.YearCountEtherPainter.prototype.softPaint = function() {
};

/*==================================================
 *  Quarterly Ether Painter
 *==================================================
 */
 
Timeline.QuarterlyEtherPainter = function(params) {
    this._params = params;
    this._theme = params.theme;
    this._startDate = SimileAjax.DateTime.parseGregorianDateTime(params.startDate);
};

Timeline.QuarterlyEtherPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backgroundLayer = band.createLayerDiv(0);
    this._backgroundLayer.setAttribute("name", "ether-background"); // for debugging
    this._backgroundLayer.className = 'timeline-ether-bg';
 //   this._backgroundLayer.style.background = this._theme.ether.backgroundColors[band.getIndex()];
    
    this._markerLayer = null;
    this._lineLayer = null;
    
    var align = ("align" in this._params) ? this._params.align : 
        this._theme.ether.interval.marker[timeline.isHorizontal() ? "hAlign" : "vAlign"];
    var showLine = ("showLine" in this._params) ? this._params.showLine : 
        this._theme.ether.interval.line.show;
        
    this._intervalMarkerLayout = new Timeline.EtherIntervalMarkerLayout(
        this._timeline, this._band, this._theme, align, showLine);
        
    this._highlight = new Timeline.EtherHighlight(
        this._timeline, this._band, this._theme, this._backgroundLayer);
};

Timeline.QuarterlyEtherPainter.prototype.setHighlight = function(startDate, endDate) {
    this._highlight.position(startDate, endDate);
};

Timeline.QuarterlyEtherPainter.prototype.paint = function() {
    if (this._markerLayer) {
        this._band.removeLayerDiv(this._markerLayer);
    }
    this._markerLayer = this._band.createLayerDiv(100);
    this._markerLayer.setAttribute("name", "ether-markers"); // for debugging
    this._markerLayer.style.display = "none";
    
    if (this._lineLayer) {
        this._band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = this._band.createLayerDiv(1);
    this._lineLayer.setAttribute("name", "ether-lines"); // for debugging
    this._lineLayer.style.display = "none";
    
    var minDate = new Date(0);
    var maxDate = this._band.getMaxDate();
    
    minDate.setUTCFullYear(Math.max(this._startDate.getUTCFullYear(), this._band.getMinDate().getUTCFullYear()));
    minDate.setUTCMonth(this._startDate.getUTCMonth());
    
    var p = this;
    var incrementDate = function(date) {
        date.setUTCMonth(date.getUTCMonth() + 3);
    };
    var labeller = {
        labelInterval: function(date, intervalUnit) {
            var quarters = (4 + (date.getUTCMonth() - p._startDate.getUTCMonth()) / 3) % 4;
            if (quarters != 0) {
                return { text: "Q" + (quarters + 1), emphasized: false };
            } else {
                return { text: "Y" + (date.getUTCFullYear() - p._startDate.getUTCFullYear() + 1), emphasized: true };
            }
        }
    };
    
    while (minDate.getTime() < maxDate.getTime()) {
        this._intervalMarkerLayout.createIntervalMarker(
            minDate, labeller, SimileAjax.DateTime.YEAR, this._markerLayer, this._lineLayer);
            
        incrementDate(minDate);
    }
    this._markerLayer.style.display = "block";
    this._lineLayer.style.display = "block";
};

Timeline.QuarterlyEtherPainter.prototype.softPaint = function() {
};

/*==================================================
 *  Ether Interval Marker Layout
 *==================================================
 */
 
Timeline.EtherIntervalMarkerLayout = function(timeline, band, theme, align, showLine) {
    var horizontal = timeline.isHorizontal();
    if (horizontal) {
        if (align == "Top") {
            this.positionDiv = function(div, offset) {
                div.style.left = offset + "px";
                div.style.top = "0px";
            };
        } else {
            this.positionDiv = function(div, offset) {
                div.style.left = offset + "px";
                div.style.bottom = "0px";
            };
        }
    } else {
        if (align == "Left") {
            this.positionDiv = function(div, offset) {
                div.style.top = offset + "px";
                div.style.left = "0px";
            };
        } else {
            this.positionDiv = function(div, offset) {
                div.style.top = offset + "px";
                div.style.right = "0px";
            };
        }
    }
    
    var markerTheme = theme.ether.interval.marker;
    var lineTheme = theme.ether.interval.line;
    var weekendTheme = theme.ether.interval.weekend;
    
    var stylePrefix = (horizontal ? "h" : "v") + align;
    var labelStyler = markerTheme[stylePrefix + "Styler"];
    var emphasizedLabelStyler = markerTheme[stylePrefix + "EmphasizedStyler"];
    var day = SimileAjax.DateTime.gregorianUnitLengths[SimileAjax.DateTime.DAY];
    
    this.createIntervalMarker = function(date, labeller, unit, markerDiv, lineDiv) {
        var offset = Math.round(band.dateToPixelOffset(date));

        if (showLine && unit != SimileAjax.DateTime.WEEK) {
            var divLine = timeline.getDocument().createElement("div");
            divLine.className = "timeline-ether-lines";

            if (lineTheme.opacity < 100) {
                SimileAjax.Graphics.setOpacity(divLine, lineTheme.opacity);
            }
            
            if (horizontal) {
				//divLine.className += " timeline-ether-lines-vertical";
				divLine.style.left = offset + "px";
            } else {
				//divLine.className += " timeline-ether-lines-horizontal";
                divLine.style.top = offset + "px";
            }
            lineDiv.appendChild(divLine);
        }
        if (unit == SimileAjax.DateTime.WEEK) {
            var firstDayOfWeek = theme.firstDayOfWeek;
            
            var saturday = new Date(date.getTime() + (6 - firstDayOfWeek - 7) * day);
            var monday = new Date(saturday.getTime() + 2 * day);
            
            var saturdayPixel = Math.round(band.dateToPixelOffset(saturday));
            var mondayPixel = Math.round(band.dateToPixelOffset(monday));
            var length = Math.max(1, mondayPixel - saturdayPixel);
            
            var divWeekend = timeline.getDocument().createElement("div");            
			divWeekend.className = 'timeline-ether-weekends'

            if (weekendTheme.opacity < 100) {
                SimileAjax.Graphics.setOpacity(divWeekend, weekendTheme.opacity);
            }
            
            if (horizontal) {				
                divWeekend.style.left = saturdayPixel + "px";
                divWeekend.style.width = length + "px";                
            } else {				
                divWeekend.style.top = saturdayPixel + "px";
                divWeekend.style.height = length + "px";                
            }
            lineDiv.appendChild(divWeekend);
        }
        
        var label = labeller.labelInterval(date, unit);
        
        var div = timeline.getDocument().createElement("div");
        div.innerHTML = label.text;
        
        
        
		div.className = 'timeline-date-label'
		if(label.emphasized) div.className += ' timeline-date-label-em'
		
        this.positionDiv(div, offset);
        markerDiv.appendChild(div);
        
        return div;
    };
};

/*==================================================
 *  Ether Highlight Layout
 *==================================================
 */
 
Timeline.EtherHighlight = function(timeline, band, theme, backgroundLayer) {
    var horizontal = timeline.isHorizontal();
    
    this._highlightDiv = null;
    this._createHighlightDiv = function() {
        if (this._highlightDiv == null) {
            this._highlightDiv = timeline.getDocument().createElement("div");
            this._highlightDiv.setAttribute("name", "ether-highlight"); // for debugging
            this._highlightDiv.className = 'timeline-ether-highlight'            
            
            var opacity = theme.ether.highlightOpacity;
            if (opacity < 100) {
                SimileAjax.Graphics.setOpacity(this._highlightDiv, opacity);
            }
            
            backgroundLayer.appendChild(this._highlightDiv);
        }
    }
    
    this.position = function(startDate, endDate) {
        this._createHighlightDiv();
        
        var startPixel = Math.round(band.dateToPixelOffset(startDate));
        var endPixel = Math.round(band.dateToPixelOffset(endDate));
        var length = Math.max(endPixel - startPixel, 3);
        if (horizontal) {
            this._highlightDiv.style.left = startPixel + "px";
            this._highlightDiv.style.width = length + "px";           
            this._highlightDiv.style.height = (band.getViewWidth() - 4) + "px";
        } else {
            this._highlightDiv.style.top = startPixel + "px";
            this._highlightDiv.style.height = length + "px";
            this._highlightDiv.style.width = (band.getViewWidth() - 4) + "px";
        }
    }
};

/*==================================================
 *  An "ether" is a object that maps date/time to pixel coordinates.
 *==================================================
 */

/*==================================================
 *  Linear Ether
 *==================================================
 */
 
Timeline.LinearEther = function(params) {
    this._params = params;
    this._interval = params.interval;
    this._pixelsPerInterval = params.pixelsPerInterval;
};

Timeline.LinearEther.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    this._unit = timeline.getUnit();
    
    if ("startsOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.startsOn);
    } else if ("endsOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.endsOn);
        this.shiftPixels(-this._timeline.getPixelLength());
    } else if ("centersOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.centersOn);
        this.shiftPixels(-this._timeline.getPixelLength() / 2);
    } else {
        this._start = this._unit.makeDefaultValue();
        this.shiftPixels(-this._timeline.getPixelLength() / 2);
    }
};

Timeline.LinearEther.prototype.setDate = function(date) {
    this._start = this._unit.cloneValue(date);
};

Timeline.LinearEther.prototype.shiftPixels = function(pixels) {
    var numeric = this._interval * pixels / this._pixelsPerInterval;
    this._start = this._unit.change(this._start, numeric);
};

Timeline.LinearEther.prototype.dateToPixelOffset = function(date) {
    var numeric = this._unit.compare(date, this._start);
    return this._pixelsPerInterval * numeric / this._interval;
};

Timeline.LinearEther.prototype.pixelOffsetToDate = function(pixels) {
    var numeric = pixels * this._interval / this._pixelsPerInterval;
    return this._unit.change(this._start, numeric);
};

Timeline.LinearEther.prototype.zoom = function(zoomIn) {
  var netIntervalChange = 0;
  var currentZoomIndex = this._band._zoomIndex;
  var newZoomIndex = currentZoomIndex;

  if (zoomIn && (currentZoomIndex > 0)) {
    newZoomIndex = currentZoomIndex - 1;
  }
  
  if (!zoomIn && (currentZoomIndex < (this._band._zoomSteps.length - 1))) {
    newZoomIndex = currentZoomIndex + 1;
  }

  this._band._zoomIndex = newZoomIndex;  
  this._interval = 
    SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[newZoomIndex].unit];
  this._pixelsPerInterval = this._band._zoomSteps[newZoomIndex].pixelsPerInterval;
  netIntervalChange = this._band._zoomSteps[newZoomIndex].unit - 
    this._band._zoomSteps[currentZoomIndex].unit;

  return netIntervalChange;
};


/*==================================================
 *  Hot Zone Ether
 *==================================================
 */
 
Timeline.HotZoneEther = function(params) {
    this._params = params;
    this._interval = params.interval;
    this._pixelsPerInterval = params.pixelsPerInterval;
    this._theme = params.theme;
};

Timeline.HotZoneEther.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    this._unit = timeline.getUnit();
    
    this._zones = [{
        startTime:  Number.NEGATIVE_INFINITY,
        endTime:    Number.POSITIVE_INFINITY,
        magnify:    1
    }];
    var params = this._params;
    for (var i = 0; i < params.zones.length; i++) {
        var zone = params.zones[i];
        var zoneStart = this._unit.parseFromObject(zone.start);
        var zoneEnd =   this._unit.parseFromObject(zone.end);
        
        for (var j = 0; j < this._zones.length && this._unit.compare(zoneEnd, zoneStart) > 0; j++) {
            var zone2 = this._zones[j];
            
            if (this._unit.compare(zoneStart, zone2.endTime) < 0) {
                if (this._unit.compare(zoneStart, zone2.startTime) > 0) {
                    this._zones.splice(j, 0, {
                        startTime:   zone2.startTime,
                        endTime:     zoneStart,
                        magnify:     zone2.magnify
                    });
                    j++;
                    
                    zone2.startTime = zoneStart;
                }
                
                if (this._unit.compare(zoneEnd, zone2.endTime) < 0) {
                    this._zones.splice(j, 0, {
                        startTime:  zoneStart,
                        endTime:    zoneEnd,
                        magnify:    zone.magnify * zone2.magnify
                    });
                    j++;
                    
                    zone2.startTime = zoneEnd;
                    zoneStart = zoneEnd;
                } else {
                    zone2.magnify *= zone.magnify;
                    zoneStart = zone2.endTime;
                }
            } // else, try the next existing zone
        }
    }

    if ("startsOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.startsOn);
    } else if ("endsOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.endsOn);
        this.shiftPixels(-this._timeline.getPixelLength());
    } else if ("centersOn" in this._params) {
        this._start = this._unit.parseFromObject(this._params.centersOn);
        this.shiftPixels(-this._timeline.getPixelLength() / 2);
    } else {
        this._start = this._unit.makeDefaultValue();
        this.shiftPixels(-this._timeline.getPixelLength() / 2);
    }
};

Timeline.HotZoneEther.prototype.setDate = function(date) {
    this._start = this._unit.cloneValue(date);
};

Timeline.HotZoneEther.prototype.shiftPixels = function(pixels) {
    this._start = this.pixelOffsetToDate(pixels);
};

Timeline.HotZoneEther.prototype.dateToPixelOffset = function(date) {
    return this._dateDiffToPixelOffset(this._start, date);
};

Timeline.HotZoneEther.prototype.pixelOffsetToDate = function(pixels) {
    return this._pixelOffsetToDate(pixels, this._start);
};

Timeline.HotZoneEther.prototype.zoom = function(zoomIn) {
  var netIntervalChange = 0;
  var currentZoomIndex = this._band._zoomIndex;
  var newZoomIndex = currentZoomIndex;

  if (zoomIn && (currentZoomIndex > 0)) {
    newZoomIndex = currentZoomIndex - 1;
  }
  
  if (!zoomIn && (currentZoomIndex < (this._band._zoomSteps.length - 1))) {
    newZoomIndex = currentZoomIndex + 1;
  }

  this._band._zoomIndex = newZoomIndex;  
  this._interval = 
    SimileAjax.DateTime.gregorianUnitLengths[this._band._zoomSteps[newZoomIndex].unit];
  this._pixelsPerInterval = this._band._zoomSteps[newZoomIndex].pixelsPerInterval;
  netIntervalChange = this._band._zoomSteps[newZoomIndex].unit - 
    this._band._zoomSteps[currentZoomIndex].unit;

  return netIntervalChange;
};

Timeline.HotZoneEther.prototype._dateDiffToPixelOffset = function(fromDate, toDate) {
    var scale = this._getScale();
    var fromTime = fromDate;
    var toTime = toDate;
    
    var pixels = 0;
    if (this._unit.compare(fromTime, toTime) < 0) {
        var z = 0;
        while (z < this._zones.length) {
            if (this._unit.compare(fromTime, this._zones[z].endTime) < 0) {
                break;
            }
            z++;
        }
        
        while (this._unit.compare(fromTime, toTime) < 0) {
            var zone = this._zones[z];
            var toTime2 = this._unit.earlier(toTime, zone.endTime);
            
            pixels += (this._unit.compare(toTime2, fromTime) / (scale / zone.magnify));
            
            fromTime = toTime2;
            z++;
        }
    } else {
        var z = this._zones.length - 1;
        while (z >= 0) {
            if (this._unit.compare(fromTime, this._zones[z].startTime) > 0) {
                break;
            }
            z--;
        }
        
        while (this._unit.compare(fromTime, toTime) > 0) {
            var zone = this._zones[z];
            var toTime2 = this._unit.later(toTime, zone.startTime);
            
            pixels += (this._unit.compare(toTime2, fromTime) / (scale / zone.magnify));
            
            fromTime = toTime2;
            z--;
        }
    }
    return pixels;
};

Timeline.HotZoneEther.prototype._pixelOffsetToDate = function(pixels, fromDate) {
    var scale = this._getScale();
    var time = fromDate;
    if (pixels > 0) {
        var z = 0;
        while (z < this._zones.length) {
            if (this._unit.compare(time, this._zones[z].endTime) < 0) {
                break;
            }
            z++;
        }
        
        while (pixels > 0) {
            var zone = this._zones[z];
            var scale2 = scale / zone.magnify;
            
            if (zone.endTime == Number.POSITIVE_INFINITY) {
                time = this._unit.change(time, pixels * scale2);
                pixels = 0;
            } else {
                var pixels2 = this._unit.compare(zone.endTime, time) / scale2;
                if (pixels2 > pixels) {
                    time = this._unit.change(time, pixels * scale2);
                    pixels = 0;
                } else {
                    time = zone.endTime;
                    pixels -= pixels2;
                }
            }
            z++;
        }
    } else {
        var z = this._zones.length - 1;
        while (z >= 0) {
            if (this._unit.compare(time, this._zones[z].startTime) > 0) {
                break;
            }
            z--;
        }
        
        pixels = -pixels;
        while (pixels > 0) {
            var zone = this._zones[z];
            var scale2 = scale / zone.magnify;
            
            if (zone.startTime == Number.NEGATIVE_INFINITY) {
                time = this._unit.change(time, -pixels * scale2);
                pixels = 0;
            } else {
                var pixels2 = this._unit.compare(time, zone.startTime) / scale2;
                if (pixels2 > pixels) {
                    time = this._unit.change(time, -pixels * scale2);
                    pixels = 0;
                } else {
                    time = zone.startTime;
                    pixels -= pixels2;
                }
            }
            z--;
        }
    }
    return time;
};

Timeline.HotZoneEther.prototype._getScale = function() {
    return this._interval / this._pixelsPerInterval;
};

/*==================================================
 *  Event Utils
 *==================================================
 */
Timeline.EventUtils = {};

Timeline.EventUtils.getNewEventID = function() {
    // global across page
    if (this._lastEventID == null) {
        this._lastEventID = 0;
    }
    
    this._lastEventID += 1;
    return "e" + this._lastEventID;
};

Timeline.EventUtils.decodeEventElID = function(elementID) {
    /*==================================================
     * 
     * Use this function to decode an event element's id on a band (label div,
     * tape div or icon img).
     *
     * Returns {band: <bandObj>, evt: <eventObj>} 
     *
     * To enable a single event listener to monitor everything
     * on a Timeline, a set format is used for the id's of the 
     * elements on the Timeline--
     * 
     * element id format for labels, icons, tapes:
     *   labels: label-tl-<timelineID>-<band_index>-<evt.id>
     *    icons: icon-tl-<timelineID>-<band_index>-<evt.id>
     *    tapes: tape1-tl-<timelineID>-<band_index>-<evt.id>
     *           tape2-tl-<timelineID>-<band_index>-<evt.id>
     *           // some events have more than one tape
     *    highlight: highlight1-tl-<timelineID>-<band_index>-<evt.id>
     *               highlight2-tl-<timelineID>-<band_index>-<evt.id>
     *           // some events have more than one highlight div (future) 
     * Note: use split('-') to get array of the format's parts
     * 
     * You can then retrieve the timeline object and event object
     * by using Timeline.getTimeline, Timeline.getBand, or
     * Timeline.getEvent and passing in the element's id
     *
     *==================================================
     */
    
    var parts = elementID.split('-');
    if (parts[1] != 'tl') {
        alert("Internal Timeline problem 101, please consult support");
        return {band: null, evt: null}; // early return
    }
    
    var timeline = Timeline.getTimelineFromID(parts[2]);
    var band = timeline.getBand(parts[3]);
    var evt = band.getEventSource.getEvent(parts[4]);
    
    return {band: band, evt: evt};
};

Timeline.EventUtils.encodeEventElID = function(timeline, band, elType, evt) {
    // elType should be one of {label | icon | tapeN | highlightN}
    return elType + "-tl-" + timeline.timelineID + 
       "-" + band.getIndex() + "-" + evt.getID();
};
/*==================================================
 *  Gregorian Date Labeller
 *==================================================
 */

Timeline.GregorianDateLabeller = function(locale, timeZone) {
    this._locale = locale;
    this._timeZone = timeZone;
};

Timeline.GregorianDateLabeller.monthNames = [];
Timeline.GregorianDateLabeller.dayNames = [];
Timeline.GregorianDateLabeller.labelIntervalFunctions = [];

Timeline.GregorianDateLabeller.getMonthName = function(month, locale) {
    return Timeline.GregorianDateLabeller.monthNames[locale][month];
};

Timeline.GregorianDateLabeller.prototype.labelInterval = function(date, intervalUnit) {
    var f = Timeline.GregorianDateLabeller.labelIntervalFunctions[this._locale];
    if (f == null) {
        f = Timeline.GregorianDateLabeller.prototype.defaultLabelInterval;
    }
    return f.call(this, date, intervalUnit);
};

Timeline.GregorianDateLabeller.prototype.labelPrecise = function(date) {
    return SimileAjax.DateTime.removeTimeZoneOffset(
        date, 
        this._timeZone //+ (new Date().getTimezoneOffset() / 60)
    ).toUTCString();
};

Timeline.GregorianDateLabeller.prototype.defaultLabelInterval = function(date, intervalUnit) {
    var text;
    var emphasized = false;
    
    date = SimileAjax.DateTime.removeTimeZoneOffset(date, this._timeZone);
    
    switch(intervalUnit) {
    case SimileAjax.DateTime.MILLISECOND:
        text = date.getUTCMilliseconds();
        break;
    case SimileAjax.DateTime.SECOND:
        text = date.getUTCSeconds();
        break;
    case SimileAjax.DateTime.MINUTE:
        var m = date.getUTCMinutes();
        if (m == 0) {
            text = date.getUTCHours() + ":00";
            emphasized = true;
        } else {
            text = m;
        }
        break;
    case SimileAjax.DateTime.HOUR:
        text = date.getUTCHours() + "hr";
        break;
    case SimileAjax.DateTime.DAY:
        text = Timeline.GregorianDateLabeller.getMonthName(date.getUTCMonth(), this._locale) + " " + date.getUTCDate();
        break;
    case SimileAjax.DateTime.WEEK:
        text = Timeline.GregorianDateLabeller.getMonthName(date.getUTCMonth(), this._locale) + " " + date.getUTCDate();
        break;
    case SimileAjax.DateTime.MONTH:
        var m = date.getUTCMonth();
        if (m != 0) {
            text = Timeline.GregorianDateLabeller.getMonthName(m, this._locale);
            break;
        } // else, fall through
    case SimileAjax.DateTime.YEAR:
    case SimileAjax.DateTime.DECADE:
    case SimileAjax.DateTime.CENTURY:
    case SimileAjax.DateTime.MILLENNIUM:
        var y = date.getUTCFullYear();
        if (y > 0) {
            text = date.getUTCFullYear();
        } else {
            text = (1 - y) + "BC";
        }
        emphasized = 
            (intervalUnit == SimileAjax.DateTime.MONTH) ||
            (intervalUnit == SimileAjax.DateTime.DECADE && y % 100 == 0) || 
            (intervalUnit == SimileAjax.DateTime.CENTURY && y % 1000 == 0);
        break;
    default:
        text = date.toUTCString();
    }
    return { text: text, emphasized: emphasized };
}


/*==================================================
 *  Original Event Painter
 *==================================================
 */

/*==================================================
 * 
 * To enable a single event listener to monitor everything
 * on a Timeline, we need a way to map from an event's icon,
 * label or tape element to the associated timeline, band and
 * specific event.
 *
 * Thus a set format is used for the id's of the 
 * events' elements on the Timeline--
 * 
 * element id format for labels, icons, tapes:
 *   labels: label-tl-<timelineID>-<band_index>-<evt.id>
 *    icons: icon-tl-<timelineID>-<band_index>-<evt.id>
 *    tapes: tape1-tl-<timelineID>-<band_index>-<evt.id>
 *           tape2-tl-<timelineID>-<band_index>-<evt.id>
 *           // some events have more than one tape
 *    highlight: highlight1-tl-<timelineID>-<band_index>-<evt.id>
 *               highlight2-tl-<timelineID>-<band_index>-<evt.id>
 *           // some events have more than one highlight div (future) 
 * You can then retrieve the band/timeline objects and event object
 * by using Timeline.EventUtils.decodeEventElID
 *
 *==================================================
 */
 
/* 
 *    eventPaintListener functions receive calls about painting.
 *    function(band, op, evt, els)
 *       context: 'this' will be an OriginalEventPainter object.
 *                It has properties and methods for obtaining
 *                the relevant band, timeline, etc    
 *       band = the band being painted
 *       op = 'paintStarting' // the painter is about to remove
 *            all previously painted events, if any. It will
 *            then start painting all of the visible events that
 *            pass the filter. 
 *            evt = null, els = null
 *       op = 'paintEnded' // the painter has finished painting
 *            all of the visible events that passed the filter
 *            evt = null, els = null
 *       op = 'paintedEvent' // the painter just finished painting an event
 *            evt = event just painted
 *            els = array of painted elements' divs. Depending on the event,
 *                  the array could be just a tape or icon (if no label).
 *                  Or could include label, multiple tape divs (imprecise event),
 *                  highlight divs. The array is not ordered. The meaning of
 *                  each el is available by decoding the el's id 
 *      Note that there may be no paintedEvent calls if no events were visible
 *      or passed the filter.
 */

Timeline.OriginalEventPainter = function(params) {
    this._params = params;
    this._onSelectListeners = [];
    this._eventPaintListeners = [];
    
    this._filterMatcher = null;
    this._highlightMatcher = null;
    this._frc = null;
    
    this._eventIdToElmt = {};
};

Timeline.OriginalEventPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._backLayer = null;
    this._eventLayer = null;
    this._lineLayer = null;
    this._highlightLayer = null;
    
    this._eventIdToElmt = null;
};

Timeline.OriginalEventPainter.prototype.getType = function() {
    return 'original';
};

Timeline.OriginalEventPainter.prototype.addOnSelectListener = function(listener) {
    this._onSelectListeners.push(listener);
};

Timeline.OriginalEventPainter.prototype.removeOnSelectListener = function(listener) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        if (this._onSelectListeners[i] == listener) {
            this._onSelectListeners.splice(i, 1);
            break;
        }
    }
};

Timeline.OriginalEventPainter.prototype.addEventPaintListener = function(listener) {
    this._eventPaintListeners.push(listener);
};

Timeline.OriginalEventPainter.prototype.removeEventPaintListener = function(listener) {
    for (var i = 0; i < this._eventPaintListeners.length; i++) {
        if (this._eventPaintListeners[i] == listener) {
            this._eventPaintListeners.splice(i, 1);
            break;
        }
    }
};

Timeline.OriginalEventPainter.prototype.getFilterMatcher = function() {
    return this._filterMatcher;
};

Timeline.OriginalEventPainter.prototype.setFilterMatcher = function(filterMatcher) {
    this._filterMatcher = filterMatcher;
};

Timeline.OriginalEventPainter.prototype.getHighlightMatcher = function() {
    return this._highlightMatcher;
};

Timeline.OriginalEventPainter.prototype.setHighlightMatcher = function(highlightMatcher) {
    this._highlightMatcher = highlightMatcher;
};

Timeline.OriginalEventPainter.prototype.paint = function() {
    // Paints the events for a given section of the band--what is
    // visible on screen and some extra.
    var eventSource = this._band.getEventSource();
    if (eventSource == null) {
        return;
    }
    
    this._eventIdToElmt = {};
    this._fireEventPaintListeners('paintStarting', null, null);
    this._prepareForPainting();
    
    var eventTheme = this._params.theme.event;
    var trackHeight = Math.max(eventTheme.track.height, eventTheme.tape.height + 
                        this._frc.getLineHeight());
    var metrics = {
           trackOffset: eventTheme.track.offset,
           trackHeight: trackHeight,
              trackGap: eventTheme.track.gap,
        trackIncrement: trackHeight + eventTheme.track.gap,
                  icon: eventTheme.instant.icon,
             iconWidth: eventTheme.instant.iconWidth,
            iconHeight: eventTheme.instant.iconHeight,
            labelWidth: eventTheme.label.width,
          maxLabelChar: eventTheme.label.maxLabelChar,
   impreciseIconMargin: eventTheme.instant.impreciseIconMargin
    }
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var filterMatcher = (this._filterMatcher != null) ? 
        this._filterMatcher :
        function(evt) { return true; };
    var highlightMatcher = (this._highlightMatcher != null) ? 
        this._highlightMatcher :
        function(evt) { return -1; };
    
    var iterator = eventSource.getEventReverseIterator(minDate, maxDate);
    while (iterator.hasNext()) {
        var evt = iterator.next();
        if (filterMatcher(evt)) {
            this.paintEvent(evt, metrics, this._params.theme, highlightMatcher(evt));
        }
    }
    
    this._highlightLayer.style.display = "block";
    this._lineLayer.style.display = "block";
    this._eventLayer.style.display = "block";
    // update the band object for max number of tracks in this section of the ether
    this._band.updateEventTrackInfo(this._tracks.length, metrics.trackIncrement); 
    this._fireEventPaintListeners('paintEnded', null, null);
};

Timeline.OriginalEventPainter.prototype.softPaint = function() {
};

Timeline.OriginalEventPainter.prototype._prepareForPainting = function() {
    // Remove everything previously painted: highlight, line and event layers.
    // Prepare blank layers for painting. 
    var band = this._band;
        
    if (this._backLayer == null) {
        this._backLayer = this._band.createLayerDiv(0, "timeline-band-events");
        this._backLayer.style.visibility = "hidden";
        
        var eventLabelPrototype = document.createElement("span");
        eventLabelPrototype.className = "timeline-event-label";
        this._backLayer.appendChild(eventLabelPrototype);
        this._frc = SimileAjax.Graphics.getFontRenderingContext(eventLabelPrototype);
    }
    this._frc.update();
    this._tracks = [];
    
    if (this._highlightLayer != null) {
        band.removeLayerDiv(this._highlightLayer);
    }
    this._highlightLayer = band.createLayerDiv(105, "timeline-band-highlights");
    this._highlightLayer.style.display = "none";
    
    if (this._lineLayer != null) {
        band.removeLayerDiv(this._lineLayer);
    }
    this._lineLayer = band.createLayerDiv(110, "timeline-band-lines");
    this._lineLayer.style.display = "none";
    
    if (this._eventLayer != null) {
        band.removeLayerDiv(this._eventLayer);
    }
    this._eventLayer = band.createLayerDiv(115, "timeline-band-events");
    this._eventLayer.style.display = "none";
};

Timeline.OriginalEventPainter.prototype.paintEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isInstant()) {
        this.paintInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintDurationEvent(evt, metrics, theme, highlightIndex);
    }
};
    
Timeline.OriginalEventPainter.prototype.paintInstantEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseInstantEvent(evt, metrics, theme, highlightIndex);
    }
}

Timeline.OriginalEventPainter.prototype.paintDurationEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isImprecise()) {
        this.paintImpreciseDurationEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintPreciseDurationEvent(evt, metrics, theme, highlightIndex);
    }
}
    
Timeline.OriginalEventPainter.prototype.paintPreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var iconRightEdge = Math.round(startPixel + metrics.iconWidth / 2);
    var iconLeftEdge = Math.round(startPixel - metrics.iconWidth / 2);

    var labelDivClassName = this._getLabelDivClassName(evt);
    var labelSize = this._frc.computeSize(text, labelDivClassName);
    var labelLeft = iconRightEdge + theme.event.label.offsetFromLine;
    var labelRight = labelLeft + labelSize.width;
    
    var rightEdge = labelRight;
    var track = this._findFreeTrack(evt, rightEdge);
    
    var labelTop = Math.round(
        metrics.trackOffset + track * metrics.trackIncrement + 
        metrics.trackHeight / 2 - labelSize.height / 2);
        
    var iconElmtData = this._paintEventIcon(evt, track, iconLeftEdge, metrics, theme, 0);
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width,
        labelSize.height, theme, labelDivClassName, highlightIndex);
    var els = [iconElmtData.elmt, labelElmtData.elmt];

    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickInstantEvent(iconElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    var hDiv = this._createHighlightDiv(highlightIndex, iconElmtData, theme, evt);
    if (hDiv != null) {els.push(hDiv);}
    this._fireEventPaintListeners('paintedEvent', evt, els);

    
    this._eventIdToElmt[evt.getID()] = iconElmtData.elmt;
    this._tracks[track] = iconLeftEdge;
};

Timeline.OriginalEventPainter.prototype.paintImpreciseInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var endDate = evt.getEnd();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    
    var iconRightEdge = Math.round(startPixel + metrics.iconWidth / 2);
    var iconLeftEdge = Math.round(startPixel - metrics.iconWidth / 2);
    
    var labelDivClassName = this._getLabelDivClassName(evt);
    var labelSize = this._frc.computeSize(text, labelDivClassName);
    var labelLeft = iconRightEdge + theme.event.label.offsetFromLine;
    var labelRight = labelLeft + labelSize.width;
    
    var rightEdge = Math.max(labelRight, endPixel);
    var track = this._findFreeTrack(evt, rightEdge);
    var tapeHeight = theme.event.tape.height;
    var labelTop = Math.round(
        metrics.trackOffset + track * metrics.trackIncrement + tapeHeight);

    var iconElmtData = this._paintEventIcon(evt, track, iconLeftEdge, metrics, theme, tapeHeight);
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width,
                        labelSize.height, theme, labelDivClassName, highlightIndex);

    var color = evt.getColor();
    color = color != null ? color : theme.event.instant.impreciseColor;

    var tapeElmtData = this._paintEventTape(evt, track, startPixel, endPixel, 
        color, theme.event.instant.impreciseOpacity, metrics, theme, 0);
    var els = [iconElmtData.elmt, labelElmtData.elmt, tapeElmtData.elmt];    
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickInstantEvent(iconElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(iconElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    var hDiv = this._createHighlightDiv(highlightIndex, iconElmtData, theme, evt);
    if (hDiv != null) {els.push(hDiv);}
    this._fireEventPaintListeners('paintedEvent', evt, els);

    this._eventIdToElmt[evt.getID()] = iconElmtData.elmt;
    this._tracks[track] = iconLeftEdge;
};

Timeline.OriginalEventPainter.prototype.paintPreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var endDate = evt.getEnd();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    
    var labelDivClassName = this._getLabelDivClassName(evt);
    var labelSize = this._frc.computeSize(text, labelDivClassName);
    var labelLeft = startPixel;
    var labelRight = labelLeft + labelSize.width;
    
    var rightEdge = Math.max(labelRight, endPixel);
    var track = this._findFreeTrack(evt, rightEdge);
    var labelTop = Math.round(
        metrics.trackOffset + track * metrics.trackIncrement + theme.event.tape.height);
    
    var color = evt.getColor();
    color = color != null ? color : theme.event.duration.color;
    
    var tapeElmtData = this._paintEventTape(evt, track, startPixel, endPixel, color, 100, metrics, theme, 0);
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop, labelSize.width,
      labelSize.height, theme, labelDivClassName, highlightIndex);
    var els = [tapeElmtData.elmt, labelElmtData.elmt];
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickDurationEvent(tapeElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    var hDiv = this._createHighlightDiv(highlightIndex, tapeElmtData, theme, evt);
    if (hDiv != null) {els.push(hDiv);}
    this._fireEventPaintListeners('paintedEvent', evt, els);
    
    this._eventIdToElmt[evt.getID()] = tapeElmtData.elmt;
    this._tracks[track] = startPixel;
};

Timeline.OriginalEventPainter.prototype.paintImpreciseDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var doc = this._timeline.getDocument();
    var text = evt.getText();
    
    var startDate = evt.getStart();
    var latestStartDate = evt.getLatestStart();
    var endDate = evt.getEnd();
    var earliestEndDate = evt.getEarliestEnd();
    
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    var latestStartPixel = Math.round(this._band.dateToPixelOffset(latestStartDate));
    var endPixel = Math.round(this._band.dateToPixelOffset(endDate));
    var earliestEndPixel = Math.round(this._band.dateToPixelOffset(earliestEndDate));
    
    var labelDivClassName = this._getLabelDivClassName(evt);
    var labelSize = this._frc.computeSize(text, labelDivClassName);
    var labelLeft = latestStartPixel;
    var labelRight = labelLeft + labelSize.width;
    
    var rightEdge = Math.max(labelRight, endPixel);
    var track = this._findFreeTrack(evt, rightEdge);
    var labelTop = Math.round(
        metrics.trackOffset + track * metrics.trackIncrement + theme.event.tape.height);
    
    var color = evt.getColor();
    color = color != null ? color : theme.event.duration.color;
    
    // Imprecise events can have two event tapes
    // The imprecise dates tape, uses opacity to be dimmer than precise dates
    var impreciseTapeElmtData = this._paintEventTape(evt, track, startPixel, endPixel, 
        theme.event.duration.impreciseColor,
        theme.event.duration.impreciseOpacity, metrics, theme, 0);
    // The precise dates tape, regular (100%) opacity
    var tapeElmtData = this._paintEventTape(evt, track, latestStartPixel,
        earliestEndPixel, color, 100, metrics, theme, 1);
    
    var labelElmtData = this._paintEventLabel(evt, text, labelLeft, labelTop,
        labelSize.width, labelSize.height, theme, labelDivClassName, highlightIndex);
    var els = [impreciseTapeElmtData.elmt, tapeElmtData.elmt, labelElmtData.elmt];
    
    var self = this;
    var clickHandler = function(elmt, domEvt, target) {
        return self._onClickDurationEvent(tapeElmtData.elmt, domEvt, evt);
    };
    SimileAjax.DOM.registerEvent(tapeElmtData.elmt, "mousedown", clickHandler);
    SimileAjax.DOM.registerEvent(labelElmtData.elmt, "mousedown", clickHandler);
    
    var hDiv = this._createHighlightDiv(highlightIndex, tapeElmtData, theme, evt);
    if (hDiv != null) {els.push(hDiv);}
    this._fireEventPaintListeners('paintedEvent', evt, els);
    
    this._eventIdToElmt[evt.getID()] = tapeElmtData.elmt;
    this._tracks[track] = startPixel;
};

Timeline.OriginalEventPainter.prototype._encodeEventElID = function(elType, evt) {
    return Timeline.EventUtils.encodeEventElID(this._timeline, this._band, elType, evt);
};

Timeline.OriginalEventPainter.prototype._findFreeTrack = function(event, rightEdge) {
    var trackAttribute = event.getTrackNum();
    if (trackAttribute != null) {
        return trackAttribute; // early return since event includes track number
    }
    
    // normal case: find an open track
    for (var i = 0; i < this._tracks.length; i++) {
        var t = this._tracks[i];
        if (t > rightEdge) {
            break;
        }
    }
    return i;
};

Timeline.OriginalEventPainter.prototype._paintEventIcon = function(evt, iconTrack, left, metrics, theme, tapeHeight) {
    // If no tape, then paint the icon in the middle of the track.
    // If there is a tape, paint the icon below the tape + impreciseIconMargin
    var icon = evt.getIcon();
    icon = icon != null ? icon : metrics.icon;
    
    var top; // top of the icon
    if (tapeHeight > 0) {
        top = metrics.trackOffset + iconTrack * metrics.trackIncrement + 
              tapeHeight + metrics.impreciseIconMargin;
    } else {
        var middle = metrics.trackOffset + iconTrack * metrics.trackIncrement +
                     metrics.trackHeight / 2;
        top = Math.round(middle - metrics.iconHeight / 2);
    }
    var img = SimileAjax.Graphics.createTranslucentImage(icon);
    var iconDiv = this._timeline.getDocument().createElement("div");
    iconDiv.className = this._getElClassName('timeline-event-icon', evt, 'icon');
    iconDiv.id = this._encodeEventElID('icon', evt);
    iconDiv.style.left = left + "px";
    iconDiv.style.top = top + "px";
    iconDiv.appendChild(img);

    if(evt._title != null)
        iconDiv.title = evt._title;

    this._eventLayer.appendChild(iconDiv);
    
    return {
        left:   left,
        top:    top,
        width:  metrics.iconWidth,
        height: metrics.iconHeight,
        elmt:   iconDiv
    };
};

Timeline.OriginalEventPainter.prototype._paintEventLabel = function(evt, text, left, top, width,
    height, theme, labelDivClassName, highlightIndex) {
    var doc = this._timeline.getDocument();
    
    var labelDiv = doc.createElement("div");
    labelDiv.className = labelDivClassName;
    labelDiv.id = this._encodeEventElID('label', evt);
    labelDiv.style.left = left + "px";
    labelDiv.style.width = width + "px";
    labelDiv.style.top = top + "px";
    labelDiv.innerHTML = text;

    if(evt._title != null)
        labelDiv.title = evt._title;    

    var color = evt.getTextColor();
    if (color == null) {
        color = evt.getColor();
    }
    if (color != null) {
        labelDiv.style.color = color;
    }
    if (theme.event.highlightLabelBackground && highlightIndex >= 0) {
        labelDiv.style.background = this._getHighlightColor(highlightIndex, theme);
    }
    
    this._eventLayer.appendChild(labelDiv);
    
    return {
        left:   left,
        top:    top,
        width:  width,
        height: height,
        elmt:   labelDiv
    };
};

Timeline.OriginalEventPainter.prototype._paintEventTape = function(
    evt, iconTrack, startPixel, endPixel, color, opacity, metrics, theme, tape_index) {
    
    var tapeWidth = endPixel - startPixel;
    var tapeHeight = theme.event.tape.height;
    var top = metrics.trackOffset + iconTrack * metrics.trackIncrement;
    
    var tapeDiv = this._timeline.getDocument().createElement("div");
    tapeDiv.className = this._getElClassName('timeline-event-tape', evt, 'tape');
    tapeDiv.id = this._encodeEventElID('tape' + tape_index, evt);
    tapeDiv.style.left = startPixel + "px";
    tapeDiv.style.width = tapeWidth + "px";
    tapeDiv.style.height = tapeHeight + "px";
    tapeDiv.style.top = top + "px";

    if(evt._title != null)
        tapeDiv.title = evt._title;   
   
    if(color != null) {
        tapeDiv.style.backgroundColor = color;
    }
    
    var backgroundImage = evt.getTapeImage();
    var backgroundRepeat = evt.getTapeRepeat();
    backgroundRepeat = backgroundRepeat != null ? backgroundRepeat : 'repeat';
    if(backgroundImage != null) {
      tapeDiv.style.backgroundImage = "url(" + backgroundImage + ")";
      tapeDiv.style.backgroundRepeat = backgroundRepeat;
    } 	
    
    SimileAjax.Graphics.setOpacity(tapeDiv, opacity);
        
    this._eventLayer.appendChild(tapeDiv);
    
    return {
        left:   startPixel,
        top:    top,
        width:  tapeWidth,
        height: tapeHeight,
        elmt:   tapeDiv
    };
}

Timeline.OriginalEventPainter.prototype._getLabelDivClassName = function(evt) {
    return this._getElClassName('timeline-event-label', evt, 'label');
};

Timeline.OriginalEventPainter.prototype._getElClassName = function(elClassName, evt, prefix) {
    // Prefix and '_' is added to the event's classname. Set to null for no prefix
    var evt_classname = evt.getClassName(),
        pieces = [];

    if (evt_classname) {
      if (prefix) {pieces.push(prefix + '-' + evt_classname + ' ');}
      pieces.push(evt_classname + ' ');
    }
    pieces.push(elClassName);
    return(pieces.join(''));
};

Timeline.OriginalEventPainter.prototype._getHighlightColor = function(highlightIndex, theme) {
    var highlightColors = theme.event.highlightColors;    
    return highlightColors[Math.min(highlightIndex, highlightColors.length - 1)];
};

Timeline.OriginalEventPainter.prototype._createHighlightDiv = function(highlightIndex, dimensions, theme, evt) {
    var div = null;
    if (highlightIndex >= 0) {
        var doc = this._timeline.getDocument();        
        var color = this._getHighlightColor(highlightIndex, theme);
        
        div = doc.createElement("div");
        div.className = this._getElClassName('timeline-event-highlight', evt, 'highlight');
        div.id = this._encodeEventElID('highlight0', evt); // in future will have other
                                                           // highlight divs for tapes + icons
        div.style.position = "absolute";
        div.style.overflow = "hidden";
        div.style.left =    (dimensions.left - 2) + "px";
        div.style.width =   (dimensions.width + 4) + "px";
        div.style.top =     (dimensions.top - 2) + "px";
        div.style.height =  (dimensions.height + 4) + "px";
        div.style.background = color;
        
        this._highlightLayer.appendChild(div);
    }
    return div;
};

Timeline.OriginalEventPainter.prototype._onClickInstantEvent = function(icon, domEvt, evt) {
    var c = SimileAjax.DOM.getPageCoordinates(icon);
    this._showBubble(
        c.left + Math.ceil(icon.offsetWidth / 2), 
        c.top + Math.ceil(icon.offsetHeight / 2),
        evt
    );
    this._fireOnSelect(evt.getID());
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.OriginalEventPainter.prototype._onClickDurationEvent = function(target, domEvt, evt) {
    if ("pageX" in domEvt) {
        var x = domEvt.pageX;
        var y = domEvt.pageY;
    } else {
        var c = SimileAjax.DOM.getPageCoordinates(target);
        var x = domEvt.offsetX + c.left;
        var y = domEvt.offsetY + c.top;
    }
    this._showBubble(x, y, evt);
    this._fireOnSelect(evt.getID());
    
    domEvt.cancelBubble = true;
    SimileAjax.DOM.cancelEvent(domEvt);
    return false;
};

Timeline.OriginalEventPainter.prototype.showBubble = function(evt) {
    var elmt = this._eventIdToElmt[evt.getID()];
    if (elmt) {
        var c = SimileAjax.DOM.getPageCoordinates(elmt);
        this._showBubble(c.left + elmt.offsetWidth / 2, c.top + elmt.offsetHeight / 2, evt);
    }
};

Timeline.OriginalEventPainter.prototype._showBubble = function(x, y, evt) {
    var div = document.createElement("div");
    var themeBubble = this._params.theme.event.bubble;
    evt.fillInfoBubble(div, this._params.theme, this._band.getLabeller());
    
    SimileAjax.WindowManager.cancelPopups();
    SimileAjax.Graphics.createBubbleForContentAndPoint(div, x, y,
        themeBubble.width, null, themeBubble.maxHeight);
};

Timeline.OriginalEventPainter.prototype._fireOnSelect = function(eventID) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        this._onSelectListeners[i](eventID);
    }
};

Timeline.OriginalEventPainter.prototype._fireEventPaintListeners = function(op, evt, els) {
    for (var i = 0; i < this._eventPaintListeners.length; i++) {
        this._eventPaintListeners[i](this._band, op, evt, els);
    }
};

/*==================================================
 *  Overview Event Painter
 *==================================================
 */

Timeline.OverviewEventPainter = function(params) {
    this._params = params;
    this._onSelectListeners = [];
    
    this._filterMatcher = null;
    this._highlightMatcher = null;
};

Timeline.OverviewEventPainter.prototype.initialize = function(band, timeline) {
    this._band = band;
    this._timeline = timeline;
    
    this._eventLayer = null;
    this._highlightLayer = null;
};

Timeline.OverviewEventPainter.prototype.getType = function() {
    return 'overview';
};

Timeline.OverviewEventPainter.prototype.addOnSelectListener = function(listener) {
    this._onSelectListeners.push(listener);
};

Timeline.OverviewEventPainter.prototype.removeOnSelectListener = function(listener) {
    for (var i = 0; i < this._onSelectListeners.length; i++) {
        if (this._onSelectListeners[i] == listener) {
            this._onSelectListeners.splice(i, 1);
            break;
        }
    }
};

Timeline.OverviewEventPainter.prototype.getFilterMatcher = function() {
    return this._filterMatcher;
};

Timeline.OverviewEventPainter.prototype.setFilterMatcher = function(filterMatcher) {
    this._filterMatcher = filterMatcher;
};

Timeline.OverviewEventPainter.prototype.getHighlightMatcher = function() {
    return this._highlightMatcher;
};

Timeline.OverviewEventPainter.prototype.setHighlightMatcher = function(highlightMatcher) {
    this._highlightMatcher = highlightMatcher;
};

Timeline.OverviewEventPainter.prototype.paint = function() {
    var eventSource = this._band.getEventSource();
    if (eventSource == null) {
        return;
    }
    
    this._prepareForPainting();
    
    var eventTheme = this._params.theme.event;
    var metrics = {
        trackOffset:    eventTheme.overviewTrack.offset,
        trackHeight:    eventTheme.overviewTrack.height,
        trackGap:       eventTheme.overviewTrack.gap,
        trackIncrement: eventTheme.overviewTrack.height + eventTheme.overviewTrack.gap
    }
    
    var minDate = this._band.getMinDate();
    var maxDate = this._band.getMaxDate();
    
    var filterMatcher = (this._filterMatcher != null) ? 
        this._filterMatcher :
        function(evt) { return true; };
    var highlightMatcher = (this._highlightMatcher != null) ? 
        this._highlightMatcher :
        function(evt) { return -1; };
    
    var iterator = eventSource.getEventReverseIterator(minDate, maxDate);
    while (iterator.hasNext()) {
        var evt = iterator.next();
        if (filterMatcher(evt)) {
            this.paintEvent(evt, metrics, this._params.theme, highlightMatcher(evt));
        }
    }
    
    this._highlightLayer.style.display = "block";
    this._eventLayer.style.display = "block";
    // update the band object for max number of tracks in this section of the ether
    this._band.updateEventTrackInfo(this._tracks.length, metrics.trackIncrement); 
};

Timeline.OverviewEventPainter.prototype.softPaint = function() {
};

Timeline.OverviewEventPainter.prototype._prepareForPainting = function() {
    var band = this._band;
        
    this._tracks = [];
    
    if (this._highlightLayer != null) {
        band.removeLayerDiv(this._highlightLayer);
    }
    this._highlightLayer = band.createLayerDiv(105, "timeline-band-highlights");
    this._highlightLayer.style.display = "none";
    
    if (this._eventLayer != null) {
        band.removeLayerDiv(this._eventLayer);
    }
    this._eventLayer = band.createLayerDiv(110, "timeline-band-events");
    this._eventLayer.style.display = "none";
};

Timeline.OverviewEventPainter.prototype.paintEvent = function(evt, metrics, theme, highlightIndex) {
    if (evt.isInstant()) {
        this.paintInstantEvent(evt, metrics, theme, highlightIndex);
    } else {
        this.paintDurationEvent(evt, metrics, theme, highlightIndex);
    }
};

Timeline.OverviewEventPainter.prototype.paintInstantEvent = function(evt, metrics, theme, highlightIndex) {
    var startDate = evt.getStart();
    var startPixel = Math.round(this._band.dateToPixelOffset(startDate));
    
    var color = evt.getColor(),
        klassName = evt.getClassName();
    if (klassName) {
      color = null;
    } else {
      color = color != null ? color : theme.event.duration.color;
    }
    
    var tickElmtData = this._paintEventTick(evt, startPixel, color, 100, metrics, theme);
    
    this._createHighlightDiv(highlightIndex, tickElmtData, theme);
};

Timeline.OverviewEventPainter.prototype.paintDurationEvent = function(evt, metrics, theme, highlightIndex) {
    var latestStartDate = evt.getLatestStart();
    var earliestEndDate = evt.getEarliestEnd();
    
    var latestStartPixel = Math.round(this._band.dateToPixelOffset(latestStartDate));
    var earliestEndPixel = Math.round(this._band.dateToPixelOffset(earliestEndDate));
    
    var tapeTrack = 0;
    for (; tapeTrack < this._tracks.length; tapeTrack++) {
        if (earliestEndPixel < this._tracks[tapeTrack]) {
            break;
        }
    }
    this._tracks[tapeTrack] = earliestEndPixel;
    
    var color = evt.getColor(),
        klassName = evt.getClassName();
    if (klassName) {
      color = null;
    } else {
      color = color != null ? color : theme.event.duration.color;
    }
    
    var tapeElmtData = this._paintEventTape(evt, tapeTrack, latestStartPixel, earliestEndPixel,
      color, 100, metrics, theme, klassName);
    
    this._createHighlightDiv(highlightIndex, tapeElmtData, theme);
};

Timeline.OverviewEventPainter.prototype._paintEventTape = function(
    evt, track, left, right, color, opacity, metrics, theme, klassName) {
    
    var top = metrics.trackOffset + track * metrics.trackIncrement;
    var width = right - left;
    var height = metrics.trackHeight;
    
    var tapeDiv = this._timeline.getDocument().createElement("div");
    tapeDiv.className = 'timeline-small-event-tape'
    if (klassName) {tapeDiv.className += ' small-' + klassName;}
    tapeDiv.style.left = left + "px";
    tapeDiv.style.width = width + "px";
    tapeDiv.style.top = top + "px";
    tapeDiv.style.height = height + "px";
    
    if (color) {
      tapeDiv.style.backgroundColor = color; // set color here if defined by event. Else use css
    }
 //   tapeDiv.style.overflow = "hidden";   // now set in css
 //   tapeDiv.style.position = "absolute";
    if(opacity<100) SimileAjax.Graphics.setOpacity(tapeDiv, opacity);
    
    this._eventLayer.appendChild(tapeDiv);
    
    return {
        left:   left,
        top:    top,
        width:  width,
        height: height,
        elmt:   tapeDiv
    };
}

Timeline.OverviewEventPainter.prototype._paintEventTick = function(
    evt, left, color, opacity, metrics, theme) {
    
    var height = theme.event.overviewTrack.tickHeight;
    var top = metrics.trackOffset - height;
    var width = 1;
    
    var tickDiv = this._timeline.getDocument().createElement("div");
	  tickDiv.className = 'timeline-small-event-icon'
    tickDiv.style.left = left + "px";
    tickDiv.style.top = top + "px";
  //  tickDiv.style.width = width + "px";
  //  tickDiv.style.position = "absolute";
  //  tickDiv.style.height = height + "px";
  //  tickDiv.style.backgroundColor = color;
  //  tickDiv.style.overflow = "hidden";

    var klassName = evt.getClassName()
    if (klassName) {tickDiv.className +=' small-' + klassName};
	
    if(opacity<100) {SimileAjax.Graphics.setOpacity(tickDiv, opacity)};
    
    this._eventLayer.appendChild(tickDiv);
    
    return {
        left:   left,
        top:    top,
        width:  width,
        height: height,
        elmt:   tickDiv
    };
}

Timeline.OverviewEventPainter.prototype._createHighlightDiv = function(highlightIndex, dimensions, theme) {
    if (highlightIndex >= 0) {
        var doc = this._timeline.getDocument();
        var eventTheme = theme.event;
        
        var color = eventTheme.highlightColors[Math.min(highlightIndex, eventTheme.highlightColors.length - 1)];
        
        var div = doc.createElement("div");
        div.style.position = "absolute";
        div.style.overflow = "hidden";
        div.style.left =    (dimensions.left - 1) + "px";
        div.style.width =   (dimensions.width + 2) + "px";
        div.style.top =     (dimensions.top - 1) + "px";
        div.style.height =  (dimensions.height + 2) + "px";
        div.style.background = color;
        
        this._highlightLayer.appendChild(div);
    }
};

Timeline.OverviewEventPainter.prototype.showBubble = function(evt) {
    // not implemented
};

/*==================================================
 *  Default Event Source
 *==================================================
 */


Timeline.DefaultEventSource = function(eventIndex) {
    this._events = (eventIndex instanceof Object) ? eventIndex : new SimileAjax.EventIndex();
    this._listeners = [];
};

Timeline.DefaultEventSource.prototype.addListener = function(listener) {
    this._listeners.push(listener);
};

Timeline.DefaultEventSource.prototype.removeListener = function(listener) {
    for (var i = 0; i < this._listeners.length; i++) {
        if (this._listeners[i] == listener) {
            this._listeners.splice(i, 1);
            break;
        }
    }
};

Timeline.DefaultEventSource.prototype.loadXML = function(xml, url) {
    var base = this._getBaseURL(url);
    
    var wikiURL = xml.documentElement.getAttribute("wiki-url");
    var wikiSection = xml.documentElement.getAttribute("wiki-section");

    var dateTimeFormat = xml.documentElement.getAttribute("date-time-format");
    var parseDateTimeFunction = this._events.getUnit().getParser(dateTimeFormat);

    var node = xml.documentElement.firstChild;
    var added = false;
    while (node != null) {
        if (node.nodeType == 1) {
            var description = "";
            if (node.firstChild != null && node.firstChild.nodeType == 3) {
                description = node.firstChild.nodeValue;
            }
            // instant event: default is true. Or use values from isDuration or durationEvent
            var instant = (node.getAttribute("isDuration")    === null &&
                           node.getAttribute("durationEvent") === null) ||
                          node.getAttribute("isDuration") == "false" ||
                          node.getAttribute("durationEvent") == "false";
            
            var evt = new Timeline.DefaultEventSource.Event( {
                          id: node.getAttribute("id"),
                       start: parseDateTimeFunction(node.getAttribute("start")),
                         end: parseDateTimeFunction(node.getAttribute("end")),
                 latestStart: parseDateTimeFunction(node.getAttribute("latestStart")),
                 earliestEnd: parseDateTimeFunction(node.getAttribute("earliestEnd")),
                     instant: instant,
                        text: node.getAttribute("title"),
                 description: description,
                       image: this._resolveRelativeURL(node.getAttribute("image"), base),
                        link: this._resolveRelativeURL(node.getAttribute("link") , base),
                        icon: this._resolveRelativeURL(node.getAttribute("icon") , base),
                       color: node.getAttribute("color"),
                   textColor: node.getAttribute("textColor"),
                   hoverText: node.getAttribute("hoverText"),
                   classname: node.getAttribute("classname"),
                   tapeImage: node.getAttribute("tapeImage"),
                  tapeRepeat: node.getAttribute("tapeRepeat"),
                     caption: node.getAttribute("caption"),
                     eventID: node.getAttribute("eventID"),
                    trackNum: node.getAttribute("trackNum")
            });

            evt._node = node;
            evt.getProperty = function(name) {
                return this._node.getAttribute(name);
            };
            evt.setWikiInfo(wikiURL, wikiSection);
            
            this._events.add(evt);
            
            added = true;
        }
        node = node.nextSibling;
    }

    if (added) {
        this._fire("onAddMany", []);
    }
};


Timeline.DefaultEventSource.prototype.loadJSON = function(data, url) {
    var base = this._getBaseURL(url);
    var added = false;  
    if (data && data.events){
        var wikiURL = ("wikiURL" in data) ? data.wikiURL : null;
        var wikiSection = ("wikiSection" in data) ? data.wikiSection : null;
    
        var dateTimeFormat = ("dateTimeFormat" in data) ? data.dateTimeFormat : null;
        var parseDateTimeFunction = this._events.getUnit().getParser(dateTimeFormat);
       
        for (var i=0; i < data.events.length; i++){
            var event = data.events[i];
            // Fixing issue 33:
            // instant event: default (for JSON only) is false. Or use values from isDuration or durationEvent
            // isDuration was negated (see issue 33, so keep that interpretation
            var instant = event.isDuration || (event.durationEvent != null && !event.durationEvent);

            var evt = new Timeline.DefaultEventSource.Event({
                          id: ("id" in event) ? event.id : undefined,
                       start: parseDateTimeFunction(event.start),
                         end: parseDateTimeFunction(event.end),
                 latestStart: parseDateTimeFunction(event.latestStart),
                 earliestEnd: parseDateTimeFunction(event.earliestEnd),
                     instant: instant,
                        text: event.title,
                 description: event.description,
                       image: this._resolveRelativeURL(event.image, base),
                        link: this._resolveRelativeURL(event.link , base),
                        icon: this._resolveRelativeURL(event.icon , base),
                       color: event.color,                                      
                   textColor: event.textColor,
                   hoverText: event.hoverText,
                   classname: event.classname,
                   tapeImage: event.tapeImage,
                  tapeRepeat: event.tapeRepeat,
                     caption: event.caption,
                     eventID: event.eventID,
                    trackNum: event.trackNum
            });
            evt._obj = event;
            evt.getProperty = function(name) {
                return this._obj[name];
            };
            evt.setWikiInfo(wikiURL, wikiSection);

            this._events.add(evt);
            added = true;
        }
    }
   
    if (added) {
        this._fire("onAddMany", []);
    }
};

/*
 *  Contributed by Morten Frederiksen, http://www.wasab.dk/morten/
 */
Timeline.DefaultEventSource.prototype.loadSPARQL = function(xml, url) {
    var base = this._getBaseURL(url);
    
    var dateTimeFormat = 'iso8601';
    var parseDateTimeFunction = this._events.getUnit().getParser(dateTimeFormat);

    if (xml == null) {
        return;
    }
    
    /*
     *  Find <results> tag
     */
    var node = xml.documentElement.firstChild;
    while (node != null && (node.nodeType != 1 || node.nodeName != 'results')) {
        node = node.nextSibling;
    }
    
    var wikiURL = null;
    var wikiSection = null;
    if (node != null) {
        wikiURL = node.getAttribute("wiki-url");
        wikiSection = node.getAttribute("wiki-section");
        
        node = node.firstChild;
    }
    
    var added = false;
    while (node != null) {
        if (node.nodeType == 1) {
            var bindings = { };
            var binding = node.firstChild;
            while (binding != null) {
                if (binding.nodeType == 1 && 
                    binding.firstChild != null && 
                    binding.firstChild.nodeType == 1 && 
                    binding.firstChild.firstChild != null && 
                    binding.firstChild.firstChild.nodeType == 3) {
                    bindings[binding.getAttribute('name')] = binding.firstChild.firstChild.nodeValue;
                }
                binding = binding.nextSibling;
            }
            
            if (bindings["start"] == null && bindings["date"] != null) {
                bindings["start"] = bindings["date"];
            }
            
            // instant event: default is true. Or use values from isDuration or durationEvent
            var instant = (bindings["isDuration"]    === null &&
                           bindings["durationEvent"] === null) ||
                          bindings["isDuration"] == "false" ||
                          bindings["durationEvent"] == "false";

            var evt = new Timeline.DefaultEventSource.Event({
                          id: bindings["id"],
                       start: parseDateTimeFunction(bindings["start"]),
                         end: parseDateTimeFunction(bindings["end"]),
                 latestStart: parseDateTimeFunction(bindings["latestStart"]),
                 earliestEnd: parseDateTimeFunction(bindings["earliestEnd"]),
                     instant: instant, // instant
                        text: bindings["title"], // text
                 description: bindings["description"],
                       image: this._resolveRelativeURL(bindings["image"], base),
                        link: this._resolveRelativeURL(bindings["link"] , base),
                        icon: this._resolveRelativeURL(bindings["icon"] , base),
                       color: bindings["color"],                                
                   textColor: bindings["textColor"],
                   hoverText: bindings["hoverText"],
                     caption: bindings["caption"],
                   classname: bindings["classname"],
                   tapeImage: bindings["tapeImage"],
                  tapeRepeat: bindings["tapeRepeat"],
                     eventID: bindings["eventID"],
                    trackNum: bindings["trackNum"]
            });
            evt._bindings = bindings;
            evt.getProperty = function(name) {
                return this._bindings[name];
            };
            evt.setWikiInfo(wikiURL, wikiSection);
            
            this._events.add(evt);
            added = true;
        }
        node = node.nextSibling;
    }

    if (added) {
        this._fire("onAddMany", []);
    }
};

Timeline.DefaultEventSource.prototype.add = function(evt) {
    this._events.add(evt);
    this._fire("onAddOne", [evt]);
};

Timeline.DefaultEventSource.prototype.addMany = function(events) {
    for (var i = 0; i < events.length; i++) {
        this._events.add(events[i]);
    }
    this._fire("onAddMany", []);
};

Timeline.DefaultEventSource.prototype.clear = function() {
    this._events.removeAll();
    this._fire("onClear", []);
};

Timeline.DefaultEventSource.prototype.getEvent = function(id) {
    return this._events.getEvent(id);
};

Timeline.DefaultEventSource.prototype.getEventIterator = function(startDate, endDate) {
    return this._events.getIterator(startDate, endDate);
};

Timeline.DefaultEventSource.prototype.getEventReverseIterator = function(startDate, endDate) {
    return this._events.getReverseIterator(startDate, endDate);
};

Timeline.DefaultEventSource.prototype.getAllEventIterator = function() {
    return this._events.getAllIterator();
};

Timeline.DefaultEventSource.prototype.getCount = function() {
    return this._events.getCount();
};

Timeline.DefaultEventSource.prototype.getEarliestDate = function() {
    return this._events.getEarliestDate();
};

Timeline.DefaultEventSource.prototype.getLatestDate = function() {
    return this._events.getLatestDate();
};

Timeline.DefaultEventSource.prototype._fire = function(handlerName, args) {
    for (var i = 0; i < this._listeners.length; i++) {
        var listener = this._listeners[i];
        if (handlerName in listener) {
            try {
                listener[handlerName].apply(listener, args);
            } catch (e) {
                SimileAjax.Debug.exception(e);
            }
        }
    }
};

Timeline.DefaultEventSource.prototype._getBaseURL = function(url) {
    if (url.indexOf("://") < 0) {
        var url2 = this._getBaseURL(document.location.href);
        if (url.substr(0,1) == "/") {
            url = url2.substr(0, url2.indexOf("/", url2.indexOf("://") + 3)) + url;
        } else {
            url = url2 + url;
        }
    }
    
    var i = url.lastIndexOf("/");
    if (i < 0) {
        return "";
    } else {
        return url.substr(0, i+1);
    }
};

Timeline.DefaultEventSource.prototype._resolveRelativeURL = function(url, base) {
    if (url == null || url == "") {
        return url;
    } else if (url.indexOf("://") > 0) {
        return url;
    } else if (url.substr(0,1) == "/") {
        return base.substr(0, base.indexOf("/", base.indexOf("://") + 3)) + url;
    } else {
        return base + url;
    }
};


Timeline.DefaultEventSource.Event = function(args) {
  //
  // Attention developers!
  // If you add a new event attribute, please be sure to add it to
  // all three load functions: loadXML, loadSPARCL, loadJSON. 
  // Thanks!
  //
  // args is a hash/object. It supports the following keys. Most are optional
  //   id            -- an internal id. Really shouldn't be used by events.
  //                    Timeline library clients should use eventID
  //   eventID       -- For use by library client when writing custom painters or
  //                    custom fillInfoBubble    
  //   start
  //   end
  //   latestStart
  //   earliestEnd
  //   instant      -- boolean. Controls precise/non-precise logic & duration/instant issues
  //   text         -- event source attribute 'title' -- used as the label on Timelines and in bubbles.
  //   description  -- used in bubbles   
  //   image        -- used in bubbles
  //   link         -- used in bubbles
  //   icon         -- on the Timeline
  //   color        -- Timeline label and tape color
  //   textColor    -- Timeline label color, overrides color attribute
  //   hoverText    -- deprecated, here for backwards compatibility.
  //                   Superceeded by caption
  //   caption      -- tooltip-like caption on the Timeline. Uses HTML title attribute 
  //   classname    -- used to set classname in Timeline. Enables better CSS selector rules
  //   tapeImage    -- background image of the duration event's tape div on the Timeline
  //   tapeRepeat   -- repeat attribute for tapeImage. {repeat | repeat-x | repeat-y }
       
  function cleanArg(arg) {
      // clean up an arg
      return (args[arg] != null && args[arg] != "") ? args[arg] : null;
  }
   
  var id = args.id ? args.id.trim() : "";
  this._id = id.length > 0 ? id : Timeline.EventUtils.getNewEventID();
  
  this._instant = args.instant || (args.end == null);
  
  this._start = args.start;
  this._end = (args.end != null) ? args.end : args.start;
  
  this._latestStart = (args.latestStart != null) ?
                       args.latestStart : (args.instant ? this._end : this._start);
  this._earliestEnd = (args.earliestEnd != null) ? args.earliestEnd : this._end;
  
  // check sanity of dates since incorrect dates will later cause calculation errors
  // when painting
  var err=[];
  if (this._start > this._latestStart) {
          this._latestStart = this._start;
          err.push("start is > latestStart");}
  if (this._start > this._earliestEnd) {
          this._earliestEnd = this._latestStart;
          err.push("start is > earliestEnd");}
  if (this._start > this._end) {
          this._end = this._earliestEnd;
          err.push("start is > end");}
  if (this._latestStart > this._earliestEnd) {
          this._earliestEnd = this._latestStart;
          err.push("latestStart is > earliestEnd");}
  if (this._latestStart > this._end) {
          this._end = this._earliestEnd;
          err.push("latestStart is > end");}
  if (this._earliestEnd > this._end) {
          this._end = this._earliestEnd;
          err.push("earliestEnd is > end");}  
  
  this._eventID = cleanArg('eventID');
  this._text = (args.text != null) ? SimileAjax.HTML.deEntify(args.text) : ""; // Change blank titles to ""
  if (err.length > 0) {
          this._text += " PROBLEM: " + err.join(", ");
  }

  this._description = SimileAjax.HTML.deEntify(args.description);
  this._image = cleanArg('image');
  this._link =  cleanArg('link');
  this._title = cleanArg('hoverText');
  this._title = cleanArg('caption');
  
  this._icon = cleanArg('icon');
  this._color = cleanArg('color');      
  this._textColor = cleanArg('textColor');
  this._classname = cleanArg('classname');
  this._tapeImage = cleanArg('tapeImage');
  this._tapeRepeat = cleanArg('tapeRepeat');
  this._trackNum = cleanArg('trackNum');
  if (this._trackNum != null) {
      this._trackNum = parseInt(this._trackNum);
  }
    
  this._wikiURL = null;
  this._wikiSection = null;
};

Timeline.DefaultEventSource.Event.prototype = {
    getID:          function() { return this._id; },
    
    isInstant:      function() { return this._instant; },
    isImprecise:    function() { return this._start != this._latestStart || this._end != this._earliestEnd; },
    
    getStart:       function() { return this._start; },
    getEnd:         function() { return this._end; },
    getLatestStart: function() { return this._latestStart; },
    getEarliestEnd: function() { return this._earliestEnd; },
    
    getEventID:     function() { return this._eventID; },
    getText:        function() { return this._text; }, // title
    getDescription: function() { return this._description; },
    getImage:       function() { return this._image; },
    getLink:        function() { return this._link; },
    
    getIcon:        function() { return this._icon; },
    getColor:       function() { return this._color; },
    getTextColor:   function() { return this._textColor; },
    getClassName:   function() { return this._classname; },
    getTapeImage:   function() { return this._tapeImage; },
    getTapeRepeat:  function() { return this._tapeRepeat; },
    getTrackNum:    function() { return this._trackNum; },
    
    getProperty:    function(name) { return null; },
    
    getWikiURL:     function() { return this._wikiURL; },
    getWikiSection: function() { return this._wikiSection; },
    setWikiInfo: function(wikiURL, wikiSection) {
        this._wikiURL = wikiURL;
        this._wikiSection = wikiSection;
    },
    
    fillDescription: function(elmt) {
        elmt.innerHTML = this._description;
    },
    fillWikiInfo: function(elmt) {
        // Many bubbles will not support a wiki link. 
        // 
        // Strategy: assume no wiki link. If we do have
        // enough parameters for one, then create it.
        elmt.style.display = "none"; // default
        
        if (this._wikiURL == null || this._wikiSection == null) {
          return; // EARLY RETURN
        }

        // create the wikiID from the property or from the event text (the title)      
        var wikiID = this.getProperty("wikiID");
        if (wikiID == null || wikiID.length == 0) {
            wikiID = this.getText(); // use the title as the backup wiki id
        }
        
        if (wikiID == null || wikiID.length == 0) {
          return; // No wikiID. Thus EARLY RETURN
        }
          
        // ready to go...
        elmt.style.display = "inline";
        wikiID = wikiID.replace(/\s/g, "_");
        var url = this._wikiURL + this._wikiSection.replace(/\s/g, "_") + "/" + wikiID;
        var a = document.createElement("a");
        a.href = url;
        a.target = "new";
        a.innerHTML = Timeline.strings[Timeline.clientLocale].wikiLinkLabel;
        
        elmt.appendChild(document.createTextNode("["));
        elmt.appendChild(a);
        elmt.appendChild(document.createTextNode("]"));
    },
    
    fillTime: function(elmt, labeller) {
        if (this._instant) {
            if (this.isImprecise()) {
                elmt.appendChild(elmt.ownerDocument.createTextNode(labeller.labelPrecise(this._start)));
                elmt.appendChild(elmt.ownerDocument.createElement("br"));
                elmt.appendChild(elmt.ownerDocument.createTextNode(labeller.labelPrecise(this._end)));
            } else {
                elmt.appendChild(elmt.ownerDocument.createTextNode(labeller.labelPrecise(this._start)));
            }
        } else {
            if (this.isImprecise()) {
                elmt.appendChild(elmt.ownerDocument.createTextNode(
                    labeller.labelPrecise(this._start) + " ~ " + labeller.labelPrecise(this._latestStart)));
                elmt.appendChild(elmt.ownerDocument.createElement("br"));
                elmt.appendChild(elmt.ownerDocument.createTextNode(
                    labeller.labelPrecise(this._earliestEnd) + " ~ " + labeller.labelPrecise(this._end)));
            } else {
                elmt.appendChild(elmt.ownerDocument.createTextNode(labeller.labelPrecise(this._start)));
                elmt.appendChild(elmt.ownerDocument.createElement("br"));
                elmt.appendChild(elmt.ownerDocument.createTextNode(labeller.labelPrecise(this._end)));
            }
        }
    },
    
    fillInfoBubble: function(elmt, theme, labeller) {
        var doc = elmt.ownerDocument;
        
        var title = this.getText();
        var link = this.getLink();
        var image = this.getImage();
        
        if (image != null) {
            var img = doc.createElement("img");
            img.src = image;
            
            theme.event.bubble.imageStyler(img);
            elmt.appendChild(img);
        }
        
        var divTitle = doc.createElement("div");
        var textTitle = doc.createTextNode(title);
        if (link != null) {
            var a = doc.createElement("a");
            a.href = link;
            a.appendChild(textTitle);
            divTitle.appendChild(a);
        } else {
            divTitle.appendChild(textTitle);
        }
        theme.event.bubble.titleStyler(divTitle);
        elmt.appendChild(divTitle);
        
        var divBody = doc.createElement("div");
        this.fillDescription(divBody);
        theme.event.bubble.bodyStyler(divBody);
        elmt.appendChild(divBody);
        
        var divTime = doc.createElement("div");
        this.fillTime(divTime, labeller);
        theme.event.bubble.timeStyler(divTime);
        elmt.appendChild(divTime);
        
        var divWiki = doc.createElement("div");
        this.fillWikiInfo(divWiki);
        theme.event.bubble.wikiStyler(divWiki);
        elmt.appendChild(divWiki);
    }
};



/*==================================================
 *  Classic Theme
 *==================================================
 */



Timeline.ClassicTheme = new Object();

Timeline.ClassicTheme.implementations = [];

Timeline.ClassicTheme.create = function(locale) {
    if (locale == null) {
        locale = Timeline.getDefaultLocale();
    }
    
    var f = Timeline.ClassicTheme.implementations[locale];
    if (f == null) {
        f = Timeline.ClassicTheme._Impl;
    }
    return new f();
};

Timeline.ClassicTheme._Impl = function() {
    this.firstDayOfWeek = 0; // Sunday
          
    // Note: Many styles previously set here are now set using CSS
    //       The comments indicate settings controlled by CSS, not
    //       lines to be un-commented.
    //
    //
    // Attributes autoWidth, autoWidthAnimationTime, timeline_start 
    // and timeline_stop must be set on the first band's theme.
    // The other attributes can be set differently for each 
    // band by using different themes for the bands.
    this.autoWidth = false; // Should the Timeline automatically grow itself, as
                            // needed when too many events for the available width
                            // are painted on the visible part of the Timeline?
    this.autoWidthAnimationTime = 500; // mSec
    this.timeline_start = null; // Setting a date, eg new Date(Date.UTC(2008,0,17,20,00,00,0)) will prevent the
                                // Timeline from being moved to anytime before the date.
    this.timeline_stop = null;  // Use for setting a maximum date. The Timeline will not be able 
                                // to be moved to anytime after this date.
    this.ether = {
        backgroundColors: [
        //    "#EEE",
        //    "#DDD",
        //    "#CCC",
        //    "#AAA"
        ],
     //   highlightColor:     "white",
        highlightOpacity:   50,
        interval: {
            line: {
                show:       true,
                opacity:    25
               // color:      "#aaa",
            },
            weekend: {
                opacity:    30
              //  color:      "#FFFFE0",
            },
            marker: {
                hAlign:     "Bottom",
                vAlign:     "Right"
                                        /*
                hBottomStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-bottom";
                },
                hBottomEmphasizedStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-bottom-emphasized";
                },
                hTopStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-top";
                },
                hTopEmphasizedStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-top-emphasized";
                },
                */
                                        
                    
               /*
                                  vRightStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-right";
                },
                vRightEmphasizedStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-right-emphasized";
                },
                vLeftStyler: function(elmt) {
                    elmt.className = "timeline-ether-marker-left";
                },
                vLeftEmphasizedStyler:function(elmt) {
                    elmt.className = "timeline-ether-marker-left-emphasized";
                }
                */
            }
        }
    };
    
    this.event = {
        track: {
                   height: 10, // px. You will need to change the track
                               //     height if you change the tape height.
                      gap:  2, // px. Gap between tracks
                   offset:  2, // px. top margin above tapes
          autoWidthMargin:  1.5
          /* autoWidthMargin is only used if autoWidth (see above) is true.
             The autoWidthMargin setting is used to set how close the bottom of the
             lowest track is to the edge of the band's div. The units are total track
             width (tape + label + gap). A min of 0.5 is suggested. Use this setting to
             move the bottom track's tapes above the axis markers, if needed for your
             Timeline.
          */
        },
        overviewTrack: {
                  offset: 20, // px -- top margin above tapes 
              tickHeight:  6, // px
                  height:  2, // px
                     gap:  1, // px
         autoWidthMargin:  5 // This attribute is only used if autoWidth (see above) is true.
        },
        tape: {
            height:         4 // px. For thicker tapes, remember to change track height too.
        },
        instant: {
                           icon: Timeline.urlPrefix + "images/dull-blue-circle.png", 
                                 // default icon. Icon can also be specified per event
                      iconWidth: 10,
                     iconHeight: 10,
               impreciseOpacity: 20, // opacity of the tape when durationEvent is false
            impreciseIconMargin: 3   // A tape and an icon are painted for imprecise instant
                                     // events. This attribute is the margin between the
                                     // bottom of the tape and the top of the icon in that
                                     // case.
    //        color:             "#58A0DC",
    //        impreciseColor:    "#58A0DC",
        },
        duration: {
            impreciseOpacity: 20 // tape opacity for imprecise part of duration events
      //      color:            "#58A0DC",
      //      impreciseColor:   "#58A0DC",
        },
        label: {
            backgroundOpacity: 50,// only used in detailed painter
               offsetFromLine:  3 // px left margin amount from icon's right edge
      //      backgroundColor:   "white",
      //      lineColor:         "#58A0DC",
        },
        highlightColors: [  // Use with getEventPainter().setHighlightMatcher
                            // See webapp/examples/examples.js
            "#FFFF00",
            "#FFC000",
            "#FF0000",
            "#0000FF"
        ],
        highlightLabelBackground: false, // When highlighting an event, also change the event's label background?
        bubble: {
            width:          250, // px
            maxHeight:        0, // px Maximum height of bubbles. 0 means no max height. 
                                 // scrollbar will be added for taller bubbles
            titleStyler: function(elmt) {
                elmt.className = "timeline-event-bubble-title";
            },
            bodyStyler: function(elmt) {
                elmt.className = "timeline-event-bubble-body";
            },
            imageStyler: function(elmt) {
                elmt.className = "timeline-event-bubble-image";
            },
            wikiStyler: function(elmt) {
                elmt.className = "timeline-event-bubble-wiki";
            },
            timeStyler: function(elmt) {
                elmt.className = "timeline-event-bubble-time";
            }
        }
    };
    
    this.mouseWheel = 'scroll'; // 'default', 'zoom', 'scroll'
};
/*=================================================
 *
 * Coding standards:
 *
 * We aim towards Douglas Crockford's Javascript conventions.
 * See:  http://javascript.crockford.com/code.html
 * See also: http://www.crockford.com/javascript/javascript.html
 *
 * That said, this JS code was written before some recent JS
 * support libraries became widely used or available.
 * In particular, the _ character is used to indicate a class function or
 * variable that should be considered private to the class.
 *
 * The code mostly uses accessor methods for getting/setting the private
 * class variables.
 *
 * Over time, we'd like to formalize the convention by using support libraries
 * which enforce privacy in objects.
 *
 * We also want to use jslint:  http://www.jslint.com/
 *
 *
 *==================================================
 */



/*==================================================
 *  Timeline VERSION     
 *==================================================
 */
// Note: version is also stored in the build.xml file
Timeline.version = '2.3.0';  // use format 'pre 1.2.3' for trunk versions 
Timeline.ajax_lib_version = SimileAjax.version;  // Waiting for version string method from Ajax library
Timeline.display_version = Timeline.version + ' (with Ajax lib ' + Timeline.ajax_lib_version + ')';
 // cf method Timeline.writeVersion

/*==================================================
 *  Timeline
 *==================================================
 */
Timeline.strings = {}; // localization string tables
Timeline.HORIZONTAL = 0;
Timeline.VERTICAL = 1;
Timeline._defaultTheme = null;

Timeline.getDefaultLocale = function() {
    return Timeline.clientLocale;
};

Timeline.create = function(elmt, bandInfos, orientation, unit) {
    if (Timeline.timelines == null) {
        Timeline.timelines = [];
        // Timeline.timelines array can have null members--Timelines that
        // once existed on the page, but were later disposed of.
    }
    
    var timelineID = Timeline.timelines.length;
    Timeline.timelines[timelineID] = null; // placeholder until we have the object
    var new_tl = new Timeline._Impl(elmt, bandInfos, orientation, unit,
      timelineID);
    Timeline.timelines[timelineID] = new_tl;    
    return new_tl;
};

Timeline.createBandInfo = function(params) {
    var theme = ("theme" in params) ? params.theme : Timeline.getDefaultTheme();
    
    var eventSource = ("eventSource" in params) ? params.eventSource : null;
    
    var ether = new Timeline.LinearEther({ 
        centersOn:          ("date" in params) ? params.date : new Date(),
        interval:           SimileAjax.DateTime.gregorianUnitLengths[params.intervalUnit],
        pixelsPerInterval:  params.intervalPixels,
        theme:              theme
    });
    
    var etherPainter = new Timeline.GregorianEtherPainter({
        unit:       params.intervalUnit, 
        multiple:   ("multiple" in params) ? params.multiple : 1,
        theme:      theme,
        align:      ("align" in params) ? params.align : undefined
    });
    
    var eventPainterParams = {
        showText:   ("showEventText" in params) ? params.showEventText : true,
        theme:      theme
    };
    // pass in custom parameters for the event painter
    if ("eventPainterParams" in params) {
        for (var prop in params.eventPainterParams) {
            eventPainterParams[prop] = params.eventPainterParams[prop];
        }
    }
    
    if ("trackHeight" in params) {
        eventPainterParams.trackHeight = params.trackHeight;
    }
    if ("trackGap" in params) {
        eventPainterParams.trackGap = params.trackGap;
    }
    
    var layout = ("overview" in params && params.overview) ? "overview" : ("layout" in params ? params.layout : "original");
    var eventPainter;
    if ("eventPainter" in params) {
        eventPainter = new params.eventPainter(eventPainterParams);
    } else {
        switch (layout) {
            case "overview" :
                eventPainter = new Timeline.OverviewEventPainter(eventPainterParams);
                break;
            case "detailed" :
                eventPainter = new Timeline.DetailedEventPainter(eventPainterParams);
                break;
            default:
                eventPainter = new Timeline.OriginalEventPainter(eventPainterParams);
        }
    }
    
    return {   
        width:          params.width,
        eventSource:    eventSource,
        timeZone:       ("timeZone" in params) ? params.timeZone : 0,
        ether:          ether,
        etherPainter:   etherPainter,
        eventPainter:   eventPainter,
        theme:          theme,
        zoomIndex:      ("zoomIndex" in params) ? params.zoomIndex : 0,
        zoomSteps:      ("zoomSteps" in params) ? params.zoomSteps : null
    };
};

Timeline.createHotZoneBandInfo = function(params) {
    var theme = ("theme" in params) ? params.theme : Timeline.getDefaultTheme();
    
    var eventSource = ("eventSource" in params) ? params.eventSource : null;
    
    var ether = new Timeline.HotZoneEther({ 
        centersOn:          ("date" in params) ? params.date : new Date(),
        interval:           SimileAjax.DateTime.gregorianUnitLengths[params.intervalUnit],
        pixelsPerInterval:  params.intervalPixels,
        zones:              params.zones,
        theme:              theme
    });
    
    var etherPainter = new Timeline.HotZoneGregorianEtherPainter({
        unit:       params.intervalUnit, 
        zones:      params.zones,
        theme:      theme,
        align:      ("align" in params) ? params.align : undefined
    });
    
    var eventPainterParams = {
        showText:   ("showEventText" in params) ? params.showEventText : true,
        theme:      theme
    };
    // pass in custom parameters for the event painter
    if ("eventPainterParams" in params) {
        for (var prop in params.eventPainterParams) {
            eventPainterParams[prop] = params.eventPainterParams[prop];
        }
    }
    if ("trackHeight" in params) {
        eventPainterParams.trackHeight = params.trackHeight;
    }
    if ("trackGap" in params) {
        eventPainterParams.trackGap = params.trackGap;
    }
    
    var layout = ("overview" in params && params.overview) ? "overview" : ("layout" in params ? params.layout : "original");
    var eventPainter;
    if ("eventPainter" in params) {
        eventPainter = new params.eventPainter(eventPainterParams);
    } else {
        switch (layout) {
            case "overview" :
                eventPainter = new Timeline.OverviewEventPainter(eventPainterParams);
                break;
            case "detailed" :
                eventPainter = new Timeline.DetailedEventPainter(eventPainterParams);
                break;
            default:
                eventPainter = new Timeline.OriginalEventPainter(eventPainterParams);
        }
    }   
    return {   
        width:          params.width,
        eventSource:    eventSource,
        timeZone:       ("timeZone" in params) ? params.timeZone : 0,
        ether:          ether,
        etherPainter:   etherPainter,
        eventPainter:   eventPainter,
        theme:          theme,
        zoomIndex:      ("zoomIndex" in params) ? params.zoomIndex : 0,
        zoomSteps:      ("zoomSteps" in params) ? params.zoomSteps : null
    };
};

Timeline.getDefaultTheme = function() {
    if (Timeline._defaultTheme == null) {
        Timeline._defaultTheme = Timeline.ClassicTheme.create(Timeline.getDefaultLocale());
    }
    return Timeline._defaultTheme;
};

Timeline.setDefaultTheme = function(theme) {
    Timeline._defaultTheme = theme;
};

Timeline.loadXML = function(url, f) {
    var fError = function(statusText, status, xmlhttp) {
        alert("Failed to load data xml from " + url + "\n" + statusText);
    };
    var fDone = function(xmlhttp) {
        var xml = xmlhttp.responseXML;
        if (!xml.documentElement && xmlhttp.responseStream) {
            xml.load(xmlhttp.responseStream);
        } 
        f(xml, url);
    };
    SimileAjax.XmlHttp.get(url, fError, fDone);
};


Timeline.loadJSON = function(url, f) {
    var fError = function(statusText, status, xmlhttp) {
        alert("Failed to load json data from " + url + "\n" + statusText);
    };
    var fDone = function(xmlhttp) {
        f(eval('(' + xmlhttp.responseText + ')'), url);
    };
    SimileAjax.XmlHttp.get(url, fError, fDone);
};

Timeline.getTimelineFromID = function(timelineID) {
    return Timeline.timelines[timelineID];
};

// Write the current Timeline version as the contents of element with id el_id
Timeline.writeVersion = function(el_id) {
  document.getElementById(el_id).innerHTML = this.display_version;    
};



/*==================================================
 *  Timeline Implementation object
 *==================================================
 */
Timeline._Impl = function(elmt, bandInfos, orientation, unit, timelineID) {
    SimileAjax.WindowManager.initialize();
    
    this._containerDiv = elmt;
    
    this._bandInfos = bandInfos;
    this._orientation = orientation == null ? Timeline.HORIZONTAL : orientation;
    this._unit = (unit != null) ? unit : SimileAjax.NativeDateUnit;
    this._starting = true; // is the Timeline being created? Used by autoWidth
                           // functions
    this._autoResizing = false;
    
    // autoWidth is a "public" property of the Timeline object
    this.autoWidth = bandInfos && bandInfos[0] && bandInfos[0].theme && 
                     bandInfos[0].theme.autoWidth;
    this.autoWidthAnimationTime = bandInfos && bandInfos[0] && bandInfos[0].theme && 
                     bandInfos[0].theme.autoWidthAnimationTime;
    this.timelineID = timelineID; // also public attribute
    this.timeline_start = bandInfos && bandInfos[0] && bandInfos[0].theme && 
                     bandInfos[0].theme.timeline_start;
    this.timeline_stop  = bandInfos && bandInfos[0] && bandInfos[0].theme && 
                     bandInfos[0].theme.timeline_stop;
    this.timeline_at_start = false; // already at start or stop? Then won't 
    this.timeline_at_stop = false;  // try to move further in the wrong direction
    
    this._initialize();
};

//
// Public functions used by client sw
//
Timeline._Impl.prototype.dispose = function() {
    for (var i = 0; i < this._bands.length; i++) {
        this._bands[i].dispose();
    }
    this._bands = null;
    this._bandInfos = null;
    this._containerDiv.innerHTML = "";
    // remove from array of Timelines
    Timeline.timelines[this.timelineID] = null;
};

Timeline._Impl.prototype.getBandCount = function() {
    return this._bands.length;
};

Timeline._Impl.prototype.getBand = function(index) {
    return this._bands[index];
};

Timeline._Impl.prototype.finishedEventLoading = function() {
    // Called by client after events have been loaded into Timeline
    // Only used if the client has set autoWidth
    // Sets width to Timeline's requested amount and will shrink down the div if
    // need be.
    this._autoWidthCheck(true);
    this._starting = false;
};

Timeline._Impl.prototype.layout = function() {
    // called by client when browser is resized
    this._autoWidthCheck(true);
    this._distributeWidths();
};

Timeline._Impl.prototype.paint = function() {
    for (var i = 0; i < this._bands.length; i++) {
        this._bands[i].paint();
    }
};

Timeline._Impl.prototype.getDocument = function() {
    return this._containerDiv.ownerDocument;
};

Timeline._Impl.prototype.addDiv = function(div) {
    this._containerDiv.appendChild(div);
};

Timeline._Impl.prototype.removeDiv = function(div) {
    this._containerDiv.removeChild(div);
};

Timeline._Impl.prototype.isHorizontal = function() {
    return this._orientation == Timeline.HORIZONTAL;
};

Timeline._Impl.prototype.isVertical = function() {
    return this._orientation == Timeline.VERTICAL;
};

Timeline._Impl.prototype.getPixelLength = function() {
    return this._orientation == Timeline.HORIZONTAL ? 
        this._containerDiv.offsetWidth : this._containerDiv.offsetHeight;
};

Timeline._Impl.prototype.getPixelWidth = function() {
    return this._orientation == Timeline.VERTICAL ? 
        this._containerDiv.offsetWidth : this._containerDiv.offsetHeight;
};

Timeline._Impl.prototype.getUnit = function() {
    return this._unit;
};

Timeline._Impl.prototype.getWidthStyle = function() {
    // which element.style attribute should be changed to affect Timeline's "width"
    return this._orientation == Timeline.HORIZONTAL ? 'height' : 'width';
};

Timeline._Impl.prototype.loadXML = function(url, f) {
    var tl = this;
    
    
    var fError = function(statusText, status, xmlhttp) {
        alert("Failed to load data xml from " + url + "\n" + statusText);
        tl.hideLoadingMessage();
    };
    var fDone = function(xmlhttp) {
        try {
            var xml = xmlhttp.responseXML;
            if (!xml.documentElement && xmlhttp.responseStream) {
                xml.load(xmlhttp.responseStream);
            } 
            f(xml, url);
        } finally {
            tl.hideLoadingMessage();
        }
    };
    
    this.showLoadingMessage();
    window.setTimeout(function() { SimileAjax.XmlHttp.get(url, fError, fDone); }, 0);
};

Timeline._Impl.prototype.loadJSON = function(url, f) {
    var tl = this;
    
    var fError = function(statusText, status, xmlhttp) {
        alert("Failed to load json data from " + url + "\n" + statusText);
        tl.hideLoadingMessage();
    };
    var fDone = function(xmlhttp) {
        try {
            f(eval('(' + xmlhttp.responseText + ')'), url);
        } finally {
            tl.hideLoadingMessage();
        }
    };
    
    this.showLoadingMessage();
    window.setTimeout(function() { SimileAjax.XmlHttp.get(url, fError, fDone); }, 0);
};


//
// Private functions used by Timeline object functions
//

Timeline._Impl.prototype._autoWidthScrollListener = function(band) {	
    band.getTimeline()._autoWidthCheck(false);
};

// called to re-calculate auto width and adjust the overall Timeline div if needed
Timeline._Impl.prototype._autoWidthCheck = function(okToShrink) {	
    var timeline = this; // this Timeline
    var immediateChange = timeline._starting;
    var newWidth = 0;
    
    function changeTimelineWidth() {        
        var widthStyle = timeline.getWidthStyle();
        if (immediateChange) {
            timeline._containerDiv.style[widthStyle] = newWidth + 'px';
        } else {
        	  // animate change
        	  timeline._autoResizing = true;
        	  var animateParam ={};
        	  animateParam[widthStyle] = newWidth + 'px';
        	  
        	  SimileAjax.jQuery(timeline._containerDiv).animate(
        	      animateParam, timeline.autoWidthAnimationTime,
        	      'linear', function(){timeline._autoResizing = false;});
        }
    }
        	
    function checkTimelineWidth() {
        var targetWidth = 0; // the new desired width
        var currentWidth = timeline.getPixelWidth();
        
        if (timeline._autoResizing) {
        	return; // early return
        }

        // compute targetWidth
        for (var i = 0; i < timeline._bands.length; i++) {
            timeline._bands[i].checkAutoWidth();
            targetWidth += timeline._bandInfos[i].width;
        }
        
        if (targetWidth > currentWidth || okToShrink) {
            // yes, let's change the size
            newWidth = targetWidth;
            changeTimelineWidth();
            timeline._distributeWidths();
        }
    }
    
    // function's mainline
    if (!timeline.autoWidth) {
        return; // early return
    }

    checkTimelineWidth();
};

Timeline._Impl.prototype._initialize = function() {
    var containerDiv = this._containerDiv;
    var doc = containerDiv.ownerDocument;
    
    containerDiv.className = 
        containerDiv.className.split(" ").concat("timeline-container").join(" ");
    
	/*
	 * Set css-class on container div that will define orientation
	 */
	var orientation = (this.isHorizontal()) ? 'horizontal' : 'vertical'
	containerDiv.className +=' timeline-'+orientation;
	
	
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    
    /*
     *  inserting copyright and link to simile
     */
    var elmtCopyright = SimileAjax.Graphics.createTranslucentImage(Timeline.urlPrefix + (this.isHorizontal() ? "images/copyright-vertical.png" : "images/copyright.png"));
    elmtCopyright.className = "timeline-copyright";
    elmtCopyright.title = "Timeline copyright SIMILE - www.code.google.com/p/simile-widgets/";
    SimileAjax.DOM.registerEvent(elmtCopyright, "click", function() { window.location = "http://code.google.com/p/simile-widgets/"; });
    containerDiv.appendChild(elmtCopyright);
    
    /*
     *  creating bands
     */
    this._bands = [];
    for (var i = 0; i < this._bandInfos.length; i++) {
        var band = new Timeline._Band(this, this._bandInfos[i], i);
        this._bands.push(band);
    }
    this._distributeWidths();
    
    /*
     *  sync'ing bands
     */
    for (var i = 0; i < this._bandInfos.length; i++) {
        var bandInfo = this._bandInfos[i];
        if ("syncWith" in bandInfo) {
            this._bands[i].setSyncWithBand(
                this._bands[bandInfo.syncWith], 
                ("highlight" in bandInfo) ? bandInfo.highlight : false
            );
        }
    }
    
    
    if (this.autoWidth) {
        for (var i = 0; i < this._bands.length; i++) {
            this._bands[i].addOnScrollListener(this._autoWidthScrollListener);
        }
    }
    
    
    /*
     *  creating loading UI
     */
    var message = SimileAjax.Graphics.createMessageBubble(doc);
    message.containerDiv.className = "timeline-message-container";
    containerDiv.appendChild(message.containerDiv);
    
    message.contentDiv.className = "timeline-message";
    message.contentDiv.innerHTML = "<img src='" + Timeline.urlPrefix + "images/progress-running.gif' /> Loading...";
    
    this.showLoadingMessage = function() { message.containerDiv.style.display = "block"; };
    this.hideLoadingMessage = function() { message.containerDiv.style.display = "none"; };
};

Timeline._Impl.prototype._distributeWidths = function() {
    var length = this.getPixelLength();
    var width = this.getPixelWidth();
    var cumulativeWidth = 0;
    
    for (var i = 0; i < this._bands.length; i++) {
        var band = this._bands[i];
        var bandInfos = this._bandInfos[i];
        var widthString = bandInfos.width;
        var bandWidth;
        
        if (typeof widthString == 'string') {
          var x =  widthString.indexOf("%");
          if (x > 0) {
              var percent = parseInt(widthString.substr(0, x));
              bandWidth = Math.round(percent * width / 100);
          } else {
              bandWidth = parseInt(widthString);
          }
        } else {
        	// was given an integer
        	bandWidth = widthString;
        }
        	 
        band.setBandShiftAndWidth(cumulativeWidth, bandWidth);
        band.setViewLength(length);
        
        cumulativeWidth += bandWidth;
    }
};

Timeline._Impl.prototype.shiftOK = function(index, shift) {
    // Returns true if the proposed shift is ok
    //
    // Positive shift means going back in time
    var going_back = shift > 0,
        going_forward = shift < 0;
    
    // Is there an edge?
    if ((going_back    && this.timeline_start == null) ||
        (going_forward && this.timeline_stop  == null) ||
        (shift == 0)) {
        return (true);  // early return
    }
    
    // If any of the bands has noted that it is changing the others,
    // then this shift is a secondary shift in reaction to the real shift,
    // which already happened. In such cases, ignore it. (The issue is
    // that a positive original shift can cause a negative secondary shift, 
    // as the bands adjust.)
    var secondary_shift = false;
    for (var i = 0; i < this._bands.length && !secondary_shift; i++) {
       secondary_shift = this._bands[i].busy();
    }
    if (secondary_shift) {
        return(true); // early return
    }
    
    // If we are already at an edge, then don't even think about going any further
    if ((going_back    && this.timeline_at_start) ||
        (going_forward && this.timeline_at_stop)) {
        return (false);  // early return
    }
    
    // Need to check all the bands
    var ok = false; // return value
    // If any of the bands will be or are showing an ok date, then let the shift proceed.
    for (var i = 0; i < this._bands.length && !ok; i++) {
       var band = this._bands[i];
       if (going_back) {
           ok = (i == index ? band.getMinVisibleDateAfterDelta(shift) : band.getMinVisibleDate())
                >= this.timeline_start;
       } else {
           ok = (i == index ? band.getMaxVisibleDateAfterDelta(shift) : band.getMaxVisibleDate())
                <= this.timeline_stop;
       }	
    }
    
    // process results
    if (going_back) {
       this.timeline_at_start = !ok;
       this.timeline_at_stop = false;
    } else {
       this.timeline_at_stop = !ok;
       this.timeline_at_start = false;
    }
    // This is where you could have an effect once per hitting an
    // edge of the Timeline. Eg jitter the Timeline
    //if (!ok) {
        //alert(going_back ? "At beginning" : "At end");
    //}
    return (ok);
};

Timeline._Impl.prototype.zoom = function (zoomIn, x, y, target) {
  var matcher = new RegExp("^timeline-band-([0-9]+)$");
  var bandIndex = null;
  
  var result = matcher.exec(target.id);
  if (result) {
    bandIndex = parseInt(result[1]);
  }

  if (bandIndex != null) {
    this._bands[bandIndex].zoom(zoomIn, x, y, target);
  }   

  this.paint();
};


/*==================================================
 *  Default Unit
 *==================================================
 */

Timeline.NativeDateUnit = new Object();

Timeline.NativeDateUnit.createLabeller = function(locale, timeZone) {
    return new Timeline.GregorianDateLabeller(locale, timeZone);
};

Timeline.NativeDateUnit.makeDefaultValue = function() {
    return new Date();
};

Timeline.NativeDateUnit.cloneValue = function(v) {
    return new Date(v.getTime());
};

Timeline.NativeDateUnit.getParser = function(format) {
    if (typeof format == "string") {
        format = format.toLowerCase();
    }
    return (format == "iso8601" || format == "iso 8601") ?
        Timeline.DateTime.parseIso8601DateTime : 
        Timeline.DateTime.parseGregorianDateTime;
};

Timeline.NativeDateUnit.parseFromObject = function(o) {
    return Timeline.DateTime.parseGregorianDateTime(o);
};

Timeline.NativeDateUnit.toNumber = function(v) {
    return v.getTime();
};

Timeline.NativeDateUnit.fromNumber = function(n) {
    return new Date(n);
};

Timeline.NativeDateUnit.compare = function(v1, v2) {
    var n1, n2;
    if (typeof v1 == "object") {
        n1 = v1.getTime();
    } else {
        n1 = Number(v1);
    }
    if (typeof v2 == "object") {
        n2 = v2.getTime();
    } else {
        n2 = Number(v2);
    }
    
    return n1 - n2;
};

Timeline.NativeDateUnit.earlier = function(v1, v2) {
    return Timeline.NativeDateUnit.compare(v1, v2) < 0 ? v1 : v2;
};

Timeline.NativeDateUnit.later = function(v1, v2) {
    return Timeline.NativeDateUnit.compare(v1, v2) > 0 ? v1 : v2;
};

Timeline.NativeDateUnit.change = function(v, n) {
    return new Date(v.getTime() + n);
};

