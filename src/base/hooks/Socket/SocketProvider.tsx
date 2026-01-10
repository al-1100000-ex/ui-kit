import { useEffect, useSyncExternalStore } from "react";
import { SocketContext } from "./socket";
import { getSocket, subscribeSocket } from "./socketStore";
import * as React from "react";
import { useAppSelector } from "../hooks.ts";

interface Props {
  children: React.ReactNode;
}

export function SocketProvider({ children }: Props) {
  const socket = useSyncExternalStore(subscribeSocket, getSocket);

  const user = useAppSelector(state => state.user);

  useEffect(() => {
    return () => {
      socket.emit("disconnect", user.userID);
      socket?.disconnect();
    };
  }, [socket]);

  if (!socket) return null;

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
