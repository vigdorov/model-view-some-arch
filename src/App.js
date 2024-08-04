import './App.css';

// const model = {
//     val1: 0,
//     val2: 0,
// };

// const val1 = document.getElementById('val-1');
// const val2 = document.getElementById('val-2');
// const sum = document.getElementById('sum');

// val1.innerHTML = model.val1;
// val2.innerHTML = model.val2;
// sum.innerHTML = model.val1 + model.val2;

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     model.val2 += 1;

//     val1.innerHTML = model.val1;
//     val2.innerHTML = model.val2;
//     sum.innerHTML = model.val1 + model.val2;
// });

class Model {
    constructor(initial) {
        this.state = initial;

        this.subscribers = [];
    }

    setValue(value) {
        this.state = value;

        this.subscribers.forEach(listener => {
            listener();
        });
    }

    getValue() {
        return this.state;
    }

    subscribe(listener) {
        this.subscribers.push(listener);
    }
}

class View {
    constructor(id, onClick) {
        this.element = document.getElementById(id);

        if (onClick) {
            this.element.addEventListener('click', onClick);
        }
    }

    subscribe(model, mapper) {
        model.subscribe(() => {
            const data = model.getValue();
            
            this.render(mapper(data));
        });
    }

    render(data) {
        this.element.innerHTML = `
            <div>${data}</div>
        `;
    }
}

// class CalculatorPresenter {
//     constructor() {
//         const calculatorModel = new Model({
//             val1: 1,
//             val2: 5,
//         });

//         const val1View = new View('val-1');
//         const val2View = new View('val-2');
//         const sumView = new View('sum');

//         calculatorModel.subscribe(() => {
//             const newValue = calculatorModel.getValue();

//             val1View.render(newValue.val1);
//             val2View.render(newValue.val2);

//             sumView.render(newValue.val1 + newValue.val2);
//         });

//         const btn = new View('btn', () => {
//             const currentValue = calculatorModel.getValue();

//             calculatorModel.setValue({
//                 val1: currentValue.val1 + 1,
//                 val2: currentValue.val2 + 2,
//             });
//         });
//     }
// }

// new CalculatorPresenter();

const calculatorModel = new Model({
    val1: 1,
    val2: 5,
});

const val1View = new View('val-1');
const val2View = new View('val-2');
const sumView = new View('sum');

val1View.subscribe(calculatorModel, data => data.val1);
val2View.subscribe(calculatorModel, data => data.val2);
sumView.subscribe(calculatorModel, data => data.val1 + data.val2);

class Controller {
    constructor(id, onClick) {
        this.btn = document.getElementById(id);

        this.btn.addEventListener('click', onClick);
    }
}

new Controller('btn', () => {
    const currentValue = calculatorModel.getValue();

    calculatorModel.setValue({
        val1: currentValue.val1 + 1,
        val2: currentValue.val2 + 2,
    });
});
