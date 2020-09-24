"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    //Create contructor with optional attibutes
    function Point(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
