// What is WebRTC?

// WebRTC (Web Real-Time Communication) is a technology that enables peer-to-peer communication between web browsers and
// mobile applications without the need for plugins or additional software. It supports real-time audio, video, and data sharing
// directly between users.

// Key Features:

// 1. Real-Time Communication:
// WebRTC allows for real-time audio and video communication, enabling applications like video calls, live streaming, and
// online meetings.

// 2. Peer-to-Peer Connections:
// WebRTC establishes direct peer-to-peer connections between clients, reducing latency and improving performance by avoiding
// intermediate servers for media transmission.

// 3. Secure Communication:
// WebRTC uses encryption (DTLS and SRTP) to ensure secure data transmission between peers, protecting against eavesdropping and
// tampering.

// 4. Browser Support:
// WebRTC is supported by major web browsers like Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge, allowing for
// cross-platform real-time communication.

// 5. Data Channels:
// WebRTC includes support for data channels, enabling peer-to-peer transmission of arbitrary data in addition to audio and video.
// This is useful for applications like file sharing and gaming.

// How It Works:

// 1. Media Streams:
// WebRTC provides APIs to access media streams from the user’s camera and microphone, allowing you to capture and transmit
// audio and video data.

// Example:
// Accessing media streams:
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//     .then(stream => {
//         // Use the media stream for video or audio
//         const videoElement = document.querySelector('video');
//         videoElement.srcObject = stream;
//     })
//     .catch(error => {
//         console.error('Error accessing media devices.', error);
//     });

// 2. Peer-to-Peer Connections:
// WebRTC establishes peer-to-peer connections using the RTCPeerConnection API. This involves negotiating network parameters and
// exchanging connection details (ICE candidates) to set up the connection.

// Example:
// Creating a peer-to-peer connection:
// const peerConnection = new RTCPeerConnection(configuration);
// peerConnection.addStream(localStream); // Add media stream to connection

// 3. Signaling:
// Before peers can connect, they need to exchange connection information (SDP and ICE candidates) through a signaling server.
// This server helps coordinate the initial handshake but does not participate in the actual data transfer.

// Example:
// Using WebSocket for signaling:
// const signalingChannel = new WebSocket('wss://example.com/signaling');

// Sending an offer:
// peerConnection.createOffer()
//     .then(offer => peerConnection.setLocalDescription(offer))
//     .then(() => signalingChannel.send(JSON.stringify({ type: 'offer', sdp: peerConnection.localDescription })));

// Receiving an offer and creating an answer:
// signalingChannel.onmessage = message => {
//     const signal = JSON.parse(message.data);
//     if (signal.type === 'offer') {
//         peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp))
//             .then(() => peerConnection.createAnswer())
//             .then(answer => peerConnection.setLocalDescription(answer))
//             .then(() => signalingChannel.send(JSON.stringify({ type: 'answer', sdp: peerConnection.localDescription })));

//         // Handle ICE candidates
//         peerConnection.onicecandidate = event => {
//             if (event.candidate) {
//                 signalingChannel.send(JSON.stringify({ type: 'candidate', candidate: event.candidate }));
//             }
//         };
//     } else if (signal.type === 'candidate') {
//         peerConnection.addIceCandidate(new RTCIceCandidate(signal.candidate));
//     }
// };

// 4. Data Channels:
// WebRTC supports data channels for transmitting arbitrary data between peers. This can be used for file transfers, chat messages,
// and other real-time data exchanges.

// Example:
// Creating a data channel:
// const dataChannel = peerConnection.createDataChannel('myDataChannel');

// Sending data over the channel:
// dataChannel.send('Hello, WebRTC!');

// Receiving data from the channel:
// dataChannel.onmessage = event => {
//     console.log('Received data:', event.data);
// };

// Example Usage:

// 1. Video Conferencing:
// WebRTC powers video conferencing applications by enabling real-time audio and video communication between participants
// directly in the browser.

// 2. Live Streaming:
// It is used for live streaming applications where video and audio are broadcasted to viewers in real-time without delay.

// 3. Online Gaming:
// WebRTC’s data channels support real-time multiplayer gaming by allowing fast, low-latency communication between players.

// 4. File Sharing:
// Data channels can be used to implement file sharing features, allowing users to send files directly between browsers.

// In Summary:

// WebRTC is a powerful technology for enabling real-time peer-to-peer communication directly in web browsers and mobile
// applications. It supports real-time audio, video, and data sharing, providing secure and high-performance communication
// without the need for plugins. WebRTC is widely used in applications like video conferencing, live streaming, and online
// gaming, making it a key tool for modern interactive applications.
