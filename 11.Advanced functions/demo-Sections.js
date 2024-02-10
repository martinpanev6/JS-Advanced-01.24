function solve(words){

    const container = document.getElementById("content");
    
    for(let word of words){
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = word;
        p.style.display = "none";
        div.appendChild(p);
        container.appendChild(div);

        div.addEventListener("click", show);

        function show(){
            p.style.display = "block";
        }
    }
}