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
var G__7761 = arguments.length;
switch (G__7761) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7762 = (function (f,blockable,meta7763){
this.f = f;
this.blockable = blockable;
this.meta7763 = meta7763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7764,meta7763__$1){
var self__ = this;
var _7764__$1 = this;
return (new cljs.core.async.t_cljs$core$async7762(self__.f,self__.blockable,meta7763__$1));
}));

(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7764){
var self__ = this;
var _7764__$1 = this;
return self__.meta7763;
}));

(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async7762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async7762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7763], null);
}));

(cljs.core.async.t_cljs$core$async7762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7762");

(cljs.core.async.t_cljs$core$async7762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async7762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7762.
 */
cljs.core.async.__GT_t_cljs$core$async7762 = (function cljs$core$async$__GT_t_cljs$core$async7762(f__$1,blockable__$1,meta7763){
return (new cljs.core.async.t_cljs$core$async7762(f__$1,blockable__$1,meta7763));
});

}

return (new cljs.core.async.t_cljs$core$async7762(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__7768 = arguments.length;
switch (G__7768) {
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
var G__7771 = arguments.length;
switch (G__7771) {
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
var G__7774 = arguments.length;
switch (G__7774) {
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
var val_7776 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7776) : fn1.call(null,val_7776));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7776) : fn1.call(null,val_7776));
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
var G__7778 = arguments.length;
switch (G__7778) {
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
var n__4613__auto___7780 = n;
var x_7781 = (0);
while(true){
if((x_7781 < n__4613__auto___7780)){
(a[x_7781] = (0));

var G__7782 = (x_7781 + (1));
x_7781 = G__7782;
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

var G__7783 = (i + (1));
i = G__7783;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7784 = (function (flag,meta7785){
this.flag = flag;
this.meta7785 = meta7785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7786,meta7785__$1){
var self__ = this;
var _7786__$1 = this;
return (new cljs.core.async.t_cljs$core$async7784(self__.flag,meta7785__$1));
}));

(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7786){
var self__ = this;
var _7786__$1 = this;
return self__.meta7785;
}));

(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async7784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7785], null);
}));

(cljs.core.async.t_cljs$core$async7784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7784");

(cljs.core.async.t_cljs$core$async7784.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async7784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7784.
 */
cljs.core.async.__GT_t_cljs$core$async7784 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7784(flag__$1,meta7785){
return (new cljs.core.async.t_cljs$core$async7784(flag__$1,meta7785));
});

}

return (new cljs.core.async.t_cljs$core$async7784(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7787 = (function (flag,cb,meta7788){
this.flag = flag;
this.cb = cb;
this.meta7788 = meta7788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7789,meta7788__$1){
var self__ = this;
var _7789__$1 = this;
return (new cljs.core.async.t_cljs$core$async7787(self__.flag,self__.cb,meta7788__$1));
}));

(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7789){
var self__ = this;
var _7789__$1 = this;
return self__.meta7788;
}));

(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async7787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7788], null);
}));

(cljs.core.async.t_cljs$core$async7787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7787");

(cljs.core.async.t_cljs$core$async7787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async7787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7787.
 */
cljs.core.async.__GT_t_cljs$core$async7787 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7787(flag__$1,cb__$1,meta7788){
return (new cljs.core.async.t_cljs$core$async7787(flag__$1,cb__$1,meta7788));
});

}

