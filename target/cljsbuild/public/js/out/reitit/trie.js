// Compiled by ClojureScript 1.10.773 {}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.core.set.call(null,x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32324,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32328 = k32324;
var G__32328__$1 = (((G__32328 instanceof cljs.core.Keyword))?G__32328.fqn:null);
switch (G__32328__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32324,else__4383__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32329){
var vec__32330 = p__32329;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32330,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32330,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Wild{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32323){
var self__ = this;
var G__32323__$1 = this;
return (new cljs.core.RecordIter((0),G__32323__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32325,other32326){
var self__ = this;
var this32325__$1 = this;
return (((!((other32326 == null)))) && ((this32325__$1.constructor === other32326.constructor)) && (cljs.core._EQ_.call(null,this32325__$1.value,other32326.value)) && (cljs.core._EQ_.call(null,this32325__$1.__extmap,other32326.__extmap)));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32323){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32333 = cljs.core.keyword_identical_QMARK_;
var expr__32334 = k__4388__auto__;
if(cljs.core.truth_(pred__32333.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32334))){
return (new reitit.trie.Wild(G__32323,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32323),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32323){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__32323,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__32327){
var extmap__4419__auto__ = (function (){var G__32336 = cljs.core.dissoc.call(null,G__32327,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__32327)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32336);
} else {
return G__32336;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32327),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32339,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32343 = k32339;
var G__32343__$1 = (((G__32343 instanceof cljs.core.Keyword))?G__32343.fqn:null);
switch (G__32343__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32339,else__4383__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32344){
var vec__32345 = p__32344;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32345,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32345,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32338){
var self__ = this;
var G__32338__$1 = this;
return (new cljs.core.RecordIter((0),G__32338__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32340,other32341){
var self__ = this;
var this32340__$1 = this;
return (((!((other32341 == null)))) && ((this32340__$1.constructor === other32341.constructor)) && (cljs.core._EQ_.call(null,this32340__$1.value,other32341.value)) && (cljs.core._EQ_.call(null,this32340__$1.__extmap,other32341.__extmap)));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32338){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32348 = cljs.core.keyword_identical_QMARK_;
var expr__32349 = k__4388__auto__;
if(cljs.core.truth_(pred__32348.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32349))){
return (new reitit.trie.CatchAll(G__32338,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32338),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32338){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__32338,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__32342){
var extmap__4419__auto__ = (function (){var G__32351 = cljs.core.dissoc.call(null,G__32342,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__32342)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32351);
} else {
return G__32351;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32342),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32354,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32358 = k32354;
var G__32358__$1 = (((G__32358 instanceof cljs.core.Keyword))?G__32358.fqn:null);
switch (G__32358__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32354,else__4383__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32359){
var vec__32360 = p__32359;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32360,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32360,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Match{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32353){
var self__ = this;
var G__32353__$1 = this;
return (new cljs.core.RecordIter((0),G__32353__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32355,other32356){
var self__ = this;
var this32355__$1 = this;
return (((!((other32356 == null)))) && ((this32355__$1.constructor === other32356.constructor)) && (cljs.core._EQ_.call(null,this32355__$1.params,other32356.params)) && (cljs.core._EQ_.call(null,this32355__$1.data,other32356.data)) && (cljs.core._EQ_.call(null,this32355__$1.__extmap,other32356.__extmap)));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32353){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32363 = cljs.core.keyword_identical_QMARK_;
var expr__32364 = k__4388__auto__;
if(cljs.core.truth_(pred__32363.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__32364))){
return (new reitit.trie.Match(G__32353,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32363.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__32364))){
return (new reitit.trie.Match(self__.params,G__32353,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32353),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32353){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__32353,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__32357){
var extmap__4419__auto__ = (function (){var G__32366 = cljs.core.dissoc.call(null,G__32357,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__32357)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32366);
} else {
return G__32366;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__32357),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__32357),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32369,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32373 = k32369;
var G__32373__$1 = (((G__32373 instanceof cljs.core.Keyword))?G__32373.fqn:null);
switch (G__32373__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32369,else__4383__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32374){
var vec__32375 = p__32374;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32375,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32375,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Node{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32368){
var self__ = this;
var G__32368__$1 = this;
return (new cljs.core.RecordIter((0),G__32368__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32370,other32371){
var self__ = this;
var this32370__$1 = this;
return (((!((other32371 == null)))) && ((this32370__$1.constructor === other32371.constructor)) && (cljs.core._EQ_.call(null,this32370__$1.children,other32371.children)) && (cljs.core._EQ_.call(null,this32370__$1.wilds,other32371.wilds)) && (cljs.core._EQ_.call(null,this32370__$1.catch_all,other32371.catch_all)) && (cljs.core._EQ_.call(null,this32370__$1.params,other32371.params)) && (cljs.core._EQ_.call(null,this32370__$1.data,other32371.data)) && (cljs.core._EQ_.call(null,this32370__$1.__extmap,other32371.__extmap)));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32368){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32378 = cljs.core.keyword_identical_QMARK_;
var expr__32379 = k__4388__auto__;
if(cljs.core.truth_(pred__32378.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__32379))){
return (new reitit.trie.Node(G__32368,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32378.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__32379))){
return (new reitit.trie.Node(self__.children,G__32368,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32378.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__32379))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__32368,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32378.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__32379))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__32368,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32378.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__32379))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__32368,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32368),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32368){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__32368,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__32372){
var extmap__4419__auto__ = (function (){var G__32381 = cljs.core.dissoc.call(null,G__32372,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__32372)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32381);
} else {
return G__32381;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__32372),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_32383 = (function (this$,i,max,path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.match[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,i,max,path);
} else {
var m__4426__auto__ = (reitit.trie.match["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,i,max,path);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_32383.call(null,this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_32384 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.view[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.view["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_32384.call(null,this$);
}
});

var reitit$trie$Matcher$depth$dyn_32385 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.depth[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.depth["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_32385.call(null,this$);
}
});

var reitit$trie$Matcher$length$dyn_32386 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.length[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.length["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_32386.call(null,this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_32387 = (function (this$,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,params,data);
} else {
var m__4426__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_32387.call(null,this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_32388 = (function (this$,path,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,path,matcher);
} else {
var m__4426__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,path,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_32388.call(null,this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_32389 = (function (this$,key,end,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,end,matcher);
} else {
var m__4426__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,end,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_32389.call(null,this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_32390 = (function (this$,key,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,params,data);
} else {
var m__4426__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_32390.call(null,this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_32391 = (function (this$,matchers,ordered_QMARK_){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
var m__4426__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_32391.call(null,this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_32392 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._pretty[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_32392.call(null,this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_32393 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_32393.call(null,this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4217__auto__ = cljs.core.count.call(null,s1);
var y__4218__auto__ = cljs.core.count.call(null,s2);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.call(null,s1,(0),max);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,s1,i),cljs.core.get.call(null,s2,i))){
if((!((i === (0))))){
return cljs.core.subs.call(null,s1,(0),i);
} else {
return null;
}
} else {
var G__32394 = (i + (1));
i = G__32394;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__32395){
var map__32396 = p__32395;
var map__32396__$1 = (((((!((map__32396 == null))))?(((((map__32396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32396):map__32396);
var syntax = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.call(null,from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild.call(null,reitit.trie._keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.call(null,to,cljs.core.count.call(null,s))){
return cljs.core.concat.call(null,ss,_static.call(null,from,to));
} else {
var c = cljs.core.get.call(null,s,to);
if(cljs.core.truth_((function (){var and__4115__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"{",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"}",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.call(null,"*",cljs.core.get.call(null,s,(to + (1))))){
var G__32398 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,(to + (1)),to_SINGLEQUOTE_));
var G__32399 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__32400 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__32398;
from = G__32399;
to = G__32400;
continue;
} else {
var G__32401 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__32402 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__32403 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__32401;
from = G__32402;
to = G__32403;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,":",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"/",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count.call(null,s);
}
})();
if(cljs.core._EQ_.call(null,(1),(to_SINGLEQUOTE_ - to))){
var G__32404 = ss;
var G__32405 = from;
var G__32406 = (to + (1));
ss = G__32404;
from = G__32405;
to = G__32406;
continue;
} else {
var G__32407 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__32408 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__32409 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__32407;
from = G__32408;
to = G__32409;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"*",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count.call(null,s);
var G__32410 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,to,to_SINGLEQUOTE_));
var G__32411 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__32412 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__32410;
from = G__32411;
to = G__32412;
continue;
} else {
var G__32413 = ss;
var G__32414 = from;
var G__32415 = (to + (1));
ss = G__32413;
from = G__32414;
to = G__32415;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.call(null,(function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path.call(null,reitit.trie.split_path.call(null,s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__32416,p__32417){
var vec__32418 = p__32416;
var p1 = cljs.core.nth.call(null,vec__32418,(0),null);
var p1s = vec__32418;
var vec__32421 = p__32417;
var p2 = cljs.core.nth.call(null,vec__32421,(0),null);
var p2s = vec__32421;
var _split = (function (p){
var temp__5733__auto__ = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.call(null,((cp).length),cljs.core.count.call(null,p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,cljs.core.count.call(null,cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not.call(null,cp)))){
return _split.call(null,p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__32424){
var vec__32425 = p__32424;
var p = cljs.core.nth.call(null,vec__32425,(0),null);
var pps = vec__32425;
var i = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = i;
if(cljs.core.truth_(and__4115__auto__)){
return (i > (0));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null),cljs.core.rest.call(null,pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__32428){
var vec__32429 = p__32428;
var p = cljs.core.nth.call(null,vec__32429,(0),null);
var ps = vec__32429;
return cljs.core.concat.call(null,_slash.call(null,cp,p),cljs.core.rest.call(null,ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut.call(null,p1s),_postcut.call(null,p2s)], null);
} else {
var temp__5733__auto__ = ((typeof p1 === 'string')?((typeof p2 === 'string')?reitit.trie.common_prefix.call(null,p1,p2):false):false);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut.call(null,cp,p1s),_tailcut.call(null,cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.call(null,x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__32432 = reitit.trie._slice_start.call(null,parts1,parts2);
var vec__32435 = cljs.core.nth.call(null,vec__32432,(0),null);
var seq__32436 = cljs.core.seq.call(null,vec__32435);
var first__32437 = cljs.core.first.call(null,seq__32436);
var seq__32436__$1 = cljs.core.next.call(null,seq__32436);
var s1 = first__32437;
var ss1 = seq__32436__$1;
var vec__32438 = cljs.core.nth.call(null,vec__32432,(1),null);
var seq__32439 = cljs.core.seq.call(null,vec__32438);
var first__32440 = cljs.core.first.call(null,seq__32439);
var seq__32439__$1 = cljs.core.next.call(null,seq__32439);
var s2 = first__32440;
var ss2 = seq__32439__$1;
if(cljs.core._EQ_.call(null,s1,s2,null)){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_.call(null,s1)) || (reitit.trie.catch_all_QMARK_.call(null,s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_.call(null,s1)) || (reitit.trie.wild_QMARK_.call(null,s2)))){
var G__32441 = reitit.trie._slice_end.call(null,s1,ss1);
var G__32442 = reitit.trie._slice_end.call(null,s2,ss2);
parts1 = G__32441;
parts2 = G__32442;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1,s2)){
return false;
} else {
var G__32443 = ss1;
var G__32444 = ss2;
parts1 = G__32443;
parts2 = G__32444;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_.call(null,reitit.trie.split_path.call(null,path1,opts),reitit.trie.split_path.call(null,path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__32445,fp,params,data){
var vec__32446 = p__32445;
var seq__32447 = cljs.core.seq.call(null,vec__32446);
var first__32448 = cljs.core.first.call(null,seq__32447);
var seq__32447__$1 = cljs.core.next.call(null,seq__32447);
var path = first__32448;
var ps = seq__32447__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"params","params",710516235),params):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first.call(null,ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = n;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),ps,fp,params,data);
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_.call(null,path))?reitit.trie._insert.call(null,node,ps,fp,params,data):(function (){var or__4126__auto__ = cljs.core.reduce.call(null,(function (_,p__32453){
var vec__32454 = p__32453;
var p = cljs.core.nth.call(null,vec__32454,(0),null);
var n = cljs.core.nth.call(null,vec__32454,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix.call(null,p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.call(null,cp,p)){
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,n,cljs.core.conj.call(null,ps,cljs.core.subs.call(null,path,cljs.core.count.call(null,p))),fp,params,data);
return cljs.core.reduced.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.call(null,p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.call(null,path,((cp).length));
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data);
var n_SINGLEQUOTE__SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null)),null,null,null,null);
return cljs.core.reduced.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data));
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.call(null,node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.call(null,path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32457 = (function (meta32458){
this.meta32458 = meta32458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32459,meta32458__$1){
var self__ = this;
var _32459__$1 = this;
return (new reitit.trie.t_reitit$trie32457(meta32458__$1));
}));

(reitit.trie.t_reitit$trie32457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32459){
var self__ = this;
var _32459__$1 = this;
return self__.meta32458;
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32460 = (function (meta32458,_,params,data,match,meta32461){
this.meta32458 = meta32458;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta32461 = meta32461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32462,meta32461__$1){
var self__ = this;
var _32462__$1 = this;
return (new reitit.trie.t_reitit$trie32460(self__.meta32458,self__._,self__.params,self__.data,self__.match,meta32461__$1));
}));

(reitit.trie.t_reitit$trie32460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32462){
var self__ = this;
var _32462__$1 = this;
return self__.meta32461;
}));

(reitit.trie.t_reitit$trie32460.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32460.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.call(null,i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie32460.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie32460.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie32460.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie32460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie32457","reitit.trie/t_reitit$trie32457",2106612667,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta32461","meta32461",365758644,null)], null);
}));

(reitit.trie.t_reitit$trie32460.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32460.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32460");

(reitit.trie.t_reitit$trie32460.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32460");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32460.
 */
reitit.trie.__GT_t_reitit$trie32460 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32460(meta32458__$1,___$2,params__$1,data__$1,match__$1,meta32461){
return (new reitit.trie.t_reitit$trie32460(meta32458__$1,___$2,params__$1,data__$1,match__$1,meta32461));
});

}

return (new reitit.trie.t_reitit$trie32460(self__.meta32458,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count.call(null,path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32463 = (function (meta32458,_,path,matcher,size,meta32464){
this.meta32458 = meta32458;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta32464 = meta32464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32465,meta32464__$1){
var self__ = this;
var _32465__$1 = this;
return (new reitit.trie.t_reitit$trie32463(self__.meta32458,self__._,self__.path,self__.matcher,self__.size,meta32464__$1));
}));

(reitit.trie.t_reitit$trie32463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32465){
var self__ = this;
var _32465__$1 = this;
return self__.meta32464;
}));

(reitit.trie.t_reitit$trie32463.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32463.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,self__.size)){
return reitit.trie.match.call(null,self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p,(i + j)),cljs.core.get.call(null,self__.path,j))){
var G__32481 = (j + (1));
j = G__32481;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie32463.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie32463.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie32463.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count.call(null,self__.path);
}));

(reitit.trie.t_reitit$trie32463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie32457","reitit.trie/t_reitit$trie32457",2106612667,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta32464","meta32464",-204697916,null)], null);
}));

(reitit.trie.t_reitit$trie32463.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32463.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32463");

(reitit.trie.t_reitit$trie32463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32463");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32463.
 */
reitit.trie.__GT_t_reitit$trie32463 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32463(meta32458__$1,___$2,path__$1,matcher__$1,size__$1,meta32464){
return (new reitit.trie.t_reitit$trie32463(meta32458__$1,___$2,path__$1,matcher__$1,size__$1,meta32464));
});

}

return (new reitit.trie.t_reitit$trie32463(self__.meta32458,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32466 = (function (meta32458,_,key,end,matcher,meta32467){
this.meta32458 = meta32458;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta32467 = meta32467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32468,meta32467__$1){
var self__ = this;
var _32468__$1 = this;
return (new reitit.trie.t_reitit$trie32466(self__.meta32458,self__._,self__.key,self__.end,self__.matcher,meta32467__$1));
}));

(reitit.trie.t_reitit$trie32466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32468){
var self__ = this;
var _32468__$1 = this;
return self__.meta32467;
}));

(reitit.trie.t_reitit$trie32466.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32466.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.call(null,max,j)){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.call(null,path,j);
var pred__32472 = cljs.core._EQ_;
var expr__32473 = c;
if(cljs.core.truth_(pred__32472.call(null,self__.end,expr__32473))){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__32472.call(null,"%",expr__32473))){
var G__32482 = true;
var G__32483 = (j + (1));
percent_QMARK_ = G__32482;
j = G__32483;
continue;
} else {
var G__32484 = percent_QMARK_;
var G__32485 = (j + (1));
percent_QMARK_ = G__32484;
j = G__32485;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie32466.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie32466.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie32466.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie32466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie32457","reitit.trie/t_reitit$trie32457",2106612667,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta32467","meta32467",-556738159,null)], null);
}));

(reitit.trie.t_reitit$trie32466.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32466.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32466");

(reitit.trie.t_reitit$trie32466.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32466");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32466.
 */
reitit.trie.__GT_t_reitit$trie32466 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32466(meta32458__$1,___$2,key__$1,end__$1,matcher__$1,meta32467){
return (new reitit.trie.t_reitit$trie32466(meta32458__$1,___$2,key__$1,end__$1,matcher__$1,meta32467));
});

}

return (new reitit.trie.t_reitit$trie32466(self__.meta32458,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32475 = (function (meta32458,_,key,params,data,match,meta32476){
this.meta32458 = meta32458;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta32476 = meta32476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32477,meta32476__$1){
var self__ = this;
var _32477__$1 = this;
return (new reitit.trie.t_reitit$trie32475(self__.meta32458,self__._,self__.key,self__.params,self__.data,self__.match,meta32476__$1));
}));

(reitit.trie.t_reitit$trie32475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32477){
var self__ = this;
var _32477__$1 = this;
return self__.meta32476;
}));

(reitit.trie.t_reitit$trie32475.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32475.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param.call(null,self__.match,self__.key,reitit.trie.decode.call(null,path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie32475.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie32475.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie32475.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie32475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie32457","reitit.trie/t_reitit$trie32457",2106612667,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta32476","meta32476",664766650,null)], null);
}));

(reitit.trie.t_reitit$trie32475.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32475.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32475");

(reitit.trie.t_reitit$trie32475.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32475");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32475.
 */
reitit.trie.__GT_t_reitit$trie32475 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32475(meta32458__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta32476){
return (new reitit.trie.t_reitit$trie32475(meta32458__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta32476));
});

}

return (new reitit.trie.t_reitit$trie32475(self__.meta32458,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec.call(null,(cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count.call(null,matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie32478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie32478 = (function (meta32458,_,matchers,ordered_QMARK_,size,meta32479){
this.meta32458 = meta32458;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta32479 = meta32479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie32478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32480,meta32479__$1){
var self__ = this;
var _32480__$1 = this;
return (new reitit.trie.t_reitit$trie32478(self__.meta32458,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta32479__$1));
}));

(reitit.trie.t_reitit$trie32478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32480){
var self__ = this;
var _32480__$1 = this;
return self__.meta32479;
}));

(reitit.trie.t_reitit$trie32478.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie32478.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4126__auto__ = reitit.trie.match.call(null,cljs.core.get.call(null,self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__32486 = (j + (1));
j = G__32486;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie32478.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.call(null,reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie32478.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie32478.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie32478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie32457","reitit.trie/t_reitit$trie32457",2106612667,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta32479","meta32479",-542764182,null)], null);
}));

(reitit.trie.t_reitit$trie32478.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32478.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32478");

(reitit.trie.t_reitit$trie32478.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32478");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32478.
 */
reitit.trie.__GT_t_reitit$trie32478 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32478(meta32458__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta32479){
return (new reitit.trie.t_reitit$trie32478(meta32458__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta32479));
});

}

return (new reitit.trie.t_reitit$trie32478(self__.meta32458,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view.call(null,matcher);
}));

(reitit.trie.t_reitit$trie32457.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5733__auto__ = reitit.trie.match.call(null,matcher,(0),cljs.core.count.call(null,path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie32457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32458","meta32458",595733129,null)], null);
}));

(reitit.trie.t_reitit$trie32457.cljs$lang$type = true);

(reitit.trie.t_reitit$trie32457.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie32457");

(reitit.trie.t_reitit$trie32457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie32457");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie32457.
 */
reitit.trie.__GT_t_reitit$trie32457 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie32457(meta32458){
return (new reitit.trie.t_reitit$trie32457(meta32458));
});

}

return (new reitit.trie.t_reitit$trie32457(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap.call(null,keys,cljs.core.repeat.call(null,null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__32488 = arguments.length;
switch (G__32488) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.call(null,null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.call(null,(function (acc,p__32489){
var vec__32490 = p__32489;
var p = cljs.core.nth.call(null,vec__32490,(0),null);
var d = cljs.core.nth.call(null,vec__32490,(1),null);
return reitit.trie.insert.call(null,acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.call(null,node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__32493){
var map__32494 = p__32493;
var map__32494__$1 = (((((!((map__32494 == null))))?(((((map__32494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32494):map__32494);
var opts = map__32494__$1;
var parameters = cljs.core.get.call(null,map__32494__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path.call(null,path,opts);
var params = parameters.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,parts)));
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = node;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path.call(null,path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler.call(null);
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__32498 = arguments.length;
switch (G__32498) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.call(null,options,reitit.trie.compiler.call(null));
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.call(null,options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__32499,compiler,cp){
var map__32500 = p__32499;
var map__32500__$1 = (((((!((map__32500 == null))))?(((((map__32500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32500):map__32500);
var data = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__32502){
var map__32503 = p__32502;
var map__32503__$1 = (((((!((map__32503 == null))))?(((((map__32503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32503):map__32503);
var children__$1 = cljs.core.get.call(null,map__32503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4126__auto__ = cljs.core.keys.call(null,children__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,(function (){var G__32505 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.call(null,G__32505,reitit.trie.data_matcher.call(null,compiler,params,data));
} else {
return G__32505;
}
})(),(function (){var iter__4529__auto__ = (function reitit$trie$iter__32506(s__32507){
return (new cljs.core.LazySeq(null,(function (){
var s__32507__$1 = s__32507;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__32507__$1);
if(temp__5735__auto__){
var s__32507__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32507__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32507__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32509 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32508 = (0);
while(true){
if((i__32508 < size__4528__auto__)){
var vec__32510 = cljs.core._nth.call(null,c__4527__auto__,i__32508);
var p = cljs.core.nth.call(null,vec__32510,(0),null);
var c = cljs.core.nth.call(null,vec__32510,(1),null);
cljs.core.chunk_append.call(null,b__32509,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))));

var G__32537 = (i__32508 + (1));
i__32508 = G__32537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32509),reitit$trie$iter__32506.call(null,cljs.core.chunk_rest.call(null,s__32507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32509),null);
}
} else {
var vec__32513 = cljs.core.first.call(null,s__32507__$2);
var p = cljs.core.nth.call(null,vec__32513,(0),null);
var c = cljs.core.nth.call(null,vec__32513,(1),null);
return cljs.core.cons.call(null,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))),reitit$trie$iter__32506.call(null,cljs.core.rest.call(null,s__32507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,children);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__32516(s__32517){
return (new cljs.core.LazySeq(null,(function (){
var s__32517__$1 = s__32517;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__32517__$1);
if(temp__5735__auto__){
var s__32517__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32517__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32517__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32519 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32518 = (0);
while(true){
if((i__32518 < size__4528__auto__)){
var vec__32520 = cljs.core._nth.call(null,c__4527__auto__,i__32518);
var p = cljs.core.nth.call(null,vec__32520,(0),null);
var c = cljs.core.nth.call(null,vec__32520,(1),null);
cljs.core.chunk_append.call(null,b__32519,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})());

var G__32538 = (i__32518 + (1));
i__32518 = G__32538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32519),reitit$trie$iter__32516.call(null,cljs.core.chunk_rest.call(null,s__32517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32519),null);
}
} else {
var vec__32523 = cljs.core.first.call(null,s__32517__$2);
var p = cljs.core.nth.call(null,vec__32523,(0),null);
var c = cljs.core.nth.call(null,vec__32523,(1),null);
return cljs.core.cons.call(null,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})(),reitit$trie$iter__32516.call(null,cljs.core.rest.call(null,s__32517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,wilds);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__32526(s__32527){
return (new cljs.core.LazySeq(null,(function (){
var s__32527__$1 = s__32527;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__32527__$1);
if(temp__5735__auto__){
var s__32527__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32527__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32527__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32529 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32528 = (0);
while(true){
if((i__32528 < size__4528__auto__)){
var vec__32530 = cljs.core._nth.call(null,c__4527__auto__,i__32528);
var p = cljs.core.nth.call(null,vec__32530,(0),null);
var c = cljs.core.nth.call(null,vec__32530,(1),null);
cljs.core.chunk_append.call(null,b__32529,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__32539 = (i__32528 + (1));
i__32528 = G__32539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32529),reitit$trie$iter__32526.call(null,cljs.core.chunk_rest.call(null,s__32527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32529),null);
}
} else {
var vec__32533 = cljs.core.first.call(null,s__32527__$2);
var p = cljs.core.nth.call(null,vec__32533,(0),null);
var c = cljs.core.nth.call(null,vec__32533,(1),null);
return cljs.core.cons.call(null,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__32526.call(null,cljs.core.rest.call(null,s__32527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,catch_all);
})());
if((cljs.core.count.call(null,matchers) > (1))){
return reitit.trie.linear_matcher.call(null,compiler,matchers,false);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matchers),(1))){
return cljs.core.first.call(null,matchers);
} else {
return reitit.trie.data_matcher.call(null,compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__32541 = arguments.length;
switch (G__32541) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty.call(null,compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__32544 = arguments.length;
switch (G__32544) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher.call(null,compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=trie.js.map?rel=1618065932695
