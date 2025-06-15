
const MAX_GUESTS = 10;
let guestCount = 0;


const form       = document.getElementById('guest-form');
const nameInput  = document.getElementById('guest-name');
const list       = document.getElementById('list');
const alertMsg   = document.getElementById('alert-message');


form.addEventListener('submit', event => {
  event.preventDefault();                   
  const name = nameInput.value.trim();      

  if (!name) return;                       

  if (guestCount >= MAX_GUESTS) {          
    alertMsg.textContent = `Max ${MAX_GUESTS} guests reached.`;
    return;
  }
  alertMsg.textContent = '';               

  addGuestItem(name);                      
  form.reset();                            
});

function addGuestItem(name) {
  guestCount++;

  
  const li = document.createElement('li');
  li.className = 'guest-item';

  const span = document.createElement('span');
  span.textContent = name;
  span.className = 'name';

  const rsvpBtn = document.createElement('button');
  rsvpBtn.textContent = 'Not Attending';
  rsvpBtn.addEventListener('click', () => {
    if (rsvpBtn.textContent === 'Not Attending') {
      rsvpBtn.textContent = 'Attending';
      span.style.fontStyle = 'italic';
    } else {
      rsvpBtn.textContent = 'Not Attending';
      span.style.fontStyle = 'normal';
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    list.removeChild(li);
    guestCount--;
    
    if (guestCount < MAX_GUESTS) alertMsg.textContent = '';
  });

  li.append(span, rsvpBtn, removeBtn);
  list.appendChild(li);
}
