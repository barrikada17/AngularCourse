export class Point {

    //Create contructor with optional attibutes
    constructor(private _x?: number, private y?: number) {
    }

    public draw() {
        console.log('X: ' + this._x + ', Y: ' + this.y)
    }

    /* Getter y Setter no compile
    get x(){
        return this._x;
    }
    set x(value){
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }
    */
}