/* 轮播图 */
/* swiper初始化 */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /* 单击按钮隐藏列表显示 */
    $(function(){
      $(".lines").click(function(){
        if($(".hiddenList").css("display") == "none"){
          $(".hiddenList").css("display","block");
          $(".hiddenUl>li").slideDown(500);
          $(".fixedNav").css("display","none");
        }else {
          $(".hiddenList").css("display","none");
          $(".hiddenUl>li").slideUp();
          $(".fixedNav").css("display","block");
        }
      })


    /* 第一页第二页 */
    $(".pageDown").click(function(){
      if($(".product02").css("display") == "none"){
        $(".product02").css("display","block");
        $(".product").css("display","none");
        $(".pageNum").html("2 / 2");
        $(".pageDown").css("color","rgba(6,193,17,0.5)");
        $(".pageUp").css("color","rgba(6,193,17)")
      }
    })

    $(".pageUp").click(function(){
      if($(".product02").css("display") == "block"){
        $(".product02").css("display","none");
        $(".product").css("display","block");
        $(".pageNum").html("1 / 2");
        $(".pageUp").css("color","rgba(6,193,17,0.5)");
        $(".pageDown").css("color","rgba(6,193,17)")
      }
    })

  })
    
    