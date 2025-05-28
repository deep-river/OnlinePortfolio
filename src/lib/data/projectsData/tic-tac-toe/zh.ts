import { ProjectData } from '@/lib/types/project';

const ticTacToeZH: ProjectData = {
  id: "tic-tac-toe",
  title: "井字棋",
  shortDescription: "实现了具有不同难度AI对手的井字棋游戏，使用极小极大算法实现无敌难度级别。",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
    alt: "井字棋游戏截图"
  },
  
  overviewDescription: "实现了具有不同难度AI对手的井字棋游戏，使用Minimax算法实现无敌难度级别。",
  
  projectInfo: {
    genre: "益智游戏",
    engine: "Unity引擎",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/TicTacToePlayableDemo"
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
              src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
              alt: "井字棋游戏截图1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo02.png",
              alt: "井字棋游戏截图2"
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
          type: "list",
          items: [
            "具有不同难度级别的AI对手",
            "Minimax算法实现的无敌AI",
            "简洁直观的用户界面",
            "与AI对战的单人游戏模式"
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "技术",
      content: [
        {
          type: "list",
          items: ["Unity", "C#", "AI系统"]
        }
      ]
    }
  ]
};

export default ticTacToeZH; 