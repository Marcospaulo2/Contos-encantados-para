$(document).ready(function () {
  $(".carregamento-page").fadeOut();

  $("#kenny-nogueira").mouseenter(function () {
    $("#overlap-kenny-nogueira").show();
  });
  $("#kenny-nogueira").mouseout(function () {
    $("#overlap-kenny-nogueira").hide();
  });
  $("#roberto-navegantes").mouseenter(function () {
    $("#overlap-roberto-navegantes").show();
  });
  $("#roberto-navegantes").mouseout(function () {
    $("#overlap-roberto-navegantes").hide();
  });

  setInterval(() => {
    $(".success").fadeOut();
    $(".danger").fadeOut();
  }, 3000);

  $(".imgs-galeria").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".img-galeria img").on("click", function () {
    image = $(this).attr("src");
    $(".container-single-container").fadeIn();
    $("body").css("overflow", "hidden");
    $(".img-single").css("background-image", "url(" + image + ")");
    $;
    //    style="background-image: url(img/galeria/FOTOS-2.png);"
  });

  $(".btn-close-img").on("click", function () {
    $(".container-single-container").fadeOut();
    $("body").css("overflow", "auto");
  });

  $(".celular").mask("(00) 00000-0000");
});

$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

// $(function () {
//   $("#button").click(function () {
//     $("#button").addClass("onclic", 250, validate);
//   });

//   function validate() {
//     setTimeout(function () {
//       $("#button").removeClass("onclic");
//       $("#button").addClass("validate", 450, callback);
//     }, 2250);
//   }
//   function callback() {
//     setTimeout(function () {
//       $("#button").removeClass("validate");
//     }, 1250);
//   }
// })

let menu = document.querySelector("#menu");
let item = document.querySelector("ul li a");

function Indicator(e) {
  menu.style.top = e.offseTop + "px";
  menu.style.width = e.offsetwidth + "px";
}

item.forEach((link) => {
  link.addEventListenner("mouseove", (e) => {
    Indicator(e.target);
  });
});
