import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-zh';

const apocalypsePartyZH: ProjectData = {
  id: "apocalypse-party",
  title: "清零计划2：天启派对",
  shortDescription: "3D俯视角动作Roguelike游戏。上线于Steam平台。上线首月销量19万，销售额800万人民币，在Steam国产游戏2023热销年度榜中排名第15位。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=876516890&bvid=BV1aN4y127xA&cid=1349895462&p=1",
    alt: "天启派对游戏宣传视频"
  },
  
  overviewDescription: "「清零计划2:天启派对」是一款3D俯视角动作Roguelike游戏。它是「瘟疫清零计划 Project Zero」的全新续作！新的任务已经开启！你将穿越到中世纪，在这里逐步掌握枪械、冷兵器、法术、诅咒巫术、召唤等能力，并通过一次次抉择武装成最强的幸存者。在末日来临前，和你的队友们一起进行最后的狂欢吧！\n\n游戏上线于Steam平台。上线首月销量19万，销售额800万人民币，在Steam国产游戏2023热销年度榜中排名第15位。",
  
  projectInfo: {
    genre: "动作，射击，Roguelike",
    engine: "UE5",
    platform: "PC（Steam）",
    teamsize: "10+"
  },
  
  links: {
    steam: "https://store.steampowered.com/app/2351560/2/"
  },
  
  mainRole: "UE5技术策划",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-01.jpg",
              alt: "Apocalypse Party screenshot"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-02.jpg",
              alt: "Apocalypse Party screenshot"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/Apocalypse-party-screenshot-03.jpg",
              alt: "Apocalypse Party screenshot"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "features",
      title: "技术亮点",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "demo-video",
      title: "",
      content: [
        {
          type: "video",
          video: {
            type: "video",
            src: "https://www.youtube.com/embed/lU-khMAAQpk",
            alt: "技能设计与实现演示视频"
          }
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["UE5", "蓝图", "技术策划"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default apocalypsePartyZH; 