// 主要特点的Markdown内容
export const featuresMarkdown = `
## 网络系统
使用Protobuf实现了C#网络消息框架，用于角色移动的实时事件驱动状态同步，确保流畅可靠的多人游戏交互。

## 游戏系统
开发了核心游戏系统，包括背包、商店、好友列表、组队和多频道聊天，丰富多人游戏体验。

## 用户界面
使用UGUI构建了直观的UI框架，用于管理菜单、物品显示和背包交互，提升整体用户体验和界面响应性。
`;

// 主要模块的Markdown内容
export const mainModulesMarkdown = `
## 通用模块
- 数据包处理和消息分发模块

## 服务器端
- 网络模块
- 数据库管理服务
- 用户管理服务
- 场景管理服务
- 物品管理服务
- 任务管理服务
- 好友管理服务
- 队伍管理服务
- 聊天管理服务

## 客户端
- 协议通信模块
- DataManager - 本地数据加载模块
- UserService - 用户管理模块（处理登录、注册等）
- SceneManager & MapService - 场景管理模块（处理角色进入、退出等）
- BagManager - 背包管理模块
- ShopManager - 商店管理模块
- ItemService & ItemManager - 物品系统
- NpcManager - NPC管理模块
- QuestService & QuestManager - 任务系统
- FriendService & FriendManager - 好友系统
- TeamService & TeamManager - 队伍系统
- ChatService & ChatManager - 聊天系统
- UIManager, UIWindow, UIMessageBox, UIInputBox - UGUI框架和扩展组件
`; 