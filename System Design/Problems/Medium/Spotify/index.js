//* https://www.youtube.com/watch?v=_K-eupuDVEc

//* https://app.diagrams.net/#G1-cUKYUOoPfiPDEFZ8MDD1mAH1hckTQ_p#%7B%22pageId%22%3A%22U5GKEaanNevp4ycoBe4L%22%7D

//* Functional Requirements
//* Artists can upload song
//* Users can search for a song add it to a playlist
//* Users can stream a song.

//* Non-Functional Requirements
//* Scalability
//* Low Latency (Performance)
//* High Availability
//* Data Consistency

//* Capacity Estimation
//* 200M million users
//* 10M million monthly active users

//* Storage Estimation
//* 100M songs, each approximately 5 MB in size
//* Total storage for 100M songs: 100M * 5 MB = 500 TB
//* Replication across 7 CDNs
//* Total replicated storage: 500 TB * 7 = 3.5 PB

//* Storage Estimation for Daily Uploads
//* 10,000 songs uploaded per day
//* Each song is approximately 5 MB in size
//* Daily storage for new uploads: 10,000 * 5 MB = 50 GB
//* Replication across 7 CDNs
//* Total replicated storage for daily uploads: 50 GB * 7 = 350 GB
//*

let newUser = {
  username: "",
  email: "",
  password: "",
  fullName: "",
  dateOfBirth: "",
  gender: "",
  location: "",
};

let newPost = {
  userId: "",
  content: "",
  media: {
    trackId: "",
    albumId: "",
    artistId: "",
    duration: "",
  },
  location: "",
};

const songData = {
  songId: "",
  songURL: "",
  artistId: "",
  duartion: "",
  genre: "",
  albumId: "",
  thumbnail: "",
  songName: "",
};
