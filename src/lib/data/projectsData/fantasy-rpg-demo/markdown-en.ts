// Key Features Markdown content
export const featuresMarkdown = `
## Networking
Implemented a C# network messaging framework using Protobuf for real-time, event-driven state synchronization of character movement, ensuring smooth and reliable multiplayer interactions.

## Game Systems
Developed core gameplay systems, including inventory, shop, friend list, team-up, and multi-channel chat to enrich multiplayer gameplay experience.

## User Interface
Built an intuitive UI framework with UGUI for managing menus, item displays, and inventory interactions, improving the overall user experience and interface responsiveness.
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