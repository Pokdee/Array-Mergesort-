const arr = [3, 1, 2, 4, 5, 8, 7, 6];

const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const arrL = arr.length;
  const arrMidx = arrL / 2;

  const leftside = arr.slice(0, arrMidx);
  const rightside = arr.slice(arrMidx, arrL);

  let mergeArr = [...mergeSort(leftside), ...mergeSort(rightside)];

  if (mergeArr.length > 1) {
    let sortArr = [];
    let left = 0; //0
    let right = 1; //2
    for (let i = 0; i < mergeArr.length; i++) {
      if (left === right) {
        ++right;
      }
      let fEle = mergeArr[left];
      let sEle = mergeArr[right];

      if (fEle > sEle && !sortArr.includes(sEle)) {
        sortArr.push(sEle);
        ++right;
      }
      if (fEle < sEle && !sortArr.includes(fEle)) {
        sortArr.push(fEle);
        left = right;
        right = right + 1;
      }

      if (!Number.isInteger(fEle) || !Number.isInteger(sEle)) {
        let num = Number.isInteger(fEle) ? fEle : sEle;
        sortArr.push(num);
      }
    }
    return sortArr;
  }
};

console.log(mergeSort(arr));
