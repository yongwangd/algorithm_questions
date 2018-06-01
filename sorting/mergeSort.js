var splitArray = array => {
  const length = array.length;

  const idx = Math.floor(length / 2);

  return [array.slice(0, idx), array.slice(idx)];
};

const merge = (arr1, arr2) => {
  let result = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i == arr1.length) {
      result.push(arr2[j]);
      j++;
    } else if (j == arr2.length) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
};

const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }
  const [left, right] = splitArray(array);
  return merge(mergeSort(left), mergeSort(right));
};

export { merge, splitArray, mergeSort };

// var c = merge([1, 3, 5], [2, 4, 6]);
// console.log(c);
