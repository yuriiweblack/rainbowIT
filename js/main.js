$(function () {
 $('.header__content-bottom--slider').slick({
  arrows: false,
  responsive: [
   {
    breakpoint: 610,
    settings: {
     autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: true,
    }
   },
   {
    breakpoint: 391,
    settings: {
     autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 1,
     slidesToScroll: 1,
     
    },
   }
  ]
 })
})




// document.getElementById('btn').addEventListener('click', function () {
//  $('.menu__list').toggleClass('menu__list--activ');
// })

// (function () {
//  let child = document.createElement("a");

//  let text = document.createTextNode("Контакти")

//  child.appendChild(text);
// child.href='#';
//  let parent = document.getElementById("list--");
 
//  parent.appendChild(child);




// }) ();

// let elems_4 = document.querySelectorAll(".menu__list>li+li+li+li+li");
// console.log(elems_4)

// let elems_1 = document.querySelectorAll('.menu__list');
// console.log(elems_1)

// let elems_4 = document.querySelectorAll(".menu__list>li+li+li+li+li");

// elems_4.style.Color = "green";

// (function () {
//  let elems_4 = document.querySelector(".menu__list>a");
//  console.log(elems_4);

//  elems_4.style.color = "#fff";
// })();