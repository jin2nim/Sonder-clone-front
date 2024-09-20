document.addEventListener('DOMContentLoaded', function() {
  // m-slide 초기화
  var mSlide = new Swiper(".m-slide", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".m-pager",
      clickable: true,
    },
  });

  
  var tabSlide = new Swiper(".tab-slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".tab-pager",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var storySlide = new Swiper(".story-slide", {
    slidesPerView: 1.6,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".story-pager",
      clickable: true,
    },
    navigation: {
      nextEl: ".story-next",
      prevEl: ".story-prev",
    },
    loop: true,
  });

  
  var sonderSlide = new Swiper(".sonder-slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".sonder-pager",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // add -- header
  fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("header").innerHTML = data;
        });

  // add -- footer
  fetch("footer.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("footer").innerHTML = data;
        });

});
