function pieceOfPie(pie, startPie, endPie){

    const start = pie.indexOf(startPie);
    const end = pie.indexOf(endPie);
    return pie.slice(start, end + 1);
}

pieceOfPie();