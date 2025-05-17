import type { ProjectData } from '@/lib/types/project';

export const allProjects: ProjectData[] = [
  {
    id: "6",
    title: "Light Cat Run",
    shortDescription: "An adorable puzzle adventure where you use your laser pointer to lure a group of cats, interact with the environment, and plan the perfect escape from roaming monsters.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
      alt: "Light Cat Run Title Screen"
    },
    overviewDescription: "An adorable puzzle adventure where you use your laser pointer to lure a group of cats, interact with the environment, and plan the perfect escape from roaming monsters. An award-winning entry for the 2024 TapTap Spotlight GameJam, celebrated for its Best Visual & Audio.",
    projectInfo: {
      genre: "Puzzle Adventure",
      engine: "Unity",
      platform: "PC",
      teamsize: "3"
    },
    roles: [
      {
        title: "Unity Programmer",
        responsibilities: [
          "Implemented core gameplay mechanics",
          "Developed cat AI and behavior systems",
          "Created environmental interaction systems"
        ]
      }
    ],
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
                src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/LightCatRun-TitleScreen.jpg",
                alt: "Light Cat Run Title Screen"
              }
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
            items: ["Unity", "GameJam", "2D Game"]
          }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "Apocalypse Party on Steam",
    shortDescription: "Apocalypse Party is a 3D top-down action Roguelike game. Embark on a new mission to traverse through the Middle Ages and become the strongest survivor.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
      alt: "Apocalypse Party on Steam"
    },
    overviewDescription: "Apocalypse Party is a 3D top-down action Roguelike game. In this game, you will embark on a new mission to traverse through the Middle Ages and gradually master abilities, and arm yourself to become the strongest survivor through numerous choices.",
    projectInfo: {
      genre: "Action Roguelike",
      engine: "Unreal Engine 5",
      platform: "PC (Steam)",
      teamsize: "5+"
    },
    links: {
      steam: "https://store.steampowered.com/app/2599800/Apocalypse_Party/"
    },
    roles: [
      {
        title: "UE5 Technical Designer",
        responsibilities: [
          "Designed and implemented gameplay systems using UE5 Blueprint",
          "Worked with the Able Ability System for character abilities",
          "Created combat mechanics and progression systems"
        ]
      }
    ],
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
                src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/apocalypse-party-pc-game-steam-cover.jpg",
                alt: "Apocalypse Party Cover"
              }
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
            items: ["Unreal", "Blueprint", "Able Ability System"]
          }
        ]
      }
    ]
  },
  {
    id: "4",
    title: "Project Party by Lilith Games",
    shortDescription: "Project Party is a new life simulation by Lilith Games promising a mix of familiar life sim and in-game socialising with a packaged game editor.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
      alt: "Project Party by Lilith Games"
    },
    overviewDescription: "Project Party(a.k.a. Boom! Party) is the new life simulation just announced by Lilith Games promising a mix of familiar life sim and in-game socialising, it'll also come with a packaged game editor. You'll be able to enjoy experiences ranging from shooter to horror and even more, Lilith promises.",
    projectInfo: {
      genre: "Life Simulation",
      platform: "Mobile, PC",
      teamsize: "10+"
    },
    roles: [
      {
        title: "Technical Designer",
        responsibilities: [
          "Developed gameplay systems using a mix of Python, JavaScript, and Lua",
          "Implemented network programming features for multiplayer functionality",
          "Contributed to the in-game editor design and development"
        ]
      }
    ],
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
                src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/project-party-cover.jpg",
                alt: "Project Party Cover"
              }
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
            items: ["Python", "Javascript", "Lua", "Network Programming"]
          }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "Fantasy RPG Demo",
    shortDescription: "A multiplayer RPG demo showcasing complex gameplay systems, including networking, inventory management, and user interface design.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-11.png",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-11.png",
      alt: "Fantasy RPG Demo Screenshot"
    },
    overviewDescription: "A multiplayer RPG demo showcasing complex gameplay systems, including networking, inventory management, and user interface design.",
    projectInfo: {
      genre: "RPG",
      engine: "Unity",
      platform: "PC",
      teamsize: "2"
    },
    roles: [
      {
        title: "Game Developer & Designer",
        responsibilities: [
          "Designed and implemented core RPG systems",
          "Created networking functionality for multiplayer",
          "Developed inventory management and UI systems"
        ]
      }
    ],
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
                src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-11.png",
                alt: "Fantasy RPG Demo Screenshot"
              }
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
            items: ["Unity", "C#", "UGUI", "Protobuf"]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Grappling Hook Demo",
    shortDescription: "A recreation of the grappling hook mechanics from Sekiro: Shadows Die Twice, featuring dynamic rope physics and realistic hook detection.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
      alt: "Grappling Hook Demo Screenshot"
    },
    overviewDescription: "A recreation of the grappling hook mechanics from Sekiro: Shadows Die Twice, featuring dynamic rope physics and realistic hook detection.",
    projectInfo: {
      genre: "Technical Demo",
      engine: "Unity",
      platform: "PC",
      teamsize: "1"
    },
    links: {
      github: "https://github.com/deep-river/UnityGrapplingDemoLite"
    },
    roles: [
      {
        title: "Technical Designer",
        responsibilities: [
          "Implemented physics-based grappling hook mechanics",
          "Created rope physics and realistic hook detection",
          "Designed and built test environment for the mechanics"
        ]
      }
    ],
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
                src: "https://raw.githubusercontent.com/deep-river/UnityGrapplingDemoLite/d6d14f34a12bddb4e40cd935f8957601b9c23cb3/PreviewImages/Demo02.png",
                alt: "Grappling Hook Demo Screenshot"
              }
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
            items: ["Unity", "C#", "Physics Simulation"]
          }
        ]
      }
    ]
  },
  {
    id: "1",
    title: "Tic-Tac-Toe AI",
    shortDescription: "An implementation of the classic Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable gameplay.",
    thumbnailImage: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
    heroMedia: {
      type: 'image',
      src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo01.png",
      alt: "Tic-Tac-Toe Game Screenshot"
    },
    overviewDescription: "Implemented the Tic-Tac-Toe game with AI opponents of varying difficulty, utilizing algorithms like minimax for unbeatable difficulty level.",
    projectInfo: {
      genre: "Puzzle Game",
      engine: "Unity Engine",
      platform: "PC",
      teamsize: "1"
    },
    links: {
      github: "https://github.com/deep-river/TicTacToePlayableDemo"
    },
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
                alt: "Tic-Tac-Toe Screenshot 1"
              },
              {
                type: "image",
                src: "https://raw.githubusercontent.com/deep-river/TicTacToePlayableDemo/9b7653e07bfb988ed9c80d9d1e827e56d1235192/PreviewImages/Demo02.png",
                alt: "Tic-Tac-Toe Screenshot 2"
              }
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
            items: ["Python", "Minimax Algorithm", "Game AI"]
          }
        ]
      }
    ]
  }
]; 