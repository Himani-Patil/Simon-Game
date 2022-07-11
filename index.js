/* VARIABLES ******************************************* */
var buttons=["red","green","yellow","blue"];
var userClickedPattern=[];
var gamePattern=[];
var level=0;

/* START BUTTON CLICK DETECTION ************************ */
$(".start").click(function(){
    $(".start").hide();
    $(".sqr").css("margin-top","5%");
    nextSequence();
    started = true;
});

/* GENERATES NEW VALUE AND ADDS IT TO SEQUENCE ********* */
function nextSequence()
{
  userClickedPattern=[];
  level++;
  $("h1").text("Level "+level);
  var num = Math.floor( Math.random()*4 );
  var clickedbtn= buttons[num];
  gamePattern.push(clickedbtn);
  glow(clickedbtn);
  playsound(clickedbtn);
}

/* CHECKS USER INPUT SEQUENCE FRON 0TH INDEX *********** */
function checkSequence(curr_index)
{
  if(gamePattern[curr_index]===userClickedPattern[curr_index])
  {
    playsound(userClickedPattern[curr_index]);
    if(userClickedPattern.length===gamePattern.length)
    {
      setTimeout(function(){ nextSequence(); },1000);
    }
  }
  else
  {
    playsound("wrong");
    userClickedPattern=[];
    gamePattern=[];
    level=0;
    $(".start").show();
    $(".sqr").css("margin-top","0%");
    $("h1").text("Game Over");
    $(".start").attr("value","Play Again");
  }
}

/* DETECTS COLOR BUTTON CLICK *************************** */
$(".btn").click(function(){
  var clicked_color= $(this).attr("id");
  glow(clicked_color);
  userClickedPattern.push(clicked_color);
  checkSequence(userClickedPattern.length-1);
});

/* PLAY SOUND FOR VARIOUS COLORS AND WRONG INPUT ******* */
function playsound(clickedbtn)
{
  var sound = new Audio("../sounds/"+clickedbtn+".mp3");
  sound.play();
}

/* GLOWS THE COLOR OF CLICKED BUTTON ******************* */
function glow(clickedbtn)
{
  if(clickedbtn==="red")
  {
    $(".sqr").addClass("glowr");
    $("#red").addClass("class_opacity");
    setTimeout(function(){$(".sqr").removeClass("glowr");},500);
    setTimeout(function(){$("#red").removeClass("class_opacity");},500);
  }
  else if(clickedbtn==="green")
  {
    $(".sqr").addClass("glowg");
    $("#green").addClass("class_opacity");
    setTimeout(function(){$(".sqr").removeClass("glowg");},500);
    setTimeout(function(){$("#green").removeClass("class_opacity");},500);
  }
  else if(clickedbtn==="yellow")
  {
    $(".sqr").addClass("glowy");
    $("#yellow").addClass("class_opacity");
    setTimeout(function(){$(".sqr").removeClass("glowy");},500);
    setTimeout(function(){$("#yellow").removeClass("class_opacity");},500);
  }
  else 
  {
    $(".sqr").addClass("glowb");
    $("#blue").addClass("class_opacity");
    setTimeout(function(){$(".sqr").removeClass("glowb");},500);
    setTimeout(function(){$("#blue").removeClass("class_opacity");},500);
  }
}