const lcs = (s, t) => {
  let m = s.length;
  let n = t.length;

  let matrix = [];

  for (let i = 0; i <= m; i++) {
    matrix[i] = [];
    for (let j = 0; j <= n; j++) {
      matrix[i][j] = { c: 0, g: 0 };
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i] == t[j]) {
        matrix[i + 1][j + 1].c = matrix[i][j].c + 1;
      } else {
        matrix[i + 1][j + 1].c = 0;
      }
      matrix[i + 1][j + 1].g = Math.max(
        matrix[i + 1][j + 1].c,
        matrix[i + 1][j].g,
        matrix[i][j + 1].g
      );
    }
  }
  const globalMax = matrix[m][n].g;

  let mIndexes = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i + 1][j + 1].c == globalMax) {
        mIndexes.push(i);
        break;
      }
    }
  }

  console.log(mIndexes);

  console.log(mIndexes.map(idx => s.slice(idx - globalMax + 1, idx + 1)));

  //   console.log(matrix);

  return matrix[m][n];
};

console.log(
  lcs(
    'Google made almost all its money from ads. It was a booming business — until it wasn’t. Here’s how things looked right before the most spectacular crash the technology industry had ever seen'
      .toLowerCase()
      .split(' ')
      .join(),
    'While Google protected its monopoly on the dying search advertising market, Facebook — Google’s biggest competitor in the online advertising space — got on the right side of the trend and dominated online advertising with its in-feed native display advertisingn'
      .toLowerCase()
      .split(' ')
      .join()
  )
);
