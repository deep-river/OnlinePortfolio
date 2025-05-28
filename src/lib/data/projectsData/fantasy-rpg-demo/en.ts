import { ProjectData } from '@/lib/types/project';
import { featuresMarkdown, mainModulesMarkdown } from './markdown-en';

const fantasyRpgDemoEN: ProjectData = {
  id: "fantasy-rpg-demo",
  title: "Fantasy RPG",
  shortDescription: "A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems, including networking, inventory system, structured UI components, and more.",
  thumbnailImage: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-11.png",
  
  heroMedia: {
    type: 'video',
    src: "https://player.bilibili.com/player.html?isOutside=true&aid=868888473&bvid=BV1aV4y1673Y&cid=1139805795&p=1",
    alt: "Fantasy RPG Demo Video"
  },
  
  overviewDescription: "A multiplayer RPG demo showcasing my expertise in designing and implementing complex gameplay systems, including networking, inventory system, structured UI components, and more.",
  
  projectInfo: {
    genre: "MMORPG",
    engine: "Unity Engine",
    platform: "PC",
    teamsize: "1"
  },

  links: {
    github: "https://github.com/deep-river/mmorpg-demo-template"
  },
  
  mainRole: "Full Stack Game Developer",
  
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
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-01.png",
              alt: "Fantasy RPG Screenshot 1"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-03.png",
              alt: "Fantasy RPG Screenshot 2"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-05.png",
              alt: "Fantasy RPG Screenshot 3"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-06.png",
              alt: "Fantasy RPG Screenshot 4"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-08.png",
              alt: "Fantasy RPG Screenshot 5"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-09.png",
              alt: "Fantasy RPG Screenshot 6"
            },
            {
              type: "image",
              src: "https://raw.githubusercontent.com/deep-river/OnlinePortfolio/refs/heads/main/img/FantasyRPG-screenshot-10.png",
              alt: "Fantasy RPG Screenshot 7"
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
          type: "markdown",
          markdown: featuresMarkdown
        }
      ]
    },
    {
      id: "modules",
      title: "Main Modules",
      content: [
        {
          type: "markdown",
          markdown: mainModulesMarkdown
        }
      ]
    },
    {
      id: "technologies",
      title: "Technologies",
      content: [
        {
          type: "list",
          items: ["Unity", "C#", "Protobuf", "UGUI", "Networking"]
        }
      ],
      hideInDetailPage: true
    }
  ]
};

export default fantasyRpgDemoEN; 