/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var array1 = [who, action, what, when];

  var excuseText = array1.reduce((a, c) => a + "  " + getRandom(c), "");

  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseText;
};

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
