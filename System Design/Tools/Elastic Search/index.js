// What is Elasticsearch?

// Elasticsearch is an open-source, distributed search and analytics engine built on top of Apache Lucene.
// It is designed for fast, scalable search and analytics capabilities, making it suitable for a wide range of use cases,
// including full-text search, logging, and real-time analytics.

// Key Features:

// 1. Full-Text Search:
// Elasticsearch provides powerful full-text search capabilities. It supports advanced search features like tokenization,
// stemming, and relevance scoring to find relevant documents quickly.

// 2. Distributed and Scalable:
// Elasticsearch is designed to be distributed across multiple nodes in a cluster. It can scale horizontally by adding more nodes
// to handle increased data volume and query load.

// 3. Real-Time Data Ingestion:
// Elasticsearch allows for real-time data ingestion and indexing. This means that data can be searched and analyzed almost
// immediately after it is ingested.

// 4. RESTful API:
// Elasticsearch provides a RESTful API for interacting with the cluster. You can perform various operations like indexing,
// searching, and managing the cluster using HTTP requests.

// 5. Schema-Free JSON Documents:
// Elasticsearch stores data in JSON format, and it supports schema-free indexing. You can index documents without defining a fixed
// schema, allowing for flexible and dynamic data models.

// How It Works:

// 1. Indexes and Documents:
// Data in Elasticsearch is organized into indexes. Each index contains multiple documents, which are JSON objects representing
// the data you want to search and analyze.

// Example:
// Indexing a document:
// const document = {
//     index: 'my-index',
//     id: '1',
//     body: {
//         title: 'Elasticsearch Guide',
//         content: 'Learn how to use Elasticsearch for search and analytics.',
//     },
// };
// elasticsearchClient.index(document);

// 2. Shards and Replicas:
// Elasticsearch divides indexes into smaller units called shards. Each shard can be replicated to ensure high availability
// and fault tolerance. This distribution allows Elasticsearch to handle large volumes of data efficiently.

// Example:
// Creating an index with custom settings:
// const indexSettings = {
//     index: 'my-index',
//     body: {
//         settings: {
//             number_of_shards: 3,
//             number_of_replicas: 2,
//         },
//     },
// };
// elasticsearchClient.indices.create(indexSettings);

// 3. Querying Data:
// Elasticsearch provides a powerful query language called Query DSL (Domain Specific Language). You can perform various
// types of queries, including full-text search, filtering, and aggregations.

// Example:
// Performing a search query:
// const searchQuery = {
//     index: 'my-index',
//     body: {
//         query: {
//             match: { title: 'Elasticsearch' },
//         },
//     },
// };
// elasticsearchClient.search(searchQuery).then(response => {
//     console.log(response.hits.hits); // Outputs search results
// });

// 4. Aggregations:
// Elasticsearch supports aggregations, which allow you to perform complex analytics and group data based on various criteria.

// Example:
// Performing an aggregation query:
// const aggregationQuery = {
//     index: 'my-index',
//     body: {
//         aggs: {
//             tags: {
//                 terms: { field: 'tags.keyword' },
//             },
//         },
//     },
// };
// elasticsearchClient.search(aggregationQuery).then(response => {
//     console.log(response.aggregations.tags.buckets); // Outputs aggregation results
// });

// 5. Cluster Management:
// Elasticsearch clusters consist of multiple nodes that work together. You can manage the cluster, including adding or removing
// nodes, monitoring health, and adjusting settings, through the RESTful API or management tools.

// Example:
// Checking cluster health:
// const healthCheck = {
//     index: '_cluster/health',
// };
// elasticsearchClient.cluster.health(healthCheck).then(response => {
//     console.log(response);
// });

// Example Usage:

// 1. Full-Text Search:
// Elasticsearch is commonly used for building search engines that support complex queries and provide relevant search results
// in real-time.

// 2. Log and Event Data Analysis:
// It is widely used for analyzing log and event data, providing insights into application performance, security, and user behavior.

// 3. Data Visualization:
// Elasticsearch integrates with Kibana, a data visualization tool, to create interactive dashboards and visualizations for
// exploring and analyzing data.

// 4. E-Commerce and Content Management:
// Elasticsearch powers search and recommendation engines in e-commerce platforms and content management systems, enhancing user
// experience and discoverability.

// In Summary:

// Elasticsearch is a robust search and analytics engine known for its speed, scalability, and flexibility. It supports powerful
// full-text search, real-time data ingestion, and advanced analytics through a distributed architecture. Elasticsearch is used
// across various domains, from search engines to data analytics platforms, making it a versatile tool for modern applications.
