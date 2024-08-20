localStorage.setItem('userName', 'ivanov');

// const x = localStorage.getItem('userName');

// console.log({x})

localStorage.removeItem('one');

localStorage.clear();

// const x = localStorage.getItem('userName');

// console.log({x})

// localStorage.setItem('userName', {foo: 'bar'});

// const x = localStorage.getItem('userName');

// console.log({x});

// [1, 'sdf', true, [1, 2, 3], {foo: 'bar'}].forEach(v => {
//     console.log(v.toString());
// });

const data = JSON.stringify({
    foo: 'bar',
    go: 1,
    sex: true,
    ko: null,
    opop: undefined,
    colors: ['red', 'blue'],
});

localStorage.setItem('data', data);

const getData = localStorage.getItem('data');

console.log(JSON.parse(getData));

function jsonParse(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return undefined;
    }
}

console.log(jsonParse('{"foo":"bar"}'))
// sessionStorage
