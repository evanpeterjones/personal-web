// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_personal_web.password_manager');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_personal_web.db');
goog.require('clojure.string');
console.log(cljs_personal_web.db.login_BANG_("hello"));
cljs_personal_web.password_manager.row = (function cljs_personal_web$password_manager$row(label,input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_5,input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)], null);
});
cljs_personal_web.password_manager.input = (function cljs_personal_web$password_manager$input(type,label,state){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(label));
var value = (function (){var G__7102 = cljs.core.deref(state);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__7102) : id.call(null,G__7102));
})();
return cljs_personal_web.password_manager.row(label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$id,id,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,""], null),cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (p1__7101_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,id,p1__7101_SHARP_.target.value);
})], null)], null));
});
cljs_personal_web.password_manager.validate_user = (function cljs_personal_web$password_manager$validate_user(user){
if(cljs.core.empty_QMARK_(user)){
return "Username cannot be empty";
} else {
return null;
}
});
cljs_personal_web.password_manager.validate_pass = (function cljs_personal_web$password_manager$validate_pass(pass){
if(cljs.core.empty_QMARK_(pass)){
return "Password cannot be empty";
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[a-zA-Z0-9!@#$%^&*()~]{8,20}$/,pass))){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Password does not match the following:",(cljs.core.truth_(cljs.core.re_matches(/^[*]{8,20}$/,pass))?null:"at least 8 characters"),(cljs.core.truth_(cljs.core.re_matches(/^[a-zA-Z]/,pass))?null:"include upper & lower case letters"),(cljs.core.truth_(cljs.core.re_matches(/^[0-9]/,pass))?null:"include a number"),(cljs.core.truth_(cljs.core.re_matches(/^[~!@#$%^&*()]/,pass))?null:"include a special character")], null);
}
}
});
cljs_personal_web.password_manager.val_key = (function cljs_personal_web$password_manager$val_key(keyw){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,cljs_personal_web.password_manager.validate_user,cljs.core.cst$kw$password,cljs_personal_web.password_manager.validate_pass], null);
});
cljs_personal_web.password_manager.validate = (function cljs_personal_web$password_manager$validate(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7103_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_personal_web.password_manager.val_key(p1__7103_SHARP_),(p1__7103_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__7103_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__7103_SHARP_.call(null,state)));
}),cljs.core.keys(cljs.core.deref(state)));
});
cljs_personal_web.password_manager.save_error_BANG_ = (function cljs_personal_web$password_manager$save_error_BANG_(state,error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$error,error);
});
cljs_personal_web.password_manager.error = (function cljs_personal_web$password_manager$error(state){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4529__auto__ = (function cljs_personal_web$password_manager$error_$_iter__7104(s__7105){
return (new cljs.core.LazySeq(null,(function (){
var s__7105__$1 = s__7105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7105__$1);
if(temp__5735__auto__){
var s__7105__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7105__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7105__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7107 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7106 = (0);
while(true){
if((i__7106 < size__4528__auto__)){
var error_message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__7106);
cljs.core.chunk_append(b__7107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,error_message], null));

var G__7108 = (i__7106 + (1));
i__7106 = G__7108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7107),cljs_personal_web$password_manager$error_$_iter__7104(cljs.core.chunk_rest(s__7105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7107),null);
}
} else {
var error_message = cljs.core.first(s__7105__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,error_message], null),cljs_personal_web$password_manager$error_$_iter__7104(cljs.core.rest(s__7105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
})()], null);
});
cljs_personal_web.password_manager.form = (function (){var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,"",cljs.core.cst$kw$password,""], null));
return (function (){
cljs_personal_web.db.get_user_BANG_.cljs$core$IFn$_invoke$arity$1(state);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Create Account"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.input,cljs.core.cst$kw$text,"Username",state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.input,cljs.core.cst$kw$password,"Password",state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_personal_web.password_manager.error,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Login",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_personal_web.password_manager.save_error_BANG_(state,cljs_personal_web.password_manager.validate(state));
}),cljs.core.cst$kw$class,"rounded-sm"], null)], null)], null)], null)], null)], null);
});
})();
