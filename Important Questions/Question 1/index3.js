//* Clickjacking

// https://medium.com/@yadav-ajay/clickjacking-afd82d7d9f9f

/*
Summary: Clickjacking

Clickjacking is a type of cyber attack that involves tricking a user into clicking on a button or link on a website, often by displaying the button or link on top of another website or application that the user trusts. The user may not realize they are clicking on the button or link because it appears as part of a trusted website or application.

Clickjacking can be used for various malicious purposes, such as stealing personal information, installing malware, or causing the user to make unintended actions (such as liking a post or making a purchase).

Here are a few examples of how clickjacking can be used:
1. Stealing personal information: A clickjacker might create a fake login page that looks like a legitimate website, tricking a user into entering their login credentials. The clickjacker can then use this information to gain access to the user’s account.
2. Installing malware: A clickjacker might create a fake “download” button and trick users into downloading and installing malware on their devices.
3. Causing unintended actions: A clickjacker might create a fake “like” button and trick users into liking a post or page they usually wouldn’t.
4. Displaying unwanted advertisements: A clickjacker might create a fake “click here to continue” button and trick a user into clicking on an advertisement.

Clickjacking mitigation?
Several methods can be used to mitigate the risk of clickjacking attacks, both on the client and server sides.

Client-side methods:
1. Frame busting: This involves adding a JavaScript code to the page that checks whether the page is being loaded inside a frame, and if so, it breaks out of the frame to display the page in the top-level window. This prevents the page from being used in a clickjacking attack.
2. X-Frame-Options header: This is an HTTP response header that can be used to instruct the browser whether or not a page can be displayed in a frame. The possible values for this header are “DENY”, “SAMEORIGIN”, or a specific URL. If the value is “DENY”, the page cannot be displayed in a frame; if the value is “SAMEORIGIN”, the page can only be displayed in a frame if the frame is on the same domain as the page. If the value is a specific URL, the page can only be displayed in a frame if the frame is on that specific URL.

Server-side methods:
1. Token-based authentication: This involves adding a unique token to each form submission and then checking for the presence of the token on the server before processing the submission. This prevents an attacker from being able to use a clickjacking attack to trick a user into submitting a form on a page controlled by the attacker.
2. CAPTCHA: This challenge-response test is used to determine whether the user is a human or a computer. By requiring the user to solve a CAPTCHA before they can submit a form, it becomes much more difficult for an attacker to use a clickjacking attack to submit a form on the user’s behalf.
3. Security headers: In addition to the X-Frame-Options header, several other security headers can help mitigate the risk of clickjacking attacks. These headers include the Content-Security-Policy header, which can be used to specify which domains are allowed to load resources on the page, and the X-Content-Type-Options header, which can be used to prevent content type sniffing.
*/
