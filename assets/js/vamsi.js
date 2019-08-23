var Background=function(){
    if(window.matchMedia("(max-width: 767px)").matches){
      var e=["assets/images/back10overlay.png","assets/images/back.jpg"],
      t=0;windowHeight=$(window).innerHeight(),
      setInterval(function(){(t+=1)==e.length&&(t=0),
      0==t?(document.getElementById("home").style.backgroundImage="url('assets/images/backmobile3.jpg')",
      document.getElementById("home").style.backgroundPosition="left center",
      document.getElementById("home").css("min-height",windowHeight)):1==t&&(document.getElementById("home").style.backgroundImage="url('assets/images/back.png')",
      document.getElementById("home").style.backgroundPosition="right center",
      document.getElementById("home").css("min-height",windowHeight))},7e3)}
      else{
        var e=["assets/images/back.png","assets/images/back10overlay.png"],
        t=0;setInterval(function(){(t+=1)==e.length&&(t=0),0==t?(document.getElementById("home").style.backgroundImage="url('assets/images/back10overlay.png')",
        document.getElementById("home").style.backgroundPosition="center center"):1==t&&(document.getElementById("home").style.backgroundImage="url('assets/images/back.png')",
        document.getElementById("home").style.backgroundPosition="right center")},7e3)}}()





        function slickSlider(className, slidesToShow, slidesToScroll) {
          var l_arrow = (className == "masa-slider") ? "l-arrow.png" : "left-arrow.png";
          var r_arrow = (className == "masa-slider") ? "r-arrow.png" : "right-arrow.png";
          slidesToShow = typeof slidesToShow !== 'undefined' ? slidesToShow : 3;
          slidesToScroll = typeof slidesToScroll !== 'undefined' ? slidesToScroll : 3;
          $("."+className).slick({
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            autoplaySpeed: 4000,
            infinite: false,
            draggable:false,
            dots: true,
            arrows: false,
            rtl:false,
            responsive: [
            {
               breakpoint: 768,
               settings: {
                slidesToShow:1,
                slidesToScroll:1,
               }
             }
            ]
          });
        }
          slickSlider("arkad-latestjob-slider",3,1);
       

    $(document).ready(function() {
      $("#vertical_main_menu").hover(function() {
        var offset = $(this).offset();
        $("#vertical_nav_tabs").addClass("vertical_nav_tabs").css({top:offset.top+28,left:offset.left}).show();$("#vertical_nav_tabs").appendTo("body");$("#vertical_main_menu").on("click",function(){$("#vertical_nav_tabs").toggle();});}, function() { });$("#vertical_nav_tabs").mouseleave(function(){$(this).hide();});})
        if(!$.browser.msie || $.browser.msie&&($.browser.version>6)){$('#nav .off:has(ul)').hover( function () { $(this).removeClass("off").addClass("hover"); }, function () { $(this).removeClass("hover").addClass("off"); } );}

