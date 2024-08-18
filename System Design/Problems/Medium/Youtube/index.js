//* https://www.youtube.com/watch?v=jPKTo1iGQiE

//* https://app.diagrams.net/#G1L-p1_JT6iQ4Ag0jxdngoztPI4vu_Ik1Y#%7B%22pageId%22%3A%22CrcjSAqpp-cWYoDDrdHI%22%7D

/**
 * Functional Requirements
 * 1. Upload Video
 * 2. Watch Video
 * 3. Recommendations
 */

/**
 * Nonfunctional Requirements
 * 1. Availability
 * 2. Scalability
 * 3. Performance
 */

// Storage Estimation for Uploaded Videos
// ----------------------------------------

// Average Video Size for 1080p:
// Approximately 2 GB per hour.

// Number of Active Users Uploading Videos:
// 2% of 1 billion active users upload videos daily.
// 2% of 1,000,000,000 = 20,000,000 users

// Average Video Length:
// 10 minutes per video.

// Total Video Hours Uploaded Daily:
// 20,000,000 users × (10 minutes / 60 minutes per hour) = 20,000,000 × 0.1667 ≈ 3,333,333 hours

// Storage Requirement for 1080p:
// 3,333,333 hours × 2 GB/hour = 6,666,666 GB
// or approximately 6.67 PB

// Multiple Formats:
// Videos are stored in different resolutions (1080p, 720p, 480p, 360p, 240p, 144p).
// Assuming each format requires half the storage of the previous one:
// Total Storage = 6.67 PB (1080p) + 3.33 PB (720p) + 1.67 PB (480p) + 0.83 PB (360p) + 0.42 PB (240p) + 0.21 PB (144p)
// Total Storage ≈ 12.13 PB

// Multiple CDN across each continent:
// Total Storage ≈ 12.13 PB * 6 = 72.78 PB
// Rounded to 73 PB for simplicity

//* Request Structure

// {
//     "video": {
//       "title": "Sample Video Title",
//       "description": "A brief description of the video content.",
//       "tags": ["sample", "video", "demo"],
//       "uploadDate": "2024-08-18T12:00:00Z",
//       "duration": 120,  // Duration in seconds
//       "file": {
//        fileData:{},
//         "size": 10485760,  // Size in bytes
//         "format": "mp4"
//       },
//        "userId": "12345",
//
//     }
//   }

/**
 * AWS Options
 *
 * Queue Management
 * 1. Amazon SQS (Simple Queue Service) or Kafka
 *
 * Video Encoding
 * 2. Amazon Elastic Transcoder or FFmpeg
 *
 * Cache Services
 * 3. Amazon ElastiCache or Redis
 *
 * Content Delivery Network (CDN)
 * 4. Amazon CloudFront or cloud flare
 */
