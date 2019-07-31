document.addEventListener("DOMContentLoaded", function() {

    //   nav toggle class
      $(".menu").click(function() {
        $(".menu").toggleClass("active");
        $(".menu-bar").toggleClass("active");
        $(".menu-mobile-list li").toggleClass("active");
      });
    
      //  Setting for SLICK.JS
      $(".carousel").attr("dir", "rtl");
    
      $(".responsive").slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
    
        responsive: [
          {
            breakpoint: 1564,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1364,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 964,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2
            }
          }
        ]
      });
    
      //Time for vanilla JS ES6 standard
      //Small carousele by switching content
      const dots = document.querySelectorAll(".dot");
      const dotContentSliders = [... document.querySelectorAll(".slider-box")];
      console.log(dotContentSliders.length);
    
      const nextButton = document.querySelector('.arrow-desktop-right');
      const previousButton = document.querySelector('.arrow-desktop-left');
    
      function selectItem(e) {
        removeBackground(e);
        removeShow(e);
        const dotContentSlider = document.getElementById(`${this.id}-content`);
        this.classList.add("active");
        dotContentSlider.classList.add("show");
      }
    
      function removeBackground() {
        dots.forEach(dot => dot.classList.remove("active"));
      }
    
      function removeShow() {
        dotContentSliders.forEach(slider => slider.classList.remove("show"));
      }
    
      // FUNCTIONS FOR SMALL CAROUSELE ON 1600px++ WIDTH FOR NEXT, PREVIOUS ARROW
      function nextSlide () {
        let currentActiveContentIndex = dotContentSliders.findIndex(slider => slider.classList.contains('show'));
        let nextActiveContentIndex = currentActiveContentIndex + 1;
        if (nextActiveContentIndex === dotContentSliders.length){
          nextActiveContentIndex = 0;
        }
        dotContentSliders.forEach(slider => slider.classList.remove("show"));
        dotContentSliders[nextActiveContentIndex].classList.add('show');
    
      }
    
      function previousSlide () {
        let currentActiveContentIndex = dotContentSliders.findIndex(slider => slider.classList.contains('show'));
        let nextActiveContentIndex = currentActiveContentIndex - 1;
        if (nextActiveContentIndex < 0){
          nextActiveContentIndex = dotContentSliders.length -1;
        }
        dotContentSliders.forEach(slider => slider.classList.remove("show"));
        dotContentSliders[nextActiveContentIndex].classList.add('show');
    
      }
    
      dots.forEach(dot => dot.addEventListener("click", selectItem));
      nextButton.addEventListener('click', nextSlide);
      previousButton.addEventListener('click', previousSlide);
    
    
      // MAIN TOP TEXT-CONTENT SWITCH
      const textMatch = window.matchMedia("(max-width:1000px");
    
      const mainHeader = document.querySelector('.text-container h1');
      if (textMatch.matches) { mainHeader.innerHTML = `We’re BMB.<br> Ad man with<br> a genuine respect for everyday humans.`
    
      }
    
    });
    