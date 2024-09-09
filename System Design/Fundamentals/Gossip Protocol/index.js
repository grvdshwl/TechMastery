/**
 * Gossip Protocol
 * ---------------
 * Gossip protocol (also known as epidemic protocol) is a communication protocol used in distributed systems where nodes
 * exchange information with a small set of randomly chosen peers. Over time, the entire network becomes aware of new information
 * through repeated exchanges, much like the way gossip spreads in social networks.
 *
 * Key Points:
 * -----------
 * 1. **Decentralized Communication**: There is no central authority or coordinator. Each node communicates with others
 *    directly, making the system highly fault-tolerant.
 * 2. **Scalability**: Gossip protocols scale well in large distributed systems as they don’t rely on any central server,
 *    and communication happens locally between nodes.
 * 3. **Fault-Tolerance**: Nodes can fail or leave the network without disrupting communication since messages propagate
 *    independently across many nodes.
 * 4. **Random Peer Selection**: Each node periodically selects a few other nodes at random to exchange information with.
 * 5. **Convergence**: Given enough time, all nodes will eventually receive the information, though it happens gradually.
 * 6. **Redundancy**: The same information may be exchanged multiple times, ensuring that even if some messages are lost,
 *    others will still reach their destination.
 *
 * Gossip Protocol Operations:
 * ---------------------------
 * 1. **Push Gossip**: A node that has new information actively sends (pushes) it to other nodes.
 * 2. **Pull Gossip**: A node actively asks (pulls) for information from other nodes.
 * 3. **Push-Pull Gossip**: A combination where nodes both send and request information from others.
 *
 * Use Case: Gossip Protocol in a Distributed Hash Table (DHT)
 * -----------------------------------------------------------
 * Scenario:
 * - A peer-to-peer file sharing system like BitTorrent uses a distributed hash table (DHT) to locate files across multiple
 *   nodes in the network.
 * - New file locations need to be propagated to all peers in the network, but without a central server.
 *
 * Solution:
 * - The Gossip protocol is used to distribute file location information. Each peer in the network communicates with a few
 *   other peers, sharing file location data.
 * - Over time, all peers in the network learn the location of each file, making it possible to retrieve the file efficiently
 *   without centralized control.
 *
 * Example: Simulating Gossip Protocol in JavaScript
 * -------------------------------------------------
 */

class Node {
  constructor(id) {
    this.id = id;
    this.knownInfo = {}; // Information the node knows
    this.peers = []; // List of connected peers
  }

  // Share information with randomly selected peers
  gossip() {
    // Select a random peer to share information with
    const peer = this.peers[Math.floor(Math.random() * this.peers.length)];
    if (peer) {
      this.shareInfo(peer);
    }
  }

  // Share current known information with the selected peer
  shareInfo(peer) {
    console.log(`Node ${this.id} sharing info with Node ${peer.id}`);
    // Merge the peer's information with the current node's known info
    Object.assign(peer.knownInfo, this.knownInfo);
  }

  // Receive new information
  receiveInfo(info) {
    console.log(`Node ${this.id} received new info: ${JSON.stringify(info)}`);
    this.knownInfo = { ...this.knownInfo, ...info };
  }

  // Add a peer to the node
  connect(peer) {
    this.peers.push(peer);
  }
}

// Create 5 nodes to simulate a network
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Connect nodes (forming a simple peer-to-peer network)
node1.connect(node2);
node2.connect(node3);
node3.connect(node4);
node4.connect(node5);
node5.connect(node1);

// Node 1 gets some new information
node1.receiveInfo({ fileLocation: "http://example.com/file1" });

// Nodes start gossiping
setInterval(() => {
  node1.gossip();
  node2.gossip();
  node3.gossip();
  node4.gossip();
  node5.gossip();
}, 2000);

/**
 * Explanation:
 * ------------
 * 1. Each node in the network has a list of known information and a list of peers it can communicate with.
 * 2. When new information arrives at a node (e.g., a new file location), it starts to share that information with its peers.
 * 3. Each node periodically "gossips" by randomly selecting a peer and sharing its known information.
 * 4. Over time, all nodes in the network will have the same set of information, achieving convergence.
 *
 * User Case: Gossip Protocol in Service Discovery
 * -----------------------------------------------
 * Scenario:
 * - In a microservices architecture, there are many services running across multiple nodes. When a new service instance is
 *   added or an existing one is removed, all other services need to know about the change.
 *
 * Solution:
 * - The Gossip protocol can be used to propagate service registry information across the network. When a service instance
 *   comes online, it gossips its existence to a few random nodes, which in turn pass the information to others.
 * - Eventually, every node in the network knows about the new service instance, without requiring a central discovery server.
 *
 * Benefits of Gossip Protocol:
 * ----------------------------
 * 1. **Scalability**: Gossip protocols scale naturally with the size of the system, making them suitable for large distributed
 *    networks.
 * 2. **Fault Tolerance**: Since communication is decentralized, individual node failures do not disrupt the entire network.
 * 3. **Eventual Consistency**: Although updates may not be instantaneous, given enough time, all nodes will have the same
 *    information, ensuring eventual consistency.
 * 4. **Low Bandwidth**: Gossiping occurs only between a small number of peers at each step, so the network load is minimal.
 * 5. **Resilience to Partitioning**: Even if the network is temporarily split, once the partition is healed, the gossip protocol
 *    can ensure that all nodes eventually receive the updated information.
 *
 * Real-World Scenario: Cassandra and Gossip Protocol
 * --------------------------------------------------
 * - **Apache Cassandra**, a popular distributed database, uses the Gossip protocol to share information about node health,
 *   network topology, and other metadata.
 * - Each node in the Cassandra cluster periodically gossips its status with a small set of other nodes, ensuring that the
 *   cluster remains aware of which nodes are available and operational.
 * - This decentralized approach allows Cassandra to scale horizontally and maintain availability even in the presence of
 *   node failures.
 */
