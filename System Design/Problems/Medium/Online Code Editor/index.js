//* https://www.youtube.com/watch?v=07jkn4jUtso
//* https://app.diagrams.net/#G19-VkGCQpJubx0g6wafGoqGrlr_0wwbfz#%7B%22pageId%22%3A%22NngFjB3Ar_e4Q5mp_Wau%22%7D

//* Functional Requirements

//* Run code from multiple programming languages
//* Save Code in real time

//* Non-Functional Requirements
//* Low Latency

//* 1. Frontend

//    Editor Interface:
//        Use a web-based text editor like Monaco Editor (used by VSCode), Ace Editor, or CodeMirror.
//        Features: Syntax highlighting, autocompletion, linting, and error checking.
//    Real-Time Collaboration:
//        Implement collaborative features using WebSockets or WebRTC for peer-to-peer communication.

//* 2. Backend

//    API Server:
//        Handles user authentication, file storage, and project management.
//        RESTful or GraphQL APIs to interact with the frontend.
//    Collaboration Server:
//        Manages real-time collaboration, syncing code changes across users.
//        Uses OT or CRDT algorithms to handle concurrent edits.
//    Code Execution Engine:
//        Sandbox environment to securely execute code in different programming languages.
//        Technologies: Docker containers or a custom sandboxed environment.

//* 6. Security

//    Input Validation:
//        Ensure all inputs are sanitized to prevent XSS, SQL injection, and other attacks.
//    Secure Code Execution:
//        Limit execution time, memory usage, and file access in the sandbox environment.
//    Data Encryption:
//        Encrypt data at rest and in transit using TLS/SSL.
//    Monitoring and Logging:
//        Implement monitoring and logging to detect and respond to suspicious activities.

//* 7. Additional Features

//    Code Sharing:
//        Allow users to share code snippets or entire projects with others via shareable links.
//    Live Preview:
//        Provide a live preview for web projects (HTML, CSS, JavaScript) with auto-refresh.
//    Plugins and Extensions:
//        Support for installing and managing plugins/extensions to enhance the editor’s capabilities.
//    Integration with CI/CD:
//        Integrate with Continuous Integration/Continuous Deployment (CI/CD) tools like Jenkins, GitLab CI, or GitHub Actions.
