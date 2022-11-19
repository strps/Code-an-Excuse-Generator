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

  var excuseText = "";
  excuseText += who[Math.floor(Math.random() * 4)] + " ";
  excuseText += action[Math.floor(Math.random() * 4)] + " ";
  excuseText += what[Math.floor(Math.random() * 3)] + " ";
  excuseText += when[Math.floor(Math.random() * 5)];

  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseText;
};
