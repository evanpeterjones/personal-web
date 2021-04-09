// Compiled by ClojureScript 1.10.773 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35464,handler){
var map__35465 = p__35464;
var map__35465__$1 = (((((!((map__35465 == null))))?(((((map__35465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35465):map__35465);
var uri = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__35465__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__35463_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__35463_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___35483 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___35483)){
var response_type_35484 = temp__5735__auto___35483;
(this$__$1.responseType = cljs.core.name.call(null,response_type_35484));
} else {
}

var seq__35467_35485 = cljs.core.seq.call(null,headers);
var chunk__35468_35486 = null;
var count__35469_35487 = (0);
var i__35470_35488 = (0);
while(true){
if((i__35470_35488 < count__35469_35487)){
var vec__35477_35489 = cljs.core._nth.call(null,chunk__35468_35486,i__35470_35488);
var k_35490 = cljs.core.nth.call(null,vec__35477_35489,(0),null);
var v_35491 = cljs.core.nth.call(null,vec__35477_35489,(1),null);
this$__$1.setRequestHeader(k_35490,v_35491);


var G__35492 = seq__35467_35485;
var G__35493 = chunk__35468_35486;
var G__35494 = count__35469_35487;
var G__35495 = (i__35470_35488 + (1));
seq__35467_35485 = G__35492;
chunk__35468_35486 = G__35493;
count__35469_35487 = G__35494;
i__35470_35488 = G__35495;
continue;
} else {
var temp__5735__auto___35496 = cljs.core.seq.call(null,seq__35467_35485);
if(temp__5735__auto___35496){
var seq__35467_35497__$1 = temp__5735__auto___35496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35467_35497__$1)){
var c__4556__auto___35498 = cljs.core.chunk_first.call(null,seq__35467_35497__$1);
var G__35499 = cljs.core.chunk_rest.call(null,seq__35467_35497__$1);
var G__35500 = c__4556__auto___35498;
var G__35501 = cljs.core.count.call(null,c__4556__auto___35498);
var G__35502 = (0);
seq__35467_35485 = G__35499;
chunk__35468_35486 = G__35500;
count__35469_35487 = G__35501;
i__35470_35488 = G__35502;
continue;
} else {
var vec__35480_35503 = cljs.core.first.call(null,seq__35467_35497__$1);
var k_35504 = cljs.core.nth.call(null,vec__35480_35503,(0),null);
var v_35505 = cljs.core.nth.call(null,vec__35480_35503,(1),null);
this$__$1.setRequestHeader(k_35504,v_35505);


var G__35506 = cljs.core.next.call(null,seq__35467_35497__$1);
var G__35507 = null;
var G__35508 = (0);
var G__35509 = (0);
seq__35467_35485 = G__35506;
chunk__35468_35486 = G__35507;
count__35469_35487 = G__35508;
i__35470_35488 = G__35509;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map?rel=1617925394276
