type SimpleType = string | number | boolean | undefined | null;

type DifficultType = object | string[] | (() => string);

type Unknown = unknown; // используется для утилит. Буквально: я не знаю какой будет тип. Он точно будет какой-то.

type Void = void; // Ничего или нет никакого действия. Используется в функциях, когда функция ничего не возвращает.

type Any = any; // Выключи типизацию для этих данных. Буквально: я могу содержать любой тип. ЗЛО!

type User = {
    name: string;
    age: number;
    isMan: boolean;
    likeColors: string[];
    likeTrump?: boolean;
};

interface User2 {
    name: string;
    age: number;
    isMan: boolean;
    likeColors: string[];
    likeTrump?: boolean;
}

const IvanIvanov: User = {
    name: 'Ivan',
    age: 45,
    isMan: true,
    likeColors: ['red'],
};

let gogo: string = 'srt';

var ghj: number = 90;

function sum(val1: number, val2: number): number {
    return val1 + val2;
}

const sum2 = function (val1: number, val2: number): number {
    return val1 + val2;
};

const sum3 = (val1: number, val2: number): number => {
    return val1 + val2;
};

interface SumFunc {
    (val1: number, val2: number): number;
}

type SumFunc2 = (val1: number, val2: number) => number;

const sum4: SumFunc2 = (val1, val2) => val1 + val2;

const showAlert = (message: string): void => {
    alert(message);
};

const users: Array<string> = ['user1', 'user2'];

const fullUsers: Array<User> = [
    {
        name: 'Ivan',
        age: 45,
        isMan: true,
        likeColors: ['red'],
    },
];

const fullUsers2: User[] = [];

type Coordinats = [number, number];

const startPoint: Coordinats = [12, 45];

const START: Coordinats = [12, 45];
const END: Coordinats = [66, 78];

const way: Coordinats[] = [
    START,
    [23, 4],
    END,
];

/**
 * 1. Разобрать дженерики
 * 2. Утилитарные типы
 * 3. Enums
 * 4. Литералы
 * 5. JSX
 * 6. Перегрузки функций
 */
