// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.db');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.formats');
cljs_personal_web.db._handler = (function cljs_personal_web$db$_handler(var_args){
var G__48649 = arguments.length;
switch (G__48649) {
case 1:
return cljs_personal_web.db._handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_personal_web.db._handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_personal_web.db._handler.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs_personal_web.db._handler.call(null,cljs.core.assoc,k);
}));

(cljs_personal_web.db._handler.cljs$core$IFn$_invoke$arity$2 = (function (f,k){
return (function (response,state){
return cljs.core.swap_BANG_.call(null,state,f,k,response);
});
}));

(cljs_personal_web.db._handler.cljs$lang$maxFixedArity = 2);

cljs_personal_web.db.handler = (function cljs_personal_web$db$handler(var_args){
var G__48652 = arguments.length;
switch (G__48652) {
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

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),response);
}));

(cljs_personal_web.db.handler.cljs$lang$maxFixedArity = 2);

cljs_personal_web.db.get_user_BANG_ = (function cljs_personal_web$db$get_user_BANG_(var_args){
var G__48656 = arguments.length;
switch (G__48656) {
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
var result = ajax.core.GET.call(null,"/getUser",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),cljs_personal_web.db.handler], null));
cljs.core.println.call(null,result);

return result;
}));

(cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
var result = ajax.core.GET.call(null,"/getUser",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__48654_SHARP_){
return cljs_personal_web.db.handler.call(null,state,p1__48654_SHARP_);
})], null));
cljs.core.println.call(null,cljs.core.type.call(null,result));

return result;
}));

(cljs_personal_web.db.get_user_BANG_.cljs$lang$maxFixedArity = 1);

cljs_personal_web.db.login_BANG_ = (function cljs_personal_web$db$login_BANG_(user){
return ajax.core.GET.call(null,"/loginTest",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs_personal_web.db._handler.call(null,new cljs.core.Keyword(null,"username","username",1605666410))], null));
});
cljs_personal_web.db.get_feed_BANG_ = (function cljs_personal_web$db$get_feed_BANG_(url){
return ajax.core.GET.call(null,"/getRssData",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs_personal_web.db._handler.call(null,new cljs.core.Keyword(null,"rss-feed","rss-feed",-1518622057))], null));
});

//# sourceMappingURL=db.js.map?rel=1617928987110
