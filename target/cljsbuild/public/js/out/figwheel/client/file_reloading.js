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
var G__40118 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__40118 == null)){
return null;
} else {
return goog.object.get(G__40118,"requires");
}
}):(function (path){
var G__40119 = goog.object.get(goog.dependencies_.requires,path);
if((G__40119 == null)){
return null;
} else {
return goog.object.getKeys(G__40119);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40120_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40120_SHARP_)));
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
var G__40121 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__40121__$1 = (((G__40121 == null))?null:goog.object.get(G__40121,"provides"));
if((G__40121__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__40121__$1);
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
var seq__40122 = cljs.core.seq.call(null,provides);
var chunk__40123 = null;
var count__40124 = (0);
var i__40125 = (0);
while(true){
if((i__40125 < count__40124)){
var prov = cljs.core._nth.call(null,chunk__40123,i__40125);
var seq__40134_40146 = cljs.core.seq.call(null,requires);
var chunk__40135_40147 = null;
var count__40136_40148 = (0);
var i__40137_40149 = (0);
while(true){
if((i__40137_40149 < count__40136_40148)){
var req_40150 = cljs.core._nth.call(null,chunk__40135_40147,i__40137_40149);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40150,prov);


var G__40151 = seq__40134_40146;
var G__40152 = chunk__40135_40147;
var G__40153 = count__40136_40148;
var G__40154 = (i__40137_40149 + (1));
seq__40134_40146 = G__40151;
chunk__40135_40147 = G__40152;
count__40136_40148 = G__40153;
i__40137_40149 = G__40154;
continue;
} else {
var temp__5735__auto___40155 = cljs.core.seq.call(null,seq__40134_40146);
if(temp__5735__auto___40155){
var seq__40134_40156__$1 = temp__5735__auto___40155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40134_40156__$1)){
var c__4556__auto___40157 = cljs.core.chunk_first.call(null,seq__40134_40156__$1);
var G__40158 = cljs.core.chunk_rest.call(null,seq__40134_40156__$1);
var G__40159 = c__4556__auto___40157;
var G__40160 = cljs.core.count.call(null,c__4556__auto___40157);
var G__40161 = (0);
seq__40134_40146 = G__40158;
chunk__40135_40147 = G__40159;
count__40136_40148 = G__40160;
i__40137_40149 = G__40161;
continue;
} else {
var req_40162 = cljs.core.first.call(null,seq__40134_40156__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40162,prov);


var G__40163 = cljs.core.next.call(null,seq__40134_40156__$1);
var G__40164 = null;
var G__40165 = (0);
var G__40166 = (0);
seq__40134_40146 = G__40163;
chunk__40135_40147 = G__40164;
count__40136_40148 = G__40165;
i__40137_40149 = G__40166;
continue;
}
} else {
}
}
break;
}


var G__40167 = seq__40122;
var G__40168 = chunk__40123;
var G__40169 = count__40124;
var G__40170 = (i__40125 + (1));
seq__40122 = G__40167;
chunk__40123 = G__40168;
count__40124 = G__40169;
i__40125 = G__40170;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40122);
if(temp__5735__auto__){
var seq__40122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40122__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40122__$1);
var G__40171 = cljs.core.chunk_rest.call(null,seq__40122__$1);
var G__40172 = c__4556__auto__;
var G__40173 = cljs.core.count.call(null,c__4556__auto__);
var G__40174 = (0);
seq__40122 = G__40171;
chunk__40123 = G__40172;
count__40124 = G__40173;
i__40125 = G__40174;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40122__$1);
var seq__40138_40175 = cljs.core.seq.call(null,requires);
var chunk__40139_40176 = null;
var count__40140_40177 = (0);
var i__40141_40178 = (0);
while(true){
if((i__40141_40178 < count__40140_40177)){
var req_40179 = cljs.core._nth.call(null,chunk__40139_40176,i__40141_40178);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40179,prov);


var G__40180 = seq__40138_40175;
var G__40181 = chunk__40139_40176;
var G__40182 = count__40140_40177;
var G__40183 = (i__40141_40178 + (1));
seq__40138_40175 = G__40180;
chunk__40139_40176 = G__40181;
count__40140_40177 = G__40182;
i__40141_40178 = G__40183;
continue;
} else {
var temp__5735__auto___40184__$1 = cljs.core.seq.call(null,seq__40138_40175);
if(temp__5735__auto___40184__$1){
var seq__40138_40185__$1 = temp__5735__auto___40184__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40138_40185__$1)){
var c__4556__auto___40186 = cljs.core.chunk_first.call(null,seq__40138_40185__$1);
var G__40187 = cljs.core.chunk_rest.call(null,seq__40138_40185__$1);
var G__40188 = c__4556__auto___40186;
var G__40189 = cljs.core.count.call(null,c__4556__auto___40186);
var G__40190 = (0);
seq__40138_40175 = G__40187;
chunk__40139_40176 = G__40188;
count__40140_40177 = G__40189;
i__40141_40178 = G__40190;
continue;
} else {
var req_40191 = cljs.core.first.call(null,seq__40138_40185__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40191,prov);


var G__40192 = cljs.core.next.call(null,seq__40138_40185__$1);
var G__40193 = null;
var G__40194 = (0);
var G__40195 = (0);
seq__40138_40175 = G__40192;
chunk__40139_40176 = G__40193;
count__40140_40177 = G__40194;
i__40141_40178 = G__40195;
continue;
}
} else {
}
}
break;
}


