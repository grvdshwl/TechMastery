//* Cross-Site Request Forgery (CSRF)

// https://medium.com/@yadav-ajay/cross-site-request-forgery-csrf-64066cddbfb3

// CSRF: Unauthorized requests from a user's browser to a site they're authenticated on, via a malicious site.
// Malicious script exploits site's auth. User's browser sends requests without consent.
// Actions: Change password, transfer funds, delete data. Prevention: Random tokens, SameSite attribute in cookies.

// CSRF Concept: Attacker tricks user's browser into unwanted action on authenticated web app.
// Attacker exploits trust in user's session. Action examples: Money transfer, password change.
// Attack: Tricking browser to send unauthorized request. Countermeasures: Additional validation, request origin check, session tokens.

// CSRF Case Study: Attacker exploits user's session on online banking site.
// Malicious code creates hidden form for unauthorized transaction. User's session is used for transaction without consent.

// Vulnerable Java Code: Allows changing account settings without proper CSRF token verification.
// Solution: Include CSRF token in form for validation. Token ensures request's legitimacy.

// CSRF Mitigation Methods:

// 1. Synchronizer Token Pattern: Server generates random CSRF token, compared with request token.

// 2. Double Submit Cookies: Server sends two cookies; one for auth, another for CSRF protection.

// 3. Referer Header Checking: Validates referer header to ensure same-site origin.

// 4. Custom Header Checking: Uses custom HTTP headers for request authenticity validation.

// 5. CAPTCHA checking on server side.
