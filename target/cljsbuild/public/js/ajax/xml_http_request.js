// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__6760 = e.target.readyState;
var fexpr__6759 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__6759.cljs$core$IFn$_invoke$arity$1 ? fexpr__6759.cljs$core$IFn$_invoke$arity$1(G__6760) : fexpr__6759.call(null,G__6760));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6762,handler){
var map__6763 = p__6762;
var map__6763__$1 = (((((!((map__6763 == null))))?(((((map__6763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6763):map__6763);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6763__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6763__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__6761_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__6761_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___6781 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___6781)){
var response_type_6782 = temp__5735__auto___6781;
(this$__$1.responseType = cljs.core.name(response_type_6782));
} else {
}

var seq__6765_6783 = cljs.core.seq(headers);
var chunk__6766_6784 = null;
var count__6767_6785 = (0);
var i__6768_6786 = (0);
while(true){
if((i__6768_6786 < count__6767_6785)){
var vec__6775_6787 = chunk__6766_6784.cljs$core$IIndexed$_nth$arity$2(null,i__6768_6786);
var k_6788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6775_6787,(0),null);
var v_6789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6775_6787,(1),null);
this$__$1.setRequestHeader(k_6788,v_6789);


var G__6790 = seq__6765_6783;
var G__6791 = chunk__6766_6784;
var G__6792 = count__6767_6785;
var G__6793 = (i__6768_6786 + (1));
seq__6765_6783 = G__6790;
chunk__6766_6784 = G__6791;
count__6767_6785 = G__6792;
i__6768_6786 = G__6793;
continue;
} else {
var temp__5735__auto___6794 = cljs.core.seq(seq__6765_6783);
if(temp__5735__auto___6794){
var seq__6765_6795__$1 = temp__5735__auto___6794;
if(cljs.core.chunked_seq_QMARK_(seq__6765_6795__$1)){
var c__4556__auto___6796 = cljs.core.chunk_first(seq__6765_6795__$1);
var G__6797 = cljs.core.chunk_rest(seq__6765_6795__$1);
var G__6798 = c__4556__auto___6796;
var G__6799 = cljs.core.count(c__4556__auto___6796);
var G__6800 = (0);
seq__6765_6783 = G__6797;
chunk__6766_6784 = G__6798;
count__6767_6785 = G__6799;
i__6768_6786 = G__6800;
continue;
} else {
var vec__6778_6801 = cljs.core.first(seq__6765_6795__$1);
var k_6802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6778_6801,(0),null);
var v_6803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6778_6801,(1),null);
this$__$1.setRequestHeader(k_6802,v_6803);


var G__6804 = cljs.core.next(seq__6765_6795__$1);
var G__6805 = null;
var G__6806 = (0);
var G__6807 = (0);
seq__6765_6783 = G__6804;
chunk__6766_6784 = G__6805;
count__6767_6785 = G__6806;
i__6768_6786 = G__6807;
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
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
