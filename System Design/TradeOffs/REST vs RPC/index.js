/**
 * System Design: REST vs. RPC
 *
 * REST (Representational State Transfer):
 * - REST is an architectural style for building web services that rely on stateless, client-server communication, typically over HTTP.
 * - Resources are exposed via endpoints (URLs) and identified using standard HTTP methods (GET, POST, PUT, DELETE).
 * - RESTful services are designed around resources, not actions.
 *
 * Characteristics:
 * - **Stateless**: Each request contains all the information needed for the server to process it; no session or state is stored on the server.
 * - **Resource-Oriented**: Everything is treated as a resource (e.g., users, posts) and is accessed via unique URIs.
 * - **HTTP Methods**: Uses standard HTTP methods for operations:
 *   - `GET` to retrieve a resource.
 *   - `POST` to create a new resource.
 *   - `PUT` to update an existing resource.
 *   - `DELETE` to remove a resource.
 * - **Representation**: Resources can be represented in various formats like JSON, XML, HTML, etc.
 *
 * Example:
 * - A REST API might expose a `GET /users` endpoint to fetch all users or a `POST /users` endpoint to create a new user.
 *
 * Advantages of REST:
 * - **Scalability**: Due to its stateless nature, REST can easily scale across servers.
 * - **Simplicity**: Relies on HTTP, making it easy to understand and implement, especially in web environments.
 * - **Flexibility**: Supports various formats (JSON, XML) for data exchange.
 *
 * Disadvantages of REST:
 * - **Overhead**: Repeated use of HTTP headers and URIs can introduce some overhead compared to more lightweight protocols.
 * - **Strict**: Resource-based approach may not be as flexible for complex, action-based operations.
 *
 * Use Cases for REST:
 * - Web and mobile applications where the client needs to interact with resources.
 * - Systems where statelessness and scalability are key design requirements.
 */

/**
 * RPC (Remote Procedure Call):
 * - RPC is a communication protocol where a client can execute a function or procedure on a remote server as if it were local.
 * - Unlike REST, which is resource-based, RPC is action-based and focuses on executing procedures remotely.
 * - RPCs often follow request-response patterns and can use various transport protocols (e.g., HTTP, TCP).
 *
 * Characteristics:
 * - **Action-Oriented**: RPCs are focused on calling methods (procedures) like `createUser()` or `getOrderStatus()`.
 * - **Tight Coupling**: Often, the client and server are tightly coupled, as the client is aware of the specific procedures it needs to call.
 * - **Protocol Variants**: Different implementations include:
 *   - JSON-RPC: Uses JSON to encode requests and responses.
 *   - XML-RPC: Encodes requests and responses in XML.
 *   - gRPC: Google's RPC framework, which uses Protocol Buffers for serialization and supports HTTP/2.
 *
 * Example:
 * - An RPC might expose a `createUser(name, email)` function that clients call directly to create a user on the server.
 *
 * Advantages of RPC:
 * - **Efficiency**: Simple and direct method calls can reduce overhead, especially with formats like gRPC.
 * - **Action-Focused**: Well-suited for applications that need to perform complex operations that don’t map easily to REST's resource model.
 * - **Performance**: Protocols like gRPC offer high performance due to features like binary serialization and HTTP/2.
 *
 * Disadvantages of RPC:
 * - **Tight Coupling**: Changes in the server-side procedures may require changes in the client, reducing flexibility.
 * - **Less Standardization**: Unlike REST, there are no universally accepted standards, so implementations can vary significantly.
 * - **Complexity**: RPC implementations (especially gRPC) can be more complex to set up and maintain than REST.
 *
 * Use Cases for RPC:
 * - Microservices architectures where services need to interact efficiently with method calls.
 * - Systems requiring low-latency and high-performance communications (e.g., gRPC in large-scale distributed systems).
 */

/**
 * REST vs. RPC:
 * - **REST**: Resource-oriented, stateless, relies on HTTP methods, and is easy to implement but can have overhead.
 * - **RPC**: Action-oriented, method calls, can be more efficient but involves tighter coupling and more complex setups.
 *
 * Trade-offs:
 * - **REST** is ideal for applications that work well with resources and need stateless scalability, like web APIs.
 * - **RPC** is better for systems that require complex actions or need low-latency, high-performance communication, like microservices.
 *
 * Choosing Between the Two:
 * - **REST**: Choose REST for systems that need to expose resources in a simple, scalable, and stateless manner.
 * - **RPC**: Choose RPC when you need to perform complex actions and prioritize performance over simplicity.
 */
