function focused() {

    const inputRef = document.querySelectorAll("div div");

    for(let input of inputRef){
        input.children[1].addEventListener("focus", focusIventHandler);
        input.children[1].addEventListener("blur", blurIventHandler);
    }

    function focusIventHandler(e){
        e.target.parentElement.classList.add("focused");
    }

    function blurIventHandler(e){
        e.target.parentElement.classList.remove("focused");
    }


}