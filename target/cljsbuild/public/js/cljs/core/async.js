// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__8961 = arguments.length;
switch (G__8961) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8962 = (function (f,blockable,meta8963){
this.f = f;
this.blockable = blockable;
this.meta8963 = meta8963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8964,meta8963__$1){
var self__ = this;
var _8964__$1 = this;
return (new cljs.core.async.t_cljs$core$async8962(self__.f,self__.blockable,meta8963__$1));
}));

(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8964){
var self__ = this;
var _8964__$1 = this;
return self__.meta8963;
}));

(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async8962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async8962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta8963], null);
}));

(cljs.core.async.t_cljs$core$async8962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8962");

(cljs.core.async.t_cljs$core$async8962.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8962.
 */
cljs.core.async.__GT_t_cljs$core$async8962 = (function cljs$core$async$__GT_t_cljs$core$async8962(f__$1,blockable__$1,meta8963){
return (new cljs.core.async.t_cljs$core$async8962(f__$1,blockable__$1,meta8963));
});

}

return (new cljs.core.async.t_cljs$core$async8962(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__8968 = arguments.length;
switch (G__8968) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__8971 = arguments.length;
switch (G__8971) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__8974 = arguments.length;
switch (G__8974) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_8976 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8976) : fn1.call(null,val_8976));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_8976) : fn1.call(null,val_8976));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__8978 = arguments.length;
switch (G__8978) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___8980 = n;
var x_8981 = (0);
while(true){
if((x_8981 < n__4613__auto___8980)){
(a[x_8981] = (0));

var G__8982 = (x_8981 + (1));
x_8981 = G__8982;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__8983 = (i + (1));
i = G__8983;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8984 = (function (flag,meta8985){
this.flag = flag;
this.meta8985 = meta8985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8986,meta8985__$1){
var self__ = this;
var _8986__$1 = this;
return (new cljs.core.async.t_cljs$core$async8984(self__.flag,meta8985__$1));
}));

(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8986){
var self__ = this;
var _8986__$1 = this;
return self__.meta8985;
}));

(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async8984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta8985], null);
}));

(cljs.core.async.t_cljs$core$async8984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8984");

(cljs.core.async.t_cljs$core$async8984.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8984.
 */
cljs.core.async.__GT_t_cljs$core$async8984 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8984(flag__$1,meta8985){
return (new cljs.core.async.t_cljs$core$async8984(flag__$1,meta8985));
});

}

return (new cljs.core.async.t_cljs$core$async8984(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8987 = (function (flag,cb,meta8988){
this.flag = flag;
this.cb = cb;
this.meta8988 = meta8988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8989,meta8988__$1){
var self__ = this;
var _8989__$1 = this;
return (new cljs.core.async.t_cljs$core$async8987(self__.flag,self__.cb,meta8988__$1));
}));

(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8989){
var self__ = this;
var _8989__$1 = this;
return self__.meta8988;
}));

(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async8987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async8987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta8988], null);
}));

(cljs.core.async.t_cljs$core$async8987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8987");

(cljs.core.async.t_cljs$core$async8987.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8987.
 */
cljs.core.async.__GT_t_cljs$core$async8987 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8987(flag__$1,cb__$1,meta8988){
return (new cljs.core.async.t_cljs$core$async8987(flag__$1,cb__$1,meta8988));
});

}

