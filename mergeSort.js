const array = getRandomArray(100);

function getRandomArray(number){
  const arr = [];
  let n = number;
  for(let i = 0; i < number; i++){
    arr[i] = Math.ceil(Math.random()*number);
  }
  return arr;
}

function mergeSort(arr){
  let size = arr.length;
  if(size < 2) return arr;
  if(size == 2){
    return arr[0] <= arr[1] ? arr : [arr[1],arr[0]];
  }
  let n = size - 1;
  const firstPart = arr.slice(0,n/2);
  const secondPart = arr.slice(n/2);
  return fusion( mergeSort(firstPart), mergeSort(secondPart) );
}

function fusion(arr1,arr2){
  if(!arr1.length) return arr2;
  if(!arr2.length) return arr1;
  if( arr1[0] <= arr2[0] ){
    return [arr1[0]].concat(
      fusion(arr1.slice(1),arr2)
    );
  }else{
    return [arr2[0]].concat(
      fusion(arr2.slice(1),arr1)
    );
  }
}

console.log(`${array}`);
console.log("<=========================================================>");
console.log(`${mergeSort(array)}`);