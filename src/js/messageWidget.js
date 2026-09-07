
const list = document.querySelector('.list');


function renderMessage(data){
  const {from, subject, received } = data
  const dateObject = new Date(received);
  let subjetText = subject.length > 15 ? subject.slice(0, 15) + '...': subject;

  let item = document.createElement('li');
  item.classList.add('list-item');

  let emailFrom = document.createElement('span');
  emailFrom.classList.add('item-email');
  emailFrom.textContent = from;

  let textMessage = document.createElement('span');
  textMessage.classList.add('item-text');
  textMessage.textContent = subjetText;

  let dateMessage = document.createElement('time');
  dateMessage.classList.add('item-date');
  dateMessage.setAttribute('datetime', dateObject.toISOString());
  dateMessage.textContent = dateObject.toLocaleString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }); 

  item.append(emailFrom, textMessage, dateMessage);
  list.prepend(item);

}

export default function render(arr) {

  let arrMessage = arr.forEach(el => {
    renderMessage(el)    
  });

}