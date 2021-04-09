// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37294 = arguments.length;
switch (G__37294) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37295 = (function (f,blockable,meta37296){
this.f = f;
this.blockable = blockable;
this.meta37296 = meta37296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37297,meta37296__$1){
var self__ = this;
var _37297__$1 = this;
return (new cljs.core.async.t_cljs$core$async37295(self__.f,self__.blockable,meta37296__$1));
}));

(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37297){
var self__ = this;
var _37297__$1 = this;
return self__.meta37296;
}));

(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37296","meta37296",-1048117529,null)], null);
}));

(cljs.core.async.t_cljs$core$async37295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37295");

(cljs.core.async.t_cljs$core$async37295.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37295.
 */
cljs.core.async.__GT_t_cljs$core$async37295 = (function cljs$core$async$__GT_t_cljs$core$async37295(f__$1,blockable__$1,meta37296){
return (new cljs.core.async.t_cljs$core$async37295(f__$1,blockable__$1,meta37296));
});

}

return (new cljs.core.async.t_cljs$core$async37295(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37301 = arguments.length;
switch (G__37301) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37304 = arguments.length;
switch (G__37304) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37307 = arguments.length;
switch (G__37307) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37309 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37309);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_37309);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37311 = arguments.length;
switch (G__37311) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___37313 = n;
var x_37314 = (0);
while(true){
if((x_37314 < n__4613__auto___37313)){
(a[x_37314] = (0));

var G__37315 = (x_37314 + (1));
x_37314 = G__37315;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37316 = (i + (1));
i = G__37316;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37317 = (function (flag,meta37318){
this.flag = flag;
this.meta37318 = meta37318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37319,meta37318__$1){
var self__ = this;
var _37319__$1 = this;
return (new cljs.core.async.t_cljs$core$async37317(self__.flag,meta37318__$1));
}));

(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37319){
var self__ = this;
var _37319__$1 = this;
return self__.meta37318;
}));

(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37318","meta37318",-1187711895,null)], null);
}));

(cljs.core.async.t_cljs$core$async37317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37317");

(cljs.core.async.t_cljs$core$async37317.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37317.
 */
cljs.core.async.__GT_t_cljs$core$async37317 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37317(flag__$1,meta37318){
return (new cljs.core.async.t_cljs$core$async37317(flag__$1,meta37318));
});

}

return (new cljs.core.async.t_cljs$core$async37317(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37320 = (function (flag,cb,meta37321){
this.flag = flag;
this.cb = cb;
this.meta37321 = meta37321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37322,meta37321__$1){
var self__ = this;
var _37322__$1 = this;
return (new cljs.core.async.t_cljs$core$async37320(self__.flag,self__.cb,meta37321__$1));
}));

(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37322){
var self__ = this;
var _37322__$1 = this;
return self__.meta37321;
}));

(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37321","meta37321",1135850689,null)], null);
}));

(cljs.core.async.t_cljs$core$async37320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37320");

(cljs.core.async.t_cljs$core$async37320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37320.
 */
cljs.core.async.__GT_t_cljs$core$async37320 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37320(flag__$1,cb__$1,meta37321){
return (new cljs.core.async.t_cljs$core$async37320(flag__$1,cb__$1,meta37321));
});

}

