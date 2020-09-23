//Types
/*
let  a : number;
let  b : boolean;
let  c : string;
let  d : any;
let  e : number[] = [1 , 2, 3];
let  f : any[] = [1, true, 'a', false];

const ColorRed =0;
const ColorGreen =1;
const ColorBlue =2;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgoundColor = Color.Red;
*/

//Types Assertions
/*
let message = 'abc';
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/

//Arrow Functions
/*
let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);
*/

//Interfaces & Classes & Objects & Constructors

class Point {

    //Create contructor with optional attibutes
    constructor(private _x?: number, private y?: number) {
    }

    public draw() {
        console.log('X: ' + this._x + ', Y: ' + this.y)
    }
    get x(){
        return this._x;
    }
    set x(value){
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();

