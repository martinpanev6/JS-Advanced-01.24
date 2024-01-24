function toggle() {
    const button = document.querySelector('div div span.button');
    const paragraph = document.getElementById('extra');

    if(button.textContent == 'More'){
        paragraph.style.display = 'block';
        button.textContent = 'Less';
    }else{
        paragraph.style.display = 'none'
        button.textContent = 'More';
    }

}