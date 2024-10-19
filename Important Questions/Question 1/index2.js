//* Cross-Site Request Forgery (CSRF)

// https://medium.com/@yadav-ajay/cross-site-request-forgery-csrf-64066cddbfb3

/*
    Cross-Site Request Forgery (CSRF) Attack - How It Works and How a User Becomes a Victim

    1. What is CSRF?
       - CSRF (Cross-Site Request Forgery) is an attack where a malicious website tricks the victim into making unwanted requests to a different site where the user is authenticated.
       - This allows the attacker to perform actions on the victim's behalf, like transferring funds or changing account settings, without the victim’s knowledge.

    2. How the Attack Works:
       - The victim is logged into a legitimate website (e.g., online banking, social media).
       - The attacker creates a malicious link or form that sends a request to the legitimate website, using the victim's session (cookies) to authorize the action.

       Example of a malicious request:
       ```html
       <img src="https://legitimatebank.com/transfer?amount=1000&toAccount=attacker_account">
       ```

    3. How the User Becomes a Victim:
       a) Phishing Emails:
          - The attacker sends the victim an email with a malicious link that triggers a CSRF attack when clicked.

       b) Embedded Content on Malicious Websites:
          - The attacker embeds an auto-submitting form or an image tag that sends a request when the victim visits their site.

       c) Cross-Site Requests:
          - The attacker tricks the victim into clicking a link or visiting a page where a hidden request (e.g., an `img` tag) is automatically made to the target website.

    4. What Happens When the Link is Clicked or the Request is Triggered:
       - Since the victim is already authenticated on the legitimate website, their session cookies are automatically included in the malicious request.
       - The legitimate website sees the request as valid because it includes the victim’s authentication credentials, even though the victim did not authorize it.

       Example of a malicious form (auto-submitting):
       ```html
       <form action="https://legitimatebank.com/transfer" method="POST">
         <input type="hidden" name="amount" value="1000">
         <input type="hidden" name="toAccount" value="attacker_account">
       </form>
       <script>document.forms[0].submit();</script>
       ```

    5. Result - Unwanted Actions on Behalf of the Victim:
       - The legitimate website processes the request as if it was made by the victim, leading to actions like money transfers, changing passwords, or modifying account details.
       - The attacker can carry out these actions without the victim's awareness.

    Summary:
    - The attacker tricks the victim into making unwanted requests to a legitimate website where the victim is authenticated.
    - The malicious requests are sent with the victim’s credentials (session cookies), so the website processes the requests as if they came from the victim.
    - This can result in unauthorized actions, such as transferring funds, changing account settings, or deleting data.

    Prevention Tips for Users:
    - Avoid clicking on suspicious links in emails or messages.
    - Log out of sensitive websites (e.g., banking, social media) when you're not actively using them.
    - Use browser extensions to block malicious scripts.

    ---------------------------------------------------

    Preventive Measures for Developers:

    1. Anti-CSRF Tokens:
       - Generate and include unique, unpredictable tokens in forms or state-changing requests.
       - The server should verify that the token is valid and matches the user’s session before processing the request.

       Example:
       ```html
       <input type="hidden" name="csrf_token" value="random_token_generated_on_server">
       ```

    2. Use SameSite Cookies:
       - Set the `SameSite` attribute on session cookies to `Strict` or `Lax`, ensuring that cookies are not sent with cross-site requests.
       - This prevents cookies from being automatically included in requests initiated from other websites.

       Example:
       ```http
       Set-Cookie:
*/
