
function one() {
    let result = arguments['0'];

    for (let i = 1; i < arguments.length; i += 1) {
        result += arguments[i];
    }

    return result;
}

function one1(...listOfArgs) {
    return listOfArgs.reduce((sum, item) => {
        return sum + item;
    });
}

console.log(
    one1(5, 3, 5, 6, 7, 5, 12, 3)
);

function stringJoin(separator, ...listOfStr) {
    return listOfStr.join(separator);
}

var two = function empty(a, b, c) {
    const tratata = 4;
}

let three = function() {

}

const four = function() {

}

const five = () => {

}

const six = new Function('a, b, c', 'return a + b + c');

five();

const age = (() => {
    return 5 + 10;
})();

(function(a, b, c) {
    console.log(5, a, b, c);
})(1, 2, 3);

(() => {
    // console.log(234)
})();
