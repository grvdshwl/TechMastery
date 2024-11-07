//* Roadside coder important  polyfills - Promise and others

//* DBs

//* SQL
//* MongoDB

//* Node JS
//*Express JS
//* code walkthrough

//* Interview questions
//* redis

/*
    Comparison of MySQL, PostgreSQL, MongoDB, and Redis

    | Feature                    | MySQL                                      | PostgreSQL                                | MongoDB                                   | Redis                                   |
    |----------------------------|--------------------------------------------|-------------------------------------------|-------------------------------------------|-----------------------------------------|
    | Type                       | Relational Database (RDBMS)                | Relational Database (RDBMS)               | NoSQL (Document Store)                    | In-memory Data Structure Store          |
    | Data Model                 | Tables with rows and columns (Structured Data) | Tables with rows and columns (Structured Data) | Collections with documents (Flexible schema) | Key-Value pairs (Strings, Lists, Sets, etc.) |
    | ACID Compliance            | Yes                                        | Yes                                       | No                                        | No (but supports atomic operations)     |
    | Transactions               | Yes                                        | Yes                                       | Limited (with multi-document transactions) | Limited (transactions supported in Lua scripts) |
    | Schema                     | Fixed schema (Table-based)                 | Flexible schema (but follows relational model) | Schema-less (Flexible schema per document) | No schema (Key-value store)             |
    | Joins                      | Supports Joins (INNER, LEFT, RIGHT, etc.)  | Supports Joins (INNER, LEFT, RIGHT, etc.) | No joins (Use embedding or linking documents) | No joins (Can use multiple keys to simulate relationships) |
    | Indexing                   | B-tree indexing, Full-text indexing        | B-tree, GiST, GIN, SP-GiST, Hash indexes  | Single-field, compound, and geospatial indexes | Supports basic indexing for keys        |
    | SQL Support                | Full SQL support                           | Full SQL support with advanced features   | NoSQL query language (JSON-based)         | NoSQL query language (Commands via Redis CLI) |
    | Performance                | Good for transactional workloads           | Good for complex queries, analytics, and OLAP | High performance for large-scale data with unstructured schema | Extremely fast (in-memory)              |
    | Data Consistency           | Strong consistency (ACID)                  | Strong consistency (ACID)                 | Eventual consistency (tunable consistency) | Strong consistency for single keys      |
    | Scaling                    | Vertical scaling (horizontal with sharding) | Vertical scaling (horizontal with sharding) | Horizontal scaling (Sharding natively supported) | Horizontal scaling (Sharding supported) |
    | Replication                | Master-Slave, Master-Master                | Streaming replication, Logical replication | Replica Sets (Primary-Secondary)          | Master-Slave, Sentinel, Cluster         |
    | Use Cases                  | Transactional applications, ERP, CMS       | Complex queries, Analytics, Geospatial, OLAP | Big Data, Content management, Real-time apps | Caching, Session management, Pub/Sub, Queues |
    | Licensing                  | Open-source (GPL), Enterprise edition available | Open-source (PostgreSQL License)          | Open-source (Server-side License)         | Open-source (MIT License)               |
    | Backup and Recovery        | Built-in support for backups               | Built-in support for backups              | Backup mechanisms available (e.g., mongodump) | Persistence options with RDB, AOF for durability |
    | Community Support          | Large, mature community                    | Large, active community                   | Large, growing community                  | Large, active community                 |

    Key Differences:
    1. **Data Model**:  
        - **MySQL** and **PostgreSQL** are relational databases, with fixed schemas and table-based storage.  
        - **MongoDB** is a document-based NoSQL database, allowing more flexibility with data storage, supporting JSON-like documents.  
        - **Redis** is a key-value store, mainly used for in-memory caching and real-time data processing.
    
    2. **ACID Compliance**:  
        - **MySQL** and **PostgreSQL** are ACID-compliant, ensuring strong consistency for transactional applications.  
        - **MongoDB** and **Redis** have limited support for ACID transactions (MongoDB supports multi-document transactions starting with version 4.0, Redis supports atomic operations).

    3. **Scaling**:  
        - **MongoDB** and **Redis** provide native horizontal scaling (sharding), while **MySQL** and **PostgreSQL** generally scale vertically but can also be horizontally sharded.

    4. **Performance**:  
        - **Redis** is extremely fast due to its in-memory nature, making it ideal for caching, real-time data, and high-throughput scenarios.  
        - **MongoDB** can handle large unstructured datasets with high performance, while **PostgreSQL** is better suited for complex queries and analytics.

    5. **Use Cases**:  
        - **MySQL** is commonly used for traditional relational applications (e.g., finance, e-commerce).  
        - **PostgreSQL** is preferred for analytics, complex queries, and OLAP.  
        - **MongoDB** is suited for big data, content management, and real-time applications.  
        - **Redis** excels in caching, session management, and pub/sub use cases.

    Conclusion:
    - **MySQL** and **PostgreSQL** are ideal for applications that require structured data and complex relational queries.
    - **MongoDB** is perfect for applications with unstructured or semi-structured data that benefit from horizontal scaling.
    - **Redis** is the best choice for scenarios requiring extremely fast data access, real-time operations, or caching solutions.
*/
