import { ProjectData } from '@/lib/types/project';

const ticTacToeEN: ProjectData = {
  id: "tic-tac-toe",
  title: "Tic-Tac-Toe",
  shortDescription: "Implemented the Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable difficulty level.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
  
  heroMedia: {
    type: 'image',
    src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
    alt: "Tic-Tac-Toe Game Screenshot"
  },
  
  overviewDescription: "Implemented the Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable difficulty level.",
  
  projectInfo: {
    genre: "Puzzle",
    engine: "Unity Engine",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/TicTacToePlayableDemo"
  },
  
  mainRole: "Unity Programmer",
  
  detailedSections: [
    {
      id: "screenshots",
      title: "Screenshots",
      content: [
        {
          type: "mediaGroup",
          media: [
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
              alt: "Tic-Tac-Toe Game Screenshot 1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo02.png",
              alt: "Tic-Tac-Toe Game Screenshot 2"
            }
          ]
        }
      ]
    },
    {
      id: "features",
      title: "Key Features",
      content: [
        {
          type: "list",
          items: [
            "AI opponents with varying difficulty levels",
            "Minimax algorithm implementation for unbeatable AI",
            "Clean and intuitive user interface",
            "Single-player gameplay against AI"
          ]
        }
      ]
    },
    {
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Unity Engine", "C#", "AI Algorithms", "Minimax Algorithm"]
        }
      ]
    }
  ]
};

export default ticTacToeEN; 