interface Conn {
  socket: WebSocket | null;
}

/**
 * Connection object for the WebSocket.
 *
 * @property {WebSocket | null} socket - The WebSocket instance or null if not connected.
 */
export const conn: Conn = {
  socket: null,
};
