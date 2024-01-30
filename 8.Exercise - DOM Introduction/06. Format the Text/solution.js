function solve() {
  const textAreaRef = document.getElementById("input");
  const sentenceArr = textAreaRef.value.split('. ').filter(sentence => sentence.trim().length > 0);
  const outputRef = document.getElementById("output"); 


  outputRef.innerHTML = '';

  const fragment = document.createDocumentFragment();

            
  for (let i = 0; i < sentenceArr.length; i += 3) {
      const paragraphSentences = sentenceArr.slice(i, i + 3);
      const paragraphText = paragraphSentences.join('. ');
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = paragraphText;
      fragment.appendChild(paragraphElement);
      }

      outputRef.appendChild(fragment);
}