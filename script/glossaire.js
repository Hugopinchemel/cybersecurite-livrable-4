document
  .querySelectorAll(" .page3, .page4, .page5, .page6, .page7, .page8")
  .forEach(function (div) {
    div.style.display = "none";
  });

let currentPage = 1;

document.getElementById("suivant").addEventListener("click", function () {
  if (currentPage === 1) {
    document.querySelectorAll(".page1, .page2").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page3, .page4").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 2;
  } else if (currentPage === 2) {
    document.querySelectorAll(".page3, .page4").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page5, .page6").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 3;
  } else if (currentPage === 3) {
    document.querySelectorAll(".page5, .page6").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page7, .page8").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 4;
  }
});

document.getElementById("precedent").addEventListener("click", function () {
  if (currentPage === 2) {
    document.querySelectorAll(".page3, .page4").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page1, .page2").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 1;
  } else if (currentPage === 3) {
    document.querySelectorAll(".page5, .page6").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page3, .page4").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 2;
  } else if (currentPage === 4) {
    document.querySelectorAll(".page7, .page8").forEach(function (div) {
      div.style.display = "none";
    });
    document.querySelectorAll(".page5, .page6").forEach(function (div) {
      div.style.display = "block";
    });
    currentPage = 3;
  }
});
