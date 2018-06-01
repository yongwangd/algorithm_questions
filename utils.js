function* genNumber(start = 0, end) {
  var index = start;
  while (end ? index <= end : true) {
    yield index;
    index++;
  }
}

function* yieldArrayItem(array) {
  array.forEach(item => yield(item));
}

var i = genNumber(0, 1);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

module.exports = {
  genNumber,
  yieldArrayItem
};
