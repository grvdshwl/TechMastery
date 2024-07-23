// Simple hashing function (not secure, for illustration purposes only)
const simpleHash = (data) => {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash.toString();
};

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return simpleHash(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    );
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2023", "Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Usage
let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, "11/27/2023", { amount: 4 }));
myBlockchain.addBlock(new Block(2, "11/28/2023", { amount: 10 }));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log("Is blockchain valid? " + myBlockchain.isChainValid());
