$(function() {
  let header = $("#header_wrap");

  $(window).scroll(function() {
    let num = 0;
    let scTop = $(this).scrollTop();
    /* common : gnb 스크롤 애니메이션 */
    if (scTop > num) {
      header.addClass('gnb_bg');
      $(".logo").html(
        "<a href='main.html'><img src='./img/logo2.png' alt='logo'></a>"
      );
      $(".login").css("display", "none")
      $(".all_menu_icon").attr("src", "./img/all_menu.png");
    } else if (scTop <= num) {
      header.removeClass('gnb_bg');
      $(".logo").html(
        "<a href='main.html'><img src='./img/logo.png' alt='logo'></a>"
      );
      $(".login").css("display", "block")
      $(".all_menu_icon").attr("src", "./img/all_menu2.png");
    }
  });

  /*common : header mouseover effect*/
  header.on("mouseover", function() {
    $(this).addClass("hover_effect");
    $(".logo").html(
      "<a href='main.html'><img src='./img/logo2.png' alt='logo'></a>"
    );
    $(".all_menu_icon").attr("src", "./img/all_menu.png");
  })
  header.on("mouseout", function() {
    $(this).removeClass("hover_effect");
    $(".logo").html(
      "<a href='main.html'><img src='./img/logo.png' alt='logo'></a>"
    );
    $(".all_menu_icon").attr("src", "./img/all_menu2.png");
  })

  /* common : all menu 클릭시 나타나기 */
  let allMenu = $("#all_menu");
  $(".all_menu").click(function() {
    allMenu.css("display", "block");
  });
  $(".all_menu_close").on("click", function() {
    allMenu.css("display", "none");
  })

  /* common : submenu 노출 */
  header.on("mouseenter", function() {
    $(this).addClass("change_hight");
    $(".gnb_wrap .main_gnb > li").siblings().children(".sub_gnb").removeClass("is_show");
    $(".gnb_wrap .main_gnb > li:nth-of-type(1)").children(".sub_gnb").addClass("is_show");
  });
  header.on("mouseleave", function() {
    $(this).removeClass("change_hight");
    $(".gnb_wrap .main_gnb > li:nth-of-type(1)").children(".sub_gnb").removeClass("is_show");
  });

  $(".gnb_wrap .main_gnb > li").mouseover(function() {
    $(this).siblings().children(".sub_gnb").removeClass("is_show");
    $(this).children(".sub_gnb").addClass("is_show");
  });


  /* main.html : 메인 배경 5초마다 변경 */
  var changeBg = 1;
  setInterval(function() {
    changeBg++;
    if (changeBg > 5) {
      changeBg = 1;
    }
    $('#main_wrap .main_bg').css({
      'background-image': 'url(./img/main0' + changeBg + '.jpg)'
    })
  }, 5000);
  console.log($('.counter'));
  /* main.html : content 3 counter */
  $('.counter').each(function() {
    $(this)
      .prop('Counter', 0)
      .animate({
        Counter: $(this).text()
      }, {
        duration: 7000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now))
        }
      });
  });

  /* more view btn 클릭 시 more content 나오기 */
  $(".more_view_btn").click(function() {
    $(".more_content").addClass("is_show");
    $(this).addClass("is_show");
  });
  $(".close_view_btn").click(function() {
    $(".more_content").removeClass("is_show");
    $(".more_view_btn").removeClass("is_show");
  });

  /* click list li 클릭 시 display0$ 나오기 */
  $(".click_list li").click(function() {
    // console.log($(this).index())
    let indexNum = $(this).index() + 1;
    $(".display_wrap .display_box").css("display", "none");
    // console.log(indexNum);
    // console.log(displayNum);
    $(".display_wrap .display_box").each(function() {
      let thisIndex = $(this).index() + 1;
      if (indexNum == thisIndex) {
        $(this).css("display", "block");
      }
      console.log($(this).attr("class"))
      console.log($(this).index() + 1)
    });
  });
  $(".close_btn").click(function() {
    $(".display_wrap .display_box").css("display", "none");
  });

  /* section05 con02 노화단계 tap menu */
  $(".con02_wrap > ul > li").on("click", function() {
    let indexNum = $(this).index() + 1;
    console.log(indexNum)
    $(".con02_list_active").css("display", "none");
    $(".con02_list_active").each(function() {
      let thisIndex = $(this).index();
      console.log(thisIndex)
      if (indexNum == thisIndex) {
        $(this).css("display", "inline-block");
      }
      console.log($(this).attr("class"))
      // console.log($(this).index()+1)
    });
  });
  /* sub01.html : line animation */
  $(window).scroll(function() {
    /* section01 animation */
    if ($(this).scrollTop() > 100) {
      $("sec01_content > ul li .line").addClass("on");
    } else {
      $("sec01_content > ul li .line").removeClass("on");
    };
    if ($(this).scrollTop() = 70) {
      $('.counter').each(function() {
        $(this)
          .prop('Counter', 0)
          .animate({
            Counter: $(this).text()
          }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now))
            }
          });
      });
    };
    /* sub01.html : section02 animation */
    if ($(this).scrollTop() > 0) {
      $(".section02_wrap").addClass("on");
    } else {
      $(".section02_wrap").removeClass("on");
    };
  });
});