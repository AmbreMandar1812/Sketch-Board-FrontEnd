import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://sketch-board-backend-l9an.onrender.com"
    : "http://localhost:4000";
export const socket = io(URL);