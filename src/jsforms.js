(function() {
    'use strict';

    module.experts = {};

})();

(function() {
    'use strict';


    function greet(greeting) {
        return 'Hello!';
    }

    module.exports = {
        greet: greet
    };
})();

(function() {
    'use strict';
    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(sqeNumber) {
        return Math.pow(sqeNumber, 2);
    }

    function squareRoot(num) {
        return Math.sqrt(num, 2);
    }

    function sum(nums) {
        var cumulator = 0;
        for (var i = 0; i < nums.length; i++) {
            cumulator += nums[i];
        }
        return cumulator;
    }

    function squareAll(sqAll) {
        var count = 0;
        var sqArray = [];

        for (var i = 0; i < sqAll.length; i++) {
            count = square(sqAll[i]);
            sqArray[i] = count;
        }
        return sqArray;
    }

    function sumOfSquares(nums) {
        var squareNum = sum(squareAll(nums));
        return squareNum;
    }

    function bildVector(value) {
        var vector = value.slice(0);

        vector.valueOf = function() {
            return this.slice(0);
        };

        vector.toString = function() {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(value) {
        var summedSquares = sumOfSquares(value);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxMagnitude, vectors) {

        var vectorMagnitude = [];

        for (var i = 0; i < vectors.length; i++) {
            if (magnitude(vectors[i]) < maxMagnitude) {
                vectorMagnitude[vectorMagnitude.length] = vectors[i];

            }
        }
        return vectorMagnitude;
    }
    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum,
        squareAll: squareAll,
        sumOfSquares: sumOfSquares,
        buildVector: bildVector,
        magnitude: magnitude,
        getVectorsShorterThan: getVectorsShorterThan

    };
})();
