
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    matrix.filter((element, index) => {
      if (index % 2 === 1) element.reverse();
    })
    return matrix.flat();
  }
}
