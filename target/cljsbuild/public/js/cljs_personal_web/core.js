// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_personal_web.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
cljs_personal_web.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",cljs.core.cst$kw$item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",cljs.core.cst$kw$about], null)], null));
cljs_personal_web.core.path_for = (function cljs_personal_web$core$path_for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10605 = arguments.length;
var i__4737__auto___10606 = (0);
while(true){
if((i__4737__auto___10606 < len__4736__auto___10605)){
args__4742__auto__.push((arguments[i__4737__auto___10606]));

var G__10607 = (i__4737__auto___10606 + (1));
i__4737__auto___10606 = G__10607;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_personal_web.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_personal_web.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__10601){
var vec__10602 = p__10601;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10602,(0),null);
if(cljs.core.truth_(params)){
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(cljs_personal_web.core.router,route,params));
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(cljs_personal_web.core.router,route));
}
}));

(cljs_personal_web.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_personal_web.core.path_for.cljs$lang$applyTo = (function (seq10599){
var G__10600 = cljs.core.first(seq10599);
var seq10599__$1 = cljs.core.next(seq10599);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10600,seq10599__$1);
}));

cljs_personal_web.core.haiku = (function cljs_personal_web$core$haiku(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_hero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$haiku_DASH_profile,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$haiku,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Hello, ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"I'm Evan."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Designer of this site"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u2026and other things"], null)], null)], null)], null);
});
cljs_personal_web.core.image = (function cljs_personal_web$core$image(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_hero,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$profile,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://en.wikipedia.org/wiki/Special:Random"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"evan.png",cljs.core.cst$kw$alt,"Photo taken by Shandon Anderson"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.haiku], null)], null)], null);
});
cljs_personal_web.core.links = (function cljs_personal_web$core$links(title,id,class$,ul_links){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["div.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["span.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function cljs_personal_web$core$links_$_iter__10608(s__10609){
return (new cljs.core.LazySeq(null,(function (){
var s__10609__$1 = s__10609;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10609__$1);
if(temp__5735__auto__){
var s__10609__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10609__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__10609__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__10611 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__10610 = (0);
while(true){
if((i__10610 < size__4528__auto__)){
var li_link = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__10610);
cljs.core.chunk_append(b__10611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,"_blank"], null),li_link),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(li_link)], null)], null));

var G__10612 = (i__10610 + (1));
i__10610 = G__10612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10611),cljs_personal_web$core$links_$_iter__10608(cljs.core.chunk_rest(s__10609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10611),null);
}
} else {
var li_link = cljs.core.first(s__10609__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,"_blank"], null),li_link),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(li_link)], null)], null),cljs_personal_web$core$links_$_iter__10608(cljs.core.rest(s__10609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ul_links);
})()], null)], null);
});
cljs_personal_web.core.work_links = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://linkedin.com/in/evanpeterjones",cljs.core.cst$kw$name,"LinkedIn"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.github.com/evanpeterjones",cljs.core.cst$kw$name,"GitHub"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://internetizens.net",cljs.core.cst$kw$name,"Yapp"], null)], null);
cljs_personal_web.core.play_links = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://twitter.com/evanpeterjones",cljs.core.cst$kw$name,"Twitter"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://instagram.com/evanpeterjones",cljs.core.cst$kw$name,"Instagram"], null)], null);
cljs_personal_web.core.home_page = (function cljs_personal_web$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.image], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_work,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.links,"Work","left","border-red",cljs_personal_web.core.work_links], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.links,"Play","right","border-blue",cljs_personal_web.core.play_links], null)], null)], null)], null);
});
cljs_personal_web.core.about_page = (function cljs_personal_web$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"About Me"], null)], null);
});
});
cljs_personal_web.core.page_for = (function cljs_personal_web$core$page_for(route){
var G__10613 = route;
var G__10613__$1 = (((G__10613 instanceof cljs.core.Keyword))?G__10613.fqn:null);
switch (G__10613__$1) {
case "index":
return new cljs.core.Var(function(){return cljs_personal_web.core.home_page;},cljs.core.cst$sym$cljs_DASH_personal_DASH_web$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs_DASH_personal_DASH_web$core,cljs.core.cst$sym$home_DASH_page,"/Users/evanjones/Code/personal-web/cljs-personal-web/src/cljs/cljs_personal_web/core.cljs",15,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_personal_web.core.home_page)?cljs_personal_web.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return cljs_personal_web.core.about_page;},cljs.core.cst$sym$cljs_DASH_personal_DASH_web$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs_DASH_personal_DASH_web$core,cljs.core.cst$sym$about_DASH_page,"/Users/evanjones/Code/personal-web/cljs-personal-web/src/cljs/cljs_personal_web/core.cljs",17,1,75,75,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs_personal_web.core.about_page)?cljs_personal_web.core.about_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10613__$1)].join('')));

}
});
cljs_personal_web.core.current_page = (function cljs_personal_web$core$current_page(){
return (function (){
var page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$route));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,"1000",cljs.core.cst$kw$padding_DASH_top,"5%"], null)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["\u00A9 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b," by Evan Jones w/ClojureScript"], null)], null)], null)], null);
});
});
cljs_personal_web.core.mount_root = (function cljs_personal_web$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.current_page], null),document.getElementById("app"));
});
cljs_personal_web.core.init_BANG_ = (function cljs_personal_web$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
var match = reitit.frontend.match_by_path(cljs_personal_web.core.router,path);
var current_page = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
var route_params = cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_page,cljs_personal_web.core.page_for(current_page),cljs.core.cst$kw$route_DASH_params,route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(cljs_personal_web.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return cljs_personal_web.core.mount_root();
});
