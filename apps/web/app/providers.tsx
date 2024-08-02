'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SocketProvider } from './context/socket_context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <SocketProvider>{children}</SocketProvider>
    </ChakraProvider>
  );
}
