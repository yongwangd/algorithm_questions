const randomValue = array => {
  const l = array.length;
  return array[Math.floor(Math.random() * l)];
};

const quickSelect = (array, n) => {
  if (n > array.length) return undefined;
  if (array.length == 0) return undefined;
  const rv = randomValue(array);

  const left = array.filter(a => a < rv);
  const right = array.filter(a => a > rv);

  if (left.length == n - 1) return rv;
  if (left.length >= n) {
    return quickSelect(left, n);
  } else {
    return quickSelect(right, n - left.length - 1);
  }
};

export { quickSelect };
