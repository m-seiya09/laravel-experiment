
const fruits: string[] = ['apple', 'banana', 'grape'];

const book: [string, number, boolean] = ['business', 1500, false];

enum coffeeSize {
    SHORT  = 'SHORT',
    TALL   = 'TALL',
    GRANDE = 'GRANDE',
    VENTI  = 'VENTI'
}

const coffee = {
    hot: true,
    size: coffeeSize.TALL
}

let unionType: number | string = 10;
unionType = 'aaa';


function add(num1: number, num2: number): number
{
    return num1 + num2
}

function sayHello()
{
    console.log('hello');
}


let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;

if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function error(message: string): never
{
    throw new Error(message);
}