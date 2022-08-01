function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu')
    if (BarraMenuAberto.style.width == '0px'){
        BarraMenuAberto.style.width = '180px'
    }else{
        BarraMenuAberto.style.width = '0px'
    }
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
//  slidesPerGroup: 3, Colocar 3 grupos//
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    //loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    //Colocado modo dynamico no slider
    dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
  });
