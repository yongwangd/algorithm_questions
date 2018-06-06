import R, { findLast } from 'ramda';

console.log(R.forEach);

const firstPairs = (s1, s2) => {
  let result = [];

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        if (result.length == 0 || !R.any(r => r.i <= i && r.j <= j, result)) {
          result.push({ s: s1[i], i, j });
          break;
        }
      }
    }
  }

  return result;
};

let findLCS = (s1, s2, found = '') => {
  const pairs = firstPairs(s1, s2);

  if (pairs.length == 0) {
    return found;
  }

  let all = pairs.map(({ s, i, j }) => {
    let newChar = found + s;

    return findLCS(s1.slice(i + 1), s2.slice(j + 1), newChar);
  });

  const maxLength = all.reduce((acc, cur) => {
    return R.max(acc, cur.length);
  }, 0);

  return all.find(a => a.length == maxLength);
};

// findLCS = R.memoize(findLCS);
console.time('test');

var a = findLCS(
  'To examine some of these claims, we have to define what a blockchain is and herein lies a lot of the confusion. Many companies use the word “blockchain” to mean some sort of magical device by which all their data will never be wrong. Such a device, of course, does not exist, at least when the real world is involved.',
  'So what is a blockchain? Technically speaking, a blockchain is a linked list of blocks and a block is a group of ordered transactions. If you didn’t understand the last sentence, you can think of a blockchain as a subset of a database, with a few additional properties.'
);

console.timeEnd('test');

console.log(a);
export { firstPairs, findLCS };
