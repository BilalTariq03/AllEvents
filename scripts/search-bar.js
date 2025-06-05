const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input-container input');


function toggleSearch(){
  if(window.innerWidth>720){
    searchInput.classList.toggle('active');
  }
}

searchBtn.addEventListener('click', (e)=>{
  toggleSearch();
})

document.addEventListener('click',(e)=>{
  if(window.innerWidth > 720){
    if(!e.target.closest('.search-input-container') && !e.target.closest('.search-button')){
      searchInput.classList.remove('active');
    }
  }
  
})

searchInput.addEventListener('input', () =>{
  const searchTerm = searchInput.value.toLowerCase().trim();
  console.log(searchTerm);
  const eventCards = document.querySelectorAll('.event-card');

  eventCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const paragraphs = card.querySelectorAll('p');
    const location = Array.from(paragraphs)
    .map(p=> p.textContent)
    .join(' ')
    .toLowerCase();

    if(title.includes(searchTerm) || location.includes(searchTerm)){
      card.style.display = '';
    }
    else{
      card.style.display = 'none';
    }
  })
})

