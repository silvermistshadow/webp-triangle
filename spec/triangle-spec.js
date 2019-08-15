import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });


  it('should correctly determine whether three sides are not a triangle', function() {
    var triangle = new Triangle(12,3,3)
    console.log(triangle);
    expect(triangle.checkType()).toEqual("Not a triangle. The sum of the lengths of any two sides must be greater than the third side.");
  });
  
  it('should correctly determine the type of triangle', function() {
    var equiTriangle = new Triangle(4,4,4);
    var isoTriangle = new Triangle(4,4,5);
    var scaleTriangle = new Triangle(4,5,6);
    expect(equiTriangle.checkType()).toEqual("Equilateral");
    expect(isoTriangle.checkType()).toEqual("Isosceles");
    expect(scaleTriangle.checkType()).toEqual("Scalene");
  });
});