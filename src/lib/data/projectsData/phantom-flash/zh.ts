import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown } from './markdown-zh';

const phantomFlashZH: ProjectData = {
  id: "phantom-flash",
  title: "Phantom Flash",
  shortDescription: "第一人称恐怖解谜游戏，融合了解谜与战斗体验，塑造了沉浸式的恐怖氛围。NUGDS 2025冬季Gamejam参赛作品，发布于Itch.io平台，并获得了排名第一的评分。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/PhantomFlash-StartScreen.jpg",
  
  heroMedia: {
    type: "video",
    src: "https://www.youtube.com/embed/MMQU5rFLW-M",
    alt: "Phantom Flash实机演示",
  },
  
  overviewDescription: "踏上一段独特的恐怖解谜冒险。在这款游戏中，你将跟随调查笔记中的线索，使用相机探索恐怖的密室。在搜集线索的过程中，你将遭遇诡异的事件并面对可怕的恶灵。你能在这片神秘之地生存下来并击败潜伏的邪恶力量吗？\n\n该项目为英国NUGDS 2025冬季Gamejam的参赛作品。发布于Itch.io平台，在所有参赛作品中评分排名第一。",
  
  projectInfo: {
    genre: "3D, 恐怖, 解谜",
    engine: "Unity",
    platform: "PC",
    teamsize: "5",
  },

  links: {
    itchio: "https://oguri-ridge.itch.io/phantomflash",
  },

  mainRole: "团队负责人/Unity程序/系统策划",
  
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
      title: "项目职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Unity", "GameJam", "c#", "系统策划"]
        }
      ],
      hideInDetailPage: true
    },
    {
      id: "design-highlights",
      title: "游戏设计与实现",
      content: [
        {
          type: "externalLink",
          link: {
            url: "https://c1durd16b97.feishu.cn/docx/SrZLdo8KXoXHUExZTcGcbfVSnpe",
            title: "恐怖主题探索解谜游戏系统设计文档",
            description: "详细的游戏设计文档，包含系统架构、关卡设计框架、叙事与进度设计、玩家体验设计等完整内容。",
            platform: "feishu"
          }
        },
        {
          type: "externalLink",
          link: {
            url: "https://c1durd16b97.feishu.cn/mindnotes/JKZobYxP3mEhqKnSGJYcmowUnUb?from=from_copylink",
            title: "团队管理-组会话题与流程思维导图",
            description: "提纲：如何组织卓有成效的第一次组会。目的是让组员们相互熟悉，并了解项目背景，上手开发环境。",
            platform: "feishu"
          }
        }
      ]
    }
  ]
};

export default phantomFlashZH; 