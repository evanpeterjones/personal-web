// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.db');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.formats');
cljs_personal_web.db.login_BANG_ = (function cljs_personal_web$db$login_BANG_(user,state){
return ajax.core.GET.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__51621_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__51621_SHARP_);
})], null));
});
cljs_personal_web.db.get_feed_BANG_ = (function cljs_personal_web$db$get_feed_BANG_(url,state){
return ajax.core.GET.call(null,"/getRssData",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__51622_SHARP_){
cljs.core.println.call(null,p1__51622_SHARP_);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"podcasts","podcasts",29614212),cljs.core.conj.call(null,new cljs.core.Keyword(null,"podcasts","podcasts",29614212).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),p1__51622_SHARP_));
})], null));
});

//# sourceMappingURL=db.js.map?rel=1618074067311
