//%s String
//%d Numero
//%j Json

// console.log("Un %s y un %s", "perrito", "gatito");

// console.info("hello world");
// console.warn("helo un warns");

// console.assert(42 === "42");

//console.trace("hello");

const util = require("util");

const debuglog = util.debuglog("foo");

debuglog("hello from foo");
