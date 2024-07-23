/*
Summary: Insecure Direct Object References (IDOR)
https://medium.com/@jainharsh2929/idor-insecure-direct-object-reference-20476c70a602

IDOR stands for Insecure Direct Object Reference. It’s a type of security
vulnerability that occurs when a web app allows an attacker to directly
access internal objects or resources without proper authorization.

Imagine you’ve just signed up for an online service, and you want to change 
your profile information. The link you click on goes to 
http://online-service.thm/profile?user_id=1305, and you can see your information.

Curiosity gets the better of you, and you try changing the user_id value to 
1000 instead (http://online-service.thm/profile?user_id=1000), and to your 
surprise, you can now see another user’s information. You’ve now discovered 
an IDOR vulnerability!
*/

// HOW YOU CAN FIND IDOR ?

// Encoded IDs
// When passing data from page to page either by post data, query strings, or
// cookies, web developers will often first take the raw data and encode it.
// Encoding ensures that the receiving web server will be able to understand
// the contents. Encoding changes binary data into an ASCII string commonly
// using the a-z, A-Z, 0-9 and = character for padding. The most common
// encoding technique on the web is base64 encoding and can usually be pretty
// easy to spot. You can use websites like https://www.base64decode.org/ to
// decode the string, then edit the data and re-encode it again using
// https://www.base64encode.org/ and then resubmit the web request to see if
// there is a change in the response.

// Hashed IDs
// Hashed IDs are a little bit more complicated to deal with than encoded
// ones, but they may follow a predictable pattern, such as being the hashed
// version of the integer value. For example, the Id number 123 would become
// 202cb962ac59075b964b07152d234b70 if md5 hashing were in use. It’s
// worthwhile putting any discovered hashes through a web service such as
// https://crackstation.net/ (which has a database of billions of hash to
// value results) to see if we can find any matches.

// Unpredictable IDs
// If the Id cannot be detected using the above methods, an excellent method
// of IDOR detection is to create two accounts and swap the Id numbers between
// them. If you can view the other users’ content using their Id number while
// still being logged in with a different account (or not logged in at all),
// you’ve found a valid IDOR vulnerability.
