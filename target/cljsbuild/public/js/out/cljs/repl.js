// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42213){
var map__42214 = p__42213;
var map__42214__$1 = (((((!((map__42214 == null))))?(((((map__42214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42214):map__42214);
var m = map__42214__$1;
var n = cljs.core.get.call(null,map__42214__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42214__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42216_42248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42217_42249 = null;
var count__42218_42250 = (0);
var i__42219_42251 = (0);
while(true){
if((i__42219_42251 < count__42218_42250)){
var f_42252 = cljs.core._nth.call(null,chunk__42217_42249,i__42219_42251);
cljs.core.println.call(null,"  ",f_42252);


var G__42253 = seq__42216_42248;
var G__42254 = chunk__42217_42249;
var G__42255 = count__42218_42250;
var G__42256 = (i__42219_42251 + (1));
seq__42216_42248 = G__42253;
chunk__42217_42249 = G__42254;
count__42218_42250 = G__42255;
i__42219_42251 = G__42256;
continue;
} else {
var temp__5735__auto___42257 = cljs.core.seq.call(null,seq__42216_42248);
if(temp__5735__auto___42257){
var seq__42216_42258__$1 = temp__5735__auto___42257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42216_42258__$1)){
var c__4556__auto___42259 = cljs.core.chunk_first.call(null,seq__42216_42258__$1);
var G__42260 = cljs.core.chunk_rest.call(null,seq__42216_42258__$1);
var G__42261 = c__4556__auto___42259;
var G__42262 = cljs.core.count.call(null,c__4556__auto___42259);
var G__42263 = (0);
seq__42216_42248 = G__42260;
chunk__42217_42249 = G__42261;
count__42218_42250 = G__42262;
i__42219_42251 = G__42263;
continue;
} else {
var f_42264 = cljs.core.first.call(null,seq__42216_42258__$1);
cljs.core.println.call(null,"  ",f_42264);


var G__42265 = cljs.core.next.call(null,seq__42216_42258__$1);
var G__42266 = null;
var G__42267 = (0);
var G__42268 = (0);
seq__42216_42248 = G__42265;
chunk__42217_42249 = G__42266;
count__42218_42250 = G__42267;
i__42219_42251 = G__42268;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42269 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42269);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42269)))?cljs.core.second.call(null,arglists_42269):arglists_42269));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42220_42270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42221_42271 = null;
var count__42222_42272 = (0);
var i__42223_42273 = (0);
while(true){
if((i__42223_42273 < count__42222_42272)){
var vec__42234_42274 = cljs.core._nth.call(null,chunk__42221_42271,i__42223_42273);
var name_42275 = cljs.core.nth.call(null,vec__42234_42274,(0),null);
var map__42237_42276 = cljs.core.nth.call(null,vec__42234_42274,(1),null);
var map__42237_42277__$1 = (((((!((map__42237_42276 == null))))?(((((map__42237_42276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42237_42276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42237_42276):map__42237_42276);
var doc_42278 = cljs.core.get.call(null,map__42237_42277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42279 = cljs.core.get.call(null,map__42237_42277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42275);

cljs.core.println.call(null," ",arglists_42279);

if(cljs.core.truth_(doc_42278)){
cljs.core.println.call(null," ",doc_42278);
} else {
}


var G__42280 = seq__42220_42270;
var G__42281 = chunk__42221_42271;
var G__42282 = count__42222_42272;
var G__42283 = (i__42223_42273 + (1));
seq__42220_42270 = G__42280;
chunk__42221_42271 = G__42281;
count__42222_42272 = G__42282;
i__42223_42273 = G__42283;
continue;
} else {
var temp__5735__auto___42284 = cljs.core.seq.call(null,seq__42220_42270);
if(temp__5735__auto___42284){
var seq__42220_42285__$1 = temp__5735__auto___42284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42220_42285__$1)){
var c__4556__auto___42286 = cljs.core.chunk_first.call(null,seq__42220_42285__$1);
var G__42287 = cljs.core.chunk_rest.call(null,seq__42220_42285__$1);
var G__42288 = c__4556__auto___42286;
var G__42289 = cljs.core.count.call(null,c__4556__auto___42286);
var G__42290 = (0);
seq__42220_42270 = G__42287;
chunk__42221_42271 = G__42288;
count__42222_42272 = G__42289;
i__42223_42273 = G__42290;
continue;
} else {
var vec__42239_42291 = cljs.core.first.call(null,seq__42220_42285__$1);
var name_42292 = cljs.core.nth.call(null,vec__42239_42291,(0),null);
var map__42242_42293 = cljs.core.nth.call(null,vec__42239_42291,(1),null);
var map__42242_42294__$1 = (((((!((map__42242_42293 == null))))?(((((map__42242_42293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42242_42293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42242_42293):map__42242_42293);
var doc_42295 = cljs.core.get.call(null,map__42242_42294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42296 = cljs.core.get.call(null,map__42242_42294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42292);

cljs.core.println.call(null," ",arglists_42296);

if(cljs.core.truth_(doc_42295)){
cljs.core.println.call(null," ",doc_42295);
} else {
}


var G__42297 = cljs.core.next.call(null,seq__42220_42285__$1);
var G__42298 = null;
var G__42299 = (0);
var G__42300 = (0);
seq__42220_42270 = G__42297;
chunk__42221_42271 = G__42298;
count__42222_42272 = G__42299;
i__42223_42273 = G__42300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__42244 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42245 = null;
var count__42246 = (0);
var i__42247 = (0);
while(true){
if((i__42247 < count__42246)){
var role = cljs.core._nth.call(null,chunk__42245,i__42247);
var temp__5735__auto___42301__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42301__$1)){
var spec_42302 = temp__5735__auto___42301__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42302));
} else {
}


var G__42303 = seq__42244;
var G__42304 = chunk__42245;
var G__42305 = count__42246;
var G__42306 = (i__42247 + (1));
seq__42244 = G__42303;
chunk__42245 = G__42304;
count__42246 = G__42305;
i__42247 = G__42306;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__42244);
if(temp__5735__auto____$1){
var seq__42244__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42244__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__42244__$1);
var G__42307 = cljs.core.chunk_rest.call(null,seq__42244__$1);
var G__42308 = c__4556__auto__;
var G__42309 = cljs.core.count.call(null,c__4556__auto__);
var G__42310 = (0);
seq__42244 = G__42307;
chunk__42245 = G__42308;
count__42246 = G__42309;
i__42247 = G__42310;
continue;
} else {
var role = cljs.core.first.call(null,seq__42244__$1);
var temp__5735__auto___42311__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42311__$2)){
var spec_42312 = temp__5735__auto___42311__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42312));
} else {
}


var G__42313 = cljs.core.next.call(null,seq__42244__$1);
var G__42314 = null;
var G__42315 = (0);
var G__42316 = (0);
seq__42244 = G__42313;
chunk__42245 = G__42314;
count__42246 = G__42315;
i__42247 = G__42316;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42317 = cljs.core.conj.call(null,via,t);
var G__42318 = cljs.core.ex_cause.call(null,t);
via = G__42317;
t = G__42318;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42321 = datafied_throwable;
var map__42321__$1 = (((((!((map__42321 == null))))?(((((map__42321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42321):map__42321);
var via = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42322 = cljs.core.last.call(null,via);
var map__42322__$1 = (((((!((map__42322 == null))))?(((((map__42322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42322):map__42322);
var type = cljs.core.get.call(null,map__42322__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__42322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__42322__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42323 = data;
var map__42323__$1 = (((((!((map__42323 == null))))?(((((map__42323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42323):map__42323);
var problems = cljs.core.get.call(null,map__42323__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__42323__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__42323__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42324 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__42324__$1 = (((((!((map__42324 == null))))?(((((map__42324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42324):map__42324);
var top_data = map__42324__$1;
var source = cljs.core.get.call(null,map__42324__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__42329 = phase;
var G__42329__$1 = (((G__42329 instanceof cljs.core.Keyword))?G__42329.fqn:null);
switch (G__42329__$1) {
case "read-source":
var map__42330 = data;
var map__42330__$1 = (((((!((map__42330 == null))))?(((((map__42330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42330):map__42330);
var line = cljs.core.get.call(null,map__42330__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42330__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42332 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__42332__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42332,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42332);
var G__42332__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42332__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42332__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42332__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42333 = top_data;
var G__42333__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42333,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42333);
var G__42333__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42333__$1);
var G__42333__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42333__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42333__$2);
var G__42333__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42333__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42333__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42333__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42333__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42334 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42334,(0),null);
var method = cljs.core.nth.call(null,vec__42334,(1),null);
var file = cljs.core.nth.call(null,vec__42334,(2),null);
var line = cljs.core.nth.call(null,vec__42334,(3),null);
var G__42337 = top_data;
var G__42337__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__42337,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42337);
var G__42337__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__42337__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42337__$1);
var G__42337__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__42337__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42337__$2);
var G__42337__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42337__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42337__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42337__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42337__$4;
}

break;
case "execution":
var vec__42338 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42338,(0),null);
var method = cljs.core.nth.call(null,vec__42338,(1),null);
var file = cljs.core.nth.call(null,vec__42338,(2),null);
var line = cljs.core.nth.call(null,vec__42338,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__42320_SHARP_){
var or__4126__auto__ = (p1__42320_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__42320_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42341 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42341__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__42341,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42341);
var G__42341__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42341__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42341__$1);
var G__42341__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__42341__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42341__$2);
var G__42341__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__42341__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42341__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42341__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42341__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42329__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42345){
var map__42346 = p__42345;
var map__42346__$1 = (((((!((map__42346 == null))))?(((((map__42346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42346):map__42346);
var triage_data = map__42346__$1;
var phase = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__42346__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42348 = phase;
var G__42348__$1 = (((G__42348 instanceof cljs.core.Keyword))?G__42348.fqn:null);
switch (G__42348__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42349_42358 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42350_42359 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42351_42360 = true;
var _STAR_print_fn_STAR__temp_val__42352_42361 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42351_42360);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42352_42361);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__42343_SHARP_){
return cljs.core.dissoc.call(null,p1__42343_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42350_42359);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42349_42358);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42353_42362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42354_42363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42355_42364 = true;
var _STAR_print_fn_STAR__temp_val__42356_42365 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42355_42364);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42356_42365);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__42344_SHARP_){
return cljs.core.dissoc.call(null,p1__42344_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42354_42363);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42353_42362);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42348__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1618065941258
