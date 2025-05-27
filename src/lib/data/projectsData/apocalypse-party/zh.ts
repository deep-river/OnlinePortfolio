import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-zh';

const apocalypsePartyZH: ProjectData = {
  id: "apocalypse-party",
  title: "末日派对（Steam）",
  shortDescription: "末日派对是一款3D俯视角动作Roguelike游戏。踏上穿越中世纪的全新冒险，逐渐掌握各种能力，武装自己成为最强生存者。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
    alt: "Steam平台上的末日派对"
  },
  
  overviewDescription: "末日派对是一款3D俯视角动作Roguelike游戏。在游戏中，你将踏上穿越中世纪的全新任务，通过无数选择逐渐掌握各种能力，武装自己成为最强生存者。",
  
  projectInfo: {
    genre: "动作Roguelike",
    engine: "虚幻引擎5",
    platform: "PC（Steam）",
    teamsize: "5+"
  },
  
  links: {
    steam: "https://store.steampowered.com/app/2599800/Apocalypse_Party/"
  },
  
  mainRole: "UE5技术设计师",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
              alt: "末日派对封面"
            }
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "角色和职责",
      content: [
        {
          type: "markdown",
          markdown: rolesMarkdown
        }
      ]
    },
    {
      id: "features",
      title: "项目特点",
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
            src: "https://www.youtube.com/embed/ALRJ2hy0kwo",
            alt: "末日派对游戏演示"
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
          items: ["虚幻引擎", "蓝图", "Able能力系统"]
        }
      ]
    }
  ]
};

export default apocalypsePartyZH; 