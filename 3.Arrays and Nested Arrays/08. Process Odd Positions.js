function proccess(arr){

    const result = arr.filter((c, i) => i % 2)
                      .map(a => a * 2)
                      .reverse()
                      .join(' ');
    return result;
}

proccess();