var G__40196 = cljs.core.next.call(null,seq__40122__$1);
var G__40197 = null;
var G__40198 = (0);
var G__40199 = (0);
seq__40122 = G__40196;
chunk__40123 = G__40197;
count__40124 = G__40198;
i__40125 = G__40199;
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
var seq__40142 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__40143 = null;
var count__40144 = (0);
var i__40145 = (0);
while(true){
if((i__40145 < count__40144)){
var prov = cljs.core._nth.call(null,chunk__40143,i__40145);
goog.object.forEach(deps,((function (seq__40142,chunk__40143,count__40144,i__40145,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40142,chunk__40143,count__40144,i__40145,prov,requires))
);


var G__40200 = seq__40142;
var G__40201 = chunk__40143;
var G__40202 = count__40144;
var G__40203 = (i__40145 + (1));
seq__40142 = G__40200;
chunk__40143 = G__40201;
count__40144 = G__40202;
i__40145 = G__40203;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40142);
if(temp__5735__auto__){
var seq__40142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40142__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40142__$1);
var G__40204 = cljs.core.chunk_rest.call(null,seq__40142__$1);
var G__40205 = c__4556__auto__;
var G__40206 = cljs.core.count.call(null,c__4556__auto__);
var G__40207 = (0);
seq__40142 = G__40204;
chunk__40143 = G__40205;
count__40144 = G__40206;
i__40145 = G__40207;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40142__$1);
goog.object.forEach(deps,((function (seq__40142,chunk__40143,count__40144,i__40145,prov,seq__40142__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40142,chunk__40143,count__40144,i__40145,prov,seq__40142__$1,temp__5735__auto__,requires))
);


var G__40208 = cljs.core.next.call(null,seq__40142__$1);
var G__40209 = null;
var G__40210 = (0);
var G__40211 = (0);
seq__40142 = G__40208;
chunk__40143 = G__40209;
count__40144 = G__40210;
i__40145 = G__40211;
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
return cljs.core.some.call(null,(function (p__40212){
var vec__40213 = p__40212;
var _ = cljs.core.nth.call(null,vec__40213,(0),null);
var v = cljs.core.nth.call(null,vec__40213,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__40216){
var vec__40217 = p__40216;
var k = cljs.core.nth.call(null,vec__40217,(0),null);
var v = cljs.core.nth.call(null,vec__40217,(1),null);
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

var seq__40229_40237 = cljs.core.seq.call(null,deps);
var chunk__40230_40238 = null;
var count__40231_40239 = (0);
var i__40232_40240 = (0);
while(true){
if((i__40232_40240 < count__40231_40239)){
var dep_40241 = cljs.core._nth.call(null,chunk__40230_40238,i__40232_40240);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40241;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40241));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40241,(depth + (1)),state);
} else {
}


var G__40242 = seq__40229_40237;
var G__40243 = chunk__40230_40238;
var G__40244 = count__40231_40239;
var G__40245 = (i__40232_40240 + (1));
seq__40229_40237 = G__40242;
chunk__40230_40238 = G__40243;
count__40231_40239 = G__40244;
i__40232_40240 = G__40245;
continue;
} else {
var temp__5735__auto___40246 = cljs.core.seq.call(null,seq__40229_40237);
if(temp__5735__auto___40246){
var seq__40229_40247__$1 = temp__5735__auto___40246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40229_40247__$1)){
var c__4556__auto___40248 = cljs.core.chunk_first.call(null,seq__40229_40247__$1);
var G__40249 = cljs.core.chunk_rest.call(null,seq__40229_40247__$1);
var G__40250 = c__4556__auto___40248;
var G__40251 = cljs.core.count.call(null,c__4556__auto___40248);
var G__40252 = (0);
seq__40229_40237 = G__40249;
chunk__40230_40238 = G__40250;
count__40231_40239 = G__40251;
i__40232_40240 = G__40252;
continue;
} else {
var dep_40253 = cljs.core.first.call(null,seq__40229_40247__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40253;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40253));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40253,(depth + (1)),state);
} else {
}


var G__40254 = cljs.core.next.call(null,seq__40229_40247__$1);
var G__40255 = null;
var G__40256 = (0);
var G__40257 = (0);
seq__40229_40237 = G__40254;
chunk__40230_40238 = G__40255;
count__40231_40239 = G__40256;
i__40232_40240 = G__40257;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40233){
var vec__40234 = p__40233;
var seq__40235 = cljs.core.seq.call(null,vec__40234);
var first__40236 = cljs.core.first.call(null,seq__40235);
var seq__40235__$1 = cljs.core.next.call(null,seq__40235);
var x = first__40236;
var xs = seq__40235__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__40220_SHARP_){
return clojure.set.difference.call(null,p1__40220_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__40258_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__40258_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40259 = cljs.core.seq.call(null,provides);
var chunk__40260 = null;
var count__40261 = (0);
var i__40262 = (0);
while(true){
if((i__40262 < count__40261)){
var prov = cljs.core._nth.call(null,chunk__40260,i__40262);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40271_40279 = cljs.core.seq.call(null,requires);
var chunk__40272_40280 = null;
var count__40273_40281 = (0);
var i__40274_40282 = (0);
while(true){
if((i__40274_40282 < count__40273_40281)){
var req_40283 = cljs.core._nth.call(null,chunk__40272_40280,i__40274_40282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40283,prov);


var G__40284 = seq__40271_40279;
var G__40285 = chunk__40272_40280;
var G__40286 = count__40273_40281;
var G__40287 = (i__40274_40282 + (1));
seq__40271_40279 = G__40284;
chunk__40272_40280 = G__40285;
count__40273_40281 = G__40286;
i__40274_40282 = G__40287;
continue;
} else {
var temp__5735__auto___40288 = cljs.core.seq.call(null,seq__40271_40279);
if(temp__5735__auto___40288){
var seq__40271_40289__$1 = temp__5735__auto___40288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40271_40289__$1)){
var c__4556__auto___40290 = cljs.core.chunk_first.call(null,seq__40271_40289__$1);
var G__40291 = cljs.core.chunk_rest.call(null,seq__40271_40289__$1);
var G__40292 = c__4556__auto___40290;
var G__40293 = cljs.core.count.call(null,c__4556__auto___40290);
var G__40294 = (0);
seq__40271_40279 = G__40291;
chunk__40272_40280 = G__40292;
count__40273_40281 = G__40293;
i__40274_40282 = G__40294;
continue;
} else {
var req_40295 = cljs.core.first.call(null,seq__40271_40289__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40295,prov);


var G__40296 = cljs.core.next.call(null,seq__40271_40289__$1);
var G__40297 = null;
var G__40298 = (0);
var G__40299 = (0);
seq__40271_40279 = G__40296;
chunk__40272_40280 = G__40297;
count__40273_40281 = G__40298;
i__40274_40282 = G__40299;
continue;
}
} else {
}
}
break;
}


var G__40300 = seq__40259;
var G__40301 = chunk__40260;
var G__40302 = count__40261;
var G__40303 = (i__40262 + (1));
seq__40259 = G__40300;
chunk__40260 = G__40301;
count__40261 = G__40302;
i__40262 = G__40303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40259);
if(temp__5735__auto__){
var seq__40259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40259__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40259__$1);
var G__40304 = cljs.core.chunk_rest.call(null,seq__40259__$1);
var G__40305 = c__4556__auto__;
var G__40306 = cljs.core.count.call(null,c__4556__auto__);
var G__40307 = (0);
seq__40259 = G__40304;
chunk__40260 = G__40305;
count__40261 = G__40306;
i__40262 = G__40307;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40259__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40275_40308 = cljs.core.seq.call(null,requires);
var chunk__40276_40309 = null;
var count__40277_40310 = (0);
var i__40278_40311 = (0);
while(true){
if((i__40278_40311 < count__40277_40310)){
var req_40312 = cljs.core._nth.call(null,chunk__40276_40309,i__40278_40311);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40312,prov);


var G__40313 = seq__40275_40308;
var G__40314 = chunk__40276_40309;
var G__40315 = count__40277_40310;
var G__40316 = (i__40278_40311 + (1));
seq__40275_40308 = G__40313;
chunk__40276_40309 = G__40314;
count__40277_40310 = G__40315;
i__40278_40311 = G__40316;
continue;
} else {
var temp__5735__auto___40317__$1 = cljs.core.seq.call(null,seq__40275_40308);
if(temp__5735__auto___40317__$1){
var seq__40275_40318__$1 = temp__5735__auto___40317__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40275_40318__$1)){
var c__4556__auto___40319 = cljs.core.chunk_first.call(null,seq__40275_40318__$1);
var G__40320 = cljs.core.chunk_rest.call(null,seq__40275_40318__$1);
var G__40321 = c__4556__auto___40319;
var G__40322 = cljs.core.count.call(null,c__4556__auto___40319);
var G__40323 = (0);
seq__40275_40308 = G__40320;
chunk__40276_40309 = G__40321;
count__40277_40310 = G__40322;
i__40278_40311 = G__40323;
continue;
} else {
var req_40324 = cljs.core.first.call(null,seq__40275_40318__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40324,prov);


var G__40325 = cljs.core.next.call(null,seq__40275_40318__$1);
var G__40326 = null;
var G__40327 = (0);
var G__40328 = (0);
seq__40275_40308 = G__40325;
chunk__40276_40309 = G__40326;
count__40277_40310 = G__40327;
i__40278_40311 = G__40328;
continue;
}
} else {
}
}
break;
}


