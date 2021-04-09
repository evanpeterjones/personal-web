// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5994__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5995__i = 0, G__5995__a = new Array(arguments.length -  0);
while (G__5995__i < G__5995__a.length) {G__5995__a[G__5995__i] = arguments[G__5995__i + 0]; ++G__5995__i;}
  args = new cljs.core.IndexedSeq(G__5995__a,0,null);
} 
return G__5994__delegate.call(this,args);};
G__5994.cljs$lang$maxFixedArity = 0;
G__5994.cljs$lang$applyTo = (function (arglist__5996){
var args = cljs.core.seq(arglist__5996);
return G__5994__delegate(args);
});
G__5994.cljs$core$IFn$_invoke$arity$variadic = G__5994__delegate;
return G__5994;
})()
);

(o.error = (function() { 
var G__5997__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5998__i = 0, G__5998__a = new Array(arguments.length -  0);
while (G__5998__i < G__5998__a.length) {G__5998__a[G__5998__i] = arguments[G__5998__i + 0]; ++G__5998__i;}
  args = new cljs.core.IndexedSeq(G__5998__a,0,null);
} 
return G__5997__delegate.call(this,args);};
G__5997.cljs$lang$maxFixedArity = 0;
G__5997.cljs$lang$applyTo = (function (arglist__5999){
var args = cljs.core.seq(arglist__5999);
return G__5997__delegate(args);
});
G__5997.cljs$core$IFn$_invoke$arity$variadic = G__5997__delegate;
return G__5997;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
