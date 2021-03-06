function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left, right){
  let arr = [];

  while(left.length && right.length){
    if(left[0] < right[0]){
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice().concat(right.slice()));
}

let nums = [3, -3, 9, 4, 1, 0, 10, -10]

mergeSort(nums)