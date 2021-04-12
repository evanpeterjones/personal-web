// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__40597 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__40597 == null)){
return null;
} else {
return goog.object.get(G__40597,"requires");
}
}):(function (path){
var G__40598 = goog.object.get(goog.dependencies_.requires,path);
if((G__40598 == null)){
return null;
} else {
return goog.object.getKeys(G__40598);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40599_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40599_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__40600 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__40600__$1 = (((G__40600 == null))?null:goog.object.get(G__40600,"provides"));
if((G__40600__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__40600__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__40601 = cljs.core.seq.call(null,provides);
var chunk__40602 = null;
var count__40603 = (0);
var i__40604 = (0);
while(true){
if((i__40604 < count__40603)){
var prov = cljs.core._nth.call(null,chunk__40602,i__40604);
var seq__40613_40625 = cljs.core.seq.call(null,requires);
var chunk__40614_40626 = null;
var count__40615_40627 = (0);
var i__40616_40628 = (0);
while(true){
if((i__40616_40628 < count__40615_40627)){
var req_40629 = cljs.core._nth.call(null,chunk__40614_40626,i__40616_40628);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40629,prov);


var G__40630 = seq__40613_40625;
var G__40631 = chunk__40614_40626;
var G__40632 = count__40615_40627;
var G__40633 = (i__40616_40628 + (1));
seq__40613_40625 = G__40630;
chunk__40614_40626 = G__40631;
count__40615_40627 = G__40632;
i__40616_40628 = G__40633;
continue;
} else {
var temp__5735__auto___40634 = cljs.core.seq.call(null,seq__40613_40625);
if(temp__5735__auto___40634){
var seq__40613_40635__$1 = temp__5735__auto___40634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40613_40635__$1)){
var c__4556__auto___40636 = cljs.core.chunk_first.call(null,seq__40613_40635__$1);
var G__40637 = cljs.core.chunk_rest.call(null,seq__40613_40635__$1);
var G__40638 = c__4556__auto___40636;
var G__40639 = cljs.core.count.call(null,c__4556__auto___40636);
var G__40640 = (0);
seq__40613_40625 = G__40637;
chunk__40614_40626 = G__40638;
count__40615_40627 = G__40639;
i__40616_40628 = G__40640;
continue;
} else {
var req_40641 = cljs.core.first.call(null,seq__40613_40635__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40641,prov);


var G__40642 = cljs.core.next.call(null,seq__40613_40635__$1);
var G__40643 = null;
var G__40644 = (0);
var G__40645 = (0);
seq__40613_40625 = G__40642;
chunk__40614_40626 = G__40643;
count__40615_40627 = G__40644;
i__40616_40628 = G__40645;
continue;
}
} else {
}
}
break;
}


var G__40646 = seq__40601;
var G__40647 = chunk__40602;
var G__40648 = count__40603;
var G__40649 = (i__40604 + (1));
seq__40601 = G__40646;
chunk__40602 = G__40647;
count__40603 = G__40648;
i__40604 = G__40649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40601);
if(temp__5735__auto__){
var seq__40601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40601__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40601__$1);
var G__40650 = cljs.core.chunk_rest.call(null,seq__40601__$1);
var G__40651 = c__4556__auto__;
var G__40652 = cljs.core.count.call(null,c__4556__auto__);
var G__40653 = (0);
seq__40601 = G__40650;
chunk__40602 = G__40651;
count__40603 = G__40652;
i__40604 = G__40653;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40601__$1);
var seq__40617_40654 = cljs.core.seq.call(null,requires);
var chunk__40618_40655 = null;
var count__40619_40656 = (0);
var i__40620_40657 = (0);
while(true){
if((i__40620_40657 < count__40619_40656)){
var req_40658 = cljs.core._nth.call(null,chunk__40618_40655,i__40620_40657);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40658,prov);


var G__40659 = seq__40617_40654;
var G__40660 = chunk__40618_40655;
var G__40661 = count__40619_40656;
var G__40662 = (i__40620_40657 + (1));
seq__40617_40654 = G__40659;
chunk__40618_40655 = G__40660;
count__40619_40656 = G__40661;
i__40620_40657 = G__40662;
continue;
} else {
var temp__5735__auto___40663__$1 = cljs.core.seq.call(null,seq__40617_40654);
if(temp__5735__auto___40663__$1){
var seq__40617_40664__$1 = temp__5735__auto___40663__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40617_40664__$1)){
var c__4556__auto___40665 = cljs.core.chunk_first.call(null,seq__40617_40664__$1);
var G__40666 = cljs.core.chunk_rest.call(null,seq__40617_40664__$1);
var G__40667 = c__4556__auto___40665;
var G__40668 = cljs.core.count.call(null,c__4556__auto___40665);
var G__40669 = (0);
seq__40617_40654 = G__40666;
chunk__40618_40655 = G__40667;
count__40619_40656 = G__40668;
i__40620_40657 = G__40669;
continue;
} else {
var req_40670 = cljs.core.first.call(null,seq__40617_40664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40670,prov);


var G__40671 = cljs.core.next.call(null,seq__40617_40664__$1);
var G__40672 = null;
var G__40673 = (0);
var G__40674 = (0);
seq__40617_40654 = G__40671;
chunk__40618_40655 = G__40672;
count__40619_40656 = G__40673;
i__40620_40657 = G__40674;
continue;
}
} else {
}
}
break;
}


