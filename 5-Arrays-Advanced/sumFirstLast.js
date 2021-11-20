function sumFirstLast(array){
    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());
    let sum = firstNum + lastNum;

    return sum;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));