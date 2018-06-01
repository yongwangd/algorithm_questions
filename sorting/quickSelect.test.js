import { quickSelect } from './quickSelect';

describe('Test QuickSelect Function', () => {
  test('3 smallest of [1,2,3,4,5] should be 3', () =>
    expect(quickSelect([1, 2, 3, 4, 5], 3)).toBe(3));

  test('3 smallest of [] should be null', () =>
    expect(quickSelect([], 3)).toBeUndefined());

  test('3 smallest of [3,5,2,7,1] should be 3', () =>
    expect(quickSelect([3, 5, 2, 7, 1], 3)).toBe(3));

  test('5 smallest of [3,5,2,7,1] should be 3', () =>
    expect(quickSelect([3, 5, 2, 7, 1], 5)).toBe(7));

  test('1 smallest of [3,5,2,7,1] should be 1', () =>
    expect(quickSelect([3, 5, 2, 7, 1], 1)).toBe(1));
});
