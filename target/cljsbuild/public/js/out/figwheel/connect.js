// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42573__delegate = function (x__42557__auto__){
if(cljs.core.truth_(cljs_personal_web.core.mount_root)){
return cljs.core.apply.call(null,cljs_personal_web.core.mount_root,x__42557__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","cljs-personal-web.core/mount-root","' is missing"].join(''));
}
};
var G__42573 = function (var_args){
var x__42557__auto__ = null;
if (arguments.length > 0) {
var G__42574__i = 0, G__42574__a = new Array(arguments.length -  0);
while (G__42574__i < G__42574__a.length) {G__42574__a[G__42574__i] = arguments[G__42574__i + 0]; ++G__42574__i;}
  x__42557__auto__ = new cljs.core.IndexedSeq(G__42574__a,0,null);
} 
return G__42573__delegate.call(this,x__42557__auto__);};
G__42573.cljs$lang$maxFixedArity = 0;
G__42573.cljs$lang$applyTo = (function (arglist__42575){
var x__42557__auto__ = cljs.core.seq(arglist__42575);
return G__42573__delegate(x__42557__auto__);
});
G__42573.cljs$core$IFn$_invoke$arity$variadic = G__42573__delegate;
return G__42573;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1617925398198
