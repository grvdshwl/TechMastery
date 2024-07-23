//* Defination

// JavaScript characteristics:
// - High-level, prototype-based object-oriented language
// - Supports multiple paradigms: object-oriented, functional, and imperative
// - Interpreted or just-in-time compiled
// - Dynamic typing, types determined at runtime
// - Single-threaded execution
// - Garbage-collected for automatic memory management
// - Functions are first-class citizens
// - Uses a non-blocking event loop for concurrency

/*
JavaScript Engine uses Call Stack and the Heap Memory:
Note: JavaScript is used for both client-side and server-side (Node.js).

************************** Memory Management **************************

All JavaScript engines contain call-stack and heap:
Call-Stack
- Manages the execution of JavaScript functions.
- Stack memory is used for function call-related operations with a limited size.
- When a function is called, a new frame is pushed onto the stack to store information about the execution.
- After execution, the frame is popped from the stack.

Heap
- Unstructured memory for Dynamic Memory Allocation storing objects needed for the application.
- Stores Objects, Closures, and other Data Structures with longer lifetimes.
- Memory allocation and deallocation are managed dynamically by the Garbage Collector.

Memory Pool (V8’s NewSpace and OldSpace):
- Heap Memory is categorized into NewSpace and OldSpace.
- NewSpace: Fast garbage collection with a size of 1–8MBs. Surviving objects are promoted to OldSpace.
- OldSpace: Used for long-lived objects with larger memory footprint.

****************************************************************************
Working

- JavaScript code is parsed into Abstract Syntax Tree (AST), helping in creating Machine Code.
- Execution occurs in JavaScript engine call stack using execution context.

JavaScript Code -> Parsing -> Compilation(AST) -> Execution -> Optimization

JavaScript Runtime
- Components include JavaScript Engine, Web APIs, and callback queue.
- Web APIs provide functionalities to JavaScript engine but are not part of the JavaScript language.
- Callback Queue contains callback functions ready to be executed in FIFO method when the stack is empty.
- JS runtime consist of JS engine , APIs(DOM,fetch,timers), Task queue ,Micro task queue and event loop.

Browser's Runtime Environment: Provides access to DOM enabling interaction with web page elements, handling events, and manipulating the page structure.
Node.js Runtime Environment: Provides server-side runtime environment, replacing web APIs with C++ bindings and thread pool.

JavaScript Optimization Techniques
- Just-In-Time compilation: Translates JavaScript code into machine code dynamically during execution.
- JIT compilation speeds up execution, making JavaScript not purely Interpreted language.
- Unoptimized code is created for immediate execution, while re-optimization and recompilation occur in the background for the final, most optimized version.

Finally!
Understanding how JavaScript works internally sets the stage for exploring more concepts in depth.
*/
