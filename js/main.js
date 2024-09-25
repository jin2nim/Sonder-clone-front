document.addEventListener('DOMContentLoaded', function() {
  
  // loading-bar
  const loader = document.querySelector('.loading');
  loader.style.display = "flex";

  window.addEventListener('load', function(){
    loader.style.display = 'none';
  });
  
  
  
  // m-slide
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

  // city-select
  const cityText = document.querySelector('.city-text');
  const cityOptions = document.querySelectorAll('.city-option');
  const cityOptionContainer = document.querySelector('.city-option-container');

  cityOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedCity = option.querySelector('p').innerText;
      const selectedIcon = option.querySelector('span').outerHTML;

      cityText.innerHTML = `
        ${selectedIcon}
        ${selectedCity}
      `;
      
      cityOptionContainer.classList.remove('active');
    });
  });

  // city-text : add click event
  cityText.addEventListener('click', (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    cityOptionContainer.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    cityOptionContainer.classList.remove('active');
  });

  // DatePicker
  // flatpickr
  function initializeFlatpickr(showMonthsCount) {
    flatpickr("#datepicker", {
      mode: "range", 
      dateFormat: "Y-m-d", 
      showMonths: showMonthsCount,
      minDate: "today",
      onChange: function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
          const checkinDate = selectedDates[0];
          const checkoutDate = selectedDates[1];
          
          document.getElementById('checkin-input').value = checkinDate.toLocaleDateString();
          document.getElementById('checkout-input').value = checkoutDate.toLocaleDateString();
        }
      }
    });
  }
  
  function setShowMonths() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      return 1; 
    } else {
      return 2; 
    }
  }
  
  initializeFlatpickr(setShowMonths());
  

  window.addEventListener('resize', function() {
    document.querySelector("#datepicker")._flatpickr.destroy(); // 기존 flatpickr 인스턴스 삭제
    initializeFlatpickr(setShowMonths()); // 다시 초기화
  });

  // guests
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  const countGuestInput = document.getElementById("guests-counter");

  increaseButton.addEventListener("click", function(){
    countGuestInput.stepUp();
  });

  decreaseButton.addEventListener("click", function(){
    countGuestInput.stepDown();
  });


  // tabSlide
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

  // gallery-toggle
  document.getElementById('toggleGallery').addEventListener('click', function() {
    document.getElementById('hiddenGallery').style.display="grid";
    this.style.display="none";
  })

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
