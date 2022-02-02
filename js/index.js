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
