function getMinMax(str) {
    let numbers = [];
    let arr = str.split(' ');
    for(let elem of arr) {
        if(!isNaN(Number(elem))){
            numbers.push(Number(elem));
        }
    }  
    let result = {};
    result.min = Math.min(...numbers);
    result.max = Math.max(...numbers);
    return result;
}
