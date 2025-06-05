 function loadEvents(){
   fetch('events.json')
   .then(response => response.json())
   .then(events => {
    const container=document.getElementById('events-container');
    events.forEach(event => {
      const card=document.createElement('div');
      card.classList.add('event-card');

      card.innerHTML=`
      <img src="${event.image}" alt="${event.name}">
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.Date}</p>
      <p><strong>Time:</strong> ${event.Time}</p>
      <p><strong>Location:</strong> ${event.Location}</p>
      <p>${event.Description}</p>
      <button>Register</button>
      `

      container.appendChild(card);
    });
   })
   .catch(error => console.error('Error loading events: ',error));
 }
 
loadEvents();
  
