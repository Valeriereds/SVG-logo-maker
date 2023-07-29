const { Triangle, Square, Circle } = require("./generateShapes");

describe ('shapes', () => {
    describe('Triangle', () => {
        it('should render triangle with correct bgColor', () => {
            const shape = new Triangle();
            shape.setColor("yellow");
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`)
        })
    })
    describe('Square', () => {
        it('should render square with correct bgColor', () => {
            const shape = new Square();
            shape.setColor("purple");
            expect(shape.render()).toEqual(`<rect x="100" y="50" width="100" height="100" fill="purple"/>`)
        })
    })
    describe('Circle', () => {
        it('should render triangle with correct bgColor', () => {
            const shape = new Circle();
            shape.setColor("chartreuse")
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="chartreuse"/>`)
        })
    })
});