/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-c-ii-20.js
 * @description Array.prototype.some - callbackfn called with correct parameters (thisArg is correct)
 */


function testcase() {

        var thisArg = { threshold: 10 };

        function callbackfn(val, idx, obj) {
            return this === thisArg;
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.some.call(obj, callbackfn, thisArg);
    }
runTestCase(testcase);
