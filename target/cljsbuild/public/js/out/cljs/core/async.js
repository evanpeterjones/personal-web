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
var G__36963 = arguments.length;
switch (G__36963) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36964 = (function (f,blockable,meta36965){
this.f = f;
this.blockable = blockable;
this.meta36965 = meta36965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36966,meta36965__$1){
var self__ = this;
var _36966__$1 = this;
return (new cljs.core.async.t_cljs$core$async36964(self__.f,self__.blockable,meta36965__$1));
}));

(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36966){
var self__ = this;
var _36966__$1 = this;
return self__.meta36965;
}));

(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36965","meta36965",1951762143,null)], null);
}));

(cljs.core.async.t_cljs$core$async36964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36964");

(cljs.core.async.t_cljs$core$async36964.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36964.
 */
cljs.core.async.__GT_t_cljs$core$async36964 = (function cljs$core$async$__GT_t_cljs$core$async36964(f__$1,blockable__$1,meta36965){
return (new cljs.core.async.t_cljs$core$async36964(f__$1,blockable__$1,meta36965));
});

}

return (new cljs.core.async.t_cljs$core$async36964(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36970 = arguments.length;
switch (G__36970) {
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
var G__36973 = arguments.length;
switch (G__36973) {
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
var G__36976 = arguments.length;
switch (G__36976) {
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
var val_36978 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36978);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_36978);
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
var G__36980 = arguments.length;
switch (G__36980) {
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
var n__4613__auto___36982 = n;
var x_36983 = (0);
while(true){
if((x_36983 < n__4613__auto___36982)){
(a[x_36983] = (0));

var G__36984 = (x_36983 + (1));
x_36983 = G__36984;
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

var G__36985 = (i + (1));
i = G__36985;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36986 = (function (flag,meta36987){
this.flag = flag;
this.meta36987 = meta36987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36988,meta36987__$1){
var self__ = this;
var _36988__$1 = this;
return (new cljs.core.async.t_cljs$core$async36986(self__.flag,meta36987__$1));
}));

(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36988){
var self__ = this;
var _36988__$1 = this;
return self__.meta36987;
}));

(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36987","meta36987",157560518,null)], null);
}));

(cljs.core.async.t_cljs$core$async36986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36986");

(cljs.core.async.t_cljs$core$async36986.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36986.
 */
cljs.core.async.__GT_t_cljs$core$async36986 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36986(flag__$1,meta36987){
return (new cljs.core.async.t_cljs$core$async36986(flag__$1,meta36987));
});

}

return (new cljs.core.async.t_cljs$core$async36986(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36989 = (function (flag,cb,meta36990){
this.flag = flag;
this.cb = cb;
this.meta36990 = meta36990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36991,meta36990__$1){
var self__ = this;
var _36991__$1 = this;
return (new cljs.core.async.t_cljs$core$async36989(self__.flag,self__.cb,meta36990__$1));
}));

(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36991){
var self__ = this;
var _36991__$1 = this;
return self__.meta36990;
}));

(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36990","meta36990",234113798,null)], null);
}));

(cljs.core.async.t_cljs$core$async36989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36989");

(cljs.core.async.t_cljs$core$async36989.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36989.
 */
cljs.core.async.__GT_t_cljs$core$async36989 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36989(flag__$1,cb__$1,meta36990){
return (new cljs.core.async.t_cljs$core$async36989(flag__$1,cb__$1,meta36990));
});

}

