function lockedProfile() {
    let btns = Array.from(document.querySelectorAll("button"));
    btns.forEach(x => x.addEventListener("click", eventHandler));

    function eventHandler(e){
        let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        let curRadioButton = e.currentTarget.parentElement.querySelector("input[type='radio']:checked");

        if(curRadioButton.value == "unlock"){
            if(e.currentTarget.textContent == "Show more"){
                e.currentTarget.textContent = "Hide it";
                hiddenInfo.style.display = "block"
            }else{
                e.currentTarget.textContent = "Show more";
                hiddenInfo.style.display = "none"
            }
        }
    }

}