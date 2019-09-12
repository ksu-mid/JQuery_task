1.-//-

2. 
$("strong").css("color", "green");
$("em").addClass("selected");
$("div.row mark").addClass("selected");
$("a").css("text-decoration", "none");
console.log($(".container").children(":contains(Задания)"));
$("strong").toggleClass("some");
$(".row").eq(1).removeClass("row");
console.log($("a").eq(1).css("color"));

3.
$("button").click(function(){
  $("body").css("background-color", "red");
});

4.
$("body").keydown(function(event){
  if(event.which == '37'){
    $(".el").animate({left: "-=10"}, 1000);
  };
  if (event.which == '39'){
   $(".el").animate({left: "+=10"}, 1000);
  };
});

5.
$(document).mousemove(function(e){
    var x = e.pageX; 
    var y = e.pageY; 
    console.log("X: " + x + " Y: " + y); 
});

6. 
$("strong").eq(0).hover(
  function(){
    $(this).css("color", "blue").animate({fontSize: "200%"}, 1000);
  },
  function(){
    $(this).css("color", "black").animate({fontSize: "100%"}, 1000);
  }
);
$("strong").eq(1).hover(
  function(){
    $(this).css("color", "blue").animate({fontSize: "200%"}, 1000);
  },
  function(){
    $(this).css("color", "black").animate({fontSize: "100%"}, 1000);
  }
);
$("em").hover(
  function(){
   $(this).css("color", "blue").animate({fontSize: "200%"}, 1000);
  },
  function(){
    $(this).css("color", "black").animate({fontSize: "100%"}, 1000);
  }
);

7. 
$("#box").hover(
  function(){
    $(".some").css('transform', 'rotate(90deg)');
  },
  function(){
    $(".some").css('transform', '');
  }
);

8.
$(document).click(function(e){
    var x = e.pageX; 
    var y = e.pageY; 
    $("div").offset({top:y, left:x});  
});

