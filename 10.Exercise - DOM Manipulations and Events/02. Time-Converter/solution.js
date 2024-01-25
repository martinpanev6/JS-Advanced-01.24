function attachEventsListeners() {

    const butttons = Array.from(document.querySelectorAll("input[type='button']"));

    for(let btn of butttons){
        btn.addEventListener("click", convertHandler);
    }

    function convertHandler(e){
        let currentUnit = e.currentTarget.parentElement.children[1];
        let value = Number(currentUnit.value);
        let unit = currentUnit.id;

        switch(unit){
            case "days": propagateNewVal(value); break;
            case "hours": propagateNewVal(value / 24); break;
            case "minutes": propagateNewVal(value / 24 / 60); break;
            case "seconds": propagateNewVal(value / 24 / 60 / 60); break;
        }
    }

    function propagateNewVal(days){

        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}