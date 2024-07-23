/*
https://medium.com/from-the-scratch/cookies-visualized-everything-you-ever-need-to-know-about-web-cookies-c5f3b403dc65
https://medium.com/@yadav-ajay/using-httponly-and-secure-cookies-on-web-servers-how-to-do-it-52ccf0eabfb4
Cookie and Local Storage in Detail:

1. Cookie:
   - Cookies are small pieces of data sent from a website and stored on the user's device by the web browser.
   - They are commonly used for session management, user authentication, and tracking user behavior.
   - Cookies have expiration dates and can be set to expire after a specific time or when the browser session ends.
   - Cookies can be accessed and manipulated both server-side and client-side.

2. Local Storage:
   - Local Storage is a web storage mechanism available in modern web browsers.
   - It allows web applications to store data locally within the user's browser.
   - Unlike cookies, local storage data is not sent to the server with every HTTP request.
   - Local storage data persists even after the browser is closed and reopened, until explicitly cleared by the user or the application.

3. Differences:
   - Cookies are sent with every HTTP request, whereas local storage data is not.
   - Cookies have size limitations (typically around 4KB), while local storage can store larger amounts of data (usually up to 5MB per domain).
   - Cookies are primarily used for session management and server-side tasks, while local storage is often used for client-side data storage and caching.

4. Use Cases:
   - Cookies are commonly used for authentication tokens, user preferences, and tracking user activities.
   - Local storage is used for storing application state, caching data, and offline functionality.

5. Security Considerations:
   - Cookies are vulnerable to cross-site scripting (XSS) attacks and can be accessed by both the client-side and server-side scripts.
   - Local storage is also susceptible to XSS attacks but is generally considered more secure than cookies due to its client-side nature.

6. Best Practices:
   - Use cookies for sensitive data that needs to be accessed by the server.
   - Use local storage for non-sensitive client-side data and application state.
   - Always validate and sanitize data stored in both cookies and local storage to prevent security vulnerabilities.
*/
