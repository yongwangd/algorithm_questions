const MinHeap = () => {
  const heap = [];

  const getParentIndex = idx => Math.ceil(idx / 2) - 1;
  const getChildrenIndexRange = idx => [2 * idx + 1, 2 * idx + 2];
  const hasChildren = idx => 2 * idx + 1 <= heap.length;
  const hasOneChid = idx => 2 * idx + 1 == heap.length;
  const hasTwoChildren = idx => 2 * idx + 2 <= heap.length;

  const insert = value => {
    heap.push(value);
    let idx = heap.length - 1;
    while (idx > 0) {
      let parentIdx = getParentIndex(idx);
      if (heap[parentIdx] > heap[idx]) {
        let temp = heap[parentIdx];
        heap[parentIdx] = heap[idx];
        heap[idx] = temp;
        idx = parentIdx;
      } else {
        break;
      }
    }

    return heap;
  };

  const remove = () => {
    if (heap.length < 1) return;
    const toReturn = heap[0];
    const last = heap.pop();
    heap[0] = last;
    const length = heap.length;
    let idx = 0;

    while (hasChildren(idx)) {
      const [left, right] = getChildrenIndexRange(idx);
      const smaller = left;
      if (hasTwoChildren(idx) && heap[right] < heap[left]) {
        smaller = right;
      }

      if (heap[idx] > heap[smaller]) {
        let temp = heap[idx];
        heap[idx] = heap[smaller];
        heap[smaller] = temp;
        idx = smaller;
      } else break;
    }

    return toReturn;
  };

  const array = () => heap.slice(0);
  const root = () => heap[0];
  return {
    array,
    insert,
    remove,
    root
  };
};

export default MinHeap;
