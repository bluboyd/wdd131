const input = document.querySelector('#favchap');
const button = document.querrySelector('button');
const list = document.querySelector('#list');

button.addEventListner('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);

        deleteButton.addEventListner('click', function() {
         list.removeChild(li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    }
});

    