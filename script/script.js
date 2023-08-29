var swiper = new Swiper(".mySwiper", {
  slidesPerView: getInitialSlidesPerView(), 
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function getInitialSlidesPerView() {
  if (window.innerWidth > 768) {
    return 3; // Laptop width
  } else {
    return 1; // Mobile width
  }
}

window.addEventListener("resize", function () {
  swiper.params.slidesPerView = getUpdatedSlidesPerView();
  swiper.update();
});

function getUpdatedSlidesPerView() {
  if (window.innerWidth > 768) {
    return 3; // Laptop width
  } else {
    return 1; // Mobile width
  }
}
