// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_personal_web.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('ajax.formats');
cljs_personal_web.db.handler = (function cljs_personal_web$db$handler(var_args){
var G__7093 = arguments.length;
switch (G__7093) {
case 1:
return cljs_personal_web.db.handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_personal_web.db.handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_personal_web.db.handler.cljs$core$IFn$_invoke$arity$1 = (function (response){
return response;
}));

(cljs_personal_web.db.handler.cljs$core$IFn$_invoke$arity$2 = (function (state,response){
console.log(response);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$username,response);
}));

(cljs_personal_web.db.handler.cljs$lang$maxFixedArity = 2);

cljs_personal_web.db.get_user_BANG_ = (function cljs_personal_web$db$get_user_BANG_(var_args){
var G__7097 = arguments.length;
switch (G__7097) {
case 0:
return cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
var result = ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/getUser",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs_personal_web.db.handler], null)], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));

return result;
}));

(cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
var result = ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/getUser",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (p1__7095_SHARP_){
return cljs_personal_web.db.handler.cljs$core$IFn$_invoke$arity$2(state,p1__7095_SHARP_);
})], null)], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(result)], 0));

return result;
}));

(cljs_personal_web.db.get_user_BANG_.cljs$lang$maxFixedArity = 1);

cljs_personal_web.db.login_BANG_ = (function cljs_personal_web$db$login_BANG_(user){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/loginTest",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null),cljs.core.cst$kw$handler,cljs_personal_web.db.handler], null)], 0));
});
