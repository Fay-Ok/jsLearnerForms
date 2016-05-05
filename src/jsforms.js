(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

        return message + '!';

    }

    function square(sqeNumber) {
        return Math.pow(sqeNumber, 2);
    }

    function squareRoot(num) {
        return Math.sqrt(num, 2);
    }

    function add(number1, number2) {
        return number1 + number2;
    }

    function sum(nums) {
        var finalSum = 0;
        nums.forEach(function (value) {
            
            finalSum = add(finalSum, value);
        });


        return finalSum;
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

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
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
