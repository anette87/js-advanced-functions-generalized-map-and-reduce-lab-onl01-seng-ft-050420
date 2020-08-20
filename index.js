function map(sourceArr, func){
    const newArr = []
    for(let element of sourceArr){
        newArr.push(func(element))
    }
    return newArr
};

function reduce(sourceArr, func, initialValue = null ){
    if (initialValue){
    let accum = initialValue;
    for(let element of sourceArr){
        accum = func(element, accum);
    }
    return accum

    } else {
        let accum = sourceArr[0];
        for(let i = 1; i<sourceArr.length; i++){
        accum = func(sourceArr[i], accum);
         }
         return accum
    }
};l