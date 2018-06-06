const lcs = (s, t) => {
  let m = s.length;
  let n = t.length;

  let matrix = [];

  for (let i = 0; i <= m; i++) {
    matrix[i] = [];
    for (let j = 0; j <= n; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i] == t[j]) {
        matrix[i + 1][j + 1] = matrix[i][j] + 1;
      } else {
        matrix[i + 1][j + 1] = Math.max(matrix[i + 1][j], matrix[i][j + 1]);
      }
    }
  }

  //   console.log(matrix);

  return matrix[m][n];
};

console.log(
  lcs(
        'abcdefghijklmnabcdefgopqrs',
      'adrfijklop'  
  )
);
