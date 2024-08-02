// context/SocketContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../types/events';

interface SocketContextType {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
}

const SocketContext = createContext<SocketContextType>({ socket: undefined });

export const useSocket = () => {
  return useContext(SocketContext);
};

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | undefined>();

  useEffect(() => {
    const socketIo = io('http://localhost:3001');
    socketIo.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
