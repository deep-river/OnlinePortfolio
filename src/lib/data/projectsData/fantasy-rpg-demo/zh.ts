import { ProjectData } from '@/lib/types/project';
import { featuresMarkdown, mainModulesMarkdown } from './markdown-zh';

const fantasyRpgDemoZH: ProjectData = {
  id: "fantasy-rpg-demo",
  title: "Fantasy RPG",
  shortDescription: "利用Unity及C#后端实现的网络功能演示项目。开发了基于事件的消息收发处理，角色移动状态同步，组件化UI框架，背包/商店系统，任务系统，组队系统，多频道的聊天系统等功能。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-11.png",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=868888473&bvid=BV1aV4y1673Y&cid=1139805795&p=1",
    alt: "奇幻RPG演示视频"
  },
  
  overviewDescription: "利用Unity及C#后端实现的网络功能演示项目。开发了基于事件的消息收发处理，角色移动状态同步，组件化UI框架，背包/商店系统，任务系统，组队系统，多频道的聊天系统等功能。",
  
  projectInfo: {
    genre: "MMORPG",
    engine: "Unity",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/mmorpg-demo-template"
  },
  
  mainRole: "全栈开发",
  
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
      title: "主要功能概述",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "modules",
      title: "详细功能模块",
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
          items: ["Unity", "C#", "Protobuf", "UGUI", "网络编程"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default fantasyRpgDemoZH; 