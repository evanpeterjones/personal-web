// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_personal_web.draw');
goog.require('cljs.core');
if((typeof cljs_personal_web !== 'undefined') && (typeof cljs_personal_web.draw !== 'undefined') && (typeof cljs_personal_web.draw.draw_object !== 'undefined')){
} else {
cljs_personal_web.draw.draw_object = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-personal-web.draw","draw-object"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs_personal_web.draw.two_pi = ((2) * Math.PI);
cljs.core._add_method.call(null,cljs_personal_web.draw.draw_object,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__39560,ctx){
var map__39561 = p__39560;
var map__39561__$1 = (((((!((map__39561 == null))))?(((((map__39561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39561):map__39561);
var color = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pos = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var size = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__39563 = pos;
var x = cljs.core.nth.call(null,vec__39563,(0),null);
var y = cljs.core.nth.call(null,vec__39563,(1),null);
var vec__39566 = size;
var x__$1 = cljs.core.nth.call(null,vec__39566,(0),null);
var h = cljs.core.nth.call(null,vec__39566,(1),null);
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"width","width",-384071477),canvas.width,new cljs.core.Keyword(null,"height","height",1025178622),canvas.height,new cljs.core.Keyword(null,"ctx","ctx",-493610118),canvas.getContext("2d")], null);
});

//# sourceMappingURL=draw.js.map?rel=1617925396240
