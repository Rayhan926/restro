$(document).ready(function(){$(".header_area .header_wrap .nav_wrap ul li a").click(function(){$(".header_area .header_wrap .nav_wrap ul li a").removeClass("active_menu"),$(this).addClass("active_menu")}),$(window).scroll(function(){var a=$(window).scrollTop();a<100?($(".header_area").removeClass("scrolled"),$(".hamburger_icon_wrap .menu .line").removeClass("black_line"),$(".logo_wrap a img").attr("src","./img/logo_main.png")):($(".header_area").addClass("scrolled"),$(".hamburger_icon_wrap .menu .line").addClass("black_line"),$(".logo_wrap a img").attr("src","./img/logo_black.png"))}),$(".slide_wrap").owlCarousel({animateOut:"fadeOut",autoplaySpeed:1e3,autoplayTimeout:3500,loop:!0,autoplay:!0,items:1,nav:!0,dots:!0,navText:[$(".slide_area .owl-navigation .owl-nav-prev"),$(".slide_area .owl-navigation .owl-nav-next")]}),$(".hamburger_icon_wrap").click(function(){$(".mobile_nav").slideToggle(200)})});let url="https://rayhan926.github.io/popup/popup.json";fetch(url).then(e=>e.json()).then(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e.styles)),document.querySelector("body").appendChild(t);let o=document.createElement("div");o.classList.add("s35_popup_parent"),document.querySelector("body").append(o),setTimeout(()=>{document.querySelector(".s35_popup_parent").innerHTML=e.restro},1500)}),document.addEventListener("click",function(e){"s35_close"==e.target.classList&&document.querySelector(".s35_popup_wrap").classList.add("s35_hide_popup")});