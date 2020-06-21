var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var inner = this.innerHTML;
  sound(inner);
  animation(inner);
});
}

document.addEventListener("keydown", function(event) {
  sound(event.key);
  animation(event.key);
});

function sound(k) {

  switch (k) {
    case "w":
      var c= new Audio("sounds/tom-1.mp3");
      c.play();
      break;

    case "a":
      var c = new Audio("sounds/tom-2.mp3");
      c.play();
      break;

    case "s":
      var c = new Audio("sounds/tom-3.mp3");
      c.play();
      break;

    case "d":
      var c = new Audio("sounds/tom-4.mp3");
      c.play();
      break;

    case "j":
      var c = new Audio("sounds/snare.mp3");
      c.play();
      break;

    case "k":
      var c = new Audio("sounds/crash.mp3");
      c.play();
      break;

    case "l":
      var c = new Audio("sounds/kick-bass.mp3");
      c.play();
      break;

      default:
  }
}

function animation(h){
  var active = document.querySelector("."+h);
  active.classList.add("pressed");

  setTimeout(function(){active.classList.remove("pressed");},100);
}
