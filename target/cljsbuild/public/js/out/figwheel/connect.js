// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43052__delegate = function (x__43036__auto__){
if(cljs.core.truth_(cljs_personal_web.core.mount_root)){
return cljs.core.apply.call(null,cljs_personal_web.core.mount_root,x__43036__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","cljs-personal-web.core/mount-root","' is missing"].join(''));
}
};
var G__43052 = function (var_args){
var x__43036__auto__ = null;
if (arguments.length > 0) {
var G__43053__i = 0, G__43053__a = new Array(arguments.length -  0);
while (G__43053__i < G__43053__a.length) {G__43053__a[G__43053__i] = arguments[G__43053__i + 0]; ++G__43053__i;}
  x__43036__auto__ = new cljs.core.IndexedSeq(G__43053__a,0,null);
} 
return G__43052__delegate.call(this,x__43036__auto__);};
G__43052.cljs$lang$maxFixedArity = 0;
G__43052.cljs$lang$applyTo = (function (arglist__43054){
var x__43036__auto__ = cljs.core.seq(arglist__43054);
return G__43052__delegate(x__43036__auto__);
});
G__43052.cljs$core$IFn$_invoke$arity$variadic = G__43052__delegate;
return G__43052;
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

//# sourceMappingURL=connect.js.map?rel=1618065941603
