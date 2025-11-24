(function ($) {
  ("use strict");

  /*
|--------------------------------------------------------------------------
| Template Name: Vixan
| Author: Thememarch
| Version: 1.0.0
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
| TABLE OF CONTENTS:
|--------------------------------------------------------------------------
| 1. Preloader
| 2. Mobile Menu
| 3. Sticky Header
| 4. Dynamic Background
| 5. Slick Slider
| 6. Isotop Initialize
| 7. Modal Video
| 8. Accordian
| 9. Social Button Hover
| 10. Light Gallery
| 11. Scroll Up
| 12. Full Screen SwiperSlider
| 13. Button Hover Move  Animation
| 14. Register GSAP
| 15. Config GSAP
| 16. Cursor Moving
| 17. Hero text Animation
| 18. Text Typing Animation
| 19. Words Typing Animation
| 20. Heading Title Animation
| 21. P tag text Animation
| 22. Blog section Animation
| 23. Startup Agency Animation
| 24. Stagger Text Up and Downs Animation
| 25. ShowsZoom Center Animation
| 26. ShowsLeftSide Animation
| 27. ShowsRightSide Animation
| 28. ShowsDown Animation
| 29. ShowsUp Animation
| 30. Funfact Counting Animation
| 31. Text  popup Animation


/*--------------------------------------------------------------
    Scripts initialization
--------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function () {
    $(window).trigger("scroll");
    $(window).trigger("resize");
    preloader();
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    dynamicBackground();
    swiperInit();
    isotopInit();
    modalVideo();
    hoverTab();
    lightGalleryInit();
    scrollUp();
    fullScreenSwiperSlider();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });
  /*-------------------------------------------------
      1. preloader  
 --------------------------------------------------------------*/
  function preloader() {
    $(".cs_preloader_in").fadeOut();
    $(".cs_preloader").delay(150).fadeOut("slow");
  }

  /*--------------------------------------------------------------
                                                                                                                                            2. Mobile Menu
                                                                                                                                           --------------------------------------------------------------*/
  function mainNav() {
    $(".cs_nav").append('<span class="cs_munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="cs_munu_dropdown_toggle"></span>'
    );
    $(".cs_munu_toggle").on("click", function () {
      $(this)
        .toggleClass("cs_toggle_active")
        .siblings(".cs_nav_list")
        .slideToggle();
    });
    $(".cs_munu_dropdown_toggle").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="cs_munu_dropdown_toggle_1"></span>'
    );

    $(".cs_munu_dropdown_toggle_1").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".cs_mode_btn").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("cs_dark");
    });
    // Side Nav
    $(".cs_icon_btn").on("click", function () {
      $(".cs_side_header").addClass("active");
    });
    $(".cs_close, .cs_side_header_overlay").on("click", function () {
      $(".cs_side_header").removeClass("active");
    });
    //  Menu Text Split
    $(".cs_animo_links > li > a").each(function () {
      let xxx = $(this).html().split("").join("</span><span>");
      $(this).html(`<span class="cs_animo_text"><span>${xxx}</span></span>`);
    });
  }

  /*--------------------------------------------------------------
     3. Sticky Header
--------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".cs_sticky_header");
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("cs_gescout_sticky");
      } else {
        $header.removeClass("cs_gescout_sticky");
        $header.removeClass("cs_gescout_show");
      }

      if ($header.hasClass("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("cs_gescout_show");
        } else {
          $header.removeClass("cs_gescout_show");
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
       4. Dynamic Background
-------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      var src = $(this).attr("data-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
  }

  /*--------------------------------------------------------------    
     5. Slick Slider
 --------------------------------------------------------------*/

  function swiperInit() {
    if ($.exists(".cs_slider_1")) {
      var swiper = new Swiper(".cs_slider_1", {
        loop: true,
        speed: 1000,
        autoplay: false,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_2")) {
      var swiper = new Swiper(".cs_slider_2", {
        loop: true,
        speed: 1000,
        autoplay: false,
        pagination: {
          el: ".cs_pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        },
      });
    }
    if ($.exists(".cs_slider_3")) {
      var swiper = new Swiper(".cs_slider_3", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_4")) {
      var swiper = new Swiper(".cs_slider_4", {
        loop: true,
        speed: 1000,
        autoplay: true,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_5")) {
      var swiper = new Swiper(".cs_slider_5", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_6")) {
      var swiper = new Swiper(".cs_slider_6", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_horizontal_scrolls")) {
      var swiper = new Swiper(".cs_horizontal_scrolls", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
  }
  /*-------------------------------------------------------------
       6. Isotop Initialize
 --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists(".cs_isotop_items_details")) {
      // options items_details
      var $portfolio = $(".cs_isotop_items_details").isotope({});
      // filter items on button click
      $(".cs_isotop_item_menu").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $portfolio.isotope({
          filter: filterValue,
        });
      });
    }
    if ($.exists(".cs_creative_protfolio_details")) {
      // options items_details
      var $creative_protfolio = $(".cs_creative_protfolio_details").isotope({});
      // filter items on button click
      $(".cs_creative_protfolio_menu").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $creative_protfolio.isotope({
          filter: filterValue,
        });
      });
    }
  }

  /*--------------------------------------------------------------
         7. Modal Video
 --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on("click", ".cs_video_open", function (e) {
      e.preventDefault();
      var video = $(this).attr("href");
      video = video.split("?v=")[1].trim();
      $(".cs_video_popup_container iframe").attr(
        "src",
        `https://www.youtube.com/embed/${video}`
      );
      $(".cs_video_popup").addClass("active");
    });
    $(".cs_video_popup_close, .cs_video_popup_layer").on("click", function (e) {
      $(".cs_video_popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".cs_video_popup_container iframe").attr("src", "about:blank");
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
         8. Accordian    
--------------------------------------------------------------*/

  $(".cs_accordeon .cs_accordion_body")
    .hide()
    .prev()
    .on("click", function () {
      $(this)
        .parents(".cs_accordeon")
        .find(".cs_accordion_body")
        .not(this)
        .slideUp()
        .prev()
        .removeClass("active cs_icon");
      $(this)
        .next()
        .not(":visible")
        .slideDown()
        .prev()
        .addClass("active cs_icon");
    });

  /*--------------------------------------------------------------
         9. Social Button Hover
--------------------------------------------------------------*/
  function hoverTab() {
    $(".cs_hover_tab").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  // }
  /*--------------------------------------------------------------
       10. Light Gallery
--------------------------------------------------------------*/
  function lightGalleryInit() {
    if ($.exists("#animated-thumbnails-gallery")) {
      lightGallery(document.getElementById("animated-thumbnails-gallery"), {
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
      });
    }
  }

  /*--------------------------------------------------------------
      11. Scroll Up
--------------------------------------------------------------*/
  function scrollUp() {
    $(".cs_scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }

  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".cs_scrollup").addClass("cs_scrollup_show");
    } else {
      $(".cs_scrollup").removeClass("cs_scrollup_show");
    }
  }

  /*--------------------------------------------------------------
      12. Full Screen SwiperSlider
 --------------------------------------------------------------*/
  function fullScreenSwiperSlider() {
    if ($.exists(".cs_fullscreen_swiper_slider")) {
      var swiper = new Swiper(".cs_fullscreen_swiper_slider", {
        direction: "vertical",
        mousewheel: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: ".cs_swiper_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        },
      });
    }
  }

  /*--------------------------------------------------------------
       13. Button Hover Move  Animation
 --------------------------------------------------------------*/
  if ($.exists(".cs_hero_btn")) {
    $(".cs_hero_btn").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });

    $(".cs_hero_btn").on("mouseout", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });
    // Button Move Animation
    const all_btns = gsap.utils.toArray(".cs_round_btn_wrap");
    if (all_btns.length > 0) {
      var all_btn = gsap.utils.toArray(".cs_round_btn_wrap");
    } else {
      var all_btn = gsap.utils.toArray("#cs_round_btn_wrap");
    }
    const all_btn_cirlce = gsap.utils.toArray(".cs_hero_btn");
    all_btn.forEach((btn, i) => {
      $(btn).on("mousemove", function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
      }

      function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }
      $(btn).on("mouseleave", function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });
  }

  /*--------------------------------------------------------------
        14. Register GSAP
 --------------------------------------------------------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

  /*--------------------------------------------------------------
         15. Config GSAP
 --------------------------------------------------------------*/
  gsap.config({
    nullTargetWarn: false,
  });

  const widthall = window.innerWidth;

  const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 1.2,
    normalizeScroll: widthall < 991 ? true : false,
    ignoreMobileResize: true,
    effects: widthall > 991 ? true : false,
    smoothTouch: true,
  });

  /*--------------------------------------------------------------
        16. Cursor Moving
 --------------------------------------------------------------*/

  function mousemoveHandler(e) {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".cs_cursor_1", {
        ease: "power2.out",
      }).to(
        ".cs_cursor_2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  }
  document.addEventListener("mousemove", mousemoveHandler);

  /*--------------------------------------------------------------
      17.Hero text Animation
 --------------------------------------------------------------*/

  let HomeDigital = gsap.timeline({});
  let mark = document.querySelector(".cs_hero .anim_banner_text_left");
  let eting = document.querySelector(".cs_hero .anim_banner_text_right");
  let cs_hero_style5_subtext = document.querySelector(".cs_hero .anim_subtext");

  let split_creatives = new SplitText(mark, {
    type: "chars,words",
  });
  let split_solutions = new SplitText(eting, {
    type: "chars,words",
  });
  let split_cs_hero_style5_subtext = new SplitText(cs_hero_style5_subtext, {
    type: "chars words",
  });

  HomeDigital.from(split_creatives.chars, {
    duration: 1.2,
    x: 100,
    autoAlpha: 0,
    stagger: 0.05,
  });
  HomeDigital.from(
    split_solutions.chars,
    {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.01,
    },
    "-=1"
  );

  HomeDigital.from(
    split_cs_hero_style5_subtext.words,
    {
      duration: 1,
      x: 50,
      autoAlpha: 0,
      stagger: 0.05,
    },
    "-=1"
  );

  /*--------------------------------------------------------------
            18. Text Typing Animation
--------------------------------------------------------------*/

  let textTextWrittings = gsap.utils.toArray(".anim_text_writting");
  textTextWrittings.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    let textCharsWritting = new SplitText(splitTextLine, {
      type: "chars, words",
    });
    tl.from(
      textCharsWritting.chars,
      {
        duration: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.1,
      },
      "-=1"
    );
  });

  /*--------------------------------------------------------------
        19. Words Typing Animation
 --------------------------------------------------------------*/

  let textWordWrittings = gsap.utils.toArray(".anim_word_writting");

  textWordWrittings.forEach((splitWordLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitWordLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    let textWordWritting = new SplitText(splitWordLine, {
      type: "words",
    });
    tl.from(
      textWordWritting.words,
      {
        duration: 0.7,
        x: 100,
        delay: 0.5,
        autoAlpha: 0,
        stagger: 0.2,
      },
      "-=1"
    );
  });

  /*--------------------------------------------------------------
              20. Heading Title Animation
--------------------------------------------------------------*/

  let splitTitleLines = gsap.utils.toArray(".anim_heading_title");

  splitTitleLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 20%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    const itemSplitted = new SplitText(splitTextLine, {
      type: "words, lines",
    });

    gsap.set(splitTextLine, {
      perspective: 400,
    });

    itemSplitted.split({
      type: "lines",
    });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  let btnAnims = gsap.utils.toArray(".cs_btn_anim");
  btnAnims.forEach((btnAnim) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: btnAnim,
        start: "top 90%",
        end: "bottom 20%",
        scrub: false,
        markers: false,
        toggleActions: "play push none none",
      },
    });
    gsap.set(btnAnim, {
      opacity: 0,
      x: 100,
    });

    tl.to(btnAnim, {
      duration: 1,
      delay: 0.8,
      opacity: 1,
      x: -0,
    });
  });

  /*--------------------------------------------------------------
   21. P tag text Animation
 --------------------------------------------------------------*/

  let splitTextLines = gsap.utils.toArray(".anim_text");

  splitTextLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        duration: 2,
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, {
      type: "lines",
    });
    gsap.set(splitTextLine, {
      perspective: 400,
    });
    itemSplitted.split({
      type: "lines",
    });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  /*--------------------------------------------------------------
   22. Blog section Animation
 --------------------------------------------------------------*/

  let blogAnim = gsap.utils.toArray(".anim_blog");
  gsap.set(blogAnim, {
    opacity: 0,
    y: -100,
    x: -100,
  });

  if (blogAnim) {
    blogAnim.forEach((item, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          markers: false,
        },
        opacity: 1,
        x: -0,
        y: -0,
        ease: "power2.out",
        duration: 2,
        stagger: 0.5,
      });
    });
  }

  /*--------------------------------------------------------------
    23. Startup Agency Animation
 --------------------------------------------------------------*/

  let cs_startup_agency = gsap.utils.toArray(".cs_startup_agency.cs_card");
  cs_startup_agency.forEach((cs_startup) => {
    gsap.set(cs_startup, {
      opacity: 0,
      x: +100,
    });

    gsap.to(cs_startup, {
      scrollTrigger: {
        trigger: cs_startup,
        start: "top center+=200",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.4,
      },
    });
  });

  /*--------------------------------------------------------------
      24. Stagger Text Up and Downs Animation
 --------------------------------------------------------------*/

  let aminTextUpanddowns = gsap.utils.toArray(".anim_text_upanddowns");
  let aminTextUpanddownChar = new SplitText(aminTextUpanddowns, {
    type: "chars",
  });

  let textUpanddown = gsap.timeline({
    scrollTrigger: {
      trigger: aminTextUpanddowns,
      start: "top 90%",
      end: "bottom 60%",
      scrub: false,
      markers: false,
      toggleActions: "play none none none",
    },
  });

  textUpanddown.from(aminTextUpanddownChar.chars, {
    duration: 2,
    opacity: 0,
    delay: 0.5,
    scale: 1.2,
    stagger: 0.5,
    y: 50,
    rotationX: 100,
    transformOrigin: "0% 30% -30",
    ease: "elastic",
    stagger: 0.05,
  });

  /*--------------------------------------------------------------
         25. ShowsZoom Center Animation
 --------------------------------------------------------------*/

  let divShowsZoom = gsap.utils.toArray(".anim_div_ShowZoom");
  divShowsZoom.forEach((showsZoom) => {
    gsap.set(showsZoom, {
      opacity: 0,
      scale: 0,
    });

    gsap.to(showsZoom, {
      scrollTrigger: {
        trigger: showsZoom,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      scale: 1,
      delay: 0.5,
      ease: "power3.out",
      duration: 1,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
      26. ShowsLeftSide Animation
 --------------------------------------------------------------*/

  let divShowsLeftSide = gsap.utils.toArray(".anim_div_ShowLeftSide");
  divShowsLeftSide.forEach((showsLeft) => {
    gsap.set(showsLeft, {
      opacity: 0,
      x: -100,
    });

    gsap.to(showsLeft, {
      scrollTrigger: {
        trigger: showsLeft,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
      27. ShowsRightSide Animation
 --------------------------------------------------------------*/

  let divShowsRightSide = gsap.utils.toArray(".anim_div_ShowRightSide");
  divShowsRightSide.forEach((showsRight) => {
    gsap.set(showsRight, {
      opacity: 0,
      x: +100,
    });

    gsap.to(showsRight, {
      scrollTrigger: {
        trigger: showsRight,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
        28. ShowsDown Animation
 --------------------------------------------------------------*/

  let divShowsDowns = gsap.utils.toArray(".anim_div_ShowDowns");
  divShowsDowns.forEach((showsDown) => {
    gsap.set(showsDown, {
      opacity: 0,
      y: +100,
    });

    gsap.to(showsDown, {
      scrollTrigger: {
        trigger: showsDown,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      y: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 1,
    });
  });

  /*--------------------------------------------------------------
         29. ShowsUp Animation
 --------------------------------------------------------------*/

  let divShowsUps = gsap.utils.toArray(".anim_div_ShowUps");
  divShowsUps.forEach((showsUp) => {
    gsap.set(showsUp, {
      opacity: 0,
      y: -100,
    });

    gsap.to(showsUp, {
      scrollTrigger: {
        trigger: showsUp,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      y: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
         30. Funfact Counting Animation
 --------------------------------------------------------------*/
  const count_number = gsap.utils.toArray(".cs_funfact.cs_style1");
  const count_id = gsap.utils.toArray(".amin_auto_count");
  if (count_number) {
    count_id.forEach((num) => {
      gsap.from(num, {
        scrollTrigger: {
          trigger: num,
          start: "top center+=200",
          markers: false,
        },
        delay: 2,
        innerText: 0,
        duration: 3,
        snap: {
          innerText: 1,
        },
      });
    });
    gsap.from(count_number, {
      scrollTrigger: {
        trigger: count_number,
        start: "top center+=200",
        markers: false,
      },
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  }

  /*--------------------------------------------------------------
    31. Text  popup Animation
--------------------------------------------------------------*/

  let text_anim_top = gsap.utils.toArray(".anim_text_popup");

  text_anim_top.forEach((splitTextLine2) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine2,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine2, {
        type: "words",
      }),
      textNumWords = itemSplitted.words.length;

    gsap.delayedCall(0.05, function () {
      for (var i = 0; i < textNumWords; i++) {
        tl.from(
          itemSplitted.words[i],
          1,
          {
            force3D: true,
            scale: Math.random() > 0.5 ? 0 : 2,
            opacity: 0,
          },
          Math.random()
        );
      }
    });
  });

  /*--------------------------------------------------------------
       33. Lading pages btn
--------------------------------------------------------------*/

  let revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    console.log(image);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 10%",
        markers: false,
        toggleActions: "play none none none",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      duration: 2,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });
  /*--------------------------------------------------------------
       33. Lading pages btn
--------------------------------------------------------------*/
  if ($.exists(".cs_toggle")) {
    $("#open").on("click", function () {
      $(this).hide();
      $("#clecel").show();
      $(".setting_mode").css("right", "120px");
      $(".cs_mode_btn").css({
        right: "0",
      });
    });

    $("#clecel").on("click", function () {
      $(this).hide();
      $("#open").show();
      $(".setting_mode").css("right", "0");
      $(".cs_mode_btn").css({
        right: "-120px",
      });
    });

    $(".js-mode-type button").on("click", function (e) {
      $(this).addClass("active").siblings().removeClass("active");
      var mode_val = $(".js-mode-type button.active").attr("data-mode");
      if (mode_val == "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    });
  }
  /*--------------------------------------------------------------
       32. Lading pages btn
--------------------------------------------------------------*/
  if ($.exists("#home-btn")) {
    const homeButton = document.querySelector("#home-btn");
    const sectionHome = document.querySelector("#home");
    homeButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionHome,
      });
    });
    const pageButton = document.querySelector("#page-btn");
    const sectionInner = document.querySelector("#innerpages");
    pageButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionInner,
      });
    });
    const featuresButton = document.querySelector("#features-btn");
    const sectionfeatures = document.querySelector("#features");
    featuresButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionfeatures,
      });
    });
  }

  // End of use strict
})(jQuery);
