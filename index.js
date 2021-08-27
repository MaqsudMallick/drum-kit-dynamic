// alert("Connected");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //var key= document.querySelectorAll(".drum")[i].textContent;
    var key = this.textContent;
    makenoise(key);
  });
}

document.addEventListener("keydown", function (event) {
  // console.log(event.code);
  makenoise(event.key);
});

function makenoise(key) {
  var bum;
  //key choice
  document.querySelector("." + key).classList.add("used");
  if (key == "w") bum = new Audio("sounds/tom-1.mp3");
  else if (key == "a") bum = new Audio("sounds/tom-2.mp3");
  else if (key == "s") bum = new Audio("sounds/tom-3.mp3");
  else if (key == "d") bum = new Audio("sounds/tom-4.mp3");
  else if (key == "j") bum = new Audio("sounds/snare.mp3");
  else if (key == "k") bum = new Audio("sounds/kick-bass.mp3");
  else if (key == "l") bum = new Audio("sounds/crash.mp3");
  //declare
  bum.play();
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("used");
  }, 500);
}
