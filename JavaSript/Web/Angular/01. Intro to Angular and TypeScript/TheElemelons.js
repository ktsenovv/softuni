var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        return _this;
    }
    Object.defineProperty(Watermelon.prototype, "elemelonElementIndex", {
        get: function () {
            return this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elemelonElementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        return _this;
    }
    Object.defineProperty(Firemelon.prototype, "elemelonElementIndex", {
        get: function () {
            return this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        return "Element: Fire\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elemelonElementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        return _this;
    }
    Object.defineProperty(Earthmelon.prototype, "elemelonElementIndex", {
        get: function () {
            return this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elemelonElementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        return _this;
    }
    Object.defineProperty(Airmelon.prototype, "elemelonElementIndex", {
        get: function () {
            return this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Air\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elemelonElementIndex);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = ["Water", "Fire", "Earth", "Air"];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var e = this.element.shift();
        this.element.push(e);
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.element[0], "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Melolemonmelon;
}(Firemelon));
// Test normal functionality
console.log('- Watermelon -');
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Test morph functionality
console.log('\n- Watermelon -');
var anymelon = new Melolemonmelon(12.5, "Kingsize");
console.log(anymelon.toString());
anymelon.morph(); // Change Melon
console.log('\n- Firemelon -');
console.log(anymelon.toString());
anymelon.morph(); // Change Melon
console.log('\n- Earthmelon -');
console.log(anymelon.toString());
anymelon.morph(); // Change Melon
console.log('\n- Airmelon -');
console.log(anymelon.toString());
anymelon.morph(); // Change Melon
console.log('\n- Watermelon -');
console.log(anymelon.toString());