return (new cljs.core.async.t_cljs$core$async37320(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37323_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37323_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37324_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37324_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37325 = (i + (1));
i = G__37325;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37331 = arguments.length;
var i__4737__auto___37332 = (0);
while(true){
if((i__4737__auto___37332 < len__4736__auto___37331)){
args__4742__auto__.push((arguments[i__4737__auto___37332]));

var G__37333 = (i__4737__auto___37332 + (1));
i__4737__auto___37332 = G__37333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37328){
var map__37329 = p__37328;
var map__37329__$1 = (((((!((map__37329 == null))))?(((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37329):map__37329);
var opts = map__37329__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37326){
var G__37327 = cljs.core.first.call(null,seq37326);
var seq37326__$1 = cljs.core.next.call(null,seq37326);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37327,seq37326__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37335 = arguments.length;
switch (G__37335) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37234__auto___37381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37359){
var state_val_37360 = (state_37359[(1)]);
if((state_val_37360 === (7))){
var inst_37355 = (state_37359[(2)]);
var state_37359__$1 = state_37359;
var statearr_37361_37382 = state_37359__$1;
(statearr_37361_37382[(2)] = inst_37355);

(statearr_37361_37382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (1))){
var state_37359__$1 = state_37359;
var statearr_37362_37383 = state_37359__$1;
(statearr_37362_37383[(2)] = null);

(statearr_37362_37383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (4))){
var inst_37338 = (state_37359[(7)]);
var inst_37338__$1 = (state_37359[(2)]);
var inst_37339 = (inst_37338__$1 == null);
var state_37359__$1 = (function (){var statearr_37363 = state_37359;
(statearr_37363[(7)] = inst_37338__$1);

return statearr_37363;
})();
if(cljs.core.truth_(inst_37339)){
var statearr_37364_37384 = state_37359__$1;
(statearr_37364_37384[(1)] = (5));

} else {
var statearr_37365_37385 = state_37359__$1;
(statearr_37365_37385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (13))){
var state_37359__$1 = state_37359;
var statearr_37366_37386 = state_37359__$1;
(statearr_37366_37386[(2)] = null);

(statearr_37366_37386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (6))){
var inst_37338 = (state_37359[(7)]);
var state_37359__$1 = state_37359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37359__$1,(11),to,inst_37338);
} else {
if((state_val_37360 === (3))){
var inst_37357 = (state_37359[(2)]);
var state_37359__$1 = state_37359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37359__$1,inst_37357);
} else {
if((state_val_37360 === (12))){
var state_37359__$1 = state_37359;
var statearr_37367_37387 = state_37359__$1;
(statearr_37367_37387[(2)] = null);

(statearr_37367_37387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (2))){
var state_37359__$1 = state_37359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37359__$1,(4),from);
} else {
if((state_val_37360 === (11))){
var inst_37348 = (state_37359[(2)]);
var state_37359__$1 = state_37359;
if(cljs.core.truth_(inst_37348)){
var statearr_37368_37388 = state_37359__$1;
(statearr_37368_37388[(1)] = (12));

} else {
var statearr_37369_37389 = state_37359__$1;
(statearr_37369_37389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (9))){
var state_37359__$1 = state_37359;
var statearr_37370_37390 = state_37359__$1;
(statearr_37370_37390[(2)] = null);

(statearr_37370_37390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (5))){
var state_37359__$1 = state_37359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37371_37391 = state_37359__$1;
(statearr_37371_37391[(1)] = (8));

} else {
var statearr_37372_37392 = state_37359__$1;
(statearr_37372_37392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (14))){
var inst_37353 = (state_37359[(2)]);
var state_37359__$1 = state_37359;
var statearr_37373_37393 = state_37359__$1;
(statearr_37373_37393[(2)] = inst_37353);

(statearr_37373_37393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (10))){
var inst_37345 = (state_37359[(2)]);
var state_37359__$1 = state_37359;
var statearr_37374_37394 = state_37359__$1;
(statearr_37374_37394[(2)] = inst_37345);

(statearr_37374_37394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37360 === (8))){
var inst_37342 = cljs.core.async.close_BANG_.call(null,to);
var state_37359__$1 = state_37359;
var statearr_37375_37395 = state_37359__$1;
(statearr_37375_37395[(2)] = inst_37342);

(statearr_37375_37395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_37376 = [null,null,null,null,null,null,null,null];
(statearr_37376[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_37376[(1)] = (1));

return statearr_37376;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_37359){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37377){if((e37377 instanceof Object)){
var ex__37143__auto__ = e37377;
var statearr_37378_37396 = state_37359;
(statearr_37378_37396[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37397 = state_37359;
state_37359 = G__37397;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_37359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_37359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37379 = f__37235__auto__.call(null);
(statearr_37379[(6)] = c__37234__auto___37381);

return statearr_37379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__37398){
var vec__37399 = p__37398;
var v = cljs.core.nth.call(null,vec__37399,(0),null);
var p = cljs.core.nth.call(null,vec__37399,(1),null);
var job = vec__37399;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37234__auto___37570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (1))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37406__$1,(2),res,v);
} else {
if((state_val_37407 === (2))){
var inst_37403 = (state_37406[(2)]);
var inst_37404 = cljs.core.async.close_BANG_.call(null,res);
var state_37406__$1 = (function (){var statearr_37408 = state_37406;
(statearr_37408[(7)] = inst_37403);

return statearr_37408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_37409 = [null,null,null,null,null,null,null,null];
(statearr_37409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__);

(statearr_37409[(1)] = (1));

return statearr_37409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1 = (function (state_37406){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37410){if((e37410 instanceof Object)){
var ex__37143__auto__ = e37410;
var statearr_37411_37571 = state_37406;
(statearr_37411_37571[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37572 = state_37406;
state_37406 = G__37572;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37412 = f__37235__auto__.call(null);
(statearr_37412[(6)] = c__37234__auto___37570);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__37413){
var vec__37414 = p__37413;
var v = cljs.core.nth.call(null,vec__37414,(0),null);
var p = cljs.core.nth.call(null,vec__37414,(1),null);
var job = vec__37414;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___37573 = n;
var __37574 = (0);
while(true){
if((__37574 < n__4613__auto___37573)){
var G__37417_37575 = type;
var G__37417_37576__$1 = (((G__37417_37575 instanceof cljs.core.Keyword))?G__37417_37575.fqn:null);
switch (G__37417_37576__$1) {
case "compute":
var c__37234__auto___37578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37574,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = ((function (__37574,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function (state_37430){
var state_val_37431 = (state_37430[(1)]);
if((state_val_37431 === (1))){
var state_37430__$1 = state_37430;
var statearr_37432_37579 = state_37430__$1;
(statearr_37432_37579[(2)] = null);

(statearr_37432_37579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (2))){
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37430__$1,(4),jobs);
} else {
if((state_val_37431 === (3))){
var inst_37428 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37430__$1,inst_37428);
} else {
if((state_val_37431 === (4))){
var inst_37420 = (state_37430[(2)]);
var inst_37421 = process.call(null,inst_37420);
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37421)){
var statearr_37433_37580 = state_37430__$1;
(statearr_37433_37580[(1)] = (5));

} else {
var statearr_37434_37581 = state_37430__$1;
(statearr_37434_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (5))){
var state_37430__$1 = state_37430;
var statearr_37435_37582 = state_37430__$1;
(statearr_37435_37582[(2)] = null);

(statearr_37435_37582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (6))){
var state_37430__$1 = state_37430;
var statearr_37436_37583 = state_37430__$1;
(statearr_37436_37583[(2)] = null);

(statearr_37436_37583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (7))){
var inst_37426 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37437_37584 = state_37430__$1;
(statearr_37437_37584[(2)] = inst_37426);

(statearr_37437_37584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37574,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
;
return ((function (__37574,switch__37139__auto__,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_37438 = [null,null,null,null,null,null,null];
(statearr_37438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__);

(statearr_37438[(1)] = (1));

return statearr_37438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1 = (function (state_37430){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37439){if((e37439 instanceof Object)){
var ex__37143__auto__ = e37439;
var statearr_37440_37585 = state_37430;
(statearr_37440_37585[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37586 = state_37430;
state_37430 = G__37586;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = function(state_37430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1.call(this,state_37430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__;
})()
;})(__37574,switch__37139__auto__,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
})();
var state__37236__auto__ = (function (){var statearr_37441 = f__37235__auto__.call(null);
(statearr_37441[(6)] = c__37234__auto___37578);

return statearr_37441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
});})(__37574,c__37234__auto___37578,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
);


break;
case "async":
var c__37234__auto___37587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37574,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = ((function (__37574,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function (state_37454){
var state_val_37455 = (state_37454[(1)]);
if((state_val_37455 === (1))){
var state_37454__$1 = state_37454;
var statearr_37456_37588 = state_37454__$1;
(statearr_37456_37588[(2)] = null);

(statearr_37456_37588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37455 === (2))){
var state_37454__$1 = state_37454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37454__$1,(4),jobs);
} else {
if((state_val_37455 === (3))){
var inst_37452 = (state_37454[(2)]);
var state_37454__$1 = state_37454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37454__$1,inst_37452);
} else {
if((state_val_37455 === (4))){
var inst_37444 = (state_37454[(2)]);
var inst_37445 = async.call(null,inst_37444);
var state_37454__$1 = state_37454;
if(cljs.core.truth_(inst_37445)){
var statearr_37457_37589 = state_37454__$1;
(statearr_37457_37589[(1)] = (5));

} else {
var statearr_37458_37590 = state_37454__$1;
(statearr_37458_37590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37455 === (5))){
var state_37454__$1 = state_37454;
var statearr_37459_37591 = state_37454__$1;
(statearr_37459_37591[(2)] = null);

(statearr_37459_37591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37455 === (6))){
var state_37454__$1 = state_37454;
var statearr_37460_37592 = state_37454__$1;
(statearr_37460_37592[(2)] = null);

(statearr_37460_37592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37455 === (7))){
var inst_37450 = (state_37454[(2)]);
var state_37454__$1 = state_37454;
var statearr_37461_37593 = state_37454__$1;
(statearr_37461_37593[(2)] = inst_37450);

(statearr_37461_37593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37574,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
;
return ((function (__37574,switch__37139__auto__,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_37462 = [null,null,null,null,null,null,null];
(statearr_37462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__);

(statearr_37462[(1)] = (1));

return statearr_37462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1 = (function (state_37454){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37463){if((e37463 instanceof Object)){
var ex__37143__auto__ = e37463;
var statearr_37464_37594 = state_37454;
(statearr_37464_37594[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37595 = state_37454;
state_37454 = G__37595;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = function(state_37454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1.call(this,state_37454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__;
})()
;})(__37574,switch__37139__auto__,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
})();
var state__37236__auto__ = (function (){var statearr_37465 = f__37235__auto__.call(null);
(statearr_37465[(6)] = c__37234__auto___37587);

return statearr_37465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
});})(__37574,c__37234__auto___37587,G__37417_37575,G__37417_37576__$1,n__4613__auto___37573,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37417_37576__$1)].join('')));

}

var G__37596 = (__37574 + (1));
__37574 = G__37596;
continue;
} else {
}
break;
}

var c__37234__auto___37597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37487){
var state_val_37488 = (state_37487[(1)]);
if((state_val_37488 === (7))){
var inst_37483 = (state_37487[(2)]);
var state_37487__$1 = state_37487;
var statearr_37489_37598 = state_37487__$1;
(statearr_37489_37598[(2)] = inst_37483);

(statearr_37489_37598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (1))){
var state_37487__$1 = state_37487;
var statearr_37490_37599 = state_37487__$1;
(statearr_37490_37599[(2)] = null);

(statearr_37490_37599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (4))){
var inst_37468 = (state_37487[(7)]);
var inst_37468__$1 = (state_37487[(2)]);
var inst_37469 = (inst_37468__$1 == null);
var state_37487__$1 = (function (){var statearr_37491 = state_37487;
(statearr_37491[(7)] = inst_37468__$1);

return statearr_37491;
})();
if(cljs.core.truth_(inst_37469)){
var statearr_37492_37600 = state_37487__$1;
(statearr_37492_37600[(1)] = (5));

} else {
var statearr_37493_37601 = state_37487__$1;
(statearr_37493_37601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (6))){
var inst_37473 = (state_37487[(8)]);
var inst_37468 = (state_37487[(7)]);
var inst_37473__$1 = cljs.core.async.chan.call(null,(1));
var inst_37474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37475 = [inst_37468,inst_37473__$1];
var inst_37476 = (new cljs.core.PersistentVector(null,2,(5),inst_37474,inst_37475,null));
var state_37487__$1 = (function (){var statearr_37494 = state_37487;
(statearr_37494[(8)] = inst_37473__$1);

return statearr_37494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37487__$1,(8),jobs,inst_37476);
} else {
if((state_val_37488 === (3))){
var inst_37485 = (state_37487[(2)]);
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37487__$1,inst_37485);
} else {
if((state_val_37488 === (2))){
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37487__$1,(4),from);
} else {
if((state_val_37488 === (9))){
var inst_37480 = (state_37487[(2)]);
var state_37487__$1 = (function (){var statearr_37495 = state_37487;
(statearr_37495[(9)] = inst_37480);

return statearr_37495;
})();
var statearr_37496_37602 = state_37487__$1;
(statearr_37496_37602[(2)] = null);

(statearr_37496_37602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (5))){
var inst_37471 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37487__$1 = state_37487;
var statearr_37497_37603 = state_37487__$1;
(statearr_37497_37603[(2)] = inst_37471);

(statearr_37497_37603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (8))){
var inst_37473 = (state_37487[(8)]);
var inst_37478 = (state_37487[(2)]);
var state_37487__$1 = (function (){var statearr_37498 = state_37487;
(statearr_37498[(10)] = inst_37478);

return statearr_37498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37487__$1,(9),results,inst_37473);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_37499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__);

(statearr_37499[(1)] = (1));

return statearr_37499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1 = (function (state_37487){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37500){if((e37500 instanceof Object)){
var ex__37143__auto__ = e37500;
var statearr_37501_37604 = state_37487;
(statearr_37501_37604[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37605 = state_37487;
state_37487 = G__37605;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = function(state_37487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1.call(this,state_37487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37502 = f__37235__auto__.call(null);
(statearr_37502[(6)] = c__37234__auto___37597);

return statearr_37502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37540){
var state_val_37541 = (state_37540[(1)]);
if((state_val_37541 === (7))){
var inst_37536 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37542_37606 = state_37540__$1;
(statearr_37542_37606[(2)] = inst_37536);

(statearr_37542_37606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (20))){
var state_37540__$1 = state_37540;
var statearr_37543_37607 = state_37540__$1;
(statearr_37543_37607[(2)] = null);

(statearr_37543_37607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (1))){
var state_37540__$1 = state_37540;
var statearr_37544_37608 = state_37540__$1;
(statearr_37544_37608[(2)] = null);

(statearr_37544_37608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (4))){
var inst_37505 = (state_37540[(7)]);
var inst_37505__$1 = (state_37540[(2)]);
var inst_37506 = (inst_37505__$1 == null);
var state_37540__$1 = (function (){var statearr_37545 = state_37540;
(statearr_37545[(7)] = inst_37505__$1);

return statearr_37545;
})();
if(cljs.core.truth_(inst_37506)){
var statearr_37546_37609 = state_37540__$1;
(statearr_37546_37609[(1)] = (5));

} else {
var statearr_37547_37610 = state_37540__$1;
(statearr_37547_37610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (15))){
var inst_37518 = (state_37540[(8)]);
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37540__$1,(18),to,inst_37518);
} else {
if((state_val_37541 === (21))){
var inst_37531 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37548_37611 = state_37540__$1;
(statearr_37548_37611[(2)] = inst_37531);

(statearr_37548_37611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (13))){
var inst_37533 = (state_37540[(2)]);
var state_37540__$1 = (function (){var statearr_37549 = state_37540;
(statearr_37549[(9)] = inst_37533);

return statearr_37549;
})();
var statearr_37550_37612 = state_37540__$1;
(statearr_37550_37612[(2)] = null);

(statearr_37550_37612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (6))){
var inst_37505 = (state_37540[(7)]);
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37540__$1,(11),inst_37505);
} else {
if((state_val_37541 === (17))){
var inst_37526 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
if(cljs.core.truth_(inst_37526)){
var statearr_37551_37613 = state_37540__$1;
(statearr_37551_37613[(1)] = (19));

} else {
var statearr_37552_37614 = state_37540__$1;
(statearr_37552_37614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (3))){
var inst_37538 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37540__$1,inst_37538);
} else {
if((state_val_37541 === (12))){
var inst_37515 = (state_37540[(10)]);
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37540__$1,(14),inst_37515);
} else {
if((state_val_37541 === (2))){
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37540__$1,(4),results);
} else {
if((state_val_37541 === (19))){
var state_37540__$1 = state_37540;
var statearr_37553_37615 = state_37540__$1;
(statearr_37553_37615[(2)] = null);

(statearr_37553_37615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (11))){
var inst_37515 = (state_37540[(2)]);
var state_37540__$1 = (function (){var statearr_37554 = state_37540;
(statearr_37554[(10)] = inst_37515);

return statearr_37554;
})();
var statearr_37555_37616 = state_37540__$1;
(statearr_37555_37616[(2)] = null);

(statearr_37555_37616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (9))){
var state_37540__$1 = state_37540;
var statearr_37556_37617 = state_37540__$1;
(statearr_37556_37617[(2)] = null);

(statearr_37556_37617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (5))){
var state_37540__$1 = state_37540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37557_37618 = state_37540__$1;
(statearr_37557_37618[(1)] = (8));

} else {
var statearr_37558_37619 = state_37540__$1;
(statearr_37558_37619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (14))){
var inst_37518 = (state_37540[(8)]);
var inst_37518__$1 = (state_37540[(2)]);
var inst_37519 = (inst_37518__$1 == null);
var inst_37520 = cljs.core.not.call(null,inst_37519);
var state_37540__$1 = (function (){var statearr_37559 = state_37540;
(statearr_37559[(8)] = inst_37518__$1);

return statearr_37559;
})();
if(inst_37520){
var statearr_37560_37620 = state_37540__$1;
(statearr_37560_37620[(1)] = (15));

} else {
var statearr_37561_37621 = state_37540__$1;
(statearr_37561_37621[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (16))){
var state_37540__$1 = state_37540;
var statearr_37562_37622 = state_37540__$1;
(statearr_37562_37622[(2)] = false);

(statearr_37562_37622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (10))){
var inst_37512 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37563_37623 = state_37540__$1;
(statearr_37563_37623[(2)] = inst_37512);

(statearr_37563_37623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (18))){
var inst_37523 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37564_37624 = state_37540__$1;
(statearr_37564_37624[(2)] = inst_37523);

(statearr_37564_37624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (8))){
var inst_37509 = cljs.core.async.close_BANG_.call(null,to);
var state_37540__$1 = state_37540;
var statearr_37565_37625 = state_37540__$1;
(statearr_37565_37625[(2)] = inst_37509);

(statearr_37565_37625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_37566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__);

(statearr_37566[(1)] = (1));

return statearr_37566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1 = (function (state_37540){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37567){if((e37567 instanceof Object)){
var ex__37143__auto__ = e37567;
var statearr_37568_37626 = state_37540;
(statearr_37568_37626[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37627 = state_37540;
state_37540 = G__37627;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__ = function(state_37540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1.call(this,state_37540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37569 = f__37235__auto__.call(null);
(statearr_37569[(6)] = c__37234__auto__);

return statearr_37569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37629 = arguments.length;
switch (G__37629) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37632 = arguments.length;
switch (G__37632) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37635 = arguments.length;
switch (G__37635) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37234__auto___37684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37661){
var state_val_37662 = (state_37661[(1)]);
if((state_val_37662 === (7))){
var inst_37657 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
var statearr_37663_37685 = state_37661__$1;
(statearr_37663_37685[(2)] = inst_37657);

(statearr_37663_37685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (1))){
var state_37661__$1 = state_37661;
var statearr_37664_37686 = state_37661__$1;
(statearr_37664_37686[(2)] = null);

(statearr_37664_37686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (4))){
var inst_37638 = (state_37661[(7)]);
var inst_37638__$1 = (state_37661[(2)]);
var inst_37639 = (inst_37638__$1 == null);
var state_37661__$1 = (function (){var statearr_37665 = state_37661;
(statearr_37665[(7)] = inst_37638__$1);

return statearr_37665;
})();
if(cljs.core.truth_(inst_37639)){
var statearr_37666_37687 = state_37661__$1;
(statearr_37666_37687[(1)] = (5));

} else {
var statearr_37667_37688 = state_37661__$1;
(statearr_37667_37688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (13))){
var state_37661__$1 = state_37661;
var statearr_37668_37689 = state_37661__$1;
(statearr_37668_37689[(2)] = null);

(statearr_37668_37689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (6))){
var inst_37638 = (state_37661[(7)]);
var inst_37644 = p.call(null,inst_37638);
var state_37661__$1 = state_37661;
if(cljs.core.truth_(inst_37644)){
var statearr_37669_37690 = state_37661__$1;
(statearr_37669_37690[(1)] = (9));

} else {
var statearr_37670_37691 = state_37661__$1;
(statearr_37670_37691[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (3))){
var inst_37659 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37661__$1,inst_37659);
} else {
if((state_val_37662 === (12))){
var state_37661__$1 = state_37661;
var statearr_37671_37692 = state_37661__$1;
(statearr_37671_37692[(2)] = null);

(statearr_37671_37692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (2))){
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37661__$1,(4),ch);
} else {
if((state_val_37662 === (11))){
var inst_37638 = (state_37661[(7)]);
var inst_37648 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37661__$1,(8),inst_37648,inst_37638);
} else {
if((state_val_37662 === (9))){
var state_37661__$1 = state_37661;
var statearr_37672_37693 = state_37661__$1;
(statearr_37672_37693[(2)] = tc);

(statearr_37672_37693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (5))){
var inst_37641 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37642 = cljs.core.async.close_BANG_.call(null,fc);
var state_37661__$1 = (function (){var statearr_37673 = state_37661;
(statearr_37673[(8)] = inst_37641);

return statearr_37673;
})();
var statearr_37674_37694 = state_37661__$1;
(statearr_37674_37694[(2)] = inst_37642);

(statearr_37674_37694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (14))){
var inst_37655 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
var statearr_37675_37695 = state_37661__$1;
(statearr_37675_37695[(2)] = inst_37655);

(statearr_37675_37695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (10))){
var state_37661__$1 = state_37661;
var statearr_37676_37696 = state_37661__$1;
(statearr_37676_37696[(2)] = fc);

(statearr_37676_37696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (8))){
var inst_37650 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
if(cljs.core.truth_(inst_37650)){
var statearr_37677_37697 = state_37661__$1;
(statearr_37677_37697[(1)] = (12));

} else {
var statearr_37678_37698 = state_37661__$1;
(statearr_37678_37698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_37679 = [null,null,null,null,null,null,null,null,null];
(statearr_37679[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_37679[(1)] = (1));

return statearr_37679;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_37661){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37680){if((e37680 instanceof Object)){
var ex__37143__auto__ = e37680;
var statearr_37681_37699 = state_37661;
(statearr_37681_37699[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37700 = state_37661;
state_37661 = G__37700;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_37661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_37661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37682 = f__37235__auto__.call(null);
(statearr_37682[(6)] = c__37234__auto___37684);

return statearr_37682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37721){
var state_val_37722 = (state_37721[(1)]);
if((state_val_37722 === (7))){
var inst_37717 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37723_37741 = state_37721__$1;
(statearr_37723_37741[(2)] = inst_37717);

(statearr_37723_37741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (1))){
var inst_37701 = init;
var state_37721__$1 = (function (){var statearr_37724 = state_37721;
(statearr_37724[(7)] = inst_37701);

return statearr_37724;
})();
var statearr_37725_37742 = state_37721__$1;
(statearr_37725_37742[(2)] = null);

(statearr_37725_37742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (4))){
var inst_37704 = (state_37721[(8)]);
var inst_37704__$1 = (state_37721[(2)]);
var inst_37705 = (inst_37704__$1 == null);
var state_37721__$1 = (function (){var statearr_37726 = state_37721;
(statearr_37726[(8)] = inst_37704__$1);

return statearr_37726;
})();
if(cljs.core.truth_(inst_37705)){
var statearr_37727_37743 = state_37721__$1;
(statearr_37727_37743[(1)] = (5));

} else {
var statearr_37728_37744 = state_37721__$1;
(statearr_37728_37744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (6))){
var inst_37708 = (state_37721[(9)]);
var inst_37701 = (state_37721[(7)]);
var inst_37704 = (state_37721[(8)]);
var inst_37708__$1 = f.call(null,inst_37701,inst_37704);
var inst_37709 = cljs.core.reduced_QMARK_.call(null,inst_37708__$1);
var state_37721__$1 = (function (){var statearr_37729 = state_37721;
(statearr_37729[(9)] = inst_37708__$1);

return statearr_37729;
})();
if(inst_37709){
var statearr_37730_37745 = state_37721__$1;
(statearr_37730_37745[(1)] = (8));

} else {
var statearr_37731_37746 = state_37721__$1;
(statearr_37731_37746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (3))){
var inst_37719 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37721__$1,inst_37719);
} else {
if((state_val_37722 === (2))){
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37721__$1,(4),ch);
} else {
if((state_val_37722 === (9))){
var inst_37708 = (state_37721[(9)]);
var inst_37701 = inst_37708;
var state_37721__$1 = (function (){var statearr_37732 = state_37721;
(statearr_37732[(7)] = inst_37701);

return statearr_37732;
})();
var statearr_37733_37747 = state_37721__$1;
(statearr_37733_37747[(2)] = null);

(statearr_37733_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (5))){
var inst_37701 = (state_37721[(7)]);
var state_37721__$1 = state_37721;
var statearr_37734_37748 = state_37721__$1;
(statearr_37734_37748[(2)] = inst_37701);

(statearr_37734_37748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (10))){
var inst_37715 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37735_37749 = state_37721__$1;
(statearr_37735_37749[(2)] = inst_37715);

(statearr_37735_37749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (8))){
var inst_37708 = (state_37721[(9)]);
var inst_37711 = cljs.core.deref.call(null,inst_37708);
var state_37721__$1 = state_37721;
var statearr_37736_37750 = state_37721__$1;
(statearr_37736_37750[(2)] = inst_37711);

(statearr_37736_37750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37140__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37140__auto____0 = (function (){
var statearr_37737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37737[(0)] = cljs$core$async$reduce_$_state_machine__37140__auto__);

(statearr_37737[(1)] = (1));

return statearr_37737;
});
var cljs$core$async$reduce_$_state_machine__37140__auto____1 = (function (state_37721){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37738){if((e37738 instanceof Object)){
var ex__37143__auto__ = e37738;
var statearr_37739_37751 = state_37721;
(statearr_37739_37751[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37752 = state_37721;
state_37721 = G__37752;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37140__auto__ = function(state_37721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37140__auto____1.call(this,state_37721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37140__auto____0;
cljs$core$async$reduce_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37140__auto____1;
return cljs$core$async$reduce_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37740 = f__37235__auto__.call(null);
(statearr_37740[(6)] = c__37234__auto__);

return statearr_37740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37758){
var state_val_37759 = (state_37758[(1)]);
if((state_val_37759 === (1))){
var inst_37753 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37758__$1 = state_37758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37758__$1,(2),inst_37753);
} else {
if((state_val_37759 === (2))){
var inst_37755 = (state_37758[(2)]);
var inst_37756 = f__$1.call(null,inst_37755);
var state_37758__$1 = state_37758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37758__$1,inst_37756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37140__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37140__auto____0 = (function (){
var statearr_37760 = [null,null,null,null,null,null,null];
(statearr_37760[(0)] = cljs$core$async$transduce_$_state_machine__37140__auto__);

(statearr_37760[(1)] = (1));

return statearr_37760;
});
var cljs$core$async$transduce_$_state_machine__37140__auto____1 = (function (state_37758){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37761){if((e37761 instanceof Object)){
var ex__37143__auto__ = e37761;
var statearr_37762_37764 = state_37758;
(statearr_37762_37764[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37765 = state_37758;
state_37758 = G__37765;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37140__auto__ = function(state_37758){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37140__auto____1.call(this,state_37758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37140__auto____0;
cljs$core$async$transduce_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37140__auto____1;
return cljs$core$async$transduce_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37763 = f__37235__auto__.call(null);
(statearr_37763[(6)] = c__37234__auto__);

return statearr_37763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37767 = arguments.length;
switch (G__37767) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (7))){
var inst_37774 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37794_37815 = state_37792__$1;
(statearr_37794_37815[(2)] = inst_37774);

(statearr_37794_37815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (1))){
var inst_37768 = cljs.core.seq.call(null,coll);
var inst_37769 = inst_37768;
var state_37792__$1 = (function (){var statearr_37795 = state_37792;
(statearr_37795[(7)] = inst_37769);

return statearr_37795;
})();
var statearr_37796_37816 = state_37792__$1;
(statearr_37796_37816[(2)] = null);

(statearr_37796_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (4))){
var inst_37769 = (state_37792[(7)]);
var inst_37772 = cljs.core.first.call(null,inst_37769);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37792__$1,(7),ch,inst_37772);
} else {
if((state_val_37793 === (13))){
var inst_37786 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37797_37817 = state_37792__$1;
(statearr_37797_37817[(2)] = inst_37786);

(statearr_37797_37817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (6))){
var inst_37777 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37777)){
var statearr_37798_37818 = state_37792__$1;
(statearr_37798_37818[(1)] = (8));

} else {
var statearr_37799_37819 = state_37792__$1;
(statearr_37799_37819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (3))){
var inst_37790 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37792__$1,inst_37790);
} else {
if((state_val_37793 === (12))){
var state_37792__$1 = state_37792;
var statearr_37800_37820 = state_37792__$1;
(statearr_37800_37820[(2)] = null);

(statearr_37800_37820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (2))){
var inst_37769 = (state_37792[(7)]);
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37769)){
var statearr_37801_37821 = state_37792__$1;
(statearr_37801_37821[(1)] = (4));

} else {
var statearr_37802_37822 = state_37792__$1;
(statearr_37802_37822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (11))){
var inst_37783 = cljs.core.async.close_BANG_.call(null,ch);
var state_37792__$1 = state_37792;
var statearr_37803_37823 = state_37792__$1;
(statearr_37803_37823[(2)] = inst_37783);

(statearr_37803_37823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (9))){
var state_37792__$1 = state_37792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37804_37824 = state_37792__$1;
(statearr_37804_37824[(1)] = (11));

} else {
var statearr_37805_37825 = state_37792__$1;
(statearr_37805_37825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (5))){
var inst_37769 = (state_37792[(7)]);
var state_37792__$1 = state_37792;
var statearr_37806_37826 = state_37792__$1;
(statearr_37806_37826[(2)] = inst_37769);

(statearr_37806_37826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (10))){
var inst_37788 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37807_37827 = state_37792__$1;
(statearr_37807_37827[(2)] = inst_37788);

(statearr_37807_37827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (8))){
var inst_37769 = (state_37792[(7)]);
var inst_37779 = cljs.core.next.call(null,inst_37769);
var inst_37769__$1 = inst_37779;
var state_37792__$1 = (function (){var statearr_37808 = state_37792;
(statearr_37808[(7)] = inst_37769__$1);

return statearr_37808;
})();
var statearr_37809_37828 = state_37792__$1;
(statearr_37809_37828[(2)] = null);

(statearr_37809_37828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_37810 = [null,null,null,null,null,null,null,null];
(statearr_37810[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_37810[(1)] = (1));

return statearr_37810;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_37792){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e37811){if((e37811 instanceof Object)){
var ex__37143__auto__ = e37811;
var statearr_37812_37829 = state_37792;
(statearr_37812_37829[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37830 = state_37792;
state_37792 = G__37830;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_37813 = f__37235__auto__.call(null);
(statearr_37813[(6)] = c__37234__auto__);

return statearr_37813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37831 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37831.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37832 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37832.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37833 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37833.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37834 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37834.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37835 = (function (ch,cs,meta37836){
this.ch = ch;
this.cs = cs;
this.meta37836 = meta37836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37837,meta37836__$1){
var self__ = this;
var _37837__$1 = this;
return (new cljs.core.async.t_cljs$core$async37835(self__.ch,self__.cs,meta37836__$1));
}));

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37837){
var self__ = this;
var _37837__$1 = this;
return self__.meta37836;
}));

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37835.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37836","meta37836",-190217031,null)], null);
}));

(cljs.core.async.t_cljs$core$async37835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37835");

(cljs.core.async.t_cljs$core$async37835.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37835.
 */
cljs.core.async.__GT_t_cljs$core$async37835 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37835(ch__$1,cs__$1,meta37836){
return (new cljs.core.async.t_cljs$core$async37835(ch__$1,cs__$1,meta37836));
});

}

return (new cljs.core.async.t_cljs$core$async37835(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__37234__auto___38057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_37972){
var state_val_37973 = (state_37972[(1)]);
if((state_val_37973 === (7))){
var inst_37968 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_37974_38058 = state_37972__$1;
(statearr_37974_38058[(2)] = inst_37968);

(statearr_37974_38058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (20))){
var inst_37871 = (state_37972[(7)]);
var inst_37883 = cljs.core.first.call(null,inst_37871);
var inst_37884 = cljs.core.nth.call(null,inst_37883,(0),null);
var inst_37885 = cljs.core.nth.call(null,inst_37883,(1),null);
var state_37972__$1 = (function (){var statearr_37975 = state_37972;
(statearr_37975[(8)] = inst_37884);

return statearr_37975;
})();
if(cljs.core.truth_(inst_37885)){
var statearr_37976_38059 = state_37972__$1;
(statearr_37976_38059[(1)] = (22));

} else {
var statearr_37977_38060 = state_37972__$1;
(statearr_37977_38060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (27))){
var inst_37840 = (state_37972[(9)]);
var inst_37915 = (state_37972[(10)]);
var inst_37920 = (state_37972[(11)]);
var inst_37913 = (state_37972[(12)]);
var inst_37920__$1 = cljs.core._nth.call(null,inst_37913,inst_37915);
var inst_37921 = cljs.core.async.put_BANG_.call(null,inst_37920__$1,inst_37840,done);
var state_37972__$1 = (function (){var statearr_37978 = state_37972;
(statearr_37978[(11)] = inst_37920__$1);

return statearr_37978;
})();
if(cljs.core.truth_(inst_37921)){
var statearr_37979_38061 = state_37972__$1;
(statearr_37979_38061[(1)] = (30));

} else {
var statearr_37980_38062 = state_37972__$1;
(statearr_37980_38062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (1))){
var state_37972__$1 = state_37972;
var statearr_37981_38063 = state_37972__$1;
(statearr_37981_38063[(2)] = null);

(statearr_37981_38063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (24))){
var inst_37871 = (state_37972[(7)]);
var inst_37890 = (state_37972[(2)]);
var inst_37891 = cljs.core.next.call(null,inst_37871);
var inst_37849 = inst_37891;
var inst_37850 = null;
var inst_37851 = (0);
var inst_37852 = (0);
var state_37972__$1 = (function (){var statearr_37982 = state_37972;
(statearr_37982[(13)] = inst_37851);

(statearr_37982[(14)] = inst_37849);

(statearr_37982[(15)] = inst_37850);

(statearr_37982[(16)] = inst_37890);

(statearr_37982[(17)] = inst_37852);

return statearr_37982;
})();
var statearr_37983_38064 = state_37972__$1;
(statearr_37983_38064[(2)] = null);

(statearr_37983_38064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (39))){
var state_37972__$1 = state_37972;
var statearr_37987_38065 = state_37972__$1;
(statearr_37987_38065[(2)] = null);

(statearr_37987_38065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (4))){
var inst_37840 = (state_37972[(9)]);
var inst_37840__$1 = (state_37972[(2)]);
var inst_37841 = (inst_37840__$1 == null);
var state_37972__$1 = (function (){var statearr_37988 = state_37972;
(statearr_37988[(9)] = inst_37840__$1);

return statearr_37988;
})();
if(cljs.core.truth_(inst_37841)){
var statearr_37989_38066 = state_37972__$1;
(statearr_37989_38066[(1)] = (5));

} else {
var statearr_37990_38067 = state_37972__$1;
(statearr_37990_38067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (15))){
var inst_37851 = (state_37972[(13)]);
var inst_37849 = (state_37972[(14)]);
var inst_37850 = (state_37972[(15)]);
var inst_37852 = (state_37972[(17)]);
var inst_37867 = (state_37972[(2)]);
var inst_37868 = (inst_37852 + (1));
var tmp37984 = inst_37851;
var tmp37985 = inst_37849;
var tmp37986 = inst_37850;
var inst_37849__$1 = tmp37985;
var inst_37850__$1 = tmp37986;
var inst_37851__$1 = tmp37984;
var inst_37852__$1 = inst_37868;
var state_37972__$1 = (function (){var statearr_37991 = state_37972;
(statearr_37991[(13)] = inst_37851__$1);

(statearr_37991[(14)] = inst_37849__$1);

(statearr_37991[(15)] = inst_37850__$1);

(statearr_37991[(18)] = inst_37867);

(statearr_37991[(17)] = inst_37852__$1);

return statearr_37991;
})();
var statearr_37992_38068 = state_37972__$1;
(statearr_37992_38068[(2)] = null);

(statearr_37992_38068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (21))){
var inst_37894 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_37996_38069 = state_37972__$1;
(statearr_37996_38069[(2)] = inst_37894);

(statearr_37996_38069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (31))){
var inst_37920 = (state_37972[(11)]);
var inst_37924 = done.call(null,null);
var inst_37925 = cljs.core.async.untap_STAR_.call(null,m,inst_37920);
var state_37972__$1 = (function (){var statearr_37997 = state_37972;
(statearr_37997[(19)] = inst_37924);

return statearr_37997;
})();
var statearr_37998_38070 = state_37972__$1;
(statearr_37998_38070[(2)] = inst_37925);

(statearr_37998_38070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (32))){
var inst_37912 = (state_37972[(20)]);
var inst_37915 = (state_37972[(10)]);
var inst_37913 = (state_37972[(12)]);
var inst_37914 = (state_37972[(21)]);
var inst_37927 = (state_37972[(2)]);
var inst_37928 = (inst_37915 + (1));
var tmp37993 = inst_37912;
var tmp37994 = inst_37913;
var tmp37995 = inst_37914;
var inst_37912__$1 = tmp37993;
var inst_37913__$1 = tmp37994;
var inst_37914__$1 = tmp37995;
var inst_37915__$1 = inst_37928;
var state_37972__$1 = (function (){var statearr_37999 = state_37972;
(statearr_37999[(22)] = inst_37927);

(statearr_37999[(20)] = inst_37912__$1);

(statearr_37999[(10)] = inst_37915__$1);

(statearr_37999[(12)] = inst_37913__$1);

(statearr_37999[(21)] = inst_37914__$1);

return statearr_37999;
})();
var statearr_38000_38071 = state_37972__$1;
(statearr_38000_38071[(2)] = null);

(statearr_38000_38071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (40))){
var inst_37940 = (state_37972[(23)]);
var inst_37944 = done.call(null,null);
var inst_37945 = cljs.core.async.untap_STAR_.call(null,m,inst_37940);
var state_37972__$1 = (function (){var statearr_38001 = state_37972;
(statearr_38001[(24)] = inst_37944);

return statearr_38001;
})();
var statearr_38002_38072 = state_37972__$1;
(statearr_38002_38072[(2)] = inst_37945);

(statearr_38002_38072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (33))){
var inst_37931 = (state_37972[(25)]);
var inst_37933 = cljs.core.chunked_seq_QMARK_.call(null,inst_37931);
var state_37972__$1 = state_37972;
if(inst_37933){
var statearr_38003_38073 = state_37972__$1;
(statearr_38003_38073[(1)] = (36));

} else {
var statearr_38004_38074 = state_37972__$1;
(statearr_38004_38074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (13))){
var inst_37861 = (state_37972[(26)]);
var inst_37864 = cljs.core.async.close_BANG_.call(null,inst_37861);
var state_37972__$1 = state_37972;
var statearr_38005_38075 = state_37972__$1;
(statearr_38005_38075[(2)] = inst_37864);

(statearr_38005_38075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (22))){
var inst_37884 = (state_37972[(8)]);
var inst_37887 = cljs.core.async.close_BANG_.call(null,inst_37884);
var state_37972__$1 = state_37972;
var statearr_38006_38076 = state_37972__$1;
(statearr_38006_38076[(2)] = inst_37887);

(statearr_38006_38076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (36))){
var inst_37931 = (state_37972[(25)]);
var inst_37935 = cljs.core.chunk_first.call(null,inst_37931);
var inst_37936 = cljs.core.chunk_rest.call(null,inst_37931);
var inst_37937 = cljs.core.count.call(null,inst_37935);
var inst_37912 = inst_37936;
var inst_37913 = inst_37935;
var inst_37914 = inst_37937;
var inst_37915 = (0);
var state_37972__$1 = (function (){var statearr_38007 = state_37972;
(statearr_38007[(20)] = inst_37912);

(statearr_38007[(10)] = inst_37915);

(statearr_38007[(12)] = inst_37913);

(statearr_38007[(21)] = inst_37914);

return statearr_38007;
})();
var statearr_38008_38077 = state_37972__$1;
(statearr_38008_38077[(2)] = null);

(statearr_38008_38077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (41))){
var inst_37931 = (state_37972[(25)]);
var inst_37947 = (state_37972[(2)]);
var inst_37948 = cljs.core.next.call(null,inst_37931);
var inst_37912 = inst_37948;
var inst_37913 = null;
var inst_37914 = (0);
var inst_37915 = (0);
var state_37972__$1 = (function (){var statearr_38009 = state_37972;
(statearr_38009[(20)] = inst_37912);

(statearr_38009[(27)] = inst_37947);

(statearr_38009[(10)] = inst_37915);

(statearr_38009[(12)] = inst_37913);

(statearr_38009[(21)] = inst_37914);

return statearr_38009;
})();
var statearr_38010_38078 = state_37972__$1;
(statearr_38010_38078[(2)] = null);

(statearr_38010_38078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (43))){
var state_37972__$1 = state_37972;
var statearr_38011_38079 = state_37972__$1;
(statearr_38011_38079[(2)] = null);

(statearr_38011_38079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (29))){
var inst_37956 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38012_38080 = state_37972__$1;
(statearr_38012_38080[(2)] = inst_37956);

(statearr_38012_38080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (44))){
var inst_37965 = (state_37972[(2)]);
var state_37972__$1 = (function (){var statearr_38013 = state_37972;
(statearr_38013[(28)] = inst_37965);

return statearr_38013;
})();
var statearr_38014_38081 = state_37972__$1;
(statearr_38014_38081[(2)] = null);

(statearr_38014_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (6))){
var inst_37904 = (state_37972[(29)]);
var inst_37903 = cljs.core.deref.call(null,cs);
var inst_37904__$1 = cljs.core.keys.call(null,inst_37903);
var inst_37905 = cljs.core.count.call(null,inst_37904__$1);
var inst_37906 = cljs.core.reset_BANG_.call(null,dctr,inst_37905);
var inst_37911 = cljs.core.seq.call(null,inst_37904__$1);
var inst_37912 = inst_37911;
var inst_37913 = null;
var inst_37914 = (0);
var inst_37915 = (0);
var state_37972__$1 = (function (){var statearr_38015 = state_37972;
(statearr_38015[(20)] = inst_37912);

(statearr_38015[(30)] = inst_37906);

(statearr_38015[(10)] = inst_37915);

(statearr_38015[(29)] = inst_37904__$1);

(statearr_38015[(12)] = inst_37913);

(statearr_38015[(21)] = inst_37914);

return statearr_38015;
})();
var statearr_38016_38082 = state_37972__$1;
(statearr_38016_38082[(2)] = null);

(statearr_38016_38082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (28))){
var inst_37931 = (state_37972[(25)]);
var inst_37912 = (state_37972[(20)]);
var inst_37931__$1 = cljs.core.seq.call(null,inst_37912);
var state_37972__$1 = (function (){var statearr_38017 = state_37972;
(statearr_38017[(25)] = inst_37931__$1);

return statearr_38017;
})();
if(inst_37931__$1){
var statearr_38018_38083 = state_37972__$1;
(statearr_38018_38083[(1)] = (33));

} else {
var statearr_38019_38084 = state_37972__$1;
(statearr_38019_38084[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (25))){
var inst_37915 = (state_37972[(10)]);
var inst_37914 = (state_37972[(21)]);
var inst_37917 = (inst_37915 < inst_37914);
var inst_37918 = inst_37917;
var state_37972__$1 = state_37972;
if(cljs.core.truth_(inst_37918)){
var statearr_38020_38085 = state_37972__$1;
(statearr_38020_38085[(1)] = (27));

} else {
var statearr_38021_38086 = state_37972__$1;
(statearr_38021_38086[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (34))){
var state_37972__$1 = state_37972;
var statearr_38022_38087 = state_37972__$1;
(statearr_38022_38087[(2)] = null);

(statearr_38022_38087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (17))){
var state_37972__$1 = state_37972;
var statearr_38023_38088 = state_37972__$1;
(statearr_38023_38088[(2)] = null);

(statearr_38023_38088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (3))){
var inst_37970 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37972__$1,inst_37970);
} else {
if((state_val_37973 === (12))){
var inst_37899 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38024_38089 = state_37972__$1;
(statearr_38024_38089[(2)] = inst_37899);

(statearr_38024_38089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (2))){
var state_37972__$1 = state_37972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37972__$1,(4),ch);
} else {
if((state_val_37973 === (23))){
var state_37972__$1 = state_37972;
var statearr_38025_38090 = state_37972__$1;
(statearr_38025_38090[(2)] = null);

(statearr_38025_38090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (35))){
var inst_37954 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38026_38091 = state_37972__$1;
(statearr_38026_38091[(2)] = inst_37954);

(statearr_38026_38091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (19))){
var inst_37871 = (state_37972[(7)]);
var inst_37875 = cljs.core.chunk_first.call(null,inst_37871);
var inst_37876 = cljs.core.chunk_rest.call(null,inst_37871);
var inst_37877 = cljs.core.count.call(null,inst_37875);
var inst_37849 = inst_37876;
var inst_37850 = inst_37875;
var inst_37851 = inst_37877;
var inst_37852 = (0);
var state_37972__$1 = (function (){var statearr_38027 = state_37972;
(statearr_38027[(13)] = inst_37851);

(statearr_38027[(14)] = inst_37849);

(statearr_38027[(15)] = inst_37850);

(statearr_38027[(17)] = inst_37852);

return statearr_38027;
})();
var statearr_38028_38092 = state_37972__$1;
(statearr_38028_38092[(2)] = null);

(statearr_38028_38092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (11))){
var inst_37849 = (state_37972[(14)]);
var inst_37871 = (state_37972[(7)]);
var inst_37871__$1 = cljs.core.seq.call(null,inst_37849);
var state_37972__$1 = (function (){var statearr_38029 = state_37972;
(statearr_38029[(7)] = inst_37871__$1);

return statearr_38029;
})();
if(inst_37871__$1){
var statearr_38030_38093 = state_37972__$1;
(statearr_38030_38093[(1)] = (16));

} else {
var statearr_38031_38094 = state_37972__$1;
(statearr_38031_38094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (9))){
var inst_37901 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38032_38095 = state_37972__$1;
(statearr_38032_38095[(2)] = inst_37901);

(statearr_38032_38095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (5))){
var inst_37847 = cljs.core.deref.call(null,cs);
var inst_37848 = cljs.core.seq.call(null,inst_37847);
var inst_37849 = inst_37848;
var inst_37850 = null;
var inst_37851 = (0);
var inst_37852 = (0);
var state_37972__$1 = (function (){var statearr_38033 = state_37972;
(statearr_38033[(13)] = inst_37851);

(statearr_38033[(14)] = inst_37849);

(statearr_38033[(15)] = inst_37850);

(statearr_38033[(17)] = inst_37852);

return statearr_38033;
})();
var statearr_38034_38096 = state_37972__$1;
(statearr_38034_38096[(2)] = null);

(statearr_38034_38096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (14))){
var state_37972__$1 = state_37972;
var statearr_38035_38097 = state_37972__$1;
(statearr_38035_38097[(2)] = null);

(statearr_38035_38097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (45))){
var inst_37962 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38036_38098 = state_37972__$1;
(statearr_38036_38098[(2)] = inst_37962);

(statearr_38036_38098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (26))){
var inst_37904 = (state_37972[(29)]);
var inst_37958 = (state_37972[(2)]);
var inst_37959 = cljs.core.seq.call(null,inst_37904);
var state_37972__$1 = (function (){var statearr_38037 = state_37972;
(statearr_38037[(31)] = inst_37958);

return statearr_38037;
})();
if(inst_37959){
var statearr_38038_38099 = state_37972__$1;
(statearr_38038_38099[(1)] = (42));

} else {
var statearr_38039_38100 = state_37972__$1;
(statearr_38039_38100[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (16))){
var inst_37871 = (state_37972[(7)]);
var inst_37873 = cljs.core.chunked_seq_QMARK_.call(null,inst_37871);
var state_37972__$1 = state_37972;
if(inst_37873){
var statearr_38040_38101 = state_37972__$1;
(statearr_38040_38101[(1)] = (19));

} else {
var statearr_38041_38102 = state_37972__$1;
(statearr_38041_38102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (38))){
var inst_37951 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38042_38103 = state_37972__$1;
(statearr_38042_38103[(2)] = inst_37951);

(statearr_38042_38103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (30))){
var state_37972__$1 = state_37972;
var statearr_38043_38104 = state_37972__$1;
(statearr_38043_38104[(2)] = null);

(statearr_38043_38104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (10))){
var inst_37850 = (state_37972[(15)]);
var inst_37852 = (state_37972[(17)]);
var inst_37860 = cljs.core._nth.call(null,inst_37850,inst_37852);
var inst_37861 = cljs.core.nth.call(null,inst_37860,(0),null);
var inst_37862 = cljs.core.nth.call(null,inst_37860,(1),null);
var state_37972__$1 = (function (){var statearr_38044 = state_37972;
(statearr_38044[(26)] = inst_37861);

return statearr_38044;
})();
if(cljs.core.truth_(inst_37862)){
var statearr_38045_38105 = state_37972__$1;
(statearr_38045_38105[(1)] = (13));

} else {
var statearr_38046_38106 = state_37972__$1;
(statearr_38046_38106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (18))){
var inst_37897 = (state_37972[(2)]);
var state_37972__$1 = state_37972;
var statearr_38047_38107 = state_37972__$1;
(statearr_38047_38107[(2)] = inst_37897);

(statearr_38047_38107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (42))){
var state_37972__$1 = state_37972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37972__$1,(45),dchan);
} else {
if((state_val_37973 === (37))){
var inst_37931 = (state_37972[(25)]);
var inst_37840 = (state_37972[(9)]);
var inst_37940 = (state_37972[(23)]);
var inst_37940__$1 = cljs.core.first.call(null,inst_37931);
var inst_37941 = cljs.core.async.put_BANG_.call(null,inst_37940__$1,inst_37840,done);
var state_37972__$1 = (function (){var statearr_38048 = state_37972;
(statearr_38048[(23)] = inst_37940__$1);

return statearr_38048;
})();
if(cljs.core.truth_(inst_37941)){
var statearr_38049_38108 = state_37972__$1;
(statearr_38049_38108[(1)] = (39));

} else {
var statearr_38050_38109 = state_37972__$1;
(statearr_38050_38109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37973 === (8))){
var inst_37851 = (state_37972[(13)]);
var inst_37852 = (state_37972[(17)]);
var inst_37854 = (inst_37852 < inst_37851);
var inst_37855 = inst_37854;
var state_37972__$1 = state_37972;
if(cljs.core.truth_(inst_37855)){
var statearr_38051_38110 = state_37972__$1;
(statearr_38051_38110[(1)] = (10));

} else {
var statearr_38052_38111 = state_37972__$1;
(statearr_38052_38111[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37140__auto__ = null;
var cljs$core$async$mult_$_state_machine__37140__auto____0 = (function (){
var statearr_38053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38053[(0)] = cljs$core$async$mult_$_state_machine__37140__auto__);

(statearr_38053[(1)] = (1));

return statearr_38053;
});
var cljs$core$async$mult_$_state_machine__37140__auto____1 = (function (state_37972){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_37972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38054){if((e38054 instanceof Object)){
var ex__37143__auto__ = e38054;
var statearr_38055_38112 = state_37972;
(statearr_38055_38112[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38113 = state_37972;
state_37972 = G__38113;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37140__auto__ = function(state_37972){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37140__auto____1.call(this,state_37972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37140__auto____0;
cljs$core$async$mult_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37140__auto____1;
return cljs$core$async$mult_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38056 = f__37235__auto__.call(null);
(statearr_38056[(6)] = c__37234__auto___38057);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38115 = arguments.length;
switch (G__38115) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38117 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38117.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38118 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38118.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38119 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38119.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38120 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38120.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38121 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38121.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38132 = arguments.length;
var i__4737__auto___38133 = (0);
while(true){
if((i__4737__auto___38133 < len__4736__auto___38132)){
args__4742__auto__.push((arguments[i__4737__auto___38133]));

var G__38134 = (i__4737__auto___38133 + (1));
i__4737__auto___38133 = G__38134;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38126){
var map__38127 = p__38126;
var map__38127__$1 = (((((!((map__38127 == null))))?(((((map__38127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38127):map__38127);
var opts = map__38127__$1;
var statearr_38129_38135 = state;
(statearr_38129_38135[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_38130_38136 = state;
(statearr_38130_38136[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38131_38137 = state;
(statearr_38131_38137[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38122){
var G__38123 = cljs.core.first.call(null,seq38122);
var seq38122__$1 = cljs.core.next.call(null,seq38122);
var G__38124 = cljs.core.first.call(null,seq38122__$1);
var seq38122__$2 = cljs.core.next.call(null,seq38122__$1);
var G__38125 = cljs.core.first.call(null,seq38122__$2);
var seq38122__$3 = cljs.core.next.call(null,seq38122__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38123,G__38124,G__38125,seq38122__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38138 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38139){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38139 = meta38139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38140,meta38139__$1){
var self__ = this;
var _38140__$1 = this;
return (new cljs.core.async.t_cljs$core$async38138(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38139__$1));
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38140){
var self__ = this;
var _38140__$1 = this;
return self__.meta38139;
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38138.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38139","meta38139",1023871206,null)], null);
}));

(cljs.core.async.t_cljs$core$async38138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38138");

(cljs.core.async.t_cljs$core$async38138.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38138.
 */
cljs.core.async.__GT_t_cljs$core$async38138 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38138(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38139){
return (new cljs.core.async.t_cljs$core$async38138(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38139));
});

}

return (new cljs.core.async.t_cljs$core$async38138(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37234__auto___38302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38242){
var state_val_38243 = (state_38242[(1)]);
if((state_val_38243 === (7))){
var inst_38157 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38244_38303 = state_38242__$1;
(statearr_38244_38303[(2)] = inst_38157);

(statearr_38244_38303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (20))){
var inst_38169 = (state_38242[(7)]);
var state_38242__$1 = state_38242;
var statearr_38245_38304 = state_38242__$1;
(statearr_38245_38304[(2)] = inst_38169);

(statearr_38245_38304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (27))){
var state_38242__$1 = state_38242;
var statearr_38246_38305 = state_38242__$1;
(statearr_38246_38305[(2)] = null);

(statearr_38246_38305[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (1))){
var inst_38144 = (state_38242[(8)]);
var inst_38144__$1 = calc_state.call(null);
var inst_38146 = (inst_38144__$1 == null);
var inst_38147 = cljs.core.not.call(null,inst_38146);
var state_38242__$1 = (function (){var statearr_38247 = state_38242;
(statearr_38247[(8)] = inst_38144__$1);

return statearr_38247;
})();
if(inst_38147){
var statearr_38248_38306 = state_38242__$1;
(statearr_38248_38306[(1)] = (2));

} else {
var statearr_38249_38307 = state_38242__$1;
(statearr_38249_38307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (24))){
var inst_38216 = (state_38242[(9)]);
var inst_38193 = (state_38242[(10)]);
var inst_38202 = (state_38242[(11)]);
var inst_38216__$1 = inst_38193.call(null,inst_38202);
var state_38242__$1 = (function (){var statearr_38250 = state_38242;
(statearr_38250[(9)] = inst_38216__$1);

return statearr_38250;
})();
if(cljs.core.truth_(inst_38216__$1)){
var statearr_38251_38308 = state_38242__$1;
(statearr_38251_38308[(1)] = (29));

} else {
var statearr_38252_38309 = state_38242__$1;
(statearr_38252_38309[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (4))){
var inst_38160 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38160)){
var statearr_38253_38310 = state_38242__$1;
(statearr_38253_38310[(1)] = (8));

} else {
var statearr_38254_38311 = state_38242__$1;
(statearr_38254_38311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (15))){
var inst_38187 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38187)){
var statearr_38255_38312 = state_38242__$1;
(statearr_38255_38312[(1)] = (19));

} else {
var statearr_38256_38313 = state_38242__$1;
(statearr_38256_38313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (21))){
var inst_38192 = (state_38242[(12)]);
var inst_38192__$1 = (state_38242[(2)]);
var inst_38193 = cljs.core.get.call(null,inst_38192__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38194 = cljs.core.get.call(null,inst_38192__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38195 = cljs.core.get.call(null,inst_38192__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38242__$1 = (function (){var statearr_38257 = state_38242;
(statearr_38257[(10)] = inst_38193);

(statearr_38257[(13)] = inst_38194);

(statearr_38257[(12)] = inst_38192__$1);

return statearr_38257;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38242__$1,(22),inst_38195);
} else {
if((state_val_38243 === (31))){
var inst_38224 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38224)){
var statearr_38258_38314 = state_38242__$1;
(statearr_38258_38314[(1)] = (32));

} else {
var statearr_38259_38315 = state_38242__$1;
(statearr_38259_38315[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (32))){
var inst_38201 = (state_38242[(14)]);
var state_38242__$1 = state_38242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38242__$1,(35),out,inst_38201);
} else {
if((state_val_38243 === (33))){
var inst_38192 = (state_38242[(12)]);
var inst_38169 = inst_38192;
var state_38242__$1 = (function (){var statearr_38260 = state_38242;
(statearr_38260[(7)] = inst_38169);

return statearr_38260;
})();
var statearr_38261_38316 = state_38242__$1;
(statearr_38261_38316[(2)] = null);

(statearr_38261_38316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (13))){
var inst_38169 = (state_38242[(7)]);
var inst_38176 = inst_38169.cljs$lang$protocol_mask$partition0$;
var inst_38177 = (inst_38176 & (64));
var inst_38178 = inst_38169.cljs$core$ISeq$;
var inst_38179 = (cljs.core.PROTOCOL_SENTINEL === inst_38178);
var inst_38180 = ((inst_38177) || (inst_38179));
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38180)){
var statearr_38262_38317 = state_38242__$1;
(statearr_38262_38317[(1)] = (16));

} else {
var statearr_38263_38318 = state_38242__$1;
(statearr_38263_38318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (22))){
var inst_38201 = (state_38242[(14)]);
var inst_38202 = (state_38242[(11)]);
var inst_38200 = (state_38242[(2)]);
var inst_38201__$1 = cljs.core.nth.call(null,inst_38200,(0),null);
var inst_38202__$1 = cljs.core.nth.call(null,inst_38200,(1),null);
var inst_38203 = (inst_38201__$1 == null);
var inst_38204 = cljs.core._EQ_.call(null,inst_38202__$1,change);
var inst_38205 = ((inst_38203) || (inst_38204));
var state_38242__$1 = (function (){var statearr_38264 = state_38242;
(statearr_38264[(14)] = inst_38201__$1);

(statearr_38264[(11)] = inst_38202__$1);

return statearr_38264;
})();
if(cljs.core.truth_(inst_38205)){
var statearr_38265_38319 = state_38242__$1;
(statearr_38265_38319[(1)] = (23));

} else {
var statearr_38266_38320 = state_38242__$1;
(statearr_38266_38320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (36))){
var inst_38192 = (state_38242[(12)]);
var inst_38169 = inst_38192;
var state_38242__$1 = (function (){var statearr_38267 = state_38242;
(statearr_38267[(7)] = inst_38169);

return statearr_38267;
})();
var statearr_38268_38321 = state_38242__$1;
(statearr_38268_38321[(2)] = null);

(statearr_38268_38321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (29))){
var inst_38216 = (state_38242[(9)]);
var state_38242__$1 = state_38242;
var statearr_38269_38322 = state_38242__$1;
(statearr_38269_38322[(2)] = inst_38216);

(statearr_38269_38322[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (6))){
var state_38242__$1 = state_38242;
var statearr_38270_38323 = state_38242__$1;
(statearr_38270_38323[(2)] = false);

(statearr_38270_38323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (28))){
var inst_38212 = (state_38242[(2)]);
var inst_38213 = calc_state.call(null);
var inst_38169 = inst_38213;
var state_38242__$1 = (function (){var statearr_38271 = state_38242;
(statearr_38271[(15)] = inst_38212);

(statearr_38271[(7)] = inst_38169);

return statearr_38271;
})();
var statearr_38272_38324 = state_38242__$1;
(statearr_38272_38324[(2)] = null);

(statearr_38272_38324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (25))){
var inst_38238 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38273_38325 = state_38242__$1;
(statearr_38273_38325[(2)] = inst_38238);

(statearr_38273_38325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (34))){
var inst_38236 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38274_38326 = state_38242__$1;
(statearr_38274_38326[(2)] = inst_38236);

(statearr_38274_38326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (17))){
var state_38242__$1 = state_38242;
var statearr_38275_38327 = state_38242__$1;
(statearr_38275_38327[(2)] = false);

(statearr_38275_38327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (3))){
var state_38242__$1 = state_38242;
var statearr_38276_38328 = state_38242__$1;
(statearr_38276_38328[(2)] = false);

(statearr_38276_38328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (12))){
var inst_38240 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38242__$1,inst_38240);
} else {
if((state_val_38243 === (2))){
var inst_38144 = (state_38242[(8)]);
var inst_38149 = inst_38144.cljs$lang$protocol_mask$partition0$;
var inst_38150 = (inst_38149 & (64));
var inst_38151 = inst_38144.cljs$core$ISeq$;
var inst_38152 = (cljs.core.PROTOCOL_SENTINEL === inst_38151);
var inst_38153 = ((inst_38150) || (inst_38152));
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38153)){
var statearr_38277_38329 = state_38242__$1;
(statearr_38277_38329[(1)] = (5));

} else {
var statearr_38278_38330 = state_38242__$1;
(statearr_38278_38330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (23))){
var inst_38201 = (state_38242[(14)]);
var inst_38207 = (inst_38201 == null);
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38207)){
var statearr_38279_38331 = state_38242__$1;
(statearr_38279_38331[(1)] = (26));

} else {
var statearr_38280_38332 = state_38242__$1;
(statearr_38280_38332[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (35))){
var inst_38227 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
if(cljs.core.truth_(inst_38227)){
var statearr_38281_38333 = state_38242__$1;
(statearr_38281_38333[(1)] = (36));

} else {
var statearr_38282_38334 = state_38242__$1;
(statearr_38282_38334[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (19))){
var inst_38169 = (state_38242[(7)]);
var inst_38189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38169);
var state_38242__$1 = state_38242;
var statearr_38283_38335 = state_38242__$1;
(statearr_38283_38335[(2)] = inst_38189);

(statearr_38283_38335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (11))){
var inst_38169 = (state_38242[(7)]);
var inst_38173 = (inst_38169 == null);
var inst_38174 = cljs.core.not.call(null,inst_38173);
var state_38242__$1 = state_38242;
if(inst_38174){
var statearr_38284_38336 = state_38242__$1;
(statearr_38284_38336[(1)] = (13));

} else {
var statearr_38285_38337 = state_38242__$1;
(statearr_38285_38337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (9))){
var inst_38144 = (state_38242[(8)]);
var state_38242__$1 = state_38242;
var statearr_38286_38338 = state_38242__$1;
(statearr_38286_38338[(2)] = inst_38144);

(statearr_38286_38338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (5))){
var state_38242__$1 = state_38242;
var statearr_38287_38339 = state_38242__$1;
(statearr_38287_38339[(2)] = true);

(statearr_38287_38339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (14))){
var state_38242__$1 = state_38242;
var statearr_38288_38340 = state_38242__$1;
(statearr_38288_38340[(2)] = false);

(statearr_38288_38340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (26))){
var inst_38202 = (state_38242[(11)]);
var inst_38209 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38202);
var state_38242__$1 = state_38242;
var statearr_38289_38341 = state_38242__$1;
(statearr_38289_38341[(2)] = inst_38209);

(statearr_38289_38341[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (16))){
var state_38242__$1 = state_38242;
var statearr_38290_38342 = state_38242__$1;
(statearr_38290_38342[(2)] = true);

(statearr_38290_38342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (38))){
var inst_38232 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38291_38343 = state_38242__$1;
(statearr_38291_38343[(2)] = inst_38232);

(statearr_38291_38343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (30))){
var inst_38193 = (state_38242[(10)]);
var inst_38194 = (state_38242[(13)]);
var inst_38202 = (state_38242[(11)]);
var inst_38219 = cljs.core.empty_QMARK_.call(null,inst_38193);
var inst_38220 = inst_38194.call(null,inst_38202);
var inst_38221 = cljs.core.not.call(null,inst_38220);
var inst_38222 = ((inst_38219) && (inst_38221));
var state_38242__$1 = state_38242;
var statearr_38292_38344 = state_38242__$1;
(statearr_38292_38344[(2)] = inst_38222);

(statearr_38292_38344[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (10))){
var inst_38144 = (state_38242[(8)]);
var inst_38165 = (state_38242[(2)]);
var inst_38166 = cljs.core.get.call(null,inst_38165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38167 = cljs.core.get.call(null,inst_38165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38168 = cljs.core.get.call(null,inst_38165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38169 = inst_38144;
var state_38242__$1 = (function (){var statearr_38293 = state_38242;
(statearr_38293[(16)] = inst_38168);

(statearr_38293[(17)] = inst_38167);

(statearr_38293[(18)] = inst_38166);

(statearr_38293[(7)] = inst_38169);

return statearr_38293;
})();
var statearr_38294_38345 = state_38242__$1;
(statearr_38294_38345[(2)] = null);

(statearr_38294_38345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (18))){
var inst_38184 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38295_38346 = state_38242__$1;
(statearr_38295_38346[(2)] = inst_38184);

(statearr_38295_38346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (37))){
var state_38242__$1 = state_38242;
var statearr_38296_38347 = state_38242__$1;
(statearr_38296_38347[(2)] = null);

(statearr_38296_38347[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (8))){
var inst_38144 = (state_38242[(8)]);
var inst_38162 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38144);
var state_38242__$1 = state_38242;
var statearr_38297_38348 = state_38242__$1;
(statearr_38297_38348[(2)] = inst_38162);

(statearr_38297_38348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37140__auto__ = null;
var cljs$core$async$mix_$_state_machine__37140__auto____0 = (function (){
var statearr_38298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38298[(0)] = cljs$core$async$mix_$_state_machine__37140__auto__);

(statearr_38298[(1)] = (1));

return statearr_38298;
});
var cljs$core$async$mix_$_state_machine__37140__auto____1 = (function (state_38242){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38299){if((e38299 instanceof Object)){
var ex__37143__auto__ = e38299;
var statearr_38300_38349 = state_38242;
(statearr_38300_38349[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38350 = state_38242;
state_38242 = G__38350;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37140__auto__ = function(state_38242){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37140__auto____1.call(this,state_38242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37140__auto____0;
cljs$core$async$mix_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37140__auto____1;
return cljs$core$async$mix_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38301 = f__37235__auto__.call(null);
(statearr_38301[(6)] = c__37234__auto___38302);

return statearr_38301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38353 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38353.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38354 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38354.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38355 = (function() {
var G__38356 = null;
var G__38356__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__38356__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__38356 = function(p,v){
switch(arguments.length){
case 1:
return G__38356__1.call(this,p);
case 2:
return G__38356__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38356.cljs$core$IFn$_invoke$arity$1 = G__38356__1;
G__38356.cljs$core$IFn$_invoke$arity$2 = G__38356__2;
return G__38356;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38352 = arguments.length;
switch (G__38352) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38355.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38355.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38360 = arguments.length;
switch (G__38360) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__38358_SHARP_){
if(cljs.core.truth_(p1__38358_SHARP_.call(null,topic))){
return p1__38358_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38358_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38361 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38362){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38362 = meta38362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38363,meta38362__$1){
var self__ = this;
var _38363__$1 = this;
return (new cljs.core.async.t_cljs$core$async38361(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38362__$1));
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38363){
var self__ = this;
var _38363__$1 = this;
return self__.meta38362;
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38362","meta38362",-925845834,null)], null);
}));

(cljs.core.async.t_cljs$core$async38361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38361");

(cljs.core.async.t_cljs$core$async38361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38361.
 */
cljs.core.async.__GT_t_cljs$core$async38361 = (function cljs$core$async$__GT_t_cljs$core$async38361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38362){
return (new cljs.core.async.t_cljs$core$async38361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38362));
});

}

return (new cljs.core.async.t_cljs$core$async38361(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37234__auto___38481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38435){
var state_val_38436 = (state_38435[(1)]);
if((state_val_38436 === (7))){
var inst_38431 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38437_38482 = state_38435__$1;
(statearr_38437_38482[(2)] = inst_38431);

(statearr_38437_38482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (20))){
var state_38435__$1 = state_38435;
var statearr_38438_38483 = state_38435__$1;
(statearr_38438_38483[(2)] = null);

(statearr_38438_38483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (1))){
var state_38435__$1 = state_38435;
var statearr_38439_38484 = state_38435__$1;
(statearr_38439_38484[(2)] = null);

(statearr_38439_38484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (24))){
var inst_38414 = (state_38435[(7)]);
var inst_38423 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38414);
var state_38435__$1 = state_38435;
var statearr_38440_38485 = state_38435__$1;
(statearr_38440_38485[(2)] = inst_38423);

(statearr_38440_38485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (4))){
var inst_38366 = (state_38435[(8)]);
var inst_38366__$1 = (state_38435[(2)]);
var inst_38367 = (inst_38366__$1 == null);
var state_38435__$1 = (function (){var statearr_38441 = state_38435;
(statearr_38441[(8)] = inst_38366__$1);

return statearr_38441;
})();
if(cljs.core.truth_(inst_38367)){
var statearr_38442_38486 = state_38435__$1;
(statearr_38442_38486[(1)] = (5));

} else {
var statearr_38443_38487 = state_38435__$1;
(statearr_38443_38487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (15))){
var inst_38408 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38444_38488 = state_38435__$1;
(statearr_38444_38488[(2)] = inst_38408);

(statearr_38444_38488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (21))){
var inst_38428 = (state_38435[(2)]);
var state_38435__$1 = (function (){var statearr_38445 = state_38435;
(statearr_38445[(9)] = inst_38428);

return statearr_38445;
})();
var statearr_38446_38489 = state_38435__$1;
(statearr_38446_38489[(2)] = null);

(statearr_38446_38489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (13))){
var inst_38390 = (state_38435[(10)]);
var inst_38392 = cljs.core.chunked_seq_QMARK_.call(null,inst_38390);
var state_38435__$1 = state_38435;
if(inst_38392){
var statearr_38447_38490 = state_38435__$1;
(statearr_38447_38490[(1)] = (16));

} else {
var statearr_38448_38491 = state_38435__$1;
(statearr_38448_38491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (22))){
var inst_38420 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
if(cljs.core.truth_(inst_38420)){
var statearr_38449_38492 = state_38435__$1;
(statearr_38449_38492[(1)] = (23));

} else {
var statearr_38450_38493 = state_38435__$1;
(statearr_38450_38493[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (6))){
var inst_38414 = (state_38435[(7)]);
var inst_38366 = (state_38435[(8)]);
var inst_38416 = (state_38435[(11)]);
var inst_38414__$1 = topic_fn.call(null,inst_38366);
var inst_38415 = cljs.core.deref.call(null,mults);
var inst_38416__$1 = cljs.core.get.call(null,inst_38415,inst_38414__$1);
var state_38435__$1 = (function (){var statearr_38451 = state_38435;
(statearr_38451[(7)] = inst_38414__$1);

(statearr_38451[(11)] = inst_38416__$1);

return statearr_38451;
})();
if(cljs.core.truth_(inst_38416__$1)){
var statearr_38452_38494 = state_38435__$1;
(statearr_38452_38494[(1)] = (19));

} else {
var statearr_38453_38495 = state_38435__$1;
(statearr_38453_38495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (25))){
var inst_38425 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38454_38496 = state_38435__$1;
(statearr_38454_38496[(2)] = inst_38425);

(statearr_38454_38496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (17))){
var inst_38390 = (state_38435[(10)]);
var inst_38399 = cljs.core.first.call(null,inst_38390);
var inst_38400 = cljs.core.async.muxch_STAR_.call(null,inst_38399);
var inst_38401 = cljs.core.async.close_BANG_.call(null,inst_38400);
var inst_38402 = cljs.core.next.call(null,inst_38390);
var inst_38376 = inst_38402;
var inst_38377 = null;
var inst_38378 = (0);
var inst_38379 = (0);
var state_38435__$1 = (function (){var statearr_38455 = state_38435;
(statearr_38455[(12)] = inst_38378);

(statearr_38455[(13)] = inst_38379);

(statearr_38455[(14)] = inst_38401);

(statearr_38455[(15)] = inst_38377);

(statearr_38455[(16)] = inst_38376);

return statearr_38455;
})();
var statearr_38456_38497 = state_38435__$1;
(statearr_38456_38497[(2)] = null);

(statearr_38456_38497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (3))){
var inst_38433 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38435__$1,inst_38433);
} else {
if((state_val_38436 === (12))){
var inst_38410 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38457_38498 = state_38435__$1;
(statearr_38457_38498[(2)] = inst_38410);

(statearr_38457_38498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (2))){
var state_38435__$1 = state_38435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38435__$1,(4),ch);
} else {
if((state_val_38436 === (23))){
var state_38435__$1 = state_38435;
var statearr_38458_38499 = state_38435__$1;
(statearr_38458_38499[(2)] = null);

(statearr_38458_38499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (19))){
var inst_38366 = (state_38435[(8)]);
var inst_38416 = (state_38435[(11)]);
var inst_38418 = cljs.core.async.muxch_STAR_.call(null,inst_38416);
var state_38435__$1 = state_38435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38435__$1,(22),inst_38418,inst_38366);
} else {
if((state_val_38436 === (11))){
var inst_38390 = (state_38435[(10)]);
var inst_38376 = (state_38435[(16)]);
var inst_38390__$1 = cljs.core.seq.call(null,inst_38376);
var state_38435__$1 = (function (){var statearr_38459 = state_38435;
(statearr_38459[(10)] = inst_38390__$1);

return statearr_38459;
})();
if(inst_38390__$1){
var statearr_38460_38500 = state_38435__$1;
(statearr_38460_38500[(1)] = (13));

} else {
var statearr_38461_38501 = state_38435__$1;
(statearr_38461_38501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (9))){
var inst_38412 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38462_38502 = state_38435__$1;
(statearr_38462_38502[(2)] = inst_38412);

(statearr_38462_38502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (5))){
var inst_38373 = cljs.core.deref.call(null,mults);
var inst_38374 = cljs.core.vals.call(null,inst_38373);
var inst_38375 = cljs.core.seq.call(null,inst_38374);
var inst_38376 = inst_38375;
var inst_38377 = null;
var inst_38378 = (0);
var inst_38379 = (0);
var state_38435__$1 = (function (){var statearr_38463 = state_38435;
(statearr_38463[(12)] = inst_38378);

(statearr_38463[(13)] = inst_38379);

(statearr_38463[(15)] = inst_38377);

(statearr_38463[(16)] = inst_38376);

return statearr_38463;
})();
var statearr_38464_38503 = state_38435__$1;
(statearr_38464_38503[(2)] = null);

(statearr_38464_38503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (14))){
var state_38435__$1 = state_38435;
var statearr_38468_38504 = state_38435__$1;
(statearr_38468_38504[(2)] = null);

(statearr_38468_38504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (16))){
var inst_38390 = (state_38435[(10)]);
var inst_38394 = cljs.core.chunk_first.call(null,inst_38390);
var inst_38395 = cljs.core.chunk_rest.call(null,inst_38390);
var inst_38396 = cljs.core.count.call(null,inst_38394);
var inst_38376 = inst_38395;
var inst_38377 = inst_38394;
var inst_38378 = inst_38396;
var inst_38379 = (0);
var state_38435__$1 = (function (){var statearr_38469 = state_38435;
(statearr_38469[(12)] = inst_38378);

(statearr_38469[(13)] = inst_38379);

(statearr_38469[(15)] = inst_38377);

(statearr_38469[(16)] = inst_38376);

return statearr_38469;
})();
var statearr_38470_38505 = state_38435__$1;
(statearr_38470_38505[(2)] = null);

(statearr_38470_38505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (10))){
var inst_38378 = (state_38435[(12)]);
var inst_38379 = (state_38435[(13)]);
var inst_38377 = (state_38435[(15)]);
var inst_38376 = (state_38435[(16)]);
var inst_38384 = cljs.core._nth.call(null,inst_38377,inst_38379);
var inst_38385 = cljs.core.async.muxch_STAR_.call(null,inst_38384);
var inst_38386 = cljs.core.async.close_BANG_.call(null,inst_38385);
var inst_38387 = (inst_38379 + (1));
var tmp38465 = inst_38378;
var tmp38466 = inst_38377;
var tmp38467 = inst_38376;
var inst_38376__$1 = tmp38467;
var inst_38377__$1 = tmp38466;
var inst_38378__$1 = tmp38465;
var inst_38379__$1 = inst_38387;
var state_38435__$1 = (function (){var statearr_38471 = state_38435;
(statearr_38471[(12)] = inst_38378__$1);

(statearr_38471[(13)] = inst_38379__$1);

(statearr_38471[(17)] = inst_38386);

(statearr_38471[(15)] = inst_38377__$1);

(statearr_38471[(16)] = inst_38376__$1);

return statearr_38471;
})();
var statearr_38472_38506 = state_38435__$1;
(statearr_38472_38506[(2)] = null);

(statearr_38472_38506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (18))){
var inst_38405 = (state_38435[(2)]);
var state_38435__$1 = state_38435;
var statearr_38473_38507 = state_38435__$1;
(statearr_38473_38507[(2)] = inst_38405);

(statearr_38473_38507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38436 === (8))){
var inst_38378 = (state_38435[(12)]);
var inst_38379 = (state_38435[(13)]);
var inst_38381 = (inst_38379 < inst_38378);
var inst_38382 = inst_38381;
var state_38435__$1 = state_38435;
if(cljs.core.truth_(inst_38382)){
var statearr_38474_38508 = state_38435__$1;
(statearr_38474_38508[(1)] = (10));

} else {
var statearr_38475_38509 = state_38435__$1;
(statearr_38475_38509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38476[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38476[(1)] = (1));

return statearr_38476;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38435){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38477){if((e38477 instanceof Object)){
var ex__37143__auto__ = e38477;
var statearr_38478_38510 = state_38435;
(statearr_38478_38510[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38511 = state_38435;
state_38435 = G__38511;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38479 = f__37235__auto__.call(null);
(statearr_38479[(6)] = c__37234__auto___38481);

return statearr_38479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38513 = arguments.length;
switch (G__38513) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38516 = arguments.length;
switch (G__38516) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38519 = arguments.length;
switch (G__38519) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__37234__auto___38586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38558){
var state_val_38559 = (state_38558[(1)]);
if((state_val_38559 === (7))){
var state_38558__$1 = state_38558;
var statearr_38560_38587 = state_38558__$1;
(statearr_38560_38587[(2)] = null);

(statearr_38560_38587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (1))){
var state_38558__$1 = state_38558;
var statearr_38561_38588 = state_38558__$1;
(statearr_38561_38588[(2)] = null);

(statearr_38561_38588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (4))){
var inst_38522 = (state_38558[(7)]);
var inst_38524 = (inst_38522 < cnt);
var state_38558__$1 = state_38558;
if(cljs.core.truth_(inst_38524)){
var statearr_38562_38589 = state_38558__$1;
(statearr_38562_38589[(1)] = (6));

} else {
var statearr_38563_38590 = state_38558__$1;
(statearr_38563_38590[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (15))){
var inst_38554 = (state_38558[(2)]);
var state_38558__$1 = state_38558;
var statearr_38564_38591 = state_38558__$1;
(statearr_38564_38591[(2)] = inst_38554);

(statearr_38564_38591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (13))){
var inst_38547 = cljs.core.async.close_BANG_.call(null,out);
var state_38558__$1 = state_38558;
var statearr_38565_38592 = state_38558__$1;
(statearr_38565_38592[(2)] = inst_38547);

(statearr_38565_38592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (6))){
var state_38558__$1 = state_38558;
var statearr_38566_38593 = state_38558__$1;
(statearr_38566_38593[(2)] = null);

(statearr_38566_38593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (3))){
var inst_38556 = (state_38558[(2)]);
var state_38558__$1 = state_38558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38558__$1,inst_38556);
} else {
if((state_val_38559 === (12))){
var inst_38544 = (state_38558[(8)]);
var inst_38544__$1 = (state_38558[(2)]);
var inst_38545 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38544__$1);
var state_38558__$1 = (function (){var statearr_38567 = state_38558;
(statearr_38567[(8)] = inst_38544__$1);

return statearr_38567;
})();
if(cljs.core.truth_(inst_38545)){
var statearr_38568_38594 = state_38558__$1;
(statearr_38568_38594[(1)] = (13));

} else {
var statearr_38569_38595 = state_38558__$1;
(statearr_38569_38595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (2))){
var inst_38521 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38522 = (0);
var state_38558__$1 = (function (){var statearr_38570 = state_38558;
(statearr_38570[(7)] = inst_38522);

(statearr_38570[(9)] = inst_38521);

return statearr_38570;
})();
var statearr_38571_38596 = state_38558__$1;
(statearr_38571_38596[(2)] = null);

(statearr_38571_38596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (11))){
var inst_38522 = (state_38558[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38558,(10),Object,null,(9));
var inst_38531 = chs__$1.call(null,inst_38522);
var inst_38532 = done.call(null,inst_38522);
var inst_38533 = cljs.core.async.take_BANG_.call(null,inst_38531,inst_38532);
var state_38558__$1 = state_38558;
var statearr_38572_38597 = state_38558__$1;
(statearr_38572_38597[(2)] = inst_38533);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (9))){
var inst_38522 = (state_38558[(7)]);
var inst_38535 = (state_38558[(2)]);
var inst_38536 = (inst_38522 + (1));
var inst_38522__$1 = inst_38536;
var state_38558__$1 = (function (){var statearr_38573 = state_38558;
(statearr_38573[(10)] = inst_38535);

(statearr_38573[(7)] = inst_38522__$1);

return statearr_38573;
})();
var statearr_38574_38598 = state_38558__$1;
(statearr_38574_38598[(2)] = null);

(statearr_38574_38598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (5))){
var inst_38542 = (state_38558[(2)]);
var state_38558__$1 = (function (){var statearr_38575 = state_38558;
(statearr_38575[(11)] = inst_38542);

return statearr_38575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38558__$1,(12),dchan);
} else {
if((state_val_38559 === (14))){
var inst_38544 = (state_38558[(8)]);
var inst_38549 = cljs.core.apply.call(null,f,inst_38544);
var state_38558__$1 = state_38558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38558__$1,(16),out,inst_38549);
} else {
if((state_val_38559 === (16))){
var inst_38551 = (state_38558[(2)]);
var state_38558__$1 = (function (){var statearr_38576 = state_38558;
(statearr_38576[(12)] = inst_38551);

return statearr_38576;
})();
var statearr_38577_38599 = state_38558__$1;
(statearr_38577_38599[(2)] = null);

(statearr_38577_38599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (10))){
var inst_38526 = (state_38558[(2)]);
var inst_38527 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38558__$1 = (function (){var statearr_38578 = state_38558;
(statearr_38578[(13)] = inst_38526);

return statearr_38578;
})();
var statearr_38579_38600 = state_38558__$1;
(statearr_38579_38600[(2)] = inst_38527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38559 === (8))){
var inst_38540 = (state_38558[(2)]);
var state_38558__$1 = state_38558;
var statearr_38580_38601 = state_38558__$1;
(statearr_38580_38601[(2)] = inst_38540);

(statearr_38580_38601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38581[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38581[(1)] = (1));

return statearr_38581;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38558){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38582){if((e38582 instanceof Object)){
var ex__37143__auto__ = e38582;
var statearr_38583_38602 = state_38558;
(statearr_38583_38602[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38603 = state_38558;
state_38558 = G__38603;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38584 = f__37235__auto__.call(null);
(statearr_38584[(6)] = c__37234__auto___38586);

return statearr_38584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38606 = arguments.length;
switch (G__38606) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___38660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38638){
var state_val_38639 = (state_38638[(1)]);
if((state_val_38639 === (7))){
var inst_38618 = (state_38638[(7)]);
var inst_38617 = (state_38638[(8)]);
var inst_38617__$1 = (state_38638[(2)]);
var inst_38618__$1 = cljs.core.nth.call(null,inst_38617__$1,(0),null);
var inst_38619 = cljs.core.nth.call(null,inst_38617__$1,(1),null);
var inst_38620 = (inst_38618__$1 == null);
var state_38638__$1 = (function (){var statearr_38640 = state_38638;
(statearr_38640[(7)] = inst_38618__$1);

(statearr_38640[(8)] = inst_38617__$1);

(statearr_38640[(9)] = inst_38619);

return statearr_38640;
})();
if(cljs.core.truth_(inst_38620)){
var statearr_38641_38661 = state_38638__$1;
(statearr_38641_38661[(1)] = (8));

} else {
var statearr_38642_38662 = state_38638__$1;
(statearr_38642_38662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (1))){
var inst_38607 = cljs.core.vec.call(null,chs);
var inst_38608 = inst_38607;
var state_38638__$1 = (function (){var statearr_38643 = state_38638;
(statearr_38643[(10)] = inst_38608);

return statearr_38643;
})();
var statearr_38644_38663 = state_38638__$1;
(statearr_38644_38663[(2)] = null);

(statearr_38644_38663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (4))){
var inst_38608 = (state_38638[(10)]);
var state_38638__$1 = state_38638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38638__$1,(7),inst_38608);
} else {
if((state_val_38639 === (6))){
var inst_38634 = (state_38638[(2)]);
var state_38638__$1 = state_38638;
var statearr_38645_38664 = state_38638__$1;
(statearr_38645_38664[(2)] = inst_38634);

(statearr_38645_38664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (3))){
var inst_38636 = (state_38638[(2)]);
var state_38638__$1 = state_38638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38638__$1,inst_38636);
} else {
if((state_val_38639 === (2))){
var inst_38608 = (state_38638[(10)]);
var inst_38610 = cljs.core.count.call(null,inst_38608);
var inst_38611 = (inst_38610 > (0));
var state_38638__$1 = state_38638;
if(cljs.core.truth_(inst_38611)){
var statearr_38647_38665 = state_38638__$1;
(statearr_38647_38665[(1)] = (4));

} else {
var statearr_38648_38666 = state_38638__$1;
(statearr_38648_38666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (11))){
var inst_38608 = (state_38638[(10)]);
var inst_38627 = (state_38638[(2)]);
var tmp38646 = inst_38608;
var inst_38608__$1 = tmp38646;
var state_38638__$1 = (function (){var statearr_38649 = state_38638;
(statearr_38649[(10)] = inst_38608__$1);

(statearr_38649[(11)] = inst_38627);

return statearr_38649;
})();
var statearr_38650_38667 = state_38638__$1;
(statearr_38650_38667[(2)] = null);

(statearr_38650_38667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (9))){
var inst_38618 = (state_38638[(7)]);
var state_38638__$1 = state_38638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38638__$1,(11),out,inst_38618);
} else {
if((state_val_38639 === (5))){
var inst_38632 = cljs.core.async.close_BANG_.call(null,out);
var state_38638__$1 = state_38638;
var statearr_38651_38668 = state_38638__$1;
(statearr_38651_38668[(2)] = inst_38632);

(statearr_38651_38668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (10))){
var inst_38630 = (state_38638[(2)]);
var state_38638__$1 = state_38638;
var statearr_38652_38669 = state_38638__$1;
(statearr_38652_38669[(2)] = inst_38630);

(statearr_38652_38669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38639 === (8))){
var inst_38618 = (state_38638[(7)]);
var inst_38608 = (state_38638[(10)]);
var inst_38617 = (state_38638[(8)]);
var inst_38619 = (state_38638[(9)]);
var inst_38622 = (function (){var cs = inst_38608;
var vec__38613 = inst_38617;
var v = inst_38618;
var c = inst_38619;
return (function (p1__38604_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38604_SHARP_);
});
})();
var inst_38623 = cljs.core.filterv.call(null,inst_38622,inst_38608);
var inst_38608__$1 = inst_38623;
var state_38638__$1 = (function (){var statearr_38653 = state_38638;
(statearr_38653[(10)] = inst_38608__$1);

return statearr_38653;
})();
var statearr_38654_38670 = state_38638__$1;
(statearr_38654_38670[(2)] = null);

(statearr_38654_38670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38655[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38655[(1)] = (1));

return statearr_38655;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38638){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38656){if((e38656 instanceof Object)){
var ex__37143__auto__ = e38656;
var statearr_38657_38671 = state_38638;
(statearr_38657_38671[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38672 = state_38638;
state_38638 = G__38672;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38658 = f__37235__auto__.call(null);
(statearr_38658[(6)] = c__37234__auto___38660);

return statearr_38658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38674 = arguments.length;
switch (G__38674) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___38719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38698){
var state_val_38699 = (state_38698[(1)]);
if((state_val_38699 === (7))){
var inst_38680 = (state_38698[(7)]);
var inst_38680__$1 = (state_38698[(2)]);
var inst_38681 = (inst_38680__$1 == null);
var inst_38682 = cljs.core.not.call(null,inst_38681);
var state_38698__$1 = (function (){var statearr_38700 = state_38698;
(statearr_38700[(7)] = inst_38680__$1);

return statearr_38700;
})();
if(inst_38682){
var statearr_38701_38720 = state_38698__$1;
(statearr_38701_38720[(1)] = (8));

} else {
var statearr_38702_38721 = state_38698__$1;
(statearr_38702_38721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (1))){
var inst_38675 = (0);
var state_38698__$1 = (function (){var statearr_38703 = state_38698;
(statearr_38703[(8)] = inst_38675);

return statearr_38703;
})();
var statearr_38704_38722 = state_38698__$1;
(statearr_38704_38722[(2)] = null);

(statearr_38704_38722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (4))){
var state_38698__$1 = state_38698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38698__$1,(7),ch);
} else {
if((state_val_38699 === (6))){
var inst_38693 = (state_38698[(2)]);
var state_38698__$1 = state_38698;
var statearr_38705_38723 = state_38698__$1;
(statearr_38705_38723[(2)] = inst_38693);

(statearr_38705_38723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (3))){
var inst_38695 = (state_38698[(2)]);
var inst_38696 = cljs.core.async.close_BANG_.call(null,out);
var state_38698__$1 = (function (){var statearr_38706 = state_38698;
(statearr_38706[(9)] = inst_38695);

return statearr_38706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38698__$1,inst_38696);
} else {
if((state_val_38699 === (2))){
var inst_38675 = (state_38698[(8)]);
var inst_38677 = (inst_38675 < n);
var state_38698__$1 = state_38698;
if(cljs.core.truth_(inst_38677)){
var statearr_38707_38724 = state_38698__$1;
(statearr_38707_38724[(1)] = (4));

} else {
var statearr_38708_38725 = state_38698__$1;
(statearr_38708_38725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (11))){
var inst_38675 = (state_38698[(8)]);
var inst_38685 = (state_38698[(2)]);
var inst_38686 = (inst_38675 + (1));
var inst_38675__$1 = inst_38686;
var state_38698__$1 = (function (){var statearr_38709 = state_38698;
(statearr_38709[(10)] = inst_38685);

(statearr_38709[(8)] = inst_38675__$1);

return statearr_38709;
})();
var statearr_38710_38726 = state_38698__$1;
(statearr_38710_38726[(2)] = null);

(statearr_38710_38726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (9))){
var state_38698__$1 = state_38698;
var statearr_38711_38727 = state_38698__$1;
(statearr_38711_38727[(2)] = null);

(statearr_38711_38727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (5))){
var state_38698__$1 = state_38698;
var statearr_38712_38728 = state_38698__$1;
(statearr_38712_38728[(2)] = null);

(statearr_38712_38728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (10))){
var inst_38690 = (state_38698[(2)]);
var state_38698__$1 = state_38698;
var statearr_38713_38729 = state_38698__$1;
(statearr_38713_38729[(2)] = inst_38690);

(statearr_38713_38729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38699 === (8))){
var inst_38680 = (state_38698[(7)]);
var state_38698__$1 = state_38698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38698__$1,(11),out,inst_38680);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38714[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38714[(1)] = (1));

return statearr_38714;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38698){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38715){if((e38715 instanceof Object)){
var ex__37143__auto__ = e38715;
var statearr_38716_38730 = state_38698;
(statearr_38716_38730[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38731 = state_38698;
state_38698 = G__38731;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38717 = f__37235__auto__.call(null);
(statearr_38717[(6)] = c__37234__auto___38719);

return statearr_38717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38733 = (function (f,ch,meta38734){
this.f = f;
this.ch = ch;
this.meta38734 = meta38734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38735,meta38734__$1){
var self__ = this;
var _38735__$1 = this;
return (new cljs.core.async.t_cljs$core$async38733(self__.f,self__.ch,meta38734__$1));
}));

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38735){
var self__ = this;
var _38735__$1 = this;
return self__.meta38734;
}));

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38736 = (function (f,ch,meta38734,_,fn1,meta38737){
this.f = f;
this.ch = ch;
this.meta38734 = meta38734;
this._ = _;
this.fn1 = fn1;
this.meta38737 = meta38737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38738,meta38737__$1){
var self__ = this;
var _38738__$1 = this;
return (new cljs.core.async.t_cljs$core$async38736(self__.f,self__.ch,self__.meta38734,self__._,self__.fn1,meta38737__$1));
}));

(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38738){
var self__ = this;
var _38738__$1 = this;
return self__.meta38737;
}));

(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__38732_SHARP_){
return f1.call(null,(((p1__38732_SHARP_ == null))?null:self__.f.call(null,p1__38732_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async38736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38734","meta38734",-1148939869,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38733","cljs.core.async/t_cljs$core$async38733",-692802059,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38737","meta38737",-889950634,null)], null);
}));

(cljs.core.async.t_cljs$core$async38736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38736");

(cljs.core.async.t_cljs$core$async38736.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38736.
 */
cljs.core.async.__GT_t_cljs$core$async38736 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38736(f__$1,ch__$1,meta38734__$1,___$2,fn1__$1,meta38737){
return (new cljs.core.async.t_cljs$core$async38736(f__$1,ch__$1,meta38734__$1,___$2,fn1__$1,meta38737));
});

}

return (new cljs.core.async.t_cljs$core$async38736(self__.f,self__.ch,self__.meta38734,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38734","meta38734",-1148939869,null)], null);
}));

(cljs.core.async.t_cljs$core$async38733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38733");

(cljs.core.async.t_cljs$core$async38733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38733.
 */
cljs.core.async.__GT_t_cljs$core$async38733 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38733(f__$1,ch__$1,meta38734){
return (new cljs.core.async.t_cljs$core$async38733(f__$1,ch__$1,meta38734));
});

}

return (new cljs.core.async.t_cljs$core$async38733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38739 = (function (f,ch,meta38740){
this.f = f;
this.ch = ch;
this.meta38740 = meta38740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38741,meta38740__$1){
var self__ = this;
var _38741__$1 = this;
return (new cljs.core.async.t_cljs$core$async38739(self__.f,self__.ch,meta38740__$1));
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38741){
var self__ = this;
var _38741__$1 = this;
return self__.meta38740;
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async38739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38740","meta38740",2102431256,null)], null);
}));

(cljs.core.async.t_cljs$core$async38739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38739");

(cljs.core.async.t_cljs$core$async38739.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38739.
 */
cljs.core.async.__GT_t_cljs$core$async38739 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38739(f__$1,ch__$1,meta38740){
return (new cljs.core.async.t_cljs$core$async38739(f__$1,ch__$1,meta38740));
});

}

return (new cljs.core.async.t_cljs$core$async38739(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38742 = (function (p,ch,meta38743){
this.p = p;
this.ch = ch;
this.meta38743 = meta38743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38744,meta38743__$1){
var self__ = this;
var _38744__$1 = this;
return (new cljs.core.async.t_cljs$core$async38742(self__.p,self__.ch,meta38743__$1));
}));

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38744){
var self__ = this;
var _38744__$1 = this;
return self__.meta38743;
}));

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38743","meta38743",607465955,null)], null);
}));

(cljs.core.async.t_cljs$core$async38742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38742");

(cljs.core.async.t_cljs$core$async38742.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38742.
 */
cljs.core.async.__GT_t_cljs$core$async38742 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38742(p__$1,ch__$1,meta38743){
return (new cljs.core.async.t_cljs$core$async38742(p__$1,ch__$1,meta38743));
});

}

return (new cljs.core.async.t_cljs$core$async38742(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38746 = arguments.length;
switch (G__38746) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___38786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38767){
var state_val_38768 = (state_38767[(1)]);
if((state_val_38768 === (7))){
var inst_38763 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38769_38787 = state_38767__$1;
(statearr_38769_38787[(2)] = inst_38763);

(statearr_38769_38787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (1))){
var state_38767__$1 = state_38767;
var statearr_38770_38788 = state_38767__$1;
(statearr_38770_38788[(2)] = null);

(statearr_38770_38788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (4))){
var inst_38749 = (state_38767[(7)]);
var inst_38749__$1 = (state_38767[(2)]);
var inst_38750 = (inst_38749__$1 == null);
var state_38767__$1 = (function (){var statearr_38771 = state_38767;
(statearr_38771[(7)] = inst_38749__$1);

return statearr_38771;
})();
if(cljs.core.truth_(inst_38750)){
var statearr_38772_38789 = state_38767__$1;
(statearr_38772_38789[(1)] = (5));

} else {
var statearr_38773_38790 = state_38767__$1;
(statearr_38773_38790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (6))){
var inst_38749 = (state_38767[(7)]);
var inst_38754 = p.call(null,inst_38749);
var state_38767__$1 = state_38767;
if(cljs.core.truth_(inst_38754)){
var statearr_38774_38791 = state_38767__$1;
(statearr_38774_38791[(1)] = (8));

} else {
var statearr_38775_38792 = state_38767__$1;
(statearr_38775_38792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (3))){
var inst_38765 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38767__$1,inst_38765);
} else {
if((state_val_38768 === (2))){
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38767__$1,(4),ch);
} else {
if((state_val_38768 === (11))){
var inst_38757 = (state_38767[(2)]);
var state_38767__$1 = state_38767;
var statearr_38776_38793 = state_38767__$1;
(statearr_38776_38793[(2)] = inst_38757);

(statearr_38776_38793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (9))){
var state_38767__$1 = state_38767;
var statearr_38777_38794 = state_38767__$1;
(statearr_38777_38794[(2)] = null);

(statearr_38777_38794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (5))){
var inst_38752 = cljs.core.async.close_BANG_.call(null,out);
var state_38767__$1 = state_38767;
var statearr_38778_38795 = state_38767__$1;
(statearr_38778_38795[(2)] = inst_38752);

(statearr_38778_38795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (10))){
var inst_38760 = (state_38767[(2)]);
var state_38767__$1 = (function (){var statearr_38779 = state_38767;
(statearr_38779[(8)] = inst_38760);

return statearr_38779;
})();
var statearr_38780_38796 = state_38767__$1;
(statearr_38780_38796[(2)] = null);

(statearr_38780_38796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38768 === (8))){
var inst_38749 = (state_38767[(7)]);
var state_38767__$1 = state_38767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38767__$1,(11),out,inst_38749);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38781 = [null,null,null,null,null,null,null,null,null];
(statearr_38781[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38781[(1)] = (1));

return statearr_38781;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38767){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38782){if((e38782 instanceof Object)){
var ex__37143__auto__ = e38782;
var statearr_38783_38797 = state_38767;
(statearr_38783_38797[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38798 = state_38767;
state_38767 = G__38798;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38784 = f__37235__auto__.call(null);
(statearr_38784[(6)] = c__37234__auto___38786);

return statearr_38784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38800 = arguments.length;
switch (G__38800) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (7))){
var inst_38859 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38865_38903 = state_38863__$1;
(statearr_38865_38903[(2)] = inst_38859);

(statearr_38865_38903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (20))){
var inst_38829 = (state_38863[(7)]);
var inst_38840 = (state_38863[(2)]);
var inst_38841 = cljs.core.next.call(null,inst_38829);
var inst_38815 = inst_38841;
var inst_38816 = null;
var inst_38817 = (0);
var inst_38818 = (0);
var state_38863__$1 = (function (){var statearr_38866 = state_38863;
(statearr_38866[(8)] = inst_38816);

(statearr_38866[(9)] = inst_38818);

(statearr_38866[(10)] = inst_38815);

(statearr_38866[(11)] = inst_38840);

(statearr_38866[(12)] = inst_38817);

return statearr_38866;
})();
var statearr_38867_38904 = state_38863__$1;
(statearr_38867_38904[(2)] = null);

(statearr_38867_38904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (1))){
var state_38863__$1 = state_38863;
var statearr_38868_38905 = state_38863__$1;
(statearr_38868_38905[(2)] = null);

(statearr_38868_38905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (4))){
var inst_38804 = (state_38863[(13)]);
var inst_38804__$1 = (state_38863[(2)]);
var inst_38805 = (inst_38804__$1 == null);
var state_38863__$1 = (function (){var statearr_38869 = state_38863;
(statearr_38869[(13)] = inst_38804__$1);

return statearr_38869;
})();
if(cljs.core.truth_(inst_38805)){
var statearr_38870_38906 = state_38863__$1;
(statearr_38870_38906[(1)] = (5));

} else {
var statearr_38871_38907 = state_38863__$1;
(statearr_38871_38907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (15))){
var state_38863__$1 = state_38863;
var statearr_38875_38908 = state_38863__$1;
(statearr_38875_38908[(2)] = null);

(statearr_38875_38908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (21))){
var state_38863__$1 = state_38863;
var statearr_38876_38909 = state_38863__$1;
(statearr_38876_38909[(2)] = null);

(statearr_38876_38909[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (13))){
var inst_38816 = (state_38863[(8)]);
var inst_38818 = (state_38863[(9)]);
var inst_38815 = (state_38863[(10)]);
var inst_38817 = (state_38863[(12)]);
var inst_38825 = (state_38863[(2)]);
var inst_38826 = (inst_38818 + (1));
var tmp38872 = inst_38816;
var tmp38873 = inst_38815;
var tmp38874 = inst_38817;
var inst_38815__$1 = tmp38873;
var inst_38816__$1 = tmp38872;
var inst_38817__$1 = tmp38874;
var inst_38818__$1 = inst_38826;
var state_38863__$1 = (function (){var statearr_38877 = state_38863;
(statearr_38877[(8)] = inst_38816__$1);

(statearr_38877[(9)] = inst_38818__$1);

(statearr_38877[(10)] = inst_38815__$1);

(statearr_38877[(12)] = inst_38817__$1);

(statearr_38877[(14)] = inst_38825);

return statearr_38877;
})();
var statearr_38878_38910 = state_38863__$1;
(statearr_38878_38910[(2)] = null);

(statearr_38878_38910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (22))){
var state_38863__$1 = state_38863;
var statearr_38879_38911 = state_38863__$1;
(statearr_38879_38911[(2)] = null);

(statearr_38879_38911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (6))){
var inst_38804 = (state_38863[(13)]);
var inst_38813 = f.call(null,inst_38804);
var inst_38814 = cljs.core.seq.call(null,inst_38813);
var inst_38815 = inst_38814;
var inst_38816 = null;
var inst_38817 = (0);
var inst_38818 = (0);
var state_38863__$1 = (function (){var statearr_38880 = state_38863;
(statearr_38880[(8)] = inst_38816);

(statearr_38880[(9)] = inst_38818);

(statearr_38880[(10)] = inst_38815);

(statearr_38880[(12)] = inst_38817);

return statearr_38880;
})();
var statearr_38881_38912 = state_38863__$1;
(statearr_38881_38912[(2)] = null);

(statearr_38881_38912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (17))){
var inst_38829 = (state_38863[(7)]);
var inst_38833 = cljs.core.chunk_first.call(null,inst_38829);
var inst_38834 = cljs.core.chunk_rest.call(null,inst_38829);
var inst_38835 = cljs.core.count.call(null,inst_38833);
var inst_38815 = inst_38834;
var inst_38816 = inst_38833;
var inst_38817 = inst_38835;
var inst_38818 = (0);
var state_38863__$1 = (function (){var statearr_38882 = state_38863;
(statearr_38882[(8)] = inst_38816);

(statearr_38882[(9)] = inst_38818);

(statearr_38882[(10)] = inst_38815);

(statearr_38882[(12)] = inst_38817);

return statearr_38882;
})();
var statearr_38883_38913 = state_38863__$1;
(statearr_38883_38913[(2)] = null);

(statearr_38883_38913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (3))){
var inst_38861 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
if((state_val_38864 === (12))){
var inst_38849 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38884_38914 = state_38863__$1;
(statearr_38884_38914[(2)] = inst_38849);

(statearr_38884_38914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (2))){
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(4),in$);
} else {
if((state_val_38864 === (23))){
var inst_38857 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38885_38915 = state_38863__$1;
(statearr_38885_38915[(2)] = inst_38857);

(statearr_38885_38915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (19))){
var inst_38844 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38886_38916 = state_38863__$1;
(statearr_38886_38916[(2)] = inst_38844);

(statearr_38886_38916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (11))){
var inst_38815 = (state_38863[(10)]);
var inst_38829 = (state_38863[(7)]);
var inst_38829__$1 = cljs.core.seq.call(null,inst_38815);
var state_38863__$1 = (function (){var statearr_38887 = state_38863;
(statearr_38887[(7)] = inst_38829__$1);

return statearr_38887;
})();
if(inst_38829__$1){
var statearr_38888_38917 = state_38863__$1;
(statearr_38888_38917[(1)] = (14));

} else {
var statearr_38889_38918 = state_38863__$1;
(statearr_38889_38918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (9))){
var inst_38851 = (state_38863[(2)]);
var inst_38852 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38863__$1 = (function (){var statearr_38890 = state_38863;
(statearr_38890[(15)] = inst_38851);

return statearr_38890;
})();
if(cljs.core.truth_(inst_38852)){
var statearr_38891_38919 = state_38863__$1;
(statearr_38891_38919[(1)] = (21));

} else {
var statearr_38892_38920 = state_38863__$1;
(statearr_38892_38920[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (5))){
var inst_38807 = cljs.core.async.close_BANG_.call(null,out);
var state_38863__$1 = state_38863;
var statearr_38893_38921 = state_38863__$1;
(statearr_38893_38921[(2)] = inst_38807);

(statearr_38893_38921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (14))){
var inst_38829 = (state_38863[(7)]);
var inst_38831 = cljs.core.chunked_seq_QMARK_.call(null,inst_38829);
var state_38863__$1 = state_38863;
if(inst_38831){
var statearr_38894_38922 = state_38863__$1;
(statearr_38894_38922[(1)] = (17));

} else {
var statearr_38895_38923 = state_38863__$1;
(statearr_38895_38923[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (16))){
var inst_38847 = (state_38863[(2)]);
var state_38863__$1 = state_38863;
var statearr_38896_38924 = state_38863__$1;
(statearr_38896_38924[(2)] = inst_38847);

(statearr_38896_38924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38864 === (10))){
var inst_38816 = (state_38863[(8)]);
var inst_38818 = (state_38863[(9)]);
var inst_38823 = cljs.core._nth.call(null,inst_38816,inst_38818);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38863__$1,(13),out,inst_38823);
} else {
if((state_val_38864 === (18))){
var inst_38829 = (state_38863[(7)]);
var inst_38838 = cljs.core.first.call(null,inst_38829);
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38863__$1,(20),out,inst_38838);
} else {
if((state_val_38864 === (8))){
var inst_38818 = (state_38863[(9)]);
var inst_38817 = (state_38863[(12)]);
var inst_38820 = (inst_38818 < inst_38817);
var inst_38821 = inst_38820;
var state_38863__$1 = state_38863;
if(cljs.core.truth_(inst_38821)){
var statearr_38897_38925 = state_38863__$1;
(statearr_38897_38925[(1)] = (10));

} else {
var statearr_38898_38926 = state_38863__$1;
(statearr_38898_38926[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____0 = (function (){
var statearr_38899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38899[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__);

(statearr_38899[(1)] = (1));

return statearr_38899;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____1 = (function (state_38863){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38900){if((e38900 instanceof Object)){
var ex__37143__auto__ = e38900;
var statearr_38901_38927 = state_38863;
(statearr_38901_38927[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38928 = state_38863;
state_38863 = G__38928;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37140__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38902 = f__37235__auto__.call(null);
(statearr_38902[(6)] = c__37234__auto__);

return statearr_38902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38930 = arguments.length;
switch (G__38930) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38933 = arguments.length;
switch (G__38933) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38936 = arguments.length;
switch (G__38936) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___38983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_38960){
var state_val_38961 = (state_38960[(1)]);
if((state_val_38961 === (7))){
var inst_38955 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38962_38984 = state_38960__$1;
(statearr_38962_38984[(2)] = inst_38955);

(statearr_38962_38984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (1))){
var inst_38937 = null;
var state_38960__$1 = (function (){var statearr_38963 = state_38960;
(statearr_38963[(7)] = inst_38937);

return statearr_38963;
})();
var statearr_38964_38985 = state_38960__$1;
(statearr_38964_38985[(2)] = null);

(statearr_38964_38985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (4))){
var inst_38940 = (state_38960[(8)]);
var inst_38940__$1 = (state_38960[(2)]);
var inst_38941 = (inst_38940__$1 == null);
var inst_38942 = cljs.core.not.call(null,inst_38941);
var state_38960__$1 = (function (){var statearr_38965 = state_38960;
(statearr_38965[(8)] = inst_38940__$1);

return statearr_38965;
})();
if(inst_38942){
var statearr_38966_38986 = state_38960__$1;
(statearr_38966_38986[(1)] = (5));

} else {
var statearr_38967_38987 = state_38960__$1;
(statearr_38967_38987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (6))){
var state_38960__$1 = state_38960;
var statearr_38968_38988 = state_38960__$1;
(statearr_38968_38988[(2)] = null);

(statearr_38968_38988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (3))){
var inst_38957 = (state_38960[(2)]);
var inst_38958 = cljs.core.async.close_BANG_.call(null,out);
var state_38960__$1 = (function (){var statearr_38969 = state_38960;
(statearr_38969[(9)] = inst_38957);

return statearr_38969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38960__$1,inst_38958);
} else {
if((state_val_38961 === (2))){
var state_38960__$1 = state_38960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38960__$1,(4),ch);
} else {
if((state_val_38961 === (11))){
var inst_38940 = (state_38960[(8)]);
var inst_38949 = (state_38960[(2)]);
var inst_38937 = inst_38940;
var state_38960__$1 = (function (){var statearr_38970 = state_38960;
(statearr_38970[(10)] = inst_38949);

(statearr_38970[(7)] = inst_38937);

return statearr_38970;
})();
var statearr_38971_38989 = state_38960__$1;
(statearr_38971_38989[(2)] = null);

(statearr_38971_38989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (9))){
var inst_38940 = (state_38960[(8)]);
var state_38960__$1 = state_38960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38960__$1,(11),out,inst_38940);
} else {
if((state_val_38961 === (5))){
var inst_38940 = (state_38960[(8)]);
var inst_38937 = (state_38960[(7)]);
var inst_38944 = cljs.core._EQ_.call(null,inst_38940,inst_38937);
var state_38960__$1 = state_38960;
if(inst_38944){
var statearr_38973_38990 = state_38960__$1;
(statearr_38973_38990[(1)] = (8));

} else {
var statearr_38974_38991 = state_38960__$1;
(statearr_38974_38991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (10))){
var inst_38952 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38975_38992 = state_38960__$1;
(statearr_38975_38992[(2)] = inst_38952);

(statearr_38975_38992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (8))){
var inst_38937 = (state_38960[(7)]);
var tmp38972 = inst_38937;
var inst_38937__$1 = tmp38972;
var state_38960__$1 = (function (){var statearr_38976 = state_38960;
(statearr_38976[(7)] = inst_38937__$1);

return statearr_38976;
})();
var statearr_38977_38993 = state_38960__$1;
(statearr_38977_38993[(2)] = null);

(statearr_38977_38993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_38978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38978[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_38978[(1)] = (1));

return statearr_38978;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_38960){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_38960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e38979){if((e38979 instanceof Object)){
var ex__37143__auto__ = e38979;
var statearr_38980_38994 = state_38960;
(statearr_38980_38994[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38995 = state_38960;
state_38960 = G__38995;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_38960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_38960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_38981 = f__37235__auto__.call(null);
(statearr_38981[(6)] = c__37234__auto___38983);

return statearr_38981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38997 = arguments.length;
switch (G__38997) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___39063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_39035){
var state_val_39036 = (state_39035[(1)]);
if((state_val_39036 === (7))){
var inst_39031 = (state_39035[(2)]);
var state_39035__$1 = state_39035;
var statearr_39037_39064 = state_39035__$1;
(statearr_39037_39064[(2)] = inst_39031);

(statearr_39037_39064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (1))){
var inst_38998 = (new Array(n));
var inst_38999 = inst_38998;
var inst_39000 = (0);
var state_39035__$1 = (function (){var statearr_39038 = state_39035;
(statearr_39038[(7)] = inst_38999);

(statearr_39038[(8)] = inst_39000);

return statearr_39038;
})();
var statearr_39039_39065 = state_39035__$1;
(statearr_39039_39065[(2)] = null);

(statearr_39039_39065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (4))){
var inst_39003 = (state_39035[(9)]);
var inst_39003__$1 = (state_39035[(2)]);
var inst_39004 = (inst_39003__$1 == null);
var inst_39005 = cljs.core.not.call(null,inst_39004);
var state_39035__$1 = (function (){var statearr_39040 = state_39035;
(statearr_39040[(9)] = inst_39003__$1);

return statearr_39040;
})();
if(inst_39005){
var statearr_39041_39066 = state_39035__$1;
(statearr_39041_39066[(1)] = (5));

} else {
var statearr_39042_39067 = state_39035__$1;
(statearr_39042_39067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (15))){
var inst_39025 = (state_39035[(2)]);
var state_39035__$1 = state_39035;
var statearr_39043_39068 = state_39035__$1;
(statearr_39043_39068[(2)] = inst_39025);

(statearr_39043_39068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (13))){
var state_39035__$1 = state_39035;
var statearr_39044_39069 = state_39035__$1;
(statearr_39044_39069[(2)] = null);

(statearr_39044_39069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (6))){
var inst_39000 = (state_39035[(8)]);
var inst_39021 = (inst_39000 > (0));
var state_39035__$1 = state_39035;
if(cljs.core.truth_(inst_39021)){
var statearr_39045_39070 = state_39035__$1;
(statearr_39045_39070[(1)] = (12));

} else {
var statearr_39046_39071 = state_39035__$1;
(statearr_39046_39071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (3))){
var inst_39033 = (state_39035[(2)]);
var state_39035__$1 = state_39035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39035__$1,inst_39033);
} else {
if((state_val_39036 === (12))){
var inst_38999 = (state_39035[(7)]);
var inst_39023 = cljs.core.vec.call(null,inst_38999);
var state_39035__$1 = state_39035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39035__$1,(15),out,inst_39023);
} else {
if((state_val_39036 === (2))){
var state_39035__$1 = state_39035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39035__$1,(4),ch);
} else {
if((state_val_39036 === (11))){
var inst_39015 = (state_39035[(2)]);
var inst_39016 = (new Array(n));
var inst_38999 = inst_39016;
var inst_39000 = (0);
var state_39035__$1 = (function (){var statearr_39047 = state_39035;
(statearr_39047[(7)] = inst_38999);

(statearr_39047[(8)] = inst_39000);

(statearr_39047[(10)] = inst_39015);

return statearr_39047;
})();
var statearr_39048_39072 = state_39035__$1;
(statearr_39048_39072[(2)] = null);

(statearr_39048_39072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (9))){
var inst_38999 = (state_39035[(7)]);
var inst_39013 = cljs.core.vec.call(null,inst_38999);
var state_39035__$1 = state_39035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39035__$1,(11),out,inst_39013);
} else {
if((state_val_39036 === (5))){
var inst_39008 = (state_39035[(11)]);
var inst_38999 = (state_39035[(7)]);
var inst_39003 = (state_39035[(9)]);
var inst_39000 = (state_39035[(8)]);
var inst_39007 = (inst_38999[inst_39000] = inst_39003);
var inst_39008__$1 = (inst_39000 + (1));
var inst_39009 = (inst_39008__$1 < n);
var state_39035__$1 = (function (){var statearr_39049 = state_39035;
(statearr_39049[(11)] = inst_39008__$1);

(statearr_39049[(12)] = inst_39007);

return statearr_39049;
})();
if(cljs.core.truth_(inst_39009)){
var statearr_39050_39073 = state_39035__$1;
(statearr_39050_39073[(1)] = (8));

} else {
var statearr_39051_39074 = state_39035__$1;
(statearr_39051_39074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (14))){
var inst_39028 = (state_39035[(2)]);
var inst_39029 = cljs.core.async.close_BANG_.call(null,out);
var state_39035__$1 = (function (){var statearr_39053 = state_39035;
(statearr_39053[(13)] = inst_39028);

return statearr_39053;
})();
var statearr_39054_39075 = state_39035__$1;
(statearr_39054_39075[(2)] = inst_39029);

(statearr_39054_39075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (10))){
var inst_39019 = (state_39035[(2)]);
var state_39035__$1 = state_39035;
var statearr_39055_39076 = state_39035__$1;
(statearr_39055_39076[(2)] = inst_39019);

(statearr_39055_39076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39036 === (8))){
var inst_39008 = (state_39035[(11)]);
var inst_38999 = (state_39035[(7)]);
var tmp39052 = inst_38999;
var inst_38999__$1 = tmp39052;
var inst_39000 = inst_39008;
var state_39035__$1 = (function (){var statearr_39056 = state_39035;
(statearr_39056[(7)] = inst_38999__$1);

(statearr_39056[(8)] = inst_39000);

return statearr_39056;
})();
var statearr_39057_39077 = state_39035__$1;
(statearr_39057_39077[(2)] = null);

(statearr_39057_39077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_39058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39058[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_39058[(1)] = (1));

return statearr_39058;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_39035){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_39035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e39059){if((e39059 instanceof Object)){
var ex__37143__auto__ = e39059;
var statearr_39060_39078 = state_39035;
(statearr_39060_39078[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39079 = state_39035;
state_39035 = G__39079;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_39035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_39035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_39061 = f__37235__auto__.call(null);
(statearr_39061[(6)] = c__37234__auto___39063);

return statearr_39061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39081 = arguments.length;
switch (G__39081) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37234__auto___39151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_39123){
var state_val_39124 = (state_39123[(1)]);
if((state_val_39124 === (7))){
var inst_39119 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39125_39152 = state_39123__$1;
(statearr_39125_39152[(2)] = inst_39119);

(statearr_39125_39152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (1))){
var inst_39082 = [];
var inst_39083 = inst_39082;
var inst_39084 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39123__$1 = (function (){var statearr_39126 = state_39123;
(statearr_39126[(7)] = inst_39083);

(statearr_39126[(8)] = inst_39084);

return statearr_39126;
})();
var statearr_39127_39153 = state_39123__$1;
(statearr_39127_39153[(2)] = null);

(statearr_39127_39153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (4))){
var inst_39087 = (state_39123[(9)]);
var inst_39087__$1 = (state_39123[(2)]);
var inst_39088 = (inst_39087__$1 == null);
var inst_39089 = cljs.core.not.call(null,inst_39088);
var state_39123__$1 = (function (){var statearr_39128 = state_39123;
(statearr_39128[(9)] = inst_39087__$1);

return statearr_39128;
})();
if(inst_39089){
var statearr_39129_39154 = state_39123__$1;
(statearr_39129_39154[(1)] = (5));

} else {
var statearr_39130_39155 = state_39123__$1;
(statearr_39130_39155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (15))){
var inst_39113 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39131_39156 = state_39123__$1;
(statearr_39131_39156[(2)] = inst_39113);

(statearr_39131_39156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (13))){
var state_39123__$1 = state_39123;
var statearr_39132_39157 = state_39123__$1;
(statearr_39132_39157[(2)] = null);

(statearr_39132_39157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (6))){
var inst_39083 = (state_39123[(7)]);
var inst_39108 = inst_39083.length;
var inst_39109 = (inst_39108 > (0));
var state_39123__$1 = state_39123;
if(cljs.core.truth_(inst_39109)){
var statearr_39133_39158 = state_39123__$1;
(statearr_39133_39158[(1)] = (12));

} else {
var statearr_39134_39159 = state_39123__$1;
(statearr_39134_39159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (3))){
var inst_39121 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39123__$1,inst_39121);
} else {
if((state_val_39124 === (12))){
var inst_39083 = (state_39123[(7)]);
var inst_39111 = cljs.core.vec.call(null,inst_39083);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39123__$1,(15),out,inst_39111);
} else {
if((state_val_39124 === (2))){
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39123__$1,(4),ch);
} else {
if((state_val_39124 === (11))){
var inst_39087 = (state_39123[(9)]);
var inst_39091 = (state_39123[(10)]);
var inst_39101 = (state_39123[(2)]);
var inst_39102 = [];
var inst_39103 = inst_39102.push(inst_39087);
var inst_39083 = inst_39102;
var inst_39084 = inst_39091;
var state_39123__$1 = (function (){var statearr_39135 = state_39123;
(statearr_39135[(7)] = inst_39083);

(statearr_39135[(11)] = inst_39101);

(statearr_39135[(8)] = inst_39084);

(statearr_39135[(12)] = inst_39103);

return statearr_39135;
})();
var statearr_39136_39160 = state_39123__$1;
(statearr_39136_39160[(2)] = null);

(statearr_39136_39160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (9))){
var inst_39083 = (state_39123[(7)]);
var inst_39099 = cljs.core.vec.call(null,inst_39083);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39123__$1,(11),out,inst_39099);
} else {
if((state_val_39124 === (5))){
var inst_39087 = (state_39123[(9)]);
var inst_39091 = (state_39123[(10)]);
var inst_39084 = (state_39123[(8)]);
var inst_39091__$1 = f.call(null,inst_39087);
var inst_39092 = cljs.core._EQ_.call(null,inst_39091__$1,inst_39084);
var inst_39093 = cljs.core.keyword_identical_QMARK_.call(null,inst_39084,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39094 = ((inst_39092) || (inst_39093));
var state_39123__$1 = (function (){var statearr_39137 = state_39123;
(statearr_39137[(10)] = inst_39091__$1);

return statearr_39137;
})();
if(cljs.core.truth_(inst_39094)){
var statearr_39138_39161 = state_39123__$1;
(statearr_39138_39161[(1)] = (8));

} else {
var statearr_39139_39162 = state_39123__$1;
(statearr_39139_39162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (14))){
var inst_39116 = (state_39123[(2)]);
var inst_39117 = cljs.core.async.close_BANG_.call(null,out);
var state_39123__$1 = (function (){var statearr_39141 = state_39123;
(statearr_39141[(13)] = inst_39116);

return statearr_39141;
})();
var statearr_39142_39163 = state_39123__$1;
(statearr_39142_39163[(2)] = inst_39117);

(statearr_39142_39163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (10))){
var inst_39106 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39143_39164 = state_39123__$1;
(statearr_39143_39164[(2)] = inst_39106);

(statearr_39143_39164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (8))){
var inst_39087 = (state_39123[(9)]);
var inst_39083 = (state_39123[(7)]);
var inst_39091 = (state_39123[(10)]);
var inst_39096 = inst_39083.push(inst_39087);
var tmp39140 = inst_39083;
var inst_39083__$1 = tmp39140;
var inst_39084 = inst_39091;
var state_39123__$1 = (function (){var statearr_39144 = state_39123;
(statearr_39144[(14)] = inst_39096);

(statearr_39144[(7)] = inst_39083__$1);

(statearr_39144[(8)] = inst_39084);

return statearr_39144;
})();
var statearr_39145_39165 = state_39123__$1;
(statearr_39145_39165[(2)] = null);

(statearr_39145_39165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37140__auto__ = null;
var cljs$core$async$state_machine__37140__auto____0 = (function (){
var statearr_39146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39146[(0)] = cljs$core$async$state_machine__37140__auto__);

(statearr_39146[(1)] = (1));

return statearr_39146;
});
var cljs$core$async$state_machine__37140__auto____1 = (function (state_39123){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_39123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e39147){if((e39147 instanceof Object)){
var ex__37143__auto__ = e39147;
var statearr_39148_39166 = state_39123;
(statearr_39148_39166[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39167 = state_39123;
state_39123 = G__39167;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
cljs$core$async$state_machine__37140__auto__ = function(state_39123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37140__auto____1.call(this,state_39123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37140__auto____0;
cljs$core$async$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37140__auto____1;
return cljs$core$async$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_39149 = f__37235__auto__.call(null);
(statearr_39149[(6)] = c__37234__auto___39151);

return statearr_39149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1617925395624
