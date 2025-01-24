let context = null;

document
  .querySelectorAll(".first, .second, .third, .fourth, .fifth")
  .forEach(function (div) {
    div.style.display = "none";
  });

document.querySelectorAll(".alertproblem").forEach(function (problem) {
  problem.style.display = "none";
});

document.querySelectorAll(".alertok").forEach(function (great) {
  great.style.display = "none";
});

document.querySelectorAll(".mail").forEach(function (div) {
  const clickHandler = function () {
    context = div.getAttribute("data-context");
    console.log(context);

    document.querySelectorAll(".mail").forEach(function (mailDiv) {
      mailDiv.style.display = "none";
    });

    div.removeEventListener("click", clickHandler);
    div.style.background = "rgba(0, 0, 0, 0.5)";
    div.style.pointerEvents = "none";
  };

  div.addEventListener("click", clickHandler);
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
        console.log("coucou");
        document.querySelectorAll(".fourth").forEach(function (mailHUD) {
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
        document.querySelectorAll(".first").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem1").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem1").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail2":
        document.querySelectorAll(".second").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem2").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem2").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail3":
        document.querySelectorAll(".third").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".great3").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".great3").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail4":
        document.querySelectorAll(".fourth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem4").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem4").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail5":
        document.querySelectorAll(".fifth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem5").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem5").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      default:
        console.log("Context not recognized");
        break;
    }
  });
});

document.querySelectorAll(".false").forEach(function (div) {
  div.addEventListener("click", function () {
    switch (context) {
      case "mail1":
        document.querySelectorAll(".first").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".great1").forEach(function (greatDiv) {
          greatDiv.style.display = "block";
        });
        document.querySelectorAll(".great1").forEach(function (greatDiv) {
          greatDiv.addEventListener("click", function () {
            greatDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail2":
        document.querySelectorAll(".second").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".great2").forEach(function (greatDiv) {
          greatDiv.style.display = "block";
        });
        document.querySelectorAll(".great2").forEach(function (greatDiv) {
          greatDiv.addEventListener("click", function () {
            greatDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail3":
        document.querySelectorAll(".third").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem3").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem3").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail4":
        document.querySelectorAll(".fourth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".problem4").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".problem4").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      case "mail5":
        document.querySelectorAll(".fifth").forEach(function (mailHUD) {
          mailHUD.style.display = "none";
        });
        document.querySelectorAll(".great5").forEach(function (problemDiv) {
          problemDiv.style.display = "block";
        });
        document.querySelectorAll(".great5").forEach(function (problemDiv) {
          problemDiv.addEventListener("click", function () {
            problemDiv.style.display = "none";
            document.querySelectorAll(".mail").forEach(function (mailDiv) {
              mailDiv.style.display = "flex";
            });
            context = null;
            if (
              document.querySelectorAll(".mail[style*='pointer-events: none']")
                .length === 5
            ) {
              Swal.fire({
                title: "Félicitations",
                text: "Vous avez terminé ce mini-jeu !",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../desktop.html";
                }
              });
            }
          });
        });
        break;
      default:
        console.log("Context not recognized");
        break;
    }
  });
});
