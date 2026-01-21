'use strict';

function filter (arr, callback) {
  const result = [];

  for (const item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }

  return result;
}

function createSizeFilter (size) {
  const sizeFilter = (item) => item.length <= size;

  return sizeFilter;
}

const size3 = createSizeFilter(3);
const size5 = createSizeFilter(5);
const candi = ['Mars', 'KitKat', 'Baunti', 'nads'];

console.log(
  'size3',
  filter(candi, size3),
)
console.log(
  'size5',
  filter(candi, size5),
)

