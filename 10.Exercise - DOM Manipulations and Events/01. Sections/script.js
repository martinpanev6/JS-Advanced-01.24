function create(words) {

   const contentRef = document.getElementById("content");
   for(let word of words){
      let divEl = document.createElement("div");
      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.addEventListener("click", clickEventHandler);

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);
   }

   function clickEventHandler(event){
      let target = event.currentTarget;
      let para = target.children;
      let p = para[0];
      if(p.style.display == "none"){
         p.style.display = "block";
      }else{
         p.style.display = "none";
      }
   }
}