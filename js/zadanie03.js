function bigestSumOfTwoElements(array) {
    array = array.sort((a, b) => b - a);
    
    if(array.length === 0) {
        return false;
    }
    else if (array.length === 1) {
        return array[0];
    }
    else {
        return array[0] + array[1];
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));