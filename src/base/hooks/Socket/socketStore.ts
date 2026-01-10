import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;
const listeners = new Set<() => void>();

function notify() {
  for (const l of listeners) l();
}

export function getSocket() {
  if (!socket) {
    socket = io("https://wss.0x4l3xh.dev", {
      path: "/socket.io",
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket!.emit("join", 1);
    });

    notify();
  }
  return socket;
}

export function subscribeSocket(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
