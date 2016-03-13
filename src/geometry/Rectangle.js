export default class Rectangle {

    constructor({
        x, y, width, height
    } = {}) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    isInside(x, y) {
        return (x >= this._x) && (x < this._x + this._width) &&
            (y >= this._y) && (y < this._y + this._height);
    }

    intersect(rect) {
        return !((this._x + this._width - 1 < rect._x) ||
                 (this._x > rect._x + rect._width - 1)  ||
                 (this._y + this._height - 1 < rect._y) ||
                 (this._y > rect._y + rect._height - 1));
    }

    clone() {
        return new Rectangle({
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height
        });
    }
}