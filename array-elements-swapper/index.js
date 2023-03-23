const arrayElemtntsSwapper = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

//   Testing this
console.log('Swapped: ', arrayElemtntsSwapper([1, 2, 3, 4, 5, 6, 7], 1, 2));
