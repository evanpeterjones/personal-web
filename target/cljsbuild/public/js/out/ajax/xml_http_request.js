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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39702,handler){
var map__39703 = p__39702;
var map__39703__$1 = (((((!((map__39703 == null))))?(((((map__39703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39703):map__39703);
var uri = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__39703__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__39701_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__39701_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___39721 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___39721)){
var response_type_39722 = temp__5735__auto___39721;
(this$__$1.responseType = cljs.core.name.call(null,response_type_39722));
} else {
}

var seq__39705_39723 = cljs.core.seq.call(null,headers);
var chunk__39706_39724 = null;
var count__39707_39725 = (0);
var i__39708_39726 = (0);
while(true){
if((i__39708_39726 < count__39707_39725)){
var vec__39715_39727 = cljs.core._nth.call(null,chunk__39706_39724,i__39708_39726);
var k_39728 = cljs.core.nth.call(null,vec__39715_39727,(0),null);
var v_39729 = cljs.core.nth.call(null,vec__39715_39727,(1),null);
this$__$1.setRequestHeader(k_39728,v_39729);


var G__39730 = seq__39705_39723;
var G__39731 = chunk__39706_39724;
var G__39732 = count__39707_39725;
var G__39733 = (i__39708_39726 + (1));
seq__39705_39723 = G__39730;
chunk__39706_39724 = G__39731;
count__39707_39725 = G__39732;
i__39708_39726 = G__39733;
continue;
} else {
var temp__5735__auto___39734 = cljs.core.seq.call(null,seq__39705_39723);
if(temp__5735__auto___39734){
var seq__39705_39735__$1 = temp__5735__auto___39734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39705_39735__$1)){
var c__4556__auto___39736 = cljs.core.chunk_first.call(null,seq__39705_39735__$1);
var G__39737 = cljs.core.chunk_rest.call(null,seq__39705_39735__$1);
var G__39738 = c__4556__auto___39736;
var G__39739 = cljs.core.count.call(null,c__4556__auto___39736);
var G__39740 = (0);
seq__39705_39723 = G__39737;
chunk__39706_39724 = G__39738;
count__39707_39725 = G__39739;
i__39708_39726 = G__39740;
continue;
} else {
var vec__39718_39741 = cljs.core.first.call(null,seq__39705_39735__$1);
var k_39742 = cljs.core.nth.call(null,vec__39718_39741,(0),null);
var v_39743 = cljs.core.nth.call(null,vec__39718_39741,(1),null);
this$__$1.setRequestHeader(k_39742,v_39743);


var G__39744 = cljs.core.next.call(null,seq__39705_39735__$1);
var G__39745 = null;
var G__39746 = (0);
var G__39747 = (0);
seq__39705_39723 = G__39744;
chunk__39706_39724 = G__39745;
count__39707_39725 = G__39746;
i__39708_39726 = G__39747;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1618065938622
