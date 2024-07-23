//* Verifying an Alien Dictionary
const isAlienSorted = (words, order) => {
  if (words.length === 1) return true;

  const orderMap = {};
  order.split("").forEach((char, index) => (orderMap[char] = index + 1));

  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    const word1 = words[i];
    const word2 = words[i + 1];
    while (word1[j] || word2[j]) {
      const char1 = orderMap[word1[j]] || 0;
      const char2 = orderMap[word2[j]] || 0;
      if (char1 > char2) return false;
      if (char1 < char2) break;
      j++;
    }
  }
  return true;
};
