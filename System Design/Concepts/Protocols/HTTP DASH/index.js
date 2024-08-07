// HTTP Dynamic Adaptive Streaming over HTTP (DASH), commonly known as MPEG-DASH,
// is a streaming technique used to deliver high-quality video content over the internet.

// Key concepts and components of DASH:

// 1. Segmentation:
//    - DASH breaks down video content into small segments, typically a few seconds long.
//    - Each segment is encoded at multiple bitrates to accommodate different network conditions.

// 2. Manifest File (MPD):
//    - The Media Presentation Description (MPD) is a manifest file that describes the media content.
//    - It contains metadata about the segments, including their URLs, durations, and available bitrates.
//    - The MPD is an XML file that the DASH client reads to understand how to fetch and play the segments.

// Example of an MPD file:
/*
<?xml version="1.0"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" type="static" mediaPresentationDuration="PT60M">
  <Period duration="PT60M">
    <AdaptationSet mimeType="video/mp4" codecs="avc1.4d401f" width="1280" height="720" frameRate="30">
      <Representation id="low" bandwidth="500000" codecs="avc1.4d401f" width="640" height="360">
        <BaseURL>http://example.com/low/</BaseURL>
        <SegmentTemplate duration="4" media="$Number$.mp4" startNumber="1" />
      </Representation>
      <Representation id="high" bandwidth="1500000" codecs="avc1.4d401f" width="1280" height="720">
        <BaseURL>http://example.com/high/</BaseURL>
        <SegmentTemplate duration="4" media="$Number$.mp4" startNumber="1" />
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
*/

// 3. Adaptation:
//    - DASH clients monitor network conditions in real-time and adapt the video quality accordingly.
//    - If the network bandwidth decreases, the client switches to a lower bitrate representation.
//    - If the network bandwidth increases, the client switches to a higher bitrate representation.

// 4. HTTP Delivery:
//    - DASH uses standard HTTP servers to deliver video segments.
//    - This allows leveraging existing HTTP infrastructure, including CDNs (Content Delivery Networks).

// How DASH works in practice:

// 1. The client requests the MPD file from the server.
// 2. The client parses the MPD file to understand the available representations and segments.
// 3. The client starts downloading segments, beginning with an initial bitrate based on estimated network conditions.
// 4. The client continuously monitors playback performance and network conditions.
// 5. The client adjusts the quality by switching to different representations as needed.

// Benefits of DASH:
// - Efficient use of network resources through adaptive bitrate streaming.
// - Improved user experience with fewer buffering events and smoother playback.
// - Compatibility with standard HTTP infrastructure, making it easy to deploy.

// DASH is widely supported in modern media players and is used by many streaming services to deliver
// high-quality video content to users across varying network conditions.
