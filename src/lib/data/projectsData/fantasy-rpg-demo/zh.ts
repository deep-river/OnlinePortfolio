import { ProjectData } from '@/lib/types/project';
import { featuresMarkdown, mainModulesMarkdown } from './markdown-zh';

const fantasyRpgDemoZH: ProjectData = {
  id: "fantasy-rpg-demo",
  title: "奇幻RPG",
  shortDescription: "一个多人RPG演示项目，展示了我在设计和实现复杂游戏系统方面的专业技能。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-01.png",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=868888473&bvid=BV1aV4y1673Y&cid=1139805795&p=1",
    alt: "奇幻RPG演示视频"
  },
  
  overviewDescription: "一个多人RPG演示项目，展示了我在设计和实现复杂游戏系统方面的专业技能。",
  
  projectInfo: {
    genre: "大型多人在线角色扮演游戏",
    engine: "Unity引擎",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/mmorpg-demo-template"
  },
  
  mainRole: "全栈游戏开发者",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "截图",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-01.png",
              alt: "奇幻RPG截图1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-03.png",
              alt: "奇幻RPG截图2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-05.png",
              alt: "奇幻RPG截图3"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-06.png",
              alt: "奇幻RPG截图4"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-08.png",
              alt: "奇幻RPG截图5"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-09.png",
              alt: "奇幻RPG截图6"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-10.png",
              alt: "奇幻RPG截图7"
            }
          ]
        }
      ]
    },
    {
      id: "features",
      title: "主要特点",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "modules",
      title: "主要模块",
      content: [
        {
          type: "markdown",
          markdown: mainModulesMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["Unity引擎", "C#", "Protobuf", "UGUI", "网络编程", "数据库管理"]
        }
      ]
    }
  ]
};

export default fantasyRpgDemoZH; 