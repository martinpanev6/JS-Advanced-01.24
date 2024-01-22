function solve() {

  const resultREf = document.getElementById('result');
  let string = document.getElementById('text').value;
  let caseE = document.getElementById('naming-convention').value;
  string = string.toLowerCase();

  let result = '';

  if(caseE == 'Pascal Case'){
    string.split(' ').forEach(word => {
      result += word[0].toUpperCase() + word.substring(1)
    });
    
  }else if(caseE == 'Camel Case'){
    let textArr = string.split(' ');
    result = textArr.shift();
    textArr.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase();
    });
  }else{
    result = 'Error!'
  }

  resultREf.textContent = result;
}