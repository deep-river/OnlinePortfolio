// 角色与职责Markdown内容
export const rolesMarkdown = `
# UE5技术策划

- 负责游戏玩法的设计与开发，包括武器、角色天赋的设计与数值平衡。
- 使用AbleAbilitySystem插件与UE5蓝图实现新的游戏机制与核心功能。
- 负责项目中多语言本地化技术方案的实施与内容维护。
`;

// 项目特点的Markdown内容
export const featuresMarkdown = `
# 系统设计与实现案例：精确连击系统

在新春DLC的版本更新中我们为游戏添加了多种新武器与角色天赋，其中之一为近战武器——截拳道。该武器强调爽快的近战打击体验，在拥有可观的单体伤害输出的同时也为玩家提供了强力的AOE清怪技能。

因此，在设计上该武器的技能配置中包含多段连击模式，根据玩家操作输入的不同，能够组合出不同的连击效果。如果在技能衔接的时机中准确输入按键操作，便能在最后一段连击中打出海量伤害。

基于这样的背景，我们需要为游戏加入新的连招判定机制，以实现上述设计需求。

---

## 1. 设计理念与目标

精确连击系统旨在为游戏的战斗机制注入更深的层次，鼓励玩家通过精准的时机掌控和方向输入来执行复杂的攻击序列。

**设计目标**:

* **风险与回报并存**: 提供一套高风险但威力强大的战斗机制，尤其适用于快速清理大量敌人。
* **提升操作深度**: 通过引入基于技巧的战斗系统，无缝融入现有玩法，提升玩家的游戏体验。
* **兼顾直观与精通**: 确保系统在快节奏战斗中依然易于上手，同时为高水平的玩家提供足够的深度和挑战性。

---

## 2. 系统架构与设计

精确连击系统基于AbleAbilitySystem插件构建，这是一个功能强大的技能编辑器，能够灵活处理诸如技能转换trigger、动画播放、伤害应用以及蓝图函数调用等多种任务。该系统的核心设计理念是将特定的连击序列绑定到具体的武器或角色天赋上。当角色持有相应的武器或天赋时，连击操作将独立于普通攻击序列执行。连击中的每次攻击都可沿用普通攻击的伤害计算逻辑，这意味着诸如伤害增幅等增益效果可以叠加，同时系统会额外应用一个连击伤害乘数，以强化连击的最终收益。

**核心机制亮点**:

* **多样化连击路径**: 系统支持基于玩家输入的多种攻击转换。例如，不同的方向输入结合精确的攻击时机，将触发截然不同的连击序列，为玩家提供丰富的攻击选择。
* **体力消耗与恢复**: 每次连击攻击都会消耗体力，从而限制了玩家频繁使用连击的技能。体力仅在玩家非攻击状态下恢复，这为连击的使用时机和策略性引入了额外的考量。
* **动态UI反馈**: 为了提供即时、直观的指引，屏幕底部中央设有一个动态UI指示器，精准提示执行完美连击的时机。如果玩家未能成功，UI还将显示相应的动画反馈，确保玩家能够即时获得操作反馈。
* **输入时机影响伤害**: 连击的最终伤害输出与玩家的输入时机紧密相关。成功的连击链将带来更高的伤害，每次连续命中都会通过连击伤害乘数进一步放大总伤害输出。

---

## 3. 系统实现

连击系统的初始化在主游戏系统完全加载后于**蓝图（Blueprints）** 中进行。每个连击序列的详细配置都在AbleAbilitySystem的编辑器中完成。随后，初始的连击攻击被绑定到相应武器或角色天赋的蓝图事件上。

当连击被成功触发时，预先配置的一系列任务将按序执行，这包括播放相应的动画、音效、粒子效果、执行技能状态转换，并调用蓝图事件以播放动态UI动画。

**实现示例：截拳道武器连击**

* **输入检测与转换**: 我们实现了专属的蓝图函数，负责在任务执行的每一帧（Task tick）中检测玩家输入，并据此执行对应的连击转换。此蓝图是Able Custom Task的子类，因此可以在AbleAbilitySystem编辑器中被指定为“AttackingBranch Task”。这种设计使得系统能够根据玩家的方向输入，实现差异化的连击攻击路径。值得一提的是，该“AttackingBranch Task”的持续时间决定了玩家输入的有效窗口，策划可以根据实际需求进行精细调整。
* **连击属性配置**: 在AbleAbilitySystem编辑器中，我们对每个连击攻击进行了详细配置和精细调整，这涵盖了动画、音效、粒子效果以及玩家角色移动等所有相关属性。
* **动态UI集成**: 实现了在蓝图中调用动态UI动画的功能，并确保其与游戏内其他系统的无缝集成。例如，当玩家获得攻击速度增益时，UI动画的播放速度会相应调整，以始终与角色攻击动画保持同步，提供一致且精准的反馈。

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-Able-Tasks-01.png "AAS Tasks for Jeetkunedo")

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-Able-Tasks-02.png "AAS Tasks for Jeetkunedo")

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-Init-01.png "Blueprint for Jeetkunedo UI")

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-Init-02.png "Blueprint for Jeetkunedo UI")

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-anim-01.png "UI Animation for Jeetkunedo")

![Jeetkunedo Combo](https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Jeetkunedo-UI-anim-02.png "UI Animation for Jeetkunedo")

---

## 4. 测试与优化迭代

在系统初步实现之后，我们进行了多轮内部测试，以确保其在玩法体验和性能方面都能达到预期标准。

**关键迭代**:

* **输入时机窗口调整**: 根据内部测试玩家的反馈，我们略微扩大了前几段“完美连击”的输入时机窗口，旨在降低玩家上手难度，同时仍保证整段连击的挑战性。
* **伤害数值平衡**: 对连击的伤害倍率进行了细致的平衡调整，确保其在针对精英怪物时既能提供足够出色的伤害值，又不会导致系统过于强大而破坏游戏平衡。
* **Hitbox优化**: 精细调整了每一段攻击的hitbox检测范围和判定逻辑，以提高其准确性，并确保玩家在例如被大量敌人包围的复杂环境下的打击反馈和手感。

---

## 5. 最终成果

精确连击系统已成功实现并随新春DLC一同发布于游戏中。它为玩家带来了更具深度和技巧性的战斗体验，增强了游戏的重复游玩价值，并受到了玩家的多数好评。

`; 