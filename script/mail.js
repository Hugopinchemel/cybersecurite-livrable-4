let context = null;

document
  .querySelectorAll(".first, .second, .third, .fourth, .fifth")
  .forEach(function (div) {
    div.style.display = "none";
  });

document.querySelectorAll(".mail").forEach(function (div) {
  div.addEventListener("click", function () {
    context = div.getAttribute("data-context");
    console.log(context);

    document.querySelectorAll(".mail").forEach(function (mailDiv) {
      mailDiv.style.display = "none";
    });
  });
});

document.querySelectorAll(".mail").forEach(function (div) {
  div.addEventListener("click", function () {
    switch (context) {
      case "mail1":
        document.querySelectorAll(".first").forEach(function (mailHUD) {
          mailHUD.style.display = "block";
        });
        break;
      case "mail2":
        document.querySelectorAll(".second").forEach(function (mailHUD) {
          mailHUD.style.display = "block";
        });
        break;
      case "mail3":
        document.querySelectorAll(".third").forEach(function (mailHUD) {
          mailHUD.style.display = "block";
        });
        break;
      case "mail4":
        document.queryAllSelector(".fourth").forEach(function (mailHUD) {
          mailHUD.style.display = "block";
        });
        break;
      case "mail5":
        document.querySelectorAll(".fifth").forEach(function (mailHUD) {
          mailHUD.style.display = "block";
        });
        break;
      default:
        console.log("Context not recognized");
        break;
    }
  });
});

document.querySelectorAll(".good").forEach(function (div) {
  div.addEventListener("click", function () {
    switch (context) {
      case "mail1":
        document.querySelectorAll(".mail").forEach(function (mailDiv) {
          mailDiv.style.display = "block";
        });
        document.querySelectorAll(".first").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        break;
      case "mail2":
        document.querySelectorAll(".mail").forEach(function (mailDiv) {
          mailDiv.style.display = "block";
        });
        document.querySelectorAll(".second").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        break;
      case "mail3":
        document.querySelectorAll(".mail").forEach(function (mailDiv) {
          mailDiv.style.display = "block";
        });
        document.querySelectorAll(".third").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        break;
      case "mail4":
        document.querySelectorAll(".mail").forEach(function (mailDiv) {
          mailDiv.style.display = "block";
        });
        document.querySelectorAll(".fourth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        break;
      case "mail5":
        document.querySelectorAll(".mail").forEach(function (mailDiv) {
          mailDiv.style.display = "block";
        });
        document.querySelectorAll(".fifth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        break;
      default:
        console.log("Context not recognized");
        break;
    }
  });
});
