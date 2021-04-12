// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.login');
goog.require('cljs.core');
cljs_personal_web.login.val_key = (function cljs_personal_web$login$val_key(x){
return null;
});
cljs_personal_web.login.validate = (function cljs_personal_web$login$validate(state){
return cljs.core.map.call(null,(function (p1__51661_SHARP_){
return cljs.core.apply.call(null,cljs_personal_web.login.val_key.call(null,p1__51661_SHARP_),p1__51661_SHARP_.call(null,state));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,state)));
});
cljs_personal_web.login.validate_user = (function cljs_personal_web$login$validate_user(user){
if(cljs.core.empty_QMARK_.call(null,user)){
return "Username cannot be empty";
} else {
return null;
}
});
cljs_personal_web.login.validate_pass = (function cljs_personal_web$login$validate_pass(pass){
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

//# sourceMappingURL=login.js.map?rel=1618183573293
