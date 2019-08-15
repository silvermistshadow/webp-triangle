export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "Not a triangle. The sum of the lengths of any two sides must be greater than the third side.";
  }
  else if ((this.side1 == this.side2) && (this.side2 == this.side3)) {
    return "Equilateral";
  }
  else if (((this.side1 == this.side2) && (this.side2 != this.side3)) || ((this.side2 == this.side3) && (this.side1 != this.side2)) || ((this.side1 == this.side3) && (this.side2 != this.side3))) {
    return "Isosceles";
  }
  else if ((this.side1 != this.side2) && (this.side2 != this.side3) && (this.side1 != this.side3)) {
    return "Scalene";
  }
};

