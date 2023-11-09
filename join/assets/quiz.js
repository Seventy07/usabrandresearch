$(document).ready(function () {

  // Button from news site to amazon
  $(".news2amazon").click(function () {
    $("#content1").remove(),
        $("#content2").fadeIn(),
        setTimeout(function () {
          $("#redirecting").fadeIn(1e3);
        }, 3e3),
        setTimeout(function () {
          $("#content2").fadeOut("slow", function () {
            $("#content2").remove(),
              "undefined" != typeof roulette_ini
              ?
              rouletteRoot._init()
              :
              "undefined" != typeof box_ini && boxRoot._init(),
              $("#content3").fadeIn();
        });
      }, 1000);
  });




  // ORIGINAL CODE BELOW //
  // Button 1 - Question 1
  $(".bq1").click(function () {
    $("#q1").fadeOut("slow", function () {
      $("#q2").fadeIn("slow");
    });
  }),

  // Button 2 - Question 2
  $(".bq2").click(function () {
    $("#q2").fadeOut("slow", function () {
      $("#q3").fadeIn("slow");
    });
  }),

  // Button 3 - Question 3
  $(".bq3").click(function () {
    $("#q3").fadeOut("slow", function () {
      $(".questions").remove();
      $([document.documentElement, document.body]).animate(
        {
          /*scrollTop: $(".header").offset().top,*/
        },
        500
      );
    }),

    // Cycle Content After Quiz
    $("#content3").fadeOut("slow", function () {
      $("#content3").remove(),
        $("#content4").fadeIn(),
        setTimeout(function () {
          $("#result1").fadeIn(1e3);
        }, 3e3),
        setTimeout(function () {
          $("#result2").fadeIn(1e3);
        }, 4100),
        setTimeout(function () {
          $("#result3").fadeIn(1e3);
        }, 6e3);
        setTimeout(function () {
          $("#content4").fadeOut("slow", function () {
            $("#content4").remove(),
              "undefined" != typeof roulette_ini
              ?
              rouletteRoot._init()
              :
              "undefined" != typeof box_ini && boxRoot._init(),
              $("#content5").fadeIn();
        });
      }, 7100);
    });
  });
});