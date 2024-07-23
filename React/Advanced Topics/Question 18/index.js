//* How Web Sockets Works in React ?

import React, { useEffect } from "react";
import WebSocket from "websocket";

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      console.log("Message received from server:", event.data);
      // Handle incoming messages from the server
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default WebSocketComponent;
