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

import {Point} from './point'

let point = new Point(1, 2);
point.draw();