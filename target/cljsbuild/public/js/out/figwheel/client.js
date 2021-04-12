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
}catch (e42554){if((e42554 instanceof Error)){
var e = e42554;
return "Error: Unable to stringify";
} else {
throw e42554;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42557 = arguments.length;
switch (G__42557) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42555_SHARP_){
if(typeof p1__42555_SHARP_ === 'string'){
return p1__42555_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42555_SHARP_);
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
var len__4736__auto___42560 = arguments.length;
var i__4737__auto___42561 = (0);
while(true){
if((i__4737__auto___42561 < len__4736__auto___42560)){
args__4742__auto__.push((arguments[i__4737__auto___42561]));

var G__42562 = (i__4737__auto___42561 + (1));
i__4737__auto___42561 = G__42562;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42559){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42559));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42564 = arguments.length;
var i__4737__auto___42565 = (0);
while(true){
if((i__4737__auto___42565 < len__4736__auto___42564)){
args__4742__auto__.push((arguments[i__4737__auto___42565]));

var G__42566 = (i__4737__auto___42565 + (1));
i__4737__auto___42565 = G__42566;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42563){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42563));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42567){
var map__42568 = p__42567;
var map__42568__$1 = (((((!((map__42568 == null))))?(((((map__42568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42568):map__42568);
var message = cljs.core.get.call(null,map__42568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42568__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__36903__auto___42647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_42619){
var state_val_42620 = (state_42619[(1)]);
if((state_val_42620 === (7))){
var inst_42615 = (state_42619[(2)]);
var state_42619__$1 = state_42619;
var statearr_42621_42648 = state_42619__$1;
(statearr_42621_42648[(2)] = inst_42615);

(statearr_42621_42648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (1))){
var state_42619__$1 = state_42619;
var statearr_42622_42649 = state_42619__$1;
(statearr_42622_42649[(2)] = null);

(statearr_42622_42649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (4))){
var inst_42572 = (state_42619[(7)]);
var inst_42572__$1 = (state_42619[(2)]);
var state_42619__$1 = (function (){var statearr_42623 = state_42619;
(statearr_42623[(7)] = inst_42572__$1);

return statearr_42623;
})();
if(cljs.core.truth_(inst_42572__$1)){
var statearr_42624_42650 = state_42619__$1;
(statearr_42624_42650[(1)] = (5));

} else {
var statearr_42625_42651 = state_42619__$1;
(statearr_42625_42651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (15))){
var inst_42579 = (state_42619[(8)]);
var inst_42594 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42579);
var inst_42595 = cljs.core.first.call(null,inst_42594);
var inst_42596 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42595);
var inst_42597 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42596)].join('');
var inst_42598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42597);
var state_42619__$1 = state_42619;
var statearr_42626_42652 = state_42619__$1;
(statearr_42626_42652[(2)] = inst_42598);

(statearr_42626_42652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (13))){
var inst_42603 = (state_42619[(2)]);
var state_42619__$1 = state_42619;
var statearr_42627_42653 = state_42619__$1;
(statearr_42627_42653[(2)] = inst_42603);

(statearr_42627_42653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (6))){
var state_42619__$1 = state_42619;
var statearr_42628_42654 = state_42619__$1;
(statearr_42628_42654[(2)] = null);

(statearr_42628_42654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (17))){
var inst_42601 = (state_42619[(2)]);
var state_42619__$1 = state_42619;
var statearr_42629_42655 = state_42619__$1;
(statearr_42629_42655[(2)] = inst_42601);

(statearr_42629_42655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (3))){
var inst_42617 = (state_42619[(2)]);
var state_42619__$1 = state_42619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42619__$1,inst_42617);
} else {
if((state_val_42620 === (12))){
var inst_42578 = (state_42619[(9)]);
var inst_42592 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42578,opts);
var state_42619__$1 = state_42619;
if(inst_42592){
var statearr_42630_42656 = state_42619__$1;
(statearr_42630_42656[(1)] = (15));

} else {
var statearr_42631_42657 = state_42619__$1;
(statearr_42631_42657[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (2))){
var state_42619__$1 = state_42619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42619__$1,(4),ch);
} else {
if((state_val_42620 === (11))){
var inst_42579 = (state_42619[(8)]);
var inst_42584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42585 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42579);
var inst_42586 = cljs.core.async.timeout.call(null,(1000));
var inst_42587 = [inst_42585,inst_42586];
var inst_42588 = (new cljs.core.PersistentVector(null,2,(5),inst_42584,inst_42587,null));
var state_42619__$1 = state_42619;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42619__$1,(14),inst_42588);
} else {
if((state_val_42620 === (9))){
var inst_42579 = (state_42619[(8)]);
var inst_42605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42606 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42579);
var inst_42607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42606);
var inst_42608 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42607)].join('');
var inst_42609 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42608);
var state_42619__$1 = (function (){var statearr_42632 = state_42619;
(statearr_42632[(10)] = inst_42605);

return statearr_42632;
})();
var statearr_42633_42658 = state_42619__$1;
(statearr_42633_42658[(2)] = inst_42609);

(statearr_42633_42658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (5))){
var inst_42572 = (state_42619[(7)]);
var inst_42574 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42575 = (new cljs.core.PersistentArrayMap(null,2,inst_42574,null));
var inst_42576 = (new cljs.core.PersistentHashSet(null,inst_42575,null));
var inst_42577 = figwheel.client.focus_msgs.call(null,inst_42576,inst_42572);
var inst_42578 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42577);
var inst_42579 = cljs.core.first.call(null,inst_42577);
var inst_42580 = figwheel.client.autoload_QMARK_.call(null);
var state_42619__$1 = (function (){var statearr_42634 = state_42619;
(statearr_42634[(9)] = inst_42578);

(statearr_42634[(8)] = inst_42579);

return statearr_42634;
})();
if(cljs.core.truth_(inst_42580)){
var statearr_42635_42659 = state_42619__$1;
(statearr_42635_42659[(1)] = (8));

} else {
var statearr_42636_42660 = state_42619__$1;
(statearr_42636_42660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (14))){
var inst_42590 = (state_42619[(2)]);
var state_42619__$1 = state_42619;
var statearr_42637_42661 = state_42619__$1;
(statearr_42637_42661[(2)] = inst_42590);

(statearr_42637_42661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (16))){
var state_42619__$1 = state_42619;
var statearr_42638_42662 = state_42619__$1;
(statearr_42638_42662[(2)] = null);

(statearr_42638_42662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (10))){
var inst_42611 = (state_42619[(2)]);
var state_42619__$1 = (function (){var statearr_42639 = state_42619;
(statearr_42639[(11)] = inst_42611);

return statearr_42639;
})();
var statearr_42640_42663 = state_42619__$1;
(statearr_42640_42663[(2)] = null);

(statearr_42640_42663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42620 === (8))){
var inst_42578 = (state_42619[(9)]);
var inst_42582 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42578,opts);
var state_42619__$1 = state_42619;
if(cljs.core.truth_(inst_42582)){
var statearr_42641_42664 = state_42619__$1;
(statearr_42641_42664[(1)] = (11));

} else {
var statearr_42642_42665 = state_42619__$1;
(statearr_42642_42665[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____0 = (function (){
var statearr_42643 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42643[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__);

(statearr_42643[(1)] = (1));

return statearr_42643;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____1 = (function (state_42619){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_42619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e42644){if((e42644 instanceof Object)){
var ex__36812__auto__ = e42644;
var statearr_42645_42666 = state_42619;
(statearr_42645_42666[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42667 = state_42619;
state_42619 = G__42667;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__ = function(state_42619){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____1.call(this,state_42619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36809__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_42646 = f__36904__auto__.call(null);
(statearr_42646[(6)] = c__36903__auto___42647);

return statearr_42646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42668_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42668_SHARP_));
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
var base_path_42674 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42672 = true;
var _STAR_print_fn_STAR__temp_val__42673 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42672);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42673);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42671);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42670);
}}catch (e42669){if((e42669 instanceof Error)){
var e = e42669;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42674], null));
} else {
var e = e42669;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42675){
var map__42676 = p__42675;
var map__42676__$1 = (((((!((map__42676 == null))))?(((((map__42676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42676):map__42676);
var opts = map__42676__$1;
var build_id = cljs.core.get.call(null,map__42676__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__42678){
var vec__42679 = p__42678;
var seq__42680 = cljs.core.seq.call(null,vec__42679);
var first__42681 = cljs.core.first.call(null,seq__42680);
var seq__42680__$1 = cljs.core.next.call(null,seq__42680);
var map__42682 = first__42681;
var map__42682__$1 = (((((!((map__42682 == null))))?(((((map__42682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42682):map__42682);
var msg = map__42682__$1;
var msg_name = cljs.core.get.call(null,map__42682__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42680__$1;
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
return (function (p__42684){
var vec__42685 = p__42684;
var seq__42686 = cljs.core.seq.call(null,vec__42685);
var first__42687 = cljs.core.first.call(null,seq__42686);
var seq__42686__$1 = cljs.core.next.call(null,seq__42686);
var map__42688 = first__42687;
var map__42688__$1 = (((((!((map__42688 == null))))?(((((map__42688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42688):map__42688);
var msg = map__42688__$1;
var msg_name = cljs.core.get.call(null,map__42688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42686__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42690){
var map__42691 = p__42690;
var map__42691__$1 = (((((!((map__42691 == null))))?(((((map__42691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42691):map__42691);
var on_compile_warning = cljs.core.get.call(null,map__42691__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42691__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__42693){
var vec__42694 = p__42693;
var seq__42695 = cljs.core.seq.call(null,vec__42694);
var first__42696 = cljs.core.first.call(null,seq__42695);
var seq__42695__$1 = cljs.core.next.call(null,seq__42695);
var map__42697 = first__42696;
var map__42697__$1 = (((((!((map__42697 == null))))?(((((map__42697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42697):map__42697);
var msg = map__42697__$1;
var msg_name = cljs.core.get.call(null,map__42697__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42695__$1;
var pred__42699 = cljs.core._EQ_;
var expr__42700 = msg_name;
if(cljs.core.truth_(pred__42699.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42700))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42699.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42700))){
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_42789){
var state_val_42790 = (state_42789[(1)]);
if((state_val_42790 === (7))){
var inst_42709 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
if(cljs.core.truth_(inst_42709)){
var statearr_42791_42838 = state_42789__$1;
(statearr_42791_42838[(1)] = (8));

} else {
var statearr_42792_42839 = state_42789__$1;
(statearr_42792_42839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (20))){
var inst_42783 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42793_42840 = state_42789__$1;
(statearr_42793_42840[(2)] = inst_42783);

(statearr_42793_42840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (27))){
var inst_42779 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42794_42841 = state_42789__$1;
(statearr_42794_42841[(2)] = inst_42779);

(statearr_42794_42841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (1))){
var inst_42702 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42789__$1 = state_42789;
if(cljs.core.truth_(inst_42702)){
var statearr_42795_42842 = state_42789__$1;
(statearr_42795_42842[(1)] = (2));

} else {
var statearr_42796_42843 = state_42789__$1;
(statearr_42796_42843[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (24))){
var inst_42781 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42797_42844 = state_42789__$1;
(statearr_42797_42844[(2)] = inst_42781);

(statearr_42797_42844[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (4))){
var inst_42787 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42789__$1,inst_42787);
} else {
if((state_val_42790 === (15))){
var inst_42785 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42798_42845 = state_42789__$1;
(statearr_42798_42845[(2)] = inst_42785);

(statearr_42798_42845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (21))){
var inst_42738 = (state_42789[(2)]);
var inst_42739 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42740 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42739);
var state_42789__$1 = (function (){var statearr_42799 = state_42789;
(statearr_42799[(7)] = inst_42738);

return statearr_42799;
})();
var statearr_42800_42846 = state_42789__$1;
(statearr_42800_42846[(2)] = inst_42740);

(statearr_42800_42846[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (31))){
var inst_42768 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42768){
var statearr_42801_42847 = state_42789__$1;
(statearr_42801_42847[(1)] = (34));

} else {
var statearr_42802_42848 = state_42789__$1;
(statearr_42802_42848[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (32))){
var inst_42777 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42803_42849 = state_42789__$1;
(statearr_42803_42849[(2)] = inst_42777);

(statearr_42803_42849[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (33))){
var inst_42764 = (state_42789[(2)]);
var inst_42765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42766 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42765);
var state_42789__$1 = (function (){var statearr_42804 = state_42789;
(statearr_42804[(8)] = inst_42764);

return statearr_42804;
})();
var statearr_42805_42850 = state_42789__$1;
(statearr_42805_42850[(2)] = inst_42766);

(statearr_42805_42850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (13))){
var inst_42723 = figwheel.client.heads_up.clear.call(null);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(16),inst_42723);
} else {
if((state_val_42790 === (22))){
var inst_42744 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42745 = figwheel.client.heads_up.append_warning_message.call(null,inst_42744);
var state_42789__$1 = state_42789;
var statearr_42806_42851 = state_42789__$1;
(statearr_42806_42851[(2)] = inst_42745);

(statearr_42806_42851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (36))){
var inst_42775 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42807_42852 = state_42789__$1;
(statearr_42807_42852[(2)] = inst_42775);

(statearr_42807_42852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (29))){
var inst_42755 = (state_42789[(2)]);
var inst_42756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42757 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42756);
var state_42789__$1 = (function (){var statearr_42808 = state_42789;
(statearr_42808[(9)] = inst_42755);

return statearr_42808;
})();
var statearr_42809_42853 = state_42789__$1;
(statearr_42809_42853[(2)] = inst_42757);

(statearr_42809_42853[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (6))){
var inst_42704 = (state_42789[(10)]);
var state_42789__$1 = state_42789;
var statearr_42810_42854 = state_42789__$1;
(statearr_42810_42854[(2)] = inst_42704);

(statearr_42810_42854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (28))){
var inst_42751 = (state_42789[(2)]);
var inst_42752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42753 = figwheel.client.heads_up.display_warning.call(null,inst_42752);
var state_42789__$1 = (function (){var statearr_42811 = state_42789;
(statearr_42811[(11)] = inst_42751);

return statearr_42811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(29),inst_42753);
} else {
if((state_val_42790 === (25))){
var inst_42749 = figwheel.client.heads_up.clear.call(null);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(28),inst_42749);
} else {
if((state_val_42790 === (34))){
var inst_42770 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(37),inst_42770);
} else {
if((state_val_42790 === (17))){
var inst_42729 = (state_42789[(2)]);
var inst_42730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42731 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42730);
var state_42789__$1 = (function (){var statearr_42812 = state_42789;
(statearr_42812[(12)] = inst_42729);

return statearr_42812;
})();
var statearr_42813_42855 = state_42789__$1;
(statearr_42813_42855[(2)] = inst_42731);

(statearr_42813_42855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (3))){
var inst_42721 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42721){
var statearr_42814_42856 = state_42789__$1;
(statearr_42814_42856[(1)] = (13));

} else {
var statearr_42815_42857 = state_42789__$1;
(statearr_42815_42857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (12))){
var inst_42717 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42816_42858 = state_42789__$1;
(statearr_42816_42858[(2)] = inst_42717);

(statearr_42816_42858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (2))){
var inst_42704 = (state_42789[(10)]);
var inst_42704__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42789__$1 = (function (){var statearr_42817 = state_42789;
(statearr_42817[(10)] = inst_42704__$1);

return statearr_42817;
})();
if(cljs.core.truth_(inst_42704__$1)){
var statearr_42818_42859 = state_42789__$1;
(statearr_42818_42859[(1)] = (5));

} else {
var statearr_42819_42860 = state_42789__$1;
(statearr_42819_42860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (23))){
var inst_42747 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42747){
var statearr_42820_42861 = state_42789__$1;
(statearr_42820_42861[(1)] = (25));

} else {
var statearr_42821_42862 = state_42789__$1;
(statearr_42821_42862[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (35))){
var state_42789__$1 = state_42789;
var statearr_42822_42863 = state_42789__$1;
(statearr_42822_42863[(2)] = null);

(statearr_42822_42863[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (19))){
var inst_42742 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42742){
var statearr_42823_42864 = state_42789__$1;
(statearr_42823_42864[(1)] = (22));

} else {
var statearr_42824_42865 = state_42789__$1;
(statearr_42824_42865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (11))){
var inst_42713 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42825_42866 = state_42789__$1;
(statearr_42825_42866[(2)] = inst_42713);

(statearr_42825_42866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (9))){
var inst_42715 = figwheel.client.heads_up.clear.call(null);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(12),inst_42715);
} else {
if((state_val_42790 === (5))){
var inst_42706 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42789__$1 = state_42789;
var statearr_42826_42867 = state_42789__$1;
(statearr_42826_42867[(2)] = inst_42706);

(statearr_42826_42867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (14))){
var inst_42733 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42733){
var statearr_42827_42868 = state_42789__$1;
(statearr_42827_42868[(1)] = (18));

} else {
var statearr_42828_42869 = state_42789__$1;
(statearr_42828_42869[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (26))){
var inst_42759 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42789__$1 = state_42789;
if(inst_42759){
var statearr_42829_42870 = state_42789__$1;
(statearr_42829_42870[(1)] = (30));

} else {
var statearr_42830_42871 = state_42789__$1;
(statearr_42830_42871[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (16))){
var inst_42725 = (state_42789[(2)]);
var inst_42726 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42727 = figwheel.client.heads_up.display_exception.call(null,inst_42726);
var state_42789__$1 = (function (){var statearr_42831 = state_42789;
(statearr_42831[(13)] = inst_42725);

return statearr_42831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(17),inst_42727);
} else {
if((state_val_42790 === (30))){
var inst_42761 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42762 = figwheel.client.heads_up.display_warning.call(null,inst_42761);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(33),inst_42762);
} else {
if((state_val_42790 === (10))){
var inst_42719 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42832_42872 = state_42789__$1;
(statearr_42832_42872[(2)] = inst_42719);

(statearr_42832_42872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (18))){
var inst_42735 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42736 = figwheel.client.heads_up.display_exception.call(null,inst_42735);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(21),inst_42736);
} else {
if((state_val_42790 === (37))){
var inst_42772 = (state_42789[(2)]);
var state_42789__$1 = state_42789;
var statearr_42833_42873 = state_42789__$1;
(statearr_42833_42873[(2)] = inst_42772);

(statearr_42833_42873[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42790 === (8))){
var inst_42711 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42789__$1 = state_42789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42789__$1,(11),inst_42711);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____0 = (function (){
var statearr_42834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42834[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__);

(statearr_42834[(1)] = (1));

return statearr_42834;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____1 = (function (state_42789){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_42789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e42835){if((e42835 instanceof Object)){
var ex__36812__auto__ = e42835;
var statearr_42836_42874 = state_42789;
(statearr_42836_42874[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42875 = state_42789;
state_42789 = G__42875;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__ = function(state_42789){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____1.call(this,state_42789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_42837 = f__36904__auto__.call(null);
(statearr_42837[(6)] = c__36903__auto__);

return statearr_42837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36903__auto___42904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_42890){
var state_val_42891 = (state_42890[(1)]);
if((state_val_42891 === (1))){
var state_42890__$1 = state_42890;
var statearr_42892_42905 = state_42890__$1;
(statearr_42892_42905[(2)] = null);

(statearr_42892_42905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (2))){
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42890__$1,(4),ch);
} else {
if((state_val_42891 === (3))){
var inst_42888 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42890__$1,inst_42888);
} else {
if((state_val_42891 === (4))){
var inst_42878 = (state_42890[(7)]);
var inst_42878__$1 = (state_42890[(2)]);
var state_42890__$1 = (function (){var statearr_42893 = state_42890;
(statearr_42893[(7)] = inst_42878__$1);

return statearr_42893;
})();
if(cljs.core.truth_(inst_42878__$1)){
var statearr_42894_42906 = state_42890__$1;
(statearr_42894_42906[(1)] = (5));

} else {
var statearr_42895_42907 = state_42890__$1;
(statearr_42895_42907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (5))){
var inst_42878 = (state_42890[(7)]);
var inst_42880 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42878);
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42890__$1,(8),inst_42880);
} else {
if((state_val_42891 === (6))){
var state_42890__$1 = state_42890;
var statearr_42896_42908 = state_42890__$1;
(statearr_42896_42908[(2)] = null);

(statearr_42896_42908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (7))){
var inst_42886 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
var statearr_42897_42909 = state_42890__$1;
(statearr_42897_42909[(2)] = inst_42886);

(statearr_42897_42909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (8))){
var inst_42882 = (state_42890[(2)]);
var state_42890__$1 = (function (){var statearr_42898 = state_42890;
(statearr_42898[(8)] = inst_42882);

return statearr_42898;
})();
var statearr_42899_42910 = state_42890__$1;
(statearr_42899_42910[(2)] = null);

(statearr_42899_42910[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__36809__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36809__auto____0 = (function (){
var statearr_42900 = [null,null,null,null,null,null,null,null,null];
(statearr_42900[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36809__auto__);

(statearr_42900[(1)] = (1));

return statearr_42900;
});
var figwheel$client$heads_up_plugin_$_state_machine__36809__auto____1 = (function (state_42890){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_42890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e42901){if((e42901 instanceof Object)){
var ex__36812__auto__ = e42901;
var statearr_42902_42911 = state_42890;
(statearr_42902_42911[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42912 = state_42890;
state_42890 = G__42912;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36809__auto__ = function(state_42890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36809__auto____1.call(this,state_42890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36809__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36809__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_42903 = f__36904__auto__.call(null);
(statearr_42903[(6)] = c__36903__auto___42904);

return statearr_42903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_42918){
var state_val_42919 = (state_42918[(1)]);
if((state_val_42919 === (1))){
var inst_42913 = cljs.core.async.timeout.call(null,(3000));
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42918__$1,(2),inst_42913);
} else {
if((state_val_42919 === (2))){
var inst_42915 = (state_42918[(2)]);
var inst_42916 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42918__$1 = (function (){var statearr_42920 = state_42918;
(statearr_42920[(7)] = inst_42915);

return statearr_42920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42918__$1,inst_42916);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____0 = (function (){
var statearr_42921 = [null,null,null,null,null,null,null,null];
(statearr_42921[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__);

(statearr_42921[(1)] = (1));

return statearr_42921;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____1 = (function (state_42918){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_42918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e42922){if((e42922 instanceof Object)){
var ex__36812__auto__ = e42922;
var statearr_42923_42925 = state_42918;
(statearr_42923_42925[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42926 = state_42918;
state_42918 = G__42926;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__ = function(state_42918){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____1.call(this,state_42918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36809__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_42924 = f__36904__auto__.call(null);
(statearr_42924[(6)] = c__36903__auto__);

return statearr_42924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_42933){
var state_val_42934 = (state_42933[(1)]);
if((state_val_42934 === (1))){
var inst_42927 = cljs.core.async.timeout.call(null,(2000));
var state_42933__$1 = state_42933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42933__$1,(2),inst_42927);
} else {
if((state_val_42934 === (2))){
var inst_42929 = (state_42933[(2)]);
var inst_42930 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42931 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42930);
var state_42933__$1 = (function (){var statearr_42935 = state_42933;
(statearr_42935[(7)] = inst_42929);

return statearr_42935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42933__$1,inst_42931);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____0 = (function (){
var statearr_42936 = [null,null,null,null,null,null,null,null];
(statearr_42936[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__);

(statearr_42936[(1)] = (1));

return statearr_42936;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____1 = (function (state_42933){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_42933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e42937){if((e42937 instanceof Object)){
var ex__36812__auto__ = e42937;
var statearr_42938_42940 = state_42933;
(statearr_42938_42940[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42941 = state_42933;
state_42933 = G__42941;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__ = function(state_42933){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____1.call(this,state_42933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_42939 = f__36904__auto__.call(null);
(statearr_42939[(6)] = c__36903__auto__);

return statearr_42939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42942){
var map__42943 = p__42942;
var map__42943__$1 = (((((!((map__42943 == null))))?(((((map__42943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42943):map__42943);
var file = cljs.core.get.call(null,map__42943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42945 = "";
var G__42945__$1 = (cljs.core.truth_(file)?[G__42945,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42945);
var G__42945__$2 = (cljs.core.truth_(line)?[G__42945__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42945__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__42945__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42945__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42946){
var map__42947 = p__42946;
var map__42947__$1 = (((((!((map__42947 == null))))?(((((map__42947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42947):map__42947);
var ed = map__42947__$1;
var exception_data = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_42950 = (function (){var G__42949 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42949)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__42949;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_42950);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42951){
var map__42952 = p__42951;
var map__42952__$1 = (((((!((map__42952 == null))))?(((((map__42952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42952):map__42952);
var w = map__42952__$1;
var message = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__42954 = cljs.core.seq.call(null,plugins);
var chunk__42955 = null;
var count__42956 = (0);
var i__42957 = (0);
while(true){
if((i__42957 < count__42956)){
var vec__42964 = cljs.core._nth.call(null,chunk__42955,i__42957);
var k = cljs.core.nth.call(null,vec__42964,(0),null);
var plugin = cljs.core.nth.call(null,vec__42964,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42970 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42954,chunk__42955,count__42956,i__42957,pl_42970,vec__42964,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42970.call(null,msg_hist);
});})(seq__42954,chunk__42955,count__42956,i__42957,pl_42970,vec__42964,k,plugin))
);
} else {
}


var G__42971 = seq__42954;
var G__42972 = chunk__42955;
var G__42973 = count__42956;
var G__42974 = (i__42957 + (1));
seq__42954 = G__42971;
chunk__42955 = G__42972;
count__42956 = G__42973;
i__42957 = G__42974;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42954);
if(temp__5735__auto__){
var seq__42954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42954__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__42954__$1);
var G__42975 = cljs.core.chunk_rest.call(null,seq__42954__$1);
var G__42976 = c__4556__auto__;
var G__42977 = cljs.core.count.call(null,c__4556__auto__);
var G__42978 = (0);
seq__42954 = G__42975;
chunk__42955 = G__42976;
count__42956 = G__42977;
i__42957 = G__42978;
continue;
} else {
var vec__42967 = cljs.core.first.call(null,seq__42954__$1);
var k = cljs.core.nth.call(null,vec__42967,(0),null);
var plugin = cljs.core.nth.call(null,vec__42967,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42979 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42954,chunk__42955,count__42956,i__42957,pl_42979,vec__42967,k,plugin,seq__42954__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42979.call(null,msg_hist);
});})(seq__42954,chunk__42955,count__42956,i__42957,pl_42979,vec__42967,k,plugin,seq__42954__$1,temp__5735__auto__))
);
} else {
}


var G__42980 = cljs.core.next.call(null,seq__42954__$1);
var G__42981 = null;
var G__42982 = (0);
var G__42983 = (0);
seq__42954 = G__42980;
chunk__42955 = G__42981;
count__42956 = G__42982;
i__42957 = G__42983;
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
var G__42985 = arguments.length;
switch (G__42985) {
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

var seq__42986_42991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42987_42992 = null;
var count__42988_42993 = (0);
var i__42989_42994 = (0);
while(true){
if((i__42989_42994 < count__42988_42993)){
var msg_42995 = cljs.core._nth.call(null,chunk__42987_42992,i__42989_42994);
figwheel.client.socket.handle_incoming_message.call(null,msg_42995);


var G__42996 = seq__42986_42991;
var G__42997 = chunk__42987_42992;
var G__42998 = count__42988_42993;
var G__42999 = (i__42989_42994 + (1));
seq__42986_42991 = G__42996;
chunk__42987_42992 = G__42997;
count__42988_42993 = G__42998;
i__42989_42994 = G__42999;
continue;
} else {
var temp__5735__auto___43000 = cljs.core.seq.call(null,seq__42986_42991);
if(temp__5735__auto___43000){
var seq__42986_43001__$1 = temp__5735__auto___43000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42986_43001__$1)){
var c__4556__auto___43002 = cljs.core.chunk_first.call(null,seq__42986_43001__$1);
var G__43003 = cljs.core.chunk_rest.call(null,seq__42986_43001__$1);
var G__43004 = c__4556__auto___43002;
var G__43005 = cljs.core.count.call(null,c__4556__auto___43002);
var G__43006 = (0);
seq__42986_42991 = G__43003;
chunk__42987_42992 = G__43004;
count__42988_42993 = G__43005;
i__42989_42994 = G__43006;
continue;
} else {
var msg_43007 = cljs.core.first.call(null,seq__42986_43001__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43007);


var G__43008 = cljs.core.next.call(null,seq__42986_43001__$1);
var G__43009 = null;
var G__43010 = (0);
var G__43011 = (0);
seq__42986_42991 = G__43008;
chunk__42987_42992 = G__43009;
count__42988_42993 = G__43010;
i__42989_42994 = G__43011;
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
var len__4736__auto___43016 = arguments.length;
var i__4737__auto___43017 = (0);
while(true){
if((i__4737__auto___43017 < len__4736__auto___43016)){
args__4742__auto__.push((arguments[i__4737__auto___43017]));

var G__43018 = (i__4737__auto___43017 + (1));
i__4737__auto___43017 = G__43018;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43013){
var map__43014 = p__43013;
var map__43014__$1 = (((((!((map__43014 == null))))?(((((map__43014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43014):map__43014);
var opts = map__43014__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43012){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43012));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43019){if((e43019 instanceof Error)){
var e = e43019;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43019;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__43020){
var map__43021 = p__43020;
var map__43021__$1 = (((((!((map__43021 == null))))?(((((map__43021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43021):map__43021);
var msg_name = cljs.core.get.call(null,map__43021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1618065941547
