//* https://www.youtube.com/watch?v=kIcq1_pBQSY
//* Metrics and logging System (Analytics Platform)

//* https://app.diagrams.net/#G16zXYPOGPXd5O_k4mSanVB1GuuYwEYqwR#%7B%22pageId%22%3A%22BZMO8L53ktvPzdco2bQ9%22%7D

//* Functional Requirements :-
//* Log User Events for metrics and analysis
//* Platform Independent :- Mobile,PC
//* Data Customizable
//* Visulization of data.

//* Non Functional Requirements :-

//* Scalable
//* High Latency (Real Time cases)
//* Avalibility

// Payload Structure
//* POST API:-

let metricsData = {
  userId: "",
  platform: "",
  location: "",
  events: {
    click: {},
    scroll: {},
    hover: {},
    crash: { stackTrace: "" },
  },
};