return (new cljs.core.async.t_cljs$core$async36989(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36992_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36992_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36993_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36993_SHARP_,port], null));
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
var G__36994 = (i + (1));
i = G__36994;
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
var len__4736__auto___37000 = arguments.length;
var i__4737__auto___37001 = (0);
while(true){
if((i__4737__auto___37001 < len__4736__auto___37000)){
args__4742__auto__.push((arguments[i__4737__auto___37001]));

var G__37002 = (i__4737__auto___37001 + (1));
i__4737__auto___37001 = G__37002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36997){
var map__36998 = p__36997;
var map__36998__$1 = (((((!((map__36998 == null))))?(((((map__36998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36998):map__36998);
var opts = map__36998__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36995){
var G__36996 = cljs.core.first.call(null,seq36995);
var seq36995__$1 = cljs.core.next.call(null,seq36995);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36996,seq36995__$1);
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
var G__37004 = arguments.length;
switch (G__37004) {
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
var c__36903__auto___37050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37028){
var state_val_37029 = (state_37028[(1)]);
if((state_val_37029 === (7))){
var inst_37024 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37030_37051 = state_37028__$1;
(statearr_37030_37051[(2)] = inst_37024);

(statearr_37030_37051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (1))){
var state_37028__$1 = state_37028;
var statearr_37031_37052 = state_37028__$1;
(statearr_37031_37052[(2)] = null);

(statearr_37031_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (4))){
var inst_37007 = (state_37028[(7)]);
var inst_37007__$1 = (state_37028[(2)]);
var inst_37008 = (inst_37007__$1 == null);
var state_37028__$1 = (function (){var statearr_37032 = state_37028;
(statearr_37032[(7)] = inst_37007__$1);

return statearr_37032;
})();
if(cljs.core.truth_(inst_37008)){
var statearr_37033_37053 = state_37028__$1;
(statearr_37033_37053[(1)] = (5));

} else {
var statearr_37034_37054 = state_37028__$1;
(statearr_37034_37054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (13))){
var state_37028__$1 = state_37028;
var statearr_37035_37055 = state_37028__$1;
(statearr_37035_37055[(2)] = null);

(statearr_37035_37055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (6))){
var inst_37007 = (state_37028[(7)]);
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37028__$1,(11),to,inst_37007);
} else {
if((state_val_37029 === (3))){
var inst_37026 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37028__$1,inst_37026);
} else {
if((state_val_37029 === (12))){
var state_37028__$1 = state_37028;
var statearr_37036_37056 = state_37028__$1;
(statearr_37036_37056[(2)] = null);

(statearr_37036_37056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (2))){
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37028__$1,(4),from);
} else {
if((state_val_37029 === (11))){
var inst_37017 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
if(cljs.core.truth_(inst_37017)){
var statearr_37037_37057 = state_37028__$1;
(statearr_37037_37057[(1)] = (12));

} else {
var statearr_37038_37058 = state_37028__$1;
(statearr_37038_37058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (9))){
var state_37028__$1 = state_37028;
var statearr_37039_37059 = state_37028__$1;
(statearr_37039_37059[(2)] = null);

(statearr_37039_37059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (5))){
var state_37028__$1 = state_37028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37040_37060 = state_37028__$1;
(statearr_37040_37060[(1)] = (8));

} else {
var statearr_37041_37061 = state_37028__$1;
(statearr_37041_37061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (14))){
var inst_37022 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37042_37062 = state_37028__$1;
(statearr_37042_37062[(2)] = inst_37022);

(statearr_37042_37062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (10))){
var inst_37014 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37043_37063 = state_37028__$1;
(statearr_37043_37063[(2)] = inst_37014);

(statearr_37043_37063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (8))){
var inst_37011 = cljs.core.async.close_BANG_.call(null,to);
var state_37028__$1 = state_37028;
var statearr_37044_37064 = state_37028__$1;
(statearr_37044_37064[(2)] = inst_37011);

(statearr_37044_37064[(1)] = (10));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_37045 = [null,null,null,null,null,null,null,null];
(statearr_37045[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_37045[(1)] = (1));

return statearr_37045;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_37028){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37046){if((e37046 instanceof Object)){
var ex__36812__auto__ = e37046;
var statearr_37047_37065 = state_37028;
(statearr_37047_37065[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37066 = state_37028;
state_37028 = G__37066;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_37028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_37028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37048 = f__36904__auto__.call(null);
(statearr_37048[(6)] = c__36903__auto___37050);

return statearr_37048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var process = (function (p__37067){
var vec__37068 = p__37067;
var v = cljs.core.nth.call(null,vec__37068,(0),null);
var p = cljs.core.nth.call(null,vec__37068,(1),null);
var job = vec__37068;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36903__auto___37239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37075){
var state_val_37076 = (state_37075[(1)]);
if((state_val_37076 === (1))){
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37075__$1,(2),res,v);
} else {
if((state_val_37076 === (2))){
var inst_37072 = (state_37075[(2)]);
var inst_37073 = cljs.core.async.close_BANG_.call(null,res);
var state_37075__$1 = (function (){var statearr_37077 = state_37075;
(statearr_37077[(7)] = inst_37072);

return statearr_37077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37075__$1,inst_37073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_37078 = [null,null,null,null,null,null,null,null];
(statearr_37078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__);

(statearr_37078[(1)] = (1));

return statearr_37078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1 = (function (state_37075){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37079){if((e37079 instanceof Object)){
var ex__36812__auto__ = e37079;
var statearr_37080_37240 = state_37075;
(statearr_37080_37240[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37241 = state_37075;
state_37075 = G__37241;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = function(state_37075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1.call(this,state_37075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37081 = f__36904__auto__.call(null);
(statearr_37081[(6)] = c__36903__auto___37239);

return statearr_37081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__37082){
var vec__37083 = p__37082;
var v = cljs.core.nth.call(null,vec__37083,(0),null);
var p = cljs.core.nth.call(null,vec__37083,(1),null);
var job = vec__37083;
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
var n__4613__auto___37242 = n;
var __37243 = (0);
while(true){
if((__37243 < n__4613__auto___37242)){
var G__37086_37244 = type;
var G__37086_37245__$1 = (((G__37086_37244 instanceof cljs.core.Keyword))?G__37086_37244.fqn:null);
switch (G__37086_37245__$1) {
case "compute":
var c__36903__auto___37247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37243,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = ((function (__37243,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function (state_37099){
var state_val_37100 = (state_37099[(1)]);
if((state_val_37100 === (1))){
var state_37099__$1 = state_37099;
var statearr_37101_37248 = state_37099__$1;
(statearr_37101_37248[(2)] = null);

(statearr_37101_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (2))){
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37099__$1,(4),jobs);
} else {
if((state_val_37100 === (3))){
var inst_37097 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37099__$1,inst_37097);
} else {
if((state_val_37100 === (4))){
var inst_37089 = (state_37099[(2)]);
var inst_37090 = process.call(null,inst_37089);
var state_37099__$1 = state_37099;
if(cljs.core.truth_(inst_37090)){
var statearr_37102_37249 = state_37099__$1;
(statearr_37102_37249[(1)] = (5));

} else {
var statearr_37103_37250 = state_37099__$1;
(statearr_37103_37250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (5))){
var state_37099__$1 = state_37099;
var statearr_37104_37251 = state_37099__$1;
(statearr_37104_37251[(2)] = null);

(statearr_37104_37251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (6))){
var state_37099__$1 = state_37099;
var statearr_37105_37252 = state_37099__$1;
(statearr_37105_37252[(2)] = null);

(statearr_37105_37252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (7))){
var inst_37095 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
var statearr_37106_37253 = state_37099__$1;
(statearr_37106_37253[(2)] = inst_37095);

(statearr_37106_37253[(1)] = (3));


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
});})(__37243,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
;
return ((function (__37243,switch__36808__auto__,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_37107 = [null,null,null,null,null,null,null];
(statearr_37107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__);

(statearr_37107[(1)] = (1));

return statearr_37107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1 = (function (state_37099){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37108){if((e37108 instanceof Object)){
var ex__36812__auto__ = e37108;
var statearr_37109_37254 = state_37099;
(statearr_37109_37254[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37255 = state_37099;
state_37099 = G__37255;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = function(state_37099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1.call(this,state_37099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__;
})()
;})(__37243,switch__36808__auto__,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
})();
var state__36905__auto__ = (function (){var statearr_37110 = f__36904__auto__.call(null);
(statearr_37110[(6)] = c__36903__auto___37247);

return statearr_37110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
});})(__37243,c__36903__auto___37247,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
);


break;
case "async":
var c__36903__auto___37256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37243,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = ((function (__37243,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function (state_37123){
var state_val_37124 = (state_37123[(1)]);
if((state_val_37124 === (1))){
var state_37123__$1 = state_37123;
var statearr_37125_37257 = state_37123__$1;
(statearr_37125_37257[(2)] = null);

(statearr_37125_37257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (2))){
var state_37123__$1 = state_37123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37123__$1,(4),jobs);
} else {
if((state_val_37124 === (3))){
var inst_37121 = (state_37123[(2)]);
var state_37123__$1 = state_37123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37123__$1,inst_37121);
} else {
if((state_val_37124 === (4))){
var inst_37113 = (state_37123[(2)]);
var inst_37114 = async.call(null,inst_37113);
var state_37123__$1 = state_37123;
if(cljs.core.truth_(inst_37114)){
var statearr_37126_37258 = state_37123__$1;
(statearr_37126_37258[(1)] = (5));

} else {
var statearr_37127_37259 = state_37123__$1;
(statearr_37127_37259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (5))){
var state_37123__$1 = state_37123;
var statearr_37128_37260 = state_37123__$1;
(statearr_37128_37260[(2)] = null);

(statearr_37128_37260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (6))){
var state_37123__$1 = state_37123;
var statearr_37129_37261 = state_37123__$1;
(statearr_37129_37261[(2)] = null);

(statearr_37129_37261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (7))){
var inst_37119 = (state_37123[(2)]);
var state_37123__$1 = state_37123;
var statearr_37130_37262 = state_37123__$1;
(statearr_37130_37262[(2)] = inst_37119);

(statearr_37130_37262[(1)] = (3));


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
});})(__37243,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
;
return ((function (__37243,switch__36808__auto__,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_37131 = [null,null,null,null,null,null,null];
(statearr_37131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__);

(statearr_37131[(1)] = (1));

return statearr_37131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1 = (function (state_37123){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37132){if((e37132 instanceof Object)){
var ex__36812__auto__ = e37132;
var statearr_37133_37263 = state_37123;
(statearr_37133_37263[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37264 = state_37123;
state_37123 = G__37264;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = function(state_37123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1.call(this,state_37123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__;
})()
;})(__37243,switch__36808__auto__,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
})();
var state__36905__auto__ = (function (){var statearr_37134 = f__36904__auto__.call(null);
(statearr_37134[(6)] = c__36903__auto___37256);

return statearr_37134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
});})(__37243,c__36903__auto___37256,G__37086_37244,G__37086_37245__$1,n__4613__auto___37242,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37086_37245__$1)].join('')));

}

var G__37265 = (__37243 + (1));
__37243 = G__37265;
continue;
} else {
}
break;
}

var c__36903__auto___37266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37156){
var state_val_37157 = (state_37156[(1)]);
if((state_val_37157 === (7))){
var inst_37152 = (state_37156[(2)]);
var state_37156__$1 = state_37156;
var statearr_37158_37267 = state_37156__$1;
(statearr_37158_37267[(2)] = inst_37152);

(statearr_37158_37267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (1))){
var state_37156__$1 = state_37156;
var statearr_37159_37268 = state_37156__$1;
(statearr_37159_37268[(2)] = null);

(statearr_37159_37268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (4))){
var inst_37137 = (state_37156[(7)]);
var inst_37137__$1 = (state_37156[(2)]);
var inst_37138 = (inst_37137__$1 == null);
var state_37156__$1 = (function (){var statearr_37160 = state_37156;
(statearr_37160[(7)] = inst_37137__$1);

return statearr_37160;
})();
if(cljs.core.truth_(inst_37138)){
var statearr_37161_37269 = state_37156__$1;
(statearr_37161_37269[(1)] = (5));

} else {
var statearr_37162_37270 = state_37156__$1;
(statearr_37162_37270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (6))){
var inst_37142 = (state_37156[(8)]);
var inst_37137 = (state_37156[(7)]);
var inst_37142__$1 = cljs.core.async.chan.call(null,(1));
var inst_37143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37144 = [inst_37137,inst_37142__$1];
var inst_37145 = (new cljs.core.PersistentVector(null,2,(5),inst_37143,inst_37144,null));
var state_37156__$1 = (function (){var statearr_37163 = state_37156;
(statearr_37163[(8)] = inst_37142__$1);

return statearr_37163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37156__$1,(8),jobs,inst_37145);
} else {
if((state_val_37157 === (3))){
var inst_37154 = (state_37156[(2)]);
var state_37156__$1 = state_37156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37156__$1,inst_37154);
} else {
if((state_val_37157 === (2))){
var state_37156__$1 = state_37156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37156__$1,(4),from);
} else {
if((state_val_37157 === (9))){
var inst_37149 = (state_37156[(2)]);
var state_37156__$1 = (function (){var statearr_37164 = state_37156;
(statearr_37164[(9)] = inst_37149);

return statearr_37164;
})();
var statearr_37165_37271 = state_37156__$1;
(statearr_37165_37271[(2)] = null);

(statearr_37165_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (5))){
var inst_37140 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37156__$1 = state_37156;
var statearr_37166_37272 = state_37156__$1;
(statearr_37166_37272[(2)] = inst_37140);

(statearr_37166_37272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (8))){
var inst_37142 = (state_37156[(8)]);
var inst_37147 = (state_37156[(2)]);
var state_37156__$1 = (function (){var statearr_37167 = state_37156;
(statearr_37167[(10)] = inst_37147);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37156__$1,(9),results,inst_37142);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_37168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__);

(statearr_37168[(1)] = (1));

return statearr_37168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1 = (function (state_37156){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37169){if((e37169 instanceof Object)){
var ex__36812__auto__ = e37169;
var statearr_37170_37273 = state_37156;
(statearr_37170_37273[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37274 = state_37156;
state_37156 = G__37274;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = function(state_37156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1.call(this,state_37156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37171 = f__36904__auto__.call(null);
(statearr_37171[(6)] = c__36903__auto___37266);

return statearr_37171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37209){
var state_val_37210 = (state_37209[(1)]);
if((state_val_37210 === (7))){
var inst_37205 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37211_37275 = state_37209__$1;
(statearr_37211_37275[(2)] = inst_37205);

(statearr_37211_37275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (20))){
var state_37209__$1 = state_37209;
var statearr_37212_37276 = state_37209__$1;
(statearr_37212_37276[(2)] = null);

(statearr_37212_37276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (1))){
var state_37209__$1 = state_37209;
var statearr_37213_37277 = state_37209__$1;
(statearr_37213_37277[(2)] = null);

(statearr_37213_37277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (4))){
var inst_37174 = (state_37209[(7)]);
var inst_37174__$1 = (state_37209[(2)]);
var inst_37175 = (inst_37174__$1 == null);
var state_37209__$1 = (function (){var statearr_37214 = state_37209;
(statearr_37214[(7)] = inst_37174__$1);

return statearr_37214;
})();
if(cljs.core.truth_(inst_37175)){
var statearr_37215_37278 = state_37209__$1;
(statearr_37215_37278[(1)] = (5));

} else {
var statearr_37216_37279 = state_37209__$1;
(statearr_37216_37279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (15))){
var inst_37187 = (state_37209[(8)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37209__$1,(18),to,inst_37187);
} else {
if((state_val_37210 === (21))){
var inst_37200 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37217_37280 = state_37209__$1;
(statearr_37217_37280[(2)] = inst_37200);

(statearr_37217_37280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (13))){
var inst_37202 = (state_37209[(2)]);
var state_37209__$1 = (function (){var statearr_37218 = state_37209;
(statearr_37218[(9)] = inst_37202);

return statearr_37218;
})();
var statearr_37219_37281 = state_37209__$1;
(statearr_37219_37281[(2)] = null);

(statearr_37219_37281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (6))){
var inst_37174 = (state_37209[(7)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37209__$1,(11),inst_37174);
} else {
if((state_val_37210 === (17))){
var inst_37195 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
if(cljs.core.truth_(inst_37195)){
var statearr_37220_37282 = state_37209__$1;
(statearr_37220_37282[(1)] = (19));

} else {
var statearr_37221_37283 = state_37209__$1;
(statearr_37221_37283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (3))){
var inst_37207 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37209__$1,inst_37207);
} else {
if((state_val_37210 === (12))){
var inst_37184 = (state_37209[(10)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37209__$1,(14),inst_37184);
} else {
if((state_val_37210 === (2))){
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37209__$1,(4),results);
} else {
if((state_val_37210 === (19))){
var state_37209__$1 = state_37209;
var statearr_37222_37284 = state_37209__$1;
(statearr_37222_37284[(2)] = null);

(statearr_37222_37284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (11))){
var inst_37184 = (state_37209[(2)]);
var state_37209__$1 = (function (){var statearr_37223 = state_37209;
(statearr_37223[(10)] = inst_37184);

return statearr_37223;
})();
var statearr_37224_37285 = state_37209__$1;
(statearr_37224_37285[(2)] = null);

(statearr_37224_37285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (9))){
var state_37209__$1 = state_37209;
var statearr_37225_37286 = state_37209__$1;
(statearr_37225_37286[(2)] = null);

(statearr_37225_37286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (5))){
var state_37209__$1 = state_37209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37226_37287 = state_37209__$1;
(statearr_37226_37287[(1)] = (8));

} else {
var statearr_37227_37288 = state_37209__$1;
(statearr_37227_37288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (14))){
var inst_37187 = (state_37209[(8)]);
var inst_37187__$1 = (state_37209[(2)]);
var inst_37188 = (inst_37187__$1 == null);
var inst_37189 = cljs.core.not.call(null,inst_37188);
var state_37209__$1 = (function (){var statearr_37228 = state_37209;
(statearr_37228[(8)] = inst_37187__$1);

return statearr_37228;
})();
if(inst_37189){
var statearr_37229_37289 = state_37209__$1;
(statearr_37229_37289[(1)] = (15));

} else {
var statearr_37230_37290 = state_37209__$1;
(statearr_37230_37290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (16))){
var state_37209__$1 = state_37209;
var statearr_37231_37291 = state_37209__$1;
(statearr_37231_37291[(2)] = false);

(statearr_37231_37291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (10))){
var inst_37181 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37232_37292 = state_37209__$1;
(statearr_37232_37292[(2)] = inst_37181);

(statearr_37232_37292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (18))){
var inst_37192 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37233_37293 = state_37209__$1;
(statearr_37233_37293[(2)] = inst_37192);

(statearr_37233_37293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (8))){
var inst_37178 = cljs.core.async.close_BANG_.call(null,to);
var state_37209__$1 = state_37209;
var statearr_37234_37294 = state_37209__$1;
(statearr_37234_37294[(2)] = inst_37178);

(statearr_37234_37294[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1 = (function (state_37209){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__36812__auto__ = e37236;
var statearr_37237_37295 = state_37209;
(statearr_37237_37295[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37296 = state_37209;
state_37209 = G__37296;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__ = function(state_37209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1.call(this,state_37209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37238 = f__36904__auto__.call(null);
(statearr_37238[(6)] = c__36903__auto__);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
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
var G__37298 = arguments.length;
switch (G__37298) {
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
var G__37301 = arguments.length;
switch (G__37301) {
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
var G__37304 = arguments.length;
switch (G__37304) {
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
var c__36903__auto___37353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37330){
var state_val_37331 = (state_37330[(1)]);
if((state_val_37331 === (7))){
var inst_37326 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37332_37354 = state_37330__$1;
(statearr_37332_37354[(2)] = inst_37326);

(statearr_37332_37354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (1))){
var state_37330__$1 = state_37330;
var statearr_37333_37355 = state_37330__$1;
(statearr_37333_37355[(2)] = null);

(statearr_37333_37355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (4))){
var inst_37307 = (state_37330[(7)]);
var inst_37307__$1 = (state_37330[(2)]);
var inst_37308 = (inst_37307__$1 == null);
var state_37330__$1 = (function (){var statearr_37334 = state_37330;
(statearr_37334[(7)] = inst_37307__$1);

return statearr_37334;
})();
if(cljs.core.truth_(inst_37308)){
var statearr_37335_37356 = state_37330__$1;
(statearr_37335_37356[(1)] = (5));

} else {
var statearr_37336_37357 = state_37330__$1;
(statearr_37336_37357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (13))){
var state_37330__$1 = state_37330;
var statearr_37337_37358 = state_37330__$1;
(statearr_37337_37358[(2)] = null);

(statearr_37337_37358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (6))){
var inst_37307 = (state_37330[(7)]);
var inst_37313 = p.call(null,inst_37307);
var state_37330__$1 = state_37330;
if(cljs.core.truth_(inst_37313)){
var statearr_37338_37359 = state_37330__$1;
(statearr_37338_37359[(1)] = (9));

} else {
var statearr_37339_37360 = state_37330__$1;
(statearr_37339_37360[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (3))){
var inst_37328 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37330__$1,inst_37328);
} else {
if((state_val_37331 === (12))){
var state_37330__$1 = state_37330;
var statearr_37340_37361 = state_37330__$1;
(statearr_37340_37361[(2)] = null);

(statearr_37340_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (2))){
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37330__$1,(4),ch);
} else {
if((state_val_37331 === (11))){
var inst_37307 = (state_37330[(7)]);
var inst_37317 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37330__$1,(8),inst_37317,inst_37307);
} else {
if((state_val_37331 === (9))){
var state_37330__$1 = state_37330;
var statearr_37341_37362 = state_37330__$1;
(statearr_37341_37362[(2)] = tc);

(statearr_37341_37362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (5))){
var inst_37310 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37311 = cljs.core.async.close_BANG_.call(null,fc);
var state_37330__$1 = (function (){var statearr_37342 = state_37330;
(statearr_37342[(8)] = inst_37310);

return statearr_37342;
})();
var statearr_37343_37363 = state_37330__$1;
(statearr_37343_37363[(2)] = inst_37311);

(statearr_37343_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (14))){
var inst_37324 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37344_37364 = state_37330__$1;
(statearr_37344_37364[(2)] = inst_37324);

(statearr_37344_37364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (10))){
var state_37330__$1 = state_37330;
var statearr_37345_37365 = state_37330__$1;
(statearr_37345_37365[(2)] = fc);

(statearr_37345_37365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (8))){
var inst_37319 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
if(cljs.core.truth_(inst_37319)){
var statearr_37346_37366 = state_37330__$1;
(statearr_37346_37366[(1)] = (12));

} else {
var statearr_37347_37367 = state_37330__$1;
(statearr_37347_37367[(1)] = (13));

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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_37348 = [null,null,null,null,null,null,null,null,null];
(statearr_37348[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_37348[(1)] = (1));

return statearr_37348;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_37330){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37349){if((e37349 instanceof Object)){
var ex__36812__auto__ = e37349;
var statearr_37350_37368 = state_37330;
(statearr_37350_37368[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37369 = state_37330;
state_37330 = G__37369;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_37330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_37330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37351 = f__36904__auto__.call(null);
(statearr_37351[(6)] = c__36903__auto___37353);

return statearr_37351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37390){
var state_val_37391 = (state_37390[(1)]);
if((state_val_37391 === (7))){
var inst_37386 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37392_37410 = state_37390__$1;
(statearr_37392_37410[(2)] = inst_37386);

(statearr_37392_37410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (1))){
var inst_37370 = init;
var state_37390__$1 = (function (){var statearr_37393 = state_37390;
(statearr_37393[(7)] = inst_37370);

return statearr_37393;
})();
var statearr_37394_37411 = state_37390__$1;
(statearr_37394_37411[(2)] = null);

(statearr_37394_37411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (4))){
var inst_37373 = (state_37390[(8)]);
var inst_37373__$1 = (state_37390[(2)]);
var inst_37374 = (inst_37373__$1 == null);
var state_37390__$1 = (function (){var statearr_37395 = state_37390;
(statearr_37395[(8)] = inst_37373__$1);

return statearr_37395;
})();
if(cljs.core.truth_(inst_37374)){
var statearr_37396_37412 = state_37390__$1;
(statearr_37396_37412[(1)] = (5));

} else {
var statearr_37397_37413 = state_37390__$1;
(statearr_37397_37413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (6))){
var inst_37377 = (state_37390[(9)]);
var inst_37370 = (state_37390[(7)]);
var inst_37373 = (state_37390[(8)]);
var inst_37377__$1 = f.call(null,inst_37370,inst_37373);
var inst_37378 = cljs.core.reduced_QMARK_.call(null,inst_37377__$1);
var state_37390__$1 = (function (){var statearr_37398 = state_37390;
(statearr_37398[(9)] = inst_37377__$1);

return statearr_37398;
})();
if(inst_37378){
var statearr_37399_37414 = state_37390__$1;
(statearr_37399_37414[(1)] = (8));

} else {
var statearr_37400_37415 = state_37390__$1;
(statearr_37400_37415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (3))){
var inst_37388 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37390__$1,inst_37388);
} else {
if((state_val_37391 === (2))){
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37390__$1,(4),ch);
} else {
if((state_val_37391 === (9))){
var inst_37377 = (state_37390[(9)]);
var inst_37370 = inst_37377;
var state_37390__$1 = (function (){var statearr_37401 = state_37390;
(statearr_37401[(7)] = inst_37370);

return statearr_37401;
})();
var statearr_37402_37416 = state_37390__$1;
(statearr_37402_37416[(2)] = null);

(statearr_37402_37416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (5))){
var inst_37370 = (state_37390[(7)]);
var state_37390__$1 = state_37390;
var statearr_37403_37417 = state_37390__$1;
(statearr_37403_37417[(2)] = inst_37370);

(statearr_37403_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (10))){
var inst_37384 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37404_37418 = state_37390__$1;
(statearr_37404_37418[(2)] = inst_37384);

(statearr_37404_37418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (8))){
var inst_37377 = (state_37390[(9)]);
var inst_37380 = cljs.core.deref.call(null,inst_37377);
var state_37390__$1 = state_37390;
var statearr_37405_37419 = state_37390__$1;
(statearr_37405_37419[(2)] = inst_37380);

(statearr_37405_37419[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36809__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36809__auto____0 = (function (){
var statearr_37406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37406[(0)] = cljs$core$async$reduce_$_state_machine__36809__auto__);

(statearr_37406[(1)] = (1));

return statearr_37406;
});
var cljs$core$async$reduce_$_state_machine__36809__auto____1 = (function (state_37390){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37407){if((e37407 instanceof Object)){
var ex__36812__auto__ = e37407;
var statearr_37408_37420 = state_37390;
(statearr_37408_37420[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37421 = state_37390;
state_37390 = G__37421;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36809__auto__ = function(state_37390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36809__auto____1.call(this,state_37390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36809__auto____0;
cljs$core$async$reduce_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36809__auto____1;
return cljs$core$async$reduce_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37409 = f__36904__auto__.call(null);
(statearr_37409[(6)] = c__36903__auto__);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37427){
var state_val_37428 = (state_37427[(1)]);
if((state_val_37428 === (1))){
var inst_37422 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37427__$1,(2),inst_37422);
} else {
if((state_val_37428 === (2))){
var inst_37424 = (state_37427[(2)]);
var inst_37425 = f__$1.call(null,inst_37424);
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37427__$1,inst_37425);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36809__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36809__auto____0 = (function (){
var statearr_37429 = [null,null,null,null,null,null,null];
(statearr_37429[(0)] = cljs$core$async$transduce_$_state_machine__36809__auto__);

(statearr_37429[(1)] = (1));

return statearr_37429;
});
var cljs$core$async$transduce_$_state_machine__36809__auto____1 = (function (state_37427){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37430){if((e37430 instanceof Object)){
var ex__36812__auto__ = e37430;
var statearr_37431_37433 = state_37427;
(statearr_37431_37433[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37434 = state_37427;
state_37427 = G__37434;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36809__auto__ = function(state_37427){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36809__auto____1.call(this,state_37427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36809__auto____0;
cljs$core$async$transduce_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36809__auto____1;
return cljs$core$async$transduce_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37432 = f__36904__auto__.call(null);
(statearr_37432[(6)] = c__36903__auto__);

return statearr_37432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
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
var G__37436 = arguments.length;
switch (G__37436) {
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37461){
var state_val_37462 = (state_37461[(1)]);
if((state_val_37462 === (7))){
var inst_37443 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
var statearr_37463_37484 = state_37461__$1;
(statearr_37463_37484[(2)] = inst_37443);

(statearr_37463_37484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (1))){
var inst_37437 = cljs.core.seq.call(null,coll);
var inst_37438 = inst_37437;
var state_37461__$1 = (function (){var statearr_37464 = state_37461;
(statearr_37464[(7)] = inst_37438);

return statearr_37464;
})();
var statearr_37465_37485 = state_37461__$1;
(statearr_37465_37485[(2)] = null);

(statearr_37465_37485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (4))){
var inst_37438 = (state_37461[(7)]);
var inst_37441 = cljs.core.first.call(null,inst_37438);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37461__$1,(7),ch,inst_37441);
} else {
if((state_val_37462 === (13))){
var inst_37455 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
var statearr_37466_37486 = state_37461__$1;
(statearr_37466_37486[(2)] = inst_37455);

(statearr_37466_37486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (6))){
var inst_37446 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
if(cljs.core.truth_(inst_37446)){
var statearr_37467_37487 = state_37461__$1;
(statearr_37467_37487[(1)] = (8));

} else {
var statearr_37468_37488 = state_37461__$1;
(statearr_37468_37488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (3))){
var inst_37459 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37461__$1,inst_37459);
} else {
if((state_val_37462 === (12))){
var state_37461__$1 = state_37461;
var statearr_37469_37489 = state_37461__$1;
(statearr_37469_37489[(2)] = null);

(statearr_37469_37489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (2))){
var inst_37438 = (state_37461[(7)]);
var state_37461__$1 = state_37461;
if(cljs.core.truth_(inst_37438)){
var statearr_37470_37490 = state_37461__$1;
(statearr_37470_37490[(1)] = (4));

} else {
var statearr_37471_37491 = state_37461__$1;
(statearr_37471_37491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (11))){
var inst_37452 = cljs.core.async.close_BANG_.call(null,ch);
var state_37461__$1 = state_37461;
var statearr_37472_37492 = state_37461__$1;
(statearr_37472_37492[(2)] = inst_37452);

(statearr_37472_37492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (9))){
var state_37461__$1 = state_37461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37473_37493 = state_37461__$1;
(statearr_37473_37493[(1)] = (11));

} else {
var statearr_37474_37494 = state_37461__$1;
(statearr_37474_37494[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (5))){
var inst_37438 = (state_37461[(7)]);
var state_37461__$1 = state_37461;
var statearr_37475_37495 = state_37461__$1;
(statearr_37475_37495[(2)] = inst_37438);

(statearr_37475_37495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (10))){
var inst_37457 = (state_37461[(2)]);
var state_37461__$1 = state_37461;
var statearr_37476_37496 = state_37461__$1;
(statearr_37476_37496[(2)] = inst_37457);

(statearr_37476_37496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37462 === (8))){
var inst_37438 = (state_37461[(7)]);
var inst_37448 = cljs.core.next.call(null,inst_37438);
var inst_37438__$1 = inst_37448;
var state_37461__$1 = (function (){var statearr_37477 = state_37461;
(statearr_37477[(7)] = inst_37438__$1);

return statearr_37477;
})();
var statearr_37478_37497 = state_37461__$1;
(statearr_37478_37497[(2)] = null);

(statearr_37478_37497[(1)] = (2));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null,null];
(statearr_37479[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_37461){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37480){if((e37480 instanceof Object)){
var ex__36812__auto__ = e37480;
var statearr_37481_37498 = state_37461;
(statearr_37481_37498[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37499 = state_37461;
state_37461 = G__37499;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_37461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_37461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37482 = f__36904__auto__.call(null);
(statearr_37482[(6)] = c__36903__auto__);

return statearr_37482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37500 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37500.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37501 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37501.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37502 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37502.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37503 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37503.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37504 = (function (ch,cs,meta37505){
this.ch = ch;
this.cs = cs;
this.meta37505 = meta37505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37506,meta37505__$1){
var self__ = this;
var _37506__$1 = this;
return (new cljs.core.async.t_cljs$core$async37504(self__.ch,self__.cs,meta37505__$1));
}));

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37506){
var self__ = this;
var _37506__$1 = this;
return self__.meta37505;
}));

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37505","meta37505",-2091686597,null)], null);
}));

(cljs.core.async.t_cljs$core$async37504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37504");

(cljs.core.async.t_cljs$core$async37504.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37504.
 */
cljs.core.async.__GT_t_cljs$core$async37504 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37504(ch__$1,cs__$1,meta37505){
return (new cljs.core.async.t_cljs$core$async37504(ch__$1,cs__$1,meta37505));
});

}

return (new cljs.core.async.t_cljs$core$async37504(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36903__auto___37726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37641){
var state_val_37642 = (state_37641[(1)]);
if((state_val_37642 === (7))){
var inst_37637 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37643_37727 = state_37641__$1;
(statearr_37643_37727[(2)] = inst_37637);

(statearr_37643_37727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (20))){
var inst_37540 = (state_37641[(7)]);
var inst_37552 = cljs.core.first.call(null,inst_37540);
var inst_37553 = cljs.core.nth.call(null,inst_37552,(0),null);
var inst_37554 = cljs.core.nth.call(null,inst_37552,(1),null);
var state_37641__$1 = (function (){var statearr_37644 = state_37641;
(statearr_37644[(8)] = inst_37553);

return statearr_37644;
})();
if(cljs.core.truth_(inst_37554)){
var statearr_37645_37728 = state_37641__$1;
(statearr_37645_37728[(1)] = (22));

} else {
var statearr_37646_37729 = state_37641__$1;
(statearr_37646_37729[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (27))){
var inst_37582 = (state_37641[(9)]);
var inst_37589 = (state_37641[(10)]);
var inst_37584 = (state_37641[(11)]);
var inst_37509 = (state_37641[(12)]);
var inst_37589__$1 = cljs.core._nth.call(null,inst_37582,inst_37584);
var inst_37590 = cljs.core.async.put_BANG_.call(null,inst_37589__$1,inst_37509,done);
var state_37641__$1 = (function (){var statearr_37647 = state_37641;
(statearr_37647[(10)] = inst_37589__$1);

return statearr_37647;
})();
if(cljs.core.truth_(inst_37590)){
var statearr_37648_37730 = state_37641__$1;
(statearr_37648_37730[(1)] = (30));

} else {
var statearr_37649_37731 = state_37641__$1;
(statearr_37649_37731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (1))){
var state_37641__$1 = state_37641;
var statearr_37650_37732 = state_37641__$1;
(statearr_37650_37732[(2)] = null);

(statearr_37650_37732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (24))){
var inst_37540 = (state_37641[(7)]);
var inst_37559 = (state_37641[(2)]);
var inst_37560 = cljs.core.next.call(null,inst_37540);
var inst_37518 = inst_37560;
var inst_37519 = null;
var inst_37520 = (0);
var inst_37521 = (0);
var state_37641__$1 = (function (){var statearr_37651 = state_37641;
(statearr_37651[(13)] = inst_37518);

(statearr_37651[(14)] = inst_37520);

(statearr_37651[(15)] = inst_37559);

(statearr_37651[(16)] = inst_37521);

(statearr_37651[(17)] = inst_37519);

return statearr_37651;
})();
var statearr_37652_37733 = state_37641__$1;
(statearr_37652_37733[(2)] = null);

(statearr_37652_37733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (39))){
var state_37641__$1 = state_37641;
var statearr_37656_37734 = state_37641__$1;
(statearr_37656_37734[(2)] = null);

(statearr_37656_37734[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (4))){
var inst_37509 = (state_37641[(12)]);
var inst_37509__$1 = (state_37641[(2)]);
var inst_37510 = (inst_37509__$1 == null);
var state_37641__$1 = (function (){var statearr_37657 = state_37641;
(statearr_37657[(12)] = inst_37509__$1);

return statearr_37657;
})();
if(cljs.core.truth_(inst_37510)){
var statearr_37658_37735 = state_37641__$1;
(statearr_37658_37735[(1)] = (5));

} else {
var statearr_37659_37736 = state_37641__$1;
(statearr_37659_37736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (15))){
var inst_37518 = (state_37641[(13)]);
var inst_37520 = (state_37641[(14)]);
var inst_37521 = (state_37641[(16)]);
var inst_37519 = (state_37641[(17)]);
var inst_37536 = (state_37641[(2)]);
var inst_37537 = (inst_37521 + (1));
var tmp37653 = inst_37518;
var tmp37654 = inst_37520;
var tmp37655 = inst_37519;
var inst_37518__$1 = tmp37653;
var inst_37519__$1 = tmp37655;
var inst_37520__$1 = tmp37654;
var inst_37521__$1 = inst_37537;
var state_37641__$1 = (function (){var statearr_37660 = state_37641;
(statearr_37660[(13)] = inst_37518__$1);

(statearr_37660[(14)] = inst_37520__$1);

(statearr_37660[(18)] = inst_37536);

(statearr_37660[(16)] = inst_37521__$1);

(statearr_37660[(17)] = inst_37519__$1);

return statearr_37660;
})();
var statearr_37661_37737 = state_37641__$1;
(statearr_37661_37737[(2)] = null);

(statearr_37661_37737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (21))){
var inst_37563 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37665_37738 = state_37641__$1;
(statearr_37665_37738[(2)] = inst_37563);

(statearr_37665_37738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (31))){
var inst_37589 = (state_37641[(10)]);
var inst_37593 = done.call(null,null);
var inst_37594 = cljs.core.async.untap_STAR_.call(null,m,inst_37589);
var state_37641__$1 = (function (){var statearr_37666 = state_37641;
(statearr_37666[(19)] = inst_37593);

return statearr_37666;
})();
var statearr_37667_37739 = state_37641__$1;
(statearr_37667_37739[(2)] = inst_37594);

(statearr_37667_37739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (32))){
var inst_37582 = (state_37641[(9)]);
var inst_37583 = (state_37641[(20)]);
var inst_37584 = (state_37641[(11)]);
var inst_37581 = (state_37641[(21)]);
var inst_37596 = (state_37641[(2)]);
var inst_37597 = (inst_37584 + (1));
var tmp37662 = inst_37582;
var tmp37663 = inst_37583;
var tmp37664 = inst_37581;
var inst_37581__$1 = tmp37664;
var inst_37582__$1 = tmp37662;
var inst_37583__$1 = tmp37663;
var inst_37584__$1 = inst_37597;
var state_37641__$1 = (function (){var statearr_37668 = state_37641;
(statearr_37668[(9)] = inst_37582__$1);

(statearr_37668[(20)] = inst_37583__$1);

(statearr_37668[(22)] = inst_37596);

(statearr_37668[(11)] = inst_37584__$1);

(statearr_37668[(21)] = inst_37581__$1);

return statearr_37668;
})();
var statearr_37669_37740 = state_37641__$1;
(statearr_37669_37740[(2)] = null);

(statearr_37669_37740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (40))){
var inst_37609 = (state_37641[(23)]);
var inst_37613 = done.call(null,null);
var inst_37614 = cljs.core.async.untap_STAR_.call(null,m,inst_37609);
var state_37641__$1 = (function (){var statearr_37670 = state_37641;
(statearr_37670[(24)] = inst_37613);

return statearr_37670;
})();
var statearr_37671_37741 = state_37641__$1;
(statearr_37671_37741[(2)] = inst_37614);

(statearr_37671_37741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (33))){
var inst_37600 = (state_37641[(25)]);
var inst_37602 = cljs.core.chunked_seq_QMARK_.call(null,inst_37600);
var state_37641__$1 = state_37641;
if(inst_37602){
var statearr_37672_37742 = state_37641__$1;
(statearr_37672_37742[(1)] = (36));

} else {
var statearr_37673_37743 = state_37641__$1;
(statearr_37673_37743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (13))){
var inst_37530 = (state_37641[(26)]);
var inst_37533 = cljs.core.async.close_BANG_.call(null,inst_37530);
var state_37641__$1 = state_37641;
var statearr_37674_37744 = state_37641__$1;
(statearr_37674_37744[(2)] = inst_37533);

(statearr_37674_37744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (22))){
var inst_37553 = (state_37641[(8)]);
var inst_37556 = cljs.core.async.close_BANG_.call(null,inst_37553);
var state_37641__$1 = state_37641;
var statearr_37675_37745 = state_37641__$1;
(statearr_37675_37745[(2)] = inst_37556);

(statearr_37675_37745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (36))){
var inst_37600 = (state_37641[(25)]);
var inst_37604 = cljs.core.chunk_first.call(null,inst_37600);
var inst_37605 = cljs.core.chunk_rest.call(null,inst_37600);
var inst_37606 = cljs.core.count.call(null,inst_37604);
var inst_37581 = inst_37605;
var inst_37582 = inst_37604;
var inst_37583 = inst_37606;
var inst_37584 = (0);
var state_37641__$1 = (function (){var statearr_37676 = state_37641;
(statearr_37676[(9)] = inst_37582);

(statearr_37676[(20)] = inst_37583);

(statearr_37676[(11)] = inst_37584);

(statearr_37676[(21)] = inst_37581);

return statearr_37676;
})();
var statearr_37677_37746 = state_37641__$1;
(statearr_37677_37746[(2)] = null);

(statearr_37677_37746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (41))){
var inst_37600 = (state_37641[(25)]);
var inst_37616 = (state_37641[(2)]);
var inst_37617 = cljs.core.next.call(null,inst_37600);
var inst_37581 = inst_37617;
var inst_37582 = null;
var inst_37583 = (0);
var inst_37584 = (0);
var state_37641__$1 = (function (){var statearr_37678 = state_37641;
(statearr_37678[(9)] = inst_37582);

(statearr_37678[(20)] = inst_37583);

(statearr_37678[(27)] = inst_37616);

(statearr_37678[(11)] = inst_37584);

(statearr_37678[(21)] = inst_37581);

return statearr_37678;
})();
var statearr_37679_37747 = state_37641__$1;
(statearr_37679_37747[(2)] = null);

(statearr_37679_37747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (43))){
var state_37641__$1 = state_37641;
var statearr_37680_37748 = state_37641__$1;
(statearr_37680_37748[(2)] = null);

(statearr_37680_37748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (29))){
var inst_37625 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37681_37749 = state_37641__$1;
(statearr_37681_37749[(2)] = inst_37625);

(statearr_37681_37749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (44))){
var inst_37634 = (state_37641[(2)]);
var state_37641__$1 = (function (){var statearr_37682 = state_37641;
(statearr_37682[(28)] = inst_37634);

return statearr_37682;
})();
var statearr_37683_37750 = state_37641__$1;
(statearr_37683_37750[(2)] = null);

(statearr_37683_37750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (6))){
var inst_37573 = (state_37641[(29)]);
var inst_37572 = cljs.core.deref.call(null,cs);
var inst_37573__$1 = cljs.core.keys.call(null,inst_37572);
var inst_37574 = cljs.core.count.call(null,inst_37573__$1);
var inst_37575 = cljs.core.reset_BANG_.call(null,dctr,inst_37574);
var inst_37580 = cljs.core.seq.call(null,inst_37573__$1);
var inst_37581 = inst_37580;
var inst_37582 = null;
var inst_37583 = (0);
var inst_37584 = (0);
var state_37641__$1 = (function (){var statearr_37684 = state_37641;
(statearr_37684[(9)] = inst_37582);

(statearr_37684[(30)] = inst_37575);

(statearr_37684[(20)] = inst_37583);

(statearr_37684[(29)] = inst_37573__$1);

(statearr_37684[(11)] = inst_37584);

(statearr_37684[(21)] = inst_37581);

return statearr_37684;
})();
var statearr_37685_37751 = state_37641__$1;
(statearr_37685_37751[(2)] = null);

(statearr_37685_37751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (28))){
var inst_37600 = (state_37641[(25)]);
var inst_37581 = (state_37641[(21)]);
var inst_37600__$1 = cljs.core.seq.call(null,inst_37581);
var state_37641__$1 = (function (){var statearr_37686 = state_37641;
(statearr_37686[(25)] = inst_37600__$1);

return statearr_37686;
})();
if(inst_37600__$1){
var statearr_37687_37752 = state_37641__$1;
(statearr_37687_37752[(1)] = (33));

} else {
var statearr_37688_37753 = state_37641__$1;
(statearr_37688_37753[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (25))){
var inst_37583 = (state_37641[(20)]);
var inst_37584 = (state_37641[(11)]);
var inst_37586 = (inst_37584 < inst_37583);
var inst_37587 = inst_37586;
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37587)){
var statearr_37689_37754 = state_37641__$1;
(statearr_37689_37754[(1)] = (27));

} else {
var statearr_37690_37755 = state_37641__$1;
(statearr_37690_37755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (34))){
var state_37641__$1 = state_37641;
var statearr_37691_37756 = state_37641__$1;
(statearr_37691_37756[(2)] = null);

(statearr_37691_37756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (17))){
var state_37641__$1 = state_37641;
var statearr_37692_37757 = state_37641__$1;
(statearr_37692_37757[(2)] = null);

(statearr_37692_37757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (3))){
var inst_37639 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37641__$1,inst_37639);
} else {
if((state_val_37642 === (12))){
var inst_37568 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37693_37758 = state_37641__$1;
(statearr_37693_37758[(2)] = inst_37568);

(statearr_37693_37758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (2))){
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(4),ch);
} else {
if((state_val_37642 === (23))){
var state_37641__$1 = state_37641;
var statearr_37694_37759 = state_37641__$1;
(statearr_37694_37759[(2)] = null);

(statearr_37694_37759[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (35))){
var inst_37623 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37695_37760 = state_37641__$1;
(statearr_37695_37760[(2)] = inst_37623);

(statearr_37695_37760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (19))){
var inst_37540 = (state_37641[(7)]);
var inst_37544 = cljs.core.chunk_first.call(null,inst_37540);
var inst_37545 = cljs.core.chunk_rest.call(null,inst_37540);
var inst_37546 = cljs.core.count.call(null,inst_37544);
var inst_37518 = inst_37545;
var inst_37519 = inst_37544;
var inst_37520 = inst_37546;
var inst_37521 = (0);
var state_37641__$1 = (function (){var statearr_37696 = state_37641;
(statearr_37696[(13)] = inst_37518);

(statearr_37696[(14)] = inst_37520);

(statearr_37696[(16)] = inst_37521);

(statearr_37696[(17)] = inst_37519);

return statearr_37696;
})();
var statearr_37697_37761 = state_37641__$1;
(statearr_37697_37761[(2)] = null);

(statearr_37697_37761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (11))){
var inst_37518 = (state_37641[(13)]);
var inst_37540 = (state_37641[(7)]);
var inst_37540__$1 = cljs.core.seq.call(null,inst_37518);
var state_37641__$1 = (function (){var statearr_37698 = state_37641;
(statearr_37698[(7)] = inst_37540__$1);

return statearr_37698;
})();
if(inst_37540__$1){
var statearr_37699_37762 = state_37641__$1;
(statearr_37699_37762[(1)] = (16));

} else {
var statearr_37700_37763 = state_37641__$1;
(statearr_37700_37763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (9))){
var inst_37570 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37701_37764 = state_37641__$1;
(statearr_37701_37764[(2)] = inst_37570);

(statearr_37701_37764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (5))){
var inst_37516 = cljs.core.deref.call(null,cs);
var inst_37517 = cljs.core.seq.call(null,inst_37516);
var inst_37518 = inst_37517;
var inst_37519 = null;
var inst_37520 = (0);
var inst_37521 = (0);
var state_37641__$1 = (function (){var statearr_37702 = state_37641;
(statearr_37702[(13)] = inst_37518);

(statearr_37702[(14)] = inst_37520);

(statearr_37702[(16)] = inst_37521);

(statearr_37702[(17)] = inst_37519);

return statearr_37702;
})();
var statearr_37703_37765 = state_37641__$1;
(statearr_37703_37765[(2)] = null);

(statearr_37703_37765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (14))){
var state_37641__$1 = state_37641;
var statearr_37704_37766 = state_37641__$1;
(statearr_37704_37766[(2)] = null);

(statearr_37704_37766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (45))){
var inst_37631 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37705_37767 = state_37641__$1;
(statearr_37705_37767[(2)] = inst_37631);

(statearr_37705_37767[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (26))){
var inst_37573 = (state_37641[(29)]);
var inst_37627 = (state_37641[(2)]);
var inst_37628 = cljs.core.seq.call(null,inst_37573);
var state_37641__$1 = (function (){var statearr_37706 = state_37641;
(statearr_37706[(31)] = inst_37627);

return statearr_37706;
})();
if(inst_37628){
var statearr_37707_37768 = state_37641__$1;
(statearr_37707_37768[(1)] = (42));

} else {
var statearr_37708_37769 = state_37641__$1;
(statearr_37708_37769[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (16))){
var inst_37540 = (state_37641[(7)]);
var inst_37542 = cljs.core.chunked_seq_QMARK_.call(null,inst_37540);
var state_37641__$1 = state_37641;
if(inst_37542){
var statearr_37709_37770 = state_37641__$1;
(statearr_37709_37770[(1)] = (19));

} else {
var statearr_37710_37771 = state_37641__$1;
(statearr_37710_37771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (38))){
var inst_37620 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37711_37772 = state_37641__$1;
(statearr_37711_37772[(2)] = inst_37620);

(statearr_37711_37772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (30))){
var state_37641__$1 = state_37641;
var statearr_37712_37773 = state_37641__$1;
(statearr_37712_37773[(2)] = null);

(statearr_37712_37773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (10))){
var inst_37521 = (state_37641[(16)]);
var inst_37519 = (state_37641[(17)]);
var inst_37529 = cljs.core._nth.call(null,inst_37519,inst_37521);
var inst_37530 = cljs.core.nth.call(null,inst_37529,(0),null);
var inst_37531 = cljs.core.nth.call(null,inst_37529,(1),null);
var state_37641__$1 = (function (){var statearr_37713 = state_37641;
(statearr_37713[(26)] = inst_37530);

return statearr_37713;
})();
if(cljs.core.truth_(inst_37531)){
var statearr_37714_37774 = state_37641__$1;
(statearr_37714_37774[(1)] = (13));

} else {
var statearr_37715_37775 = state_37641__$1;
(statearr_37715_37775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (18))){
var inst_37566 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37716_37776 = state_37641__$1;
(statearr_37716_37776[(2)] = inst_37566);

(statearr_37716_37776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (42))){
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(45),dchan);
} else {
if((state_val_37642 === (37))){
var inst_37600 = (state_37641[(25)]);
var inst_37609 = (state_37641[(23)]);
var inst_37509 = (state_37641[(12)]);
var inst_37609__$1 = cljs.core.first.call(null,inst_37600);
var inst_37610 = cljs.core.async.put_BANG_.call(null,inst_37609__$1,inst_37509,done);
var state_37641__$1 = (function (){var statearr_37717 = state_37641;
(statearr_37717[(23)] = inst_37609__$1);

return statearr_37717;
})();
if(cljs.core.truth_(inst_37610)){
var statearr_37718_37777 = state_37641__$1;
(statearr_37718_37777[(1)] = (39));

} else {
var statearr_37719_37778 = state_37641__$1;
(statearr_37719_37778[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (8))){
var inst_37520 = (state_37641[(14)]);
var inst_37521 = (state_37641[(16)]);
var inst_37523 = (inst_37521 < inst_37520);
var inst_37524 = inst_37523;
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37524)){
var statearr_37720_37779 = state_37641__$1;
(statearr_37720_37779[(1)] = (10));

} else {
var statearr_37721_37780 = state_37641__$1;
(statearr_37721_37780[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36809__auto__ = null;
var cljs$core$async$mult_$_state_machine__36809__auto____0 = (function (){
var statearr_37722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37722[(0)] = cljs$core$async$mult_$_state_machine__36809__auto__);

(statearr_37722[(1)] = (1));

return statearr_37722;
});
var cljs$core$async$mult_$_state_machine__36809__auto____1 = (function (state_37641){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37723){if((e37723 instanceof Object)){
var ex__36812__auto__ = e37723;
var statearr_37724_37781 = state_37641;
(statearr_37724_37781[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37782 = state_37641;
state_37641 = G__37782;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36809__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36809__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36809__auto____0;
cljs$core$async$mult_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36809__auto____1;
return cljs$core$async$mult_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37725 = f__36904__auto__.call(null);
(statearr_37725[(6)] = c__36903__auto___37726);

return statearr_37725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var G__37784 = arguments.length;
switch (G__37784) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37786 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37786.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37787 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37787.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37788 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37788.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37789 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37789.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37790 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37790.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37801 = arguments.length;
var i__4737__auto___37802 = (0);
while(true){
if((i__4737__auto___37802 < len__4736__auto___37801)){
args__4742__auto__.push((arguments[i__4737__auto___37802]));

var G__37803 = (i__4737__auto___37802 + (1));
i__4737__auto___37802 = G__37803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37795){
var map__37796 = p__37795;
var map__37796__$1 = (((((!((map__37796 == null))))?(((((map__37796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37796):map__37796);
var opts = map__37796__$1;
var statearr_37798_37804 = state;
(statearr_37798_37804[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_37799_37805 = state;
(statearr_37799_37805[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37800_37806 = state;
(statearr_37800_37806[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37791){
var G__37792 = cljs.core.first.call(null,seq37791);
var seq37791__$1 = cljs.core.next.call(null,seq37791);
var G__37793 = cljs.core.first.call(null,seq37791__$1);
var seq37791__$2 = cljs.core.next.call(null,seq37791__$1);
var G__37794 = cljs.core.first.call(null,seq37791__$2);
var seq37791__$3 = cljs.core.next.call(null,seq37791__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37792,G__37793,G__37794,seq37791__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37808 = meta37808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37809,meta37808__$1){
var self__ = this;
var _37809__$1 = this;
return (new cljs.core.async.t_cljs$core$async37807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37808__$1));
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37809){
var self__ = this;
var _37809__$1 = this;
return self__.meta37808;
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async37807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async37807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37808","meta37808",-2015801732,null)], null);
}));

(cljs.core.async.t_cljs$core$async37807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37807");

(cljs.core.async.t_cljs$core$async37807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37807.
 */
cljs.core.async.__GT_t_cljs$core$async37807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37808){
return (new cljs.core.async.t_cljs$core$async37807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37808));
});

}

return (new cljs.core.async.t_cljs$core$async37807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36903__auto___37971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_37911){
var state_val_37912 = (state_37911[(1)]);
if((state_val_37912 === (7))){
var inst_37826 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37913_37972 = state_37911__$1;
(statearr_37913_37972[(2)] = inst_37826);

(statearr_37913_37972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (20))){
var inst_37838 = (state_37911[(7)]);
var state_37911__$1 = state_37911;
var statearr_37914_37973 = state_37911__$1;
(statearr_37914_37973[(2)] = inst_37838);

(statearr_37914_37973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (27))){
var state_37911__$1 = state_37911;
var statearr_37915_37974 = state_37911__$1;
(statearr_37915_37974[(2)] = null);

(statearr_37915_37974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (1))){
var inst_37813 = (state_37911[(8)]);
var inst_37813__$1 = calc_state.call(null);
var inst_37815 = (inst_37813__$1 == null);
var inst_37816 = cljs.core.not.call(null,inst_37815);
var state_37911__$1 = (function (){var statearr_37916 = state_37911;
(statearr_37916[(8)] = inst_37813__$1);

return statearr_37916;
})();
if(inst_37816){
var statearr_37917_37975 = state_37911__$1;
(statearr_37917_37975[(1)] = (2));

} else {
var statearr_37918_37976 = state_37911__$1;
(statearr_37918_37976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (24))){
var inst_37871 = (state_37911[(9)]);
var inst_37885 = (state_37911[(10)]);
var inst_37862 = (state_37911[(11)]);
var inst_37885__$1 = inst_37862.call(null,inst_37871);
var state_37911__$1 = (function (){var statearr_37919 = state_37911;
(statearr_37919[(10)] = inst_37885__$1);

return statearr_37919;
})();
if(cljs.core.truth_(inst_37885__$1)){
var statearr_37920_37977 = state_37911__$1;
(statearr_37920_37977[(1)] = (29));

} else {
var statearr_37921_37978 = state_37911__$1;
(statearr_37921_37978[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (4))){
var inst_37829 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37829)){
var statearr_37922_37979 = state_37911__$1;
(statearr_37922_37979[(1)] = (8));

} else {
var statearr_37923_37980 = state_37911__$1;
(statearr_37923_37980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (15))){
var inst_37856 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37856)){
var statearr_37924_37981 = state_37911__$1;
(statearr_37924_37981[(1)] = (19));

} else {
var statearr_37925_37982 = state_37911__$1;
(statearr_37925_37982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (21))){
var inst_37861 = (state_37911[(12)]);
var inst_37861__$1 = (state_37911[(2)]);
var inst_37862 = cljs.core.get.call(null,inst_37861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37863 = cljs.core.get.call(null,inst_37861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37864 = cljs.core.get.call(null,inst_37861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37911__$1 = (function (){var statearr_37926 = state_37911;
(statearr_37926[(12)] = inst_37861__$1);

(statearr_37926[(13)] = inst_37863);

(statearr_37926[(11)] = inst_37862);

return statearr_37926;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37911__$1,(22),inst_37864);
} else {
if((state_val_37912 === (31))){
var inst_37893 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37893)){
var statearr_37927_37983 = state_37911__$1;
(statearr_37927_37983[(1)] = (32));

} else {
var statearr_37928_37984 = state_37911__$1;
(statearr_37928_37984[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (32))){
var inst_37870 = (state_37911[(14)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37911__$1,(35),out,inst_37870);
} else {
if((state_val_37912 === (33))){
var inst_37861 = (state_37911[(12)]);
var inst_37838 = inst_37861;
var state_37911__$1 = (function (){var statearr_37929 = state_37911;
(statearr_37929[(7)] = inst_37838);

return statearr_37929;
})();
var statearr_37930_37985 = state_37911__$1;
(statearr_37930_37985[(2)] = null);

(statearr_37930_37985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (13))){
var inst_37838 = (state_37911[(7)]);
var inst_37845 = inst_37838.cljs$lang$protocol_mask$partition0$;
var inst_37846 = (inst_37845 & (64));
var inst_37847 = inst_37838.cljs$core$ISeq$;
var inst_37848 = (cljs.core.PROTOCOL_SENTINEL === inst_37847);
var inst_37849 = ((inst_37846) || (inst_37848));
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37849)){
var statearr_37931_37986 = state_37911__$1;
(statearr_37931_37986[(1)] = (16));

} else {
var statearr_37932_37987 = state_37911__$1;
(statearr_37932_37987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (22))){
var inst_37871 = (state_37911[(9)]);
var inst_37870 = (state_37911[(14)]);
var inst_37869 = (state_37911[(2)]);
var inst_37870__$1 = cljs.core.nth.call(null,inst_37869,(0),null);
var inst_37871__$1 = cljs.core.nth.call(null,inst_37869,(1),null);
var inst_37872 = (inst_37870__$1 == null);
var inst_37873 = cljs.core._EQ_.call(null,inst_37871__$1,change);
var inst_37874 = ((inst_37872) || (inst_37873));
var state_37911__$1 = (function (){var statearr_37933 = state_37911;
(statearr_37933[(9)] = inst_37871__$1);

(statearr_37933[(14)] = inst_37870__$1);

return statearr_37933;
})();
if(cljs.core.truth_(inst_37874)){
var statearr_37934_37988 = state_37911__$1;
(statearr_37934_37988[(1)] = (23));

} else {
var statearr_37935_37989 = state_37911__$1;
(statearr_37935_37989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (36))){
var inst_37861 = (state_37911[(12)]);
var inst_37838 = inst_37861;
var state_37911__$1 = (function (){var statearr_37936 = state_37911;
(statearr_37936[(7)] = inst_37838);

return statearr_37936;
})();
var statearr_37937_37990 = state_37911__$1;
(statearr_37937_37990[(2)] = null);

(statearr_37937_37990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (29))){
var inst_37885 = (state_37911[(10)]);
var state_37911__$1 = state_37911;
var statearr_37938_37991 = state_37911__$1;
(statearr_37938_37991[(2)] = inst_37885);

(statearr_37938_37991[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (6))){
var state_37911__$1 = state_37911;
var statearr_37939_37992 = state_37911__$1;
(statearr_37939_37992[(2)] = false);

(statearr_37939_37992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (28))){
var inst_37881 = (state_37911[(2)]);
var inst_37882 = calc_state.call(null);
var inst_37838 = inst_37882;
var state_37911__$1 = (function (){var statearr_37940 = state_37911;
(statearr_37940[(15)] = inst_37881);

(statearr_37940[(7)] = inst_37838);

return statearr_37940;
})();
var statearr_37941_37993 = state_37911__$1;
(statearr_37941_37993[(2)] = null);

(statearr_37941_37993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (25))){
var inst_37907 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37942_37994 = state_37911__$1;
(statearr_37942_37994[(2)] = inst_37907);

(statearr_37942_37994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (34))){
var inst_37905 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37943_37995 = state_37911__$1;
(statearr_37943_37995[(2)] = inst_37905);

(statearr_37943_37995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (17))){
var state_37911__$1 = state_37911;
var statearr_37944_37996 = state_37911__$1;
(statearr_37944_37996[(2)] = false);

(statearr_37944_37996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (3))){
var state_37911__$1 = state_37911;
var statearr_37945_37997 = state_37911__$1;
(statearr_37945_37997[(2)] = false);

(statearr_37945_37997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (12))){
var inst_37909 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37911__$1,inst_37909);
} else {
if((state_val_37912 === (2))){
var inst_37813 = (state_37911[(8)]);
var inst_37818 = inst_37813.cljs$lang$protocol_mask$partition0$;
var inst_37819 = (inst_37818 & (64));
var inst_37820 = inst_37813.cljs$core$ISeq$;
var inst_37821 = (cljs.core.PROTOCOL_SENTINEL === inst_37820);
var inst_37822 = ((inst_37819) || (inst_37821));
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37822)){
var statearr_37946_37998 = state_37911__$1;
(statearr_37946_37998[(1)] = (5));

} else {
var statearr_37947_37999 = state_37911__$1;
(statearr_37947_37999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (23))){
var inst_37870 = (state_37911[(14)]);
var inst_37876 = (inst_37870 == null);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37876)){
var statearr_37948_38000 = state_37911__$1;
(statearr_37948_38000[(1)] = (26));

} else {
var statearr_37949_38001 = state_37911__$1;
(statearr_37949_38001[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (35))){
var inst_37896 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37896)){
var statearr_37950_38002 = state_37911__$1;
(statearr_37950_38002[(1)] = (36));

} else {
var statearr_37951_38003 = state_37911__$1;
(statearr_37951_38003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (19))){
var inst_37838 = (state_37911[(7)]);
var inst_37858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37838);
var state_37911__$1 = state_37911;
var statearr_37952_38004 = state_37911__$1;
(statearr_37952_38004[(2)] = inst_37858);

(statearr_37952_38004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (11))){
var inst_37838 = (state_37911[(7)]);
var inst_37842 = (inst_37838 == null);
var inst_37843 = cljs.core.not.call(null,inst_37842);
var state_37911__$1 = state_37911;
if(inst_37843){
var statearr_37953_38005 = state_37911__$1;
(statearr_37953_38005[(1)] = (13));

} else {
var statearr_37954_38006 = state_37911__$1;
(statearr_37954_38006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (9))){
var inst_37813 = (state_37911[(8)]);
var state_37911__$1 = state_37911;
var statearr_37955_38007 = state_37911__$1;
(statearr_37955_38007[(2)] = inst_37813);

(statearr_37955_38007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (5))){
var state_37911__$1 = state_37911;
var statearr_37956_38008 = state_37911__$1;
(statearr_37956_38008[(2)] = true);

(statearr_37956_38008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (14))){
var state_37911__$1 = state_37911;
var statearr_37957_38009 = state_37911__$1;
(statearr_37957_38009[(2)] = false);

(statearr_37957_38009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (26))){
var inst_37871 = (state_37911[(9)]);
var inst_37878 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37871);
var state_37911__$1 = state_37911;
var statearr_37958_38010 = state_37911__$1;
(statearr_37958_38010[(2)] = inst_37878);

(statearr_37958_38010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (16))){
var state_37911__$1 = state_37911;
var statearr_37959_38011 = state_37911__$1;
(statearr_37959_38011[(2)] = true);

(statearr_37959_38011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (38))){
var inst_37901 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37960_38012 = state_37911__$1;
(statearr_37960_38012[(2)] = inst_37901);

(statearr_37960_38012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (30))){
var inst_37871 = (state_37911[(9)]);
var inst_37863 = (state_37911[(13)]);
var inst_37862 = (state_37911[(11)]);
var inst_37888 = cljs.core.empty_QMARK_.call(null,inst_37862);
var inst_37889 = inst_37863.call(null,inst_37871);
var inst_37890 = cljs.core.not.call(null,inst_37889);
var inst_37891 = ((inst_37888) && (inst_37890));
var state_37911__$1 = state_37911;
var statearr_37961_38013 = state_37911__$1;
(statearr_37961_38013[(2)] = inst_37891);

(statearr_37961_38013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (10))){
var inst_37813 = (state_37911[(8)]);
var inst_37834 = (state_37911[(2)]);
var inst_37835 = cljs.core.get.call(null,inst_37834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37836 = cljs.core.get.call(null,inst_37834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37837 = cljs.core.get.call(null,inst_37834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37838 = inst_37813;
var state_37911__$1 = (function (){var statearr_37962 = state_37911;
(statearr_37962[(16)] = inst_37835);

(statearr_37962[(7)] = inst_37838);

(statearr_37962[(17)] = inst_37836);

(statearr_37962[(18)] = inst_37837);

return statearr_37962;
})();
var statearr_37963_38014 = state_37911__$1;
(statearr_37963_38014[(2)] = null);

(statearr_37963_38014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (18))){
var inst_37853 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37964_38015 = state_37911__$1;
(statearr_37964_38015[(2)] = inst_37853);

(statearr_37964_38015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (37))){
var state_37911__$1 = state_37911;
var statearr_37965_38016 = state_37911__$1;
(statearr_37965_38016[(2)] = null);

(statearr_37965_38016[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (8))){
var inst_37813 = (state_37911[(8)]);
var inst_37831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37813);
var state_37911__$1 = state_37911;
var statearr_37966_38017 = state_37911__$1;
(statearr_37966_38017[(2)] = inst_37831);

(statearr_37966_38017[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36809__auto__ = null;
var cljs$core$async$mix_$_state_machine__36809__auto____0 = (function (){
var statearr_37967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37967[(0)] = cljs$core$async$mix_$_state_machine__36809__auto__);

(statearr_37967[(1)] = (1));

return statearr_37967;
});
var cljs$core$async$mix_$_state_machine__36809__auto____1 = (function (state_37911){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_37911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e37968){if((e37968 instanceof Object)){
var ex__36812__auto__ = e37968;
var statearr_37969_38018 = state_37911;
(statearr_37969_38018[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38019 = state_37911;
state_37911 = G__38019;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36809__auto__ = function(state_37911){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36809__auto____1.call(this,state_37911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36809__auto____0;
cljs$core$async$mix_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36809__auto____1;
return cljs$core$async$mix_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_37970 = f__36904__auto__.call(null);
(statearr_37970[(6)] = c__36903__auto___37971);

return statearr_37970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38022 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38022.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38023 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38023.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38024 = (function() {
var G__38025 = null;
var G__38025__1 = (function (p){
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
var G__38025__2 = (function (p,v){
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
G__38025 = function(p,v){
switch(arguments.length){
case 1:
return G__38025__1.call(this,p);
case 2:
return G__38025__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38025.cljs$core$IFn$_invoke$arity$1 = G__38025__1;
G__38025.cljs$core$IFn$_invoke$arity$2 = G__38025__2;
return G__38025;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38021 = arguments.length;
switch (G__38021) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38024.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38024.call(null,p,v);
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
var G__38029 = arguments.length;
switch (G__38029) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__38027_SHARP_){
if(cljs.core.truth_(p1__38027_SHARP_.call(null,topic))){
return p1__38027_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38027_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38030 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38031){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38031 = meta38031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38032,meta38031__$1){
var self__ = this;
var _38032__$1 = this;
return (new cljs.core.async.t_cljs$core$async38030(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38031__$1));
}));

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38032){
var self__ = this;
var _38032__$1 = this;
return self__.meta38031;
}));

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38031","meta38031",402226567,null)], null);
}));

(cljs.core.async.t_cljs$core$async38030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38030");

(cljs.core.async.t_cljs$core$async38030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38030.
 */
cljs.core.async.__GT_t_cljs$core$async38030 = (function cljs$core$async$__GT_t_cljs$core$async38030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38031){
return (new cljs.core.async.t_cljs$core$async38030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38031));
});

}

return (new cljs.core.async.t_cljs$core$async38030(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36903__auto___38150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38104){
var state_val_38105 = (state_38104[(1)]);
if((state_val_38105 === (7))){
var inst_38100 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38106_38151 = state_38104__$1;
(statearr_38106_38151[(2)] = inst_38100);

(statearr_38106_38151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (20))){
var state_38104__$1 = state_38104;
var statearr_38107_38152 = state_38104__$1;
(statearr_38107_38152[(2)] = null);

(statearr_38107_38152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (1))){
var state_38104__$1 = state_38104;
var statearr_38108_38153 = state_38104__$1;
(statearr_38108_38153[(2)] = null);

(statearr_38108_38153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (24))){
var inst_38083 = (state_38104[(7)]);
var inst_38092 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38083);
var state_38104__$1 = state_38104;
var statearr_38109_38154 = state_38104__$1;
(statearr_38109_38154[(2)] = inst_38092);

(statearr_38109_38154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (4))){
var inst_38035 = (state_38104[(8)]);
var inst_38035__$1 = (state_38104[(2)]);
var inst_38036 = (inst_38035__$1 == null);
var state_38104__$1 = (function (){var statearr_38110 = state_38104;
(statearr_38110[(8)] = inst_38035__$1);

return statearr_38110;
})();
if(cljs.core.truth_(inst_38036)){
var statearr_38111_38155 = state_38104__$1;
(statearr_38111_38155[(1)] = (5));

} else {
var statearr_38112_38156 = state_38104__$1;
(statearr_38112_38156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (15))){
var inst_38077 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38113_38157 = state_38104__$1;
(statearr_38113_38157[(2)] = inst_38077);

(statearr_38113_38157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (21))){
var inst_38097 = (state_38104[(2)]);
var state_38104__$1 = (function (){var statearr_38114 = state_38104;
(statearr_38114[(9)] = inst_38097);

return statearr_38114;
})();
var statearr_38115_38158 = state_38104__$1;
(statearr_38115_38158[(2)] = null);

(statearr_38115_38158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (13))){
var inst_38059 = (state_38104[(10)]);
var inst_38061 = cljs.core.chunked_seq_QMARK_.call(null,inst_38059);
var state_38104__$1 = state_38104;
if(inst_38061){
var statearr_38116_38159 = state_38104__$1;
(statearr_38116_38159[(1)] = (16));

} else {
var statearr_38117_38160 = state_38104__$1;
(statearr_38117_38160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (22))){
var inst_38089 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
if(cljs.core.truth_(inst_38089)){
var statearr_38118_38161 = state_38104__$1;
(statearr_38118_38161[(1)] = (23));

} else {
var statearr_38119_38162 = state_38104__$1;
(statearr_38119_38162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (6))){
var inst_38083 = (state_38104[(7)]);
var inst_38085 = (state_38104[(11)]);
var inst_38035 = (state_38104[(8)]);
var inst_38083__$1 = topic_fn.call(null,inst_38035);
var inst_38084 = cljs.core.deref.call(null,mults);
var inst_38085__$1 = cljs.core.get.call(null,inst_38084,inst_38083__$1);
var state_38104__$1 = (function (){var statearr_38120 = state_38104;
(statearr_38120[(7)] = inst_38083__$1);

(statearr_38120[(11)] = inst_38085__$1);

return statearr_38120;
})();
if(cljs.core.truth_(inst_38085__$1)){
var statearr_38121_38163 = state_38104__$1;
(statearr_38121_38163[(1)] = (19));

} else {
var statearr_38122_38164 = state_38104__$1;
(statearr_38122_38164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (25))){
var inst_38094 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38123_38165 = state_38104__$1;
(statearr_38123_38165[(2)] = inst_38094);

(statearr_38123_38165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (17))){
var inst_38059 = (state_38104[(10)]);
var inst_38068 = cljs.core.first.call(null,inst_38059);
var inst_38069 = cljs.core.async.muxch_STAR_.call(null,inst_38068);
var inst_38070 = cljs.core.async.close_BANG_.call(null,inst_38069);
var inst_38071 = cljs.core.next.call(null,inst_38059);
var inst_38045 = inst_38071;
var inst_38046 = null;
var inst_38047 = (0);
var inst_38048 = (0);
var state_38104__$1 = (function (){var statearr_38124 = state_38104;
(statearr_38124[(12)] = inst_38046);

(statearr_38124[(13)] = inst_38047);

(statearr_38124[(14)] = inst_38048);

(statearr_38124[(15)] = inst_38045);

(statearr_38124[(16)] = inst_38070);

return statearr_38124;
})();
var statearr_38125_38166 = state_38104__$1;
(statearr_38125_38166[(2)] = null);

(statearr_38125_38166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (3))){
var inst_38102 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38104__$1,inst_38102);
} else {
if((state_val_38105 === (12))){
var inst_38079 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38126_38167 = state_38104__$1;
(statearr_38126_38167[(2)] = inst_38079);

(statearr_38126_38167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (2))){
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38104__$1,(4),ch);
} else {
if((state_val_38105 === (23))){
var state_38104__$1 = state_38104;
var statearr_38127_38168 = state_38104__$1;
(statearr_38127_38168[(2)] = null);

(statearr_38127_38168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (19))){
var inst_38085 = (state_38104[(11)]);
var inst_38035 = (state_38104[(8)]);
var inst_38087 = cljs.core.async.muxch_STAR_.call(null,inst_38085);
var state_38104__$1 = state_38104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38104__$1,(22),inst_38087,inst_38035);
} else {
if((state_val_38105 === (11))){
var inst_38059 = (state_38104[(10)]);
var inst_38045 = (state_38104[(15)]);
var inst_38059__$1 = cljs.core.seq.call(null,inst_38045);
var state_38104__$1 = (function (){var statearr_38128 = state_38104;
(statearr_38128[(10)] = inst_38059__$1);

return statearr_38128;
})();
if(inst_38059__$1){
var statearr_38129_38169 = state_38104__$1;
(statearr_38129_38169[(1)] = (13));

} else {
var statearr_38130_38170 = state_38104__$1;
(statearr_38130_38170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (9))){
var inst_38081 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38131_38171 = state_38104__$1;
(statearr_38131_38171[(2)] = inst_38081);

(statearr_38131_38171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (5))){
var inst_38042 = cljs.core.deref.call(null,mults);
var inst_38043 = cljs.core.vals.call(null,inst_38042);
var inst_38044 = cljs.core.seq.call(null,inst_38043);
var inst_38045 = inst_38044;
var inst_38046 = null;
var inst_38047 = (0);
var inst_38048 = (0);
var state_38104__$1 = (function (){var statearr_38132 = state_38104;
(statearr_38132[(12)] = inst_38046);

(statearr_38132[(13)] = inst_38047);

(statearr_38132[(14)] = inst_38048);

(statearr_38132[(15)] = inst_38045);

return statearr_38132;
})();
var statearr_38133_38172 = state_38104__$1;
(statearr_38133_38172[(2)] = null);

(statearr_38133_38172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (14))){
var state_38104__$1 = state_38104;
var statearr_38137_38173 = state_38104__$1;
(statearr_38137_38173[(2)] = null);

(statearr_38137_38173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (16))){
var inst_38059 = (state_38104[(10)]);
var inst_38063 = cljs.core.chunk_first.call(null,inst_38059);
var inst_38064 = cljs.core.chunk_rest.call(null,inst_38059);
var inst_38065 = cljs.core.count.call(null,inst_38063);
var inst_38045 = inst_38064;
var inst_38046 = inst_38063;
var inst_38047 = inst_38065;
var inst_38048 = (0);
var state_38104__$1 = (function (){var statearr_38138 = state_38104;
(statearr_38138[(12)] = inst_38046);

(statearr_38138[(13)] = inst_38047);

(statearr_38138[(14)] = inst_38048);

(statearr_38138[(15)] = inst_38045);

return statearr_38138;
})();
var statearr_38139_38174 = state_38104__$1;
(statearr_38139_38174[(2)] = null);

(statearr_38139_38174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (10))){
var inst_38046 = (state_38104[(12)]);
var inst_38047 = (state_38104[(13)]);
var inst_38048 = (state_38104[(14)]);
var inst_38045 = (state_38104[(15)]);
var inst_38053 = cljs.core._nth.call(null,inst_38046,inst_38048);
var inst_38054 = cljs.core.async.muxch_STAR_.call(null,inst_38053);
var inst_38055 = cljs.core.async.close_BANG_.call(null,inst_38054);
var inst_38056 = (inst_38048 + (1));
var tmp38134 = inst_38046;
var tmp38135 = inst_38047;
var tmp38136 = inst_38045;
var inst_38045__$1 = tmp38136;
var inst_38046__$1 = tmp38134;
var inst_38047__$1 = tmp38135;
var inst_38048__$1 = inst_38056;
var state_38104__$1 = (function (){var statearr_38140 = state_38104;
(statearr_38140[(12)] = inst_38046__$1);

(statearr_38140[(13)] = inst_38047__$1);

(statearr_38140[(14)] = inst_38048__$1);

(statearr_38140[(15)] = inst_38045__$1);

(statearr_38140[(17)] = inst_38055);

return statearr_38140;
})();
var statearr_38141_38175 = state_38104__$1;
(statearr_38141_38175[(2)] = null);

(statearr_38141_38175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (18))){
var inst_38074 = (state_38104[(2)]);
var state_38104__$1 = state_38104;
var statearr_38142_38176 = state_38104__$1;
(statearr_38142_38176[(2)] = inst_38074);

(statearr_38142_38176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38105 === (8))){
var inst_38047 = (state_38104[(13)]);
var inst_38048 = (state_38104[(14)]);
var inst_38050 = (inst_38048 < inst_38047);
var inst_38051 = inst_38050;
var state_38104__$1 = state_38104;
if(cljs.core.truth_(inst_38051)){
var statearr_38143_38177 = state_38104__$1;
(statearr_38143_38177[(1)] = (10));

} else {
var statearr_38144_38178 = state_38104__$1;
(statearr_38144_38178[(1)] = (11));

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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38145[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38145[(1)] = (1));

return statearr_38145;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38104){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38146){if((e38146 instanceof Object)){
var ex__36812__auto__ = e38146;
var statearr_38147_38179 = state_38104;
(statearr_38147_38179[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38180 = state_38104;
state_38104 = G__38180;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38148 = f__36904__auto__.call(null);
(statearr_38148[(6)] = c__36903__auto___38150);

return statearr_38148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var G__38182 = arguments.length;
switch (G__38182) {
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
var G__38185 = arguments.length;
switch (G__38185) {
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
var G__38188 = arguments.length;
switch (G__38188) {
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
var c__36903__auto___38255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38227){
var state_val_38228 = (state_38227[(1)]);
if((state_val_38228 === (7))){
var state_38227__$1 = state_38227;
var statearr_38229_38256 = state_38227__$1;
(statearr_38229_38256[(2)] = null);

(statearr_38229_38256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (1))){
var state_38227__$1 = state_38227;
var statearr_38230_38257 = state_38227__$1;
(statearr_38230_38257[(2)] = null);

(statearr_38230_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (4))){
var inst_38191 = (state_38227[(7)]);
var inst_38193 = (inst_38191 < cnt);
var state_38227__$1 = state_38227;
if(cljs.core.truth_(inst_38193)){
var statearr_38231_38258 = state_38227__$1;
(statearr_38231_38258[(1)] = (6));

} else {
var statearr_38232_38259 = state_38227__$1;
(statearr_38232_38259[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (15))){
var inst_38223 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
var statearr_38233_38260 = state_38227__$1;
(statearr_38233_38260[(2)] = inst_38223);

(statearr_38233_38260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (13))){
var inst_38216 = cljs.core.async.close_BANG_.call(null,out);
var state_38227__$1 = state_38227;
var statearr_38234_38261 = state_38227__$1;
(statearr_38234_38261[(2)] = inst_38216);

(statearr_38234_38261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (6))){
var state_38227__$1 = state_38227;
var statearr_38235_38262 = state_38227__$1;
(statearr_38235_38262[(2)] = null);

(statearr_38235_38262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (3))){
var inst_38225 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38227__$1,inst_38225);
} else {
if((state_val_38228 === (12))){
var inst_38213 = (state_38227[(8)]);
var inst_38213__$1 = (state_38227[(2)]);
var inst_38214 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38213__$1);
var state_38227__$1 = (function (){var statearr_38236 = state_38227;
(statearr_38236[(8)] = inst_38213__$1);

return statearr_38236;
})();
if(cljs.core.truth_(inst_38214)){
var statearr_38237_38263 = state_38227__$1;
(statearr_38237_38263[(1)] = (13));

} else {
var statearr_38238_38264 = state_38227__$1;
(statearr_38238_38264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (2))){
var inst_38190 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38191 = (0);
var state_38227__$1 = (function (){var statearr_38239 = state_38227;
(statearr_38239[(9)] = inst_38190);

(statearr_38239[(7)] = inst_38191);

return statearr_38239;
})();
var statearr_38240_38265 = state_38227__$1;
(statearr_38240_38265[(2)] = null);

(statearr_38240_38265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (11))){
var inst_38191 = (state_38227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38227,(10),Object,null,(9));
var inst_38200 = chs__$1.call(null,inst_38191);
var inst_38201 = done.call(null,inst_38191);
var inst_38202 = cljs.core.async.take_BANG_.call(null,inst_38200,inst_38201);
var state_38227__$1 = state_38227;
var statearr_38241_38266 = state_38227__$1;
(statearr_38241_38266[(2)] = inst_38202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (9))){
var inst_38191 = (state_38227[(7)]);
var inst_38204 = (state_38227[(2)]);
var inst_38205 = (inst_38191 + (1));
var inst_38191__$1 = inst_38205;
var state_38227__$1 = (function (){var statearr_38242 = state_38227;
(statearr_38242[(7)] = inst_38191__$1);

(statearr_38242[(10)] = inst_38204);

return statearr_38242;
})();
var statearr_38243_38267 = state_38227__$1;
(statearr_38243_38267[(2)] = null);

(statearr_38243_38267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (5))){
var inst_38211 = (state_38227[(2)]);
var state_38227__$1 = (function (){var statearr_38244 = state_38227;
(statearr_38244[(11)] = inst_38211);

return statearr_38244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38227__$1,(12),dchan);
} else {
if((state_val_38228 === (14))){
var inst_38213 = (state_38227[(8)]);
var inst_38218 = cljs.core.apply.call(null,f,inst_38213);
var state_38227__$1 = state_38227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38227__$1,(16),out,inst_38218);
} else {
if((state_val_38228 === (16))){
var inst_38220 = (state_38227[(2)]);
var state_38227__$1 = (function (){var statearr_38245 = state_38227;
(statearr_38245[(12)] = inst_38220);

return statearr_38245;
})();
var statearr_38246_38268 = state_38227__$1;
(statearr_38246_38268[(2)] = null);

(statearr_38246_38268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (10))){
var inst_38195 = (state_38227[(2)]);
var inst_38196 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38227__$1 = (function (){var statearr_38247 = state_38227;
(statearr_38247[(13)] = inst_38195);

return statearr_38247;
})();
var statearr_38248_38269 = state_38227__$1;
(statearr_38248_38269[(2)] = inst_38196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38228 === (8))){
var inst_38209 = (state_38227[(2)]);
var state_38227__$1 = state_38227;
var statearr_38249_38270 = state_38227__$1;
(statearr_38249_38270[(2)] = inst_38209);

(statearr_38249_38270[(1)] = (5));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38250[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38250[(1)] = (1));

return statearr_38250;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38227){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38251){if((e38251 instanceof Object)){
var ex__36812__auto__ = e38251;
var statearr_38252_38271 = state_38227;
(statearr_38252_38271[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38272 = state_38227;
state_38227 = G__38272;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38253 = f__36904__auto__.call(null);
(statearr_38253[(6)] = c__36903__auto___38255);

return statearr_38253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var G__38275 = arguments.length;
switch (G__38275) {
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
var c__36903__auto___38329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38307){
var state_val_38308 = (state_38307[(1)]);
if((state_val_38308 === (7))){
var inst_38287 = (state_38307[(7)]);
var inst_38286 = (state_38307[(8)]);
var inst_38286__$1 = (state_38307[(2)]);
var inst_38287__$1 = cljs.core.nth.call(null,inst_38286__$1,(0),null);
var inst_38288 = cljs.core.nth.call(null,inst_38286__$1,(1),null);
var inst_38289 = (inst_38287__$1 == null);
var state_38307__$1 = (function (){var statearr_38309 = state_38307;
(statearr_38309[(7)] = inst_38287__$1);

(statearr_38309[(8)] = inst_38286__$1);

(statearr_38309[(9)] = inst_38288);

return statearr_38309;
})();
if(cljs.core.truth_(inst_38289)){
var statearr_38310_38330 = state_38307__$1;
(statearr_38310_38330[(1)] = (8));

} else {
var statearr_38311_38331 = state_38307__$1;
(statearr_38311_38331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (1))){
var inst_38276 = cljs.core.vec.call(null,chs);
var inst_38277 = inst_38276;
var state_38307__$1 = (function (){var statearr_38312 = state_38307;
(statearr_38312[(10)] = inst_38277);

return statearr_38312;
})();
var statearr_38313_38332 = state_38307__$1;
(statearr_38313_38332[(2)] = null);

(statearr_38313_38332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (4))){
var inst_38277 = (state_38307[(10)]);
var state_38307__$1 = state_38307;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38307__$1,(7),inst_38277);
} else {
if((state_val_38308 === (6))){
var inst_38303 = (state_38307[(2)]);
var state_38307__$1 = state_38307;
var statearr_38314_38333 = state_38307__$1;
(statearr_38314_38333[(2)] = inst_38303);

(statearr_38314_38333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (3))){
var inst_38305 = (state_38307[(2)]);
var state_38307__$1 = state_38307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38307__$1,inst_38305);
} else {
if((state_val_38308 === (2))){
var inst_38277 = (state_38307[(10)]);
var inst_38279 = cljs.core.count.call(null,inst_38277);
var inst_38280 = (inst_38279 > (0));
var state_38307__$1 = state_38307;
if(cljs.core.truth_(inst_38280)){
var statearr_38316_38334 = state_38307__$1;
(statearr_38316_38334[(1)] = (4));

} else {
var statearr_38317_38335 = state_38307__$1;
(statearr_38317_38335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (11))){
var inst_38277 = (state_38307[(10)]);
var inst_38296 = (state_38307[(2)]);
var tmp38315 = inst_38277;
var inst_38277__$1 = tmp38315;
var state_38307__$1 = (function (){var statearr_38318 = state_38307;
(statearr_38318[(10)] = inst_38277__$1);

(statearr_38318[(11)] = inst_38296);

return statearr_38318;
})();
var statearr_38319_38336 = state_38307__$1;
(statearr_38319_38336[(2)] = null);

(statearr_38319_38336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (9))){
var inst_38287 = (state_38307[(7)]);
var state_38307__$1 = state_38307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38307__$1,(11),out,inst_38287);
} else {
if((state_val_38308 === (5))){
var inst_38301 = cljs.core.async.close_BANG_.call(null,out);
var state_38307__$1 = state_38307;
var statearr_38320_38337 = state_38307__$1;
(statearr_38320_38337[(2)] = inst_38301);

(statearr_38320_38337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (10))){
var inst_38299 = (state_38307[(2)]);
var state_38307__$1 = state_38307;
var statearr_38321_38338 = state_38307__$1;
(statearr_38321_38338[(2)] = inst_38299);

(statearr_38321_38338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38308 === (8))){
var inst_38277 = (state_38307[(10)]);
var inst_38287 = (state_38307[(7)]);
var inst_38286 = (state_38307[(8)]);
var inst_38288 = (state_38307[(9)]);
var inst_38291 = (function (){var cs = inst_38277;
var vec__38282 = inst_38286;
var v = inst_38287;
var c = inst_38288;
return (function (p1__38273_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38273_SHARP_);
});
})();
var inst_38292 = cljs.core.filterv.call(null,inst_38291,inst_38277);
var inst_38277__$1 = inst_38292;
var state_38307__$1 = (function (){var statearr_38322 = state_38307;
(statearr_38322[(10)] = inst_38277__$1);

return statearr_38322;
})();
var statearr_38323_38339 = state_38307__$1;
(statearr_38323_38339[(2)] = null);

(statearr_38323_38339[(1)] = (2));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38324 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38324[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38324[(1)] = (1));

return statearr_38324;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38307){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38325){if((e38325 instanceof Object)){
var ex__36812__auto__ = e38325;
var statearr_38326_38340 = state_38307;
(statearr_38326_38340[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38341 = state_38307;
state_38307 = G__38341;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38327 = f__36904__auto__.call(null);
(statearr_38327[(6)] = c__36903__auto___38329);

return statearr_38327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
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
var G__38343 = arguments.length;
switch (G__38343) {
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
var c__36903__auto___38388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (7))){
var inst_38349 = (state_38367[(7)]);
var inst_38349__$1 = (state_38367[(2)]);
var inst_38350 = (inst_38349__$1 == null);
var inst_38351 = cljs.core.not.call(null,inst_38350);
var state_38367__$1 = (function (){var statearr_38369 = state_38367;
(statearr_38369[(7)] = inst_38349__$1);

return statearr_38369;
})();
if(inst_38351){
var statearr_38370_38389 = state_38367__$1;
(statearr_38370_38389[(1)] = (8));

} else {
var statearr_38371_38390 = state_38367__$1;
(statearr_38371_38390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (1))){
var inst_38344 = (0);
var state_38367__$1 = (function (){var statearr_38372 = state_38367;
(statearr_38372[(8)] = inst_38344);

return statearr_38372;
})();
var statearr_38373_38391 = state_38367__$1;
(statearr_38373_38391[(2)] = null);

(statearr_38373_38391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (4))){
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38367__$1,(7),ch);
} else {
if((state_val_38368 === (6))){
var inst_38362 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38374_38392 = state_38367__$1;
(statearr_38374_38392[(2)] = inst_38362);

(statearr_38374_38392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (3))){
var inst_38364 = (state_38367[(2)]);
var inst_38365 = cljs.core.async.close_BANG_.call(null,out);
var state_38367__$1 = (function (){var statearr_38375 = state_38367;
(statearr_38375[(9)] = inst_38364);

return statearr_38375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38367__$1,inst_38365);
} else {
if((state_val_38368 === (2))){
var inst_38344 = (state_38367[(8)]);
var inst_38346 = (inst_38344 < n);
var state_38367__$1 = state_38367;
if(cljs.core.truth_(inst_38346)){
var statearr_38376_38393 = state_38367__$1;
(statearr_38376_38393[(1)] = (4));

} else {
var statearr_38377_38394 = state_38367__$1;
(statearr_38377_38394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (11))){
var inst_38344 = (state_38367[(8)]);
var inst_38354 = (state_38367[(2)]);
var inst_38355 = (inst_38344 + (1));
var inst_38344__$1 = inst_38355;
var state_38367__$1 = (function (){var statearr_38378 = state_38367;
(statearr_38378[(10)] = inst_38354);

(statearr_38378[(8)] = inst_38344__$1);

return statearr_38378;
})();
var statearr_38379_38395 = state_38367__$1;
(statearr_38379_38395[(2)] = null);

(statearr_38379_38395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (9))){
var state_38367__$1 = state_38367;
var statearr_38380_38396 = state_38367__$1;
(statearr_38380_38396[(2)] = null);

(statearr_38380_38396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (5))){
var state_38367__$1 = state_38367;
var statearr_38381_38397 = state_38367__$1;
(statearr_38381_38397[(2)] = null);

(statearr_38381_38397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (10))){
var inst_38359 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38382_38398 = state_38367__$1;
(statearr_38382_38398[(2)] = inst_38359);

(statearr_38382_38398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (8))){
var inst_38349 = (state_38367[(7)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38367__$1,(11),out,inst_38349);
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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38383[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38383[(1)] = (1));

return statearr_38383;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38367){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38384){if((e38384 instanceof Object)){
var ex__36812__auto__ = e38384;
var statearr_38385_38399 = state_38367;
(statearr_38385_38399[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38400 = state_38367;
state_38367 = G__38400;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38386 = f__36904__auto__.call(null);
(statearr_38386[(6)] = c__36903__auto___38388);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38402 = (function (f,ch,meta38403){
this.f = f;
this.ch = ch;
this.meta38403 = meta38403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38404,meta38403__$1){
var self__ = this;
var _38404__$1 = this;
return (new cljs.core.async.t_cljs$core$async38402(self__.f,self__.ch,meta38403__$1));
}));

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38404){
var self__ = this;
var _38404__$1 = this;
return self__.meta38403;
}));

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38405 = (function (f,ch,meta38403,_,fn1,meta38406){
this.f = f;
this.ch = ch;
this.meta38403 = meta38403;
this._ = _;
this.fn1 = fn1;
this.meta38406 = meta38406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38407,meta38406__$1){
var self__ = this;
var _38407__$1 = this;
return (new cljs.core.async.t_cljs$core$async38405(self__.f,self__.ch,self__.meta38403,self__._,self__.fn1,meta38406__$1));
}));

(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38407){
var self__ = this;
var _38407__$1 = this;
return self__.meta38406;
}));

(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__38401_SHARP_){
return f1.call(null,(((p1__38401_SHARP_ == null))?null:self__.f.call(null,p1__38401_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async38405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38403","meta38403",-1449385938,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38402","cljs.core.async/t_cljs$core$async38402",1883871061,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38406","meta38406",2125134577,null)], null);
}));

(cljs.core.async.t_cljs$core$async38405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38405");

(cljs.core.async.t_cljs$core$async38405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38405.
 */
cljs.core.async.__GT_t_cljs$core$async38405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38405(f__$1,ch__$1,meta38403__$1,___$2,fn1__$1,meta38406){
return (new cljs.core.async.t_cljs$core$async38405(f__$1,ch__$1,meta38403__$1,___$2,fn1__$1,meta38406));
});

}

return (new cljs.core.async.t_cljs$core$async38405(self__.f,self__.ch,self__.meta38403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38403","meta38403",-1449385938,null)], null);
}));

(cljs.core.async.t_cljs$core$async38402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38402");

(cljs.core.async.t_cljs$core$async38402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38402.
 */
cljs.core.async.__GT_t_cljs$core$async38402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38402(f__$1,ch__$1,meta38403){
return (new cljs.core.async.t_cljs$core$async38402(f__$1,ch__$1,meta38403));
});

}

return (new cljs.core.async.t_cljs$core$async38402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38408 = (function (f,ch,meta38409){
this.f = f;
this.ch = ch;
this.meta38409 = meta38409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38410,meta38409__$1){
var self__ = this;
var _38410__$1 = this;
return (new cljs.core.async.t_cljs$core$async38408(self__.f,self__.ch,meta38409__$1));
}));

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38410){
var self__ = this;
var _38410__$1 = this;
return self__.meta38409;
}));

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async38408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38409","meta38409",-255139726,null)], null);
}));

(cljs.core.async.t_cljs$core$async38408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38408");

(cljs.core.async.t_cljs$core$async38408.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38408.
 */
cljs.core.async.__GT_t_cljs$core$async38408 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38408(f__$1,ch__$1,meta38409){
return (new cljs.core.async.t_cljs$core$async38408(f__$1,ch__$1,meta38409));
});

}

return (new cljs.core.async.t_cljs$core$async38408(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38411 = (function (p,ch,meta38412){
this.p = p;
this.ch = ch;
this.meta38412 = meta38412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38413,meta38412__$1){
var self__ = this;
var _38413__$1 = this;
return (new cljs.core.async.t_cljs$core$async38411(self__.p,self__.ch,meta38412__$1));
}));

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38413){
var self__ = this;
var _38413__$1 = this;
return self__.meta38412;
}));

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38412","meta38412",1524580103,null)], null);
}));

(cljs.core.async.t_cljs$core$async38411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38411");

(cljs.core.async.t_cljs$core$async38411.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async38411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38411.
 */
cljs.core.async.__GT_t_cljs$core$async38411 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38411(p__$1,ch__$1,meta38412){
return (new cljs.core.async.t_cljs$core$async38411(p__$1,ch__$1,meta38412));
});

}

return (new cljs.core.async.t_cljs$core$async38411(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38415 = arguments.length;
switch (G__38415) {
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
var c__36903__auto___38455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38436){
var state_val_38437 = (state_38436[(1)]);
if((state_val_38437 === (7))){
var inst_38432 = (state_38436[(2)]);
var state_38436__$1 = state_38436;
var statearr_38438_38456 = state_38436__$1;
(statearr_38438_38456[(2)] = inst_38432);

(statearr_38438_38456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (1))){
var state_38436__$1 = state_38436;
var statearr_38439_38457 = state_38436__$1;
(statearr_38439_38457[(2)] = null);

(statearr_38439_38457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (4))){
var inst_38418 = (state_38436[(7)]);
var inst_38418__$1 = (state_38436[(2)]);
var inst_38419 = (inst_38418__$1 == null);
var state_38436__$1 = (function (){var statearr_38440 = state_38436;
(statearr_38440[(7)] = inst_38418__$1);

return statearr_38440;
})();
if(cljs.core.truth_(inst_38419)){
var statearr_38441_38458 = state_38436__$1;
(statearr_38441_38458[(1)] = (5));

} else {
var statearr_38442_38459 = state_38436__$1;
(statearr_38442_38459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (6))){
var inst_38418 = (state_38436[(7)]);
var inst_38423 = p.call(null,inst_38418);
var state_38436__$1 = state_38436;
if(cljs.core.truth_(inst_38423)){
var statearr_38443_38460 = state_38436__$1;
(statearr_38443_38460[(1)] = (8));

} else {
var statearr_38444_38461 = state_38436__$1;
(statearr_38444_38461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (3))){
var inst_38434 = (state_38436[(2)]);
var state_38436__$1 = state_38436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38436__$1,inst_38434);
} else {
if((state_val_38437 === (2))){
var state_38436__$1 = state_38436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38436__$1,(4),ch);
} else {
if((state_val_38437 === (11))){
var inst_38426 = (state_38436[(2)]);
var state_38436__$1 = state_38436;
var statearr_38445_38462 = state_38436__$1;
(statearr_38445_38462[(2)] = inst_38426);

(statearr_38445_38462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (9))){
var state_38436__$1 = state_38436;
var statearr_38446_38463 = state_38436__$1;
(statearr_38446_38463[(2)] = null);

(statearr_38446_38463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (5))){
var inst_38421 = cljs.core.async.close_BANG_.call(null,out);
var state_38436__$1 = state_38436;
var statearr_38447_38464 = state_38436__$1;
(statearr_38447_38464[(2)] = inst_38421);

(statearr_38447_38464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (10))){
var inst_38429 = (state_38436[(2)]);
var state_38436__$1 = (function (){var statearr_38448 = state_38436;
(statearr_38448[(8)] = inst_38429);

return statearr_38448;
})();
var statearr_38449_38465 = state_38436__$1;
(statearr_38449_38465[(2)] = null);

(statearr_38449_38465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (8))){
var inst_38418 = (state_38436[(7)]);
var state_38436__$1 = state_38436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38436__$1,(11),out,inst_38418);
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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38450 = [null,null,null,null,null,null,null,null,null];
(statearr_38450[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38450[(1)] = (1));

return statearr_38450;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38436){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38451){if((e38451 instanceof Object)){
var ex__36812__auto__ = e38451;
var statearr_38452_38466 = state_38436;
(statearr_38452_38466[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38467 = state_38436;
state_38436 = G__38467;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38453 = f__36904__auto__.call(null);
(statearr_38453[(6)] = c__36903__auto___38455);

return statearr_38453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38469 = arguments.length;
switch (G__38469) {
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
var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38532){
var state_val_38533 = (state_38532[(1)]);
if((state_val_38533 === (7))){
var inst_38528 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38534_38572 = state_38532__$1;
(statearr_38534_38572[(2)] = inst_38528);

(statearr_38534_38572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (20))){
var inst_38498 = (state_38532[(7)]);
var inst_38509 = (state_38532[(2)]);
var inst_38510 = cljs.core.next.call(null,inst_38498);
var inst_38484 = inst_38510;
var inst_38485 = null;
var inst_38486 = (0);
var inst_38487 = (0);
var state_38532__$1 = (function (){var statearr_38535 = state_38532;
(statearr_38535[(8)] = inst_38487);

(statearr_38535[(9)] = inst_38484);

(statearr_38535[(10)] = inst_38486);

(statearr_38535[(11)] = inst_38509);

(statearr_38535[(12)] = inst_38485);

return statearr_38535;
})();
var statearr_38536_38573 = state_38532__$1;
(statearr_38536_38573[(2)] = null);

(statearr_38536_38573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (1))){
var state_38532__$1 = state_38532;
var statearr_38537_38574 = state_38532__$1;
(statearr_38537_38574[(2)] = null);

(statearr_38537_38574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (4))){
var inst_38473 = (state_38532[(13)]);
var inst_38473__$1 = (state_38532[(2)]);
var inst_38474 = (inst_38473__$1 == null);
var state_38532__$1 = (function (){var statearr_38538 = state_38532;
(statearr_38538[(13)] = inst_38473__$1);

return statearr_38538;
})();
if(cljs.core.truth_(inst_38474)){
var statearr_38539_38575 = state_38532__$1;
(statearr_38539_38575[(1)] = (5));

} else {
var statearr_38540_38576 = state_38532__$1;
(statearr_38540_38576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (15))){
var state_38532__$1 = state_38532;
var statearr_38544_38577 = state_38532__$1;
(statearr_38544_38577[(2)] = null);

(statearr_38544_38577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (21))){
var state_38532__$1 = state_38532;
var statearr_38545_38578 = state_38532__$1;
(statearr_38545_38578[(2)] = null);

(statearr_38545_38578[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (13))){
var inst_38487 = (state_38532[(8)]);
var inst_38484 = (state_38532[(9)]);
var inst_38486 = (state_38532[(10)]);
var inst_38485 = (state_38532[(12)]);
var inst_38494 = (state_38532[(2)]);
var inst_38495 = (inst_38487 + (1));
var tmp38541 = inst_38484;
var tmp38542 = inst_38486;
var tmp38543 = inst_38485;
var inst_38484__$1 = tmp38541;
var inst_38485__$1 = tmp38543;
var inst_38486__$1 = tmp38542;
var inst_38487__$1 = inst_38495;
var state_38532__$1 = (function (){var statearr_38546 = state_38532;
(statearr_38546[(14)] = inst_38494);

(statearr_38546[(8)] = inst_38487__$1);

(statearr_38546[(9)] = inst_38484__$1);

(statearr_38546[(10)] = inst_38486__$1);

(statearr_38546[(12)] = inst_38485__$1);

return statearr_38546;
})();
var statearr_38547_38579 = state_38532__$1;
(statearr_38547_38579[(2)] = null);

(statearr_38547_38579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (22))){
var state_38532__$1 = state_38532;
var statearr_38548_38580 = state_38532__$1;
(statearr_38548_38580[(2)] = null);

(statearr_38548_38580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (6))){
var inst_38473 = (state_38532[(13)]);
var inst_38482 = f.call(null,inst_38473);
var inst_38483 = cljs.core.seq.call(null,inst_38482);
var inst_38484 = inst_38483;
var inst_38485 = null;
var inst_38486 = (0);
var inst_38487 = (0);
var state_38532__$1 = (function (){var statearr_38549 = state_38532;
(statearr_38549[(8)] = inst_38487);

(statearr_38549[(9)] = inst_38484);

(statearr_38549[(10)] = inst_38486);

(statearr_38549[(12)] = inst_38485);

return statearr_38549;
})();
var statearr_38550_38581 = state_38532__$1;
(statearr_38550_38581[(2)] = null);

(statearr_38550_38581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (17))){
var inst_38498 = (state_38532[(7)]);
var inst_38502 = cljs.core.chunk_first.call(null,inst_38498);
var inst_38503 = cljs.core.chunk_rest.call(null,inst_38498);
var inst_38504 = cljs.core.count.call(null,inst_38502);
var inst_38484 = inst_38503;
var inst_38485 = inst_38502;
var inst_38486 = inst_38504;
var inst_38487 = (0);
var state_38532__$1 = (function (){var statearr_38551 = state_38532;
(statearr_38551[(8)] = inst_38487);

(statearr_38551[(9)] = inst_38484);

(statearr_38551[(10)] = inst_38486);

(statearr_38551[(12)] = inst_38485);

return statearr_38551;
})();
var statearr_38552_38582 = state_38532__$1;
(statearr_38552_38582[(2)] = null);

(statearr_38552_38582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (3))){
var inst_38530 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38532__$1,inst_38530);
} else {
if((state_val_38533 === (12))){
var inst_38518 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38553_38583 = state_38532__$1;
(statearr_38553_38583[(2)] = inst_38518);

(statearr_38553_38583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (2))){
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38532__$1,(4),in$);
} else {
if((state_val_38533 === (23))){
var inst_38526 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38554_38584 = state_38532__$1;
(statearr_38554_38584[(2)] = inst_38526);

(statearr_38554_38584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (19))){
var inst_38513 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38555_38585 = state_38532__$1;
(statearr_38555_38585[(2)] = inst_38513);

(statearr_38555_38585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (11))){
var inst_38498 = (state_38532[(7)]);
var inst_38484 = (state_38532[(9)]);
var inst_38498__$1 = cljs.core.seq.call(null,inst_38484);
var state_38532__$1 = (function (){var statearr_38556 = state_38532;
(statearr_38556[(7)] = inst_38498__$1);

return statearr_38556;
})();
if(inst_38498__$1){
var statearr_38557_38586 = state_38532__$1;
(statearr_38557_38586[(1)] = (14));

} else {
var statearr_38558_38587 = state_38532__$1;
(statearr_38558_38587[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (9))){
var inst_38520 = (state_38532[(2)]);
var inst_38521 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38532__$1 = (function (){var statearr_38559 = state_38532;
(statearr_38559[(15)] = inst_38520);

return statearr_38559;
})();
if(cljs.core.truth_(inst_38521)){
var statearr_38560_38588 = state_38532__$1;
(statearr_38560_38588[(1)] = (21));

} else {
var statearr_38561_38589 = state_38532__$1;
(statearr_38561_38589[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (5))){
var inst_38476 = cljs.core.async.close_BANG_.call(null,out);
var state_38532__$1 = state_38532;
var statearr_38562_38590 = state_38532__$1;
(statearr_38562_38590[(2)] = inst_38476);

(statearr_38562_38590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (14))){
var inst_38498 = (state_38532[(7)]);
var inst_38500 = cljs.core.chunked_seq_QMARK_.call(null,inst_38498);
var state_38532__$1 = state_38532;
if(inst_38500){
var statearr_38563_38591 = state_38532__$1;
(statearr_38563_38591[(1)] = (17));

} else {
var statearr_38564_38592 = state_38532__$1;
(statearr_38564_38592[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (16))){
var inst_38516 = (state_38532[(2)]);
var state_38532__$1 = state_38532;
var statearr_38565_38593 = state_38532__$1;
(statearr_38565_38593[(2)] = inst_38516);

(statearr_38565_38593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38533 === (10))){
var inst_38487 = (state_38532[(8)]);
var inst_38485 = (state_38532[(12)]);
var inst_38492 = cljs.core._nth.call(null,inst_38485,inst_38487);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38532__$1,(13),out,inst_38492);
} else {
if((state_val_38533 === (18))){
var inst_38498 = (state_38532[(7)]);
var inst_38507 = cljs.core.first.call(null,inst_38498);
var state_38532__$1 = state_38532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38532__$1,(20),out,inst_38507);
} else {
if((state_val_38533 === (8))){
var inst_38487 = (state_38532[(8)]);
var inst_38486 = (state_38532[(10)]);
var inst_38489 = (inst_38487 < inst_38486);
var inst_38490 = inst_38489;
var state_38532__$1 = state_38532;
if(cljs.core.truth_(inst_38490)){
var statearr_38566_38594 = state_38532__$1;
(statearr_38566_38594[(1)] = (10));

} else {
var statearr_38567_38595 = state_38532__$1;
(statearr_38567_38595[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____0 = (function (){
var statearr_38568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38568[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__);

(statearr_38568[(1)] = (1));

return statearr_38568;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____1 = (function (state_38532){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38569){if((e38569 instanceof Object)){
var ex__36812__auto__ = e38569;
var statearr_38570_38596 = state_38532;
(statearr_38570_38596[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38597 = state_38532;
state_38532 = G__38597;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__ = function(state_38532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____1.call(this,state_38532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36809__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38571 = f__36904__auto__.call(null);
(statearr_38571[(6)] = c__36903__auto__);

return statearr_38571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38599 = arguments.length;
switch (G__38599) {
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
var G__38602 = arguments.length;
switch (G__38602) {
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
var G__38605 = arguments.length;
switch (G__38605) {
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
var c__36903__auto___38652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38629){
var state_val_38630 = (state_38629[(1)]);
if((state_val_38630 === (7))){
var inst_38624 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38631_38653 = state_38629__$1;
(statearr_38631_38653[(2)] = inst_38624);

(statearr_38631_38653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (1))){
var inst_38606 = null;
var state_38629__$1 = (function (){var statearr_38632 = state_38629;
(statearr_38632[(7)] = inst_38606);

return statearr_38632;
})();
var statearr_38633_38654 = state_38629__$1;
(statearr_38633_38654[(2)] = null);

(statearr_38633_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (4))){
var inst_38609 = (state_38629[(8)]);
var inst_38609__$1 = (state_38629[(2)]);
var inst_38610 = (inst_38609__$1 == null);
var inst_38611 = cljs.core.not.call(null,inst_38610);
var state_38629__$1 = (function (){var statearr_38634 = state_38629;
(statearr_38634[(8)] = inst_38609__$1);

return statearr_38634;
})();
if(inst_38611){
var statearr_38635_38655 = state_38629__$1;
(statearr_38635_38655[(1)] = (5));

} else {
var statearr_38636_38656 = state_38629__$1;
(statearr_38636_38656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (6))){
var state_38629__$1 = state_38629;
var statearr_38637_38657 = state_38629__$1;
(statearr_38637_38657[(2)] = null);

(statearr_38637_38657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (3))){
var inst_38626 = (state_38629[(2)]);
var inst_38627 = cljs.core.async.close_BANG_.call(null,out);
var state_38629__$1 = (function (){var statearr_38638 = state_38629;
(statearr_38638[(9)] = inst_38626);

return statearr_38638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38629__$1,inst_38627);
} else {
if((state_val_38630 === (2))){
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38629__$1,(4),ch);
} else {
if((state_val_38630 === (11))){
var inst_38609 = (state_38629[(8)]);
var inst_38618 = (state_38629[(2)]);
var inst_38606 = inst_38609;
var state_38629__$1 = (function (){var statearr_38639 = state_38629;
(statearr_38639[(10)] = inst_38618);

(statearr_38639[(7)] = inst_38606);

return statearr_38639;
})();
var statearr_38640_38658 = state_38629__$1;
(statearr_38640_38658[(2)] = null);

(statearr_38640_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (9))){
var inst_38609 = (state_38629[(8)]);
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38629__$1,(11),out,inst_38609);
} else {
if((state_val_38630 === (5))){
var inst_38609 = (state_38629[(8)]);
var inst_38606 = (state_38629[(7)]);
var inst_38613 = cljs.core._EQ_.call(null,inst_38609,inst_38606);
var state_38629__$1 = state_38629;
if(inst_38613){
var statearr_38642_38659 = state_38629__$1;
(statearr_38642_38659[(1)] = (8));

} else {
var statearr_38643_38660 = state_38629__$1;
(statearr_38643_38660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (10))){
var inst_38621 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38644_38661 = state_38629__$1;
(statearr_38644_38661[(2)] = inst_38621);

(statearr_38644_38661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (8))){
var inst_38606 = (state_38629[(7)]);
var tmp38641 = inst_38606;
var inst_38606__$1 = tmp38641;
var state_38629__$1 = (function (){var statearr_38645 = state_38629;
(statearr_38645[(7)] = inst_38606__$1);

return statearr_38645;
})();
var statearr_38646_38662 = state_38629__$1;
(statearr_38646_38662[(2)] = null);

(statearr_38646_38662[(1)] = (2));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38647[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38647[(1)] = (1));

return statearr_38647;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38629){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38648){if((e38648 instanceof Object)){
var ex__36812__auto__ = e38648;
var statearr_38649_38663 = state_38629;
(statearr_38649_38663[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38664 = state_38629;
state_38629 = G__38664;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38650 = f__36904__auto__.call(null);
(statearr_38650[(6)] = c__36903__auto___38652);

return statearr_38650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38666 = arguments.length;
switch (G__38666) {
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
var c__36903__auto___38732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38704){
var state_val_38705 = (state_38704[(1)]);
if((state_val_38705 === (7))){
var inst_38700 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38706_38733 = state_38704__$1;
(statearr_38706_38733[(2)] = inst_38700);

(statearr_38706_38733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (1))){
var inst_38667 = (new Array(n));
var inst_38668 = inst_38667;
var inst_38669 = (0);
var state_38704__$1 = (function (){var statearr_38707 = state_38704;
(statearr_38707[(7)] = inst_38669);

(statearr_38707[(8)] = inst_38668);

return statearr_38707;
})();
var statearr_38708_38734 = state_38704__$1;
(statearr_38708_38734[(2)] = null);

(statearr_38708_38734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (4))){
var inst_38672 = (state_38704[(9)]);
var inst_38672__$1 = (state_38704[(2)]);
var inst_38673 = (inst_38672__$1 == null);
var inst_38674 = cljs.core.not.call(null,inst_38673);
var state_38704__$1 = (function (){var statearr_38709 = state_38704;
(statearr_38709[(9)] = inst_38672__$1);

return statearr_38709;
})();
if(inst_38674){
var statearr_38710_38735 = state_38704__$1;
(statearr_38710_38735[(1)] = (5));

} else {
var statearr_38711_38736 = state_38704__$1;
(statearr_38711_38736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (15))){
var inst_38694 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38712_38737 = state_38704__$1;
(statearr_38712_38737[(2)] = inst_38694);

(statearr_38712_38737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (13))){
var state_38704__$1 = state_38704;
var statearr_38713_38738 = state_38704__$1;
(statearr_38713_38738[(2)] = null);

(statearr_38713_38738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (6))){
var inst_38669 = (state_38704[(7)]);
var inst_38690 = (inst_38669 > (0));
var state_38704__$1 = state_38704;
if(cljs.core.truth_(inst_38690)){
var statearr_38714_38739 = state_38704__$1;
(statearr_38714_38739[(1)] = (12));

} else {
var statearr_38715_38740 = state_38704__$1;
(statearr_38715_38740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (3))){
var inst_38702 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38704__$1,inst_38702);
} else {
if((state_val_38705 === (12))){
var inst_38668 = (state_38704[(8)]);
var inst_38692 = cljs.core.vec.call(null,inst_38668);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38704__$1,(15),out,inst_38692);
} else {
if((state_val_38705 === (2))){
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38704__$1,(4),ch);
} else {
if((state_val_38705 === (11))){
var inst_38684 = (state_38704[(2)]);
var inst_38685 = (new Array(n));
var inst_38668 = inst_38685;
var inst_38669 = (0);
var state_38704__$1 = (function (){var statearr_38716 = state_38704;
(statearr_38716[(7)] = inst_38669);

(statearr_38716[(8)] = inst_38668);

(statearr_38716[(10)] = inst_38684);

return statearr_38716;
})();
var statearr_38717_38741 = state_38704__$1;
(statearr_38717_38741[(2)] = null);

(statearr_38717_38741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (9))){
var inst_38668 = (state_38704[(8)]);
var inst_38682 = cljs.core.vec.call(null,inst_38668);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38704__$1,(11),out,inst_38682);
} else {
if((state_val_38705 === (5))){
var inst_38672 = (state_38704[(9)]);
var inst_38669 = (state_38704[(7)]);
var inst_38677 = (state_38704[(11)]);
var inst_38668 = (state_38704[(8)]);
var inst_38676 = (inst_38668[inst_38669] = inst_38672);
var inst_38677__$1 = (inst_38669 + (1));
var inst_38678 = (inst_38677__$1 < n);
var state_38704__$1 = (function (){var statearr_38718 = state_38704;
(statearr_38718[(12)] = inst_38676);

(statearr_38718[(11)] = inst_38677__$1);

return statearr_38718;
})();
if(cljs.core.truth_(inst_38678)){
var statearr_38719_38742 = state_38704__$1;
(statearr_38719_38742[(1)] = (8));

} else {
var statearr_38720_38743 = state_38704__$1;
(statearr_38720_38743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (14))){
var inst_38697 = (state_38704[(2)]);
var inst_38698 = cljs.core.async.close_BANG_.call(null,out);
var state_38704__$1 = (function (){var statearr_38722 = state_38704;
(statearr_38722[(13)] = inst_38697);

return statearr_38722;
})();
var statearr_38723_38744 = state_38704__$1;
(statearr_38723_38744[(2)] = inst_38698);

(statearr_38723_38744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (10))){
var inst_38688 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38724_38745 = state_38704__$1;
(statearr_38724_38745[(2)] = inst_38688);

(statearr_38724_38745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (8))){
var inst_38677 = (state_38704[(11)]);
var inst_38668 = (state_38704[(8)]);
var tmp38721 = inst_38668;
var inst_38668__$1 = tmp38721;
var inst_38669 = inst_38677;
var state_38704__$1 = (function (){var statearr_38725 = state_38704;
(statearr_38725[(7)] = inst_38669);

(statearr_38725[(8)] = inst_38668__$1);

return statearr_38725;
})();
var statearr_38726_38746 = state_38704__$1;
(statearr_38726_38746[(2)] = null);

(statearr_38726_38746[(1)] = (2));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38727[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38727[(1)] = (1));

return statearr_38727;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38704){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38728){if((e38728 instanceof Object)){
var ex__36812__auto__ = e38728;
var statearr_38729_38747 = state_38704;
(statearr_38729_38747[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38748 = state_38704;
state_38704 = G__38748;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38730 = f__36904__auto__.call(null);
(statearr_38730[(6)] = c__36903__auto___38732);

return statearr_38730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38750 = arguments.length;
switch (G__38750) {
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
var c__36903__auto___38820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_38792){
var state_val_38793 = (state_38792[(1)]);
if((state_val_38793 === (7))){
var inst_38788 = (state_38792[(2)]);
var state_38792__$1 = state_38792;
var statearr_38794_38821 = state_38792__$1;
(statearr_38794_38821[(2)] = inst_38788);

(statearr_38794_38821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (1))){
var inst_38751 = [];
var inst_38752 = inst_38751;
var inst_38753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38792__$1 = (function (){var statearr_38795 = state_38792;
(statearr_38795[(7)] = inst_38752);

(statearr_38795[(8)] = inst_38753);

return statearr_38795;
})();
var statearr_38796_38822 = state_38792__$1;
(statearr_38796_38822[(2)] = null);

(statearr_38796_38822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (4))){
var inst_38756 = (state_38792[(9)]);
var inst_38756__$1 = (state_38792[(2)]);
var inst_38757 = (inst_38756__$1 == null);
var inst_38758 = cljs.core.not.call(null,inst_38757);
var state_38792__$1 = (function (){var statearr_38797 = state_38792;
(statearr_38797[(9)] = inst_38756__$1);

return statearr_38797;
})();
if(inst_38758){
var statearr_38798_38823 = state_38792__$1;
(statearr_38798_38823[(1)] = (5));

} else {
var statearr_38799_38824 = state_38792__$1;
(statearr_38799_38824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (15))){
var inst_38782 = (state_38792[(2)]);
var state_38792__$1 = state_38792;
var statearr_38800_38825 = state_38792__$1;
(statearr_38800_38825[(2)] = inst_38782);

(statearr_38800_38825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (13))){
var state_38792__$1 = state_38792;
var statearr_38801_38826 = state_38792__$1;
(statearr_38801_38826[(2)] = null);

(statearr_38801_38826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (6))){
var inst_38752 = (state_38792[(7)]);
var inst_38777 = inst_38752.length;
var inst_38778 = (inst_38777 > (0));
var state_38792__$1 = state_38792;
if(cljs.core.truth_(inst_38778)){
var statearr_38802_38827 = state_38792__$1;
(statearr_38802_38827[(1)] = (12));

} else {
var statearr_38803_38828 = state_38792__$1;
(statearr_38803_38828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (3))){
var inst_38790 = (state_38792[(2)]);
var state_38792__$1 = state_38792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38792__$1,inst_38790);
} else {
if((state_val_38793 === (12))){
var inst_38752 = (state_38792[(7)]);
var inst_38780 = cljs.core.vec.call(null,inst_38752);
var state_38792__$1 = state_38792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38792__$1,(15),out,inst_38780);
} else {
if((state_val_38793 === (2))){
var state_38792__$1 = state_38792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38792__$1,(4),ch);
} else {
if((state_val_38793 === (11))){
var inst_38760 = (state_38792[(10)]);
var inst_38756 = (state_38792[(9)]);
var inst_38770 = (state_38792[(2)]);
var inst_38771 = [];
var inst_38772 = inst_38771.push(inst_38756);
var inst_38752 = inst_38771;
var inst_38753 = inst_38760;
var state_38792__$1 = (function (){var statearr_38804 = state_38792;
(statearr_38804[(11)] = inst_38772);

(statearr_38804[(12)] = inst_38770);

(statearr_38804[(7)] = inst_38752);

(statearr_38804[(8)] = inst_38753);

return statearr_38804;
})();
var statearr_38805_38829 = state_38792__$1;
(statearr_38805_38829[(2)] = null);

(statearr_38805_38829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (9))){
var inst_38752 = (state_38792[(7)]);
var inst_38768 = cljs.core.vec.call(null,inst_38752);
var state_38792__$1 = state_38792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38792__$1,(11),out,inst_38768);
} else {
if((state_val_38793 === (5))){
var inst_38760 = (state_38792[(10)]);
var inst_38756 = (state_38792[(9)]);
var inst_38753 = (state_38792[(8)]);
var inst_38760__$1 = f.call(null,inst_38756);
var inst_38761 = cljs.core._EQ_.call(null,inst_38760__$1,inst_38753);
var inst_38762 = cljs.core.keyword_identical_QMARK_.call(null,inst_38753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38763 = ((inst_38761) || (inst_38762));
var state_38792__$1 = (function (){var statearr_38806 = state_38792;
(statearr_38806[(10)] = inst_38760__$1);

return statearr_38806;
})();
if(cljs.core.truth_(inst_38763)){
var statearr_38807_38830 = state_38792__$1;
(statearr_38807_38830[(1)] = (8));

} else {
var statearr_38808_38831 = state_38792__$1;
(statearr_38808_38831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (14))){
var inst_38785 = (state_38792[(2)]);
var inst_38786 = cljs.core.async.close_BANG_.call(null,out);
var state_38792__$1 = (function (){var statearr_38810 = state_38792;
(statearr_38810[(13)] = inst_38785);

return statearr_38810;
})();
var statearr_38811_38832 = state_38792__$1;
(statearr_38811_38832[(2)] = inst_38786);

(statearr_38811_38832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (10))){
var inst_38775 = (state_38792[(2)]);
var state_38792__$1 = state_38792;
var statearr_38812_38833 = state_38792__$1;
(statearr_38812_38833[(2)] = inst_38775);

(statearr_38812_38833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38793 === (8))){
var inst_38760 = (state_38792[(10)]);
var inst_38756 = (state_38792[(9)]);
var inst_38752 = (state_38792[(7)]);
var inst_38765 = inst_38752.push(inst_38756);
var tmp38809 = inst_38752;
var inst_38752__$1 = tmp38809;
var inst_38753 = inst_38760;
var state_38792__$1 = (function (){var statearr_38813 = state_38792;
(statearr_38813[(7)] = inst_38752__$1);

(statearr_38813[(14)] = inst_38765);

(statearr_38813[(8)] = inst_38753);

return statearr_38813;
})();
var statearr_38814_38834 = state_38792__$1;
(statearr_38814_38834[(2)] = null);

(statearr_38814_38834[(1)] = (2));


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
var cljs$core$async$state_machine__36809__auto__ = null;
var cljs$core$async$state_machine__36809__auto____0 = (function (){
var statearr_38815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38815[(0)] = cljs$core$async$state_machine__36809__auto__);

(statearr_38815[(1)] = (1));

return statearr_38815;
});
var cljs$core$async$state_machine__36809__auto____1 = (function (state_38792){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_38792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e38816){if((e38816 instanceof Object)){
var ex__36812__auto__ = e38816;
var statearr_38817_38835 = state_38792;
(statearr_38817_38835[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38836 = state_38792;
state_38792 = G__38836;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
cljs$core$async$state_machine__36809__auto__ = function(state_38792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36809__auto____1.call(this,state_38792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36809__auto____0;
cljs$core$async$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36809__auto____1;
return cljs$core$async$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_38818 = f__36904__auto__.call(null);
(statearr_38818[(6)] = c__36903__auto___38820);

return statearr_38818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1618065937087