var G__40675 = cljs.core.next.call(null,seq__40601__$1);
var G__40676 = null;
var G__40677 = (0);
var G__40678 = (0);
seq__40601 = G__40675;
chunk__40602 = G__40676;
count__40603 = G__40677;
i__40604 = G__40678;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__40621 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__40622 = null;
var count__40623 = (0);
var i__40624 = (0);
while(true){
if((i__40624 < count__40623)){
var prov = cljs.core._nth.call(null,chunk__40622,i__40624);
goog.object.forEach(deps,((function (seq__40621,chunk__40622,count__40623,i__40624,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40621,chunk__40622,count__40623,i__40624,prov,requires))
);


var G__40679 = seq__40621;
var G__40680 = chunk__40622;
var G__40681 = count__40623;
var G__40682 = (i__40624 + (1));
seq__40621 = G__40679;
chunk__40622 = G__40680;
count__40623 = G__40681;
i__40624 = G__40682;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40621);
if(temp__5735__auto__){
var seq__40621__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40621__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40621__$1);
var G__40683 = cljs.core.chunk_rest.call(null,seq__40621__$1);
var G__40684 = c__4556__auto__;
var G__40685 = cljs.core.count.call(null,c__4556__auto__);
var G__40686 = (0);
seq__40621 = G__40683;
chunk__40622 = G__40684;
count__40623 = G__40685;
i__40624 = G__40686;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40621__$1);
goog.object.forEach(deps,((function (seq__40621,chunk__40622,count__40623,i__40624,prov,seq__40621__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40621,chunk__40622,count__40623,i__40624,prov,seq__40621__$1,temp__5735__auto__,requires))
);


var G__40687 = cljs.core.next.call(null,seq__40621__$1);
var G__40688 = null;
var G__40689 = (0);
var G__40690 = (0);
seq__40621 = G__40687;
chunk__40622 = G__40688;
count__40623 = G__40689;
i__40624 = G__40690;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40691){
var vec__40692 = p__40691;
var _ = cljs.core.nth.call(null,vec__40692,(0),null);
var v = cljs.core.nth.call(null,vec__40692,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__40695){
var vec__40696 = p__40695;
var k = cljs.core.nth.call(null,vec__40696,(0),null);
var v = cljs.core.nth.call(null,vec__40696,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40708_40716 = cljs.core.seq.call(null,deps);
var chunk__40709_40717 = null;
var count__40710_40718 = (0);
var i__40711_40719 = (0);
while(true){
if((i__40711_40719 < count__40710_40718)){
var dep_40720 = cljs.core._nth.call(null,chunk__40709_40717,i__40711_40719);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40720;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40720));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40720,(depth + (1)),state);
} else {
}


var G__40721 = seq__40708_40716;
var G__40722 = chunk__40709_40717;
var G__40723 = count__40710_40718;
var G__40724 = (i__40711_40719 + (1));
seq__40708_40716 = G__40721;
chunk__40709_40717 = G__40722;
count__40710_40718 = G__40723;
i__40711_40719 = G__40724;
continue;
} else {
var temp__5735__auto___40725 = cljs.core.seq.call(null,seq__40708_40716);
if(temp__5735__auto___40725){
var seq__40708_40726__$1 = temp__5735__auto___40725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40708_40726__$1)){
var c__4556__auto___40727 = cljs.core.chunk_first.call(null,seq__40708_40726__$1);
var G__40728 = cljs.core.chunk_rest.call(null,seq__40708_40726__$1);
var G__40729 = c__4556__auto___40727;
var G__40730 = cljs.core.count.call(null,c__4556__auto___40727);
var G__40731 = (0);
seq__40708_40716 = G__40728;
chunk__40709_40717 = G__40729;
count__40710_40718 = G__40730;
i__40711_40719 = G__40731;
continue;
} else {
var dep_40732 = cljs.core.first.call(null,seq__40708_40726__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40732;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40732));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40732,(depth + (1)),state);
} else {
}


var G__40733 = cljs.core.next.call(null,seq__40708_40726__$1);
var G__40734 = null;
var G__40735 = (0);
var G__40736 = (0);
seq__40708_40716 = G__40733;
chunk__40709_40717 = G__40734;
count__40710_40718 = G__40735;
i__40711_40719 = G__40736;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40712){
var vec__40713 = p__40712;
var seq__40714 = cljs.core.seq.call(null,vec__40713);
var first__40715 = cljs.core.first.call(null,seq__40714);
var seq__40714__$1 = cljs.core.next.call(null,seq__40714);
var x = first__40715;
var xs = seq__40714__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__40699_SHARP_){
return clojure.set.difference.call(null,p1__40699_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__40737_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__40737_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40738 = cljs.core.seq.call(null,provides);
var chunk__40739 = null;
var count__40740 = (0);
var i__40741 = (0);
while(true){
if((i__40741 < count__40740)){
var prov = cljs.core._nth.call(null,chunk__40739,i__40741);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40750_40758 = cljs.core.seq.call(null,requires);
var chunk__40751_40759 = null;
var count__40752_40760 = (0);
var i__40753_40761 = (0);
while(true){
if((i__40753_40761 < count__40752_40760)){
var req_40762 = cljs.core._nth.call(null,chunk__40751_40759,i__40753_40761);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40762,prov);


var G__40763 = seq__40750_40758;
var G__40764 = chunk__40751_40759;
var G__40765 = count__40752_40760;
var G__40766 = (i__40753_40761 + (1));
seq__40750_40758 = G__40763;
chunk__40751_40759 = G__40764;
count__40752_40760 = G__40765;
i__40753_40761 = G__40766;
continue;
} else {
var temp__5735__auto___40767 = cljs.core.seq.call(null,seq__40750_40758);
if(temp__5735__auto___40767){
var seq__40750_40768__$1 = temp__5735__auto___40767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40750_40768__$1)){
var c__4556__auto___40769 = cljs.core.chunk_first.call(null,seq__40750_40768__$1);
var G__40770 = cljs.core.chunk_rest.call(null,seq__40750_40768__$1);
var G__40771 = c__4556__auto___40769;
var G__40772 = cljs.core.count.call(null,c__4556__auto___40769);
var G__40773 = (0);
seq__40750_40758 = G__40770;
chunk__40751_40759 = G__40771;
count__40752_40760 = G__40772;
i__40753_40761 = G__40773;
continue;
} else {
var req_40774 = cljs.core.first.call(null,seq__40750_40768__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40774,prov);


var G__40775 = cljs.core.next.call(null,seq__40750_40768__$1);
var G__40776 = null;
var G__40777 = (0);
var G__40778 = (0);
seq__40750_40758 = G__40775;
chunk__40751_40759 = G__40776;
count__40752_40760 = G__40777;
i__40753_40761 = G__40778;
continue;
}
} else {
}
}
break;
}


var G__40779 = seq__40738;
var G__40780 = chunk__40739;
var G__40781 = count__40740;
var G__40782 = (i__40741 + (1));
seq__40738 = G__40779;
chunk__40739 = G__40780;
count__40740 = G__40781;
i__40741 = G__40782;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40738);
if(temp__5735__auto__){
var seq__40738__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40738__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40738__$1);
var G__40783 = cljs.core.chunk_rest.call(null,seq__40738__$1);
var G__40784 = c__4556__auto__;
var G__40785 = cljs.core.count.call(null,c__4556__auto__);
var G__40786 = (0);
seq__40738 = G__40783;
chunk__40739 = G__40784;
count__40740 = G__40785;
i__40741 = G__40786;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40738__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40754_40787 = cljs.core.seq.call(null,requires);
var chunk__40755_40788 = null;
var count__40756_40789 = (0);
var i__40757_40790 = (0);
while(true){
if((i__40757_40790 < count__40756_40789)){
var req_40791 = cljs.core._nth.call(null,chunk__40755_40788,i__40757_40790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40791,prov);


var G__40792 = seq__40754_40787;
var G__40793 = chunk__40755_40788;
var G__40794 = count__40756_40789;
var G__40795 = (i__40757_40790 + (1));
seq__40754_40787 = G__40792;
chunk__40755_40788 = G__40793;
count__40756_40789 = G__40794;
i__40757_40790 = G__40795;
continue;
} else {
var temp__5735__auto___40796__$1 = cljs.core.seq.call(null,seq__40754_40787);
if(temp__5735__auto___40796__$1){
var seq__40754_40797__$1 = temp__5735__auto___40796__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40754_40797__$1)){
var c__4556__auto___40798 = cljs.core.chunk_first.call(null,seq__40754_40797__$1);
var G__40799 = cljs.core.chunk_rest.call(null,seq__40754_40797__$1);
var G__40800 = c__4556__auto___40798;
var G__40801 = cljs.core.count.call(null,c__4556__auto___40798);
var G__40802 = (0);
seq__40754_40787 = G__40799;
chunk__40755_40788 = G__40800;
count__40756_40789 = G__40801;
i__40757_40790 = G__40802;
continue;
} else {
var req_40803 = cljs.core.first.call(null,seq__40754_40797__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40803,prov);


var G__40804 = cljs.core.next.call(null,seq__40754_40797__$1);
var G__40805 = null;
var G__40806 = (0);
var G__40807 = (0);
seq__40754_40787 = G__40804;
chunk__40755_40788 = G__40805;
count__40756_40789 = G__40806;
i__40757_40790 = G__40807;
continue;
}
} else {
}
}
break;
}


