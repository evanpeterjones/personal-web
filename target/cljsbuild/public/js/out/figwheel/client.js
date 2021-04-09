// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e42075){if((e42075 instanceof Error)){
var e = e42075;
return "Error: Unable to stringify";
} else {
throw e42075;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42078 = arguments.length;
switch (G__42078) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42076_SHARP_){
if(typeof p1__42076_SHARP_ === 'string'){
return p1__42076_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42076_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42081 = arguments.length;
var i__4737__auto___42082 = (0);
while(true){
if((i__4737__auto___42082 < len__4736__auto___42081)){
args__4742__auto__.push((arguments[i__4737__auto___42082]));

var G__42083 = (i__4737__auto___42082 + (1));
i__4737__auto___42082 = G__42083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42080){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42080));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42085 = arguments.length;
var i__4737__auto___42086 = (0);
while(true){
if((i__4737__auto___42086 < len__4736__auto___42085)){
args__4742__auto__.push((arguments[i__4737__auto___42086]));

var G__42087 = (i__4737__auto___42086 + (1));
i__4737__auto___42086 = G__42087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42084){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42084));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42088){
var map__42089 = p__42088;
var map__42089__$1 = (((((!((map__42089 == null))))?(((((map__42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42089):map__42089);
var message = cljs.core.get.call(null,map__42089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42089__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37234__auto___42168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_42140){
var state_val_42141 = (state_42140[(1)]);
if((state_val_42141 === (7))){
var inst_42136 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42142_42169 = state_42140__$1;
(statearr_42142_42169[(2)] = inst_42136);

(statearr_42142_42169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (1))){
var state_42140__$1 = state_42140;
var statearr_42143_42170 = state_42140__$1;
(statearr_42143_42170[(2)] = null);

(statearr_42143_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (4))){
var inst_42093 = (state_42140[(7)]);
var inst_42093__$1 = (state_42140[(2)]);
var state_42140__$1 = (function (){var statearr_42144 = state_42140;
(statearr_42144[(7)] = inst_42093__$1);

return statearr_42144;
})();
if(cljs.core.truth_(inst_42093__$1)){
var statearr_42145_42171 = state_42140__$1;
(statearr_42145_42171[(1)] = (5));

} else {
var statearr_42146_42172 = state_42140__$1;
(statearr_42146_42172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (15))){
var inst_42100 = (state_42140[(8)]);
var inst_42115 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42100);
var inst_42116 = cljs.core.first.call(null,inst_42115);
var inst_42117 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42116);
var inst_42118 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42117)].join('');
var inst_42119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42118);
var state_42140__$1 = state_42140;
var statearr_42147_42173 = state_42140__$1;
(statearr_42147_42173[(2)] = inst_42119);

(statearr_42147_42173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (13))){
var inst_42124 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42148_42174 = state_42140__$1;
(statearr_42148_42174[(2)] = inst_42124);

(statearr_42148_42174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (6))){
var state_42140__$1 = state_42140;
var statearr_42149_42175 = state_42140__$1;
(statearr_42149_42175[(2)] = null);

(statearr_42149_42175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (17))){
var inst_42122 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42150_42176 = state_42140__$1;
(statearr_42150_42176[(2)] = inst_42122);

(statearr_42150_42176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (3))){
var inst_42138 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42140__$1,inst_42138);
} else {
if((state_val_42141 === (12))){
var inst_42099 = (state_42140[(9)]);
var inst_42113 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42099,opts);
var state_42140__$1 = state_42140;
if(inst_42113){
var statearr_42151_42177 = state_42140__$1;
(statearr_42151_42177[(1)] = (15));

} else {
var statearr_42152_42178 = state_42140__$1;
(statearr_42152_42178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (2))){
var state_42140__$1 = state_42140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42140__$1,(4),ch);
} else {
if((state_val_42141 === (11))){
var inst_42100 = (state_42140[(8)]);
var inst_42105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42106 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42100);
var inst_42107 = cljs.core.async.timeout.call(null,(1000));
var inst_42108 = [inst_42106,inst_42107];
var inst_42109 = (new cljs.core.PersistentVector(null,2,(5),inst_42105,inst_42108,null));
var state_42140__$1 = state_42140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42140__$1,(14),inst_42109);
} else {
if((state_val_42141 === (9))){
var inst_42100 = (state_42140[(8)]);
var inst_42126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42127 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42100);
var inst_42128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42127);
var inst_42129 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42128)].join('');
var inst_42130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42129);
var state_42140__$1 = (function (){var statearr_42153 = state_42140;
(statearr_42153[(10)] = inst_42126);

return statearr_42153;
})();
var statearr_42154_42179 = state_42140__$1;
(statearr_42154_42179[(2)] = inst_42130);

