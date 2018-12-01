goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27322){
var map__27323 = p__27322;
var map__27323__$1 = ((((!((map__27323 == null)))?(((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27323):map__27323);
var m = map__27323__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27325_27347 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27326_27348 = null;
var count__27327_27349 = (0);
var i__27328_27350 = (0);
while(true){
if((i__27328_27350 < count__27327_27349)){
var f_27351 = chunk__27326_27348.cljs$core$IIndexed$_nth$arity$2(null,i__27328_27350);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27351], 0));


var G__27352 = seq__27325_27347;
var G__27353 = chunk__27326_27348;
var G__27354 = count__27327_27349;
var G__27355 = (i__27328_27350 + (1));
seq__27325_27347 = G__27352;
chunk__27326_27348 = G__27353;
count__27327_27349 = G__27354;
i__27328_27350 = G__27355;
continue;
} else {
var temp__5457__auto___27356 = cljs.core.seq(seq__27325_27347);
if(temp__5457__auto___27356){
var seq__27325_27357__$1 = temp__5457__auto___27356;
if(cljs.core.chunked_seq_QMARK_(seq__27325_27357__$1)){
var c__4319__auto___27358 = cljs.core.chunk_first(seq__27325_27357__$1);
var G__27359 = cljs.core.chunk_rest(seq__27325_27357__$1);
var G__27360 = c__4319__auto___27358;
var G__27361 = cljs.core.count(c__4319__auto___27358);
var G__27362 = (0);
seq__27325_27347 = G__27359;
chunk__27326_27348 = G__27360;
count__27327_27349 = G__27361;
i__27328_27350 = G__27362;
continue;
} else {
var f_27363 = cljs.core.first(seq__27325_27357__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27363], 0));


var G__27364 = cljs.core.next(seq__27325_27357__$1);
var G__27365 = null;
var G__27366 = (0);
var G__27367 = (0);
seq__27325_27347 = G__27364;
chunk__27326_27348 = G__27365;
count__27327_27349 = G__27366;
i__27328_27350 = G__27367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27368 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27368], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27368)))?cljs.core.second(arglists_27368):arglists_27368)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27329_27369 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27330_27370 = null;
var count__27331_27371 = (0);
var i__27332_27372 = (0);
while(true){
if((i__27332_27372 < count__27331_27371)){
var vec__27333_27373 = chunk__27330_27370.cljs$core$IIndexed$_nth$arity$2(null,i__27332_27372);
var name_27374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333_27373,(0),null);
var map__27336_27375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333_27373,(1),null);
var map__27336_27376__$1 = ((((!((map__27336_27375 == null)))?(((((map__27336_27375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27336_27375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27336_27375):map__27336_27375);
var doc_27377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27336_27376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27336_27376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27374], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27378], 0));

if(cljs.core.truth_(doc_27377)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27377], 0));
} else {
}


var G__27379 = seq__27329_27369;
var G__27380 = chunk__27330_27370;
var G__27381 = count__27331_27371;
var G__27382 = (i__27332_27372 + (1));
seq__27329_27369 = G__27379;
chunk__27330_27370 = G__27380;
count__27331_27371 = G__27381;
i__27332_27372 = G__27382;
continue;
} else {
var temp__5457__auto___27383 = cljs.core.seq(seq__27329_27369);
if(temp__5457__auto___27383){
var seq__27329_27384__$1 = temp__5457__auto___27383;
if(cljs.core.chunked_seq_QMARK_(seq__27329_27384__$1)){
var c__4319__auto___27385 = cljs.core.chunk_first(seq__27329_27384__$1);
var G__27386 = cljs.core.chunk_rest(seq__27329_27384__$1);
var G__27387 = c__4319__auto___27385;
var G__27388 = cljs.core.count(c__4319__auto___27385);
var G__27389 = (0);
seq__27329_27369 = G__27386;
chunk__27330_27370 = G__27387;
count__27331_27371 = G__27388;
i__27332_27372 = G__27389;
continue;
} else {
var vec__27338_27390 = cljs.core.first(seq__27329_27384__$1);
var name_27391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338_27390,(0),null);
var map__27341_27392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338_27390,(1),null);
var map__27341_27393__$1 = ((((!((map__27341_27392 == null)))?(((((map__27341_27392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27341_27392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27341_27392):map__27341_27392);
var doc_27394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27341_27393__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27341_27393__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27391], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27395], 0));

if(cljs.core.truth_(doc_27394)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27394], 0));
} else {
}


var G__27396 = cljs.core.next(seq__27329_27384__$1);
var G__27397 = null;
var G__27398 = (0);
var G__27399 = (0);
seq__27329_27369 = G__27396;
chunk__27330_27370 = G__27397;
count__27331_27371 = G__27398;
i__27332_27372 = G__27399;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27343 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27344 = null;
var count__27345 = (0);
var i__27346 = (0);
while(true){
if((i__27346 < count__27345)){
var role = chunk__27344.cljs$core$IIndexed$_nth$arity$2(null,i__27346);
var temp__5457__auto___27400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27400__$1)){
var spec_27401 = temp__5457__auto___27400__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27401)], 0));
} else {
}


var G__27402 = seq__27343;
var G__27403 = chunk__27344;
var G__27404 = count__27345;
var G__27405 = (i__27346 + (1));
seq__27343 = G__27402;
chunk__27344 = G__27403;
count__27345 = G__27404;
i__27346 = G__27405;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27343);
if(temp__5457__auto____$1){
var seq__27343__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27343__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27343__$1);
var G__27406 = cljs.core.chunk_rest(seq__27343__$1);
var G__27407 = c__4319__auto__;
var G__27408 = cljs.core.count(c__4319__auto__);
var G__27409 = (0);
seq__27343 = G__27406;
chunk__27344 = G__27407;
count__27345 = G__27408;
i__27346 = G__27409;
continue;
} else {
var role = cljs.core.first(seq__27343__$1);
var temp__5457__auto___27410__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27410__$2)){
var spec_27411 = temp__5457__auto___27410__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27411)], 0));
} else {
}


var G__27412 = cljs.core.next(seq__27343__$1);
var G__27413 = null;
var G__27414 = (0);
var G__27415 = (0);
seq__27343 = G__27412;
chunk__27344 = G__27413;
count__27345 = G__27414;
i__27346 = G__27415;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
