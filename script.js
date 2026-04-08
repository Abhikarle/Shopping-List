const input = document.getElementById('item');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
const form = document.querySelector('form');

// Form submission event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = input.value;

  if (inputValue.trim() !== '') {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = inputValue;
    deleteBtn.textContent = 'Delete';

    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    deleteBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });
  }

  input.value = '';
  input.focus();
});