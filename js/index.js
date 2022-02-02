//search button action
 searchForm = document.querySelector('.header__search-form');
document.querySelector('#header__search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
//login btn action
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
} 

// bottom navbar active/inactive actions
window.onscroll = () => {
  searchForm.classList.remove('active');
  if (window.scrollY > window.innerHeight / 10.2) {
    document.querySelector(".header__bottom").classList.add("header__bottom__active");
  } else {
    document.querySelector(".header__bottom").classList.remove("header__bottom__active");
  }
};
window.onload = () => {
  if (window.scrollY > window.innerHeight / 10.2) {
    document.querySelector(".header__bottom").classList.add("header__bottom__active");
  } else {
    document.querySelector(".header__bottom").classList.remove("header__bottom__active");
  }
};

// create image slider action
(function () {
  var sliderContent = document.querySelector("#sliderContent");
  var sliderPrev = document.querySelector("#sliderPrev");
  var sliderNext = document.querySelector("#sliderNext");
  var sliderItem = document.querySelector(".slider__item");
  var sliderPrevValue = 0;
  var totalItemWidth = sliderItem.getBoundingClientRect().width;
  var widthToMove = totalItemWidth;
  var currentSlide = 1;

  sliderPrev.addEventListener("click", moveSliderRight);
  sliderNext.addEventListener("click", moveSliderLeft);

  manageButtons();

  function moveSliderLeft() {
    sliderPrevValue -= widthToMove;
    currentSlide++;
    manageButtons();
    sliderContent.style.left = `${sliderPrevValue}px`;
  
  }

  function moveSliderRight() {
     sliderPrevValue += widthToMove;
    currentSlide--;
    manageButtons();
    sliderContent.style.left = `${sliderPrevValue}px`;
  }

  function manageButtons() {
     if ((window.matchMedia('(min-width:769px)').matches && currentSlide == 11) || (window.matchMedia('(max-width:768px)').matches && currentSlide == 13) || (window.matchMedia('(max-width:450px)').matches && currentSlide == 14)) 
        sliderNext.classList.remove("show");
        else 
  sliderNext.classList.add("show");
        if (currentSlide == 1) 
        sliderPrev.classList.remove("show");
        else sliderPrev.classList.add("show");

  }
})();

// date actions
//current day 
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var n = new Date();
var m = n.getMonth();
var d = n.getDate();
var day_month = document.getElementById("day-month");
if (day_month) day_month.innerHTML = d + " " + months[m];

//current date in footer
(function () {
	let currentYear = (new Date).getFullYear();
	let copyYear = document.querySelectorAll('.year');
	
	for (let i = 0; i < copyYear.length; i++) {
		copyYear[i].textContent = currentYear;
	}
}());

//landing page animation
TweenMax.to('.vinyl', 12, {rotation:"360", ease:Power0.easeNone, repeat:-1});
var tl = new TimelineLite({repeat:-1,repeatDelay:3,yoyo:true});
tl.set('#vinyl-02,#vinyl-03,#vinyl-04',{opacity:0,ease:Power0.easeNone});
tl.to('#vinyl-02', 1, {opacity: 1,ease:Power0.easeNone},3);
tl.to('#vinyl-03', 1, {opacity: 1,ease:Power0.easeNone},6);
tl.to('#vinyl-04', 1, {opacity: 1,ease:Power0.easeNone},9); 
