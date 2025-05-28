import { ProjectData } from '@/lib/types/project';
import { rolesMarkdown } from './markdown-zh';

const lightCatRunZH: ProjectData = {
  id: "light-cat-run",
  title: "Light Cat Run",
  shortDescription: "一款可爱的解谜冒险游戏，玩家使用激光笔引导猫咪与环境互动，并规划完美的路线以逃离游荡的怪物。2024年TapTap聚光灯Gamejam参赛作品，获得\"最佳视觉与音效奖\"与\"最佳人气奖\"。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=113382824938926&bvid=BV16T1GYdEBo&cid=26498042017&p=1",
    alt: "Light CatRun实机视频"
  },
  
  overviewDescription: "一款可爱的解谜冒险游戏，玩家使用激光笔引导猫咪与环境互动，并规划完美的路线以逃离游荡的怪物。\n\n该项目为2024年TapTap聚光灯Gamejam参赛作品，获得了\"最佳视觉与音效奖\"与\"最佳人气奖\"。",
  
  projectInfo: {
    genre: "2D, 解谜, 冒险",
    engine: "Unity",
    platform: "PC",
    teamsize: "5"
  },
  
  links: {
    taptap: "https://www.taptap.cn/app/727882",
    itchio: "https://oguri-ridge.itch.io/light-catrun"
  },
  
  mainRole: "Unity程序",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-MainMenu.jpg",
              alt: "Light Cat Run Title Screen"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-PauseMenu.jpg",
              alt: "Light Cat Run Pause Menu"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-GameScene.jpg",
              alt: "Light Cat Run Gameplay Screenshot"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-LightPole.jpg",
              alt: "Light Cat Run Gameplay Screenshot"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-Monster.jpg",
              alt: "Light Cat Run Gameplay Screenshot"
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
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["Unity", "Gamejam", "C#"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default lightCatRunZH; 