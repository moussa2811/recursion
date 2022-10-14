let number = 8;

function fibs(num){
    const array = [0,1];
    if (num <= 0) return "Number must be > 0";
    else if( num == 1 ) return num;
    else if (num == 2) return array;
    for(let i = 2; i < num; i++ ){
        array.push( array[i-1] + array[i-2] );
    }
    return array;
}

function fibsRec(num){
    if(num <= 0) {
        return "Number must be > 0";
    } else if (num == 1) {
      return num;
    } else if (num == 2) {
      return [0, 1];
    } else {
      return [...fibsRec(num-1), fibsRec(num-1)[num-2] + fibsRec(num-1)[num-3]];
    }
}

console.log(`Loop version: [${fibs(number)}]`);
console.log(`Recursive version: [${fibsRec(number)}]`);
