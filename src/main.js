import { Triangle } from './triangle.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
$(document).ready(function(){
  $("#triangle-form").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var newTriangle = new Triangle(side1, side2, side3);
    var output = newTriangle.checkType();
    $("#output").text(output);
  });


});
