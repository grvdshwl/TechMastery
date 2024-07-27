
//* APIs

// Example:
// A payment gateway API allows an e-commerce website to process payments 
// by communicating with a payment service provider.
// In JavaScript, you might use the Fetch API to send a payment request:
// 
// fetch('https://payment.example.com/api/pay', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer token'
//   },
//   body: JSON.stringify({ amount: 100, currency: 'USD' })
// }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


//* SDK

// Example:
// An SDK for Android app development might include:
// - APIs to interact with Android OS features (e.g., camera, location services).
// - A development environment like Android Studio.
// - A device emulator for testing apps.
// - Documentation and sample projects to help developers get started.
// In JavaScript, a cloud storage SDK might include an API like this:
// 
// import { Storage } from '@google-cloud/storage';
// const storage = new Storage();
// const bucket = storage.bucket('my-bucket');
// bucket.upload('local-file.txt', {
//   destination: 'remote-file.txt',
//   public: true,
//   metadata: {
//     cacheControl: 'public, max-age=31536000',
//   },
// }, (err, file) => {
//   if (err) {
//     console.error('Upload failed:', err);
//   } else {
//     console.log('File uploaded:', file.name);
//   }
// });