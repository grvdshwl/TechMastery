//* Minimum Genetic Mutation
function minMutation(startGene, endGene, bank) {
  if (!bank.includes(endGene)) {
    return -1;
  }

  let queue = [[startGene, 0]];
  let visited = new Set();

  while (queue.length) {
    const [pattern, mutations] = queue.shift();
    if (pattern === endGene) {
      return mutations;
    }

    const children = findMutation(pattern, bank);

    for (let child of children) {
      if (!visited.has(child)) {
        queue.push([child, mutations + 1]);
        visited.add(child);
      }
    }
  }

  return -1;
}

function findMutation(gene, bank) {
  const mutations = [];
  for (let i = 0; i < gene.length; i++) {
    for (let char of ["A", "C", "G", "T"]) {
      if (char !== gene[i]) {
        const newGene = gene.slice(0, i) + char + gene.slice(i + 1);
        if (bank.includes(newGene)) {
          mutations.push(newGene);
        }
      }
    }
  }
  return mutations;
}
