import { firstPairs, findLCS } from './myLCS';

describe('test firstPairs', () => {
  test('Nothing', () => expect(firstPairs('', '')).toEqual([]));

  test('0 & 1', () => expect(firstPairs('', 'a')).toEqual([]));

  test(' 1 same', () =>
    expect(firstPairs('a', 'a')).toEqual([{ s: 'a', i: 0, j: 0 }]));

  test(' 0 same', () => expect(firstPairs('a', 'b')).toEqual([]));

  test('second', () =>
    expect(firstPairs('ab', 'abc')).toEqual([{ s: 'a', i: 0, j: 0 }]));

  test('third', () =>
    expect(firstPairs('cab', 'abc')).toEqual([
      { s: 'c', i: 0, j: 2 },
      { s: 'a', i: 1, j: 0 }
    ]));

  test('fourth', () =>
    expect(firstPairs('cabd', 'dabc')).toEqual([
      { s: 'c', i: 0, j: 3 },
      { s: 'a', i: 1, j: 1 },
      { s: 'd', i: 3, j: 0 }
    ]));
});

describe('test findLCS', () => {
  //   test('Nothing', () => expect(findLCS('', '')).toEqual([]));
  //   test('a & b', () => expect(findLCS('a', 'b')).toEqual([]));
  //   test('a & a', () =>
  //     expect(findLCS('a', 'a')).toEqual([{ s: 'a', i: [0], j: [0] }]));

  test('ab', () => expect(findLCS('aba', 'ab')).toEqual('ab'));
  test('abc', () =>
    expect(
      findLCS(
        'Design and Analysis of Algorithms Longest Common Subsequence',
        'A Fast Heuristic Search Algorithm for Finding the Longest Common'
      )
    ).toEqual('oton'));
});