(statearr_42154_42179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (5))){
var inst_42093 = (state_42140[(7)]);
var inst_42095 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42096 = (new cljs.core.PersistentArrayMap(null,2,inst_42095,null));
var inst_42097 = (new cljs.core.PersistentHashSet(null,inst_42096,null));
var inst_42098 = figwheel.client.focus_msgs.call(null,inst_42097,inst_42093);
var inst_42099 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42098);
var inst_42100 = cljs.core.first.call(null,inst_42098);
var inst_42101 = figwheel.client.autoload_QMARK_.call(null);
var state_42140__$1 = (function (){var statearr_42155 = state_42140;
(statearr_42155[(8)] = inst_42100);

(statearr_42155[(9)] = inst_42099);

return statearr_42155;
})();
if(cljs.core.truth_(inst_42101)){
var statearr_42156_42180 = state_42140__$1;
(statearr_42156_42180[(1)] = (8));

} else {
var statearr_42157_42181 = state_42140__$1;
(statearr_42157_42181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (14))){
var inst_42111 = (state_42140[(2)]);
var state_42140__$1 = state_42140;
var statearr_42158_42182 = state_42140__$1;
(statearr_42158_42182[(2)] = inst_42111);

(statearr_42158_42182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (16))){
var state_42140__$1 = state_42140;
var statearr_42159_42183 = state_42140__$1;
(statearr_42159_42183[(2)] = null);

(statearr_42159_42183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (10))){
var inst_42132 = (state_42140[(2)]);
var state_42140__$1 = (function (){var statearr_42160 = state_42140;
(statearr_42160[(11)] = inst_42132);

return statearr_42160;
})();
var statearr_42161_42184 = state_42140__$1;
(statearr_42161_42184[(2)] = null);

(statearr_42161_42184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42141 === (8))){
var inst_42099 = (state_42140[(9)]);
var inst_42103 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42099,opts);
var state_42140__$1 = state_42140;
if(cljs.core.truth_(inst_42103)){
var statearr_42162_42185 = state_42140__$1;
(statearr_42162_42185[(1)] = (11));

} else {
var statearr_42163_42186 = state_42140__$1;
(statearr_42163_42186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____0 = (function (){
var statearr_42164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42164[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__);

(statearr_42164[(1)] = (1));

return statearr_42164;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____1 = (function (state_42140){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_42140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e42165){if((e42165 instanceof Object)){
var ex__37143__auto__ = e42165;
var statearr_42166_42187 = state_42140;
(statearr_42166_42187[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42188 = state_42140;
state_42140 = G__42188;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__ = function(state_42140){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____1.call(this,state_42140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37140__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_42167 = f__37235__auto__.call(null);
(statearr_42167[(6)] = c__37234__auto___42168);

return statearr_42167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42189_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42189_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42195 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42191 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42192 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42193 = true;
var _STAR_print_fn_STAR__temp_val__42194 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42193);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42194);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42192);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42191);
}}catch (e42190){if((e42190 instanceof Error)){
var e = e42190;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42195], null));
} else {
var e = e42190;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42196){
var map__42197 = p__42196;
var map__42197__$1 = (((((!((map__42197 == null))))?(((((map__42197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42197):map__42197);
var opts = map__42197__$1;
var build_id = cljs.core.get.call(null,map__42197__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__42199){
var vec__42200 = p__42199;
var seq__42201 = cljs.core.seq.call(null,vec__42200);
var first__42202 = cljs.core.first.call(null,seq__42201);
var seq__42201__$1 = cljs.core.next.call(null,seq__42201);
var map__42203 = first__42202;
var map__42203__$1 = (((((!((map__42203 == null))))?(((((map__42203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42203):map__42203);
var msg = map__42203__$1;
var msg_name = cljs.core.get.call(null,map__42203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42201__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42205){
var vec__42206 = p__42205;
var seq__42207 = cljs.core.seq.call(null,vec__42206);
var first__42208 = cljs.core.first.call(null,seq__42207);
var seq__42207__$1 = cljs.core.next.call(null,seq__42207);
var map__42209 = first__42208;
var map__42209__$1 = (((((!((map__42209 == null))))?(((((map__42209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42209):map__42209);
var msg = map__42209__$1;
var msg_name = cljs.core.get.call(null,map__42209__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42207__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42211){
var map__42212 = p__42211;
var map__42212__$1 = (((((!((map__42212 == null))))?(((((map__42212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42212):map__42212);
var on_compile_warning = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__42214){
var vec__42215 = p__42214;
var seq__42216 = cljs.core.seq.call(null,vec__42215);
var first__42217 = cljs.core.first.call(null,seq__42216);
var seq__42216__$1 = cljs.core.next.call(null,seq__42216);
var map__42218 = first__42217;
var map__42218__$1 = (((((!((map__42218 == null))))?(((((map__42218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42218):map__42218);
var msg = map__42218__$1;
var msg_name = cljs.core.get.call(null,map__42218__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42216__$1;
var pred__42220 = cljs.core._EQ_;
var expr__42221 = msg_name;
if(cljs.core.truth_(pred__42220.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42221))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42220.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42221))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_42310){
var state_val_42311 = (state_42310[(1)]);
if((state_val_42311 === (7))){
var inst_42230 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
if(cljs.core.truth_(inst_42230)){
var statearr_42312_42359 = state_42310__$1;
(statearr_42312_42359[(1)] = (8));

} else {
var statearr_42313_42360 = state_42310__$1;
(statearr_42313_42360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (20))){
var inst_42304 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42314_42361 = state_42310__$1;
(statearr_42314_42361[(2)] = inst_42304);

(statearr_42314_42361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (27))){
var inst_42300 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42315_42362 = state_42310__$1;
(statearr_42315_42362[(2)] = inst_42300);

(statearr_42315_42362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (1))){
var inst_42223 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42310__$1 = state_42310;
if(cljs.core.truth_(inst_42223)){
var statearr_42316_42363 = state_42310__$1;
(statearr_42316_42363[(1)] = (2));

} else {
var statearr_42317_42364 = state_42310__$1;
(statearr_42317_42364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (24))){
var inst_42302 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42318_42365 = state_42310__$1;
(statearr_42318_42365[(2)] = inst_42302);

(statearr_42318_42365[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (4))){
var inst_42308 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42310__$1,inst_42308);
} else {
if((state_val_42311 === (15))){
var inst_42306 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42319_42366 = state_42310__$1;
(statearr_42319_42366[(2)] = inst_42306);

(statearr_42319_42366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (21))){
var inst_42259 = (state_42310[(2)]);
var inst_42260 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42261 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42260);
var state_42310__$1 = (function (){var statearr_42320 = state_42310;
(statearr_42320[(7)] = inst_42259);

return statearr_42320;
})();
var statearr_42321_42367 = state_42310__$1;
(statearr_42321_42367[(2)] = inst_42261);

(statearr_42321_42367[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (31))){
var inst_42289 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42289){
var statearr_42322_42368 = state_42310__$1;
(statearr_42322_42368[(1)] = (34));

} else {
var statearr_42323_42369 = state_42310__$1;
(statearr_42323_42369[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (32))){
var inst_42298 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42324_42370 = state_42310__$1;
(statearr_42324_42370[(2)] = inst_42298);

(statearr_42324_42370[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (33))){
var inst_42285 = (state_42310[(2)]);
var inst_42286 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42287 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42286);
var state_42310__$1 = (function (){var statearr_42325 = state_42310;
(statearr_42325[(8)] = inst_42285);

return statearr_42325;
})();
var statearr_42326_42371 = state_42310__$1;
(statearr_42326_42371[(2)] = inst_42287);

(statearr_42326_42371[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (13))){
var inst_42244 = figwheel.client.heads_up.clear.call(null);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(16),inst_42244);
} else {
if((state_val_42311 === (22))){
var inst_42265 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42266 = figwheel.client.heads_up.append_warning_message.call(null,inst_42265);
var state_42310__$1 = state_42310;
var statearr_42327_42372 = state_42310__$1;
(statearr_42327_42372[(2)] = inst_42266);

(statearr_42327_42372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (36))){
var inst_42296 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42328_42373 = state_42310__$1;
(statearr_42328_42373[(2)] = inst_42296);

(statearr_42328_42373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (29))){
var inst_42276 = (state_42310[(2)]);
var inst_42277 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42278 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42277);
var state_42310__$1 = (function (){var statearr_42329 = state_42310;
(statearr_42329[(9)] = inst_42276);

return statearr_42329;
})();
var statearr_42330_42374 = state_42310__$1;
(statearr_42330_42374[(2)] = inst_42278);

(statearr_42330_42374[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (6))){
var inst_42225 = (state_42310[(10)]);
var state_42310__$1 = state_42310;
var statearr_42331_42375 = state_42310__$1;
(statearr_42331_42375[(2)] = inst_42225);

(statearr_42331_42375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (28))){
var inst_42272 = (state_42310[(2)]);
var inst_42273 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42274 = figwheel.client.heads_up.display_warning.call(null,inst_42273);
var state_42310__$1 = (function (){var statearr_42332 = state_42310;
(statearr_42332[(11)] = inst_42272);

return statearr_42332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(29),inst_42274);
} else {
if((state_val_42311 === (25))){
var inst_42270 = figwheel.client.heads_up.clear.call(null);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(28),inst_42270);
} else {
if((state_val_42311 === (34))){
var inst_42291 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(37),inst_42291);
} else {
if((state_val_42311 === (17))){
var inst_42250 = (state_42310[(2)]);
var inst_42251 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42252 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42251);
var state_42310__$1 = (function (){var statearr_42333 = state_42310;
(statearr_42333[(12)] = inst_42250);

return statearr_42333;
})();
var statearr_42334_42376 = state_42310__$1;
(statearr_42334_42376[(2)] = inst_42252);

(statearr_42334_42376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (3))){
var inst_42242 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42242){
var statearr_42335_42377 = state_42310__$1;
(statearr_42335_42377[(1)] = (13));

} else {
var statearr_42336_42378 = state_42310__$1;
(statearr_42336_42378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (12))){
var inst_42238 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42337_42379 = state_42310__$1;
(statearr_42337_42379[(2)] = inst_42238);

(statearr_42337_42379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (2))){
var inst_42225 = (state_42310[(10)]);
var inst_42225__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42310__$1 = (function (){var statearr_42338 = state_42310;
(statearr_42338[(10)] = inst_42225__$1);

return statearr_42338;
})();
if(cljs.core.truth_(inst_42225__$1)){
var statearr_42339_42380 = state_42310__$1;
(statearr_42339_42380[(1)] = (5));

} else {
var statearr_42340_42381 = state_42310__$1;
(statearr_42340_42381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (23))){
var inst_42268 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42268){
var statearr_42341_42382 = state_42310__$1;
(statearr_42341_42382[(1)] = (25));

} else {
var statearr_42342_42383 = state_42310__$1;
(statearr_42342_42383[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (35))){
var state_42310__$1 = state_42310;
var statearr_42343_42384 = state_42310__$1;
(statearr_42343_42384[(2)] = null);

(statearr_42343_42384[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (19))){
var inst_42263 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42263){
var statearr_42344_42385 = state_42310__$1;
(statearr_42344_42385[(1)] = (22));

} else {
var statearr_42345_42386 = state_42310__$1;
(statearr_42345_42386[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (11))){
var inst_42234 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42346_42387 = state_42310__$1;
(statearr_42346_42387[(2)] = inst_42234);

(statearr_42346_42387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (9))){
var inst_42236 = figwheel.client.heads_up.clear.call(null);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(12),inst_42236);
} else {
if((state_val_42311 === (5))){
var inst_42227 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42310__$1 = state_42310;
var statearr_42347_42388 = state_42310__$1;
(statearr_42347_42388[(2)] = inst_42227);

(statearr_42347_42388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (14))){
var inst_42254 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42254){
var statearr_42348_42389 = state_42310__$1;
(statearr_42348_42389[(1)] = (18));

} else {
var statearr_42349_42390 = state_42310__$1;
(statearr_42349_42390[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (26))){
var inst_42280 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42310__$1 = state_42310;
if(inst_42280){
var statearr_42350_42391 = state_42310__$1;
(statearr_42350_42391[(1)] = (30));

} else {
var statearr_42351_42392 = state_42310__$1;
(statearr_42351_42392[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (16))){
var inst_42246 = (state_42310[(2)]);
var inst_42247 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42248 = figwheel.client.heads_up.display_exception.call(null,inst_42247);
var state_42310__$1 = (function (){var statearr_42352 = state_42310;
(statearr_42352[(13)] = inst_42246);

return statearr_42352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(17),inst_42248);
} else {
if((state_val_42311 === (30))){
var inst_42282 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42283 = figwheel.client.heads_up.display_warning.call(null,inst_42282);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(33),inst_42283);
} else {
if((state_val_42311 === (10))){
var inst_42240 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42353_42393 = state_42310__$1;
(statearr_42353_42393[(2)] = inst_42240);

(statearr_42353_42393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (18))){
var inst_42256 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42257 = figwheel.client.heads_up.display_exception.call(null,inst_42256);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(21),inst_42257);
} else {
if((state_val_42311 === (37))){
var inst_42293 = (state_42310[(2)]);
var state_42310__$1 = state_42310;
var statearr_42354_42394 = state_42310__$1;
(statearr_42354_42394[(2)] = inst_42293);

(statearr_42354_42394[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42311 === (8))){
var inst_42232 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42310__$1 = state_42310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42310__$1,(11),inst_42232);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____0 = (function (){
var statearr_42355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42355[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__);

(statearr_42355[(1)] = (1));

return statearr_42355;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____1 = (function (state_42310){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_42310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e42356){if((e42356 instanceof Object)){
var ex__37143__auto__ = e42356;
var statearr_42357_42395 = state_42310;
(statearr_42357_42395[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42396 = state_42310;
state_42310 = G__42396;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__ = function(state_42310){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____1.call(this,state_42310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_42358 = f__37235__auto__.call(null);
(statearr_42358[(6)] = c__37234__auto__);

return statearr_42358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37234__auto___42425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_42411){
var state_val_42412 = (state_42411[(1)]);
if((state_val_42412 === (1))){
var state_42411__$1 = state_42411;
var statearr_42413_42426 = state_42411__$1;
(statearr_42413_42426[(2)] = null);

(statearr_42413_42426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42412 === (2))){
var state_42411__$1 = state_42411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42411__$1,(4),ch);
} else {
if((state_val_42412 === (3))){
var inst_42409 = (state_42411[(2)]);
var state_42411__$1 = state_42411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42411__$1,inst_42409);
} else {
if((state_val_42412 === (4))){
var inst_42399 = (state_42411[(7)]);
var inst_42399__$1 = (state_42411[(2)]);
var state_42411__$1 = (function (){var statearr_42414 = state_42411;
(statearr_42414[(7)] = inst_42399__$1);

return statearr_42414;
})();
if(cljs.core.truth_(inst_42399__$1)){
var statearr_42415_42427 = state_42411__$1;
(statearr_42415_42427[(1)] = (5));

} else {
var statearr_42416_42428 = state_42411__$1;
(statearr_42416_42428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42412 === (5))){
var inst_42399 = (state_42411[(7)]);
var inst_42401 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42399);
var state_42411__$1 = state_42411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42411__$1,(8),inst_42401);
} else {
if((state_val_42412 === (6))){
var state_42411__$1 = state_42411;
var statearr_42417_42429 = state_42411__$1;
(statearr_42417_42429[(2)] = null);

(statearr_42417_42429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42412 === (7))){
var inst_42407 = (state_42411[(2)]);
var state_42411__$1 = state_42411;
var statearr_42418_42430 = state_42411__$1;
(statearr_42418_42430[(2)] = inst_42407);

(statearr_42418_42430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42412 === (8))){
var inst_42403 = (state_42411[(2)]);
var state_42411__$1 = (function (){var statearr_42419 = state_42411;
(statearr_42419[(8)] = inst_42403);

return statearr_42419;
})();
var statearr_42420_42431 = state_42411__$1;
(statearr_42420_42431[(2)] = null);

(statearr_42420_42431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37140__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37140__auto____0 = (function (){
var statearr_42421 = [null,null,null,null,null,null,null,null,null];
(statearr_42421[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37140__auto__);

(statearr_42421[(1)] = (1));

return statearr_42421;
});
var figwheel$client$heads_up_plugin_$_state_machine__37140__auto____1 = (function (state_42411){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_42411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e42422){if((e42422 instanceof Object)){
var ex__37143__auto__ = e42422;
var statearr_42423_42432 = state_42411;
(statearr_42423_42432[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42433 = state_42411;
state_42411 = G__42433;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37140__auto__ = function(state_42411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37140__auto____1.call(this,state_42411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37140__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37140__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_42424 = f__37235__auto__.call(null);
(statearr_42424[(6)] = c__37234__auto___42425);

return statearr_42424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_42439){
var state_val_42440 = (state_42439[(1)]);
if((state_val_42440 === (1))){
var inst_42434 = cljs.core.async.timeout.call(null,(3000));
var state_42439__$1 = state_42439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42439__$1,(2),inst_42434);
} else {
if((state_val_42440 === (2))){
var inst_42436 = (state_42439[(2)]);
var inst_42437 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42439__$1 = (function (){var statearr_42441 = state_42439;
(statearr_42441[(7)] = inst_42436);

return statearr_42441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42439__$1,inst_42437);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____0 = (function (){
var statearr_42442 = [null,null,null,null,null,null,null,null];
(statearr_42442[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__);

(statearr_42442[(1)] = (1));

return statearr_42442;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____1 = (function (state_42439){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_42439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e42443){if((e42443 instanceof Object)){
var ex__37143__auto__ = e42443;
var statearr_42444_42446 = state_42439;
(statearr_42444_42446[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42447 = state_42439;
state_42439 = G__42447;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__ = function(state_42439){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____1.call(this,state_42439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37140__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_42445 = f__37235__auto__.call(null);
(statearr_42445[(6)] = c__37234__auto__);

return statearr_42445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_42454){
var state_val_42455 = (state_42454[(1)]);
if((state_val_42455 === (1))){
var inst_42448 = cljs.core.async.timeout.call(null,(2000));
var state_42454__$1 = state_42454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42454__$1,(2),inst_42448);
} else {
if((state_val_42455 === (2))){
var inst_42450 = (state_42454[(2)]);
var inst_42451 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42452 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42451);
var state_42454__$1 = (function (){var statearr_42456 = state_42454;
(statearr_42456[(7)] = inst_42450);

return statearr_42456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42454__$1,inst_42452);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____0 = (function (){
var statearr_42457 = [null,null,null,null,null,null,null,null];
(statearr_42457[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__);

(statearr_42457[(1)] = (1));

return statearr_42457;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____1 = (function (state_42454){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_42454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e42458){if((e42458 instanceof Object)){
var ex__37143__auto__ = e42458;
var statearr_42459_42461 = state_42454;
(statearr_42459_42461[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42462 = state_42454;
state_42454 = G__42462;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__ = function(state_42454){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____1.call(this,state_42454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_42460 = f__37235__auto__.call(null);
(statearr_42460[(6)] = c__37234__auto__);

return statearr_42460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42463){
var map__42464 = p__42463;
var map__42464__$1 = (((((!((map__42464 == null))))?(((((map__42464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42464):map__42464);
var file = cljs.core.get.call(null,map__42464__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42464__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42464__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42466 = "";
var G__42466__$1 = (cljs.core.truth_(file)?[G__42466,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42466);
var G__42466__$2 = (cljs.core.truth_(line)?[G__42466__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42466__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__42466__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42466__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42467){
var map__42468 = p__42467;
var map__42468__$1 = (((((!((map__42468 == null))))?(((((map__42468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42468):map__42468);
var ed = map__42468__$1;
var exception_data = cljs.core.get.call(null,map__42468__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42468__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_42471 = (function (){var G__42470 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42470)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__42470;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_42471);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42472){
var map__42473 = p__42472;
var map__42473__$1 = (((((!((map__42473 == null))))?(((((map__42473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42473):map__42473);
var w = map__42473__$1;
var message = cljs.core.get.call(null,map__42473__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42475 = cljs.core.seq.call(null,plugins);
var chunk__42476 = null;
var count__42477 = (0);
var i__42478 = (0);
while(true){
if((i__42478 < count__42477)){
var vec__42485 = cljs.core._nth.call(null,chunk__42476,i__42478);
var k = cljs.core.nth.call(null,vec__42485,(0),null);
var plugin = cljs.core.nth.call(null,vec__42485,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42491 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42475,chunk__42476,count__42477,i__42478,pl_42491,vec__42485,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42491.call(null,msg_hist);
});})(seq__42475,chunk__42476,count__42477,i__42478,pl_42491,vec__42485,k,plugin))
);
} else {
}


var G__42492 = seq__42475;
var G__42493 = chunk__42476;
var G__42494 = count__42477;
var G__42495 = (i__42478 + (1));
seq__42475 = G__42492;
chunk__42476 = G__42493;
count__42477 = G__42494;
i__42478 = G__42495;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42475);
if(temp__5735__auto__){
var seq__42475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42475__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__42475__$1);
var G__42496 = cljs.core.chunk_rest.call(null,seq__42475__$1);
var G__42497 = c__4556__auto__;
var G__42498 = cljs.core.count.call(null,c__4556__auto__);
var G__42499 = (0);
seq__42475 = G__42496;
chunk__42476 = G__42497;
count__42477 = G__42498;
i__42478 = G__42499;
continue;
} else {
var vec__42488 = cljs.core.first.call(null,seq__42475__$1);
var k = cljs.core.nth.call(null,vec__42488,(0),null);
var plugin = cljs.core.nth.call(null,vec__42488,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42500 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42475,chunk__42476,count__42477,i__42478,pl_42500,vec__42488,k,plugin,seq__42475__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42500.call(null,msg_hist);
});})(seq__42475,chunk__42476,count__42477,i__42478,pl_42500,vec__42488,k,plugin,seq__42475__$1,temp__5735__auto__))
);
} else {
}


var G__42501 = cljs.core.next.call(null,seq__42475__$1);
var G__42502 = null;
var G__42503 = (0);
var G__42504 = (0);
seq__42475 = G__42501;
chunk__42476 = G__42502;
count__42477 = G__42503;
i__42478 = G__42504;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42506 = arguments.length;
switch (G__42506) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42507_42512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42508_42513 = null;
var count__42509_42514 = (0);
var i__42510_42515 = (0);
while(true){
if((i__42510_42515 < count__42509_42514)){
var msg_42516 = cljs.core._nth.call(null,chunk__42508_42513,i__42510_42515);
figwheel.client.socket.handle_incoming_message.call(null,msg_42516);


var G__42517 = seq__42507_42512;
var G__42518 = chunk__42508_42513;
var G__42519 = count__42509_42514;
var G__42520 = (i__42510_42515 + (1));
seq__42507_42512 = G__42517;
chunk__42508_42513 = G__42518;
count__42509_42514 = G__42519;
i__42510_42515 = G__42520;
continue;
} else {
var temp__5735__auto___42521 = cljs.core.seq.call(null,seq__42507_42512);
if(temp__5735__auto___42521){
var seq__42507_42522__$1 = temp__5735__auto___42521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42507_42522__$1)){
var c__4556__auto___42523 = cljs.core.chunk_first.call(null,seq__42507_42522__$1);
var G__42524 = cljs.core.chunk_rest.call(null,seq__42507_42522__$1);
var G__42525 = c__4556__auto___42523;
var G__42526 = cljs.core.count.call(null,c__4556__auto___42523);
var G__42527 = (0);
seq__42507_42512 = G__42524;
chunk__42508_42513 = G__42525;
count__42509_42514 = G__42526;
i__42510_42515 = G__42527;
continue;
} else {
var msg_42528 = cljs.core.first.call(null,seq__42507_42522__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42528);


var G__42529 = cljs.core.next.call(null,seq__42507_42522__$1);
var G__42530 = null;
var G__42531 = (0);
var G__42532 = (0);
seq__42507_42512 = G__42529;
chunk__42508_42513 = G__42530;
count__42509_42514 = G__42531;
i__42510_42515 = G__42532;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42537 = arguments.length;
var i__4737__auto___42538 = (0);
while(true){
if((i__4737__auto___42538 < len__4736__auto___42537)){
args__4742__auto__.push((arguments[i__4737__auto___42538]));

var G__42539 = (i__4737__auto___42538 + (1));
i__4737__auto___42538 = G__42539;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42534){
var map__42535 = p__42534;
var map__42535__$1 = (((((!((map__42535 == null))))?(((((map__42535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42535):map__42535);
var opts = map__42535__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42533){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42533));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42540){if((e42540 instanceof Error)){
var e = e42540;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42540;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__42541){
var map__42542 = p__42541;
var map__42542__$1 = (((((!((map__42542 == null))))?(((((map__42542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42542):map__42542);
var msg_name = cljs.core.get.call(null,map__42542__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1617925398152
