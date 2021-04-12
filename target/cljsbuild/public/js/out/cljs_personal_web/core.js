// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.core');
goog.require('cljs.core');
goog.require('cljs_personal_web.draw');
goog.require('cljs_personal_web.world_map');
goog.require('cljs_personal_web.podcast_feed');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
cljs_personal_web.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.Keyword(null,"login","login",55217519)], null)], null));
cljs_personal_web.core.path_for = (function cljs_personal_web$core$path_for(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51639 = arguments.length;
var i__4737__auto___51640 = (0);
while(true){
if((i__4737__auto___51640 < len__4736__auto___51639)){
args__4742__auto__.push((arguments[i__4737__auto___51640]));

var G__51641 = (i__4737__auto___51640 + (1));
i__4737__auto___51640 = G__51641;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_personal_web.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_personal_web.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__51635){
var vec__51636 = p__51635;
var params = cljs.core.nth.call(null,vec__51636,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,cljs_personal_web.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,cljs_personal_web.core.router,route));
}
}));

(cljs_personal_web.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_personal_web.core.path_for.cljs$lang$applyTo = (function (seq51633){
var G__51634 = cljs.core.first.call(null,seq51633);
var seq51633__$1 = cljs.core.next.call(null,seq51633);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51634,seq51633__$1);
}));

cljs_personal_web.core.haiku = (function cljs_personal_web$core$haiku(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero","div#hero",120142186),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.haiku-profile","div.haiku-profile",-1142440043),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.haiku","div.haiku",1322339873),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"I'm Evan."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Designer of this site"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"and other ~fun things~"], null)], null)], null)], null);
});
cljs_personal_web.core.image = (function cljs_personal_web$core$image(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#hero","div#hero",120142186),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile","div.profile",-230434255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://en.wikipedia.org/wiki/Special:Random"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"evan.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Photo taken by Shandon Anderson"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.haiku], null)], null)], null);
});
cljs_personal_web.core.links = (function cljs_personal_web$core$links(title,id,class$,ul_links){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["div.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["span.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function cljs_personal_web$core$links_$_iter__51642(s__51643){
return (new cljs.core.LazySeq(null,(function (){
var s__51643__$1 = s__51643;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__51643__$1);
if(temp__5735__auto__){
var s__51643__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51643__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__51643__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__51645 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__51644 = (0);
while(true){
if((i__51644 < size__4528__auto__)){
var li_link = cljs.core._nth.call(null,c__4527__auto__,i__51644);
cljs.core.chunk_append.call(null,b__51645,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),li_link,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(li_link)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),li_link], null)));

var G__51646 = (i__51644 + (1));
i__51644 = G__51646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51645),cljs_personal_web$core$links_$_iter__51642.call(null,cljs.core.chunk_rest.call(null,s__51643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51645),null);
}
} else {
var li_link = cljs.core.first.call(null,s__51643__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),li_link,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(li_link)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),li_link], null)),cljs_personal_web$core$links_$_iter__51642.call(null,cljs.core.rest.call(null,s__51643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,ul_links);
})()], null)], null);
});
cljs_personal_web.core.home_page = (function cljs_personal_web$core$home_page(){
var work_links = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://linkedin.com/in/evanpeterjones",new cljs.core.Keyword(null,"name","name",1843675177),"LinkedIn"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.github.com/evanpeterjones",new cljs.core.Keyword(null,"name","name",1843675177),"GitHub"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs_personal_web.core.path_for.call(null,new cljs.core.Keyword(null,"login","login",55217519)),new cljs.core.Keyword(null,"name","name",1843675177),"~fun things~"], null)], null);
var play_links = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/evanpeterjones",new cljs.core.Keyword(null,"name","name",1843675177),"Twitter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://instagram.com/evanpeterjones",new cljs.core.Keyword(null,"name","name",1843675177),"Instagram"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://internetizens.net",new cljs.core.Keyword(null,"name","name",1843675177),"Yapp"], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.image], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#work","div#work",423182864),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.links,"Me","left","border-red",work_links], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.links,"Play","right","border-blue",play_links], null)], null)], null)], null);
});
cljs_personal_web.core.login = (function cljs_personal_web$core$login(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.podcast_feed.form], null);
});
});
cljs_personal_web.core.footer = (function cljs_personal_web$core$footer(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\u00A9 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)," by Evan Jones w/ClojureScript"], null)], null)], null);
});
});
cljs_personal_web.core.page_for = (function cljs_personal_web$core$page_for(route){
var G__51647 = route;
var G__51647__$1 = (((G__51647 instanceof cljs.core.Keyword))?G__51647.fqn:null);
switch (G__51647__$1) {
case "index":
return new cljs.core.Var(function(){return cljs_personal_web.core.home_page;},new cljs.core.Symbol("cljs-personal-web.core","home-page","cljs-personal-web.core/home-page",901358132,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-personal-web.core","cljs-personal-web.core",-1693813605,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/evanjones/Code/personal-web/src/cljs/cljs_personal_web/core.cljs",15,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_personal_web.core.home_page)?cljs_personal_web.core.home_page.cljs$lang$test:null)]));

break;
case "login":
return new cljs.core.Var(function(){return cljs_personal_web.core.login;},new cljs.core.Symbol("cljs-personal-web.core","login","cljs-personal-web.core/login",-1676952199,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-personal-web.core","cljs-personal-web.core",-1693813605,null),new cljs.core.Symbol(null,"login","login",1695749046,null),"/Users/evanjones/Code/personal-web/src/cljs/cljs_personal_web/core.cljs",12,1,76,76,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs_personal_web.core.login)?cljs_personal_web.core.login.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51647__$1)].join('')));

}
});
cljs_personal_web.core.current_page = (function cljs_personal_web$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),((cljs.core._EQ_.call(null,page,new cljs.core.Var(function(){return cljs_personal_web.core.login;},new cljs.core.Symbol("cljs-personal-web.core","login","cljs-personal-web.core/login",-1676952199,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-personal-web.core","cljs-personal-web.core",-1693813605,null),new cljs.core.Symbol(null,"login","login",1695749046,null),"/Users/evanjones/Code/personal-web/src/cljs/cljs_personal_web/core.cljs",12,1,76,76,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs_personal_web.core.login)?cljs_personal_web.core.login.cljs$lang$test:null)]))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),cljs_personal_web.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.footer], null)], null);
});
});
cljs_personal_web.core.mount_root = (function cljs_personal_web$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.core.current_page], null),document.getElementById("app"));
});
cljs_personal_web.core.init_BANG_ = (function cljs_personal_web$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,cljs_personal_web.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs_personal_web.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,cljs_personal_web.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return cljs_personal_web.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1618074067346
