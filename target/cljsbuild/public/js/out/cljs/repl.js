// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41734){
var map__41735 = p__41734;
var map__41735__$1 = (((((!((map__41735 == null))))?(((((map__41735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41735):map__41735);
var m = map__41735__$1;
var n = cljs.core.get.call(null,map__41735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41737_41769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41738_41770 = null;
var count__41739_41771 = (0);
var i__41740_41772 = (0);
while(true){
if((i__41740_41772 < count__41739_41771)){
var f_41773 = cljs.core._nth.call(null,chunk__41738_41770,i__41740_41772);
cljs.core.println.call(null,"  ",f_41773);


var G__41774 = seq__41737_41769;
var G__41775 = chunk__41738_41770;
var G__41776 = count__41739_41771;
var G__41777 = (i__41740_41772 + (1));
seq__41737_41769 = G__41774;
chunk__41738_41770 = G__41775;
count__41739_41771 = G__41776;
i__41740_41772 = G__41777;
continue;
} else {
var temp__5735__auto___41778 = cljs.core.seq.call(null,seq__41737_41769);
if(temp__5735__auto___41778){
var seq__41737_41779__$1 = temp__5735__auto___41778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41737_41779__$1)){
var c__4556__auto___41780 = cljs.core.chunk_first.call(null,seq__41737_41779__$1);
var G__41781 = cljs.core.chunk_rest.call(null,seq__41737_41779__$1);
var G__41782 = c__4556__auto___41780;
var G__41783 = cljs.core.count.call(null,c__4556__auto___41780);
var G__41784 = (0);
seq__41737_41769 = G__41781;
chunk__41738_41770 = G__41782;
count__41739_41771 = G__41783;
i__41740_41772 = G__41784;
continue;
} else {
var f_41785 = cljs.core.first.call(null,seq__41737_41779__$1);
cljs.core.println.call(null,"  ",f_41785);


var G__41786 = cljs.core.next.call(null,seq__41737_41779__$1);
var G__41787 = null;
var G__41788 = (0);
var G__41789 = (0);
seq__41737_41769 = G__41786;
chunk__41738_41770 = G__41787;
count__41739_41771 = G__41788;
i__41740_41772 = G__41789;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41790 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41790);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41790)))?cljs.core.second.call(null,arglists_41790):arglists_41790));
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
var seq__41741_41791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41742_41792 = null;
var count__41743_41793 = (0);
var i__41744_41794 = (0);
while(true){
if((i__41744_41794 < count__41743_41793)){
var vec__41755_41795 = cljs.core._nth.call(null,chunk__41742_41792,i__41744_41794);
var name_41796 = cljs.core.nth.call(null,vec__41755_41795,(0),null);
var map__41758_41797 = cljs.core.nth.call(null,vec__41755_41795,(1),null);
var map__41758_41798__$1 = (((((!((map__41758_41797 == null))))?(((((map__41758_41797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41758_41797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41758_41797):map__41758_41797);
var doc_41799 = cljs.core.get.call(null,map__41758_41798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41800 = cljs.core.get.call(null,map__41758_41798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41796);

cljs.core.println.call(null," ",arglists_41800);

if(cljs.core.truth_(doc_41799)){
cljs.core.println.call(null," ",doc_41799);
} else {
}


var G__41801 = seq__41741_41791;
var G__41802 = chunk__41742_41792;
var G__41803 = count__41743_41793;
var G__41804 = (i__41744_41794 + (1));
seq__41741_41791 = G__41801;
chunk__41742_41792 = G__41802;
count__41743_41793 = G__41803;
i__41744_41794 = G__41804;
continue;
} else {
var temp__5735__auto___41805 = cljs.core.seq.call(null,seq__41741_41791);
if(temp__5735__auto___41805){
var seq__41741_41806__$1 = temp__5735__auto___41805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41741_41806__$1)){
var c__4556__auto___41807 = cljs.core.chunk_first.call(null,seq__41741_41806__$1);
var G__41808 = cljs.core.chunk_rest.call(null,seq__41741_41806__$1);
var G__41809 = c__4556__auto___41807;
var G__41810 = cljs.core.count.call(null,c__4556__auto___41807);
var G__41811 = (0);
seq__41741_41791 = G__41808;
chunk__41742_41792 = G__41809;
count__41743_41793 = G__41810;
i__41744_41794 = G__41811;
continue;
} else {
var vec__41760_41812 = cljs.core.first.call(null,seq__41741_41806__$1);
var name_41813 = cljs.core.nth.call(null,vec__41760_41812,(0),null);
var map__41763_41814 = cljs.core.nth.call(null,vec__41760_41812,(1),null);
var map__41763_41815__$1 = (((((!((map__41763_41814 == null))))?(((((map__41763_41814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41763_41814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41763_41814):map__41763_41814);
var doc_41816 = cljs.core.get.call(null,map__41763_41815__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41817 = cljs.core.get.call(null,map__41763_41815__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41813);

cljs.core.println.call(null," ",arglists_41817);

if(cljs.core.truth_(doc_41816)){
cljs.core.println.call(null," ",doc_41816);
} else {
}


var G__41818 = cljs.core.next.call(null,seq__41741_41806__$1);
var G__41819 = null;
var G__41820 = (0);
var G__41821 = (0);
seq__41741_41791 = G__41818;
chunk__41742_41792 = G__41819;
count__41743_41793 = G__41820;
i__41744_41794 = G__41821;
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

var seq__41765 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41766 = null;
var count__41767 = (0);
var i__41768 = (0);
while(true){
if((i__41768 < count__41767)){
var role = cljs.core._nth.call(null,chunk__41766,i__41768);
var temp__5735__auto___41822__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41822__$1)){
var spec_41823 = temp__5735__auto___41822__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41823));
} else {
}


var G__41824 = seq__41765;
var G__41825 = chunk__41766;
var G__41826 = count__41767;
var G__41827 = (i__41768 + (1));
seq__41765 = G__41824;
chunk__41766 = G__41825;
count__41767 = G__41826;
i__41768 = G__41827;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__41765);
if(temp__5735__auto____$1){
var seq__41765__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41765__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__41765__$1);
var G__41828 = cljs.core.chunk_rest.call(null,seq__41765__$1);
var G__41829 = c__4556__auto__;
var G__41830 = cljs.core.count.call(null,c__4556__auto__);
var G__41831 = (0);
seq__41765 = G__41828;
chunk__41766 = G__41829;
count__41767 = G__41830;
i__41768 = G__41831;
continue;
} else {
var role = cljs.core.first.call(null,seq__41765__$1);
var temp__5735__auto___41832__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41832__$2)){
var spec_41833 = temp__5735__auto___41832__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41833));
} else {
}


var G__41834 = cljs.core.next.call(null,seq__41765__$1);
var G__41835 = null;
var G__41836 = (0);
var G__41837 = (0);
seq__41765 = G__41834;
chunk__41766 = G__41835;
count__41767 = G__41836;
i__41768 = G__41837;
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
var G__41838 = cljs.core.conj.call(null,via,t);
var G__41839 = cljs.core.ex_cause.call(null,t);
via = G__41838;
t = G__41839;
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
var map__41842 = datafied_throwable;
var map__41842__$1 = (((((!((map__41842 == null))))?(((((map__41842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41842):map__41842);
var via = cljs.core.get.call(null,map__41842__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__41842__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__41842__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41843 = cljs.core.last.call(null,via);
var map__41843__$1 = (((((!((map__41843 == null))))?(((((map__41843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41843):map__41843);
var type = cljs.core.get.call(null,map__41843__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__41843__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__41843__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41844 = data;
var map__41844__$1 = (((((!((map__41844 == null))))?(((((map__41844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41844):map__41844);
var problems = cljs.core.get.call(null,map__41844__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__41844__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__41844__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41845 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__41845__$1 = (((((!((map__41845 == null))))?(((((map__41845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41845):map__41845);
var top_data = map__41845__$1;
var source = cljs.core.get.call(null,map__41845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__41850 = phase;
var G__41850__$1 = (((G__41850 instanceof cljs.core.Keyword))?G__41850.fqn:null);
switch (G__41850__$1) {
case "read-source":
var map__41851 = data;
var map__41851__$1 = (((((!((map__41851 == null))))?(((((map__41851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41851):map__41851);
var line = cljs.core.get.call(null,map__41851__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__41851__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41853 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__41853__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__41853,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41853);
var G__41853__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__41853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41853__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__41853__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41853__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41854 = top_data;
var G__41854__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__41854,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41854);
var G__41854__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__41854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41854__$1);
var G__41854__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__41854__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41854__$2);
var G__41854__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__41854__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41854__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__41854__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41854__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41855 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__41855,(0),null);
var method = cljs.core.nth.call(null,vec__41855,(1),null);
var file = cljs.core.nth.call(null,vec__41855,(2),null);
var line = cljs.core.nth.call(null,vec__41855,(3),null);
var G__41858 = top_data;
var G__41858__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__41858,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41858);
var G__41858__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__41858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41858__$1);
var G__41858__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__41858__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41858__$2);
var G__41858__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__41858__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41858__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__41858__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41858__$4;
}

break;
case "execution":
var vec__41859 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__41859,(0),null);
var method = cljs.core.nth.call(null,vec__41859,(1),null);
var file = cljs.core.nth.call(null,vec__41859,(2),null);
var line = cljs.core.nth.call(null,vec__41859,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__41841_SHARP_){
var or__4126__auto__ = (p1__41841_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__41841_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__41862 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41862__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__41862,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41862);
var G__41862__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__41862__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41862__$1);
var G__41862__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__41862__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41862__$2);
var G__41862__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__41862__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41862__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__41862__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41862__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41850__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41866){
var map__41867 = p__41866;
var map__41867__$1 = (((((!((map__41867 == null))))?(((((map__41867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41867):map__41867);
var triage_data = map__41867__$1;
var phase = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__41867__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__41869 = phase;
var G__41869__$1 = (((G__41869 instanceof cljs.core.Keyword))?G__41869.fqn:null);
switch (G__41869__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41870_41879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41871_41880 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41872_41881 = true;
var _STAR_print_fn_STAR__temp_val__41873_41882 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41872_41881);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41873_41882);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__41864_SHARP_){
return cljs.core.dissoc.call(null,p1__41864_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41871_41880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41870_41879);
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
var _STAR_print_newline_STAR__orig_val__41874_41883 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41875_41884 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41876_41885 = true;
var _STAR_print_fn_STAR__temp_val__41877_41886 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41876_41885);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41877_41886);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__41865_SHARP_){
return cljs.core.dissoc.call(null,p1__41865_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41875_41884);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41874_41883);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41869__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1617925397908
