function wordsUpperCase(str){

  return str.split(/[^a-zA-Z0-9]+/)
             .join(" ")
             .trim()
             .split(" ")
             .map(x => x.toUpperCase())
             .join(", ");
}

wordsUpperCase('Hi, how are you?');