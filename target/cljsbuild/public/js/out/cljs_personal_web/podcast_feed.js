// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.podcast_feed');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_personal_web.db');
goog.require('clojure.string');
cljs_personal_web.podcast_feed.row = (function cljs_personal_web$podcast_feed$row(label,input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
cljs_personal_web.podcast_feed.create_label = (function cljs_personal_web$podcast_feed$create_label(l){
return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,clojure.string.replace.call(null,l,/ /,"-")));
});
cljs_personal_web.podcast_feed.input = (function cljs_personal_web$podcast_feed$input(type,label,state){
var id = cljs_personal_web.podcast_feed.create_label.call(null,label);
var value = id.call(null,cljs.core.deref.call(null,state));
return cljs_personal_web.podcast_feed.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),""], null),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(value)?value:null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51625_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,id,p1__51625_SHARP_.target.value);
})], null)], null));
});
cljs_personal_web.podcast_feed.podcast_titles = (function cljs_personal_web$podcast_feed$podcast_titles(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function cljs_personal_web$podcast_feed$podcast_titles_$_iter__51626(s__51627){
return (new cljs.core.LazySeq(null,(function (){
var s__51627__$1 = s__51627;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__51627__$1);
if(temp__5735__auto__){
var s__51627__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51627__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__51627__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__51629 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__51628 = (0);
while(true){
if((i__51628 < size__4528__auto__)){
var p = cljs.core._nth.call(null,c__4527__auto__,i__51628);
cljs.core.chunk_append.call(null,b__51629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p)], null));

var G__51630 = (i__51628 + (1));
i__51628 = G__51630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51629),cljs_personal_web$podcast_feed$podcast_titles_$_iter__51626.call(null,cljs.core.chunk_rest.call(null,s__51627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51629),null);
}
} else {
var p = cljs.core.first.call(null,s__51627__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p)], null),cljs_personal_web$podcast_feed$podcast_titles_$_iter__51626.call(null,cljs.core.rest.call(null,s__51627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"podcasts","podcasts",29614212).cljs$core$IFn$_invoke$arity$1(state));
})()], null);
});
cljs_personal_web.podcast_feed.form = (function (){var bt = "Add Podcast";
var bt_key = cljs_personal_web.podcast_feed.create_label.call(null,bt);
var state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"podcasts","podcasts",29614212),cljs.core.PersistentVector.EMPTY,bt_key,""]));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.col-md-6","div.form-group.col-md-6",1994624250),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.podcast_feed.input,new cljs.core.Keyword(null,"text","text",-1790561697),"Add Podcast",state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add Feed",new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_personal_web.db.get_feed_BANG_.call(null,bt_key.call(null,cljs.core.deref.call(null,state)),state);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),bt_key.call(null,cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.podcast_feed.podcast_titles,state], null)], null)], null)], null);
});
})();

//# sourceMappingURL=podcast_feed.js.map?rel=1618074067322
