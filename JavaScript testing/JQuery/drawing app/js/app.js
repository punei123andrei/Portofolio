//Problem: no interaction is happening
//Solution make colors selecteble and draw with the color  also make button selectable

var color = $(".selected").css("background");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//Change the class selected from elemnts

//When click on control list items
$(".controls").on("click", "li", function(){
  
  //Deselect Sibling elements
  $(this).siblings().removeClass("selected");
  

      //Select clicked color
  $(this).addClass("selected")
      //cache current color here
color = $(this).css("background-color");
});

//When button is pressed 
    //show color select or hide the color select

$("#revealColorSelect").click(function(){
  changeColor();
$("#colorSelect").toggle();
});

//update new color
function changeColor(){
   var r = $("#red").val();
    var g = $("#green").val();
     var b = $("#blue").val();
   $("#newColor").css('background', 'rgb(' + r + ',' + g + ',' + b + ')' );
}
    //on the color select make sliders as a range of color from 0 to 255
$("input[type=range]").change(changeColor);

    //when add new color is pressed append the color to the ul
    $("#addNewColor").click(function(){
     //select the new color
     var $newColor = $("<li></li>");
     $newColor.css("background-color", $("#newColor").css('background-color'));
     $(".controls ul").append($newColor);
     $newColor.click();
    });
      

      //on mouse events draw lines with the selected colors

      $canvas.mousedown(function(e){
        lastEvent = e;
        mouseDown = true;
      }).mousemove(function(e){
        
        if(mouseDown){
        context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
      context.stroke();
      lastEvent = e;
      
       }
      }).mouseup(function(){
        mouseDown = false;
      }).mouseleave(function(){
        $canvas.mouseup();
      });

      