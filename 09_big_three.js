const getBigThree = (numsArr) => {
  let highest = 0,
    nextHighest = 0,
    thirdHighest = 0;

  numsArr.forEach(num => {
    if(num >= highest) {
      thirdHighest = nextHighest;
      nextHighest = highest;
      highest = num;
    } else if(num >= nextHighest) {
      thirdHighest = nextHighest;
      nextHighest = num;
    } else if(num > thirdHighest) {
      thirdHighest = num;
    }
  })
  console.log([thirdHighest, nextHighest, highest])
  return [thirdHighest, nextHighest, highest];
}

getBigThree([3, 189, 100, 7, 99, 99, 33284, 3]);
