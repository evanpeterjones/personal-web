// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39060 = arguments.length;
var i__4737__auto___39061 = (0);
while(true){
if((i__4737__auto___39061 < len__4736__auto___39060)){
args__4742__auto__.push((arguments[i__4737__auto___39061]));

var G__39062 = (i__4737__auto___39061 + (1));
i__4737__auto___39061 = G__39062;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39056){
var vec__39057 = p__39056;
var default$ = cljs.core.nth.call(null,vec__39057,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq39054){
var G__39055 = cljs.core.first.call(null,seq39054);
var seq39054__$1 = cljs.core.next.call(null,seq39054);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39055,seq39054__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39069 = arguments.length;
var i__4737__auto___39070 = (0);
while(true){
if((i__4737__auto___39070 < len__4736__auto___39069)){
args__4742__auto__.push((arguments[i__4737__auto___39070]));

var G__39071 = (i__4737__auto___39070 + (1));
i__4737__auto___39070 = G__39071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39065){
var vec__39066 = p__39065;
var default$ = cljs.core.nth.call(null,vec__39066,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq39063){
var G__39064 = cljs.core.first.call(null,seq39063);
var seq39063__$1 = cljs.core.next.call(null,seq39063);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39064,seq39063__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39074 = arguments.length;
var i__4737__auto___39075 = (0);
while(true){
if((i__4737__auto___39075 < len__4736__auto___39074)){
args__4742__auto__.push((arguments[i__4737__auto___39075]));

var G__39076 = (i__4737__auto___39075 + (1));
i__4737__auto___39075 = G__39076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39072){
var G__39073 = cljs.core.first.call(null,seq39072);
var seq39072__$1 = cljs.core.next.call(null,seq39072);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39073,seq39072__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39083 = arguments.length;
var i__4737__auto___39084 = (0);
while(true){
if((i__4737__auto___39084 < len__4736__auto___39083)){
args__4742__auto__.push((arguments[i__4737__auto___39084]));

var G__39085 = (i__4737__auto___39084 + (1));
i__4737__auto___39084 = G__39085;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39079){
var vec__39080 = p__39079;
var default$ = cljs.core.nth.call(null,vec__39080,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39077){
var G__39078 = cljs.core.first.call(null,seq39077);
var seq39077__$1 = cljs.core.next.call(null,seq39077);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39078,seq39077__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39092 = arguments.length;
var i__4737__auto___39093 = (0);
while(true){
if((i__4737__auto___39093 < len__4736__auto___39092)){
args__4742__auto__.push((arguments[i__4737__auto___39093]));

var G__39094 = (i__4737__auto___39093 + (1));
i__4737__auto___39093 = G__39094;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39088){
var vec__39089 = p__39088;
var default$ = cljs.core.nth.call(null,vec__39089,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39086){
var G__39087 = cljs.core.first.call(null,seq39086);
var seq39086__$1 = cljs.core.next.call(null,seq39086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39087,seq39086__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39099 = arguments.length;
var i__4737__auto___39100 = (0);
while(true){
if((i__4737__auto___39100 < len__4736__auto___39099)){
args__4742__auto__.push((arguments[i__4737__auto___39100]));

var G__39101 = (i__4737__auto___39100 + (1));
i__4737__auto___39100 = G__39101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39095_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39095_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39096){
var G__39097 = cljs.core.first.call(null,seq39096);
var seq39096__$1 = cljs.core.next.call(null,seq39096);
var G__39098 = cljs.core.first.call(null,seq39096__$1);
var seq39096__$2 = cljs.core.next.call(null,seq39096__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39097,G__39098,seq39096__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39106 = arguments.length;
var i__4737__auto___39107 = (0);
while(true){
if((i__4737__auto___39107 < len__4736__auto___39106)){
args__4742__auto__.push((arguments[i__4737__auto___39107]));

var G__39108 = (i__4737__auto___39107 + (1));
i__4737__auto___39107 = G__39108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39102_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39102_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39103){
var G__39104 = cljs.core.first.call(null,seq39103);
var seq39103__$1 = cljs.core.next.call(null,seq39103);
var G__39105 = cljs.core.first.call(null,seq39103__$1);
var seq39103__$2 = cljs.core.next.call(null,seq39103__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39104,G__39105,seq39103__$2);
}));


//# sourceMappingURL=session.js.map?rel=1618065937785
