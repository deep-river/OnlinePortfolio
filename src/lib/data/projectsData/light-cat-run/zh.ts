import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown, featuresMarkdown } from './markdown-zh';

const lightCatRunZH: ProjectData = {
  id: "light-cat-run",
  title: "光猫快跑",
  shortDescription: "一款可爱的解谜冒险游戏，你将使用激光笔引导一群猫咪，与环境互动，并规划完美的路线以逃离游荡的怪物。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
    alt: "《光猫快跑》标题画面"
  },
  
  overviewDescription: "一款可爱的解谜冒险游戏，你将使用激光笔引导一群猫咪，与环境互动，并规划完美的路线以逃离游荡的怪物。这是2024年TapTap聚光灯游戏开发比赛的获奖作品，获得了最佳视觉与音频奖。",
  
  projectInfo: {
    genre: "解谜冒险",
    engine: "Unity",
    platform: "PC",
    teamsize: "3"
  },
  
  links: {
    taptap: "https://www.taptap.cn/app/727882",
    itchio: "https://oguri-ridge.itch.io/light-catrun"
  },
  
  mainRole: "Unity程序员",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
              alt: "《光猫快跑》标题画面"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-Gameplay.jpg",
              alt: "《光猫快跑》游戏截图"
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
      title: "游戏特点",
      content: [
        {
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["Unity", "游戏开发比赛", "2D游戏", "AI系统"]
        }
      ]
    }
  ]
};

export default lightCatRunZH; 