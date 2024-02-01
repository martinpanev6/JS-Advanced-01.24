function encodeAndDecodeMessages() {
    
    const textAreaRefs = document.querySelectorAll("textarea");
    const buttonsRef = document.querySelectorAll("button");
    
    const inputRef = textAreaRefs[0];
    const outputRef = textAreaRefs[1];
    const encodeButton = buttonsRef[0];
    const decodeButton = buttonsRef[1];

    encodeButton.addEventListener("click", encodeEventHandler);
    decodeButton.addEventListener("click", decodeEventHandler);

    function encodeEventHandler(e){
        let message = inputRef.value;
        let encodedMsg = "";
        for(let char of message){
            let valASCII = char.charCodeAt(0);
            encodedMsg += String.fromCharCode(valASCII + 1);
        }
        inputRef.value = "";
        outputRef.value = encodedMsg;
    }

    function decodeEventHandler(e){
        let message = outputRef.value;
        let decodedMsg = "";
        for(let char of message){
            let valASCII = char.charCodeAt(0);
            decodedMsg += String.fromCharCode(valASCII - 1);
        }
        outputRef.value = decodedMsg
    }
}