return (new cljs.core.async.t_cljs$core$async7787(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__7790_SHARP_){
var G__7792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7790_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7792) : fret.call(null,G__7792));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7791_SHARP_){
var G__7793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7791_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7793) : fret.call(null,G__7793));
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
var G__7794 = (i + (1));
i = G__7794;
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
var len__4736__auto___7800 = arguments.length;
var i__4737__auto___7801 = (0);
while(true){
if((i__4737__auto___7801 < len__4736__auto___7800)){
args__4742__auto__.push((arguments[i__4737__auto___7801]));

var G__7802 = (i__4737__auto___7801 + (1));
i__4737__auto___7801 = G__7802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7797){
var map__7798 = p__7797;
var map__7798__$1 = (((((!((map__7798 == null))))?(((((map__7798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7798):map__7798);
var opts = map__7798__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7795){
var G__7796 = cljs.core.first(seq7795);
var seq7795__$1 = cljs.core.next(seq7795);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7796,seq7795__$1);
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
var G__7804 = arguments.length;
switch (G__7804) {
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
var c__7701__auto___7850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_7828){
var state_val_7829 = (state_7828[(1)]);
if((state_val_7829 === (7))){
var inst_7824 = (state_7828[(2)]);
var state_7828__$1 = state_7828;
var statearr_7830_7851 = state_7828__$1;
(statearr_7830_7851[(2)] = inst_7824);

(statearr_7830_7851[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (1))){
var state_7828__$1 = state_7828;
var statearr_7831_7852 = state_7828__$1;
(statearr_7831_7852[(2)] = null);

(statearr_7831_7852[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (4))){
var inst_7807 = (state_7828[(7)]);
var inst_7807__$1 = (state_7828[(2)]);
var inst_7808 = (inst_7807__$1 == null);
var state_7828__$1 = (function (){var statearr_7832 = state_7828;
(statearr_7832[(7)] = inst_7807__$1);

return statearr_7832;
})();
if(cljs.core.truth_(inst_7808)){
var statearr_7833_7853 = state_7828__$1;
(statearr_7833_7853[(1)] = (5));

} else {
var statearr_7834_7854 = state_7828__$1;
(statearr_7834_7854[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (13))){
var state_7828__$1 = state_7828;
var statearr_7835_7855 = state_7828__$1;
(statearr_7835_7855[(2)] = null);

(statearr_7835_7855[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (6))){
var inst_7807 = (state_7828[(7)]);
var state_7828__$1 = state_7828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7828__$1,(11),to,inst_7807);
} else {
if((state_val_7829 === (3))){
var inst_7826 = (state_7828[(2)]);
var state_7828__$1 = state_7828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7828__$1,inst_7826);
} else {
if((state_val_7829 === (12))){
var state_7828__$1 = state_7828;
var statearr_7836_7856 = state_7828__$1;
(statearr_7836_7856[(2)] = null);

(statearr_7836_7856[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (2))){
var state_7828__$1 = state_7828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7828__$1,(4),from);
} else {
if((state_val_7829 === (11))){
var inst_7817 = (state_7828[(2)]);
var state_7828__$1 = state_7828;
if(cljs.core.truth_(inst_7817)){
var statearr_7837_7857 = state_7828__$1;
(statearr_7837_7857[(1)] = (12));

} else {
var statearr_7838_7858 = state_7828__$1;
(statearr_7838_7858[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (9))){
var state_7828__$1 = state_7828;
var statearr_7839_7859 = state_7828__$1;
(statearr_7839_7859[(2)] = null);

(statearr_7839_7859[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (5))){
var state_7828__$1 = state_7828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7840_7860 = state_7828__$1;
(statearr_7840_7860[(1)] = (8));

} else {
var statearr_7841_7861 = state_7828__$1;
(statearr_7841_7861[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (14))){
var inst_7822 = (state_7828[(2)]);
var state_7828__$1 = state_7828;
var statearr_7842_7862 = state_7828__$1;
(statearr_7842_7862[(2)] = inst_7822);

(statearr_7842_7862[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (10))){
var inst_7814 = (state_7828[(2)]);
var state_7828__$1 = state_7828;
var statearr_7843_7863 = state_7828__$1;
(statearr_7843_7863[(2)] = inst_7814);

(statearr_7843_7863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7829 === (8))){
var inst_7811 = cljs.core.async.close_BANG_(to);
var state_7828__$1 = state_7828;
var statearr_7844_7864 = state_7828__$1;
(statearr_7844_7864[(2)] = inst_7811);

(statearr_7844_7864[(1)] = (10));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_7845 = [null,null,null,null,null,null,null,null];
(statearr_7845[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_7845[(1)] = (1));

return statearr_7845;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_7828){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_7828);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e7846){if((e7846 instanceof Object)){
var ex__7598__auto__ = e7846;
var statearr_7847_7865 = state_7828;
(statearr_7847_7865[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7828);

return cljs.core.cst$kw$recur;
} else {
throw e7846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__7866 = state_7828;
state_7828 = G__7866;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_7828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_7828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_7848 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_7848[(6)] = c__7701__auto___7850);

return statearr_7848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var process = (function (p__7867){
var vec__7868 = p__7867;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7868,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7868,(1),null);
var job = vec__7868;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7701__auto___8039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_7875){
var state_val_7876 = (state_7875[(1)]);
if((state_val_7876 === (1))){
var state_7875__$1 = state_7875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7875__$1,(2),res,v);
} else {
if((state_val_7876 === (2))){
var inst_7872 = (state_7875[(2)]);
var inst_7873 = cljs.core.async.close_BANG_(res);
var state_7875__$1 = (function (){var statearr_7877 = state_7875;
(statearr_7877[(7)] = inst_7872);

return statearr_7877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7875__$1,inst_7873);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_7878 = [null,null,null,null,null,null,null,null];
(statearr_7878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__);

(statearr_7878[(1)] = (1));

return statearr_7878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1 = (function (state_7875){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_7875);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e7879){if((e7879 instanceof Object)){
var ex__7598__auto__ = e7879;
var statearr_7880_8040 = state_7875;
(statearr_7880_8040[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7875);

return cljs.core.cst$kw$recur;
} else {
throw e7879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8041 = state_7875;
state_7875 = G__8041;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = function(state_7875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1.call(this,state_7875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_7881 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_7881[(6)] = c__7701__auto___8039);

return statearr_7881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__7882){
var vec__7883 = p__7882;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7883,(1),null);
var job = vec__7883;
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
var n__4613__auto___8042 = n;
var __8043 = (0);
while(true){
if((__8043 < n__4613__auto___8042)){
var G__7886_8044 = type;
var G__7886_8045__$1 = (((G__7886_8044 instanceof cljs.core.Keyword))?G__7886_8044.fqn:null);
switch (G__7886_8045__$1) {
case "compute":
var c__7701__auto___8047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8043,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = ((function (__8043,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function (state_7899){
var state_val_7900 = (state_7899[(1)]);
if((state_val_7900 === (1))){
var state_7899__$1 = state_7899;
var statearr_7901_8048 = state_7899__$1;
(statearr_7901_8048[(2)] = null);

(statearr_7901_8048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7900 === (2))){
var state_7899__$1 = state_7899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7899__$1,(4),jobs);
} else {
if((state_val_7900 === (3))){
var inst_7897 = (state_7899[(2)]);
var state_7899__$1 = state_7899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7899__$1,inst_7897);
} else {
if((state_val_7900 === (4))){
var inst_7889 = (state_7899[(2)]);
var inst_7890 = process(inst_7889);
var state_7899__$1 = state_7899;
if(cljs.core.truth_(inst_7890)){
var statearr_7902_8049 = state_7899__$1;
(statearr_7902_8049[(1)] = (5));

} else {
var statearr_7903_8050 = state_7899__$1;
(statearr_7903_8050[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7900 === (5))){
var state_7899__$1 = state_7899;
var statearr_7904_8051 = state_7899__$1;
(statearr_7904_8051[(2)] = null);

(statearr_7904_8051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7900 === (6))){
var state_7899__$1 = state_7899;
var statearr_7905_8052 = state_7899__$1;
(statearr_7905_8052[(2)] = null);

(statearr_7905_8052[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7900 === (7))){
var inst_7895 = (state_7899[(2)]);
var state_7899__$1 = state_7899;
var statearr_7906_8053 = state_7899__$1;
(statearr_7906_8053[(2)] = inst_7895);

(statearr_7906_8053[(1)] = (3));


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
});})(__8043,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
;
return ((function (__8043,switch__7594__auto__,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_7907 = [null,null,null,null,null,null,null];
(statearr_7907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__);

(statearr_7907[(1)] = (1));

return statearr_7907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1 = (function (state_7899){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_7899);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e7908){if((e7908 instanceof Object)){
var ex__7598__auto__ = e7908;
var statearr_7909_8054 = state_7899;
(statearr_7909_8054[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7899);

return cljs.core.cst$kw$recur;
} else {
throw e7908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8055 = state_7899;
state_7899 = G__8055;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = function(state_7899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1.call(this,state_7899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__;
})()
;})(__8043,switch__7594__auto__,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
})();
var state__7703__auto__ = (function (){var statearr_7910 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_7910[(6)] = c__7701__auto___8047);

return statearr_7910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
});})(__8043,c__7701__auto___8047,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
);


break;
case "async":
var c__7701__auto___8056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__8043,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = ((function (__8043,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function (state_7923){
var state_val_7924 = (state_7923[(1)]);
if((state_val_7924 === (1))){
var state_7923__$1 = state_7923;
var statearr_7925_8057 = state_7923__$1;
(statearr_7925_8057[(2)] = null);

(statearr_7925_8057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7924 === (2))){
var state_7923__$1 = state_7923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7923__$1,(4),jobs);
} else {
if((state_val_7924 === (3))){
var inst_7921 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7923__$1,inst_7921);
} else {
if((state_val_7924 === (4))){
var inst_7913 = (state_7923[(2)]);
var inst_7914 = async(inst_7913);
var state_7923__$1 = state_7923;
if(cljs.core.truth_(inst_7914)){
var statearr_7926_8058 = state_7923__$1;
(statearr_7926_8058[(1)] = (5));

} else {
var statearr_7927_8059 = state_7923__$1;
(statearr_7927_8059[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7924 === (5))){
var state_7923__$1 = state_7923;
var statearr_7928_8060 = state_7923__$1;
(statearr_7928_8060[(2)] = null);

(statearr_7928_8060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7924 === (6))){
var state_7923__$1 = state_7923;
var statearr_7929_8061 = state_7923__$1;
(statearr_7929_8061[(2)] = null);

(statearr_7929_8061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7924 === (7))){
var inst_7919 = (state_7923[(2)]);
var state_7923__$1 = state_7923;
var statearr_7930_8062 = state_7923__$1;
(statearr_7930_8062[(2)] = inst_7919);

(statearr_7930_8062[(1)] = (3));


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
});})(__8043,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
;
return ((function (__8043,switch__7594__auto__,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_7931 = [null,null,null,null,null,null,null];
(statearr_7931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__);

(statearr_7931[(1)] = (1));

return statearr_7931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1 = (function (state_7923){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_7923);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e7932){if((e7932 instanceof Object)){
var ex__7598__auto__ = e7932;
var statearr_7933_8063 = state_7923;
(statearr_7933_8063[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7923);

return cljs.core.cst$kw$recur;
} else {
throw e7932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8064 = state_7923;
state_7923 = G__8064;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = function(state_7923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1.call(this,state_7923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__;
})()
;})(__8043,switch__7594__auto__,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
})();
var state__7703__auto__ = (function (){var statearr_7934 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_7934[(6)] = c__7701__auto___8056);

return statearr_7934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
});})(__8043,c__7701__auto___8056,G__7886_8044,G__7886_8045__$1,n__4613__auto___8042,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7886_8045__$1)].join('')));

}

var G__8065 = (__8043 + (1));
__8043 = G__8065;
continue;
} else {
}
break;
}

var c__7701__auto___8066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_7956){
var state_val_7957 = (state_7956[(1)]);
if((state_val_7957 === (7))){
var inst_7952 = (state_7956[(2)]);
var state_7956__$1 = state_7956;
var statearr_7958_8067 = state_7956__$1;
(statearr_7958_8067[(2)] = inst_7952);

(statearr_7958_8067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7957 === (1))){
var state_7956__$1 = state_7956;
var statearr_7959_8068 = state_7956__$1;
(statearr_7959_8068[(2)] = null);

(statearr_7959_8068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7957 === (4))){
var inst_7937 = (state_7956[(7)]);
var inst_7937__$1 = (state_7956[(2)]);
var inst_7938 = (inst_7937__$1 == null);
var state_7956__$1 = (function (){var statearr_7960 = state_7956;
(statearr_7960[(7)] = inst_7937__$1);

return statearr_7960;
})();
if(cljs.core.truth_(inst_7938)){
var statearr_7961_8069 = state_7956__$1;
(statearr_7961_8069[(1)] = (5));

} else {
var statearr_7962_8070 = state_7956__$1;
(statearr_7962_8070[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7957 === (6))){
var inst_7937 = (state_7956[(7)]);
var inst_7942 = (state_7956[(8)]);
var inst_7942__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7944 = [inst_7937,inst_7942__$1];
var inst_7945 = (new cljs.core.PersistentVector(null,2,(5),inst_7943,inst_7944,null));
var state_7956__$1 = (function (){var statearr_7963 = state_7956;
(statearr_7963[(8)] = inst_7942__$1);

return statearr_7963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7956__$1,(8),jobs,inst_7945);
} else {
if((state_val_7957 === (3))){
var inst_7954 = (state_7956[(2)]);
var state_7956__$1 = state_7956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7956__$1,inst_7954);
} else {
if((state_val_7957 === (2))){
var state_7956__$1 = state_7956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7956__$1,(4),from);
} else {
if((state_val_7957 === (9))){
var inst_7949 = (state_7956[(2)]);
var state_7956__$1 = (function (){var statearr_7964 = state_7956;
(statearr_7964[(9)] = inst_7949);

return statearr_7964;
})();
var statearr_7965_8071 = state_7956__$1;
(statearr_7965_8071[(2)] = null);

(statearr_7965_8071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7957 === (5))){
var inst_7940 = cljs.core.async.close_BANG_(jobs);
var state_7956__$1 = state_7956;
var statearr_7966_8072 = state_7956__$1;
(statearr_7966_8072[(2)] = inst_7940);

(statearr_7966_8072[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7957 === (8))){
var inst_7942 = (state_7956[(8)]);
var inst_7947 = (state_7956[(2)]);
var state_7956__$1 = (function (){var statearr_7967 = state_7956;
(statearr_7967[(10)] = inst_7947);

return statearr_7967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7956__$1,(9),results,inst_7942);
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
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_7968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__);

(statearr_7968[(1)] = (1));

return statearr_7968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1 = (function (state_7956){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_7956);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e7969){if((e7969 instanceof Object)){
var ex__7598__auto__ = e7969;
var statearr_7970_8073 = state_7956;
(statearr_7970_8073[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7956);

return cljs.core.cst$kw$recur;
} else {
throw e7969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8074 = state_7956;
state_7956 = G__8074;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = function(state_7956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1.call(this,state_7956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_7971 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_7971[(6)] = c__7701__auto___8066);

return statearr_7971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


var c__7701__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8009){
var state_val_8010 = (state_8009[(1)]);
if((state_val_8010 === (7))){
var inst_8005 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8011_8075 = state_8009__$1;
(statearr_8011_8075[(2)] = inst_8005);

(statearr_8011_8075[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (20))){
var state_8009__$1 = state_8009;
var statearr_8012_8076 = state_8009__$1;
(statearr_8012_8076[(2)] = null);

(statearr_8012_8076[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (1))){
var state_8009__$1 = state_8009;
var statearr_8013_8077 = state_8009__$1;
(statearr_8013_8077[(2)] = null);

(statearr_8013_8077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (4))){
var inst_7974 = (state_8009[(7)]);
var inst_7974__$1 = (state_8009[(2)]);
var inst_7975 = (inst_7974__$1 == null);
var state_8009__$1 = (function (){var statearr_8014 = state_8009;
(statearr_8014[(7)] = inst_7974__$1);

return statearr_8014;
})();
if(cljs.core.truth_(inst_7975)){
var statearr_8015_8078 = state_8009__$1;
(statearr_8015_8078[(1)] = (5));

} else {
var statearr_8016_8079 = state_8009__$1;
(statearr_8016_8079[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (15))){
var inst_7987 = (state_8009[(8)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8009__$1,(18),to,inst_7987);
} else {
if((state_val_8010 === (21))){
var inst_8000 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8017_8080 = state_8009__$1;
(statearr_8017_8080[(2)] = inst_8000);

(statearr_8017_8080[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (13))){
var inst_8002 = (state_8009[(2)]);
var state_8009__$1 = (function (){var statearr_8018 = state_8009;
(statearr_8018[(9)] = inst_8002);

return statearr_8018;
})();
var statearr_8019_8081 = state_8009__$1;
(statearr_8019_8081[(2)] = null);

(statearr_8019_8081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (6))){
var inst_7974 = (state_8009[(7)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(11),inst_7974);
} else {
if((state_val_8010 === (17))){
var inst_7995 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
if(cljs.core.truth_(inst_7995)){
var statearr_8020_8082 = state_8009__$1;
(statearr_8020_8082[(1)] = (19));

} else {
var statearr_8021_8083 = state_8009__$1;
(statearr_8021_8083[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (3))){
var inst_8007 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8009__$1,inst_8007);
} else {
if((state_val_8010 === (12))){
var inst_7984 = (state_8009[(10)]);
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(14),inst_7984);
} else {
if((state_val_8010 === (2))){
var state_8009__$1 = state_8009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8009__$1,(4),results);
} else {
if((state_val_8010 === (19))){
var state_8009__$1 = state_8009;
var statearr_8022_8084 = state_8009__$1;
(statearr_8022_8084[(2)] = null);

(statearr_8022_8084[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (11))){
var inst_7984 = (state_8009[(2)]);
var state_8009__$1 = (function (){var statearr_8023 = state_8009;
(statearr_8023[(10)] = inst_7984);

return statearr_8023;
})();
var statearr_8024_8085 = state_8009__$1;
(statearr_8024_8085[(2)] = null);

(statearr_8024_8085[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (9))){
var state_8009__$1 = state_8009;
var statearr_8025_8086 = state_8009__$1;
(statearr_8025_8086[(2)] = null);

(statearr_8025_8086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (5))){
var state_8009__$1 = state_8009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8026_8087 = state_8009__$1;
(statearr_8026_8087[(1)] = (8));

} else {
var statearr_8027_8088 = state_8009__$1;
(statearr_8027_8088[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (14))){
var inst_7987 = (state_8009[(8)]);
var inst_7987__$1 = (state_8009[(2)]);
var inst_7988 = (inst_7987__$1 == null);
var inst_7989 = cljs.core.not(inst_7988);
var state_8009__$1 = (function (){var statearr_8028 = state_8009;
(statearr_8028[(8)] = inst_7987__$1);

return statearr_8028;
})();
if(inst_7989){
var statearr_8029_8089 = state_8009__$1;
(statearr_8029_8089[(1)] = (15));

} else {
var statearr_8030_8090 = state_8009__$1;
(statearr_8030_8090[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (16))){
var state_8009__$1 = state_8009;
var statearr_8031_8091 = state_8009__$1;
(statearr_8031_8091[(2)] = false);

(statearr_8031_8091[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (10))){
var inst_7981 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8032_8092 = state_8009__$1;
(statearr_8032_8092[(2)] = inst_7981);

(statearr_8032_8092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (18))){
var inst_7992 = (state_8009[(2)]);
var state_8009__$1 = state_8009;
var statearr_8033_8093 = state_8009__$1;
(statearr_8033_8093[(2)] = inst_7992);

(statearr_8033_8093[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8010 === (8))){
var inst_7978 = cljs.core.async.close_BANG_(to);
var state_8009__$1 = state_8009;
var statearr_8034_8094 = state_8009__$1;
(statearr_8034_8094[(2)] = inst_7978);

(statearr_8034_8094[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_8035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__);

(statearr_8035[(1)] = (1));

return statearr_8035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1 = (function (state_8009){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8009);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8036){if((e8036 instanceof Object)){
var ex__7598__auto__ = e8036;
var statearr_8037_8095 = state_8009;
(statearr_8037_8095[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8009);

return cljs.core.cst$kw$recur;
} else {
throw e8036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8096 = state_8009;
state_8009 = G__8096;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__ = function(state_8009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1.call(this,state_8009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8038 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8038[(6)] = c__7701__auto__);

return statearr_8038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));

return c__7701__auto__;
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
var G__8098 = arguments.length;
switch (G__8098) {
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
var G__8101 = arguments.length;
switch (G__8101) {
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
var G__8104 = arguments.length;
switch (G__8104) {
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
var c__7701__auto___8153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8130){
var state_val_8131 = (state_8130[(1)]);
if((state_val_8131 === (7))){
var inst_8126 = (state_8130[(2)]);
var state_8130__$1 = state_8130;
var statearr_8132_8154 = state_8130__$1;
(statearr_8132_8154[(2)] = inst_8126);

(statearr_8132_8154[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (1))){
var state_8130__$1 = state_8130;
var statearr_8133_8155 = state_8130__$1;
(statearr_8133_8155[(2)] = null);

(statearr_8133_8155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (4))){
var inst_8107 = (state_8130[(7)]);
var inst_8107__$1 = (state_8130[(2)]);
var inst_8108 = (inst_8107__$1 == null);
var state_8130__$1 = (function (){var statearr_8134 = state_8130;
(statearr_8134[(7)] = inst_8107__$1);

return statearr_8134;
})();
if(cljs.core.truth_(inst_8108)){
var statearr_8135_8156 = state_8130__$1;
(statearr_8135_8156[(1)] = (5));

} else {
var statearr_8136_8157 = state_8130__$1;
(statearr_8136_8157[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (13))){
var state_8130__$1 = state_8130;
var statearr_8137_8158 = state_8130__$1;
(statearr_8137_8158[(2)] = null);

(statearr_8137_8158[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (6))){
var inst_8107 = (state_8130[(7)]);
var inst_8113 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8107) : p.call(null,inst_8107));
var state_8130__$1 = state_8130;
if(cljs.core.truth_(inst_8113)){
var statearr_8138_8159 = state_8130__$1;
(statearr_8138_8159[(1)] = (9));

} else {
var statearr_8139_8160 = state_8130__$1;
(statearr_8139_8160[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (3))){
var inst_8128 = (state_8130[(2)]);
var state_8130__$1 = state_8130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8130__$1,inst_8128);
} else {
if((state_val_8131 === (12))){
var state_8130__$1 = state_8130;
var statearr_8140_8161 = state_8130__$1;
(statearr_8140_8161[(2)] = null);

(statearr_8140_8161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (2))){
var state_8130__$1 = state_8130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8130__$1,(4),ch);
} else {
if((state_val_8131 === (11))){
var inst_8107 = (state_8130[(7)]);
var inst_8117 = (state_8130[(2)]);
var state_8130__$1 = state_8130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8130__$1,(8),inst_8117,inst_8107);
} else {
if((state_val_8131 === (9))){
var state_8130__$1 = state_8130;
var statearr_8141_8162 = state_8130__$1;
(statearr_8141_8162[(2)] = tc);

(statearr_8141_8162[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (5))){
var inst_8110 = cljs.core.async.close_BANG_(tc);
var inst_8111 = cljs.core.async.close_BANG_(fc);
var state_8130__$1 = (function (){var statearr_8142 = state_8130;
(statearr_8142[(8)] = inst_8110);

return statearr_8142;
})();
var statearr_8143_8163 = state_8130__$1;
(statearr_8143_8163[(2)] = inst_8111);

(statearr_8143_8163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (14))){
var inst_8124 = (state_8130[(2)]);
var state_8130__$1 = state_8130;
var statearr_8144_8164 = state_8130__$1;
(statearr_8144_8164[(2)] = inst_8124);

(statearr_8144_8164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (10))){
var state_8130__$1 = state_8130;
var statearr_8145_8165 = state_8130__$1;
(statearr_8145_8165[(2)] = fc);

(statearr_8145_8165[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8131 === (8))){
var inst_8119 = (state_8130[(2)]);
var state_8130__$1 = state_8130;
if(cljs.core.truth_(inst_8119)){
var statearr_8146_8166 = state_8130__$1;
(statearr_8146_8166[(1)] = (12));

} else {
var statearr_8147_8167 = state_8130__$1;
(statearr_8147_8167[(1)] = (13));

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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_8148 = [null,null,null,null,null,null,null,null,null];
(statearr_8148[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_8148[(1)] = (1));

return statearr_8148;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_8130){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8130);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8149){if((e8149 instanceof Object)){
var ex__7598__auto__ = e8149;
var statearr_8150_8168 = state_8130;
(statearr_8150_8168[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8130);

return cljs.core.cst$kw$recur;
} else {
throw e8149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8169 = state_8130;
state_8130 = G__8169;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_8130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_8130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8151 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8151[(6)] = c__7701__auto___8153);

return statearr_8151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var c__7701__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8190){
var state_val_8191 = (state_8190[(1)]);
if((state_val_8191 === (7))){
var inst_8186 = (state_8190[(2)]);
var state_8190__$1 = state_8190;
var statearr_8192_8210 = state_8190__$1;
(statearr_8192_8210[(2)] = inst_8186);

(statearr_8192_8210[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (1))){
var inst_8170 = init;
var state_8190__$1 = (function (){var statearr_8193 = state_8190;
(statearr_8193[(7)] = inst_8170);

return statearr_8193;
})();
var statearr_8194_8211 = state_8190__$1;
(statearr_8194_8211[(2)] = null);

(statearr_8194_8211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (4))){
var inst_8173 = (state_8190[(8)]);
var inst_8173__$1 = (state_8190[(2)]);
var inst_8174 = (inst_8173__$1 == null);
var state_8190__$1 = (function (){var statearr_8195 = state_8190;
(statearr_8195[(8)] = inst_8173__$1);

return statearr_8195;
})();
if(cljs.core.truth_(inst_8174)){
var statearr_8196_8212 = state_8190__$1;
(statearr_8196_8212[(1)] = (5));

} else {
var statearr_8197_8213 = state_8190__$1;
(statearr_8197_8213[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (6))){
var inst_8170 = (state_8190[(7)]);
var inst_8177 = (state_8190[(9)]);
var inst_8173 = (state_8190[(8)]);
var inst_8177__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8170,inst_8173) : f.call(null,inst_8170,inst_8173));
var inst_8178 = cljs.core.reduced_QMARK_(inst_8177__$1);
var state_8190__$1 = (function (){var statearr_8198 = state_8190;
(statearr_8198[(9)] = inst_8177__$1);

return statearr_8198;
})();
if(inst_8178){
var statearr_8199_8214 = state_8190__$1;
(statearr_8199_8214[(1)] = (8));

} else {
var statearr_8200_8215 = state_8190__$1;
(statearr_8200_8215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (3))){
var inst_8188 = (state_8190[(2)]);
var state_8190__$1 = state_8190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8190__$1,inst_8188);
} else {
if((state_val_8191 === (2))){
var state_8190__$1 = state_8190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8190__$1,(4),ch);
} else {
if((state_val_8191 === (9))){
var inst_8177 = (state_8190[(9)]);
var inst_8170 = inst_8177;
var state_8190__$1 = (function (){var statearr_8201 = state_8190;
(statearr_8201[(7)] = inst_8170);

return statearr_8201;
})();
var statearr_8202_8216 = state_8190__$1;
(statearr_8202_8216[(2)] = null);

(statearr_8202_8216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (5))){
var inst_8170 = (state_8190[(7)]);
var state_8190__$1 = state_8190;
var statearr_8203_8217 = state_8190__$1;
(statearr_8203_8217[(2)] = inst_8170);

(statearr_8203_8217[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (10))){
var inst_8184 = (state_8190[(2)]);
var state_8190__$1 = state_8190;
var statearr_8204_8218 = state_8190__$1;
(statearr_8204_8218[(2)] = inst_8184);

(statearr_8204_8218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8191 === (8))){
var inst_8177 = (state_8190[(9)]);
var inst_8180 = cljs.core.deref(inst_8177);
var state_8190__$1 = state_8190;
var statearr_8205_8219 = state_8190__$1;
(statearr_8205_8219[(2)] = inst_8180);

(statearr_8205_8219[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__7595__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7595__auto____0 = (function (){
var statearr_8206 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8206[(0)] = cljs$core$async$reduce_$_state_machine__7595__auto__);

(statearr_8206[(1)] = (1));

return statearr_8206;
});
var cljs$core$async$reduce_$_state_machine__7595__auto____1 = (function (state_8190){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8190);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8207){if((e8207 instanceof Object)){
var ex__7598__auto__ = e8207;
var statearr_8208_8220 = state_8190;
(statearr_8208_8220[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8190);

return cljs.core.cst$kw$recur;
} else {
throw e8207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8221 = state_8190;
state_8190 = G__8221;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7595__auto__ = function(state_8190){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7595__auto____1.call(this,state_8190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7595__auto____0;
cljs$core$async$reduce_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7595__auto____1;
return cljs$core$async$reduce_$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8209 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8209[(6)] = c__7701__auto__);

return statearr_8209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));

return c__7701__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7701__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8227){
var state_val_8228 = (state_8227[(1)]);
if((state_val_8228 === (1))){
var inst_8222 = cljs.core.async.reduce(f__$1,init,ch);
var state_8227__$1 = state_8227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8227__$1,(2),inst_8222);
} else {
if((state_val_8228 === (2))){
var inst_8224 = (state_8227[(2)]);
var inst_8225 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8224) : f__$1.call(null,inst_8224));
var state_8227__$1 = state_8227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8227__$1,inst_8225);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__7595__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7595__auto____0 = (function (){
var statearr_8229 = [null,null,null,null,null,null,null];
(statearr_8229[(0)] = cljs$core$async$transduce_$_state_machine__7595__auto__);

(statearr_8229[(1)] = (1));

return statearr_8229;
});
var cljs$core$async$transduce_$_state_machine__7595__auto____1 = (function (state_8227){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8227);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8230){if((e8230 instanceof Object)){
var ex__7598__auto__ = e8230;
var statearr_8231_8233 = state_8227;
(statearr_8231_8233[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8227);

return cljs.core.cst$kw$recur;
} else {
throw e8230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8234 = state_8227;
state_8227 = G__8234;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7595__auto__ = function(state_8227){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7595__auto____1.call(this,state_8227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7595__auto____0;
cljs$core$async$transduce_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7595__auto____1;
return cljs$core$async$transduce_$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8232 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8232[(6)] = c__7701__auto__);

return statearr_8232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));

return c__7701__auto__;
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
var G__8236 = arguments.length;
switch (G__8236) {
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
var c__7701__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8261){
var state_val_8262 = (state_8261[(1)]);
if((state_val_8262 === (7))){
var inst_8243 = (state_8261[(2)]);
var state_8261__$1 = state_8261;
var statearr_8263_8284 = state_8261__$1;
(statearr_8263_8284[(2)] = inst_8243);

(statearr_8263_8284[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (1))){
var inst_8237 = cljs.core.seq(coll);
var inst_8238 = inst_8237;
var state_8261__$1 = (function (){var statearr_8264 = state_8261;
(statearr_8264[(7)] = inst_8238);

return statearr_8264;
})();
var statearr_8265_8285 = state_8261__$1;
(statearr_8265_8285[(2)] = null);

(statearr_8265_8285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (4))){
var inst_8238 = (state_8261[(7)]);
var inst_8241 = cljs.core.first(inst_8238);
var state_8261__$1 = state_8261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8261__$1,(7),ch,inst_8241);
} else {
if((state_val_8262 === (13))){
var inst_8255 = (state_8261[(2)]);
var state_8261__$1 = state_8261;
var statearr_8266_8286 = state_8261__$1;
(statearr_8266_8286[(2)] = inst_8255);

(statearr_8266_8286[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (6))){
var inst_8246 = (state_8261[(2)]);
var state_8261__$1 = state_8261;
if(cljs.core.truth_(inst_8246)){
var statearr_8267_8287 = state_8261__$1;
(statearr_8267_8287[(1)] = (8));

} else {
var statearr_8268_8288 = state_8261__$1;
(statearr_8268_8288[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (3))){
var inst_8259 = (state_8261[(2)]);
var state_8261__$1 = state_8261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8261__$1,inst_8259);
} else {
if((state_val_8262 === (12))){
var state_8261__$1 = state_8261;
var statearr_8269_8289 = state_8261__$1;
(statearr_8269_8289[(2)] = null);

(statearr_8269_8289[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (2))){
var inst_8238 = (state_8261[(7)]);
var state_8261__$1 = state_8261;
if(cljs.core.truth_(inst_8238)){
var statearr_8270_8290 = state_8261__$1;
(statearr_8270_8290[(1)] = (4));

} else {
var statearr_8271_8291 = state_8261__$1;
(statearr_8271_8291[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (11))){
var inst_8252 = cljs.core.async.close_BANG_(ch);
var state_8261__$1 = state_8261;
var statearr_8272_8292 = state_8261__$1;
(statearr_8272_8292[(2)] = inst_8252);

(statearr_8272_8292[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (9))){
var state_8261__$1 = state_8261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8273_8293 = state_8261__$1;
(statearr_8273_8293[(1)] = (11));

} else {
var statearr_8274_8294 = state_8261__$1;
(statearr_8274_8294[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (5))){
var inst_8238 = (state_8261[(7)]);
var state_8261__$1 = state_8261;
var statearr_8275_8295 = state_8261__$1;
(statearr_8275_8295[(2)] = inst_8238);

(statearr_8275_8295[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (10))){
var inst_8257 = (state_8261[(2)]);
var state_8261__$1 = state_8261;
var statearr_8276_8296 = state_8261__$1;
(statearr_8276_8296[(2)] = inst_8257);

(statearr_8276_8296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8262 === (8))){
var inst_8238 = (state_8261[(7)]);
var inst_8248 = cljs.core.next(inst_8238);
var inst_8238__$1 = inst_8248;
var state_8261__$1 = (function (){var statearr_8277 = state_8261;
(statearr_8277[(7)] = inst_8238__$1);

return statearr_8277;
})();
var statearr_8278_8297 = state_8261__$1;
(statearr_8278_8297[(2)] = null);

(statearr_8278_8297[(1)] = (2));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_8279 = [null,null,null,null,null,null,null,null];
(statearr_8279[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_8279[(1)] = (1));

return statearr_8279;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_8261){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8261);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8280){if((e8280 instanceof Object)){
var ex__7598__auto__ = e8280;
var statearr_8281_8298 = state_8261;
(statearr_8281_8298[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8261);

return cljs.core.cst$kw$recur;
} else {
throw e8280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8299 = state_8261;
state_8261 = G__8299;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_8261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_8261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8282 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8282[(6)] = c__7701__auto__);

return statearr_8282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));

return c__7701__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_8300 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_8300(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_8301 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_8301(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_8302 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_8302(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_8303 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_8303(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8304 = (function (ch,cs,meta8305){
this.ch = ch;
this.cs = cs;
this.meta8305 = meta8305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8306,meta8305__$1){
var self__ = this;
var _8306__$1 = this;
return (new cljs.core.async.t_cljs$core$async8304(self__.ch,self__.cs,meta8305__$1));
}));

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8306){
var self__ = this;
var _8306__$1 = this;
return self__.meta8305;
}));

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async8304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async8304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta8305], null);
}));

(cljs.core.async.t_cljs$core$async8304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8304");

(cljs.core.async.t_cljs$core$async8304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8304.
 */
cljs.core.async.__GT_t_cljs$core$async8304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async8304(ch__$1,cs__$1,meta8305){
return (new cljs.core.async.t_cljs$core$async8304(ch__$1,cs__$1,meta8305));
});

}

return (new cljs.core.async.t_cljs$core$async8304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7701__auto___8526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8441){
var state_val_8442 = (state_8441[(1)]);
if((state_val_8442 === (7))){
var inst_8437 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8443_8527 = state_8441__$1;
(statearr_8443_8527[(2)] = inst_8437);

(statearr_8443_8527[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (20))){
var inst_8340 = (state_8441[(7)]);
var inst_8352 = cljs.core.first(inst_8340);
var inst_8353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8352,(0),null);
var inst_8354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8352,(1),null);
var state_8441__$1 = (function (){var statearr_8444 = state_8441;
(statearr_8444[(8)] = inst_8353);

return statearr_8444;
})();
if(cljs.core.truth_(inst_8354)){
var statearr_8445_8528 = state_8441__$1;
(statearr_8445_8528[(1)] = (22));

} else {
var statearr_8446_8529 = state_8441__$1;
(statearr_8446_8529[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (27))){
var inst_8382 = (state_8441[(9)]);
var inst_8309 = (state_8441[(10)]);
var inst_8389 = (state_8441[(11)]);
var inst_8384 = (state_8441[(12)]);
var inst_8389__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8382,inst_8384);
var inst_8390 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8389__$1,inst_8309,done);
var state_8441__$1 = (function (){var statearr_8447 = state_8441;
(statearr_8447[(11)] = inst_8389__$1);

return statearr_8447;
})();
if(cljs.core.truth_(inst_8390)){
var statearr_8448_8530 = state_8441__$1;
(statearr_8448_8530[(1)] = (30));

} else {
var statearr_8449_8531 = state_8441__$1;
(statearr_8449_8531[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (1))){
var state_8441__$1 = state_8441;
var statearr_8450_8532 = state_8441__$1;
(statearr_8450_8532[(2)] = null);

(statearr_8450_8532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (24))){
var inst_8340 = (state_8441[(7)]);
var inst_8359 = (state_8441[(2)]);
var inst_8360 = cljs.core.next(inst_8340);
var inst_8318 = inst_8360;
var inst_8319 = null;
var inst_8320 = (0);
var inst_8321 = (0);
var state_8441__$1 = (function (){var statearr_8451 = state_8441;
(statearr_8451[(13)] = inst_8319);

(statearr_8451[(14)] = inst_8321);

(statearr_8451[(15)] = inst_8318);

(statearr_8451[(16)] = inst_8359);

(statearr_8451[(17)] = inst_8320);

return statearr_8451;
})();
var statearr_8452_8533 = state_8441__$1;
(statearr_8452_8533[(2)] = null);

(statearr_8452_8533[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (39))){
var state_8441__$1 = state_8441;
var statearr_8456_8534 = state_8441__$1;
(statearr_8456_8534[(2)] = null);

(statearr_8456_8534[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (4))){
var inst_8309 = (state_8441[(10)]);
var inst_8309__$1 = (state_8441[(2)]);
var inst_8310 = (inst_8309__$1 == null);
var state_8441__$1 = (function (){var statearr_8457 = state_8441;
(statearr_8457[(10)] = inst_8309__$1);

return statearr_8457;
})();
if(cljs.core.truth_(inst_8310)){
var statearr_8458_8535 = state_8441__$1;
(statearr_8458_8535[(1)] = (5));

} else {
var statearr_8459_8536 = state_8441__$1;
(statearr_8459_8536[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (15))){
var inst_8319 = (state_8441[(13)]);
var inst_8321 = (state_8441[(14)]);
var inst_8318 = (state_8441[(15)]);
var inst_8320 = (state_8441[(17)]);
var inst_8336 = (state_8441[(2)]);
var inst_8337 = (inst_8321 + (1));
var tmp8453 = inst_8319;
var tmp8454 = inst_8318;
var tmp8455 = inst_8320;
var inst_8318__$1 = tmp8454;
var inst_8319__$1 = tmp8453;
var inst_8320__$1 = tmp8455;
var inst_8321__$1 = inst_8337;
var state_8441__$1 = (function (){var statearr_8460 = state_8441;
(statearr_8460[(18)] = inst_8336);

(statearr_8460[(13)] = inst_8319__$1);

(statearr_8460[(14)] = inst_8321__$1);

(statearr_8460[(15)] = inst_8318__$1);

(statearr_8460[(17)] = inst_8320__$1);

return statearr_8460;
})();
var statearr_8461_8537 = state_8441__$1;
(statearr_8461_8537[(2)] = null);

(statearr_8461_8537[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (21))){
var inst_8363 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8465_8538 = state_8441__$1;
(statearr_8465_8538[(2)] = inst_8363);

(statearr_8465_8538[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (31))){
var inst_8389 = (state_8441[(11)]);
var inst_8393 = done(null);
var inst_8394 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8389);
var state_8441__$1 = (function (){var statearr_8466 = state_8441;
(statearr_8466[(19)] = inst_8393);

return statearr_8466;
})();
var statearr_8467_8539 = state_8441__$1;
(statearr_8467_8539[(2)] = inst_8394);

(statearr_8467_8539[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (32))){
var inst_8382 = (state_8441[(9)]);
var inst_8383 = (state_8441[(20)]);
var inst_8381 = (state_8441[(21)]);
var inst_8384 = (state_8441[(12)]);
var inst_8396 = (state_8441[(2)]);
var inst_8397 = (inst_8384 + (1));
var tmp8462 = inst_8382;
var tmp8463 = inst_8383;
var tmp8464 = inst_8381;
var inst_8381__$1 = tmp8464;
var inst_8382__$1 = tmp8462;
var inst_8383__$1 = tmp8463;
var inst_8384__$1 = inst_8397;
var state_8441__$1 = (function (){var statearr_8468 = state_8441;
(statearr_8468[(9)] = inst_8382__$1);

(statearr_8468[(20)] = inst_8383__$1);

(statearr_8468[(22)] = inst_8396);

(statearr_8468[(21)] = inst_8381__$1);

(statearr_8468[(12)] = inst_8384__$1);

return statearr_8468;
})();
var statearr_8469_8540 = state_8441__$1;
(statearr_8469_8540[(2)] = null);

(statearr_8469_8540[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (40))){
var inst_8409 = (state_8441[(23)]);
var inst_8413 = done(null);
var inst_8414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8409);
var state_8441__$1 = (function (){var statearr_8470 = state_8441;
(statearr_8470[(24)] = inst_8413);

return statearr_8470;
})();
var statearr_8471_8541 = state_8441__$1;
(statearr_8471_8541[(2)] = inst_8414);

(statearr_8471_8541[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (33))){
var inst_8400 = (state_8441[(25)]);
var inst_8402 = cljs.core.chunked_seq_QMARK_(inst_8400);
var state_8441__$1 = state_8441;
if(inst_8402){
var statearr_8472_8542 = state_8441__$1;
(statearr_8472_8542[(1)] = (36));

} else {
var statearr_8473_8543 = state_8441__$1;
(statearr_8473_8543[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (13))){
var inst_8330 = (state_8441[(26)]);
var inst_8333 = cljs.core.async.close_BANG_(inst_8330);
var state_8441__$1 = state_8441;
var statearr_8474_8544 = state_8441__$1;
(statearr_8474_8544[(2)] = inst_8333);

(statearr_8474_8544[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (22))){
var inst_8353 = (state_8441[(8)]);
var inst_8356 = cljs.core.async.close_BANG_(inst_8353);
var state_8441__$1 = state_8441;
var statearr_8475_8545 = state_8441__$1;
(statearr_8475_8545[(2)] = inst_8356);

(statearr_8475_8545[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (36))){
var inst_8400 = (state_8441[(25)]);
var inst_8404 = cljs.core.chunk_first(inst_8400);
var inst_8405 = cljs.core.chunk_rest(inst_8400);
var inst_8406 = cljs.core.count(inst_8404);
var inst_8381 = inst_8405;
var inst_8382 = inst_8404;
var inst_8383 = inst_8406;
var inst_8384 = (0);
var state_8441__$1 = (function (){var statearr_8476 = state_8441;
(statearr_8476[(9)] = inst_8382);

(statearr_8476[(20)] = inst_8383);

(statearr_8476[(21)] = inst_8381);

(statearr_8476[(12)] = inst_8384);

return statearr_8476;
})();
var statearr_8477_8546 = state_8441__$1;
(statearr_8477_8546[(2)] = null);

(statearr_8477_8546[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (41))){
var inst_8400 = (state_8441[(25)]);
var inst_8416 = (state_8441[(2)]);
var inst_8417 = cljs.core.next(inst_8400);
var inst_8381 = inst_8417;
var inst_8382 = null;
var inst_8383 = (0);
var inst_8384 = (0);
var state_8441__$1 = (function (){var statearr_8478 = state_8441;
(statearr_8478[(9)] = inst_8382);

(statearr_8478[(20)] = inst_8383);

(statearr_8478[(21)] = inst_8381);

(statearr_8478[(12)] = inst_8384);

(statearr_8478[(27)] = inst_8416);

return statearr_8478;
})();
var statearr_8479_8547 = state_8441__$1;
(statearr_8479_8547[(2)] = null);

(statearr_8479_8547[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (43))){
var state_8441__$1 = state_8441;
var statearr_8480_8548 = state_8441__$1;
(statearr_8480_8548[(2)] = null);

(statearr_8480_8548[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (29))){
var inst_8425 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8481_8549 = state_8441__$1;
(statearr_8481_8549[(2)] = inst_8425);

(statearr_8481_8549[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (44))){
var inst_8434 = (state_8441[(2)]);
var state_8441__$1 = (function (){var statearr_8482 = state_8441;
(statearr_8482[(28)] = inst_8434);

return statearr_8482;
})();
var statearr_8483_8550 = state_8441__$1;
(statearr_8483_8550[(2)] = null);

(statearr_8483_8550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (6))){
var inst_8373 = (state_8441[(29)]);
var inst_8372 = cljs.core.deref(cs);
var inst_8373__$1 = cljs.core.keys(inst_8372);
var inst_8374 = cljs.core.count(inst_8373__$1);
var inst_8375 = cljs.core.reset_BANG_(dctr,inst_8374);
var inst_8380 = cljs.core.seq(inst_8373__$1);
var inst_8381 = inst_8380;
var inst_8382 = null;
var inst_8383 = (0);
var inst_8384 = (0);
var state_8441__$1 = (function (){var statearr_8484 = state_8441;
(statearr_8484[(9)] = inst_8382);

(statearr_8484[(20)] = inst_8383);

(statearr_8484[(29)] = inst_8373__$1);

(statearr_8484[(21)] = inst_8381);

(statearr_8484[(30)] = inst_8375);

(statearr_8484[(12)] = inst_8384);

return statearr_8484;
})();
var statearr_8485_8551 = state_8441__$1;
(statearr_8485_8551[(2)] = null);

(statearr_8485_8551[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (28))){
var inst_8381 = (state_8441[(21)]);
var inst_8400 = (state_8441[(25)]);
var inst_8400__$1 = cljs.core.seq(inst_8381);
var state_8441__$1 = (function (){var statearr_8486 = state_8441;
(statearr_8486[(25)] = inst_8400__$1);

return statearr_8486;
})();
if(inst_8400__$1){
var statearr_8487_8552 = state_8441__$1;
(statearr_8487_8552[(1)] = (33));

} else {
var statearr_8488_8553 = state_8441__$1;
(statearr_8488_8553[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (25))){
var inst_8383 = (state_8441[(20)]);
var inst_8384 = (state_8441[(12)]);
var inst_8386 = (inst_8384 < inst_8383);
var inst_8387 = inst_8386;
var state_8441__$1 = state_8441;
if(cljs.core.truth_(inst_8387)){
var statearr_8489_8554 = state_8441__$1;
(statearr_8489_8554[(1)] = (27));

} else {
var statearr_8490_8555 = state_8441__$1;
(statearr_8490_8555[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (34))){
var state_8441__$1 = state_8441;
var statearr_8491_8556 = state_8441__$1;
(statearr_8491_8556[(2)] = null);

(statearr_8491_8556[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (17))){
var state_8441__$1 = state_8441;
var statearr_8492_8557 = state_8441__$1;
(statearr_8492_8557[(2)] = null);

(statearr_8492_8557[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (3))){
var inst_8439 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8441__$1,inst_8439);
} else {
if((state_val_8442 === (12))){
var inst_8368 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8493_8558 = state_8441__$1;
(statearr_8493_8558[(2)] = inst_8368);

(statearr_8493_8558[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (2))){
var state_8441__$1 = state_8441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8441__$1,(4),ch);
} else {
if((state_val_8442 === (23))){
var state_8441__$1 = state_8441;
var statearr_8494_8559 = state_8441__$1;
(statearr_8494_8559[(2)] = null);

(statearr_8494_8559[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (35))){
var inst_8423 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8495_8560 = state_8441__$1;
(statearr_8495_8560[(2)] = inst_8423);

(statearr_8495_8560[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (19))){
var inst_8340 = (state_8441[(7)]);
var inst_8344 = cljs.core.chunk_first(inst_8340);
var inst_8345 = cljs.core.chunk_rest(inst_8340);
var inst_8346 = cljs.core.count(inst_8344);
var inst_8318 = inst_8345;
var inst_8319 = inst_8344;
var inst_8320 = inst_8346;
var inst_8321 = (0);
var state_8441__$1 = (function (){var statearr_8496 = state_8441;
(statearr_8496[(13)] = inst_8319);

(statearr_8496[(14)] = inst_8321);

(statearr_8496[(15)] = inst_8318);

(statearr_8496[(17)] = inst_8320);

return statearr_8496;
})();
var statearr_8497_8561 = state_8441__$1;
(statearr_8497_8561[(2)] = null);

(statearr_8497_8561[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (11))){
var inst_8318 = (state_8441[(15)]);
var inst_8340 = (state_8441[(7)]);
var inst_8340__$1 = cljs.core.seq(inst_8318);
var state_8441__$1 = (function (){var statearr_8498 = state_8441;
(statearr_8498[(7)] = inst_8340__$1);

return statearr_8498;
})();
if(inst_8340__$1){
var statearr_8499_8562 = state_8441__$1;
(statearr_8499_8562[(1)] = (16));

} else {
var statearr_8500_8563 = state_8441__$1;
(statearr_8500_8563[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (9))){
var inst_8370 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8501_8564 = state_8441__$1;
(statearr_8501_8564[(2)] = inst_8370);

(statearr_8501_8564[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (5))){
var inst_8316 = cljs.core.deref(cs);
var inst_8317 = cljs.core.seq(inst_8316);
var inst_8318 = inst_8317;
var inst_8319 = null;
var inst_8320 = (0);
var inst_8321 = (0);
var state_8441__$1 = (function (){var statearr_8502 = state_8441;
(statearr_8502[(13)] = inst_8319);

(statearr_8502[(14)] = inst_8321);

(statearr_8502[(15)] = inst_8318);

(statearr_8502[(17)] = inst_8320);

return statearr_8502;
})();
var statearr_8503_8565 = state_8441__$1;
(statearr_8503_8565[(2)] = null);

(statearr_8503_8565[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (14))){
var state_8441__$1 = state_8441;
var statearr_8504_8566 = state_8441__$1;
(statearr_8504_8566[(2)] = null);

(statearr_8504_8566[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (45))){
var inst_8431 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8505_8567 = state_8441__$1;
(statearr_8505_8567[(2)] = inst_8431);

(statearr_8505_8567[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (26))){
var inst_8373 = (state_8441[(29)]);
var inst_8427 = (state_8441[(2)]);
var inst_8428 = cljs.core.seq(inst_8373);
var state_8441__$1 = (function (){var statearr_8506 = state_8441;
(statearr_8506[(31)] = inst_8427);

return statearr_8506;
})();
if(inst_8428){
var statearr_8507_8568 = state_8441__$1;
(statearr_8507_8568[(1)] = (42));

} else {
var statearr_8508_8569 = state_8441__$1;
(statearr_8508_8569[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (16))){
var inst_8340 = (state_8441[(7)]);
var inst_8342 = cljs.core.chunked_seq_QMARK_(inst_8340);
var state_8441__$1 = state_8441;
if(inst_8342){
var statearr_8509_8570 = state_8441__$1;
(statearr_8509_8570[(1)] = (19));

} else {
var statearr_8510_8571 = state_8441__$1;
(statearr_8510_8571[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (38))){
var inst_8420 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8511_8572 = state_8441__$1;
(statearr_8511_8572[(2)] = inst_8420);

(statearr_8511_8572[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (30))){
var state_8441__$1 = state_8441;
var statearr_8512_8573 = state_8441__$1;
(statearr_8512_8573[(2)] = null);

(statearr_8512_8573[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (10))){
var inst_8319 = (state_8441[(13)]);
var inst_8321 = (state_8441[(14)]);
var inst_8329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8319,inst_8321);
var inst_8330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8329,(0),null);
var inst_8331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8329,(1),null);
var state_8441__$1 = (function (){var statearr_8513 = state_8441;
(statearr_8513[(26)] = inst_8330);

return statearr_8513;
})();
if(cljs.core.truth_(inst_8331)){
var statearr_8514_8574 = state_8441__$1;
(statearr_8514_8574[(1)] = (13));

} else {
var statearr_8515_8575 = state_8441__$1;
(statearr_8515_8575[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (18))){
var inst_8366 = (state_8441[(2)]);
var state_8441__$1 = state_8441;
var statearr_8516_8576 = state_8441__$1;
(statearr_8516_8576[(2)] = inst_8366);

(statearr_8516_8576[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (42))){
var state_8441__$1 = state_8441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8441__$1,(45),dchan);
} else {
if((state_val_8442 === (37))){
var inst_8309 = (state_8441[(10)]);
var inst_8409 = (state_8441[(23)]);
var inst_8400 = (state_8441[(25)]);
var inst_8409__$1 = cljs.core.first(inst_8400);
var inst_8410 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8409__$1,inst_8309,done);
var state_8441__$1 = (function (){var statearr_8517 = state_8441;
(statearr_8517[(23)] = inst_8409__$1);

return statearr_8517;
})();
if(cljs.core.truth_(inst_8410)){
var statearr_8518_8577 = state_8441__$1;
(statearr_8518_8577[(1)] = (39));

} else {
var statearr_8519_8578 = state_8441__$1;
(statearr_8519_8578[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8442 === (8))){
var inst_8321 = (state_8441[(14)]);
var inst_8320 = (state_8441[(17)]);
var inst_8323 = (inst_8321 < inst_8320);
var inst_8324 = inst_8323;
var state_8441__$1 = state_8441;
if(cljs.core.truth_(inst_8324)){
var statearr_8520_8579 = state_8441__$1;
(statearr_8520_8579[(1)] = (10));

} else {
var statearr_8521_8580 = state_8441__$1;
(statearr_8521_8580[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__7595__auto__ = null;
var cljs$core$async$mult_$_state_machine__7595__auto____0 = (function (){
var statearr_8522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8522[(0)] = cljs$core$async$mult_$_state_machine__7595__auto__);

(statearr_8522[(1)] = (1));

return statearr_8522;
});
var cljs$core$async$mult_$_state_machine__7595__auto____1 = (function (state_8441){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8441);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8523){if((e8523 instanceof Object)){
var ex__7598__auto__ = e8523;
var statearr_8524_8581 = state_8441;
(statearr_8524_8581[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8441);

return cljs.core.cst$kw$recur;
} else {
throw e8523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8582 = state_8441;
state_8441 = G__8582;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7595__auto__ = function(state_8441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7595__auto____1.call(this,state_8441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7595__auto____0;
cljs$core$async$mult_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7595__auto____1;
return cljs$core$async$mult_$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8525 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8525[(6)] = c__7701__auto___8526);

return statearr_8525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var G__8584 = arguments.length;
switch (G__8584) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_8586 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_8586(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_8587 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_8587(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_8588 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_8588(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_8589 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_8589(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_8590 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_8590(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8601 = arguments.length;
var i__4737__auto___8602 = (0);
while(true){
if((i__4737__auto___8602 < len__4736__auto___8601)){
args__4742__auto__.push((arguments[i__4737__auto___8602]));

var G__8603 = (i__4737__auto___8602 + (1));
i__4737__auto___8602 = G__8603;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8595){
var map__8596 = p__8595;
var map__8596__$1 = (((((!((map__8596 == null))))?(((((map__8596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8596):map__8596);
var opts = map__8596__$1;
var statearr_8598_8604 = state;
(statearr_8598_8604[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_8599_8605 = state;
(statearr_8599_8605[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_8600_8606 = state;
(statearr_8600_8606[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8591){
var G__8592 = cljs.core.first(seq8591);
var seq8591__$1 = cljs.core.next(seq8591);
var G__8593 = cljs.core.first(seq8591__$1);
var seq8591__$2 = cljs.core.next(seq8591__$1);
var G__8594 = cljs.core.first(seq8591__$2);
var seq8591__$3 = cljs.core.next(seq8591__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8592,G__8593,G__8594,seq8591__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8607 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8608){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8608 = meta8608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8609,meta8608__$1){
var self__ = this;
var _8609__$1 = this;
return (new cljs.core.async.t_cljs$core$async8607(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8608__$1));
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8609){
var self__ = this;
var _8609__$1 = this;
return self__.meta8608;
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8607.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta8608], null);
}));

(cljs.core.async.t_cljs$core$async8607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8607");

(cljs.core.async.t_cljs$core$async8607.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8607.
 */
cljs.core.async.__GT_t_cljs$core$async8607 = (function cljs$core$async$mix_$___GT_t_cljs$core$async8607(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8608){
return (new cljs.core.async.t_cljs$core$async8607(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8608));
});

}

return (new cljs.core.async.t_cljs$core$async8607(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7701__auto___8771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8711){
var state_val_8712 = (state_8711[(1)]);
if((state_val_8712 === (7))){
var inst_8626 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8713_8772 = state_8711__$1;
(statearr_8713_8772[(2)] = inst_8626);

(statearr_8713_8772[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (20))){
var inst_8638 = (state_8711[(7)]);
var state_8711__$1 = state_8711;
var statearr_8714_8773 = state_8711__$1;
(statearr_8714_8773[(2)] = inst_8638);

(statearr_8714_8773[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (27))){
var state_8711__$1 = state_8711;
var statearr_8715_8774 = state_8711__$1;
(statearr_8715_8774[(2)] = null);

(statearr_8715_8774[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (1))){
var inst_8613 = (state_8711[(8)]);
var inst_8613__$1 = calc_state();
var inst_8615 = (inst_8613__$1 == null);
var inst_8616 = cljs.core.not(inst_8615);
var state_8711__$1 = (function (){var statearr_8716 = state_8711;
(statearr_8716[(8)] = inst_8613__$1);

return statearr_8716;
})();
if(inst_8616){
var statearr_8717_8775 = state_8711__$1;
(statearr_8717_8775[(1)] = (2));

} else {
var statearr_8718_8776 = state_8711__$1;
(statearr_8718_8776[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (24))){
var inst_8662 = (state_8711[(9)]);
var inst_8685 = (state_8711[(10)]);
var inst_8671 = (state_8711[(11)]);
var inst_8685__$1 = (inst_8662.cljs$core$IFn$_invoke$arity$1 ? inst_8662.cljs$core$IFn$_invoke$arity$1(inst_8671) : inst_8662.call(null,inst_8671));
var state_8711__$1 = (function (){var statearr_8719 = state_8711;
(statearr_8719[(10)] = inst_8685__$1);

return statearr_8719;
})();
if(cljs.core.truth_(inst_8685__$1)){
var statearr_8720_8777 = state_8711__$1;
(statearr_8720_8777[(1)] = (29));

} else {
var statearr_8721_8778 = state_8711__$1;
(statearr_8721_8778[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (4))){
var inst_8629 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8629)){
var statearr_8722_8779 = state_8711__$1;
(statearr_8722_8779[(1)] = (8));

} else {
var statearr_8723_8780 = state_8711__$1;
(statearr_8723_8780[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (15))){
var inst_8656 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8656)){
var statearr_8724_8781 = state_8711__$1;
(statearr_8724_8781[(1)] = (19));

} else {
var statearr_8725_8782 = state_8711__$1;
(statearr_8725_8782[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (21))){
var inst_8661 = (state_8711[(12)]);
var inst_8661__$1 = (state_8711[(2)]);
var inst_8662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8661__$1,cljs.core.cst$kw$solos);
var inst_8663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8661__$1,cljs.core.cst$kw$mutes);
var inst_8664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8661__$1,cljs.core.cst$kw$reads);
var state_8711__$1 = (function (){var statearr_8726 = state_8711;
(statearr_8726[(9)] = inst_8662);

(statearr_8726[(13)] = inst_8663);

(statearr_8726[(12)] = inst_8661__$1);

return statearr_8726;
})();
return cljs.core.async.ioc_alts_BANG_(state_8711__$1,(22),inst_8664);
} else {
if((state_val_8712 === (31))){
var inst_8693 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8693)){
var statearr_8727_8783 = state_8711__$1;
(statearr_8727_8783[(1)] = (32));

} else {
var statearr_8728_8784 = state_8711__$1;
(statearr_8728_8784[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (32))){
var inst_8670 = (state_8711[(14)]);
var state_8711__$1 = state_8711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8711__$1,(35),out,inst_8670);
} else {
if((state_val_8712 === (33))){
var inst_8661 = (state_8711[(12)]);
var inst_8638 = inst_8661;
var state_8711__$1 = (function (){var statearr_8729 = state_8711;
(statearr_8729[(7)] = inst_8638);

return statearr_8729;
})();
var statearr_8730_8785 = state_8711__$1;
(statearr_8730_8785[(2)] = null);

(statearr_8730_8785[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (13))){
var inst_8638 = (state_8711[(7)]);
var inst_8645 = inst_8638.cljs$lang$protocol_mask$partition0$;
var inst_8646 = (inst_8645 & (64));
var inst_8647 = inst_8638.cljs$core$ISeq$;
var inst_8648 = (cljs.core.PROTOCOL_SENTINEL === inst_8647);
var inst_8649 = ((inst_8646) || (inst_8648));
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8649)){
var statearr_8731_8786 = state_8711__$1;
(statearr_8731_8786[(1)] = (16));

} else {
var statearr_8732_8787 = state_8711__$1;
(statearr_8732_8787[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (22))){
var inst_8670 = (state_8711[(14)]);
var inst_8671 = (state_8711[(11)]);
var inst_8669 = (state_8711[(2)]);
var inst_8670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8669,(0),null);
var inst_8671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8669,(1),null);
var inst_8672 = (inst_8670__$1 == null);
var inst_8673 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8671__$1,change);
var inst_8674 = ((inst_8672) || (inst_8673));
var state_8711__$1 = (function (){var statearr_8733 = state_8711;
(statearr_8733[(14)] = inst_8670__$1);

(statearr_8733[(11)] = inst_8671__$1);

return statearr_8733;
})();
if(cljs.core.truth_(inst_8674)){
var statearr_8734_8788 = state_8711__$1;
(statearr_8734_8788[(1)] = (23));

} else {
var statearr_8735_8789 = state_8711__$1;
(statearr_8735_8789[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (36))){
var inst_8661 = (state_8711[(12)]);
var inst_8638 = inst_8661;
var state_8711__$1 = (function (){var statearr_8736 = state_8711;
(statearr_8736[(7)] = inst_8638);

return statearr_8736;
})();
var statearr_8737_8790 = state_8711__$1;
(statearr_8737_8790[(2)] = null);

(statearr_8737_8790[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (29))){
var inst_8685 = (state_8711[(10)]);
var state_8711__$1 = state_8711;
var statearr_8738_8791 = state_8711__$1;
(statearr_8738_8791[(2)] = inst_8685);

(statearr_8738_8791[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (6))){
var state_8711__$1 = state_8711;
var statearr_8739_8792 = state_8711__$1;
(statearr_8739_8792[(2)] = false);

(statearr_8739_8792[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (28))){
var inst_8681 = (state_8711[(2)]);
var inst_8682 = calc_state();
var inst_8638 = inst_8682;
var state_8711__$1 = (function (){var statearr_8740 = state_8711;
(statearr_8740[(7)] = inst_8638);

(statearr_8740[(15)] = inst_8681);

return statearr_8740;
})();
var statearr_8741_8793 = state_8711__$1;
(statearr_8741_8793[(2)] = null);

(statearr_8741_8793[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (25))){
var inst_8707 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8742_8794 = state_8711__$1;
(statearr_8742_8794[(2)] = inst_8707);

(statearr_8742_8794[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (34))){
var inst_8705 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8743_8795 = state_8711__$1;
(statearr_8743_8795[(2)] = inst_8705);

(statearr_8743_8795[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (17))){
var state_8711__$1 = state_8711;
var statearr_8744_8796 = state_8711__$1;
(statearr_8744_8796[(2)] = false);

(statearr_8744_8796[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (3))){
var state_8711__$1 = state_8711;
var statearr_8745_8797 = state_8711__$1;
(statearr_8745_8797[(2)] = false);

(statearr_8745_8797[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (12))){
var inst_8709 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8711__$1,inst_8709);
} else {
if((state_val_8712 === (2))){
var inst_8613 = (state_8711[(8)]);
var inst_8618 = inst_8613.cljs$lang$protocol_mask$partition0$;
var inst_8619 = (inst_8618 & (64));
var inst_8620 = inst_8613.cljs$core$ISeq$;
var inst_8621 = (cljs.core.PROTOCOL_SENTINEL === inst_8620);
var inst_8622 = ((inst_8619) || (inst_8621));
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8622)){
var statearr_8746_8798 = state_8711__$1;
(statearr_8746_8798[(1)] = (5));

} else {
var statearr_8747_8799 = state_8711__$1;
(statearr_8747_8799[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (23))){
var inst_8670 = (state_8711[(14)]);
var inst_8676 = (inst_8670 == null);
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8676)){
var statearr_8748_8800 = state_8711__$1;
(statearr_8748_8800[(1)] = (26));

} else {
var statearr_8749_8801 = state_8711__$1;
(statearr_8749_8801[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (35))){
var inst_8696 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
if(cljs.core.truth_(inst_8696)){
var statearr_8750_8802 = state_8711__$1;
(statearr_8750_8802[(1)] = (36));

} else {
var statearr_8751_8803 = state_8711__$1;
(statearr_8751_8803[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (19))){
var inst_8638 = (state_8711[(7)]);
var inst_8658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8638);
var state_8711__$1 = state_8711;
var statearr_8752_8804 = state_8711__$1;
(statearr_8752_8804[(2)] = inst_8658);

(statearr_8752_8804[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (11))){
var inst_8638 = (state_8711[(7)]);
var inst_8642 = (inst_8638 == null);
var inst_8643 = cljs.core.not(inst_8642);
var state_8711__$1 = state_8711;
if(inst_8643){
var statearr_8753_8805 = state_8711__$1;
(statearr_8753_8805[(1)] = (13));

} else {
var statearr_8754_8806 = state_8711__$1;
(statearr_8754_8806[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (9))){
var inst_8613 = (state_8711[(8)]);
var state_8711__$1 = state_8711;
var statearr_8755_8807 = state_8711__$1;
(statearr_8755_8807[(2)] = inst_8613);

(statearr_8755_8807[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (5))){
var state_8711__$1 = state_8711;
var statearr_8756_8808 = state_8711__$1;
(statearr_8756_8808[(2)] = true);

(statearr_8756_8808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (14))){
var state_8711__$1 = state_8711;
var statearr_8757_8809 = state_8711__$1;
(statearr_8757_8809[(2)] = false);

(statearr_8757_8809[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (26))){
var inst_8671 = (state_8711[(11)]);
var inst_8678 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8671);
var state_8711__$1 = state_8711;
var statearr_8758_8810 = state_8711__$1;
(statearr_8758_8810[(2)] = inst_8678);

(statearr_8758_8810[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (16))){
var state_8711__$1 = state_8711;
var statearr_8759_8811 = state_8711__$1;
(statearr_8759_8811[(2)] = true);

(statearr_8759_8811[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (38))){
var inst_8701 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8760_8812 = state_8711__$1;
(statearr_8760_8812[(2)] = inst_8701);

(statearr_8760_8812[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (30))){
var inst_8662 = (state_8711[(9)]);
var inst_8663 = (state_8711[(13)]);
var inst_8671 = (state_8711[(11)]);
var inst_8688 = cljs.core.empty_QMARK_(inst_8662);
var inst_8689 = (inst_8663.cljs$core$IFn$_invoke$arity$1 ? inst_8663.cljs$core$IFn$_invoke$arity$1(inst_8671) : inst_8663.call(null,inst_8671));
var inst_8690 = cljs.core.not(inst_8689);
var inst_8691 = ((inst_8688) && (inst_8690));
var state_8711__$1 = state_8711;
var statearr_8761_8813 = state_8711__$1;
(statearr_8761_8813[(2)] = inst_8691);

(statearr_8761_8813[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (10))){
var inst_8613 = (state_8711[(8)]);
var inst_8634 = (state_8711[(2)]);
var inst_8635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8634,cljs.core.cst$kw$solos);
var inst_8636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8634,cljs.core.cst$kw$mutes);
var inst_8637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8634,cljs.core.cst$kw$reads);
var inst_8638 = inst_8613;
var state_8711__$1 = (function (){var statearr_8762 = state_8711;
(statearr_8762[(16)] = inst_8636);

(statearr_8762[(7)] = inst_8638);

(statearr_8762[(17)] = inst_8637);

(statearr_8762[(18)] = inst_8635);

return statearr_8762;
})();
var statearr_8763_8814 = state_8711__$1;
(statearr_8763_8814[(2)] = null);

(statearr_8763_8814[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (18))){
var inst_8653 = (state_8711[(2)]);
var state_8711__$1 = state_8711;
var statearr_8764_8815 = state_8711__$1;
(statearr_8764_8815[(2)] = inst_8653);

(statearr_8764_8815[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (37))){
var state_8711__$1 = state_8711;
var statearr_8765_8816 = state_8711__$1;
(statearr_8765_8816[(2)] = null);

(statearr_8765_8816[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8712 === (8))){
var inst_8613 = (state_8711[(8)]);
var inst_8631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8613);
var state_8711__$1 = state_8711;
var statearr_8766_8817 = state_8711__$1;
(statearr_8766_8817[(2)] = inst_8631);

(statearr_8766_8817[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__7595__auto__ = null;
var cljs$core$async$mix_$_state_machine__7595__auto____0 = (function (){
var statearr_8767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8767[(0)] = cljs$core$async$mix_$_state_machine__7595__auto__);

(statearr_8767[(1)] = (1));

return statearr_8767;
});
var cljs$core$async$mix_$_state_machine__7595__auto____1 = (function (state_8711){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8711);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8768){if((e8768 instanceof Object)){
var ex__7598__auto__ = e8768;
var statearr_8769_8818 = state_8711;
(statearr_8769_8818[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8711);

return cljs.core.cst$kw$recur;
} else {
throw e8768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8819 = state_8711;
state_8711 = G__8819;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7595__auto__ = function(state_8711){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7595__auto____1.call(this,state_8711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7595__auto____0;
cljs$core$async$mix_$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7595__auto____1;
return cljs$core$async$mix_$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8770 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8770[(6)] = c__7701__auto___8771);

return statearr_8770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_8822 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_8822(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_8823 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_8823(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_8824 = (function() {
var G__8825 = null;
var G__8825__1 = (function (p){
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
var G__8825__2 = (function (p,v){
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
G__8825 = function(p,v){
switch(arguments.length){
case 1:
return G__8825__1.call(this,p);
case 2:
return G__8825__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8825.cljs$core$IFn$_invoke$arity$1 = G__8825__1;
G__8825.cljs$core$IFn$_invoke$arity$2 = G__8825__2;
return G__8825;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8821 = arguments.length;
switch (G__8821) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_8824.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_8824.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__8829 = arguments.length;
switch (G__8829) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__8827_SHARP_){
if(cljs.core.truth_((p1__8827_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8827_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8827_SHARP_.call(null,topic)))){
return p1__8827_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8827_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8830 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8831){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8831 = meta8831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8832,meta8831__$1){
var self__ = this;
var _8832__$1 = this;
return (new cljs.core.async.t_cljs$core$async8830(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8831__$1));
}));

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8832){
var self__ = this;
var _8832__$1 = this;
return self__.meta8831;
}));

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async8830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async8830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8831], null);
}));

(cljs.core.async.t_cljs$core$async8830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8830");

(cljs.core.async.t_cljs$core$async8830.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async8830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8830.
 */
cljs.core.async.__GT_t_cljs$core$async8830 = (function cljs$core$async$__GT_t_cljs$core$async8830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8831){
return (new cljs.core.async.t_cljs$core$async8830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8831));
});

}

return (new cljs.core.async.t_cljs$core$async8830(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7701__auto___8950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_8904){
var state_val_8905 = (state_8904[(1)]);
if((state_val_8905 === (7))){
var inst_8900 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8906_8951 = state_8904__$1;
(statearr_8906_8951[(2)] = inst_8900);

(statearr_8906_8951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (20))){
var state_8904__$1 = state_8904;
var statearr_8907_8952 = state_8904__$1;
(statearr_8907_8952[(2)] = null);

(statearr_8907_8952[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (1))){
var state_8904__$1 = state_8904;
var statearr_8908_8953 = state_8904__$1;
(statearr_8908_8953[(2)] = null);

(statearr_8908_8953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (24))){
var inst_8883 = (state_8904[(7)]);
var inst_8892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8883);
var state_8904__$1 = state_8904;
var statearr_8909_8954 = state_8904__$1;
(statearr_8909_8954[(2)] = inst_8892);

(statearr_8909_8954[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (4))){
var inst_8835 = (state_8904[(8)]);
var inst_8835__$1 = (state_8904[(2)]);
var inst_8836 = (inst_8835__$1 == null);
var state_8904__$1 = (function (){var statearr_8910 = state_8904;
(statearr_8910[(8)] = inst_8835__$1);

return statearr_8910;
})();
if(cljs.core.truth_(inst_8836)){
var statearr_8911_8955 = state_8904__$1;
(statearr_8911_8955[(1)] = (5));

} else {
var statearr_8912_8956 = state_8904__$1;
(statearr_8912_8956[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (15))){
var inst_8877 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8913_8957 = state_8904__$1;
(statearr_8913_8957[(2)] = inst_8877);

(statearr_8913_8957[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (21))){
var inst_8897 = (state_8904[(2)]);
var state_8904__$1 = (function (){var statearr_8914 = state_8904;
(statearr_8914[(9)] = inst_8897);

return statearr_8914;
})();
var statearr_8915_8958 = state_8904__$1;
(statearr_8915_8958[(2)] = null);

(statearr_8915_8958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (13))){
var inst_8859 = (state_8904[(10)]);
var inst_8861 = cljs.core.chunked_seq_QMARK_(inst_8859);
var state_8904__$1 = state_8904;
if(inst_8861){
var statearr_8916_8959 = state_8904__$1;
(statearr_8916_8959[(1)] = (16));

} else {
var statearr_8917_8960 = state_8904__$1;
(statearr_8917_8960[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (22))){
var inst_8889 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
if(cljs.core.truth_(inst_8889)){
var statearr_8918_8961 = state_8904__$1;
(statearr_8918_8961[(1)] = (23));

} else {
var statearr_8919_8962 = state_8904__$1;
(statearr_8919_8962[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (6))){
var inst_8883 = (state_8904[(7)]);
var inst_8835 = (state_8904[(8)]);
var inst_8885 = (state_8904[(11)]);
var inst_8883__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8835) : topic_fn.call(null,inst_8835));
var inst_8884 = cljs.core.deref(mults);
var inst_8885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8884,inst_8883__$1);
var state_8904__$1 = (function (){var statearr_8920 = state_8904;
(statearr_8920[(7)] = inst_8883__$1);

(statearr_8920[(11)] = inst_8885__$1);

return statearr_8920;
})();
if(cljs.core.truth_(inst_8885__$1)){
var statearr_8921_8963 = state_8904__$1;
(statearr_8921_8963[(1)] = (19));

} else {
var statearr_8922_8964 = state_8904__$1;
(statearr_8922_8964[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (25))){
var inst_8894 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8923_8965 = state_8904__$1;
(statearr_8923_8965[(2)] = inst_8894);

(statearr_8923_8965[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (17))){
var inst_8859 = (state_8904[(10)]);
var inst_8868 = cljs.core.first(inst_8859);
var inst_8869 = cljs.core.async.muxch_STAR_(inst_8868);
var inst_8870 = cljs.core.async.close_BANG_(inst_8869);
var inst_8871 = cljs.core.next(inst_8859);
var inst_8845 = inst_8871;
var inst_8846 = null;
var inst_8847 = (0);
var inst_8848 = (0);
var state_8904__$1 = (function (){var statearr_8924 = state_8904;
(statearr_8924[(12)] = inst_8870);

(statearr_8924[(13)] = inst_8848);

(statearr_8924[(14)] = inst_8846);

(statearr_8924[(15)] = inst_8845);

(statearr_8924[(16)] = inst_8847);

return statearr_8924;
})();
var statearr_8925_8966 = state_8904__$1;
(statearr_8925_8966[(2)] = null);

(statearr_8925_8966[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (3))){
var inst_8902 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8904__$1,inst_8902);
} else {
if((state_val_8905 === (12))){
var inst_8879 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8926_8967 = state_8904__$1;
(statearr_8926_8967[(2)] = inst_8879);

(statearr_8926_8967[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (2))){
var state_8904__$1 = state_8904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8904__$1,(4),ch);
} else {
if((state_val_8905 === (23))){
var state_8904__$1 = state_8904;
var statearr_8927_8968 = state_8904__$1;
(statearr_8927_8968[(2)] = null);

(statearr_8927_8968[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (19))){
var inst_8835 = (state_8904[(8)]);
var inst_8885 = (state_8904[(11)]);
var inst_8887 = cljs.core.async.muxch_STAR_(inst_8885);
var state_8904__$1 = state_8904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8904__$1,(22),inst_8887,inst_8835);
} else {
if((state_val_8905 === (11))){
var inst_8859 = (state_8904[(10)]);
var inst_8845 = (state_8904[(15)]);
var inst_8859__$1 = cljs.core.seq(inst_8845);
var state_8904__$1 = (function (){var statearr_8928 = state_8904;
(statearr_8928[(10)] = inst_8859__$1);

return statearr_8928;
})();
if(inst_8859__$1){
var statearr_8929_8969 = state_8904__$1;
(statearr_8929_8969[(1)] = (13));

} else {
var statearr_8930_8970 = state_8904__$1;
(statearr_8930_8970[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (9))){
var inst_8881 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8931_8971 = state_8904__$1;
(statearr_8931_8971[(2)] = inst_8881);

(statearr_8931_8971[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (5))){
var inst_8842 = cljs.core.deref(mults);
var inst_8843 = cljs.core.vals(inst_8842);
var inst_8844 = cljs.core.seq(inst_8843);
var inst_8845 = inst_8844;
var inst_8846 = null;
var inst_8847 = (0);
var inst_8848 = (0);
var state_8904__$1 = (function (){var statearr_8932 = state_8904;
(statearr_8932[(13)] = inst_8848);

(statearr_8932[(14)] = inst_8846);

(statearr_8932[(15)] = inst_8845);

(statearr_8932[(16)] = inst_8847);

return statearr_8932;
})();
var statearr_8933_8972 = state_8904__$1;
(statearr_8933_8972[(2)] = null);

(statearr_8933_8972[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (14))){
var state_8904__$1 = state_8904;
var statearr_8937_8973 = state_8904__$1;
(statearr_8937_8973[(2)] = null);

(statearr_8937_8973[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (16))){
var inst_8859 = (state_8904[(10)]);
var inst_8863 = cljs.core.chunk_first(inst_8859);
var inst_8864 = cljs.core.chunk_rest(inst_8859);
var inst_8865 = cljs.core.count(inst_8863);
var inst_8845 = inst_8864;
var inst_8846 = inst_8863;
var inst_8847 = inst_8865;
var inst_8848 = (0);
var state_8904__$1 = (function (){var statearr_8938 = state_8904;
(statearr_8938[(13)] = inst_8848);

(statearr_8938[(14)] = inst_8846);

(statearr_8938[(15)] = inst_8845);

(statearr_8938[(16)] = inst_8847);

return statearr_8938;
})();
var statearr_8939_8974 = state_8904__$1;
(statearr_8939_8974[(2)] = null);

(statearr_8939_8974[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (10))){
var inst_8848 = (state_8904[(13)]);
var inst_8846 = (state_8904[(14)]);
var inst_8845 = (state_8904[(15)]);
var inst_8847 = (state_8904[(16)]);
var inst_8853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8846,inst_8848);
var inst_8854 = cljs.core.async.muxch_STAR_(inst_8853);
var inst_8855 = cljs.core.async.close_BANG_(inst_8854);
var inst_8856 = (inst_8848 + (1));
var tmp8934 = inst_8846;
var tmp8935 = inst_8845;
var tmp8936 = inst_8847;
var inst_8845__$1 = tmp8935;
var inst_8846__$1 = tmp8934;
var inst_8847__$1 = tmp8936;
var inst_8848__$1 = inst_8856;
var state_8904__$1 = (function (){var statearr_8940 = state_8904;
(statearr_8940[(13)] = inst_8848__$1);

(statearr_8940[(14)] = inst_8846__$1);

(statearr_8940[(15)] = inst_8845__$1);

(statearr_8940[(17)] = inst_8855);

(statearr_8940[(16)] = inst_8847__$1);

return statearr_8940;
})();
var statearr_8941_8975 = state_8904__$1;
(statearr_8941_8975[(2)] = null);

(statearr_8941_8975[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (18))){
var inst_8874 = (state_8904[(2)]);
var state_8904__$1 = state_8904;
var statearr_8942_8976 = state_8904__$1;
(statearr_8942_8976[(2)] = inst_8874);

(statearr_8942_8976[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8905 === (8))){
var inst_8848 = (state_8904[(13)]);
var inst_8847 = (state_8904[(16)]);
var inst_8850 = (inst_8848 < inst_8847);
var inst_8851 = inst_8850;
var state_8904__$1 = state_8904;
if(cljs.core.truth_(inst_8851)){
var statearr_8943_8977 = state_8904__$1;
(statearr_8943_8977[(1)] = (10));

} else {
var statearr_8944_8978 = state_8904__$1;
(statearr_8944_8978[(1)] = (11));

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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_8945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8945[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_8945[(1)] = (1));

return statearr_8945;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_8904){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_8904);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e8946){if((e8946 instanceof Object)){
var ex__7598__auto__ = e8946;
var statearr_8947_8979 = state_8904;
(statearr_8947_8979[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8904);

return cljs.core.cst$kw$recur;
} else {
throw e8946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__8980 = state_8904;
state_8904 = G__8980;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_8904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_8904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_8948 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_8948[(6)] = c__7701__auto___8950);

return statearr_8948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var G__8982 = arguments.length;
switch (G__8982) {
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
var G__8985 = arguments.length;
switch (G__8985) {
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
var G__8988 = arguments.length;
switch (G__8988) {
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
var c__7701__auto___9055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9027){
var state_val_9028 = (state_9027[(1)]);
if((state_val_9028 === (7))){
var state_9027__$1 = state_9027;
var statearr_9029_9056 = state_9027__$1;
(statearr_9029_9056[(2)] = null);

(statearr_9029_9056[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (1))){
var state_9027__$1 = state_9027;
var statearr_9030_9057 = state_9027__$1;
(statearr_9030_9057[(2)] = null);

(statearr_9030_9057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (4))){
var inst_8991 = (state_9027[(7)]);
var inst_8993 = (inst_8991 < cnt);
var state_9027__$1 = state_9027;
if(cljs.core.truth_(inst_8993)){
var statearr_9031_9058 = state_9027__$1;
(statearr_9031_9058[(1)] = (6));

} else {
var statearr_9032_9059 = state_9027__$1;
(statearr_9032_9059[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (15))){
var inst_9023 = (state_9027[(2)]);
var state_9027__$1 = state_9027;
var statearr_9033_9060 = state_9027__$1;
(statearr_9033_9060[(2)] = inst_9023);

(statearr_9033_9060[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (13))){
var inst_9016 = cljs.core.async.close_BANG_(out);
var state_9027__$1 = state_9027;
var statearr_9034_9061 = state_9027__$1;
(statearr_9034_9061[(2)] = inst_9016);

(statearr_9034_9061[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (6))){
var state_9027__$1 = state_9027;
var statearr_9035_9062 = state_9027__$1;
(statearr_9035_9062[(2)] = null);

(statearr_9035_9062[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (3))){
var inst_9025 = (state_9027[(2)]);
var state_9027__$1 = state_9027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9027__$1,inst_9025);
} else {
if((state_val_9028 === (12))){
var inst_9013 = (state_9027[(8)]);
var inst_9013__$1 = (state_9027[(2)]);
var inst_9014 = cljs.core.some(cljs.core.nil_QMARK_,inst_9013__$1);
var state_9027__$1 = (function (){var statearr_9036 = state_9027;
(statearr_9036[(8)] = inst_9013__$1);

return statearr_9036;
})();
if(cljs.core.truth_(inst_9014)){
var statearr_9037_9063 = state_9027__$1;
(statearr_9037_9063[(1)] = (13));

} else {
var statearr_9038_9064 = state_9027__$1;
(statearr_9038_9064[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (2))){
var inst_8990 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8991 = (0);
var state_9027__$1 = (function (){var statearr_9039 = state_9027;
(statearr_9039[(9)] = inst_8990);

(statearr_9039[(7)] = inst_8991);

return statearr_9039;
})();
var statearr_9040_9065 = state_9027__$1;
(statearr_9040_9065[(2)] = null);

(statearr_9040_9065[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (11))){
var inst_8991 = (state_9027[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_9027,(10),Object,null,(9));
var inst_9000 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8991) : chs__$1.call(null,inst_8991));
var inst_9001 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8991) : done.call(null,inst_8991));
var inst_9002 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_9000,inst_9001);
var state_9027__$1 = state_9027;
var statearr_9041_9066 = state_9027__$1;
(statearr_9041_9066[(2)] = inst_9002);


cljs.core.async.impl.ioc_helpers.process_exception(state_9027__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (9))){
var inst_8991 = (state_9027[(7)]);
var inst_9004 = (state_9027[(2)]);
var inst_9005 = (inst_8991 + (1));
var inst_8991__$1 = inst_9005;
var state_9027__$1 = (function (){var statearr_9042 = state_9027;
(statearr_9042[(7)] = inst_8991__$1);

(statearr_9042[(10)] = inst_9004);

return statearr_9042;
})();
var statearr_9043_9067 = state_9027__$1;
(statearr_9043_9067[(2)] = null);

(statearr_9043_9067[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (5))){
var inst_9011 = (state_9027[(2)]);
var state_9027__$1 = (function (){var statearr_9044 = state_9027;
(statearr_9044[(11)] = inst_9011);

return statearr_9044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9027__$1,(12),dchan);
} else {
if((state_val_9028 === (14))){
var inst_9013 = (state_9027[(8)]);
var inst_9018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_9013);
var state_9027__$1 = state_9027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9027__$1,(16),out,inst_9018);
} else {
if((state_val_9028 === (16))){
var inst_9020 = (state_9027[(2)]);
var state_9027__$1 = (function (){var statearr_9045 = state_9027;
(statearr_9045[(12)] = inst_9020);

return statearr_9045;
})();
var statearr_9046_9068 = state_9027__$1;
(statearr_9046_9068[(2)] = null);

(statearr_9046_9068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (10))){
var inst_8995 = (state_9027[(2)]);
var inst_8996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_9027__$1 = (function (){var statearr_9047 = state_9027;
(statearr_9047[(13)] = inst_8995);

return statearr_9047;
})();
var statearr_9048_9069 = state_9027__$1;
(statearr_9048_9069[(2)] = inst_8996);


cljs.core.async.impl.ioc_helpers.process_exception(state_9027__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_9028 === (8))){
var inst_9009 = (state_9027[(2)]);
var state_9027__$1 = state_9027;
var statearr_9049_9070 = state_9027__$1;
(statearr_9049_9070[(2)] = inst_9009);

(statearr_9049_9070[(1)] = (5));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9050[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9050[(1)] = (1));

return statearr_9050;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9027){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9027);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9051){if((e9051 instanceof Object)){
var ex__7598__auto__ = e9051;
var statearr_9052_9071 = state_9027;
(statearr_9052_9071[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9027);

return cljs.core.cst$kw$recur;
} else {
throw e9051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9072 = state_9027;
state_9027 = G__9072;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9053 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9053[(6)] = c__7701__auto___9055);

return statearr_9053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var G__9075 = arguments.length;
switch (G__9075) {
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
var c__7701__auto___9129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9107){
var state_val_9108 = (state_9107[(1)]);
if((state_val_9108 === (7))){
var inst_9086 = (state_9107[(7)]);
var inst_9087 = (state_9107[(8)]);
var inst_9086__$1 = (state_9107[(2)]);
var inst_9087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9086__$1,(0),null);
var inst_9088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9086__$1,(1),null);
var inst_9089 = (inst_9087__$1 == null);
var state_9107__$1 = (function (){var statearr_9109 = state_9107;
(statearr_9109[(7)] = inst_9086__$1);

(statearr_9109[(9)] = inst_9088);

(statearr_9109[(8)] = inst_9087__$1);

return statearr_9109;
})();
if(cljs.core.truth_(inst_9089)){
var statearr_9110_9130 = state_9107__$1;
(statearr_9110_9130[(1)] = (8));

} else {
var statearr_9111_9131 = state_9107__$1;
(statearr_9111_9131[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (1))){
var inst_9076 = cljs.core.vec(chs);
var inst_9077 = inst_9076;
var state_9107__$1 = (function (){var statearr_9112 = state_9107;
(statearr_9112[(10)] = inst_9077);

return statearr_9112;
})();
var statearr_9113_9132 = state_9107__$1;
(statearr_9113_9132[(2)] = null);

(statearr_9113_9132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (4))){
var inst_9077 = (state_9107[(10)]);
var state_9107__$1 = state_9107;
return cljs.core.async.ioc_alts_BANG_(state_9107__$1,(7),inst_9077);
} else {
if((state_val_9108 === (6))){
var inst_9103 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9114_9133 = state_9107__$1;
(statearr_9114_9133[(2)] = inst_9103);

(statearr_9114_9133[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (3))){
var inst_9105 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9107__$1,inst_9105);
} else {
if((state_val_9108 === (2))){
var inst_9077 = (state_9107[(10)]);
var inst_9079 = cljs.core.count(inst_9077);
var inst_9080 = (inst_9079 > (0));
var state_9107__$1 = state_9107;
if(cljs.core.truth_(inst_9080)){
var statearr_9116_9134 = state_9107__$1;
(statearr_9116_9134[(1)] = (4));

} else {
var statearr_9117_9135 = state_9107__$1;
(statearr_9117_9135[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (11))){
var inst_9077 = (state_9107[(10)]);
var inst_9096 = (state_9107[(2)]);
var tmp9115 = inst_9077;
var inst_9077__$1 = tmp9115;
var state_9107__$1 = (function (){var statearr_9118 = state_9107;
(statearr_9118[(10)] = inst_9077__$1);

(statearr_9118[(11)] = inst_9096);

return statearr_9118;
})();
var statearr_9119_9136 = state_9107__$1;
(statearr_9119_9136[(2)] = null);

(statearr_9119_9136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (9))){
var inst_9087 = (state_9107[(8)]);
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9107__$1,(11),out,inst_9087);
} else {
if((state_val_9108 === (5))){
var inst_9101 = cljs.core.async.close_BANG_(out);
var state_9107__$1 = state_9107;
var statearr_9120_9137 = state_9107__$1;
(statearr_9120_9137[(2)] = inst_9101);

(statearr_9120_9137[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (10))){
var inst_9099 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9121_9138 = state_9107__$1;
(statearr_9121_9138[(2)] = inst_9099);

(statearr_9121_9138[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9108 === (8))){
var inst_9086 = (state_9107[(7)]);
var inst_9088 = (state_9107[(9)]);
var inst_9077 = (state_9107[(10)]);
var inst_9087 = (state_9107[(8)]);
var inst_9091 = (function (){var cs = inst_9077;
var vec__9082 = inst_9086;
var v = inst_9087;
var c = inst_9088;
return (function (p1__9073_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__9073_SHARP_);
});
})();
var inst_9092 = cljs.core.filterv(inst_9091,inst_9077);
var inst_9077__$1 = inst_9092;
var state_9107__$1 = (function (){var statearr_9122 = state_9107;
(statearr_9122[(10)] = inst_9077__$1);

return statearr_9122;
})();
var statearr_9123_9139 = state_9107__$1;
(statearr_9123_9139[(2)] = null);

(statearr_9123_9139[(1)] = (2));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9124[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9124[(1)] = (1));

return statearr_9124;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9107){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9107);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9125){if((e9125 instanceof Object)){
var ex__7598__auto__ = e9125;
var statearr_9126_9140 = state_9107;
(statearr_9126_9140[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9107);

return cljs.core.cst$kw$recur;
} else {
throw e9125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9141 = state_9107;
state_9107 = G__9141;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9127 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9127[(6)] = c__7701__auto___9129);

return statearr_9127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
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
var G__9143 = arguments.length;
switch (G__9143) {
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
var c__7701__auto___9188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9167){
var state_val_9168 = (state_9167[(1)]);
if((state_val_9168 === (7))){
var inst_9149 = (state_9167[(7)]);
var inst_9149__$1 = (state_9167[(2)]);
var inst_9150 = (inst_9149__$1 == null);
var inst_9151 = cljs.core.not(inst_9150);
var state_9167__$1 = (function (){var statearr_9169 = state_9167;
(statearr_9169[(7)] = inst_9149__$1);

return statearr_9169;
})();
if(inst_9151){
var statearr_9170_9189 = state_9167__$1;
(statearr_9170_9189[(1)] = (8));

} else {
var statearr_9171_9190 = state_9167__$1;
(statearr_9171_9190[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (1))){
var inst_9144 = (0);
var state_9167__$1 = (function (){var statearr_9172 = state_9167;
(statearr_9172[(8)] = inst_9144);

return statearr_9172;
})();
var statearr_9173_9191 = state_9167__$1;
(statearr_9173_9191[(2)] = null);

(statearr_9173_9191[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (4))){
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9167__$1,(7),ch);
} else {
if((state_val_9168 === (6))){
var inst_9162 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
var statearr_9174_9192 = state_9167__$1;
(statearr_9174_9192[(2)] = inst_9162);

(statearr_9174_9192[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (3))){
var inst_9164 = (state_9167[(2)]);
var inst_9165 = cljs.core.async.close_BANG_(out);
var state_9167__$1 = (function (){var statearr_9175 = state_9167;
(statearr_9175[(9)] = inst_9164);

return statearr_9175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9167__$1,inst_9165);
} else {
if((state_val_9168 === (2))){
var inst_9144 = (state_9167[(8)]);
var inst_9146 = (inst_9144 < n);
var state_9167__$1 = state_9167;
if(cljs.core.truth_(inst_9146)){
var statearr_9176_9193 = state_9167__$1;
(statearr_9176_9193[(1)] = (4));

} else {
var statearr_9177_9194 = state_9167__$1;
(statearr_9177_9194[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (11))){
var inst_9144 = (state_9167[(8)]);
var inst_9154 = (state_9167[(2)]);
var inst_9155 = (inst_9144 + (1));
var inst_9144__$1 = inst_9155;
var state_9167__$1 = (function (){var statearr_9178 = state_9167;
(statearr_9178[(8)] = inst_9144__$1);

(statearr_9178[(10)] = inst_9154);

return statearr_9178;
})();
var statearr_9179_9195 = state_9167__$1;
(statearr_9179_9195[(2)] = null);

(statearr_9179_9195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (9))){
var state_9167__$1 = state_9167;
var statearr_9180_9196 = state_9167__$1;
(statearr_9180_9196[(2)] = null);

(statearr_9180_9196[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (5))){
var state_9167__$1 = state_9167;
var statearr_9181_9197 = state_9167__$1;
(statearr_9181_9197[(2)] = null);

(statearr_9181_9197[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (10))){
var inst_9159 = (state_9167[(2)]);
var state_9167__$1 = state_9167;
var statearr_9182_9198 = state_9167__$1;
(statearr_9182_9198[(2)] = inst_9159);

(statearr_9182_9198[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9168 === (8))){
var inst_9149 = (state_9167[(7)]);
var state_9167__$1 = state_9167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9167__$1,(11),out,inst_9149);
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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9183[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9183[(1)] = (1));

return statearr_9183;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9167){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9167);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9184){if((e9184 instanceof Object)){
var ex__7598__auto__ = e9184;
var statearr_9185_9199 = state_9167;
(statearr_9185_9199[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9167);

return cljs.core.cst$kw$recur;
} else {
throw e9184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9200 = state_9167;
state_9167 = G__9200;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9186 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9186[(6)] = c__7701__auto___9188);

return statearr_9186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9202 = (function (f,ch,meta9203){
this.f = f;
this.ch = ch;
this.meta9203 = meta9203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9204,meta9203__$1){
var self__ = this;
var _9204__$1 = this;
return (new cljs.core.async.t_cljs$core$async9202(self__.f,self__.ch,meta9203__$1));
}));

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9204){
var self__ = this;
var _9204__$1 = this;
return self__.meta9203;
}));

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9205 = (function (f,ch,meta9203,_,fn1,meta9206){
this.f = f;
this.ch = ch;
this.meta9203 = meta9203;
this._ = _;
this.fn1 = fn1;
this.meta9206 = meta9206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9207,meta9206__$1){
var self__ = this;
var _9207__$1 = this;
return (new cljs.core.async.t_cljs$core$async9205(self__.f,self__.ch,self__.meta9203,self__._,self__.fn1,meta9206__$1));
}));

(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9207){
var self__ = this;
var _9207__$1 = this;
return self__.meta9206;
}));

(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__9201_SHARP_){
var G__9208 = (((p1__9201_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9201_SHARP_) : self__.f.call(null,p1__9201_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9208) : f1.call(null,G__9208));
});
}));

(cljs.core.async.t_cljs$core$async9205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9203,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9202], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9206], null);
}));

(cljs.core.async.t_cljs$core$async9205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9205");

(cljs.core.async.t_cljs$core$async9205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9205.
 */
cljs.core.async.__GT_t_cljs$core$async9205 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9205(f__$1,ch__$1,meta9203__$1,___$2,fn1__$1,meta9206){
return (new cljs.core.async.t_cljs$core$async9205(f__$1,ch__$1,meta9203__$1,___$2,fn1__$1,meta9206));
});

}

return (new cljs.core.async.t_cljs$core$async9205(self__.f,self__.ch,self__.meta9203,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9209 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9209) : self__.f.call(null,G__9209));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async9202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9203], null);
}));

(cljs.core.async.t_cljs$core$async9202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9202");

(cljs.core.async.t_cljs$core$async9202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9202.
 */
cljs.core.async.__GT_t_cljs$core$async9202 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9202(f__$1,ch__$1,meta9203){
return (new cljs.core.async.t_cljs$core$async9202(f__$1,ch__$1,meta9203));
});

}

return (new cljs.core.async.t_cljs$core$async9202(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9210 = (function (f,ch,meta9211){
this.f = f;
this.ch = ch;
this.meta9211 = meta9211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9212,meta9211__$1){
var self__ = this;
var _9212__$1 = this;
return (new cljs.core.async.t_cljs$core$async9210(self__.f,self__.ch,meta9211__$1));
}));

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9212){
var self__ = this;
var _9212__$1 = this;
return self__.meta9211;
}));

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async9210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9211], null);
}));

(cljs.core.async.t_cljs$core$async9210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9210");

(cljs.core.async.t_cljs$core$async9210.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9210.
 */
cljs.core.async.__GT_t_cljs$core$async9210 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9210(f__$1,ch__$1,meta9211){
return (new cljs.core.async.t_cljs$core$async9210(f__$1,ch__$1,meta9211));
});

}

return (new cljs.core.async.t_cljs$core$async9210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9213 = (function (p,ch,meta9214){
this.p = p;
this.ch = ch;
this.meta9214 = meta9214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9215,meta9214__$1){
var self__ = this;
var _9215__$1 = this;
return (new cljs.core.async.t_cljs$core$async9213(self__.p,self__.ch,meta9214__$1));
}));

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9215){
var self__ = this;
var _9215__$1 = this;
return self__.meta9214;
}));

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async9213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9214], null);
}));

(cljs.core.async.t_cljs$core$async9213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9213");

(cljs.core.async.t_cljs$core$async9213.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async9213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9213.
 */
cljs.core.async.__GT_t_cljs$core$async9213 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9213(p__$1,ch__$1,meta9214){
return (new cljs.core.async.t_cljs$core$async9213(p__$1,ch__$1,meta9214));
});

}

return (new cljs.core.async.t_cljs$core$async9213(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9217 = arguments.length;
switch (G__9217) {
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
var c__7701__auto___9257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9238){
var state_val_9239 = (state_9238[(1)]);
if((state_val_9239 === (7))){
var inst_9234 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9240_9258 = state_9238__$1;
(statearr_9240_9258[(2)] = inst_9234);

(statearr_9240_9258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (1))){
var state_9238__$1 = state_9238;
var statearr_9241_9259 = state_9238__$1;
(statearr_9241_9259[(2)] = null);

(statearr_9241_9259[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (4))){
var inst_9220 = (state_9238[(7)]);
var inst_9220__$1 = (state_9238[(2)]);
var inst_9221 = (inst_9220__$1 == null);
var state_9238__$1 = (function (){var statearr_9242 = state_9238;
(statearr_9242[(7)] = inst_9220__$1);

return statearr_9242;
})();
if(cljs.core.truth_(inst_9221)){
var statearr_9243_9260 = state_9238__$1;
(statearr_9243_9260[(1)] = (5));

} else {
var statearr_9244_9261 = state_9238__$1;
(statearr_9244_9261[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (6))){
var inst_9220 = (state_9238[(7)]);
var inst_9225 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9220) : p.call(null,inst_9220));
var state_9238__$1 = state_9238;
if(cljs.core.truth_(inst_9225)){
var statearr_9245_9262 = state_9238__$1;
(statearr_9245_9262[(1)] = (8));

} else {
var statearr_9246_9263 = state_9238__$1;
(statearr_9246_9263[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (3))){
var inst_9236 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9238__$1,inst_9236);
} else {
if((state_val_9239 === (2))){
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9238__$1,(4),ch);
} else {
if((state_val_9239 === (11))){
var inst_9228 = (state_9238[(2)]);
var state_9238__$1 = state_9238;
var statearr_9247_9264 = state_9238__$1;
(statearr_9247_9264[(2)] = inst_9228);

(statearr_9247_9264[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (9))){
var state_9238__$1 = state_9238;
var statearr_9248_9265 = state_9238__$1;
(statearr_9248_9265[(2)] = null);

(statearr_9248_9265[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (5))){
var inst_9223 = cljs.core.async.close_BANG_(out);
var state_9238__$1 = state_9238;
var statearr_9249_9266 = state_9238__$1;
(statearr_9249_9266[(2)] = inst_9223);

(statearr_9249_9266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (10))){
var inst_9231 = (state_9238[(2)]);
var state_9238__$1 = (function (){var statearr_9250 = state_9238;
(statearr_9250[(8)] = inst_9231);

return statearr_9250;
})();
var statearr_9251_9267 = state_9238__$1;
(statearr_9251_9267[(2)] = null);

(statearr_9251_9267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9239 === (8))){
var inst_9220 = (state_9238[(7)]);
var state_9238__$1 = state_9238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9238__$1,(11),out,inst_9220);
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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9252 = [null,null,null,null,null,null,null,null,null];
(statearr_9252[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9252[(1)] = (1));

return statearr_9252;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9238){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9238);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9253){if((e9253 instanceof Object)){
var ex__7598__auto__ = e9253;
var statearr_9254_9268 = state_9238;
(statearr_9254_9268[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9238);

return cljs.core.cst$kw$recur;
} else {
throw e9253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9269 = state_9238;
state_9238 = G__9269;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9255 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9255[(6)] = c__7701__auto___9257);

return statearr_9255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9271 = arguments.length;
switch (G__9271) {
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
var c__7701__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9334){
var state_val_9335 = (state_9334[(1)]);
if((state_val_9335 === (7))){
var inst_9330 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
var statearr_9336_9374 = state_9334__$1;
(statearr_9336_9374[(2)] = inst_9330);

(statearr_9336_9374[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (20))){
var inst_9300 = (state_9334[(7)]);
var inst_9311 = (state_9334[(2)]);
var inst_9312 = cljs.core.next(inst_9300);
var inst_9286 = inst_9312;
var inst_9287 = null;
var inst_9288 = (0);
var inst_9289 = (0);
var state_9334__$1 = (function (){var statearr_9337 = state_9334;
(statearr_9337[(8)] = inst_9286);

(statearr_9337[(9)] = inst_9288);

(statearr_9337[(10)] = inst_9287);

(statearr_9337[(11)] = inst_9311);

(statearr_9337[(12)] = inst_9289);

return statearr_9337;
})();
var statearr_9338_9375 = state_9334__$1;
(statearr_9338_9375[(2)] = null);

(statearr_9338_9375[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (1))){
var state_9334__$1 = state_9334;
var statearr_9339_9376 = state_9334__$1;
(statearr_9339_9376[(2)] = null);

(statearr_9339_9376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (4))){
var inst_9275 = (state_9334[(13)]);
var inst_9275__$1 = (state_9334[(2)]);
var inst_9276 = (inst_9275__$1 == null);
var state_9334__$1 = (function (){var statearr_9340 = state_9334;
(statearr_9340[(13)] = inst_9275__$1);

return statearr_9340;
})();
if(cljs.core.truth_(inst_9276)){
var statearr_9341_9377 = state_9334__$1;
(statearr_9341_9377[(1)] = (5));

} else {
var statearr_9342_9378 = state_9334__$1;
(statearr_9342_9378[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (15))){
var state_9334__$1 = state_9334;
var statearr_9346_9379 = state_9334__$1;
(statearr_9346_9379[(2)] = null);

(statearr_9346_9379[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (21))){
var state_9334__$1 = state_9334;
var statearr_9347_9380 = state_9334__$1;
(statearr_9347_9380[(2)] = null);

(statearr_9347_9380[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (13))){
var inst_9286 = (state_9334[(8)]);
var inst_9288 = (state_9334[(9)]);
var inst_9287 = (state_9334[(10)]);
var inst_9289 = (state_9334[(12)]);
var inst_9296 = (state_9334[(2)]);
var inst_9297 = (inst_9289 + (1));
var tmp9343 = inst_9286;
var tmp9344 = inst_9288;
var tmp9345 = inst_9287;
var inst_9286__$1 = tmp9343;
var inst_9287__$1 = tmp9345;
var inst_9288__$1 = tmp9344;
var inst_9289__$1 = inst_9297;
var state_9334__$1 = (function (){var statearr_9348 = state_9334;
(statearr_9348[(8)] = inst_9286__$1);

(statearr_9348[(9)] = inst_9288__$1);

(statearr_9348[(14)] = inst_9296);

(statearr_9348[(10)] = inst_9287__$1);

(statearr_9348[(12)] = inst_9289__$1);

return statearr_9348;
})();
var statearr_9349_9381 = state_9334__$1;
(statearr_9349_9381[(2)] = null);

(statearr_9349_9381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (22))){
var state_9334__$1 = state_9334;
var statearr_9350_9382 = state_9334__$1;
(statearr_9350_9382[(2)] = null);

(statearr_9350_9382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (6))){
var inst_9275 = (state_9334[(13)]);
var inst_9284 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9275) : f.call(null,inst_9275));
var inst_9285 = cljs.core.seq(inst_9284);
var inst_9286 = inst_9285;
var inst_9287 = null;
var inst_9288 = (0);
var inst_9289 = (0);
var state_9334__$1 = (function (){var statearr_9351 = state_9334;
(statearr_9351[(8)] = inst_9286);

(statearr_9351[(9)] = inst_9288);

(statearr_9351[(10)] = inst_9287);

(statearr_9351[(12)] = inst_9289);

return statearr_9351;
})();
var statearr_9352_9383 = state_9334__$1;
(statearr_9352_9383[(2)] = null);

(statearr_9352_9383[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (17))){
var inst_9300 = (state_9334[(7)]);
var inst_9304 = cljs.core.chunk_first(inst_9300);
var inst_9305 = cljs.core.chunk_rest(inst_9300);
var inst_9306 = cljs.core.count(inst_9304);
var inst_9286 = inst_9305;
var inst_9287 = inst_9304;
var inst_9288 = inst_9306;
var inst_9289 = (0);
var state_9334__$1 = (function (){var statearr_9353 = state_9334;
(statearr_9353[(8)] = inst_9286);

(statearr_9353[(9)] = inst_9288);

(statearr_9353[(10)] = inst_9287);

(statearr_9353[(12)] = inst_9289);

return statearr_9353;
})();
var statearr_9354_9384 = state_9334__$1;
(statearr_9354_9384[(2)] = null);

(statearr_9354_9384[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (3))){
var inst_9332 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9334__$1,inst_9332);
} else {
if((state_val_9335 === (12))){
var inst_9320 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
var statearr_9355_9385 = state_9334__$1;
(statearr_9355_9385[(2)] = inst_9320);

(statearr_9355_9385[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (2))){
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9334__$1,(4),in$);
} else {
if((state_val_9335 === (23))){
var inst_9328 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
var statearr_9356_9386 = state_9334__$1;
(statearr_9356_9386[(2)] = inst_9328);

(statearr_9356_9386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (19))){
var inst_9315 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
var statearr_9357_9387 = state_9334__$1;
(statearr_9357_9387[(2)] = inst_9315);

(statearr_9357_9387[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (11))){
var inst_9286 = (state_9334[(8)]);
var inst_9300 = (state_9334[(7)]);
var inst_9300__$1 = cljs.core.seq(inst_9286);
var state_9334__$1 = (function (){var statearr_9358 = state_9334;
(statearr_9358[(7)] = inst_9300__$1);

return statearr_9358;
})();
if(inst_9300__$1){
var statearr_9359_9388 = state_9334__$1;
(statearr_9359_9388[(1)] = (14));

} else {
var statearr_9360_9389 = state_9334__$1;
(statearr_9360_9389[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (9))){
var inst_9322 = (state_9334[(2)]);
var inst_9323 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_9334__$1 = (function (){var statearr_9361 = state_9334;
(statearr_9361[(15)] = inst_9322);

return statearr_9361;
})();
if(cljs.core.truth_(inst_9323)){
var statearr_9362_9390 = state_9334__$1;
(statearr_9362_9390[(1)] = (21));

} else {
var statearr_9363_9391 = state_9334__$1;
(statearr_9363_9391[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (5))){
var inst_9278 = cljs.core.async.close_BANG_(out);
var state_9334__$1 = state_9334;
var statearr_9364_9392 = state_9334__$1;
(statearr_9364_9392[(2)] = inst_9278);

(statearr_9364_9392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (14))){
var inst_9300 = (state_9334[(7)]);
var inst_9302 = cljs.core.chunked_seq_QMARK_(inst_9300);
var state_9334__$1 = state_9334;
if(inst_9302){
var statearr_9365_9393 = state_9334__$1;
(statearr_9365_9393[(1)] = (17));

} else {
var statearr_9366_9394 = state_9334__$1;
(statearr_9366_9394[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (16))){
var inst_9318 = (state_9334[(2)]);
var state_9334__$1 = state_9334;
var statearr_9367_9395 = state_9334__$1;
(statearr_9367_9395[(2)] = inst_9318);

(statearr_9367_9395[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9335 === (10))){
var inst_9287 = (state_9334[(10)]);
var inst_9289 = (state_9334[(12)]);
var inst_9294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9287,inst_9289);
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9334__$1,(13),out,inst_9294);
} else {
if((state_val_9335 === (18))){
var inst_9300 = (state_9334[(7)]);
var inst_9309 = cljs.core.first(inst_9300);
var state_9334__$1 = state_9334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9334__$1,(20),out,inst_9309);
} else {
if((state_val_9335 === (8))){
var inst_9288 = (state_9334[(9)]);
var inst_9289 = (state_9334[(12)]);
var inst_9291 = (inst_9289 < inst_9288);
var inst_9292 = inst_9291;
var state_9334__$1 = state_9334;
if(cljs.core.truth_(inst_9292)){
var statearr_9368_9396 = state_9334__$1;
(statearr_9368_9396[(1)] = (10));

} else {
var statearr_9369_9397 = state_9334__$1;
(statearr_9369_9397[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____0 = (function (){
var statearr_9370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9370[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__);

(statearr_9370[(1)] = (1));

return statearr_9370;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____1 = (function (state_9334){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9334);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9371){if((e9371 instanceof Object)){
var ex__7598__auto__ = e9371;
var statearr_9372_9398 = state_9334;
(statearr_9372_9398[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9334);

return cljs.core.cst$kw$recur;
} else {
throw e9371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9399 = state_9334;
state_9334 = G__9399;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__ = function(state_9334){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____1.call(this,state_9334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7595__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9373 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9373[(6)] = c__7701__auto__);

return statearr_9373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));

return c__7701__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9401 = arguments.length;
switch (G__9401) {
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
var G__9404 = arguments.length;
switch (G__9404) {
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
var G__9407 = arguments.length;
switch (G__9407) {
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
var c__7701__auto___9454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9431){
var state_val_9432 = (state_9431[(1)]);
if((state_val_9432 === (7))){
var inst_9426 = (state_9431[(2)]);
var state_9431__$1 = state_9431;
var statearr_9433_9455 = state_9431__$1;
(statearr_9433_9455[(2)] = inst_9426);

(statearr_9433_9455[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (1))){
var inst_9408 = null;
var state_9431__$1 = (function (){var statearr_9434 = state_9431;
(statearr_9434[(7)] = inst_9408);

return statearr_9434;
})();
var statearr_9435_9456 = state_9431__$1;
(statearr_9435_9456[(2)] = null);

(statearr_9435_9456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (4))){
var inst_9411 = (state_9431[(8)]);
var inst_9411__$1 = (state_9431[(2)]);
var inst_9412 = (inst_9411__$1 == null);
var inst_9413 = cljs.core.not(inst_9412);
var state_9431__$1 = (function (){var statearr_9436 = state_9431;
(statearr_9436[(8)] = inst_9411__$1);

return statearr_9436;
})();
if(inst_9413){
var statearr_9437_9457 = state_9431__$1;
(statearr_9437_9457[(1)] = (5));

} else {
var statearr_9438_9458 = state_9431__$1;
(statearr_9438_9458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (6))){
var state_9431__$1 = state_9431;
var statearr_9439_9459 = state_9431__$1;
(statearr_9439_9459[(2)] = null);

(statearr_9439_9459[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (3))){
var inst_9428 = (state_9431[(2)]);
var inst_9429 = cljs.core.async.close_BANG_(out);
var state_9431__$1 = (function (){var statearr_9440 = state_9431;
(statearr_9440[(9)] = inst_9428);

return statearr_9440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9431__$1,inst_9429);
} else {
if((state_val_9432 === (2))){
var state_9431__$1 = state_9431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9431__$1,(4),ch);
} else {
if((state_val_9432 === (11))){
var inst_9411 = (state_9431[(8)]);
var inst_9420 = (state_9431[(2)]);
var inst_9408 = inst_9411;
var state_9431__$1 = (function (){var statearr_9441 = state_9431;
(statearr_9441[(7)] = inst_9408);

(statearr_9441[(10)] = inst_9420);

return statearr_9441;
})();
var statearr_9442_9460 = state_9431__$1;
(statearr_9442_9460[(2)] = null);

(statearr_9442_9460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (9))){
var inst_9411 = (state_9431[(8)]);
var state_9431__$1 = state_9431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9431__$1,(11),out,inst_9411);
} else {
if((state_val_9432 === (5))){
var inst_9411 = (state_9431[(8)]);
var inst_9408 = (state_9431[(7)]);
var inst_9415 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9411,inst_9408);
var state_9431__$1 = state_9431;
if(inst_9415){
var statearr_9444_9461 = state_9431__$1;
(statearr_9444_9461[(1)] = (8));

} else {
var statearr_9445_9462 = state_9431__$1;
(statearr_9445_9462[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (10))){
var inst_9423 = (state_9431[(2)]);
var state_9431__$1 = state_9431;
var statearr_9446_9463 = state_9431__$1;
(statearr_9446_9463[(2)] = inst_9423);

(statearr_9446_9463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9432 === (8))){
var inst_9408 = (state_9431[(7)]);
var tmp9443 = inst_9408;
var inst_9408__$1 = tmp9443;
var state_9431__$1 = (function (){var statearr_9447 = state_9431;
(statearr_9447[(7)] = inst_9408__$1);

return statearr_9447;
})();
var statearr_9448_9464 = state_9431__$1;
(statearr_9448_9464[(2)] = null);

(statearr_9448_9464[(1)] = (2));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9449[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9449[(1)] = (1));

return statearr_9449;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9431){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9431);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9450){if((e9450 instanceof Object)){
var ex__7598__auto__ = e9450;
var statearr_9451_9465 = state_9431;
(statearr_9451_9465[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9431);

return cljs.core.cst$kw$recur;
} else {
throw e9450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9466 = state_9431;
state_9431 = G__9466;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9452 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9452[(6)] = c__7701__auto___9454);

return statearr_9452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9468 = arguments.length;
switch (G__9468) {
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
var c__7701__auto___9534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9506){
var state_val_9507 = (state_9506[(1)]);
if((state_val_9507 === (7))){
var inst_9502 = (state_9506[(2)]);
var state_9506__$1 = state_9506;
var statearr_9508_9535 = state_9506__$1;
(statearr_9508_9535[(2)] = inst_9502);

(statearr_9508_9535[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (1))){
var inst_9469 = (new Array(n));
var inst_9470 = inst_9469;
var inst_9471 = (0);
var state_9506__$1 = (function (){var statearr_9509 = state_9506;
(statearr_9509[(7)] = inst_9471);

(statearr_9509[(8)] = inst_9470);

return statearr_9509;
})();
var statearr_9510_9536 = state_9506__$1;
(statearr_9510_9536[(2)] = null);

(statearr_9510_9536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (4))){
var inst_9474 = (state_9506[(9)]);
var inst_9474__$1 = (state_9506[(2)]);
var inst_9475 = (inst_9474__$1 == null);
var inst_9476 = cljs.core.not(inst_9475);
var state_9506__$1 = (function (){var statearr_9511 = state_9506;
(statearr_9511[(9)] = inst_9474__$1);

return statearr_9511;
})();
if(inst_9476){
var statearr_9512_9537 = state_9506__$1;
(statearr_9512_9537[(1)] = (5));

} else {
var statearr_9513_9538 = state_9506__$1;
(statearr_9513_9538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (15))){
var inst_9496 = (state_9506[(2)]);
var state_9506__$1 = state_9506;
var statearr_9514_9539 = state_9506__$1;
(statearr_9514_9539[(2)] = inst_9496);

(statearr_9514_9539[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (13))){
var state_9506__$1 = state_9506;
var statearr_9515_9540 = state_9506__$1;
(statearr_9515_9540[(2)] = null);

(statearr_9515_9540[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (6))){
var inst_9471 = (state_9506[(7)]);
var inst_9492 = (inst_9471 > (0));
var state_9506__$1 = state_9506;
if(cljs.core.truth_(inst_9492)){
var statearr_9516_9541 = state_9506__$1;
(statearr_9516_9541[(1)] = (12));

} else {
var statearr_9517_9542 = state_9506__$1;
(statearr_9517_9542[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (3))){
var inst_9504 = (state_9506[(2)]);
var state_9506__$1 = state_9506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9506__$1,inst_9504);
} else {
if((state_val_9507 === (12))){
var inst_9470 = (state_9506[(8)]);
var inst_9494 = cljs.core.vec(inst_9470);
var state_9506__$1 = state_9506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9506__$1,(15),out,inst_9494);
} else {
if((state_val_9507 === (2))){
var state_9506__$1 = state_9506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9506__$1,(4),ch);
} else {
if((state_val_9507 === (11))){
var inst_9486 = (state_9506[(2)]);
var inst_9487 = (new Array(n));
var inst_9470 = inst_9487;
var inst_9471 = (0);
var state_9506__$1 = (function (){var statearr_9518 = state_9506;
(statearr_9518[(7)] = inst_9471);

(statearr_9518[(10)] = inst_9486);

(statearr_9518[(8)] = inst_9470);

return statearr_9518;
})();
var statearr_9519_9543 = state_9506__$1;
(statearr_9519_9543[(2)] = null);

(statearr_9519_9543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (9))){
var inst_9470 = (state_9506[(8)]);
var inst_9484 = cljs.core.vec(inst_9470);
var state_9506__$1 = state_9506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9506__$1,(11),out,inst_9484);
} else {
if((state_val_9507 === (5))){
var inst_9471 = (state_9506[(7)]);
var inst_9474 = (state_9506[(9)]);
var inst_9479 = (state_9506[(11)]);
var inst_9470 = (state_9506[(8)]);
var inst_9478 = (inst_9470[inst_9471] = inst_9474);
var inst_9479__$1 = (inst_9471 + (1));
var inst_9480 = (inst_9479__$1 < n);
var state_9506__$1 = (function (){var statearr_9520 = state_9506;
(statearr_9520[(12)] = inst_9478);

(statearr_9520[(11)] = inst_9479__$1);

return statearr_9520;
})();
if(cljs.core.truth_(inst_9480)){
var statearr_9521_9544 = state_9506__$1;
(statearr_9521_9544[(1)] = (8));

} else {
var statearr_9522_9545 = state_9506__$1;
(statearr_9522_9545[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (14))){
var inst_9499 = (state_9506[(2)]);
var inst_9500 = cljs.core.async.close_BANG_(out);
var state_9506__$1 = (function (){var statearr_9524 = state_9506;
(statearr_9524[(13)] = inst_9499);

return statearr_9524;
})();
var statearr_9525_9546 = state_9506__$1;
(statearr_9525_9546[(2)] = inst_9500);

(statearr_9525_9546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (10))){
var inst_9490 = (state_9506[(2)]);
var state_9506__$1 = state_9506;
var statearr_9526_9547 = state_9506__$1;
(statearr_9526_9547[(2)] = inst_9490);

(statearr_9526_9547[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9507 === (8))){
var inst_9479 = (state_9506[(11)]);
var inst_9470 = (state_9506[(8)]);
var tmp9523 = inst_9470;
var inst_9470__$1 = tmp9523;
var inst_9471 = inst_9479;
var state_9506__$1 = (function (){var statearr_9527 = state_9506;
(statearr_9527[(7)] = inst_9471);

(statearr_9527[(8)] = inst_9470__$1);

return statearr_9527;
})();
var statearr_9528_9548 = state_9506__$1;
(statearr_9528_9548[(2)] = null);

(statearr_9528_9548[(1)] = (2));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9529[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9529[(1)] = (1));

return statearr_9529;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9506){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9506);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9530){if((e9530 instanceof Object)){
var ex__7598__auto__ = e9530;
var statearr_9531_9549 = state_9506;
(statearr_9531_9549[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9506);

return cljs.core.cst$kw$recur;
} else {
throw e9530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9550 = state_9506;
state_9506 = G__9550;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9532 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9532[(6)] = c__7701__auto___9534);

return statearr_9532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9552 = arguments.length;
switch (G__9552) {
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
var c__7701__auto___9622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7702__auto__ = (function (){var switch__7594__auto__ = (function (state_9594){
var state_val_9595 = (state_9594[(1)]);
if((state_val_9595 === (7))){
var inst_9590 = (state_9594[(2)]);
var state_9594__$1 = state_9594;
var statearr_9596_9623 = state_9594__$1;
(statearr_9596_9623[(2)] = inst_9590);

(statearr_9596_9623[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (1))){
var inst_9553 = [];
var inst_9554 = inst_9553;
var inst_9555 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9594__$1 = (function (){var statearr_9597 = state_9594;
(statearr_9597[(7)] = inst_9555);

(statearr_9597[(8)] = inst_9554);

return statearr_9597;
})();
var statearr_9598_9624 = state_9594__$1;
(statearr_9598_9624[(2)] = null);

(statearr_9598_9624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (4))){
var inst_9558 = (state_9594[(9)]);
var inst_9558__$1 = (state_9594[(2)]);
var inst_9559 = (inst_9558__$1 == null);
var inst_9560 = cljs.core.not(inst_9559);
var state_9594__$1 = (function (){var statearr_9599 = state_9594;
(statearr_9599[(9)] = inst_9558__$1);

return statearr_9599;
})();
if(inst_9560){
var statearr_9600_9625 = state_9594__$1;
(statearr_9600_9625[(1)] = (5));

} else {
var statearr_9601_9626 = state_9594__$1;
(statearr_9601_9626[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (15))){
var inst_9584 = (state_9594[(2)]);
var state_9594__$1 = state_9594;
var statearr_9602_9627 = state_9594__$1;
(statearr_9602_9627[(2)] = inst_9584);

(statearr_9602_9627[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (13))){
var state_9594__$1 = state_9594;
var statearr_9603_9628 = state_9594__$1;
(statearr_9603_9628[(2)] = null);

(statearr_9603_9628[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (6))){
var inst_9554 = (state_9594[(8)]);
var inst_9579 = inst_9554.length;
var inst_9580 = (inst_9579 > (0));
var state_9594__$1 = state_9594;
if(cljs.core.truth_(inst_9580)){
var statearr_9604_9629 = state_9594__$1;
(statearr_9604_9629[(1)] = (12));

} else {
var statearr_9605_9630 = state_9594__$1;
(statearr_9605_9630[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (3))){
var inst_9592 = (state_9594[(2)]);
var state_9594__$1 = state_9594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9594__$1,inst_9592);
} else {
if((state_val_9595 === (12))){
var inst_9554 = (state_9594[(8)]);
var inst_9582 = cljs.core.vec(inst_9554);
var state_9594__$1 = state_9594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9594__$1,(15),out,inst_9582);
} else {
if((state_val_9595 === (2))){
var state_9594__$1 = state_9594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9594__$1,(4),ch);
} else {
if((state_val_9595 === (11))){
var inst_9558 = (state_9594[(9)]);
var inst_9562 = (state_9594[(10)]);
var inst_9572 = (state_9594[(2)]);
var inst_9573 = [];
var inst_9574 = inst_9573.push(inst_9558);
var inst_9554 = inst_9573;
var inst_9555 = inst_9562;
var state_9594__$1 = (function (){var statearr_9606 = state_9594;
(statearr_9606[(7)] = inst_9555);

(statearr_9606[(11)] = inst_9574);

(statearr_9606[(8)] = inst_9554);

(statearr_9606[(12)] = inst_9572);

return statearr_9606;
})();
var statearr_9607_9631 = state_9594__$1;
(statearr_9607_9631[(2)] = null);

(statearr_9607_9631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (9))){
var inst_9554 = (state_9594[(8)]);
var inst_9570 = cljs.core.vec(inst_9554);
var state_9594__$1 = state_9594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9594__$1,(11),out,inst_9570);
} else {
if((state_val_9595 === (5))){
var inst_9555 = (state_9594[(7)]);
var inst_9558 = (state_9594[(9)]);
var inst_9562 = (state_9594[(10)]);
var inst_9562__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9558) : f.call(null,inst_9558));
var inst_9563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9562__$1,inst_9555);
var inst_9564 = cljs.core.keyword_identical_QMARK_(inst_9555,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9565 = ((inst_9563) || (inst_9564));
var state_9594__$1 = (function (){var statearr_9608 = state_9594;
(statearr_9608[(10)] = inst_9562__$1);

return statearr_9608;
})();
if(cljs.core.truth_(inst_9565)){
var statearr_9609_9632 = state_9594__$1;
(statearr_9609_9632[(1)] = (8));

} else {
var statearr_9610_9633 = state_9594__$1;
(statearr_9610_9633[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (14))){
var inst_9587 = (state_9594[(2)]);
var inst_9588 = cljs.core.async.close_BANG_(out);
var state_9594__$1 = (function (){var statearr_9612 = state_9594;
(statearr_9612[(13)] = inst_9587);

return statearr_9612;
})();
var statearr_9613_9634 = state_9594__$1;
(statearr_9613_9634[(2)] = inst_9588);

(statearr_9613_9634[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (10))){
var inst_9577 = (state_9594[(2)]);
var state_9594__$1 = state_9594;
var statearr_9614_9635 = state_9594__$1;
(statearr_9614_9635[(2)] = inst_9577);

(statearr_9614_9635[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9595 === (8))){
var inst_9554 = (state_9594[(8)]);
var inst_9558 = (state_9594[(9)]);
var inst_9562 = (state_9594[(10)]);
var inst_9567 = inst_9554.push(inst_9558);
var tmp9611 = inst_9554;
var inst_9554__$1 = tmp9611;
var inst_9555 = inst_9562;
var state_9594__$1 = (function (){var statearr_9615 = state_9594;
(statearr_9615[(14)] = inst_9567);

(statearr_9615[(7)] = inst_9555);

(statearr_9615[(8)] = inst_9554__$1);

return statearr_9615;
})();
var statearr_9616_9636 = state_9594__$1;
(statearr_9616_9636[(2)] = null);

(statearr_9616_9636[(1)] = (2));


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
var cljs$core$async$state_machine__7595__auto__ = null;
var cljs$core$async$state_machine__7595__auto____0 = (function (){
var statearr_9617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9617[(0)] = cljs$core$async$state_machine__7595__auto__);

(statearr_9617[(1)] = (1));

return statearr_9617;
});
var cljs$core$async$state_machine__7595__auto____1 = (function (state_9594){
while(true){
var ret_value__7596__auto__ = (function (){try{while(true){
var result__7597__auto__ = switch__7594__auto__(state_9594);
if(cljs.core.keyword_identical_QMARK_(result__7597__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7597__auto__;
}
break;
}
}catch (e9618){if((e9618 instanceof Object)){
var ex__7598__auto__ = e9618;
var statearr_9619_9637 = state_9594;
(statearr_9619_9637[(5)] = ex__7598__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9594);

return cljs.core.cst$kw$recur;
} else {
throw e9618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7596__auto__,cljs.core.cst$kw$recur)){
var G__9638 = state_9594;
state_9594 = G__9638;
continue;
} else {
return ret_value__7596__auto__;
}
break;
}
});
cljs$core$async$state_machine__7595__auto__ = function(state_9594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7595__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7595__auto____1.call(this,state_9594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7595__auto____0;
cljs$core$async$state_machine__7595__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7595__auto____1;
return cljs$core$async$state_machine__7595__auto__;
})()
})();
var state__7703__auto__ = (function (){var statearr_9620 = (f__7702__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7702__auto__.cljs$core$IFn$_invoke$arity$0() : f__7702__auto__.call(null));
(statearr_9620[(6)] = c__7701__auto___9622);

return statearr_9620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7703__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

