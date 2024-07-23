//*Find first `k` maximum occurring words in a given set of strings
var topKFrequent = function (words, k) {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word] + 1 || 1;
    }
    let result = Object.keys(hash).sort((a, b) => {
        if (hash[a] !== hash[b]) {
            return hash[b] - hash[a]
        }else{
            return a.localeCompare(b)
        }
    })
    return result.slice(0, k);
};