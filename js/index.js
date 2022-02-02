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
