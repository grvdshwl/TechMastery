//* Explain the security vurnabilities in frontend like xss
//* How they happen and how to prevent them

// https://medium.com/@yadav-ajay/cross-site-scripting-xss-eb66824493ae

//* Cross Site Scripting

// Cross-Site Scripting (XSS) is a common security vulnerability in web
// applications, particularly in the frontend, which occurs when an attacker
// injects malicious scripts into web pages viewed by other users.

// The malicious code is executed by the victim’s web browser, potentially leading
// to data theft, session hijacking, or even complete control over the affected
// user’s account

// This can happen in various ways, including:

// Reflected XSS: The attacker injects malicious code into a URL or a form input,
// which is then reflected back to the user by the web application. For example,
// if a website includes user input directly into a webpage without proper
// sanitization or validation, an attacker could craft a URL containing a
// malicious script that, when clicked by a victim, executes in the victim's
// browser.

// Stored XSS: The attacker injects malicious scripts directly into a web
// application's database, typically through user-generated content such as
// comments or forum posts. When other users view this content, the script is
// executed in their browsers.

// DOM-based XSS: This occurs when the vulnerability is in the client-side code
// rather than the server-side. The attacker manipulates the Document Object
// Model (DOM) environment in the victim's browser to execute malicious scripts.
// This can happen when the application dynamically updates the DOM based on
// user input without proper validation or encoding.

// Manual testing is another effective method for identifying Stored XSS vulnerabilities. Here’s how to perform manual testing for Stored XSS:

//     Identify potential targets: Analyze the web application to locate areas where user-generated content is stored and displayed, such as comment sections, user profiles, and message boards.
//     Test input fields: Manually input various XSS payloads into these fields to test for potential vulnerabilities. Common payloads include JavaScript snippets, HTML tags, and encoded characters.
//     Observe the output: After submitting the payloads, check whether they are executed or displayed as plain text when viewing the affected pages. If the payloads are executed, this may indicate a Stored XSS vulnerability.
