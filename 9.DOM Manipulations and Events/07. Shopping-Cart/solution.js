function solve() {
   const addbuttonRef = document.querySelectorAll(".add-product");
   const textArea = document.querySelector("textarea");
   const checkButtonRef = document.querySelector(".checkout");
   let list = [];
   let totalCost = 0;

   for(let addbutton of addbuttonRef){
      addbutton.addEventListener("click", addbuttonHandler);
   }

   function addbuttonHandler(e){
      const title = e.target.parentElement.parentElement.querySelector(".product-title").textContent;
      const price = Number(e.target.parentElement.parentElement.querySelector(".product-line-price").textContent);
      textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      if(!list.includes(title)){
         list.push(title);
      }
      totalCost += price;   
   }

   checkButtonRef.addEventListener("click", checkOutHandler);
   function checkOutHandler(e) {
      textArea.value += `You bought ${list.join(", ")} for ${totalCost.toFixed(2)}.`;
      for(let button of addbuttonRef){
         button.disabled = true;
      }
      checkButtonRef.disabled = true;
   }
}