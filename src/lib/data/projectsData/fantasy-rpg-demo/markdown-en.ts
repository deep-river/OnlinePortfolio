// Key Features Markdown content
export const featuresMarkdown = `
# Network Communication Architecture

The game's backend network components are developed in **C#**, designed to establish an **efficient and reliable** server-client message communication framework.

## 1. Core Communication Mechanisms

* **TCP Connection Management:** The server utilizes a TcpSocketListener to listen on a specified port, establishing and maintaining **dedicated TCP Socket connections** for each client. This provides a reliable, byte-stream oriented data transmission channel, ensuring message order and integrity.
* **Protobuf Communication:** Data exchange between the server and clients leverages **Protobuf (Protocol Buffers)** for serialization and deserialization. Protobuf is a highly efficient, cross-language, and cross-platform data serialization protocol. Its compact data size and rapid parsing significantly boost network communication efficiency and reduce bandwidth consumption.
* **Asynchronous Event-Driven Processing:** The server employs C#'s Socket class xxxAsync methods (e.g., SocketAsyncEventArgs) to implement an **efficient asynchronous event-driven mechanism**. This non-blocking I/O model enables the server to process other tasks while awaiting network I/O operations, substantially enhancing server concurrency and throughput.

## 2. Message Processing Workflow

Upon receiving a data packet, the server's processing workflow is as follows:

1.  **Packet Reception and Parsing:** Once an asynchronous I/O operation completes, the raw byte stream is **efficiently parsed** according to the agreed-upon Protobuf data packet format.
2.  **Event Triggering and Method Execution:** The parsed data packet **triggers a predefined event** within the backend system. These events then **invoke specific handler methods** bound to them, executing corresponding business logic, such as processing player actions or updating game states.

## 3. Event-Driven State Synchronization Mechanism

To ensure real-time consistency and a smooth player experience within the game world, the client employs an **event-driven hybrid state synchronization mechanism**. This combines **incremental updates** with **periodic full synchronization** for reliable and efficient game state management.

**Incremental Updates for Player Actions:**
* **Event-Driven:** Every player action on the client-side, such as character movement, skill casting, or item interaction, is treated as an "event."
* **Immediate Packet Dispatch:** These events trigger the client to **immediately send incremental update packets** to the server. These packets contain only the state changes caused by the current action (e.g., new character position, interaction type), rather than the entire object's state. This design significantly reduces network data transfer, minimizes latency, and improves action responsiveness.

**Real-time Reception of Other Client Incremental Updates:**
* **Continuous Listening:** The client continuously listens for and receives **incremental update bundles** broadcast by the server from other connected clients.
* **Local Instance Application:** Upon receiving these bundles, the client rapidly parses their content and applies the **incremental updates** to corresponding **local instances of other player objects** (e.g., other players' characters, NPCs), ensuring that the local game world's state for other entities remains synchronized with the server.

**Periodic Full Synchronization and Force Correction:**
* **Scheduled Synchronization:** In addition to real-time incremental updates, the server **periodically (e.g., every second or few seconds)** sends **full object update packets** to all connected clients.
* **Mandatory State Synchronization and Correction:** These full packets contain the complete current state of all critical player object instances. Upon reception, the client **forces its local corresponding player instances to synchronize** with the server's latest state. This mechanism serves as a **fallback strategy**, effectively resolving potential local state inconsistencies caused by network fluctuations, packet loss, or client prediction errors. It ensures that all clients' game worlds ultimately achieve a consistent, authoritative state, thereby enabling **reliable and efficient state synchronization**.

Through this **"immediate incremental update + periodic full synchronization"** hybrid strategy, the client's event-driven state synchronization mechanism balances low-latency operational feedback with network data transfer efficiency and eventual consistency, providing players with a smooth and dependable multiplayer experience.

---

# Game System Implementation

Building upon the network infrastructure, core game interaction systems were developed, including **Inventory, Shop, Friend List, Teaming, and Multi-channel Chat**. Player data is persistently stored in a database using efficient data structures.

Additionally, supporting systems such as an **extensible Logger logging system** and a **level data configuration plugin** were implemented to establish a standardized development pipeline.

---

# Component-Based UI Framework

A **component-based UI framework** was implemented using **UGUI**. It manages UI window hierarchy using a **stack structure** and efficiently reuses and manages UI object instances through an **object pool**. This design ensures high UI component reusability and streamlined management.

---

`;

// Main Modules Markdown content
export const mainModulesMarkdown = `
## Common
- Packet processing & message dispatching module

## Server
- Network module
- Database management service
- User management service
- Scene management service
- Item management service
- Quest management service
- Friend management service
- Team management service
- Chat management service

## Client
- Protocol communication module
- DataManager - Local data loading module
- UserService - User management module (handling login, registration, etc.)
- SceneManager & MapService - Scene management module (handling character entry, exit, etc.)
- BagManager - Inventory management module
- ShopManager - Shop management module
- ItemService & ItemManager - Item system
- NpcManager - NPC management module
- QuestService & QuestManager - Quest system
- FriendService & FriendManager - Friend system
- TeamService & TeamManager - Team system
- ChatService & ChatManager - Chat system
- UIManager, UIWindow, UIMessageBox, UIInputBox - UGUI framework and extended components
`; 