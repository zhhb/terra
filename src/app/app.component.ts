import { Component } from '@angular/core';
import '../../public/css/styles.less';

interface LabelledValue {
    norequired?: string,
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (src, sub) {
    let search = src.search(sub);
    if (search > -1) {
        return true;
    }
    return false;
}

console.log('interface_func', mySearch('我们', '我'));

interface IndexedArray {
    [index: number]: string;
}

let myArr: IndexedArray = ['a', 'b'];
let myStr: string = myArr[0];
console.log('interface_index_type_array', myArr, myStr);

interface IClock {
    currentDate: Date;
    setTime(d: Date): Date;
}

class Clock implements IClock {
    currentDate: Date;
    setTime(d: Date) {
        return this.currentDate = d;
    }
    constructor(h: number, m: number) {
        return this;
    }
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17).tick();
let analog = createClock(AnalogClock, 7, 32).tick();

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLenght: number;
}

let square = <Square>{};
square.color = 'red';
square.sideLenght = 10;
console.log('Extending Interfaces', square);

interface PenStroke {
    penWidth: number;
}

interface PenSquare extends Square, PenStroke { }

let penSquare = <PenSquare>{};
penSquare.color = 'red';
penSquare.sideLenght = 10;
penSquare.penWidth = 0.5;
console.log('Extending Interfaces', penSquare, typeof penSquare, penSquare.constructor.name);

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {

    }
    counter.interval = 10;
    counter.reset = function () {

    }
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 20;
console.log(c, c.constructor.name);

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter('zhhb');
console.log(greeter.greet());

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log(`I'm dog ${this.name}`);
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log(`I'm horse ${this.name}`);
        super.move(distanceInMeters);
    }
}

let sam = new Dog('Sam');
let tom: Animal = new Horse('tom');
sam.move();
tom.move(30);
console.log(sam.name);

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        Grid.origin.x++;
        Grid.origin.y++;
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        console.log(Grid.origin);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { }
