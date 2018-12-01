goog.provide('sieve.cli');
goog.require('cljs.core');
sieve.cli.main = (function sieve$cli$main(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29393 = arguments.length;
var i__4500__auto___29394 = (0);
while(true){
if((i__4500__auto___29394 < len__4499__auto___29393)){
args__4502__auto__.push((arguments[i__4500__auto___29394]));

var G__29395 = (i__4500__auto___29394 + (1));
i__4500__auto___29394 = G__29395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sieve.cli.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sieve.cli.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("hello cli");
});

sieve.cli.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sieve.cli.main.cljs$lang$applyTo = (function (seq29392){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29392));
});


//# sourceMappingURL=sieve.cli.js.map
