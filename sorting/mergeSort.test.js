import { merge, splitArray, mergeSort } from './mergeSort';

describe('Test splitArray Function', () => {
  test('split [] should renturn [[], []]', () =>
    expect(splitArray([])).toEqual([[], []]));
  test('split [1] should renturn [[], [1]]', () =>
    expect(splitArray([1])).toEqual([[], [1]]));

  test('split [1,2] should renturn [[1], [2]]', () =>
    expect(splitArray([1, 2])).toEqual([[1], [2]]));
  test('split [1,2,3] should renturn [[1], [2,3]]', () =>
    expect(splitArray([1, 2, 3])).toEqual([[1], [2, 3]]));
});

describe('Test Merge Function', () => {
  test('merge [2] and [1] should equal [1,2]', () =>
    expect(merge([2], [1])).toEqual([1, 2]));

  test('merge [] and [1] should equal [1]', () =>
    expect(merge([], [1])).toEqual([1]));

  test('merge [1] and [] should equal [1]', () =>
    expect(merge([1], [])).toEqual([1]));

  test('merge [1] and [] should equal [1]', () =>
    expect(merge([1], [])).toEqual([1]));

  test('merge [1, 3] and [2, 4] should equal [1, 2, 3, 4]', () =>
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]));

  test('merge [2,4,4] and [1,2,5] should equal [1,2,2,4,4,5]', () =>
    expect(merge([2, 4, 4], [1, 2, 5])).toEqual([1, 2, 2, 4, 4, 5]));

  test('merge [1,3,5,7] and [2,4,6,8] should equal [1,2,3,4,5,6,7,8]', () =>
    expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]));
});

describe('Test MergeSort function', () => {
  test('MergeSort [] should equals []', () =>
    expect(mergeSort([])).toEqual([]));

  test('MergeSort [4,3,2,1] should equals [1,2,3,4]', () =>
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]));

  test('MergeSort [1,2,2,1] should equals [1,1,2,2]', () =>
    expect(mergeSort([1, 2, 2, 1])).toEqual([1, 1, 2, 2]));

  test('MergeSort [4,2,1,6,7,3] should equals [1,2,3,4,6,7]', () =>
    expect(mergeSort([4, 2, 1, 6, 7, 3])).toEqual([1, 2, 3, 4, 6, 7]));
});
