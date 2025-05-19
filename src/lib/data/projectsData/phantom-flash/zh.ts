import { ProjectData } from '@/lib/types/project';

const phantomFlashZH: ProjectData = {
  id: "phantom-flash",
  title: "Phantom Flash",
  shortDescription: "一款第一人称恐怖解谜游戏，你将使用特殊相机探索闹鬼的房子，揭示超自然实体。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-StartScreen.jpg",
  
  heroMedia: {
    type: "video",
    src: "https://www.youtube.com/embed/MMQU5rFLW-M",
    alt: "Phantom Flash实机演示",
  },
  
  overviewDescription: "踏上一段独特的恐怖解谜冒险。在这款游戏中，你将跟随调查笔记中的线索，使用相机探索被雾笼罩的房子。在揭开真相的过程中，你将遭遇诡异事件并面对可怕的幽灵。你能在这片神秘之地生存下来并击败潜伏的邪恶力量吗？\n\n这是提交给纽卡斯尔大学游戏开发协会（NUGDS）2025冬季游戏开发比赛的作品。在8个参赛作品中排名第一。",
  
  projectInfo: {
    genre: "3D, 独立, 恐怖, 解谜",
    engine: "Unity",
    platform: "PC",
    teamsize: "5",
  },

  links: {
    itchio: "https://oguri-ridge.itch.io/phantomflash",
  },

  mainRole: "Unity程序 & 系统策划",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "游戏截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Entrance.jpg",
              alt: "游戏入口场景"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-DarkHallway.jpg",
              alt: "黑暗走廊场景"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Hallway.jpg",
              alt: "红色走廊场景"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-Kitchen.jpg",
              alt: "厨房场景"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-RankPage.jpg",
              alt: "游戏排名页面"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "角色与职责",
      content: [
        {
          type: "heading",
          text: "Unity程序",
          level: 1
        },
        {
          type: "list",
          items: [
            "实现多种解谜机制。",
            "使用UGUI开发UI系统，包括开始界面、暂停菜单和HUD界面。"
          ]
        },
        {
          type: "heading",
          text: "系统策划",
          level: 1
        },
        {
          type: "list",
          items: [
            "设计核心游戏循环和交互体验，平衡探索/解谜节奏。",
            "设计所有游戏内解谜，平衡游戏进度和上下文反馈。",
            "设计暂停菜单和HUD的UI组件。"
          ]
        }
      ]
    },
    {
      id: "design-highlights",
      title: "游戏设计亮点",
      content: [
        {
          type: "heading",
          text: "恐怖主题探索解谜游戏系统设计文档",
          level: 1
        },
        {
          type: "paragraph",
          text: "类型：3D第一人称探索解谜游戏，带有恐怖/惊悚元素。\n平台：PC/Web"
        },
        {
          type: "heading",
          text: "1. 控制方案",
          level: 1
        },
        {
          type: "list",
          items: [
            "WASD：角色移动",
            "鼠标：相机控制",
            "E键：与环境道具交互",
            "F键：切换相机模式",
            "左键点击（相机模式）：拍照",
            "左键点击（战斗模式）：开火"
          ]
        },
        {
          type: "heading",
          text: "2. 核心游戏循环",
          level: 1
        },
        {
          type: "list",
          items: [
            "玩家进入游戏场景",
            "环境探索",
            "发现并解决谜题",
            "收集关键物品",
            "使用相机检测隐藏实体",
            "进行闪避/战斗",
            "完成关卡目标"
          ]
        },
        {
          type: "heading",
          text: "3. 关卡设计框架",
          level: 1
        },
        {
          type: "paragraph",
          text: "环境：封闭的室内/夜间场景（如废弃宅邸、孤立建筑），带有西方建筑风格。\n\n节奏：通过动态光照、环境音效提示和物品放置（如闪烁的走廊灯引导注意力）引导线性探索路径。\n\n交互性：上下文UI提示（如锁门旁的\"需要钥匙\"提示）和开放区域中战略性放置的怪物触发点。\n\n参考：《生化危机7》的氛围。"
        },
        {
          type: "heading",
          text: "4. 叙事与进度",
          level: 1
        },
        {
          type: "paragraph",
          text: "概要：玩家扮演超自然调查员，使用特殊相机重建神秘仪式，最终召唤并击败恶魔实体。"
        },
        {
          type: "paragraph",
          text: "关键进程："
        },
        {
          type: "list",
          items: [
            "第1阶段：收集线索 - 解决谜题 - 重建仪式场地。",
            "第2阶段：利用相机暴露并对抗怪物显现。"
          ]
        },
        {
          type: "heading",
          text: "5. 系统架构",
          level: 1
        },
        {
          type: "paragraph",
          text: "5.1 基础角色控制器\n第一人称控制器，具有流畅的移动/相机旋转。"
        },
        {
          type: "paragraph",
          text: "5.2 可交互对象"
        },
        {
          type: "list",
          items: [
            "布尔切换开关：二元状态变化（如灯开关、抽屉）。",
            "一次性物品：交互后禁用。",
            "多状态对象：循环预定义状态（如仪式神器）。",
            "记录碎片：通过UI文本传递叙事的非功能性物品。"
          ]
        },
        {
          type: "paragraph",
          text: "5.3 收藏品\n通过UI跟踪的被动物品（如\"已收集钥匙：0/3\"）。收集完成解锁游戏进程。"
        },
        {
          type: "paragraph",
          text: "5.4 实体系统（幽灵/怪物）"
        },
        {
          type: "list",
          items: [
            "生成逻辑：仪式完成后触发；通过跳动光环/轮廓提示。",
            "战斗行为：",
            "可见性：实体轮廓根据生命值变色（绿色 - 黄色 - 红色）。",
            "击败：需要三次射击；提供位置跟踪的音频/视觉反馈。"
          ]
        },
        {
          type: "paragraph",
          text: "5.5 相机机制"
        },
        {
          type: "list",
          items: [
            "模式：玩家移动受限；取景器UI模拟实时曝光。",
            "功能：手电筒照亮目标；检测幽灵实体（进行中：电池系统）。"
          ]
        },
        {
          type: "paragraph",
          text: "5.6 战斗系统"
        },
        {
          type: "list",
          items: [
            "武器解锁：在Boss战前收集散落的枪械部件。",
            "战斗设计：带有冷却限制的连发机制。"
          ]
        },
        {
          type: "paragraph",
          text: "5.7 任务系统"
        },
        {
          type: "list",
          items: [
            "调查手册：显示目标、照片和记录的游戏内UI。",
            "任务类型：",
            "1. 照片匹配：重现参考图像以生成关键物品。",
            "2. 物品链谜题：顺序交互（如保险丝 - 断路器）。",
            "3. 多状态挑战：将对象调整为预定义配置。",
            "进度管理器：跟踪收藏品/谜题状态；动态更新UI。"
          ]
        },
        {
          type: "paragraph",
          text: "5.8 UI框架"
        },
        {
          type: "list",
          items: [
            "主菜单：开始/加载/设置/退出。",
            "暂停菜单：继续/重新开始/退出。",
            "HUD：实时跟踪（如\"已发现实体：0/3\"）。",
            "调查手册：通过热键切换；可滚动文本/图像面板。",
            "上下文提示：可交互物体附近的\"按F\"指示器。"
          ]
        },
        {
          type: "heading",
          text: "6. 美术资源需求",
          level: 1
        },
        {
          type: "paragraph",
          text: "核心："
        },
        {
          type: "list",
          items: [
            "模块化室内环境（墙壁、家具）。",
            "实体模型（幽灵、变异体）。"
          ]
        },
        {
          type: "paragraph",
          text: "高级：动态灯光装置，幽灵探测的特效。"
        },
        {
          type: "heading",
          text: "7. 玩家体验设计",
          level: 1
        },
        {
          type: "paragraph",
          text: "情感曲线："
        },
        {
          type: "list",
          items: [
            "前期：逐步提升谜题难度，保持参与感。",
            "中期：限时挑战，制造紧张感。",
            "终局：低技能门槛的Boss战，提供宣泄式满足感。"
          ]
        },
        {
          type: "paragraph",
          text: "心流理论整合："
        },
        {
          type: "list",
          items: [
            "每关包含放松 - 紧张 - 成就的循环。",
            "每次游戏会话至少包含一个压力 - 高潮 - 解决的序列。"
          ]
        },
        {
          type: "paragraph",
          text: "参考：游戏设计中的心流理论 - https://gameinstitute.qq.com/knowledge/100023"
        }
      ]
    }
  ]
};

export default phantomFlashZH; 