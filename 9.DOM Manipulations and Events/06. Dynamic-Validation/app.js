function validate() {
    
    const inputRef = document.getElementById("email");
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

    inputRef.addEventListener("change", changeHandler);

    function changeHandler(e){
        let valueOfinput = inputRef.value;;
        if(pattern.test(valueOfinput)){
            inputRef.classList.remove("error");
        }else{
            inputRef.classList.add("error");
        }
    }
}