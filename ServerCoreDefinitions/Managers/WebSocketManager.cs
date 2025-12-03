


namespace EasyITCenter.Managers {


    /// <summary>
    /// WebSocket Extension Definition For Simple Central Control All Connection By Connection Path
    /// and Timeout
    /// </summary>
    public class WebSocketLocation
    {
        public string? socketAPIPath { get; set; }
        public DateTimeOffset? SocketTimeout { get; set; }
    }

    /// <summary>
    /// Server Web Helpers for EASY working Here are extension for Database Model, WebSocket
    /// </summary>
    public static class WebSocketManager {

        /// <summary>
        /// Sends the message to client WebSocket. This Is Used by
        /// "SendMessageAndUpdateWebSocketsInSpecificPath" For Update Information on All Connections
        /// in Same WebSocket Path Its Solution FOR Terminals, Group Communications, etc.
        /// </summary>
        /// <param name="webSocket">The web socket.</param>
        /// <param name="message">  The message.</param>
        public static async Task SendMessageToClientSocket(WebSocket webSocket, string message) {
            await webSocket.SendAsync(new ArraySegment<byte>(Encoding.UTF8.GetBytes(message), 0, Encoding.UTF8.GetBytes(message).Length),
                       WebSocketMessageType.Text, true, CancellationToken.None);
        }


        /// <summary>
        /// Register Listening Client WebSocket Communication Ist for Receive messages from Client
        /// </summary>
        /// <param name="webSocket">    </param>
        /// <param name="socketAPIPath"></param>
        /// <returns></returns>
        public static async Task ListenClientWebSocketMessages(WebSocket webSocket, string socketAPIPath) {
            var buffer = new byte[1024 * int.Parse(DbOperations.GetServerParameterLists("WebSocketMaxBufferSizeKb").Value)];
            var receiveResult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

            while (!receiveResult.CloseStatus.HasValue) {
                SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath, "");
                receiveResult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            }

            await webSocket.CloseAsync(receiveResult.CloseStatus.Value, receiveResult.CloseStatusDescription, CancellationToken.None);
        }


        /// <summary>
        /// Add WeSocket Connection To Central List
        /// </summary>
        /// <param name="newWebSocket"> The new web socket.</param>
        /// <param name="socketAPIPath">The socket path.</param>
        public static async void AddSocketConnectionToCentralList(WebSocket newWebSocket, string socketAPIPath) {
            try {
                SrvRuntime.CentralWebSocketList.Add(new Tuple<WebSocket, WebSocketLocation>(newWebSocket, new WebSocketLocation() {
                    socketAPIPath = socketAPIPath,
                    SocketTimeout = DateTimeOffset.UtcNow.AddMinutes(double.Parse(DbOperations.GetServerParameterLists("WebSocketTimeoutMin").Value))
                }));
            } catch { }

            //welcome message
            await SendMessageToClientSocket(newWebSocket, DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " " + DbOperations.DBTranslate("welcome"));
        }


        /// <summary>
        /// Sends the message and update web sockets in specific path.
        /// </summary>
        /// <param name="socketAPIPath">The socket API path.</param>
        /// <param name="message">      The message.</param>
        public static async void SendMessageAndUpdateWebSocketsInSpecificPath(string socketAPIPath, string message) {
            //clean invalid Sockets before updating
            DisposeSocketConnectionsWithTimeOut();
            try {
                foreach (Tuple<WebSocket, WebSocketLocation> socket in SrvRuntime.CentralWebSocketList) {
                    if (socket.Item2.socketAPIPath == socketAPIPath) {
                        await SendMessageToClientSocket(socket.Item1, message);
                        socket.Item2.SocketTimeout = DateTimeOffset.UtcNow.AddMinutes(double.Parse(DbOperations.GetServerParameterLists("WebSocketTimeoutMin").Value));
                    }
                }
            } catch { }
        }


        /// <summary>
        /// !! Global Method for Simple Using WebSockets WebSocket Disposed - Cleaning monitored
        /// Sockets from Central List. Are Closed and Disposed Only with Timeout or with closed Connection
        /// </summary>
        public static int DisposeSocketConnectionsWithTimeOut() {
            try {
                SrvRuntime.CentralWebSocketList.ForEach(socket => {
                    if (socket.Item2.SocketTimeout < DateTimeOffset.UtcNow) { socket.Item1.CloseAsync(WebSocketCloseStatus.NormalClosure, null, CancellationToken.None); }
                });
                SrvRuntime.CentralWebSocketList.RemoveAll(socket => socket.Item1.State != WebSocketState.Open);
            } catch { }
            return SrvRuntime.CentralWebSocketList.Count;
        }

        
    }
}