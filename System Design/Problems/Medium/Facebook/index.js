//* https://www.youtube.com/watch?v=9-hjBGxuiEs
//* https://app.diagrams.net/#G1ZkpHRxHjVNuoTCLg-1dVoMOWfEyhrItq#%7B%22pageId%22%3A%22dGVP3WR8ZVDCpPc7mLXl%22%7D

//* Functional Requirements

//* User Profile
//* Users can Search Other Users
//* Users can send Befriend, Unfriend or Block other users
//* Post a message,image or video
//* Messenger
//* Feeds

//* Users
//* Famous
//* active
//* live
//* passive
//* inactive

//* Non Functional Requirements
//* Scale
//* Low Latency(Perfomance)
//* Availibilty

//* Capacity Estimation
//* 100M Million users

//* 50M Million monthly

//* 10M (2 posts a day)

//* 100,00,000 * 2 * 50 kb = 100,00,00,000 = 1TB Per day storage.

//* 100,000 New registration daily

//*

let newUser = {
  mobileNumber: "",
  email: "",
  fullName: "",
  gender: "",
  dob: "",
  location: "",
};

let newPost = {
  userId: "",
  type: "",
  postMessage: "",
  image: {},
  location: "",
};
