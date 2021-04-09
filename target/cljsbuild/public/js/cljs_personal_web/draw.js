// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_personal_web.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof cljs_personal_web !== 'undefined') && (typeof cljs_personal_web.draw !== 'undefined') && (typeof cljs_personal_web.draw.draw_object !== 'undefined')){
} else {
cljs_personal_web.draw.draw_object = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11279 = cljs.core.get_global_hierarchy;
return (fexpr__11279.cljs$core$IFn$_invoke$arity$0 ? fexpr__11279.cljs$core$IFn$_invoke$arity$0() : fexpr__11279.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-personal-web.draw","draw-object"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs_personal_web.draw.two_pi = ((2) * Math.PI);
cljs_personal_web.draw.draw_object.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$circle,(function (p__11280,ctx){
var map__11281 = p__11280;
var map__11281__$1 = (((((!((map__11281 == null))))?(((((map__11281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11281):map__11281);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11281__$1,cljs.core.cst$kw$color);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11281__$1,cljs.core.cst$kw$pos);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11281__$1,cljs.core.cst$kw$size);
var vec__11283 = pos;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11283,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11283,(1),null);
var vec__11286 = size;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11286,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11286,(1),null);
return null;
}));
cljs_personal_web.draw.draw_circle = (function cljs_personal_web$draw$draw_circle(){
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var centerX = (context.width / (2));
var centerY = (context.height / (2));
var radius = (70);
console.log(["test: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radius)].join(''));

(context.fillStyle = "green");

context.clearRect((0),(0),canvas.width,canvas.height);

context.beginPath();

context.arc(centerX,centerY,radius,(0),cljs_personal_web.draw.two_pi,false);

context.fill();

return context.stroke();
});
/**
 * Clears the canvas
 */
cljs_personal_web.draw.clear_canvas = (function cljs_personal_web$draw$clear_canvas(ctx,width,height){
ctx.save();

ctx.setTransform((1),(0),(0),(1),(0),(0));

ctx.clearRect((0),(0),width,height);

return ctx.restore();
});
/**
 * Gets the drawing context from the id of the canvas element.
 * Actual context is in a map with the canvas element and some
 * other info.
 */
cljs_personal_web.draw.get_canvas_context_from_id = (function cljs_personal_web$draw$get_canvas_context_from_id(id){
var canvas = document.getElementById(id);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$canvas,canvas,cljs.core.cst$kw$width,canvas.width,cljs.core.cst$kw$height,canvas.height,cljs.core.cst$kw$ctx,canvas.getContext("2d")], null);
});
