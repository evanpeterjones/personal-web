// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.podcast_feed');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_personal_web.db');
goog.require('clojure.string');
console.log(cljs_personal_web.db.login_BANG_.call(null,"hello"));
cljs_personal_web.podcast_feed.row = (function cljs_personal_web$podcast_feed$row(label,input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
cljs_personal_web.podcast_feed.input = (function cljs_personal_web$podcast_feed$input(type,label,state){
var id = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,label));
var value = id.call(null,cljs.core.deref.call(null,state));
return cljs_personal_web.podcast_feed.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),""], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49307_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,id,p1__49307_SHARP_.target.value);
})], null)], null));
});
cljs_personal_web.podcast_feed.validate_user = (function cljs_personal_web$podcast_feed$validate_user(user){
if(cljs.core.empty_QMARK_.call(null,user)){
return "Username cannot be empty";
} else {
return null;
}
});
cljs_personal_web.podcast_feed.validate_pass = (function cljs_personal_web$podcast_feed$validate_pass(pass){
if(cljs.core.empty_QMARK_.call(null,pass)){
return "Password cannot be empty";
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^[a-zA-Z0-9!@#$%^&*()~]{8,20}$/,pass))){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Password does not match the following:",(cljs.core.truth_(cljs.core.re_matches.call(null,/^[*]{8,20}$/,pass))?null:"at least 8 characters"),(cljs.core.truth_(cljs.core.re_matches.call(null,/^[a-zA-Z]/,pass))?null:"include upper & lower case letters"),(cljs.core.truth_(cljs.core.re_matches.call(null,/^[0-9]/,pass))?null:"include a number"),(cljs.core.truth_(cljs.core.re_matches.call(null,/^[~!@#$%^&*()]/,pass))?null:"include a special character")], null);
}
}
});
cljs_personal_web.podcast_feed.val_key = (function cljs_personal_web$podcast_feed$val_key(keyw){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs_personal_web.podcast_feed.validate_user,new cljs.core.Keyword(null,"password","password",417022471),cljs_personal_web.podcast_feed.validate_pass], null);
});
cljs_personal_web.podcast_feed.validate = (function cljs_personal_web$podcast_feed$validate(state){
return cljs.core.map.call(null,(function (p1__49308_SHARP_){
return cljs.core.apply.call(null,cljs_personal_web.podcast_feed.val_key.call(null,p1__49308_SHARP_),p1__49308_SHARP_.call(null,state));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,state)));
});
cljs_personal_web.podcast_feed.save_error_BANG_ = (function cljs_personal_web$podcast_feed$save_error_BANG_(state,error){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),error);
});
cljs_personal_web.podcast_feed.error = (function cljs_personal_web$podcast_feed$error(state){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function cljs_personal_web$podcast_feed$error_$_iter__49309(s__49310){
return (new cljs.core.LazySeq(null,(function (){
var s__49310__$1 = s__49310;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__49310__$1);
if(temp__5735__auto__){
var s__49310__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49310__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__49310__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__49312 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__49311 = (0);
while(true){
if((i__49311 < size__4528__auto__)){
var error_message = cljs.core._nth.call(null,c__4527__auto__,i__49311);
cljs.core.chunk_append.call(null,b__49312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error_message], null));

var G__49313 = (i__49311 + (1));
i__49311 = G__49313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49312),cljs_personal_web$podcast_feed$error_$_iter__49309.call(null,cljs.core.chunk_rest.call(null,s__49310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49312),null);
}
} else {
var error_message = cljs.core.first.call(null,s__49310__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error_message], null),cljs_personal_web$podcast_feed$error_$_iter__49309.call(null,cljs.core.rest.call(null,s__49310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
})()], null);
});
cljs_personal_web.podcast_feed.get_rss_feed = (function cljs_personal_web$podcast_feed$get_rss_feed(url){
return null;
});
cljs_personal_web.podcast_feed.podcast_titles = (function cljs_personal_web$podcast_feed$podcast_titles(state){
return null;
});
cljs_personal_web.podcast_feed.form = (function (){var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"podcasts","podcasts",29614212),cljs.core.PersistentVector.EMPTY], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.col-md-6","div.form-group.col-md-6",1994624250),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Add Podcast"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.podcast_feed.podcast_titles,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.podcast_feed.input,new cljs.core.Keyword(null,"text","text",-1790561697),"Podcast Feed",state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add Feed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-sm"], null)], null)], null)], null)], null)], null);
});
})();

//# sourceMappingURL=podcast_feed.js.map?rel=1617934623428
