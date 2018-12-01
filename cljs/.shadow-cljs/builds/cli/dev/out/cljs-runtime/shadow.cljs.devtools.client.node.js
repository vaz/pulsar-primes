goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if(typeof shadow.cljs.devtools.client.node.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if(typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__29239){
var map__29240 = p__29239;
var map__29240__$1 = ((((!((map__29240 == null)))?(((((map__29240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29240):map__29240);
var msg = map__29240__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29240__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29240__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__29245){
var map__29246 = p__29245;
var map__29246__$1 = ((((!((map__29246 == null)))?(((((map__29246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29246):map__29246);
var msg = map__29246__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29246__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__29248 = repl_state;
var map__29248__$1 = ((((!((map__29248 == null)))?(((((map__29248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29248):map__29248);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__29250_29260 = cljs.core.seq(repl_sources);
var chunk__29252_29261 = null;
var count__29253_29262 = (0);
var i__29254_29263 = (0);
while(true){
if((i__29254_29263 < count__29253_29262)){
var map__29256_29264 = chunk__29252_29261.cljs$core$IIndexed$_nth$arity$2(null,i__29254_29263);
var map__29256_29265__$1 = ((((!((map__29256_29264 == null)))?(((((map__29256_29264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29256_29264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29256_29264):map__29256_29264);
var src_29266 = map__29256_29265__$1;
var output_name_29267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29256_29265__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29267))){
shadow.cljs.devtools.client.node.closure_import(output_name_29267);


var G__29268 = seq__29250_29260;
var G__29269 = chunk__29252_29261;
var G__29270 = count__29253_29262;
var G__29271 = (i__29254_29263 + (1));
seq__29250_29260 = G__29268;
chunk__29252_29261 = G__29269;
count__29253_29262 = G__29270;
i__29254_29263 = G__29271;
continue;
} else {
var G__29272 = seq__29250_29260;
var G__29273 = chunk__29252_29261;
var G__29274 = count__29253_29262;
var G__29275 = (i__29254_29263 + (1));
seq__29250_29260 = G__29272;
chunk__29252_29261 = G__29273;
count__29253_29262 = G__29274;
i__29254_29263 = G__29275;
continue;
}
} else {
var temp__5457__auto___29276 = cljs.core.seq(seq__29250_29260);
if(temp__5457__auto___29276){
var seq__29250_29277__$1 = temp__5457__auto___29276;
if(cljs.core.chunked_seq_QMARK_(seq__29250_29277__$1)){
var c__4319__auto___29278 = cljs.core.chunk_first(seq__29250_29277__$1);
var G__29279 = cljs.core.chunk_rest(seq__29250_29277__$1);
var G__29280 = c__4319__auto___29278;
var G__29281 = cljs.core.count(c__4319__auto___29278);
var G__29282 = (0);
seq__29250_29260 = G__29279;
chunk__29252_29261 = G__29280;
count__29253_29262 = G__29281;
i__29254_29263 = G__29282;
continue;
} else {
var map__29258_29283 = cljs.core.first(seq__29250_29277__$1);
var map__29258_29284__$1 = ((((!((map__29258_29283 == null)))?(((((map__29258_29283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29258_29283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29258_29283):map__29258_29283);
var src_29285 = map__29258_29284__$1;
var output_name_29286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258_29284__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29286))){
shadow.cljs.devtools.client.node.closure_import(output_name_29286);


var G__29287 = cljs.core.next(seq__29250_29277__$1);
var G__29288 = null;
var G__29289 = (0);
var G__29290 = (0);
seq__29250_29260 = G__29287;
chunk__29252_29261 = G__29288;
count__29253_29262 = G__29289;
i__29254_29263 = G__29290;
continue;
} else {
var G__29291 = cljs.core.next(seq__29250_29277__$1);
var G__29292 = null;
var G__29293 = (0);
var G__29294 = (0);
seq__29250_29260 = G__29291;
chunk__29252_29261 = G__29292;
count__29253_29262 = G__29293;
i__29254_29263 = G__29294;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__29295){
var map__29296 = p__29295;
var map__29296__$1 = ((((!((map__29296 == null)))?(((((map__29296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29296):map__29296);
var msg = map__29296__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__29296,map__29296__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__29296,map__29296__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__29298){
var map__29299 = p__29298;
var map__29299__$1 = ((((!((map__29299 == null)))?(((((map__29299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29299):map__29299);
var msg = map__29299__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__29301){
var map__29302 = p__29301;
var map__29302__$1 = ((((!((map__29302 == null)))?(((((map__29302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29302):map__29302);
var msg = map__29302__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29302__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29302__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29302__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__29305_29313 = cljs.core.seq(sources);
var chunk__29306_29314 = null;
var count__29307_29315 = (0);
var i__29308_29316 = (0);
while(true){
if((i__29308_29316 < count__29307_29315)){
var map__29309_29317 = chunk__29306_29314.cljs$core$IIndexed$_nth$arity$2(null,i__29308_29316);
var map__29309_29318__$1 = ((((!((map__29309_29317 == null)))?(((((map__29309_29317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29309_29317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29309_29317):map__29309_29317);
var src_29319 = map__29309_29318__$1;
var provides_29320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29309_29318__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29309_29318__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29321));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29320);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29321);
} else {
}


var G__29322 = seq__29305_29313;
var G__29323 = chunk__29306_29314;
var G__29324 = count__29307_29315;
var G__29325 = (i__29308_29316 + (1));
seq__29305_29313 = G__29322;
chunk__29306_29314 = G__29323;
count__29307_29315 = G__29324;
i__29308_29316 = G__29325;
continue;
} else {
var temp__5457__auto___29326 = cljs.core.seq(seq__29305_29313);
if(temp__5457__auto___29326){
var seq__29305_29327__$1 = temp__5457__auto___29326;
if(cljs.core.chunked_seq_QMARK_(seq__29305_29327__$1)){
var c__4319__auto___29328 = cljs.core.chunk_first(seq__29305_29327__$1);
var G__29329 = cljs.core.chunk_rest(seq__29305_29327__$1);
var G__29330 = c__4319__auto___29328;
var G__29331 = cljs.core.count(c__4319__auto___29328);
var G__29332 = (0);
seq__29305_29313 = G__29329;
chunk__29306_29314 = G__29330;
count__29307_29315 = G__29331;
i__29308_29316 = G__29332;
continue;
} else {
var map__29311_29333 = cljs.core.first(seq__29305_29327__$1);
var map__29311_29334__$1 = ((((!((map__29311_29333 == null)))?(((((map__29311_29333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29311_29333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29311_29333):map__29311_29333);
var src_29335 = map__29311_29334__$1;
var provides_29336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311_29334__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_29337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29311_29334__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_29337));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_29336);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_29337);
} else {
}


var G__29338 = cljs.core.next(seq__29305_29327__$1);
var G__29339 = null;
var G__29340 = (0);
var G__29341 = (0);
seq__29305_29313 = G__29338;
chunk__29306_29314 = G__29339;
count__29307_29315 = G__29340;
i__29308_29316 = G__29341;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e29304){var e = e29304;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__29342){
var map__29343 = p__29342;
var map__29343__$1 = ((((!((map__29343 == null)))?(((((map__29343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29343):map__29343);
var msg = map__29343__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29343__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29343__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29345 = info;
var map__29345__$1 = ((((!((map__29345 == null)))?(((((map__29345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29345):map__29345);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29347(s__29348){
return (new cljs.core.LazySeq(null,((function (map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info){
return (function (){
var s__29348__$1 = s__29348;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__29348__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__29353 = cljs.core.first(xs__6012__auto__);
var map__29353__$1 = ((((!((map__29353 == null)))?(((((map__29353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29353):map__29353);
var src = map__29353__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29353__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__29348__$1,map__29353,map__29353__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__29347_$_iter__29349(s__29350){
return (new cljs.core.LazySeq(null,((function (s__29348__$1,map__29353,map__29353__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info){
return (function (){
var s__29350__$1 = s__29350;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__29350__$1);
if(temp__5457__auto____$1){
var s__29350__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29350__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29350__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29352 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29351 = (0);
while(true){
if((i__29351 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29351);
cljs.core.chunk_append(b__29352,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29367 = (i__29351 + (1));
i__29351 = G__29367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29352),shadow$cljs$devtools$client$node$build_complete_$_iter__29347_$_iter__29349(cljs.core.chunk_rest(s__29350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29352),null);
}
} else {
var warning = cljs.core.first(s__29350__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__29347_$_iter__29349(cljs.core.rest(s__29350__$2)));
}
} else {
return null;
}
break;
}
});})(s__29348__$1,map__29353,map__29353__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info))
,null,null));
});})(s__29348__$1,map__29353,map__29353__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__29347(cljs.core.rest(s__29348__$1)));
} else {
var G__29368 = cljs.core.rest(s__29348__$1);
s__29348__$1 = G__29368;
continue;
}
} else {
var G__29369 = cljs.core.rest(s__29348__$1);
s__29348__$1 = G__29369;
continue;
}
} else {
return null;
}
break;
}
});})(map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info))
,null,null));
});})(map__29345,map__29345__$1,sources,compiled,map__29343,map__29343__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__29355 = info;
var map__29355__$1 = ((((!((map__29355 == null)))?(((((map__29355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29355):map__29355);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29355__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29355__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29355,map__29355__$1,sources__$1,compiled__$1,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info){
return (function (p__29357){
var map__29358 = p__29357;
var map__29358__$1 = ((((!((map__29358 == null)))?(((((map__29358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29358):map__29358);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29358__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__29355,map__29355__$1,sources__$1,compiled__$1,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29355,map__29355__$1,sources__$1,compiled__$1,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info){
return (function (p__29360){
var map__29361 = p__29360;
var map__29361__$1 = ((((!((map__29361 == null)))?(((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29361):map__29361);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29361__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29355,map__29355__$1,sources__$1,compiled__$1,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__29355,map__29355__$1,sources__$1,compiled__$1,files_to_require,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info){
return (function (){
var seq__29363 = cljs.core.seq(files_to_require);
var chunk__29364 = null;
var count__29365 = (0);
var i__29366 = (0);
while(true){
if((i__29366 < count__29365)){
var src = chunk__29364.cljs$core$IIndexed$_nth$arity$2(null,i__29366);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29370 = seq__29363;
var G__29371 = chunk__29364;
var G__29372 = count__29365;
var G__29373 = (i__29366 + (1));
seq__29363 = G__29370;
chunk__29364 = G__29371;
count__29365 = G__29372;
i__29366 = G__29373;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29363);
if(temp__5457__auto__){
var seq__29363__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29363__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29363__$1);
var G__29374 = cljs.core.chunk_rest(seq__29363__$1);
var G__29375 = c__4319__auto__;
var G__29376 = cljs.core.count(c__4319__auto__);
var G__29377 = (0);
seq__29363 = G__29374;
chunk__29364 = G__29375;
count__29365 = G__29376;
i__29366 = G__29377;
continue;
} else {
var src = cljs.core.first(seq__29363__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__29378 = cljs.core.next(seq__29363__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__29363 = G__29378;
chunk__29364 = G__29379;
count__29365 = G__29380;
i__29366 = G__29381;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__29355,map__29355__$1,sources__$1,compiled__$1,files_to_require,map__29345,map__29345__$1,sources,compiled,warnings,map__29343,map__29343__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__29382){
var map__29383 = p__29382;
var map__29383__$1 = ((((!((map__29383 == null)))?(((((map__29383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29383):map__29383);
var msg = map__29383__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29383__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__29385 = type;
var G__29385__$1 = (((G__29385 instanceof cljs.core.Keyword))?G__29385.fqn:null);
switch (G__29385__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e29387){var e = e29387;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
