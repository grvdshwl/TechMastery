// Simple In-Memory Text Storage Service

class TextStorageService {
  constructor() {
    this.storage = new Map(); // Map to store text entries (documentId -> { text, metadata })
    this.versioning = new Map(); // Map to store version history (documentId -> [versions])
  }

  // Create a new text entry
  createText(documentId, text, metadata = {}) {
    if (this.storage.has(documentId)) {
      console.log(`Document ID ${documentId} already exists`);
      return null;
    }
    this.storage.set(documentId, { text, metadata });
    console.log(`Text stored with Document ID ${documentId}`);
    return documentId;
  }

  // Read a text entry by document ID
  readText(documentId) {
    if (!this.storage.has(documentId)) {
      console.log(`Document ID ${documentId} not found`);
      return null;
    }
    const document = this.storage.get(documentId);
    console.log(`Text retrieved:`, document.text);
    return document;
  }

  // Update an existing text entry
  updateText(documentId, newText, newMetadata = {}) {
    if (!this.storage.has(documentId)) {
      console.log(`Document ID ${documentId} not found`);
      return null;
    }
    const oldDocument = this.storage.get(documentId);
    // Store the old version before updating
    if (!this.versioning.has(documentId)) {
      this.versioning.set(documentId, []);
    }
    this.versioning.get(documentId).push(oldDocument);

    // Update the document with new text and metadata
    this.storage.set(documentId, { text: newText, metadata: newMetadata });
    console.log(`Text updated for Document ID ${documentId}`);
    return documentId;
  }

  // Delete a text entry by document ID
  deleteText(documentId) {
    if (!this.storage.has(documentId)) {
      console.log(`Document ID ${documentId} not found`);
      return null;
    }
    this.storage.delete(documentId);
    this.versioning.delete(documentId);
    console.log(`Text deleted for Document ID ${documentId}`);
    return documentId;
  }

  // Get version history for a text entry
  getVersionHistory(documentId) {
    if (!this.versioning.has(documentId)) {
      console.log(`No version history found for Document ID ${documentId}`);
      return null;
    }
    const versions = this.versioning.get(documentId);
    console.log(`Version history for Document ID ${documentId}:`, versions);
    return versions;
  }
}

// Example usage:

const textService = new TextStorageService();

// Create a new text entry
textService.createText("doc1", "Hello, World!", {
  author: "John Doe",
  timestamp: Date.now(),
});

// Read the text entry
textService.readText("doc1");

// Update the text entry
textService.updateText("doc1", "Hello, Universe!", {
  author: "John Doe",
  timestamp: Date.now(),
});

// Get version history
textService.getVersionHistory("doc1");

// Delete the text entry
textService.deleteText("doc1");
