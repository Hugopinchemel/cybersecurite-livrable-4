document.querySelectorAll(".page4, .page3").forEach(function (div) {
  div.style.display = "none";
});

document.getElementById("suivant").addEventListener("click", function () {
  document.querySelectorAll(".page1, .page2").forEach(function (div) {
    div.style.display = "none";
  });
  document.querySelectorAll(".page3, .page4").forEach(function (div) {
    div.style.display = "block";
  });
});

document.getElementById("precedent").addEventListener("click", function () {
  document.querySelectorAll(".page3, .page4").forEach(function (div) {
    div.style.display = "none";
  });
  document.querySelectorAll(".page1, .page2").forEach(function (div) {
    div.style.display = "block";
  });
});
