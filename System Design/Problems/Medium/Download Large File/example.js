// Example: Large File Download Manager in JavaScript

class DownloadManager {
  constructor(url, chunkSize = 10 * 1024 * 1024) {
    // 10 MB chunks
    this.url = url;
    this.chunkSize = chunkSize;
    this.fileSize = 0;
    this.downloadedSize = 0;
    this.chunks = [];
  }

  async initialize() {
    const response = await fetch(this.url, { method: "HEAD" });
    this.fileSize = parseInt(response.headers.get("Content-Length"));
    this.createChunks();
  }

  createChunks() {
    for (let i = 0; i < this.fileSize; i += this.chunkSize) {
      this.chunks.push({
        start: i,
        end: Math.min(i + this.chunkSize, this.fileSize) - 1,
        downloaded: false,
      });
    }
  }

  async downloadChunk(chunk) {
    const headers = { Range: `bytes=${chunk.start}-${chunk.end}` };
    const response = await fetch(this.url, { headers });
    const blob = await response.blob();
    chunk.downloaded = true;
    this.downloadedSize += blob.size;
    this.saveChunk(blob, chunk.start);
  }

  saveChunk(blob, start) {
    // Save or append the chunk to the final file (using IndexedDB, local storage, etc.)
    console.log(`Chunk starting at ${start} saved, size: ${blob.size} bytes`);
  }

  async downloadAllChunks() {
    const downloadPromises = this.chunks.map((chunk) =>
      this.downloadChunk(chunk)
    );
    await Promise.all(downloadPromises);
    console.log("All chunks downloaded.");
  }

  async startDownload() {
    await this.initialize();
    await this.downloadAllChunks();
    console.log("Download complete!");
  }
}

// Usage
const url = "https://example.com/largefile.zip";
const downloadManager = new DownloadManager(url);

// Start the download
downloadManager
  .startDownload()
  .catch((error) => console.error("Download failed:", error));
