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

// ----------------------------------------

// Cache Estimation for Thumbnails
// ----------------------------------------

// Average Thumbnail Size:
// Approximately 100 KB

// Number of Thumbnails Cached:
// Assume each video generates 3 thumbnails.
// Total Thumbnails = 20,000,000 videos/day × 3 thumbnails = 60,000,000 thumbnails

// Daily Cache Requirement:
// 60,000,000 thumbnails × 100 KB = 6,000,000,000 KB
// or approximately 6 TB

// ----------------------------------------

// Processing Estimation for Uploaded Videos
// ----------------------------------------

// Video Processing Rate:
// 3,333,333 hours of video uploaded daily

// Processing Time Multiplier:
// Assume each video requires 5 times the playback duration for processing, including encoding for different resolutions.
// Total Processing Time = 3,333,333 hours × 5 = 16,666,665 processing hours per day

// Processing Across CDNs:
// Videos are processed and distributed across 3 CDNs for efficiency and redundancy.
// Total Processing Effort = 16,666,665 hours/day × 3 CDNs = 50,000,000 processing hours/day

// ----------------------------------------

// These calculations provide an estimate of the resources needed to manage video storage, thumbnail caching, and processing for YouTube based on the given metrics.