var G__40808 = cljs.core.next.call(null,seq__40738__$1);
var G__40809 = null;
var G__40810 = (0);
var G__40811 = (0);
seq__40738 = G__40808;
chunk__40739 = G__40809;
count__40740 = G__40810;
i__40741 = G__40811;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40812_40816 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40813_40817 = null;
var count__40814_40818 = (0);
var i__40815_40819 = (0);
while(true){
if((i__40815_40819 < count__40814_40818)){
var ns_40820 = cljs.core._nth.call(null,chunk__40813_40817,i__40815_40819);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40820);


var G__40821 = seq__40812_40816;
var G__40822 = chunk__40813_40817;
var G__40823 = count__40814_40818;
var G__40824 = (i__40815_40819 + (1));
seq__40812_40816 = G__40821;
chunk__40813_40817 = G__40822;
count__40814_40818 = G__40823;
i__40815_40819 = G__40824;
continue;
} else {
var temp__5735__auto___40825 = cljs.core.seq.call(null,seq__40812_40816);
if(temp__5735__auto___40825){
var seq__40812_40826__$1 = temp__5735__auto___40825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40812_40826__$1)){
var c__4556__auto___40827 = cljs.core.chunk_first.call(null,seq__40812_40826__$1);
var G__40828 = cljs.core.chunk_rest.call(null,seq__40812_40826__$1);
var G__40829 = c__4556__auto___40827;
var G__40830 = cljs.core.count.call(null,c__4556__auto___40827);
var G__40831 = (0);
seq__40812_40816 = G__40828;
chunk__40813_40817 = G__40829;
count__40814_40818 = G__40830;
i__40815_40819 = G__40831;
continue;
} else {
var ns_40832 = cljs.core.first.call(null,seq__40812_40826__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40832);


var G__40833 = cljs.core.next.call(null,seq__40812_40826__$1);
var G__40834 = null;
var G__40835 = (0);
var G__40836 = (0);
seq__40812_40816 = G__40833;
chunk__40813_40817 = G__40834;
count__40814_40818 = G__40835;
i__40815_40819 = G__40836;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__40837__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40838__i = 0, G__40838__a = new Array(arguments.length -  0);
while (G__40838__i < G__40838__a.length) {G__40838__a[G__40838__i] = arguments[G__40838__i + 0]; ++G__40838__i;}
  args = new cljs.core.IndexedSeq(G__40838__a,0,null);
} 
return G__40837__delegate.call(this,args);};
G__40837.cljs$lang$maxFixedArity = 0;
G__40837.cljs$lang$applyTo = (function (arglist__40839){
var args = cljs.core.seq(arglist__40839);
return G__40837__delegate(args);
});
G__40837.cljs$core$IFn$_invoke$arity$variadic = G__40837__delegate;
return G__40837;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__40840_SHARP_,p2__40841_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40840_SHARP_)),p2__40841_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__40842_SHARP_,p2__40843_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40842_SHARP_),p2__40843_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40844 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40844.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__40844.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__40844;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40845){if((e40845 instanceof Error)){
var e = e40845;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40845;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40846){if((e40846 instanceof Error)){
var e = e40846;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40846;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40847 = cljs.core._EQ_;
var expr__40848 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40847.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40848))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40847.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40848))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40847.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40848))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40850,callback){
var map__40851 = p__40850;
var map__40851__$1 = (((((!((map__40851 == null))))?(((((map__40851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40851):map__40851);
var file_msg = map__40851__$1;
var request_url = cljs.core.get.call(null,map__40851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_40889){
var state_val_40890 = (state_40889[(1)]);
if((state_val_40890 === (7))){
var inst_40885 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40891_40917 = state_40889__$1;
(statearr_40891_40917[(2)] = inst_40885);

(statearr_40891_40917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (1))){
var state_40889__$1 = state_40889;
var statearr_40892_40918 = state_40889__$1;
(statearr_40892_40918[(2)] = null);

(statearr_40892_40918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (4))){
var inst_40855 = (state_40889[(7)]);
var inst_40855__$1 = (state_40889[(2)]);
var state_40889__$1 = (function (){var statearr_40893 = state_40889;
(statearr_40893[(7)] = inst_40855__$1);

return statearr_40893;
})();
if(cljs.core.truth_(inst_40855__$1)){
var statearr_40894_40919 = state_40889__$1;
(statearr_40894_40919[(1)] = (5));

} else {
var statearr_40895_40920 = state_40889__$1;
(statearr_40895_40920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (15))){
var inst_40870 = (state_40889[(8)]);
var inst_40868 = (state_40889[(9)]);
var inst_40872 = inst_40870.call(null,inst_40868);
var state_40889__$1 = state_40889;
var statearr_40896_40921 = state_40889__$1;
(statearr_40896_40921[(2)] = inst_40872);

(statearr_40896_40921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (13))){
var inst_40879 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40897_40922 = state_40889__$1;
(statearr_40897_40922[(2)] = inst_40879);

(statearr_40897_40922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (6))){
var state_40889__$1 = state_40889;
var statearr_40898_40923 = state_40889__$1;
(statearr_40898_40923[(2)] = null);

(statearr_40898_40923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (17))){
var inst_40876 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40899_40924 = state_40889__$1;
(statearr_40899_40924[(2)] = inst_40876);

(statearr_40899_40924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (3))){
var inst_40887 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40889__$1,inst_40887);
} else {
if((state_val_40890 === (12))){
var state_40889__$1 = state_40889;
var statearr_40900_40925 = state_40889__$1;
(statearr_40900_40925[(2)] = null);

(statearr_40900_40925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (2))){
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40889__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40890 === (11))){
var inst_40860 = (state_40889[(10)]);
var inst_40866 = figwheel.client.file_reloading.blocking_load.call(null,inst_40860);
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40889__$1,(14),inst_40866);
} else {
if((state_val_40890 === (9))){
var inst_40860 = (state_40889[(10)]);
var state_40889__$1 = state_40889;
if(cljs.core.truth_(inst_40860)){
var statearr_40901_40926 = state_40889__$1;
(statearr_40901_40926[(1)] = (11));

} else {
var statearr_40902_40927 = state_40889__$1;
(statearr_40902_40927[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (5))){
var inst_40861 = (state_40889[(11)]);
var inst_40855 = (state_40889[(7)]);
var inst_40860 = cljs.core.nth.call(null,inst_40855,(0),null);
var inst_40861__$1 = cljs.core.nth.call(null,inst_40855,(1),null);
var state_40889__$1 = (function (){var statearr_40903 = state_40889;
(statearr_40903[(11)] = inst_40861__$1);

(statearr_40903[(10)] = inst_40860);

return statearr_40903;
})();
if(cljs.core.truth_(inst_40861__$1)){
var statearr_40904_40928 = state_40889__$1;
(statearr_40904_40928[(1)] = (8));

} else {
var statearr_40905_40929 = state_40889__$1;
(statearr_40905_40929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (14))){
var inst_40870 = (state_40889[(8)]);
var inst_40860 = (state_40889[(10)]);
var inst_40868 = (state_40889[(2)]);
var inst_40869 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40870__$1 = cljs.core.get.call(null,inst_40869,inst_40860);
var state_40889__$1 = (function (){var statearr_40906 = state_40889;
(statearr_40906[(8)] = inst_40870__$1);

(statearr_40906[(9)] = inst_40868);

return statearr_40906;
})();
if(cljs.core.truth_(inst_40870__$1)){
var statearr_40907_40930 = state_40889__$1;
(statearr_40907_40930[(1)] = (15));

} else {
var statearr_40908_40931 = state_40889__$1;
(statearr_40908_40931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (16))){
var inst_40868 = (state_40889[(9)]);
var inst_40874 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40868);
var state_40889__$1 = state_40889;
var statearr_40909_40932 = state_40889__$1;
(statearr_40909_40932[(2)] = inst_40874);

(statearr_40909_40932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (10))){
var inst_40881 = (state_40889[(2)]);
var state_40889__$1 = (function (){var statearr_40910 = state_40889;
(statearr_40910[(12)] = inst_40881);

return statearr_40910;
})();
var statearr_40911_40933 = state_40889__$1;
(statearr_40911_40933[(2)] = null);

(statearr_40911_40933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (8))){
var inst_40861 = (state_40889[(11)]);
var inst_40863 = eval(inst_40861);
var state_40889__$1 = state_40889;
var statearr_40912_40934 = state_40889__$1;
(statearr_40912_40934[(2)] = inst_40863);

(statearr_40912_40934[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__36809__auto__ = null;
var figwheel$client$file_reloading$state_machine__36809__auto____0 = (function (){
var statearr_40913 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40913[(0)] = figwheel$client$file_reloading$state_machine__36809__auto__);

(statearr_40913[(1)] = (1));

return statearr_40913;
});
var figwheel$client$file_reloading$state_machine__36809__auto____1 = (function (state_40889){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_40889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e40914){if((e40914 instanceof Object)){
var ex__36812__auto__ = e40914;
var statearr_40915_40935 = state_40889;
(statearr_40915_40935[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40936 = state_40889;
state_40889 = G__40936;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36809__auto__ = function(state_40889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36809__auto____1.call(this,state_40889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36809__auto____0;
figwheel$client$file_reloading$state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36809__auto____1;
return figwheel$client$file_reloading$state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_40916 = f__36904__auto__.call(null);
(statearr_40916[(6)] = c__36903__auto__);

return statearr_40916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40938 = arguments.length;
switch (G__40938) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40940,callback){
var map__40941 = p__40940;
var map__40941__$1 = (((((!((map__40941 == null))))?(((((map__40941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40941):map__40941);
var file_msg = map__40941__$1;
var namespace = cljs.core.get.call(null,map__40941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40943){
var map__40944 = p__40943;
var map__40944__$1 = (((((!((map__40944 == null))))?(((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40944):map__40944);
var file_msg = map__40944__$1;
var namespace = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40946){
var map__40947 = p__40946;
var map__40947__$1 = (((((!((map__40947 == null))))?(((((map__40947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40947):map__40947);
var file_msg = map__40947__$1;
var namespace = cljs.core.get.call(null,map__40947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40949,callback){
var map__40950 = p__40949;
var map__40950__$1 = (((((!((map__40950 == null))))?(((((map__40950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40950):map__40950);
var file_msg = map__40950__$1;
var request_url = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36903__auto___41000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_40985){
var state_val_40986 = (state_40985[(1)]);
if((state_val_40986 === (1))){
var inst_40959 = cljs.core.seq.call(null,files);
var inst_40960 = cljs.core.first.call(null,inst_40959);
var inst_40961 = cljs.core.next.call(null,inst_40959);
var inst_40962 = files;
var state_40985__$1 = (function (){var statearr_40987 = state_40985;
(statearr_40987[(7)] = inst_40962);

(statearr_40987[(8)] = inst_40960);

(statearr_40987[(9)] = inst_40961);

return statearr_40987;
})();
var statearr_40988_41001 = state_40985__$1;
(statearr_40988_41001[(2)] = null);

(statearr_40988_41001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40986 === (2))){
var inst_40962 = (state_40985[(7)]);
var inst_40968 = (state_40985[(10)]);
var inst_40967 = cljs.core.seq.call(null,inst_40962);
var inst_40968__$1 = cljs.core.first.call(null,inst_40967);
var inst_40969 = cljs.core.next.call(null,inst_40967);
var inst_40970 = (inst_40968__$1 == null);
var inst_40971 = cljs.core.not.call(null,inst_40970);
var state_40985__$1 = (function (){var statearr_40989 = state_40985;
(statearr_40989[(11)] = inst_40969);

(statearr_40989[(10)] = inst_40968__$1);

return statearr_40989;
})();
if(inst_40971){
var statearr_40990_41002 = state_40985__$1;
(statearr_40990_41002[(1)] = (4));

} else {
var statearr_40991_41003 = state_40985__$1;
(statearr_40991_41003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40986 === (3))){
var inst_40983 = (state_40985[(2)]);
var state_40985__$1 = state_40985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40985__$1,inst_40983);
} else {
if((state_val_40986 === (4))){
var inst_40968 = (state_40985[(10)]);
var inst_40973 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40968);
var state_40985__$1 = state_40985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40985__$1,(7),inst_40973);
} else {
if((state_val_40986 === (5))){
var inst_40979 = cljs.core.async.close_BANG_.call(null,out);
var state_40985__$1 = state_40985;
var statearr_40992_41004 = state_40985__$1;
(statearr_40992_41004[(2)] = inst_40979);

(statearr_40992_41004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40986 === (6))){
var inst_40981 = (state_40985[(2)]);
var state_40985__$1 = state_40985;
var statearr_40993_41005 = state_40985__$1;
(statearr_40993_41005[(2)] = inst_40981);

(statearr_40993_41005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40986 === (7))){
var inst_40969 = (state_40985[(11)]);
var inst_40975 = (state_40985[(2)]);
var inst_40976 = cljs.core.async.put_BANG_.call(null,out,inst_40975);
var inst_40962 = inst_40969;
var state_40985__$1 = (function (){var statearr_40994 = state_40985;
(statearr_40994[(7)] = inst_40962);

(statearr_40994[(12)] = inst_40976);

return statearr_40994;
})();
var statearr_40995_41006 = state_40985__$1;
(statearr_40995_41006[(2)] = null);

(statearr_40995_41006[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____0 = (function (){
var statearr_40996 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40996[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__);

(statearr_40996[(1)] = (1));

return statearr_40996;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____1 = (function (state_40985){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_40985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e40997){if((e40997 instanceof Object)){
var ex__36812__auto__ = e40997;
var statearr_40998_41007 = state_40985;
(statearr_40998_41007[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41008 = state_40985;
state_40985 = G__41008;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__ = function(state_40985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____1.call(this,state_40985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_40999 = f__36904__auto__.call(null);
(statearr_40999[(6)] = c__36903__auto___41000);

return statearr_40999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41009,opts){
var map__41010 = p__41009;
var map__41010__$1 = (((((!((map__41010 == null))))?(((((map__41010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41010):map__41010);
var eval_body = cljs.core.get.call(null,map__41010__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41012){var e = e41012;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__41013_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41013_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41014){
var vec__41015 = p__41014;
var k = cljs.core.nth.call(null,vec__41015,(0),null);
var v = cljs.core.nth.call(null,vec__41015,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41018){
var vec__41019 = p__41018;
var k = cljs.core.nth.call(null,vec__41019,(0),null);
var v = cljs.core.nth.call(null,vec__41019,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41025,p__41026){
var map__41027 = p__41025;
var map__41027__$1 = (((((!((map__41027 == null))))?(((((map__41027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41027):map__41027);
var opts = map__41027__$1;
var before_jsload = cljs.core.get.call(null,map__41027__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41027__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41027__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41028 = p__41026;
var map__41028__$1 = (((((!((map__41028 == null))))?(((((map__41028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41028):map__41028);
var msg = map__41028__$1;
var files = cljs.core.get.call(null,map__41028__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41028__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41028__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36904__auto__ = (function (){var switch__36808__auto__ = (function (state_41182){
var state_val_41183 = (state_41182[(1)]);
if((state_val_41183 === (7))){
var inst_41043 = (state_41182[(7)]);
var inst_41042 = (state_41182[(8)]);
var inst_41044 = (state_41182[(9)]);
var inst_41045 = (state_41182[(10)]);
var inst_41050 = cljs.core._nth.call(null,inst_41043,inst_41045);
var inst_41051 = figwheel.client.file_reloading.eval_body.call(null,inst_41050,opts);
var inst_41052 = (inst_41045 + (1));
var tmp41184 = inst_41043;
var tmp41185 = inst_41042;
var tmp41186 = inst_41044;
var inst_41042__$1 = tmp41185;
var inst_41043__$1 = tmp41184;
var inst_41044__$1 = tmp41186;
var inst_41045__$1 = inst_41052;
var state_41182__$1 = (function (){var statearr_41187 = state_41182;
(statearr_41187[(7)] = inst_41043__$1);

(statearr_41187[(8)] = inst_41042__$1);

(statearr_41187[(9)] = inst_41044__$1);

(statearr_41187[(10)] = inst_41045__$1);

(statearr_41187[(11)] = inst_41051);

return statearr_41187;
})();
var statearr_41188_41271 = state_41182__$1;
(statearr_41188_41271[(2)] = null);

(statearr_41188_41271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (20))){
var inst_41085 = (state_41182[(12)]);
var inst_41093 = figwheel.client.file_reloading.sort_files.call(null,inst_41085);
var state_41182__$1 = state_41182;
var statearr_41189_41272 = state_41182__$1;
(statearr_41189_41272[(2)] = inst_41093);

(statearr_41189_41272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (27))){
var state_41182__$1 = state_41182;
var statearr_41190_41273 = state_41182__$1;
(statearr_41190_41273[(2)] = null);

(statearr_41190_41273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (1))){
var inst_41034 = (state_41182[(13)]);
var inst_41031 = before_jsload.call(null,files);
var inst_41032 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41033 = (function (){return (function (p1__41022_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41022_SHARP_);
});
})();
var inst_41034__$1 = cljs.core.filter.call(null,inst_41033,files);
var inst_41035 = cljs.core.not_empty.call(null,inst_41034__$1);
var state_41182__$1 = (function (){var statearr_41191 = state_41182;
(statearr_41191[(14)] = inst_41032);

(statearr_41191[(13)] = inst_41034__$1);

(statearr_41191[(15)] = inst_41031);

return statearr_41191;
})();
if(cljs.core.truth_(inst_41035)){
var statearr_41192_41274 = state_41182__$1;
(statearr_41192_41274[(1)] = (2));

} else {
var statearr_41193_41275 = state_41182__$1;
(statearr_41193_41275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (24))){
var state_41182__$1 = state_41182;
var statearr_41194_41276 = state_41182__$1;
(statearr_41194_41276[(2)] = null);

(statearr_41194_41276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (39))){
var inst_41135 = (state_41182[(16)]);
var state_41182__$1 = state_41182;
var statearr_41195_41277 = state_41182__$1;
(statearr_41195_41277[(2)] = inst_41135);

(statearr_41195_41277[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (46))){
var inst_41177 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41196_41278 = state_41182__$1;
(statearr_41196_41278[(2)] = inst_41177);

(statearr_41196_41278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (4))){
var inst_41079 = (state_41182[(2)]);
var inst_41080 = cljs.core.List.EMPTY;
var inst_41081 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41080);
var inst_41082 = (function (){return (function (p1__41023_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41023_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41023_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41023_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_41083 = cljs.core.filter.call(null,inst_41082,files);
var inst_41084 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41085 = cljs.core.concat.call(null,inst_41083,inst_41084);
var state_41182__$1 = (function (){var statearr_41197 = state_41182;
(statearr_41197[(17)] = inst_41081);

(statearr_41197[(18)] = inst_41079);

(statearr_41197[(12)] = inst_41085);

return statearr_41197;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41198_41279 = state_41182__$1;
(statearr_41198_41279[(1)] = (16));

} else {
var statearr_41199_41280 = state_41182__$1;
(statearr_41199_41280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (15))){
var inst_41069 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41200_41281 = state_41182__$1;
(statearr_41200_41281[(2)] = inst_41069);

(statearr_41200_41281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (21))){
var inst_41095 = (state_41182[(19)]);
var inst_41095__$1 = (state_41182[(2)]);
var inst_41096 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41095__$1);
var state_41182__$1 = (function (){var statearr_41201 = state_41182;
(statearr_41201[(19)] = inst_41095__$1);

return statearr_41201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41182__$1,(22),inst_41096);
} else {
if((state_val_41183 === (31))){
var inst_41180 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41182__$1,inst_41180);
} else {
if((state_val_41183 === (32))){
var inst_41135 = (state_41182[(16)]);
var inst_41140 = inst_41135.cljs$lang$protocol_mask$partition0$;
var inst_41141 = (inst_41140 & (64));
var inst_41142 = inst_41135.cljs$core$ISeq$;
var inst_41143 = (cljs.core.PROTOCOL_SENTINEL === inst_41142);
var inst_41144 = ((inst_41141) || (inst_41143));
var state_41182__$1 = state_41182;
if(cljs.core.truth_(inst_41144)){
var statearr_41202_41282 = state_41182__$1;
(statearr_41202_41282[(1)] = (35));

} else {
var statearr_41203_41283 = state_41182__$1;
(statearr_41203_41283[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (40))){
var inst_41157 = (state_41182[(20)]);
var inst_41156 = (state_41182[(2)]);
var inst_41157__$1 = cljs.core.get.call(null,inst_41156,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41158 = cljs.core.get.call(null,inst_41156,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41159 = cljs.core.not_empty.call(null,inst_41157__$1);
var state_41182__$1 = (function (){var statearr_41204 = state_41182;
(statearr_41204[(21)] = inst_41158);

(statearr_41204[(20)] = inst_41157__$1);

return statearr_41204;
})();
if(cljs.core.truth_(inst_41159)){
var statearr_41205_41284 = state_41182__$1;
(statearr_41205_41284[(1)] = (41));

} else {
var statearr_41206_41285 = state_41182__$1;
(statearr_41206_41285[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (33))){
var state_41182__$1 = state_41182;
var statearr_41207_41286 = state_41182__$1;
(statearr_41207_41286[(2)] = false);

(statearr_41207_41286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (13))){
var inst_41055 = (state_41182[(22)]);
var inst_41059 = cljs.core.chunk_first.call(null,inst_41055);
var inst_41060 = cljs.core.chunk_rest.call(null,inst_41055);
var inst_41061 = cljs.core.count.call(null,inst_41059);
var inst_41042 = inst_41060;
var inst_41043 = inst_41059;
var inst_41044 = inst_41061;
var inst_41045 = (0);
var state_41182__$1 = (function (){var statearr_41208 = state_41182;
(statearr_41208[(7)] = inst_41043);

(statearr_41208[(8)] = inst_41042);

(statearr_41208[(9)] = inst_41044);

(statearr_41208[(10)] = inst_41045);

return statearr_41208;
})();
var statearr_41209_41287 = state_41182__$1;
(statearr_41209_41287[(2)] = null);

(statearr_41209_41287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (22))){
var inst_41103 = (state_41182[(23)]);
var inst_41098 = (state_41182[(24)]);
var inst_41099 = (state_41182[(25)]);
var inst_41095 = (state_41182[(19)]);
var inst_41098__$1 = (state_41182[(2)]);
var inst_41099__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41098__$1);
var inst_41100 = (function (){var all_files = inst_41095;
var res_SINGLEQUOTE_ = inst_41098__$1;
var res = inst_41099__$1;
return (function (p1__41024_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41024_SHARP_));
});
})();
var inst_41101 = cljs.core.filter.call(null,inst_41100,inst_41098__$1);
var inst_41102 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41103__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41102);
var inst_41104 = cljs.core.not_empty.call(null,inst_41103__$1);
var state_41182__$1 = (function (){var statearr_41210 = state_41182;
(statearr_41210[(23)] = inst_41103__$1);

(statearr_41210[(24)] = inst_41098__$1);

(statearr_41210[(25)] = inst_41099__$1);

(statearr_41210[(26)] = inst_41101);

return statearr_41210;
})();
if(cljs.core.truth_(inst_41104)){
var statearr_41211_41288 = state_41182__$1;
(statearr_41211_41288[(1)] = (23));

} else {
var statearr_41212_41289 = state_41182__$1;
(statearr_41212_41289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (36))){
var state_41182__$1 = state_41182;
var statearr_41213_41290 = state_41182__$1;
(statearr_41213_41290[(2)] = false);

(statearr_41213_41290[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (41))){
var inst_41157 = (state_41182[(20)]);
var inst_41161 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41162 = cljs.core.map.call(null,inst_41161,inst_41157);
var inst_41163 = cljs.core.pr_str.call(null,inst_41162);
var inst_41164 = ["figwheel-no-load meta-data: ",inst_41163].join('');
var inst_41165 = figwheel.client.utils.log.call(null,inst_41164);
var state_41182__$1 = state_41182;
var statearr_41214_41291 = state_41182__$1;
(statearr_41214_41291[(2)] = inst_41165);

(statearr_41214_41291[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (43))){
var inst_41158 = (state_41182[(21)]);
var inst_41168 = (state_41182[(2)]);
var inst_41169 = cljs.core.not_empty.call(null,inst_41158);
var state_41182__$1 = (function (){var statearr_41215 = state_41182;
(statearr_41215[(27)] = inst_41168);

return statearr_41215;
})();
if(cljs.core.truth_(inst_41169)){
var statearr_41216_41292 = state_41182__$1;
(statearr_41216_41292[(1)] = (44));

} else {
var statearr_41217_41293 = state_41182__$1;
(statearr_41217_41293[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (29))){
var inst_41103 = (state_41182[(23)]);
var inst_41098 = (state_41182[(24)]);
var inst_41099 = (state_41182[(25)]);
var inst_41101 = (state_41182[(26)]);
var inst_41095 = (state_41182[(19)]);
var inst_41135 = (state_41182[(16)]);
var inst_41131 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41134 = (function (){var all_files = inst_41095;
var res_SINGLEQUOTE_ = inst_41098;
var res = inst_41099;
var files_not_loaded = inst_41101;
var dependencies_that_loaded = inst_41103;
return (function (p__41133){
var map__41218 = p__41133;
var map__41218__$1 = (((((!((map__41218 == null))))?(((((map__41218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41218):map__41218);
var namespace = cljs.core.get.call(null,map__41218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_41135__$1 = cljs.core.group_by.call(null,inst_41134,inst_41101);
var inst_41137 = (inst_41135__$1 == null);
var inst_41138 = cljs.core.not.call(null,inst_41137);
var state_41182__$1 = (function (){var statearr_41220 = state_41182;
(statearr_41220[(28)] = inst_41131);

(statearr_41220[(16)] = inst_41135__$1);

return statearr_41220;
})();
if(inst_41138){
var statearr_41221_41294 = state_41182__$1;
(statearr_41221_41294[(1)] = (32));

} else {
var statearr_41222_41295 = state_41182__$1;
(statearr_41222_41295[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (44))){
var inst_41158 = (state_41182[(21)]);
var inst_41171 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41158);
var inst_41172 = cljs.core.pr_str.call(null,inst_41171);
var inst_41173 = ["not required: ",inst_41172].join('');
var inst_41174 = figwheel.client.utils.log.call(null,inst_41173);
var state_41182__$1 = state_41182;
var statearr_41223_41296 = state_41182__$1;
(statearr_41223_41296[(2)] = inst_41174);

(statearr_41223_41296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (6))){
var inst_41076 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41224_41297 = state_41182__$1;
(statearr_41224_41297[(2)] = inst_41076);

(statearr_41224_41297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (28))){
var inst_41101 = (state_41182[(26)]);
var inst_41128 = (state_41182[(2)]);
var inst_41129 = cljs.core.not_empty.call(null,inst_41101);
var state_41182__$1 = (function (){var statearr_41225 = state_41182;
(statearr_41225[(29)] = inst_41128);

return statearr_41225;
})();
if(cljs.core.truth_(inst_41129)){
var statearr_41226_41298 = state_41182__$1;
(statearr_41226_41298[(1)] = (29));

} else {
var statearr_41227_41299 = state_41182__$1;
(statearr_41227_41299[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (25))){
var inst_41099 = (state_41182[(25)]);
var inst_41115 = (state_41182[(2)]);
var inst_41116 = cljs.core.not_empty.call(null,inst_41099);
var state_41182__$1 = (function (){var statearr_41228 = state_41182;
(statearr_41228[(30)] = inst_41115);

return statearr_41228;
})();
if(cljs.core.truth_(inst_41116)){
var statearr_41229_41300 = state_41182__$1;
(statearr_41229_41300[(1)] = (26));

} else {
var statearr_41230_41301 = state_41182__$1;
(statearr_41230_41301[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (34))){
var inst_41151 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
if(cljs.core.truth_(inst_41151)){
var statearr_41231_41302 = state_41182__$1;
(statearr_41231_41302[(1)] = (38));

} else {
var statearr_41232_41303 = state_41182__$1;
(statearr_41232_41303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (17))){
var state_41182__$1 = state_41182;
var statearr_41233_41304 = state_41182__$1;
(statearr_41233_41304[(2)] = recompile_dependents);

(statearr_41233_41304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (3))){
var state_41182__$1 = state_41182;
var statearr_41234_41305 = state_41182__$1;
(statearr_41234_41305[(2)] = null);

(statearr_41234_41305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (12))){
var inst_41072 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41235_41306 = state_41182__$1;
(statearr_41235_41306[(2)] = inst_41072);

(statearr_41235_41306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (2))){
var inst_41034 = (state_41182[(13)]);
var inst_41041 = cljs.core.seq.call(null,inst_41034);
var inst_41042 = inst_41041;
var inst_41043 = null;
var inst_41044 = (0);
var inst_41045 = (0);
var state_41182__$1 = (function (){var statearr_41236 = state_41182;
(statearr_41236[(7)] = inst_41043);

(statearr_41236[(8)] = inst_41042);

(statearr_41236[(9)] = inst_41044);

(statearr_41236[(10)] = inst_41045);

return statearr_41236;
})();
var statearr_41237_41307 = state_41182__$1;
(statearr_41237_41307[(2)] = null);

(statearr_41237_41307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (23))){
var inst_41103 = (state_41182[(23)]);
var inst_41098 = (state_41182[(24)]);
var inst_41099 = (state_41182[(25)]);
var inst_41101 = (state_41182[(26)]);
var inst_41095 = (state_41182[(19)]);
var inst_41106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41108 = (function (){var all_files = inst_41095;
var res_SINGLEQUOTE_ = inst_41098;
var res = inst_41099;
var files_not_loaded = inst_41101;
var dependencies_that_loaded = inst_41103;
return (function (p__41107){
var map__41238 = p__41107;
var map__41238__$1 = (((((!((map__41238 == null))))?(((((map__41238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41238):map__41238);
var request_url = cljs.core.get.call(null,map__41238__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_41109 = cljs.core.reverse.call(null,inst_41103);
var inst_41110 = cljs.core.map.call(null,inst_41108,inst_41109);
var inst_41111 = cljs.core.pr_str.call(null,inst_41110);
var inst_41112 = figwheel.client.utils.log.call(null,inst_41111);
var state_41182__$1 = (function (){var statearr_41240 = state_41182;
(statearr_41240[(31)] = inst_41106);

return statearr_41240;
})();
var statearr_41241_41308 = state_41182__$1;
(statearr_41241_41308[(2)] = inst_41112);

(statearr_41241_41308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (35))){
var state_41182__$1 = state_41182;
var statearr_41242_41309 = state_41182__$1;
(statearr_41242_41309[(2)] = true);

(statearr_41242_41309[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (19))){
var inst_41085 = (state_41182[(12)]);
var inst_41091 = figwheel.client.file_reloading.expand_files.call(null,inst_41085);
var state_41182__$1 = state_41182;
var statearr_41243_41310 = state_41182__$1;
(statearr_41243_41310[(2)] = inst_41091);

(statearr_41243_41310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (11))){
var state_41182__$1 = state_41182;
var statearr_41244_41311 = state_41182__$1;
(statearr_41244_41311[(2)] = null);

(statearr_41244_41311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (9))){
var inst_41074 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41245_41312 = state_41182__$1;
(statearr_41245_41312[(2)] = inst_41074);

(statearr_41245_41312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (5))){
var inst_41044 = (state_41182[(9)]);
var inst_41045 = (state_41182[(10)]);
var inst_41047 = (inst_41045 < inst_41044);
var inst_41048 = inst_41047;
var state_41182__$1 = state_41182;
if(cljs.core.truth_(inst_41048)){
var statearr_41246_41313 = state_41182__$1;
(statearr_41246_41313[(1)] = (7));

} else {
var statearr_41247_41314 = state_41182__$1;
(statearr_41247_41314[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (14))){
var inst_41055 = (state_41182[(22)]);
var inst_41064 = cljs.core.first.call(null,inst_41055);
var inst_41065 = figwheel.client.file_reloading.eval_body.call(null,inst_41064,opts);
var inst_41066 = cljs.core.next.call(null,inst_41055);
var inst_41042 = inst_41066;
var inst_41043 = null;
var inst_41044 = (0);
var inst_41045 = (0);
var state_41182__$1 = (function (){var statearr_41248 = state_41182;
(statearr_41248[(7)] = inst_41043);

(statearr_41248[(8)] = inst_41042);

(statearr_41248[(32)] = inst_41065);

(statearr_41248[(9)] = inst_41044);

(statearr_41248[(10)] = inst_41045);

return statearr_41248;
})();
var statearr_41249_41315 = state_41182__$1;
(statearr_41249_41315[(2)] = null);

(statearr_41249_41315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (45))){
var state_41182__$1 = state_41182;
var statearr_41250_41316 = state_41182__$1;
(statearr_41250_41316[(2)] = null);

(statearr_41250_41316[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (26))){
var inst_41103 = (state_41182[(23)]);
var inst_41098 = (state_41182[(24)]);
var inst_41099 = (state_41182[(25)]);
var inst_41101 = (state_41182[(26)]);
var inst_41095 = (state_41182[(19)]);
var inst_41118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41120 = (function (){var all_files = inst_41095;
var res_SINGLEQUOTE_ = inst_41098;
var res = inst_41099;
var files_not_loaded = inst_41101;
var dependencies_that_loaded = inst_41103;
return (function (p__41119){
var map__41251 = p__41119;
var map__41251__$1 = (((((!((map__41251 == null))))?(((((map__41251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41251):map__41251);
var namespace = cljs.core.get.call(null,map__41251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_41121 = cljs.core.map.call(null,inst_41120,inst_41099);
var inst_41122 = cljs.core.pr_str.call(null,inst_41121);
var inst_41123 = figwheel.client.utils.log.call(null,inst_41122);
var inst_41124 = (function (){var all_files = inst_41095;
var res_SINGLEQUOTE_ = inst_41098;
var res = inst_41099;
var files_not_loaded = inst_41101;
var dependencies_that_loaded = inst_41103;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_41125 = setTimeout(inst_41124,(10));
var state_41182__$1 = (function (){var statearr_41253 = state_41182;
(statearr_41253[(33)] = inst_41118);

(statearr_41253[(34)] = inst_41123);

return statearr_41253;
})();
var statearr_41254_41317 = state_41182__$1;
(statearr_41254_41317[(2)] = inst_41125);

(statearr_41254_41317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (16))){
var state_41182__$1 = state_41182;
var statearr_41255_41318 = state_41182__$1;
(statearr_41255_41318[(2)] = reload_dependents);

(statearr_41255_41318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (38))){
var inst_41135 = (state_41182[(16)]);
var inst_41153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41135);
var state_41182__$1 = state_41182;
var statearr_41256_41319 = state_41182__$1;
(statearr_41256_41319[(2)] = inst_41153);

(statearr_41256_41319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (30))){
var state_41182__$1 = state_41182;
var statearr_41257_41320 = state_41182__$1;
(statearr_41257_41320[(2)] = null);

(statearr_41257_41320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (10))){
var inst_41055 = (state_41182[(22)]);
var inst_41057 = cljs.core.chunked_seq_QMARK_.call(null,inst_41055);
var state_41182__$1 = state_41182;
if(inst_41057){
var statearr_41258_41321 = state_41182__$1;
(statearr_41258_41321[(1)] = (13));

} else {
var statearr_41259_41322 = state_41182__$1;
(statearr_41259_41322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (18))){
var inst_41089 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
if(cljs.core.truth_(inst_41089)){
var statearr_41260_41323 = state_41182__$1;
(statearr_41260_41323[(1)] = (19));

} else {
var statearr_41261_41324 = state_41182__$1;
(statearr_41261_41324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (42))){
var state_41182__$1 = state_41182;
var statearr_41262_41325 = state_41182__$1;
(statearr_41262_41325[(2)] = null);

(statearr_41262_41325[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (37))){
var inst_41148 = (state_41182[(2)]);
var state_41182__$1 = state_41182;
var statearr_41263_41326 = state_41182__$1;
(statearr_41263_41326[(2)] = inst_41148);

(statearr_41263_41326[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41183 === (8))){
var inst_41042 = (state_41182[(8)]);
var inst_41055 = (state_41182[(22)]);
var inst_41055__$1 = cljs.core.seq.call(null,inst_41042);
var state_41182__$1 = (function (){var statearr_41264 = state_41182;
(statearr_41264[(22)] = inst_41055__$1);

return statearr_41264;
})();
if(inst_41055__$1){
var statearr_41265_41327 = state_41182__$1;
(statearr_41265_41327[(1)] = (10));

} else {
var statearr_41266_41328 = state_41182__$1;
(statearr_41266_41328[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____0 = (function (){
var statearr_41267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41267[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__);

(statearr_41267[(1)] = (1));

return statearr_41267;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____1 = (function (state_41182){
while(true){
var ret_value__36810__auto__ = (function (){try{while(true){
var result__36811__auto__ = switch__36808__auto__.call(null,state_41182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36811__auto__;
}
break;
}
}catch (e41268){if((e41268 instanceof Object)){
var ex__36812__auto__ = e41268;
var statearr_41269_41329 = state_41182;
(statearr_41269_41329[(5)] = ex__36812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41330 = state_41182;
state_41182 = G__41330;
continue;
} else {
return ret_value__36810__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__ = function(state_41182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____1.call(this,state_41182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36809__auto__;
})()
})();
var state__36905__auto__ = (function (){var statearr_41270 = f__36904__auto__.call(null);
(statearr_41270[(6)] = c__36903__auto__);

return statearr_41270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36905__auto__);
}));

return c__36903__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41333,link){
var map__41334 = p__41333;
var map__41334__$1 = (((((!((map__41334 == null))))?(((((map__41334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41334):map__41334);
var file = cljs.core.get.call(null,map__41334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__41331_SHARP_,p2__41332_SHARP_){
if(cljs.core._EQ_.call(null,p1__41331_SHARP_,p2__41332_SHARP_)){
return p1__41331_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41337){
var map__41338 = p__41337;
var map__41338__$1 = (((((!((map__41338 == null))))?(((((map__41338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41338):map__41338);
var match_length = cljs.core.get.call(null,map__41338__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41338__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41336_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41336_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41340_SHARP_,p2__41341_SHARP_){
return cljs.core.assoc.call(null,p1__41340_SHARP_,cljs.core.get.call(null,p2__41341_SHARP_,key),p2__41341_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41342 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41342);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41342);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41343,p__41344){
var map__41345 = p__41343;
var map__41345__$1 = (((((!((map__41345 == null))))?(((((map__41345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41345):map__41345);
var on_cssload = cljs.core.get.call(null,map__41345__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41346 = p__41344;
var map__41346__$1 = (((((!((map__41346 == null))))?(((((map__41346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41346):map__41346);
var files_msg = map__41346__$1;
var files = cljs.core.get.call(null,map__41346__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1618065940333