var G__40329 = cljs.core.next.call(null,seq__40259__$1);
var G__40330 = null;
var G__40331 = (0);
var G__40332 = (0);
seq__40259 = G__40329;
chunk__40260 = G__40330;
count__40261 = G__40331;
i__40262 = G__40332;
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
var seq__40333_40337 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40334_40338 = null;
var count__40335_40339 = (0);
var i__40336_40340 = (0);
while(true){
if((i__40336_40340 < count__40335_40339)){
var ns_40341 = cljs.core._nth.call(null,chunk__40334_40338,i__40336_40340);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40341);


var G__40342 = seq__40333_40337;
var G__40343 = chunk__40334_40338;
var G__40344 = count__40335_40339;
var G__40345 = (i__40336_40340 + (1));
seq__40333_40337 = G__40342;
chunk__40334_40338 = G__40343;
count__40335_40339 = G__40344;
i__40336_40340 = G__40345;
continue;
} else {
var temp__5735__auto___40346 = cljs.core.seq.call(null,seq__40333_40337);
if(temp__5735__auto___40346){
var seq__40333_40347__$1 = temp__5735__auto___40346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40333_40347__$1)){
var c__4556__auto___40348 = cljs.core.chunk_first.call(null,seq__40333_40347__$1);
var G__40349 = cljs.core.chunk_rest.call(null,seq__40333_40347__$1);
var G__40350 = c__4556__auto___40348;
var G__40351 = cljs.core.count.call(null,c__4556__auto___40348);
var G__40352 = (0);
seq__40333_40337 = G__40349;
chunk__40334_40338 = G__40350;
count__40335_40339 = G__40351;
i__40336_40340 = G__40352;
continue;
} else {
var ns_40353 = cljs.core.first.call(null,seq__40333_40347__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40353);


var G__40354 = cljs.core.next.call(null,seq__40333_40347__$1);
var G__40355 = null;
var G__40356 = (0);
var G__40357 = (0);
seq__40333_40337 = G__40354;
chunk__40334_40338 = G__40355;
count__40335_40339 = G__40356;
i__40336_40340 = G__40357;
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
var G__40358__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40359__i = 0, G__40359__a = new Array(arguments.length -  0);
while (G__40359__i < G__40359__a.length) {G__40359__a[G__40359__i] = arguments[G__40359__i + 0]; ++G__40359__i;}
  args = new cljs.core.IndexedSeq(G__40359__a,0,null);
} 
return G__40358__delegate.call(this,args);};
G__40358.cljs$lang$maxFixedArity = 0;
G__40358.cljs$lang$applyTo = (function (arglist__40360){
var args = cljs.core.seq(arglist__40360);
return G__40358__delegate(args);
});
G__40358.cljs$core$IFn$_invoke$arity$variadic = G__40358__delegate;
return G__40358;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__40361_SHARP_,p2__40362_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40361_SHARP_)),p2__40362_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__40363_SHARP_,p2__40364_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40363_SHARP_),p2__40364_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40365 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40365.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__40365.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__40365;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40366){if((e40366 instanceof Error)){
var e = e40366;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40366;

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
}catch (e40367){if((e40367 instanceof Error)){
var e = e40367;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40367;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40368 = cljs.core._EQ_;
var expr__40369 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40368.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40369))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40368.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40369))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40368.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40369))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40371,callback){
var map__40372 = p__40371;
var map__40372__$1 = (((((!((map__40372 == null))))?(((((map__40372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40372):map__40372);
var file_msg = map__40372__$1;
var request_url = cljs.core.get.call(null,map__40372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_40410){
var state_val_40411 = (state_40410[(1)]);
if((state_val_40411 === (7))){
var inst_40406 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
var statearr_40412_40438 = state_40410__$1;
(statearr_40412_40438[(2)] = inst_40406);

(statearr_40412_40438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (1))){
var state_40410__$1 = state_40410;
var statearr_40413_40439 = state_40410__$1;
(statearr_40413_40439[(2)] = null);

(statearr_40413_40439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (4))){
var inst_40376 = (state_40410[(7)]);
var inst_40376__$1 = (state_40410[(2)]);
var state_40410__$1 = (function (){var statearr_40414 = state_40410;
(statearr_40414[(7)] = inst_40376__$1);

return statearr_40414;
})();
if(cljs.core.truth_(inst_40376__$1)){
var statearr_40415_40440 = state_40410__$1;
(statearr_40415_40440[(1)] = (5));

} else {
var statearr_40416_40441 = state_40410__$1;
(statearr_40416_40441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (15))){
var inst_40389 = (state_40410[(8)]);
var inst_40391 = (state_40410[(9)]);
var inst_40393 = inst_40391.call(null,inst_40389);
var state_40410__$1 = state_40410;
var statearr_40417_40442 = state_40410__$1;
(statearr_40417_40442[(2)] = inst_40393);

(statearr_40417_40442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (13))){
var inst_40400 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
var statearr_40418_40443 = state_40410__$1;
(statearr_40418_40443[(2)] = inst_40400);

(statearr_40418_40443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (6))){
var state_40410__$1 = state_40410;
var statearr_40419_40444 = state_40410__$1;
(statearr_40419_40444[(2)] = null);

(statearr_40419_40444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (17))){
var inst_40397 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
var statearr_40420_40445 = state_40410__$1;
(statearr_40420_40445[(2)] = inst_40397);

(statearr_40420_40445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (3))){
var inst_40408 = (state_40410[(2)]);
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40410__$1,inst_40408);
} else {
if((state_val_40411 === (12))){
var state_40410__$1 = state_40410;
var statearr_40421_40446 = state_40410__$1;
(statearr_40421_40446[(2)] = null);

(statearr_40421_40446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (2))){
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40410__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40411 === (11))){
var inst_40381 = (state_40410[(10)]);
var inst_40387 = figwheel.client.file_reloading.blocking_load.call(null,inst_40381);
var state_40410__$1 = state_40410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40410__$1,(14),inst_40387);
} else {
if((state_val_40411 === (9))){
var inst_40381 = (state_40410[(10)]);
var state_40410__$1 = state_40410;
if(cljs.core.truth_(inst_40381)){
var statearr_40422_40447 = state_40410__$1;
(statearr_40422_40447[(1)] = (11));

} else {
var statearr_40423_40448 = state_40410__$1;
(statearr_40423_40448[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (5))){
var inst_40382 = (state_40410[(11)]);
var inst_40376 = (state_40410[(7)]);
var inst_40381 = cljs.core.nth.call(null,inst_40376,(0),null);
var inst_40382__$1 = cljs.core.nth.call(null,inst_40376,(1),null);
var state_40410__$1 = (function (){var statearr_40424 = state_40410;
(statearr_40424[(11)] = inst_40382__$1);

(statearr_40424[(10)] = inst_40381);

return statearr_40424;
})();
if(cljs.core.truth_(inst_40382__$1)){
var statearr_40425_40449 = state_40410__$1;
(statearr_40425_40449[(1)] = (8));

} else {
var statearr_40426_40450 = state_40410__$1;
(statearr_40426_40450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (14))){
var inst_40381 = (state_40410[(10)]);
var inst_40391 = (state_40410[(9)]);
var inst_40389 = (state_40410[(2)]);
var inst_40390 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40391__$1 = cljs.core.get.call(null,inst_40390,inst_40381);
var state_40410__$1 = (function (){var statearr_40427 = state_40410;
(statearr_40427[(8)] = inst_40389);

(statearr_40427[(9)] = inst_40391__$1);

return statearr_40427;
})();
if(cljs.core.truth_(inst_40391__$1)){
var statearr_40428_40451 = state_40410__$1;
(statearr_40428_40451[(1)] = (15));

} else {
var statearr_40429_40452 = state_40410__$1;
(statearr_40429_40452[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (16))){
var inst_40389 = (state_40410[(8)]);
var inst_40395 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40389);
var state_40410__$1 = state_40410;
var statearr_40430_40453 = state_40410__$1;
(statearr_40430_40453[(2)] = inst_40395);

(statearr_40430_40453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (10))){
var inst_40402 = (state_40410[(2)]);
var state_40410__$1 = (function (){var statearr_40431 = state_40410;
(statearr_40431[(12)] = inst_40402);

return statearr_40431;
})();
var statearr_40432_40454 = state_40410__$1;
(statearr_40432_40454[(2)] = null);

(statearr_40432_40454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40411 === (8))){
var inst_40382 = (state_40410[(11)]);
var inst_40384 = eval(inst_40382);
var state_40410__$1 = state_40410;
var statearr_40433_40455 = state_40410__$1;
(statearr_40433_40455[(2)] = inst_40384);

(statearr_40433_40455[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__37140__auto__ = null;
var figwheel$client$file_reloading$state_machine__37140__auto____0 = (function (){
var statearr_40434 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40434[(0)] = figwheel$client$file_reloading$state_machine__37140__auto__);

(statearr_40434[(1)] = (1));

return statearr_40434;
});
var figwheel$client$file_reloading$state_machine__37140__auto____1 = (function (state_40410){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_40410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e40435){if((e40435 instanceof Object)){
var ex__37143__auto__ = e40435;
var statearr_40436_40456 = state_40410;
(statearr_40436_40456[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40457 = state_40410;
state_40410 = G__40457;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37140__auto__ = function(state_40410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37140__auto____1.call(this,state_40410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37140__auto____0;
figwheel$client$file_reloading$state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37140__auto____1;
return figwheel$client$file_reloading$state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_40437 = f__37235__auto__.call(null);
(statearr_40437[(6)] = c__37234__auto__);

return statearr_40437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40459 = arguments.length;
switch (G__40459) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40461,callback){
var map__40462 = p__40461;
var map__40462__$1 = (((((!((map__40462 == null))))?(((((map__40462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);
var file_msg = map__40462__$1;
var namespace = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40464){
var map__40465 = p__40464;
var map__40465__$1 = (((((!((map__40465 == null))))?(((((map__40465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40465):map__40465);
var file_msg = map__40465__$1;
var namespace = cljs.core.get.call(null,map__40465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40467){
var map__40468 = p__40467;
var map__40468__$1 = (((((!((map__40468 == null))))?(((((map__40468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40468):map__40468);
var file_msg = map__40468__$1;
var namespace = cljs.core.get.call(null,map__40468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40470,callback){
var map__40471 = p__40470;
var map__40471__$1 = (((((!((map__40471 == null))))?(((((map__40471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40471):map__40471);
var file_msg = map__40471__$1;
var request_url = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37234__auto___40521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_40506){
var state_val_40507 = (state_40506[(1)]);
if((state_val_40507 === (1))){
var inst_40480 = cljs.core.seq.call(null,files);
var inst_40481 = cljs.core.first.call(null,inst_40480);
var inst_40482 = cljs.core.next.call(null,inst_40480);
var inst_40483 = files;
var state_40506__$1 = (function (){var statearr_40508 = state_40506;
(statearr_40508[(7)] = inst_40481);

(statearr_40508[(8)] = inst_40483);

(statearr_40508[(9)] = inst_40482);

return statearr_40508;
})();
var statearr_40509_40522 = state_40506__$1;
(statearr_40509_40522[(2)] = null);

(statearr_40509_40522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40507 === (2))){
var inst_40483 = (state_40506[(8)]);
var inst_40489 = (state_40506[(10)]);
var inst_40488 = cljs.core.seq.call(null,inst_40483);
var inst_40489__$1 = cljs.core.first.call(null,inst_40488);
var inst_40490 = cljs.core.next.call(null,inst_40488);
var inst_40491 = (inst_40489__$1 == null);
var inst_40492 = cljs.core.not.call(null,inst_40491);
var state_40506__$1 = (function (){var statearr_40510 = state_40506;
(statearr_40510[(11)] = inst_40490);

(statearr_40510[(10)] = inst_40489__$1);

return statearr_40510;
})();
if(inst_40492){
var statearr_40511_40523 = state_40506__$1;
(statearr_40511_40523[(1)] = (4));

} else {
var statearr_40512_40524 = state_40506__$1;
(statearr_40512_40524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40507 === (3))){
var inst_40504 = (state_40506[(2)]);
var state_40506__$1 = state_40506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40506__$1,inst_40504);
} else {
if((state_val_40507 === (4))){
var inst_40489 = (state_40506[(10)]);
var inst_40494 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40489);
var state_40506__$1 = state_40506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40506__$1,(7),inst_40494);
} else {
if((state_val_40507 === (5))){
var inst_40500 = cljs.core.async.close_BANG_.call(null,out);
var state_40506__$1 = state_40506;
var statearr_40513_40525 = state_40506__$1;
(statearr_40513_40525[(2)] = inst_40500);

(statearr_40513_40525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40507 === (6))){
var inst_40502 = (state_40506[(2)]);
var state_40506__$1 = state_40506;
var statearr_40514_40526 = state_40506__$1;
(statearr_40514_40526[(2)] = inst_40502);

(statearr_40514_40526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40507 === (7))){
var inst_40490 = (state_40506[(11)]);
var inst_40496 = (state_40506[(2)]);
var inst_40497 = cljs.core.async.put_BANG_.call(null,out,inst_40496);
var inst_40483 = inst_40490;
var state_40506__$1 = (function (){var statearr_40515 = state_40506;
(statearr_40515[(8)] = inst_40483);

(statearr_40515[(12)] = inst_40497);

return statearr_40515;
})();
var statearr_40516_40527 = state_40506__$1;
(statearr_40516_40527[(2)] = null);

(statearr_40516_40527[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____0 = (function (){
var statearr_40517 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40517[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__);

(statearr_40517[(1)] = (1));

return statearr_40517;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____1 = (function (state_40506){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_40506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e40518){if((e40518 instanceof Object)){
var ex__37143__auto__ = e40518;
var statearr_40519_40528 = state_40506;
(statearr_40519_40528[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40529 = state_40506;
state_40506 = G__40529;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__ = function(state_40506){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____1.call(this,state_40506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_40520 = f__37235__auto__.call(null);
(statearr_40520[(6)] = c__37234__auto___40521);

return statearr_40520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40530,opts){
var map__40531 = p__40530;
var map__40531__$1 = (((((!((map__40531 == null))))?(((((map__40531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40531):map__40531);
var eval_body = cljs.core.get.call(null,map__40531__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40531__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e40533){var e = e40533;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__40534_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40534_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40535){
var vec__40536 = p__40535;
var k = cljs.core.nth.call(null,vec__40536,(0),null);
var v = cljs.core.nth.call(null,vec__40536,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40539){
var vec__40540 = p__40539;
var k = cljs.core.nth.call(null,vec__40540,(0),null);
var v = cljs.core.nth.call(null,vec__40540,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40546,p__40547){
var map__40548 = p__40546;
var map__40548__$1 = (((((!((map__40548 == null))))?(((((map__40548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40548):map__40548);
var opts = map__40548__$1;
var before_jsload = cljs.core.get.call(null,map__40548__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40548__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40548__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40549 = p__40547;
var map__40549__$1 = (((((!((map__40549 == null))))?(((((map__40549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40549):map__40549);
var msg = map__40549__$1;
var files = cljs.core.get.call(null,map__40549__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40549__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40549__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__37235__auto__ = (function (){var switch__37139__auto__ = (function (state_40703){
var state_val_40704 = (state_40703[(1)]);
if((state_val_40704 === (7))){
var inst_40566 = (state_40703[(7)]);
var inst_40563 = (state_40703[(8)]);
var inst_40565 = (state_40703[(9)]);
var inst_40564 = (state_40703[(10)]);
var inst_40571 = cljs.core._nth.call(null,inst_40564,inst_40566);
var inst_40572 = figwheel.client.file_reloading.eval_body.call(null,inst_40571,opts);
var inst_40573 = (inst_40566 + (1));
var tmp40705 = inst_40563;
var tmp40706 = inst_40565;
var tmp40707 = inst_40564;
var inst_40563__$1 = tmp40705;
var inst_40564__$1 = tmp40707;
var inst_40565__$1 = tmp40706;
var inst_40566__$1 = inst_40573;
var state_40703__$1 = (function (){var statearr_40708 = state_40703;
(statearr_40708[(11)] = inst_40572);

(statearr_40708[(7)] = inst_40566__$1);

(statearr_40708[(8)] = inst_40563__$1);

(statearr_40708[(9)] = inst_40565__$1);

(statearr_40708[(10)] = inst_40564__$1);

return statearr_40708;
})();
var statearr_40709_40792 = state_40703__$1;
(statearr_40709_40792[(2)] = null);

(statearr_40709_40792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (20))){
var inst_40606 = (state_40703[(12)]);
var inst_40614 = figwheel.client.file_reloading.sort_files.call(null,inst_40606);
var state_40703__$1 = state_40703;
var statearr_40710_40793 = state_40703__$1;
(statearr_40710_40793[(2)] = inst_40614);

(statearr_40710_40793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (27))){
var state_40703__$1 = state_40703;
var statearr_40711_40794 = state_40703__$1;
(statearr_40711_40794[(2)] = null);

(statearr_40711_40794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (1))){
var inst_40555 = (state_40703[(13)]);
var inst_40552 = before_jsload.call(null,files);
var inst_40553 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40554 = (function (){return (function (p1__40543_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40543_SHARP_);
});
})();
var inst_40555__$1 = cljs.core.filter.call(null,inst_40554,files);
var inst_40556 = cljs.core.not_empty.call(null,inst_40555__$1);
var state_40703__$1 = (function (){var statearr_40712 = state_40703;
(statearr_40712[(13)] = inst_40555__$1);

(statearr_40712[(14)] = inst_40553);

(statearr_40712[(15)] = inst_40552);

return statearr_40712;
})();
if(cljs.core.truth_(inst_40556)){
var statearr_40713_40795 = state_40703__$1;
(statearr_40713_40795[(1)] = (2));

} else {
var statearr_40714_40796 = state_40703__$1;
(statearr_40714_40796[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (24))){
var state_40703__$1 = state_40703;
var statearr_40715_40797 = state_40703__$1;
(statearr_40715_40797[(2)] = null);

(statearr_40715_40797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (39))){
var inst_40656 = (state_40703[(16)]);
var state_40703__$1 = state_40703;
var statearr_40716_40798 = state_40703__$1;
(statearr_40716_40798[(2)] = inst_40656);

(statearr_40716_40798[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (46))){
var inst_40698 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40717_40799 = state_40703__$1;
(statearr_40717_40799[(2)] = inst_40698);

(statearr_40717_40799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (4))){
var inst_40600 = (state_40703[(2)]);
var inst_40601 = cljs.core.List.EMPTY;
var inst_40602 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40601);
var inst_40603 = (function (){return (function (p1__40544_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40544_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40544_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40544_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_40604 = cljs.core.filter.call(null,inst_40603,files);
var inst_40605 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40606 = cljs.core.concat.call(null,inst_40604,inst_40605);
var state_40703__$1 = (function (){var statearr_40718 = state_40703;
(statearr_40718[(17)] = inst_40602);

(statearr_40718[(18)] = inst_40600);

(statearr_40718[(12)] = inst_40606);

return statearr_40718;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40719_40800 = state_40703__$1;
(statearr_40719_40800[(1)] = (16));

} else {
var statearr_40720_40801 = state_40703__$1;
(statearr_40720_40801[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (15))){
var inst_40590 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40721_40802 = state_40703__$1;
(statearr_40721_40802[(2)] = inst_40590);

(statearr_40721_40802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (21))){
var inst_40616 = (state_40703[(19)]);
var inst_40616__$1 = (state_40703[(2)]);
var inst_40617 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40616__$1);
var state_40703__$1 = (function (){var statearr_40722 = state_40703;
(statearr_40722[(19)] = inst_40616__$1);

return statearr_40722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40703__$1,(22),inst_40617);
} else {
if((state_val_40704 === (31))){
var inst_40701 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40703__$1,inst_40701);
} else {
if((state_val_40704 === (32))){
var inst_40656 = (state_40703[(16)]);
var inst_40661 = inst_40656.cljs$lang$protocol_mask$partition0$;
var inst_40662 = (inst_40661 & (64));
var inst_40663 = inst_40656.cljs$core$ISeq$;
var inst_40664 = (cljs.core.PROTOCOL_SENTINEL === inst_40663);
var inst_40665 = ((inst_40662) || (inst_40664));
var state_40703__$1 = state_40703;
if(cljs.core.truth_(inst_40665)){
var statearr_40723_40803 = state_40703__$1;
(statearr_40723_40803[(1)] = (35));

} else {
var statearr_40724_40804 = state_40703__$1;
(statearr_40724_40804[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (40))){
var inst_40678 = (state_40703[(20)]);
var inst_40677 = (state_40703[(2)]);
var inst_40678__$1 = cljs.core.get.call(null,inst_40677,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40679 = cljs.core.get.call(null,inst_40677,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40680 = cljs.core.not_empty.call(null,inst_40678__$1);
var state_40703__$1 = (function (){var statearr_40725 = state_40703;
(statearr_40725[(20)] = inst_40678__$1);

(statearr_40725[(21)] = inst_40679);

return statearr_40725;
})();
if(cljs.core.truth_(inst_40680)){
var statearr_40726_40805 = state_40703__$1;
(statearr_40726_40805[(1)] = (41));

} else {
var statearr_40727_40806 = state_40703__$1;
(statearr_40727_40806[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (33))){
var state_40703__$1 = state_40703;
var statearr_40728_40807 = state_40703__$1;
(statearr_40728_40807[(2)] = false);

(statearr_40728_40807[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (13))){
var inst_40576 = (state_40703[(22)]);
var inst_40580 = cljs.core.chunk_first.call(null,inst_40576);
var inst_40581 = cljs.core.chunk_rest.call(null,inst_40576);
var inst_40582 = cljs.core.count.call(null,inst_40580);
var inst_40563 = inst_40581;
var inst_40564 = inst_40580;
var inst_40565 = inst_40582;
var inst_40566 = (0);
var state_40703__$1 = (function (){var statearr_40729 = state_40703;
(statearr_40729[(7)] = inst_40566);

(statearr_40729[(8)] = inst_40563);

(statearr_40729[(9)] = inst_40565);

(statearr_40729[(10)] = inst_40564);

return statearr_40729;
})();
var statearr_40730_40808 = state_40703__$1;
(statearr_40730_40808[(2)] = null);

(statearr_40730_40808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (22))){
var inst_40616 = (state_40703[(19)]);
var inst_40619 = (state_40703[(23)]);
var inst_40620 = (state_40703[(24)]);
var inst_40624 = (state_40703[(25)]);
var inst_40619__$1 = (state_40703[(2)]);
var inst_40620__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40619__$1);
var inst_40621 = (function (){var all_files = inst_40616;
var res_SINGLEQUOTE_ = inst_40619__$1;
var res = inst_40620__$1;
return (function (p1__40545_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40545_SHARP_));
});
})();
var inst_40622 = cljs.core.filter.call(null,inst_40621,inst_40619__$1);
var inst_40623 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40624__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40623);
var inst_40625 = cljs.core.not_empty.call(null,inst_40624__$1);
var state_40703__$1 = (function (){var statearr_40731 = state_40703;
(statearr_40731[(26)] = inst_40622);

(statearr_40731[(23)] = inst_40619__$1);

(statearr_40731[(24)] = inst_40620__$1);

(statearr_40731[(25)] = inst_40624__$1);

return statearr_40731;
})();
if(cljs.core.truth_(inst_40625)){
var statearr_40732_40809 = state_40703__$1;
(statearr_40732_40809[(1)] = (23));

} else {
var statearr_40733_40810 = state_40703__$1;
(statearr_40733_40810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (36))){
var state_40703__$1 = state_40703;
var statearr_40734_40811 = state_40703__$1;
(statearr_40734_40811[(2)] = false);

(statearr_40734_40811[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (41))){
var inst_40678 = (state_40703[(20)]);
var inst_40682 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40683 = cljs.core.map.call(null,inst_40682,inst_40678);
var inst_40684 = cljs.core.pr_str.call(null,inst_40683);
var inst_40685 = ["figwheel-no-load meta-data: ",inst_40684].join('');
var inst_40686 = figwheel.client.utils.log.call(null,inst_40685);
var state_40703__$1 = state_40703;
var statearr_40735_40812 = state_40703__$1;
(statearr_40735_40812[(2)] = inst_40686);

(statearr_40735_40812[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (43))){
var inst_40679 = (state_40703[(21)]);
var inst_40689 = (state_40703[(2)]);
var inst_40690 = cljs.core.not_empty.call(null,inst_40679);
var state_40703__$1 = (function (){var statearr_40736 = state_40703;
(statearr_40736[(27)] = inst_40689);

return statearr_40736;
})();
if(cljs.core.truth_(inst_40690)){
var statearr_40737_40813 = state_40703__$1;
(statearr_40737_40813[(1)] = (44));

} else {
var statearr_40738_40814 = state_40703__$1;
(statearr_40738_40814[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (29))){
var inst_40656 = (state_40703[(16)]);
var inst_40622 = (state_40703[(26)]);
var inst_40616 = (state_40703[(19)]);
var inst_40619 = (state_40703[(23)]);
var inst_40620 = (state_40703[(24)]);
var inst_40624 = (state_40703[(25)]);
var inst_40652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40655 = (function (){var all_files = inst_40616;
var res_SINGLEQUOTE_ = inst_40619;
var res = inst_40620;
var files_not_loaded = inst_40622;
var dependencies_that_loaded = inst_40624;
return (function (p__40654){
var map__40739 = p__40654;
var map__40739__$1 = (((((!((map__40739 == null))))?(((((map__40739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40739):map__40739);
var namespace = cljs.core.get.call(null,map__40739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_40656__$1 = cljs.core.group_by.call(null,inst_40655,inst_40622);
var inst_40658 = (inst_40656__$1 == null);
var inst_40659 = cljs.core.not.call(null,inst_40658);
var state_40703__$1 = (function (){var statearr_40741 = state_40703;
(statearr_40741[(16)] = inst_40656__$1);

(statearr_40741[(28)] = inst_40652);

return statearr_40741;
})();
if(inst_40659){
var statearr_40742_40815 = state_40703__$1;
(statearr_40742_40815[(1)] = (32));

} else {
var statearr_40743_40816 = state_40703__$1;
(statearr_40743_40816[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (44))){
var inst_40679 = (state_40703[(21)]);
var inst_40692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40679);
var inst_40693 = cljs.core.pr_str.call(null,inst_40692);
var inst_40694 = ["not required: ",inst_40693].join('');
var inst_40695 = figwheel.client.utils.log.call(null,inst_40694);
var state_40703__$1 = state_40703;
var statearr_40744_40817 = state_40703__$1;
(statearr_40744_40817[(2)] = inst_40695);

(statearr_40744_40817[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (6))){
var inst_40597 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40745_40818 = state_40703__$1;
(statearr_40745_40818[(2)] = inst_40597);

(statearr_40745_40818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (28))){
var inst_40622 = (state_40703[(26)]);
var inst_40649 = (state_40703[(2)]);
var inst_40650 = cljs.core.not_empty.call(null,inst_40622);
var state_40703__$1 = (function (){var statearr_40746 = state_40703;
(statearr_40746[(29)] = inst_40649);

return statearr_40746;
})();
if(cljs.core.truth_(inst_40650)){
var statearr_40747_40819 = state_40703__$1;
(statearr_40747_40819[(1)] = (29));

} else {
var statearr_40748_40820 = state_40703__$1;
(statearr_40748_40820[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (25))){
var inst_40620 = (state_40703[(24)]);
var inst_40636 = (state_40703[(2)]);
var inst_40637 = cljs.core.not_empty.call(null,inst_40620);
var state_40703__$1 = (function (){var statearr_40749 = state_40703;
(statearr_40749[(30)] = inst_40636);

return statearr_40749;
})();
if(cljs.core.truth_(inst_40637)){
var statearr_40750_40821 = state_40703__$1;
(statearr_40750_40821[(1)] = (26));

} else {
var statearr_40751_40822 = state_40703__$1;
(statearr_40751_40822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (34))){
var inst_40672 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
if(cljs.core.truth_(inst_40672)){
var statearr_40752_40823 = state_40703__$1;
(statearr_40752_40823[(1)] = (38));

} else {
var statearr_40753_40824 = state_40703__$1;
(statearr_40753_40824[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (17))){
var state_40703__$1 = state_40703;
var statearr_40754_40825 = state_40703__$1;
(statearr_40754_40825[(2)] = recompile_dependents);

(statearr_40754_40825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (3))){
var state_40703__$1 = state_40703;
var statearr_40755_40826 = state_40703__$1;
(statearr_40755_40826[(2)] = null);

(statearr_40755_40826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (12))){
var inst_40593 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40756_40827 = state_40703__$1;
(statearr_40756_40827[(2)] = inst_40593);

(statearr_40756_40827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (2))){
var inst_40555 = (state_40703[(13)]);
var inst_40562 = cljs.core.seq.call(null,inst_40555);
var inst_40563 = inst_40562;
var inst_40564 = null;
var inst_40565 = (0);
var inst_40566 = (0);
var state_40703__$1 = (function (){var statearr_40757 = state_40703;
(statearr_40757[(7)] = inst_40566);

(statearr_40757[(8)] = inst_40563);

(statearr_40757[(9)] = inst_40565);

(statearr_40757[(10)] = inst_40564);

return statearr_40757;
})();
var statearr_40758_40828 = state_40703__$1;
(statearr_40758_40828[(2)] = null);

(statearr_40758_40828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (23))){
var inst_40622 = (state_40703[(26)]);
var inst_40616 = (state_40703[(19)]);
var inst_40619 = (state_40703[(23)]);
var inst_40620 = (state_40703[(24)]);
var inst_40624 = (state_40703[(25)]);
var inst_40627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40629 = (function (){var all_files = inst_40616;
var res_SINGLEQUOTE_ = inst_40619;
var res = inst_40620;
var files_not_loaded = inst_40622;
var dependencies_that_loaded = inst_40624;
return (function (p__40628){
var map__40759 = p__40628;
var map__40759__$1 = (((((!((map__40759 == null))))?(((((map__40759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40759):map__40759);
var request_url = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_40630 = cljs.core.reverse.call(null,inst_40624);
var inst_40631 = cljs.core.map.call(null,inst_40629,inst_40630);
var inst_40632 = cljs.core.pr_str.call(null,inst_40631);
var inst_40633 = figwheel.client.utils.log.call(null,inst_40632);
var state_40703__$1 = (function (){var statearr_40761 = state_40703;
(statearr_40761[(31)] = inst_40627);

return statearr_40761;
})();
var statearr_40762_40829 = state_40703__$1;
(statearr_40762_40829[(2)] = inst_40633);

(statearr_40762_40829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (35))){
var state_40703__$1 = state_40703;
var statearr_40763_40830 = state_40703__$1;
(statearr_40763_40830[(2)] = true);

(statearr_40763_40830[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (19))){
var inst_40606 = (state_40703[(12)]);
var inst_40612 = figwheel.client.file_reloading.expand_files.call(null,inst_40606);
var state_40703__$1 = state_40703;
var statearr_40764_40831 = state_40703__$1;
(statearr_40764_40831[(2)] = inst_40612);

(statearr_40764_40831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (11))){
var state_40703__$1 = state_40703;
var statearr_40765_40832 = state_40703__$1;
(statearr_40765_40832[(2)] = null);

(statearr_40765_40832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (9))){
var inst_40595 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40766_40833 = state_40703__$1;
(statearr_40766_40833[(2)] = inst_40595);

(statearr_40766_40833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (5))){
var inst_40566 = (state_40703[(7)]);
var inst_40565 = (state_40703[(9)]);
var inst_40568 = (inst_40566 < inst_40565);
var inst_40569 = inst_40568;
var state_40703__$1 = state_40703;
if(cljs.core.truth_(inst_40569)){
var statearr_40767_40834 = state_40703__$1;
(statearr_40767_40834[(1)] = (7));

} else {
var statearr_40768_40835 = state_40703__$1;
(statearr_40768_40835[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (14))){
var inst_40576 = (state_40703[(22)]);
var inst_40585 = cljs.core.first.call(null,inst_40576);
var inst_40586 = figwheel.client.file_reloading.eval_body.call(null,inst_40585,opts);
var inst_40587 = cljs.core.next.call(null,inst_40576);
var inst_40563 = inst_40587;
var inst_40564 = null;
var inst_40565 = (0);
var inst_40566 = (0);
var state_40703__$1 = (function (){var statearr_40769 = state_40703;
(statearr_40769[(32)] = inst_40586);

(statearr_40769[(7)] = inst_40566);

(statearr_40769[(8)] = inst_40563);

(statearr_40769[(9)] = inst_40565);

(statearr_40769[(10)] = inst_40564);

return statearr_40769;
})();
var statearr_40770_40836 = state_40703__$1;
(statearr_40770_40836[(2)] = null);

(statearr_40770_40836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (45))){
var state_40703__$1 = state_40703;
var statearr_40771_40837 = state_40703__$1;
(statearr_40771_40837[(2)] = null);

(statearr_40771_40837[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (26))){
var inst_40622 = (state_40703[(26)]);
var inst_40616 = (state_40703[(19)]);
var inst_40619 = (state_40703[(23)]);
var inst_40620 = (state_40703[(24)]);
var inst_40624 = (state_40703[(25)]);
var inst_40639 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40641 = (function (){var all_files = inst_40616;
var res_SINGLEQUOTE_ = inst_40619;
var res = inst_40620;
var files_not_loaded = inst_40622;
var dependencies_that_loaded = inst_40624;
return (function (p__40640){
var map__40772 = p__40640;
var map__40772__$1 = (((((!((map__40772 == null))))?(((((map__40772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40772):map__40772);
var namespace = cljs.core.get.call(null,map__40772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40772__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_40642 = cljs.core.map.call(null,inst_40641,inst_40620);
var inst_40643 = cljs.core.pr_str.call(null,inst_40642);
var inst_40644 = figwheel.client.utils.log.call(null,inst_40643);
var inst_40645 = (function (){var all_files = inst_40616;
var res_SINGLEQUOTE_ = inst_40619;
var res = inst_40620;
var files_not_loaded = inst_40622;
var dependencies_that_loaded = inst_40624;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_40646 = setTimeout(inst_40645,(10));
var state_40703__$1 = (function (){var statearr_40774 = state_40703;
(statearr_40774[(33)] = inst_40644);

(statearr_40774[(34)] = inst_40639);

return statearr_40774;
})();
var statearr_40775_40838 = state_40703__$1;
(statearr_40775_40838[(2)] = inst_40646);

(statearr_40775_40838[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (16))){
var state_40703__$1 = state_40703;
var statearr_40776_40839 = state_40703__$1;
(statearr_40776_40839[(2)] = reload_dependents);

(statearr_40776_40839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (38))){
var inst_40656 = (state_40703[(16)]);
var inst_40674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40656);
var state_40703__$1 = state_40703;
var statearr_40777_40840 = state_40703__$1;
(statearr_40777_40840[(2)] = inst_40674);

(statearr_40777_40840[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (30))){
var state_40703__$1 = state_40703;
var statearr_40778_40841 = state_40703__$1;
(statearr_40778_40841[(2)] = null);

(statearr_40778_40841[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (10))){
var inst_40576 = (state_40703[(22)]);
var inst_40578 = cljs.core.chunked_seq_QMARK_.call(null,inst_40576);
var state_40703__$1 = state_40703;
if(inst_40578){
var statearr_40779_40842 = state_40703__$1;
(statearr_40779_40842[(1)] = (13));

} else {
var statearr_40780_40843 = state_40703__$1;
(statearr_40780_40843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (18))){
var inst_40610 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
if(cljs.core.truth_(inst_40610)){
var statearr_40781_40844 = state_40703__$1;
(statearr_40781_40844[(1)] = (19));

} else {
var statearr_40782_40845 = state_40703__$1;
(statearr_40782_40845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (42))){
var state_40703__$1 = state_40703;
var statearr_40783_40846 = state_40703__$1;
(statearr_40783_40846[(2)] = null);

(statearr_40783_40846[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (37))){
var inst_40669 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40784_40847 = state_40703__$1;
(statearr_40784_40847[(2)] = inst_40669);

(statearr_40784_40847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (8))){
var inst_40576 = (state_40703[(22)]);
var inst_40563 = (state_40703[(8)]);
var inst_40576__$1 = cljs.core.seq.call(null,inst_40563);
var state_40703__$1 = (function (){var statearr_40785 = state_40703;
(statearr_40785[(22)] = inst_40576__$1);

return statearr_40785;
})();
if(inst_40576__$1){
var statearr_40786_40848 = state_40703__$1;
(statearr_40786_40848[(1)] = (10));

} else {
var statearr_40787_40849 = state_40703__$1;
(statearr_40787_40849[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____0 = (function (){
var statearr_40788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40788[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__);

(statearr_40788[(1)] = (1));

return statearr_40788;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____1 = (function (state_40703){
while(true){
var ret_value__37141__auto__ = (function (){try{while(true){
var result__37142__auto__ = switch__37139__auto__.call(null,state_40703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37142__auto__;
}
break;
}
}catch (e40789){if((e40789 instanceof Object)){
var ex__37143__auto__ = e40789;
var statearr_40790_40850 = state_40703;
(statearr_40790_40850[(5)] = ex__37143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40851 = state_40703;
state_40703 = G__40851;
continue;
} else {
return ret_value__37141__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__ = function(state_40703){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____1.call(this,state_40703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37140__auto__;
})()
})();
var state__37236__auto__ = (function (){var statearr_40791 = f__37235__auto__.call(null);
(statearr_40791[(6)] = c__37234__auto__);

return statearr_40791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37236__auto__);
}));

return c__37234__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40854,link){
var map__40855 = p__40854;
var map__40855__$1 = (((((!((map__40855 == null))))?(((((map__40855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40855):map__40855);
var file = cljs.core.get.call(null,map__40855__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__40852_SHARP_,p2__40853_SHARP_){
if(cljs.core._EQ_.call(null,p1__40852_SHARP_,p2__40853_SHARP_)){
return p1__40852_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40858){
var map__40859 = p__40858;
var map__40859__$1 = (((((!((map__40859 == null))))?(((((map__40859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40859):map__40859);
var match_length = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40857_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40857_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40861_SHARP_,p2__40862_SHARP_){
return cljs.core.assoc.call(null,p1__40861_SHARP_,cljs.core.get.call(null,p2__40862_SHARP_,key),p2__40862_SHARP_);
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
var loaded_f_datas_40863 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40863);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40863);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40864,p__40865){
var map__40866 = p__40864;
var map__40866__$1 = (((((!((map__40866 == null))))?(((((map__40866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40866):map__40866);
var on_cssload = cljs.core.get.call(null,map__40866__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40867 = p__40865;
var map__40867__$1 = (((((!((map__40867 == null))))?(((((map__40867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40867):map__40867);
var files_msg = map__40867__$1;
var files = cljs.core.get.call(null,map__40867__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1617925397211
