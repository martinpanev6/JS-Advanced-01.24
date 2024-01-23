function addItem() {
    const input = document.getElementById('newItemText');
    if(input.value.length == 0){
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const deleteButt = document.createElement('a');
    deleteButt.textContent = '[Delete]';
    deleteButt.href = '#';
    deleteButt.addEventListener('click', onDelete);
    liElement.appendChild(deleteButt);

    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = '';
    
    function onDelete(event){
        const liElement = event.target.parentElement;
        liElement.remove();
    }
}
