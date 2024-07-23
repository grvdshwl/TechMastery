//* 	Partition Labels
var partitionLabels = function (s) {
  let lastIndexMap = {};

  s.split("").forEach((char, index) => {
    lastIndexMap[char] = index;
  });

  let result = [];
  let size = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    size += 1;
    if (lastIndexMap[char] > end) {
      end = lastIndexMap[char];
    }

    if (i === end) {
      result.push(size);
      size = 0;
    }
  }

  return result;
};