return (new cljs.core.async.t_cljs$core$async8987(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8990_SHARP_){
var G__8992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8990_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8992) : fret.call(null,G__8992));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8991_SHARP_){
var G__8993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8991_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8993) : fret.call(null,G__8993));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8994 = (i + (1));
i = G__8994;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4736__auto___9000 = arguments.length;
var i__4737__auto___9001 = (0);
while(true){
if((i__4737__auto___9001 < len__4736__auto___9000)){
args__4742__auto__.push((arguments[i__4737__auto___9001]));

var G__9002 = (i__4737__auto___9001 + (1));
i__4737__auto___9001 = G__9002;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8997){
var map__8998 = p__8997;
var map__8998__$1 = (((((!((map__8998 == null))))?(((((map__8998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8998):map__8998);
var opts = map__8998__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8995){
var G__8996 = cljs.core.first(seq8995);
var seq8995__$1 = cljs.core.next(seq8995);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8996,seq8995__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__9004 = arguments.length;
switch (G__9004) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8901__auto___9050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9028){
var state_val_9029 = (state_9028[(1)]);
if((state_val_9029 === (7))){
var inst_9024 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
var statearr_9030_9051 = state_9028__$1;
(statearr_9030_9051[(2)] = inst_9024);

(statearr_9030_9051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (1))){
var state_9028__$1 = state_9028;
var statearr_9031_9052 = state_9028__$1;
(statearr_9031_9052[(2)] = null);

(statearr_9031_9052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (4))){
var inst_9007 = (state_9028[(7)]);
var inst_9007__$1 = (state_9028[(2)]);
var inst_9008 = (inst_9007__$1 == null);
var state_9028__$1 = (function (){var statearr_9032 = state_9028;
(statearr_9032[(7)] = inst_9007__$1);

return statearr_9032;
})();
if(cljs.core.truth_(inst_9008)){
var statearr_9033_9053 = state_9028__$1;
(statearr_9033_9053[(1)] = (5));

} else {
var statearr_9034_9054 = state_9028__$1;
(statearr_9034_9054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (13))){
var state_9028__$1 = state_9028;
var statearr_9035_9055 = state_9028__$1;
(statearr_9035_9055[(2)] = null);

(statearr_9035_9055[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (6))){
var inst_9007 = (state_9028[(7)]);
var state_9028__$1 = state_9028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9028__$1,(11),to,inst_9007);
} else {
if((state_val_9029 === (3))){
var inst_9026 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9028__$1,inst_9026);
} else {
if((state_val_9029 === (12))){
var state_9028__$1 = state_9028;
var statearr_9036_9056 = state_9028__$1;
(statearr_9036_9056[(2)] = null);

(statearr_9036_9056[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (2))){
var state_9028__$1 = state_9028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9028__$1,(4),from);
} else {
if((state_val_9029 === (11))){
var inst_9017 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
if(cljs.core.truth_(inst_9017)){
var statearr_9037_9057 = state_9028__$1;
(statearr_9037_9057[(1)] = (12));

} else {
var statearr_9038_9058 = state_9028__$1;
(statearr_9038_9058[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (9))){
var state_9028__$1 = state_9028;
var statearr_9039_9059 = state_9028__$1;
(statearr_9039_9059[(2)] = null);

(statearr_9039_9059[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (5))){
var state_9028__$1 = state_9028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9040_9060 = state_9028__$1;
(statearr_9040_9060[(1)] = (8));

} else {
var statearr_9041_9061 = state_9028__$1;
(statearr_9041_9061[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (14))){
var inst_9022 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
var statearr_9042_9062 = state_9028__$1;
(statearr_9042_9062[(2)] = inst_9022);

(statearr_9042_9062[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (10))){
var inst_9014 = (state_9028[(2)]);
var state_9028__$1 = state_9028;
var statearr_9043_9063 = state_9028__$1;
(statearr_9043_9063[(2)] = inst_9014);

(statearr_9043_9063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9029 === (8))){
var inst_9011 = cljs.core.async.close_BANG_(to);
var state_9028__$1 = state_9028;
var statearr_9044_9064 = state_9028__$1;
(statearr_9044_9064[(2)] = inst_9011);

(statearr_9044_9064[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_9045 = [null,null,null,null,null,null,null,null];
(statearr_9045[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_9045[(1)] = (1));

return statearr_9045;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_9028){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9028);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9046){if((e9046 instanceof Object)){
var ex__8798__auto__ = e9046;
var statearr_9047_9065 = state_9028;
(statearr_9047_9065[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9028);

return cljs.core.cst$kw$recur;
} else {
throw e9046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9066 = state_9028;
state_9028 = G__9066;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_9028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_9028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9048 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9048[(6)] = c__8901__auto___9050);

return statearr_9048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__9067){
var vec__9068 = p__9067;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068,(1),null);
var job = vec__9068;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8901__auto___9239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9075){
var state_val_9076 = (state_9075[(1)]);
if((state_val_9076 === (1))){
var state_9075__$1 = state_9075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9075__$1,(2),res,v);
} else {
if((state_val_9076 === (2))){
var inst_9072 = (state_9075[(2)]);
var inst_9073 = cljs.core.async.close_BANG_(res);
var state_9075__$1 = (function (){var statearr_9077 = state_9075;
(statearr_9077[(7)] = inst_9072);

return statearr_9077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9075__$1,inst_9073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_9078 = [null,null,null,null,null,null,null,null];
(statearr_9078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__);

(statearr_9078[(1)] = (1));

return statearr_9078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1 = (function (state_9075){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9075);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9079){if((e9079 instanceof Object)){
var ex__8798__auto__ = e9079;
var statearr_9080_9240 = state_9075;
(statearr_9080_9240[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9075);

return cljs.core.cst$kw$recur;
} else {
throw e9079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9241 = state_9075;
state_9075 = G__9241;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = function(state_9075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1.call(this,state_9075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9081 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9081[(6)] = c__8901__auto___9239);

return statearr_9081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__9082){
var vec__9083 = p__9082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9083,(1),null);
var job = vec__9083;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___9242 = n;
var __9243 = (0);
while(true){
if((__9243 < n__4613__auto___9242)){
var G__9086_9244 = type;
var G__9086_9245__$1 = (((G__9086_9244 instanceof cljs.core.Keyword))?G__9086_9244.fqn:null);
switch (G__9086_9245__$1) {
case "compute":
var c__8901__auto___9247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9243,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = ((function (__9243,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function (state_9099){
var state_val_9100 = (state_9099[(1)]);
if((state_val_9100 === (1))){
var state_9099__$1 = state_9099;
var statearr_9101_9248 = state_9099__$1;
(statearr_9101_9248[(2)] = null);

(statearr_9101_9248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9100 === (2))){
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9099__$1,(4),jobs);
} else {
if((state_val_9100 === (3))){
var inst_9097 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9099__$1,inst_9097);
} else {
if((state_val_9100 === (4))){
var inst_9089 = (state_9099[(2)]);
var inst_9090 = process(inst_9089);
var state_9099__$1 = state_9099;
if(cljs.core.truth_(inst_9090)){
var statearr_9102_9249 = state_9099__$1;
(statearr_9102_9249[(1)] = (5));

} else {
var statearr_9103_9250 = state_9099__$1;
(statearr_9103_9250[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9100 === (5))){
var state_9099__$1 = state_9099;
var statearr_9104_9251 = state_9099__$1;
(statearr_9104_9251[(2)] = null);

(statearr_9104_9251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9100 === (6))){
var state_9099__$1 = state_9099;
var statearr_9105_9252 = state_9099__$1;
(statearr_9105_9252[(2)] = null);

(statearr_9105_9252[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9100 === (7))){
var inst_9095 = (state_9099[(2)]);
var state_9099__$1 = state_9099;
var statearr_9106_9253 = state_9099__$1;
(statearr_9106_9253[(2)] = inst_9095);

(statearr_9106_9253[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__9243,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
;
return ((function (__9243,switch__8794__auto__,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_9107 = [null,null,null,null,null,null,null];
(statearr_9107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__);

(statearr_9107[(1)] = (1));

return statearr_9107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1 = (function (state_9099){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9099);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9108){if((e9108 instanceof Object)){
var ex__8798__auto__ = e9108;
var statearr_9109_9254 = state_9099;
(statearr_9109_9254[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9099);

return cljs.core.cst$kw$recur;
} else {
throw e9108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9255 = state_9099;
state_9099 = G__9255;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = function(state_9099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1.call(this,state_9099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__;
})()
;})(__9243,switch__8794__auto__,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
})();
var state__8903__auto__ = (function (){var statearr_9110 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9110[(6)] = c__8901__auto___9247);

return statearr_9110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
});})(__9243,c__8901__auto___9247,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
);


break;
case "async":
var c__8901__auto___9256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9243,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = ((function (__9243,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function (state_9123){
var state_val_9124 = (state_9123[(1)]);
if((state_val_9124 === (1))){
var state_9123__$1 = state_9123;
var statearr_9125_9257 = state_9123__$1;
(statearr_9125_9257[(2)] = null);

(statearr_9125_9257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9124 === (2))){
var state_9123__$1 = state_9123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9123__$1,(4),jobs);
} else {
if((state_val_9124 === (3))){
var inst_9121 = (state_9123[(2)]);
var state_9123__$1 = state_9123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9123__$1,inst_9121);
} else {
if((state_val_9124 === (4))){
var inst_9113 = (state_9123[(2)]);
var inst_9114 = async(inst_9113);
var state_9123__$1 = state_9123;
if(cljs.core.truth_(inst_9114)){
var statearr_9126_9258 = state_9123__$1;
(statearr_9126_9258[(1)] = (5));

} else {
var statearr_9127_9259 = state_9123__$1;
(statearr_9127_9259[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9124 === (5))){
var state_9123__$1 = state_9123;
var statearr_9128_9260 = state_9123__$1;
(statearr_9128_9260[(2)] = null);

(statearr_9128_9260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9124 === (6))){
var state_9123__$1 = state_9123;
var statearr_9129_9261 = state_9123__$1;
(statearr_9129_9261[(2)] = null);

(statearr_9129_9261[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9124 === (7))){
var inst_9119 = (state_9123[(2)]);
var state_9123__$1 = state_9123;
var statearr_9130_9262 = state_9123__$1;
(statearr_9130_9262[(2)] = inst_9119);

(statearr_9130_9262[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__9243,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
;
return ((function (__9243,switch__8794__auto__,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_9131 = [null,null,null,null,null,null,null];
(statearr_9131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__);

(statearr_9131[(1)] = (1));

return statearr_9131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1 = (function (state_9123){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9123);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9132){if((e9132 instanceof Object)){
var ex__8798__auto__ = e9132;
var statearr_9133_9263 = state_9123;
(statearr_9133_9263[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9123);

return cljs.core.cst$kw$recur;
} else {
throw e9132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9264 = state_9123;
state_9123 = G__9264;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = function(state_9123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1.call(this,state_9123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__;
})()
;})(__9243,switch__8794__auto__,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
})();
var state__8903__auto__ = (function (){var statearr_9134 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9134[(6)] = c__8901__auto___9256);

return statearr_9134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
});})(__9243,c__8901__auto___9256,G__9086_9244,G__9086_9245__$1,n__4613__auto___9242,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9086_9245__$1)].join('')));

}

var G__9265 = (__9243 + (1));
__9243 = G__9265;
continue;
} else {
}
break;
}

var c__8901__auto___9266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9156){
var state_val_9157 = (state_9156[(1)]);
if((state_val_9157 === (7))){
var inst_9152 = (state_9156[(2)]);
var state_9156__$1 = state_9156;
var statearr_9158_9267 = state_9156__$1;
(statearr_9158_9267[(2)] = inst_9152);

(statearr_9158_9267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9157 === (1))){
var state_9156__$1 = state_9156;
var statearr_9159_9268 = state_9156__$1;
(statearr_9159_9268[(2)] = null);

(statearr_9159_9268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9157 === (4))){
var inst_9137 = (state_9156[(7)]);
var inst_9137__$1 = (state_9156[(2)]);
var inst_9138 = (inst_9137__$1 == null);
var state_9156__$1 = (function (){var statearr_9160 = state_9156;
(statearr_9160[(7)] = inst_9137__$1);

return statearr_9160;
})();
if(cljs.core.truth_(inst_9138)){
var statearr_9161_9269 = state_9156__$1;
(statearr_9161_9269[(1)] = (5));

} else {
var statearr_9162_9270 = state_9156__$1;
(statearr_9162_9270[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9157 === (6))){
var inst_9137 = (state_9156[(7)]);
var inst_9142 = (state_9156[(8)]);
var inst_9142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9144 = [inst_9137,inst_9142__$1];
var inst_9145 = (new cljs.core.PersistentVector(null,2,(5),inst_9143,inst_9144,null));
var state_9156__$1 = (function (){var statearr_9163 = state_9156;
(statearr_9163[(8)] = inst_9142__$1);

return statearr_9163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9156__$1,(8),jobs,inst_9145);
} else {
if((state_val_9157 === (3))){
var inst_9154 = (state_9156[(2)]);
var state_9156__$1 = state_9156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9156__$1,inst_9154);
} else {
if((state_val_9157 === (2))){
var state_9156__$1 = state_9156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9156__$1,(4),from);
} else {
if((state_val_9157 === (9))){
var inst_9149 = (state_9156[(2)]);
var state_9156__$1 = (function (){var statearr_9164 = state_9156;
(statearr_9164[(9)] = inst_9149);

return statearr_9164;
})();
var statearr_9165_9271 = state_9156__$1;
(statearr_9165_9271[(2)] = null);

(statearr_9165_9271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9157 === (5))){
var inst_9140 = cljs.core.async.close_BANG_(jobs);
var state_9156__$1 = state_9156;
var statearr_9166_9272 = state_9156__$1;
(statearr_9166_9272[(2)] = inst_9140);

(statearr_9166_9272[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9157 === (8))){
var inst_9142 = (state_9156[(8)]);
var inst_9147 = (state_9156[(2)]);
var state_9156__$1 = (function (){var statearr_9167 = state_9156;
(statearr_9167[(10)] = inst_9147);

return statearr_9167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9156__$1,(9),results,inst_9142);
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
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_9168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__);

(statearr_9168[(1)] = (1));

return statearr_9168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1 = (function (state_9156){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9156);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9169){if((e9169 instanceof Object)){
var ex__8798__auto__ = e9169;
var statearr_9170_9273 = state_9156;
(statearr_9170_9273[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9156);

return cljs.core.cst$kw$recur;
} else {
throw e9169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9274 = state_9156;
state_9156 = G__9274;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = function(state_9156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1.call(this,state_9156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9171 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9171[(6)] = c__8901__auto___9266);

return statearr_9171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


var c__8901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9209){
var state_val_9210 = (state_9209[(1)]);
if((state_val_9210 === (7))){
var inst_9205 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
var statearr_9211_9275 = state_9209__$1;
(statearr_9211_9275[(2)] = inst_9205);

(statearr_9211_9275[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (20))){
var state_9209__$1 = state_9209;
var statearr_9212_9276 = state_9209__$1;
(statearr_9212_9276[(2)] = null);

(statearr_9212_9276[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (1))){
var state_9209__$1 = state_9209;
var statearr_9213_9277 = state_9209__$1;
(statearr_9213_9277[(2)] = null);

(statearr_9213_9277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (4))){
var inst_9174 = (state_9209[(7)]);
var inst_9174__$1 = (state_9209[(2)]);
var inst_9175 = (inst_9174__$1 == null);
var state_9209__$1 = (function (){var statearr_9214 = state_9209;
(statearr_9214[(7)] = inst_9174__$1);

return statearr_9214;
})();
if(cljs.core.truth_(inst_9175)){
var statearr_9215_9278 = state_9209__$1;
(statearr_9215_9278[(1)] = (5));

} else {
var statearr_9216_9279 = state_9209__$1;
(statearr_9216_9279[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (15))){
var inst_9187 = (state_9209[(8)]);
var state_9209__$1 = state_9209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9209__$1,(18),to,inst_9187);
} else {
if((state_val_9210 === (21))){
var inst_9200 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
var statearr_9217_9280 = state_9209__$1;
(statearr_9217_9280[(2)] = inst_9200);

(statearr_9217_9280[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (13))){
var inst_9202 = (state_9209[(2)]);
var state_9209__$1 = (function (){var statearr_9218 = state_9209;
(statearr_9218[(9)] = inst_9202);

return statearr_9218;
})();
var statearr_9219_9281 = state_9209__$1;
(statearr_9219_9281[(2)] = null);

(statearr_9219_9281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (6))){
var inst_9174 = (state_9209[(7)]);
var state_9209__$1 = state_9209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9209__$1,(11),inst_9174);
} else {
if((state_val_9210 === (17))){
var inst_9195 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
if(cljs.core.truth_(inst_9195)){
var statearr_9220_9282 = state_9209__$1;
(statearr_9220_9282[(1)] = (19));

} else {
var statearr_9221_9283 = state_9209__$1;
(statearr_9221_9283[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (3))){
var inst_9207 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9209__$1,inst_9207);
} else {
if((state_val_9210 === (12))){
var inst_9184 = (state_9209[(10)]);
var state_9209__$1 = state_9209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9209__$1,(14),inst_9184);
} else {
if((state_val_9210 === (2))){
var state_9209__$1 = state_9209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9209__$1,(4),results);
} else {
if((state_val_9210 === (19))){
var state_9209__$1 = state_9209;
var statearr_9222_9284 = state_9209__$1;
(statearr_9222_9284[(2)] = null);

(statearr_9222_9284[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (11))){
var inst_9184 = (state_9209[(2)]);
var state_9209__$1 = (function (){var statearr_9223 = state_9209;
(statearr_9223[(10)] = inst_9184);

return statearr_9223;
})();
var statearr_9224_9285 = state_9209__$1;
(statearr_9224_9285[(2)] = null);

(statearr_9224_9285[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (9))){
var state_9209__$1 = state_9209;
var statearr_9225_9286 = state_9209__$1;
(statearr_9225_9286[(2)] = null);

(statearr_9225_9286[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (5))){
var state_9209__$1 = state_9209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9226_9287 = state_9209__$1;
(statearr_9226_9287[(1)] = (8));

} else {
var statearr_9227_9288 = state_9209__$1;
(statearr_9227_9288[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (14))){
var inst_9187 = (state_9209[(8)]);
var inst_9187__$1 = (state_9209[(2)]);
var inst_9188 = (inst_9187__$1 == null);
var inst_9189 = cljs.core.not(inst_9188);
var state_9209__$1 = (function (){var statearr_9228 = state_9209;
(statearr_9228[(8)] = inst_9187__$1);

return statearr_9228;
})();
if(inst_9189){
var statearr_9229_9289 = state_9209__$1;
(statearr_9229_9289[(1)] = (15));

} else {
var statearr_9230_9290 = state_9209__$1;
(statearr_9230_9290[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (16))){
var state_9209__$1 = state_9209;
var statearr_9231_9291 = state_9209__$1;
(statearr_9231_9291[(2)] = false);

(statearr_9231_9291[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (10))){
var inst_9181 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
var statearr_9232_9292 = state_9209__$1;
(statearr_9232_9292[(2)] = inst_9181);

(statearr_9232_9292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (18))){
var inst_9192 = (state_9209[(2)]);
var state_9209__$1 = state_9209;
var statearr_9233_9293 = state_9209__$1;
(statearr_9233_9293[(2)] = inst_9192);

(statearr_9233_9293[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9210 === (8))){
var inst_9178 = cljs.core.async.close_BANG_(to);
var state_9209__$1 = state_9209;
var statearr_9234_9294 = state_9209__$1;
(statearr_9234_9294[(2)] = inst_9178);

(statearr_9234_9294[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_9235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__);

(statearr_9235[(1)] = (1));

return statearr_9235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1 = (function (state_9209){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9209);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9236){if((e9236 instanceof Object)){
var ex__8798__auto__ = e9236;
var statearr_9237_9295 = state_9209;
(statearr_9237_9295[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9209);

return cljs.core.cst$kw$recur;
} else {
throw e9236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9296 = state_9209;
state_9209 = G__9296;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__ = function(state_9209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1.call(this,state_9209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9238 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9238[(6)] = c__8901__auto__);

return statearr_9238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));

return c__8901__auto__;
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
var G__9298 = arguments.length;
switch (G__9298) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__9301 = arguments.length;
switch (G__9301) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__9304 = arguments.length;
switch (G__9304) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8901__auto___9353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9330){
var state_val_9331 = (state_9330[(1)]);
if((state_val_9331 === (7))){
var inst_9326 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
var statearr_9332_9354 = state_9330__$1;
(statearr_9332_9354[(2)] = inst_9326);

(statearr_9332_9354[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (1))){
var state_9330__$1 = state_9330;
var statearr_9333_9355 = state_9330__$1;
(statearr_9333_9355[(2)] = null);

(statearr_9333_9355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (4))){
var inst_9307 = (state_9330[(7)]);
var inst_9307__$1 = (state_9330[(2)]);
var inst_9308 = (inst_9307__$1 == null);
var state_9330__$1 = (function (){var statearr_9334 = state_9330;
(statearr_9334[(7)] = inst_9307__$1);

return statearr_9334;
})();
if(cljs.core.truth_(inst_9308)){
var statearr_9335_9356 = state_9330__$1;
(statearr_9335_9356[(1)] = (5));

} else {
var statearr_9336_9357 = state_9330__$1;
(statearr_9336_9357[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (13))){
var state_9330__$1 = state_9330;
var statearr_9337_9358 = state_9330__$1;
(statearr_9337_9358[(2)] = null);

(statearr_9337_9358[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (6))){
var inst_9307 = (state_9330[(7)]);
var inst_9313 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9307) : p.call(null,inst_9307));
var state_9330__$1 = state_9330;
if(cljs.core.truth_(inst_9313)){
var statearr_9338_9359 = state_9330__$1;
(statearr_9338_9359[(1)] = (9));

} else {
var statearr_9339_9360 = state_9330__$1;
(statearr_9339_9360[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (3))){
var inst_9328 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9330__$1,inst_9328);
} else {
if((state_val_9331 === (12))){
var state_9330__$1 = state_9330;
var statearr_9340_9361 = state_9330__$1;
(statearr_9340_9361[(2)] = null);

(statearr_9340_9361[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (2))){
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9330__$1,(4),ch);
} else {
if((state_val_9331 === (11))){
var inst_9307 = (state_9330[(7)]);
var inst_9317 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9330__$1,(8),inst_9317,inst_9307);
} else {
if((state_val_9331 === (9))){
var state_9330__$1 = state_9330;
var statearr_9341_9362 = state_9330__$1;
(statearr_9341_9362[(2)] = tc);

(statearr_9341_9362[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (5))){
var inst_9310 = cljs.core.async.close_BANG_(tc);
var inst_9311 = cljs.core.async.close_BANG_(fc);
var state_9330__$1 = (function (){var statearr_9342 = state_9330;
(statearr_9342[(8)] = inst_9310);

return statearr_9342;
})();
var statearr_9343_9363 = state_9330__$1;
(statearr_9343_9363[(2)] = inst_9311);

(statearr_9343_9363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (14))){
var inst_9324 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
var statearr_9344_9364 = state_9330__$1;
(statearr_9344_9364[(2)] = inst_9324);

(statearr_9344_9364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (10))){
var state_9330__$1 = state_9330;
var statearr_9345_9365 = state_9330__$1;
(statearr_9345_9365[(2)] = fc);

(statearr_9345_9365[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9331 === (8))){
var inst_9319 = (state_9330[(2)]);
var state_9330__$1 = state_9330;
if(cljs.core.truth_(inst_9319)){
var statearr_9346_9366 = state_9330__$1;
(statearr_9346_9366[(1)] = (12));

} else {
var statearr_9347_9367 = state_9330__$1;
(statearr_9347_9367[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_9348 = [null,null,null,null,null,null,null,null,null];
(statearr_9348[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_9348[(1)] = (1));

return statearr_9348;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_9330){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9330);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9349){if((e9349 instanceof Object)){
var ex__8798__auto__ = e9349;
var statearr_9350_9368 = state_9330;
(statearr_9350_9368[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9330);

return cljs.core.cst$kw$recur;
} else {
throw e9349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9369 = state_9330;
state_9330 = G__9369;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_9330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_9330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9351 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9351[(6)] = c__8901__auto___9353);

return statearr_9351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
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
var c__8901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9390){
var state_val_9391 = (state_9390[(1)]);
if((state_val_9391 === (7))){
var inst_9386 = (state_9390[(2)]);
var state_9390__$1 = state_9390;
var statearr_9392_9410 = state_9390__$1;
(statearr_9392_9410[(2)] = inst_9386);

(statearr_9392_9410[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (1))){
var inst_9370 = init;
var state_9390__$1 = (function (){var statearr_9393 = state_9390;
(statearr_9393[(7)] = inst_9370);

return statearr_9393;
})();
var statearr_9394_9411 = state_9390__$1;
(statearr_9394_9411[(2)] = null);

(statearr_9394_9411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (4))){
var inst_9373 = (state_9390[(8)]);
var inst_9373__$1 = (state_9390[(2)]);
var inst_9374 = (inst_9373__$1 == null);
var state_9390__$1 = (function (){var statearr_9395 = state_9390;
(statearr_9395[(8)] = inst_9373__$1);

return statearr_9395;
})();
if(cljs.core.truth_(inst_9374)){
var statearr_9396_9412 = state_9390__$1;
(statearr_9396_9412[(1)] = (5));

} else {
var statearr_9397_9413 = state_9390__$1;
(statearr_9397_9413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (6))){
var inst_9377 = (state_9390[(9)]);
var inst_9373 = (state_9390[(8)]);
var inst_9370 = (state_9390[(7)]);
var inst_9377__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_9370,inst_9373) : f.call(null,inst_9370,inst_9373));
var inst_9378 = cljs.core.reduced_QMARK_(inst_9377__$1);
var state_9390__$1 = (function (){var statearr_9398 = state_9390;
(statearr_9398[(9)] = inst_9377__$1);

return statearr_9398;
})();
if(inst_9378){
var statearr_9399_9414 = state_9390__$1;
(statearr_9399_9414[(1)] = (8));

} else {
var statearr_9400_9415 = state_9390__$1;
(statearr_9400_9415[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (3))){
var inst_9388 = (state_9390[(2)]);
var state_9390__$1 = state_9390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9390__$1,inst_9388);
} else {
if((state_val_9391 === (2))){
var state_9390__$1 = state_9390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9390__$1,(4),ch);
} else {
if((state_val_9391 === (9))){
var inst_9377 = (state_9390[(9)]);
var inst_9370 = inst_9377;
var state_9390__$1 = (function (){var statearr_9401 = state_9390;
(statearr_9401[(7)] = inst_9370);

return statearr_9401;
})();
var statearr_9402_9416 = state_9390__$1;
(statearr_9402_9416[(2)] = null);

(statearr_9402_9416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (5))){
var inst_9370 = (state_9390[(7)]);
var state_9390__$1 = state_9390;
var statearr_9403_9417 = state_9390__$1;
(statearr_9403_9417[(2)] = inst_9370);

(statearr_9403_9417[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (10))){
var inst_9384 = (state_9390[(2)]);
var state_9390__$1 = state_9390;
var statearr_9404_9418 = state_9390__$1;
(statearr_9404_9418[(2)] = inst_9384);

(statearr_9404_9418[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9391 === (8))){
var inst_9377 = (state_9390[(9)]);
var inst_9380 = cljs.core.deref(inst_9377);
var state_9390__$1 = state_9390;
var statearr_9405_9419 = state_9390__$1;
(statearr_9405_9419[(2)] = inst_9380);

(statearr_9405_9419[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__8795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8795__auto____0 = (function (){
var statearr_9406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9406[(0)] = cljs$core$async$reduce_$_state_machine__8795__auto__);

(statearr_9406[(1)] = (1));

return statearr_9406;
});
var cljs$core$async$reduce_$_state_machine__8795__auto____1 = (function (state_9390){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9390);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9407){if((e9407 instanceof Object)){
var ex__8798__auto__ = e9407;
var statearr_9408_9420 = state_9390;
(statearr_9408_9420[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9390);

return cljs.core.cst$kw$recur;
} else {
throw e9407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9421 = state_9390;
state_9390 = G__9421;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8795__auto__ = function(state_9390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8795__auto____1.call(this,state_9390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8795__auto____0;
cljs$core$async$reduce_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8795__auto____1;
return cljs$core$async$reduce_$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9409 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9409[(6)] = c__8901__auto__);

return statearr_9409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));

return c__8901__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__8901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9427){
var state_val_9428 = (state_9427[(1)]);
if((state_val_9428 === (1))){
var inst_9422 = cljs.core.async.reduce(f__$1,init,ch);
var state_9427__$1 = state_9427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9427__$1,(2),inst_9422);
} else {
if((state_val_9428 === (2))){
var inst_9424 = (state_9427[(2)]);
var inst_9425 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_9424) : f__$1.call(null,inst_9424));
var state_9427__$1 = state_9427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9427__$1,inst_9425);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__8795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__8795__auto____0 = (function (){
var statearr_9429 = [null,null,null,null,null,null,null];
(statearr_9429[(0)] = cljs$core$async$transduce_$_state_machine__8795__auto__);

(statearr_9429[(1)] = (1));

return statearr_9429;
});
var cljs$core$async$transduce_$_state_machine__8795__auto____1 = (function (state_9427){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9427);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9430){if((e9430 instanceof Object)){
var ex__8798__auto__ = e9430;
var statearr_9431_9433 = state_9427;
(statearr_9431_9433[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9427);

return cljs.core.cst$kw$recur;
} else {
throw e9430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9434 = state_9427;
state_9427 = G__9434;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__8795__auto__ = function(state_9427){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__8795__auto____1.call(this,state_9427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__8795__auto____0;
cljs$core$async$transduce_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__8795__auto____1;
return cljs$core$async$transduce_$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9432 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9432[(6)] = c__8901__auto__);

return statearr_9432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));

return c__8901__auto__;
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
var G__9436 = arguments.length;
switch (G__9436) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9461){
var state_val_9462 = (state_9461[(1)]);
if((state_val_9462 === (7))){
var inst_9443 = (state_9461[(2)]);
var state_9461__$1 = state_9461;
var statearr_9463_9484 = state_9461__$1;
(statearr_9463_9484[(2)] = inst_9443);

(statearr_9463_9484[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (1))){
var inst_9437 = cljs.core.seq(coll);
var inst_9438 = inst_9437;
var state_9461__$1 = (function (){var statearr_9464 = state_9461;
(statearr_9464[(7)] = inst_9438);

return statearr_9464;
})();
var statearr_9465_9485 = state_9461__$1;
(statearr_9465_9485[(2)] = null);

(statearr_9465_9485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (4))){
var inst_9438 = (state_9461[(7)]);
var inst_9441 = cljs.core.first(inst_9438);
var state_9461__$1 = state_9461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9461__$1,(7),ch,inst_9441);
} else {
if((state_val_9462 === (13))){
var inst_9455 = (state_9461[(2)]);
var state_9461__$1 = state_9461;
var statearr_9466_9486 = state_9461__$1;
(statearr_9466_9486[(2)] = inst_9455);

(statearr_9466_9486[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (6))){
var inst_9446 = (state_9461[(2)]);
var state_9461__$1 = state_9461;
if(cljs.core.truth_(inst_9446)){
var statearr_9467_9487 = state_9461__$1;
(statearr_9467_9487[(1)] = (8));

} else {
var statearr_9468_9488 = state_9461__$1;
(statearr_9468_9488[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (3))){
var inst_9459 = (state_9461[(2)]);
var state_9461__$1 = state_9461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9461__$1,inst_9459);
} else {
if((state_val_9462 === (12))){
var state_9461__$1 = state_9461;
var statearr_9469_9489 = state_9461__$1;
(statearr_9469_9489[(2)] = null);

(statearr_9469_9489[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (2))){
var inst_9438 = (state_9461[(7)]);
var state_9461__$1 = state_9461;
if(cljs.core.truth_(inst_9438)){
var statearr_9470_9490 = state_9461__$1;
(statearr_9470_9490[(1)] = (4));

} else {
var statearr_9471_9491 = state_9461__$1;
(statearr_9471_9491[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (11))){
var inst_9452 = cljs.core.async.close_BANG_(ch);
var state_9461__$1 = state_9461;
var statearr_9472_9492 = state_9461__$1;
(statearr_9472_9492[(2)] = inst_9452);

(statearr_9472_9492[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (9))){
var state_9461__$1 = state_9461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9473_9493 = state_9461__$1;
(statearr_9473_9493[(1)] = (11));

} else {
var statearr_9474_9494 = state_9461__$1;
(statearr_9474_9494[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (5))){
var inst_9438 = (state_9461[(7)]);
var state_9461__$1 = state_9461;
var statearr_9475_9495 = state_9461__$1;
(statearr_9475_9495[(2)] = inst_9438);

(statearr_9475_9495[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (10))){
var inst_9457 = (state_9461[(2)]);
var state_9461__$1 = state_9461;
var statearr_9476_9496 = state_9461__$1;
(statearr_9476_9496[(2)] = inst_9457);

(statearr_9476_9496[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9462 === (8))){
var inst_9438 = (state_9461[(7)]);
var inst_9448 = cljs.core.next(inst_9438);
var inst_9438__$1 = inst_9448;
var state_9461__$1 = (function (){var statearr_9477 = state_9461;
(statearr_9477[(7)] = inst_9438__$1);

return statearr_9477;
})();
var statearr_9478_9497 = state_9461__$1;
(statearr_9478_9497[(2)] = null);

(statearr_9478_9497[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_9479 = [null,null,null,null,null,null,null,null];
(statearr_9479[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_9479[(1)] = (1));

return statearr_9479;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_9461){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9461);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9480){if((e9480 instanceof Object)){
var ex__8798__auto__ = e9480;
var statearr_9481_9498 = state_9461;
(statearr_9481_9498[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9461);

return cljs.core.cst$kw$recur;
} else {
throw e9480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9499 = state_9461;
state_9461 = G__9499;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_9461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_9461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9482 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9482[(6)] = c__8901__auto__);

return statearr_9482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));

return c__8901__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_9500 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_9500(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_9501 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_9501(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_9502 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_9502(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_9503 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_9503(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9504 = (function (ch,cs,meta9505){
this.ch = ch;
this.cs = cs;
this.meta9505 = meta9505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9506,meta9505__$1){
var self__ = this;
var _9506__$1 = this;
return (new cljs.core.async.t_cljs$core$async9504(self__.ch,self__.cs,meta9505__$1));
}));

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9506){
var self__ = this;
var _9506__$1 = this;
return self__.meta9505;
}));

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async9504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async9504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta9505], null);
}));

(cljs.core.async.t_cljs$core$async9504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9504");

(cljs.core.async.t_cljs$core$async9504.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9504.
 */
cljs.core.async.__GT_t_cljs$core$async9504 = (function cljs$core$async$mult_$___GT_t_cljs$core$async9504(ch__$1,cs__$1,meta9505){
return (new cljs.core.async.t_cljs$core$async9504(ch__$1,cs__$1,meta9505));
});

}

return (new cljs.core.async.t_cljs$core$async9504(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__8901__auto___9726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9641){
var state_val_9642 = (state_9641[(1)]);
if((state_val_9642 === (7))){
var inst_9637 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9643_9727 = state_9641__$1;
(statearr_9643_9727[(2)] = inst_9637);

(statearr_9643_9727[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (20))){
var inst_9540 = (state_9641[(7)]);
var inst_9552 = cljs.core.first(inst_9540);
var inst_9553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9552,(0),null);
var inst_9554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9552,(1),null);
var state_9641__$1 = (function (){var statearr_9644 = state_9641;
(statearr_9644[(8)] = inst_9553);

return statearr_9644;
})();
if(cljs.core.truth_(inst_9554)){
var statearr_9645_9728 = state_9641__$1;
(statearr_9645_9728[(1)] = (22));

} else {
var statearr_9646_9729 = state_9641__$1;
(statearr_9646_9729[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (27))){
var inst_9509 = (state_9641[(9)]);
var inst_9582 = (state_9641[(10)]);
var inst_9589 = (state_9641[(11)]);
var inst_9584 = (state_9641[(12)]);
var inst_9589__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9582,inst_9584);
var inst_9590 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9589__$1,inst_9509,done);
var state_9641__$1 = (function (){var statearr_9647 = state_9641;
(statearr_9647[(11)] = inst_9589__$1);

return statearr_9647;
})();
if(cljs.core.truth_(inst_9590)){
var statearr_9648_9730 = state_9641__$1;
(statearr_9648_9730[(1)] = (30));

} else {
var statearr_9649_9731 = state_9641__$1;
(statearr_9649_9731[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (1))){
var state_9641__$1 = state_9641;
var statearr_9650_9732 = state_9641__$1;
(statearr_9650_9732[(2)] = null);

(statearr_9650_9732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (24))){
var inst_9540 = (state_9641[(7)]);
var inst_9559 = (state_9641[(2)]);
var inst_9560 = cljs.core.next(inst_9540);
var inst_9518 = inst_9560;
var inst_9519 = null;
var inst_9520 = (0);
var inst_9521 = (0);
var state_9641__$1 = (function (){var statearr_9651 = state_9641;
(statearr_9651[(13)] = inst_9559);

(statearr_9651[(14)] = inst_9519);

(statearr_9651[(15)] = inst_9520);

(statearr_9651[(16)] = inst_9518);

(statearr_9651[(17)] = inst_9521);

return statearr_9651;
})();
var statearr_9652_9733 = state_9641__$1;
(statearr_9652_9733[(2)] = null);

(statearr_9652_9733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (39))){
var state_9641__$1 = state_9641;
var statearr_9656_9734 = state_9641__$1;
(statearr_9656_9734[(2)] = null);

(statearr_9656_9734[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (4))){
var inst_9509 = (state_9641[(9)]);
var inst_9509__$1 = (state_9641[(2)]);
var inst_9510 = (inst_9509__$1 == null);
var state_9641__$1 = (function (){var statearr_9657 = state_9641;
(statearr_9657[(9)] = inst_9509__$1);

return statearr_9657;
})();
if(cljs.core.truth_(inst_9510)){
var statearr_9658_9735 = state_9641__$1;
(statearr_9658_9735[(1)] = (5));

} else {
var statearr_9659_9736 = state_9641__$1;
(statearr_9659_9736[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (15))){
var inst_9519 = (state_9641[(14)]);
var inst_9520 = (state_9641[(15)]);
var inst_9518 = (state_9641[(16)]);
var inst_9521 = (state_9641[(17)]);
var inst_9536 = (state_9641[(2)]);
var inst_9537 = (inst_9521 + (1));
var tmp9653 = inst_9519;
var tmp9654 = inst_9520;
var tmp9655 = inst_9518;
var inst_9518__$1 = tmp9655;
var inst_9519__$1 = tmp9653;
var inst_9520__$1 = tmp9654;
var inst_9521__$1 = inst_9537;
var state_9641__$1 = (function (){var statearr_9660 = state_9641;
(statearr_9660[(14)] = inst_9519__$1);

(statearr_9660[(15)] = inst_9520__$1);

(statearr_9660[(18)] = inst_9536);

(statearr_9660[(16)] = inst_9518__$1);

(statearr_9660[(17)] = inst_9521__$1);

return statearr_9660;
})();
var statearr_9661_9737 = state_9641__$1;
(statearr_9661_9737[(2)] = null);

(statearr_9661_9737[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (21))){
var inst_9563 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9665_9738 = state_9641__$1;
(statearr_9665_9738[(2)] = inst_9563);

(statearr_9665_9738[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (31))){
var inst_9589 = (state_9641[(11)]);
var inst_9593 = done(null);
var inst_9594 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9589);
var state_9641__$1 = (function (){var statearr_9666 = state_9641;
(statearr_9666[(19)] = inst_9593);

return statearr_9666;
})();
var statearr_9667_9739 = state_9641__$1;
(statearr_9667_9739[(2)] = inst_9594);

(statearr_9667_9739[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (32))){
var inst_9581 = (state_9641[(20)]);
var inst_9582 = (state_9641[(10)]);
var inst_9583 = (state_9641[(21)]);
var inst_9584 = (state_9641[(12)]);
var inst_9596 = (state_9641[(2)]);
var inst_9597 = (inst_9584 + (1));
var tmp9662 = inst_9581;
var tmp9663 = inst_9582;
var tmp9664 = inst_9583;
var inst_9581__$1 = tmp9662;
var inst_9582__$1 = tmp9663;
var inst_9583__$1 = tmp9664;
var inst_9584__$1 = inst_9597;
var state_9641__$1 = (function (){var statearr_9668 = state_9641;
(statearr_9668[(20)] = inst_9581__$1);

(statearr_9668[(10)] = inst_9582__$1);

(statearr_9668[(22)] = inst_9596);

(statearr_9668[(21)] = inst_9583__$1);

(statearr_9668[(12)] = inst_9584__$1);

return statearr_9668;
})();
var statearr_9669_9740 = state_9641__$1;
(statearr_9669_9740[(2)] = null);

(statearr_9669_9740[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (40))){
var inst_9609 = (state_9641[(23)]);
var inst_9613 = done(null);
var inst_9614 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9609);
var state_9641__$1 = (function (){var statearr_9670 = state_9641;
(statearr_9670[(24)] = inst_9613);

return statearr_9670;
})();
var statearr_9671_9741 = state_9641__$1;
(statearr_9671_9741[(2)] = inst_9614);

(statearr_9671_9741[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (33))){
var inst_9600 = (state_9641[(25)]);
var inst_9602 = cljs.core.chunked_seq_QMARK_(inst_9600);
var state_9641__$1 = state_9641;
if(inst_9602){
var statearr_9672_9742 = state_9641__$1;
(statearr_9672_9742[(1)] = (36));

} else {
var statearr_9673_9743 = state_9641__$1;
(statearr_9673_9743[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (13))){
var inst_9530 = (state_9641[(26)]);
var inst_9533 = cljs.core.async.close_BANG_(inst_9530);
var state_9641__$1 = state_9641;
var statearr_9674_9744 = state_9641__$1;
(statearr_9674_9744[(2)] = inst_9533);

(statearr_9674_9744[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (22))){
var inst_9553 = (state_9641[(8)]);
var inst_9556 = cljs.core.async.close_BANG_(inst_9553);
var state_9641__$1 = state_9641;
var statearr_9675_9745 = state_9641__$1;
(statearr_9675_9745[(2)] = inst_9556);

(statearr_9675_9745[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (36))){
var inst_9600 = (state_9641[(25)]);
var inst_9604 = cljs.core.chunk_first(inst_9600);
var inst_9605 = cljs.core.chunk_rest(inst_9600);
var inst_9606 = cljs.core.count(inst_9604);
var inst_9581 = inst_9605;
var inst_9582 = inst_9604;
var inst_9583 = inst_9606;
var inst_9584 = (0);
var state_9641__$1 = (function (){var statearr_9676 = state_9641;
(statearr_9676[(20)] = inst_9581);

(statearr_9676[(10)] = inst_9582);

(statearr_9676[(21)] = inst_9583);

(statearr_9676[(12)] = inst_9584);

return statearr_9676;
})();
var statearr_9677_9746 = state_9641__$1;
(statearr_9677_9746[(2)] = null);

(statearr_9677_9746[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (41))){
var inst_9600 = (state_9641[(25)]);
var inst_9616 = (state_9641[(2)]);
var inst_9617 = cljs.core.next(inst_9600);
var inst_9581 = inst_9617;
var inst_9582 = null;
var inst_9583 = (0);
var inst_9584 = (0);
var state_9641__$1 = (function (){var statearr_9678 = state_9641;
(statearr_9678[(20)] = inst_9581);

(statearr_9678[(10)] = inst_9582);

(statearr_9678[(21)] = inst_9583);

(statearr_9678[(27)] = inst_9616);

(statearr_9678[(12)] = inst_9584);

return statearr_9678;
})();
var statearr_9679_9747 = state_9641__$1;
(statearr_9679_9747[(2)] = null);

(statearr_9679_9747[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (43))){
var state_9641__$1 = state_9641;
var statearr_9680_9748 = state_9641__$1;
(statearr_9680_9748[(2)] = null);

(statearr_9680_9748[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (29))){
var inst_9625 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9681_9749 = state_9641__$1;
(statearr_9681_9749[(2)] = inst_9625);

(statearr_9681_9749[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (44))){
var inst_9634 = (state_9641[(2)]);
var state_9641__$1 = (function (){var statearr_9682 = state_9641;
(statearr_9682[(28)] = inst_9634);

return statearr_9682;
})();
var statearr_9683_9750 = state_9641__$1;
(statearr_9683_9750[(2)] = null);

(statearr_9683_9750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (6))){
var inst_9573 = (state_9641[(29)]);
var inst_9572 = cljs.core.deref(cs);
var inst_9573__$1 = cljs.core.keys(inst_9572);
var inst_9574 = cljs.core.count(inst_9573__$1);
var inst_9575 = cljs.core.reset_BANG_(dctr,inst_9574);
var inst_9580 = cljs.core.seq(inst_9573__$1);
var inst_9581 = inst_9580;
var inst_9582 = null;
var inst_9583 = (0);
var inst_9584 = (0);
var state_9641__$1 = (function (){var statearr_9684 = state_9641;
(statearr_9684[(29)] = inst_9573__$1);

(statearr_9684[(20)] = inst_9581);

(statearr_9684[(30)] = inst_9575);

(statearr_9684[(10)] = inst_9582);

(statearr_9684[(21)] = inst_9583);

(statearr_9684[(12)] = inst_9584);

return statearr_9684;
})();
var statearr_9685_9751 = state_9641__$1;
(statearr_9685_9751[(2)] = null);

(statearr_9685_9751[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (28))){
var inst_9581 = (state_9641[(20)]);
var inst_9600 = (state_9641[(25)]);
var inst_9600__$1 = cljs.core.seq(inst_9581);
var state_9641__$1 = (function (){var statearr_9686 = state_9641;
(statearr_9686[(25)] = inst_9600__$1);

return statearr_9686;
})();
if(inst_9600__$1){
var statearr_9687_9752 = state_9641__$1;
(statearr_9687_9752[(1)] = (33));

} else {
var statearr_9688_9753 = state_9641__$1;
(statearr_9688_9753[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (25))){
var inst_9583 = (state_9641[(21)]);
var inst_9584 = (state_9641[(12)]);
var inst_9586 = (inst_9584 < inst_9583);
var inst_9587 = inst_9586;
var state_9641__$1 = state_9641;
if(cljs.core.truth_(inst_9587)){
var statearr_9689_9754 = state_9641__$1;
(statearr_9689_9754[(1)] = (27));

} else {
var statearr_9690_9755 = state_9641__$1;
(statearr_9690_9755[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (34))){
var state_9641__$1 = state_9641;
var statearr_9691_9756 = state_9641__$1;
(statearr_9691_9756[(2)] = null);

(statearr_9691_9756[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (17))){
var state_9641__$1 = state_9641;
var statearr_9692_9757 = state_9641__$1;
(statearr_9692_9757[(2)] = null);

(statearr_9692_9757[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (3))){
var inst_9639 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9641__$1,inst_9639);
} else {
if((state_val_9642 === (12))){
var inst_9568 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9693_9758 = state_9641__$1;
(statearr_9693_9758[(2)] = inst_9568);

(statearr_9693_9758[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (2))){
var state_9641__$1 = state_9641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9641__$1,(4),ch);
} else {
if((state_val_9642 === (23))){
var state_9641__$1 = state_9641;
var statearr_9694_9759 = state_9641__$1;
(statearr_9694_9759[(2)] = null);

(statearr_9694_9759[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (35))){
var inst_9623 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9695_9760 = state_9641__$1;
(statearr_9695_9760[(2)] = inst_9623);

(statearr_9695_9760[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (19))){
var inst_9540 = (state_9641[(7)]);
var inst_9544 = cljs.core.chunk_first(inst_9540);
var inst_9545 = cljs.core.chunk_rest(inst_9540);
var inst_9546 = cljs.core.count(inst_9544);
var inst_9518 = inst_9545;
var inst_9519 = inst_9544;
var inst_9520 = inst_9546;
var inst_9521 = (0);
var state_9641__$1 = (function (){var statearr_9696 = state_9641;
(statearr_9696[(14)] = inst_9519);

(statearr_9696[(15)] = inst_9520);

(statearr_9696[(16)] = inst_9518);

(statearr_9696[(17)] = inst_9521);

return statearr_9696;
})();
var statearr_9697_9761 = state_9641__$1;
(statearr_9697_9761[(2)] = null);

(statearr_9697_9761[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (11))){
var inst_9540 = (state_9641[(7)]);
var inst_9518 = (state_9641[(16)]);
var inst_9540__$1 = cljs.core.seq(inst_9518);
var state_9641__$1 = (function (){var statearr_9698 = state_9641;
(statearr_9698[(7)] = inst_9540__$1);

return statearr_9698;
})();
if(inst_9540__$1){
var statearr_9699_9762 = state_9641__$1;
(statearr_9699_9762[(1)] = (16));

} else {
var statearr_9700_9763 = state_9641__$1;
(statearr_9700_9763[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (9))){
var inst_9570 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9701_9764 = state_9641__$1;
(statearr_9701_9764[(2)] = inst_9570);

(statearr_9701_9764[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (5))){
var inst_9516 = cljs.core.deref(cs);
var inst_9517 = cljs.core.seq(inst_9516);
var inst_9518 = inst_9517;
var inst_9519 = null;
var inst_9520 = (0);
var inst_9521 = (0);
var state_9641__$1 = (function (){var statearr_9702 = state_9641;
(statearr_9702[(14)] = inst_9519);

(statearr_9702[(15)] = inst_9520);

(statearr_9702[(16)] = inst_9518);

(statearr_9702[(17)] = inst_9521);

return statearr_9702;
})();
var statearr_9703_9765 = state_9641__$1;
(statearr_9703_9765[(2)] = null);

(statearr_9703_9765[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (14))){
var state_9641__$1 = state_9641;
var statearr_9704_9766 = state_9641__$1;
(statearr_9704_9766[(2)] = null);

(statearr_9704_9766[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (45))){
var inst_9631 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9705_9767 = state_9641__$1;
(statearr_9705_9767[(2)] = inst_9631);

(statearr_9705_9767[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (26))){
var inst_9573 = (state_9641[(29)]);
var inst_9627 = (state_9641[(2)]);
var inst_9628 = cljs.core.seq(inst_9573);
var state_9641__$1 = (function (){var statearr_9706 = state_9641;
(statearr_9706[(31)] = inst_9627);

return statearr_9706;
})();
if(inst_9628){
var statearr_9707_9768 = state_9641__$1;
(statearr_9707_9768[(1)] = (42));

} else {
var statearr_9708_9769 = state_9641__$1;
(statearr_9708_9769[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (16))){
var inst_9540 = (state_9641[(7)]);
var inst_9542 = cljs.core.chunked_seq_QMARK_(inst_9540);
var state_9641__$1 = state_9641;
if(inst_9542){
var statearr_9709_9770 = state_9641__$1;
(statearr_9709_9770[(1)] = (19));

} else {
var statearr_9710_9771 = state_9641__$1;
(statearr_9710_9771[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (38))){
var inst_9620 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9711_9772 = state_9641__$1;
(statearr_9711_9772[(2)] = inst_9620);

(statearr_9711_9772[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (30))){
var state_9641__$1 = state_9641;
var statearr_9712_9773 = state_9641__$1;
(statearr_9712_9773[(2)] = null);

(statearr_9712_9773[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (10))){
var inst_9519 = (state_9641[(14)]);
var inst_9521 = (state_9641[(17)]);
var inst_9529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9519,inst_9521);
var inst_9530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9529,(0),null);
var inst_9531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9529,(1),null);
var state_9641__$1 = (function (){var statearr_9713 = state_9641;
(statearr_9713[(26)] = inst_9530);

return statearr_9713;
})();
if(cljs.core.truth_(inst_9531)){
var statearr_9714_9774 = state_9641__$1;
(statearr_9714_9774[(1)] = (13));

} else {
var statearr_9715_9775 = state_9641__$1;
(statearr_9715_9775[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (18))){
var inst_9566 = (state_9641[(2)]);
var state_9641__$1 = state_9641;
var statearr_9716_9776 = state_9641__$1;
(statearr_9716_9776[(2)] = inst_9566);

(statearr_9716_9776[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (42))){
var state_9641__$1 = state_9641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9641__$1,(45),dchan);
} else {
if((state_val_9642 === (37))){
var inst_9509 = (state_9641[(9)]);
var inst_9600 = (state_9641[(25)]);
var inst_9609 = (state_9641[(23)]);
var inst_9609__$1 = cljs.core.first(inst_9600);
var inst_9610 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9609__$1,inst_9509,done);
var state_9641__$1 = (function (){var statearr_9717 = state_9641;
(statearr_9717[(23)] = inst_9609__$1);

return statearr_9717;
})();
if(cljs.core.truth_(inst_9610)){
var statearr_9718_9777 = state_9641__$1;
(statearr_9718_9777[(1)] = (39));

} else {
var statearr_9719_9778 = state_9641__$1;
(statearr_9719_9778[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9642 === (8))){
var inst_9520 = (state_9641[(15)]);
var inst_9521 = (state_9641[(17)]);
var inst_9523 = (inst_9521 < inst_9520);
var inst_9524 = inst_9523;
var state_9641__$1 = state_9641;
if(cljs.core.truth_(inst_9524)){
var statearr_9720_9779 = state_9641__$1;
(statearr_9720_9779[(1)] = (10));

} else {
var statearr_9721_9780 = state_9641__$1;
(statearr_9721_9780[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__8795__auto__ = null;
var cljs$core$async$mult_$_state_machine__8795__auto____0 = (function (){
var statearr_9722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9722[(0)] = cljs$core$async$mult_$_state_machine__8795__auto__);

(statearr_9722[(1)] = (1));

return statearr_9722;
});
var cljs$core$async$mult_$_state_machine__8795__auto____1 = (function (state_9641){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9641);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9723){if((e9723 instanceof Object)){
var ex__8798__auto__ = e9723;
var statearr_9724_9781 = state_9641;
(statearr_9724_9781[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9641);

return cljs.core.cst$kw$recur;
} else {
throw e9723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__9782 = state_9641;
state_9641 = G__9782;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8795__auto__ = function(state_9641){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8795__auto____1.call(this,state_9641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8795__auto____0;
cljs$core$async$mult_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8795__auto____1;
return cljs$core$async$mult_$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9725 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9725[(6)] = c__8901__auto___9726);

return statearr_9725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
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
var G__9784 = arguments.length;
switch (G__9784) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_9786 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_9786(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_9787 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_9787(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_9788 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_9788(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_9789 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_9789(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_9790 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_9790(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9801 = arguments.length;
var i__4737__auto___9802 = (0);
while(true){
if((i__4737__auto___9802 < len__4736__auto___9801)){
args__4742__auto__.push((arguments[i__4737__auto___9802]));

var G__9803 = (i__4737__auto___9802 + (1));
i__4737__auto___9802 = G__9803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9795){
var map__9796 = p__9795;
var map__9796__$1 = (((((!((map__9796 == null))))?(((((map__9796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9796):map__9796);
var opts = map__9796__$1;
var statearr_9798_9804 = state;
(statearr_9798_9804[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_9799_9805 = state;
(statearr_9799_9805[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_9800_9806 = state;
(statearr_9800_9806[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9791){
var G__9792 = cljs.core.first(seq9791);
var seq9791__$1 = cljs.core.next(seq9791);
var G__9793 = cljs.core.first(seq9791__$1);
var seq9791__$2 = cljs.core.next(seq9791__$1);
var G__9794 = cljs.core.first(seq9791__$2);
var seq9791__$3 = cljs.core.next(seq9791__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9792,G__9793,G__9794,seq9791__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9808 = meta9808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9809,meta9808__$1){
var self__ = this;
var _9809__$1 = this;
return (new cljs.core.async.t_cljs$core$async9807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9808__$1));
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9809){
var self__ = this;
var _9809__$1 = this;
return self__.meta9808;
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async9807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async9807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta9808], null);
}));

(cljs.core.async.t_cljs$core$async9807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9807");

(cljs.core.async.t_cljs$core$async9807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9807.
 */
cljs.core.async.__GT_t_cljs$core$async9807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async9807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9808){
return (new cljs.core.async.t_cljs$core$async9807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9808));
});

}

return (new cljs.core.async.t_cljs$core$async9807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8901__auto___9971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_9911){
var state_val_9912 = (state_9911[(1)]);
if((state_val_9912 === (7))){
var inst_9826 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9913_9972 = state_9911__$1;
(statearr_9913_9972[(2)] = inst_9826);

(statearr_9913_9972[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (20))){
var inst_9838 = (state_9911[(7)]);
var state_9911__$1 = state_9911;
var statearr_9914_9973 = state_9911__$1;
(statearr_9914_9973[(2)] = inst_9838);

(statearr_9914_9973[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (27))){
var state_9911__$1 = state_9911;
var statearr_9915_9974 = state_9911__$1;
(statearr_9915_9974[(2)] = null);

(statearr_9915_9974[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (1))){
var inst_9813 = (state_9911[(8)]);
var inst_9813__$1 = calc_state();
var inst_9815 = (inst_9813__$1 == null);
var inst_9816 = cljs.core.not(inst_9815);
var state_9911__$1 = (function (){var statearr_9916 = state_9911;
(statearr_9916[(8)] = inst_9813__$1);

return statearr_9916;
})();
if(inst_9816){
var statearr_9917_9975 = state_9911__$1;
(statearr_9917_9975[(1)] = (2));

} else {
var statearr_9918_9976 = state_9911__$1;
(statearr_9918_9976[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (24))){
var inst_9862 = (state_9911[(9)]);
var inst_9871 = (state_9911[(10)]);
var inst_9885 = (state_9911[(11)]);
var inst_9885__$1 = (inst_9862.cljs$core$IFn$_invoke$arity$1 ? inst_9862.cljs$core$IFn$_invoke$arity$1(inst_9871) : inst_9862.call(null,inst_9871));
var state_9911__$1 = (function (){var statearr_9919 = state_9911;
(statearr_9919[(11)] = inst_9885__$1);

return statearr_9919;
})();
if(cljs.core.truth_(inst_9885__$1)){
var statearr_9920_9977 = state_9911__$1;
(statearr_9920_9977[(1)] = (29));

} else {
var statearr_9921_9978 = state_9911__$1;
(statearr_9921_9978[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (4))){
var inst_9829 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9829)){
var statearr_9922_9979 = state_9911__$1;
(statearr_9922_9979[(1)] = (8));

} else {
var statearr_9923_9980 = state_9911__$1;
(statearr_9923_9980[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (15))){
var inst_9856 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9856)){
var statearr_9924_9981 = state_9911__$1;
(statearr_9924_9981[(1)] = (19));

} else {
var statearr_9925_9982 = state_9911__$1;
(statearr_9925_9982[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (21))){
var inst_9861 = (state_9911[(12)]);
var inst_9861__$1 = (state_9911[(2)]);
var inst_9862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9861__$1,cljs.core.cst$kw$solos);
var inst_9863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9861__$1,cljs.core.cst$kw$mutes);
var inst_9864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9861__$1,cljs.core.cst$kw$reads);
var state_9911__$1 = (function (){var statearr_9926 = state_9911;
(statearr_9926[(9)] = inst_9862);

(statearr_9926[(12)] = inst_9861__$1);

(statearr_9926[(13)] = inst_9863);

return statearr_9926;
})();
return cljs.core.async.ioc_alts_BANG_(state_9911__$1,(22),inst_9864);
} else {
if((state_val_9912 === (31))){
var inst_9893 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9893)){
var statearr_9927_9983 = state_9911__$1;
(statearr_9927_9983[(1)] = (32));

} else {
var statearr_9928_9984 = state_9911__$1;
(statearr_9928_9984[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (32))){
var inst_9870 = (state_9911[(14)]);
var state_9911__$1 = state_9911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9911__$1,(35),out,inst_9870);
} else {
if((state_val_9912 === (33))){
var inst_9861 = (state_9911[(12)]);
var inst_9838 = inst_9861;
var state_9911__$1 = (function (){var statearr_9929 = state_9911;
(statearr_9929[(7)] = inst_9838);

return statearr_9929;
})();
var statearr_9930_9985 = state_9911__$1;
(statearr_9930_9985[(2)] = null);

(statearr_9930_9985[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (13))){
var inst_9838 = (state_9911[(7)]);
var inst_9845 = inst_9838.cljs$lang$protocol_mask$partition0$;
var inst_9846 = (inst_9845 & (64));
var inst_9847 = inst_9838.cljs$core$ISeq$;
var inst_9848 = (cljs.core.PROTOCOL_SENTINEL === inst_9847);
var inst_9849 = ((inst_9846) || (inst_9848));
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9849)){
var statearr_9931_9986 = state_9911__$1;
(statearr_9931_9986[(1)] = (16));

} else {
var statearr_9932_9987 = state_9911__$1;
(statearr_9932_9987[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (22))){
var inst_9870 = (state_9911[(14)]);
var inst_9871 = (state_9911[(10)]);
var inst_9869 = (state_9911[(2)]);
var inst_9870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9869,(0),null);
var inst_9871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9869,(1),null);
var inst_9872 = (inst_9870__$1 == null);
var inst_9873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9871__$1,change);
var inst_9874 = ((inst_9872) || (inst_9873));
var state_9911__$1 = (function (){var statearr_9933 = state_9911;
(statearr_9933[(14)] = inst_9870__$1);

(statearr_9933[(10)] = inst_9871__$1);

return statearr_9933;
})();
if(cljs.core.truth_(inst_9874)){
var statearr_9934_9988 = state_9911__$1;
(statearr_9934_9988[(1)] = (23));

} else {
var statearr_9935_9989 = state_9911__$1;
(statearr_9935_9989[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (36))){
var inst_9861 = (state_9911[(12)]);
var inst_9838 = inst_9861;
var state_9911__$1 = (function (){var statearr_9936 = state_9911;
(statearr_9936[(7)] = inst_9838);

return statearr_9936;
})();
var statearr_9937_9990 = state_9911__$1;
(statearr_9937_9990[(2)] = null);

(statearr_9937_9990[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (29))){
var inst_9885 = (state_9911[(11)]);
var state_9911__$1 = state_9911;
var statearr_9938_9991 = state_9911__$1;
(statearr_9938_9991[(2)] = inst_9885);

(statearr_9938_9991[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (6))){
var state_9911__$1 = state_9911;
var statearr_9939_9992 = state_9911__$1;
(statearr_9939_9992[(2)] = false);

(statearr_9939_9992[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (28))){
var inst_9881 = (state_9911[(2)]);
var inst_9882 = calc_state();
var inst_9838 = inst_9882;
var state_9911__$1 = (function (){var statearr_9940 = state_9911;
(statearr_9940[(15)] = inst_9881);

(statearr_9940[(7)] = inst_9838);

return statearr_9940;
})();
var statearr_9941_9993 = state_9911__$1;
(statearr_9941_9993[(2)] = null);

(statearr_9941_9993[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (25))){
var inst_9907 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9942_9994 = state_9911__$1;
(statearr_9942_9994[(2)] = inst_9907);

(statearr_9942_9994[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (34))){
var inst_9905 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9943_9995 = state_9911__$1;
(statearr_9943_9995[(2)] = inst_9905);

(statearr_9943_9995[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (17))){
var state_9911__$1 = state_9911;
var statearr_9944_9996 = state_9911__$1;
(statearr_9944_9996[(2)] = false);

(statearr_9944_9996[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (3))){
var state_9911__$1 = state_9911;
var statearr_9945_9997 = state_9911__$1;
(statearr_9945_9997[(2)] = false);

(statearr_9945_9997[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (12))){
var inst_9909 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9911__$1,inst_9909);
} else {
if((state_val_9912 === (2))){
var inst_9813 = (state_9911[(8)]);
var inst_9818 = inst_9813.cljs$lang$protocol_mask$partition0$;
var inst_9819 = (inst_9818 & (64));
var inst_9820 = inst_9813.cljs$core$ISeq$;
var inst_9821 = (cljs.core.PROTOCOL_SENTINEL === inst_9820);
var inst_9822 = ((inst_9819) || (inst_9821));
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9822)){
var statearr_9946_9998 = state_9911__$1;
(statearr_9946_9998[(1)] = (5));

} else {
var statearr_9947_9999 = state_9911__$1;
(statearr_9947_9999[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (23))){
var inst_9870 = (state_9911[(14)]);
var inst_9876 = (inst_9870 == null);
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9876)){
var statearr_9948_10000 = state_9911__$1;
(statearr_9948_10000[(1)] = (26));

} else {
var statearr_9949_10001 = state_9911__$1;
(statearr_9949_10001[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (35))){
var inst_9896 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
if(cljs.core.truth_(inst_9896)){
var statearr_9950_10002 = state_9911__$1;
(statearr_9950_10002[(1)] = (36));

} else {
var statearr_9951_10003 = state_9911__$1;
(statearr_9951_10003[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (19))){
var inst_9838 = (state_9911[(7)]);
var inst_9858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9838);
var state_9911__$1 = state_9911;
var statearr_9952_10004 = state_9911__$1;
(statearr_9952_10004[(2)] = inst_9858);

(statearr_9952_10004[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (11))){
var inst_9838 = (state_9911[(7)]);
var inst_9842 = (inst_9838 == null);
var inst_9843 = cljs.core.not(inst_9842);
var state_9911__$1 = state_9911;
if(inst_9843){
var statearr_9953_10005 = state_9911__$1;
(statearr_9953_10005[(1)] = (13));

} else {
var statearr_9954_10006 = state_9911__$1;
(statearr_9954_10006[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (9))){
var inst_9813 = (state_9911[(8)]);
var state_9911__$1 = state_9911;
var statearr_9955_10007 = state_9911__$1;
(statearr_9955_10007[(2)] = inst_9813);

(statearr_9955_10007[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (5))){
var state_9911__$1 = state_9911;
var statearr_9956_10008 = state_9911__$1;
(statearr_9956_10008[(2)] = true);

(statearr_9956_10008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (14))){
var state_9911__$1 = state_9911;
var statearr_9957_10009 = state_9911__$1;
(statearr_9957_10009[(2)] = false);

(statearr_9957_10009[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (26))){
var inst_9871 = (state_9911[(10)]);
var inst_9878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_9871);
var state_9911__$1 = state_9911;
var statearr_9958_10010 = state_9911__$1;
(statearr_9958_10010[(2)] = inst_9878);

(statearr_9958_10010[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (16))){
var state_9911__$1 = state_9911;
var statearr_9959_10011 = state_9911__$1;
(statearr_9959_10011[(2)] = true);

(statearr_9959_10011[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (38))){
var inst_9901 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9960_10012 = state_9911__$1;
(statearr_9960_10012[(2)] = inst_9901);

(statearr_9960_10012[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (30))){
var inst_9862 = (state_9911[(9)]);
var inst_9863 = (state_9911[(13)]);
var inst_9871 = (state_9911[(10)]);
var inst_9888 = cljs.core.empty_QMARK_(inst_9862);
var inst_9889 = (inst_9863.cljs$core$IFn$_invoke$arity$1 ? inst_9863.cljs$core$IFn$_invoke$arity$1(inst_9871) : inst_9863.call(null,inst_9871));
var inst_9890 = cljs.core.not(inst_9889);
var inst_9891 = ((inst_9888) && (inst_9890));
var state_9911__$1 = state_9911;
var statearr_9961_10013 = state_9911__$1;
(statearr_9961_10013[(2)] = inst_9891);

(statearr_9961_10013[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (10))){
var inst_9813 = (state_9911[(8)]);
var inst_9834 = (state_9911[(2)]);
var inst_9835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9834,cljs.core.cst$kw$solos);
var inst_9836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9834,cljs.core.cst$kw$mutes);
var inst_9837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9834,cljs.core.cst$kw$reads);
var inst_9838 = inst_9813;
var state_9911__$1 = (function (){var statearr_9962 = state_9911;
(statearr_9962[(16)] = inst_9837);

(statearr_9962[(7)] = inst_9838);

(statearr_9962[(17)] = inst_9835);

(statearr_9962[(18)] = inst_9836);

return statearr_9962;
})();
var statearr_9963_10014 = state_9911__$1;
(statearr_9963_10014[(2)] = null);

(statearr_9963_10014[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (18))){
var inst_9853 = (state_9911[(2)]);
var state_9911__$1 = state_9911;
var statearr_9964_10015 = state_9911__$1;
(statearr_9964_10015[(2)] = inst_9853);

(statearr_9964_10015[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (37))){
var state_9911__$1 = state_9911;
var statearr_9965_10016 = state_9911__$1;
(statearr_9965_10016[(2)] = null);

(statearr_9965_10016[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9912 === (8))){
var inst_9813 = (state_9911[(8)]);
var inst_9831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9813);
var state_9911__$1 = state_9911;
var statearr_9966_10017 = state_9911__$1;
(statearr_9966_10017[(2)] = inst_9831);

(statearr_9966_10017[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$mix_$_state_machine__8795__auto__ = null;
var cljs$core$async$mix_$_state_machine__8795__auto____0 = (function (){
var statearr_9967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9967[(0)] = cljs$core$async$mix_$_state_machine__8795__auto__);

(statearr_9967[(1)] = (1));

return statearr_9967;
});
var cljs$core$async$mix_$_state_machine__8795__auto____1 = (function (state_9911){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_9911);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e9968){if((e9968 instanceof Object)){
var ex__8798__auto__ = e9968;
var statearr_9969_10018 = state_9911;
(statearr_9969_10018[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9911);

return cljs.core.cst$kw$recur;
} else {
throw e9968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10019 = state_9911;
state_9911 = G__10019;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8795__auto__ = function(state_9911){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8795__auto____1.call(this,state_9911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8795__auto____0;
cljs$core$async$mix_$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8795__auto____1;
return cljs$core$async$mix_$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_9970 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_9970[(6)] = c__8901__auto___9971);

return statearr_9970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_10022 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_10022(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_10023 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_10023(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_10024 = (function() {
var G__10025 = null;
var G__10025__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__10025__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__10025 = function(p,v){
switch(arguments.length){
case 1:
return G__10025__1.call(this,p);
case 2:
return G__10025__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10025.cljs$core$IFn$_invoke$arity$1 = G__10025__1;
G__10025.cljs$core$IFn$_invoke$arity$2 = G__10025__2;
return G__10025;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10021 = arguments.length;
switch (G__10021) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_10024.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_10024.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__10029 = arguments.length;
switch (G__10029) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__10027_SHARP_){
if(cljs.core.truth_((p1__10027_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10027_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__10027_SHARP_.call(null,topic)))){
return p1__10027_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10027_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10030 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10031){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10031 = meta10031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10032,meta10031__$1){
var self__ = this;
var _10032__$1 = this;
return (new cljs.core.async.t_cljs$core$async10030(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10031__$1));
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10032){
var self__ = this;
var _10032__$1 = this;
return self__.meta10031;
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async10030.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async10030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta10031], null);
}));

(cljs.core.async.t_cljs$core$async10030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10030");

(cljs.core.async.t_cljs$core$async10030.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10030.
 */
cljs.core.async.__GT_t_cljs$core$async10030 = (function cljs$core$async$__GT_t_cljs$core$async10030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10031){
return (new cljs.core.async.t_cljs$core$async10030(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10031));
});

}

return (new cljs.core.async.t_cljs$core$async10030(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8901__auto___10150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10104){
var state_val_10105 = (state_10104[(1)]);
if((state_val_10105 === (7))){
var inst_10100 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10106_10151 = state_10104__$1;
(statearr_10106_10151[(2)] = inst_10100);

(statearr_10106_10151[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (20))){
var state_10104__$1 = state_10104;
var statearr_10107_10152 = state_10104__$1;
(statearr_10107_10152[(2)] = null);

(statearr_10107_10152[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (1))){
var state_10104__$1 = state_10104;
var statearr_10108_10153 = state_10104__$1;
(statearr_10108_10153[(2)] = null);

(statearr_10108_10153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (24))){
var inst_10083 = (state_10104[(7)]);
var inst_10092 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_10083);
var state_10104__$1 = state_10104;
var statearr_10109_10154 = state_10104__$1;
(statearr_10109_10154[(2)] = inst_10092);

(statearr_10109_10154[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (4))){
var inst_10035 = (state_10104[(8)]);
var inst_10035__$1 = (state_10104[(2)]);
var inst_10036 = (inst_10035__$1 == null);
var state_10104__$1 = (function (){var statearr_10110 = state_10104;
(statearr_10110[(8)] = inst_10035__$1);

return statearr_10110;
})();
if(cljs.core.truth_(inst_10036)){
var statearr_10111_10155 = state_10104__$1;
(statearr_10111_10155[(1)] = (5));

} else {
var statearr_10112_10156 = state_10104__$1;
(statearr_10112_10156[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (15))){
var inst_10077 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10113_10157 = state_10104__$1;
(statearr_10113_10157[(2)] = inst_10077);

(statearr_10113_10157[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (21))){
var inst_10097 = (state_10104[(2)]);
var state_10104__$1 = (function (){var statearr_10114 = state_10104;
(statearr_10114[(9)] = inst_10097);

return statearr_10114;
})();
var statearr_10115_10158 = state_10104__$1;
(statearr_10115_10158[(2)] = null);

(statearr_10115_10158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (13))){
var inst_10059 = (state_10104[(10)]);
var inst_10061 = cljs.core.chunked_seq_QMARK_(inst_10059);
var state_10104__$1 = state_10104;
if(inst_10061){
var statearr_10116_10159 = state_10104__$1;
(statearr_10116_10159[(1)] = (16));

} else {
var statearr_10117_10160 = state_10104__$1;
(statearr_10117_10160[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (22))){
var inst_10089 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
if(cljs.core.truth_(inst_10089)){
var statearr_10118_10161 = state_10104__$1;
(statearr_10118_10161[(1)] = (23));

} else {
var statearr_10119_10162 = state_10104__$1;
(statearr_10119_10162[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (6))){
var inst_10083 = (state_10104[(7)]);
var inst_10085 = (state_10104[(11)]);
var inst_10035 = (state_10104[(8)]);
var inst_10083__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_10035) : topic_fn.call(null,inst_10035));
var inst_10084 = cljs.core.deref(mults);
var inst_10085__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10084,inst_10083__$1);
var state_10104__$1 = (function (){var statearr_10120 = state_10104;
(statearr_10120[(7)] = inst_10083__$1);

(statearr_10120[(11)] = inst_10085__$1);

return statearr_10120;
})();
if(cljs.core.truth_(inst_10085__$1)){
var statearr_10121_10163 = state_10104__$1;
(statearr_10121_10163[(1)] = (19));

} else {
var statearr_10122_10164 = state_10104__$1;
(statearr_10122_10164[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (25))){
var inst_10094 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10123_10165 = state_10104__$1;
(statearr_10123_10165[(2)] = inst_10094);

(statearr_10123_10165[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (17))){
var inst_10059 = (state_10104[(10)]);
var inst_10068 = cljs.core.first(inst_10059);
var inst_10069 = cljs.core.async.muxch_STAR_(inst_10068);
var inst_10070 = cljs.core.async.close_BANG_(inst_10069);
var inst_10071 = cljs.core.next(inst_10059);
var inst_10045 = inst_10071;
var inst_10046 = null;
var inst_10047 = (0);
var inst_10048 = (0);
var state_10104__$1 = (function (){var statearr_10124 = state_10104;
(statearr_10124[(12)] = inst_10048);

(statearr_10124[(13)] = inst_10047);

(statearr_10124[(14)] = inst_10046);

(statearr_10124[(15)] = inst_10070);

(statearr_10124[(16)] = inst_10045);

return statearr_10124;
})();
var statearr_10125_10166 = state_10104__$1;
(statearr_10125_10166[(2)] = null);

(statearr_10125_10166[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (3))){
var inst_10102 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10104__$1,inst_10102);
} else {
if((state_val_10105 === (12))){
var inst_10079 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10126_10167 = state_10104__$1;
(statearr_10126_10167[(2)] = inst_10079);

(statearr_10126_10167[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (2))){
var state_10104__$1 = state_10104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10104__$1,(4),ch);
} else {
if((state_val_10105 === (23))){
var state_10104__$1 = state_10104;
var statearr_10127_10168 = state_10104__$1;
(statearr_10127_10168[(2)] = null);

(statearr_10127_10168[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (19))){
var inst_10085 = (state_10104[(11)]);
var inst_10035 = (state_10104[(8)]);
var inst_10087 = cljs.core.async.muxch_STAR_(inst_10085);
var state_10104__$1 = state_10104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10104__$1,(22),inst_10087,inst_10035);
} else {
if((state_val_10105 === (11))){
var inst_10045 = (state_10104[(16)]);
var inst_10059 = (state_10104[(10)]);
var inst_10059__$1 = cljs.core.seq(inst_10045);
var state_10104__$1 = (function (){var statearr_10128 = state_10104;
(statearr_10128[(10)] = inst_10059__$1);

return statearr_10128;
})();
if(inst_10059__$1){
var statearr_10129_10169 = state_10104__$1;
(statearr_10129_10169[(1)] = (13));

} else {
var statearr_10130_10170 = state_10104__$1;
(statearr_10130_10170[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (9))){
var inst_10081 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10131_10171 = state_10104__$1;
(statearr_10131_10171[(2)] = inst_10081);

(statearr_10131_10171[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (5))){
var inst_10042 = cljs.core.deref(mults);
var inst_10043 = cljs.core.vals(inst_10042);
var inst_10044 = cljs.core.seq(inst_10043);
var inst_10045 = inst_10044;
var inst_10046 = null;
var inst_10047 = (0);
var inst_10048 = (0);
var state_10104__$1 = (function (){var statearr_10132 = state_10104;
(statearr_10132[(12)] = inst_10048);

(statearr_10132[(13)] = inst_10047);

(statearr_10132[(14)] = inst_10046);

(statearr_10132[(16)] = inst_10045);

return statearr_10132;
})();
var statearr_10133_10172 = state_10104__$1;
(statearr_10133_10172[(2)] = null);

(statearr_10133_10172[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (14))){
var state_10104__$1 = state_10104;
var statearr_10137_10173 = state_10104__$1;
(statearr_10137_10173[(2)] = null);

(statearr_10137_10173[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (16))){
var inst_10059 = (state_10104[(10)]);
var inst_10063 = cljs.core.chunk_first(inst_10059);
var inst_10064 = cljs.core.chunk_rest(inst_10059);
var inst_10065 = cljs.core.count(inst_10063);
var inst_10045 = inst_10064;
var inst_10046 = inst_10063;
var inst_10047 = inst_10065;
var inst_10048 = (0);
var state_10104__$1 = (function (){var statearr_10138 = state_10104;
(statearr_10138[(12)] = inst_10048);

(statearr_10138[(13)] = inst_10047);

(statearr_10138[(14)] = inst_10046);

(statearr_10138[(16)] = inst_10045);

return statearr_10138;
})();
var statearr_10139_10174 = state_10104__$1;
(statearr_10139_10174[(2)] = null);

(statearr_10139_10174[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (10))){
var inst_10048 = (state_10104[(12)]);
var inst_10047 = (state_10104[(13)]);
var inst_10046 = (state_10104[(14)]);
var inst_10045 = (state_10104[(16)]);
var inst_10053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10046,inst_10048);
var inst_10054 = cljs.core.async.muxch_STAR_(inst_10053);
var inst_10055 = cljs.core.async.close_BANG_(inst_10054);
var inst_10056 = (inst_10048 + (1));
var tmp10134 = inst_10047;
var tmp10135 = inst_10046;
var tmp10136 = inst_10045;
var inst_10045__$1 = tmp10136;
var inst_10046__$1 = tmp10135;
var inst_10047__$1 = tmp10134;
var inst_10048__$1 = inst_10056;
var state_10104__$1 = (function (){var statearr_10140 = state_10104;
(statearr_10140[(12)] = inst_10048__$1);

(statearr_10140[(13)] = inst_10047__$1);

(statearr_10140[(14)] = inst_10046__$1);

(statearr_10140[(17)] = inst_10055);

(statearr_10140[(16)] = inst_10045__$1);

return statearr_10140;
})();
var statearr_10141_10175 = state_10104__$1;
(statearr_10141_10175[(2)] = null);

(statearr_10141_10175[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (18))){
var inst_10074 = (state_10104[(2)]);
var state_10104__$1 = state_10104;
var statearr_10142_10176 = state_10104__$1;
(statearr_10142_10176[(2)] = inst_10074);

(statearr_10142_10176[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10105 === (8))){
var inst_10048 = (state_10104[(12)]);
var inst_10047 = (state_10104[(13)]);
var inst_10050 = (inst_10048 < inst_10047);
var inst_10051 = inst_10050;
var state_10104__$1 = state_10104;
if(cljs.core.truth_(inst_10051)){
var statearr_10143_10177 = state_10104__$1;
(statearr_10143_10177[(1)] = (10));

} else {
var statearr_10144_10178 = state_10104__$1;
(statearr_10144_10178[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10145[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10145[(1)] = (1));

return statearr_10145;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10104){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10104);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10146){if((e10146 instanceof Object)){
var ex__8798__auto__ = e10146;
var statearr_10147_10179 = state_10104;
(statearr_10147_10179[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10104);

return cljs.core.cst$kw$recur;
} else {
throw e10146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10180 = state_10104;
state_10104 = G__10180;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10148 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10148[(6)] = c__8901__auto___10150);

return statearr_10148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
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
var G__10182 = arguments.length;
switch (G__10182) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__10185 = arguments.length;
switch (G__10185) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__10188 = arguments.length;
switch (G__10188) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8901__auto___10255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10227){
var state_val_10228 = (state_10227[(1)]);
if((state_val_10228 === (7))){
var state_10227__$1 = state_10227;
var statearr_10229_10256 = state_10227__$1;
(statearr_10229_10256[(2)] = null);

(statearr_10229_10256[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (1))){
var state_10227__$1 = state_10227;
var statearr_10230_10257 = state_10227__$1;
(statearr_10230_10257[(2)] = null);

(statearr_10230_10257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (4))){
var inst_10191 = (state_10227[(7)]);
var inst_10193 = (inst_10191 < cnt);
var state_10227__$1 = state_10227;
if(cljs.core.truth_(inst_10193)){
var statearr_10231_10258 = state_10227__$1;
(statearr_10231_10258[(1)] = (6));

} else {
var statearr_10232_10259 = state_10227__$1;
(statearr_10232_10259[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (15))){
var inst_10223 = (state_10227[(2)]);
var state_10227__$1 = state_10227;
var statearr_10233_10260 = state_10227__$1;
(statearr_10233_10260[(2)] = inst_10223);

(statearr_10233_10260[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (13))){
var inst_10216 = cljs.core.async.close_BANG_(out);
var state_10227__$1 = state_10227;
var statearr_10234_10261 = state_10227__$1;
(statearr_10234_10261[(2)] = inst_10216);

(statearr_10234_10261[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (6))){
var state_10227__$1 = state_10227;
var statearr_10235_10262 = state_10227__$1;
(statearr_10235_10262[(2)] = null);

(statearr_10235_10262[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (3))){
var inst_10225 = (state_10227[(2)]);
var state_10227__$1 = state_10227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10227__$1,inst_10225);
} else {
if((state_val_10228 === (12))){
var inst_10213 = (state_10227[(8)]);
var inst_10213__$1 = (state_10227[(2)]);
var inst_10214 = cljs.core.some(cljs.core.nil_QMARK_,inst_10213__$1);
var state_10227__$1 = (function (){var statearr_10236 = state_10227;
(statearr_10236[(8)] = inst_10213__$1);

return statearr_10236;
})();
if(cljs.core.truth_(inst_10214)){
var statearr_10237_10263 = state_10227__$1;
(statearr_10237_10263[(1)] = (13));

} else {
var statearr_10238_10264 = state_10227__$1;
(statearr_10238_10264[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (2))){
var inst_10190 = cljs.core.reset_BANG_(dctr,cnt);
var inst_10191 = (0);
var state_10227__$1 = (function (){var statearr_10239 = state_10227;
(statearr_10239[(7)] = inst_10191);

(statearr_10239[(9)] = inst_10190);

return statearr_10239;
})();
var statearr_10240_10265 = state_10227__$1;
(statearr_10240_10265[(2)] = null);

(statearr_10240_10265[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (11))){
var inst_10191 = (state_10227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10227,(10),Object,null,(9));
var inst_10200 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10191) : chs__$1.call(null,inst_10191));
var inst_10201 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10191) : done.call(null,inst_10191));
var inst_10202 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10200,inst_10201);
var state_10227__$1 = state_10227;
var statearr_10241_10266 = state_10227__$1;
(statearr_10241_10266[(2)] = inst_10202);


cljs.core.async.impl.ioc_helpers.process_exception(state_10227__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (9))){
var inst_10191 = (state_10227[(7)]);
var inst_10204 = (state_10227[(2)]);
var inst_10205 = (inst_10191 + (1));
var inst_10191__$1 = inst_10205;
var state_10227__$1 = (function (){var statearr_10242 = state_10227;
(statearr_10242[(10)] = inst_10204);

(statearr_10242[(7)] = inst_10191__$1);

return statearr_10242;
})();
var statearr_10243_10267 = state_10227__$1;
(statearr_10243_10267[(2)] = null);

(statearr_10243_10267[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (5))){
var inst_10211 = (state_10227[(2)]);
var state_10227__$1 = (function (){var statearr_10244 = state_10227;
(statearr_10244[(11)] = inst_10211);

return statearr_10244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10227__$1,(12),dchan);
} else {
if((state_val_10228 === (14))){
var inst_10213 = (state_10227[(8)]);
var inst_10218 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10213);
var state_10227__$1 = state_10227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10227__$1,(16),out,inst_10218);
} else {
if((state_val_10228 === (16))){
var inst_10220 = (state_10227[(2)]);
var state_10227__$1 = (function (){var statearr_10245 = state_10227;
(statearr_10245[(12)] = inst_10220);

return statearr_10245;
})();
var statearr_10246_10268 = state_10227__$1;
(statearr_10246_10268[(2)] = null);

(statearr_10246_10268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (10))){
var inst_10195 = (state_10227[(2)]);
var inst_10196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10227__$1 = (function (){var statearr_10247 = state_10227;
(statearr_10247[(13)] = inst_10195);

return statearr_10247;
})();
var statearr_10248_10269 = state_10227__$1;
(statearr_10248_10269[(2)] = inst_10196);


cljs.core.async.impl.ioc_helpers.process_exception(state_10227__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10228 === (8))){
var inst_10209 = (state_10227[(2)]);
var state_10227__$1 = state_10227;
var statearr_10249_10270 = state_10227__$1;
(statearr_10249_10270[(2)] = inst_10209);

(statearr_10249_10270[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10250[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10250[(1)] = (1));

return statearr_10250;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10227){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10227);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10251){if((e10251 instanceof Object)){
var ex__8798__auto__ = e10251;
var statearr_10252_10271 = state_10227;
(statearr_10252_10271[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10227);

return cljs.core.cst$kw$recur;
} else {
throw e10251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10272 = state_10227;
state_10227 = G__10272;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10253 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10253[(6)] = c__8901__auto___10255);

return statearr_10253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
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
var G__10275 = arguments.length;
switch (G__10275) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10307){
var state_val_10308 = (state_10307[(1)]);
if((state_val_10308 === (7))){
var inst_10287 = (state_10307[(7)]);
var inst_10286 = (state_10307[(8)]);
var inst_10286__$1 = (state_10307[(2)]);
var inst_10287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10286__$1,(0),null);
var inst_10288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10286__$1,(1),null);
var inst_10289 = (inst_10287__$1 == null);
var state_10307__$1 = (function (){var statearr_10309 = state_10307;
(statearr_10309[(7)] = inst_10287__$1);

(statearr_10309[(8)] = inst_10286__$1);

(statearr_10309[(9)] = inst_10288);

return statearr_10309;
})();
if(cljs.core.truth_(inst_10289)){
var statearr_10310_10330 = state_10307__$1;
(statearr_10310_10330[(1)] = (8));

} else {
var statearr_10311_10331 = state_10307__$1;
(statearr_10311_10331[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (1))){
var inst_10276 = cljs.core.vec(chs);
var inst_10277 = inst_10276;
var state_10307__$1 = (function (){var statearr_10312 = state_10307;
(statearr_10312[(10)] = inst_10277);

return statearr_10312;
})();
var statearr_10313_10332 = state_10307__$1;
(statearr_10313_10332[(2)] = null);

(statearr_10313_10332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (4))){
var inst_10277 = (state_10307[(10)]);
var state_10307__$1 = state_10307;
return cljs.core.async.ioc_alts_BANG_(state_10307__$1,(7),inst_10277);
} else {
if((state_val_10308 === (6))){
var inst_10303 = (state_10307[(2)]);
var state_10307__$1 = state_10307;
var statearr_10314_10333 = state_10307__$1;
(statearr_10314_10333[(2)] = inst_10303);

(statearr_10314_10333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (3))){
var inst_10305 = (state_10307[(2)]);
var state_10307__$1 = state_10307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10307__$1,inst_10305);
} else {
if((state_val_10308 === (2))){
var inst_10277 = (state_10307[(10)]);
var inst_10279 = cljs.core.count(inst_10277);
var inst_10280 = (inst_10279 > (0));
var state_10307__$1 = state_10307;
if(cljs.core.truth_(inst_10280)){
var statearr_10316_10334 = state_10307__$1;
(statearr_10316_10334[(1)] = (4));

} else {
var statearr_10317_10335 = state_10307__$1;
(statearr_10317_10335[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (11))){
var inst_10277 = (state_10307[(10)]);
var inst_10296 = (state_10307[(2)]);
var tmp10315 = inst_10277;
var inst_10277__$1 = tmp10315;
var state_10307__$1 = (function (){var statearr_10318 = state_10307;
(statearr_10318[(11)] = inst_10296);

(statearr_10318[(10)] = inst_10277__$1);

return statearr_10318;
})();
var statearr_10319_10336 = state_10307__$1;
(statearr_10319_10336[(2)] = null);

(statearr_10319_10336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (9))){
var inst_10287 = (state_10307[(7)]);
var state_10307__$1 = state_10307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10307__$1,(11),out,inst_10287);
} else {
if((state_val_10308 === (5))){
var inst_10301 = cljs.core.async.close_BANG_(out);
var state_10307__$1 = state_10307;
var statearr_10320_10337 = state_10307__$1;
(statearr_10320_10337[(2)] = inst_10301);

(statearr_10320_10337[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (10))){
var inst_10299 = (state_10307[(2)]);
var state_10307__$1 = state_10307;
var statearr_10321_10338 = state_10307__$1;
(statearr_10321_10338[(2)] = inst_10299);

(statearr_10321_10338[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10308 === (8))){
var inst_10287 = (state_10307[(7)]);
var inst_10286 = (state_10307[(8)]);
var inst_10277 = (state_10307[(10)]);
var inst_10288 = (state_10307[(9)]);
var inst_10291 = (function (){var cs = inst_10277;
var vec__10282 = inst_10286;
var v = inst_10287;
var c = inst_10288;
return (function (p1__10273_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10273_SHARP_);
});
})();
var inst_10292 = cljs.core.filterv(inst_10291,inst_10277);
var inst_10277__$1 = inst_10292;
var state_10307__$1 = (function (){var statearr_10322 = state_10307;
(statearr_10322[(10)] = inst_10277__$1);

return statearr_10322;
})();
var statearr_10323_10339 = state_10307__$1;
(statearr_10323_10339[(2)] = null);

(statearr_10323_10339[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10324 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10324[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10324[(1)] = (1));

return statearr_10324;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10307){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10307);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10325){if((e10325 instanceof Object)){
var ex__8798__auto__ = e10325;
var statearr_10326_10340 = state_10307;
(statearr_10326_10340[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10307);

return cljs.core.cst$kw$recur;
} else {
throw e10325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10341 = state_10307;
state_10307 = G__10341;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10327 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10327[(6)] = c__8901__auto___10329);

return statearr_10327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__10343 = arguments.length;
switch (G__10343) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10367){
var state_val_10368 = (state_10367[(1)]);
if((state_val_10368 === (7))){
var inst_10349 = (state_10367[(7)]);
var inst_10349__$1 = (state_10367[(2)]);
var inst_10350 = (inst_10349__$1 == null);
var inst_10351 = cljs.core.not(inst_10350);
var state_10367__$1 = (function (){var statearr_10369 = state_10367;
(statearr_10369[(7)] = inst_10349__$1);

return statearr_10369;
})();
if(inst_10351){
var statearr_10370_10389 = state_10367__$1;
(statearr_10370_10389[(1)] = (8));

} else {
var statearr_10371_10390 = state_10367__$1;
(statearr_10371_10390[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (1))){
var inst_10344 = (0);
var state_10367__$1 = (function (){var statearr_10372 = state_10367;
(statearr_10372[(8)] = inst_10344);

return statearr_10372;
})();
var statearr_10373_10391 = state_10367__$1;
(statearr_10373_10391[(2)] = null);

(statearr_10373_10391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (4))){
var state_10367__$1 = state_10367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10367__$1,(7),ch);
} else {
if((state_val_10368 === (6))){
var inst_10362 = (state_10367[(2)]);
var state_10367__$1 = state_10367;
var statearr_10374_10392 = state_10367__$1;
(statearr_10374_10392[(2)] = inst_10362);

(statearr_10374_10392[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (3))){
var inst_10364 = (state_10367[(2)]);
var inst_10365 = cljs.core.async.close_BANG_(out);
var state_10367__$1 = (function (){var statearr_10375 = state_10367;
(statearr_10375[(9)] = inst_10364);

return statearr_10375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10367__$1,inst_10365);
} else {
if((state_val_10368 === (2))){
var inst_10344 = (state_10367[(8)]);
var inst_10346 = (inst_10344 < n);
var state_10367__$1 = state_10367;
if(cljs.core.truth_(inst_10346)){
var statearr_10376_10393 = state_10367__$1;
(statearr_10376_10393[(1)] = (4));

} else {
var statearr_10377_10394 = state_10367__$1;
(statearr_10377_10394[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (11))){
var inst_10344 = (state_10367[(8)]);
var inst_10354 = (state_10367[(2)]);
var inst_10355 = (inst_10344 + (1));
var inst_10344__$1 = inst_10355;
var state_10367__$1 = (function (){var statearr_10378 = state_10367;
(statearr_10378[(10)] = inst_10354);

(statearr_10378[(8)] = inst_10344__$1);

return statearr_10378;
})();
var statearr_10379_10395 = state_10367__$1;
(statearr_10379_10395[(2)] = null);

(statearr_10379_10395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (9))){
var state_10367__$1 = state_10367;
var statearr_10380_10396 = state_10367__$1;
(statearr_10380_10396[(2)] = null);

(statearr_10380_10396[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (5))){
var state_10367__$1 = state_10367;
var statearr_10381_10397 = state_10367__$1;
(statearr_10381_10397[(2)] = null);

(statearr_10381_10397[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (10))){
var inst_10359 = (state_10367[(2)]);
var state_10367__$1 = state_10367;
var statearr_10382_10398 = state_10367__$1;
(statearr_10382_10398[(2)] = inst_10359);

(statearr_10382_10398[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10368 === (8))){
var inst_10349 = (state_10367[(7)]);
var state_10367__$1 = state_10367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10367__$1,(11),out,inst_10349);
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10383[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10383[(1)] = (1));

return statearr_10383;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10367){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10367);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10384){if((e10384 instanceof Object)){
var ex__8798__auto__ = e10384;
var statearr_10385_10399 = state_10367;
(statearr_10385_10399[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10367);

return cljs.core.cst$kw$recur;
} else {
throw e10384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10400 = state_10367;
state_10367 = G__10400;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10386 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10386[(6)] = c__8901__auto___10388);

return statearr_10386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10402 = (function (f,ch,meta10403){
this.f = f;
this.ch = ch;
this.meta10403 = meta10403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10404,meta10403__$1){
var self__ = this;
var _10404__$1 = this;
return (new cljs.core.async.t_cljs$core$async10402(self__.f,self__.ch,meta10403__$1));
}));

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10404){
var self__ = this;
var _10404__$1 = this;
return self__.meta10403;
}));

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10405 = (function (f,ch,meta10403,_,fn1,meta10406){
this.f = f;
this.ch = ch;
this.meta10403 = meta10403;
this._ = _;
this.fn1 = fn1;
this.meta10406 = meta10406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10407,meta10406__$1){
var self__ = this;
var _10407__$1 = this;
return (new cljs.core.async.t_cljs$core$async10405(self__.f,self__.ch,self__.meta10403,self__._,self__.fn1,meta10406__$1));
}));

(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10407){
var self__ = this;
var _10407__$1 = this;
return self__.meta10406;
}));

(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async10405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__10401_SHARP_){
var G__10408 = (((p1__10401_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10401_SHARP_) : self__.f.call(null,p1__10401_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__10408) : f1.call(null,G__10408));
});
}));

(cljs.core.async.t_cljs$core$async10405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10403,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async10402], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta10406], null);
}));

(cljs.core.async.t_cljs$core$async10405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10405");

(cljs.core.async.t_cljs$core$async10405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10405.
 */
cljs.core.async.__GT_t_cljs$core$async10405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10405(f__$1,ch__$1,meta10403__$1,___$2,fn1__$1,meta10406){
return (new cljs.core.async.t_cljs$core$async10405(f__$1,ch__$1,meta10403__$1,___$2,fn1__$1,meta10406));
});

}

return (new cljs.core.async.t_cljs$core$async10405(self__.f,self__.ch,self__.meta10403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__10409 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__10409) : self__.f.call(null,G__10409));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async10402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10403], null);
}));

(cljs.core.async.t_cljs$core$async10402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10402");

(cljs.core.async.t_cljs$core$async10402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10402.
 */
cljs.core.async.__GT_t_cljs$core$async10402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10402(f__$1,ch__$1,meta10403){
return (new cljs.core.async.t_cljs$core$async10402(f__$1,ch__$1,meta10403));
});

}

return (new cljs.core.async.t_cljs$core$async10402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10410 = (function (f,ch,meta10411){
this.f = f;
this.ch = ch;
this.meta10411 = meta10411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10412,meta10411__$1){
var self__ = this;
var _10412__$1 = this;
return (new cljs.core.async.t_cljs$core$async10410(self__.f,self__.ch,meta10411__$1));
}));

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10412){
var self__ = this;
var _10412__$1 = this;
return self__.meta10411;
}));

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async10410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10411], null);
}));

(cljs.core.async.t_cljs$core$async10410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10410");

(cljs.core.async.t_cljs$core$async10410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10410.
 */
cljs.core.async.__GT_t_cljs$core$async10410 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10410(f__$1,ch__$1,meta10411){
return (new cljs.core.async.t_cljs$core$async10410(f__$1,ch__$1,meta10411));
});

}

return (new cljs.core.async.t_cljs$core$async10410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10413 = (function (p,ch,meta10414){
this.p = p;
this.ch = ch;
this.meta10414 = meta10414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10415,meta10414__$1){
var self__ = this;
var _10415__$1 = this;
return (new cljs.core.async.t_cljs$core$async10413(self__.p,self__.ch,meta10414__$1));
}));

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10415){
var self__ = this;
var _10415__$1 = this;
return self__.meta10414;
}));

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async10413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10414], null);
}));

(cljs.core.async.t_cljs$core$async10413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10413");

(cljs.core.async.t_cljs$core$async10413.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async10413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10413.
 */
cljs.core.async.__GT_t_cljs$core$async10413 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10413(p__$1,ch__$1,meta10414){
return (new cljs.core.async.t_cljs$core$async10413(p__$1,ch__$1,meta10414));
});

}

return (new cljs.core.async.t_cljs$core$async10413(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__10417 = arguments.length;
switch (G__10417) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10438){
var state_val_10439 = (state_10438[(1)]);
if((state_val_10439 === (7))){
var inst_10434 = (state_10438[(2)]);
var state_10438__$1 = state_10438;
var statearr_10440_10458 = state_10438__$1;
(statearr_10440_10458[(2)] = inst_10434);

(statearr_10440_10458[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (1))){
var state_10438__$1 = state_10438;
var statearr_10441_10459 = state_10438__$1;
(statearr_10441_10459[(2)] = null);

(statearr_10441_10459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (4))){
var inst_10420 = (state_10438[(7)]);
var inst_10420__$1 = (state_10438[(2)]);
var inst_10421 = (inst_10420__$1 == null);
var state_10438__$1 = (function (){var statearr_10442 = state_10438;
(statearr_10442[(7)] = inst_10420__$1);

return statearr_10442;
})();
if(cljs.core.truth_(inst_10421)){
var statearr_10443_10460 = state_10438__$1;
(statearr_10443_10460[(1)] = (5));

} else {
var statearr_10444_10461 = state_10438__$1;
(statearr_10444_10461[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (6))){
var inst_10420 = (state_10438[(7)]);
var inst_10425 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10420) : p.call(null,inst_10420));
var state_10438__$1 = state_10438;
if(cljs.core.truth_(inst_10425)){
var statearr_10445_10462 = state_10438__$1;
(statearr_10445_10462[(1)] = (8));

} else {
var statearr_10446_10463 = state_10438__$1;
(statearr_10446_10463[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (3))){
var inst_10436 = (state_10438[(2)]);
var state_10438__$1 = state_10438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10438__$1,inst_10436);
} else {
if((state_val_10439 === (2))){
var state_10438__$1 = state_10438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10438__$1,(4),ch);
} else {
if((state_val_10439 === (11))){
var inst_10428 = (state_10438[(2)]);
var state_10438__$1 = state_10438;
var statearr_10447_10464 = state_10438__$1;
(statearr_10447_10464[(2)] = inst_10428);

(statearr_10447_10464[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (9))){
var state_10438__$1 = state_10438;
var statearr_10448_10465 = state_10438__$1;
(statearr_10448_10465[(2)] = null);

(statearr_10448_10465[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (5))){
var inst_10423 = cljs.core.async.close_BANG_(out);
var state_10438__$1 = state_10438;
var statearr_10449_10466 = state_10438__$1;
(statearr_10449_10466[(2)] = inst_10423);

(statearr_10449_10466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (10))){
var inst_10431 = (state_10438[(2)]);
var state_10438__$1 = (function (){var statearr_10450 = state_10438;
(statearr_10450[(8)] = inst_10431);

return statearr_10450;
})();
var statearr_10451_10467 = state_10438__$1;
(statearr_10451_10467[(2)] = null);

(statearr_10451_10467[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10439 === (8))){
var inst_10420 = (state_10438[(7)]);
var state_10438__$1 = state_10438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10438__$1,(11),out,inst_10420);
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10452 = [null,null,null,null,null,null,null,null,null];
(statearr_10452[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10452[(1)] = (1));

return statearr_10452;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10438){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10438);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10453){if((e10453 instanceof Object)){
var ex__8798__auto__ = e10453;
var statearr_10454_10468 = state_10438;
(statearr_10454_10468[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10438);

return cljs.core.cst$kw$recur;
} else {
throw e10453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10469 = state_10438;
state_10438 = G__10469;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10455 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10455[(6)] = c__8901__auto___10457);

return statearr_10455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10471 = arguments.length;
switch (G__10471) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8901__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10534){
var state_val_10535 = (state_10534[(1)]);
if((state_val_10535 === (7))){
var inst_10530 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
var statearr_10536_10574 = state_10534__$1;
(statearr_10536_10574[(2)] = inst_10530);

(statearr_10536_10574[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (20))){
var inst_10500 = (state_10534[(7)]);
var inst_10511 = (state_10534[(2)]);
var inst_10512 = cljs.core.next(inst_10500);
var inst_10486 = inst_10512;
var inst_10487 = null;
var inst_10488 = (0);
var inst_10489 = (0);
var state_10534__$1 = (function (){var statearr_10537 = state_10534;
(statearr_10537[(8)] = inst_10489);

(statearr_10537[(9)] = inst_10511);

(statearr_10537[(10)] = inst_10487);

(statearr_10537[(11)] = inst_10488);

(statearr_10537[(12)] = inst_10486);

return statearr_10537;
})();
var statearr_10538_10575 = state_10534__$1;
(statearr_10538_10575[(2)] = null);

(statearr_10538_10575[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (1))){
var state_10534__$1 = state_10534;
var statearr_10539_10576 = state_10534__$1;
(statearr_10539_10576[(2)] = null);

(statearr_10539_10576[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (4))){
var inst_10475 = (state_10534[(13)]);
var inst_10475__$1 = (state_10534[(2)]);
var inst_10476 = (inst_10475__$1 == null);
var state_10534__$1 = (function (){var statearr_10540 = state_10534;
(statearr_10540[(13)] = inst_10475__$1);

return statearr_10540;
})();
if(cljs.core.truth_(inst_10476)){
var statearr_10541_10577 = state_10534__$1;
(statearr_10541_10577[(1)] = (5));

} else {
var statearr_10542_10578 = state_10534__$1;
(statearr_10542_10578[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (15))){
var state_10534__$1 = state_10534;
var statearr_10546_10579 = state_10534__$1;
(statearr_10546_10579[(2)] = null);

(statearr_10546_10579[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (21))){
var state_10534__$1 = state_10534;
var statearr_10547_10580 = state_10534__$1;
(statearr_10547_10580[(2)] = null);

(statearr_10547_10580[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (13))){
var inst_10489 = (state_10534[(8)]);
var inst_10487 = (state_10534[(10)]);
var inst_10488 = (state_10534[(11)]);
var inst_10486 = (state_10534[(12)]);
var inst_10496 = (state_10534[(2)]);
var inst_10497 = (inst_10489 + (1));
var tmp10543 = inst_10487;
var tmp10544 = inst_10488;
var tmp10545 = inst_10486;
var inst_10486__$1 = tmp10545;
var inst_10487__$1 = tmp10543;
var inst_10488__$1 = tmp10544;
var inst_10489__$1 = inst_10497;
var state_10534__$1 = (function (){var statearr_10548 = state_10534;
(statearr_10548[(14)] = inst_10496);

(statearr_10548[(8)] = inst_10489__$1);

(statearr_10548[(10)] = inst_10487__$1);

(statearr_10548[(11)] = inst_10488__$1);

(statearr_10548[(12)] = inst_10486__$1);

return statearr_10548;
})();
var statearr_10549_10581 = state_10534__$1;
(statearr_10549_10581[(2)] = null);

(statearr_10549_10581[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (22))){
var state_10534__$1 = state_10534;
var statearr_10550_10582 = state_10534__$1;
(statearr_10550_10582[(2)] = null);

(statearr_10550_10582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (6))){
var inst_10475 = (state_10534[(13)]);
var inst_10484 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10475) : f.call(null,inst_10475));
var inst_10485 = cljs.core.seq(inst_10484);
var inst_10486 = inst_10485;
var inst_10487 = null;
var inst_10488 = (0);
var inst_10489 = (0);
var state_10534__$1 = (function (){var statearr_10551 = state_10534;
(statearr_10551[(8)] = inst_10489);

(statearr_10551[(10)] = inst_10487);

(statearr_10551[(11)] = inst_10488);

(statearr_10551[(12)] = inst_10486);

return statearr_10551;
})();
var statearr_10552_10583 = state_10534__$1;
(statearr_10552_10583[(2)] = null);

(statearr_10552_10583[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (17))){
var inst_10500 = (state_10534[(7)]);
var inst_10504 = cljs.core.chunk_first(inst_10500);
var inst_10505 = cljs.core.chunk_rest(inst_10500);
var inst_10506 = cljs.core.count(inst_10504);
var inst_10486 = inst_10505;
var inst_10487 = inst_10504;
var inst_10488 = inst_10506;
var inst_10489 = (0);
var state_10534__$1 = (function (){var statearr_10553 = state_10534;
(statearr_10553[(8)] = inst_10489);

(statearr_10553[(10)] = inst_10487);

(statearr_10553[(11)] = inst_10488);

(statearr_10553[(12)] = inst_10486);

return statearr_10553;
})();
var statearr_10554_10584 = state_10534__$1;
(statearr_10554_10584[(2)] = null);

(statearr_10554_10584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (3))){
var inst_10532 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10534__$1,inst_10532);
} else {
if((state_val_10535 === (12))){
var inst_10520 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
var statearr_10555_10585 = state_10534__$1;
(statearr_10555_10585[(2)] = inst_10520);

(statearr_10555_10585[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (2))){
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10534__$1,(4),in$);
} else {
if((state_val_10535 === (23))){
var inst_10528 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
var statearr_10556_10586 = state_10534__$1;
(statearr_10556_10586[(2)] = inst_10528);

(statearr_10556_10586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (19))){
var inst_10515 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
var statearr_10557_10587 = state_10534__$1;
(statearr_10557_10587[(2)] = inst_10515);

(statearr_10557_10587[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (11))){
var inst_10500 = (state_10534[(7)]);
var inst_10486 = (state_10534[(12)]);
var inst_10500__$1 = cljs.core.seq(inst_10486);
var state_10534__$1 = (function (){var statearr_10558 = state_10534;
(statearr_10558[(7)] = inst_10500__$1);

return statearr_10558;
})();
if(inst_10500__$1){
var statearr_10559_10588 = state_10534__$1;
(statearr_10559_10588[(1)] = (14));

} else {
var statearr_10560_10589 = state_10534__$1;
(statearr_10560_10589[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (9))){
var inst_10522 = (state_10534[(2)]);
var inst_10523 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_10534__$1 = (function (){var statearr_10561 = state_10534;
(statearr_10561[(15)] = inst_10522);

return statearr_10561;
})();
if(cljs.core.truth_(inst_10523)){
var statearr_10562_10590 = state_10534__$1;
(statearr_10562_10590[(1)] = (21));

} else {
var statearr_10563_10591 = state_10534__$1;
(statearr_10563_10591[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (5))){
var inst_10478 = cljs.core.async.close_BANG_(out);
var state_10534__$1 = state_10534;
var statearr_10564_10592 = state_10534__$1;
(statearr_10564_10592[(2)] = inst_10478);

(statearr_10564_10592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (14))){
var inst_10500 = (state_10534[(7)]);
var inst_10502 = cljs.core.chunked_seq_QMARK_(inst_10500);
var state_10534__$1 = state_10534;
if(inst_10502){
var statearr_10565_10593 = state_10534__$1;
(statearr_10565_10593[(1)] = (17));

} else {
var statearr_10566_10594 = state_10534__$1;
(statearr_10566_10594[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (16))){
var inst_10518 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
var statearr_10567_10595 = state_10534__$1;
(statearr_10567_10595[(2)] = inst_10518);

(statearr_10567_10595[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10535 === (10))){
var inst_10489 = (state_10534[(8)]);
var inst_10487 = (state_10534[(10)]);
var inst_10494 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10487,inst_10489);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10534__$1,(13),out,inst_10494);
} else {
if((state_val_10535 === (18))){
var inst_10500 = (state_10534[(7)]);
var inst_10509 = cljs.core.first(inst_10500);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10534__$1,(20),out,inst_10509);
} else {
if((state_val_10535 === (8))){
var inst_10489 = (state_10534[(8)]);
var inst_10488 = (state_10534[(11)]);
var inst_10491 = (inst_10489 < inst_10488);
var inst_10492 = inst_10491;
var state_10534__$1 = state_10534;
if(cljs.core.truth_(inst_10492)){
var statearr_10568_10596 = state_10534__$1;
(statearr_10568_10596[(1)] = (10));

} else {
var statearr_10569_10597 = state_10534__$1;
(statearr_10569_10597[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____0 = (function (){
var statearr_10570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10570[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__);

(statearr_10570[(1)] = (1));

return statearr_10570;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____1 = (function (state_10534){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10534);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10571){if((e10571 instanceof Object)){
var ex__8798__auto__ = e10571;
var statearr_10572_10598 = state_10534;
(statearr_10572_10598[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10534);

return cljs.core.cst$kw$recur;
} else {
throw e10571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10599 = state_10534;
state_10534 = G__10599;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__ = function(state_10534){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____1.call(this,state_10534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10573 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10573[(6)] = c__8901__auto__);

return statearr_10573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));

return c__8901__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__10601 = arguments.length;
switch (G__10601) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__10604 = arguments.length;
switch (G__10604) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__10607 = arguments.length;
switch (G__10607) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10631){
var state_val_10632 = (state_10631[(1)]);
if((state_val_10632 === (7))){
var inst_10626 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10633_10655 = state_10631__$1;
(statearr_10633_10655[(2)] = inst_10626);

(statearr_10633_10655[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (1))){
var inst_10608 = null;
var state_10631__$1 = (function (){var statearr_10634 = state_10631;
(statearr_10634[(7)] = inst_10608);

return statearr_10634;
})();
var statearr_10635_10656 = state_10631__$1;
(statearr_10635_10656[(2)] = null);

(statearr_10635_10656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (4))){
var inst_10611 = (state_10631[(8)]);
var inst_10611__$1 = (state_10631[(2)]);
var inst_10612 = (inst_10611__$1 == null);
var inst_10613 = cljs.core.not(inst_10612);
var state_10631__$1 = (function (){var statearr_10636 = state_10631;
(statearr_10636[(8)] = inst_10611__$1);

return statearr_10636;
})();
if(inst_10613){
var statearr_10637_10657 = state_10631__$1;
(statearr_10637_10657[(1)] = (5));

} else {
var statearr_10638_10658 = state_10631__$1;
(statearr_10638_10658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (6))){
var state_10631__$1 = state_10631;
var statearr_10639_10659 = state_10631__$1;
(statearr_10639_10659[(2)] = null);

(statearr_10639_10659[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (3))){
var inst_10628 = (state_10631[(2)]);
var inst_10629 = cljs.core.async.close_BANG_(out);
var state_10631__$1 = (function (){var statearr_10640 = state_10631;
(statearr_10640[(9)] = inst_10628);

return statearr_10640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10631__$1,inst_10629);
} else {
if((state_val_10632 === (2))){
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10631__$1,(4),ch);
} else {
if((state_val_10632 === (11))){
var inst_10611 = (state_10631[(8)]);
var inst_10620 = (state_10631[(2)]);
var inst_10608 = inst_10611;
var state_10631__$1 = (function (){var statearr_10641 = state_10631;
(statearr_10641[(10)] = inst_10620);

(statearr_10641[(7)] = inst_10608);

return statearr_10641;
})();
var statearr_10642_10660 = state_10631__$1;
(statearr_10642_10660[(2)] = null);

(statearr_10642_10660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (9))){
var inst_10611 = (state_10631[(8)]);
var state_10631__$1 = state_10631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10631__$1,(11),out,inst_10611);
} else {
if((state_val_10632 === (5))){
var inst_10611 = (state_10631[(8)]);
var inst_10608 = (state_10631[(7)]);
var inst_10615 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10611,inst_10608);
var state_10631__$1 = state_10631;
if(inst_10615){
var statearr_10644_10661 = state_10631__$1;
(statearr_10644_10661[(1)] = (8));

} else {
var statearr_10645_10662 = state_10631__$1;
(statearr_10645_10662[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (10))){
var inst_10623 = (state_10631[(2)]);
var state_10631__$1 = state_10631;
var statearr_10646_10663 = state_10631__$1;
(statearr_10646_10663[(2)] = inst_10623);

(statearr_10646_10663[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10632 === (8))){
var inst_10608 = (state_10631[(7)]);
var tmp10643 = inst_10608;
var inst_10608__$1 = tmp10643;
var state_10631__$1 = (function (){var statearr_10647 = state_10631;
(statearr_10647[(7)] = inst_10608__$1);

return statearr_10647;
})();
var statearr_10648_10664 = state_10631__$1;
(statearr_10648_10664[(2)] = null);

(statearr_10648_10664[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10649[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10649[(1)] = (1));

return statearr_10649;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10631){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10631);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10650){if((e10650 instanceof Object)){
var ex__8798__auto__ = e10650;
var statearr_10651_10665 = state_10631;
(statearr_10651_10665[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10631);

return cljs.core.cst$kw$recur;
} else {
throw e10650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10666 = state_10631;
state_10631 = G__10666;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10652 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10652[(6)] = c__8901__auto___10654);

return statearr_10652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__10668 = arguments.length;
switch (G__10668) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10706){
var state_val_10707 = (state_10706[(1)]);
if((state_val_10707 === (7))){
var inst_10702 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
var statearr_10708_10735 = state_10706__$1;
(statearr_10708_10735[(2)] = inst_10702);

(statearr_10708_10735[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (1))){
var inst_10669 = (new Array(n));
var inst_10670 = inst_10669;
var inst_10671 = (0);
var state_10706__$1 = (function (){var statearr_10709 = state_10706;
(statearr_10709[(7)] = inst_10670);

(statearr_10709[(8)] = inst_10671);

return statearr_10709;
})();
var statearr_10710_10736 = state_10706__$1;
(statearr_10710_10736[(2)] = null);

(statearr_10710_10736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (4))){
var inst_10674 = (state_10706[(9)]);
var inst_10674__$1 = (state_10706[(2)]);
var inst_10675 = (inst_10674__$1 == null);
var inst_10676 = cljs.core.not(inst_10675);
var state_10706__$1 = (function (){var statearr_10711 = state_10706;
(statearr_10711[(9)] = inst_10674__$1);

return statearr_10711;
})();
if(inst_10676){
var statearr_10712_10737 = state_10706__$1;
(statearr_10712_10737[(1)] = (5));

} else {
var statearr_10713_10738 = state_10706__$1;
(statearr_10713_10738[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (15))){
var inst_10696 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
var statearr_10714_10739 = state_10706__$1;
(statearr_10714_10739[(2)] = inst_10696);

(statearr_10714_10739[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (13))){
var state_10706__$1 = state_10706;
var statearr_10715_10740 = state_10706__$1;
(statearr_10715_10740[(2)] = null);

(statearr_10715_10740[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (6))){
var inst_10671 = (state_10706[(8)]);
var inst_10692 = (inst_10671 > (0));
var state_10706__$1 = state_10706;
if(cljs.core.truth_(inst_10692)){
var statearr_10716_10741 = state_10706__$1;
(statearr_10716_10741[(1)] = (12));

} else {
var statearr_10717_10742 = state_10706__$1;
(statearr_10717_10742[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (3))){
var inst_10704 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10706__$1,inst_10704);
} else {
if((state_val_10707 === (12))){
var inst_10670 = (state_10706[(7)]);
var inst_10694 = cljs.core.vec(inst_10670);
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10706__$1,(15),out,inst_10694);
} else {
if((state_val_10707 === (2))){
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10706__$1,(4),ch);
} else {
if((state_val_10707 === (11))){
var inst_10686 = (state_10706[(2)]);
var inst_10687 = (new Array(n));
var inst_10670 = inst_10687;
var inst_10671 = (0);
var state_10706__$1 = (function (){var statearr_10718 = state_10706;
(statearr_10718[(10)] = inst_10686);

(statearr_10718[(7)] = inst_10670);

(statearr_10718[(8)] = inst_10671);

return statearr_10718;
})();
var statearr_10719_10743 = state_10706__$1;
(statearr_10719_10743[(2)] = null);

(statearr_10719_10743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (9))){
var inst_10670 = (state_10706[(7)]);
var inst_10684 = cljs.core.vec(inst_10670);
var state_10706__$1 = state_10706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10706__$1,(11),out,inst_10684);
} else {
if((state_val_10707 === (5))){
var inst_10679 = (state_10706[(11)]);
var inst_10674 = (state_10706[(9)]);
var inst_10670 = (state_10706[(7)]);
var inst_10671 = (state_10706[(8)]);
var inst_10678 = (inst_10670[inst_10671] = inst_10674);
var inst_10679__$1 = (inst_10671 + (1));
var inst_10680 = (inst_10679__$1 < n);
var state_10706__$1 = (function (){var statearr_10720 = state_10706;
(statearr_10720[(11)] = inst_10679__$1);

(statearr_10720[(12)] = inst_10678);

return statearr_10720;
})();
if(cljs.core.truth_(inst_10680)){
var statearr_10721_10744 = state_10706__$1;
(statearr_10721_10744[(1)] = (8));

} else {
var statearr_10722_10745 = state_10706__$1;
(statearr_10722_10745[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (14))){
var inst_10699 = (state_10706[(2)]);
var inst_10700 = cljs.core.async.close_BANG_(out);
var state_10706__$1 = (function (){var statearr_10724 = state_10706;
(statearr_10724[(13)] = inst_10699);

return statearr_10724;
})();
var statearr_10725_10746 = state_10706__$1;
(statearr_10725_10746[(2)] = inst_10700);

(statearr_10725_10746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (10))){
var inst_10690 = (state_10706[(2)]);
var state_10706__$1 = state_10706;
var statearr_10726_10747 = state_10706__$1;
(statearr_10726_10747[(2)] = inst_10690);

(statearr_10726_10747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10707 === (8))){
var inst_10679 = (state_10706[(11)]);
var inst_10670 = (state_10706[(7)]);
var tmp10723 = inst_10670;
var inst_10670__$1 = tmp10723;
var inst_10671 = inst_10679;
var state_10706__$1 = (function (){var statearr_10727 = state_10706;
(statearr_10727[(7)] = inst_10670__$1);

(statearr_10727[(8)] = inst_10671);

return statearr_10727;
})();
var statearr_10728_10748 = state_10706__$1;
(statearr_10728_10748[(2)] = null);

(statearr_10728_10748[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10729[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10729[(1)] = (1));

return statearr_10729;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10706){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10706);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10730){if((e10730 instanceof Object)){
var ex__8798__auto__ = e10730;
var statearr_10731_10749 = state_10706;
(statearr_10731_10749[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10706);

return cljs.core.cst$kw$recur;
} else {
throw e10730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10750 = state_10706;
state_10706 = G__10750;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10732 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10732[(6)] = c__8901__auto___10734);

return statearr_10732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10752 = arguments.length;
switch (G__10752) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8901__auto___10822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__8902__auto__ = (function (){var switch__8794__auto__ = (function (state_10794){
var state_val_10795 = (state_10794[(1)]);
if((state_val_10795 === (7))){
var inst_10790 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
var statearr_10796_10823 = state_10794__$1;
(statearr_10796_10823[(2)] = inst_10790);

(statearr_10796_10823[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (1))){
var inst_10753 = [];
var inst_10754 = inst_10753;
var inst_10755 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_10794__$1 = (function (){var statearr_10797 = state_10794;
(statearr_10797[(7)] = inst_10754);

(statearr_10797[(8)] = inst_10755);

return statearr_10797;
})();
var statearr_10798_10824 = state_10794__$1;
(statearr_10798_10824[(2)] = null);

(statearr_10798_10824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (4))){
var inst_10758 = (state_10794[(9)]);
var inst_10758__$1 = (state_10794[(2)]);
var inst_10759 = (inst_10758__$1 == null);
var inst_10760 = cljs.core.not(inst_10759);
var state_10794__$1 = (function (){var statearr_10799 = state_10794;
(statearr_10799[(9)] = inst_10758__$1);

return statearr_10799;
})();
if(inst_10760){
var statearr_10800_10825 = state_10794__$1;
(statearr_10800_10825[(1)] = (5));

} else {
var statearr_10801_10826 = state_10794__$1;
(statearr_10801_10826[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (15))){
var inst_10784 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
var statearr_10802_10827 = state_10794__$1;
(statearr_10802_10827[(2)] = inst_10784);

(statearr_10802_10827[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (13))){
var state_10794__$1 = state_10794;
var statearr_10803_10828 = state_10794__$1;
(statearr_10803_10828[(2)] = null);

(statearr_10803_10828[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (6))){
var inst_10754 = (state_10794[(7)]);
var inst_10779 = inst_10754.length;
var inst_10780 = (inst_10779 > (0));
var state_10794__$1 = state_10794;
if(cljs.core.truth_(inst_10780)){
var statearr_10804_10829 = state_10794__$1;
(statearr_10804_10829[(1)] = (12));

} else {
var statearr_10805_10830 = state_10794__$1;
(statearr_10805_10830[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (3))){
var inst_10792 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10794__$1,inst_10792);
} else {
if((state_val_10795 === (12))){
var inst_10754 = (state_10794[(7)]);
var inst_10782 = cljs.core.vec(inst_10754);
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10794__$1,(15),out,inst_10782);
} else {
if((state_val_10795 === (2))){
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10794__$1,(4),ch);
} else {
if((state_val_10795 === (11))){
var inst_10758 = (state_10794[(9)]);
var inst_10762 = (state_10794[(10)]);
var inst_10772 = (state_10794[(2)]);
var inst_10773 = [];
var inst_10774 = inst_10773.push(inst_10758);
var inst_10754 = inst_10773;
var inst_10755 = inst_10762;
var state_10794__$1 = (function (){var statearr_10806 = state_10794;
(statearr_10806[(11)] = inst_10774);

(statearr_10806[(7)] = inst_10754);

(statearr_10806[(12)] = inst_10772);

(statearr_10806[(8)] = inst_10755);

return statearr_10806;
})();
var statearr_10807_10831 = state_10794__$1;
(statearr_10807_10831[(2)] = null);

(statearr_10807_10831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (9))){
var inst_10754 = (state_10794[(7)]);
var inst_10770 = cljs.core.vec(inst_10754);
var state_10794__$1 = state_10794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10794__$1,(11),out,inst_10770);
} else {
if((state_val_10795 === (5))){
var inst_10758 = (state_10794[(9)]);
var inst_10762 = (state_10794[(10)]);
var inst_10755 = (state_10794[(8)]);
var inst_10762__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10758) : f.call(null,inst_10758));
var inst_10763 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10762__$1,inst_10755);
var inst_10764 = cljs.core.keyword_identical_QMARK_(inst_10755,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_10765 = ((inst_10763) || (inst_10764));
var state_10794__$1 = (function (){var statearr_10808 = state_10794;
(statearr_10808[(10)] = inst_10762__$1);

return statearr_10808;
})();
if(cljs.core.truth_(inst_10765)){
var statearr_10809_10832 = state_10794__$1;
(statearr_10809_10832[(1)] = (8));

} else {
var statearr_10810_10833 = state_10794__$1;
(statearr_10810_10833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (14))){
var inst_10787 = (state_10794[(2)]);
var inst_10788 = cljs.core.async.close_BANG_(out);
var state_10794__$1 = (function (){var statearr_10812 = state_10794;
(statearr_10812[(13)] = inst_10787);

return statearr_10812;
})();
var statearr_10813_10834 = state_10794__$1;
(statearr_10813_10834[(2)] = inst_10788);

(statearr_10813_10834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (10))){
var inst_10777 = (state_10794[(2)]);
var state_10794__$1 = state_10794;
var statearr_10814_10835 = state_10794__$1;
(statearr_10814_10835[(2)] = inst_10777);

(statearr_10814_10835[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10795 === (8))){
var inst_10758 = (state_10794[(9)]);
var inst_10754 = (state_10794[(7)]);
var inst_10762 = (state_10794[(10)]);
var inst_10767 = inst_10754.push(inst_10758);
var tmp10811 = inst_10754;
var inst_10754__$1 = tmp10811;
var inst_10755 = inst_10762;
var state_10794__$1 = (function (){var statearr_10815 = state_10794;
(statearr_10815[(7)] = inst_10754__$1);

(statearr_10815[(14)] = inst_10767);

(statearr_10815[(8)] = inst_10755);

return statearr_10815;
})();
var statearr_10816_10836 = state_10794__$1;
(statearr_10816_10836[(2)] = null);

(statearr_10816_10836[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__8795__auto__ = null;
var cljs$core$async$state_machine__8795__auto____0 = (function (){
var statearr_10817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10817[(0)] = cljs$core$async$state_machine__8795__auto__);

(statearr_10817[(1)] = (1));

return statearr_10817;
});
var cljs$core$async$state_machine__8795__auto____1 = (function (state_10794){
while(true){
var ret_value__8796__auto__ = (function (){try{while(true){
var result__8797__auto__ = switch__8794__auto__(state_10794);
if(cljs.core.keyword_identical_QMARK_(result__8797__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8797__auto__;
}
break;
}
}catch (e10818){if((e10818 instanceof Object)){
var ex__8798__auto__ = e10818;
var statearr_10819_10837 = state_10794;
(statearr_10819_10837[(5)] = ex__8798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10794);

return cljs.core.cst$kw$recur;
} else {
throw e10818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8796__auto__,cljs.core.cst$kw$recur)){
var G__10838 = state_10794;
state_10794 = G__10838;
continue;
} else {
return ret_value__8796__auto__;
}
break;
}
});
cljs$core$async$state_machine__8795__auto__ = function(state_10794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8795__auto____1.call(this,state_10794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8795__auto____0;
cljs$core$async$state_machine__8795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8795__auto____1;
return cljs$core$async$state_machine__8795__auto__;
})()
})();
var state__8903__auto__ = (function (){var statearr_10820 = (f__8902__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8902__auto__.cljs$core$IFn$_invoke$arity$0() : f__8902__auto__.call(null));
(statearr_10820[(6)] = c__8901__auto___10822);

return statearr_10820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8903__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

