// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.password_manager');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_personal_web.db');
goog.require('clojure.string');
console.log(cljs_personal_web.db.login_BANG_.call(null,"hello"));
cljs_personal_web.password_manager.row = (function cljs_personal_web$password_manager$row(label,input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
cljs_personal_web.password_manager.input = (function cljs_personal_web$password_manager$input(type,label,state){
var id = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,label));
var value = id.call(null,cljs.core.deref.call(null,state));
return cljs_personal_web.password_manager.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),""], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35789_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,id,p1__35789_SHARP_.target.value);
})], null)], null));
});
cljs_personal_web.password_manager.validate_user = (function cljs_personal_web$password_manager$validate_user(user){
if(cljs.core.empty_QMARK_.call(null,user)){
return "Username cannot be empty";
} else {
return null;
}
});
cljs_personal_web.password_manager.validate_pass = (function cljs_personal_web$password_manager$validate_pass(pass){
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
cljs_personal_web.password_manager.val_key = (function cljs_personal_web$password_manager$val_key(keyw){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs_personal_web.password_manager.validate_user,new cljs.core.Keyword(null,"password","password",417022471),cljs_personal_web.password_manager.validate_pass], null);
});
cljs_personal_web.password_manager.validate = (function cljs_personal_web$password_manager$validate(state){
return cljs.core.map.call(null,(function (p1__35790_SHARP_){
return cljs.core.apply.call(null,cljs_personal_web.password_manager.val_key.call(null,p1__35790_SHARP_),p1__35790_SHARP_.call(null,state));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,state)));
});
cljs_personal_web.password_manager.save_error_BANG_ = (function cljs_personal_web$password_manager$save_error_BANG_(state,error){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),error);
});
cljs_personal_web.password_manager.error = (function cljs_personal_web$password_manager$error(state){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function cljs_personal_web$password_manager$error_$_iter__35791(s__35792){
return (new cljs.core.LazySeq(null,(function (){
var s__35792__$1 = s__35792;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__35792__$1);
if(temp__5735__auto__){
var s__35792__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35792__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__35792__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__35794 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__35793 = (0);
while(true){
if((i__35793 < size__4528__auto__)){
var error_message = cljs.core._nth.call(null,c__4527__auto__,i__35793);
cljs.core.chunk_append.call(null,b__35794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error_message], null));

var G__35795 = (i__35793 + (1));
i__35793 = G__35795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35794),cljs_personal_web$password_manager$error_$_iter__35791.call(null,cljs.core.chunk_rest.call(null,s__35792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35794),null);
}
} else {
var error_message = cljs.core.first.call(null,s__35792__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error_message], null),cljs_personal_web$password_manager$error_$_iter__35791.call(null,cljs.core.rest.call(null,s__35792__$2)));
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
cljs_personal_web.password_manager.form = (function (){var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),""], null));
return (function (){
cljs_personal_web.db.get_user_BANG_.call(null,state);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.col-md-6","div.form-group.col-md-6",1994624250),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Create Account"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.input,new cljs.core.Keyword(null,"text","text",-1790561697),"Username",state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.input,new cljs.core.Keyword(null,"password","password",417022471),"Password",state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.error,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_personal_web.password_manager.save_error_BANG_.call(null,state,cljs_personal_web.password_manager.validate.call(null,state));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-sm"], null)], null)], null)], null)], null)], null);
});
})();

//# sourceMappingURL=password_manager.js.map?rel=1617925394675
