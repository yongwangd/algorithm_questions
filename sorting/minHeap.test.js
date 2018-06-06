import MinHeap from './minHeap';

describe('Test Empty MinHeap', () => {
  let heap;

  beforeEach(() => (heap = MinHeap()));

  test('Insert 1 should be [1]', () => {
    heap.insert(3);
    expect(heap.array()).toEqual([3]);
  });

  test('Insert 3 Values', () => {
    heap.insert(3);
    heap.insert(2);
    heap.insert(4);
    expect(heap.array()).toEqual([2, 3, 4]);
  });

  test('Insert 5 Values', () => {
    heap.insert(3);
    expect(heap.array()).toEqual([3]);

    heap.insert(2);
    expect(heap.array()).toEqual([2, 3]);

    heap.insert(4);
    expect(heap.array()).toEqual([2, 3, 4]);

    heap.insert(1);
    expect(heap.array()).toEqual([1, 2, 4, 3]);

    heap.insert(5);
    expect(heap.array()).toEqual([1, 2, 4, 3, 5]);

    heap.remove();
    expect(heap.array()).toEqual([2, 3, 4, 5]);

    heap.remove();
    expect(heap.array()).toEqual([3, 5, 4]);

    heap.remove();
    expect(heap.array()).toEqual([4, 5]);

    heap.remove();
    expect(heap.array()).toEqual([5]);
  });
});

describe('Test Sorting use MinHeap', () => {
  test('Sort [3,5,8,6,2,1] should be [1,2,3,5,6,8]', () => {
    let heap = MinHeap();
    let array = [3, 5, 8, 6, 2, 1];
    array.forEach(a => heap.insert(a));

    let result = [];
    array.forEach(() => result.push(heap.remove()));

    expect(result).toEqual([1, 2, 3, 5, 6, 8]);
  });
});
