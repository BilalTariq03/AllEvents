document.addEventListener('DOMContentLoaded',function(){
  const hamburger=document.querySelector('.hamburger');
  const navItems=document.querySelector('.nav-items');
  const searchInput = document.querySelector('.search-input-container input')

  hamburger.addEventListener('click',()=>{
    navItems.classList.toggle('active');
  });

  document.addEventListener('click',(e)=>{
    if (!e.target.closest('.nav-items') && !e.target.closest('.hamburger') && !e.target.closest('.search-input-container')){
      navItems.classList.remove('active');
    }
  
});
})


